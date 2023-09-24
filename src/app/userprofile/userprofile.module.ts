import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'editprofile', component: EditprofileComponent},
  {path: '', redirectTo: '/myprofile', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    ProfileComponent,
    EditprofileComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserprofileModule { }
