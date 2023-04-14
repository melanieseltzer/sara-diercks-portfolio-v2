import { BsFileEarmarkPdfFill as PdfIcon } from 'react-icons/bs';
import { HiOutlineDocumentDownload as ExternalLinkIcon } from 'react-icons/hi';
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
      {project.thumbnail && (
        <div className="relative w-full h-40 min-[425px]:h-60 sm:h-40 md:h-52 lg:h-40 overflow-hidden rounded-md">
          <HygraphImage
            priority={lcpPriority}
            handle={project.thumbnail.handle}
            alt={`Project thumbnail for ${project.title}`}
          />
        </div>
      )}

      <h3 className="mt-5 text-xl font-medium">
        <a
          className="hover:underline"
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}{' '}
          <ExternalLinkIcon aria-hidden="true" className="inline" />
        </a>
      </h3>

      <div className="mt-2 flex items-center gap-2">
        {project.finalProject && <Tag>Final Project</Tag>}

        {project.projectPdf && (
          <div className="flex items-center space-x-1">
            <span>{prettyBytes(project.projectPdf.size)}</span>
            <PdfIcon aria-hidden="true" className="text-red-500" />
          </div>
        )}
      </div>

      <Markdown className="my-4">{project.shortDescription}</Markdown>
    </div>
  );
};
