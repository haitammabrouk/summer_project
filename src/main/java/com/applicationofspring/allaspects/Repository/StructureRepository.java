package com.applicationofspring.allaspects.Repository;

import org.springframework.data.repository.CrudRepository;

import com.applicationofspring.allaspects.Student.Structure;


public interface StructureRepository extends CrudRepository<Structure, Long> {
    Structure findByNom(String nom);
    long count();
}
