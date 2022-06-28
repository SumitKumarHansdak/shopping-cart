import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CartComponent } from './inventory/cart/cart.component';
import { HeaderComponent } from './inventory/header/header.component';
import { HomeComponent } from './inventory/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
