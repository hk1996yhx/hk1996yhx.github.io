var posts=["2024/01/30/Untitled-1/","2024/01/30/hello-world - 副本/","2024/01/30/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};