import Markdown from 'react-markdown';
import Image from 'next/image';
import prettyBytes from 'pretty-bytes';

import { Tag } from '../Tag';

export const Project = ({ project }) => (
  <div>
    {project.thumbnail && (
      <Image
        src={project.thumbnail.url}
        alt={project.title}
        layout="responsive"
        width={project.thumbnail.width}
        height={project.thumbnail.height}
      />
    )}

    <h3>
      {project.title} {project.finalProject && <Tag>Final Project</Tag>}
    </h3>

    <Markdown>{project.shortDescription}</Markdown>

    <a
      href={
        project.projectPdf ? project.projectPdf.url : project.externalLinkUrl
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        {project.externalLinkName
          ? project.externalLinkName
          : `View Project (${prettyBytes(project.projectPdf.size)})`}
      </span>

      {'INSERT ICON'}

      {/* <FontAwesomeIconStyle
            icon={project.externalLinkName ? faExternalLinkAlt : faFilePdf}
          /> */}
    </a>
  </div>
);