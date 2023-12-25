import { SavedProvidersApiService } from './../../../core/api/saved-providers-api.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceProviderFullModel } from 'src/app/modules/core/api/models/service-provide-request-create.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit, OnChanges {
  constructor(private SavedProvidersApiService: SavedProvidersApiService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.isSaved = changes['service']?.currentValue.isSaved;
  }

  @Input() service!: ServiceProviderFullModel;
  ngOnInit(): void {}

  isSaved: boolean = this.service?.isSaved;

  onSaveProvider() {
    if (!this.isSaved) {
      this.SavedProvidersApiService.save(this.service.id).subscribe(
        (ok) => (this.isSaved = true)
      );
    }
  }
}
