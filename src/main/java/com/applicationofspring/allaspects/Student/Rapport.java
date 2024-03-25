package com.applicationofspring.allaspects.Student;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "rapport_tab")
public class Rapport {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idR")
    private long idR;

    @Column(name = "domaine")
    private String domaine;

    @Column(name = "structure")
    private String structure;

    @Column(name = "sujet")
    private String sujet;

    @Column(name = "duree")
    private int duree;

    @Column(name = "note")
    private int note;

    @Column(name = "description")
    private String description;

    @Column(name = "valide")
    private boolean valide;

    @Lob
    @Column(name = "file_data", length = Integer.MAX_VALUE)
    private byte[] fileData;

    @JsonIgnore
    @OneToOne
    @JoinColumn(referencedColumnName = "CNE", name = "CNE")
    private Etudiant etudiant ;

    @JsonIgnore
    @ManyToOne
	@JoinColumn(referencedColumnName = "cin", name = "cin")
    private Encadrant encadrant;

    @JsonIgnore
    @ManyToOne
	@JoinColumn(referencedColumnName = "filliere_id", name = "filliere_id")
    private Filliere filliere;
}
