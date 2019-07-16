import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Y position is how far from the top on the left menu the users selection is
    yposition: 0,

    // ContentAreaSelected is whether the right-hand side is selected or not
    contentAreaSelected: false,

    // All the podcast episodes are saved here
    episodes: [],

    // Which episodes are currently visible on the left menu go here
    visibleEpisodes: [],

    // We can only show 4 episodes at a time in the menu, so let's start with the first
    startIndex: 0,

    // And end on 4
    finishIndex: 4,

    // Until selected episode is defined, we need a dummy object
    selectedEpisode: {
      title: 'Loading...',
      enclosure: {
        url: '',
        type: ''
      }
    }
  },
  mutations: {
    // These functions run when arrow keys are clicked

    // When the click the up button
    listUp (state) {
      // yposition -1 means they have selected the up arrow (the one on the menu, not the down key)
      // so if the position is more than that, allow them to move up
      if(state.yposition >= -1 && !state.contentAreaSelected) { // Also checking that when they push up, the menu is actually selected
        // Move up by decreasing the yposition
        state.yposition--
      }
    },

    // When they click the down button
    listDown (state) {
      // yposition 5 means they have selected the down arrow
      // So if the down arrow isn't selected, and the menu is focussed
      if(state.yposition <= 4 && !state.contentAreaSelected) {
        // Move down by increasing the position
        state.yposition++
      }
    },

    // If they click right, we just set the main window to be focussed
    handleRight (state) {
      state.contentAreaSelected = true
    },

    // If they click left, we set the menu to be focussed
    handleLeft (state) {
      state.contentAreaSelected = false
    },

    // This function runs when the enter key is clicked
    click (state) {

      // If the main window is selected, they wanna play the content
      if (state.contentAreaSelected) {
        // Play video
        if (state.selectedEpisode.enclosure.type.includes('video')) {
          document.getElementById("videoplayer").play();
        }
        else {
          document.getElementById("audioplayer").play();
        }
        return
      }


      // THIS IS THE COMPLEX BIT...

      // OK, so we have a bunch of episodes.. but only 4 of them are visible at a time on the menu
      // So what we do is.. when they click up and down arrows, we adjust the start/end indexes 
      // and put the result in a visible array

      // eg/ episodes [episode1, episode2, episode3, episode4, episode5, episode6, episode7]
      // visible [ episode2, episode3, episode4, episode5]
      // up arrow clicked...
      // visible [ episode3, episode4, episode5, episode6]
      // See? they increased

      // if they click enter on the up arrow, move the visible episodes to the previous 4 in the array
      if (state.yposition === -1) {
        // Ensure we're not already at the start of the array
        if(state.startIndex > 0) {
          // Decrease the start and end indexes 
          state.startIndex-- 
          state.finishIndex--
        }
        // Set the visible episdoes to the start/end indexes of the episodes array
        state.visibleEpisodes = state.episodes.slice(state.startIndex, state.finishIndex)
        return
      }

      // Down arrow
      // Same as above but opopsite :-)
      if (state.yposition === 4) {
        // Ensure at least 4 items are visible
        if(state.finishIndex < state.episodes.length) {
          state.startIndex++
        }
        state.finishIndex++
        state.visibleEpisodes = state.episodes.slice(state.startIndex, state.finishIndex)
        return
      }

      // FINALLY..  If they didn't click play, or up, or down.. they must have clicked an episode
      // So set that episode to selected so it shows up
      state.selectedEpisode = state.episodes[state.yposition]

    },
    // This saves the episodes from the RSS feed
    // It's called from App.js -> Mounted
    setEpisodes (state, episodes) {
      state.episodes = episodes
      state.selectedEpisode = episodes[0] // By default let's show the first episode in the main window
      state.visibleEpisodes = episodes.slice(state.startIndex, state.finishIndex)
    }
  },
  getters: {
    yposition (state) {
      return state.yposition
    },
    selectedListItem (state) {
      return state.episodes[state.selectedEpisode]
    }
  }
}) 