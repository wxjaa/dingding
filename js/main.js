!function e(t,a,r)
{
function n(o,s)
{
  if(!a[o])
  {
    if(!t[o])
    {
      var c="function"==typeof require&&require;
      if(!s&&c)return c(o,!0);
      if(i)return i(o,!0);
      throw new Error("Cannot find module '"+o+"'")
    }
    var l=a[o]=
    {
      exports:
      {
      }
    };
    t[o][0].call(l.exports,function(e)
    {
      var a=t[o][1][e];
      return n(a?a:e)
    }
    ,l,l.exports,e,t,a,r)
  }
  return a[o].exports
}
for(var i="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);
return n
}
(
{
1:[function(e,t,a)
{
  "use strict";
  var r=location.search,n=
  {
    VERSION:
    {
      DEFAULT:"7",MANUAL:9,MANUAL_TIMEOUT:7
    }
    ,TIME:
    {
      MANUAL_TIMEOUT:6e3
    }
    ,RATE:
    {
      AHOT_SAMPLING:.1
    }
    ,DEBUG:
    {
      AHOT:r.indexOf("ap-debug-ahot")>-1,ANTI_SPAM:r.indexOf("ap-debug-antispam")>-1,LS_PROXY:r.indexOf("ap-debug-lsproxy")>-1
    }
  }
  ,i=
  {
    NAME_STORAGE:
    {
      REFERRER:"wm_referrer",REFERRER_PV_ID:"refer_pv_id"
    }
  };
  a.COMFIG=n,a.KEY=i
}
,
{
}
],2:[function(require,module,exports)
{
  !function()
  {
function tryToDecodeURIComponent(e,t)
{
  var a=t||"";
  if(e)try
  {
    a=decodeURIComponent(e)
  }
  catch(r)
  {
  }
  return a
}
function obj2param(e)
{
  var t,a,r=[];
  for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],r.push(util.isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a)));return r.join("&")
}
function arr2param(e)
{
  var t,a,r,n=[],i=e.length;
  for(r=0;i>r;r++)t=e[r][0],a=e[r][1],n.push(util.isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a));
  return n.join("&")
}
function arr2obj(e)
{
  var t,a,r,n=
  {
  }
  ,i=e.length;
  for(r=0;i>r;r++)t=e[r][0],a=e[r][1],n[t]=a;
  return n
}
function objSimpleClone(e)
{
  var t,a=
  {
  };
  for(t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a
}
function param2obj(e)
{
  for(var t=e.split("&"),a=0,r=t.length,n=
  {
  };
  r>a;
  a++)
  {
    var i=t[a],o=i.indexOf("="),s=i.substring(0,o),c=i.substring(o+1);
    n[s]=tryToDecodeURIComponent(c)
  }
  return n
}
function isNumber(e)
{
  return"number"==typeof e
}
function isUnDefined(e)
{
  return"undefined"==typeof e
}
function isString(e)
{
  return"string"==typeof e
}
function isArray(e)
{
  return"[object Array]"===Object.prototype.toString.call(e)
}
function tryToGetAttribute(e,t)
{
  return e&&e.getAttribute?e.getAttribute(t)||"":""
}
function tryToGetHref(e)
{
  var t;
  try
  {
    t=util.trim(e.getAttribute("href",2))
  }
  catch(a)
  {
  }
  return t||""
}
function parseMetaContent(e,t)
{
  var a,r,n=e.split(";"),i=n.length;
  for(a=0;i>a;a++)r=n[a].split("="),t[util.trim(r[0])||s_plain_obj]=tryToDecodeURIComponent(util.trim(r.slice(1).join("=")))
}
function getCookie(e)
{
  var t=doc.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)"));
  return t?t[1]:""
}
function makeCacheNum()
{
  return Math.floor(268435456*Math.random()).toString(16)
}
function init_getMetaMicroscopeData()
{
  var e,t,a,r=util.getMetaTags(),n=r.length;
  for(e=0;n>e;e++)t=r[e],"microscope-data"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_microscope_data),is_head_has_meta_microscope_data=s_true);
  _microscope_data_params=obj2param(_microscope_data),ms_data_page_id=_microscope_data.pageId,ms_data_shop_id=_microscope_data.shopId,ms_data_instance_id=_microscope_data.siteInstanceId,ms_data_siteCategoryId=_microscope_data.siteCategory,ms_prototype_id=_microscope_data.prototypeId,site_instance_id_or_shop_id=ms_data_instance_id||ms_data_shop_id
}
function getMetaAtpData()
{
  var e,t,a,r=util.getMetaTags(),n=r.length;
  for(e=0;n>e;e++)t=r[e],"atp-beacon"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_atp_beacon_data));
  _atp_beacon_data_params=obj2param(_atp_beacon_data)
}
function getMetaWaiting()
{
  return util.getMetaCnt("aplus-waiting")
}
function getMetaTerminal()
{
  return util.getMetaCnt("aplus-terminal")
}
function getMetaRateAhot()
{
  var e=util.getMetaCnt("aplus-rate-ahot");
  return parseFloat(e)||0
}
function getMetaAhot()
{
  return util.getMetaCnt("ahot-aplus")
}
function isOnePage()
{
  return util.getMetaCnt("isonepage")||"-1"
}
function getSPMProtocolFromMeta()
{
  var e,t,a,r,n=util.getMetaTags();
  for(e=0,t=n.length;t>e;e++)a=n[e],r=tryToGetAttribute(a,"name"),r==s_SPM_ATTR_NAME&&(spm_protocol=tryToGetAttribute(a,s_SPM_DATA_PROTOCOL))
}
function getMetaSPMData(e)
{
  var t,a,r,n,i,o,s=util.getMetaTags();
  if(s)for(t=0,a=s.length;
  a>t;
  t++)if(n=s[t],i=tryToGetAttribute(n,"name"),i==e)return page_global_spm_id_origin=tryToGetAttribute(n,"content"),page_global_spm_id_origin.indexOf(":")>=0&&(r=page_global_spm_id_origin.split(":"),spm_protocol="i"==r[0]?"i":"u",page_global_spm_id_origin=r[1]),o=tryToGetAttribute(n,s_SPM_DATA_PROTOCOL),o&&(spm_protocol="i"==o?"i":"u"),page_global_is_wangpu=util.isStartWith(page_global_spm_id_origin,"110"),spm_ab=page_global_is_wangpu?default_ab:page_global_spm_id_origin,s_true;
  return s_false
}
function init_getGlobalSPMId()
{
  if(!isUnDefined(spm_ab))return spm_ab;
  if(spm_a&&spm_b)return spm_a=spm_a.replace(/^
  {
    (\w+\/)
  }
  $/g,"$1"),spm_b=spm_b.replace(/^
  {
    (\w+\/)
  }
  $/g,"$1"),wh_in_page=s_true,spm_ab=spm_a+"."+spm_b,getSPMProtocolFromMeta(),goldlog.spm_ab=[spm_a,spm_b],spm_ab;
  var e;
  if(getMetaSPMData(s_SPM_ATTR_NAME)||getMetaSPMData("spm-id"),spm_ab=spm_ab||default_ab,!spm_ab)return spm_ab;
  var t,a=doc.getElementsByTagName("body");
  return e=spm_ab.split("."),goldlog.spm_ab=e,a=a&&a.length?a[0]:null,a&&(t=tryToGetAttribute(a,s_SPM_ATTR_NAME),t?(spm_ab=e[0]+"."+t,goldlog.spm_ab=[e[0],t]):1==e.length&&(spm_ab=default_ab)),spm_ab
}
function makePVId()
{
function e(e)
{
  var t="0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ",a="0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
  return 1==e?t.substr(Math.floor(60*Math.random()),1):2==e?a.substr(Math.floor(60*Math.random()),1):"0"
}
for(var t,a="",r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n=!1;a.length<6;)t=r.substr(Math.floor(62*Math.random()),1),!n&&a.length<=2&&("g"==t.toLowerCase()||"l"==t.toLowerCase())&&(0===a.length&&"g"==t.toLowerCase()?Math.random()<.5&&(t=e(1),n=!0):1==a.length&&"l"==t.toLowerCase()&&"g"==a.charAt(0).toLowerCase()&&(t=e(2),n=!0)),a+=t;
return win[s_pv_id_key]=a,a
}
function init_aplusQueue()
{
  var e,t=win[s_aplus_queue];
  t.push=e=function()
  {
    for(var e,a,r=0,n=arguments.length;n>r;r++)e=arguments[r],isString(e)?goldlog.send(hjlj_beacon_base+e):isArray(e)&&"push"!=(a=e[0])&&(t[a]=t[a]||[]).push(e.slice(1))
  };
  for(var a;a=t.shift();)e(a)
}
function recordValInWindowName()
{
  var e,t;
  !is_in_iframe&&is_https&&(is_login_page&&page_referrer?(e=page_referrer,t=nameStorage.getItem(KEY.NAME_STORAGE.REFERRER_PV_ID)):(e=page_url,t=pvid),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER,e),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER_PV_ID,t))
}
function processGoldlogQueue()
{
function e()
{
  var e,t,a,r=win[s_GOLDMINER_QUEUE];
  if(r&&isArray(r)&&r.length)for(;
  e=r.shift();
  )if(e&&e.action&&isString(e.action)&&e.arguments&&isArray(e.arguments))
  {
    for(a=e.action.split("."),t=win;a.length;)if(t=t[a.shift()],!t)return;
    if("function"==typeof t)try
    {
      t.apply(t,e.arguments)
    }
    catch(n)
    {
    }
  }
}
try
{
  e()
}
catch(t)
{
}
}
function init_watchGoldlogQueue()
{
  var e=function()
  {
    try
    {
      processGoldlogQueue(),setTimeout(e,200)
    }
    catch(t)
    {
    }
  };
  e(),util.on(win,"beforeunload",processGoldlogQueue)
}
function cleanParams(e)
{
  var t,a,r,n,i=[],o=
  {
  };
  for(t=e.length-1;t>=0;t--)a=e[t],r=a[0],r!=s_plain_obj&&o.hasOwnProperty(r)||(n=a[1],("aplus"==r||n)&&(i.unshift([r,n]),o[r]=1));
  return i
}
function cleanParamsForWindvane(e)
{
  var t,a,r,n,i=[],o=
  {
    logtype:!0,cache:!0,scr:!0,"spm-cnt":!0
  };
  for(t=e.length-1;t>=0;t--)a=e[t],r=a[0],n=a[1],util.isStartWith(r,s_plain_obj)||o[r]||i.unshift([r,n]);
  return i
}
function tblogSend(e,t)
{
  var a,r;
  if(t)
  {
    if(isWindVane&&isTerminal)
    {
      r=cleanParamsForWindvane(cleanParams(t));
      var n,i=
      {
      }
      ,o=getSPMFromUrl(page_referrer),s=isOnePage(),c=s.split("|"),l=c[0],u=c[1]?c[1]:"";
      try
      {
        a=arr2obj(r),n=JSON.stringify(a),"{}"==n&&(n="")
      }
      catch(m)
      {
        n=""
      }
      i.functype="2001",i.urlpagename=u,i.url=loc.href,i.spmcnt=(spm_ab||"0.0")+".0.0",i.spmpre=o||"",i.lzsid="",i.cna=acookie_cna||"",i.extendargs=n,i.isonepage=l,WindVane.call("WVTBUserTrack","toUT",i),win[s_goldlog].windVaneData=i
    }
    return isUseLSProxy()?useLSProxy(
    {
      url:makeUrl(e,t),js:js_fdc_lsproxy,referrer:loc.href
    }
    ):goldlog.send(e,t)
  }
}
function mkPlainKey()
{
  return s_plain_obj+Math.random()
}
function wp_bucketId(e,t)
{
  var a,r=2146271213;
  for(a=0;a<e.length;a++)r=(r<<5)+r+e.charCodeAt(a);
  return(65535&r)%t
}
function getSPMFromUrl(e)
{
  var t,a=e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*/]+)"));
  return a&&(t=a[1])&&5==t.split(".").length?t:null
}
function ifAdd(e,t)
{
  var a,r,n,i,o=t.length;
  for(a=0;o>a;a++)r=t[a],n=r[0],i=r[1],i&&e.push([n,i])
}
function init_loadScripts()
{
  var e=(new Date).getTime(),t=Math.floor(e/72e5);
  Math.random()<.01&&addScript(url_alicdn+"/alilog/stat/a.js?t="+t);
  var a="laiwang",r="/ilw/a/lwlog.js?v=140709";
  isContain(loc.href.split("?")[0],a)&&addScript(url_alicdn+r);
  var n="/alilog/mlog/xwj_heat.js?v=151116b",i=getMetaRateAhot()||CONFIG.RATE.AHOT_SAMPLING;
(Math.random()<i||isAhot||CONFIG.DEBUG.AHOT)&&addScript(url_alicdn+n),ms_data_instance_id&&ms_prototype_id&&ms_prototype_id.match(/^[124]$/)&&ms_data_shop_id&&addScriptFromFDC("wp-beacon.js?v=131014"),util.DOMReady(function()
{
setTimeout(function()
{
  addScript("//g.alicdn.com/secdev/entry/index.js?t="+t)
}
,1e3)
}
),util.onload(function()
{
  var e=url_alicdn+"/pecdn/mlog/agp_heat.min.js?t="+t;
  addScript(e)
}
)
}
function compareVersion(e,t)
{
  e=e.toString().split("."),t=t.toString().split(".");
  for(var a=0;a<e.length||a<t.length;a++)
  {
    var r=parseInt(e[a],10),n=parseInt(t[a],10);
    if(window.isNaN(r)&&(r=0),window.isNaN(n)&&(n=0),n>r)return-1;
    if(r>n)return 1
  }
  return 0
}
function callback(e,t)
{
isAndroid&&compareVersion(osVersion,"2.4.0")<0?setTimeout(function()
{
  e&&e(t)
}
,1):e&&e(t)
}
function init_windVane()
{
  var WV_Core=
  {
    call:function(e,t,a,r,n,i)
    {
      var o,s;
return lib.promise&&(lib.promise.deferred?s=lib.promise.deferred():lib.promise.defer&&(s=lib.promise.defer())),o=i>0?setTimeout(function()
{
  WV_Core.onFailure(o,
  {
    ret:"TIMEOUT"
  }
  )
}
,i):WV_Private.getSid(),a.sid=o,WV_Private.registerCall(o,r,n,s),isAndroid?compareVersion(wvVersion,"2.7.0")>=0?WV_Private.callMethodByPrompt(e,t,WV_Private.buildParam(a),o+""):WindVane_Native&&WindVane_Native.callMethod&&WindVane_Native.callMethod(e,t,WV_Private.buildParam(a),o+""):isIOS&&WV_Private.callMethodByIframe(e,t,WV_Private.buildParam(a),o+""),s?s.promise():void 0
}
,fireEvent:function(e,t)
{
var a=doc.createEvent("HTMLEvents");
a.initEvent(e,!1,!0),a.param=WV_Private.parseParam(t),doc.dispatchEvent(a)
}
,getParam:function(e)
{
return WV_Private.params[PARAM_PREFIX+e]||""
}
,onSuccess:function(e,t)
{
clearTimeout(e);
var a=WV_Private.unregisterCall(e),r=a.success,n=a.deferred,i=WV_Private.parseParam(t);
callback(function(e)
{
  r&&r(e),n&&n.resolve(e)
}
,i.value||i),WV_Private.onComplete(e)
}
,onFailure:function(e,t)
{
clearTimeout(e);
var a=WV_Private.unregisterCall(e),r=a.failure,n=a.deferred,i=WV_Private.parseParam(t);
callback(function(e)
{
  r&&r(e),n&&n.reject(e)
}
,i),WV_Private.onComplete(e)
}
}
,WV_Private=
{
params:
{
}
,buildParam:function(e)
{
return e&&"object"==typeof e?JSON.stringify(e):e||""
}
,parseParam:function(str)
{
var obj;
if(str&&"string"==typeof str)try
{
  obj=JSON.parse(str)
}
catch(e)
{
  obj=eval("("+str+")")
}
else obj=str||
{
};
return obj
}
,getSid:function()
{
return Math.floor(Math.random()*(1<<50))+""+inc++
}
,registerCall:function(e,t,a,r)
{
t&&(callbackMap[SUCCESS_PREFIX+e]=t),a&&(callbackMap[FAILURE_PREFIX+e]=a),r&&(callbackMap[DEFERRED_PREFIX+e]=r)
}
,unregisterCall:function(e)
{
var t=SUCCESS_PREFIX+e,a=FAILURE_PREFIX+e,r=DEFERRED_PREFIX+e,n=
{
  success:callbackMap[t],failure:callbackMap[a],deferred:callbackMap[r]
};
return delete callbackMap[t],delete callbackMap[a],n.deferred&&delete callbackMap[r],n
}
,useIframe:function(e,t)
{
var a=IFRAME_PREFIX+e,r=iframePool.pop();
r||(r=doc.createElement("iframe"),r.setAttribute("frameborder","0"),r.style.cssText="width:0;height:0;border:0;display:none;"),r.setAttribute("id",a),r.setAttribute("src",t),r.parentNode||setTimeout(function()
{
  doc.body.appendChild(r)
}
,5)
}
,retrieveIframe:function(e)
{
var t=IFRAME_PREFIX+e,a=doc.querySelector("#"+t);
iframePool.length>=iframeLimit?doc.body.removeChild(a):iframePool.push(a)
}
,callMethodByIframe:function(e,t,a,r)
{
var n=
{
  "selfParam=1":1,sid:this.parseParam(a).sid
};
n=this.buildParam(n);
var i=LOCAL_PROTOCOL+"://"+e+":"+r+"/"+t+"?"+n;
this.params[PARAM_PREFIX+r]=a,this.useIframe(r,i)
}
,callMethodByPrompt:function(e,t,a,r)
{
var n=LOCAL_PROTOCOL+"://"+e+":"+r+"/"+t+"?"+a,i=WV_PROTOCOL+":";
this.params[PARAM_PREFIX+r]=a,window.prompt(n,i)
}
,onComplete:function(e)
{
isIOS&&this.retrieveIframe(e),delete this.params[PARAM_PREFIX+e]
}
};
for(var key in WV_Core)WV_Core.hasOwnProperty(key)&&(win[s_goldlog][key]=WindVane[key]=WV_Core[key])
}
function addScript(e,t)
{
  var a="script",r=doc.createElement(a);
  r.type="text/javascript",r.async=!0,r.src=is_https?t||e:e;
  var n=doc.getElementsByTagName(a)[0];
  n.parentNode.insertBefore(r,n)
}
function addScriptFromFDC(e)
{
  var t="//assets.alicdn.com/s/fdc/",a="//assets.alicdn.com/s/fdc/";
  addScript(t+e,a+e)
}
function createIframe(e,t)
{
  var a=document.createElement("iframe");
  a.style.width="1px",a.style.height="1px",a.style.position="absolute",a.style.display="none",a.src=e,t&&(a.name=t);
  var r=doc.getElementsByTagName("body")[0];
  return r.appendChild(a),a
}
function checkLS()
{
  var e=!1;
  try
  {
    "localStorage"in win&&win.localStorage&&(localStorage.setItem("test","test"),localStorage.removeItem("test"),e=!0)
  }
  catch(t)
  {
  }
  return e
}
function isUseLSProxy()
{
  if(CONFIG.DEBUG.LS_PROXY)return!0;
  var e=navigator.userAgent;
  if(is_ali_app)return!1;
  var t=e.split(" Safari/");
  return 2!=t.length?!1:checkLS()&&win.postMessage&&t[1].match(/[\d\.]+/)&&e.indexOf("AppleWebKit")>-1&&e.match(/\bVersion\/\d+/)&&!e.match(/\bChrome\/\d+/)&&!e.match(/TencentTraveler|QQBrowser/)&&!e.match(/UCBrowser|UCWEB/)
}
function useLSProxy(e)
{
  var t="//mmstat.alicdn.com/aplus-proxy.html?v=20130115";
  createIframe(t,JSON.stringify(e)),win.addEventListener&&win.JSON&&win.addEventListener("message",function(e)
  {
function t()
{
  var e=hostsname.split("."),t=e.length;
  return t>1?e[t-2]+"."+e[t-1]:hostsname
}
var a=e.data;
try
{
  a=JSON.parse(a)
}
catch(r)
{
  return
}
if(a[0]&&"cna"==a[0].k)for(var n,i,o,s=0,c=a.length;
c>s;
s++)n=a[s],o=n.k,i=encodeURIComponent(o)+"="+("cna"==o?n.v:encodeURIComponent(n.v))+"; domain=."+t()+"; path=/; expires="+new Date(n.t).toGMTString(),doc.cookie=i
}
)
}
function makeUrl(e,t)
{
  var a=-1==e.indexOf("?")?"?":"&",r=t?isArray(t)?arr2param(t):obj2param(t):"";
  return r?e+a+r:e
}
function isDpp()
{
  return isContain(mms.getExParams(),"atp_isdpp")
}
function inAntiSpamWhiteList()
{
  for(var e=!1,t=["item.taobao.com","detail.tmall.com","list.tmall.com","s.taobao.com","list.taobao.com","tw.taobao.com","detail.tmall.hk","chaoshi.tmall.com"],a=0;a<t.length;a++)
  {
    var r=t[a];
    if(hostsname.indexOf(r)>-1)
    {
      e=!0;
      break
    }
  }
  return isDpp()&&(e=!0),e
}
function chkFPPage()
{
  return!isTerminal&&!is_ali_app&&!/iPhone|iPad|iPod|Android/i.test(ua)
}
function try2AddFingerPrint(e)
{
  if(chkFPPage())
  {
    var t,a,r=require("./lib/fingerprint").get(),n=["fp","fp2"];
    for(t=0;t<n.length;t++)a=n[t],r.hasOwnProperty(a)&&e.push([a,r[a]])
  }
}
var script_name="aplus_v2";
require("./lib/client");
var win=window,doc=document,time_start=(new Date).getTime(),s_aplus_queue="_ap",_k="g_tb_aplus_loaded",_launch="g_tb_aplus_launch",url_alicdn="//g.alicdn.com";
if(win[s_aplus_queue]||(win[s_aplus_queue]=[]),!doc.getElementsByTagName("body").length)return void setTimeout(arguments.callee,50);
if(!win[_k])
{
  win[_k]=1;
  var s_goldlog="goldlog",goldlog=win[s_goldlog]||
  {
  };
  win[s_goldlog]=goldlog;
  var js_fdc_lsproxy=url_alicdn+"/alilog/mlog/lsproxy.js?v=20150514",_ali_analytics="ali_analytics",util=require("./lib/util"),isContain=util.isContain,m_rule=require("./lib/rule"),mms=require("./lib/misc"),f_makePageId=require("./lib/makeid").makePageId,st_page_id,m_config=require("./config"),CONFIG=m_config.COMFIG,KEY=m_config.KEY,VERSION=CONFIG.VERSION.DEFAULT,loc=location,loc_protocol=loc.protocol,is_https="https:"==loc_protocol,is_in_iframe=parent!==win.self,use_protocol=is_https?loc_protocol:"http:",default_ab="0.0",hostsname=loc.hostname,isAhot=getMetaAhot(),isPad=/TB\-PD/i.test(navigator.userAgent),isTerminal=isPad?!0:getMetaTerminal(),tblog_beacon_base=use_protocol+"//log.mmstat.com/",hjlj_beacon_base=is_https?tblog_beacon_base:use_protocol+(isTerminal?"//wgo.mmstat.com/":"//gm.mmstat.com/"),tblog_beacon_url=tblog_beacon_base+m_rule.getBeaconSrc(loc.hostname,isTerminal,is_in_iframe)+".gif",tblog_data=[["logtype",is_in_iframe?0:1]],tblog_extra_data=[],page_url=loc.href,loc_hash=loc.hash,page_referrer=doc.referrer,is_login_page=is_https&&(page_url.indexOf("login.taobao.com")>=0||page_url.indexOf("login.tmall.com")>=0),s_false=!1,s_true=!0,s_plain_obj="::-plain-::",s_SPM_ATTR_NAME="data-spm",s_SPM_DATA_PROTOCOL="data-spm-protocol",s_GOLDMINER_QUEUE="goldlog_queue",s_pv_id_key="g_aplus_pv_id",pvid=makePVId(),acookie_cna=getCookie("cna"),_microscope_data=
  {
  }
  ,_microscope_data_params,_atp_beacon_data=
  {
  }
  ,_atp_beacon_data_params,site_instance_id_or_shop_id,ms_data_shop_id,ms_data_instance_id,ms_data_page_id,ms_data_siteCategoryId,ms_prototype_id,wh_in_page=s_false,spm_a=win._SPM_a,spm_b=win._SPM_b,spm_protocol,spm_ab,page_global_spm_id_origin,page_global_is_wangpu,is_head_has_meta_microscope_data=s_false,ua=navigator.userAgent,lib=win.lib||(win.lib=
  {
  }
  ),isIOS=/iPhone|iPad|iPod/i.test(ua),isAndroid=/Android/i.test(ua),isWindVane=/WindVane/i.test(ua),osVersion=ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),wvVersion=ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),WindVane=
  {
  }
  ,WindVane_Native=win.WindVane_Native,callbackMap=
  {
  }
  ,inc=1,iframePool=[],iframeLimit=3,LOCAL_PROTOCOL="hybrid",WV_PROTOCOL="wv_hybrid",IFRAME_PREFIX="iframe_",SUCCESS_PREFIX="suc_",FAILURE_PREFIX="err_",DEFERRED_PREFIX="defer_",PARAM_PREFIX="param_",waitingMeta=getMetaWaiting(),hasWaitingMeta=1==waitingMeta,m_log=require("./lib/log"),is_ali_app;
  ua.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)&&(is_ali_app=!0);
  var nameStorage=require("./lib/nameStorage").nameStorage;
  if(page_referrer=doc.referrer||nameStorage.getItem(KEY.NAME_STORAGE.REFERRER)||"",osVersion=osVersion?(osVersion[1]||"0.0.0").replace(/_/g,"."):"0.0.0",wvVersion=wvVersion?(wvVersion[1]||"0.0.0").replace(/_/g,"."):"0.0.0",goldlog.version=VERSION,goldlog.pvid=pvid,goldlog.referrer=page_referrer,goldlog._d=
  {
  }
  ,goldlog._microscope_data=_microscope_data,goldlog.on=util.on,goldlog.DOMReady=util.DOMReady,goldlog.getCookie=getCookie,goldlog.tryToGetAttribute=tryToGetAttribute,goldlog.tryToGetHref=tryToGetHref,goldlog.isNumber=isNumber,goldlog.nameStorage=nameStorage,goldlog.send=function(e,t)
  {
    var a=new Image,r="_img_"+Math.random(),n=makeUrl(e,t);
    return win[r]=a,a.onload=a.onerror=function()
    {
      win[r]=null
    }
    ,a.src=n,a=null,n
  }
  ,goldlog.emit=function(e,t)
  {
    var a,r="ued.1.1.2?type=9";
    return isArray(t)?a=[["_gm:id",e]].concat(t):(a=objSimpleClone(t),a["_gm:id"]=e),goldlog.send(hjlj_beacon_base+r,a)
  }
  ,goldlog.trace=function(e,t,a,r)
  {
    goldlog.record(e,t,a,r)
  }
  ,goldlog.record=function(e,t,a,r)
  {
    r=(arguments[3]||"")+"";
    var n,i,o="?",s=s_false,c="",l=(spm_ab||"0.0")+".0.0."+pvid,u="//ac.mmstat.com/";
    if("ac"==e)n=u+"1.gif",s=util.isStartWith(r,"A")&&r.substr(1)==util.makeChkSum(e);
    else if(util.isStartWith(e,"ac-"))n=u+e.substr(3),s=util.isStartWith(r,"A")&&r.substr(1)==util.makeChkSum(e);
    else if(util.isStartWith(e,"/"))s=util.isStartWith(r,"H")&&r.substr(1)==util.makeChkSum(e),n=hjlj_beacon_base+e.substr(1),i=s_true,c+="&spm-cnt="+l;
    else
    {
      if(!util.isEndWith(e,".gif"))return s_false;
      n=tblog_beacon_base+e
    }
    if(!s&&"%"!=r&&util.makeChkSum(page_url)!=r)return s_false;
    if(st_page_id=st_page_id||f_makePageId(),st_page_id&&(a+=(a?"&":"")+"st_page_id="+st_page_id),n+=o+"cache="+makeCacheNum()+"&gmkey="+encodeURIComponent(t)+"&gokey="+encodeURIComponent(a)+"&cna="+acookie_cna+"&isbeta="+VERSION+c,i&&(n+="&logtype=2"),isWindVane&&isTerminal)
    {
      var m,d=
      {
      }
      ,p=
      {
        gmkey:t,gokey:a,isbeta:VERSION
      }
      ,g=isOnePage(),f=g.split("|"),_=f[0],h=f[1]?f[1]:"";
      try
      {
        m=JSON.stringify(p),"{}"==m&&(m="")
      }
      catch(b)
      {
        m=""
      }
      d.functype="2101",d.logkey=e,d.logkeyargs=m,d.urlpagename=h,d.url=loc.href,d.cna=acookie_cna||"",d.extendargs="",d.isonepage=_,WindVane.call("WVTBUserTrack","toUT",d)
    }
    return isUseLSProxy()?useLSProxy(
    {
      url:n,js:js_fdc_lsproxy,referrer:loc.href
    }
    ):goldlog.send(n)
  }
  ,goldlog.launch=function(e,t)
  {
    if(!win[_launch]||t)
    {
      win[_launch]=s_true;
      var a,r,n=VERSION,i=mms.getExParams(),o=tblog_data.slice(0);
      if(hasWaitingMeta&&(n=CONFIG.VERSION.MANUAL,e&&e.isWait&&(n=CONFIG.VERSION.MANUAL_TIMEOUT)),e)for(a in e)e.hasOwnProperty(a)&&(r=e[a])&&o.push([a,r]);
      o.push([mkPlainKey(),i]),o.push(["isbeta",n]),o=o.concat(tblog_extra_data);
      var s=makeCacheNum();
      m_log.updateKey(o,"cache",s);
      var c;
      if(t)
      {
        pvid=makePVId(),goldlog.pvid=pvid,c=t.page_id,o.push([s_plain_obj,t.gokey]),m_log.updateSPMCnt(o,c,pvid),m_log.updateSPMUrl(o,pvid);
        var l=goldlog.spm_ab?goldlog.spm_ab[1]:"";
        l&&(l=c?l.split("/")[0]+"/"+c:l.split("/")[0],spm_ab=goldlog.spm_ab[0]+"."+l,goldlog.spm_ab[1]=l)
      }
      if(page_url!=location.href&&(page_referrer=page_url,page_url=location.href),t&&t.referrer&&(page_referrer=t.referrer),page_referrer&&m_log.updateKey(o,"pre",page_referrer),goldlog.req=win.g_aplus_pv_req=tblogSend(tblog_beacon_url,o),inAntiSpamWhiteList()||CONFIG.DEBUG.ANTI_SPAM)
      {
        var u=param2obj(i).asid,m=obj2param(
        {
          asid:u,pre:page_referrer
        }
        );
        goldlog.record("/ahot.1.9","",m,"H1733420")
      }
    }
  }
  ,goldlog.sendPV=m_log.sendPV,win.goldminer=
  {
    record:goldlog.emit
  }
  ,win[s_GOLDMINER_QUEUE]&&isArray(win[s_GOLDMINER_QUEUE])||(win[s_GOLDMINER_QUEUE]=[]),isTerminal||init_watchGoldlogQueue(),init_getMetaMicroscopeData(),init_getGlobalSPMId(),init_aplusQueue(),init_loadScripts(),isWindVane&&isTerminal&&init_windVane(),"aplus_int"!=script_name)
  {
    var etag=require("./lib/etag");
    etag.init(acookie_cna),tblogSend=etag.inject(tblogSend,mkPlainKey)
  }
  !function()
  {
    var e,t,a,r=getCookie("tracknick"),n=getCookie("thw"),i=/\btanx\.com$/.test(hostsname)?getCookie("cnaui"):"",o=getSPMFromUrl(page_url),s=getSPMFromUrl(page_referrer),c=win[_ali_analytics]&&win[_ali_analytics].ua&&win[_ali_analytics].ua.ua_info||
    {
    };
    if(loc_hash&&0===loc_hash.indexOf("#")&&(loc_hash=loc_hash.substr(1)),!is_in_iframe||m_rule.is_iframeExcption(page_referrer))
    {
("3"==ms_prototype_id||"5"==ms_prototype_id)&&(t=getCookie("t"),a=t?wp_bucketId(t,20):""),e=[[mkPlainKey(),"title="+escape(doc.title)],["pre",page_referrer],["cache",makeCacheNum()],["scr",screen.width+"x"+screen.height]],acookie_cna&&e.push([mkPlainKey(),"cna="+acookie_cna]),r&&e.push([mkPlainKey(),"nick="+r]),ifAdd(e,[["wm_pageid",ms_data_page_id],["wm_prototypeid",ms_prototype_id],["wm_sid",ms_data_shop_id],["spm-url",o],["spm-pre",s],["cnaui",i]]),e.push(["spm-cnt",(spm_ab||"0.0")+".0.0."+pvid]),tblog_data=tblog_data.concat(e),ifAdd(tblog_extra_data,[["thw",n],["bucket_id",a],["urlokey",loc_hash],["wm_instanceid",ms_data_instance_id],["p",c.p],["o",c.o],["b",c.b],["s",c.s],["w",c.w],["mx",c.mx],["ism",c.ism],["st_page_id",st_page_id||f_makePageId()],["lver",goldlog.lver],["jsver",script_name]]),try2AddFingerPrint(tblog_extra_data),hasWaitingMeta?setTimeout(function()
{
  goldlog.launch(
  {
    isWait:!0
  }
  )
}
,CONFIG.TIME.MANUAL_TIMEOUT):goldlog.launch();
var l=spm_ab.split(".")[0];
is_in_iframe||isTerminal||"a21bo.7724922"!=spm_ab&&"2013"!=l&&"a220o"!=l||createIframe("//cookiemapping.wrating.com/link.html")
}
if(is_in_iframe)
{
getMetaAtpData();
var u,m=_atp_beacon_data.on,d="1"==m?"//ac.mmstat.com/y.gif":tblog_beacon_url;
d=isContain(hostsname,"wrating.com")?tblog_beacon_url:d,"1"!=m&&"2"!=m||!(u=_atp_beacon_data.chksum)||u!==util.makeChkSum(page_url).toString()||tblogSend(d,tblog_data)
}
util.on(win,"beforeunload",function()
{
recordValInWindowName()
}
)
}
();
var time_end=(new Date).getTime();
setTimeout(function()
{
  Math.random()>1e-4||goldlog.emit("global_sample",
  {
    type:"timer",t:time_end-time_start
  }
  )
}
,1)
}
}
(),function()
{
function e(e)
{
  var t,a;
  try
  {
    return t=[].slice.call(e)
  }
  catch(r)
  {
    t=[],a=e.length;
    for(var n=0;a>n;n++)t.push(e[n]);
    return t
  }
}
function t(e,t)
{
  return e&&e.getAttribute?e.getAttribute(t)||"":""
}
function a(e,t,a)
{
  if(e&&e.setAttribute)try
  {
    e.setAttribute(t,a)
  }
  catch(r)
  {
  }
}
function r(e,t)
{
  if(e&&e.removeAttribute)try
  {
    e.removeAttribute(t)
  }
  catch(r)
  {
    a(e,t,"")
  }
}
function n(e)
{
  var t,a=e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*/]+)"));
  return a&&(t=a[1])&&5==t.split(".").length?t:null
}
function i(e,t)
{
  return 0===e.indexOf(t)
}
function o(e)
{
  for(var t=["javascript:","tel:","sms:","mailto:","tmall://"],a=0,r=t.length;r>a;a++)if(i(e,t[a]))return!0
}
function s(e)
{
  return"string"==typeof e
}
function c(e)
{
  return"[object Array]"===Object.prototype.toString.call(e)
}
function l(e)
{
  return"number"==typeof e
}
function u(e,t)
{
  return e.indexOf(t)>=0
}
function m(e,t)
{
  return e.indexOf(t)>-1
}
function d(e,t)
{
  for(var a=0,r=t.length;r>a;a++)if(m(e,t[a]))return ve;
  return Ee
}
function p(e)
{
  return s(e)?e.replace(/^\s+|\s+$/g,""):""
}
function g(e)
{
  return"undefined"==typeof e
}
function f(e,t)
{
  var a=t||"";
  if(e)try
  {
    a=decodeURIComponent(e)
  }
  catch(r)
  {
  }
  return a
}
function _()
{
  return de=de||he.getElementsByTagName("head")[0],pe||(de?pe=de.getElementsByTagName("meta"):[])
}
function h(e,t)
{
  var a,r,n=e.split(";"),i=n.length;
  for(a=0;i>a;a++)r=n[a].split("="),t[p(r[0])||Fe]=f(p(r.slice(1).join("=")))
}
function b()
{
  var e,a,r,n=_(),i=n.length;
  for(e=0;i>e;e++)if(a=n[e],"aplus-terminal"==t(a,"name"))
  {
    r=t(a,"content");
    break
  }
  return r
}
function v()
{
  var e,a,r,n,i=_();
  for(e=0,a=i.length;a>e;e++)r=i[e],n=t(r,"name"),n==Xe&&(ge=t(r,ze))
}
function E(e)
{
  var a,r,n,o,s,c,l=_();
  if(l)for(a=0,r=l.length;
  r>a;
  a++)if(o=l[a],s=t(o,"name"),s==e)return le=t(o,"content"),le.indexOf(":")>=0&&(n=le.split(":"),ge="i"==n[0]?"i":"u",le=n[1]),c=t(o,ze),c&&(ge="i"==c?"i":"u"),ue=i(le,"110"),ce=ue?ke:le,ve;
  return Ee
}
function S()
{
  var e,a,r,n=_(),i=n.length;
  for(e=0;i>e;e++)if(a=n[e],"aplus-touch"==t(a,"name"))
  {
    r=t(a,"content");
    break
  }
  return r
}
function A()
{
  return Math.floor(268435456*Math.random()).toString(16)
}
function y(e)
{
  var t,a,r=[];
  for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],r.push(i(t,Fe)?a:t+"="+encodeURIComponent(a)));return r.join("&")
}
function T(e)
{
  var t,a,r,n=[],o=e.length;
  for(r=0;o>r;r++)t=e[r][0],a=e[r][1],n.push(i(t,Fe)?a:t+"="+encodeURIComponent(a));
  return n.join("&")
}
function P(e)
{
  var t;
  try
  {
    t=p(e.getAttribute("href",2))
  }
  catch(a)
  {
  }
  return t||""
}
function M(e,t,a)
{
  return"tap"==t?void w(e,a):void e[We]((Le?"on":"")+t,function(e)
  {
    e=e||_e.event;
    var t=e.target||e.srcElement;
    a(t)
  }
  ,Ee)
}
function w(e,t)
{
  var a="ontouchend"in document.createElement("div"),r=a?"touchstart":"mousedown";
  M(e,r,function(e)
  {
    t&&t(e)
  }
  )
}
function R(e)
{
  var t=_e.KISSY;
  t?t.ready(e):_e.jQuery?jQuery(he).ready(e):"complete"===he.readyState?e():M(_e,"load",e)
}
function I(e,t)
{
  var a,r=new Image,n="_img_"+Math.random(),i=-1==e.indexOf("?")?"?":"&",o=t?c(t)?T(t):y(t):"";
  return _e[n]=r,r.onload=r.onerror=function()
  {
    _e[n]=null
  }
  ,r.src=a=o?e+i+o:e,r=null,a
}
function O()
{
  var e;
  if(xe&&!Je&&(e=Se.match(/^[^?]+\?[^?]*spm=([^&#?]+)/),e&&(Je=e[1]+"_")),!g(ce))return ce;
  if(_e._SPM_a&&_e._SPM_b&&(oe=_e._SPM_a.replace(/^
  {
    (\w*|-\/)
  }
  $/g,"$1"),se=_e._SPM_b.replace(/^
  {
    (\w*|-\/)
  }
  $/g,"$1"),oe&&"-"!=oe&&se&&"-"!=se))return Ge=ve,ce=oe+"."+se,v(),ce;
  if(E(Xe)||E("spm-id"),!ce)return Ce=!0,ce=ke,ke;
  var a,r,n=he.getElementsByTagName("body");
  return n=n&&n.length?n[0]:null,n&&(a=t(n,Xe),a&&(r=ce.split("."),ce=r[0]+"."+a)),m(ce,".")||(Ce=!0,ce=ke),ce
}
function x(a,r)
{
  var n,i,o,s,c,l,u,m,d,p=[];
  for(n=e(a.getElementsByTagName("a")),i=e(a.getElementsByTagName("area")),s=n.concat(i),u=0,m=s.length;m>u;u++)
  {
    for(l=!1,c=o=s[u];(c=c.parentNode)&&c!=a;)if(t(c,Xe))
    {
      l=!0;
      break
    }
    l||(d=t(o,Ke),r||"t"==d?r&&"t"==d&&p.push(o):p.push(o))
  }
  return p
}
function N(e,a,r,n)
{
  var o,c,m,d,p,g,f,_,h,b,v,E,S,A,y,T,M,w;
  if(a=a||e.getAttribute(Xe)||"",a&&(o=x(e,n),0!==o.length))
  {
    if(m=a.split("."),T=i(a,"110")&&3==m.length,T&&(M=m[2],m[2]="w"+(M||"0"),a=m.join(".")),s(E=O())&&E.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/))if(u(a,"."))
    {
      if(!i(a,E))
      {
        for(d=E.split("."),m=a.split("."),A=0,S=d.length;S>A;A++)m[A]=d[A];
        a=m.join(".")
      }
    }
    else u(E,".")||(E+=".0"),a=E+"."+a;
    if(a.match&&a.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*\/]+$/))
    {
      var R=n?Ye:$e;
      for(w=parseInt(t(e,R))||0,y=0,p=w,S=o.length;S>y;y++)c=o[y],g=P(c),(n||g)&&(T&&c.setAttribute(Ze,M),f=c.getAttribute(et),f&&z(f)?j(c,f,r):(h=H(c.parentNode),h.a_spm_ab?(v=h.a_spm_ab,b=h.ab_idx):(v=void 0,p++,b=p),_=W(c)||b,n&&(_="at"+((l(_)?1e3:"")+_)),f=v?a+"-"+v+"."+_:a+"."+_,j(c,f,r)));
      e.setAttribute(R,p)
    }
  }
}
function k(e)
{
  var t,a=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],r=a.length;
  for(t=0;r>t;t++)if(-1!=e.indexOf(a[t]))return!0;
  return!1
}
function C(e)
{
  return e?!!e.match(/^[^\?]*\balipay\.(?:com|net)\b/i):Ee
}
function F(e)
{
  return e?!!e.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i):Ee
}
function D(e)
{
  for(var a;(e=e.parentNode)&&e.tagName!=Ve;)if(a=t(e,ze))return a;
  return""
}
function V(e,t)
{
  if(e&&/&?\bspm=[^&#]*/.test(e)&&(e=e.replace(/&?\bspm=[^&#]*/g,"").replace(/&
  {
    2,
  }
  /g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!t)return e;
  var a,r,n,i,o,s,c,l="&";
  if(-1!=e.indexOf("#")&&(n=e.split("#"),e=n.shift(),r=n.join("#")),i=e.split("?"),o=i.length-1,n=i[0].split("//"),n=n[n.length-1].split("/"),s=n.length>1?n.pop():"",o>0&&(a=i.pop(),e=i.join("?")),a&&o>1&&-1==a.indexOf("&")&&-1!=a.indexOf("%")&&(l="%26"),e=e+"?spm="+Je+t+(a?l+a:"")+(r?"#"+r:""),c=m(s,".")?s.split(".").pop().toLowerCase():"")
  {
    if(
    {
      png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1
    }
    .hasOwnProperty(c))return 0;
    !a&&1>=o&&(r||
    {
      htm:1,html:1,php:1,aspx:1
    }
    .hasOwnProperty(c)||(e+="&file="+s))
  }
  return e
}
function L(e)
{
  return e&&Se.split("#")[0]==e.split("#")[0]
}
function j(e,a,r)
{
  if(e.setAttribute(et,a),!r&&!t(e,Qe)&&(me=_e.g_aplus_pv_id,me&&(a+="."+me),me||ce&&ce!=ke))
  {
    var n=P(e),s="i"==(t(e,ze)||D(e)||ge),c=Ie+"tbspm.1.1?logtype=2&spm=";
    n&&!k(n)&&(s||!(i(n,"#")||L(n)||o(n.toLowerCase())||C(n)||F(n)))&&(s?(c+=a+"&url="+encodeURIComponent(n)+"&cache="+A(),fe==e&&I(c)):r||(n=V(n,a))&&U(e,n))
  }
}
function U(e,t)
{
  var a,r=e.innerHTML;
  r&&-1==r.indexOf("<")&&(a=he.createElement("b"),a.style.display="none",e.appendChild(a)),e.href=t,a&&e.removeChild(a)
}
function W(e)
{
  var a;
  return Ce?a="0":(a=t(e,Xe),a&&a.match(/^d\w+$/)||(a="")),a
}
function G(e)
{
  for(var t,a,r=e;e&&e.tagName!=De&&e.tagName!=Ve&&e.getAttribute;)
  {
    if(a=e.getAttribute(Xe))
    {
      t=a,r=e;
      break
    }
    if(!(e=e.parentNode))break
  }
  return t&&!/^[\w\-\.\/]+$/.test(t)&&(t="0"),
  {
    spm_c:t,el:r
  }
}
function H(e)
{
  for(var a,r=
  {
  }
  ,n="";
  e&&e.tagName!=De&&e.tagName!=Ve;
  )
  {
    if(!n&&(n=t(e,tt)))
    {
      a=parseInt(t(e,"data-spm-ab-max-idx"))||0,r.a_spm_ab=n,r.ab_idx=++a,e.setAttribute("data-spm-ab-max-idx",a);
      break
    }
    if(t(e,Xe))break;
    e=e.parentNode
  }
  return r
}
function B(e)
{
  var t;
  return e&&(t=e.match(/&?\bspm=([^&#]*)/))?t[1]:""
}
function X(e,t)
{
  var a=P(e),r=B(a),n=null,i=ce&&2==ce.split(".").length;
  return i?(n=[ce,0,W(e)||0],void j(e,n.join("."),t)):void(a&&r&&(a=a.replace(/&?\bspm=[^&#]*/g,"").replace(/&
  {
    2,
  }
  /g,"&").replace(/\?&/,"?").replace(/\?$/,"").replace(/\?#/,"#"),U(e,a)))
}
function z(e)
{
  var t=e.split(".");
  return t[0]+"."+t[1]==ce
}
function q(e,a)
{
  fe=e,Ge&&J();
  var r,n,i=t(e,et);
  if(i&&z(i))j(e,i,a);
  else
  {
    if(r=G(e.parentNode),n=r.spm_c,!n)return void X(e,a);
    Ce&&(n="0"),N(r.el,n,a),N(r.el,n,a,!0)
  }
}
function Q(t)
{
  if(t&&1==t.nodeType)
  {
    r(t,$e),r(t,Ye);
    var a,n=e(t.getElementsByTagName("a")),i=e(t.getElementsByTagName("area")),o=n.concat(i),s=o.length;
    for(a=0;s>a;a++)r(o[a],et)
  }
}
function K(e)
{
  var t=e.parentNode;
  if(!t)return"";
  var a=e.getAttribute(Xe),r=G(t),n=r.spm_c||0;
  n&&-1!=n.indexOf(".")&&(n=n.split("."),n=n[n.length-1]);
  var i=ce+"."+n,o=Ne[i]||0;
  return o++,Ne[i]=o,a=a||o,i+".i"+a
}
function $(e)
{
  var a,r=e.tagName;
  return me=_e.g_aplus_pv_id,"A"!=r&&"AREA"!=r?a=K(e):(q(e,ve),a=t(e,et)),a=(a||"0.0.0.0").split("."),
  {
    a:a[0],b:a[1],c:a[2],d:a[3],e:me
  }
}
function Y(e,t)
{
  if(t||(t=he),he.evaluate)return t.evaluate(e,he,null,9,null).singleNodeValue;
  for(var a,r=e.split("/");!a&&r.length>0;)a=r.shift();
  var n,i=/^.+?\[@id="(.+?)"]$/i,o=/^(.+?)\[(\d+)]$/i;
  return(n=a.match(i))?t=t.getElementById(n[1]):(n=a.match(o))&&(t=t.getElementsByTagName(n[1])[parseInt(n[2])-1]),t?0===r.length?t:Y(r.join("/"),t):null
}
function J()
{
  var e,t,r,n=
  {
  };
  for(e in He)He.hasOwnProperty(e)&&(t=Y(e),t&&(n[e]=1,r=He[e],a(t,Xe,("A"==t.tagName?r.spmd:r.spmc)||"")));for(e in n)n.hasOwnProperty(e)&&delete He[e]
}
function Z()
{
  if(!Be)
  {
    if(!_e.spmData)return void(Oe||setTimeout(arguments.callee,100));
    Be=ve;
    var e,t,a,r,n=_e.spmData.data;
    if(n&&c(n))
    {
      for(e=0,t=n.length;t>e;e++)a=n[e],r=a.xpath,r=r.replace(/^id\("(.+?)"\)(.*)/g,'//*[@id="$1"]$2'),He[r]=
      {
        spmc:a.spmc,spmd:a.spmd
      };
      J()
    }
  }
}
function ee()
{
  var e,a,r,n,i=he.getElementsByTagName("iframe"),o=i.length;
  for(a=0;o>a;a++)e=i[a],!e.src&&(r=t(e,qe))&&(n=$(e),n?(n=[n.a,n.b,n.c,n.d,n.e].join("."),e.src=V(r,n)):e.src=r)
}
function te()
{
function e()
{
  t++,t>10&&(a=3e3),ee(),setTimeout(e,a)
}
var t=0,a=500;
e()
}
function ae(e,t)
{
  var a,r,o="gostr",s="locaid",c=
  {
  };
  if(h(t,c),a=c[o],r=c[s],a&&r)
  {
    i(a,"/")&&(a=a.substr(1));
    var l=$(e),u=[l.a,l.b,l.c,r].join("."),m=a+"."+u,d=["logtype=2","cache="+Math.random(),"autosend=1","spm-cnt="+[l.a,l.b].join(".")+".0.0"],p=n(Se);
    p&&d.push("spm-pre="+p);
    var g;
    for(g in c)c.hasOwnProperty(g)&&g!=o&&g!=s&&d.push(g+"="+c[g]);d.length>0&&(m+="?"+d.join("&"));var f,_=
    {
      gmkey:"",gokey:d.length>0?d.join("&"):""
    };
setTimeout(function()
{
  if(we&&_e.goldlog&&_e.goldlog.call&&(f=_e.goldlog.windVaneData))
  {
    try
    {
      _=JSON.stringify(_),"{}"==_&&(_="")
    }
    catch(e)
    {
      _=""
    }
    f.functype="2101",f.logkey="/"+a+"."+u,f.logkeyargs=_,f.extendargs="",delete f.spmcnt,delete f.spmpre,delete f.lzsid,_e.goldlog.call("WVTBUserTrack","toUT",f)
  }
}
,300),I(Ie+m),e.setAttribute(et,u)
}
}
function re(e)
{
  for(var a;e&&e.tagName!=De;)
  {
    a=t(e,Qe);
    {
      if(a)
      {
        ae(e,a);
        break
      }
      e=e.parentNode
    }
  }
}
function ne()
{
  we&&Re?M(he,"tap",re):M(he,"mousedown",re)
}
function ie(e)
{
  for(var t;e&&(t=e.tagName);)
  {
    if("A"==t||"AREA"==t)
    {
      q(e,Ee),_e.g_SPM&&(g_SPM._current_spm=$(e));
      break
    }
    if(t==Ve||t==De)break;
    e=e.parentNode
  }
}
var oe,se,ce,le,ue,me,de,pe,ge,fe,_e=window,he=document,be=location,ve=!0,Ee=!1,Se=be.href,Ae=be.protocol,ye="https:"==Ae,Te=ye?Ae:"http:",Pe=be.host,Me=/TB\-PD/i.test(navigator.userAgent),we=Me?!0:b(),Re=S(),Ie=Te+(we?"//wgo.mmstat.com/":"//gm.mmstat.com/"),Oe=Ee,xe=parent!==_e.self,Ne=
{
}
,ke="0.0",Ce=!1,Fe="::-plain-::",De="HTML",Ve="BODY",Le=!!he.attachEvent,je="attachEvent",Ue="addEventListener",We=Le?je:Ue,Ge=Ee,He=
{
}
,Be=Ee,Xe="data-spm",ze="data-spm-protocol",qe="data-spm-src",Qe="data-spm-click",Ke="data-auto-spmd",$e="data-spm-max-idx",Ye="data-auto-spmd-max-idx",Je="",Ze="data-spm-wangpu-module-id",et="data-spm-anchor-id",tt="data-spm-ab",at=["xiaobai.com","admin.taobao.org","aliloan.com","mybank.cn"],rt=["tmc.admin.taobao.org"];
(!d(Pe,at)||d(Pe,rt))&&(R(function()
{
  Oe=ve
}
),O(),Z(),we||te(),ne(),we&&Re?M(he,"tap",ie):(M(he,"mousedown",ie),M(he,"keydown",ie)),_e.g_SPM=
{
  resetModule:Q,anchorBeacon:q,getParam:$
}
)
}
(),function()
{
function e(e,t,a)
{
  e[A]((v?"on":"")+t,function(e)
  {
    e=e||l.event;
    var t=e.target||e.srcElement;
    a(e,t)
  }
  ,!1)
}
function t()
{
  return/&?\bspm=[^&#]*/.test(location.href)?location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1]:""
}
function a(e,t)
{
  if(e&&/&?\bspm=[^&#]*/.test(e)&&(e=e.replace(/&?\bspm=[^&#]*/g,"").replace(/&
  {
    2,
  }
  /g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!t)return e;
  var a,r,n,i,o,s,c,l="&";
  if(-1!=e.indexOf("#")&&(n=e.split("#"),e=n.shift(),r=n.join("#")),i=e.split("?"),o=i.length-1,n=i[0].split("//"),n=n[n.length-1].split("/"),s=n.length>1?n.pop():"",o>0&&(a=i.pop(),e=i.join("?")),a&&o>1&&-1==a.indexOf("&")&&-1!=a.indexOf("%")&&(l="%26"),e=e+"?spm="+t+(a?l+a:"")+(r?"#"+r:""),c=s.indexOf(".")>-1?s.split(".").pop().toLowerCase():"")
  {
    if(
    {
      png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1
    }
    .hasOwnProperty(c))return 0;
    !a&&1>=o&&(r||
    {
      htm:1,html:1,php:1
    }
    .hasOwnProperty(c)||(e+="&file="+s))
  }
  return e
}
function r(e)
{
function t(e)
{
  return e=e.replace(/refpos[=(%3D)]\w*/gi,s).replace(i,"%3D"+r+"%26"+n.replace("=","%3D")).replace(o,r),n.length>0&&(e+="&"+n),e
}
var a=window.location.href,r=a.match(/mm_\d
{
  0,24
}
_\d
{
  0,24
}
_\d
{
  0,24
}
/i),n=a.match(/[&\?](pvid=[^&]*)/i),i=new RegExp("%3Dmm_\\d+_\\d+_\\d+","ig"),o=new RegExp("mm_\\d+_\\d+_\\d+","ig");
n=n&&n[1]?n[1]:"";
var s=a.match(/(refpos=(\d
{
  0,24
}
_\d
{
  0,24
}
_\d
{
  0,24
}
)?(,[a-z]+)?)(,[a-z]+)?/i);
return s=s&&s[0]?s[0]:"",r?(r=r[0],t(e)):e
}
function n(t)
{
  var a=l.KISSY;
  a?a.ready(t):l.jQuery?jQuery(u).ready(t):"complete"===u.readyState?t():e(l,"load",t)
}
function i(e,t)
{
  return e&&e.getAttribute?e.getAttribute(t)||"":""
}
function o(e)
{
  if(e)
  {
    var t,a=b.length;
    for(t=0;a>t;t++)if(e.indexOf(b[t])>-1)return!0;
    return!1
  }
}
function s(e,t)
{
  if(e&&/&?\bspm=[^&#]*/.test(e)&&(e=e.replace(/&?\bspm=[^&#]*/g,"").replace(/&
  {
    2,
  }
  /g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!t)return e;
  var a,r,n,i,o,s,c,l="&";
  if(-1!=e.indexOf("#")&&(n=e.split("#"),e=n.shift(),r=n.join("#")),i=e.split("?"),o=i.length-1,n=i[0].split("//"),n=n[n.length-1].split("/"),s=n.length>1?n.pop():"",o>0&&(a=i.pop(),e=i.join("?")),a&&o>1&&-1==a.indexOf("&")&&-1!=a.indexOf("%")&&(l="%26"),e=e+"?spm="+t+(a?l+a:"")+(r?"#"+r:""),c=s.indexOf(".")>-1?s.split(".").pop().toLowerCase():"")
  {
    if(
    {
      png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1
    }
    .hasOwnProperty(c))return 0;
    !a&&1>=o&&(r||
    {
      htm:1,html:1,php:1
    }
    .hasOwnProperty(c)||(e+="&__file="+s))
  }
  return e
}
function c(e)
{
  if(o(e.href))
  {
    var a=i(e,h);
    if(!a)
    {
      if(!g)return;
      var r=g(e),n=[r.a,r.b,r.c,r.d,r.e].join(".");
      f&&(n=[r.a||"0",r.b||"0",r.c||"0",r.d||"0"].join("."),n=(t()||"0.0.0.0.0")+"_"+n);
      var c=s(e.href,n);
      e.href=c,e.setAttribute(h,n)
    }
  }
  e=void 0
}
var l=window,u=document,m=location,d=(m.href,l._alimm_spmact_on_);
if("undefined"==typeof d&&(d=1),1==d&&(d=1),0==d&&(d=0),d)
{
  var p=function()
  {
    return
    {
      a:0,b:0,c:0,d:0,e:0
    }
  }
  ,g=l.g_SPM&&l.g_SPM.getParam?l.g_SPM.getParam:p,f=!0;
  try
  {
    f=self.location!=top.location
  }
  catch(_)
  {
  }
  var h="data-spm-act-id",b=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],v=!!u.attachEvent,E="attachEvent",S="addEventListener",A=v?E:S;
  e(u,"mousedown",function(e,t)
  {
    for(var a,r=0;t&&(a=t.tagName)&&5>r;)
    {
      if("A"==a||"AREA"==a)
      {
        c(t);
        break
      }
      if("BODY"==a||"HTML"==a)break;
      t=t.parentNode,r++
    }
  }
),n(function()
{
  for(var e,n,o=document.getElementsByTagName("iframe"),s=0;s<o.length;s++)
  {
    e=i(o[s],"mmsrc"),n=i(o[s],"mmworked");
    var c=g(o[s]),l=[c.a||"0",c.b||"0",c.c||"0",c.d||"0",c.e||"0"].join(".");
    e&&!n?(f&&(l=[c.a||"0",c.b||"0",c.c||"0",c.d||"0"].join("."),l=t()+"_"+l),o[s].src=a(r(e),l),o[s].setAttribute("mmworked","mmworked")):o[s].setAttribute(h,l)
  }
}
)
}
}
()
}
,
{
"./config":1,"./lib/client":3,"./lib/etag":5,"./lib/fingerprint":6,"./lib/log":7,"./lib/makeid":8,"./lib/misc":9,"./lib/nameStorage":10,"./lib/rule":11,"./lib/util":13
}
],3:[function(e,t,a)
{
"use strict";
!function(e,t)
{
var a=2,r="ali_analytics";
if(!(e[r]&&e[r].ua&&a<=e[r].ua.version))
{
var n,i,o,s,c,l,u,m,d,p,g,f,_,h,b,v,E,S=e.navigator,A=S.appVersion,y=S&&S.userAgent||"",T=function(e)
{
  var t=0;
  return parseFloat(e.replace(/\./g,function()
  {
    return 0===t++?".":""
  }
  ))
}
,P=function(e,t)
{
  var a,r;
  t[a="trident"]=.1,(r=e.match(/Trident\/([\d.]*)/))&&r[1]&&(t[a]=T(r[1])),t.core=a
}
,M=function(e)
{
  var t,a;
  return(t=e.match(/MSIE ([^;
  ]*)|Trident.*;
  rv(?:\s|:)?([0-9.]+)/))&&(a=t[1]||t[2])?T(a):0
}
,w=function(e)
{
  return e||"other"
}
,R=function(a)
{
function r()
{
  for(var e=[["Windows NT 5.1","winXP"],["Windows NT 6.1","win7"],["Windows NT 6.0","winVista"],["Windows NT 6.2","win8"],["Windows NT 10.0","win10"],["iPad","ios"],["iPhone;","ios"],["iPod","ios"],["Macintosh","mac"],["Android","android"],["Ubuntu","ubuntu"],["Linux","linux"],["Windows NT 5.2","win2003"],["Windows NT 5.0","win2000"],["Windows","winOther"],["rhino","rhino"]],t=0,r=e.length;r>t;++t)if(-1!==a.indexOf(e[t][0]))return e[t][1];
  return"other"
}
function n(t,a,r,n)
{
  var i,o=e.navigator.mimeTypes;
  try
  {
    for(i in o)if(o.hasOwnProperty(i)&&o[i][t]==a)
    {
      if(void 0!==r&&n.test(o[i][r]))return!0;
      if(void 0===r)return!0
    }
    return!1
  }
  catch(s)
  {
    return!1
  }
}
var i,o,s,c,l,u,m,d="",p=d,g=d,f=[6,9],_="{{version}}",h="<!--[if IE "+_+"]><s></s><![endif]-->",b=t&&t.createElement("div"),v=[],E=
{
  webkit:void 0,edge:void 0,trident:void 0,gecko:void 0,presto:void 0,chrome:void 0,safari:void 0,firefox:void 0,ie:void 0,ieMode:void 0,opera:void 0,mobile:void 0,core:void 0,shell:void 0,phantomjs:void 0,os:void 0,ipad:void 0,iphone:void 0,ipod:void 0,ios:void 0,android:void 0,nodejs:void 0,extraName:void 0,extraVersion:void 0
};
if(b&&b.getElementsByTagName&&(b.innerHTML=h.replace(_,""),v=b.getElementsByTagName("s")),v.length>0)
{
  for(P(a,E),c=f[0],l=f[1];l>=c;c++)if(b.innerHTML=h.replace(_,c),v.length>0)
  {
    E[g="ie"]=c;
    break
  }
  !E.ie&&(s=M(a))&&(E[g="ie"]=s)
}
else((o=a.match(/AppleWebKit\/*\s*([\d.]*)/i))||(o=a.match(/Safari\/([\d.]*)/)))&&o[1]?(E[p="webkit"]=T(o[1]),(o=a.match(/OPR\/(\d+\.\d+)/))&&o[1]?E[g="opera"]=T(o[1]):(o=a.match(/Chrome\/([\d.]*)/))&&o[1]?E[g="chrome"]=T(o[1]):(o=a.match(/\/([\d.]*) Safari/))&&o[1]?E[g="safari"]=T(o[1]):E.safari=E.webkit,(o=a.match(/Edge\/([\d.]*)/))&&o[1]&&(p=g="edge",E[p]=T(o[1])),/ Mobile\//.test(a)&&a.match(/iPad|iPod|iPhone/)?(E.mobile="apple",o=a.match(/OS ([^\s]*)/),o&&o[1]&&(E.ios=T(o[1].replace("_","."))),i="ios",o=a.match(/iPad|iPod|iPhone/),o&&o[0]&&(E[o[0].toLowerCase()]=E.ios)):/ Android/i.test(a)?(/Mobile/.test(a)&&(i=E.mobile="android"),o=a.match(/Android ([^\s]*);/),o&&o[1]&&(E.android=T(o[1]))):(o=a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))&&(E.mobile=o[0].toLowerCase()),(o=a.match(/PhantomJS\/([^\s]*)/))&&o[1]&&(E.phantomjs=T(o[1]))):(o=a.match(/Presto\/([\d.]*)/))&&o[1]?(E[p="presto"]=T(o[1]),(o=a.match(/Opera\/([\d.]*)/))&&o[1]&&(E[g="opera"]=T(o[1]),(o=a.match(/Opera\/.* Version\/([\d.]*)/))&&o[1]&&(E[g]=T(o[1])),(o=a.match(/Opera Mini[^;]*/))&&o?E.mobile=o[0].toLowerCase():(o=a.match(/Opera Mobi[^;
]*/))&&o&&(E.mobile=o[0]))):(s=M(a))?(E[g="ie"]=s,P(a,E)):(o=a.match(/Gecko/))&&(E[p="gecko"]=.1,(o=a.match(/rv:([\d.]*)/))&&o[1]&&(E[p]=T(o[1]),/Mobile|Tablet/.test(a)&&(E.mobile="firefox")),(o=a.match(/Firefox\/([\d.]*)/))&&o[1]&&(E[g="firefox"]=T(o[1])));
i||(i=r());
var S,y,w;
if(!n("type","application/vnd.chromium.remoting-viewer"))
{
  S="scoped"in t.createElement("style"),w="v8Locale"in e;
  try
  {
    y=e.external||void 0
  }
  catch(R)
  {
  }
  if(o=a.match(/360SE/))u="360";
  else if((o=a.match(/SE\s([\d.]*)/))||y&&"SEVersion"in y)u="sougou",m=T(o[1])||.1;
  else if((o=a.match(/Maxthon(?:\/)+([\d.]*)/))&&y)
  {
    u="maxthon";
    try
    {
      m=T(y.max_version||o[1])
    }
    catch(I)
    {
      m=.1
    }
  }
  else S&&w?u="360se":S||w||!/Gecko\)\s+Chrome/.test(A)||E.opera||E.edge||(u="360ee")
}
return(o=a.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/))?(u="tt",m=T(o[2])||.1):(o=a.match(/LBBROWSER/))||y&&"LiebaoGetVersion"in y?u="liebao":(o=a.match(/TheWorld/))?(u="theworld",m=3):(o=a.match(/TaoBrowser\/([\d.]*)/))?(u="taobao",m=T(o[1])||.1):(o=a.match(/UCBrowser\/([\d.]*)/))&&(u="uc",m=T(o[1])||.1),E.os=i,E.core=E.core||p,E.shell=g,E.ieMode=E.ie&&t.documentMode||E.ie,E.extraName=u,E.extraVersion=m,E.resolution=e.screen.width+"x"+e.screen.height,E
}
,I=function(e)
{
function t(e)
{
  return Object.prototype.toString.call(e)
}
function a(e,a,r)
{
  if("[object Function]"==t(a)&&(a=a(r)),!a)return null;
  var n=
  {
    name:e,version:""
  }
  ,i=t(a);
  if(a===!0)return n;
  if("[object String]"===i)
  {
    if(-1!==r.indexOf(a))return n
  }
  else if(a.exec)
  {
    var o=a.exec(r);
    if(o)return o.length>=2&&o[1]?n.version=o[1].replace(/_/g,"."):n.version="",n
  }
}
var r=
{
  name:"other",version:""
};
e=(e||"").toLowerCase();
for(var n=[["nokia",function(e)
{
  return-1!==e.indexOf("nokia ")?/\bnokia ([0-9]+)?/:/\bnokia([a-z0-9]+)?/
}
],["samsung",function(e)
{
  return-1!==e.indexOf("samsung")?/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/:/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
}
],["wp",function(e)
{
  return-1!==e.indexOf("windows phone ")||-1!==e.indexOf("xblwp")||-1!==e.indexOf("zunewp")||-1!==e.indexOf("windows ce")
}
],["pc","windows"],["ipad","ipad"],["ipod","ipod"],["iphone",/\biphone\b|\biph(\d)/],["mac","macintosh"],["mi",/\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],["hongmi",/\bhm[ \-]?([a-z0-9]+)/],["aliyun",/\baliyunos\b(?:[\-](\d+))?/],["meizu",function(e)
{
  return e.indexOf("meizu")>=0?/\bmeizu[\/ ]([a-z0-9]+)\b/:/\bm([0-9x]
  {
    1,3
  }
  )\b/
}
],["nexus",/\bnexus ([0-9s.]+)/],["huawei",function(e)
{
  var t=/\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
  return-1!==e.indexOf("huawei-huawei")?/\bhuawei\-huawei\-([a-z0-9\-]+)/:t.test(e)?t:/\bhuawei[ _\-]?([a-z0-9]+)/
}
],["lenovo",function(e)
{
  return-1!==e.indexOf("lenovo-lenovo")?/\blenovo\-lenovo[ \-]([a-z0-9]+)/:/\blenovo[ \-]?([a-z0-9]+)/
}
],["zte",function(e)
{
  return/\bzte\-[tu]/.test(e)?/\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/:/\bzte[ _\-]?([a-su-z0-9\+]+)/
}
],["vivo",/\bvivo(?: ([a-z0-9]+))?/],["htc",function(e)
{
  return/\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e)?/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/:/\bhtc[ _\-]?([a-z0-9 ]+)/
}
],["oppo",/\boppo[_]([a-z0-9]+)/],["konka",/\bkonka[_\-]([a-z0-9]+)/],["sonyericsson",/\bmt([a-z0-9]+)/],["coolpad",/\bcoolpad[_ ]?([a-z0-9]+)/],["lg",/\blg[\-]([a-z0-9]+)/],["android",/\bandroid\b|\badr\b/],["blackberry",function(e)
{
  return e.indexOf("blackberry")>=0?/\bblackberry\s?(\d+)/:"bb10"
}
]],i=0;
i<n.length;
i++)
{
  var o=n[i][0],s=n[i][1],c=a(o,s,e);
  if(c)
  {
    r=c;
    break
  }
}
return r
}
,O=1;
try
{
n=R(y),i=I(y),o=n.os,s=n.shell,c=n.core,l=n.resolution,u=n.extraName,m=n.extraVersion,d=i.name,p=i.version,f=o?o+(n[o]?n[o]:""):"",_=s?s+parseInt(n[s]):"",h=c,b=l,v=u?u+(m?parseInt(m):""):"",E=d+p
}
catch(x)
{
}
g=
{
p:O,o:w(f),b:w(_),w:w(h),s:b,mx:v,ism:E
}
,e[r]||(e[r]=
{
}
),e[r].ua||(e[r].ua=
{
}
),e[r].ua=
{
version:a,ua_info:g
}
}
}
(window,document)
}
,
{
}
],4:[function(e,t,a)
{
function r(e,t)
{
  var a=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(a>>16);
  return r<<16|65535&a
}
function n(e,t)
{
  return e<<t|e>>>32-t
}
function i(e,t,a,i,o,s)
{
  return r(n(r(r(t,e),r(i,s)),o),a)
}
function o(e,t,a,r,n,o,s)
{
  return i(t&a|~t&r,e,t,n,o,s)
}
function s(e,t,a,r,n,o,s)
{
  return i(t&r|a&~r,e,t,n,o,s)
}
function c(e,t,a,r,n,o,s)
{
  return i(t^a^r,e,t,n,o,s)
}
function l(e,t,a,r,n,o,s)
{
  return i(a^(t|~r),e,t,n,o,s)
}
function u(e,t)
{
  e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;
  var a,n,i,u,m,d=1732584193,p=-271733879,g=-1732584194,f=271733878;
  for(a=0;a<e.length;a+=16)n=d,i=p,u=g,m=f,d=o(d,p,g,f,e[a],7,-680876936),f=o(f,d,p,g,e[a+1],12,-389564586),g=o(g,f,d,p,e[a+2],17,606105819),p=o(p,g,f,d,e[a+3],22,-1044525330),d=o(d,p,g,f,e[a+4],7,-176418897),f=o(f,d,p,g,e[a+5],12,1200080426),g=o(g,f,d,p,e[a+6],17,-1473231341),p=o(p,g,f,d,e[a+7],22,-45705983),d=o(d,p,g,f,e[a+8],7,1770035416),f=o(f,d,p,g,e[a+9],12,-1958414417),g=o(g,f,d,p,e[a+10],17,-42063),p=o(p,g,f,d,e[a+11],22,-1990404162),d=o(d,p,g,f,e[a+12],7,1804603682),f=o(f,d,p,g,e[a+13],12,-40341101),g=o(g,f,d,p,e[a+14],17,-1502002290),p=o(p,g,f,d,e[a+15],22,1236535329),d=s(d,p,g,f,e[a+1],5,-165796510),f=s(f,d,p,g,e[a+6],9,-1069501632),g=s(g,f,d,p,e[a+11],14,643717713),p=s(p,g,f,d,e[a],20,-373897302),d=s(d,p,g,f,e[a+5],5,-701558691),f=s(f,d,p,g,e[a+10],9,38016083),g=s(g,f,d,p,e[a+15],14,-660478335),p=s(p,g,f,d,e[a+4],20,-405537848),d=s(d,p,g,f,e[a+9],5,568446438),f=s(f,d,p,g,e[a+14],9,-1019803690),g=s(g,f,d,p,e[a+3],14,-187363961),p=s(p,g,f,d,e[a+8],20,1163531501),d=s(d,p,g,f,e[a+13],5,-1444681467),f=s(f,d,p,g,e[a+2],9,-51403784),g=s(g,f,d,p,e[a+7],14,1735328473),p=s(p,g,f,d,e[a+12],20,-1926607734),d=c(d,p,g,f,e[a+5],4,-378558),f=c(f,d,p,g,e[a+8],11,-2022574463),g=c(g,f,d,p,e[a+11],16,1839030562),p=c(p,g,f,d,e[a+14],23,-35309556),d=c(d,p,g,f,e[a+1],4,-1530992060),f=c(f,d,p,g,e[a+4],11,1272893353),g=c(g,f,d,p,e[a+7],16,-155497632),p=c(p,g,f,d,e[a+10],23,-1094730640),d=c(d,p,g,f,e[a+13],4,681279174),f=c(f,d,p,g,e[a],11,-358537222),g=c(g,f,d,p,e[a+3],16,-722521979),p=c(p,g,f,d,e[a+6],23,76029189),d=c(d,p,g,f,e[a+9],4,-640364487),f=c(f,d,p,g,e[a+12],11,-421815835),g=c(g,f,d,p,e[a+15],16,530742520),p=c(p,g,f,d,e[a+2],23,-995338651),d=l(d,p,g,f,e[a],6,-198630844),f=l(f,d,p,g,e[a+7],10,1126891415),g=l(g,f,d,p,e[a+14],15,-1416354905),p=l(p,g,f,d,e[a+5],21,-57434055),d=l(d,p,g,f,e[a+12],6,1700485571),f=l(f,d,p,g,e[a+3],10,-1894986606),g=l(g,f,d,p,e[a+10],15,-1051523),p=l(p,g,f,d,e[a+1],21,-2054922799),d=l(d,p,g,f,e[a+8],6,1873313359),f=l(f,d,p,g,e[a+15],10,-30611744),g=l(g,f,d,p,e[a+6],15,-1560198380),p=l(p,g,f,d,e[a+13],21,1309151649),d=l(d,p,g,f,e[a+4],6,-145523070),f=l(f,d,p,g,e[a+11],10,-1120210379),g=l(g,f,d,p,e[a+2],15,718787259),p=l(p,g,f,d,e[a+9],21,-343485551),d=r(d,n),p=r(p,i),g=r(g,u),f=r(f,m);
  return[d,p,g,f]
}
function m(e)
{
  var t,a="";
  for(t=0;t<32*e.length;t+=8)a+=String.fromCharCode(e[t>>5]>>>t%32&255);
  return a
}
function d(e)
{
  var t,a=[];
  for(a[(e.length>>2)-1]=void 0,t=0;t<a.length;t+=1)a[t]=0;
  for(t=0;t<8*e.length;t+=8)a[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;
  return a
}
function p(e)
{
  return m(u(d(e),8*e.length))
}
function g(e,t)
{
  var a,r,n=d(e),i=[],o=[];
  for(i[15]=o[15]=void 0,n.length>16&&(n=u(n,8*e.length)),a=0;16>a;a+=1)i[a]=909522486^n[a],o[a]=1549556828^n[a];
  return r=u(i.concat(d(t)),512+8*t.length),m(u(o.concat(r),640))
}
function f(e)
{
  var t,a,r="0123456789abcdef",n="";
  for(a=0;a<e.length;a+=1)t=e.charCodeAt(a),n+=r.charAt(t>>>4&15)+r.charAt(15&t);
  return n
}
function _(e)
{
  return unescape(encodeURIComponent(e))
}
function h(e)
{
  return p(_(e))
}
function b(e)
{
  return f(h(e))
}
function v(e,t)
{
  return g(_(e),_(t))
}
function E(e,t)
{
  return f(v(e,t))
}
function S(e,t,a)
{
  return t?a?v(t,e):E(t,e):a?h(e):b(e)
}
t.exports=S
}
,
{
}
],5:[function(e,t,a)
{
function r(e,t)
{
  var a=new Date;
  a.setTime(a.getTime()+31536e7),t+="; expires="+a.toUTCString(),t+="; domain="+i.getDomain(location.hostname),t+="; path=/",o.cookie=e+"="+t
}
function n(e,t)
{
function a(e)
{
  r.onreadystatechange=r.onload=r.onerror=null,r=null,t(e)
}
var r=o.createElement("script");
if(r.async=!0,"onload"in r)r.onload=a;
else
{
  var n=function()
  {
    /loaded|complete/.test(r.readyState)&&a()
  };
  r.onreadystatechange=n,n()
}
r.onerror=function()
{
  a(1)
}
,r.src=e,s.appendChild(r)
}
var i=e("./tld"),o=document,s=o.head||o.getElementsByTagName("head")[0],c=0,l=-1,u="",m=!1;
t.exports=
{
init:function(e)
{
  if(e)return void(c=1);
  var t=null;
  m=!0,n("https://log.mmstat.com/eg.js",function(e)
  {
    e&&(l=-3),m&&(m=!1,goldlog.Etag&&(u=goldlog.Etag,r("cna",u)),"undefined"!=typeof goldlog.stag&&(l=goldlog.stag),clearTimeout(t))
  }
),t=setTimeout(function()
{
  m=!1,l=-2
}
,1e3)
}
,inject:function(e,t)
{
var a=function(r,n)
{
return n?!c&&m?void setTimeout(function()
{
  a(r,n)
}
,50):(n.push(["tag",c]),n.push(["stag",l]),!c&&u&&n.unshift([t(),"cna="+u]),e(r,n)):void 0
};
return a
}
}
}
,
{
"./tld":12
}
],6:[function(e,t,a)
{
"use strict";
function r(e)
{
return function(t)
{
  return
  {
  }
  .toString.call(t)==="[object "+e+"]"
}
}
function n(e)
{
  return"function"==typeof _?_(e):""
}
function i()
{
  var e=p.createElement("canvas"),t=null;
  try
  {
    t=e.getContext("webgl")||e.getContext("experimental-webgl")
  }
  catch(a)
  {
  }
  return t||(t=null),t
}
function o(e)
{
  d.localStorage&&localStorage.setItem&&localStorage.setItem(f,_(e))
}
function s()
{
  if(d.localStorage&&localStorage.getItem)
  {
    var e=localStorage.getItem(f);
    if(e)
    {
      try
      {
        e=JSON.parse(e)
      }
      catch(t)
      {
      }
      return e
    }
  }
}
var c,l,u,m=e("./encrypt/md5"),d=window,p=document,g=navigator,f="aplus_fp",_=d.JSON&&JSON.stringify,h=r("Function"),b=function(e,t,a)
{
  if(e)
  {
    var r=0,n=e.length;
    if(n===+n)for(;
    n>r&&t.call(a,e[r],r,e)!==!1;
    r++);
    else for(r in e)if(e.hasOwnProperty(r)&&t.call(a,e[r],r,e)===!1)break
  }
}
,v=[],E=
{
}
,S=function(e,t)
{
  h(t)&&(t=t()),v.push(
  {
    k:e,v:t
  }
  )
}
,A=function()
{
  u||(u=1,E.canvas=function()
  {
    var e=p.createElement("canvas");
    return e.getContext&&e.getContext("2d")
  }
  (),E.plugins="undefined"!=typeof g.plugins,E.webgl=function()
  {
    if(!E.canvas)return!1;
    var e,t=p.createElement("canvas");
    try
    {
      e=t.getContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))
    }
    catch(a)
    {
      e=!1
    }
    return!!d.WebGLRenderingContext&&!!e
  }
  (),S("ua",g.userAgent),S("platform",g.platform),S("language",g.language),S("doNotTrack",g.doNotTrack||"unknown"),S("cookieEnabled",g.cookieEnabled),S("colorDepth",d.screen.colorDepth),S("screenWidth",d.screen.width),S("screenHeight",d.screen.height),S("timezoneOffset",(new Date).getTimezoneOffset()),S("hasSessionStorage",function()
  {
    try
    {
      return!!d.sessionStorage
    }
    catch(e)
    {
      return!0
    }
  }
  ),S("hasLocalStorage",function()
  {
    try
    {
      return!!d.localStorage
    }
    catch(e)
    {
      return!0
    }
  }
  ),S("hasIndexedDB",!!d.indexedDB),E.canvas&&S("canvasFP",function()
  {
    var e=[],t=p.createElement("canvas");
    t.width=2e3,t.height=200,t.style.display="inline";
    var a=t.getContext("2d");
    return a.rect(0,0,10,10),a.rect(2,2,6,6),e.push("canvas winding:"+(a.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),a.textBaseline="alphabetic",a.fillStyle="#f60",a.fillRect(125,1,62,20),a.fillStyle="#069",a.font="12px 'Arial'",a.fillText("Cwm fjordbank glyphs vext quiz",2,15),a.fillStyle="rgba(102, 204, 0, 0.7)",a.font="18px 'Arial'",a.fillText("Cwm fjordbank glyphs vext quiz",4,45),a.globalCompositeOperation="multiply",a.fillStyle="rgb(255,0,255)",a.beginPath(),a.arc(50,50,50,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="rgb(0,255,255)",a.beginPath(),a.arc(100,50,50,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="rgb(255,255,0)",a.beginPath(),a.arc(75,100,50,0,2*Math.PI,!0),a.closePath(),a.fill(),a.fillStyle="rgb(255,0,255)",a.arc(75,75,75,0,2*Math.PI,!0),a.arc(75,75,25,0,2*Math.PI,!0),a.fill("evenodd"),e.push("canvas fp:"+t.toDataURL()),c=e.join("~")
  }
  ),E.webgl&&S("webglFP",function()
  {
    var e,t=function(t)
    {
      return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"
    }
    ,a=function(e)
    {
      var t,a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");
      return a?(t=e.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null
    };
    if(e=i(),!e)return null;
    var r=[],n="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",o="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",s=e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER,s);
    var c=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);
    e.bufferData(e.ARRAY_BUFFER,c,e.STATIC_DRAW),s.itemSize=3,s.numItems=3;
    var u=e.createProgram(),m=e.createShader(e.VERTEX_SHADER);
    e.shaderSource(m,n),e.compileShader(m);
    var d=e.createShader(e.FRAGMENT_SHADER);
    return e.shaderSource(d,o),e.compileShader(d),e.attachShader(u,m),e.attachShader(u,d),e.linkProgram(u),e.useProgram(u),u.vertexPosAttrib=e.getAttribLocation(u,"attrVertex"),u.offsetUniform=e.getUniformLocation(u,"uniformOffset"),e.enableVertexAttribArray(u.vertexPosArray),e.vertexAttribPointer(u.vertexPosAttrib,s.itemSize,e.FLOAT,!1,0,0),e.uniform2f(u.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,s.numItems),e.canvas&&r.push(e.canvas.toDataURL()),r.push("1"+e.getSupportedExtensions().join(";")),r.push("2"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),r.push("3"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),r.push("4"+e.getParameter(e.ALPHA_BITS)),r.push("5"+(e.getContextAttributes().antialias?"yes":"no")),r.push("6"+e.getParameter(e.BLUE_BITS)),r.push("7"+e.getParameter(e.DEPTH_BITS)),r.push("8"+e.getParameter(e.GREEN_BITS)),r.push("9"+a(e)),r.push("10"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),r.push("11"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),r.push("12"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),r.push("13"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),r.push("14"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),r.push("15"+e.getParameter(e.MAX_TEXTURE_SIZE)),r.push("16"+e.getParameter(e.MAX_VARYING_VECTORS)),r.push("17"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),r.push("18"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),r.push("19"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),r.push("20"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),r.push("21"+e.getParameter(e.RED_BITS)),r.push("22"+e.getParameter(e.RENDERER)),r.push("23"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),r.push("24"+e.getParameter(e.STENCIL_BITS)),r.push("25"+e.getParameter(e.VENDOR)),r.push("26"+e.getParameter(e.VERSION)),e.getShaderPrecisionFormat?(r.push("50"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),r.push("51"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),r.push("52"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),r.push("53"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),r.push("54"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),r.push("55"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),r.push("56"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),r.push("57"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),r.push("58"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),r.push("59"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),r.push("60"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),r.push("61"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),r.push("62"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),r.push("63"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),r.push("64"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),r.push("65"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),r.push("66"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),r.push("67"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),r.push("68"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),r.push("69"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),r.push("70"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),r.push("71"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),r.push("72"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),r.push("73"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),r.push("74"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),r.push("75"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),r.push("76"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),r.push("77"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),r.push("78"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),r.push("79"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),r.push("80"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),r.push("81"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),r.push("82"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),r.push("83"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),r.push("84"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),r.push("85"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),l=r.join("~")):r.join("~")
  }
  ),E.plugins&&S("plugins",function()
  {
    var e=[];
    b(g.plugins,function(t)
    {
      e.push(t)
    }
),e=e.sort(function(e,t)
{
  return e.name>t.name?1:e.name<t.name?-1:0
}
);
var t=[];
return b(e,function(e)
{
  t.push(e.name)
}
),t.join(";")
}
),S("mimeTypes",function()
{
var e=g.mimeTypes;
if(e)
{
  var t=[];
  return b(e,function(e)
  {
    t.push(e&&e.type)
  }
  ),t.join(";")
}
return""
}
))
};
t.exports=
{
get:function()
{
var e=s();
return e?e:(A(),e=
{
  fp:m(c+l),fp2:m(n(v))
}
,o(e),e)
}
}
}
,
{
"./encrypt/md5":4
}
],7:[function(e,t,a)
{
"use strict";
function r()
{
  var e=c.getMetaCnt("aplus-ajax"),t=goldlog.spm_ab;
  return t&&c.makeChkSum([t[0],(t[1]||"").split("/")[0]].join("."))==e?!0:c.makeChkSum(location.href)==e?!0:!1
}
function n(e,t,a)
{
  o(e,"spm-cnt",function(e)
  {
    var r=e.split(".");
    return t?r[1]=r[1].split("/")[0]+"/"+t:r[1]=r[1].split("/")[0],a&&(r[4]=a),r.join(".")
  }
  )
}
function i(e,t)
{
  var a=g_SPM._current_spm;
  a&&o(e,"spm-url",function()
  {
    return[a.a,a.b,a.c,a.d].join(".")+(t?"."+t:"")
  }
  ,"spm-cnt")
}
function o(e,t,a,r)
{
  var n,i,o=e.length,s=-1,c="function"==typeof a;
  for(n=0;o>n;n++)
  {
    if(i=e[n],i[0]===t)return void(c?i[1]=a(i[1]):i[1]=a);
    r&&i[0]===r&&(s=n)
  }
  r&&(c&&(a=a()),s>-1?e.splice(s,0,[t,a]):e.push([t,a]))
}
function s(e)
{
  r()&&goldlog.launch(
  {
  }
  ,e||
  {
  }
  )
}
var c=e("./util");
t.exports=
{
  sendPV:s,checkIfSendPV:r,updateSPMCnt:n,updateSPMUrl:i,updateKey:o
}
}
,
{
"./util":13
}
],8:[function(e,t,a)
{
"use strict";
function r()
{
  if(!o.is_aliloan())return null;
  if(n)return n;
  var e;
  for(e=(goldlog.page_id||"")+c,e=e.substr(0,20);e.length<42;)e+=i.rndInt32();
  return e=e.substr(0,42),s.alilog_1688_pvid=s.dmtrack_pageid=s.unique_pageid=e,n=e,e
}
var n,i=e("./util"),o=e("./rule"),s=window,c=(new Date).getTime();
a.makePageId=r
}
,
{
"./rule":11,"./util":13
}
],9:[function(e,t,a)
{
"use strict";
function r()
{
  var e=n.getElementById("tb-beacon-aplus"),t=o.tryToGetAttribute(e,"exparams");
  if(!t)return t;
  var a,r,i=["taobao.com","tmall.com","etao.com","hitao.com","taohua.com","juhuasuan.com","alimama.com"];
  if(s)
  {
    for(r=i.length,a=0;r>a;a++)if(o.isContain(location.hostname,i[a]))return t;
    t=t.replace(/\buserid=\w*&?/,"")
  }
  return t=t.replace(/\buserid=/,"uidaplus=")
}
var n=document,i=window,o=e("./util"),s=parent!==i.self;
a.getExParams=r
}
,
{
"./util":13
}
],10:[function(e,t,a)
{
var r=function()
{
function e()
{
  var e,t=[],i=!0;
  for(var u in m)m.hasOwnProperty(u)&&(i=!1,e=m[u]||"",t.push(l(u)+s+l(e)));a.name=i?r:n+l(r)+o+t.join(c)
}
function t(e,t,a)
{
  e&&(e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,function(t)
  {
    a.call(e,t)
  }
  ))
}
var a=window;
if(a.nameStorage)return a.nameStorage;
var r,n="nameStorage:",i=/^([^=]+)(?:=(.*))?$/,o="?",s="=",c="&",l=encodeURIComponent,u=decodeURIComponent,m=
{
}
,d=
{
};
return function(e)
{
  if(e&&0===e.indexOf(n))
  {
    var t=e.split(/[:?]/);
    t.shift(),r=u(t.shift())||"";
    for(var a,o,s,l=t.join(""),d=l.split(c),p=0,g=d.length;g>p;p++)a=d[p].match(i),a&&a[1]&&(o=u(a[1]),s=u(a[2])||"",m[o]=s)
  }
  else r=e||""
}
(a.name),d.setItem=function(t,a)
{
  t&&"undefined"!=typeof a&&(m[t]=String(a),e())
}
,d.getItem=function(e)
{
  return m.hasOwnProperty(e)?m[e]:null
}
,d.removeItem=function(t)
{
  m.hasOwnProperty(t)&&(m[t]=null,delete m[t],e())
}
,d.clear=function()
{
  m=
  {
  }
  ,e()
}
,d.valueOf=function()
{
  return m
}
,d.toString=function()
{
  var e=a.name;
  return 0===e.indexOf(n)?e:n+e
}
,t(a,"beforeunload",function()
{
  e()
}
),d
}
();
a.nameStorage=r
}
,
{
}
],11:[function(e,t,a)
{
"use strict";
function r(e,t,a)
{
  if(t)return"m";
  if(a)return o.isContain(e,"wrating.com")?"k":"y";
  var r,n,i="o",s=[["ju.taobao.com","4"],["juhuasuan.com","4"],["alipay.com","f"],["china.alibaba.com","6"],["qd.alibaba.com","o"],["jaq.alibaba.com","o"],["110.alibaba.com","o"],["security.alibaba.com","o"],["1688.com","6"],["alibaba.com","7"],["aliloan.com","8"],["cnzz.com","9"],["net.cn","a"],["hichina.com","a"],["phpwind.com","b"],["aliyun.com","c"],["tao123.com","d"],["alimama.com","e"],["taobao.com","1"],["tmall.com","2"],["tmall.hk","2"],["etao.com","3"],["sm.cn","s"],["*",i]],c=s.length;
  for(r=0;c>r;r++)if(n=s[r],o.isContain(e,n[0]))return n[1];
  return i
}
function n(e)
{
  var t,a,r=["/theme/info/info","/promo/co_header.php","fast_buy.htm","/add_collection.htm","/taobao_digital_iframe","/promo/co_header_taoinfo.php","/list_forum","/theme/info/info"];
  for(t=0,a=r.length;a>t;t++)if(-1!=l.indexOf(r[t]))return!0;
  var n=[m,d];
  for(t=0,a=n.length;a>t;t++)if(o.isEndWith(u,n[t]))return!0;
  if(e=e||s.referrer)
  {
    var i=/^https?:\/\/[\w\.]+\.taobao\.com/i;
    return!i.test(e)
  }
  return!1
}
function i()
{
  return"boolean"==typeof p?p:p=o.isEndWith(u,m)||o.isEndWith(u,d)
}
var o=e("./util"),s=document,c=location,l=c.pathname,u=c.hostname,m="aliloan.com",d="mybank.cn";
a.getBeaconSrc=r,a.is_iframeExcption=n;
var p;
a.is_aliloan=i
}
,
{
"./util":13
}
],12:[function(e,t,a)
{
"use strict";
function r(e)
{
  var t,a=e.split("."),r=a.length;
  return t=n.any(i,function(t)
  {
    return n.isEndWith(e,t)
  }
  )?a.slice(r-3):a.slice(r-2),t.join(".")
}
var n=e("./util"),i=[".com.cn",".net.cn"];
a.getDomain=r
}
,
{
"./util":13
}
],13:[function(e,t,a)
{
"use strict";
function r(e,t)
{
  return e&&e.getAttribute?e.getAttribute(t)||"":""
}
function n(e)
{
  return f=f||h.getElementsByTagName("head")[0],_&&!e?_:f?_=f.getElementsByTagName("meta"):[]
}
function i(e)
{
  var t,a,i,o=n(),s=o.length;
  for(t=0;s>t;t++)a=o[t],r(a,"name")===e&&(i=r(a,"content"));
  return i||""
}
function o(e)
{
  e=(e||"").split("#")[0].split("?")[0];
  var t=e.length,a=function(e)
  {
    var t,a=e.length,r=0;
    for(t=0;a>t;t++)r=31*r+e.charCodeAt(t);
    return r
  };
  return t?a(t+"#"+e.charCodeAt(t-1)):-1
}
function s(e,t)
{
  return e.indexOf(t)>-1
}
function c(e,t)
{
  return 0===e.indexOf(t)
}
function l(e,t)
{
  var a=e.length,r=t.length;
  return a>=r&&e.indexOf(t)==a-r
}
function u(e)
{
  return"function"==typeof e
}
function m(e)
{
  return"string"==typeof e?e.replace(/^\s+|\s+$/g,""):""
}
function d(e,t,a)
{
  e[A]((v?"on":"")+t,function(e)
  {
    e=e||b.event;
    var t=e.target||e.srcElement;
    a(e,t)
  }
  ,!1)
}
function p(e,t)
{
  var a,r=e.length;
  for(a=0;r>a;a++)t(e[a])
}
function g(e,t)
{
  var a,r=e.length;
  for(a=0;r>a;a++)if(t(e[a]))return!0;
  return!1
}
var f,_,h=document,b=window;
a.tryToGetAttribute=r,
a.getMetaTags=n,a.getMetaCnt=i,a.makeChkSum=o,a.isContain=s,a.isStartWith=c,a.isEndWith=l,a.isFunction=u,a.trim=m,a.rndInt32=function()
{
  return Math.round(2147483647*Math.random())
};
var v=!!h.attachEvent,E="attachEvent",S="addEventListener",A=v?E:S;
a.on=d,a.DOMReady=function(e)
{
  var t=b.KISSY;
  t&&u(t.ready)?t.ready(e):b.jQuery?jQuery(h).ready(e):"complete"===h.readyState?e():d(b,"load",e)
}
,a.onload=function(e)
{
  d(b,"load",e)
}
,a.each=p,a.any=g
}
,
{
}
]
}
,
{
}
,[2]);
