---
layout: post
title:  "First impression with parse"
date:   2013-06-11 11:14:31
cover_image: parse.gif
categories: blogs
---
Parse.com helps app developers to speed up their project development time by providing a fast-setup and ready-to-use backend. The developers don't need to worry about backend development, server deployment, security issues. They can just leave the most painful in the backend development for Parse and only focus on their main business. I've tried using Parse since they released their beta version in early 2012. It is quite simple and easy to use frame work. I didn't spend too much time to get started with their library. In fact, it took me only almost 2 days to create an iOS apps with Parse integrated.


It has been a while since I tried Parse in some of my projects and I really recommend the app developers tontry it out. Especially, it has gain better performance after being acquired by the giant Facebook. These are my thoughts about Parse as an app developer and hopefully they would be useful for you to choose your backend architecture.

###### Ready-made data communication layers

Parse.com offers excellent SDKs for many main platforms like iOS, android, windows phone, JS. All data communication layers has been already implemented and ready to use. For example, iOS developers can just leave the complexity of RESTkit, online-offline networking control, data synchronization, etc. All of these processes could be done in few lines of code with Parse SDK.

{% highlight objective-c %}
PFObject *gameScore = [PFObject objectWithClassName:@“GameScore”];
gameScore[@“score”] = @1337;
gameScore[@“playerName”] = @“Sean Plott”;
gameScore[@“cheatMode”] = @NO;
[gameScore saveInBackgroundWithBlock:^(BOOL succeeded, NSError *error) {
 if (succeeded) {
   // The object has been saved.
 } else {
   // There was a problem, check error.description
 }
}];
{% endhighlight %}

###### Authentication
PFUser is super simple to use. Login with Facebook/Twitter is supported by Parse.com of the box.

###### Push notification
No need to worry about setting up a server to send your push notification.

###### Cloud code
Parse provides some “web-hook” methods incase of advanced data processing features.

###### Their SDK is well documented
Documentation is very clean and clear. They also provide some useful tutorials and sample source codes. I didn’t find any problem when I got started using it.

Overall, my first impression is good.