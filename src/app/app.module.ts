import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routerComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UnauthComponent } from './unauth/unauth.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarModule } from 'ng-sidebar';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [
    AppComponent,
    routerComponent,
    HeaderComponent,
    FooterComponent,
    UnauthComponent,
    // DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidebarModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
