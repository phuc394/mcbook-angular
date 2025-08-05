import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {ItemModel} from '../../models/item.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    NgOptimizedImage
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Output() addtoCartEvent = new EventEmitter<ItemModel>();
  @Input() item!: ItemModel

  addtoCart(item: ItemModel) {
    this.addtoCartEvent.emit(item)
  }

}


