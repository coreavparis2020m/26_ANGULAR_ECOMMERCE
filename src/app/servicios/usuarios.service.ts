import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    urlUsuarios = environment.urlUsuarios;
    urlLogin = environment.urlLogin;

    constructor(private http: HttpClient) { }

    postUsuario(usuario) {
        return this.http.post(this.urlUsuarios, usuario)
                        .pipe(
                            map((res: any) => {
                                return res;
                            })
                        )
    }

    login(credenciales) {
        return this.http.post(this.urlLogin, credenciales)
                        .pipe(
                            map((res: any) => {
                                return res;
                            })
                        )    
    }

    getUsuario(_id) {
        return this.http.get(this.urlUsuarios + '/' + _id)
                        .pipe(
                            map((res: any) => {
                                return res;
                            })
                        )   
    }

}
