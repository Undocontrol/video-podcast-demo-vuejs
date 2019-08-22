# emma-robinson-video-podcast-demo

Hi there and welcome to this demo creating a video podcast.

In this demo, I have created a web app which lets you browse and watch a subset of the CNN Video Podcast catalog using video podcasts available on http://rss.cnn.com/services/podcasting/studentnews/rss.xml.

• The application displays a list of available episodes for the feed. 

• The list shows four episodes, and allow the user to scroll up and down in the list in case more than four episodes are available.

• When the user selects one episode, that episode shall start playing in the video playback area and the episode's description must appear beneath the video playback area.

<img width="1435" alt="Screenshot 2019-08-22 at 16 32 06" src="https://user-images.githubusercontent.com/24893988/63528353-afb12100-c4fa-11e9-9b17-c7a13957e5d3.png">

Here are the initial steps to get it all running:

## Build Setup
``` bash
# CD into the directory 
cd video-podcast-demo-vuejs

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# To do/Notes for improvements 

When testing on different browsers, I had CORS issues when using Chrome. To get around this, I just disabled CORS checks in Chome.l e.g. `open -a Google\ Chrome --args --disable-web-security --user-data-dir`.
Secondly, to parse the xml into json, I didn't use a proxy- I found a rss feed parser and globally installed into my project. 

I would love to make some additional improvements to this demo by the following: 
* making it look a bit better (it's OK but it's the bare minimum) clean up the stylings.
* Perhaps create a function seperate for the keyboard functionality 
* Add unit testing.
