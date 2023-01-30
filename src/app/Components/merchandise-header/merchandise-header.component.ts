import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchandise-header',
  templateUrl: './merchandise-header.component.html',
  styleUrls: ['./merchandise-header.component.css']
})
export class MerchandiseHeaderComponent implements OnInit {
  sort = 'filtering';

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

}
