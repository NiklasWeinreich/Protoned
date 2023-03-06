import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //????? Opdatering af kurv "[cart]="cart"
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goTopage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  // Hej Niklas


}
