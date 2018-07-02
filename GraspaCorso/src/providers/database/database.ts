import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  adicionarCarrinho(idproduto: string, qtd: string, nome: string, preco: string, foto: string){
    console.log('SQL');
    
    this.sqlite.create({
      name: 'carrinho.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('CREATE TABLE IF NOT EXISTS produto(idproduto INTEGER, qtd INTEGER, nome VARCHAR(32), preco VARCHAR(32), foto VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
        db.executeSql('insert into produto(idproduto, qtd, nome, preco, foto) values (?, ?, ?, ?, ?)',
        [1, 5, 'Hambúrgueres', 'Hambúrgueres', 'Hambúrgueres'])
          .then(()=>alert("insertFine"))
          .catch(e=>console.log(e));
    
      })
      .catch(e => console.log(e));
  }
}
