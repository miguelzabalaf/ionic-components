import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista' , {static: false}) lista: IonList;

  public titulo = 'List and Option Sliding';

  public users: Observable<any>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite( user ) {
    console.log( `Se ha asignado de favorito a ${user.name}`);
    this.lista.closeSlidingItems();
  }
  borrar( user ) {
    console.log(`Se ha "borrado" a ${user.name}`);
    this.lista.closeSlidingItems();
  }

}
