import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UnauthComponent } from './unauth/unauth.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideComponent } from './side/side.component';



const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "unauth", component: UnauthComponent },
  { path: "emplist", component: EmplistComponent, canActivate: [AuthGuard] },
  { path: "addemp", component: AddempComponent, canActivate: [AuthGuard] },
  { path: "loginadmin", component: LoginadminComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "side", component: SideComponent },
  { path: "**", redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponent = [LoginComponent, AdminComponent, UnauthComponent, EmplistComponent, AddempComponent, LoginadminComponent, DashboardComponent, SideComponent]
