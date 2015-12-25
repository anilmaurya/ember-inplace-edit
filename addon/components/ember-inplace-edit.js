import Ember from 'ember';
import layout from '../templates/components/ember-inplace-edit';

var $ = Ember.$;

export default Ember.Component.extend({
  layout: layout,
  type: 'input',
  disabled: false,
  originalValue: null,

  keyUp: function(event) {
    if (event.keyCode === 13 && this.get('type') !== "textarea") {
      this.send('doneEditing');
    }

    if (event.keyCode === 27) {
      this.set('value', this.get('originalValue'));
      this.set('isEditing', false);
    }
  },

  mouseEnter: function() {
    $("#" + this.get("elementId") + " .edit").removeClass('hide');
  },

  mouseLeave: function() {
    $("#" + this.get("elementId") + " .edit").addClass('hide');
  },

  height: null,

  focus: Ember.observer('isEditing', function() {
    Ember.run.later(this, function() {
      if (this.get('isEditing')) {
        this.set('originalValue', this.get('value'));

        if (this.get('type') === 'input') {
          this.$('input').focus();
        } else {
          this.$('textarea').css('height', this.get('height')).focus();
        }

        this.sendAction('on-activated', this.$(), this.get('model'));

        var _this = this;

        this.$(this.get('type')).on('focusout', function() {
          _this.send('doneEditing');
        });
      } else {
        // Set height of editable div
         this.set('height', this.$().css('height'));
      }
    });
  }),

  isTypeInput: Ember.computed('type', function() {
    return this.get('type') === "input";
  }),

  displayPlaceholder: Ember.computed('text', function() {
    var text = this.get('text');
    text = text && text.replace(/ +/g, ' '); // replace mutiple space with single space
    return text === undefined || text === null || text === "" || text === " ";
  }),

  actions: {
    startEditing: function() {
      if (this.get('disabled') === false) {
        this.set('isEditing', true);
      }
    },
    doneEditing: function() {
      if (this.get('isEditing') === true) {
        this.set('isEditing', false);
        this.sendAction('action', this.get('model'), this.get('value'));
      }
    }
  }
});
