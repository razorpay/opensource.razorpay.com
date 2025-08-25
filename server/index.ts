import express from 'express';
import compression from 'compression';
import { renderPage } from 'vite-plugin-ssr';

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  const app = express();

  app.use(compression());

  if (isProduction) {
    const sirv = require('sirv');
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = require('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: 'ssr' },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    };

    try {
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;
      if (!httpResponse) return next();
      const { body, statusCode, contentType } = httpResponse;
      res.status(statusCode).type(contentType).send(body);
    } catch (err) {
      console.error('Error during SSR render:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
