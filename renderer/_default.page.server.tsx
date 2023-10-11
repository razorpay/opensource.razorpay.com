import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import { PageContext, PageContextProvider } from './usePageContext';
import '../src/index.css';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageContextProvider pageContext={pageContext}>
      <Page {...pageProps} />
    </PageContextProvider>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title =
    (documentProps && documentProps.title) || 'Razorpay Open Source';
  const desc =
    (documentProps && documentProps.description) || 'Razorpay Open Source';

  const sitePreview =
    (documentProps && documentProps.sitePreview) ||
    'https://opensource.razorpay.com/site-preview.jpg';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <meta name="description" content="${desc}" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://opensource.razorpay.com/">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${desc}">
        <meta property="og:image" content="${sitePreview}">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://opensource.razorpay.com/">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${desc}">
        <meta property="twitter:image" content="${sitePreview}">

        <link rel="icon" type="image/png" href="https://opensource.razorpay.com/favicon.png">

        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      ${dangerouslySkipEscape(
        /**
         * Adding this script in the head prevents flashes of theme change after page is rendered.
         * The class is applied even before the page is rendered, so it renders with the final theme directly.
         */
        `<script type="text/javascript">
            const theme = localStorage.getItem("theme");
            if (theme === 'dark') {
              document.documentElement.classList.add("dark");
            }
          </script>
        `
      )}
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>

        ${dangerouslySkipEscape(
          // Enable GTM on prod
          import.meta.env.PROD
            ? `<script async src="https://www.googletagmanager.com/gtag/js?id=G-EFWRVJFRKV"></script>
                <script>
                  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-EFWRVJFRKV');
                </script>`
            : ''
        )}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {},
  };
}

export { render };
