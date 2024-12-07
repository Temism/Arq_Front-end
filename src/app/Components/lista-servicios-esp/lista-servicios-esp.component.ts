import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Services/servicios.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lista-servicios-esp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './lista-servicios-esp.component.html',
  styleUrls: ['./lista-servicios-esp.component.css'],
})
export class ListaServiciosEspComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  serv: any[] = [];
  showModal: boolean = false;
  selectedServicio: any = null;
  servicioForm: FormGroup;

  constructor(
    private servicioService: ServiciosService,
    private fb: FormBuilder
  ) {
    this.servicioForm = this.fb.group({
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      valorServicio: ['', [Validators.required, Validators.min(0)]],
      horario: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios() {
    if (this.user.idUsuario) {
      this.servicioService.getServicioPorId(this.user.idUsuario).subscribe({
        next: (data) => {
          this.serv = data;
          console.log('Servicios cargados:', this.serv);
        },
        error: (err) => {
          console.error('Error al cargar servicios:', err);
          alert('Error al cargar los servicios');
        },
      });
    }
  }

  abrirModal(servicio: any = null) {
    this.selectedServicio = servicio;
    if (servicio) {
      this.servicioForm.patchValue({
        nombreServicio: servicio.nombreServicio,
        descripcionServicio: servicio.descripcionServicio,
        valorServicio: servicio.valorServicio,
        horario: servicio.horario,
      });
    } else {
      this.servicioForm.reset();
    }
    this.showModal = true;
    document.body.classList.add('modal-open');
  }

  cerrarModal() {
    this.showModal = false;
    this.selectedServicio = null;
    this.servicioForm.reset();
    document.body.classList.remove('modal-open');
  }

  guardarServicio() {
    if (this.servicioForm.valid) {
      // Crear el objeto con el formato correcto
      const servicioData = {
        nombreServicio: this.servicioForm.get('nombreServicio')?.value,
        descripcionServicio: this.servicioForm.get('descripcionServicio')
          ?.value,
        valorServicio: parseInt(this.servicioForm.get('valorServicio')?.value),
        horario: this.servicioForm.get('horario')?.value,
        usuario: {
          idUsuario: this.user.idUsuario,
        },
      };

      console.log('Datos a enviar:', servicioData);

      // Si es una actualización
      if (this.selectedServicio?.idServicio) {
        this.servicioService
          .updateServicio(this.selectedServicio.idServicio, servicioData)
          .subscribe({
            next: () => {
              this.obtenerServicios();
              this.cerrarModal();
              alert('Servicio actualizado exitosamente');
            },
            error: (err) => {
              console.error('Error al actualizar:', err);
              alert('Error al actualizar el servicio');
            },
          });
      } else {
        this.servicioService
          .createServicio(servicioData, this.user.idUsuario)
          .subscribe({
            next: () => {
              this.obtenerServicios();
              this.cerrarModal();
              alert('Servicio creado exitosamente');
            },
            error: (err) => {
              console.log('Datos enviados:', servicioData);
              console.error('Error al crear:', err);
              alert('Error al crear el servicio');
            },
          });
      }
    }
  }

  eliminarServicio(idServicio: number) {
    if (confirm('¿Está seguro que desea eliminar este servicio?')) {
      this.servicioService.deleteServicio(idServicio).subscribe({
        next: () => {
          this.obtenerServicios();
          alert('Servicio eliminado exitosamente');
        },
        error: (err) => {
          console.log(idServicio);
          console.error('Error al eliminar:', err);
          alert('Error al eliminar el servicio');
        },
      });
    }
  }
}
