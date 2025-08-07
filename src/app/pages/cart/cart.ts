import { Component } from '@angular/core';
import {Products} from '../../services/products/products';
import {DecimalPipe} from '@angular/common';



@Component({
  selector: 'app-cart',
  imports: [
    DecimalPipe

  ],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  constructor(public productService: Products) {
  }
}
