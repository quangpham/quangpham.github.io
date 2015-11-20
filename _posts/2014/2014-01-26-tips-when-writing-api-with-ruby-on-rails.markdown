---
layout: post
title:  "(Links) Tips when writing API with RoR"
date:   2014-01-26 11:14:31
blog_thumb_image: API-icon.png
categories: blogs
---
I have been using Ruby on Rails in many clients' projects. It is an excellent framework to develop web applications because it is not only simple, clean, easy and fun but also It naturally supports a lot of great features out of the box. It is also supported by a large developer community. That's why many startups has been choosing RoR for their architecture so far.

<p style="text-align: center;">
	<img src="{{ site.url }}/assets/img/blog/d0Jlb.png">
</p>

Rails is also great for building API. However, traditional of Rails seems to be too much "sugar" for JSON API. There are some middleware layers which we don't need in building JSON API. These unnecessary make your backend quite slow sometimes. In addition, concurrency process in Ruby on Rails isn’t so good. Developers need to do alot of tricks & hacks to keep their server in good performance.

Rails-api gem is created to optimise the API building processing with rails by removing unnesscessary middleware to speed up the performance. Rails API gem becomes very popular nowadays and it is used by thousand of Rails developers.

In this post, I would like to some links to keep your Ruby on Rails stack in good performance.

* https://labs.kollegorna.se/blog/2014/11/rails-api/
* http://samurails.com/ruby/ruby-tricks-improve-code/
* http://blog.codeship.com/building-a-json-api-with-rails-5/