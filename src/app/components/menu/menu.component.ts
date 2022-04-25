import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      'id': '1',
      "title": 'Cinemas',
      "icon" : 'fa-solid fa-hotel',
      "url": 'cinemas',
    },
    {
      'id': '2',
      "title": 'Catégories',
      "icon" : 'fa-solid fa-list-check',
      "url": 'categories',
    },
    {
      'id': '3',
      "title": 'Films',
      "icon" : 'fa-solid fa-film',
      "url": 'films',
    },
    {
      'id': '4',
      "title": 'Salles',
      "icon" : 'fa-solid fa-dungeon',
      "url": 'salles',
    },
    {
      'id': '5',
      "title": 'Places',
      "icon" : 'fa-solid fa-chair',
      "url": 'places',
    },
    {
      'id': '6',
      "title": 'Projections',
      "icon" : 'fa-solid fa-tv',
      "url": 'projections',
    },
    {
      'id': '7',
      "title": 'Séances',
      "icon" : 'fa-solid fa-calendar-check',
      "url": 'seances',
    },
    {
      'id': '8',
      "title": 'Villes',
      "icon" : 'fa-solid fa-city',
      "url": 'villes',
    },
    {
      'id': '9',
      "title": 'Tickets',
      "icon" : 'fa-solid fa-ticket',
      "url": 'tickets',
    },
    {
      'id': '10',
      "title": 'Utilisateurs',
      "icon" : 'fa-solid fa-users',
      "url": 'users',
    },
];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuProperties;
  }
  navigate(url?: string) {
    return  this.router.navigate([url]);
  }
}
