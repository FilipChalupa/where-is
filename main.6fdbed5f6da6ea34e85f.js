!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);var a={angle:function(t,e,n,r){var o=this.degToRad(r-e),a=Math.sin(o)*Math.cos(this.degToRad(n)),i=Math.cos(this.degToRad(t))*Math.sin(this.degToRad(n))-Math.sin(this.degToRad(t))*Math.cos(this.degToRad(n))*Math.cos(o);return(this.radToDeg(Math.atan2(a,i))+360)%360},degToRad:function(t){return t*Math.PI/180},radToDeg:function(t){return 180*t/Math.PI}};function i(t,e,n=[]){const r=document.createElement(t);return r.classList.add(e),n.forEach(t=>{r.appendChild(t)}),r}!function(t,e,n,r,o,a,i){t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=e.createElement(n),i=e.getElementsByTagName(n)[0],a.async=1,a.src="//www.google-analytics.com/analytics.js",i.parentNode.insertBefore(a,i)}(window,document,"script",0,"ga"),ga("create","UA-52555251-5","auto"),ga("send","pageview");const s=i("h1",o.a.title),c=i("div",o.a.arrow),l=i("div",o.a.compass,[c]);s.textContent="Kde je Brno?",document.body.appendChild(i("div",o.a.layout,[s,l]));let u=0,f=0;const d=()=>{f+=(u-f)/2,l.style.transform=`rotate(${f}deg)`,requestAnimationFrame(d)};navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{(t=>{const e=a.angle(t.coords.latitude,t.coords.longitude,49.2020489,16.5079214);d(),window.DeviceMotionEvent?window.addEventListener("deviceorientation",t=>{let n;(n=void 0===t.webkitCompassHeading?t.alpha:t.webkitCompassHeading)&&(c.style.transform="none",u=n+e)}):alert("Compass not supported.")})(t)},()=>{alert("Nepodařilo se zjistit vaši polohu. :(")}):alert("Vaše zařízení nepodporuje zjišťování polohy.")},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),i=null,s=0,c=[],l=n(2);function u(t,e){for(var n=0;n<t.length;n++){var o=t[n],a=r[o.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(v(o.parts[i],e))}else{var s=[];for(i=0;i<o.parts.length;i++)s.push(v(o.parts[i],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function d(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),d(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var c=s++;n=i||(i=h(e)),r=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),d(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return u(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var i=n[a];(s=r[i.id]).refs--,o.push(s)}t&&u(f(t,e),e);for(a=0;a<o.length;a++){var s;if(0===(s=o[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){(e=t.exports=n(4)(!1)).push([t.i,"*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tmargin: 0;\n\ttext-align: center;\n\tbackground-color: #000000;\n\t--base: 1vw;\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\t--base: 1vh;\n\t}\n}\n\n.layout--2oFFY {\n\tpadding: 1em;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\theight: 100vh;\n\toverflow: hidden;\n}\n\n.title--2A5Lc {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin: 1em;\n\tfont-size: calc(var(--base) * 9);\n\tcolor: #ffffff;\n\tmix-blend-mode: soft-light;\n}\n\n.compass--2borG {\n\tposition: relative;\n\twidth: calc(var(--base) * 80);\n\ttransform: rotate(0deg);\n}\n\n.compass--2borG::before {\n\tcontent: '';\n\tdisplay: block;\n\tpadding-top: 100%;\n}\n\n.arrow--yy2L7 {\n\tposition: absolute;\n\ttop: 0;\n\tleft: calc(50% - var(--base) * 8 / 2);\n\twidth: calc(var(--base) * 8);\n\theight: 100%;\n\tcolor: #cb0e21;\n\ttransform: scale(0);\n\ttransition: transform 0.2s;\n}\n\n.arrow--yy2L7::before {\n\tcontent: '';\n\tposition: absolute;\n\tbottom: 86%;\n\tleft: calc(-4 * var(--base));\n\n\tborder-bottom: calc(var(--base) * 15) solid;\n\tborder-left: calc(var(--base) * 8) solid transparent;\n\tborder-right: calc(var(--base) * 8) solid transparent;\n}\n\n.arrow--yy2L7::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\theight: 87%;\n\tbackground-color: currentColor;\n}\n",""]),e.locals={layout:"layout--2oFFY",title:"title--2A5Lc",compass:"compass--2borG",arrow:"arrow--yy2L7"}}]);