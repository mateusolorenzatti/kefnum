import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [
    InfoComponent
  ],
  exports: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class InfoModule { }
