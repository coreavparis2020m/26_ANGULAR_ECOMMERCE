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

    constructor(private estadoService: EstadoService) { }

    ngOnInit() {
        this.subscripUsuarioLogueado = this.estadoService.isUsuarioLoguedaoIn
                                            .subscribe((data: any) => {
                                                this.usuarioLogueado = data.usuarioLogueado;
                                            })
    }

    logOut() {
        this.estadoService.setLogout();
    }

}
