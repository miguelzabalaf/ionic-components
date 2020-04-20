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
      new Pagina ('alerts', '/alert'),
      new Pagina ('action-sheets', '/action-sheet'),
      new Pagina ('Avatars', '/avatar'),
      new Pagina ('Botones', '/botones'),
      new Pagina ('cards', '/card'),
      new Pagina ('Checkbox', '/checkbox'),
      new Pagina ('DateTime', '/date-time'),
      new Pagina ('Fab fixed', '/fab'),
      new Pagina ('Grid', '/grid'),
      new Pagina ('Infinite Scroll', '/infinite-scroll'),
      new Pagina ('Input Login', '/input'),
      new Pagina ('List and Option List', '/list')
    ];
  }

  ngOnInit() {
    console.log(this.paginas);
  }

}
