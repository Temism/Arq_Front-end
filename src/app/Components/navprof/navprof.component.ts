import { Component } from '@angular/core';

@Component({
  selector: 'app-navprof',
  standalone: true,
  imports: [],
  templateUrl: './navprof.component.html',
  styleUrl: './navprof.component.css',
})
export class NavprofComponent {
  cerrarsesion() {
    localStorage.removeItem('user');
    window.location.href = '/login';
    console.log('cerrar sesión');
  }
}
