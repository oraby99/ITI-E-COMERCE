import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { HighligtDirective } from './directives/highligt.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsdtoegyPipe } from './usdtoegy.pipe';
import { OrdermasterComponent } from './ordermaster/ordermaster.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    HighligtDirective,
    UsdtoegyPipe,
    OrdermasterComponent,
    OrderdetailComponent,
    NotfoundComponent,
    ProductdetailComponent,
    ProductsComponent,
    NewproductComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
