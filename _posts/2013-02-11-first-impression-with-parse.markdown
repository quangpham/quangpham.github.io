---
layout: post
title:  "First impression with parse"
date:   2013-02-11 11:14:31
cover_image: parse.gif
categories: blogs
---
Parse.com helps app developers to speed up their project development time by providing a fast-setup and easy-to-use backend. The developers can leave the pain of backend development, server deployment, security issues, etc for Parse.com and focus on their main thing. I have been using Parse.com for couple projects and here are some impressions about Parse.com

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