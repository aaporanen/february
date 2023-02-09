import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import IImage from '../models/IImage';


export default function Image(item: IImage) {
  return (
    <ImageListItem sx={{ width: "300px", height: "300px", padding: "1em" }}>
      <img
        src={item.src}
        srcSet={item.src}
        alt={item.filename}
        loading="lazy"
      />
    </ImageListItem>
  );
}