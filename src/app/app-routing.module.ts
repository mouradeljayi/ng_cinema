import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CinemaPageComponent } from './pages/cinemas/cinema-page/cinema-page.component';
import { AddCinemaComponent } from './pages/cinemas/add-cinema/add-cinema.component';
import { CategoryPageComponent } from './pages/categories/category-page/category-page.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { FilmPageComponent } from './pages/films/film-page/film-page.component';
import { AddFilmComponent } from './pages/films/add-film/add-film.component';
import { VillePageComponent } from './pages/villes/ville-page/ville-page.component';
import { AddVilleComponent } from './pages/villes/add-ville/add-ville.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: "welcome",
        component: WelcomePageComponent,
      },
      {
        path: "cinemas",
        component: CinemaPageComponent,
      },    
      {
        path: "addcinema",
        component: AddCinemaComponent,
      },
      {
        path: "categories",
        component: CategoryPageComponent,
      },
      {
        path: "addcategory",
        component: AddCategoryComponent,
      },
      {
        path: "addcategory/:idCategory",
        component: AddCategoryComponent,
      },      
      {
        path: "films",
        component: FilmPageComponent,
      },
      {
        path: "addfilm",
        component: AddFilmComponent,
      },
      {
        path: "villes",
        component: VillePageComponent,
      },
      {
        path: "addVille",
        component: AddVilleComponent,
      },        
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
