import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { OrderRepairComponent } from './order-repair/order-repair.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserRegistrationComponent,
    LoginComponent,
    DashboardComponent,
    ServicesComponent,
    OrderRepairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
