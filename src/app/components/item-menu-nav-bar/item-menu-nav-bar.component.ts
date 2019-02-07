import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu-nav-bar',
  templateUrl: './item-menu-nav-bar.component.html',
  styleUrls: ['./item-menu-nav-bar.component.css']
})
export class ItemMenuNavBarComponent implements OnInit {

  @Input() img: string;
  @Input() item: string;
  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

}
