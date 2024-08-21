import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { OrderMasterComponent } from './order/order-master/order-master.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './order/product-list/product-list.component';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { USDtoEGPPipe } from '../pipes/usdto-egp.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProductDetailsComponent } from './order/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    OrderMasterComponent,
    ProductListComponent,
    USDtoEGPPipe,
    NotFoundComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    FormsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
