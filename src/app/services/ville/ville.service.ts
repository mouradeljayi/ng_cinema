import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ville } from 'src/app/models/ville';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private localUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getVilles(): Observable<Ville[]> {
    return this.httpClient.get<Ville[]>(`${this.localUrl}/villes/all`);
  }

  createVille(ville: Ville): Observable<Ville> {
    return this.httpClient.post<Ville>(`${this.localUrl}/villes/create`, ville);
  }
  
  findById(idVille: number): Observable<Ville> {
    return this.httpClient.get<Ville>(`${this.localUrl}/villes/${idVille}`);
  }

  deleteVille(idVille?: number): Observable<any> {
    if(idVille) {
      return this.httpClient.delete<Ville>(`${this.localUrl}/villes/delete/${idVille}`);
    }
    return of();
  }
}
