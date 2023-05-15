


package com.portfolio.Leandro.Service;

import com.portfolio.Leandro.Entity.Persona;
import com.portfolio.Leandro.Repository.RPersona;
import com.portfolio.Leandro.util.ImageUtil;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class SPersona {
    
    @Autowired
    RPersona rPersona; 
    
   
    public List<Persona> list() {
        List<Persona> personas = rPersona.findAll();
        for (Persona persona : personas) {
            byte[] decompressedImage = ImageUtil.decompressImage(persona.getImageData());
            persona.setDecompressedImageData(decompressedImage);
        }
        return personas;
    }
    
    public Optional<Persona> getOne(int id){
    return rPersona.findById(id);
    }
    
    public void save(Persona x){
    rPersona.save(x);
    }
    
    public void delete(int id){
    rPersona.deleteById(id);
    }
    
    public boolean existsById(int id){
    return rPersona.existsById(id);
    }
    
    
    
}