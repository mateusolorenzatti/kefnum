import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DropdownItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    DropdownItemComponent
  ],
})
export class NavbarModule { }