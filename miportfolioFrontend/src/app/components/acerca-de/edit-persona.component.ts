import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent {


  imageFile?: File;

  persona: Persona = {
    nombre: '',
    subtitulo: '',
    descripcion: ''
  };
  

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Ocurrio un error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];

    const nombre= this.persona.nombre;
    const subtitulo = this.persona.subtitulo;
    const descripcion = this.persona.descripcion;

    this.sPersona.update(id, nombre, subtitulo, descripcion, this.imageFile).subscribe(
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
