import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/modules/core/api/auth-api.service';
import { ServiceProviderProfileCreateModel } from 'src/app/modules/core/api/models/service-provider-profile-create.model';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.scss'],
})
export class ServiceProviderProfileComponent {
  constructor(private authApiService: AuthApiService) {}
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
    this.authApiService.createServiceProviderProfile(model).subscribe();
  }

  private getFormValue(): ServiceProviderProfileCreateModel {
    return {
      name: this.profileForm.controls[this.formFields.name].value,
      phoneNumber: this.profileForm.controls[this.formFields.phoneNumber].value,
      website: this.profileForm.controls[this.formFields.website].value,
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
