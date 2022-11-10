package edu.iu.terracotta.controller.app;

import com.google.common.net.HttpHeaders;
import edu.iu.terracotta.exceptions.BadTokenException;
import edu.iu.terracotta.exceptions.ExperimentNotMatchingException;
import edu.iu.terracotta.service.app.APIJWTService;
import edu.iu.terracotta.service.app.ExperimentService;
import edu.iu.terracotta.service.app.FileStorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@Controller
@RequestMapping(value = FileDownloadController.REQUEST_ROOT)
public class FileDownloadController {

    static final String REQUEST_ROOT = "files";
    private static final Logger log = LoggerFactory.getLogger(FileDownloadController.class);

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    APIJWTService apijwtService;

    @Autowired
    ExperimentService experimentService;


    @RequestMapping(value = "{file_id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Resource> downloadFile(@PathVariable("file_id") String fileId,
                                                 @RequestParam(name = "token") String token,
                                                 HttpServletRequest req)
            throws ExperimentNotMatchingException, BadTokenException {

        if (apijwtService.validateFileToken(token, fileId)) {
            Resource resource = fileStorageService.getFileAsResource(fileId);
            String contentType = null;
            try {
                contentType = req.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
            } catch (IOException ex) {
                log.error("Could not determine file type.");
            }
            if (contentType == null) {
                contentType = "application/octet-stream";
            }
            return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                    .body(resource);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @RequestMapping(value = "/download", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Resource> downloadFileFromURI(@RequestParam(name = "file_uri") String file_uri,
                                                        HttpServletRequest req)
            throws ExperimentNotMatchingException, BadTokenException, IOException {

        File file = fileStorageService.
                downloadFilesFromURI(file_uri, FileStorageService.StorageType.AWS);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
        return ResponseEntity.ok()
                .contentLength(file.length())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-disposition", "attachment; filename=\"" + file.getName() + "\"")
                .body(resource);
    }

}