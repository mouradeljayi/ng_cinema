import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/category';
import { Film } from 'src/app/models/film';
import { CategoryService } from 'src/app/services/category/category.service';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  film: Film = new Film();
  categorie: Categorie = {};
  categories: Array<Categorie> = [];
  errorMsg: Array<string> = [];

  constructor(
    private filmService: FilmService,
    private categoryService: CategoryService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(categories => {
      this.categories = categories
    });
    const idFilm = this.activatedRoute.snapshot.params["idFilm"];
    if(idFilm) {
      this.filmService.findById(idFilm)
      .subscribe( film => {
        this.film = film;
        this.categorie = this.film.categorie ? this.film.categorie : {};
      })
    }
  }

  saveFilm() {
    this.film.categorie = this.categorie;
    this.filmService.createFilm(this.film).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["films"]);
      },
      error => {
        this.errorMsg.push("le champs name ne doit pas etre vide");
        console.log(error.error.errors[0].defaultMessage);
      });
  }

}
