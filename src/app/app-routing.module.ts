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
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EditComponent } from './edit/edit.component';



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
  { path: "emplist/empdetail/:id", component: EmpdetailComponent },
  { path: "emplist/empdetail/:id/edit", component: EditComponent },
  { path: "**", redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//created a routercomponent array containing all components so everytime we dont have to import new component in app.module.ts 
export const routerComponent = [LoginComponent, AdminComponent, UnauthComponent, EmplistComponent, AddempComponent, EditComponent, LoginadminComponent, EmpdetailComponent, DashboardComponent, SideComponent]
