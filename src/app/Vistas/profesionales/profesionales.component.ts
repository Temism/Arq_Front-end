import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../../Components/nav/nav.component';
import { UsuariolistaComponent } from '../../Components/usuariolista/usuariolista.component';
import { ListaEspecialidadesComponent } from '../../Components/lista-especialidades/lista-especialidades.component';

@Component({
  selector: 'app-profesionales',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    UsuariolistaComponent,
    ListaEspecialidadesComponent,
  ],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css',
})
export class ProfesionalesComponent {}
