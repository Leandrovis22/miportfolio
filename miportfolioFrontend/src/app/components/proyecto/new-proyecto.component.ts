import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  
  titulo: string = '';
  descripcion: string = '';
  imageFile?: File;

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.imageFile = file;
    }
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.titulo, this.descripcion, this.imageFile);
    this.sProyecto.save(proyecto).subscribe(data => {
      
      this.router.navigate(['']);
    }, err => {
      alert("Ocurrio un error");
      console.log(err);
      this.router.navigate(['']);
    })
  }

}