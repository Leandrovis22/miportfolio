package com.portfolio.Leandro.Dto;

import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;

public class dtoSkill {
    
    @NotBlank
    private String titulo;
    @NotBlank
    private String percent;
    
    private MultipartFile image;

    public dtoSkill() {
    }

    public dtoSkill(String titulo, String percent, MultipartFile image) {
        this.titulo = titulo;
        this.percent = percent;
        this.image = image;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getPercent() {
        return percent;
    }

    public void setPercent(String percent) {
        this.percent = percent;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
    
    
    
}
