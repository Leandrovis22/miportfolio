package com.portfolio.Leandro.Controller;

import com.portfolio.Leandro.Dto.dtoSkill;
import com.portfolio.Leandro.Entity.Skill;
import com.portfolio.Leandro.Service.SSkill;
import com.portfolio.Leandro.util.ImageUtil;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("skill")
@CrossOrigin(origins = "*")
public class CSkill {
    
@Autowired
SSkill sSkill;


@GetMapping("/lista")
public ResponseEntity<List<Skill>> list() {
    List<Skill> list = sSkill.list();
    return new ResponseEntity(list, HttpStatus.OK);
}

@PostMapping("/create")
public ResponseEntity<?> create(@ModelAttribute dtoSkill dtoskill) throws IOException {
    String titulo = dtoskill.getTitulo();
    String percent = dtoskill.getPercent();
    MultipartFile image = dtoskill.getImage();
    
    if (percent.isEmpty()) {
        return new ResponseEntity<>(new Mensaje("Porciento no puede ser nada"), HttpStatus.BAD_REQUEST);
    }
    
    if (image == null) {
        return new ResponseEntity(new Mensaje("La imagen es obligatoria"), HttpStatus.BAD_REQUEST);
    }

    byte[] compressedImageData = ImageUtil.compressImage(image.getBytes());

    Skill educacion = new Skill(titulo, percent, compressedImageData);

    sSkill.save(educacion);
    return new ResponseEntity(new Mensaje("Skill agregada"), HttpStatus.OK);
}




@PutMapping("/update/{id}")
public ResponseEntity<?> update(@PathVariable("id") int id, @ModelAttribute dtoSkill dtoskill) throws IOException {
    
    boolean isImageUpdated = dtoskill.getImage() != null && !dtoskill.getImage().isEmpty();

    if(!sSkill.existsById(id))
        return new ResponseEntity(new Mensaje("La skill no existe"), HttpStatus.BAD_REQUEST);


    Skill skill = sSkill.getOne(id).get();

    if (skill == null) {
        return new ResponseEntity(new Mensaje("La skill no existe"), HttpStatus.BAD_REQUEST);
    }

    if (isImageUpdated) {
        byte[] compressedImageData = ImageUtil.compressImage(dtoskill.getImage().getBytes());
        skill.setImageData(compressedImageData);
    }

    skill.setTitulo(dtoskill.getTitulo());
    skill.setPercent(dtoskill.getPercent());

    sSkill.save(skill);

    return new ResponseEntity(new Mensaje("Educación actualizada"), HttpStatus.OK);
}



@DeleteMapping("/delete/{id}")
public ResponseEntity<?> delete(@PathVariable("id") int id){

    if(!sSkill.existsById(id))
        return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
    
    sSkill.delete(id);

    return new ResponseEntity(new Mensaje("Skill eliminada"), HttpStatus.OK);
    }

@GetMapping("/detail/{id}")
    public ResponseEntity<Skill> getById(@PathVariable("id") int id){
        if(!sSkill.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Skill skill = sSkill.getOne(id).get();
        return new ResponseEntity(skill, HttpStatus.OK);
    }

}

