import Hero from '@/components/site/hero';
import Work from '@/components/site/work';
import Products from '@/components/site/products';
import A11y from '@/components/site/a11y';
import Skills from '@/components/site/skills';
import Experience from '@/components/site/experience';
import Education from '@/components/site/education';
import About from '@/components/site/about';
import Contact from '@/components/site/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Products />
      <A11y />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Contact />
    </>
  );
}
