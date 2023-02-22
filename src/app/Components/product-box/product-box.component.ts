import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Product } from 'src/app/Models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() product: Product |undefined;

  @Output() addToCart = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void{
    this.addToCart.emit(this.product);

  }
}
