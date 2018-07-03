import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CarrinhosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrinhosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CarrinhosProvider Provider');
  }

  getRemoteData(){
    return this.http.get('http://127.0.0.1:8000/api/carrinho/');
  }

}
