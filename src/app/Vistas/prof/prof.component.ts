import { Component } from '@angular/core';
import { NavprofComponent } from '../../Components/navprof/navprof.component';
import { ListaServiciosEspComponent } from '../../Components/lista-servicios-esp/lista-servicios-esp.component';

@Component({
  selector: 'app-prof',
  standalone: true,
  imports: [NavprofComponent, ListaServiciosEspComponent],
  templateUrl: './prof.component.html',
  styleUrl: './prof.component.css',
})
export class ProfComponent {}
