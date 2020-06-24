import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  productos: any;
  
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
      this.productosService.getProductos()
                            .subscribe((res: any) => {
                                this.productos = res.productos;
                            }, (error: any) => {
                                console.log(error);
                            })
  }

}
