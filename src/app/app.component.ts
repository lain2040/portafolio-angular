import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  
  constructor( public infoPaginaService:InfopaginaService){}

}
