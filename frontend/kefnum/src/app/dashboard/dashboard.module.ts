import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports : [ 
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: []
})
export class HomeModule { }
