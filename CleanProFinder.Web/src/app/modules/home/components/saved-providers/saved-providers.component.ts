import { SaveProviderModel } from 'src/app/modules/core/api/models/saved-provider.model';
import { SavedProvidersApiService } from './../../../core/api/saved-providers-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-providers',
  templateUrl: './saved-providers.component.html',
  styleUrls: ['./saved-providers.component.scss'],
})
export class SavedProvidersComponent implements OnInit {
  constructor(private SavedProvidersApiService: SavedProvidersApiService) {}
  savedProviders: SaveProviderModel[] = [];

  ngOnInit(): void {
    this.SavedProvidersApiService.getSavedProviders().subscribe(
      (providers) => (this.savedProviders = providers)
    );
  }

  onRemoveFromList(id: string) {
    console.log(id);
    console.log(this.savedProviders);
    this.SavedProvidersApiService.delete(id).subscribe((ok) => {
      this.SavedProvidersApiService.getSavedProviders().subscribe(
        (providers) => (this.savedProviders = providers)
      );
    });
  }
}
