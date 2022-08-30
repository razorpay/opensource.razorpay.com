import Button from '../components/Button';
import Callout from '../components/Callout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AllProjects from '../components/Projects/AllProjects';
import Talks from '../components/Talks/Talks';
import { PageData } from './index.page.server';

export const Page = ({ projects, talks, members }: PageData) => {
  return (
    <>
      <Header />

      <Hero members={members} />

      {/* <FeaturedProjects projects={projects} /> */}

      <AllProjects projects={projects} />

      <Talks talks={talks} />

      {/* TODO: Update content here if this section is needed */}
      <Callout>
        <h1 className="text-2xl">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          qui laudantium!”
        </h1>
        <Button className="mt-12">Final CTA</Button>
      </Callout>

      <Footer />
    </>
  );
};
