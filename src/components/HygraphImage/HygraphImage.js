import * as React from 'react';
import Image from 'next/image';

import { hygraphImageLoader } from './loader';

export const HygraphImage = ({ handle, alt, priority }) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <Image
      fill
      src={handle}
      loader={hygraphImageLoader}
      priority={priority}
      alt={alt}
      className={`object-cover duration-700 ease-in-out ${
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      }`}
      sizes="(min-width: 1024px) 20vw,
    (min-width: 640px) 50w,
    100vw"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcVQ8AAfkBO36lz9wAAAAASUVORK5CYII="
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
