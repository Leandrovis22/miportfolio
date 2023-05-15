import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { BASE_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
  eduURL = BASE_URL + 'educ/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
  }
  public save(educacion: Educacion): Observable<any> {
    const formData = new FormData();
    formData.append('nombreEdu', educacion.nombreEdu);
    formData.append('descripcionEdu', educacion.descripcionEdu);
  
    if (educacion.imageFile) {
      formData.append('image', educacion.imageFile);
    }else{
      formData.append('image', new Blob());
    }

    return this.httpClient.post<any>(this.eduURL + 'create', formData);
  }
  
  public update(id: number, nombreEdu:string, descripcionEdu:string, Img:File): Observable<any>{

    const formData = new FormData();
    formData.append('nombreEdu', nombreEdu);
    formData.append('descripcionEdu', descripcionEdu);
  
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
