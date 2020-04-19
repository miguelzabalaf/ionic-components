import { Component, OnInit } from '@angular/core';
import { Pagina } from '../../models/paginas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public paginas: Array<Pagina>

  constructor() {
    this.paginas = [
      new Pagina ('alert', '/alert'),
      new Pagina ('action-sheet', '/action-sheet'),
      new Pagina ('Avatar', '/avatar'),
      new Pagina ('Botones', '/botones')
    ];
  }

  ngOnInit() {
    console.log(this.paginas);
  }

}
