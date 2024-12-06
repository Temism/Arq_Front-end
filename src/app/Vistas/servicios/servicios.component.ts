import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../../Components/nav/nav.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {}
