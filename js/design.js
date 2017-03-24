!function(e){

function t(o)
{
  if(n[o])return n[o].exports;
  var a=n[o]=
  {
    exports:
    {
    }
    ,id:o,loaded:!1
  };
  return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports
}

var n=
{
};
return t.m=e,t.c=n,t.p="",t(0)
}
([function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
var a=n(1),r=o(a),i=n(2),l=o(i),s=n(3),c=o(s);
if(r["default"].OK)c["default"].render(c["default"].createElement(l["default"],
{
  query:location.search
}
),document.getElementById("body"));
else
{
  var u=[
  {
    name:"Chrome",icon:"https://img.alicdn.com/tps/TB1ZljFIFXXXXbcXpXXXXXXXXXX.png",home:"https://www.google.com/chrome/"
  }
  ,
  {
    name:"Safari",icon:"https://img.alicdn.com/tps/TB1uZLpIFXXXXXwaXXXXXXXXXXX.png",home:"https://www.apple.com/cn/safari/"
  }
  ,
  {
    name:"Firefox",icon:"https://img.alicdn.com/tps/TB1h7rwIFXXXXcmXFXXXXXXXXXX.png",home:"https://www.mozilla.org/zh-CN/firefox/new/"
  }
  ,
  {
    name:"Internet Explorer 11",icon:"https://img.alicdn.com/tps/TB1RfnFIFXXXXbKXpXXXXXXXXXX.png",home:"http://windows.microsoft.com/zh-cn/internet-explorer/ie-11-worldwide-languages"
  }
  ];
  c["default"].render(c["default"].createElement("div",
  {
    className:"browsers-guide"
  }
  ,c["default"].createElement("p",
  {
    className:"headline"
  }
  ,"很抱歉您目前使用的浏览器无法完整支持审批设计器，"),c["default"].createElement("p",
  {
    className:"headline"
  }
  ,"为了保证您的使用效果，请下载并安装以下任一最新版本的浏览器。"),c["default"].createElement("div",
  {
    className:"dock"
  }
,u.map(function(e)
{
  return c["default"].createElement("a",
  {
    className:"browser",href:e.home
  }
  ,c["default"].createElement("img",
  {
    src:e.icon
  }
  ),c["default"].createElement("span",null,e.name))
}
))),document.body)
}
}
,function(e,t)
{
"use strict";
var n=window.document,o=[function()
{
return void 0===n.documentMode||n.documentMode>10
}
,function()
{
return"JSON"in window&&"onhashchange"in window&&!!window.postMessage&&window.history&&history.pushState&&("MutationObserver"in window||"WebKitMutationObserver"in window||"MozMutationObserver"in window||"oMutationObserver"in window||"msMutationObserver"in window)
}
,function()
{
var e=n.createElement("div"),t=e.style;
return e.setAttribute("data-a-b","c"),t.cssText="pointer-events:auto;",e.dataset&&"c"===e.dataset.aB&&"classList"in e&&"auto"===t.pointerEvents&&("boxSizing"in t||"webkitBoxSizing"in t||"MozBoxSizing"in t||"msBoxSizing"in t)&&("transform"in t||"webkitTransform"in t||"MozTransform"in t||"msTransform"in t)&&e.getBoundingClientRect&&"nextElementSibling"in e&&"contentEditable"in e
}
,function()
{
var e=[],t="",n=function()
{
};
return Object.keys&&Array.isArray&&e.forEach&&e.map&&e.filter&&e.indexOf&&e.lastIndexOf&&e.some&&t.trim&&n.bind
}
,function()
{
try
{
  return localStorage.setItem("detect","a"),localStorage.removeItem("detect"),!0
}
catch(e)
{
  return!1
}
}
],a=0;
try
{
a="every"in o&&o.every(function(e)
{
  return e()
}
)
}
catch(r)
{
}
t.OK=a
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(3),c=o(s),u=n(4),p=o(u),f=n(16),d=o(f),m=n(32),h=o(m),v=n(33),g=o(v),X=function(e)
{
function t(e)   //
{
  var n=this;
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.form=new p["default"](this.props.query);
  var o=this.form.getContainer();
  this.state=     //判断是否有组件
  {
    ready:this.form.isReady&&o.getItems().length>0,published:this.form.isPublished(),isAlimail:"alimail"==window.__group__
  }
  ,o.on("itemschange",function()
  {
    n.setState(
    {
      ready:n.form.isReady&&o.getItems().length>0
    }
    )
  }
  ),this.form.once("ready",function()
  {
    n.setState(
    {
      ready:n.form.isReady&&o.getItems().length>0
    }
    )
  }
  ),this.form.on("paramschange",function()
  {
    n.setState(
    {
      published:n.form.isPublished()
    }
    )
  }
  )
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return c["default"].createElement("div",
    {
      className:"wf-wrapper"     //初始化开始加载页面
    }
    ,c["default"].createElement("div",
    {
      className:"wf-header"     //页面头部，包括预览，保存
    }
    ,c["default"].createElement("div",
    {
      className:"head-title"   //左侧标题
    }
    ,this.state.isAlimail?c["default"].createElement("a",
    {
      href:"formManager",target:"_self"   //加载链接，返回formManager审批流程页面
    }
    ,c["default"].createElement("img",    //logo图片（写死的） 大图片
    {
      className:"navbar-single-logo",src:"//img.alicdn.com/tps/TB1TCo4LVXXXXb3aXXXXXXXXXXX-32-32.png",alt:"返回审批管理","data-reactid":".0.0.0.0.0"
    }
    ),c["default"].createElement("span",   //头部文字
    {
      className:"head-title-font"
    }
    ,"审批管理后台")):c["default"].createElement("a",
    {
      href:"formManager",target:"_self"
    }
    ,c["default"].createElement("img",  //logo 小图片
    {
      className:"navbar-logo",src:"//gtms01.alicdn.com/tps/i1/TB17dLlLXXXXXXAXVXX4e0PNFXX-336-78.png",alt:"返回审批管理"
    }
    )),c["default"].createElement("span",  //设计器文字
    {
      className:"navbar-head"
    }
    ,"设计器")),c["default"].createElement("div",   //保存 预览加载
    {
      className:"head-actions"+(this.state.ready?"":" disabled")   //默认禁止点击保存
    }
    ,this.state.isAlimail?null:c["default"].createElement("button",
    {
      className:"wf-button wf-button-green",onClick:function()
      {
        return e.form.preview()   //调用预览方法
      }
    }
    ,"预览"),this.state.published?null:c["default"].createElement("button",   //创建保存按钮
    {
      className:"wf-button wf-button-cyan",onClick:function()
      {
        return e.form.save()  //调用保存方法
      }
    }
    ,"保存"),c["default"].createElement("button",  //创建保存并启用
    {
      className:"wf-button wf-button-blue",onClick:function()
      {
        return e.form.save(1)  //调用保存并启用方法
      }
    }
    ,"保存并启用"))),c["default"].createElement("div",
    {
      className:"wf-main"    //创建主要内容区域
    }
    ,c["default"].createElement(d["default"],
    {
      form:this.form
    }
    ),c["default"].createElement(h["default"],
    {
      form:this.form
    }
    ),c["default"].createElement(g["default"],
    {
      form:this.form
    
    }
      
    )))
  }
}
]),t
}
(c["default"].Component);
t["default"]=X,e.exports=t["default"]
}
,function(e,t)
{
e.exports=React
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  if(e&&e.__esModule)return e;
  var t=
  {
  };
  if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);
  return t["default"]=e,t
}
function a(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function r(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function i(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,c=n(3),u=a(c),p=n(5),f=a(p),d=n(6),m=n(8),h=a(m),v=n(9),g=o(v),X=n(10),y=a(X),b=n(13),w=a(b),k=n(12),E=a(k),O=n(14),N=n(15),C=a(N),_=function(e)
{
function t(e)
{
  var n=this;
  return r(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.props=
  {
  }
  ,this.params=d.getParams(e)||
  {
  }
,this.container=new C["default"]([],this),this.activeComponent=null,this.hoverComponent=null,this.params.formUuid?(y["default"].loading("数据加载中"),w["default"].getData(this.params.formUuid).done(function(e)
{
  var t=
  {
  }
  ,o=void 0,a=void 0;
  try
  {
    t=f["default"].parseJSON(e.data.content)||
    {
    }
    ,o=e.data.condition[0],a=e.data.ruleType,e.data.isAttendanceCorp&&(window.isAttendanceCorp=e.data.isAttendanceCorp)
  }
  catch(r)
  {
  }
["title","icon","description"].forEach(function(e)
{
  n.props[e]=t[e]||""
}
),n.params.isCopyPublic&&(n.props.title="",n.props.description=""),n.conditionSetting=o,n.ruleType=a,n.emit("propschange"),t&&t.items&&n.container.setItems(t.items),n.savedFormSchemaData=JSON.stringify(n.toJSON()),n.isReady=!0,n.emit("ready"),y["default"].clear()
}
).fail(function()
{
  y["default"].error("加载数据失败")
}
),this.on("conditionlimit",function()
{
  y["default"].error("该组件已被设为审批条件，不可移出/进明细组件")
}
),void f["default"](window).on("beforeunload",function()
{
  return n.isModified()?"您做的改变，不保存而离开吗？":void 0
}
)):void y["default"].error("缺少参数")
}
return i(t,e),l(t,[
{
key:"isPublished",value:function()
{
  return"PUBLISHED"===this.params.processStatus
}
}
,
{
key:"getId",value:function()
{
  return this.params.formUuid
}
}
,
{
key:"isConditionField",value:function(e)
{
  var t=this.conditionSetting&&this.conditionSetting.id===e;
  return t?"dingtalk_multi_actioner"===this.ruleType?1:2:!1
}
}
,
{
key:"getContainer",value:function()
{
  return this.container
}
}
,
{
key:"getProp",value:function(e)
{
  return this.props[e]
}
}
,
{
key:"setProp",value:function(e,t)
{
  this.props[e]=t,this.emit("propschange"),this.check()
}
}
,
{
key:"getProps",value:function()
{
  return this.props
}
}
,
{
key:"setProps",value:function(e)
{
  this.props=f["default"].extend(
  {
  }
  ,e),this.emit("propschange"),this.check()
}
}
,
{
key:"getItems",value:function()
{
  return this.container?this.container.getItems():[]
}
}
,
{
key:"getDragService",value:function()
{
  if(!this.dragservice)
  {
    var e=new g.Droparea(this.container);
    this.dragservice=new g.DragService(e)
  }
  return this.dragservice
}
}
,
{
key:"getBoundaryNode",value:function()
{
  return this.boundary?u["default"].findDOMNode(this.boundary):null
}
}
,
{
key:"setBoundary",value:function(e)
{
  this.boundary=e
}
}
,
{
key:"active",value:function(e,t)
{
  (e!==this.activeComponent||t)&&(this.activeComponent&&(this.activeComponent.emit("activestatus",!1),this.activeComponent=null),e instanceof O.Component&&(e.emit("activestatus",!0),this.activeComponent=e,e.scrollIntoView()),this.emit("activechange",this.activeComponent))
}
}
,
{
key:"isActive",value:function(e)
{
  return this.activeComponent===e
}
}
,
{
key:"isHover",value:function(e)
{
  return this.hoverComponent===e
}
}
,
{
key:"hover",value:function(e)
{
  e!==this.hoverComponent&&(this.hoverComponent&&(this.hoverComponent.emit("hoverstatus",!1),this.hoverComponent=null),e&&(e.emit("hoverstatus",!0),this.hoverComponent=e))
}
}
,
{
key:"isModified",value:function()
{
  return this.isReady&&this.savedFormSchemaData!==JSON.stringify(this.toJSON())
}
}
,
{
key:"toJSON",value:function()
{
  var e=f["default"].extend(
  {
  }
  ,this.props);
  return e.icon||(e.icon="common"),e.items=this.container.toJSON(),e
}
}
,
{
key:"check",value:function()
{
  var e=
  {
  };
  this.isValid=!0,!this.props.title||this.props.title.length<1?(e.title="empty",this.isValid=!1):d.wordcount(this.props.title)>E["default"].TITLE_WORD_LIMIT&&(e.title="toolong",this.isValid=!1),d.wordcount(this.props.description)>E["default"].DESC_WORD_LIMIT&&(e.description="toolong",this.isValid=!1),this.validstatus=e,this.emit("validstatus",e)
}
}
,
{
key:"getValidStatus",value:function()
{
  return this.validstatus||
  {
  }
}
}
,
{
key:"valid",value:function()
{
  return this.check(),this.isValid
}
}
,
{
key:"save",value:function(e)
{
  var t=this,n=window.location.href.indexOf("procType=outer")>-1;
  if(!this.isReady)return void y["default"].error("审批数据未载入完成，不能保存");
  if(this.container.getItems().length<1)return void y["default"].error("空审批不允许保存",3e3);
  var o=this.container.valid();
  if(o)return this.active(o.component,1),void y["default"].error(o.msg,3e3);
  var a=this.toJSON();
  if(!this.valid())return y["default"].save(this,e);
  y["default"].loading("正在保存");
  var r=JSON.stringify(a),i=
  {
    uuid:this.params.formUuid,content:r,name:a.title,iconUrl:a.icon,memo:a.description||""
  };
w["default"].getCondition(this.params.formUuid).then(function(n)
{
  var o=null;
  try
  {
    o=n.data.condition[0]
  }
  catch(a)
  {
  }
  if(o)
  {
    t.conditionSetting=o;
var r=t.container.getItems(),l=r.find?r.find(function(e)
{
  return e.isForCondition()
}
):r.filter(function(e)
{
  return e.isForCondition()
}
)[0];
if(l)
{
  var s=l.getComponentName();
("DDSelectField"===s||"NumberField"===s||"MoneyField"===s)&&(l.getProp("required")?"DDSelectField"===s&&(o.value=(l.getProp("options")||[]).filter(function(e)
{
  return""!==e.trim()
}
)):o=null)
}
else o=null
}
var c=
{
isCopyPublic:t.params.formUuid&&"true"===t.params.isCopyPublic?"true":"false",formVo:JSON.stringify(i),processCode:t.params.processCode,isPublishProcess:e?"true":"false"
};
return c.condition=o?JSON.stringify([o]):"",w["default"].save(c)
}
).done(function(o)
{
  if(!o.success||!o.data)return void y["default"].error(o.errorMessage||"保存失败");
  t.savedFormSchemaData=r,y["default"].saveFormSuccessConfirm("保存成功"+(e?"，该表单已启用！":"！"));
  var a=o.data;
  if(a.url)
  {
    var i=d.getParams(a.url);
if(!("formUuid"in i&&"processCode"in i))return void setTimeout(function()
{
  location.href=n?a.url+"&procType=outer":a.url
}
,1e3);
a=i
}
delete a.url,JSON.stringify(a)!==JSON.stringify(t.params)?(a=f["default"].param(t.params),history.pushState?history.pushState(null,null,"?"+a):location.href="??"+a):t.params=a,t.isPublished()&&t.container.setPublished(),t.emit("paramschange")
}
).fail(function()
{
  y["default"].error("保存失败")
}
)
}
}
,
{
key:"preview",value:function()
{
var e=
{
  content:JSON.stringify(this.toJSON())
};
y["default"].preview(w["default"].preview(e),this)
}
}
]),t
}
(h["default"]);
t["default"]=_,e.exports=t["default"]
}
,function(e,t)
{
e.exports=jQuery
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e)
{
  return e?Math.ceil(e.replace(/[\u1000-\uffff]/g,"aa").length/2):0
}
function r(e)
{
  return e?"（$）".replace("$",e):""
}
function i(e,t)
{
  if(!e)return"";
  var n=e.length;
  if(t>=n)return e;
  for(var o=e.substr(0,t).replace(/[\u1000-\uffff]/g,"").length;n>t&&o>0;)
  {
    var a=e.charCodeAt(t);
    if(o-=a>255?2:1,0>o)break;
    t++
  }
  return e.substr(0,t)
}
function l(e)
{
  var t=new u["default"](e),n=
  {
  };
return t.queryPairs.forEach(function(e)
{
  var t=e[0],o=e[1];
  t in n?(Array.isArray(n[t])||(n[t]=[n[t]]),n[t].push(o)):n[t]=o
}
),n
}
function s()
{
  var e=l(window.location.href);
  return e&&e.procType&&e.procType.length>0&&"outer"===e.procType?!0:!1
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
),t.wordcount=a,t.wrapBracket=r,t.wordcut=i,t.getParams=l,t.isExternal=s;
var c=n(7),u=o(c)
}
,function(e,t)
{
e.exports=Uri
}
,function(e,t)
{
"use strict";
function n(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var o=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),a=function()
{
function e()
{
  n(this,e)
}
return o(e,[
{
  key:"on",value:function(e,t)
  {
    return e=e.toLowerCase(),this._events||(this._events=
    {
    }
    ),this._events[e]||(this._events[e]=[]),this._events[e].push(t),this
  }
}
,
{
  key:"once",value:function(e,t)
  {
function n()
{
  o.off(e,n),t.apply(this,arguments)
}
e=e.toLowerCase();
var o=this;
return n.listener=t,this.on(e,n),this
}
}
,
{
key:"off",value:function(e,t)
{
e=e.toLowerCase();
var n=void 0;
if(!this._events||!(n=this._events[e]))return this;
for(var o=n.length;o-->0;)if(n[o]===t||n[o].listener===t)
{
  n.splice(o,1);
  break
}
return 0===n.length&&delete this._events[e],this
}
}
,
{
key:"removeAllListeners",value:function(e)
{
return e?delete this._events[e.toLowerCase()]:this._events=[],this
}
}
,
{
key:"emit",value:function(e)
{
for(var t=this,n=arguments.length,o=Array(n>1?n-1:0),a=1;n>a;a++)o[a-1]=arguments[a];
e=e.toLowerCase();
var r=void 0;
return this._events&&(r=this._events[e])?(r=r.slice(0),r.forEach(function(e)
{
  return e.apply(t,o)
}
),this):this
}
}
]),e
}
();
t["default"]=a,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
function r(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function i(e,t)
{
  return Math.pow(e.clientY-t.clientY,2)>X
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(5),c=o(s),u=n(8),p=o(u),f=!!document.releaseCapture,d=function()
{
for(var e=document.createElement("div").style,t=["transform","WebkitTransform","msTransform"],n=0,o=t.length;o>n;n++)if(t[n]in e)return t[n];
return!1
}
(),m=void 0,h=function()
{
function e()
{
  r(this,e),this.doe=c["default"](document.documentElement),this.state=[]
}
return l(e,[
{
  key:"addState",value:function(e)
  {
    -1===this.state.indexOf(e)&&(this.state.push(e),this.doe.addClass("wf-cursor-"+e))
  }
}
,
{
  key:"removeState",value:function(e)
  {
    var t=this.state.indexOf(e);
    t>-1&&(this.state.splice(t,1),this.doe.removeClass("wf-cursor-"+e))
  }
}
,
{
  key:"clearState",value:function()
  {
var e=this.state.map(function(e)
{
  return"wf-cursor-"+e
}
).join(" ");
e&&this.doe.removeClass(e),this.state=[]
}
}
,
{
key:"enable",value:function()
{
this.removeState("disable")
}
}
,
{
key:"disable",value:function()
{
this.addState("disable")
}
}
,
{
key:"capture",value:function()
{
this.addState("move"),f&&(this.body=document.body,this.body.setCapture(!0))
}
}
,
{
key:"release",value:function()
{
this.clearState(),this.body&&this.body.releaseCapture(),this.body=null
}
}
],[
{
key:"getInstance",value:function()
{
return m||(m=new e),m
}
}
]),e
}
(),v=void 0,g=function()
{
function e()
{
  r(this,e),this.proxy=c["default"]('<div class="wf-dragging-proxy"><div class="proxy-icon"></div><span class="proxy-name"></span></div>').appendTo(document.body),this.proxyIcon=this.proxy.find(".proxy-icon"),this.proxyName=this.proxy.find(".proxy-name")
}
return l(e,[
{
  key:"point",value:function(e,t)
  {
    if(!e)return void this.proxy.hide();
    var n=e.getIcon();
    this.proxyIcon.html(n&&!/^[\w\-]+$/.test(n)?'<img src="'+n+'" />':'<i class="widgeticon '+(n||"")+'"></i>'),this.proxyName.text(e.getName()),this.proxy.css(
    {
      top:t.clientY,left:t.clientX
    }
    ).show(),this.startEvent=t
  }
}
,
{
  key:"move",value:function(e)
  {
    var t=e.clientX-this.startEvent.clientX,n=e.clientY-this.startEvent.clientY;
    d?this.proxy.css(d,"translate3d("+t+"px, "+n+"px, 0)"):this.proxy.css(
    {
      top:e.clientY,left:e.clientX
    }
    )
  }
}
,
{
  key:"hide",value:function()
  {
    this.proxy.hide()
  }
}
],[
{
  key:"getInstance",value:function()
  {
    return v||(v=new e),v
  }
}
]),e
}
(),X=2,y=function()
{
function e(t)
{
  r(this,e),this.droparea=t,this.proxy=g.getInstance(),this.cursor=h.getInstance()
}
return l(e,[
{
  key:"start",value:function(e,t)
  {
    var n=this;
    if(2!=e.button)
    {
      e.stopPropagation(),e.preventDefault();
      var o=c["default"](document),a=0,r=function(e)
      {
        n.proxy.move(e),n.droparea.mark(e,t)===!1?n.cursor.disable():n.cursor.enable()
      }
      ,l=function(o)
      {
        return a?r(o):void((o.target!=e.target||i(o,e))&&(a=1,n.cursor.capture(e),t.dragStart(),n.proxy.point(t,e),r(o)))
      }
      ,s=function u(e)
      {
        o.off("mousemove",l),a&&(t.dragEnd(),n.droparea.recieve(t)),a=0,n.proxy.hide(),n.cursor.release(),o.off("mouseup",u)
      };
      o.on("mousemove",l).one("mouseup",s)
    }
  }
}
]),e
}
();
t.DragService=y;
var b=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"getComponentName",value:function()
  {
    return"dragable"
  }
}
,
{
  key:"getName",value:function()
  {
    return"dragable"
  }
}
,
{
  key:"getIcon",value:function()
  {
    return"dragable"
  }
}
,
{
  key:"getSource",value:function()
  {
    return null
  }
}
,
{
  key:"dragStart",value:function()
  {
    this.draging=1
  }
}
,
{
  key:"dragEnd",value:function()
  {
    this.draging=0
  }
}
,
{
  key:"inDrag",value:function()
  {
    return this.draging
  }
}
]),t
}
(p["default"]);
t.Dragable=b;
var w=function()
{
function e(t)
{
  r(this,e),this.container=t,this.markIndex=-1,this.markRecyler=document.createDocumentFragment(),this.marker=document.createElement("DIV"),this.marker.className="wf-dragging-mark"
}
return l(e,[
{
  key:"clearMark",value:function()
  {
    this.markIndex=-1,this.markArea&&(this.markArea.clearMark(),this.markArea=null),this.container.active(0),this.markRecyler.appendChild(this.marker)
  }
}
,
{
  key:"mark",value:function(e,t,n)
  {
    this.clearMark();
    var o=this.container.getBoundaryNode();
    if(!o)return!1;
    var a=c["default"](o).find(".dropbody")[0],r=(e.clientX,e.clientY);
    if(!n)
    {
      var i=a.parentNode,l=i.getBoundingClientRect(),s=i.scrollTop;
      if(r<l.top+10?i.scrollTop=s-Math.max(20,10+l.top-r):r>l.bottom-10&&(i.scrollTop=s+Math.max(20,10+r-l.bottom)),e.clientX<l.left-20||e.clientX>l.right+20)return!1
    }
    var u=this.container.getItems(),p=void 0,f=void 0,d=void 0,m=void 0;
    this.markIndex=0;
    for(var h=0,v=u.length;v>h;h++)if(p=u[h],f=p.getBoundaryNode())
    {
      if(d=f.getBoundingClientRect(),p.canRecieveDragable(t)&&r>=d.top&&r<=d.bottom)
      {
        m=p.getDroparea(),m.mark(e,t,1);
        break
      }
      if(r<d.top+d.height/2)break;
      this.markIndex=h+1,f=null
    }
    return m?this.markArea=m:f?(a.insertBefore(this.marker,f),this.container.active(1)):(this.markIndex=u.length,a.appendChild(this.marker),this.container.active(1)),!0
  }
}
,
{
  key:"recieve",value:function(e)
  {
    if(this.markArea)return this.markArea.recieve(e),void this.clearMark();
    var t=this.markIndex;
    0>t||(this.clearMark(),this.container.insert(e,t))
  }
}
]),e
}
();
t.Droparea=w
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(3),c=o(s),u=n(5),p=o(u),f=n(11),d=o(f),m=n(6),h=function(e)
{
function t(e)
{
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
  }
}
return r(t,e),i(t,[
{
  key:"componentDidMount",value:function()
  {
    var e=this;
console.log("xhr:"+JSON.stringify(this.props.xhr)),this.props.xhr.done(function(t)
{
  var n=t.data.replace(/&amp;/g,"&"),o=new Image;
  o.onload=function()
  {
    e.setState(
    {
      src:n
    }
    )
  }
  ,o.src=n
}
)
}
}
,
{
key:"render",value:function()
{
return c["default"].createElement("div",
{
  className:"wf-qrcode"
}
,c["default"].createElement("h2",null,"请用钉钉扫描二维码预览"),this.state.src?c["default"].createElement("img",
{
  src:this.state.src
}
):c["default"].createElement("div",
{
  className:"wf-spinning"
}
))
}
}
]),t
}
(c["default"].Component),v=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    var e=this;
setTimeout(function()
{
  var t=c["default"].findDOMNode(e);
  t&&t.classList.add("visible")
}
,15);
var t=
{
};
return t.width=this.props.width,c["default"].createElement("div",
{
  className:"wf-popup "+(this.props.className||""),style:t
}
,c["default"].createElement("i",
{
  className:"icon icon-close wf-popup-close",onClick:w.clear
}
),this.props.children)
}
}
]),t
}
(c["default"].Component),g=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    var e=this;
return setTimeout(function()
{
  var t=c["default"].findDOMNode(e);
  t&&t.classList.add("visible")
}
,15),c["default"].createElement(v,
{
  width:360,className:"wf-message"
}
,c["default"].createElement("div",
{
  className:"wf-popup-content "+this.props.status
}
,c["default"].createElement("i",
{
  className:"icon icon-"+this.props.status
}
),c["default"].createElement("span",
{
  className:"text"
}
,this.props.message)))
}
}
]),t
}
(c["default"].Component),X=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    return c["default"].createElement("div",
    {
      className:"wf-loading"
    }
    ,c["default"].createElement("i",
    {
      className:"ani-loading"
    }
    ),c["default"].createElement("span",
    {
      className:"text"
    }
    ,this.props.message))
  }
}
]),t
}
(c["default"].Component),y=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return c["default"].createElement(v,
    {
      width:300,className:"wf-confirm"
    }
    ,c["default"].createElement("div",
    {
      className:"wf-popup-content"
    }
    ,c["default"].createElement("i",
    {
      className:"icon icon-error"
    }
    ),c["default"].createElement("span",
    {
      className:"text"
    }
    ,this.props.title),this.props.message?c["default"].createElement("p",
    {
      className:"detail"
    }
    ,this.props.message):null,c["default"].createElement("div",
    {
      className:"wf-popup-actions"
    }
    ,c["default"].createElement("button",
    {
      className:"wf-button wf-button-blue",onClick:function()
      {
        w.clear(),e.props.callback()
      }
    }
    ,"确定"),c["default"].createElement("button",
    {
      className:"wf-button wf-button-white",onClick:w.clear
    }
    ,"取消"))))
  }
}
]),t
}
(c["default"].Component),b=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    var e=m.isExternal()?"dataExternal":"formManager";
    return c["default"].createElement(v,
    {
      width:300,className:"wf-confirm"
    }
    ,c["default"].createElement("div",
    {
      className:"wf-popup-content"
    }
    ,c["default"].createElement("i",
    {
      className:"icon icon-color-green icon-success"
    }
    ),c["default"].createElement("span",
    {
      className:"text"
    }
    ,this.props.message),c["default"].createElement("div",
    {
      className:"wf-popup-actions"
    }
    ,c["default"].createElement("button",
    {
      className:"wf-button wf-button-blue",onClick:function()
      {
        return location.href=e
      }
    }
    ,"返回审批管理"),c["default"].createElement("button",
    {
      className:"wf-button wf-button-cyan",onClick:w.clear
    }
    ,"继续设计"))))
  }
}
]),t
}
(c["default"].Component),w=
{
save:function(e,t)
{
  w.clear();
  var n=p["default"].extend(
  {
  }
  ,e.getProps());
  c["default"].render(c["default"].createElement(v,
  {
    width:530
  }
  ,c["default"].createElement("h2",
  {
    className:"wf-popup-title"
  }
  ,"保存"+(t?"并启用":"")),c["default"].createElement("div",
  {
    className:"wf-popup-content"
  }
  ,c["default"].createElement(d["default"],
  {
    form:e,autofocus:!0,strong:!0,popupwindow:!0
  }
  ),c["default"].createElement("div",
  {
    className:"wf-popup-actions"
  }
  ,c["default"].createElement("button",
  {
    className:"wf-button wf-button-"+(t?"blue":"cyan"),onClick:function()
    {
      return e.save(t)
    }
  }
  ,"保存"+(t?"并启用":"")),c["default"].createElement("button",
  {
    className:"wf-button wf-button-white",onClick:function()
    {
      e.setProps(n),w.clear()
    }
  }
  ,"取消")))),w.getBoard(!0))
}
,clear:function()
{
  c["default"].unmountComponentAtNode(w.getBoard()),w.getBoard().className="",document.getElementById("body").className="",w.timer&&clearTimeout(w.timer)
}
,preview:function(e,t)
{
  w.clear(),c["default"].render(c["default"].createElement(v,
  {
    width:350,className:"wf-preview"
  }
  ,c["default"].createElement("div",
  {
    className:"wf-popup-content"
  }
  ,c["default"].createElement(h,
  {
    xhr:e
  }
  ),c["default"].createElement("div",
  {
    className:"wf-popup-actions"
  }
  ,t.isPublished()?null:c["default"].createElement("button",
  {
    className:"wf-button wf-button-cyan",onClick:function()
    {
      return t.save()
    }
  }
  ,"保存"),c["default"].createElement("button",
  {
    className:"wf-button wf-button-blue",onClick:function()
    {
      return t.save(1)
    }
  }
  ,"保存并启用")))),w.getBoard(!0))
}
,loading:function(e)
{
  w.clear(),c["default"].render(c["default"].createElement(X,
  {
    message:e
  }
  ),w.getBoard(!0))
}
,success:function(e)
{
  w.clear(),c["default"].render(c["default"].createElement(g,
  {
    message:e,status:"success"
  }
),w.getBoard()),w.timer=setTimeout(function()
{
  w.clear()
}
,5e3)
}
,error:function(e,t)
{
w.clear(),c["default"].render(c["default"].createElement(g,
{
  message:e,status:"error"
}
),this.getBoard()),w.timer=setTimeout(function()
{
  w.clear()
}
,t||5e3)
}
,removeConfirm:function(e)
{
c["default"].render(c["default"].createElement(y,
{
  callback:e,title:"你确定要删除该组件吗？",message:"删除后该组件对应的数据也会删除，建议先导出数据备份。如需保留数据，请尽量沿用原组件。"
}
),w.getBoard(!0))
}
,saveFormSuccessConfirm:function(e)
{
c["default"].render(c["default"].createElement(b,
{
  title:"",message:e
}
),w.getBoard(!0))
}
,pushCanlendarConfirm:function(e)
{
c["default"].render(c["default"].createElement(y,
{
  callback:e,title:"你确认要替换吗？",message:"每个审批只能有一个时间区间设置为员工状态，当前审批已开启员工状态设置。"
}
),w.getBoard(!0))
}
,getBoard:function(e)
{
if(!w.board)
{
  var t=document.createElement("div");
  document.body.appendChild(t),w.board=t
}
return w.board.className=e?"wf-storyboard mask":"wf-storyboard",e&&(document.getElementById("body").className="blur"),w.board
}
};
t["default"]=w,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(3),c=o(s),u=n(5),p=(o(u),n(12)),f=o(p),d=[
{
name:"common",value:"//gw.alicdn.com/tps/TB1zXtqOpXXXXa6XXXXXXXXXXXX-102-102.png"
}
,
{
name:"trip",value:"//gw.alicdn.com/tps/TB1Ez8XOpXXXXa5XpXXXXXXXXXX-102-102.png"
}
,
{
name:"out",value:"//gw.alicdn.com/tps/TB1C1XhOpXXXXaKXpXXXXXXXXXX-102-102.png"
}
,
{
name:"goods",value:"//gw.alicdn.com/tps/TB1tm.TOXXXXXchaXXXXXXXXXXX-102-102.png"
}
,
{
name:"biz",value:"//gw.alicdn.com/tps/TB1Y57ZOXXXXXXwaXXXXXXXXXXX-102-102.png"
}
,
{
name:"leave",value:"//gw.alicdn.com/tps/TB1hcBoOpXXXXbPXXXXXXXXXXXX-102-102.png"
}
,
{
name:"message",value:"//gw.alicdn.com/tps/TB1TOZQOXXXXXXVaXXXXXXXXXXX-102-102.png"
}
,
{
name:"favorite",value:"//gw.alicdn.com/tps/TB1jjpoOpXXXXbHXXXXXXXXXXXX-102-102.png"
}
,
{
name:"datacurve",value:"//gw.alicdn.com/tps/TB1.vAMOXXXXXXmaFXXXXXXXXXX-102-102.png"
}
,
{
name:"timefades",value:"//gw.alicdn.com/tps/TB1UEoTOXXXXXbCaXXXXXXXXXXX-102-102.png"
}
,
{
name:"official",value:"//gw.alicdn.com/tps/TB1NA.SOXXXXXbSaXXXXXXXXXXX-102-102.png"
}
,
{
name:"fly",value:"//gw.alicdn.com/tps/TB12R3NOXXXXXcwaXXXXXXXXXXX-102-102.png"
}
,
{
name:"house",value:"//gw.alicdn.com/tps/TB1ESwQOXXXXXbaaXXXXXXXXXXX-102-102.png"
}
,
{
name:"datapie",value:"//gw.alicdn.com/tps/TB1q5U5OXXXXXXPXVXXXXXXXXXX-102-102.png"
}
,
{
name:"tag",value:"//gw.alicdn.com/tps/TB1Pb4eOpXXXXcGXpXXXXXXXXXX-102-102.png"
}
,
{
name:"love",value:"//gw.alicdn.com/tps/TB1GCw.OXXXXXbOXFXXXXXXXXXX-102-102.png"
}
,
{
name:"daily",value:"//gw.alicdn.com/tps/TB1J20kOpXXXXc1XpXXXXXXXXXX-102-102.png"
}
,
{
name:"weekly",value:"//gw.alicdn.com/tps/TB14v8rOpXXXXXYXpXXXXXXXXXX-102-102.png"
}
,
{
name:"monthly",value:"//gw.alicdn.com/tps/TB1NI0nOpXXXXX2XpXXXXXXXXXX-102-102.png"
}
,
{
name:"promotion",value:"//gw.alicdn.com/tps/TB1Nb.3OXXXXXalaXXXXXXXXXXX-102-102.png"
}
,
{
name:"visiting",value:"//gw.alicdn.com/tps/TB1_Y.5OXXXXXcEXVXXXXXXXXXX-102-102.png"
}
,
{
name:"behavior",value:"//gw.alicdn.com/tps/TB15DEPOXXXXXXTaFXXXXXXXXXX-102-102.png"
}
,
{
name:"warehouse",value:"//gw.alicdn.com/tps/TB13Bw.OXXXXXXQXVXXXXXXXXXX-102-102.png"
}
,
{
name:"schoolAttendance",value:"//gw.alicdn.com/tps/TB1zhc.OXXXXXa4XVXXXXXXXXXX-102-102.png"
}
,
{
name:"schoolLog",value:"//gw.alicdn.com/tps/TB1i4ldOpXXXXaHXFXXXXXXXXXX-102-102.png"
}
,
{
name:"schoolStatement",value:"//gw.alicdn.com/tps/TB1Ons_OXXXXXbpXVXXXXXXXXXX-102-102.png"
}
,
{
name:"meeting",value:"//gw.alicdn.com/tps/TB1mZhiOpXXXXccXpXXXXXXXXXX-102-102.png"
}
,
{
name:"temporaryNotice",value:"//gw.alicdn.com/tps/TB118RbOpXXXXahXVXXXXXXXXXX-102-102.png"
}
,
{
name:"dutyLog",value:"//gw.alicdn.com/tps/TB18D0zOpXXXXXbXXXXXXXXXXXX-102-102.png"
}
,
{
name:"propaganda",value:"//gw.alicdn.com/tps/TB1a.VeOpXXXXc1XVXXXXXXXXXX-102-102.png"
}
,
{
name:"jobs",value:"//gw.alicdn.com/tps/TB1FXVmOpXXXXbGXFXXXXXXXXXX-102-102.png"
}
,
{
name:"recruitment",value:"//gw.alicdn.com/tps/TB1i7lmOpXXXXbvXFXXXXXXXXXX-102-102.png"
}
,
{
name:"inchapter",value:"//gw.alicdn.com/tps/TB1HXRxOpXXXXbbXpXXXXXXXXXX-102-102.png"
}
,
{
name:"class",value:"//gw.alicdn.com/tps/TB1Tv0GOpXXXXX7XXXXXXXXXXXX-102-102.png"
}
,
{
name:"department",value:"//gw.alicdn.com/tps/TB1E2NEOpXXXXaHXXXXXXXXXXXX-102-102.png"
}
,
{
name:"conference",value:"//gw.alicdn.com/tps/TB19xFfOpXXXXbBXVXXXXXXXXXX-102-102.png"
}
,
{
name:"gas",value:"//gw.alicdn.com/tps/TB13G0EOpXXXXbuXXXXXXXXXXXX-102-102.png"
}
,
{
name:"salary",value:"//gw.alicdn.com/tps/TB1QWA7OXXXXXb9aXXXXXXXXXXX-102-102.png"
}
,
{
name:"discount",value:"//gw.alicdn.com/tps/TB1_Lw6OXXXXXcCaXXXXXXXXXXX-102-102.png"
}
,
{
name:"pay",value:"//gw.alicdn.com/tps/TB1L8xjOpXXXXbYXFXXXXXXXXXX-102-102.png"
}
,
{
name:"contract",value:"//gw.alicdn.com/tps/TB1MLxpOpXXXXbeXFXXXXXXXXXX-102-102.png"
}
,
{
name:"collection",value:"//gw.alicdn.com/tps/TB1XQdaOpXXXXbwaXXXXXXXXXXX-102-102.png"
}
,
{
name:"cashier",value:"//gw.alicdn.com/tps/TB1z4I6OXXXXXX3apXXXXXXXXXX-102-102.png"
}
,
{
name:"departure",value:"//gw.alicdn.com/tps/TB19RptOpXXXXXQXFXXXXXXXXXX-102-102.png"
}
,
{
name:"courier",value:"//gw.alicdn.com/tps/TB1k6Z0OXXXXXcyapXXXXXXXXXX-102-102.png"
}
,
{
name:"procurement",value:"//gw.alicdn.com/tps/TB14X4tOpXXXXX2XFXXXXXXXXXX-102-102.png"
}
,
{
name:"attendance_supplementary",value:"//gw.alicdn.com/tps/TB13Rg5OXXXXXcgaXXXXXXXXXXX-102-102.png"
}
,
{
name:"positive",value:"//gw.alicdn.com/tps/TB1Rp0eOpXXXXayaXXXXXXXXXXX-102-102.png"
}
,
{
name:"work_instructions",value:"//gw.alicdn.com/tps/TB1eMBJOpXXXXXAXXXXXXXXXXXX-102-102.png"
}
,
{
name:"repeat_order",value:"//gw.alicdn.com/tps/TB1GxBnOpXXXXcbXFXXXXXXXXXX-102-102.png"
}
,
{
name:"follow",value:"//gw.alicdn.com/tps/TB1fJo3OXXXXXa8apXXXXXXXXXX-102-102.png"
}
,
{
name:"general_log",value:"//gw.alicdn.com/tps/TB1E9BoOpXXXXcHXFXXXXXXXXXX-102-102.png"
}
,
{
name:"business",value:"//gw.alicdn.com/tps/TB13336OXXXXXcGapXXXXXXXXXX-102-102.png"
}
],m=[
{
name:"cooperation",value:"//gw.alicdn.com/tps/TB1x_APNXXXXXaoXFXXXXXXXXXX-68-68.png"
}
,
{
name:"contract",value:"//gw.alicdn.com/tps/TB1AlISNXXXXXXqXFXXXXXXXXXX-68-68.png"
}
,
{
name:"promote",value:"//gw.alicdn.com/tps/TB1vhIMNXXXXXcoXFXXXXXXXXXX-68-68.png"
}
,
{
name:"payment",value:"//gw.alicdn.com/tps/TB1t33BNXXXXXanaXXXXXXXXXXX-68-68.png"
}
,
{
name:"maintenance",value:"//gw.alicdn.com/tps/TB1e5wBNXXXXXXJaXXXXXXXXXXX-68-68.png"
}
,
{
name:"procurement",value:"//gw.alicdn.com/tps/TB1z8kQNXXXXXX4XFXXXXXXXXXX-68-68.png"
}
],h=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return console.log("selected:"+this.props.selected),c["default"].createElement("label",
    {
      className:"iconitem"+(this.props.selected?" selected":""),onClick:function()
      {
        e.props.onSelect(e.props.name)
      }
    }
    ,this.props.selected?c["default"].createElement("i",
    {
      className:"icon icon-checked"
    }
    ):null,c["default"].createElement("img",
    {
      src:this.props.src
    }
    ))
  }
}
]),t
}
(c["default"].Component),v=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this,t=window.location.href.indexOf("procType=outer")>-1;
    t&&localStorage.setItem("is_external",!0);
    var n=t?m:d;
    return c["default"].createElement("div",
    {
      className:"wf-iconselect"
    }
,n.map(function(t)
{
  return c["default"].createElement(h,
  {
    key:t.name,name:t.name,src:t.value,selected:e.props.value==t.name,onSelect:e.props.onChange
  }
  )
}
))
}
}
]),t
}
(c["default"].Component),g=function(e)
{
function t(e)
{
  var n=this;
  a(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.form=this.props.form,this.state=
  {
    props:this.form.getProps(),validstatus:this.form.getValidStatus()
  };
  var o=function()
  {
    console.log(JSON.stringify(n.form.getProps())+window),n.form.getProps()&&n.form.getProps().title&&(window.__FormTitle__=n.form.getProps().title),n.setState(
    {
      props:n.form.getProps()
    }
    )
  }
  ,r=function(e)
  {
    n.setState(
    {
      validstatus:e
    }
    )
  };
  this.form.on("propschange",o),this.form.on("validstatus",r),this.stopListen=function()
  {
    n.form.off("propschange",o),n.form.off("validstatus",r)
  }
}
return r(t,e),l(t,[
{
  key:"componentDidMount",value:function()
  {
    this.props.autofocus&&this.refs.title.getDOMNode().focus()
  }
}
,
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()    //审批设置内容加载开始
  {
    var e=this,t="",n="",o="最多"+f["default"].TITLE_WORD_LIMIT+"个字";
    this.props.strong&&"empty"===this.state.validstatus.title?(t="error-empty",o="请输入审批名称，"+o):"toolong"===this.state.validstatus.title&&(t="error-toolong"),"toolong"===this.state.validstatus.description&&(n="error-toolong");
    var a=window.location.href.indexOf("procType=outer")>-1,r=!this.state.props.icon&&a?"cooperation":"common";
    this.state.props.icon&&(r=this.state.props.icon);
    var i=this.props.popupwindow?"wf-field wf-setting-icon wf-setting-short":"wf-field wf-setting-icon";
    return c["default"].createElement("div",
    {
      className:"wf-form wf-formsettings"
    }
    ,c["default"].createElement("div",
    {
      className:"wf-field wf-setting-title"
    }
    ,c["default"].createElement("div",
    {
      className:"fieldname"
    }
    ,"审批名称",c["default"].createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,o)),c["default"].createElement("div",
    {
      className:"fieldblock"
    }
    ,c["default"].createElement("input",
    {
      ref:"title",type:"text",className:t,value:this.state.props.title,onChange:function(t)
      {
        e.form.setProp("title",t.target.value)
      }
    }
    ))),c["default"].createElement("div",
    {
      className:"wf-field wf-setting-description"
    }
    ,c["default"].createElement("div",
    {
      className:"fieldname"
    }
    ,"审批说明",c["default"].createElement("span",
    {
      className:"fieldinfo "+n
    }
    ,"最多"+f["default"].DESC_WORD_LIMIT+"个字")),c["default"].createElement("div",
    {
      className:"fieldblock"
    }
    ,c["default"].createElement("textarea",
    {
      type:"text",className:n,value:this.state.props.description,onChange:function(t)
      {
        e.form.setProp("description",t.target.value)
      }
    }
    ))),c["default"].createElement("div",
    {
      className:i
    }
    ,c["default"].createElement("div",
    {
      className:"fieldname"
    }
    ,"图标"),c["default"].createElement("div",
    {
      className:"fieldblock"
    }
    ,c["default"].createElement(v,
    {
      value:r,onChange:function(t)
      {
        e.state.props.icon=t,e.form.setProp("icon",t)
      }
    }
    ))))
  }
}   //审批设置内容加载结束
]),t
}
(c["default"].Component);
t["default"]=g,e.exports=t["default"]
}
,function(e,t)
{
"use strict";
Object.defineProperty(t,"__esModule",
{
value:!0
}
),t["default"]=
{
TITLE_WORD_LIMIT:10,DESC_WORD_LIMIT:100,LABEL_WORD_LIMIT:10,ACTION_WORD_LIMIT:10,PLACEHOLDER_WORD_LIMIT:20,UNIT_WORD_LIMIT:20,TEXTNOT_CONTENT_LIMIT:5e3,MAX_OPTIONS:200
}
,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var a=n(5),r=o(a),i=n(7),l=(o(i),n(6)),s=
{
  readUrl:"/"+window.__group__+"/web/query/form/getForm",getConditionUrl:"/"+window.__group__+"/web/query/form/getFormRuleCondition",saveUrl:"/"+window.__group__+"/web/query/form/saveFormAndProcess",savePreviewUrl:"/"+window.__group__+"/web/query/form/savePreviewForm",checkForRemove:"/"+window.__group__+"/web/query/form/checkFormComponentCanDelete"
   // readUrl:"https://aflow.dingtalk.com/dingtalk/web/query/form/getForm.json?formUuid=FORM-empty",getConditionUrl:"/"+window.__group__+"/web/query/form/getFormRuleCondition",saveUrl:"/"+window.__group__+"/web/query/form/saveFormAndProcess",savePreviewUrl:"/"+window.__group__+"/web/query/form/savePreviewForm",checkForRemove:"/"+window.__group__+"/web/query/form/checkFormComponentCanDelete"
}   //初始化加载数据
,c=
{
  getDataUrl:function()
  {
    return this.dataUrl||(this.dataUrl=window.isMock?"/mock":"dataUrl"in window?window.dataUrl:location.origin||location.protocol+"//"+location.host),this.dataUrl
  }
  ,checkForRemove:function(e,t)
  {
    var n=
    {
      formUuid:e,componentId:t
    };
    return r["default"].ajax(
    {
      url:this.getDataUrl()+s.checkForRemove+".json",data:n,type:window.isMock?"get":"post",dataType:"json"
    }
    )
  }
  ,getData:function(e)
  {
    var t=
    {
      formUuid:e
    };
    return r["default"].getJSON(this.getDataUrl()+s.readUrl+".json",t)
  }
  ,getCondition:function(e)
  {
    var t=
    {
      formUuid:e
    };
    return r["default"].getJSON(this.getDataUrl()+s.getConditionUrl+".json",t)
  }
  ,save:function(e)
  {
    var t=l.getParams(window.location.href);
    return t&&t.procType&&t.procType.length>0&&(e.procType=t.procType),r["default"].ajax(
    {
      url:this.getDataUrl()+s.saveUrl+".json",data:e,type:window.isMock?"get":"post",dataType:"json"
    }
    )
  }
  ,preview:function(e)
  {
    var t=l.getParams(window.location.href);
    return t&&t.procType&&t.procType.length>0&&(e.procType=t.procType),r["default"].ajax(
    {
      url:this.getDataUrl()+s.savePreviewUrl+".json",data:e,type:window.isMock?"get":"post",dataType:"json"
    }
    )
  }
};
t["default"]=c,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
function i(e,t)
{
  for(var n=!0;n;)
  {
    var o=e,a=t;
    if(n=!1,o&&X.indexOf(o)<0)return X.push(o),o;
    e=a+"-"+(y++).toString(36).toUpperCase(),t=a,n=!0
  }
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,c=n(3),u=o(c),p=n(5),f=o(p),d=n(13),m=o(d),h=n(10),v=o(h),g=n(9),X=[],y=+new Date,b=function(e)
{
function t(e,n,o)
{
  a(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.validators=[],this.form=e,this.schema=n||
  {
  }
  ,this.props=f["default"].extend(!0,
  {
  }
  ,this.schema.props||this.getDefaultProps()),this.id=i(this.props.id,this.getComponentName()),this.container=o,this.validstatus=
  {
  }
  ,this.published=this.form.isPublished(),this.init()
}
return r(t,e),l(t,[
{
  key:"init",value:function()
  {
  }
}
,
{
  key:"isEnable",value:function()
  {
    return!this.props.disabled
  }
}
,
{
  key:"isPublished",value:function()
  {
    return this.published
  }
}
,
{
  key:"isForCondition",value:function()
  {
    return this.form.isConditionField(this.getId())
  }
}
,
{
  key:"setPublished",value:function(e)
  {
    this.published=e
  }
}
,
{
  key:"getId",value:function()
  {
    return this.id
  }
}
,
{
  key:"getStringifyLabel",value:function()
  {
    return this.stringifyLabel(this.props.label)
  }
}
,
{
  key:"setContainer",value:function(e)
  {
    this.container=e,this.isSupportLabel()&&this.setProp("label",this.uniqueLabel())
  }
}
,
{
  key:"getContainer",value:function()
  {
    return this.container
  }
}
,
{
  key:"getForm",value:function()
  {
    return this.form
  }
}
,
{
  key:"dragStart",value:function()
  {
    s(Object.getPrototypeOf(t.prototype),"dragStart",this).call(this),this.emit("dragstatus",1)
  }
}
,
{
  key:"dragEnd",value:function()
  {
    s(Object.getPrototypeOf(t.prototype),"dragEnd",this).call(this),this.emit("dragstatus",0)
  }
}
,
{
  key:"getBoundaryNode",value:function()
  {
    return this.boundary?u["default"].findDOMNode(this.boundary):null
  }
}
,
{
  key:"setBoundary",value:function(e)
  {
    this.boundary=e,this.intoView&&this.scrollIntoView()
  }
}
,
{
  key:"getProp",value:function(e)
  {
    return this.props[e]
  }
}
,
{
  key:"setLabelDuplicate",value:function(e)
  {
    "duplicate"!==this.validstatus.label||e?"duplicate"!==this.validstatus.label&&e&&(this.validstatus.label="duplicate",this.emit("validstatus",this.validstatus)):(this.validstatus.label=null,this.emit("validstatus",this.validstatus))
  }
}
,
{
  key:"getValidStatus",value:function(e)
  {
    return e?this.validstatus[e]:this.validstatus
  }
}
,
{
  key:"addValidator",value:function(e,t,n,o)
  {
    this.validators.push(
    {
      prop:e,type:n,validator:t,msg:o||""
    }
    )
  }
}
,
{
  key:"setProp",value:function(e,t)
  {
    this.props[e]=t,this.emit("propschange");
    var n=this.check(e);
    !n&&this.validstatus[e]?(delete this.validstatus[e],this.emit("validstatus",this.validstatus)):n&&n!==this.validstatus[e]&&(this.validstatus[e]=n,this.emit("validstatus",this.validstatus)),this.isSupportLabel()&&"label"===e&&!this.validstatus[e]&&this.container.checkLabelDuplicate()
  }
}
,
{
  key:"check",value:function(e)
  {
for(var t=this.validators.filter(function(t)
{
  return t.prop===e
}
),n=void 0,o=0,a=t.length;
a>o;
o++)if(n=t[o],n.validator.call(this,this.getProp(n.prop))===!0)return n.type;
return null
}
}
,
{
key:"valid",value:function()
{
for(var e=this.validators,t=void 0,n=0,o=e.length;o>n;n++)if(t=e[n],t.validator.call(this,this.getProp(t.prop))===!0)
  return {msg:t.msg,component:this};
return null
}
}
,
{
key:"scrollIntoView",value:function()
{
if(!this.boundary)return void(this.intoView=!0);
this.intoView=!1;
var e=this.getBoundaryNode().getBoundingClientRect(),t=this.form.getBoundaryNode().firstChild,n=t.getBoundingClientRect();
e.top<n.top?t.scrollTop=t.scrollTop-n.top+e.top-5:e.bottom>n.bottom&&(t.scrollTop=Math.min(t.scrollTop+e.bottom-n.bottom+5,t.scrollTop-n.top+e.top))
}
}
,
{
key:"getProps",value:function()
{
return this.props
}
}
,
{
key:"toJSON",value:function()
{
var e=f["default"].extend(
{
}
,this.props);
return e.id=this.getId(),
{
  componentName:this.getComponentName(),props:e
}
}
}
,
{
key:"remove",value:function()
{
this.container.remove(this)
}
}
,
{
key:"disable",value:function()
{
this.setProp("disable",1)
}
}
,
{
key:"enable",value:function()
{
this.setProp("disable",0)
}
}
,
{
key:"isActive",value:function()
{
return this.form.isActive(this)
}
}
,
{
key:"active",value:function()
{
this.form.active(this)
}
}
,
{
key:"hover",value:function(e)
{
this.form.isHover(this)&&!e?this.form.hover(null):e&&this.form.hover(this)
}
}
,
{
key:"destroy",value:function()
{
this.removeAllListeners(),this.boundary=null,this.destroyed=!0
}
}
,
{
key:"getIcon",value:function()
{
return this.getComponentName().toLowerCase()
}
}
,
{
key:"canRecieveDragable",value:function(e)
{
return!1
}
}
,
{
key:"isSupportLabel",value:function()
{
return!0
}
}
,
{
key:"stringifyLabel",value:function(e)
{
return null==e||""===e?"":e+""
}
}
,
{
key:"uniqueLabel",value:function()
{
for(var e=this.props.label?function(e)
{
  var t=/^(.*)\(\d+\)$/.exec(e);
  return t?t[1]:e
}
(this.props.label):this.getDefaultLabel(),t=1,n=e;
this.container.existsLabel(this.stringifyLabel(n),this);
)t+=1,n=e+"("+t+")";
return n
}
}
,
{
key:"getDefaultLabel",value:function()
{
return"组件"
}
}
,
{
key:"getDefaultProps",value:function()
{
return
{
}
}
}
,
{
key:"getComponentName",value:function()
{
return"Component"
}
}
,
{
key:"getName",value:function()
{
return"组件"
}
}
,
{
key:"inTableField",value:function()
{
return!1
}
}
,
{
key:"getSupportSettings",value:function()
{
return[]
}
}
,
{
key:"getOwnContainer",value:function()
{
return null
}
}
,
{
key:"getComponentView",value:function()
{
return null
}
}
]),t
}
(g.Dragable);
t.Component=b;
var w=function(e)
{
function t(e)
{
  var n=this;
  a(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.component=this.props.component,this.state=
  {
    props:this.component.getProps(),active:this.component.isActive(),draging:0,hover:0,areaactive:0
  };
  var o=function()
  {
    n.setState(
    {
      props:n.component.getProps()
    }
    )
  }
  ,r=function(e)
  {
    n.setState(
    {
      active:e
    }
    )
  }
  ,i=function(e)
  {
    n.setState(
    {
      draging:e
    }
    )
  }
  ,l=function(e)
  {
    n.setState(
    {
      hover:e
    }
    )
  }
  ,c=function(e)
  {
    n.setState(
    {
      areaactive:e
    }
    )
  }
  ,u=this.component.getOwnContainer();
  this.component.on("propschange",o),this.component.on("activestatus",r),this.component.on("dragstatus",i),this.component.on("hoverstatus",l),u&&u.on("activestatus",c),this.stopListen=function()
  {
    n.component.off("propschange",o),n.component.off("activestatus",r),n.component.off("dragstatus",i),n.component.off("hoverstatus",l),u&&u.off("activestatus",c)
  }
}
return r(t,e),l(t,[
{
  key:"componentDidMount",value:function()
  {
    var e=this,t=this.component.getForm().getDragService(),n=f["default"](u["default"].findDOMNode(this)),o=n.children(".wf-overlay");
    this.component.setBoundary(this),o.on("mousedown",function(n)
    {
      e.component.active(),t.start(n,e.component)
    }
    ),n.on("mouseover",function(t)
    {
      t.stopPropagation(),e.component.hover(1)
    }
    ).on("mouseleave",function()
    {
      e.component.hover(0)
    }
    ),this.stopMouse=function()
    {
      o.off("mousedown"),n.off("mouseover mouseleave")
    }
  }
}
,
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen(),this.stopMouse&&this.stopMouse()
  }
}
,
{
  key:"onRemove",value:function(e)
  {
    e.stopPropagation(),e.preventDefault();
    var t=this;
    if(1===t.component.isForCondition())return void v["default"].error("该组件已被设为审批条件，不可删除。");
    if(t.component.isPublished())
    {
      var n=t.component.getForm().getId(),o=t.component.getId();
m["default"].checkForRemove(n,o).done(function(e)
{
  return e.success&&e.data?e.data.result?void t.component.remove():void v["default"].error(e.data.message||"无法删除"):void v["default"].error(e.errorMessage||"删除失败")
}
).fail(function()
{
  v["default"].error("删除失败")
}
)
}
else t.component.remove()
}
}
,
{
key:"renderComponentView",value:function()
{
return null
}
}
,
{
key:"render",value:function()
{
var e="wf-component wf-component-"+this.component.getComponentName().toLowerCase();
return this.state.active&&(e+=" active"),this.state.draging?e+=" draging":this.state.hover&&(e+=" hover"),this.state.areaactive&&(e+=" areaactive"),u["default"].createElement("div",
{
className:e
}
,u["default"].createElement("div",
{
className:"wf-remove icon icon-close",onClick:this.onRemove.bind(this)
}
),u["default"].createElement("div",
{
className:"wf-overlay"
}
),this.renderComponentView())
}
}
]),t
}
(u["default"].Component);
t.ComponentView=w;
var k=function()
{
function e()
{
  a(this,e),this.list=[],this.registry=
  {
  }
}
return l(e,[
{
  key:"register",value:function(e,t)
  {
    t.componentName=e,this.list.push(t),this.registry[e]=t
  }
}
,
{
  key:"getRegistryList",value:function()
  {
    return this.list
  }
}
,
{
  key:"factory",value:function(e,t,n)
  {
    var o=t.componentName;
    if(!(o&&o in this.registry))return null;
    var a=this.registry[o].factory;
    return new a(e,t,n)
  }
}
]),e
}
(),E=new k;
t.ComponentRegistry=E
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(8),c=o(s),u=n(14),p=function(e)
{
function t(e,n,o,r)
{
  var i=this;
a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.form=n,this.capacity=r||0,this.items=e.map(function(e)
{
  return u.ComponentRegistry.factory(n,e,i)
}
),this.parent=o||this.form
}
return r(t,e),i(t,[
{
key:"setItems",value:function(e)
{
  var t=this;
this.items=e.map(function(e)
{
  return u.ComponentRegistry.factory(t.form,e,t)
}
),this.emit("itemschange",this.items)
}
}
,
{
key:"getItems",value:function()
{
return this.items
}
}
,
{
key:"active",value:function(e)
{
this.activestatus&&!e?(this.activestatus=0,this.emit("activestatus",0)):!this.activestatus&&e&&(this.activestatus=1,this.emit("activestatus",1))
}
}
,
{
key:"getParent",value:function()
{
return this.parent
}
}
,
{
key:"getBoundaryNode",value:function()
{
return this.parent.getBoundaryNode()
}
}
,
{
key:"valid",value:function()
{
var e=void 0;
return this.items.some(function(t)
{
  return e=t.valid(),e?!0:!1
}
),e
}
}
,
{
key:"checkLabelDuplicate",value:function()
{
var e=
{
};
this.items.forEach(function(t)
{
  if(t.isSupportLabel())
  {
    var n=t.getStringifyLabel();
    n in e?e[n].push(t):e[n]=[t]
  }
}
);
for(var t in e)e[t].length>1?e[t].forEach(function(e)
{
  return e.setLabelDuplicate(1)
}
):e[t][0].setLabelDuplicate(0)
}
}
,
{
key:"existsLabel",value:function(e,t)
{
return this.items.some(function(n)
{
  return n!==t&&n.isSupportLabel()&&e===n.getStringifyLabel()
}
)
}
}
,
{
key:"insert",value:function(e,t)
{
var n=this.items.indexOf(e);
if(this.capacity>0&&0>n&&this.items.length>=this.capacity)return this.emit("capacitylimit",this.capacity),!1;
if(e instanceof u.Component||(e=u.ComponentRegistry.factory(this.form,e.getSource()),e.setPublished(0)),null==t&&(t=this.items.length),0>n)
{
  var o=e.getContainer();
  if(o&&o!==this)
  {
    if(e.isForCondition())return this.form.emit("conditionlimit"),!1;
    o.remove(e,!0)
  }
  t<this.items.length?this.items.splice(t,0,e):this.items.push(e),e.setContainer(this)
}
else
{
  if(t>n&&(t-=1),t===n)return;
  this.items.splice(n,1),this.items.splice(t,0,e)
}
this.emit("itemschange",this.items),this.form.active(e)
}
}
,
{
key:"remove",value:function(e,t)
{
var n=this.items.indexOf(e);
n>-1&&(this.items.splice(n,1),this.emit("itemschange",this.items),t||e.destroy(),this.form.isActive(e)&&this.form.active(this.parent),this.checkLabelDuplicate())
}
}
,
{
key:"setPublished",value:function()
{
this.items.forEach(function(e)
{
  return e.setPublished(1)
}
)
}
}
,
{
key:"destroy",value:function()
{
this.items.forEach(function(e)
{
  return e.destroy()
}
),this.items=[]
}
}
,
{
key:"toJSON",value:function()
{
return this.items.map(function(e)
{
  return e.toJSON()
}
)
}
}
]),t
}
(c["default"]);
t["default"]=p,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(3),s=o(l),c=n(17),u=n(31),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    {
      var e=this,t=window.location.href.indexOf("procType=outer")>-1;
      localStorage.getItem("is_external")
    }
    return t&&localStorage.setItem("is_external",!0),s["default"].createElement("div",
    {
      className:"wf-panel wf-widgetspanel"
    }
    ,s["default"].createElement("div",
    {
      className:"wf-panel-tab"     //设置切换按钮
    }
    ,s["default"].createElement("a",
    {
      className:"tabitem current"
    }
    ,"控件")),s["default"].createElement("div",
    {
      className:"wf-panel-body"
    }
,c.ComponentRegistry.getRegistryList().map(function(n)
{
  return t&&"DDAttachment"==n.componentName?null:s["default"].createElement(u.ItemView,
  {
    item:new u.Item(n),form:e.props.form
  }
  )
}
)))
}
}
]),t
}
(s["default"].Component);
t["default"]=p,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
{
  var a=n(14),r=n(18),i=(o(r),n(19)),l=(o(i),n(20)),s=(o(l),n(21)),c=(o(s),n(22)),u=(o(c),n(23)),p=(o(u),n(24)),f=(o(p),n(25)),d=(o(f),n(26)),m=(o(d),n(27)),h=(o(m),n(28)),v=(o(h),n(29)),g=(o(v),n(30));
  o(g)
}
t.Component=a.Component,t.ComponentRegistry=a.ComponentRegistry
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(6),c=n(12),u=o(c),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t=e.placeholder||"";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,s.wordcut(e.label||"",u["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,s.wordcut(t||"",u["default"].PLACEHOLDER_WORD_LIMIT))))
  }
}
]),t
}
(l.ComponentView),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&s.wordcount(e)>u["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字"),this.addValidator("placeholder",function(e)
    {
      return e&&s.wordcount(e)>u["default"].PLACEHOLDER_WORD_LIMIT
    }
    ,"toolong","组件提示文字不能超过二十个字")
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return"单行输入框"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return
    {
      placeholder:"请输入"
    }
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"TextField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"单行输入框"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["label","placeholder","required","important","print"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return p
  }
}
]),t
}
(l.Component);
t["default"]=f,l.ComponentRegistry.register("TextField",
{
name:"单行输入框",factory:f
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{value:!0}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(6),c=n(12),u=o(c),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t=e.placeholder||"";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,s.wordcut(e.label||"",u["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,s.wordcut(t||"",u["default"].PLACEHOLDER_WORD_LIMIT))))
  }
}
]),t
}
(l.ComponentView),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&s.wordcount(e)>u["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字"),this.addValidator("placeholder",function(e)
    {
      return e&&s.wordcount(e)>u["default"].PLACEHOLDER_WORD_LIMIT
    }
    ,"toolong","组件提示文字不能超过二十个字")
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return"多行输入框"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return
    {
      placeholder:"请输入"
    }
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"TextareaField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"多行输入框"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["label","placeholder","required","important","print"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return p
  }
}
]),t
}
(l.Component);
t["default"]=f,l.ComponentRegistry.register("TextareaField",
{
name:"多行输入框",factory:f
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(14),c=n(6),u=n(12),p=o(u),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t=e.placeholder||"";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(e.label||"",p["default"].LABEL_WORD_LIMIT),c.wrapBracket(c.wordcut(e.unit||"",p["default"].UNIT_WORD_LIMIT))),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,c.wordcut(t||"",p["default"].PLACEHOLDER_WORD_LIMIT))))
  }
}
]),t
}
(s.ComponentView),d=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&c.wordcount(e)>p["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字"),this.addValidator("placeholder",function(e)
    {
      return e&&c.wordcount(e)>p["default"].PLACEHOLDER_WORD_LIMIT
    }
    ,"toolong","组件提示文字不能超过二十个字"),this.addValidator("unit",function(e)
    {
      return e&&c.wordcount(e)>p["default"].UNIT_WORD_LIMIT
    }
    ,"toolong","组件单位不能超过二十个字")
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return"数字输入框"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return{ placeholder:"请输入",stat:!0}
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"NumberField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"数字输入框"
  }
}
,
{
  key:"getProp",value:function(e)
  {
    if("stat"===e&&this.inTableField())
    {
      if(this.props.stat)return!0;
      var n=this.getContainer().getParent();
      return n.inStat(this.getId())
    }
    return i(Object.getPrototypeOf(t.prototype),"getProp",this).call(this,e)
  }
}
,
{
  key:"setProp",value:function(e,n)
  {
    if("stat"===e&&this.inTableField())
    {
      var o=this.getContainer().getParent();
      o.setStat(this.getId(),n),this.props.stat=n,this.emit("propschange")
    }
    else i(Object.getPrototypeOf(t.prototype),"setProp",this).call(this,e,n),this.inTableField()&&this.getContainer().emit("itemschange")
  }
}
,
{
  key:"toJSON",value:function()
  {
    return delete this.props.stat,i(Object.getPrototypeOf(t.prototype),"toJSON",this).call(this)
  }
}
,
{
  key:"inTableField",value:function()
  {
    var e=this.getContainer().getParent();
    return e instanceof s.Component&&"TableField"===e.getComponentName()
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return this.inTableField()?["label","placeholder","unit","required","stat","print","important"]:["label","placeholder","unit","required","print","important"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return f
  }
}
]),t
}
(s.Component);
t["default"]=d,s.ComponentRegistry.register("NumberField",
{
name:"数字输入框",factory:d
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(14),c=n(6),u=n(12),p=o(u),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t="请选择";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(e.label||"",p["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-enter"
    }
    )))
  }
}
]),t
}
(s.ComponentView),d=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&c.wordcount(e)>p["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字")
  }
}
,
{
  key:"toJSON",value:function()
  {
    var e=i(Object.getPrototypeOf(t.prototype),"toJSON",this).call(this);
    try
    {
e.props.options=e.props.options.filter(function(e)
{
  return""!==e.trim()
}
)
}
catch(n)
{
}
return e
}
}
,
{
key:"getDefaultLabel",value:function()
{
return"单选框"
}
}
,
{
key:"getDefaultProps",value:function()
{
return{placeholder:"请选择",options:["选项1","选项2","选项3"]}
}
}
,
{
key:"getComponentName",value:function()
{
return"DDSelectField"
}
}
,
{
key:"getName",value:function()
{
return"单选框"
}
}
,
{
key:"getSupportSettings",value:function()
{
return["label","options","required","sync","important","print"]
}
}
,
{
key:"getComponentView",value:function()
{
return f
}
}
]),t
}
(s.Component);
t["default"]=d,s.ComponentRegistry.register("DDSelectField",
{
name:"单选框",factory:d
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(14),c=n(6),u=n(12),p=o(u),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t="请选择";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(e.label||"",p["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-enter"
    }
    )))
  }
}
]),t
}
(s.ComponentView),d=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&c.wordcount(e)>p["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字")
  }
}
,
{
  key:"toJSON",value:function()
  {
    var e=i(Object.getPrototypeOf(t.prototype),"toJSON",this).call(this);
    try
    {
e.props.options=e.props.options.filter(function(e)
{
  return""!==e.trim()
}
)
}
catch(n)
{
}
return e
}
}
,
{
key:"getDefaultLabel",value:function()
{
return"多选框"
}
}
,
{
key:"getDefaultProps",value:function()
{
return{placeholder:"请选择",options:["选项1","选项2","选项3"]}
}
}
,
{
key:"getComponentName",value:function()
{
return"DDMultiSelectField"
}
}
,
{
key:"getName",value:function()
{
return"多选框"
}
}
,
{
key:"getSupportSettings",value:function()
{
return["label","options","required","important","print"]
}
}
,
{
key:"getComponentView",value:function()
{
return f
}
}
]),t
}
(s.Component);
t["default"]=d,s.ComponentRegistry.register("DDMultiSelectField",
{
name:"多选框",factory:d
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(6),c=n(12),u=o(c),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t="请选择";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,s.wordcut(e.label||"",u["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-enter"
    }
    )))
  }
}
]),t
}
(l.ComponentView),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&s.wordcount(e)>u["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字")
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return"日期"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return{placeholder:"请选择",format:"yyyy-MM-dd"}
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"DDDateField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"日期"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["label","dateformat","required","important","print"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return p
  }
}
]),t
}
(l.Component);
t["default"]=f,l.ComponentRegistry.register("DDDateField",
{
name:"日期",factory:f
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(14),c=n(6),u=n(12),p=o(u),f=n(10),d=o(f),m=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t="请选择";
    e.required&&(t+="（必填）");
    var n=e.label||[];
    return React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(n[0]||"",p["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-enter"
    }
    )),React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(n[1]||"",p["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-enter"
    }
    )),e.duration?React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(e.durationLabel||"",p["default"].LABEL_WORD_LIMIT),c.wrapBracket(e.unit)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    )):"")
  }
}
]),t
}
(s.ComponentView),h=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"init",value:function()
  {
    var e=this;
    this.addValidator("label",function(e)
    {
      return null==e||!e[0]||""===e[0].trim()||!e[1]||""===e[1].trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&(c.wordcount(e[0])>10||c.wordcount(e[1])>10)
    }
    ,"toolong","组件标题不能超过十个字"),this.addValidator("durationLabel",function(t)
    {
      var n=e.getProp("duration");
      return n&&(!t||""===t.trim())
    }
    ,"empty","时长标题不能为空"),this.addValidator("durationLabel",function(e)
    {
      return e&&c.wordcount(e)>10
    }
    ,"toolong","时长标题不能超过十个字"),this.addValidator("push",function(e)
    {
      return e&&e.pushSwitch&&"1"===e.pushSwitch&&(!e.pushTag||""===e.pushTag.trim())
    }
    ,"empty","员工状态长度不能为空"),this.addValidator("push",function(e)
    {
      return e&&e.pushSwitch&&"1"===e.pushSwitch&&e.pushTag&&c.wordcount(e.pushTag)>5
    }
    ,"toolong","员工状态长度不能超过5个字");
    var t=this.getProp("push");
    t&&t.pushSwitch&&"1"===t.pushSwitch&&(this.form.pushToCalendarComponent=this)
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return["开始时间","结束时间"]
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return{placeholder:"请选择",format:"yyyy-MM-dd",unit:"天"}
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"DDDateRangeField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"日期区间"
  }
}
,
{
  key:"inTableField",value:function()
  {
    var e=this.getContainer().getParent();
    return e instanceof s.Component&&"TableField"===e.getComponentName()
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["daterangelabel","dateformat","required","duration","important","push","print"]
  }
}
,
{
  key:"stringifyLabel",value:function(e)
  {
    return null==e||""===e?"":e.join("-")
  }
}
,
{
  key:"uniqueLabel",value:function()
  {
for(var e=this.props.label?this.props.label.map(function(e)
{
  var t=/^(.*)\(\d+\)$/.exec(e);
  return t?t[1]:e
}
):this.getDefaultLabel(),t=1,n=e;
this.container.existsLabel(this.stringifyLabel(n),this);
)t+=1,n=e.map(function(e)
{
  return e+t
}
);
return n
}
}
,
{
key:"setProp",value:function(e,n)
{
var o=this;
if("push"===e&&n.pushSwitch)
{
  var a=this.form.pushToCalendarComponent;
  n&&"0"!==n.pushSwitch?a&&a!==this&&a.destroyed!==!0?(this.setProp("push",
  {
    pushSwitch:"0"
  }
),d["default"].pushCanlendarConfirm(function()
{
  o.form.pushToCalendarComponent=o,i(Object.getPrototypeOf(t.prototype),"setProp",o).call(o,"push",a.getProp("push")),a.setProp("push",
  {
    pushSwitch:"0"
  }
  )
}
)):(this.form.pushToCalendarComponent=this,i(Object.getPrototypeOf(t.prototype),"setProp",this).call(this,"push",n)):(i(Object.getPrototypeOf(t.prototype),"setProp",this).call(this,"push",n),a===this&&(this.form.pushToCalendarComponent=null))
}
else if("stat"===e&&this.inTableField())
{
var r=this.getContainer().getParent();
r.setStat(this.getId(),n),i(Object.getPrototypeOf(t.prototype),"setProp",this).call(this,e,n)
}
else i(Object.getPrototypeOf(t.prototype),"setProp",this).call(this,e,n)
}
}
,
{
key:"destroy",value:function()
{
i(Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.form.pushToCalendarComponent===this&&(this.form.pushToCalendarComponent=null)
}
}
,
{
key:"getComponentView",value:function()
{
return m
}
}
]),t
}
(s.Component);
t["default"]=h,s.ComponentRegistry.register("DDDateRangeField",
{
name:"日期区间",factory:h
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(6),c=n(12),u=o(c),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t="";
    return e.required&&(t="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,s.wordcut(e.label||"",u["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-camera"
    }
    )))
  }
}
]),t
}
(l.ComponentView),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&s.wordcount(e)>u["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字")
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return"图片"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return
    {
    }
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"DDPhotoField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"图片"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["label","required","print"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return p
  }
}
]),t
}
(l.Component);
t["default"]=f,l.ComponentRegistry.register("DDPhotoField",
{
name:"图片",factory:f
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(14),c=n(6),u=n(9),p=n(10),f=o(p),d=n(15),m=o(d),h=n(12),v=o(h),g=function(e)
{
function t(e)
{
  var n=this;
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);
  var o=this.component.getOwnContainer();
  this.state.items=o.getItems();
  var r=function()
  {
    n.setState(
    {
      items:o.getItems()
    }
    )
  };
  o.on("itemschange",r),this.stopChange=function()
  {
    o.off("itemschange",r)
  }
}
return r(t,e),i(t,[
{
  key:"componentWillUnmount",value:function()
  {
    l(Object.getPrototypeOf(t.prototype),"componentWillUnmount",this).call(this),this.stopChange&&this.stopChange()
  }
}
,
{
  key:"renderComponentView",value:function()
  {
var e=this.state.props,t=e.statField||[],n=[],o=this.state.items.map(function(e)
{
  if(!e)return null;
  var o=e.getComponentView(),a=e.getId();
  return t.indexOf(a)>=0&&n.push(e),o?React.createElement(o,
  {
    key:a,component:e
  }
  ):null
}
);
n=n.map(function(e)
{
  var t="MoneyField"===e.getComponentName()&&"1"!=e.getProp("notUpper"),n=e.getProp("durationLabel")||e.getProp("label"),o=e.getProp("unit");
  return o=o?"（"+o+"）":"",React.createElement("div",null,React.createElement("p",
  {
    className:"wf-componentview-statitem"
  }
  ,"总"+n+o+"：0"),t?React.createElement("p",
  {
    className:"wf-componentview-statitem"
  }
  ,"大写：壹万元整（示例）"):"")
}
);
var a=c.wordcut(e.label||"",v["default"].LABEL_WORD_LIMIT),r=c.wordcut(e.actionName||"增加"+a,v["default"].ACTION_WORD_LIMIT);
return React.createElement("div",
{
  className:"wf-componentview"
}
,React.createElement("label",
{
  className:"wf-componentview-label"
}
,a),React.createElement("div",
{
  className:"wf-componentview-area"+(o.length<1?" empty":"")
}
,o.length<1?React.createElement("span",
{
  className:"emptytip"
}
,"可拖入多个组件（不包含明细组件）"):null,React.createElement("div",
{
  className:"wf-componentgroup dropbody"
}
,o)),React.createElement("div",
{
  className:"wf-componentview-adddetail"
}
,r),n.length>0?React.createElement("div",
{
  className:"wf-componentview-stats"
}
,n):null)
}
}
]),t
}
(s.ComponentView),X=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    var e=this;
    this.tableContainer=new m["default"](this.schema.children||[],this.getForm(),this,15),this.tableContainer.on("capacitylimit",function(e)
    {
      f["default"].error("明细组件内最多可添加"+e+"个组件")
    }
    ),this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&c.wordcount(e)>v["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字"),this.addValidator("actionName",function(e)
    {
      return e&&c.wordcount(e)>v["default"].ACTION_WORD_LIMIT
    }
,"toolong","动作名称不能超过十个字"),this.props.statField=this.props.statField?this.props.statField.map(function(e)
{
  return e.id?e.id:e
}
):[],this.tableContainer.on("itemschange",function(t)
{
t&&t.forEach(function(t)
{
  var n=t.getId();
  t.getProp("stat")&&!e.inStat(n)&&e.setStat(n,!0)
}
)
}
)
}
}
,
{
key:"toJSON",value:function()
{
var e=l(Object.getPrototypeOf(t.prototype),"toJSON",this).call(this),n=this.getProp("statField")||[],o=[];
return e.children=this.tableContainer.getItems().map(function(e)
{
  var t=e.getId();
  return n.indexOf(t)>-1&&o.push(
  {
    id:t,label:e.getProp("durationLabel")||e.getProp("label"),unit:e.getProp("unit"),upper:"MoneyField"===e.getComponentName()&&"1"!=e.getProp("notUpper")
  }
  ),e.toJSON()
}
),e.props.statField=o,e
}
}
,
{
key:"valid",value:function()
{
var e=l(Object.getPrototypeOf(t.prototype),"valid",this).call(this);
return e?e:this.tableContainer.getItems().length<1?
{
  msg:"请添加组件到"+(this.props.label||"明细组件")+"中",component:this
}
:this.tableContainer.valid()
}
}
,
{
key:"inStat",value:function(e)
{
var t=this.getProp("statField");
return t&&t.indexOf(e)>-1
}
}
,
{
key:"setStat",value:function(e,t)
{
var n=this.getProp("statField")||[],o=n.indexOf(e);
0>o&&t?(n.push(e),this.setProp("statField",n)):o>=0&&!t&&(n.splice(o,1),this.setProp("statField",n))
}
}
,
{
key:"isForCondition",value:function()
{
var e=this,t=this.getProp("statField")||[],n=!1;
return 0!==t.length&&this.tableContainer.getItems().some(function(o)
{
  var a=o.getId();
  return t.indexOf(a)>-1&&(n=e.form.isConditionField(a))?!0:!1
}
),n
}
}
,
{
key:"setPublished",value:function(e)
{
l(Object.getPrototypeOf(t.prototype),"setPublished",this).call(this,e),e&&this.tableContainer.setPublished()
}
}
,
{
key:"getOwnContainer",value:function()
{
return this.tableContainer
}
}
,
{
key:"canRecieveDragable",value:function(e)
{
return this.draging||!this.isEnable()?!1:e instanceof s.Component&&this.tableContainer===e.getContainer()?!0:"TableField"!==e.getComponentName()
}
}
,
{
key:"getDroparea",value:function()
{
return this.droparea||(this.droparea=new u.Droparea(this.tableContainer)),this.droparea
}
}
,
{
key:"destroy",value:function()
{
l(Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.tableContainer.destroy()
}
}
,
{
key:"getDefaultLabel",value:function()
{
return"明细"
}
}
,
{
key:"getDefaultProps",value:function()
{
return
{
  actionName:"增加明细"
}
}
}
,
{
key:"getComponentName",value:function()
{
return"TableField"
}
}
,
{
key:"getName",value:function()
{
return"明细"
}
}
,
{
key:"getSupportSettings",value:function()
{
return["label","actionName"]
}
}
,
{
key:"getComponentView",value:function()
{
return g
}
}
]),t
}
(s.Component);
t["default"]=X,s.ComponentRegistry.register("TableField",
{
name:"明细",factory:X
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(6),c=n(12),u=o(c),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props;
    return React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-content"
    }
,e.content.split(/\n/).map(function(e)
{
  return React.createElement("p",null,e)
}
)))
}
}
]),t
}
(l.ComponentView),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    this.addValidator("content",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","说明文字不能为空"),this.addValidator("content",function(e)
    {
      return e&&s.wordcount(e)>u["default"].TEXTNOT_CONTENT_LIMIT
    }
    ,"toolong","说明文字不能超过"+u["default"].TEXTNOT_CONTENT_LIMIT+"个字")
  }
}
,
{
  key:"isSupportLabel",value:function()
  {
    return!1
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return{content:"请输入说明文字",notPrint:"1"}
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"TextNote"
  }
}
,
{
  key:"getName",value:function()
  {
    return"说明文字"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["content","link","display","print"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return p
  }
}
]),t
}
(l.Component);
t["default"]=f,l.ComponentRegistry.register("TextNote",
{
name:"说明文字",factory:f
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(20),c=o(s),u=n(6),p=n(12),f=o(p),d=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t=e.placeholder||"";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,u.wordcut(e.label||"",f["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,u.wordcut(t||"",f["default"].PLACEHOLDER_WORD_LIMIT))),"1"!=e.notUpper&&!this.component.inTableField()&&React.createElement("div",
    {
      className:"cnformat"
    }
    ,"大写：壹万元整（示例）"))
  }
}
]),t
}
(l.ComponentView),m=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"getDefaultLabel",value:function()
  {
    return"金额（元）"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return{placeholder:"请输入",stat:!0}
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"MoneyField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"金额"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return this.inTableField()?["label","placeholder","required","stat","cnformat","print","important"]:["label","placeholder","required","cnformat","print","important"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return d
  }
}
]),t
}
(c["default"]);
t["default"]=m,l.ComponentRegistry.register("MoneyField",
{
name:"金额",factory:m
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(14),c=n(6),u=n(12),p=o(u),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t="";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,c.wordcut(e.label||"",p["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-chakanfujian"
    }
    )))
  }
}
]),t
}
(s.ComponentView),d=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),l(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&c.wordcount(e)>p["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字")
  }
}
,
{
  key:"toJSON",value:function()
  {
    var e=i(Object.getPrototypeOf(t.prototype),"toJSON",this).call(this);
    try
    {
e.props.options=e.props.options.filter(function(e)
{
  return""!==e.trim()
}
)
}
catch(n)
{
}
return e
}
}
,
{
key:"getDefaultLabel",value:function()
{
return"附件"
}
}
,
{
key:"getDefaultProps",value:function()
{
return
{
}
}
}
,
{
key:"getComponentName",value:function()
{
return"DDAttachment"
}
}
,
{
key:"getName",value:function()
{
return"附件"
}
}
,
{
key:"getSupportSettings",value:function()
{
return["label","required","important","print"]
}
}
,
{
key:"getComponentView",value:function()
{
return f
}
}
]),t
}
(s.Component);
t["default"]=d,s.ComponentRegistry.register("DDAttachment",
{
name:"附件",factory:d
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=n(14),s=n(6),c=n(12),u=o(c),p=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"renderComponentView",value:function()
  {
    var e=this.state.props,t=e.placeholder||"";
    return e.required&&(t+="（必填）"),React.createElement("div",
    {
      className:"wf-componentview"+(e.important?" important-field":"")
    }
    ,React.createElement("div",
    {
      className:"wf-componentview-border"
    }
    ,React.createElement("label",
    {
      className:"wf-componentview-label"
    }
    ,s.wordcut(e.label||"",u["default"].LABEL_WORD_LIMIT)),React.createElement("span",
    {
      className:"wf-componentview-placeholder"
    }
    ,t),React.createElement("i",
    {
      className:"icon icon-enter"
    }
    )))
  }
}
]),t
}
(l.ComponentView),f=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"init",value:function()
  {
    this.addValidator("label",function(e)
    {
      return null==e||""===e.trim()
    }
    ,"empty","组件标题不能为空"),this.addValidator("label",function(e)
    {
      return e&&s.wordcount(e)>u["default"].LABEL_WORD_LIMIT
    }
    ,"toolong","组件标题不能超过十个字"),this.addValidator("placeholder",function(e)
    {
      return e&&s.wordcount(e)>u["default"].PLACEHOLDER_WORD_LIMIT
    }
    ,"toolong","组件提示文字不能超过二十个字")
  }
}
,
{
  key:"getDefaultLabel",value:function()
  {
    return"外部联系人"
  }
}
,
{
  key:"getDefaultProps",value:function()
  {
    return
    {
      placeholder:"请选择"
    }
  }
}
,
{
  key:"getComponentName",value:function()
  {
    return"ExternalContactField"
  }
}
,
{
  key:"getName",value:function()
  {
    return"外部联系人"
  }
}
,
{
  key:"getSupportSettings",value:function()
  {
    return["label","required","important","print"]
  }
}
,
{
  key:"getComponentView",value:function()
  {
    return p
  }
}
]),t
}
(l.Component);
t["default"]=f,l.ComponentRegistry.register("ExternalContactField",
{
name:"外部联系人",factory:f
}
),e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(5),c=o(s),u=n(3),p=o(u),f=n(9),d=function(e)
{
function t(e)
{
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.componentName=e.componentName,this.name=e.name,this.published=e.published?+e.published:0
}
return r(t,e),i(t,[
{
  key:"getComponentName",value:function()
  {
    return this.componentName
  }
}
,
{
  key:"getName",value:function()
  {
    return this.name
  }
}
,
{
  key:"getIcon",value:function()
  {
    return this.componentName.toLowerCase()
  }
}
,
{
  key:"getSource",value:function()
  {
    return
    {
      componentName:this.componentName
    }
  }
}
,
{
  key:"isNew",value:function()
  {
    return this.published&&+new Date-this.published<2592e6
  }
}
]),t
}
(f.Dragable);
t.Item=d;
var m=function(e)
{
function t(e)
{
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.item=this.props.item,this.form=this.props.form
}
return r(t,e),i(t,[
{
  key:"componentDidMount",value:function()
  {
    var e=this,t=this.form.getDragService(),n=c["default"](p["default"].findDOMNode(this)),o=function(n)
    {
      t.start(n,e.item)
    };
    n.on("mousedown",o),this.stopListen=function()
    {
      n.off("mousedown",o)
    }
  }
}
,
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    return p["default"].createElement("div",
    {
      className:"wf-widgetsitem"+(this.item.isNew()?" new":"")
    }
    ,p["default"].createElement("label",null,this.item.getName()),p["default"].createElement("i",
    {
      className:"widgeticon "+this.item.getIcon()
    }
    ))
  }
}
]),t
}
(p["default"].Component);
t.ItemView=m
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(3),c=o(s),u=function(e)
{
function t(e)
{
  var n=this;
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);
  var o=this.props.form,r=o.getContainer();
  this.state=
  {
    items:r.getItems()
  };
  var i=function()
  {
    n.setState(
    {
      items:r.getItems()
    }
    )
  };
  r.on("itemschange",i),this.stopListen=function()
  {
    r.off("itemschange",i)
  }
  ,o.setBoundary(this)
}
return r(t,e),i(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
var e=this.state.items.map(function(e)
{
  var t=e.getComponentView();
  return t?c["default"].createElement(t,
  {
    key:e.getId(),component:e
  }
  ):null
}
);
return c["default"].createElement("div",
{
  className:"wf-formcanvas"
}
,c["default"].createElement("div",
{
  className:"wf-formcanvas-title"
}
,this.props.form.props.title),c["default"].createElement("div",
{
  className:"wf-formcanvas-inner"
}
,c["default"].createElement("div",
{
  className:"wf-formcanvas-body dropbody"+(e.length<1?" empty":"")
}
,e)))
}
}
]),t
}
(c["default"].Component);
t["default"]=u,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
function r(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),l=function(e,t,n)
{
for(var o=!0;o;)
{
  var a=e,r=t,i=n;
  l=c=s=void 0,o=!1;
  var l=Object.getOwnPropertyDescriptor(a,r);
  if(void 0!==l)
  {
    if("value"in l)return l.value;
    var s=l.get;
    return void 0===s?void 0:s.call(i)
  }
  var c=Object.getPrototypeOf(a);
  if(null===c)return void 0;
  e=c,t=r,n=i,o=!0
}
}
,s=n(3),c=o(s),u=n(5),p=o(u),f=n(34),d=o(f),m=n(11),h=o(m),v=function(e)
{
function t(e)
{
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)
}
return r(t,e),i(t,[
{
  key:"componentDidMount",value:function()
  {
    var e=this;
    p["default"](c["default"].findDOMNode(this)).on("click",".tabitem",function(t)
    {
      var n=p["default"](t.currentTarget).data("tabname");
      e.props.tabWillChange(n)
    }
    )
  }
}
,
{
  key:"render",value:function()
  {
    return c["default"].createElement("div",
    {
      className:"wf-panel-tab"
    }
    ,c["default"].createElement("a",
    {
      "data-tabname":"component",className:"tabitem"+("form"!==this.props.current?" current":"")
    }
    ,"控件设置"),c["default"].createElement("a",
    {
      "data-tabname":"form",className:"tabitem"+("form"===this.props.current?" current":"")
    }
    ,"审批设置"))
  }
}
]),t
}
(c["default"].Component),g=function(e)
{
function t()
{
  a(this,t),null!=e&&e.apply(this,arguments)
}
return r(t,e),i(t,[
{
  key:"render",value:function()
  {
    var e=this.props.component;
    return c["default"].createElement("div",
    {
      className:"wf-form wf-widgetsettings"
    }
,e.getSupportSettings().map(function(t)
{
  var n=d["default"].getSetting(t);
  return n?c["default"].createElement(n,
  {
    key:t+e.getId(),component:e
  }
  ):null
}
))
}
}
]),t
}
(c["default"].Component),X=function(e)
{
function t(e)
{
  var n=this;
  a(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    currentTab:"form",component:this.props.form.currentComponent
  }
  ,this.props.form.on("activechange",function(e)
  {
    n.setState(
    {
      currentTab:e?"component":"form",component:e
    }
    )
  }
  )
}
return r(t,e),i(t,[
{
  key:"tabWillChange",value:function(e)
  {
    this.setState(
    {
      currentTab:e
    }
    )
  }
}
,
{
  key:"render",value:function()
  {
    var e=void 0;
    return e="component"===this.state.currentTab?this.state.component?c["default"].createElement(g,
    {
      component:this.state.component
    }
    ):null:c["default"].createElement(h["default"],
    {
      form:this.props.form
    }
    ),c["default"].createElement("div",
    {
      className:"wf-panel wf-settingpanel"
    }
    ,c["default"].createElement(v,
    {
      current:this.state.currentTab,tabWillChange:this.tabWillChange.bind(this)
    }
    ),e)
  }
}
]),t
}
(c["default"].Component);
t["default"]=X,e.exports=t["default"]
}
,function(e,t,n)
{
"use strict";
function o(e)
{
  return e&&e.__esModule?e:
  {
    "default":e
  }
}
function a(e,t)
{
  if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);
  e.prototype=Object.create(t&&t.prototype,
  {
    constructor:
    {
      value:e,enumerable:!1,writable:!0,configurable:!0
    }
  }
  ),t&&(e.__proto__=t)
}
function r(e,t)
{
  if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
Object.defineProperty(t,"__esModule",
{
  value:!0
}
);
var i=function(e,t,n)
{
  for(var o=!0;o;)
  {
    var a=e,r=t,i=n;
    l=c=s=void 0,o=!1;
    var l=Object.getOwnPropertyDescriptor(a,r);
    if(void 0!==l)
    {
      if("value"in l)return l.value;
      var s=l.get;
      return void 0===s?void 0:s.call(i)
    }
    var c=Object.getPrototypeOf(a);
    if(null===c)return void 0;
    e=c,t=r,n=i,o=!0
  }
}
,l=function()
{
function e(e,t)
{
  for(var n=0;n<t.length;n++)
  {
    var o=t[n];
    o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)
  }
}
return function(t,n,o)
{
  return n&&e(t.prototype,n),o&&e(t,o),t
}
}
(),s=n(8),c=o(s),u=n(6),p=n(12),f=o(p),d=function()
{
function e()
{
  r(this,e),this.registry=
  {
  }
}
return l(e,[
{
  key:"getSetting",value:function(e)
  {
    return this.registry[e]
  }
}
,
{
  key:"register",value:function(e,t)
  {
    this.registry[e]=t
  }
}
]),e
}
(),m=new d,h="1",v="2",g="3",X=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.label=e.label||"label",this.state=
  {
    validstatus:this.props.component.getValidStatus(this.label)
  };
  var o=function()
  {
    n.setState(
    {
      validstatus:n.props.component.getValidStatus(n.label)
    }
    )
  };
  this.props.component.on("validstatus",o),this.stopListen=function()
  {
    n.props.component.off("validstatus",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t="",n="最多"+f["default"].LABEL_WORD_LIMIT+"个字";
    return"duplicate"===this.state.validstatus?(t="error-duplicate",n="标题冲突"):"empty"===this.state.validstatus?(t="error-empty",n="标题不能为空"):"toolong"===this.state.validstatus&&(t="error-toolong"),React.createElement("div",
    {
      className:"wf-field wf-setting-label"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"标题",React.createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,n)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"text",className:t,defaultValue:this.props.component.getProp(this.label),onChange:function(t)
      {
        e.props.component.setProp(e.label,t.target.value)
      }
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("label",X);
var y=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    validstatus:this.props.component.getValidStatus("placeholder")
  };
  var o=function()
  {
    n.setState(
    {
      validstatus:n.props.component.getValidStatus("placeholder")
    }
    )
  };
  this.props.component.on("validstatus",o),this.stopListen=function()
  {
    n.props.component.off("validstatus",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t="",n="最多"+f["default"].PLACEHOLDER_WORD_LIMIT+"个字";
    return"toolong"===this.state.validstatus&&(t="error-toolong"),React.createElement("div",
    {
      className:"wf-field wf-setting-placeholder"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"提示文字",React.createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,n)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"text",className:t,defaultValue:this.props.component.getProp("placeholder"),onChange:function(t)
      {
        e.props.component.setProp("placeholder",t.target.value)
      }
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("placeholder",y);
var b=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    validstatus:this.props.component.getValidStatus("unit")
  };
  var o=function()
  {
    n.setState(
    {
      validstatus:n.props.component.getValidStatus("unit")
    }
    )
  };
  this.props.component.on("validstatus",o),this.stopListen=function()
  {
    n.props.component.off("validstatus",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t="",n="最多"+f["default"].UNIT_WORD_LIMIT+"个字";
    return"toolong"===this.state.validstatus&&(t="error-toolong"),React.createElement("div",
    {
      className:"wf-field wf-setting-placeholder"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"单位",React.createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,n)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"text",className:t,defaultValue:this.props.component.getProp("unit"),onChange:function(t)
      {
        e.props.component.setProp("unit",t.target.value)
      }
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("unit",b);
var w=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    validstatus:this.props.component.getValidStatus("content")
  };
  var o=function()
  {
    n.setState(
    {
      validstatus:n.props.component.getValidStatus("content")
    }
    )
  };
  this.props.component.on("validstatus",o),this.stopListen=function()
  {
    n.props.component.off("validstatus",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t="",n="最多"+f["default"].TEXTNOT_CONTENT_LIMIT+"个字";
    return"empty"===this.state.validstatus?(t="error-empty",n="说明文字不能为空"):"toolong"===this.state.validstatus&&(t="error-toolong"),React.createElement("div",
    {
      className:"wf-field wf-setting-content"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"说明文字",React.createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,n)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("textarea",
    {
      type:"text",defaultValue:this.props.component.getProp("content"),onChange:function(t)
      {
        e.props.component.setProp("content",t.target.value)
      }
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("content",w);
var k=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-display"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"可以输入链接跳转地址"),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("textarea",
    {
      type:"text",defaultValue:this.props.component.getProp("link"),onChange:function(t)
      {
        e.props.component.setProp("link",t.target.value)
      }
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("link",k);
var E=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-display"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"显示"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",value:"1",defaultChecked:this.props.component.getProp("hiddenInApprovalDetail"),onChange:function(t)
      {
        e.props.component.setProp("hiddenInApprovalDetail",t.target.checked)
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddleverticalmiddle"
    }
    ,"不在审批页显示")))
  }
}
]),t
}
(React.Component);
m.register("display",E);

var O=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this.props.component,t=e.inTableField(),n=1===this.props.component.isForCondition()&&!t;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-required"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"验证"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",value:"1",disabled:n,defaultChecked:e.getProp("required"),onChange:function(t)
      {
        e.setProp("required",t.target.checked)
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"必填"),n&&React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ,"（该组件已被设置为审批条件，不可取消勾选）")))
  }
}
]),t
}
(React.Component);
m.register("required",O);
var N=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this.props.component;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-required"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"同步到考勤"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",value:"1",defaultChecked:e.getProp("pushToAttendance"),onChange:function(t)
      {
        e.setProp("pushToAttendance",t.target.checked)
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"开启")))
  }
}
]),t
}
(React.Component);
m.register("sync",N);
var C=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-print"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"打印"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",value:"1",defaultChecked:"1"===this.props.component.getProp("notPrint")?!1:!0,onChange:function(t)
      {
        e.props.component.setProp("notPrint",t.target.checked?"0":"1")
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"参与打印"),React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ,"（如不勾选，打印时不显示该项）")))
  }
}
]),t
}
(React.Component);
m.register("print",C);
var _=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    checked:e.component.getProp("duration")
  };
  var o=this,a=function()
  {
    var t=e.component.getProp("notifyDurationChange");
    t&&!e.component.getProp("duration")&&(e.component.setProp("duration",!0),e.component.setProp("durationLabel",e.component.getProp("durationLabel")||"时长"),e.component.setProp("stat",!0),o.setState(
    {
      checked:!0
    }
    ))
  };
  this.props.component.on("propschange",a),this.stopListen=function()
  {
    n.props.component.off("propschange",a)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillReceiveProps",value:function(e)
  {
    console.log("nextProps:"+e)
  }
}
,
{
  key:"onCheckChange",value:function(e)
  {
    var t=e.target.checked;
    this.setState(
    {
      checked:t
    }
    ),this.props.component.setProp("duration",t);
    var n="";
    t?n=this.props.component.getProp("durationLabel")||"时长":this.props.component.setProp("stat",!1),this.props.component.setProp("durationLabel",n)
  }
}
,
{
  key:"render",value:function()
  {
    var e=this.props.component.inTableField(),t=1===this.props.component.isForCondition()&&!e;
    return console.log("duration render:"+this.state.checked),React.createElement("div",
    {
      className:"wf-field-group"
    }
    ,React.createElement("div",
    {
      className:"wf-field"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"自动计算时长")),React.createElement("div",
    {
      className:"wf-field wf-setting-duration"
    }
    ,React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",value:"1",disabled:t,defaultChecked:this.state.checked,onChange:this.onCheckChange.bind(this)
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"开启"),React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ),t&&React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ,"（该组件已被设置为审批条件，不可取消勾选）"))),this.state.checked?React.createElement("div",
    {
      className:"wf-setting-duration-label"
    }
    ,React.createElement(X,
    {
      component:this.props.component,label:"durationLabel"
    }
    ),this.props.component.inTableField()?React.createElement(R,
    {
      component:this.props.component
    }
    ):""):"")
  }
}
]),t
}
(React.Component);
m.register("duration",_);
var P=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);
  var o=this.props.component.props.push,a=this.props.component.getProp("pushToCalendar");
  if(!o&&a?(o=
  {
  }
  ,o.pushSwitch=a):a||o?!a&&o?this.props.component.setProp("pushToCalendar",o.pushSwitch?o.pushSwitch:"0"):o&&a&&this.props.component.setProp("pushToCalendar",o.pushSwitch):this.props.component.setProp("pushToCalendar","0"),(!o||!o.pushTag||""===o.pushTag)&&window.__FormTitle__)
  {
    var l=window.__FormTitle__.length>5?window.__FormTitle__.substring(0,5):window.__FormTitle__,s=this.getPushProps();
    s.pushTag=l,this.savePushProps(s)
  }
  var c=window.isAttendanceCorp;
  if(c&&o&&!o.attendanceRule)
  {
    var s=this.getPushProps();
    s.attendanceRule=1,this.savePushProps(s)
  }
  this.state=
  {
    pushSwitch:o&&o.pushSwitch&&o.pushSwitch===h,isAttendanceCorp:o&&c&&c===h
  };
  var u=function()
  {
    var e=n.getPushProps();
    e||(e=
    {
    }
    );
    var t=window.isAttendanceCorp;
    if(e.pushSwitch&&e.pushTag&&!e.attendanceRule)
    {
      var o=n.getPushProps();
      o.attendanceRule=n.recommendAttendanceRule(e.pushTag),n.savePushProps(o)
    }
    n.setState(
    {
      pushSwitch:e.pushSwitch?e.pushSwitch===h:!1,isAttendanceCorp:t?t===h:!1
    }
    )
  };
  this.props.component.on("propschange",u),this.stopListen=function()
  {
    n.props.component.off("propschange",u)
  }
}
return a(t,e),l(t,[
{
  key:"recommendAttendanceRule",value:function(e)
  {
    return e?e.indexOf("请假")>=0?h:e.indexOf("出差")>=0||e.indexOf("外出")>=0?v:e.indexOf("加班")>=0?g:h:h
  }
}
,
{
  key:"componentDidMount",value:function()
  {
this.state.isAttendanceCorp||$("#attendanceIcon").hover(function()
{
  $("#attendanceTips").show()
}
,function()
{
  $("#attendanceTips").hide()
}
)
}
}
,
{
key:"componentWillUnmount",value:function()
{
this.stopListen&&this.stopListen()
}
}
,
{
key:"getPushProps",value:function()
{
return this.props.component.getProp("push")||
{
}
}
}
,
{
key:"savePushProps",value:function(e)
{
console.log("save:"+JSON.stringify(e)),this.props.component.setProp("push",e)
}
}
,
{
key:"showGuide",value:function()
{
window.open("https://csmobile.alipay.com/detailSolution.htm?knowledgeType=1&scene=dd_sp&questionId=201602046059","_blank")
}
}
,
{
key:"render",value:function()
{
var e=this,t="",n=void 0,o="";
this.props.component.getProp("push")&&(n=this.props.component.getProp("push").pushTag),this.getPushProps()&&this.getPushProps().pushSwitch&&"1"===this.getPushProps().pushSwitch&&(!n||n.length<1?(t="error-empty",o="员工状态不能为空"):n.length>5&&(t="error-toolong",o="字符长度不能超过5个字"));
var a=this;
return React.createElement("div",
{
  className:"wf-field-group"
}
,React.createElement("div",
{
  className:"wf-field"
}
,React.createElement("div",
{
  className:"fieldname"
}
,"设置为员工状态",React.createElement("a",
{
  href:"#"
}
,React.createElement("img",
{
  className:"wf-tips",src:"https://gw.alicdn.com/tps/TB1b8LwKFXXXXaRXFXXXXXXXXXX-200-200.png",onClick:function(t)
  {
    e.showGuide()
  }
}
))),React.createElement("label",
{
  className:"fieldblock"
}
,React.createElement("input",
{
  type:"checkbox",value:"1",checked:this.state.pushSwitch,onChange:function(t)
  {
    var n=e.getPushProps();
    n.pushSwitch=t.target.checked?"1":"0",console.log("duration:"+a.props.component.getProp("duration")),t.target.checked?a.props.component.setProp("notifyDurationChange",!0):a.props.component.setProp("notifyDurationChange",!1),e.savePushProps(n),"1"===n.pushSwitch?$("#pushExpand").show():$("#pushExpand").hide(),e.props.component.setProp("pushToCalendar",n.pushSwitch)
  }
}
),React.createElement("span",
{
  className:"verticalmiddle wf-pushinfo"
}
,"开启"))),this.state.pushSwitch?React.createElement("div",
{
  className:"wf-item-group",id:"pushExpand"
}
,React.createElement("div",
{
  className:"wf-field "
}
,React.createElement("span",
{
  className:"wf-input-tips"
}
,"请输入员工状态的显示名称(最多5个字)"),React.createElement("span",
{
  className:"fieldinfo "+t
}
,o)),React.createElement("div",
{
  className:"wf-field fieldblock",id:"pushLabel"
}
,React.createElement("input",
{
  type:"text",className:t,ref:"pushLabel",value:n,onChange:function(t)
  {
    var n=e.getPushProps();
    n.pushTag=e.refs.pushLabel.getDOMNode().value,e.savePushProps(n)
  }
}
)),React.createElement("div",
{
  className:"wf-field fieldblock wf-push-app"
}
,React.createElement("span",
{
  className:"fieldinfo verticalmiddle wf-app-push"
}
,"同步推送:"),React.createElement("div",
{
  className:"wf-icon-group"
}
,React.createElement("div",
{
  className:"wf-icon-item"
}
,React.createElement("a",
{
  href:"#"
}
,React.createElement("img",
{
  className:"wf-icon",id:"attendanceIcon",src:this.state.isAttendanceCorp?"https://gw.alicdn.com/tps/TB1FG50KFXXXXXfXVXXXXXXXXXX-200-200.png":"https://gw.alicdn.com/tps/TB1UmvYKFXXXXbGXXXXXXXXXXXX-200-200.png",onClick:function(t)
  {
    e.showGuide()
  }
}
)),React.createElement("span",
{
  className:"verticalmiddle wf-icon-name"
}
,"考勤"),React.createElement("span",
{
  className:"tabitem current",id:"attendanceTips"
}
,"你的企业还未开通考勤,请到应用中心开通考勤")),React.createElement("div",
{
  className:"wf-icon-item"
}
,React.createElement("a",
{
  href:"#"
}
,React.createElement("img",
{
  className:"wf-icon",src:"https://gw.alicdn.com/tps/TB1R0aRKFXXXXXPaXXXXXXXXXXX-200-200.png",onClick:function(t)
  {
    e.showGuide()
  }
}
)),React.createElement("span",
{
  className:"verticalmiddle wf-icon-name"
}
,"联系人")),React.createElement("div",
{
  className:"wf-icon-item"
}
,React.createElement("a",
{
  href:"#"
}
,React.createElement("img",
{
  className:"wf-icon",src:"https://gw.alicdn.com/tps/TB1Fq6gKFXXXXXEXXXXXXXXXXXX-200-200.png",onClick:function(t)
  {
    e.showGuide()
  }
}
)),React.createElement("span",
{
  className:"verticalmiddle wf-icon-name"
}
,"管理日历")))),this.state.isAttendanceCorp?React.createElement("div",
{
  className:"wf-field fieldblock wf-setting-push"
}
,React.createElement("span",
{
  className:"fieldinfo verticalmiddle"
}
,"将时长计入考勤"),React.createElement("label",
{
  className:"fieldblock wf-setting-push-radio"
}
,React.createElement("input",
{
  type:"radio",name:"dateformatPush",defaultChecked:this.getPushProps().attendanceRule==h,value:"",onChange:function(t)
  {
    var n=e.getPushProps();
    n.attendanceRule=h,e.savePushProps(n)
  }
}
),React.createElement("span",
{
  className:"fieldinfo"
}
,"计为请假类,将减少出勤统计时间")),React.createElement("label",
{
  className:"fieldblock"
}
,React.createElement("input",
{
  type:"radio",name:"dateformatPush",defaultChecked:this.getPushProps().attendanceRule==v,value:"yyyy-MM-dd HH:mm",onChange:function(t)
  {
    var n=e.getPushProps();
    n.attendanceRule=v,e.savePushProps(n)
  }
}
),React.createElement("span",
{
  className:"fieldinfo"
}
,"计为出差,外出类, 将不会减少出勤统计时间")),React.createElement("label",
{
  className:"fieldblock"
}
,React.createElement("input",
{
  type:"radio",name:"dateformatPush",defaultChecked:this.getPushProps().attendanceRule==g,value:"yyyy-MM-dd HH:mm",onChange:function(t)
  {
    var n=e.getPushProps();
    n.attendanceRule=g,e.savePushProps(n)
  }
}
),React.createElement("span",
{
  className:"fieldinfo"
}
,"计为加班类,将增加出勤统计时间"))):null):null)
}
}
]),t
}
(React.Component);
m.register("push",P);
var R=function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this.props.component,t=e.inTableField(),n=1===e.isForCondition()&&t;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-stat"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"统计"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",disabled:n,defaultChecked:!!e.getProp("stat"),onChange:function(t)
      {
        e.setProp("stat",t.target.checked)
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"明细内部统计"),n?React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ,"（该组件已被设置为审批条件，不可取消勾选，该字段将在明细组件内参与统计求和）"):React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ,"（如勾选，该字段将在明细组件内参与统计求和）")))
  }
}
]),t
}
(React.Component);
m.register("stat",R);
var T=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
  };
  var o=function()
  {
    n.setState(
    {
    }
    )
  };
  this.props.component.on("propschange",o),this.stopListen=function()
  {
    n.props.component.off("propschange",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t=this.props.component.inTableField()&&!this.props.component.getProp("stat"),n=!t&&"1"!=this.props.component.getProp("notUpper");
    return React.createElement("div",
    {
      className:"wf-field wf-setting-cnformat"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"大写"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",disabled:t,checked:n,onChange:function(t)
      {
        e.props.component.setProp("notUpper",t.target.checked?"0":"1")
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"显示大写"),React.createElement("span",
    {
      className:"fieldinfo verticalmiddle"
    }
    ,"（输入数字后自动显示大写）")))
  }
}
]),t
}
(React.Component);
m.register("cnformat",T);
var L=(function(e)
{
function t()
{
  r(this,t),null!=e&&e.apply(this,arguments)
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-important"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"视觉"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"checkbox",value:"1",defaultChecked:this.props.component.getProp("important"),onChange:function(t)
      {
        e.props.component.setProp("important",t.target.checked)
      }
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"重要信息")))
  }
}
]),t
}
(React.Component),function(e)
{
function t(e)
{
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);
  var n=this.props.component.getProp("format");
  "yyyy-MM-dd HH:mm"!==n&&this.props.component.getProp("unit")||this.props.component.setProp("unit","小时"),"yyyy-MM-dd"!==n&&this.props.component.getProp("unit")||this.props.component.setProp("unit","天")
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-dateformat"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"日期类型"),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"radio",name:"dateformat",onClick:function(t)
      {
        e.props.component.setProp("format","yyyy-MM-dd HH:mm"),e.props.component.setProp("unit","小时")
      }
      ,defaultChecked:"yyyy-MM-dd HH:mm"===this.props.component.getProp("format"),value:"yyyy-MM-dd HH:mm"
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"年-月-日 时:分")),React.createElement("label",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"radio",name:"dateformat",onClick:function(t)
      {
        e.props.component.setProp("format","yyyy-MM-dd"),e.props.component.setProp("unit","天")
      }
      ,defaultChecked:"yyyy-MM-dd"===this.props.component.getProp("format"),value:"yyyy-MM-dd"
    }
    ),React.createElement("span",
    {
      className:"verticalmiddle"
    }
    ,"年-月-日")))
  }
}
]),t
}
(React.Component));
m.register("dateformat",L);
var S=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    validstatus:this.props.component.getValidStatus("label")
  };
  var o=function()
  {
    n.setState(
    {
      validstatus:n.props.component.getValidStatus("label")
    }
    )
  };
  this.props.component.on("validstatus",o),this.stopListen=function()
  {
    n.props.component.off("validstatus",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t="",n="",o="最多"+f["default"].LABEL_WORD_LIMIT+"个字",a="最多"+f["default"].LABEL_WORD_LIMIT+"个字",r=this.props.component.getProp("label")||[];
    if("duplicate"===this.state.validstatus)t="error-duplicate",n="error-duplicate",o="标题冲突",a="";
    else
    {
      var i=r[0],l=r[1];
      i&&""!==i.trim()?u.wordcount(i)>f["default"].LABEL_WORD_LIMIT&&(t="error-toolong"):(o="标题1不能为空",t="error-empty"),l&&""!==l.trim()?u.wordcount(l)>f["default"].LABEL_WORD_LIMIT&&(n="error-toolong"):(a="标题2不能为空",n="error-empty")
    }
    var s=function()
    {
      var t=e.refs.startLabel.getDOMNode().value,n=e.refs.endLabel.getDOMNode().value,o=[t,n];
      e.props.component.setProp("label",o),e.setState(
      {
      }
      )
    };
    return React.createElement("div",
    {
      className:"wf-field wf-setting-daterangelabel"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"标题1",React.createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,o)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"text",className:t,ref:"startLabel",defaultValue:r[0],onChange:s
    }
    )),React.createElement("div",
    {
      className:"fieldname"
    }
    ,"标题2",React.createElement("span",
    {
      className:"fieldinfo "+n
    }
    ,a)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"text",className:n,ref:"endLabel",defaultValue:r[1],onChange:s
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("daterangelabel",S);
var I=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state=
  {
    validstatus:this.props.component.getValidStatus("actionName")
  };
  var o=function()
  {
    n.setState(
    {
      validstatus:n.props.component.getValidStatus("actionName")
    }
    )
  };
  this.props.component.on("validstatus",o),this.stopListen=function()
  {
    n.props.component.off("validstatus",o)
  }
}
return a(t,e),l(t,[
{
  key:"componentWillUnmount",value:function()
  {
    this.stopListen&&this.stopListen()
  }
}
,
{
  key:"render",value:function()
  {
    var e=this,t="",n="最多"+f["default"].ACTION_WORD_LIMIT+"个字";
    return"toolong"===this.state.validstatus&&(t="error-toolong"),React.createElement("div",
    {
      className:"wf-field wf-setting-placeholder"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"动作名称",React.createElement("span",
    {
      className:"fieldinfo "+t
    }
    ,n)),React.createElement("div",
    {
      className:"fieldblock"
    }
    ,React.createElement("input",
    {
      type:"text",className:t,defaultValue:this.props.component.getProp("actionName"),onChange:function(t)
      {
        e.props.component.setProp("actionName",t.target.value)
      }
    }
    )))
  }
}
]),t
}
(React.Component);
m.register("actionName",I);
var D=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.option=this.props.option,this.state=
  {
    conflict:this.option.isConflict()
  }
  ,this.option.on("conflictchange",function(e)
  {
    n.setState(
    {
      conflict:e
    }
    )
  }
  )
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this,t="";
    return this.state.conflict&&(t="error-warn"),React.createElement("div",
    {
      className:"fieldblock wf-setting-option"
    }
    ,React.createElement("input",
    {
      type:"text",className:t,defaultValue:this.option.getValue(),maxLength:20,onChange:function(t)
      {
        e.option.changeValue(t.target.value)
      }
    }
    ),React.createElement("a",
    {
      className:"action action-del",onClick:function()
      {
        e.option.remove()
      }
    }
    ,React.createElement("i",
    {
      className:"icon icon-minus"
    }
    )),React.createElement("a",
    {
      className:"action action-add",onClick:function()
      {
        e.option.add()
      }
    }
    ,React.createElement("i",
    {
      className:"icon icon-plus"
    }
    )))
  }
}
]),t
}
(React.Component),M=function(e)
{
function t(e,n)
{
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),
  this.options=e,this.value=n,this.id=parseInt(+new Date*Math.random()).toString(36).toUpperCase()
}
return a(t,e),l(t,[
{
  key:"getId",value:function()
  {
    return this.id
  }
}
,
{
  key:"remove",value:function()
  {
    this.options.removeOption(this)
  }
}
,
{
  key:"add",value:function()
  {
    this.options.addOptionAfter(this)
  }
}
,
{
  key:"setConflict",value:function(e)
  {
    this.conflictstatus&&!e?(this.conflictstatus=0,this.emit("conflictchange",0)):!this.conflictstatus&&e&&(this.conflictstatus=1,this.emit("conflictchange",1))
  }
}
,
{
  key:"isConflict",value:function()
  {
    return this.conflictstatus
  }
}
,
{
  key:"changeValue",value:function(e)
  {
    e!==this.value&&(this.value=e,this.options.changeValue())
  }
}
,
{
  key:"getValue",value:function()
  {
    return this.value
  }
}
]),t
}
(c["default"]),x=function(e)
{
function t(e)
{
  var n=this;
r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.component=e,this.options=(e.getProp("options")||["选项"]).map(function(e)
{
  return new M(n,e)
}
)
}
return a(t,e),l(t,[
{
key:"addOptionAfter",value:function(e)
{
  var t=this.options.indexOf(e);
  if(!(0>t))
  {
for(var n="选项",o=1,a=n+o;this.options.some(function(e)
{
  return e.getValue()===a
}
);
)o+=1,a=n+o;
e=new M(this,a),this.options.splice(t+1,0,e),this.component.setProp("options",this.options.map(function(e)
{
  return e.getValue()
}
)),this.emit("optionschange")
}
}
}
,
{
key:"removeOption",value:function(e)
{
var t=this.options.indexOf(e);
0>t||(this.options.splice(t,1),this.component.setProp("options",this.options.map(function(e)
{
  return e.getValue()
}
)),this.emit("optionschange"),this.checkConflict())
}
}
,
{
key:"changeValue",value:function()
{
this.component.setProp("options",this.options.map(function(e)
{
  return e.getValue()
}
)),this.checkConflict()
}
}
,
{
key:"checkConflict",value:function()
{
var e=
{
};
this.options.forEach(function(t)
{
  var n=t.getValue();
  n in e?e[n].push(t):e[n]=[t]
}
);
var t=0;
for(var n in e)e[n].length>1?(e[n].forEach(function(e)
{
  return e.setConflict(1)
}
),t=1):e[n][0].setConflict(0);
this.emit("conflictchange",t)
}
}
,
{
key:"getLength",value:function()
{
return this.options.length
}
}
]),t
}
(c["default"]),j=function(e)
{
function t(e)
{
  var n=this;
  r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.options=new x(this.props.component),this.state=
  {
    length:this.options.getLength(),conflict:0
  }
  ,this.options.on("optionschange",function()
  {
    n.setState(
    {
      length:n.options.getLength()
    }
    )
  }
  ),this.options.on("conflictchange",function(e)
  {
    n.setState(
    {
      conflict:e
    }
    )
  }
  )
}
return a(t,e),l(t,[
{
  key:"render",value:function()
  {
    var e=this.state.conflict?"选项重复":"最多"+f["default"].MAX_OPTIONS+"项，每项最多20个字",t=this.props.component,n="";
    this.state.length<=1?n="limitdel":this.state.length>=f["default"].MAX_OPTIONS&&(n="limitadd");
    var o=t.inTableField(),a=1===t.isForCondition()&&!o;
    return React.createElement("div",
    {
      className:"wf-field wf-setting-options"
    }
    ,React.createElement("div",
    {
      className:"fieldname"
    }
    ,"选项",React.createElement("span",
    {
      className:"fieldinfo"+(this.state.conflict?" error-warn":"")
    }
    ,e)),React.createElement("div",
    {
      className:n
    }
,this.options.options.map(function(e)
{
  return React.createElement(D,
  {
    key:e.getId(),option:e
  }
  )
}
)),a&&React.createElement("div",
{
  className:"wf-conditionwarn"
}
,React.createElement("i",
{
  className:"icon icon-error"
}
)," 该单选组件已被设置为审批条件，如果调整了选项请同时到“审批人设置”中调整审批人。"))
}
}
]),t
}
(React.Component);
m.register("options",j),t["default"]=m,e.exports=t["default"]
}
]);
