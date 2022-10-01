import ReactMarkdown from 'react-markdown';

export const Markdown = ({ children, className, ...props }) => (
  <ReactMarkdown
    components={{
      p: ({ node, ...props }) => (
        <p className="mb-4 text-slate-600" {...props} />
      ),
      a: ({ node, children, ...props }) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cyan-500 transition-all"
          {...props}
        >
          {children}
        </a>
      ),
    }}
    className={className}
    {...props}
  >
    {children}
  </ReactMarkdown>
);
