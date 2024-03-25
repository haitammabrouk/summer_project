package com.applicationofspring.allaspects.Student;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "filliere")
public class Filliere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "filliere_id")
    private long id;

    @Column(name = "nom")
    private String nom;

    @OneToMany(mappedBy = "filliere")
    private List<Etudiant> etudiants;

    @OneToMany(mappedBy = "filliere")
    private List<Rapport> rapports;
    
}
