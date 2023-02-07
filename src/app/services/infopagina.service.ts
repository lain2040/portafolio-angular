import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {}
  equipo: Equipo[] = []
  cargada = false;

  constructor(private http:HttpClient) { 
    // console.log('Servicio de infoPagina listo');
    this.cargarInfo();
    this.cargarEquipo();
   
  }

  private cargarInfo(){
     //Leer archivo json
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp:InfoPagina)=>{
       this.cargada = true;
       this.info = resp;
      //  console.log(resp);
     });
  }

  private cargarEquipo(){
    this.http.get<Equipo[]>('https://portafolio-db967-default-rtdb.asia-southeast1.firebasedatabase.app/equipo.json')
    .subscribe((resp:Equipo[])=>{
      this.equipo = resp;
      // console.log(resp);
    });
  }
}
