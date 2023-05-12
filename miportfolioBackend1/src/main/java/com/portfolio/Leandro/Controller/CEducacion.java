
package com.portfolio.Leandro.Controller;

import com.portfolio.Leandro.Dto.dtoEducacion;
import com.portfolio.Leandro.Entity.Educacion;
import com.portfolio.Leandro.Service.SEducacion;
import com.portfolio.Leandro.util.ImageUtil;
import java.io.IOException;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("educ")
@CrossOrigin(origins = "*")
public class CEducacion {
    
@Autowired
SEducacion sEducacion;


@GetMapping("/lista")
public ResponseEntity<List<Educacion>> list() {
    List<Educacion> list = sEducacion.list();
    return new ResponseEntity(list, HttpStatus.OK);
}

@PostMapping("/create")
public ResponseEntity<?> create(@ModelAttribute dtoEducacion dtoedu) throws IOException {
    String nombreEdu = dtoedu.getNombreEdu();
    String descripcionEdu = dtoedu.getDescripcionEdu();
    MultipartFile image = dtoedu.getImage();

    if (StringUtils.isBlank(nombreEdu)) {
        return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
    }
    if (sEducacion.existsByNombreEdu(nombreEdu)) {
        return new ResponseEntity(new Mensaje("Esa educacion existe"), HttpStatus.BAD_REQUEST);
    }
    if (image == null) {
        return new ResponseEntity(new Mensaje("La imagen es obligatoria"), HttpStatus.BAD_REQUEST);
    }

    byte[] compressedImageData = ImageUtil.compressImage(image.getBytes());

    Educacion educacion = new Educacion(nombreEdu, descripcionEdu, compressedImageData);

    sEducacion.save(educacion);
    return new ResponseEntity(new Mensaje("Educacion agregada"), HttpStatus.OK);
}




@PutMapping("/update/{id}")
public ResponseEntity<?> update(@PathVariable("id") int id, @ModelAttribute dtoEducacion dtoedu) throws IOException {
    if(StringUtils.isBlank(dtoedu.getNombreEdu()))
        return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);

    boolean isImageUpdated = dtoedu.getImage() != null && !dtoedu.getImage().isEmpty();

    if(!sEducacion.existsById(id))
        return new ResponseEntity(new Mensaje("La educación no existe"), HttpStatus.BAD_REQUEST);

    if(sEducacion.existsByNombreEdu(dtoedu.getNombreEdu()) && sEducacion.getByNombreEdu(dtoedu.getNombreEdu()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Esa educación ya existe"), HttpStatus.BAD_REQUEST);

    Educacion educacion = sEducacion.getOne(id).get();

    if (educacion == null) {
        return new ResponseEntity(new Mensaje("La educación no existe"), HttpStatus.BAD_REQUEST);
    }

    if (isImageUpdated) {
        byte[] compressedImageData = ImageUtil.compressImage(dtoedu.getImage().getBytes());
        educacion.setImageData(compressedImageData);
    }

    educacion.setNombreEdu(dtoedu.getNombreEdu());
    educacion.setDescripcionEdu(dtoedu.getDescripcionEdu());

    sEducacion.save(educacion);

    return new ResponseEntity(new Mensaje("Educación actualizada"), HttpStatus.OK);
}



@DeleteMapping("/delete/{id}")
public ResponseEntity<?> delete(@PathVariable("id") int id){

    if(!sEducacion.existsById(id))
        return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
    
    sEducacion.delete(id);

    return new ResponseEntity(new Mensaje("Educacion eliminada"), HttpStatus.OK);
    }

@GetMapping("/detail/{id}")
    public ResponseEntity<Educacion> getById(@PathVariable("id") int id){
        if(!sEducacion.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Educacion educacion = sEducacion.getOne(id).get();
        return new ResponseEntity(educacion, HttpStatus.OK);
    }

}

