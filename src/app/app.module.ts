import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CinemaPageComponent } from './pages/cinemas/cinema-page/cinema-page.component';
import { CinemaDetailComponent } from './components/cinema-detail/cinema-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AddCinemaComponent } from './pages/cinemas/add-cinema/add-cinema.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { CategoryPageComponent } from './pages/categories/category-page/category-page.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { FilmPageComponent } from './pages/films/film-page/film-page.component';
import { AddFilmComponent } from './pages/films/add-film/add-film.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { VilleDetailComponent } from './components/ville-detail/ville-detail.component';
import { VillePageComponent } from './pages/villes/ville-page/ville-page.component';
import { AddVilleComponent } from './pages/villes/add-ville/add-ville.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    MenuComponent,
    WelcomePageComponent,
    HeaderComponent,
    CinemaPageComponent,
    CinemaDetailComponent,
    PaginationComponent,
    AddCinemaComponent,
    AddCategoryComponent,
    CategoryPageComponent,
    CategoryDetailComponent,
    FilmPageComponent,
    AddFilmComponent,
    FilmDetailComponent,
    VilleDetailComponent,
    VillePageComponent,
    AddVilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
