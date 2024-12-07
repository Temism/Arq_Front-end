import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Services/servicios.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Servicio } from '../../Models/servicio';
import { ReservaService } from '../../Services/reserva.service';

@Component({
  selector: 'app-listar-servicios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css'],
})
export class ListarServiciosComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  serv: Servicio[] = [];
  filteredServicios: any[] = [];
  showModal = false;
  reservaForm: FormGroup;
  selectedServicio: any | null = null;

  constructor(
    private servicioService: ServiciosService,
    private fab: FormBuilder,
    private reservaservice: ReservaService
  ) {
    this.reservaForm = this.fab.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.servicioService.getallServicios().subscribe({
      next: (data: Servicio[]) => {
        this.serv = data;
        this.filteredServicios = data;
        console.log(this.serv);
      },
      error: (error) => console.error('Error al cargar servicios:', error),
    });
  }

  mostrarFormulario(servicio: any) {
    this.selectedServicio = servicio;
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
    this.reservaForm.reset();
    this.selectedServicio = null;
  }

  onSubmit() {
    if (this.reservaForm.valid && this.selectedServicio) {
      const reservaData = {
        fechaReserva: this.reservaForm.value.fecha,
        estadoReserva: 'Pendiente',
        horaReserva: this.reservaForm.value.hora,
        motivo: this.selectedServicio.nombreServicio,
        usuario: {
          idUsuario: this.user.idUsuario,
        },
        especialista: {
          idUsuario: this.selectedServicio.usuario.idUsuario,
        },
      };

      console.log('Reserva enviada:', reservaData);
      alert('Reserva creada con éxito');
      this.cerrarModal();

      this.reservaservice.createReserva(reservaData).subscribe({
        next: (response) => {
          console.log('Reserva creada exitosamente:', response);
        },
        error: (error) => {
          console.error('Error al crear la reserva:', error);
        },
      });
    }
  }
}
