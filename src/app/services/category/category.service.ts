import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, retry } from 'rxjs';
import { Categorie } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private localUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.localUrl}/categories/all`);
  }

  createCategory(categorie: Categorie): Observable<Categorie> {
    return this.httpClient.post<Categorie>(`${this.localUrl}/categories/create`, categorie);
  }

  findById(idCategory: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${this.localUrl}/categories/search/${idCategory}`);
  }

  deleteCategory(idCategory?: number): Observable<any> {
    if(idCategory) {
      return this.httpClient.delete<Categorie>(`${this.localUrl}/categories/delete/${idCategory}`);
    }
    return of();
  }
}
