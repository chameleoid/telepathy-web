const Koa = require('koa');
const serveStatic = require('koa-serve-static');

const app = new Koa();

app.use(serveStatic('build'));

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on http://localhost:${process.env.PORT || 3000}`)
);
