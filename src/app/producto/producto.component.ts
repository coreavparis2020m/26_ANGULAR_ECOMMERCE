import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

    _id: string;
    producto: any;

    constructor(private activatedRoute: ActivatedRoute,
                private productosService: ProductosService) { }

    ngOnInit() {
        this._id = this.activatedRoute.snapshot.params._id;
        this.productosService.getProducto(this._id)
                                .subscribe((res: any) => {
                                    this.producto = res.producto;
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

}
