import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/Models/cart.model';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Product name',
        price: 495,
        quantity: 7,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Product name',
        price: 295.95,
        quantity: 5,
        id: 2,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Product name',
        price: 695,
        quantity: 3,
        id: 3,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumuns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  constructor(
    private cartService: CartService,
    private http: HttpClient  ) {}

  ngOnInit() {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  // Shopping cart + - product
  getTotal(items: Array<CartItem>): number {
    return this, this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('pk_test_51MawfMFFxCTt81aXOvpKeSzT34kMWgpEgfkaCwX3EJqE3nEtp0z9qUDQbgd3yTIKppstc2xGKsV3pXIlb33p92eJ00N01PxT3Q');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }

}
