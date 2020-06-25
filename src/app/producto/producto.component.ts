import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  host: {
      "(click)": "closeOptions()"
  }
})

export class ProductoComponent implements OnInit {

    _id: string;
    producto: any;
    picActive = 0;

    articulo: any;

    @ViewChild('tallas', {static: false}) tallasRef: ElementRef;
    @ViewChild('colores', {static: false}) coloresRef: ElementRef;


    constructor(private activatedRoute: ActivatedRoute,
                private productosService: ProductosService) { }

    ngOnInit() {
        this._id = this.activatedRoute.snapshot.params._id;
        this.productosService.getProducto(this._id)
                                .subscribe((res: any) => {
                                    this.producto = res.producto;
                                    this.articulo = {
                                        talla: this.producto.tallas[0],
                                        color: this.producto.colores[0],
                                        cantidad: 0
                                    }
                                }, (error: any) => {
                                    console.log(error);
                                })
    }

    showPic(i) {
        this.picActive = i;
    }

    showTallas(event) {
        event.stopPropagation();
        this.tallasRef.nativeElement.classList.add('show');
    }

    setTalla(i) {
        this.articulo.talla = this.producto.tallas[i];
    }

    showColores(event) {
        event.stopPropagation();
        this.coloresRef.nativeElement.classList.add('show');
    }

    setColor(i) {
        this.articulo.color = this.producto.colores[i];
    }

    closeOptions() {
        this.tallasRef.nativeElement.classList.remove('show');
        this.coloresRef.nativeElement.classList.remove('show');
    }

    setCantidad(e) {
        if (this.articulo.cantidad === 0 && e === -1) {
            return;
        }
        this.articulo.cantidad +=e;
    }

}
