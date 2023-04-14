import { Logo } from '../Logo';
import { MaxWidthContainer } from '../MaxWidthContainer';
import { TextHighlight } from '../TextHighlight';

export const Intro = () => (
  <section className="py-4 xl:py-20 shadow-sm" aria-label="Hero intro">
    <MaxWidthContainer className="text-center">
      <Logo size={60} className="mx-auto mb-4 sm:hidden sm:m-0" />

      <h1 className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-5xl">
        <abbr title="Geographic Information System">GIS</abbr> portfolio of{' '}
        <TextHighlight>Sara Diercks</TextHighlight>
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
        I&apos;m currently a <TextHighlight>GIS Analyst</TextHighlight> living
        and working in Portland, Oregon. This portfolio showcases some of my
        past projects.
      </p>
    </MaxWidthContainer>
  </section>
);
