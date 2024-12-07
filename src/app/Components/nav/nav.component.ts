import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor() {}

  cerrarsesion() {
    localStorage.removeItem('user');
    window.location.href = '/login';
    console.log('cerrar sesión');
  }
}
