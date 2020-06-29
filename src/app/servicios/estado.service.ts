import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

    private usuarioLogueadoIn = new BehaviorSubject<any>({usuarioLogueado: false});

    get isUsuarioLoguedaoIn() {
        return this.usuarioLogueadoIn.asObservable();
    }

    constructor(private router: Router) { }

    setLogin() {
        this.usuarioLogueadoIn.next({usuarioLogueado: true});
    }

    setLogout() {
        this.usuarioLogueadoIn.next({usuarioLogueado: false});
        this.router.navigate(['/']);
    }

}
