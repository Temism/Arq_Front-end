import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../Services/usuario.service';

@Component({
  selector: 'app-usuariolista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuariolista.component.html',
  styleUrl: './usuariolista.component.css',
})
export class UsuariolistaComponent implements OnInit {
  usuario: any[] = [];

  constructor(private usuarioservice: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioservice.getalluser().subscribe((data: any[]) => {
      console.log(data);
      this.usuario = data;
    });
  }

  borrarusuario(id: number) {
    this.usuarioservice.deleteUser(id).subscribe(() => {
      console.log(id);
      this.usuario = this.usuario.filter((usuario) => usuario.id !== id);
    });
  }
  getStars(calificacion: number): number[] {
    return Array(Math.round(calificacion)).fill(0);
  }
}
