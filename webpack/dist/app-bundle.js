!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e,t){"use strict";var r=t(2),o=function(n){return new Promise(function(e,t){var o=new r;o.onerror=function(n){o.terminate(),t(n)},o.onmessage=function(n){o.terminate(),e(n.data)},o.postMessage(n)})};window.calc=function(){for(var n=function(n){var e=document.getElementById("result"+n);e.value="Calculating...",o(40+n).then(function(n){e.value=n})},e=1;e<=4;e++)n(e)}},,function(n,e,t){n.exports=function(){return new Worker(t.p+"8326e76ae84e026da11a.worker.js")}}]);
//# sourceMappingURL=app-bundle.js.map