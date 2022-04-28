import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ville-page',
  templateUrl: './ville-page.component.html',
  styleUrls: ['./ville-page.component.css']
})
export class VillePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newVille() {
    this.router.navigate(["addVille"]);
  }
}
