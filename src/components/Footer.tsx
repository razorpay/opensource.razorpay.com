import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa/index';

const Footer = ({ isDark }: { isDark?: boolean }) => (
  <footer
    className={`text-sm shadow-inner-xs ${
      isDark ? 'bg-slate-900' : 'bg-slate-100'
    }`}
  >
    <div
      className={`container mx-auto px-4 pt-10 pb-12 border-x border-dashed ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      } flex justify-between`}
    >
      <div className="font-medium text-slate-500">
        <span>© Razorpay 2022. All Rights Reserved.</span>
      </div>
      <nav
        className={`font-semibold flex items-center space-x-6 ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        {/*<a href="#projects">Projects</a>*/}
        <a href="https://github.com/razorpay/public-presentations">Talks</a>
        <a href="https://engineering.razorpay.com/">Engineering Blog</a>
        <a href="https://razorpay.com/jobs/">Careers</a>
        <a href="https://razorpay.com/docs/">Documentation</a>
        <a href="https://github.com/Razorpay">
          <FaGithub size="1rem" />
        </a>
        <a href="https://twitter.com/Razorpay">
          <FaTwitter size="1rem" />
        </a>
        <a href="https://linkedin.com/company/razorpay">
          <FaLinkedinIn size="1rem" />
        </a>
        <a href="https://www.instagram.com/razorpay/">
          <FaInstagram size="1rem" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
