import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../Services/usuario.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarioform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuarioform.component.html',
  styleUrl: './usuarioform.component.css',
})
export class UsuarioformComponent implements OnInit {
  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
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
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      // Obtener los valores del formulario
      const usuario = this.registroForm.value;

      // Llamar al servicio para crear el usuario
      this.usuarioService.createUser(usuario).subscribe(
        (response) => {
          console.log('Registro exitoso', response);

          // Redirigir a la página de inicio de sesión
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al registrar', error);
        }
      );
    }
  }
}
