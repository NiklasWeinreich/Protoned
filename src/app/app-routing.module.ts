import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pages Components//
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import { MusicComponent } from './pages/music/music.component';
import { UpcommingComponent } from './pages/upcomming/upcomming.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'upcomming', component: UpcommingComponent},
  {path: 'merchandise', component: MerchandiseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'news/:id', component: NewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
