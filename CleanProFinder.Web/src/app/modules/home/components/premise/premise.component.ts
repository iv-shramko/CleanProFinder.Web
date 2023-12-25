import { ModalService } from 'src/app/modules/core/services/modal.service';
import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PremiseEditModalComponent } from 'src/app/modules/home/components/premise-edit-modal/premise-edit-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestModalComponent } from 'src/app/modules/home/components/request-modal/request-modal.component';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { PremiseShort } from 'src/app/modules/core/api/models/premise-short.model';

@Component({
  selector: 'app-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.scss'],
})
export class PremiseComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private ngbModal: NgbModal
  ) {}

  @Input() premise: PremiseShort = {
    address: '',
    id: '',
  };

  ngOnInit(): void {
    console.log(this.premise);
  }

  handlePremiseEdit() {
    const modal = this.ngbModal.open(PremiseEditModalComponent, {
      size: 'xl',
      centered: true,
    });
    modal.componentInstance.isEdit = true;
    modal.componentInstance.premiseId = this.premise.id;
    // this.modalService.open(PremiseEditModalComponent);
    //this.viewContainerRef.createComponent(PremiseEditModalComponent);
  }

  handleCreateRequest() {
    var modal = this.ngbModal.open(RequestModalComponent, {
      size: 'xl',
      centered: true,
      windowClass: 'modal-rounded',
    });
    modal.componentInstance.premiseId = this.premise.id;
  }
}
