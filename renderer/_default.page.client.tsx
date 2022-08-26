import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client';
import { PageContext, PageContextProvider } from './usePageContext';
import '../src/index.css';

export async function render(
  pageContext: PageContextBuiltInClient & PageContext
) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById('page-view')!,
    <PageContextProvider pageContext={pageContext}>
      <Page {...pageProps} />
    </PageContextProvider>
  );
}
