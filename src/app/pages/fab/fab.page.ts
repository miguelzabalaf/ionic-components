import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  public titulo: string = "Fab fixed";

  public data: Array<any> = Array(100); //Crear un arreglo de 100 posiciones vacío

  constructor() { }

  ngOnInit() {
  }

}
