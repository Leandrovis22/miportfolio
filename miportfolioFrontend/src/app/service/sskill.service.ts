import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SSkillService {
  eduURL = 'http://localhost:8080/skill/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.eduURL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.eduURL + `detail/${id}`);
  }
  public save(skill: Skill): Observable<any> {
    const formData = new FormData();
    formData.append('titulo', skill.titulo);
    formData.append('percent', skill.percent);
  
    if (skill.imageFile) {
      formData.append('image', skill.imageFile);
    }else{
      formData.append('image', new Blob());
    }

    return this.httpClient.post<any>(this.eduURL + 'create', formData);
  }
  
  public update(id: number, titulo:string, percent:string, Img:File): Observable<any>{

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('percent', percent);
  
    if (Img) {
      formData.append('image', Img);
    }else{
      formData.append('image', new Blob());
    }

    return this.httpClient.put<any>(this.eduURL + `update/${id}`, formData);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}

