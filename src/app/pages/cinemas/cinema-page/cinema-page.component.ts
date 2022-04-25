import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinema-page',
  templateUrl: './cinema-page.component.html',
  styleUrls: ['./cinema-page.component.css']
})
export class CinemaPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newCinema() {
    this.router.navigate(["addcinema"]);
  }
}
