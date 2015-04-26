Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('inside', {
  name: 'inside',
  controller: 'InsideController',
  action: 'action',
  where: 'client'
});

Router.route('posts', {
  name: 'posts',
  controller: 'PostsController',
  action: 'action',
  where: 'client'
});


Router.route('settings', {
  layoutTemplate: 'AdminLayout',
  name: 'settings',
  controller: 'SettingsController',
  action: 'action',
  where: 'client'
});

Router.route('/submit', {name: 'postSubmit'});