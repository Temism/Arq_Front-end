import { Component } from '@angular/core';
import { NavComponent } from '../../Components/nav/nav.component';
import { ListarServiciosComponent } from '../../Components/listar-servicios/listar-servicios.component';

@Component({
  selector: 'app-serviciospubli',
  standalone: true,
  imports: [NavComponent, ListarServiciosComponent],
  templateUrl: './serviciospubli.component.html',
  styleUrl: './serviciospubli.component.css',
})
export class ServiciospubliComponent {}
