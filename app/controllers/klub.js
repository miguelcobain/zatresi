import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['index'],
  isHovered: function() {
    return this.get('controllers.index.hoveredKlub.model') == this.get('model')
  }.property('controllers.index.hoveredKlub'),
  latlng: function() {
    return L.latLng(this.get('latitude'), this.get('longitude'));
  }.property('latitude', 'longitude')
});
