import { Component, OnInit } from '@angular/core';

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/search', name: 'search', icon: 'search' },
  { link: '/collection', name: 'collection', icon: 'list' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public links: any[] = [];

  ngOnInit(): void {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map(link => {
      link.name = `sidebar.${link.name}`;
      return link;
    });
  }
}
