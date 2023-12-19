import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROLES } from 'src/app/modules/auth/constants/roles';
import { AuthApiService } from 'src/app/modules/core/api/auth-api.service';
import { ServiceProviderProfileCreateModel } from 'src/app/modules/core/api/models/service-provider-profile-create.model';
import { IdentityService } from 'src/app/modules/auth/services/identity.service';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.scss'],
})
export class ServiceProviderProfileComponent {
  constructor(
    private authApiService: AuthApiService,
    private IdentityService: IdentityService,
    private router: Router
  ) {}
  //readonly phoneNumberPatten = `^+d{1,4}d{0,6}$`;
  readonly phoneNumberPatten = '';
  //readonly websitePatten = `^(https?|ftp)://[^s/$.?#].[^s]*$`;
  readonly websitePatten = '';
  readonly formFields = SERVICE_PROVIDER_PROFILE_FORM_FIELDS;
  readonly formLabels = SERVICE_PROVIDER_PROFILE_FORM_LABELS;
  readonly pageText = SERVICE_PROVIDER_PROFILE_TEXT;

  profileForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.phoneNumberPatten),
    ]),
    website: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.websitePatten),
    ]),
  });

  handleFormSubmit() {
    const model = this.getFormValue();
    this.authApiService.createServiceProviderProfile(model).subscribe(
      (res) => {
        alert('registration is successful');

        const role = this.IdentityService.getRole();
        if (role == ROLES.CUSTOMER) {
          this.router.navigate(['premises']);
        } else {
          this.router.navigate(['active-requests']);
        }
      },
      (error) => alert('invalid data')
    );
  }

  private getFormValue(): ServiceProviderProfileCreateModel {
    return {
      name: this.profileForm.controls[this.formFields.name].value,
      phoneNumber: this.profileForm.controls[this.formFields.phoneNumber].value,
      site: this.profileForm.controls[this.formFields.website].value,
    };
  }
}

export const SERVICE_PROVIDER_PROFILE_FORM_FIELDS = {
  name: 'name',
  phoneNumber: 'phoneNumber',
  website: 'website',
};

export const SERVICE_PROVIDER_PROFILE_FORM_LABELS = {
  name: 'Company Name',
  phoneNumber: 'Phone Number',
  website: 'Website URL',
};

export const SERVICE_PROVIDER_PROFILE_TEXT = {
  title: 'Edit account information',
  placeholder: 'Type here...',
  goBackButton: 'Go back',
  saveChangesButton: 'Save changes',
};
