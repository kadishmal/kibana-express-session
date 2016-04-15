const expressSessionHapi = require('express-session-hapi');

const PLUGIN_NAME = 'kibana-express-session';

module.exports = function (kibana) {
  return new kibana.Plugin({
    config(Joi) {
      return Joi.object({
        cookieName: Joi.string(),
        enabled: Joi.boolean().default(true),
        redirectTo: Joi.string().default('/login'),
        redis: Joi.object().keys({
          host: Joi.string(),
          port: Joi.number().default(6379)
        }),
        secret: Joi.string(),
        sessionIDPrefix: Joi.string(),
        userProp: Joi.string().default('user'),
      }).default()
    },

    init: function (server) {
      const config = server.config();

      server.register(expressSessionHapi, function () {
        server.auth.strategy('session', 'cookie', 'required', {
          cookieName: config.get(`${PLUGIN_NAME}.cookieName`),
          redirectTo: config.get(`${PLUGIN_NAME}.redirectTo`),
          redis: config.get(`${PLUGIN_NAME}.redis`),
          secret: config.get(`${PLUGIN_NAME}.secret`),
          sessionIDPrefix: config.get(`${PLUGIN_NAME}.sessionIDPrefix`),
          userProp: config.get(`${PLUGIN_NAME}.userProp`),
        });
      });
    }
  });
};
