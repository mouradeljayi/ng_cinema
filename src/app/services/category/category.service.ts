import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieDto } from 'src/app/models/category-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private localUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<CategorieDto[]> {
    return this.httpClient.get<CategorieDto[]>(`${this.localUrl}/categories/all`);
  }
}
