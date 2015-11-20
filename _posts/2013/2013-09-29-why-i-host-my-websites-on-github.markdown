---
layout: post
title:  "Why I host my website on Github"
date:   2013-09-10 11:14:31
blog_thumb_image: github-logo.png
categories: blogs
---
http://phamquang.tumblr.com/post/98713232473
A year ago, I cancelled my hosting and server accounts. I have moved most of my clients’ static websites to github pages. I realised hosting/server is quite expensive when I only needed to store static websites. Github pages is a great alternative. It is not only absolutely free but also extremely reliable.

Prior to Github pages, I’ve used a virtual server provided by a Finnish company to host my websites. I’ve paid about 33€ per month for the basic virtual server. After spending some time on configuration, I got a server running Apache, PHP and Mysql and it was ready to host my clients’s websites and Wordpress blogs.

However, most of my clients’ websites were very simple. Normally, they are just some static pages and the contact form. My clients rarely update their website contents so I didn’t think they really need to use CMS and hosting services. 

<p style="text-align: center; margin-bottom:20px;">
	<img src="{{ site.url }}/assets/img/blog/github-pages-featured-image-screen.png">
</p>


##### Why I moved to github pages

I switched to github pages for a couple of reasons:

* `Free`. It’s free and your account is created immediately. 
* Uploading to GitHub is very simple: add files, commit and push the changes to github.
* Backup & Restore. Files won’t get lost/deleted. In case something goes wrong, it is easy to restore the file (as well as previous versions of it) and revert the changes.
* Uptime, speed and security. Hosting in github pages makes my job easier. I don’t need to keep an eye on server vulnerabilities and I don’t need to maintenance the server to make it fast. GitHub servers are optimised ”out of the box“ to be fast and reliable.
* Customised domain. Github provide a simple way to host static websites with your own domain name.

<b>How to host your static websites on github pages</b>

* Setting up a static website on github is very simple and easy. It is done by creating new repository called username.github.io (username is your github account). Everything you put inside this repository such as html files, css files, folders, images, etc will be accessible via http://username.github.io. 

* In order to use a custom domain instead of http://username.github.io, there are 2 more steps to go

* Create CNAME in the root of the repo. Enter this line “yourdomain.com” in the CNAME file
Login to your domain admin panel and create a A record pointing to 192.30.252.153 or 192.30.252.154

* Depends on your domain provider, it would take around 10 mins to 1 hour for your DNS to be updated. After your DNS information is completely updated, your website will be available at yourdomain.com

<b>Dynamic content like contact form</b>

The downside of github pages is that it doesn’t support server side languages such as PHP, ASP, etc which means the contact form in your website won’t work. Luckily, there are some third party contact form plugins that could help you. One of them is formspree.io. It is very to setup and free to use for 10000 form submit per month. I think it is suitable to create contact form.

To setting up contact form with formspree.io,  just attach this script into your html file.

{% highlight bash %}
<form action=“http://formspree.io/you@email.com”>
<input type=“email” name=“_replyto”> 
<textarea name=“body”></textarea> 
<input type=“submit” value=“Send”> 
</form>
{% endhighlight %}

Boom! Everything is done easily and now you are saving 33eur/month for your customers.