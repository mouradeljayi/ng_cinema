import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  newCategory() {
    this.router.navigate(["addcategory"]);
  }
}
