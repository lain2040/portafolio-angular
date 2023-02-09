import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[]=[];
  productosFiltrado: Producto[]=[];
  cargando = true;

  constructor( private http:HttpClient) { 
    this.cargarProdutos();
  }

  private  cargarProdutos(){

    return new Promise( ( resolve, reject ) => {
      this.http.get<Producto[]>("https://portafolio-db967-default-rtdb.asia-southeast1.firebasedatabase.app/productos_idx.json")
      .subscribe((resp: Producto[])=>{
        this.productos = resp;
        // console.log(resp);

        // Para ver si funciona el loading, no es necesario
        // setTimeout(()=>{
        //     this.cargando = false;
        // },2000);

        this.cargando=false;
        resolve;
      });
    });
    
  }

  getProducto(id: string){
    return this.http.get(`https://portafolio-db967-default-rtdb.asia-southeast1.firebasedatabase.app/productos/${ id }.json`)
  }

  buscarProducto(termino:string){
    
    if(this.productos.length===0){
      //cargar productos
      this.cargarProdutos().then(()=>{
        //Ejecutar despues de tener los productos
        //Aplicar filtro
        this.filtrarProductos(termino);

      });
    }else{
      //Aplicar filtro
      this.filtrarProductos(termino);
    }

    // this.productosFiltrado = this.productos.filter( producto => {
    //   return true;
    // });

    // console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino:string){
    // console.log(this.productos);
    this.productosFiltrado=[];

    termino = termino.toLowerCase();

    this.productos.forEach(prod =>{
      const tituloLower = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino )>= 0){
          this.productosFiltrado.push(prod);
      }
    })
  }
}
