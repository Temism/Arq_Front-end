import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Services/usuario.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  calificaciones: number = 0;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.calificaciones = 0;
    console.log('user', this.user);
    console.log('user', this.user.calificacionprom);
    this.getStars(this.calificaciones);
  }

  getStars(calificacion: number): number[] {
    return Array(Math.round(calificacion)).fill(0);
  }
}
