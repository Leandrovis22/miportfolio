package com.portfolio.Leandro.Controller;

import com.portfolio.Leandro.Entity.Persona;
import com.portfolio.Leandro.Service.SPersona;
import com.portfolio.Leandro.util.ImageUtil;
import jakarta.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("persona")
@CrossOrigin(origins = "*")
public class PersonaController {

    @Autowired
    SPersona sPersona;
    
   


    @PutMapping("/update/{id}")
public ResponseEntity<?> update(@PathVariable("id") int id,
                                @ModelAttribute("nombre") String nombre,
                                @ModelAttribute("subtitulo") String subtitulo,
                                @ModelAttribute("descripcion") String descripcion,
                                @ModelAttribute("image") MultipartFile image) throws IOException {
    
        boolean isImageUpdated = image != null && !image.isEmpty();

        if (!sPersona.existsById(id)) {
            return new ResponseEntity(new Mensaje("La skill no existe"), HttpStatus.BAD_REQUEST);
        }

        Persona persona = sPersona.getOne(id).get();

        if (persona == null) {
            return new ResponseEntity(new Mensaje("La skill no existe"), HttpStatus.BAD_REQUEST);
        }

        if (isImageUpdated) {
            byte[] compressedImageData = ImageUtil.compressImage(image.getBytes());
            persona.setImageData(compressedImageData);
        }

        persona.setNombre(nombre);
        persona.setSubtitulo(subtitulo);
        persona.setDescripcion(descripcion);

        sPersona.save(persona);

        return new ResponseEntity(new Mensaje("Perfil actualizado"), HttpStatus.OK);
    }

    @GetMapping("/lista")
    public ResponseEntity<List<Persona>> list() {
        List<Persona> list = sPersona.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Persona> getById(@PathVariable("id") int id){
        if(!sPersona.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Persona persona = sPersona.getOne(id).get();
        return new ResponseEntity(persona, HttpStatus.OK);
    }

}
