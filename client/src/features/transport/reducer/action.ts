import type { Transport, TransportId } from "../Type/transport";

export type Action =
 | { type: 'transports/init'; payload: Transport[] }
 | { type: 'transports/deleTransport'; payload: TransportId }
 | { type: 'transports/updateTransport'; payload: Transport }
 | { type: 'transports/addTransport'; payload: Transport }