import ProjectCard, { Project } from './Card';

const BlurEffects = () => (
  <>
    <div className="absolute top-56 left-56 w-64 h-64 bg-blue-400/10 blur-3xl animate-pulse" />
    <div className="absolute -top-12 right-16 w-44 h-44 bg-blue-400/20 blur-3xl animate-pulse animate-delay-300" />
    <div className="absolute -bottom-20 right-32 w-44 h-44 bg-blue-400/20 blur-3xl animate-pulse animate-delay-600" />
  </>
);

const FeaturedProjects = ({ projects }: { projects: Project[] }) => (
  <div className="h-[44rem] bg-slate-100 shadow-inner-xs relative overflow-hidden">
    <BlurEffects />

    <div className="container mx-auto grid grid-cols-[2fr,1fr]">
      <div className="-left-48 absolute w-10/12 mask">
        <div className="grid grid-cols-3 origin-top-left scale-75 -rotate-12 border-x border-dashed border-slate-300 px-6">
          {projects.slice(0, 24).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      {/* Dummy div to act as a placeholder column */}
      <div />
      <div className="mt-48 relative z-10">
        <h1 className="text-5xl text-slate-900 font-extrabold leading-snug">
          Projects
        </h1>
        <p className="mt-8 text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          pariatur eligendi, veritatis consectetur libero nobis architecto.
        </p>
        <a
          href="#"
          className="inline-block mt-12 bg-blue-600 px-6 py-2 text-white font-semibold rounded-sm shadow-lg shadow-blue-100 transition-colors hover:bg-blue-500"
        >
          View all projects
        </a>
      </div>
    </div>
  </div>
);

export default FeaturedProjects;
