import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAcoesService } from '../services/select-acoes.service';
import { PainelGestaoComponent } from './painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './conta-digital/conta-digital.component';
import { AntRecebidosComponent } from './ant-recebidos/ant-recebidos.component';
import { HomeComponent } from './home/home.component';
import { ItemMenuNavBarModule } from '../components/item-menu-nav-bar/item-menu-nav-bar.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemMenuNavBarModule,
    AppRoutingModule
  ],
  declarations: [
    PainelGestaoComponent,
    ContaDigitalComponent,
    AntRecebidosComponent,
    HomeComponent
  ],
  providers: [SelectAcoesService]

})
export class PagesModule { }
