import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from 'src/app/models/film';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private localUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.localUrl}/films/all`);
  }

  createFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(`${this.localUrl}/films/create`, film);
  }
  
  findById(idFilm: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.localUrl}/films/${idFilm}`);
  }

  deleteFilm(idFilm?: number): Observable<any> {
    if(idFilm) {
      return this.httpClient.delete<Film>(`${this.localUrl}/films/delete/${idFilm}`);
    }
    return of();
  }
}
