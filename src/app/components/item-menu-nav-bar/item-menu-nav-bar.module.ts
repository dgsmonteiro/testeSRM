import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMenuNavBarComponent } from './item-menu-nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ItemMenuNavBarComponent],
  exports: [ItemMenuNavBarComponent]
})
export class ItemMenuNavBarModule { }
