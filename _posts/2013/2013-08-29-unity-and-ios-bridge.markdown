---
layout: post
title:  "Unity and native iOS bridge"
date:   2013-08-29 11:14:31
blog_thumb_image: unity.jpg
categories: blogs
---
At Sayduck, we are using Unity to build our awesome mobile applications. There are 2 main reasons why we choose Unitypowerful 3D rendering engine and it supports cross-platform development.

<p style="text-align: center;">
	<img src="{{ site.url }}/assets/img/blog/app42-unity3d-plugin.png">
</p>

Unity is such a powerful framework for building cross platform games. But it is really suck to use Unity for creating applications. Unity doesn’t support good tools for UI development. There are some 3rd party libraries could help creating UI a bit easier but it doesn’t help a lot. Our application still looked poor. But we were able to stop using Unity because we couldn’t find any framework which could handle 3D rendering as Unity does.

I have spent some time to research how we could improve our application UI. Luckily, I found out we could use web interface on top of Unity application. That means the core functions of our app which mostly handled 3D rendering could be done in Unity, and the UI could be done with Html, Js and CSS. These are few things I would like to share if you would like to bridge the gap between Unity & iOS.

You should note:

* Unity cannot be completely stopped and then started on demand. The best we could do is pause Unity, change to a blank scene to free up memory use, and then load a new scene and resume.

* Building everything in Unity makes it simple to build your application across platforms (iPhone + Android). Conversely, integrating Unity with your Xcode project means you’ll have to port over your Objective-C.

* There is no official support (currently) for writing your application this way, and so it will rest solely on your shoulders to ensure your application continues to function in the future.

Plan to integrate Unity with Xcode:

* Use your own AppDelegate (from now on referred to as YourAppDelegate) and forward all UIApplicationDelegate methods to AppController, which you instantiate in applicationDidFinishLaunchingWithOptions in your YourAppDelegate.

* Set YourAppDelegate’s window property to keep track of the window returned by AppController. Instantiate your UIViewControllers or UIViews and add them as a subview to the aforementioned window. Your views are basically overlaid on top of Unity’s view.

* Expose methods to play and pause Unity.

Read more:

http://forum.unity3d.com/threads/ios-bridge-unity-with-uikit.188912/
http://alexanderwong.me/post/29949258838/building-a-ios-unity-uiview-uiviewcontroller