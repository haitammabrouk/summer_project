package com.applicationofspring.allaspects.Repository;

import org.springframework.data.repository.CrudRepository;

import com.applicationofspring.allaspects.Student.Encadrant;

public interface EncadrantRepository extends CrudRepository<Encadrant, Long> {
    Encadrant findByNom(String nom);
    Encadrant getEncadrantByEmail(String email);
    Encadrant findByToken(String token);
}
