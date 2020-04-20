import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  public nombre:string;

  public titulo: string = "Input login";

  usuario = {
    email: '',
    password: ''
  }
  
  constructor() { }

  ngOnInit() {

  }

  onSubmitTemplate() {
    console.log("Se han enviado los siguientes datos:")
    console.log(this.usuario);  
  }

}
