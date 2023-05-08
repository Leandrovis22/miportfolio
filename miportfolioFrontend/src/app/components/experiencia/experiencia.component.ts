import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  islogged = false;

  ngOnInit(): void {
  this.cargarExperiencia();
  if(this.tokenService.getToken()){
  this.islogged = true;
  } else {
  this.islogged = false;
  }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => {this.expe = data;})
  }

  delete(id?: number): void {
    if(id!=undefined){
    this.sExperiencia.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
        this.refreshCarousel(); // Add this line
      }, err => {
        alert("Ocurrio un error");
      }
      )
    }
  }

  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": false,
    "autoplaySpeed": 3000
  };
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }


  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  refreshCarousel(): void {
    this.slickModal.unslick();
    setTimeout(() => {
      this.slickModal.initSlick();
    }, 100);
  }
  

}

