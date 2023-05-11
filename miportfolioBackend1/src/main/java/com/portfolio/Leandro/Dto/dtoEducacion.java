
package com.portfolio.Leandro.Dto;

import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import org.springframework.web.multipart.MultipartFile;


public class dtoEducacion {
    @NotBlank
    private String nombreEdu;
    @NotBlank
    private String descripcionEdu;
    
    private MultipartFile image;
    
    public dtoEducacion() {
    }

    public dtoEducacion(String nombreEdu, String descripcionEdu, MultipartFile image) {
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.image = image;
    }

    public String getNombreEdu() {
        return nombreEdu;
    }

    public void setNombreEdu(String nombreEdu) {
        this.nombreEdu = nombreEdu;
    }

    public String getDescripcionEdu() {
        return descripcionEdu;
    }

    public void setDescripcionEdu(String descripcionEdu) {
        this.descripcionEdu = descripcionEdu;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

}
