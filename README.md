yolo-tyrion
===========


 Note this is very out of date at this point - we ended up using phantom to produce a bot friendly render of our sites pages. To me this feels very clunky and results in little more than a new failure point.  Solutions from React JS like server side rendering provide a better alternative to this.  Angular 2.0 will likely solve much of this hassle, but I have not had the chance to dive into that yet.  As of today, I would suggest you just learn ReactJS if you want to implement rich client applications.


Testing Angular JS SEO

Do as little as possible to make an angular app SEO friendly as possible - Google bot, Bing bot, and maybe Yahoo


Basic Info
----------

* Html5Mode enabled
* HashBang enabled for browsers / crawlers that do not support Html5Mode
* Uses prerender_node and prerender.io for phantom js page caching.
    * We will likely deploy our own service for phantom js page caching.
* Has a static sitemap and robots.txt file.
    * We will have to generate the sitemap



