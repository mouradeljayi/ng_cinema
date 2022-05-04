import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/services/ville/ville.service';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent implements OnInit {

  ville: Ville = new Ville();
  errorMsg: Array<string> = [];


  constructor(
    private villeService: VilleService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idVille = this.activatedRoute.snapshot.params["idVille"];
    if(idVille) {
      this.villeService.findById(idVille)
      .subscribe( ville => {
        this.ville = ville;
      })
    }
  }

  saveVille() {
    this.villeService.createVille(this.ville).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["villes"]);
      },
      error => {
        this.errorMsg.push("le champs name ne doit pas etre vide");
        console.log(error.error.errors[0].defaultMessage);
      });
  }

}
