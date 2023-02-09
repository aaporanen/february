import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import IImage from '../models/IImage';


export default function Image(item: IImage) {
  return (
    <ImageListItem sx={{ padding: "0.2em"}}>
      <img
        src={item.src}
        alt={item.filename}
        loading="lazy"
      />
    </ImageListItem>
  );
}