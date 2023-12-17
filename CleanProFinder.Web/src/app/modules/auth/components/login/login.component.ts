import { IdentityService } from 'src/app/modules/auth/services/identity.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/modules/core/api/auth-api.service';
import { LoginModel } from 'src/app/modules/core/api/models/login.model';
import { ROLES } from 'src/app/modules/auth/constants/roles';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authApiService: AuthApiService,
    private IdentityService: IdentityService,
    private router: Router
  ) {}

  fields = {
    email: 'email',
    password: 'password',
  };

  form = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  handleFormSubmit() {
    const model = this.getFormValue();
    this.authApiService.login(model).subscribe(
      (res) => {
        localStorage.setItem('authToken', res.bearer);

        const role = this.IdentityService.getRole();
        if (role == ROLES.CUSTOMER) {
          this.router.navigate(['premises']);
        } else {
          this.router.navigate(['active-requests']);
        }
        //TODO root redirect, from there where needed
        //window.location.assign('/premises');
      },
      (error) => alert('invalid credentials')
    );
  }

  private getFormValue(): LoginModel {
    return {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
  }
}
