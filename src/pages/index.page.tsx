import Button from '../components/Button';
import Callout from '../components/Callout';
import Footer from '../components/Footer';
import HacktoberfestCallout from '../components/HacktoberfestCallout';
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

      <HacktoberfestCallout />
      {/* <FeaturedProjects projects={projects} /> */}

      <AllProjects projects={projects} />

      <Talks talks={talks} />

      {/* TODO: Update content here if this section is needed */}
      <Callout>
        <h1 className="text-2xl dark:text-white">
          Does working on open-source project excite you? We're hiring!
        </h1>

        <div className="flex flex-col sm:flex-row mt-12 space-y-4 sm:space-x-4 sm:space-y-0 justify-center mx-auto max-w-xs ">
          <Button as="a" href="https://razorpay.com/jobs/">
            Join Razorpay
          </Button>
          <Button
            as="a"
            href="https://stackshare.io/razorpay/open-source-showcase"
          >
            View Stack
          </Button>
        </div>
      </Callout>

      <Footer />
    </>
  );
};
