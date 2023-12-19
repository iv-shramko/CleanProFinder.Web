import { CleaningService } from 'src/app/modules/core/api/models/cleaing-service.model';

export interface ServiceProviderProfile {
  name: string;
  description: string;
  phoneNumber: string;
  site: string;
  email: string;
  services: CleaningService[];
}
