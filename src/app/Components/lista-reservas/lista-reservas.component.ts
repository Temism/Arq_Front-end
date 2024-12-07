import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../Services/reserva.service';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../Models/reserva';
import { Usuario } from '../../Models/usuario';

@Component({
  selector: 'app-lista-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reservas.component.html',
  styleUrl: './lista-reservas.component.css',
})
export class ListaReservasComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit() {
    if (this.user.idUsuario) {
      // Asegúrate de usar la propiedad correcta del usuario
      this.reservaService.getReserva(this.user.idUsuario).subscribe({
        next: (data) => {
          this.reservas = data;
          console.log('Reservas cargadas:', this.reservas);
        },
        error: (error) => {
          console.error('Error al cargar las reservas:', error);
        },
      });
    } else {
      console.error('No se encontró ID de usuario');
    }
  }

  verDetalle(reserva: Reserva) {
    alert(
      `Detalles de la reserva:\n\nMotivo: ${reserva.motivo}\nEstado: ${reserva.estadoReserva}`
    );
    console.log(reserva);
  }
}
