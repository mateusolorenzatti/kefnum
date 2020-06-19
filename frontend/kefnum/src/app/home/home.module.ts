import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../shared/share.module';
import { NewUserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';

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
  ],
  providers: []
})
export class HomeModule { }
