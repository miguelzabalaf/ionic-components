import { Component, OnInit } from '@angular/core';
import { Pagina } from '../../models/paginas';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public paginas: Array<Pagina>

  constructor(private menuCtrl: MenuController) {
    this.paginas = [
      new Pagina ('Alerts', '/alert'),
      new Pagina ('Action-sheets', '/action-sheet'),
      new Pagina ('Avatars', '/avatar'),
      new Pagina ('Botones', '/botones'),
      new Pagina ('cards', '/card'),
      new Pagina ('Checkbox', '/checkbox'),
      new Pagina ('DateTime', '/date-time'),
      new Pagina ('Fab fixed', '/fab'),
      new Pagina ('Grid', '/grid'),
      new Pagina ('Infinite Scroll', '/infinite-scroll'),
      new Pagina ('Input Login', '/input'),
      new Pagina ('List and Option List', '/list'),
      new Pagina ('List Reorder', '/list-reorder'),
      new Pagina ('Loading', '/loading'),
      new Pagina ('Modal', '/modal'),
      new Pagina ('Popover', '/popover')
    ];
  }

  ngOnInit() {
    console.log(this.paginas);

  }
  
  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
