/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('example-collection', function (/* args */) {
  return ExampleCollection.find();
});

Meteor.publish('posts', function (/* args */) {
  return Posts.find();
});