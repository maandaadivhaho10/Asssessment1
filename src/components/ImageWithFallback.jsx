import React, { useState } from 'react';
import placeholder from '../assets/imageholder.jpg';

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const onError = () => {
    setImgSrc(placeholder);
  };

  return (
    <img
      src={imgSrc || placeholder}
      alt={alt}
      onError={onError}
      {...props}
    />
  );
};

export default ImageWithFallback;
