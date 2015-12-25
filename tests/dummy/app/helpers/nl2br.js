import Ember from 'ember';

export function nl2br(params) {
  let text = Ember.Handlebars.Utils.escapeExpression(params[0]),
      breakTag = '<br>';

  return Ember.String.htmlSafe((text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2'));
}

export default Ember.Helper.helper(nl2br);
