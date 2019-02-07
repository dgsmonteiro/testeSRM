import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  itens = [
    {
      item: 'painelGestao',
      texto: 'Painel Gestao',
      icon: 'pg.png'
    },
    {
      item: 'contaDigital',
      texto: 'Conta Digital',
      icon: 'cd.png'
    },
    {
      item: 'antRecebidos',
      texto: 'Ant. de Recebidos',
      icon: 'ar.png'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
