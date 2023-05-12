package com.portfolio.Leandro.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Transient;

@Entity
public class Educacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreEdu;
    private String descripcionEdu;
    
    @Transient
    private byte[] decompressedImageData;
    
    @JsonIgnore
    @Column(columnDefinition = "MEDIUMBLOB")
    @Lob
    private byte[] imageData;

    public Educacion() {
    }

    public Educacion(String nombreEdu, String descripcionEdu, byte[] imageData) {
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.imageData = imageData;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    public byte[] getDecompressedImageData() {
        return decompressedImageData;
    }

    public void setDecompressedImageData(byte[] decompressedImageData) {
        this.decompressedImageData = decompressedImageData;
    }
    
}
