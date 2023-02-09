import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InfopaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _service:InfopaginaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto( termino:string ){
    if(termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);
    console.log(termino);

  }

}
