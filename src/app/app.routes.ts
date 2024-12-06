import { RouterModule, Routes } from '@angular/router';
import { HomeCliComponent } from './Vistas/home-cli/home-cli.component';
import { LoginComponent } from './Vistas/login/login.component';
import { ComoFuncionaComponent } from './Vistas/como-funciona/como-funciona.component';
import { EresProfesionalComponent } from './Vistas/eres-profesional/eres-profesional.component';
import { NgModule } from '@angular/core';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { RegistroComponent } from './Vistas/registro/registro.component';
import { ServiciosComponent } from './Vistas/servicios/servicios.component';
import { PerfilCliComponent } from './Vistas/perfil-cli/perfil-cli.component';
import { ProfesionalesComponent } from './Vistas/profesionales/profesionales.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'home', component: HomeCliComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'eres-profesional', component: EresProfesionalComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'perfil-cli', component: PerfilCliComponent },
  { path: 'profesionales', component: ProfesionalesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
