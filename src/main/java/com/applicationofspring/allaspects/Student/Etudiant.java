package com.applicationofspring.allaspects.Student;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name="etudiant")
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CNE")
    private long idE;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @JsonIgnore
    @ManyToOne
	@JoinColumn(referencedColumnName = "filliere_id", name = "filliere_id")
    private Filliere filliere;

    @Email
    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "genre")
    private String genre;

    @JsonIgnore
    @OneToOne(mappedBy = "etudiant", cascade = CascadeType.ALL)
    private Rapport rapport;

    @Column(name = "token")
    private String token;

    @JsonIgnore
    @ManyToOne
	@JoinColumn(referencedColumnName = "cin", name = "cin")
    private Encadrant encadrant;

    @JsonIgnore
    @ManyToOne
	@JoinColumn(referencedColumnName = "structure_id", name = "structure_id")
    private Structure structure;
    
}
