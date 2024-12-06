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

@Component({
  selector: 'app-usuariolista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './usuariolista.component.html',
  styleUrls: ['./usuariolista.component.css'],
})
export class UsuariolistaComponent implements OnInit {
  usuario: Usuario[] = [];
  especialidades: Especialidad[] = [];
  filteredUsuarios: Usuario[] = [];
  showModal = false;
  reservaForm: FormGroup;
  selectedUser: any;
  especialidadFilter: string | null = null;
  nombreFilter: string = '';

  constructor(
    private usuarioservice: UsuarioService,
    private fb: FormBuilder,
    private especialdiadesservice: AsignarEspecialidadesService,
    private listarEspecialidadesservice: ListarEspecialidadesService
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
                console.log(
                  `Especialidades para ${user.nombre}:`,
                  especialidades
                );
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
        console.log('Especialidades cargadas:', especialidades);
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

  mostrarFormulario(user: any) {
    this.selectedUser = user;
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
    this.reservaForm.reset();
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      const reserva = {
        ...this.reservaForm.value,
        profesionalId: this.selectedUser.id,
        fecha: new Date(this.reservaForm.value.fecha),
      };

      console.log('Reserva a enviar:', reserva);

      this.cerrarModal();
    }
  }

  getStars(calificacion: number): number[] {
    return Array(Math.round(calificacion)).fill(0);
  }
}
