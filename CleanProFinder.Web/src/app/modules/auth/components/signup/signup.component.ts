import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/modules/core/api/auth-api.service';
import { CreateProviderModel } from 'src/app/modules/core/api/models/create-provider.model';
import { CreateUserModel } from 'src/app/modules/core/api/models/create-user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private authApiService: AuthApiService) { }

  fields = {
    email: 'email',
    password: 'password',
    repeatPassword: 'repeatPassword',
    role: 'role',
  };

  form = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    repeatPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    role: new FormControl(null, []),
  });

  handleFormSubmit() {
    const model = this.getFormValue();
    const role = this.form.controls['role'].value;
    const repeatPassword = this.form.controls['repeatPassword'].value;
    if (model.password !== repeatPassword) {
      // TODO: custom validator for this check
      return;
    }
    if (role === 'customer') {
      this.authApiService.createUser(model);
    } else if (role === 'company') {
      this.authApiService.createProvider(model);
    } else {
      console.error('Unexpected radio selection value');
    }
  }

  private getFormValue(): CreateUserModel | CreateProviderModel {
    return {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
  }
}
