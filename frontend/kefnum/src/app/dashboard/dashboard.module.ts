import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../shared/share.module';
import { DashDeskComponent } from './dash-desk/dash-desk.component';
import { DashTaskComponent } from './dash-task/dash-task.component';
import { DeskListComponent } from './desk-list/desk-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashDeskComponent,
    DashTaskComponent,
    DeskListComponent
  ],
  exports : [ 
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: []
})
export class DashboardModule { }
