import React, { memo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './api'

function AddTransport(): JSX.Element {
  const urlInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const categoryIdInput = useRef<HTMLInputElement>(null);
const dispatch =useDispatch()

  const addTransportFetch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();


    if (
      urlInput.current?.files?.length &&
      nameInput.current?.value &&
      descriptionInput.current?.value &&
      priceInput.current?.value &&
      categoryIdInput.current?.value
    ) {
      const url = urlInput.current.files;
      const name = nameInput.current.value;
      const description = descriptionInput.current.value;
      const price = priceInput.current.value;
      const categoryId = categoryIdInput.current.value;

      const formData = new FormData();

      for (const key in url) {
        formData.append('url', url[key]);
      }

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', categoryId);
      
       api.addTransportFetch(formData)
        .then((data) => dispatch({ type: 'transports/addTransport', payload: data.newTransport }))
        .catch((err) => console.log(err));
     }
  };

  return (
    <div>
      <form onSubmit={addTransportFetch}>
        <input type="file" multiple ref={urlInput} />
        <input type="text" ref={nameInput} />
        <input type="number" ref={priceInput} />
        <input type="number" ref={categoryIdInput} />
        <input type="text" ref={descriptionInput} />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default memo(AddTransport);
