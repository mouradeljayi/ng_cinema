import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category: Categorie = new Categorie();
  errorMsg: Array<string> = [];

  constructor(
    private categoryService: CategoryService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params["idCategory"];
    if(idCategory) {
      this.categoryService.findById(idCategory)
      .subscribe( cat => {
        this.category = cat;
      })
    }
  }

  saveCategory() {
    this.categoryService.createCategory(this.category).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["categories"]);
      },
      error => {
        this.errorMsg.push("le champs name ne doit pas etre vide");
        console.log(error.error.errors[0].defaultMessage);
      });
  }
}
