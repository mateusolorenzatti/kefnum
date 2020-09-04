import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { TitleComponent } from './components/title/title.component';
import { CenterCardComponent } from './components/center-card/center-card.component';

@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    CenterCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    ContainerComponent,
    TitleComponent,
    CenterCardComponent
  ],
})
export class ShareModule { }
