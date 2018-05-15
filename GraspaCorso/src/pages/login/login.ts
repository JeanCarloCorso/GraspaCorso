import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {CadastroUserPage} from '../cadastro-user/cadastro-user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //rootPage: any = LoginPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  home(nome, senha){
    //this.navCtrl.push(HomePage);
    //this.rootPage = HomePage;
    
    this.navCtrl.setRoot(HomePage);
  }

  cadastrouser(){
    this.navCtrl.push(CadastroUserPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
