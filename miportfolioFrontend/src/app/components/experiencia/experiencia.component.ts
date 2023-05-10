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

  this.updateDescription(this.items[0].description);

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
    "arrows": false,
    "dots": true,
    "infinite": true,
    "autoplay": true,
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
  
  items = [
    { category: 'Item 1', description: 'Description for Item 1' },
    { category: 'Item 2', description: 'Description for Item 2' },
    { category: 'Item 3', description: 'Description for Item 3' },
    { category: 'Item 4', description: 'Description for Item 4' },
    { category: 'Item 5', description: 'Description for Item 5' },
    { category: 'Item 6', description: 'Description for Item 6' },
    { category: 'Item 7', description: 'Description for Item 7' },
    { category: 'Item 8', description: 'Description for Item 7' },
    { category: 'Item 9', description: 'Description for Item 7' },
  ];

  description = '';

  updateDescription(description: string) {
    this.description = description;
  }

  isScrollable(): boolean {
    return this.items.length >= 9;
  }
  

}

