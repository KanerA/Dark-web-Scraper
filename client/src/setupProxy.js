const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/paste',
    createProxyMiddleware({
      target: 'http://node-scraper-server:8080', // uncomment for docker
      // target: 'http://localhost:8081',
      changeOrigin: true,
    })
  );
};