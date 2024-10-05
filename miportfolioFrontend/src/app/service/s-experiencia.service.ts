import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { BASE_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = BASE_URL + 'explab/'

  private localDataUrl = 'assets/explab.json'; // Ruta del archivo JSON local

  constructor(private httpClient: HttpClient) { }

  // Método para obtener la lista desde el JSON local
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.localDataUrl);
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }
  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }
  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
