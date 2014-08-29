angular.module("templates-app",["page/_wrapper.tpl.html","page/about.tpl.html","page/blog.tpl.html","page/contact.tpl.html","page/home.tpl.html","page/tag.tpl.html","page/work.tpl.html","post/post.tpl.html"]),angular.module("page/_wrapper.tpl.html",[]).run(["$templateCache",function(a){a.put("page/_wrapper.tpl.html",'<a ui-sref="page.home" class="logo-readium"><span class="logo"></span></a><div class="teaserimage"><div class="teaserimage-image" id="pageTeaserBgImage" ng-class="$$state.current.data.class"></div></div><header class="blog-header"><a class="blog-logo" ui-sref="page.home">Quang Pham</a><h1 class="blog-title">Quang Pham</h1><h2 class="blog-description">A fullstack developer based in Helsinki</h2><div class="custom-links"><a ui-sref="page.home" ng-class="{active: $$state.includes(\'page.home\')}">Home</a>&nbsp;&nbsp;·&nbsp;&nbsp; <a ui-sref="page.work" ng-class="{active: $$state.includes(\'page.work\')}">Work</a>&nbsp;&nbsp;·&nbsp;&nbsp; <a ui-sref="page.blog" ng-class="{active: $$state.includes(\'page.blog\')}">Blog</a>&nbsp;&nbsp;·&nbsp;&nbsp; <a ui-sref="page.about" ng-class="{active: $$state.includes(\'page.about\')}">About</a>&nbsp;&nbsp;·&nbsp;&nbsp; <a ui-sref="page.contact" ng-class="{active: $$state.includes(\'page.contact\')}">Contact</a></div></header><main class="content" role="main" ui-view></main><footer class="site-footer"><div class="inner"><section class="copyright">All content copyright <a ui-sref="page.home">Quang Pham</a> &copy; 2014 &bull; All rights reserved.</section></div></footer>')}]),angular.module("page/about.tpl.html",[]).run(["$templateCache",function(a){a.put("page/about.tpl.html",'<div class="container featured"><article class="post tag-ebook tag-amazon tag-bevor-es-zu-spat-ist tag-ebook-2 tag-self-publishing featured" role="article"><div class="article-item"><section class="post-excerpt"><p style="text-align:center">I have been coding for more than 10 years, working from various programming languages. I have a strong passion in creating apps/website "fullstackly", which covers all stages of software development.</p></section></div></article><article class="post tag-ebook tag-amazon tag-bevor-es-zu-spat-ist tag-ebook-2 tag-self-publishing featured" role="article"><div class="article-item"><header class="post-header"><h2 class="post-title"><a href="#">Experience</a></h2></header><section class="post-excerpt"><p>I’m most interested in Ruby on Rails and iOS as my current development stack. In addition, I\'ve gained lot of cool technologies and experiences when I worked for <a href="http://activearkjwt.com/">Activeark JWT</a> (2010-2012), <a href="http://www.introdex.com/">Introdex</a> (2012-2013) and <a href="http://sayduck.com">Sayduck</a> (2013-2014)</p><p><b>Web development</b><ul><li>Frontend: HTML(5), CSS(3), JavaScript, AngularJS, Jquery</li><li>Backend: Ruby on Rails, NodeJS, Drupal, Wordpress</li></ul></p><p><b>Mobile development</b><br>iOS, Phonegap, Unity3D, Qt</p><p><b>Languages</b><br>Objective-C, C#, Ruby, PHP</p><p><b>Database</b><br>Mysql, Postgresql, Mongodb</p><p><b>Other</b><br>Augmented Reality (Vuforia), SOLR, Hadoop</p></section></div></article><article class="post tag-ebook tag-amazon tag-bevor-es-zu-spat-ist tag-ebook-2 tag-self-publishing featured" role="article"><div class="article-item"><header class="post-header"><h2 class="post-title"><a href="#">Awards</a></h2></header><section class="post-excerpt"><ul><li>http://blog.qt.digia.com/blog/2011/06/27/qt-apps-org-mobile-app-porting-contest-the-winners/</li><li>http://blog.qt.digia.com/blog/2011/01/31/qtapps-org-early-bird-winners/</li><li>http://wiki.meego.com/Community_Office/Community_device_program/Nokia</li></ul></section></div></article></div>')}]),angular.module("page/blog.tpl.html",[]).run(["$templateCache",function(a){a.put("page/blog.tpl.html",'<h5 class="index-headline featured"><span>Featured</span></h5><div class="container featured"><article class="post featured" ng-repeat="post in posts"><div class="article-item"><header class="post-header"><h2 class="post-title"><a ui-sref="post({postId: post.id, postSlug:post.slug})">{{post.title}}</a></h2></header><section class="post-excerpt">{{post.body}} ...</section><div class="post-meta"><time>{{post.time}}</time> <span class="post-tags-set" ng-if="post.tags.length > 0">on <span ng-repeat="tag in post.tags"><a ui-sref="page.tag({tagName: tag})">{{tag}}</a>&nbsp;</span></span></div></div></article></div><nav class="pagination" role="navigation"><span class="page-number">Page 1 of 6</span>&nbsp;&nbsp;·&nbsp;&nbsp;<a class="older-posts" href="#">Older</a></nav>')}]),angular.module("page/contact.tpl.html",[]).run(["$templateCache",function(a){a.put("page/contact.tpl.html",'<div class="container featured"><article class="post tag-ebook tag-amazon tag-bevor-es-zu-spat-ist tag-ebook-2 tag-self-publishing featured" role="article"><div class="article-item"><section class="post-excerpt"><p style="text-align:center">To get in touch you can send me an <a href="mailto:me@quangpham.com">email</a> or follow me on <a href="https://twitter.com/phamaa">twitter</a>, <a href="https://www.facebook.com/phamxq">facebook</a>, <a href="http://fi.linkedin.com/pub/pham-quang/50/316/72">linkedin</a> and <a href="http://github.com/quangpham">github</a>.</p></section></div></article></div>')}]),angular.module("page/home.tpl.html",[]).run(["$templateCache",function(a){a.put("page/home.tpl.html",'<div class="container featured"><article class="post tag-ebook tag-amazon tag-bevor-es-zu-spat-ist tag-ebook-2 tag-self-publishing featured" role="article"><div class="article-item"><section class="post-excerpt"><p style="text-align:center">I\'m Pham, a Web and Mobile application developer in Helsinki, Finland.</p></section></div></article><article class="post tag-ebook tag-amazon tag-bevor-es-zu-spat-ist tag-ebook-2 tag-self-publishing featured" role="article"><div class="article-item"><header class="post-header"><h2 class="post-title">Recent blog posts</h2></header><section class="post-excerpt"><p ng-repeat="post in posts"><span ui-sref="post({postId: post.id, postSlug:post.slug})"><b>{{post.title}}</b> ({{post.date}}) <span><br>{{post.body}} ...</span></span></p></section></div></article></div>')}]),angular.module("page/tag.tpl.html",[]).run(["$templateCache",function(a){a.put("page/tag.tpl.html",'<h5 class="index-headline featured"><span>Featured</span></h5><div class="container featured"><article class="post featured" ng-repeat="post in posts"><div class="article-item"><header class="post-header"><h2 class="post-title"><a ui-sref="post({postId: post.id})">{{post.title}}</a></h2></header><section class="post-excerpt" ng-bind-html="$$trustAsHtml(post.content)"></section><div class="post-meta"><time>{{post.created_at}}</time> <span class="post-tags-set" ng-if="post.tags.length > 0">on <span ng-repeat="tag in post.tags"><a>{{tag}}</a>&nbsp;</span></span></div></div></article></div><nav class="pagination" role="navigation"><span class="page-number">Page 1 of 6</span>&nbsp;&nbsp;·&nbsp;&nbsp;<a class="older-posts" href="#">Older</a></nav>')}]),angular.module("page/work.tpl.html",[]).run(["$templateCache",function(a){a.put("page/work.tpl.html","work")}]),angular.module("post/post.tpl.html",[]).run(["$templateCache",function(a){a.put("post/post.tpl.html",'<a ui-sref="page.home" class="logo-readium"><span class="logo"></span></a><main class="content" role="main"><article class="post tag-sprachkritik tag-texte tag-articleimage tag-satire featured"><div class="article-image"><div class="post-image-image" id="postBgImage"></div><div class="post-meta"><h1 class="post-title">{{post.title}}</h1><div class="cf post-meta-text"><div class="author-image" style="background-image: url(/assets/images/face.jpg)"></div><h4 class="author-name"><a>Quang Pham</a></h4>&nbsp; on <time>{{post.time}}</time> <span ng-if="post.tags.length > 0">, tagged on <span ng-repeat="tag in post.tags"><a ui-sref="page.tag({tagName: tag})">{{tag}}</a>&nbsp;</span></span></div><center><a href="#topofpage" class="topofpage"><i class="fa fa-angle-down"></i></a></center></div></div><section class="post-content"><a name="topofpage"></a><p><em>{{post.title}}</em></p><div ng-bind-html="$$trustAsHtml(post.body)"></div></section></article></main>')}]),this.app=angular.module("angularapp",["templates-app","ngSanitize","ui.router","qp-common","qp-tumblr"]),app.run(["$rootScope","$stateParams","$state","$sce",function(a,b,c,d){return a.$$stateParams=b,a.$$state=c,a.$$trustAsHtml=function(a){return d.trustAsHtml(a)}}]),app.service("QPCoverImageService",["$http","$q",function(){var a,b;return a={},b=jQuery(window),a.setupPostBgImage=function(){var a,c;return c=jQuery("#postBgImage"),jQuery(".post-content").each(function(){var a,b,d;return d=jQuery(this),a=d.find("img:first"),b=a.attr("src"),b||(b="https://d3levm2kxut31z.cloudfront.net/assets/locations/Palo_Alto-e19be6fed5dc4bce0f3ded7521e81366.jpg"),c.css("background-image","url("+b+")"),a.remove()}),b.on("scroll",function(){var a;return a=b.scrollTop(),0>a||a>1500?void 0:(c.css("transform","translate3d(0px, "+a/3+"px, 0px)"),c.css("opacity",1-Math.max(a/700,0)))}),b.trigger("scroll"),a=jQuery(".article-image").height(),jQuery(".post-content").css("padding-top",a+"px")},a.setupPageTeaserBgImage=function(){var a;return a=jQuery("#pageTeaserBgImage"),b.on("scroll",function(){var c;return c=b.scrollTop(),0>c||c>1500?void 0:(a.css("transform","translate3d(0px, "+c/3+"px, 0px)"),a.css("opacity",1-Math.max(c/700,0)))}),b.trigger("scroll")},a}]),app.service("QPTumblrPost",["$http","$q","$QPTumblrResource",function(a,b,c){var d;return d=c("fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4","phamquang")}]),app.controller("QP_App_Ctr",["$scope","$stateParams","QPNotificationServices",function(a,b,c){var d,e,f;return a.meta_title="Quang Pham",f=function(){return jQuery("body").scrollTop(0)},e=function(){return c.sub("NOTIFICATION_META_TITLE_CHANGED",a,function(b){return b.meta_title&&(a.meta_title=b.meta_title),"page"===b.type?f():void 0})},(d=function(){return e()})()}]),app.controller("QP_PageAbout_Ctrl",["$scope","$stateParams","QPNotificationServices",function(a,b,c){var d;return(d=function(){return c.pub("NOTIFICATION_META_TITLE_CHANGED",{meta_title:"Quang Pham / About",type:"page"})})()}]),app.controller("QP_PageBlog_Ctrl",["$scope","$stateParams","QPNotificationServices","QPTumblrPost",function(a,b,c,d){var e;return d.post.all().then(function(b){return a.posts=b}),(e=function(){return c.pub("NOTIFICATION_META_TITLE_CHANGED",{meta_title:"Quang Pham / Blog",type:"page"})})()}]),app.controller("QP_PageContact_Ctrl",["$scope","$stateParams","QPNotificationServices",function(a,b,c){var d;return(d=function(){return c.pub("NOTIFICATION_META_TITLE_CHANGED",{meta_title:"Quang Pham / Contact",type:"page"})})()}]),app.controller("QP_PageHome_Ctrl",["$scope","$stateParams","QPNotificationServices","QPTumblrPost",function(a,b,c,d){var e;return d.post.all().then(function(b){return a.posts=b}),(e=function(){return c.pub("NOTIFICATION_META_TITLE_CHANGED",{meta_title:"Quang Pham / Home",type:"page"})})()}]),app.controller("QP_PageTag_Ctrl",["$scope","$stateParams","QPNotificationServices",function(a,b,c){var d;return(d=function(){return c.pub("NOTIFICATION_META_TITLE_CHANGED",{meta_title:"Quang Pham / Tag",type:"page"})})()}]),app.controller("QP_PageWork_Ctrl",["$scope","$stateParams","QPNotificationServices",function(a,b,c){var d;return(d=function(){return c.pub("NOTIFICATION_META_TITLE_CHANGED",{meta_title:"Quang Pham / Work",type:"page"})})()}]),app.controller("QP_PageWrapper_Ctrl",["$scope","$stateParams","$state","QPCoverImageService",function(a,b,c,d){var e;return(e=function(){return d.setupPageTeaserBgImage()})()}]),app.controller("QP_Post_Ctrl",["$scope","$stateParams","QPNotificationServices","$sce","$timeout","QPCoverImageService","QPTumblrPost",function(a,b,c,d,e,f,g){var h,i;return h=function(){return g.post.getById(b.postId).then(function(b){return a.post=b,console.log(a.post),e(function(){return f.setupPostBgImage()},100)})},(i=function(){return h()})()}]),app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b){return b.otherwise("/page/home"),a.state("page",{url:"/page","abstract":!0,controller:"QP_PageWrapper_Ctrl",templateUrl:"page/_wrapper.tpl.html"}),a.state("page.home",{url:"/home",controller:"QP_PageHome_Ctrl",templateUrl:"page/home.tpl.html",data:{"class":"page-home"}}),a.state("page.about",{url:"/about",controller:"QP_PageAbout_Ctrl",templateUrl:"page/about.tpl.html",data:{"class":"page-about"}}),a.state("page.work",{url:"/work",controller:"QP_PageWork_Ctrl",templateUrl:"page/work.tpl.html",data:{"class":"page-work"}}),a.state("page.blog",{url:"/blog",controller:"QP_PageBlog_Ctrl",templateUrl:"page/blog.tpl.html",data:{"class":"page-blog"}}),a.state("page.contact",{url:"/contact",controller:"QP_PageContact_Ctrl",templateUrl:"page/contact.tpl.html",data:{"class":"page-contact"}}),a.state("page.tag",{url:"/tag/:tagName",controller:"QP_PageTag_Ctrl",templateUrl:"page/tag.tpl.html",data:{"class":"page-blog"}}),a.state("post",{url:"/post/:postId/:postSlug",controller:"QP_Post_Ctrl",templateUrl:"post/post.tpl.html"})}]);