import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;
  esperando = false;
  mensaje = '';
  
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
        this.formRegistro = new FormGroup({
            nombre: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            checkpass: new FormControl('', [Validators.required])
        })
  }

  sendUsuario() {
      this.esperando = true;
      let usuario = {
          nombre: this.formRegistro.get('nombre').value,
          email: this.formRegistro.get('email').value,
          password: this.formRegistro.get('password').value
      }
      this.usuariosService.postUsuario(usuario)
                            .subscribe((res: any) => {
                                this.esperando = false;
                                console.log(res);
                            }, (error: any) => {
                                this.esperando = false;
                                if(error.error.error.code === 11000) {
                                    this.mensaje = 'El email ya esta siendo utilizado';
                                } else {
                                    this.mensaje = 'El servidor no se encuentra disponible';
                                }
                            })
  }

}
