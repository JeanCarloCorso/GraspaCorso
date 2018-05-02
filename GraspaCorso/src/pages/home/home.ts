import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProdutoPage } from '../produto/produto';

import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  pageProduto(nome: string, preco: string, foto: string){  
    this.navCtrl.push(ProdutoPage, {'nome': nome, 'preco': preco, 'foto': foto});
  }

  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

}
