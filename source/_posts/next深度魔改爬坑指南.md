---
title: next深度魔改爬坑指南
tags:
  - next
  - hexo
categories: next
keywords: next,hexo-tag-could
copyright: true
passage_end: true
description: 这是对next主题的一次重新定义
abbrlink: 55b3a5a
date: 2018-03-09 16:12:38
---
<span style="font-size:24px">__前言__</span>
由于相对来说较为“初级”的教程很多，相对于而言，next的搭建过程也就不细说了；hexo水还是有些深。有半点初级基础相对来说会好一点，当然没有任何方面基础也可以，做多了也差不多了。
此文章是在hexo已经搭建成功基础之上，且next主题能在显示正确效果下，进行的较为详细的说明。
#### 参考链接
因为这方面的教程也实在太多了，较为大众化；也不知谁是原创什么的，不过写的还也不错，较为详细；所以我也没必要再写了，写的话估计还没他们转载、二次创作之类的写的好。
__综合：__
    [Hexo与NexT主题目录结构](https://www.zxl93.com/2017/10/10/NexT_theme_directory_structure/)
    [hexo的next主题个性化配置教程](http://shenzekun.cn/hexo的next主题个性化配置教程.html)
    [打造个性超赞博客Hexo+NexT+GithubPages的超深度优化](https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html)
    [Next主题个性化之自动更换背景图片](http://ihaoming.top/archives/d0564105.html#%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8E%9F%E7%90%86)
    [各设备图片显示问题](http://blog.csdn.net/u014175572/article/details/49148333)
__补充：__
    [网站动态标题](https://www.jixian.io/2017/07/15/%E7%BD%91%E7%AB%99%E5%8A%A8%E6%80%81%E6%A0%87%E9%A2%98%E8%AE%BE%E7%BD%AE/)
    [使用Hexo基于GitHub-Pages搭建个人博客（三）](https://ehlxr.me/2016/08/30/%E4%BD%BF%E7%94%A8Hexo%E5%9F%BA%E4%BA%8EGitHub-Pages%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%EF%BC%88%E4%B8%89%EF%BC%89/)（相册的实现）
    [添加gitalk模块](https://fjkang.github.io/2017/12/12/%E6%B7%BB%E5%8A%A0gitalk%E6%A8%A1%E5%9D%97/)
    [对Hexo-nexT进行简单SEO优化基于Google收录站点](https://loremwalker.github.io/note/2018/02-26/5e7d6b37.html)
__插件：__
* 评论
    [gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)（推荐hypercomments，支持多账号平台以及匿名登录）
* 分享
    [need-more-share](https://github.com/revir/need-more-share2)（主题已自带）
* 字数统计
[为Hexo NexT主题添加字数统计功能](https://eason-yang.com/2016/11/05/add-word-count-to-hexo-next)
* 动态词云
    [hexo-tag-cloud](https://github.com/MikeCoder/hexo-tag-cloud/blob/master/README.ZH.md)

#### 遇到过的坑
这里列举常用的，更多详情访问具体项目的issues
__gitalk:__
&emsp;报错出现 Error: Validation Failed. [#102](https://github.com/gitalk/gitalk/issues/102)
__next：__
&emsp;设置副标题后显示不出来，要怎么修改？[#986](https://github.com/iissnan/hexo-theme-next/issues/986)
&emsp;fancybox能否正常使用？ [#48](https://github.com/iissnan/hexo-theme-next/issues/48)
&emsp;多图功能 图片不能放大 [#1043](https://github.com/iissnan/hexo-theme-next/issues/1043)
&emsp;[hexo设置网站的图标Favicon](http://blog.csdn.net/ganzhilin520/article/details/79048034)
__hexo-tag-cloud：__
&emsp;标签页不能显示标签云[#15](https://github.com/MikeCoder/hexo-tag-cloud/issues/15)
__btw：__
&emsp;如果写作完成且没做任何配置的情况下，`hexo g`生成有误应该是markdown语法不对


#### 其他细节方面的问题

##### 设置Creative Commons协议
参考[wiki](https://github.com/iissnan/hexo-theme-next/wiki/%E8%AE%BE%E7%BD%AE-Creative-Commons-%E5%8D%8F%E8%AE%AE)，也可选择禁用；使用自己定制的cc协议请参考 [hexo的next主题个性化配置教程](http://shenzekun.cn/hexo的next主题个性化配置教程.html)。

##### 添加文章结尾标记
`themes/next/layout/_macro`下添加`passage-end-tag.swig`:
```
<div>
    {% if page.passage_end %}
    <style>
    .passage_end::after{
        content: "- The End -";
        text-align:center;
        color: #252525;
        display: block;
        font-size:26px;
        font-weight:bold;
        font-family: Vladimir Script;
    }
    </style>
        <div class="passage_end"></div>
    {% endif %}
</div>
```
`next/layout/_macro/post.swig`在相关支付代码之前增加如下代码：
```
<div>
  {% if not is_index %}
    {% include 'passage-end-tag.swig' %}
  {% endif %}
</div>
```
即可在front-matter中使用`passage_end: true`打开文章结尾表语

##### js文章访问密码优化
因为其他博客的文章访问密码章节的js，当用户不输入时点击`确定`或是`取消`都弹出密码错误，显得不人性化，为此进行的改进方案；在`themes->next->layout->_partials->head.swig`文件，meta标签后任意位置插入。
```JavaScript
<script>
    (function(){
        if('{{ page.password }}'){
          var str = prompt('请输入文章密码');
            if (str == null || str==''){
                history.back();
            }else if(str !== '{{ page.password }}'){
              alert('密码错误');
              history.back();
            }
        }
    })();
</script>
```

btw，增加确认弹窗，这样就可以在`front-matter`中`provision: true`激活弹窗
```JavaScript
<script>
    (function(){
        if('{{ page.provision }}'){
          var bool = confirm("请阅读一下条款："+"\n"+"以下文章涉及成人内容，"
                                 + "未满18周岁建议在家长指导下观看" );
          if(!bool){
            history.back();
          }
        }
    })();
</script>
```

##### 自定义样式喜好概览 `custom.styl`
```css
/* Custom styles.*/
.header { 
    // background: $head-bg; 用于完全显示一整块背景
    background:url(https://s1.ax2x.com/2018/03/09/CCCCS.png);
    background-size: cover;
    background-repeat: no-repeat;
}

/*菜单字体颜色*/
.menu-item a {color:#c7c7c7;}
/*菜单悬停颜色*/
.menu .menu-item a:hover {
  background: #36363c;
}

/*移动设备菜单显示扩展*/
.site-nav-on {
    display: none;
    margin: 0 -10px;
    padding: 0 10px;
    clear: both;
    border-top-style: none;
    // border-top: 1px solid #ddd;
}


body {
    /*随机换图*/
    /* background:url(https://source.unsplash.com/random/1600x900);*/
    background:url(https://s1.ax2x.com/2018/03/10/CxjuO.png);
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size: cover;
    background-position: 50% 50%;
}

/*文章内容*/
.main-inner { 
    margin-top: 60px;
    padding: 60px 60px 60px 60px;
    background: #E6E6E6;
	opacity: 0.9;
    min-height: 500px;
}

/*阅读全文按钮部分*/
.post-button a:hover {
    border-bottom-color:#a96363;
}
/*阅读全文按钮悬停部分*/
.btn:hover {
    border-color: #222;
    color: #222;
    background: none;
}
/*文字以及下划线部分*/
.post-button a {
    padding: 0;
    font-size: 16px;
    background: none;
    border: none;
    border-bottom: 2px solid #666;
    transition-property: border;
}


/*标签悬停颜色*/
.posts-expand .post-tags a:hover {
    background: orange;
}
/*标签背景色*/
.posts-expand .post-tags a {
    padding: 1px 5px;
    background: #d6af66;
    color: #ea1616;
    font-size: 13px;
    border-bottom: none;
    display: inline-block;
    margin-right: 10px;
}

/*页脚*/
.footer {
  font-size: 14px;
  color: $grey-dark;
  background: #2E2E2E;
  img { border: none; }
}

/*侧边信息栏*/
/* .sidebar-toggle {}*/
/*侧边回滚顶部栏*/
/* .back-to-top {}*/

/*时间侧边栏格式*/
#days {
    display: block;
    color: #8989A3;
    font-size: 13px;
    margin-top: 15px;
}

```

##### 开发者工具真的很重要
可以先使用开发者模式进行预览；在不更改站点、主题配置文件时，可在`hexo s`环境下调试并保存代码。
<hr>