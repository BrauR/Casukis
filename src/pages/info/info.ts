import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  casas;
  favoritos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casas = this.navParams.get('casas');
    this.favoritos = this.navParams.get('favoritos');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  clickFav()
    {
      this.favoritos.push(this.casas);
      this.navCtrl.pop();
    }
  

}
