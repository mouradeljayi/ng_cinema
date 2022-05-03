import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {

  listFilms: Array<Film> = [];
  errorMsg = "";
  selectedFilmId? = -1;

  constructor(private filmsService: FilmService, private router:Router) { }

  ngOnInit(): void {
    this.displayFilms();
  }

  displayFilms() {
    this.filmsService.getFilms()
    .subscribe(res => {
      this.listFilms = res;
    });
  }

  newFilm() {
    this.router.navigate(["addfilm"]);
  }

  editFilm(id: any) {
    this.router.navigate(["addfilm", id]);
  }

  selectFilm(id?: number) {
    this.selectedFilmId = id;
  }

  deleteFilm() {
    if(this.selectedFilmId !== -1) {
      this.filmsService.deleteFilm(this.selectedFilmId)
      .subscribe(res => {
        this.displayFilms();
      }, error => {
        this.errorMsg = error.error.message;
      })
    }
  }
}
