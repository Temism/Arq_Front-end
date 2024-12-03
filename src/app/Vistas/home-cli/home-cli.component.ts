import { Component } from '@angular/core';
import { ContenidoComponent } from '../../Components/contenido/contenido.component';

import { SidebarComponent } from '../../Components/sidebar/sidebar.component';

import { FooterdashComponent } from '../../Components/footerdash/footerdash.component';

@Component({
  selector: 'app-home-cli',
  standalone: true,
  imports: [ContenidoComponent, SidebarComponent, FooterdashComponent],
  templateUrl: './home-cli.component.html',
  styleUrl: './home-cli.component.css',
})
export class HomeCliComponent {}
