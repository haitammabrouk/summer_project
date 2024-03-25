package com.applicationofspring.allaspects.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.applicationofspring.allaspects.Repository.FilliereRepository;
import com.applicationofspring.allaspects.Student.Filliere;

@Service
public class FilliereService {

    @Autowired
    private FilliereRepository filliereRepository;

    public Filliere getFilliere(long id){
        Filliere filliere = filliereRepository.findById(id).get();
        return filliere;
    }

    public Filliere addFilliere(Filliere filliere){
        filliereRepository.save(filliere);
        return filliere;
    }

    public Filliere updateFilliere(Filliere filliere, long id){
        Filliere fil = this.getFilliere(id);
        fil.setNom(filliere.getNom());
        return filliereRepository.save(fil);
    }
    
     public Filliere deleteFilliere(long id){
        Filliere filliere = this.getFilliere(id);
        filliereRepository.delete(filliere);
        return filliere;
    }

    public void saveFilliere(Filliere fil){
        filliereRepository.save(fil);
    }

    public List<Filliere> getAllFillieres(){
        return (List<Filliere>)filliereRepository.findAll();
    }

    public Filliere getFilliereByNom(String nom){
        return filliereRepository.findByNom(nom);
    }
    
}
