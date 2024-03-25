package com.applicationofspring.allaspects.Controler;

import java.util.List;
import java.util.Map;

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

import com.applicationofspring.allaspects.Service.StructureService;
import com.applicationofspring.allaspects.Student.Structure;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StructureControler {
    
    @Autowired
    private StructureService structureService;

    @GetMapping(value = "/structure/{id}")
    public ResponseEntity<Structure> getStructure(@PathVariable("id") long id){
        Structure structure = structureService.getStructure(id);
        return new ResponseEntity<>(structure,  HttpStatus.OK);
    }

    @GetMapping(value = "/get-structures")
    public ResponseEntity<List<Structure>>  getAllStructures(){
        List<Structure> structures = List.copyOf(structureService.getAllStructure());
        return new ResponseEntity<>(structures, HttpStatus.OK);
    }

    @PostMapping(value = "/structures")
    public ResponseEntity<HttpStatus> addStructure(@RequestBody Map<String, String> requestParams){

        String nom = requestParams.get("nom");
        String adresse = requestParams.get("adresse");
        String numero = requestParams.get("numero");
        String email = requestParams.get("email");
        String description = requestParams.get("description");

        Structure structure = new Structure();

        structure.setNom(nom);
        structure.setAdresse(adresse);
        structure.setNumero(numero);
        structure.setEmail(email);
        structure.setDescription(description);

        structureService.addStructure(structure);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/structure/{id}")
    public ResponseEntity<Structure> updateStructure(@PathVariable("id") long id, @RequestBody Structure structure){
        structureService.updateStructure(structure, id);
        return new ResponseEntity<>(structure, HttpStatus.OK);
    }

    @DeleteMapping(value = "/structure/{id}")
    public ResponseEntity<HttpStatus> deleteStructure(@PathVariable("id") long id){
        structureService.deleteStructure(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping(value = "/delete-structure/{nom}")
    public ResponseEntity<HttpStatus> deleteStructureByNom(@PathVariable("nom") String nom){
        structureService.deleteStructureByNom(nom);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping(value = "/number-structures")
    public ResponseEntity<Long> nmbOfStructures(){
        long count = structureService.nmbOfStructure();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

}
