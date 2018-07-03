import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from '../carrinho/carrinho';
/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.navCtrl.setRoot(PedidoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }
  
  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

}
