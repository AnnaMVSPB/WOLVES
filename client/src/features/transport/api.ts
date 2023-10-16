import type { Transport, TransportId, UpdateTransport } from "./Type/transport";

export const loadFetch = async (): Promise<Transport[]> => {
    const data = await (await fetch('/api/transports')).json();
  return data.transports
  };

  export const delTransportFetch = async (id:TransportId): Promise<{id:TransportId}> => {
    const data = await (await fetch(`/api/transports/${id}`,
    {method:'DELETE'})).json();
  return data.id
  };

  export const updateTransportFetch = async (obj:UpdateTransport): Promise<Transport> => {
    const data = await (await fetch(`/api/transports/${obj.id}`,
    {method:'PUT',
body:JSON.stringify(obj),
headers:{'content-type':"application/json"}
})).json();
  return data
  };

  export const addTransportFetch = async (obj:FormData): Promise<{ message:string, newTransport:Transport }> => {
    const data = await (await fetch(`/api/transports`,
    {method:'POST',
      body:obj
      
     })).json();
  
      return data
  };