import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newFilm() {
    this.router.navigate(["addfilm"]);
  }
}
