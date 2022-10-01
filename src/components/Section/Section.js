import { MaxWidthContainer } from '../MaxWidthContainer';

export const Section = ({ title, children }) => (
  <MaxWidthContainer as="section" id={title.toLowerCase()}>
    <h2 className="text-gray-900 mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight">
      {title}
    </h2>

    {children}
  </MaxWidthContainer>
);
