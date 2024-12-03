import { Component } from '@angular/core';
import { UsuariolistaComponent } from '../usuariolista/usuariolista.component';
import { ListaEspecialidadesComponent } from '../lista-especialidades/lista-especialidades.component';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [UsuariolistaComponent, ListaEspecialidadesComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css',
})
export class ContenidoComponent {}
