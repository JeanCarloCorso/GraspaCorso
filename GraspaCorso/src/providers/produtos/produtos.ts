import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  produtos: Observable<any>;

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider'); 
  }

  getRemoteData(){
    return this.http.get('http://127.0.0.1:8000/api/produto');
  }

  getDadosProduto(id: string){
    return this.http.get('http://127.0.0.1:8000/api/produto/${id}');
  }

}