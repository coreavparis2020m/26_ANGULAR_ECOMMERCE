import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.scss']
})
export class CestaComponent implements OnInit {

    articulos: any = [];
    pedido: any = {
        articulos: [],
        total: 0
    }

    constructor() { }

    ngOnInit() {
        this.setPedido();
    }

    setPedido() {
        if(localStorage.getItem('articulos')){
            this.articulos = JSON.parse(localStorage.getItem('articulos'));
        }
        this.articulos.forEach(articulo => {
            articulo.importe = articulo.cantidad * articulo.precio;
            this.pedido.total += articulo.importe;
        })
        this.pedido.articulos = this.articulos;
    }

}
