import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/seducacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) { }

  islogged = false;

  ngOnInit(): void {
  this.cargarEducacion();
  if(this.tokenService.getToken()){
  this.islogged = true;
  } else {
  this.islogged = false;
  }

  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => {
        this.edu = data;
        this.updateDescription(this.edu[0]?.descripcionEdu, this.edu[0]?.decompressedImageData, this.edu[0]?.id);
      }
    )
  }
  

  delete(id?: number): void {
    if(id!=undefined){
    this.sEducacion.delete(id).subscribe(
      data => {
        this.cargarEducacion();
        
      }, err => {
        alert("Ocurrio un error");
      }
      )
    }
  }
  
  description = '';

  imageUrl = '';

  idActual = 0;

  
  updateDescription(description: string, decompressedImageData: string, idx: number): void {
    this.description = description;
    this.imageUrl = 'data:image/jpeg;base64,' + decompressedImageData;
    this.idActual = idx;
  }
  

  isScrollable(): boolean {
    return this.edu.length >= 9;
  }

}
