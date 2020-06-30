import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AutenticacionGuard } from './guards/autenticacion.guard';
import { CestaComponent } from './cesta/cesta.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'producto/:_id', component: ProductoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'cesta', component: CestaComponent},
    {path: 'perfil', component: PerfilComponent, canActivate: [AutenticacionGuard]},
    {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
