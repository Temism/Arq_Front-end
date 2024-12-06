import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PerfilComponent } from '../../Components/perfil/perfil.component';
import { NavComponent } from '../../Components/nav/nav.component';
@Component({
  selector: 'app-perfil-cli',
  standalone: true,
  imports: [CommonModule, PerfilComponent, NavComponent],
  templateUrl: './perfil-cli.component.html',
  styleUrl: './perfil-cli.component.css',
})
export class PerfilCliComponent {}
