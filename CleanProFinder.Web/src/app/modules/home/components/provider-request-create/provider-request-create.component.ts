import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';
import { ServiceProviderFullModel } from 'src/app/modules/core/api/models/service-provide-request-create.model';

@Component({
  selector: 'app-provider-request-create',
  templateUrl: './provider-request-create.component.html',
  styleUrls: ['./provider-request-create.component.scss'],
})
export class ProviderRequestCreateComponent implements OnInit {
  @Output() selected = new EventEmitter<string>();
  @Output() unselected = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.provider);
  }
  @Input() provider!: ServiceProviderFullModel;

  isSelected: boolean = false;

  hovered: string = '';

  showPrice(id: string): void {
    this.hovered = id;
  }

  hidePrice(): void {
    this.hovered = '';
  }

  toggleSelect() {
    if (this.isSelected) {
      this.unselected.emit(this.provider.id);
    } else {
      this.selected.emit(this.provider.id);
    }
    this.isSelected = !this.isSelected;
  }
}
