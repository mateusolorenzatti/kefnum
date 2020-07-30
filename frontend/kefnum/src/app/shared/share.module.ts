import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    ContainerComponent,
    TitleComponent
  ],
})
export class ShareModule { }
