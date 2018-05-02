import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from '../carrinho/carrinho';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  nome:any;
  preco:any;
  foto:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = this.navParams.get('nome');
    this.preco = this.navParams.get('preco');
    this.foto = this.navParams.get('foto');
  }

  adicionarCarrinho(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

}
