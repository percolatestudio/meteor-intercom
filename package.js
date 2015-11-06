Package.describe({
  name: 'q42:intercom-oauthid',
  summary: "Intercom.io integration using google oauth e-mailaddress as id",
  version: "1.4.2",
  git: "https://github.com/q42/meteor-intercom.git"
});

Npm.depends({'intercom-client':'1.0.1'});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.3.1');

  api.use('session', 'client');
  api.use('accounts-base', ['client', 'server']);

  api.add_files('intercom_server.js', 'server');
  api.add_files(['intercom_loader.js', 'intercom_client.js'], 'client');

  api.export('IntercomSettings');
  api.export('IntercomHash', 'server');
  api.export('IntercomClient', 'server');
});
