import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Products} from '../../services/products/products';
import {BreadCrumb} from '../../../Component/bread-crumb/bread-crumb';
import {Header} from '../../../Component/header/header';
import {Nav} from '../../../Component/nav/nav';
import {Footer} from '../../../Component/footer/footer';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ItemModel} from '../../../models/item.model';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    BreadCrumb,
    Header,
    Nav,
    Footer,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardImage,
    DecimalPipe
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail {
  productDetail!: ItemModel
  constructor(private activateRoute: ActivatedRoute, private productService: Products) {
    let {id} = this.activateRoute.snapshot.params;
    this.productDetail = this.productService.getDetailProduct(id);
  }
  addProductToCart(id: string) {
    this.productService.addtoCart(id)
  }
}
