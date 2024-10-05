import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs';
import { BASE_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  eduURL = BASE_URL + 'proyecto/'

  private localDataUrl = 'assets/proyecto.json'; // Ruta del archivo JSON local

  constructor(private httpClient: HttpClient) { }

  // Método para obtener la lista desde el JSON local
  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.localDataUrl);
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.eduURL + `detail/${id}`);
  }
  public save(proyecto: Proyecto): Observable<any> {
    const formData = new FormData();
    formData.append('titulo', proyecto.titulo);
    formData.append('descripcion', proyecto.descripcion);
  
    if (proyecto.imageFile) {
      formData.append('image', proyecto.imageFile);
    }else{
      formData.append('image', new Blob());
    }

    return this.httpClient.post<any>(this.eduURL + 'create', formData);
  }
  
  public update(id: number, titulo:string, descripcion:string, Img:File): Observable<any>{

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
  
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
