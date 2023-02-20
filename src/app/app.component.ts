import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './Models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //????? Opdatering af kurv
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private router: Router,
    private cartService: CartService) {}

    ngOnInit() {
      this.cartService.cart.subscribe((_cart) =>{
        this.cart = _cart;
      })
    }

  goTopage(pageName: string):void {
    this.router.navigate([`${pageName}`]);
  }

}
