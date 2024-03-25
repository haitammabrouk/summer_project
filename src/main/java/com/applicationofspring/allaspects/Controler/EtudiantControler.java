package com.applicationofspring.allaspects.Controler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.applicationofspring.allaspects.DTO.EtudiantDTO;
import com.applicationofspring.allaspects.Service.EncadrantService;
import com.applicationofspring.allaspects.Service.EtudiantService;
import com.applicationofspring.allaspects.Service.FilliereService;
import com.applicationofspring.allaspects.Student.Encadrant;
import com.applicationofspring.allaspects.Student.Etudiant;
import com.applicationofspring.allaspects.Student.Filliere;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EtudiantControler {

    @Autowired
    private EtudiantService etudiantService;

    @Autowired
    private FilliereService filliereService;

    @Autowired
    private EncadrantService encadrantService;

    @GetMapping(value = "/etudiant/{id}")
    public ResponseEntity<EtudiantDTO> getEtudiant(@PathVariable("id") long id){
        Etudiant etudiant = etudiantService.getEtudiant(id);
        EtudiantDTO etudiantDTO = new EtudiantDTO(etudiant);
        return new ResponseEntity<>(etudiantDTO,  HttpStatus.OK);
    }

    @GetMapping(value = "/get-etudiants")
    public ResponseEntity<List<EtudiantDTO>> getAllEtudiants(){
        List<Etudiant> etudiants = etudiantService.getAllEtudiants();

        List<EtudiantDTO> etudiantDTOs = etudiants.stream()
            .map(EtudiantDTO::new)
            .collect(Collectors.toList());

        return new ResponseEntity<>(etudiantDTOs,  HttpStatus.OK);
    }

    @GetMapping(value = "/get-etudiants-encadrant/{id}")
    public ResponseEntity<List<EtudiantDTO>> getEtudiantsByEncadrant(@PathVariable("id") String id){
        Long encadrantId = Long.parseLong(id);
        Encadrant encadrant = encadrantService.getEncadrant(encadrantId);
        List<Etudiant> etudiants = List.copyOf(etudiantService.getEtudiantsByEncadrant(encadrant));

        List<EtudiantDTO> etudiantDTOs = etudiants.stream()
            .map(EtudiantDTO::new)
            .collect(Collectors.toList());

        return new ResponseEntity<>(etudiantDTOs,  HttpStatus.OK);
    }

    @PostMapping(value = "/etudiants")
    public ResponseEntity<HttpStatus> addEtudiant(@RequestBody Map<String, String> requestParams){
        String nom = requestParams.get("nom");
        String prenom = requestParams.get("prenom");
        String email = requestParams.get("email");
        String password = requestParams.get("password");
        String genre = requestParams.get("genre");

        String nomFilliere = requestParams.get("filliere");
        Filliere filliere = filliereService.getFilliereByNom(nomFilliere);

        String nomEncadrant = requestParams.get("encadrant");
        Encadrant encadrant = encadrantService.getEncadrantByNom(nomEncadrant);

        Etudiant etudiant = new Etudiant();
        etudiant.setNom(nom);
        etudiant.setPrenom(prenom);
        etudiant.setEmail(email);
        etudiant.setPassword(password);
        etudiant.setGenre(genre);

        etudiant.setFilliere(filliere);

        etudiant.setEncadrant(encadrant);

        etudiantService.addEtudiant(etudiant);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/etudiant/{id}")
    public ResponseEntity<Etudiant> updateEtudiant(@PathVariable("id") long id, @RequestBody Map<String, String> requestParams){
        Etudiant etd = new Etudiant();
        etd.setNom(requestParams.get("nom"));
        etd.setPrenom(requestParams.get("prenom"));
        etd.setEmail(requestParams.get("email"));
        etd.setPassword(requestParams.get("password"));

        String nomFilliere = requestParams.get("filliere");
        Filliere filliere = filliereService.getFilliereByNom(nomFilliere);

        String nomEncadrant = requestParams.get("encadrant");
        Encadrant encadrant = encadrantService.getEncadrantByNom(nomEncadrant);

        etd.setFilliere(filliere);
        etd.setEncadrant(encadrant);
        
        etudiantService.updateEtudiant(etd, id);
        return new ResponseEntity<>(etd, HttpStatus.OK);
    }

    @DeleteMapping(value = "/etudiant/{id}")
    public ResponseEntity<HttpStatus> deleteEtudiant(@PathVariable("id") long id){
        etudiantService.deleteEtudiant(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(value = "/number-etudiants")
    public ResponseEntity<Long> nbrOfEtudiants(){
        long count = etudiantService.nbrOfEtudiants();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
