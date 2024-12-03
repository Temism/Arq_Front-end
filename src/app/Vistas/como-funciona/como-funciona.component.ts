import { Component } from '@angular/core';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-como-funciona',
  standalone: true,
  imports: [FooterComponent, ToolbarComponent, RouterModule],
  templateUrl: './como-funciona.component.html',
  styleUrl: './como-funciona.component.css',
})
export class ComoFuncionaComponent {}
