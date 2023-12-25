import { RequestApiService } from 'src/app/modules/core/api/request-api-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PremiseShort } from 'src/app/modules/core/api/models/premise-short.model';
import { PremiseApiService } from './../../../core/api/premise-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { MyRequestModel } from 'src/app/modules/core/api/models/my-request.model';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { AcceptProviderModel } from 'src/app/modules/core/api/models/accept-provider.model';
import { RequestInteractionStatus } from 'src/app/modules/shared/enums/request-interaction-status';

@Component({
  selector: 'app-request-edit-modal',
  templateUrl: './request-edit-modal.component.html',
  styleUrls: ['./request-edit-modal.component.scss'],
})
export class RequestEditModalComponent implements OnInit {
  constructor(
    private PremiseApiService: PremiseApiService,
    private NgbActiveModal: NgbActiveModal,
    private RequestApiService: RequestApiService
  ) {}

  requestInfo!: MyRequestModel;
  @Input() requestId!: string;

  premise!: Premise;

  ngOnInit(): void {
    if (this.requestId) {
      this.RequestApiService.getMyRequest(this.requestId).subscribe((request) => {
        this.requestInfo = request;
        console.log(this.requestInfo);
        if (this.requestInfo) {
          this.PremiseApiService.getById(this.requestInfo.premiseId).subscribe(
            (premise) => (this.premise = premise as Premise)
          );
        }
      });
    }
  }

  status(value: number) {
    return RequestInteractionStatus[value];
  }

  onClose() {
    this.NgbActiveModal.close();
  }

  onAcceptProvider(providerId: string | undefined) {
    const acceptModel: AcceptProviderModel = {
      providerId: providerId || '',
      requestId: this.requestId,
    };

    this.RequestApiService.acceptProvider(acceptModel).subscribe((res) => {
      alert('provider is accepted');
      this.NgbActiveModal.close();
    });
  }

  onCancel() {
    this.RequestApiService.cancelRequest(this.requestId).subscribe((res) => {
      alert('request is canceled');
      this.NgbActiveModal.close();
    });
  }

  getStatusColor(status: RequestInteractionStatus) {
    switch (status) {
      case RequestInteractionStatus.Accepted:
        return 'text-success';
      case RequestInteractionStatus.Declined:
        return 'text-danger';
      case RequestInteractionStatus.Accepted:
        return 'text-primary';
      default:
        return 'text-primary';
    }
  }
}
