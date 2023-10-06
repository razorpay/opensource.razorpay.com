import { Project } from '../components/Projects/Card';

export interface PageData {
  projects: Project[];
}

export async function onBeforeRender() {
  const { data: projects } = await import('../repos.json');

  const hacktoberfestProjects = projects.filter((project) =>
    project.categories.includes('Hacktoberfest')
  );

  hacktoberfestProjects.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return {
    pageContext: {
      pageProps: {
        projects: hacktoberfestProjects,
      } as PageData,
    },
  };
}
