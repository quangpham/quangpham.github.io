---
layout: post
title:  "Unity and native iOS bridge"
date:   2013-08-29 11:14:31
blog_thumb_image: unity.jpg
categories: blogs
---
At Sayduck, we are using Unity to build our awesome mobile applications. There are 2 main reasons why we choose Unitypowerful 3D rendering engine and it supports cross-platform development.

Unity is such a powerful framework for building cross platform games. But it is really suck to use Unity for creating applications. Unity doesn’t support good tools for UI development. There are some 3rd party libraries could help creating UI a bit easier but it doesn’t help a lot. Our application still looked poor. But we were able to stop using Unity because we couldn’t find any framework which could handle 3D rendering as Unity does.

I have spent some time to research how we could improve our application UI. Luckily, I found out we could use web interface on top of Unity application. That means the core functions of our app which mostly handled 3D rendering could be done in Unity, and the UI could be done with Html, Js and CSS.

http://forum.unity3d.com/threads/ios-bridge-unity-with-uikit.188912/
http://alexanderwong.me/post/29949258838/building-a-ios-unity-uiview-uiviewcontroller