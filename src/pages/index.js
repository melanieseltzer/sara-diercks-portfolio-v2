import { getDataForHomepage } from '../../lib/cms';
import {
  getAboutMeSectionContent,
  getContactSectionContent,
  getProjects,
} from '../../lib/data';

export default function Index({ data }) {
  console.log(getProjects(data));
  console.log(getAboutMeSectionContent(data));
  console.log(getContactSectionContent(data));
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export async function getStaticProps() {
  const data = await getDataForHomepage();

  return {
    props: { data },
  };
}
