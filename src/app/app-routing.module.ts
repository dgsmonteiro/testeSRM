import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PainelGestaoComponent } from './pages/painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './pages/conta-digital/conta-digital.component';
import { AntRecebidosComponent } from './pages/ant-recebidos/ant-recebidos.component';


const routes: Routes = [
  {path: 'painelGestao', component: PainelGestaoComponent},
  {path: 'contaDigital', component: ContaDigitalComponent},
  {path: 'antRecebidos', component: AntRecebidosComponent},
  {path: '', redirectTo: 'painelGestao', pathMatch: 'full'},
  {path: '**', component: PainelGestaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
