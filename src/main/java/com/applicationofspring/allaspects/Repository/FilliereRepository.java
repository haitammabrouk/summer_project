package com.applicationofspring.allaspects.Repository;

import org.springframework.data.repository.CrudRepository;

import com.applicationofspring.allaspects.Student.Filliere;


public interface FilliereRepository extends CrudRepository<Filliere, Long> {

    Filliere findByNom(String nom);
    Filliere findFilliereByEtudiantsIdE(long etudiantId);
}
