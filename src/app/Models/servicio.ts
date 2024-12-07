export interface Servicio {
  idServicio: number;
  nombreServicio: string;
  descripcionServicio: string;
  valorServicio: number;
  horario: string;
  usuario: {
    idUsuario: number;
    nombre: string;
    email: string;
    telefono: string;
  };
}
