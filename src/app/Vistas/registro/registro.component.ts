import { Component } from '@angular/core';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { UsuarioformComponent } from '../../Components/usuarioform/usuarioform.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FooterComponent, ToolbarComponent, UsuarioformComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {}
