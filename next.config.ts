const { getCSPDirectives, getCSPHeader } = require('./config/cspConfig');

module.exports = {
  async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: getCSPHeader(),
              value: getCSPDirectives(),
            },
          ],
        },
      ];
    },
}
