import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';
import { NewUserComponent } from './home/newuser/newuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RedirectIfLoggedGuard } from './core/auth/redirectiflogged.guard';
import { LoginRequiredGuard } from './core/auth/loginrequired.guard';
import { NewDeskComponent } from './desks/new-desk/new-desk.component';
import { InfoDeskComponent } from './desks/info-desk/info-desk.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [LoginRequiredGuard]
  },
  { 
    path: 'newdesk', 
    component: NewDeskComponent,
    canActivate: [LoginRequiredGuard]
  },
  { 
    path: 'desk/:id', 
    component: InfoDeskComponent,
    canActivate: [LoginRequiredGuard]
  },
  { 
    path: 'login', 
    component: LoginComponent,
    canActivate: [RedirectIfLoggedGuard]
  },
  { 
    path: 'newuser', 
    component: NewUserComponent,
    canActivate: [RedirectIfLoggedGuard]
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
