package com.portfolio.Leandro.Controller;

import com.portfolio.Leandro.Dto.dtoProyecto;
import com.portfolio.Leandro.Entity.Proyecto;
import com.portfolio.Leandro.Service.SProyecto;
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
@RequestMapping("proyecto")
@CrossOrigin(origins = "*")
public class CProyecto {
    
@Autowired
SProyecto sProyecto;


@GetMapping("/lista")
public ResponseEntity<List<Proyecto>> list() {
    List<Proyecto> list = sProyecto.list();
    return new ResponseEntity(list, HttpStatus.OK);
}

@PostMapping("/create")
public ResponseEntity<?> create(@ModelAttribute dtoProyecto dtoproyecto) throws IOException {
    String titulo = dtoproyecto.getTitulo();
    String descripcion = dtoproyecto.getDescripcion();
    MultipartFile image = dtoproyecto.getImage();
    
    if (descripcion.isEmpty()) {
        return new ResponseEntity<>(new Mensaje("Porciento no puede ser nada"), HttpStatus.BAD_REQUEST);
    }
    
    if (image == null) {
        return new ResponseEntity(new Mensaje("La imagen es obligatoria"), HttpStatus.BAD_REQUEST);
    }

    byte[] compressedImageData = ImageUtil.compressImage(image.getBytes());

    Proyecto proyect = new Proyecto(titulo, descripcion, compressedImageData);

    sProyecto.save(proyect);
    return new ResponseEntity(new Mensaje("Skill agregada"), HttpStatus.OK);
}




@PutMapping("/update/{id}")
public ResponseEntity<?> update(@PathVariable("id") int id, @ModelAttribute dtoProyecto dtoproyecto) throws IOException {
    
    boolean isImageUpdated = dtoproyecto.getImage() != null && !dtoproyecto.getImage().isEmpty();

    if(!sProyecto.existsById(id))
        return new ResponseEntity(new Mensaje("El proyecto no existe"), HttpStatus.BAD_REQUEST);


    Proyecto proyecto = sProyecto.getOne(id).get();

    if (proyecto == null) {
        return new ResponseEntity(new Mensaje("La skill no existe"), HttpStatus.BAD_REQUEST);
    }

    if (isImageUpdated) {
        byte[] compressedImageData = ImageUtil.compressImage(dtoproyecto.getImage().getBytes());
        proyecto.setImageData(compressedImageData);
    }

    proyecto.setTitulo(dtoproyecto.getTitulo());
    proyecto.setDescripcion(dtoproyecto.getDescripcion());

    sProyecto.save(proyecto);

    return new ResponseEntity(new Mensaje("Proyecto actualizado"), HttpStatus.OK);
}



@DeleteMapping("/delete/{id}")
public ResponseEntity<?> delete(@PathVariable("id") int id){

    if(!sProyecto.existsById(id))
        return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
    
    sProyecto.delete(id);

    return new ResponseEntity(new Mensaje("Proyecto eliminado"), HttpStatus.OK);
    }

@GetMapping("/detail/{id}")
    public ResponseEntity<Proyecto> getById(@PathVariable("id") int id){
        if(!sProyecto.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Proyecto proyecto = sProyecto.getOne(id).get();
        return new ResponseEntity(proyecto, HttpStatus.OK);
    }

}

