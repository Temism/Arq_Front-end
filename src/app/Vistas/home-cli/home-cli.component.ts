import { Component } from '@angular/core';
import { ContenidoComponent } from '../../Components/contenido/contenido.component';
import { FooterdashComponent } from '../../Components/footerdash/footerdash.component';
import { NavprofComponent } from '../../Components/navprof/navprof.component';
import { ListaReservaComponent } from '../../Components/lista-reservaprofe/lista-reserva.component';

@Component({
  selector: 'app-home-cli',
  standalone: true,
  imports: [NavprofComponent, ListaReservaComponent],
  templateUrl: './home-cli.component.html',
  styleUrl: './home-cli.component.css',
})
export class HomeCliComponent {}
