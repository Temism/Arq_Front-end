import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';
@Component({
  selector: 'app-eres-profesional',
  standalone: true,
  imports: [FooterComponent, ToolbarComponent],
  templateUrl: './eres-profesional.component.html',
  styleUrl: './eres-profesional.component.css',
})
export class EresProfesionalComponent {}
