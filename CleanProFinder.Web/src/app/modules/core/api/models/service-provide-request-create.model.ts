import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';

// create-service-request.model.ts
export interface ServiceProviderFullModel {
  id: string;
  name: string;
  description: string;
  services: CleaningService[];
  isSaved: boolean;
}
