import NextLink from 'next/link';

export const Link = ({
  children,
  href,
  passHref = true,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}) => (
  // These props are lifted up to the `Link` element. All others are passed to the `<a>`
  <NextLink
    {...{
      href,
      passHref,
      as,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
    }}
  >
    <a {...anchorProps}>{children}</a>
  </NextLink>
);
