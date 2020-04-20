import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  public titulo: string = "Infinity Scroll"

  public array: any = [];
  public i: number = 0;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.array.push(i)
    }
  }

  loadData(event) {
    console.log("Cargando próximos items");

    setTimeout(()=> {

      if (this.array.length > 100) {
        event.target.complete();
        return;
      }

      const nuevoArray = Array(20);
      this.array.push(...nuevoArray);
      event.target.complete();
      // Cargará elementos de 20 en 20
    }, 500);
  }
}
