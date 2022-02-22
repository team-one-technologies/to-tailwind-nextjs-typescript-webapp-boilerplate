const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n, 
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
      // Looks like backward compatibility approach.
  },
  
};