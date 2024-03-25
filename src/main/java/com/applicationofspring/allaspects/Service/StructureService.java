package com.applicationofspring.allaspects.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.applicationofspring.allaspects.Repository.StructureRepository;
import com.applicationofspring.allaspects.Student.Structure;

import java.util.List;

@Service
public class StructureService {

    @Autowired
    private StructureRepository structureRepository;

    public Structure getStructure(long id){
        Structure structure = structureRepository.findById(id).get();
        return structure;
    }

    public Structure addStructure(Structure structure){
        structureRepository.save(structure);
        return structure;
    }

    public Structure updateStructure(Structure structure, long id){
        Structure st = this.getStructure(id);
        st.setId(structure.getId());
        st.setAdresse(structure.getAdresse());
        st.setNom(structure.getNom());
        st.setEmail(structure.getEmail());
        st.setNumero(structure.getNumero());
        st.setDescription(structure.getDescription());
        return structureRepository.save(st);
    }

    public void deleteStructure(long id){
        structureRepository.deleteById(id);
    }

    public List<Structure> getAllStructure(){
        return (List<Structure>)structureRepository.findAll();
    }

    public void deleteStructureByNom(String nom){
        Structure structure = structureRepository.findByNom(nom);
        long id = structure.getId();
        this.deleteStructure(id);
    }

    public long nmbOfStructure(){
        return structureRepository.count();
    }
    
}
