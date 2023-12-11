// my-request.model.ts
export interface MyRequestModel {
  id: string;
  premiseId: string;
  description: string;
  square: number;
  address: string;
  services: {
    name: string;
    id: string;
  }[];
  status: number;
  providersInteractions: {
    providerId: string;
    providerName: string;
    price: number;
    interactionStatus: number;
  }[];
}
