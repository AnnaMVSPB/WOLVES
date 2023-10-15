export type Transport = {
  id: number;
  name: string;
  Photos: Photo[];
  categoryId: number;
  price: number;
  ownerId: number;
  description: string;
};

export type TransportId = Transport['id'];
// order ознакомится

export type Photo = {
  id: number;
  transportId: number;
  url: string;
};
export type UpdateTransport ={
  id: number;
  name: string;
  price: number;
  description: string;
}
export type StateTransports={
  transports:Transport[];
  errorTransport:string | undefined
}