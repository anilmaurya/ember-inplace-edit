import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | input', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('show edit button on hover', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.examples-header~.row:first .edit').hasClass('hide'), true);
    $('.examples-header~.row:first .edit-box').mouseenter();
    andThen(function(){
      assert.equal(find('.examples-header~.row:first .edit').hasClass('hide'), false);
    });
  });
});

test('show input box when click on edit button', function(assert) {
  visit('/');

  andThen(function() {
    triggerEvent('.examples-header~.row:first .edit-box', 'mouseenter');
    andThen(function(){
      click('.examples-header~.row:first .edit button');
      andThen(function(){
        assert.equal(find('.examples-header~.row:first input').length, 1);
      });
    });
  });
});

test('edit text', function(assert) {
  visit('/');

  andThen(function() {
    triggerEvent('.examples-header~.row:first .edit-box', 'mouseenter');
    andThen(function(){
      click('.examples-header~.row:first .edit button');
      andThen(function(){
        fillIn('.examples-header~.row:first input', 'Updated content');
        $('.examples-header~.row:first input').focusout();
        andThen(function(){
          assert.equal(find('.examples-header~.row:first .edit-box').text().trim(), 'Updated content');
        });
      });
    });
  });
});
