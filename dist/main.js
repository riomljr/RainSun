(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  display: flex;\n  justify-content: space-evenly;\n  align-content: space-around;\n\n\n}\n\n.searchBox {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 2%;\n  max-width: 20%;\n  border-radius: 5%;\n  box-shadow: 5px 5px 10px 2px rgba(225, 223, 223, 0.8);\n  background-image: linear-gradient(to right, rgb(248, 243, 243), rgb(225, 224, 228));\n\n  \n}\n\n#subBox {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10%;\n  \n  \n}\n\n\ntime {\n  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n#input {\n \n  text-align: center;\n \n  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n\n\n}\n\n#button {\n  display: flex;\n  justify-content: center;\n  \n  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  \n}\n\n#icon {\n  max-width: 50%;\n  box-shadow: 20px 5px 10px 1px rgba(223, 230, 231, 0.8);\n  border-radius: 90%;\n  background-image: linear-gradient(to right, rgba(246, 242, 242, 0), rgb(189, 188, 193));\n}\n\n#container{\n display: flex;\n}\n\n\nsub-weather{\n  display: flex;\n  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  padding: 15%;\n  margin: 5%;\n  justify-content: center;\n  border-radius: 10%;\n  box-shadow: 5px 5px 10px 2px rgba(225, 223, 223, 0.8);\n  background-image: linear-gradient(to right, rgb(252, 248, 248), rgb(225, 224, 228));\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),d=t.n(u),l=t(589),p=t.n(l),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"480c02b3176fc05c58f8.svg",g=(t.p,t.p+"55422f882a4f7a801e19.svg"),v=t.p+"82d493fc389b8c730118.svg",y=t.p+"d0afc492a200f9650be3.svg",b=(t.p,t.p+"7d9bdc4d85bf8a6df385.svg"),x=t.p+"9ead3f7e874a03099e4b.svg",w=t.p+"e61faee5b9692f9897af.svg",C=t.p+"9ed9031b8fd64da63790.svg";function T(e){(async function(e="New York"){const n="https://api.weatherapi.com/v1/current.json?key=ae97ffa5fd484ce4991153204232205&q="+e.toString()+"&aqi=no",t=await fetch(n,{mode:"cors"}),r=await t.json();return{City:r.location.name,Weather:r.current.condition.text,Temp:parseInt(r.current.temp_f)+"°F",FeelsLike:parseInt(r.current.feelslike_f)+"°F",Humidity:parseInt(r.current.humidity)+"%",Wind:r.current.wind_mph+" mph",Icon:r.current.condition.icon}})(e).then((e=>function(e){const n=document.getElementById("container"),t=document.createElement("weather");n.appendChild(t);let r=e.Weather.toLowerCase();!function(e){for(const n in e)if("Icon"!=n){let r=document.createElement("sub-weather");r.className=n,r.textContent=`${n}: ${e[n]}`,t.appendChild(r)}else e[n]}(e);const o=document.querySelector("img");let a=(i={overcast:h,cloudy:h,"partly cloudy":g,sunny:v,mist:w,rainy:b,thunder:y,clear:C,default:x})[r]||i.default;var i;o.src=a;const c=document.querySelector(".searchBox"),s=document.createElement("time");s.innerText=(new Date).toDateString(),c.appendChild(s)}(e))).catch((e=>function(e){const n=document.querySelector("#container"),t=document.createElement("h2");t.innerText="No results, sorry! Try Again!",t.classList.add("app-wrapper"),t.classList.add("error-text"),n.appendChild(t)}()))}document.querySelector("#button").addEventListener("click",(function(){(function(){const e=document.querySelector("#container");for(document.querySelector("#icon");e.firstChild;)e.removeChild(e.lastChild);const n=document.querySelector(".searchBox");for(;"subBox"!==n.lastChild.id;)n.removeChild(n.lastChild)})(),T(document.querySelector("#input").value)})),T("New York")})()})();