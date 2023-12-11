import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { PremiseApiService } from 'src/app/modules/core/api/premise-api.service';
import { PickServiceCreateRequestModalComponent } from 'src/app/modules/home/components/pick-service-create-request-modal/pick-service-create-request-modal.component';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.scss'],
})
export class RequestModalComponent implements OnInit {
  public premise!: Premise;
  public cleaningServices: CleaningService[] = [];
  public requestForm!: FormGroup;

  constructor(
    private premiseApiService: PremiseApiService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit() {
    this.premiseApiService.getById('bhhb').subscribe((premise) => {
      if (premise) {
        this.premise = premise;
      }
    });

    // Create a reactive form for the request
    this.requestForm = new FormGroup({
      notes: new FormControl(''),
      services: new FormControl([]),
    });
  }

  onSelectProvider() {
    this.ngbModal.open(PickServiceCreateRequestModalComponent, {
      size: 'xl',
      centered: true,
    });
  }

  onCancel() {
    // Close the modal
  }

  onSubmit() {
    // Get the form values
    const formValues = this.requestForm.value;

    // Create a new request object
    const request = {
      premiseId: this.premise.id,
      notes: formValues.notes,
      services: formValues.services,
    };
  }
}
