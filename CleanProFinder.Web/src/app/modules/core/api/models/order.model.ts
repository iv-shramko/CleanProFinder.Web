import { Premise } from './premise.model'
import { Service } from './service.model'

export interface Order {
  id: string;
  premise: Premise;
  services: Service[];
  description?: string;
}
