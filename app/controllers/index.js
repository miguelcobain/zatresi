import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'klub',
  hoveredKlub: null,
  layers: function(){
    var res = this.map(function(klub){
      return {
        location: klub.get('latlng'),
        id: klub.get('id')
      };
    });
    return res;
  }.property('@each.latlng'),
  actions: {
    highlightKlub: function(klubId) {
      var item = this.findBy('id', klubId);
      this.set('hoveredKlub', item);
      // Later: it should also update the marker (highlight)
    },
    unHighlightKlub: function() {
      this.set('hoveredKlub', null);
    }
  }
});
