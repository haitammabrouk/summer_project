package com.applicationofspring.allaspects.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.applicationofspring.allaspects.Student.Etudiant;
import com.applicationofspring.allaspects.Student.Filliere;
import com.applicationofspring.allaspects.Student.Rapport;

public interface RapportRepository extends CrudRepository<Rapport, Long> {

    List<Rapport> findByFilliere(Filliere filliere);
    Rapport findByEtudiant(Etudiant etudiant);
    List<Rapport> findByValide(boolean valide);
    List<Rapport> findByFilliereId(long filliereId);
    
}
