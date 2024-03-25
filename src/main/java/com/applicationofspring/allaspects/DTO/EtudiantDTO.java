package com.applicationofspring.allaspects.DTO;

import com.applicationofspring.allaspects.Student.Etudiant;

import lombok.Data;

@Data
public class EtudiantDTO {

    private long idE;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String nomFilliere;
    private String nomEncadrant;
    private String nomStructure;

    public EtudiantDTO(Etudiant etudiant) {
        this.idE = etudiant.getIdE();
        this.nom = etudiant.getNom();
        this.prenom = etudiant.getPrenom();
        this.email = etudiant.getEmail();
        this.password = etudiant.getPassword();
        
        if(etudiant.getFilliere() != null){
            this.nomFilliere = etudiant.getFilliere().getNom();
        }else{
            this.nomFilliere = "";
        }

        if(etudiant.getEncadrant() != null){
            this.nomEncadrant = etudiant.getEncadrant().getNom() + " " + etudiant.getEncadrant().getPrenom();
        }else{
            this.nomEncadrant = "";
        }
        
        if(etudiant.getStructure() != null){
            this.nomStructure = etudiant.getStructure().getNom();
        }else{
            this.nomStructure = "";
        }
    }
    
}
