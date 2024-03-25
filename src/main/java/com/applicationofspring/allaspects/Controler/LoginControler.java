package com.applicationofspring.allaspects.Controler;

import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.applicationofspring.allaspects.Service.AdminService;
import com.applicationofspring.allaspects.Service.EncadrantService;
import com.applicationofspring.allaspects.Service.EtudiantService;
import com.applicationofspring.allaspects.Student.Admin;
import com.applicationofspring.allaspects.Student.Encadrant;
import com.applicationofspring.allaspects.Student.Etudiant;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginControler {

    @Autowired
    private EtudiantService etudiantService;

    @Autowired
    private EncadrantService encardrantService;

    @Autowired
    private AdminService adminService;

    @PostMapping(value="/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> requestParams, HttpSession session){
        
        String email = requestParams.get("email");
        String password = requestParams.get("password");

        if(etudiantService.etudiantAuthenticate(email, password)){
            Etudiant etudiant = etudiantService.getEtudiantByEmail(email);
            Long etudiantId = etudiant.getIdE();

            session.setAttribute("sessionId", etudiantId.toString());

            Map<String, String> response = new HashMap<>();
            response.put("userType", "etudiant");
            response.put("sessionId", etudiantId.toString());

            return ResponseEntity.ok(response);

        }else if(encardrantService.encadrantAuthenticate(email, password)){
            Encadrant encardrant = encardrantService.getEncadrantByEmail(email);
            Long encadrantId = encardrant.getIdP();

            session.setAttribute("sessionId", encadrantId.toString());

            Map<String, String> response = new HashMap<>();
            response.put("userType", "encadrant");
            response.put("sessionId", encadrantId.toString());

            return ResponseEntity.ok(response);
        }else if(adminService.adminAuthenticate(email, password)){
            Admin admin = adminService.getAdminByEmail(email);
            Long adminId = admin.getIdA();

            session.setAttribute("sessionId", adminId.toString());

            Map<String, String> response = new HashMap<>();
            response.put("userType", "admin");
            response.put("sessionId", adminId.toString());

            return ResponseEntity.ok(response);
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }    
}
