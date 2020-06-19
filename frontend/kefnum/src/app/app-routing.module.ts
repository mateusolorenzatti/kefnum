import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';
import { NewUserComponent } from './home/newuser/newuser.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    component: HomeComponent,
  },
  { 
    path: 'login', 
    pathMatch: 'full',
    component: LoginComponent,
  },
  { 
    path: 'newuser', 
    pathMatch: 'full',
    component: NewUserComponent,
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
