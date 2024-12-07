export interface Reserva {
  idReserva: number;
  fechaReserva: string;
  estadoReserva: string;
  horaReserva: string;
  motivo: string;
  usuario: {
    idUsuario: number;
  };
  especialista: {
    idUsuario: number;
  };
}
