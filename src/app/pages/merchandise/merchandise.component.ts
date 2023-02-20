import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  constructor(private CartService: CartService) {}

  ngOnInit(): void {
  }

  onAddToCart(product: Product): void {
    this.CartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id

    });

  }
}
