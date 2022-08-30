import { useMemo, useState } from 'react';
import FilterTag from '../FilterTag';
import ProjectCard, { Project } from './Card';

const ALL_PROJECTS_FILTER = 'All Projects';

const AllProjects = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState(ALL_PROJECTS_FILTER);
  const categories = useMemo(
    () =>
      projects
        .reduce<string[]>((all, { categories }) => {
          categories = categories ? [...categories] : [];
          categories.unshift(ALL_PROJECTS_FILTER);
          return all.concat(categories);
        }, [])
        .reduce<Record<string, number>>((counter, category) => {
          counter[category] ??= 0;
          ++counter[category];
          return counter;
        }, {}),
    [projects]
  );

  return (
    <div className="bg-slate-100 shadow-inner-xs" id="projects">
      <div className="relative">
        {/* Vertical guides, 2 on the edges */}
        <div className="absolute inset-0 container mx-auto flex justify-between">
          <div className="guide-y" />
          <div className="guide-y" />
        </div>
        <div className="flex flex-col justify-center container mx-auto pt-24 pb-10 relative z-10">
          <h1 className="text-5xl font-extrabold text-center">
            Our <span className="text-blue-600">open source</span> projects
          </h1>

          <div className="flex flex-wrap px-8 mt-24 gap-4 justify-center">
            {Object.keys(categories).map((category) => (
              <FilterTag
                key={category}
                count={categories[category]}
                isActive={category === filter}
                onClick={() => setFilter(category)}
              >
                {category}
              </FilterTag>
            ))}
          </div>
        </div>
      </div>

      <div className="relative pb-56">
        {/* Horizontal guides */}
        <div className="absolute inset-0 space-y-42">
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

        <div className="container mx-auto grid grid-cols-3">
          {projects
            .filter(
              ({ categories }) =>
                filter === ALL_PROJECTS_FILTER || categories?.includes(filter)
            )
            .map((project: Project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
