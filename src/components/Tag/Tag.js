export const Tag = ({ className = '', ...props }) => (
  <div
    className={`inline-block bg-sky-100 text-sky-900 py-1 px-2 text-sm font-medium rounded-xl tracking-wide ${className}`.trim()}
    {...props}
  />
);
