import { Component, OnInit } from '@angular/core';
import { CartItem, Cart } from 'src/app/Models/cart.model';


@Component({
  selector: 'app-merchandise-header',
  templateUrl: './merchandise-header.component.html',
  styleUrls: ['./merchandise-header.component.css']
})
export class MerchandiseHeaderComponent implements OnInit {
  sort = 'filtering';
  itemShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemShowCount = count;
  }

  getTotal(items: Array<CartItem>): number {
    return items.
    map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }
}
