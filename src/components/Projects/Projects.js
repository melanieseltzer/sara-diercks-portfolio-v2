import { Project } from '../Project';
import { Section } from '../Section';

export const Projects = ({ projects }) => (
  <Section title="Projects">
    <div className="mt-4 grid gap-10 lg:gap-10 md:grid-cols-2">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  </Section>
);
