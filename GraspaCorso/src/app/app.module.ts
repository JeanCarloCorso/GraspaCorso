import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { PedidoPage } from '../pages/pedido/pedido';
import { ProdutoPage } from '../pages/produto/produto';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { LoginPage } from '../pages/login/login';
import { CadastroUserPage } from '../pages/cadastro-user/cadastro-user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { ProdutosProvider } from '../providers/produtos/produtos';

//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { CarrinhosProvider } from '../providers/carrinhos/carrinhos';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PedidoPage,
    ProdutoPage,
    CarrinhoPage,
    LoginPage,
    CadastroUserPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PedidoPage,
    ProdutoPage,
    CarrinhoPage,
    LoginPage,
    CadastroUserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //SQLite, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    ProdutosProvider,
    SQLite,
    DatabaseProvider,
    CarrinhosProvider,
  ]
})
export class AppModule {}
