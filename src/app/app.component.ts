import {ItemModel} from '../models/item.model';


export class AppComponent {
      cartItems: ItemModel[] = [];
      addToCart(newItem: ItemModel) {
        this.cartItems.push(newItem);
        console.log('Item added to cart:', newItem);
      }
}
