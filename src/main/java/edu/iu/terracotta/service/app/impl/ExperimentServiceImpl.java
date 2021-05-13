package edu.iu.terracotta.service.app.impl;

import edu.iu.terracotta.exceptions.DataServiceException;
import edu.iu.terracotta.model.LtiContextEntity;
import edu.iu.terracotta.model.PlatformDeployment;
import edu.iu.terracotta.model.app.Condition;
import edu.iu.terracotta.model.app.Experiment;
import edu.iu.terracotta.model.app.Exposure;
import edu.iu.terracotta.model.app.dto.ConditionDto;
import edu.iu.terracotta.model.app.dto.ExperimentDto;
import edu.iu.terracotta.model.app.dto.ExposureDto;
import edu.iu.terracotta.model.app.enumerator.DistributionTypes;
import edu.iu.terracotta.model.app.enumerator.ExposureTypes;
import edu.iu.terracotta.model.app.enumerator.ParticipationTypes;
import edu.iu.terracotta.model.oauth2.SecurityInfo;
import edu.iu.terracotta.repository.AllRepositories;
import edu.iu.terracotta.service.app.ConditionService;
import edu.iu.terracotta.service.app.ExperimentService;
import edu.iu.terracotta.service.app.ExposureService;
import org.apache.commons.lang3.EnumUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ExperimentServiceImpl implements ExperimentService {


    @Autowired
    AllRepositories allRepositories;

    @Autowired
    ConditionService conditionService;

    @Autowired
    ExposureService exposureService;

    @Override
    public List<Experiment> findAllByDeploymentIdAndCourseId(long deploymentId, long contextId) {
        return allRepositories.experimentRepository.findByPlatformDeployment_KeyIdAndLtiContextEntity_ContextId(deploymentId,contextId);
    }

    @Override
    public Optional<Experiment> findOneByDeploymentIdAndCourseIdAndExperimentId(long deploymentId, long contextId, long id) {
        return allRepositories.experimentRepository.findByPlatformDeployment_KeyIdAndLtiContextEntity_ContextIdAndExperimentId(deploymentId,contextId, id);

    }

    @Override

    public ExperimentDto toDto(Experiment experiment, boolean conditions, boolean exposures) {

        ExperimentDto experimentDto = new ExperimentDto();
        experimentDto.setExperimentId(experiment.getExperimentId());
        experimentDto.setContextId(experiment.getLtiContextEntity().getContextId());
        experimentDto.setPlatformDeploymentId(experiment.getPlatformDeployment().getKeyId());
        experimentDto.setTitle(experiment.getTitle());
        experimentDto.setDescription(experiment.getDescription());
        experimentDto.setExposureType(experiment.getExposureType().name());
        experimentDto.setParticipationType(experiment.getParticipationType().name());
        experimentDto.setDistributionType(experiment.getDistributionType().name());
        experimentDto.setStarted(experiment.getStarted());
        experimentDto.setCreatedAt(experiment.getCreatedAt());
        experimentDto.setUpdatedAt(experiment.getUpdatedAt());
        List<ConditionDto> conditionDtoList = new ArrayList<>();
        if (conditions){
            //TODO, add sort if needed
            List<Condition> conditionList = allRepositories.conditionRepository.findByExperiment_ExperimentId(experiment.getExperimentId());
            for (Condition condition:conditionList){
                ConditionDto conditionDto = conditionService.toDto(condition);
                conditionDtoList.add(conditionDto);
            }
        }
        experimentDto.setConditions(conditionDtoList);

        List<ExposureDto> exposureDtoList = new ArrayList<>();
        if(exposures){
            //TODO add sort if needed
            List<Exposure> exposureList = allRepositories.exposureRepository.findByExperiment_ExperimentId(experiment.getExperimentId());
            for(Exposure exposure : exposureList) {
                ExposureDto exposureDto = exposureService.toDto(exposure);
                exposureDtoList.add(exposureDto);
            }
        }
        experimentDto.setExposures(exposureDtoList);
      
        return experimentDto;
    }

    @Override
    public Experiment fromDto(ExperimentDto experimentDto) throws DataServiceException { //TODO add booleans to add extra elements

        //TEST and check if nulls behave correctly
        Experiment experiment = new Experiment();
        experiment.setExperimentId(experimentDto.getExperimentId());
        Optional<LtiContextEntity> ltiContextEntity = allRepositories.contexts.findById(experimentDto.getContextId());
        if (ltiContextEntity.isPresent()) {
            experiment.setLtiContextEntity(ltiContextEntity.get());
        } else {
            throw new DataServiceException("The course defined in the experiment dto does not exist");
        }
        Optional<PlatformDeployment> platformDeployment = allRepositories.platformDeploymentRepository.findById(experimentDto.getPlatformDeploymentId());
        if (platformDeployment.isPresent()) {
            experiment.setPlatformDeployment(platformDeployment.get());
        }else {
            throw new DataServiceException("The platform deployment defined in the experiment dto does not exist");
        }
        experiment.setTitle(experimentDto.getTitle());
        experiment.setDescription(experimentDto.getDescription());
        //TODO, ask ben what should be the default types for an experiment.
        experiment.setExposureType(EnumUtils.getEnum(ExposureTypes.class, experimentDto.getExposureType(), ExposureTypes.BETWEEN));
        experiment.setParticipationType(EnumUtils.getEnum(ParticipationTypes.class, experimentDto.getParticipationType(), ParticipationTypes.AUTO));
        experiment.setDistributionType(EnumUtils.getEnum(DistributionTypes.class, experimentDto.getDistributionType(), DistributionTypes.EVEN));
        experiment.setStarted(experimentDto.getStarted());

        return experiment;
    }

    @Override
    public Experiment save(Experiment experiment) {
        return allRepositories.experimentRepository.save(experiment);
    }

    @Override
    public Optional<Experiment> findById(Long id) {
        return allRepositories.experimentRepository.findById(id);
    }

    @Override
    public void saveAndFlush(Experiment experimentToChange) {
        allRepositories.experimentRepository.saveAndFlush(experimentToChange);
    }

    @Override
    public void deleteById(Long id) throws EmptyResultDataAccessException {
        allRepositories.experimentRepository.deleteById(id);
    }

    @Override
    public ExperimentDto fillContextInfo(ExperimentDto experimentDto, SecurityInfo securityInfo) {
        //Doing this ALWAYS for security reasons. In this way we will never edit or create experiments on other context
        //than the one in the token.
        experimentDto.setContextId(securityInfo.getContextId());
        experimentDto.setPlatformDeploymentId(securityInfo.getPlatformDeploymentId());
        return experimentDto;
    }

    @Override
    public boolean experimentBelongsToDeploymentAndCourse(Long experimentId, Long platformDeploymentId, Long contextId){
        return allRepositories.experimentRepository.existsByExperimentIdAndPlatformDeployment_KeyIdAndLtiContextEntity_ContextId(experimentId, platformDeploymentId, contextId);
    }
}