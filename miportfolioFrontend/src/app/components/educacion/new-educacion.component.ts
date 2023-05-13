import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  
    nombreEdu: string = '';
    descripcionEdu: string = '';
    imageFile?: File;

    constructor(private sEducacion: SEducacionService, private router: Router) { }
  
    ngOnInit(): void {
    }

    onFileSelected(event: Event): void {
      const file = (event.target as HTMLInputElement).files[0];
      if (file) {
        this.imageFile = file;
      }
    }
  
    onCreate(): void {
      const edu = new Educacion(this.nombreEdu, this.descripcionEdu, this.imageFile);
      this.sEducacion.save(edu).subscribe(data => {
        
        this.router.navigate(['']);
      }, err => {
        alert("Ocurrio un error");
        console.log(err);
        this.router.navigate(['']);
      })
    }
  
  }
  