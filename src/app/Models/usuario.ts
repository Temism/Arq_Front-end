import { Especialidad } from './especialidad';

export interface Usuario {
  idUsuario: number;
  nombre: string;
  apMaterno: string;
  apPaterno: string;
  telefono: number;
  calificacionprom: number;
  imagenUrl: any;
  email: string;
  contrasena: string;
  tipoUsuario: { idTipoUsuario: number; descripcion: string };
  especialidades: string[];
}
