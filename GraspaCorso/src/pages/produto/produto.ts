import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CarrinhoPage } from '../carrinho/carrinho';

import { ProdutosProvider } from '../../providers/produtos/produtos';
import { DatabaseProvider } from '../../providers/database/database';

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
  id:any;
  qtd:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoProvider:ProdutosProvider, public databaseProvider:DatabaseProvider) {
    this.id = this.navParams.get('id');
  }

  adicionarCarrinho(qtd){
    this.databaseProvider.adicionarCarrinho(this.id, this.qtd, this.nome, this.preco, this.foto);
  }

  ionViewDidLoad(){
    console.log(this.id);
    this.produtoProvider.getDadosProduto(this.id).subscribe(data => {
      this.id = data['id'];
      this.nome = data['name'];
      this.preco = data['preco'];
      this.foto = data['foto'];
      //this.nome = data['data'].name;
      console.log(data['name']);
    });
  }

  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

}
