import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup
  
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
      let usuario = {
          nombre: this.formRegistro.get('nombre').value,
          email: this.formRegistro.get('email').value,
          password: this.formRegistro.get('password').value
      }
      this.usuariosService.postUsuario(usuario)
                            .subscribe((res: any) => {
                                console.log(res);
                            }, (error: any) => {
                                console.log(error);
                            })
  }

}
