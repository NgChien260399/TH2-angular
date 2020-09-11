import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ProductComponent } from './product/product.component';
import { Menubtl1Component } from './menubtl1/menubtl1.component';
import { FooterComponent } from './footer/footer.component';
import { Mainbtl1Component } from './mainbtl1/mainbtl1.component';
import { HeaderComponent } from './btl2/header/header.component';
import { MainComponent } from './btl2/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ManufacturerComponent,
    ProductComponent,
    Menubtl1Component,
    FooterComponent,
    Mainbtl1Component,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
