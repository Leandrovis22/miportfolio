package com.portfolio.Leandro.Repository;

import com.portfolio.Leandro.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RPersona extends JpaRepository<Persona,Integer> {
    
}
