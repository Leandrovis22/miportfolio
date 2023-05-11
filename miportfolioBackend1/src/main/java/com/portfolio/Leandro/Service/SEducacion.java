
package com.portfolio.Leandro.Service;

import com.portfolio.Leandro.Entity.Educacion;
import com.portfolio.Leandro.Repository.REducacion;
import com.portfolio.Leandro.util.ImageUtil;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SEducacion {
    
    @Autowired
    REducacion rEducacion;
    
    public List<Educacion> list() {
        List<Educacion> educaciones = rEducacion.findAll();
        for (Educacion educacion : educaciones) {
            byte[] decompressedImage = ImageUtil.decompressImage(educacion.getImageData());
            educacion.setDecompressedImageData(decompressedImage);
        }
        return educaciones;
    }
    
    public Optional<Educacion> getOne(int id){
    return rEducacion.findById(id);
    }
    
    public Optional<Educacion> getByNombreEdu(String nombreEdu){
    return rEducacion.findByNombreEdu(nombreEdu);
    }
    
    public void save(Educacion edu){
    rEducacion.save(edu);
    }
    
    public void delete(int id){
    rEducacion.deleteById(id);
    }
    
    public boolean existsById(int id){
    return rEducacion.existsById(id);
    }
    
    public boolean existsByNombreEdu(String nombreEdu){
    return rEducacion.existsByNombreEdu(nombreEdu);
    }
    
    
}
