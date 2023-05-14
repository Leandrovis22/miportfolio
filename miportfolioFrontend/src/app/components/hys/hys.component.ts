import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/sskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private sSkill: SSkillService, private tokenService: TokenService) { }

  islogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.islogged = true;
    } else {
      this.islogged = false;
    }

  }

  cargarSkill(): void {
    this.sSkill.lista().subscribe(
      data => { this.skill = data; })
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.sSkill.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("Ocurrio un error");
        }
      )
    }
  }

  parseInt(value: string): number {
    return parseInt(value, 10);
  }

}
