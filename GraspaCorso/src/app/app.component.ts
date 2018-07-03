import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { NavController } from 'ionic-angular';

import { PedidoPage } from '../pages/pedido/pedido';

import { HomePage } from '../pages/home/home';

import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  navCtrl:any = NavController;
  //rootPage:any = TabsPage;
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  nextPage(){  
    //this.navCtrl.push(PedidoPage);
    this.rootPage = PedidoPage;
  }

  backPage(){
    this.rootPage = HomePage;
  }

  cart(){
    this.navCtrl.push(CarrinhoPage);
  }

  login(){
    this.rootPage = LoginPage;
  }
}
