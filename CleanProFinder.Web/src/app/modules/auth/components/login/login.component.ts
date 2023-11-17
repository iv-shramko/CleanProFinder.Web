import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/modules/core/api/auth-api.service';
import { LoginModel } from 'src/app/modules/core/api/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authApiService: AuthApiService) {}

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
    this.authApiService.login(model);
  }

  private getFormValue(): LoginModel {
    return {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
  }
}
