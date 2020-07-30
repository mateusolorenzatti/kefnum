import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { KefObjectsModule } from '../kef-objects/kefobjects.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports : [ 
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    KefObjectsModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: []
})
export class DashboardModule { }
