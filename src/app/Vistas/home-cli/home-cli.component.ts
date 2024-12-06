import { Component } from '@angular/core';
import { ContenidoComponent } from '../../Components/contenido/contenido.component';
import { NavComponent } from '../../Components/nav/nav.component';
import { FooterdashComponent } from '../../Components/footerdash/footerdash.component';

@Component({
  selector: 'app-home-cli',
  standalone: true,
  imports: [ContenidoComponent, FooterdashComponent, NavComponent],
  templateUrl: './home-cli.component.html',
  styleUrl: './home-cli.component.css',
})
export class HomeCliComponent {}
