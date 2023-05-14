import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/sskill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  
  titulo: string = '';
  percent: string = '';
  imageFile?: File;

  constructor(private sSkill: SSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.imageFile = file;
    }
  }

  onCreate(): void {
    const skill = new Skill(this.titulo, this.percent, this.imageFile);
    this.sSkill.save(skill).subscribe(data => {
      
      this.router.navigate(['']);
    }, err => {
      alert("Ocurrio un error");
      console.log(err);
      this.router.navigate(['']);
    })
  }

}