import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  favorito = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.favorito = this.navParams.get('favoritos')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

}
