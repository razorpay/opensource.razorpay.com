import TalkCard, { Talk } from './Card';

const Talks = ({ talks }: { talks: Talk[] }) => (
  <div id="talks">
    <svg
      viewBox="0 0 900 64"
      fill="none"
      className="-mt-32 w-full text-slate-900 relative z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 20L450 0L900 64H450H0L0 20Z" fill="currentColor" />
    </svg>

    <div className="pb-32 pt-20 md:pt-8 bg-slate-900 bg-dotted relative z-10 -mt-px">
      <div className="container mx-auto px-4">
        <h1 className="bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200 text-transparent text-5xl font-bold inline-block">
          <a href="https://github.com/razorpay/public-presentations">Public Talks</a>
        </h1>
      </div>
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 container mx-auto px-4">
        {talks.map((talk) => (
          <TalkCard key={talk.title} {...talk} />
        ))}
      </div>
    </div>
  </div>
);

export default Talks;
