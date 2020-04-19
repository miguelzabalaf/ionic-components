import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public titulo: string;

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    },
    {
      name: 'danger',
      selected: false
    }
  ]

  constructor() { 
    this.titulo = "Checkbox"
  }

  ngOnInit() {
  }

  onClick(check) {
    console.log(check)
  }

}
