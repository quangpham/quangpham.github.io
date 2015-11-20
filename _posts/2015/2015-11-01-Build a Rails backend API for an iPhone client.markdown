---
layout: post
title:  "(Tutorial) Build a Rails backend API for an iPhone client (Part 1)"
date:   2015-11-01 11:14:31
blog_thumb_image: Rails-API_Graphic.png
categories: blogs
---
I have been a fullstack developer for over three years. My favourite stack is iOS and Ruby on Rails. I think the best way to learn Rails is to do a sample Todo list app with RESTFUL API and basic authentication, and because I want to review my iOS skills, I will write an iOS client to query the server’s API to show on the iPhone and iPad. Along the way, I will document the process of making these two projects and the source code for all two of them will be available on my Github account.

The purpose of this entry is to learn Rails, so I will use a lot of techniques/frameworks/open source projects along the way:

- I will use Twitter’s bootstrap framework to make the front end on the web look nicer
- I will use Markdown for editing ToDo item, as sometimes I want to be able to show links in my ToDo item.
- Many techniques from Railscasts’ Ryan Bates. I strongly suggest you subscribe to his site for $9/month because he always bring to the community the best knowledge.
- Many techniques learned from Rails tutorial book by Michael Hartl.

Enough for the introduction, let’s get started.

#### Part 1: the Backend ####

**Configuration**

I use Rails 3.2.3 and Ruby 1.9.2 for the server and iOS 5 SDK with Xcode 4.2 for the client. 

**Todo project with Rails**

Let’s create the project using the rails new command

{% highlight bash %}
$ cd work
$ rails new todo-app
$ cd todo-app
$ git init 
$ git add . 
$ git commit -m "Initial Rails project"
{% endhighlight %}

At this time, we already have a running Rails app, if we want to see what’s already there, we can try:

{% highlight bash %}
$ rails server
{% endhighlight %}

And then we can open the Chrome browser, type http://localhost:3000/ and the magic default Rails homepage will appear

We don’t need just that, we’ll soon delete that homepage, for now, let’s open the project in the editor so that we can make some modifications

{% highlight bash %}
$ mate .
{% endhighlight %}

My favorite editor of choice is TextMate, and here I use the mate command line to open the current directory, which is now the whole Rails application.

Let’s edit the gemfile,  to add Twitter bootstrap gems to our project, we’ll use the twitter-bootstrap-rails gem because it provides us with some useful commands to speedup our process.

{% highlight ruby %}
group :assets do
   ...
   gem 'twitter-bootstrap-rails'
end
{% endhighlight %}

Then I’ll run the bundle command to install the new gem:

{% highlight ruby %}
$ bundle install
{% endhighlight %}

After that we’ll run the rails generate command to install the bootstrap

{% highlight ruby %}
$ rails generate bootstrap:install 
{% endhighlight %}

You’ll notice that there are some javascript, css and less files installed in your assets folder in the Rails app. That means that we are ready to have Bootstrap supported in our application. Now let’s create our first model view controller (MVC) ToDo item using the rails generate scaffold command, our todo will have only two fields: item for storing the todo, completed_at for storing the completion date, if it is nil then it’s not yet done, and then we migrate the database using the rake command. (You’ll notice that there’s something wrong here, the completed_at should be datetime, we’ll see how to fix our schema later)

