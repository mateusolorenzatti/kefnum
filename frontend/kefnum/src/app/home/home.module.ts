import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../shared/share.module';
import { NewUserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponentsModule } from '../shared/components/formcomponents/formcomponents.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormComponentsModule
  ],
  providers: []
})
export class HomeModule { }
