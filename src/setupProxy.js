const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/passport',
        createProxyMiddleware({
            target: 'http://passport.9000aigc.com',
            changeOrigin: true,
        })
    );
};