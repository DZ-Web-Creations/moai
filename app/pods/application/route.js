import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get("session").fetch().catch(function() {});
  },
  setupController: function(controller, model) {
    controller.set('model', model); 
    if(model.get('currentUser')) {
      controller.set('sessionUser', model.currentUser);   
      if(model.get('currentUser.isNewAccount')) {
        this.transitionTo('profile');
      }      
      this.transitionTo('chat');
    }
  }
});
