// Services
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';

//Pages
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { NewsComponent } from './pages/news/news.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EventsComponent } from './pages/events/events.component';
import { MusicComponent } from './pages/music/music.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './services/cart.service';
import { ProductBoxComponent } from './Components/product-box/product-box.component';

// Angular material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MerchandiseHeaderComponent } from './Components/merchandise-header/merchandise-header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MerchandiseComponent,
    NewsComponent,
    UpcommingComponent,
    LoginComponent,
    SignupComponent,
    EventsComponent,
    MusicComponent,
    ShoppingCartComponent,
    ProductBoxComponent,
    MerchandiseHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    LayoutModule,



  ],
  providers: [CartService, StoreService,],
  bootstrap: [AppComponent],
})
export class AppModule {}
