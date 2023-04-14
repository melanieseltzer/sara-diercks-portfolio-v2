import { Project } from '../Project';
import { Section } from '../Section';

export const Projects = ({ projects }) => (
  <Section title="Projects">
    <div className="mt-4 grid gap-10 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Project key={project.id} project={project} lcpPriority={index === 0} />
      ))}
    </div>
  </Section>
);
