import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CleaningServiceApiService } from 'src/app/modules/core/api/cleaning-service-api.service';
import { CleaningServiceShort } from 'src/app/modules/core/api/models/cleaing-service-short.model';
import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { RequestModel } from 'src/app/modules/core/api/models/request.model';
import { PremiseApiService } from 'src/app/modules/core/api/premise-api.service';
import { RequestApiService } from 'src/app/modules/core/api/request-api-service.service';
import { PickServiceCreateRequestModalComponent } from 'src/app/modules/home/components/pick-service-create-request-modal/pick-service-create-request-modal.component';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
  public premise!: Premise;
  public cleaningServices: CleaningServiceShort[] = [];
  public requestForm!: FormGroup;
  @Input() premiseId: string = '';

  constructor(
    private premiseApiService: PremiseApiService,
    private cleaningServiceApiService: CleaningServiceApiService,
    private requestApiService: RequestApiService,
    private ngbModal: NgbModal,
    private model: NgbActiveModal
  ) {}

  ngOnInit() {
    this.premiseApiService.getById(this.premiseId).subscribe((premise) => {
      if (premise) {
        this.premise = premise;
      }
    });

    this.cleaningServiceApiService.getAll().subscribe((services) => {
      this.cleaningServices = services;
    });

    // Create a reactive form for the request
    this.requestForm = new FormGroup({
      notes: new FormControl(''),
      services: new FormControl([]),
      providers: new FormControl([]),
    });
  }

  onServiceSelect(serviceId: string) {
    console.log(serviceId);
    console.log(this.cleaningServices);
    this.requestForm.controls['services'].value.push(serviceId);
  }

  onSelectProvider() {
    const providerModal = this.ngbModal.open(PickServiceCreateRequestModalComponent, {
      size: 'xl',
      centered: true,
    });

    providerModal.closed.subscribe((ids: string[]) =>
      this.requestForm.controls['providers'].setValue(ids)
    );
  }

  onCancel() {
    // Close the modal
    this.model.close();
  }

  onSubmit() {
    // Get the form values
    const formValues = this.requestForm.value;

    // Create a new request object
    const request: RequestModel = {
      premiseId: this.premiseId,
      servicesId: formValues.services,
      description: formValues.notes,
      selectedProvidersIds: formValues.providers,
    };

    console.log(request);

    this.requestApiService.create(request).subscribe(
      (res) => {
        alert('request created');
        this.model.close();
      },
      (error) => alert('error')
    );
  }
}
