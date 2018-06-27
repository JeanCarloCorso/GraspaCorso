import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CarrinhoPage } from '../carrinho/carrinho';

import { ProdutosProvider } from '../../providers/produtos/produtos';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoProvider:ProdutosProvider) {
  }

  adicionarCarrinho(){
    
  }

  ionViewDidLoad(){
    this.produtoProvider.getDadosProduto(this.id).subscribe(
      
      (data)=>{
        console.log(data['data']);
        this.nome = data['data.id'];
        this.preco = data['data.preco'];
        this.foto = data['data.foto'];
        console.log("----------909090909------------==================************");
      },
      (error)=>{
        console.error(error);
      }
    );
  }

  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

}
