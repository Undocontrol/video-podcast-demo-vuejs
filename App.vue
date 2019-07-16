<template>
  <div id="app">
    <div class="container">
      <div class="podcast-intro">
        <h1 class="podcast-title">{{podcastTitle}}</h1>
        <h2 class="podcast-description">{{podcastDescripton}}</h2>
      </div>
      <!--Only passing in 4 episodes here as needed-->
      <episodes v-bind:episodes="visibleEpisodes"></episodes>
      <selectedEpisode v-bind:selectedEpisode="selectedEpisode"></selectedEpisode>
    </div>
  </div>
</template>

<script>
import selectedEpisode from './selectedEpisode.vue'
import episodes from './episodes.vue'
import store from './store'

const RSSParser = require('rss-parser');

export default {
  name: 'app',
  components: {
    selectedEpisode,
    episodes
  },
  data () {
    return {
      //The title and description of the podcast never change, so are fixed. 
      podcastTitle: '',
      podcastDescripton: ''
    }
  },
  computed: {
    // Computed properies are dynamic and will change when the stuff in the store changes
    visibleEpisodes () {
      return store.state.visibleEpisodes
    },
    selectedEpisode () {
      return store.state.selectedEpisode
    }
  },
  methods: {
    fetchRSSFeed: function () { 
      var self = this;
      const parser = new RSSParser();
      //Feel free to change the url from one podcast to another- links provided below for 
      //demonstration.
      //const url = 'http://edition.cnn.com/services/podcasting/fareedzakaria-audio/rss.xml'
      const url = 'http://rss.cnn.com/services/podcasting/studentnews/rss.xml'
      parser.parseURL(url, function(err, feed) {
        // We take the results of the RSS feed 

        // Set the title and descriptions which are fixed.
        self.podcastTitle = feed.title;
        self.podcastDescripton = feed.description;

        // And save the episodes into the store
        store.commit('setEpisodes', feed.items) 
      })
    }
  },
  mounted() {
    this.fetchRSSFeed()

    // Runs when any key is pressed
    document.addEventListener('keydown', function(event) {

      // Checks which key is pressed
      switch(event.key) {
        case 'ArrowRight': 
          // Tell the store which key was pressed
          // Runs the corresponding action
          store.commit('handleRight')
          break;
        case 'ArrowLeft':
          store.commit('handleLeft')
          break;
        case 'ArrowUp':
          store.commit('listUp')
          break;
        case 'ArrowDown':
          store.commit('listDown')
          break;
        case 'Enter':
          store.commit("click")
          break;
        
        default:
          // Nothing
      }

    });
  }
}
</script>

<style lang="scss">
@import "/assets/styles/mixins.scss";

* {
  cursor: none;
}
body {
  @include background-gradient;
}
.focus { 
  @include primary-bg-color;
  @include box-shadow;
}
div.focus { 
  background-color: #3F92BF !important;
  font-weight: bold;
}

#app {
  height: 100%;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  @include primary-font-color;

  .container {
    @include border;
    @include box-shadow;
    background-color: rgba(0,0,0,0.7);
    background-blend-mode: multiply;
    background-size: cover;
    margin: 0 auto;
    margin-top: 20px;
    max-width: 1200px;
    padding: 10px 40px;
    position: relative;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    h1 {
      @include primary-font-color;
      font-size: 2.1rem;
      font-weight: bold;
      text-align: left;
    }
    h2 {
      font-size: 1.5em;
      font-weight: lighter;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      @include link-color;
    }

    .podcast-title,
    .podcast-description {
      @include primary-font-color;
      text-align: left;
      margin-bottom:20px;
    }
  }
}
</style>
