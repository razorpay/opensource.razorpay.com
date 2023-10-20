import {
  FaGithub,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa6/index';

const Footer = () => (
  <footer className={`text-sm shadow-inner-xs dark:bg-slate-900 bg-slate-100`}>
    <div
      className={`container mx-auto px-4 pt-10 pb-12 border-x border-dashed dark:border-slate-800 border-slate-200
       flex flex-col-reverse flex-wrap md:flex-row md:gap-y-8 items-center justify-center`}
    >
      {/* Copyrights */}
      <div className="mt-8 md:mt-0 font-medium text-slate-500 text-center md:text-left whitespace-nowrap">
        <span>© Razorpay 2022. All Rights Reserved.</span>
      </div>

      {/* Website nav links */}
      <nav
        className={`mt-8 md:mt-0 md:ml-auto lg:mr-6 font-semibold flex flex-col md:flex-row items-center gap-6 dark:text-slate-300 text-slate-700'`}
      >
        <a
          href="https://github.com/razorpay/public-presentations"
          target="_blank"
        >
          Talks
        </a>
        <a href="https://engineering.razorpay.com/" target="_blank">
          Engineering Blog
        </a>
        <a href="https://razorpay.com/jobs/" target="_blank">
          Careers
        </a>
        <a href="https://razorpay.com/docs/" target="_blank">
          Documentation
        </a>
      </nav>

      {/* Social links */}
      <nav
        className={`flex justify-center md:justify-start space-x-6 dark:text-slate-300 text-slate-700`}
      >
        <a href="https://github.com/Razorpay" aria-label="Open Razorpay GitHub">
          <FaGithub size="1rem" />
        </a>
        <a
          href="https://twitter.com/Razorpay"
          aria-label="Open Razorpay Twitter"
        >
          <FaXTwitter size="1rem" />
        </a>
        <a
          href="https://linkedin.com/company/razorpay"
          aria-label="Open Razorpay LinkedIn"
        >
          <FaLinkedinIn size="1rem" />
        </a>
        <a
          href="https://www.instagram.com/razorpay/"
          aria-label="Open Razorpay Instagram"
        >
          <FaInstagram size="1rem" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
