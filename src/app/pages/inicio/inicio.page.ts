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
      new Pagina ('DateTime', '/date-time')
    ];
  }

  ngOnInit() {
    console.log(this.paginas);
  }

}
