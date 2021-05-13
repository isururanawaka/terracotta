package edu.iu.terracotta.controller.app;

import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.model.app.Condition;
import edu.iu.terracotta.model.app.dto.ConditionDto;
import edu.iu.terracotta.model.oauth2.SecurityInfo;
import edu.iu.terracotta.service.app.APIJWTService;
import edu.iu.terracotta.service.app.ConditionService;
import edu.iu.terracotta.service.app.ExperimentService;
import edu.iu.terracotta.utils.TextConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.http.HttpHeaders;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

@Controller
@RequestMapping(value = ConditionController.REQUEST_ROOT, produces = MediaType.APPLICATION_JSON_VALUE)
public class ConditionController {

    static final Logger log = LoggerFactory.getLogger(ConditionController.class);
    static final String REQUEST_ROOT = "api/experiments";

    @Autowired
    ConditionService conditionService;

    @Autowired
    APIJWTService apijwtService;

    @Autowired
    ExperimentService experimentService;

    @RequestMapping(value = "/{experiment_id}/conditions/", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public ResponseEntity<List<ConditionDto>> allConditionsByExperiment(@PathVariable("experiment_id") Long experimentId, HttpServletRequest req) {

        SecurityInfo securityInfo = apijwtService.extractValues(req,false);
        if(securityInfo == null){
            log.error(TextConstants.BAD_TOKEN);
            return new ResponseEntity(TextConstants.BAD_TOKEN, HttpStatus.UNAUTHORIZED);
        }

        if(apijwtService.isLearnerOrHigher(securityInfo)) {
            List<Condition> conditionList =
                    conditionService.findAllByExperimentId(experimentId);
            if(conditionList.isEmpty()){
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            }
            List<ConditionDto> conditionDtos = new ArrayList<>();
            for(Condition condition : conditionList) {
                conditionDtos.add(conditionService.toDto(condition));
            }
            return new ResponseEntity<>(conditionDtos, HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
    }

    @RequestMapping(value = "/{experiment_id}/conditions/{id}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public ResponseEntity<ConditionDto> getCondition(@PathVariable("experiment_id") long experimentId, @PathVariable("id") long conditionId, HttpServletRequest req) {

        SecurityInfo securityInfo = apijwtService.extractValues(req,false);
        if(securityInfo==null){
            log.error(TextConstants.BAD_TOKEN);
            return new ResponseEntity(TextConstants.BAD_TOKEN, HttpStatus.UNAUTHORIZED);
        }

        if(apijwtService.isLearnerOrHigher(securityInfo)){
            Optional<Condition> condition = conditionService.findOneByConditionId(conditionId);

            if(!condition.isPresent()) {
                log.error("condition {} in experiment {} not found.", conditionId, experimentId);
                return new ResponseEntity("condition " + conditionId + " in experiment " + experimentId + TextConstants.NOT_FOUND_SUFFIX, HttpStatus.NOT_FOUND);
            } else {
                ConditionDto conditionDto = conditionService.toDto(condition.get());
                return new ResponseEntity<>(conditionDto, HttpStatus.OK);
            }
        }else {
            return new ResponseEntity(TextConstants.NOT_ENOUGH_PERMISSIONS, HttpStatus.UNAUTHORIZED);
        }
    }

    @RequestMapping(value = "/{experiment_id}/conditions/", method = RequestMethod.POST)
    public ResponseEntity<ConditionDto> postCondition(@PathVariable("experiment_id") Long experimentId, @RequestBody ConditionDto conditionDto, UriComponentsBuilder ucBuilder, HttpServletRequest req) {

        log.info("Creating Condition : {}", conditionDto);
        SecurityInfo securityInfo = apijwtService.extractValues(req,false);
        if(securityInfo==null){
            log.error(TextConstants.BAD_TOKEN);
            return new ResponseEntity(TextConstants.BAD_TOKEN, HttpStatus.UNAUTHORIZED);
        }

        if (!experimentService.experimentBelongsToDeploymentAndCourse(experimentId, securityInfo.getPlatformDeploymentId(), securityInfo.getContextId())){
            return new ResponseEntity(TextConstants.EXPERIMENT_NOT_MATCHING , HttpStatus.UNAUTHORIZED);
        }
        if(apijwtService.isInstructorOrHigher(securityInfo)) {
            if (conditionDto.getConditionId() != null){
                log.error(TextConstants.ID_IN_POST_ERROR);
                return new ResponseEntity(TextConstants.ID_IN_POST_ERROR, HttpStatus.CONFLICT);
            }

            conditionDto.setExperimentId(experimentId);
            Condition condition = null;
            try{
                condition = conditionService.fromDto(conditionDto);
            } catch (DataServiceException e) {
                return new ResponseEntity("Unable to create condition:" + e.getMessage(), HttpStatus.BAD_REQUEST);
            }

            Condition conditionSaved = conditionService.save(condition);
            ConditionDto returnedDto = conditionService.toDto(conditionSaved);

            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(ucBuilder.path("/api/experiment/{experiment_id}/conditions/{id}").buildAndExpand(condition.getExperiment().getExperimentId(), condition.getConditionId()).toUri());
            return new ResponseEntity<>(returnedDto, headers, HttpStatus.CREATED);
        }else {
            return new ResponseEntity(TextConstants.NOT_ENOUGH_PERMISSIONS, HttpStatus.UNAUTHORIZED);
        }
    }

    @RequestMapping(value = "/{experiment_id}/conditions/{condition_id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateCondition(@PathVariable("experiment_id") Long experimentId, @PathVariable("condition_id") Long id, @RequestBody ConditionDto conditionDto, HttpServletRequest req) {

        log.info("Updating condition with id {}", id);
        SecurityInfo securityInfo = apijwtService.extractValues(req,false);
        if(securityInfo==null){
            log.error(TextConstants.BAD_TOKEN);
            return new ResponseEntity(TextConstants.BAD_TOKEN, HttpStatus.UNAUTHORIZED);
        }

        if (!experimentService.experimentBelongsToDeploymentAndCourse(experimentId, securityInfo.getPlatformDeploymentId(), securityInfo.getContextId())){
            return new ResponseEntity(TextConstants.EXPERIMENT_NOT_MATCHING , HttpStatus.UNAUTHORIZED);
        }
        if(!conditionService.conditionBelongsToExperiment(experimentId, id)) {
            return new ResponseEntity("No permission to change this condition", HttpStatus.UNAUTHORIZED);
        }
        if(apijwtService.isInstructorOrHigher(securityInfo)) {
            Optional<Condition> conditionSearchResult = conditionService.findById(id);

            if(!conditionSearchResult.isPresent()) {
                log.error("Unable to update. Condition with id {} not found.", id);
                return new ResponseEntity("Unable to update, Condition with id " + id + TextConstants.NOT_FOUND_SUFFIX, HttpStatus.NOT_FOUND);
            }
            Condition conditionToChange = conditionSearchResult.get();
            conditionToChange.setName(conditionDto.getName());
            conditionToChange.setDefaultCondition(conditionDto.getDefaultCondition());
            conditionToChange.setDistributionPct((conditionDto.getDistributionPct()));

            conditionService.saveAndFlush(conditionToChange);
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity(TextConstants.NOT_ENOUGH_PERMISSIONS, HttpStatus.UNAUTHORIZED);
        }
    }

    @RequestMapping(value = "/{experiment_id}/conditions/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteExperiment(@PathVariable("experiment_id") Long experimentId, @PathVariable("id") Long id, HttpServletRequest req) {
        SecurityInfo securityInfo = apijwtService.extractValues(req,false);
        if(securityInfo==null){
            log.error(TextConstants.BAD_TOKEN);
            return new ResponseEntity(TextConstants.BAD_TOKEN, HttpStatus.UNAUTHORIZED);
        }
        if (!experimentService.experimentBelongsToDeploymentAndCourse(experimentId, securityInfo.getPlatformDeploymentId(), securityInfo.getContextId())){
            return new ResponseEntity(TextConstants.EXPERIMENT_NOT_MATCHING , HttpStatus.UNAUTHORIZED);
        }
        if(!conditionService.conditionBelongsToExperiment(experimentId, id)) {
            return new ResponseEntity("No permission to delete this experiment", HttpStatus.UNAUTHORIZED);
        }
        if(apijwtService.isInstructorOrHigher(securityInfo)) {
            try {
                conditionService.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            } catch (EmptyResultDataAccessException ex) {
                log.error(ex.getMessage());
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else{
            return new ResponseEntity(TextConstants.NOT_ENOUGH_PERMISSIONS, HttpStatus.UNAUTHORIZED);
        }
    }
}