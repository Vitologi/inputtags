Package.describe({
  name: 'vitologi:inputtags',
  version: '0.9.6',
  summary: 'Converts your input to field of tags.',
  git: 'https://github.com/Vitologi/inputtags.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles(['src/inputtags.js', 'src/inputtags.css'], 'client');
});

