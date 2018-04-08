<template>
  <div>
    <md-card>
      <md-card-media>
        <img src="/assets/examples/card-image-1.jpg" alt="Poster">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
  //import Vue from 'vue'
  //import { MdCard } from 'vue-material/dist/components'
  //import 'vue-material/dist/vue-material.min.css'
  //var MdCard = require('vue-material/dist/components');
  //var style = require('vue-material/dist/vue-material.min.css');

  Vue.use(MdCard)

  export default {
    name: 'Card'
  }
</script>

<style scoped>

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>