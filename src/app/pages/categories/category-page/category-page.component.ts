import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieDto } from 'src/app/models/category-dto';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  listCategories: Array<CategorieDto> = [];

  constructor(private router:Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.listCategories = res;
    });
  }

  newCategory() {
    this.router.navigate(["addcategory"]);
  }
}
