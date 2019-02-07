import { Component, OnInit } from '@angular/core';

import {  SelectAcoesService } from '../../services/select-acoes.service';

@Component({
  selector: 'app-painel-gestao',
  templateUrl: './painel-gestao.component.html',
  styleUrls: ['./painel-gestao.component.css']
})
export class PainelGestaoComponent implements OnInit {

  constructor(public selectAcoesService: SelectAcoesService) { }


  ngOnInit() {
  }


}
