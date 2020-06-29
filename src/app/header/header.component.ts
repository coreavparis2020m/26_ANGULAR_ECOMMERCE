import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../servicios/estado.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    subscripUsuarioLogueado: Subscription;
    usuarioLogueado: boolean;
    usuario:any;

    constructor(private estadoService: EstadoService) { }

    ngOnInit() {
        this.subscripUsuarioLogueado = this.estadoService.isUsuarioIn
                                            .subscribe((data: any) => {
                                                this.usuarioLogueado = data.usuarioLogueado;
                                                this.usuario = data.usuario;
                                            })
    }

    logOut() {
        this.estadoService.setLogout();
    }

}
