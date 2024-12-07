import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';
import { UsuarioService } from '../../Services/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    ToolbarComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  usuarios: any[] = [];
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.usuarioService.getalluser().subscribe((data: any[]) => {
      this.usuarios = data;
      console.log('Usuarios:', this.usuarios);
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      setTimeout(() => {
        this.isLoading = false;

        const usuarioValido = this.usuarios.find(
          (user) => user.email === email && user.contrasena === password
        );

        if (usuarioValido) {
          console.log('Login exitoso:', usuarioValido);
          alert(`Bienvenido, ${usuarioValido.nombre || 'Usuario'}!`);
          localStorage.setItem('user', JSON.stringify(usuarioValido));
          this.router.navigate(['/perfil-cli']);
        } else {
          console.error('Credenciales inválidas');
          alert('Correo o contraseña incorrectos');
        }
      }, 1500);
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
