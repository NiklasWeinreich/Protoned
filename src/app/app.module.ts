import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

// Angular material
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';




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




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
