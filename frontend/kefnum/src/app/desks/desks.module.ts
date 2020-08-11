import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDeskComponent } from './new-desk/new-desk.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShareModule } from '../shared/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoDeskComponent } from './info-desk/info-desk.component';
import { NewTaskComponent } from './info-desk/new-task/new-task.component';
import { DeskFormComponent } from './desk-form/desk-form.component';

@NgModule({
  declarations: [
    NewDeskComponent,
    InfoDeskComponent,
    NewTaskComponent,
    DeskFormComponent,
  ],
  exports : [
    NewDeskComponent,
    InfoDeskComponent
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
export class DesksModule { }
