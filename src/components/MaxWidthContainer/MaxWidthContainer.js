export const MaxWidthContainer = ({
  className = '',
  as: Tag = 'div',
  ...props
}) => (
  <Tag className={`p-4 max-w-5xl mx-auto ${className}`.trim()} {...props} />
);
