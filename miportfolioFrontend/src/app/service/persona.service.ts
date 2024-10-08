import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { BASE_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaURL = BASE_URL + 'persona/';

  private localDataUrl = 'assets/persona.json'; // Ruta del archivo JSON local

  constructor(private httpClient: HttpClient) { }

  // Método para obtener la lista desde el JSON local
  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.localDataUrl);
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.personaURL + `detail/${id}`);
  }
  
  
  public update(id: number, nombre:string, subtitulo:string, descripcion:string, Img:File): Observable<any>{

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('subtitulo', subtitulo);
    formData.append('descripcion', descripcion);
  
    if (Img) {
      formData.append('image', Img);
    }else{
      formData.append('image', new Blob());
    }

    return this.httpClient.put<any>(this.personaURL + `update/${id}`, formData);
  }
}