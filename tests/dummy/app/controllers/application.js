import Ember from 'ember';

export default Ember.Controller.extend({
  sampleText1: 'One line Text',
  multiLineText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  multiLineText2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  users: Ember.computed(function() {
    return [
      {
        name: 'Jane Doe',
        age: 30,
        location: 'Miami, Florida'
      },
      {
        name: 'John Doe',
        age: 34,
        location: 'Miami, Florida'
      },
      {
        name: 'Toma',
        age: 27,
        location: 'Budapest, Hungary'
      }
    ];
  }),

  actions: {
    updateUser(model, newValue) {
      console.log('User updated: ', model);
      console.log('New value: ', newValue);
    },

    inputActivated($container) {
      $container.addClass('activated');
    }
  }
});
