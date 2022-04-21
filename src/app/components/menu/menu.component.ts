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
      "url": '',
    },
    {
      'id': '2',
      "title": 'Catégories',
      "icon" : 'fa-solid fa-list-check',
      "url": '',
    },
    {
      'id': '3',
      "title": 'Films',
      "icon" : 'fa-solid fa-film',
      "url": '',
    },
    {
      'id': '4',
      "title": 'Salles',
      "icon" : 'fa-solid fa-dungeon',
      "url": '',
    },
    {
      'id': '5',
      "title": 'Places',
      "icon" : 'fa-solid fa-chair',
      "url": '',
    },
    {
      'id': '6',
      "title": 'Projections',
      "icon" : 'fa-solid fa-tv',
      "url": '',
    },
    {
      'id': '7',
      "title": 'Séances',
      "icon" : 'fa-solid fa-calendar-check',
      "url": '',
    },
    {
      'id': '8',
      "title": 'Villes',
      "icon" : 'fa-solid fa-city',
      "url": '',
    },
    {
      'id': '9',
      "title": 'Tickets',
      "icon" : 'fa-solid fa-ticket',
      "url": '',
    },
    {
      'id': '10',
      "title": 'Utilisateurs',
      "icon" : 'fa-solid fa-users',
      "url": '',
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
