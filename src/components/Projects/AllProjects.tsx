import ProjectCard, { Project } from './Card';

const AllProjects = ({ projects }: { projects: Project[] }) => (
  <div className="bg-slate-100 shadow-inner-xs" id="projects">
    <div className="relative py-56">
      {/* Horizontal guides */}
      <div className="absolute inset-0 space-y-42 mt-56">
        {[...new Array(Math.ceil(projects.length / 3))].map((_, idx) => (
          <div className="guide-x" key={idx} />
        ))}
        <div className="guide-x" />
      </div>

      {/* Vertical guides (4 on desktop) */}
      <div className="absolute inset-0 container mx-auto grid grid-cols-3">
        <div className="guide-y" />
        <div className="guide-y" />

        {/* Last column has two guides spaced between */}
        <div className="flex justify-between">
          <div className="guide-y" />
          <div className="guide-y" />
        </div>
      </div>

      <div className="flex justify-center container mx-auto mt-24 absolute top-0 inset-x-0">
        <h1 className="text-5xl font-extrabold text-center">
          Our <span className="text-blue-600">open source</span> projects
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </div>
);

export default AllProjects;
