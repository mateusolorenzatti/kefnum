import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';
import { ShareModule } from './shared/share.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DesksModule } from './desks/desks.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesksModule,
    HomeModule,
    DashboardModule,
    ErrorsModule,
    ShareModule,
    NavbarModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
