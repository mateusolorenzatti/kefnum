import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DeskComponent } from './desk/desk.component';
import { DeskListComponent } from './desk-list/desk-list.component';
import { TaskComponent } from './desk/task/task.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DeskComponent,
    TaskComponent,
    DeskListComponent
  ],
  exports : [ 
    DashboardComponent,
    DeskListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: []
})
export class DashboardModule { }
