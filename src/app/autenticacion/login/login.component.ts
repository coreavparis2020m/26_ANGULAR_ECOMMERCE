import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formLogin: FormGroup;

    constructor(private usuariosService: UsuariosService) { }

    ngOnInit() {
        this.formLogin = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        })
    }

    sendAut() {
      let credenciales = {
          email: this.formLogin.get('email').value,
          password: this.formLogin.get('password').value
      }
      this.usuariosService.login(credenciales)
                            .subscribe((res: any) => {
                                console.log(res);
                            }, (error: any) => {
                                console.log(error);
                            })
  }

}
