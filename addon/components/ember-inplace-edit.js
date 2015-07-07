import Ember from 'ember';
import layout from '../templates/components/ember-inplace-edit';

export default Ember.Component.extend({
  layout: layout,

  didInsertElement: function(){
    var _this = this;
    if(this.get('type') === 'input'){
      $('body').on('focusout', "#"+this.get("elementId")+" input", function(){
        _this.send('doneEditing');
      });
    }else{
      $('body').on('focusout', "#"+this.get("elementId")+" textarea", function(){
        _this.send('doneEditing');
      });
    }
  },

  isTypeInput: function(){
    return this.get('type') === "input";
  }.property('type'),

  displayPlaceholder: function(){
    var text = this.get('text');
    return text === undefined || text === null || text === "";
  }.property('text'),

  actions: {
    toggleEditing: function(){
      this.toggleProperty('isEditing');
    },
    doneEditing: function(){
      this.toggleProperty('isEditing');
      this.sendAction();
    }
  }
});
