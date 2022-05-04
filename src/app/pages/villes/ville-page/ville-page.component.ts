import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ville } from 'src/app/models/ville';
import { VilleService } from 'src/app/services/ville/ville.service';

@Component({
  selector: 'app-ville-page',
  templateUrl: './ville-page.component.html',
  styleUrls: ['./ville-page.component.css']
})
export class VillePageComponent implements OnInit {

  listVilles: Array<Ville> = [];
  errorMsg = "";
  selectedVilleId? = -1;

  constructor(
    private router:Router, 
    private villeService: VilleService ) { }

  ngOnInit(): void {
    this.displayVilles();
  }

  displayVilles() {
    this.villeService.getVilles()
    .subscribe(res => {
      this.listVilles = res;
    });
  }

  newVille() {
    this.router.navigate(["addVille"]);
  }
  editVille(id: any) {
    this.router.navigate(["addVille", id]);
  }

  selectVille(id?: number) {
    this.selectedVilleId = id;
  }

  deleteVille() {
    if(this.selectedVilleId !== -1) {
      this.villeService.deleteVille(this.selectedVilleId)
      .subscribe(res => {
        this.displayVilles();
      }, error => {
        this.errorMsg = error.error.message;
      })
    }
  }
}
