import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[]=[];
  cargando = true;

  constructor( private http:HttpClient) { 
    this.cargarProdutos();
  }

  private  cargarProdutos(){
    this.http.get<Producto[]>("https://portafolio-db967-default-rtdb.asia-southeast1.firebasedatabase.app/productos_idx.json")
      .subscribe((resp: Producto[])=>{
        this.productos = resp;
        console.log(resp);

        // Para ver si funciona el loading, no es necesario
        // setTimeout(()=>{
        //     this.cargando = false;
        // },2000);

        this.cargando=false;
      });
  }
}
