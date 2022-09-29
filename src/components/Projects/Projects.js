import { Project } from '../Project';
import { Section } from '../Section';

export const Projects = ({ projects }) => (
  <Section title="Projects">
    <div>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  </Section>
);
