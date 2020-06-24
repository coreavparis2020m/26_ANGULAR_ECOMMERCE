import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    urlProductos = environment.urlProductos;

    constructor(private http: HttpClient) { }

    getProductos() {
        return this.http.get(this.urlProductos)
                        .pipe(
                            map ((res: any) => {
                                return res
                            })
                        )
    }


}
