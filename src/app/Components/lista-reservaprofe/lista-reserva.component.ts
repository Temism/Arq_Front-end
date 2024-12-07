import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../Models/reserva';
import { ReservaService } from '../../Services/reserva.service';

@Component({
  selector: 'app-lista-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-reserva.component.html',
  styleUrl: './lista-reserva.component.css',
})
export class ListaReservaComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    if (this.user.idUsuario) {
      this.reservaService
        .getReservaEspecialista(this.user.idUsuario)
        .subscribe({
          next: (data) => {
            this.reservas = data;
            console.log('Reservas cargadas:', this.reservas);
          },
          error: (error) => {
            console.error('Error al cargar las reservas:', error);
          },
        });
    }
  }

  aceptarReserva(idReserva: number): void {
    this.reservaService
      .actualizarEstadoReserva(idReserva, 'Aceptada')
      .subscribe({
        next: (reservaActualizada) => {
          console.log('Reserva actualizada:', reservaActualizada);

          this.reservas = this.reservas.map((reserva) =>
            reserva.idReserva === idReserva
              ? { ...reserva, estadoReserva: 'Aceptada' }
              : reserva
          );
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
        },
      });
  }

  rechazarReserva(idReserva: number): void {
    this.reservaService
      .actualizarEstadoReserva(idReserva, 'Cancelada')
      .subscribe({
        next: (reservaActualizada) => {
          console.log('Reserva actualizada:', reservaActualizada);

          this.reservas = this.reservas.map((reserva) =>
            reserva.idReserva === idReserva
              ? { ...reserva, estadoReserva: 'Cancelada' }
              : reserva
          );
        },
        error: (error) => {
          console.error('Error al actualizar:', error);
        },
      });
  }
}
