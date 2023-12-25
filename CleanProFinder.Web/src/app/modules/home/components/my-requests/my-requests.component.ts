import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyRequestModel } from 'src/app/modules/core/api/models/my-request.model';
import { RequestApiService } from './../../../core/api/request-api-service.service';
import { Component, OnInit } from '@angular/core';
import { RequestEditModalComponent } from 'src/app/modules/home/components/request-edit-modal/request-edit-modal.component';
import { RequestStatus } from 'src/app/modules/shared/enums/request-status';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss'],
})
export class MyRequestsComponent implements OnInit {
  constructor(
    private RequestApiService: RequestApiService,
    private NgbModal: NgbModal
  ) {}
  requests: MyRequestModel[] = [];

  ngOnInit(): void {
    this.RequestApiService.getAllMyRequests().subscribe((res) => (this.requests = res));
  }

  status(code: number): string {
    return RequestStatus[code];
  }

  onEditRequest(requestId: string) {
    var modal = this.NgbModal.open(RequestEditModalComponent, {
      size: 'xl',
      centered: true,
    });

    modal.componentInstance.requestId = requestId;
  }

  getStatusColor(code: number) {
    //const status = requestStatus(code);
    switch (code) {
      case RequestStatus.Sent:
        return 'text-primary';
      case RequestStatus.Placed:
        return 'text-primary';
      case RequestStatus.Canceled:
        return 'text-danger';
      case RequestStatus.Concluded:
        return 'text-success';
      case RequestStatus.HasAnswers:
        return 'text-warning';
      default:
        return 'text-primary';
    }
  }
}
