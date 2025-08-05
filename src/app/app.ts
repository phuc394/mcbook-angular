import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from '../Component/header/header';
import {Nav} from '../Component/nav/nav';
import {BreadCrumb} from '../Component/bread-crumb/bread-crumb';
import {Content} from '../Component/content/content';
import {Footer} from '../Component/footer/footer';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, BreadCrumb, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  cartItems: ItemModel[] = [];

  protected readonly title = signal('mcbook');

  addToCart (newItem: ItemModel){
    this.cartItems.push(newItem)
    console.log('Item added to cart:', this.cartItems);
  }
}
