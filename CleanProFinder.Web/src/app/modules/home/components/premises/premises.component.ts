import { PremiseApiService } from 'src/app/modules/core/api/premise-api.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PremiseEditModalComponent } from 'src/app/modules/home/components/premise-edit-modal/premise-edit-modal.component';
import { PremiseShort } from 'src/app/modules/core/api/models/premise-short.model';

@Component({
  selector: 'app-premises',
  templateUrl: './premises.component.html',
  styleUrls: ['./premises.component.scss'],
})
export class PremisesComponent implements OnInit {
  constructor(
    private ngbModal: NgbModal,
    private premiseApiService: PremiseApiService
  ) {}

  ngOnInit(): void {
    this.premiseApiService.getAll().subscribe((premises) => (this.premises = premises));
  }
  premises: PremiseShort[] = [];

  handleAddPremise() {
    this.ngbModal.open(PremiseEditModalComponent, { size: 'xl', centered: true });
  }
}
