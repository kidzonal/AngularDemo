import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './site/user-list/user-list.component';
import { DashboardComponent } from './site/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
  { path: 'user', component: UserListComponent, data: { breadcrumb: 'User' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
