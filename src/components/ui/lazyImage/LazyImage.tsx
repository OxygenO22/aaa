import { FC, useEffect, useState } from 'react';
import s from './LazyImage.module.scss';

interface ILazyImage {
  src: any;
  placeholderSrc: any;
  alt: any;
}

export const LazyImage: FC<ILazyImage> = ({ src, placeholderSrc, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    }
  }, [src]);

  return (
    <img
      className={
        imageSrc === placeholderSrc ? s.cart__img_loading : s.cart__img_loaded
      }
      src={imageSrc}
      alt={alt}
      {...props}
    />
  );
};
