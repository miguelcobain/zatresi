import MarkerClusterLayer from '../layers/marker-cluster-collection';
import GoogleMapLayer from '../layers/google-map-layer';

var southWest = L.latLng(45.23, 13.52), // spodaj levo
    northEast = L.latLng(47.02, 16.65); // zgoraj desno

export default EmberLeaflet.MapView.extend(
  Ember.Evented, {
    center: L.latLng(46.2214969, 14.6), // TODO
    zoom: 9,
    options: {
      attributionControl: false,
      minZoom: 8,
      maxBounds: L.latLngBounds(southWest, northEast)
    },
    childLayers: [
      GoogleMapLayer,
      MarkerClusterLayer
    ],
    subscribeToKlubHovered: function() {
      window.pubsub.subscribe('klub.hovered', function(id){
        this.get('controller').send('highlightKlub', id);
      }.bind(this));

      window.pubsub.subscribe('klub.unhovered', function(){
        this.get('controller').send('unHighlightKlub');
      }.bind(this));
    }.on('didInsertElement'),
    unsubscribeFromKlubHovered: function () {
      window.pubsub.unsubscribe('klub.hovered');
    }.on('willDestroyElement')
  }
);
