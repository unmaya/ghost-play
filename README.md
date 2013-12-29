# Ghost Blog
This repo is a testing environment that I'm using to deploy [Ghost](http://getghost.org) to Heroku.

I'm making a theme for Ghost v0.3 - v0.4 and using it to test future versions of [Girder CSS](https://github.com/unmaya/Girder).

### Preview the Theme
http://ghost.fredmaya.com

### Want to use the theme?
Sure! Get the theme from its own repo: [Girder-Ghost](https://github.com/unmaya/girder-ghost) You are free to use it for your own Ghost blog. It's fully compatible with Ghost v.0.3

### Could you deploy this repo to Heroku?
Yes, but... Ghost doesn't officially support Heroku yet, this code is experimental and highly modified to work in that environment. You've been warned but here are some things to note before you dive in:
	- Heroku does not have a persistent file system for post attachments, upload a nice image for your post and it may vanish without notice.
	- You'll need some basic knowledge of Nodejs environment and Postgres configuration to get this running

### Not much else to see at the moment :)