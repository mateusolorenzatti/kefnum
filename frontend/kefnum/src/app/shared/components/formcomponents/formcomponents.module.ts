import { PasswordShowComponent } from './passwordshow/passwordshow.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PasswordShowComponent,
    ],
    exports: [
        PasswordShowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class FormComponentsModule { }