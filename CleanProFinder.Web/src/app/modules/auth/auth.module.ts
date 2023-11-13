import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { ServiceProviderProfileComponent } from './components/service-provider-profile/service-provider-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthApiService } from 'src/app/modules/core/api/auth-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    CustomerProfileComponent,
    ServiceProviderProfileComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthApiService],
})
export class AuthModule { }
