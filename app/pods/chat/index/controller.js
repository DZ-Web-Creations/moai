import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  sessionUser: Ember.computed.alias('application.sessionUser'),
	actions: {
    logout: function() {
      this.get("session").close();
    }    
	}
});
