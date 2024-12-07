import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../../Components/nav/nav.component';
import { ListaReservasComponent } from '../../Components/lista-reservas/lista-reservas.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, NavComponent, ListaReservasComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {}
