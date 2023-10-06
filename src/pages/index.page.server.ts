import axios from 'axios';
import { Member } from '../components/Hero';
import { Project } from '../components/Projects/Card';
import { Talk } from '../components/Talks/Card';

export interface PageData {
  members: Member[];
  projects: Project[];
  talks: Talk[];
}

/**
 * Make API calls here and pass the received data to the page
 */
export async function onBeforeRender() {
  const [{ data: projects }, { data: members }, { default: talks }] =
    await Promise.all([
      import('../repos.json'),
      axios.get('https://api.github.com/orgs/razorpay/members'),
      import('../talks.yaml'),
    ]);

  projects.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return {
    pageContext: {
      pageProps: {
        projects,
        members,
        talks,
      } as PageData,
    },
  };
}
