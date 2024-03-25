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

import com.applicationofspring.allaspects.Service.EncadrantService;
import com.applicationofspring.allaspects.Student.Encadrant;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EncardrantControler {

    @Autowired
    private EncadrantService encadrantService;

    @GetMapping(value = "/encadrant/{id}")
    public ResponseEntity<Encadrant> getEncadrant(@PathVariable("id") long id){
        Encadrant encadrant = encadrantService.getEncadrant(id);
        return new ResponseEntity<>(encadrant,  HttpStatus.OK);
    }

    @GetMapping(value = "/get-encadrants")
    public ResponseEntity<List<Encadrant>>  getAllStructures(){
        List<Encadrant> encadrants = List.copyOf(encadrantService.getAllEncadrants());
        return new ResponseEntity<>(encadrants, HttpStatus.OK);
    }

    @PostMapping(value = "/encadrants")
    public ResponseEntity<HttpStatus> addEncadrant(@RequestBody Encadrant encadrant){
        encadrantService.addEncadrant(encadrant);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/encadrant/{id}")
    public ResponseEntity<Encadrant> updateEncadrant(@PathVariable("id") long id, @RequestBody Encadrant encadrant){
        encadrantService.updateEncadrant(encadrant, id);
        return new ResponseEntity<>(encadrant, HttpStatus.OK);
    }

    @DeleteMapping(value = "/encadrant/{id}")
    public ResponseEntity<HttpStatus> deleteEncadrant(@PathVariable("id") long id){
        encadrantService.deleteEncadrant(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
