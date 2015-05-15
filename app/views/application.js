import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['view'],
  didInsertElement: function() {
    function onDeviceReady() {
      if (cordova.platformId === 'ios' && parseFloat(device.version) >= 7.0) {
        document.body.style.marginTop = "20px";
      }
    }

    document.addEventListener('deviceready', onDeviceReady, false);
  }
});
