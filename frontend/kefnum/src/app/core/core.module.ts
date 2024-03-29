import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeManagerService } from './theme/theme-manager.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }
  ],
  exports: [],
})
export class CoreModule { }
