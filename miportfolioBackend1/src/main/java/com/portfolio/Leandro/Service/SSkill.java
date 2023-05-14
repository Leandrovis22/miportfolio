package com.portfolio.Leandro.Service;

import com.portfolio.Leandro.Entity.Skill;
import com.portfolio.Leandro.Repository.RSkill;
import com.portfolio.Leandro.util.ImageUtil;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional

public class SSkill {
    
    @Autowired
    RSkill rSkill;
    
    public List<Skill> list() {
        List<Skill> skilles = rSkill.findAll();
        for (Skill skill : skilles) {
            byte[] decompressedImage = ImageUtil.decompressImage(skill.getImageData());
            skill.setDecompressedImageData(decompressedImage);
        }
        return skilles;
    }
    
    public Optional<Skill> getOne(int id){
    return rSkill.findById(id);
    }
    
    public void save(Skill x){
    rSkill.save(x);
    }
    
    public void delete(int id){
    rSkill.deleteById(id);
    }
    
    public boolean existsById(int id){
    return rSkill.existsById(id);
    }
    
    
    
}
