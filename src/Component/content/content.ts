import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {NgOptimizedImage} from '@angular/common';
import {MatSlider, MatSliderRangeThumb} from '@angular/material/slider';
import {Card} from '../card/card';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-content',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    NgOptimizedImage,
    MatSlider,
    MatSliderRangeThumb,
    Card
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  cartItems: ItemModel[] = [];
  addToCart(newItem: ItemModel) {
    this.cartItems.push(newItem);
    console.log(this.cartItems);
  }
}
