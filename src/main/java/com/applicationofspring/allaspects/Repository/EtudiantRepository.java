package com.applicationofspring.allaspects.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.applicationofspring.allaspects.Student.Encadrant;
import com.applicationofspring.allaspects.Student.Etudiant;

public interface EtudiantRepository extends CrudRepository<Etudiant, Long> {
    Etudiant getEtudiantByEmail(String email);
    Etudiant findByToken(String token);

    List<Etudiant> findByEncadrant(Encadrant encadrant);
    long count();
    long countByGenre(String genre);
}
