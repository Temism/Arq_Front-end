import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../Services/usuario.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-usuariolista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usuariolista.component.html',
  styleUrl: './usuariolista.component.css',
})
export class UsuariolistaComponent implements OnInit {
  usuario: any[] = [];
  showModal = false;
  reservaForm: FormGroup;
  selectedUser: any;

  constructor(private usuarioservice: UsuarioService, private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.usuarioservice.getalluser().subscribe((data: any[]) => {
      this.usuario = data.filter(
        (user) => user.tipoUsuario.idTipoUsuario === 2
      );
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
      // Aquí iría la lógica para enviar la reserva al backend
      this.cerrarModal();
    }
  }

  getStars(calificacion: number): number[] {
    return Array(Math.round(calificacion)).fill(0);
  }
}
