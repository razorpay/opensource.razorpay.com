import { HiOutlineStar, HiOutlineExternalLink } from 'react-icons/hi/index';
import { TbGitFork } from 'react-icons/tb/index';

export interface Project {
  html_url: string;
  name: string;
  stargazers_count: number;
  forks: number;
  description: string | null;
  language: string | null;
  categories?: string[];
}

const languages: Record<string, string> = {
  JavaScript: 'bg-yellow-300',
  Go: 'bg-cyan-300',
  PHP: 'bg-indigo-800',
  CSS: 'bg-purple-800',
  Python: 'bg-sky-800',
  Ruby: 'bg-red-800',
  Java: 'bg-yellow-700',
  HTML: 'bg-orange-600',
  'Objective-C': 'bg-blue-600',
  Shell: 'bg-lime-500',
  'C#': 'bg-emerald-600',
  'ASP.NET': 'bg-fuchsia-600',
  TypeScript: 'bg-blue-700',
  Kotlin: 'bg-violet-500',
};

const ProjectCard = ({
  html_url,
  name,
  stargazers_count,
  forks,
  description,
  language,
}: Project) => (
  <a
    href={html_url}
    target="_blank"
    className="m-4 h-36 flex flex-col min-w-0 bg-white dark:bg-slate-800 rounded px-6 py-4 shadow shadow-black/5 group transition transform hover:-translate-y-0.5 hover:scale-1015 hover:shadow-black/10"
  >
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold whitespace-nowrap text-ellipsis overflow-hidden min-w-0 transition-colors group-hover:text-blue-600 dark:text-white">
        {name}
      </div>
      <div className="ml-2 flex items-center space-x-3 flex-shrink-0 font-semibold text-sm text-slate-500">
        <span className="flex items-center">
          <HiOutlineStar strokeWidth={2} size="1rem" />
          <span className="ml-0.5">{stargazers_count}</span>
        </span>
        <span className="flex items-center">
          <TbGitFork strokeWidth={2} size="1rem" />
          <span className="ml-0.5">{forks}</span>
        </span>
      </div>
    </div>
    <div className="text-slate-600 text-sm tracking-wide mt-3 line-clamp-2 dark:text-gray-300">
      {description}
    </div>
    <div className="mt-auto mb-0 flex font-mono justify-between">
      <div className="flex items-center">
        {language && (
          <span
            className={`h-3 w-3 rounded-full ${
              languages[language!]
            } border border-black/10 dark:border-white/10`}
          />
        )}
        <span className="ml-2 text-xs dark:text-gray-300">{language}</span>
      </div>
      <div className="text-xs flex items-center transition-colors hover:text-blue-600 dark:text-gray-300">
        Repository
        <HiOutlineExternalLink
          strokeWidth={2}
          size="0.875rem"
          className="ml-2"
        />
      </div>
    </div>
  </a>
);

export default ProjectCard;
