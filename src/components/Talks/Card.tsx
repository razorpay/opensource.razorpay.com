import { HiOutlineExternalLink } from 'react-icons/hi/index';

export interface Talk {
  published: string;
  title: string;
  speakers: {
    name: string;
    avatar: string;
    url: string;
  }[];
  slides: string;
  url: string;
}

const Speaker = ({
  url,
  avatar,
  name,
  className = '',
}: Talk['speakers'][0] & { className?: string }) => (
  <a
    href={url}
    target="_blank"
    className={`rounded-full overflow-hidden border-4 border-slate-800 transition-colors hover:border-sky-500 ${className}`}
    aria-label={`View more about ${name}`}
  >
    <img
      src={avatar}
      className="mix-blend-luminosity w-9 h-9 hover:mix-blend-normal"
      alt={name}
    />
  </a>
);

const TalkCard = ({ published, slides, speakers, title, url }: Talk) => (
  <div className="flex flex-col px-8 py-6 bg-slate-800 rounded overflow-hidden transform transition shadow-lg">
    <a href={url} target="_blank">
      <h2 className="text-xl font-semibold text-white tracking-wide leading-relaxed transition-colors hover:text-sky-500">
        {title}
      </h2>
    </a>
    <div className="mt-3 mb-10 flex items-center group">
      <div className="mr-2 flex items-center empty:mr-0">
        {speakers && speakers[0].avatar && <Speaker {...speakers[0]} />}

        {speakers
          .slice(1)
          .filter(({ avatar }) => avatar)
          .map((speaker) => (
            <Speaker
              key={speaker.name}
              {...speaker}
              className="relative -ml-4 transition-all group-hover:ml-1"
            />
          ))}
      </div>
      <span className="font-medium text-slate-400 text-sm">
        {speakers.map(({ name }) => name).join(', ')}
      </span>
    </div>
    <div className="mt-auto mb-0 flex items-center justify-between text-white">
      <span>{published}</span>
      {slides && (
        <a
          href={slides}
          target="_blank"
          className="flex items-center transition-colors hover:text-sky-500"
        >
          Slides
          <HiOutlineExternalLink strokeWidth={2} size="1rem" className="ml-2" />
        </a>
      )}
    </div>
  </div>
);

export default TalkCard;
