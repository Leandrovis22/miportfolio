package com.portfolio.Leandro.Service;

import com.portfolio.Leandro.Entity.Proyecto;
import com.portfolio.Leandro.Repository.RProyecto;
import com.portfolio.Leandro.util.ImageUtil;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional

public class SProyecto {
    
    @Autowired
    RProyecto rProyecto;
    
    public List<Proyecto> list() {
        List<Proyecto> proyectos = rProyecto.findAll();
        for (Proyecto proyecto : proyectos) {
            byte[] decompressedImage = ImageUtil.decompressImage(proyecto.getImageData());
            proyecto.setDecompressedImageData(decompressedImage);
        }
        return proyectos;
    }
    
    public Optional<Proyecto> getOne(int id){
    return rProyecto.findById(id);
    }
    
    public void save(Proyecto x){
    rProyecto.save(x);
    }
    
    public void delete(int id){
    rProyecto.deleteById(id);
    }
    
    public boolean existsById(int id){
    return rProyecto.existsById(id);
    }
    
    
    
}
