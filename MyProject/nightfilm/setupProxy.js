const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/index.json', {
      taget: 'https://khophim.tv/_next/data/ez40LNt9Iow0qglBoLhZh',
      changeOrigin: true,
    }),
  );
};
