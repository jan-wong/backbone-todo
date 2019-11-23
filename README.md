# backbone-todo

#### MVC 与 backbone

MVC这样的架构模式本意是在M层和V层中间插入一层C层用来解藕M层和V层，可以达到封装隔离，各自复用的目的。

而Backbone在框架层面只拆分了M层和V层，V包含了Controller的功能。即使没有严格遵循MVC的模式，也不妨碍他取得的极大成功。

why? 原因在于这样的设计理念给开发者在设计组件时带来了极大的灵活性。明知一些View没有复用的可能，干嘛要将C从V中拆分？写在一起代码不是更简洁吗？如果存在View需要复用时，开发者干嘛不可以自己拆分？完全可进可退

#### TDDO Application

![](https://raw.githubusercontent.com/jan-wong/backbone-todo/master/src/assets/01.png)