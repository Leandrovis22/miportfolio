import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/seducacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {

  imageFile?: File;

  educ : Educacion=null;

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data => {
        this.educ = data;
      }, err => {
        alert("Ocurrio un error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];

    const nombreEdu= this.educ.nombreEdu;
    const descripcionEdu = this.educ.descripcionEdu;

    this.sEducacion.update(id, nombreEdu, descripcionEdu, this.imageFile).subscribe(
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
