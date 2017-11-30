new Vue({
  el: '#app',

  data: {
    ws: null,
    chatContent: '',
    temperature: '--',
    pressure: '--',
    humidity: '--'
  },

  created: function() {
    var self = this;
    this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    this.ws.addEventListener('message', function(e) {
      var msg = JSON.parse(e.data);
      self.temperature = Math.round(msg.temperature_C * 100) / 100 + ' C';
      self.pressure = Math.round(msg.pressure_KPa * 100) / 100 + ' KPa';
      self.humidity = Math.round(msg.humidity * 100) / 100;
    });
  }
});
