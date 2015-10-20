---
layout: post
title:  "How much does it cost to create an app?"
date:   2013-10-28 11:14:31
blog_thumb_image: app-iphone.png
categories: blogs
---
This is properly the most popular question I usually got from my business-oriented friends. After giving my estimation, most of them, however, had a shocked impression because of the unexpected (high) quotation. That’s why I think it is good to write a blog to explain how I estimated and why creating an apps is costly. Hopefully, it could give some valuable information to my non-coder friends and the business people who need to make the decision or just want to understand the process of mobile development.

What does it include in the mobile app development process?

First: the backend

I would like to start with the-place-to-store-your-data, or the so called “backend”. After talking with many clients, I have discovered that most of them don’t have any idea about the infrastructure behind the mobile app. That’s why they have always assumed an mobile app is only an app, and the data is saved only inside the mobile phone. It is true for the very simple apps. But if you are looking to develop an app that has some kind of sign in/sign up, get the updated information from the internet, or even involving a simple form to receive information from the user, then you definately need a server. In some case, you might need more than a server if your app is complicated and it is used by a lot of users. And the more servers you have, the more costly it is.

Second: the API

After having a server, you need to have a way for the iphone app to talk with. Because the server and the mobile don’t “speak” the same language, you need to find a “interpreter”, or the called API. There is no standard or plug-and-play way to create the API because in reality, different apps have different way of communication. The APIs even must be existed even before you can process to make the mobile app. Why? Because you need to define the way of communication before you can communicate.

One thing to be noticed, do not take this step lightly. The API is very important and it could contribute 50% of the entire solution. Making APIs is almost like making a full website because you need to define the business rules, the data models, the communication way between you data model, etc. For that, you need to pay for (a) backend developer(s).

Third: the designing

Many people think designing user interface for mobile app takes less time than for website because the mobile screen is smaller than computer screen. It isn’t true at all. In fact, the smaller screen you have, the more complicated and more difficult it is to design. 

“Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple.” (Steve Job). 

Fourth: the mobile app coding

Mobile development is very restrictive. You must to define almost 100% of the scope and lock in the design before the developer can start to code. Unlike making websites, developing an app under contract has extremely little leeway for changes:

Design the interface: Whether you will use all standard interface components or customized components that will have to be decided right from the start. Because the architecture of the entire application itself depends on how you want your interface be, how the users should use the app. An example is the standard Tab Bar at the bottom, if you want colors icons instead of the blueish tint, the change in code is substantial!

Tightly integrated code: With websites, you can simply add one more page, then create a link to that page when you needed. However, you can’t do that with iOS app, everything has to be set in the beginning, any changes might result in significant other changes that you might not be able to understand why. The way iOS codes are structured is like a breadboard, everything is hard-wired, you still can change a few things here and there, but if you change the wrong wire, the whole board might stop working. Even extremely well structured code does not increase the flexibility by a lot. Adding an additional email button to ‘About’ screen might only be worth a few more lines of code, but adding a Facebook Like button on the same page is a different story, don’t expect that to be done in a few hours.

Converting an iPhone app to iPhone/iPad universal app: This is the worst ‘additional feature’ found in iPhone development contracts. Because an iPad app is not a frikin’ additional feature. The iPad app is always more complex than iPhone app, and most of the time requires entirely different interface and interaction mechanism. It’s like making an electric bicycle and then convert it to a fuel-powered motorcyle! They are very similar at what they do, but under the hood, the difference is immense.

I hope after reading this, you can get a sense of what is needed for you or your company to develop a mobile app. Unless you are making an offline app (like a Calculator app!) that does not collect any data from users, you are not going to get the app made on the cheap side. After considering all the variables above, if you can’t justify contracting development, then the only other option is hiring full time developers to work in-house for the entire length of the project.