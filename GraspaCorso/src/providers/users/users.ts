import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private API_URL = 'http://127.0.0.1:8000/api/'

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'user/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'user/';
 
      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'user/' + user.id;
      let data = {
        "name": user.name,
        "cpf": user.cpf
      }
 
      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 
  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;
 
      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

}
