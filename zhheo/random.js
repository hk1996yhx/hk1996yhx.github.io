var posts=["2024/01/30/hello-world/","2024/01/30/hello-world - 副本/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};