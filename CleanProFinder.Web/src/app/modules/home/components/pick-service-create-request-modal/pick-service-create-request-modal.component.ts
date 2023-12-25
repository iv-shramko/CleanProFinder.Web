import { SavedProvidersApiService } from './../../../core/api/saved-providers-api.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { Component, OnInit } from '@angular/core';
import { ServiceProviderFullModel } from 'src/app/modules/core/api/models/service-provide-request-create.model';
import { ProfilesApiService } from 'src/app/modules/core/api/profiles-api.service';

@Component({
  selector: 'app-pick-service-create-request-modal',
  templateUrl: './pick-service-create-request-modal.component.html',
  styleUrls: ['./pick-service-create-request-modal.component.scss'],
})
export class PickServiceCreateRequestModalComponent implements OnInit {
  constructor(
    private NgbActiveModal: NgbActiveModal,
    private profileService: ProfilesApiService
  ) {}

  providers: ServiceProviderFullModel[] = [];
  serviceIds: string[] = [];

  ngOnInit(): void {
    this.profileService.getServiceProviderList().subscribe((providers) => {
      console.log(providers);
      this.providers = providers.filter((p) => this.isActive(p));
    });
  }

  addProvider(id: string) {
    this.serviceIds.push(id);
  }

  removeProvider(delId: string) {
    this.serviceIds = this.serviceIds.filter((id) => id != delId);
  }

  onSubmit() {
    this.NgbActiveModal.close(this.serviceIds);
  }

  cancel() {
    this.NgbActiveModal.close([]);
  }

  isActive(model: ServiceProviderFullModel) {
    return !!model.name;
  }
}
