const Koa = require('koa');
const enforceHttps = require('koa-sslify');
const serveStatic = require('koa-serve-static');

const app = new Koa();

if (process.env.NODE_ENV === 'production') {
  app.use(enforceHttps({
    trustProtoHeader: true,
  }));
}

app.use(serveStatic('build', {
  fallthrough: false,
}));

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on http://localhost:${process.env.PORT || 3000}`)
);
