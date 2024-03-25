package com.applicationofspring.allaspects.Service;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.applicationofspring.allaspects.Repository.EtudiantRepository;
import com.applicationofspring.allaspects.Repository.RapportRepository;
import com.applicationofspring.allaspects.Student.Etudiant;
import com.applicationofspring.allaspects.Student.Filliere;
import com.applicationofspring.allaspects.Student.Rapport;

@Service
public class RapportService {

    @Autowired
    private RapportRepository rapportRepository;

    @Autowired
    private EtudiantRepository etudiantRepository;

    public Rapport getRapport(long id){
        Rapport rapport = rapportRepository.findById(id).get();
        return rapport;
    }

    public Rapport addRapport(Rapport rapport){
        rapportRepository.save(rapport);
        return rapport;
    }

    public Rapport updateRapport(Rapport rapport, long id){
        Rapport rp = this.getRapport(id);
        rp.setDomaine(rapport.getDomaine());
        rp.setSujet(rapport.getSujet());
        rp.setStructure(rapport.getStructure());
        rp.setDuree(rapport.getDuree());
        rp.setDescription(rapport.getDescription());
        rp.setFileData(rapport.getFileData());
        return rapportRepository.save(rp);
    }

    public void deleteRapport(long id){
        rapportRepository.deleteById(id);
    }

    public void saveFileData(Rapport rapport, MultipartFile file) throws IOException {
        rapport.setFileData(file.getBytes());
        rapportRepository.save(rapport);
    }

    public List<Rapport> getRapportsByFilliere(Filliere filliere){
        return rapportRepository.findByFilliere(filliere);
    }

    public Rapport getRapportByEtudiant(Etudiant etudiant){
        return rapportRepository.findByEtudiant(etudiant);
    }

    public void saveRapport(Rapport rapport){
        rapportRepository.save(rapport);
    }

    public List<Rapport> getAllRapports(){
        return (List<Rapport>) rapportRepository.findAll();
    }

    public List<Rapport> getPfeValide(){
        return rapportRepository.findByValide(true);
    }

    public List<Rapport> getPfeNonValide(){
        return rapportRepository.findByValide(false);
    }
    public Map<String, Double> calculerMoyenneParFiliere(List<Filliere> filiere) {
        Map<String, Double> moyennes = new HashMap<>();

        for (Filliere filliere : filiere) {
            List<Rapport> rapports = rapportRepository.findByFilliereId(filliere.getId());
            double somme = 0;

            for (Rapport rapport : rapports) {
                somme += rapport.getNote();
            }

            double moyenne = rapports.isEmpty() ? 0 : somme / rapports.size();
            moyennes.put(filliere.getNom(), moyenne);
        }

        return moyennes;
    
    }

}
