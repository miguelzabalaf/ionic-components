import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  public titulo: string = "Loading"

  loading: any;

  constructor(private loadingCrtl: LoadingController) { }

  ngOnInit() {
    this.presentLoading("Espere un momento");

    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCrtl.create({
      // message: message, esto es lo mismo que solo message
      message,
      // duration: 500
    });
    return this.loading.present();
  }

}
