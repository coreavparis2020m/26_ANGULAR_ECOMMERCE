import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

    usuario: any = {};
    private usuarioIn = new BehaviorSubject<any>({usuarioLogueado: false, usuario: this.usuario});

    get isUsuarioIn() {
        return this.usuarioIn.asObservable();
    }

    constructor(private router: Router) { }

    setLogin(usuario) {
        this.usuario = usuario;
        this.usuarioIn.next({usuarioLogueado: true, usuario: this.usuario});
    }

    setLogout() {
        this.usuarioIn.next({usuarioLogueado: false});
        this.router.navigate(['/']);
    }

}
