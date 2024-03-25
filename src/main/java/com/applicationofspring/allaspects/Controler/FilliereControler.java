package com.applicationofspring.allaspects.Controler;

import java.util.List;

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

import com.applicationofspring.allaspects.Service.FilliereService;
import com.applicationofspring.allaspects.Service.RapportService;
import com.applicationofspring.allaspects.Student.Filliere;
import com.applicationofspring.allaspects.Student.Rapport;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FilliereControler {

    @Autowired
    private FilliereService filliereService;

    @Autowired
    private RapportService rapportService;

    @GetMapping(value = "/filliere/{id}")
    public ResponseEntity<Filliere> getFilliere(@PathVariable("id") long id){
        Filliere filliere = filliereService.getFilliere(id);
        return new ResponseEntity<>(filliere,  HttpStatus.OK);
    }

    @GetMapping(value = "/get-fillieres")
    public ResponseEntity<List<Filliere>>  getAllStructures(){
        List<Filliere> fillieres = List.copyOf(filliereService.getAllFillieres());
        return new ResponseEntity<>(fillieres, HttpStatus.OK);
    }

    @GetMapping(value = "/get-rapports-filliere/{nom}")
    public ResponseEntity<List<Rapport>> getRapportsByFilliere(@PathVariable("nom") String nom){
        Filliere filliere = filliereService.getFilliereByNom(nom);
        List<Rapport> rapports = rapportService.getRapportsByFilliere(filliere);
        System.out.println(rapports);
        return new ResponseEntity<>(rapports, HttpStatus.OK);
    }

    @PostMapping(value = "/fillieres")
    public ResponseEntity<HttpStatus> addFilliere(@RequestBody Filliere filliere){
        filliereService.addFilliere(filliere);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/filliere/{id}")
    public ResponseEntity<Filliere> updateFilliere(@PathVariable("id") long id, @RequestBody Filliere filliere){
        filliereService.updateFilliere(filliere, id);
        return new ResponseEntity<>(filliere, HttpStatus.OK);
    }

    @DeleteMapping(value = "/filliere/{id}")
    public ResponseEntity<HttpStatus> deleteFilliere(@PathVariable("id") long id){
        filliereService.deleteFilliere(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
