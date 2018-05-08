import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams){//, public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  /*adicionar(){
    this.sqlite.create({
      name: 'carrinho.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

      db.executeSql('create table carrinho(nome VARCHAR(32), preco VARCHAR(32), quantidade VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));

      db.executeSql("INSERT INTO carrinho (nome, preco, quantidade) VALUES ('"+this.nome+"', '"+this.preco+"', '"+this.quantidade+"')", []).then((data) => {})
      .then(res => {
        console.log(res);
      })
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }

  excluir(){
    this.sqlite.create({
      name: 'carrinho.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {

      db.executeSql('create table carrinho(nome VARCHAR(32), preco VARCHAR(32), quantidade VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));

      db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid])
        .then(res => {
          console.log(res);
        })

      }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }*/

}
