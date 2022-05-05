import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from 'src/app/models/cinema';
import { Ville } from 'src/app/models/ville';
import { CinemaService } from 'src/app/services/cinema/cinema.service';
import { VilleService } from 'src/app/services/ville/ville.service';

@Component({
  selector: 'app-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.css']
})
export class AddCinemaComponent implements OnInit {

  cinema: Cinema = new Cinema();
  ville: Ville = {};
  villes: Array<Ville> = [];
  errorMsg: Array<string> = [];

  constructor(
    private cinemaService: CinemaService, 
    private villeService: VilleService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.villeService.getVilles()
    .subscribe(villes => {
      this.villes = villes
    });
    const idCinema = this.activatedRoute.snapshot.params["idCinema"];
    if(idCinema) {
      this.cinemaService.findById(idCinema)
      .subscribe( cinema => {
        this.cinema = cinema;
        this.ville = this.cinema.ville ? this.cinema.ville : {};
      })
    }
  }

  saveCinema() {
    this.cinema.ville = this.ville;
    this.cinemaService.createCinema(this.cinema).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["cinemas"]);
      },
      error => {
        this.errorMsg.push("le champs name ne doit pas etre vide");
        console.log(error.error.errors[0].defaultMessage);
      });
  }

}
