var Vue = require('vue');
var VueResource = require('vue-resource');
var Card = require('./card.vue');
//var Components = require('vue-material');
//var Material = require('vue-material/dist/vue-material.min.css');

Vue.use(VueResource);
//Vue.use(Components);
//Vue.use(Material);

var vm = new Vue({
  el: 'body',
  components: {
    'card': Card
  }
});

