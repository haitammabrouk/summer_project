package com.applicationofspring.allaspects.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.applicationofspring.allaspects.Repository.EtudiantRepository;
import com.applicationofspring.allaspects.Repository.FilliereRepository;
import com.applicationofspring.allaspects.Student.Encadrant;
import com.applicationofspring.allaspects.Student.Etudiant;
import com.applicationofspring.allaspects.Student.Filliere;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    @Autowired
    private FilliereRepository filliereRepository;

    public Etudiant getEtudiant(long id){
        Etudiant etudiant = etudiantRepository.findById(id).get();
        return etudiant;
    }

    public Etudiant getEtudiantByEmail(String email){
        return etudiantRepository.getEtudiantByEmail(email);
    }

    public Etudiant addEtudiant(Etudiant etudiant){
        etudiantRepository.save(etudiant);
        return etudiant;
    }

    public Etudiant updateEtudiant(Etudiant etudiant, long id){
        Etudiant etd = this.getEtudiant(id);
        etd.setNom(etudiant.getNom());
        etd.setPrenom(etudiant.getPrenom());
        etd.setFilliere(etudiant.getFilliere());
        etd.setEmail(etudiant.getEmail());
        etd.setPassword(etudiant.getPassword());
        etd.setEncadrant(etudiant.getEncadrant());
        etd.setGenre(etudiant.getGenre());
        return etudiantRepository.save(etd);
    }

    public Etudiant deleteEtudiant(long id){
        Etudiant etudiant = this.getEtudiant(id);
        etudiantRepository.delete(etudiant);
        return etudiant;
    }

    public boolean etudiantAuthenticate(String email, String password){
        Etudiant etudiant = etudiantRepository.getEtudiantByEmail(email);
        if(etudiant != null){
            if(email.equals(etudiant.getEmail()) && password.equals(etudiant.getPassword())){
                return true;
            }
            return false;
        }
        
        return false;
    }

    public Etudiant findEtudiantByToken(String token){
        return etudiantRepository.findByToken(token);
    }

    public String generateEtudiantToken(){
        return UUID.randomUUID().toString();
    }

    public void saveEtudiant(Etudiant etd){
        etudiantRepository.save(etd);
    }

    public List<Etudiant> getAllEtudiants(){
        return (List<Etudiant>) etudiantRepository.findAll();
    }
    
    public Filliere getFilliereByEtudiantId(long etudiantId){
        return filliereRepository.findFilliereByEtudiantsIdE(etudiantId);
    }

    public List<Etudiant> getEtudiantsByEncadrant(Encadrant encadrant){
        return etudiantRepository.findByEncadrant(encadrant);
    }

    public long nbrOfEtudiants(){
        return etudiantRepository.count();
    }
}
