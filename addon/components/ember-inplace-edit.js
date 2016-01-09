import Ember from 'ember';
import layout from '../templates/components/ember-inplace-edit';

var $ = Ember.$;

export default Ember.Component.extend({
  layout: layout,
  type: 'input',
  disabled: false,
  originalValue: null,
  autoResize: false,

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
    if (this.get('isEditing')) {
      if (!this.get('autoResize')) {
        var height = this.$().css('height'),
            width = this.$().css('width');
      }

      Ember.run.later(this, function() {
        if (this.get('isEditing')) {
          this.set('originalValue', this.get('value'));

          if (this.get('type') === 'input') {
            this.$('input').focus();
          } else {
            if (this.get('autoResize')) {
              this.$('textarea').focus();
            } else {
              this.$('textarea').css({height: height, width: width}).focus();
            }
          }

          this.sendAction('on-activated', this.$(), this.get('model'));

          var _this = this;

          this.$(this.get('type')).on('focusout', function() {
            _this.send('doneEditing');
          });
        }
      });
    }
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
