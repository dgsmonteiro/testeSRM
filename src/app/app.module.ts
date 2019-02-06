import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectSrmComponent } from './components/select-srm/select-srm.component';
import { AppRoutingModule } from './/app-routing.module';
import { SelectAcoesService } from './services/select-acoes.service';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemMenuNavBarModule } from './components/item-menu-nav-bar/item-menu-nav-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectSrmComponent,
    HeaderComponent,
    NavBarComponent
  ],
  imports: [
    ItemMenuNavBarModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [SelectAcoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
