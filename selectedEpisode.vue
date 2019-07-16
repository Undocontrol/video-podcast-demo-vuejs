<template>
  <div id="selectedEpisode" v-bind:class="{ focus: contentAreaSelected }">

    <!-- Render Videos -->
    <template v-if="selectedEpisode.enclosure.type.includes('video')">
      <video width="100%" id="videoplayer" controls>
        <source :src="selectedEpisode.enclosure.url" :type="selectedEpisode.enclosure.type">
        Your browser does not support the video tag.
      </video>
    </template>

    <!-- Render Audio -->
    <template v-if="selectedEpisode.enclosure.type.includes('audio')">
      <audio id="audioplayer"
        controls
        :src="selectedEpisode.enclosure.url">
            Your browser does not support the
            <code>audio</code> element.
      </audio>
    </template>
    <p class="clip-description" v-html="selectedEpisode.content"></p>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'selectedEpisode',
  props: {
    selectedEpisode: {
      type: Object
    }
  },
  computed: {
    contentAreaSelected () {
      return store.state.contentAreaSelected
    }
  },
}
</script>

<style lang="scss">
@import "/assets/styles/mixins.scss";

#selectedEpisode {
  display: table-cell;
  padding: 20px 7% 0;
  text-align: left;
  vertical-align: top;

  h1 {
  padding-left: 21%;
}

 video {
   @include border;
 }

  .clip-description {
    @include primary-font-color;
    font-weight: lighter;
    padding-top: 20px;

    .feedflare {
      background: lightgray;
      border-radius: 10px;
      @include box-shadow;
      height: 45px;
      margin-top: 20px;

      a {
        @include primary-font-color;
        
        img {
          vertical-align: top;
          width: 100px;
        }
      }
    }
  }
}
</style>