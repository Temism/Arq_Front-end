import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [FooterComponent, ToolbarComponent],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css',
})
export class BienvenidoComponent {}
