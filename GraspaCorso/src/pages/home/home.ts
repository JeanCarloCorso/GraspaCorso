import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProdutoPage } from '../produto/produto';
import { HttpClient } from '@angular/common/http';
import { CarrinhoPage } from '../carrinho/carrinho';

import { ProdutosProvider } from '../../providers/produtos/produtos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.produtos = this.httpClient.get('127.0.0.1:8000/api/produto');
    
    //console.log('produtos ---------------- ', this.httpClient.get('127.0.0.1:8000/api/produto'));
    this.produtos.subscribe(data => {
      console.log('my data: ', data);
    })
  }*/

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public produtoProvider:ProdutosProvider) {
    
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  pageProduto(nome: string, preco: string, foto: string){  
    this.navCtrl.push(ProdutoPage, {'nome': nome, 'preco': preco, 'foto': foto});
  }

  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

  ionViewDidLoad(){
    this.produtoProvider.getRemoteData();
  }

}
