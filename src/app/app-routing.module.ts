import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrdermasterComponent } from './ordermaster/ordermaster.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes =
 [
  {path: 'Home', component: HomeComponent},
  {path: 'products', component: OrdermasterComponent,canActivate:[AuthGuard]},
  {path: 'about', component: ProductsComponent},
  {path: 'newprd', component: NewproductComponent},
  {path: 'login', component: LoginComponent},
 // {path: 'profile', component: ProfileComponent},
  {path: 'profile', loadChildren: () => import('./userprofile/userprofile.module').then(m => m.UserprofileModule)},
  //{path: 'editprofile', loadChildren: () => import('./userprofile/userprofile.module').then(l => l.UserprofileModule)},
  //{path: 'editprofile', component: EditprofileComponent},
  {path: 'products/:pid', component: ProductdetailComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
