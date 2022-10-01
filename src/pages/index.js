import { getDataForHomepage } from '../../lib/cms';
import {
  getAboutMeSectionContent,
  getContactSectionContent,
  getProjects,
} from '../../lib/data';
import { Intro } from '../components/Intro';
import { Markdown } from '../components/Markdown';
import { Projects } from '../components/Projects';
import { Section } from '../components/Section';
import { HomepageLayout } from '../layouts/HomepageLayout';

export default function Index({ projects, about, contact }) {
  return (
    <HomepageLayout>
      <Intro />

      <Projects projects={projects} />

      <Section title="About">
        <Markdown>{about}</Markdown>
      </Section>

      <Section title="Contact">
        <Markdown>{contact}</Markdown>
      </Section>
    </HomepageLayout>
  );
}

export async function getStaticProps() {
  const data = await getDataForHomepage();

  return {
    props: {
      projects: getProjects(data),
      about: getAboutMeSectionContent(data),
      contact: getContactSectionContent(data),
    },
  };
}
