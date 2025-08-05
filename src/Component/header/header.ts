import {Component,Input, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {Dialog} from '../dialog/dialog';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-header',
  imports: [
    MatButton
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() cartItems: ItemModel[] = [];

  dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(Dialog, {
      data: {
        cartItem: this.cartItems,
      },
    });
  }
}
