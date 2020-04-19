import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  public titulo: string;

  public fechaNaci: Date = new Date();

  customPickerOptions;
  customDate;

  constructor() { 
    this.titulo = "DateTime"
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Salvar',
        handler: ( evento ) => {
          console.log("Clicked save!");
          console.log( evento )
        } 
      }, {
        text: 'Log',
        handler: () => {
          console.log("Clicked Log");
          return false;
        } 
      }]
    }
  }

  cambioFecha( event ) {
    console.log('ionCange', event)
  }

}
