import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem, Cart } from 'src/app/Models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-merchandise-header',
  templateUrl: './merchandise-header.component.html',
  template: `<app-merchandise-header [cart]="cart">` ,
  styleUrls: ['./merchandise-header.component.css']
})
export class MerchandiseHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'filtering';
  itemShowCount = 12;


  private _cart: Cart = { items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current , 0)

  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) =>{
      this.cart = _cart;
    })
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemShowCount = count;
  }

}
