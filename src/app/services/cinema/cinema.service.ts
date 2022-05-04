import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cinema } from 'src/app/models/cinema';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private localUrl = environment.API_URL;


  constructor(private httpClient: HttpClient) { }

  getCinemas(): Observable<Cinema[]> {
    return this.httpClient.get<Cinema[]>(`${this.localUrl}/cinemas/all`);
  }

  createCinema(cinema: Cinema): Observable<Cinema> {
    return this.httpClient.post<Cinema>(`${this.localUrl}/cinemas/create`, cinema);
  }
  
  findById(idCinema: number): Observable<Cinema> {
    return this.httpClient.get<Cinema>(`${this.localUrl}/cinemas/${idCinema}`);
  }

  deleteCinema(idCinema?: number): Observable<any> {
    if(idCinema) {
      return this.httpClient.delete<Cinema>(`${this.localUrl}/cinemas/delete/${idCinema}`);
    }
    return of();
  }
}
