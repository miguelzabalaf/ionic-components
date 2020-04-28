import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public titulo: string = 'Popover'

  constructor( private popOverCtrl: PopoverController ) { }

  ngOnInit() {
  }

  async mostrarPop( evento ) {
    const popover = await this.popOverCtrl.create({
      component: PopinfoComponent,

      event: evento,
      mode: 'ios',
      // backdropDismiss: false

    });

    await popover.present();

  }

}
