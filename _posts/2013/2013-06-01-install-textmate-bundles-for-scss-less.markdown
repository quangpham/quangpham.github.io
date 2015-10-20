---
layout: post
title:  "Install TextMate bundles for SCSS, Less, CoffeeScript"
date:   2013-06-01 11:14:31
blog_thumb_image: TextMate_400x400.png
categories: blogs
---
I have started working with Rails for about a month or so, and Rails comes together with a lot of new cool stuffs, such as SCSS (Sassy CSS) or Less or CoffeeScript. But as I open a Rails project in TextMate, these files are not properly formatted, only the boring black and white colors. I have just found out that we can customize TextMate to use different bundles for different languages. These bundles will make the code looks better and sometimes they support even autocomplete. 

![Textmate]({{ site.url }}/assets/img/blog/textmate.png)

You just need to copy the *.tmbundle file into your TextMate support folder. In my case, I have my TextMate bundles located at:

{% highlight bash %}
$ cd /Applications/TextMate.app/Contents/SharedSupport/Bundles/
{% endhighlight %}

Now suppose I want TextMate to know the format of Less, SCSS or CoffeeScript files, I just do a cloning from the proper repository on GitHub.

Less file: e.s. custom.css.less:

{% highlight bash %}
$ git clone https://github.com/appden/less.tmbundle.git 
{% endhighlight %}

CoffeeScript file: e.s. custom.js.coffeescript:

{% highlight bash %}
$ git clone git://github.com/jashkenas/coffee-script-tmbundle CoffeeScriptBundle.tmbundle
{% endhighlight %}

SCSS file: e.s. custom.css.scss:

{% highlight bash %}
$ git clone git://github.com/kuroir/SCSS.tmbundle.git "SCSS.tmbundle"
{% endhighlight %}

There are many more bundles that you can install depends on your need. Just try to search for them in Github with “TextMate bundle”