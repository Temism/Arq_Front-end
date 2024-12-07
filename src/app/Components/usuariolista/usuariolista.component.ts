import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../Services/usuario.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { AsignarEspecialidadesService } from '../../Services/asignar-especialidades.service';
import { ListarEspecialidadesService } from '../../Services/listar-especialidades.service';
import { Usuario } from '../../Models/usuario';
import { Especialidad } from '../../Models/especialidad';
import { ReservaService } from '../../Services/reserva.service';

@Component({
  selector: 'app-usuariolista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './usuariolista.component.html',
  styleUrls: ['./usuariolista.component.css'],
})
export class UsuariolistaComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  usuario: Usuario[] = [];
  especialidades: Especialidad[] = [];
  filteredUsuarios: Usuario[] = [];
  showModal = false;
  reservaForm: FormGroup;
  selectedUser: Usuario | null = null;
  especialidadFilter: string | null = null;
  nombreFilter: string = '';
  today: any;

  constructor(
    private usuarioservice: UsuarioService,
    private fb: FormBuilder,
    private especialdiadesservice: AsignarEspecialidadesService,
    private listarEspecialidadesservice: ListarEspecialidadesService,
    private reservaservice: ReservaService
  ) {
    this.reservaForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.usuarioservice.getalluser().subscribe({
      next: (data: Usuario[]) => {
        const usuariosFiltrados = data.filter(
          (user) => user.tipoUsuario.idTipoUsuario === 2
        );

        usuariosFiltrados.forEach((user) => {
          this.especialdiadesservice
            .obtenerespecialidades(user.idUsuario)
            .subscribe({
              next: (especialidades) => {
                user.especialidades = especialidades;
              },
              error: (error) =>
                console.error(
                  `Error al cargar especialidades para ${user.nombre}:`,
                  error
                ),
            });
        });

        this.usuario = usuariosFiltrados;
        this.filteredUsuarios = usuariosFiltrados;
      },
      error: (error) => console.error('Error al cargar usuarios:', error),
    });

    this.listarEspecialidadesservice.getallespecialidades().subscribe({
      next: (especialidades) => {
        this.especialidades = especialidades;
      },
      error: (error) => console.error('Error al cargar especialidades:', error),
    });
  }

  aplicarFiltros() {
    console.log('Aplicando filtros:');
    console.log('Filtro especialidad:', this.especialidadFilter);
    console.log('Filtro nombre:', this.nombreFilter);

    this.filteredUsuarios = this.usuario.filter((user) => {
      const matchesNombre = user.nombre
        .toLowerCase()
        .includes((this.nombreFilter || '').toLowerCase());

      if (this.especialidadFilter === null) {
        return matchesNombre;
      }

      if (!user.especialidades || user.especialidades.length === 0) {
        return false;
      }

      const matchesEspecialidad = user.especialidades.includes(
        this.especialidadFilter
      );

      console.log(`Usuario ${user.nombre}:`, {
        especialidades: user.especialidades,
        filtroEspecialidad: this.especialidadFilter,
        coincide: matchesEspecialidad,
      });

      return matchesNombre && matchesEspecialidad;
    });
  }

  mostrarFormulario(user: Usuario) {
    this.selectedUser = user;
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
    this.reservaForm.reset();
    this.selectedUser = null;
  }

  onSubmit() {
    if (this.reservaForm.valid && this.selectedUser && this.user.idUsuario) {
      const fecha = this.reservaForm.value.fecha;
      const hora = this.reservaForm.value.hora;
      const fechaHora = `${fecha}T${hora}:00`;

      const reservaData = {
        fechaReserva: fechaHora,
        estadoReserva: 'Pendiente',
        horaReserva: this.reservaForm.value.hora,
        motivo: this.reservaForm.value.motivo,
        usuario: {
          idUsuario: this.user.idUsuario,
        },
        especialista: {
          idUsuario: this.selectedUser.idUsuario,
        },
      };

      console.log('Reserva a enviar:', reservaData);

      this.reservaservice.createReserva(reservaData).subscribe({
        next: (response) => {
          console.log('Reserva creada exitosamente:', response);
          alert('Reserva creada con éxito');
          this.cerrarModal();
        },
        error: (error) => {
          console.error('Error al crear la reserva:', error);
          alert('Ocurrió un error al crear la reserva');
        },
      });
    } else {
      console.error('Formulario inválido o faltan datos necesarios');
    }
  }

  getStars(calificacion: number): number[] {
    return Array(Math.round(calificacion)).fill(0);
  }
}
