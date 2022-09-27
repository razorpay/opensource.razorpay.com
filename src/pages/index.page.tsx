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
          Does working on open-source project excite you? We're hiring!
        </h1>
        <a href="https://razorpay.com/jobs/" class="inline-block bg-blue-600 px-6 py-2 text-white font-semibold rounded-sm shadow-lg shadow-blue-100 transition-colors hover:bg-blue-500">
          Join Razorpay
        </a>&nbsp;
        <Button as="a" href="https://stackshare.io/razorpay/open-source-showcase" className="mt-12">
          View Stack
        </Button>
      </Callout>

      <Footer />
    </>
  );
};
