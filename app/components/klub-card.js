import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-card'],
  isHovered: false,
  mouseEnter: function() {
    // window.pubsub.publish('klub.hovered', this.get('klubId'));
    // TODO this should be in the action, not herer
    var val = this.$()[0].getBoundingClientRect();
    console.table(val.top);
    this.sendAction('action', true);
  },
  mouseLeave: function() {
  //   window.pubsub.publish('klub.unhovered');
    this.sendAction('action', false);
  }
});
