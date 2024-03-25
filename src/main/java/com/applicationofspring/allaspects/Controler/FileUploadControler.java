package com.applicationofspring.allaspects.Controler;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.applicationofspring.allaspects.Service.FileUploadService;

@RestController
public class FileUploadControler {

    @Autowired
    private FileUploadService fileUploadService;

    @PostMapping(value = "/upload")
    public void uploadFile(@RequestParam("file") MultipartFile file) throws IllegalStateException, IOException{
        fileUploadService.uploadFile(file);
    }
    
}
