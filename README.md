# kibana-express-session

A Kibana plugin to check (*and only check*) if a user is authenticated.
Uses [`express-session-hapi`](https://github.com/kadishmal/express-session-hapi)
module to check for session data in Redis.

This module **does not** perform the actual authentication. It does not
register any route handler. It only checks if the user is authenticated.
If not, it redirects to a configurable `redirectTo` location.

## Usage

    ./bin/kibana plugin -i kibana-express-session -u https://github.com/kadishmal/kibana-express-session/releases/download/v1.0.0/kibana-express-session-1.0.0.zip

**Notice** that when specifying a URL via `-u` flag, Kibana requires the URL to point
to a ZIP file which includes all the dependencies. Kibana doesn't run `npm install`
when installing a plugin. So, the ZIP file should be archived and uploaded somewhere.
Follow the **Build** section below for build instructions.

## Options

```yaml
kibana-express-session: 
  cookieName: ''
  # Disable or enable this Kibana plugin.
  enabled: true
  redis:
    host: ''
  redirectTo: '/login'
  secret: ''
```

Basically, the same options accepted by `express-session-hapi` module
are accepted by `kibana-express-session`.

## Build

    grunt build

This generates a ZIP files into `build/` directory. Upload this archive to the **Releases**
tab in the Github repository.

## License

The [MIT](https://github.com/kadishmal/kibana-express-session/blob/master/LICENSE) License (MIT)

Copyright (c) 2016 Esen Sagynov
