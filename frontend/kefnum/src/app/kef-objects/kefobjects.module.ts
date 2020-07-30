import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskComponent } from './desk/desk.component';
import { DeskListComponent } from './desk-list/desk-list.component';
import { TaskComponent } from './task/task.component';
import { NewDeskComponent } from './new-desk/new-desk.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../shared/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeskComponent,
    TaskComponent,
    DeskListComponent,
    NewDeskComponent
  ],
  exports : [ 
    DeskComponent,
    TaskComponent,
    DeskListComponent,
    NewDeskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class KefObjectsModule { }
