import { BsFileEarmarkPdfFill as PdfIcon } from 'react-icons/bs';
import prettyBytes from 'pretty-bytes';

import { HygraphImage } from '../HygraphImage';
import { Markdown } from '../Markdown';
import { Tag } from '../Tag';

export const Project = ({ project, lcpPriority }) => {
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
          <div className="relative w-full h-40 min-[425px]:h-60 sm:h-40 md:h-52 lg:h-40 overflow-hidden rounded-md hover:scale-105 transition-all">
            <HygraphImage
              priority={lcpPriority}
              handle={project.thumbnail.handle}
              alt={project.title}
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
