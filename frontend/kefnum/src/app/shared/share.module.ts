import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    ContainerComponent
  ],
})
export class ShareModule { }
