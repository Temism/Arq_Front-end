import { Component } from '@angular/core';
import { ListarEspecialidadesService } from '../../Services/listar-especialidades.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-especialidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-especialidades.component.html',
  styleUrl: './lista-especialidades.component.css',
})
export class ListaEspecialidadesComponent {
  constructor(private listaespecialidades: ListarEspecialidadesService) {}
  especialidades: any[] = [];

  ngOnInit(): void {
    this.listaespecialidades.getallespecialidades().subscribe((data: any[]) => {
      console.log(data);
      this.especialidades = data;
    });
  }
}
