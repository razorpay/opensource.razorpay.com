import axios from 'axios';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Talks from '../components/Talks/Talks';
import AllProjects from '../components/Projects/AllProjects';
import FeaturedProjects from '../components/Projects/Featured';
import Hero, { Member } from '../components/Hero';
import { Project } from '../components/Projects/Card';
import { Talk } from '../components/Talks/Card';
import Callout from '../components/Callout';

interface PageData {
  members: Member[];
  projects: Project[];
  talks: Talk[];
}

/**
 * Make API calls here and pass the received data to the page
 */
export async function onBeforeRender() {
  const [{ data: projects }, { data: members }, { default: talks }] =
    await Promise.all([
      axios.get('https://api.github.com/orgs/razorpay/repos'),
      axios.get('https://api.github.com/orgs/razorpay/members'),
      import('../talks.yaml'),
    ]);

  return {
    pageContext: {
      pageProps: {
        projects,
        members,
        talks,
      } as PageData,
    },
  };
}

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
