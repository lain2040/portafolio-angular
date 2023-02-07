import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto : ProductoDescripcion;
  id:string;

  constructor( private route:ActivatedRoute, 
                public productoServices:ProductosService) { }


  ngOnInit(): void {
    this.route.params
    .subscribe(parametros => {
      console.log(parametros['id']);
      this.productoServices.getProducto(parametros['id'])
      .subscribe( (data : ProductoDescripcion) => {
        this.id=parametros['id'];
        console.log(data);
        this.producto = data;
      });
    })
  }

}
