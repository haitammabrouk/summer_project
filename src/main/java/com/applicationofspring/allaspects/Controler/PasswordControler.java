package com.applicationofspring.allaspects.Controler;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.applicationofspring.allaspects.Service.EmailService;
import com.applicationofspring.allaspects.Service.EtudiantService;
import com.applicationofspring.allaspects.Student.Etudiant;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PasswordControler {

    @Autowired
    private EtudiantService etudiantService;

    @Autowired
    private EmailService emailService;

    @PostMapping(value = "/reset")
    public ResponseEntity<HttpStatus> processForgotPasswordForm(@RequestParam Map<String, String> requestParams){
     
        Etudiant etd = etudiantService.getEtudiantByEmail(requestParams.get("email"));
        

        if(etd == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            System.out.println("Etudiant found");
            etd.setToken(etudiantService.generateEtudiantToken());
            etudiantService.saveEtudiant(etd);

            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(requestParams.get("email"));
            mail.setSubject("Password Reset");
            mail.setText("to reset your password click the link bellow \n" + 
            "http://localhost:3000/reseting?token="+etd.getToken());

            emailService.sendEmail(mail);
            System.out.println("email has been sent succefully");

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping(value = "/reseting")
    public ResponseEntity<HttpStatus> displayResetPasswordPage(@RequestParam String token){
        Etudiant etd = etudiantService.findEtudiantByToken(token);
        System.out.println(etd);

        if(etd == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    
    @PostMapping(value="/reseting")
    public ResponseEntity<HttpStatus> setNewPassword(@RequestParam Map<String, String> requestParams ){
        System.out.println(requestParams.get("token"));
        Etudiant etudiant = etudiantService.findEtudiantByToken(requestParams.get("token"));

        if(etudiant == null || requestParams.get("token") == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            etudiant.setToken(null);
            etudiant.setPassword(requestParams.get("password"));
            etudiantService.saveEtudiant(etudiant);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
