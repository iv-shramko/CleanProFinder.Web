// active-request.model.ts
export interface ActiveRequestModel {
  id: string;
  square: number;
  address: string;
  services: {
    name: string;
    id: string;
  }[];
  status: number;
}
