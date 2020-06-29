import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { EstadoService } from 'src/app/servicios/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;
    mensaje = '';
    esperando = false;

    constructor(private usuariosService: UsuariosService,
                private estadoService: EstadoService,
                private router: Router) { }

    ngOnInit() {
        this.formLogin = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    sendAut() {
        this.esperando = true;
        let credenciales = {
            email: this.formLogin.get('email').value,
            password: this.formLogin.get('password').value
        }
        this.usuariosService.login(credenciales)
                            .subscribe((res: any) => {
                                this.estadoService.setLogin();
                                this.esperando = false;
                                this.router.navigate(['/']);
                            }, (error: any) => {
                                this.esperando = false;
                                if(error.error.mensaje) {
                                    this.mensaje = error.error.mensaje;
                                }
                            })
  }

}
