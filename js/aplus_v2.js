/* v6.1.10,6.1.11,1 2016-04-19 11:03:03 */
!function e(t,r,o)
{
function n(i,l)
{
  if(!r[i])
  {
    if(!t[i])
    {
      var s="function"==typeof require&&require;
      if(!l&&s)return s(i,!0);
      if(a)return a(i,!0);
      throw new Error("Cannot find module '"+i+"'")
    }
    var u=r[i]=
    {
      exports:
      {
      }
    };
    t[i][0].call(u.exports,function(e)
    {
      var r=t[i][1][e];
      return n(r?r:e)
    }
    ,u,u.exports,e,t,r,o)
  }
  return r[i].exports
}
for(var a="function"==typeof require&&require,i=0;i<o.length;i++)n(o[i]);
return n
}
(
{
1:[function(e,t,r)
{
  t.exports=e("./src/grey")
}
,
{
  "./src/grey":2
}
],2:[function(e,t,r)
{
function o(e)
{
  if(e)try
  {
    var t=h.createElement("script");
    t.appendChild(h.createTextNode(e)),p.parentNode.insertBefore(t,p)
  }
  catch(r)
  {
    (g.execScript||function(e)
    {
      g.eval.call(g,e)
    }
    )(e)
  }
}
function n(e,t,r)
{
  if(/blitz/i.test(d))return void r();
  var o,n="GET",a=function()
  {
    o.responseText?t(o.responseText):r()
  };
  b?(o=new XMLHttpRequest,o.open(n,e,!0)):(o=new XDomainRequest,o.open(n,e)),o.timeout=m.timeout,o.onload=a,o.onerror=r,o.ontimeout=r,o.send()
}
function a(e,t)
{
  var r=h.createElement("script");
  r.async=!0,i(r,t),r.src=e,p.parentNode.insertBefore(r,p)
}
function i(e,t)
{
function r()
{
  e.onreadystatechange=e.onload=null,e=null,w(t)&&t(
  {
    from:"script"
  }
  )
}
if("onload"in e)e.onload=r;
else
{
  var o=function()
  {
    /loaded|complete/.test(e.readyState)&&r()
  };
  e.onreadystatechange=o,o()
}
}
function l(e,t)
{
  return e+Math.floor(Math.random()*(t-e+1))
}
function s(e,t)
{
  return l(1,t)<=e
}
function u(e,t)
{
  var r;
  for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e
}
function c(e,t)
{
return function(r)
{
  return e.call(null,u(t,r||
  {
  }
  ))
}
}
function f(e)
{
return function(t)
{
  return
  {
  }
  .toString.call(t)=="[object "+e+"]"
}
}
var g=window,h=document,d=navigator.userAgent,p=h.getElementsByTagName("script")[0],y=g.XDomainRequest,b=g.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,v=function()
{
}
,m=
{
base:1e4,timeout:1e4
}
,_=
{
_config:m
};
_.load=function(e)
{
e=u(
{
  stable:"",stableKey:"",stableHash:"",grey:"",greyKey:"",greyHash:"",base:m.base
}
,e);
var t,r,i,l,f=e.hash,g=
{
};
if(e.ratio>=e.base||s(e.ratio,e.base)?(t=e.greyKey,r=e.grey,l=e.greyHash,g.type="grey"):(t=e.stableKey,r=e.stable,l=e.stableHash,g.type="stable"),g.url=r,g.key=t,g.hash=l,w(e.before)&&e.before(g),e.after=w(e.after)?c(e.after,g):v,t&&(b||y)&&w(f))try
{
  i=localStorage.getItem(t)||"",i&&l===f(i,g)?(o(i),e.after(
  {
    from:"local"
  }
  )):n(r,function(r)
  {
    localStorage.setItem(t,r),o(r),e.after(
    {
      from:"cors"
    }
    )
  }
  ,function()
  {
    a(r,e.after)
  }
  )
}
catch(h)
{
  a(r,e.after)
}
else a(r,e.after);
return this
}
,_.config=function(e)
{
return u(m,e||
{
}
),this
};
var w=(Array.isArray||f("Array"),f("Function"));
t.exports=_
}
,
{
}
],3:[function(e,t,r)
{
"use strict";
!function()
{
var t=window,r="g_aplus_grey_launched";
if(!t[r])
{
  t[r]=1;
  var o=e("@ali/grey-publish"),n=location.protocol;
  0!=n.indexOf("http")&&(n="http:");
  var a=n+"//g.alicdn.com/alilog/s",i="aplus_v2.js",l=1e4,s="aplus_grey_ratio";
  "number"==typeof t[s]&&(l=Math.floor(1e4*t[s]));
  var u=location.search.match(new RegExp("\\b"+s+"=([\\d\\.]+)"));
  u&&(u=parseFloat(u[1]),isNaN(u)||(l=Math.floor(1e4*u))),t.goldlog=t.goldlog||
  {
  }
  ,goldlog.record||(goldlog.record=function(e,r,o,n)
  {
    (t.goldlog_queue||(t.goldlog_queue=[])).push(
    {
      action:"goldlog.record",arguments:[e,r,o,n]
    }
    )
  }
  ),o.load(
  {
    stable:[a,"6.1.10",i].join("/"),grey:[a,"6.1.11",i].join("/"),ratio:l,stableKey:"APLUSGREYs_aplus_v2",greyKey:"APLUSGREYg_aplus_v2",stableHash:"58d0e8d6",greyHash:"74e747e5",hash:e("./hash").hash,before:function(e)
    {
      goldlog.lver="grey"==e.type?"6.1.11":"6.1.10"
    }
  }
  )
}
}
()
}
,
{
"./hash":4,"@ali/grey-publish":1
}
],4:[function(e,t,r)
{
"use strict";
r.hash=function(e)
{
var t,r,o=1315423911;
for(t=e.length-1;t>=0;t--)r=e.charCodeAt(t),o^=(o<<5)+r+(o>>2);
return(2147483647&o).toString(16)
}
}
,
{
}
]
}
,
{
}
,[3]);
