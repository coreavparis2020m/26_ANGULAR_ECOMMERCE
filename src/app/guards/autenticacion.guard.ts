import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EstadoService } from '../servicios/estado.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionGuard implements CanActivate {

    subscripUsuarioLogueado: Subscription;
    usuarioLogueado: boolean;

    constructor(private estadoService: EstadoService,
                private router: Router) {
        this.subscripUsuarioLogueado = this.estadoService.isUsuarioIn
                                            .subscribe((data: any) => {
                                                this.usuarioLogueado = data.usuarioLogueado;
                                            })
    }

    canActivate(): boolean {

        if(this.usuarioLogueado) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
  
}
