import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShareModule } from '../shared/share.module';
import { RouterModule } from '@angular/router';
import { RequestErrorComponent } from './request-error/request-error.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    RequestErrorComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    RouterModule,
  ],
  providers: [],
})
export class ErrorsModule { }
