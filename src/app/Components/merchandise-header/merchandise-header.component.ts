import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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

  
}
