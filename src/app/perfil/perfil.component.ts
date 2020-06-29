import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EstadoService } from '../servicios/estado.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

    formPerfil: FormGroup;
    subscripUsuarioLogueado: Subscription;
    usuario:any;

    constructor(private estadoService: EstadoService,
                private usuariosService: UsuariosService) { }

    ngOnInit() {
        this.formPerfil = new FormGroup({
            nombre: new FormControl(''),
            email: new FormControl('')
        })
        this.subscripUsuarioLogueado = this.estadoService.isUsuarioIn
                                    .subscribe((data: any) => {
                                        this.usuariosService.getUsuario(data.usuario._id)
                                                .subscribe((res: any) => {
                                                    this.usuario = res.usuario;
                                                    this.formPerfil.get('nombre').setValue(this.usuario.nombre);
                                                    this.formPerfil.get('email').setValue(this.usuario.email);
                                                }, (error: any) => {
                                                    console.log(error);
                                                })
                                    })
    }

}
