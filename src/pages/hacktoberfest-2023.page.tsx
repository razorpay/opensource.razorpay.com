import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/Projects/Card';
import { PageData } from './hacktoberfest-2023.page.server';

const Link = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => (
  <a
    className="text-blue-600 font-medium underline underline-offset-4 transition-colors hover:text-blue-500"
    target="_blank"
    {...props}
  />
);

export const Page = ({ projects }: PageData) => {
  return (
    <>
      <Header />

      <div className="min-h-screen relative bg-slate-100 py-40 dark:bg-slate-900">
        <div className="absolute inset-0 container mx-auto hidden md:flex justify-between">
          <div className="guide-y dark:guide-y-dark" />
          <div className="guide-y dark:guide-y-dark" />
        </div>

        <main className="relative max-w-3xl mx-auto px-4 text-slate-900 dark:text-slate-100">
          <img
            src="/razorpay-hacktoberfest.png"
            className="bg-white rounded-lg"
          />
          <h1 className="mt-10 md:mt-24 text-4xl md:text-5xl font-extrabold leading-normal">
            Razorpay Hacktoberfest 2023
          </h1>
          <p className="mt-16 text-lg leading-8 text-slate-700 dark:text-slate-400">
            <Link href="https://hacktoberfest.com">Hacktoberfest</Link> turned
            10 this year 🎉!
            <br />
            We at Razorpay are celebrating this milestone by encouraging
            developers to make contributions to our open-source repositories.
            Whether you are a first-time contributor, or an experienced
            open-source developer, we welcome you to join us in this
            celebration. Everyone who makes one or more contributions to the{' '}
            <Link href="https://github.com/orgs/razorpay/repositories">
              Razorpay repositories
            </Link>{' '}
            during Hacktoberfest (October 1st 2023 to October 31st 2023) will
            receive special goodies.
          </p>

          <h2 className="mt-16 text-3xl font-bold">Requirements</h2>
          <ul className="text-lg leading-8 list-disc mt-6 pl-6 space-y-2 text-slate-700 dark:text-slate-400">
            <li className="pl-2">
              As long as you are making contributions to the Razorpay
              repositories, you are eligible for the goodies and our love 💙
            </li>
            <li className="pl-2">
              Please refrain from making spammy or invalid contributions. This
              may make you ineligible for the goodies.
            </li>
            <li className="pl-2">
              Do note that we can only ship goodies within India at this time.
            </li>
          </ul>

          <h2 className="mt-16 text-3xl font-bold">Recommended projects</h2>
          <p className="mt-8 text-lg leading-8 text-slate-700 dark:text-slate-400">
            While you can contribute to any{' '}
            <Link href="https://github.com/orgs/razorpay/repositories">
              Razorpay repository
            </Link>{' '}
            to be eligible, here are some of the repositories that have active
            participation and are recommended for first time contributors.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="-m-4">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-bold">How to sign up</h2>
          <ul className="text-lg leading-8 list-disc mt-6 pl-6 space-y-2 text-slate-700 dark:text-slate-400">
            <li className="pl-2">
              Choose an issue in a{' '}
              <Link href="https://github.com/orgs/razorpay/repositories">
                Razorpay repository
              </Link>{' '}
              on GitHub that you'd like to contribute to. You can also review
              issues{' '}
              <Link href="https://github.com/search?q=org%3Arazorpay+is%3Aissue+is%3Aopen&type=issues">
                here
              </Link>
              .
            </li>
            <li className="pl-2">
              Fork the repository, make your changes and create a pull request.
            </li>
            <li className="pl-2">
              The Razorpay team will review the pull request and let you know if
              additional work is needed.
            </li>
            <li className="pl-2">
              After your pull request(s) is accepted,{' '}
              <Link href="https://forms.gle/jfDMUK8i2wxCr4Ky7">
                fill this form
              </Link>
              . We'll later reach out to you with details for the goodies once
              your contributions are verified.
            </li>
            <li className="pl-2">
              Pull Requests opened in the month of October will count, even if
              they are merged a bit later.
            </li>
          </ul>
        </main>
      </div>

      <Footer />
    </>
  );
};

export const documentProps = {
  title: 'Hacktoberfest 2023 | Razorpay Open Source',
  sitePreview:
    'https://opensource.razorpay.com/razorpay-hacktoberfest-site-preview.png',
};
