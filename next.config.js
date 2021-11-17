const path = require('path');

module.exports = {
  env: {
    environment: 'development',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
