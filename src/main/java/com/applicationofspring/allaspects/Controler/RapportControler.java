package com.applicationofspring.allaspects.Controler;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.http.HttpHeaders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;

import com.applicationofspring.allaspects.Student.Etudiant;
import com.applicationofspring.allaspects.Student.Filliere;
import com.applicationofspring.allaspects.Student.Rapport;

import jakarta.servlet.http.HttpSession;

import com.applicationofspring.allaspects.DTO.EtudiantDTO;
import com.applicationofspring.allaspects.Repository.FilliereRepository;
import com.applicationofspring.allaspects.Service.EtudiantService;
import com.applicationofspring.allaspects.Service.RapportService;
import org.springframework.web.multipart.MultipartFile;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RapportControler {
    
    @Autowired
    private RapportService rapportService;

    @Autowired
    private EtudiantService etudiantService;

    @Autowired
    private FilliereRepository filliereRepository;
    

    @GetMapping(value = "/rapport/{id}")
    public ResponseEntity<Rapport> getRapport(@PathVariable("id") String id, HttpSession session){
        try{
            long sessionId = Long.parseLong(id);
            Etudiant etudiant = etudiantService.getEtudiant(sessionId);
            System.out.println(etudiant);
            Rapport rapport = etudiant.getRapport();
            return new ResponseEntity<>(rapport,  HttpStatus.OK);
        }catch(NumberFormatException ex){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    
    @GetMapping("/rapports/download")
    public ResponseEntity<byte[]> downloadRapports(@RequestParam List<Long> ids) {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ZipOutputStream zipOut = new ZipOutputStream(baos);

            for (Long id : ids) {
                byte[] fileData = getFileDataForRapport(id);

                ZipEntry zipEntry = new ZipEntry(id + ".ext");
                zipOut.putNextEntry(zipEntry);
                zipOut.write(fileData);
                zipOut.closeEntry();
            }

            zipOut.close();
            baos.close();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", "rapports.zip");

            return new ResponseEntity<>(baos.toByteArray(), headers, HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private byte[] getFileDataForRapport(Long id) {
        return new byte[0];
    }

    @PostMapping(value = "/rapports", consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<HttpStatus> addRapport( @RequestParam("domaine") String domaine,
    @RequestParam("id") long id,
    @RequestParam("structure") String structure,
    @RequestParam("sujet") String sujet,
    @RequestParam("duree") int duree,
    @RequestParam("description") String description,
    @RequestParam("file") MultipartFile file ) throws IOException{

        Etudiant etudiant = etudiantService.getEtudiant(id);
        Filliere filliere = etudiantService.getFilliereByEtudiantId(id);

        System.out.println(filliere);

        if(etudiant != null){
            Rapport rapport = new Rapport();
            rapport.setSujet(sujet);
            rapport.setDescription(description);
            rapport.setDuree(duree);
            rapport.setStructure(structure);
            rapport.setDomaine(domaine);
            rapport.setEtudiant(etudiant);
            rapport.setFilliere(filliere);
            rapportService.saveFileData(rapport, file);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        
    }

    @PostMapping(value = "/rapport-note/{id}")
    public ResponseEntity<HttpStatus> setNoteRapport(@PathVariable("id") String id, @RequestBody Map<String, String> requestParams){
        Integer note = Integer.parseInt(requestParams.get("note"));
        long idR = Long.parseLong(id);
        Rapport rapport = rapportService.getRapport(idR);
        rapport.setNote(note);
        rapportService.saveRapport(rapport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping(value = "/rapport-valide/{id}")
    public ResponseEntity<HttpStatus> setValideRapport(@PathVariable("id") String id, @RequestBody Map<String, String> requestParams){
        boolean valide = Boolean.parseBoolean(requestParams.get("response"));
        long idR = Long.parseLong(id);
        Rapport rapport = rapportService.getRapport(idR);
        rapport.setValide(true);
        rapportService.saveRapport(rapport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(value = "/rapport/{sessionId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Rapport> updateStudent(
    @PathVariable("sessionId") String sessionId,
    @RequestParam("domaine") String domaine,
    @RequestParam("structure") String structure,
    @RequestParam("sujet") String sujet,
    @RequestParam("duree") int duree,
    @RequestParam("description") String description,
    @RequestParam("file") MultipartFile file ) throws IOException {

        long id = Long.parseLong(sessionId);
        Etudiant etudiant = etudiantService.getEtudiant(id);
        Filliere filliere = etudiantService.getFilliereByEtudiantId(id);
        Rapport rp = rapportService.getRapportByEtudiant(etudiant);

        if(etudiant != null){
            Rapport rapport = new Rapport();
            rapport.setSujet(sujet);
            rapport.setDescription(description);
            rapport.setDuree(duree);
            rapport.setStructure(structure);
            rapport.setDomaine(domaine);
            rapport.setEtudiant(etudiant);
            rapport.setFilliere(filliere);
            rapport.setFileData(file.getBytes());
            rapportService.updateRapport(rapport, rp.getIdR());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/rapport/{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable("id") long id){
        rapportService.deleteRapport(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/rapport/{id}/file")
    public ResponseEntity<byte[]> downloadFile(@PathVariable String id) {
        try{
            long sessionId = Long.parseLong(id);
            Etudiant etd = etudiantService.getEtudiant(sessionId);
            Rapport rapport = etd.getRapport();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", "filename.ext");

        return new ResponseEntity<>(rapport.getFileData(), headers, HttpStatus.OK);

        }catch(NumberFormatException ex){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } 
    }

    @GetMapping("/rapport/{id}/project")
    public ResponseEntity<byte[]> downloadProject(@PathVariable String id) {
        try{
            long rapportId = Long.parseLong(id);
            Rapport rapport = rapportService.getRapport(rapportId);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", "filename.ext");

        return new ResponseEntity<>(rapport.getFileData(), headers, HttpStatus.OK);

        }catch(NumberFormatException ex){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } 
    }

    @GetMapping(value = "/get-rapports")
    public ResponseEntity<List<Rapport>> getAllRapports(){
        List<Rapport> rapports = rapportService.getAllRapports();
        return new ResponseEntity<>(rapports,  HttpStatus.OK);
    }

    @GetMapping(value = "/valide/{id}")
    public ResponseEntity<Boolean> getValide(@PathVariable("id") String id){
        Long idR = Long.parseLong(id);
        Rapport rapport = rapportService.getRapport(idR);
        if(rapport != null){
            boolean valide = rapport.isValide();
            return new ResponseEntity<>(valide, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/pfevalide")
    public List<Rapport> getPfeValide(){
        return rapportService.getPfeValide();
    }

     @GetMapping("/pfenonvalide")
    public List<Rapport> getPfeNonValide(){
        return rapportService.getPfeNonValide();
    }

    @GetMapping("/moyenotefil")
    public ResponseEntity<List<Map<String, Object>>> getMoyennesParFiliere() {
        
        List<Map<String, Object>> data = new ArrayList<>();


        Iterable<Filliere> iterableFilieres = filliereRepository.findAll();
        List<Filliere> filieres = StreamSupport
            .stream(iterableFilieres.spliterator(), false)
            .collect(Collectors.toList());

        Map<String, Double> moyennes = rapportService.calculerMoyenneParFiliere(filieres);

        for(String key : moyennes.keySet()){
            Map<String, Object> object = new HashMap<>();
            object.put("filliere", key);
            object.put("note", moyennes.get(key));
            data.add(object);
        }

        return ResponseEntity.ok(data);   
    }


}
