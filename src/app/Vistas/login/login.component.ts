import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../Components/footer/footer.component';
import { ToolbarComponent } from '../../Components/toolbar/toolbar.component';

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
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier cosa que necesites al cargar el componente
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;

      // Simulando una llamada al backend
      setTimeout(() => {
        this.isLoading = false;
        // Aquí implementarías la lógica real de login con tu servicio
        console.log('Credenciales:', this.loginForm.value);
        // Ejemplo de navegación después del login exitoso
        // this.router.navigate(['/dashboard']);
      }, 1500);
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  // Método auxiliar para marcar todos los campos como tocados
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Métodos getter para facilitar la validación en el template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
