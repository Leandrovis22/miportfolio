import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {

  imageFile?: File;

  proyecto : Proyecto=null;

  constructor(private sProyecto: SProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Ocurrio un error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];

    const titulo= this.proyecto.titulo;
    const descripcion = this.proyecto.descripcion;

    this.sProyecto.update(id, titulo, descripcion, this.imageFile).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Ocurrio un error");
        this.router.navigate(['']);
      }
    )
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.imageFile = file;
    }
  }


}
