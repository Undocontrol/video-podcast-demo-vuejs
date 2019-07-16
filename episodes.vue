<template>
  <div id="sidebar">
    <div class="pagination arrow-up" href="#" v-bind:class="{ focus: yposition === -1 && navigationSelected }"></div>
    <div id="podcast-list">
      <div 
        class="podcast" 
        v-for="(episode, index) in episodes" 
        v-bind:class="{ focus: index === yposition && navigationSelected }">
        <p v-html="episode.title"></p>
        <p v-html="episode.pubDate"></p>
      </div>
    </div>
    <div class="pagination arrow-down" href="#" v-bind:class="{ focus: yposition > 3 && navigationSelected }"></div>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'episodes',
  props: {
    episodes: Array
  },
  computed: {
    yposition () {
      return store.state.yposition
    },
    navigationSelected () {
      return !store.state.contentAreaSelected
    }
  }
}
</script>
<style lang="scss" scoped>
@import "/assets/styles/mixins.scss";

#sidebar {
  display: table-cell;
  width: 25%;

  #podcast-list {
    overflow-y: auto;
    margin: 20px 0;
    max-height: 443px;

    .podcast {
      border: 1px solid black;
      @include box-shadow;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
      padding: 0.5rem;
      -ms-flex-preferred-size: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      -ms-flex-negative: 1;
      
      img {
        width:80px;
      }

      a {
        display: block;
      }
    }
  }

  .pagination {
    background: #2f3237;
    box-shadow: inset 0px 0px 8px rgba(0,0,0, .5), 0px 1px 0px rgba(255,255,255, .1);
    background-size: 32%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    height: 50px;
    margin: 0;
    width: 100%;
  }

  .arrow-up {
    background-image:url("./assets/images/chevron_up.png");
  }
  .arrow-down {
    background-image:url("./assets/images/chevron_down.png");
  }
}
</style>