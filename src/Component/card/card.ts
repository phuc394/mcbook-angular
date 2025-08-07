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
import {CurrencyPipe, DecimalPipe, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {Products} from '../../app/services/products/products';

@Component({
  selector: 'app-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    DecimalPipe
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  ProductList: ItemModel[] = [];
  @Input() item!: ItemModel;
  constructor(private router: Router, private productService: Products){
        this.ProductList = this.productService.booklist;
  }
  navigateToDetail(id: string) {
    this.router.navigate(['/detail',id]).then();
  }
  addProductToCart(id: string) {
    this.productService.addtoCart(id)
  }

}


