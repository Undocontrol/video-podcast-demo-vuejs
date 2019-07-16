# emma-robinson-video-podcast-demo

> I had CORS issues when using Chrome so to get around this, I disabled CORS checks in Chome and on safari e.g. `open -a Google\ Chrome --args --disable-web-security --user-data-dir`. For this reason, it also doesn't work in Firefox.
 Secondly, to parse the xml into json, I didn't use a proxy- I found a rss feed parser and globally installed into my project. 

 Also, just as an FYI: the two feeds that I've tried (one for audio and one for video) the video one didn't work- It returns an error 404.


## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
