import { IdentityService } from 'src/app/modules/auth/services/identity.service';
import { AuthApiService } from './../../../core/api/auth-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerProfileCreateModel } from 'src/app/modules/core/api/models/customer-profile-create.model';
import { ServiceProviderProfileCreateModel } from 'src/app/modules/core/api/models/service-provider-profile-create.model';
import { Router } from '@angular/router';
import { ROLES } from 'src/app/modules/auth/constants/roles';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent {
  constructor(
    private authApiService: AuthApiService,
    private IdentityService: IdentityService,
    private router: Router
  ) {}
  //readonly phoneNumberPatten = `^+d{1,4}d{0,6}$`;
  readonly phoneNumberPatten = '';
  readonly websitePatten = '';
  readonly formFields = CUSTOMER_PROFILE_FORM_FIELDS;
  readonly formLabels = CUSTOMER_PROFILE_FORM_LABELS;
  readonly pageText = CUSTOMER_PROFILE_TEXT;

  profileForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.phoneNumberPatten),
    ]),
  });

  handleFormSubmit() {
    const model = this.getFormValue();
    this.authApiService.createCustomerProfile(model).subscribe(
      (res) => {
        alert('registration is successful');

        const role = this.IdentityService.getRole();
        if (role == ROLES.CUSTOMER) {
          this.router.navigateByUrl('/premises');
        } else {
          this.router.navigateByUrl('/active-requests');
        }
      },
      (error) => alert('invalid data')
    );
  }

  private getFormValue(): CustomerProfileCreateModel {
    return {
      firstName: this.profileForm.controls[this.formFields.firstName].value,
      lastName: this.profileForm.controls[this.formFields.lastName].value,
      phoneNumber: this.profileForm.controls[this.formFields.phoneNumber].value,
    };
  }
}

export const CUSTOMER_PROFILE_FORM_FIELDS = {
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
};

export const CUSTOMER_PROFILE_FORM_LABELS = {
  name: 'First Name',
  phoneNumber: 'Last Name',
  website: 'Phone Number',
};

export const CUSTOMER_PROFILE_TEXT = {
  title: 'Edit account information',
  placeholder: 'Type here...',
  goBackButton: 'Go back',
  saveChangesButton: 'Save changes',
};
