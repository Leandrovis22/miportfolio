import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/sskill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {

  imageFile?: File;

  skill: Skill = {
    titulo: '',
    percent: '',
    
  };

  constructor(private sSkill: SSkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Ocurrio un error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];

    const titulo= this.skill.titulo;
    const percent = this.skill.percent;

    this.sSkill.update(id, titulo, percent, this.imageFile).subscribe(
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
