import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/Models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  product: Product |undefined = {
    id: 1,
    title: 'Product name',
    price: 230,
    category: 'Clothes',
    description: 'Description',
    image: 'https://via.placeholder.com/150',
  };
@Output() addToCart = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void{
    this.addToCart.emit(this.product);

  }
}
