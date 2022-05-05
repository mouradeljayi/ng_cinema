import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { CinemaService } from 'src/app/services/cinema/cinema.service';

@Component({
  selector: 'app-cinema-page',
  templateUrl: './cinema-page.component.html',
  styleUrls: ['./cinema-page.component.css']
})
export class CinemaPageComponent implements OnInit {

  listCinemas: Array<Cinema> = [];
  errorMsg = "";
  selectedCinemaId? = -1;

  constructor(private router:Router, private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.displayCinemas();
  }

  displayCinemas() {
    this.cinemaService.getCinemas()
    .subscribe(res => {
      this.listCinemas = res;
    });
  }

  newCinema() {
    this.router.navigate(["addcinema"]);
  }

  editCinema(id: any) {
    this.router.navigate(["addcinema", id]);
  }

  selectCinema(id?: number) {
    this.selectedCinemaId = id;
  }

  deleteCinema() {
    if(this.selectedCinemaId !== -1) {
      this.cinemaService.deleteCinema(this.selectedCinemaId)
      .subscribe(res => {
        this.displayCinemas();
      }, error => {
        this.errorMsg = error.error.message;
      })
    }
  }
}
