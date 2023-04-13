import Image from 'next/image';

import { hygraphImageLoader } from './loader';

export const HygraphImage = ({ handle, alt }) => (
  <Image
    fill
    src={handle}
    loader={hygraphImageLoader}
    alt={alt}
    className="object-cover"
    sizes="(min-width: 1024px) 20vw,
    (min-width: 640px) 50w,
    100vw"
  />
);
