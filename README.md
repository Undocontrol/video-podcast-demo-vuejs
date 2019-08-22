# emma-robinson-video-podcast-demo

Hi there and welcome to this demo creating a video podcast. 

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
