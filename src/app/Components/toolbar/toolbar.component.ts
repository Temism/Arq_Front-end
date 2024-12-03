import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  logout() {
    // Implementar lógica de cierre de sesión
    console.log('Cerrar sesión');
  }
}
