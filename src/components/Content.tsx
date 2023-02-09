import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Image from './Image';
import { useQuery } from 'react-query'
import IImage from '../models/IImage';

export default function Content() {

  async function getImages() {
    const response = await fetch('https://february.azurewebsites.net/api/GetImages?code=OM6i_Ve-yYpGin8eqbRKnzvKhDHB3RdWcO0tZsn3oo6gAzFutbTVQA==');
    if (!response.ok) {
      throw new Error('response error')
    }
    return response.json() as Promise<IImage[]>;
  }

  const { data: images } = useQuery('images', getImages);

  return (
    <ImageList sx={{ margin: 0 }}>
      {!!images && images.map(img => <Image 
        key={img.id}
        id={img.id}
        filename={img.filename} 
        src={img.src} 
      />)}
    </ImageList> 
  );
}