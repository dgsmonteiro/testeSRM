import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectAcoesService {

  acoes = [
    {id: 1, name: 'Ação 1'},
    {id: 2, name: 'Ação 2'},
    {id: 3, name: 'Ação 3'},
  ];

  constructor() { }

  // retorn das ações
  getAcoes() {
    return this.acoes;
  }

}
