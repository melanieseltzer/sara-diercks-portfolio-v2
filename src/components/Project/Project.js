import { BsFileEarmarkPdfFill as PdfIcon } from 'react-icons/bs';
import Image from 'next/image';
import prettyBytes from 'pretty-bytes';

import { Markdown } from '../Markdown';
import { Tag } from '../Tag';

export const Project = ({ project }) => {
  const projectLink = project.projectPdf
    ? project.projectPdf.url
    : project.externalLinkUrl;

  return (
    <div>
      <a
        className="hover:text-cyan-500 hover:underline"
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.thumbnail && (
          <div className="overflow-hidden rounded-md hover:scale-105 transition-all">
            <Image
              src={project.thumbnail.url}
              alt={project.title}
              width={project.thumbnail.width}
              height={project.thumbnail.height}
            />
          </div>
        )}

        <h3 className="mt-5 text-xl font-medium">
          {project.title}
          {project.finalProject && <Tag className="ml-2">Final Project</Tag>}
        </h3>
      </a>

      {project.projectPdf && (
        <div className="mt-2 flex items-center space-x-1">
          <span>PDF: {prettyBytes(project.projectPdf.size)}</span>

          <PdfIcon className="text-red-500" />
        </div>
      )}

      <Markdown className="my-4">{project.shortDescription}</Markdown>
    </div>
  );
};
