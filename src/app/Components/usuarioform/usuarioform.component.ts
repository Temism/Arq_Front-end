import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../Services/usuario.service';
import { Router } from '@angular/router';
import { ListarEspecialidadesService } from '../../Services/listar-especialidades.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AsignarEspecialidadesService } from '../../Services/asignar-especialidades.service';
import { Usuario } from '../../Models/usuario';

@Component({
  selector: 'app-usuarioform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuarioform.component.html',
  styleUrl: './usuarioform.component.css',
})
export class UsuarioformComponent implements OnInit {
  registroForm!: FormGroup;
  especialidades: any[] = [];
  especialidadesSeleccionadas: number[] = [];
  http: any;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private lista: ListarEspecialidadesService,
    private asignar: AsignarEspecialidadesService
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apPaterno: ['', [Validators.required]],
      apMaterno: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      contrasena: ['', [Validators.required, Validators.minLength(7)]],
      tipoUsuario: this.fb.group({
        idTipoUsuario: [1, [Validators.required]],
      }),
    });
    this.cargarEspecialidades();
  }

  cargarEspecialidades() {
    this.lista.getallespecialidades().subscribe((data) => {
      this.especialidades = data;
      console.log(data);
    });
  }

  onTipoUsuarioChange(event: any) {
    if (event.target.value === '2') {
      const modalElement = document.getElementById('especialidadesModal');
      if (modalElement) {
        modalElement.classList.add('show');
        modalElement.style.display = 'block';
        modalElement.setAttribute('aria-modal', 'true');
        modalElement.removeAttribute('aria-hidden');
      }
    }
  }

  onEspecialidadChange(event: any) {
    const id = +event.target.value;
    if (event.target.checked) {
      this.especialidadesSeleccionadas.push(id);
    } else {
      this.especialidadesSeleccionadas =
        this.especialidadesSeleccionadas.filter((espId) => espId !== id);
    }
  }

  guardarEspecialidades() {
    const modalElement = document.getElementById('especialidadesModal');

    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      modalElement.setAttribute('aria-hidden', 'true');
      modalElement.removeAttribute('aria-modal');
    }
    console.log(
      'Especialidades seleccionadas:',
      this.especialidadesSeleccionadas
    );
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const usuario = this.registroForm.value;

      this.usuarioService.createUser(usuario).subscribe(
        (response: Usuario) => {
          const userId = response.idUsuario;
          console.log('Usuario registrado con ID:', userId);
          this.asignar
            .asignarEspecialidades(userId, this.especialidadesSeleccionadas)
            .subscribe(
              (response: any) => {
                console.log('Especialidades asignadas correctamente');

                this.router.navigate(['/login']);
              },
              (error) => {
                console.error('Error al registrar', error);
              }
            );
        },
        (error) => {
          console.error('Error al registrar', error);
        }
      );
    }
  }
}
