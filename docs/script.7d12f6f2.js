parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"geDd":[function(require,module,exports) {
var define;
var e;!function(t,n){"function"==typeof e&&e.amd?e(function(){return n(t)}):"object"==typeof exports?module.exports=n:t.emergence=n(t)}(this,function(e){"use strict";var t,n,o,i,r,s,c,a,l,d,f={},u=function(){},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},h=function(e){var t=e.offsetWidth,n=e.offsetHeight,o=0,i=0;do{isNaN(e.offsetTop)||(o+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft)}while(null!==(e=e.offsetParent));return{width:t,height:n,top:o,left:i}},g=function(e){if(function(e){return null===e.offsetParent}(e))return!1;var t,o,i,r,f,u,m,g,v=h(e),w=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}}(n),p=function(e){return e!==window?{x:e.scrollLeft+h(e).left,y:e.scrollTop+h(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}}(n),E=v.width,y=v.height,L=v.top,b=v.left;return t=L+y*s,o=b+E-E*s,i=L+y-y*s,r=b+E*s,f=p.y+c,u=p.x-a+w.width,m=p.y-l+w.height,g=p.x+d,t<m&&i>f&&r<u&&o>g},v=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},o))};return f.init=function(e){var t,f,h=function(e,t){return parseInt(e||t,10)};n=(e=e||{}).container||window,i=void 0===e.reset||e.reset,r=void 0===e.handheld||e.handheld,o=h(e.throttle,250),t=e.elemCushion,f=.15,s=parseFloat(t||f),c=h(e.offsetTop,0),a=h(e.offsetRight,0),l=h(e.offsetBottom,0),d=h(e.offsetLeft,0),u=e.callback||u,"querySelectorAll"in document?(m()&&r||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",v,!1),n.addEventListener("scroll",v,!1),n.addEventListener("resize",v,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&v()}),n.attachEvent("onscroll",v),n.attachEvent("onresize",v))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,o=0;o<n;o++)e=t[o],g(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,u(e,"visible")):!0===i?(e.setAttribute("data-emergence","hidden"),e.className=e.className,u(e,"reset")):!1===i&&u(e,"noreset");n||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",v,!1),n.removeEventListener("resize",v,!1)):(n.detachEvent("onscroll",v),n.detachEvent("onresize",v)),clearTimeout(t)},f});
},{}],"mpVp":[function(require,module,exports) {
var o=require("emergence.js"),t=o(),e="home-group",n="show-me-your-work-group",c="what-you-can-do-group",r="smooth-animation-group",a="contact-group",i={};function u(o,t){document.getElementById(o).style.order=t,document.getElementById(o).classList.remove("hidden")}function l(o,t,e){if(!i["".concat(t).concat(e)]){var n=document.createElement("a"),c=document.createTextNode(o);return n.appendChild(c),n.setAttribute("href",t),n.classList.add("btn"),document.querySelector("#".concat(e," .button-group")).appendChild(n),i["".concat(t).concat(e)]=!0,n}return null}function s(o){o.remove()}function d(o,t){var e=document.querySelector(o);if(e&&!e.classList.contains("gallery-active")){var n="right"==t?t:"left";e.classList.add("gallery-active"),e.style.position="relative";var c=e.childElementCount,r=e.clientWidth,a=c*(r/c)/1.5;e.style[n]=-a+"px";var i=0;e.addEventListener("click",function(){var o=parseInt(e.style[n].replace("px",""));++i>=c?(e.style[n]=-a+"px",i=0):e.style[n]=i==c-1?"0px":o+r/c+"px"})}}document.querySelectorAll(".message-block").forEach(function(o){return o.style.top="0px"}),document.querySelectorAll(".group-container").forEach(function(o,t){return o.style.order=t}),document.querySelector("#".concat(e," .show-me-your-work-btn")).addEventListener("click",function(){u(n,1),document.querySelector("#".concat(e," .what-you-can-do-btn")).remove(),document.querySelector("#".concat(e," .show-me-your-work-btn")).remove(),d(".gallery-block-show-me-your-work");var o=l("What you can do?","#what-you-can-do-group",n),t=l("Show me smooth animations","#smooth-animation-group",n);o&&o.addEventListener("click",function(){s(t),s(o),u(c,2);var e=l("Contact info","#contact-group",c);e&&e.addEventListener("click",function(){s(e),u(a,3)})}),t&&t.addEventListener("click",function(){s(o),s(t),u(r,2),d(".gallery-block-smooth-animation");var e=l("What you can do?","#what-you-can-do-group",r);e&&e.addEventListener("click",function(){s(e),u(c,3);var o=l("Contact info","#contact-group",c);o&&o.addEventListener("click",function(){s(o),u(a,4)})})})}),document.querySelector("#".concat(e," .what-you-can-do-btn")).addEventListener("click",function(){u(c,1),document.querySelector("#".concat(e," .show-me-your-work-btn")).remove(),document.querySelector("#".concat(e," .what-you-can-do-btn")).remove();var o=l("Show me Your work","#show-me-your-work-group",c),t=l("Show me smooth animations","#smooth-animation-group",c);o.addEventListener("click",function(){s(t),s(o),u(n,2),d(".gallery-block-show-me-your-work");var e=l("Show me smooth animations","#smooth-animation-group",n);e.addEventListener("click",function(){s(e),u(r,3),d(".gallery-block-smooth-animation");var o=l("Contact info","#contact-group",r);o.addEventListener("click",function(){s(o),u(a,4)})})}),t.addEventListener("click",function(){s(o),s(t),u(r,2),d(".gallery-block-smooth-animation");var e=l("Show me Your work","#show-me-your-work-group",r);e.addEventListener("click",function(){s(e),u(n,3),d(".gallery-block-show-me-your-work");var o=l("Contact info","#contact-group",n);o.addEventListener("click",function(){s(o),u(a,4)})})})}),d(".gallery-block-home-group"),t.init({container:window,reset:!1,handheld:!0,throttle:25,elemCushion:.15,offsetTop:0,offsetRight:0,offsetBottom:0,offsetLeft:0,callback:function(o,t){document.querySelectorAll(".message-block[data-emergence=visible]").forEach(function(o){var t=o.getBoundingClientRect().top,e=window.outerHeight;if(t>=0&&t<=e){var n=t/e*100;n>=0&&n<=8?o.style.top=t/e*100-120+"px":n>8&&n<=25?o.style.top=t/e*100-100+"px":n>25&&n<=50?o.style.top=t/e*100-85+"px":n>50&&n<=75?o.style.top=t/e*70-60+"px":n>75&&n<=100&&(o.style.top=t/e*50-40+"px")}})}}),setTimeout(function(){window.scrollTo(0,0)},200);
},{"emergence.js":"geDd"}]},{},["mpVp"], null)
//# sourceMappingURL=script.7d12f6f2.js.map