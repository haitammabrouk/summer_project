package com.applicationofspring.allaspects.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.applicationofspring.allaspects.Repository.EncadrantRepository;
import com.applicationofspring.allaspects.Student.Encadrant;

@Service
public class EncadrantService {

    @Autowired
    private EncadrantRepository encadrantRepository;

    public Encadrant getEncadrant(long id){
        Encadrant encadrant = encadrantRepository.findById(id).get();
        return encadrant;
    }

    public Encadrant getEncadrantByEmail(String email){
        return encadrantRepository.getEncadrantByEmail(email);
    }

    public Encadrant addEncadrant(Encadrant encadrant){
        encadrantRepository.save(encadrant);
        return encadrant;
    }

    public Encadrant updateEncadrant(Encadrant encadrant, long id){
        Encadrant end = this.getEncadrant(id);
        end.setNom(encadrant.getNom());
        end.setPrenom(encadrant.getPrenom());
        end.setEmail(encadrant.getEmail());
        end.setPassword(encadrant.getPassword());
        return encadrantRepository.save(end);
    }
    
     public Encadrant deleteEncadrant(long id){
        Encadrant encadrant = this.getEncadrant(id);
        encadrantRepository.delete(encadrant);
        return encadrant;
    }

    public void saveEncadrant(Encadrant end){
        encadrantRepository.save(end);
    }

    public List<Encadrant> getAllEncadrants(){
        return (List<Encadrant>)encadrantRepository.findAll();
    }

    public Encadrant getEncadrantByNom(String nom){
        return encadrantRepository.findByNom(nom);
    }

    public boolean encadrantAuthenticate(String email, String password){
        Encadrant encadrant = encadrantRepository.getEncadrantByEmail(email);
        if(encadrant != null){
            if(email.equals(encadrant.getEmail()) && password.equals(encadrant.getPassword())){
                return true;
            }else{
                return false;
            }
        }
        return false;
    }

    public Encadrant findEncadrantByToken(String token){
        return encadrantRepository.findByToken(token);
    }

    public String generateEtudiantToken(){
        return UUID.randomUUID().toString();
    }
}
