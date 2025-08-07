import {Component, EventEmitter, Output} from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatSlider, MatSliderRangeThumb} from '@angular/material/slider';
import {Card} from '../card/card';
import {ItemModel} from '../../models/item.model';
import {Router} from '@angular/router';
import {Products} from '../../app/services/products/products';

@Component({
  selector: 'app-content',
  imports: [
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatSlider,
    MatSliderRangeThumb,
    Card
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  productList: ItemModel[] = [];
  constructor(private router: Router, private productService: Products){
      this.productList = this.productService.booklist;
  }
  formatLabel(value: number): string {
    if (value >= 100) {
      return Math.round(value / 100) + 'k';
    }

    return `${value}`;
  }
}
