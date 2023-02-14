import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/Models/cart.model';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cart: Cart = { items: [{
    product: '../../../assets/img/test.jpg',
    name: 'Product name',
    price: 230,
    quantity: 1,
    id: 1,

  }]};

  dataSource: Array<CartItem> = [];
  displayedColumuns: Array<string> =[
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',

  ]
  constructor() {}

   ngOnInit(){
    this.dataSource = this.cart.items;
  }

   // Shopping cart + - product
  getTotal(items: Array<CartItem>): number {
    return items.
    map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

}
