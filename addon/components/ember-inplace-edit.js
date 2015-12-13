import Ember from 'ember';
import layout from '../templates/components/ember-inplace-edit';

export default Ember.Component.extend({
  layout: layout,
  type: 'input',

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
    this.focus();
  },

  keyPress: function(event){
    if(event.keyCode == 13){
      this.toggleProperty('isEditing');
      this.sendAction();
    }
  },

  mouseEnter: function(){
    $("#"+this.get("elementId")+" .edit").removeClass('hide');
  },

  mouseLeave: function(){
    $("#"+this.get("elementId")+" .edit").addClass('hide');
  },

  height: null,

  focus: function(){
    var _this = this;
    Ember.run.scheduleOnce('afterRender', this, function(){
      if(_this.get('isEditing')){
        if(_this.get('type') === 'input'){
          $("#"+_this.get("elementId")+" input").focus();
        }else{
          $("#"+_this.get("elementId")+" textarea").css('height', _this.get('height'));
          $("#"+this.get("elementId")+" textarea").focus();
        }
      }else{
        // Set height of editable div
         _this.set('height', $("#"+_this.get("elementId")).parent().css('height'));
      }
     })
  }.observes('isEditing'),

  isTypeInput: function(){
    return this.get('type') === "input";
  }.property('type'),

  displayPlaceholder: function(){
    var text = this.get('text');
    text = text && text.replace( / +/g, ' '); // replace mutiple space with single space
    return text === undefined || text === null || text === "" || text === " ";
  }.property('text'),

  actions: {
    toggleEditing: function(){
      this.toggleProperty('isEditing');
    },
    doneEditing: function(){
      if(this.get('isEditing') == true){
        this.toggleProperty('isEditing');
        this.sendAction();
      }
    }
  }
});
