import Image from 'next/image';

import { hygraphImageLoader } from './loader';

export const HygraphImage = ({ handle, alt }) => (
  <Image
    fill
    src={handle}
    loader={hygraphImageLoader}
    alt={alt}
    className="object-cover"
    sizes="(min-width: 768px) 25vw,
    100vw"
  />
);
