export interface Usuario {
  idUsuario: number;
  nombre: string;
  apMaterno: string;
  apPaterno: string;
  telefono: string;
  email: string;
  contrasena: string;
  tipoUsuario: { idTipoUsuario: number; descripcion: string };
}
