import { HiOutlineMap as MapIcon } from 'react-icons/hi';

export const Logo = ({ size = 40, ...props }) => (
  <MapIcon aria-hidden="true" size={size} {...props} />
);
