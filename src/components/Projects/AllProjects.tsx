import { useEffect, useMemo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import FilterTag from '../FilterTag';
import ProjectCard, { Project } from './Card';

const ALL_PROJECTS_FILTER = 'All Projects';

const useIsMounted = () => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return isMounted;
};

const AllProjects = ({ projects }: { projects: Project[] }) => {
  const isMd = useMediaQuery({ minWidth: 768 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMounted = useIsMounted();
  const numColumns = isLg ? 3 : isMd ? 2 : 1;

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
    []
  );

  const filteredProjects = projects.filter(
    ({ categories }) =>
      filter === ALL_PROJECTS_FILTER || categories?.includes(filter)
  );

  return (
    <div
      className="bg-slate-100 dark:bg-slate-900 shadow-inner-xs"
      id="projects"
    >
      <div className="relative">
        {/* Vertical guides, 2 on the edges */}
        <div className="absolute inset-0 container mx-auto flex justify-between">
          <div className="guide-y dark:guide-y-dark" />
          <div className="guide-y dark:guide-y-dark" />
        </div>
        <div className="flex flex-col justify-center container mx-auto pt-24 pb-10 px-4 relative z-10">
          <h1 className="text-5xl font-extrabold text-center dark:text-white">
            Our <span className="text-blue-600">open-source</span> projects
          </h1>

          <div className="flex flex-wrap px-4 mt-24 gap-4 md:justify-center">
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
          {isMounted &&
            [...new Array(Math.ceil(filteredProjects.length / numColumns))].map(
              (_, idx) => (
                <div className="guide-x dark:guide-x-dark" key={idx} />
              )
            )}
          <div className="guide-x dark:guide-x-dark" />
        </div>

        {/* Vertical guides (4 on desktop) */}
        <div className="absolute inset-0 container mx-auto grid md:grid-cols-2 lg:grid-cols-3">
          <div className="guide-y dark:guide-y-dark hidden md:block" />
          <div className="guide-y dark:guide-y-dark hidden lg:block" />

          {/* Last column has two guides spaced between */}
          <div className="flex justify-between">
            <div className="guide-y dark:guide-y-dark" />
            <div className="guide-y dark:guide-y-dark" />
          </div>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
