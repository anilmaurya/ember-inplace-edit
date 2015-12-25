import Ember from 'ember';

export default Ember.Controller.extend({
  sampleText1: 'One line Text',
  sampleText2: 'Multi line Text',

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
