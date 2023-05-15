
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

public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombre;
    private String subtitulo;
    @Column(length = 1000)
    private String descripcion;
    
    
    @Transient
    private byte[] decompressedImageData;
    
    @JsonIgnore
    @Column(columnDefinition = "MEDIUMBLOB")
    @Lob
    private byte[] imageData;

    public Persona() {
    }

    public Persona(String nombre, String subtitulo, String descripcion, byte[] imageData) {
        this.nombre = nombre;
        this.subtitulo = subtitulo;
        this.descripcion = descripcion;
        this.imageData = imageData;
    }
    

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getSubtitulo() {
        return subtitulo;
    }

    public void setSubtitulo(String subtitulo) {
        this.subtitulo = subtitulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public byte[] getDecompressedImageData() {
        return decompressedImageData;
    }

    public void setDecompressedImageData(byte[] decompressedImageData) {
        this.decompressedImageData = decompressedImageData;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
    
    
}
