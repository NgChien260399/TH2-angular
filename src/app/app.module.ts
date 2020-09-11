import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './btl1/main/main.component';
import { FooterComponent } from './btl1/footer/footer.component';
import { HeaderComponent } from './btl2/header/header.component';
import { Main2Component } from './btl2/main2/main2.component';
import { Footer2Component } from './btl2/footer2/footer2.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManufacturerComponent,
    ProductComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    Main2Component,
    Footer2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
