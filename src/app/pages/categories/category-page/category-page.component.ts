import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  listCategories: Array<Categorie> = [];
  errorMsg = "";
  //category: Categorie = new Categorie();
  selectedCategoryId? = -1;

  constructor(private router:Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.displayCategories();
  }

  displayCategories() {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.listCategories = res;
    });
  }

  newCategory() {
    this.router.navigate(["addcategory"]);
  }

  editCategory(id: any) {
    this.router.navigate(["addcategory", id]);
  }

  selectCategory(id?: number) {
    this.selectedCategoryId = id;
  }

  deleteCategory() {
    if(this.selectedCategoryId !== -1) {
      this.categoryService.deleteCategory(this.selectedCategoryId)
      .subscribe(res => {
        this.displayCategories();
      }, error => {
        this.errorMsg = error.error.message;
      })
    }
  }
}
