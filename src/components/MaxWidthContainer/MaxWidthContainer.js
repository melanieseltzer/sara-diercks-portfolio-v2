export const MaxWidthContainer = ({
  children,
  className = '',
  as: Tag = 'div',
}) => (
  <Tag className={`p-4 max-w-5xl mx-auto ${className}`.trim()}>{children}</Tag>
);
