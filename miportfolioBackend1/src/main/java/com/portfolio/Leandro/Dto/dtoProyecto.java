package com.portfolio.Leandro.Dto;

import jakarta.validation.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;


public class dtoProyecto {
    
    
    @NotBlank
    private String titulo;
    @NotBlank
    private String descripcion;
    
    private MultipartFile image;

    public dtoProyecto() {
    }

    public dtoProyecto(String titulo, String descripcion, MultipartFile image) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.image = image;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
    
    

}
