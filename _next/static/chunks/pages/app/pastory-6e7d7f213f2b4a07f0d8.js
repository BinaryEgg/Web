_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=n.cssRules();return n.flush(),e},t.default=void 0;var i,r=s("q1tI");var n=new(((i=s("SevZ"))&&i.__esModule?i:{default:i}).default),o=function(e){var t,s;function i(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=i).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,i.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return n.computeId(t,s)})).join(" ")};var r=i.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){n.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&n.remove(this.prevProps),n.add(this.props),this.prevProps=this.props),null},i}(r.Component);t.default=o},"8oxB":function(e,t){var s,i,r=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:n}catch(e){s=n}try{i="function"===typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var a,l=[],u=!1,d=-1;function h(){u&&a&&(u=!1,a.length?l=a.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=c(h);u=!0;for(var t=l.length;t;){for(a=l,l=[];++d<t;)a&&a[d].run();d=-1,t=l.length}a=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function _(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];l.push(new m(e,t)),1!==l.length||u||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},HXVO:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/pastory",function(){return s("dtp5")}])},MX0m:function(e,t,s){e.exports=s("3niX")},P5Cr:function(e,t,s){e.exports={section1_bg:"Pastory_section1_bg__juuyb",section1:"Pastory_section1__1LZr4",download_from_mac_app_store:"Pastory_download_from_mac_app_store__E2xVm",info:"Pastory_info__2YRbi",section2:"Pastory_section2__1UHah",section3:"Pastory_section3__djT9v",section4:"Pastory_section4__2Mio0",section5:"Pastory_section5__To7Gc",indicator:"Pastory_indicator__2QgE-",selected_indicator:"Pastory_selected_indicator__Iv-TP",section:"Pastory_section__24Ks5",author_container:"Pastory_author_container__2x9Uw"}},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var i=n(s("9kyW")),r=n(s("bVZc"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,i=void 0===s?null:s,n=t.optimizeForSpeed,o=void 0!==n&&n,c=t.isBrowser,a=void 0===c?"undefined"!==typeof window:c;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),i=s.styleId,r=s.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var n=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=n,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];i?(i.parentNode.removeChild(i),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var r=String(s),n=t+r;return e[n]||(e[n]="jsx-"+(0,i.default)(t+"-"+r)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=s+i;return t[r]||(t[r]=i.replace(e,s)),t[r]}},t.getIdAndRules=function(e){var t=this,s=e.children,i=e.dynamic,r=e.id;if(i){var n=this.computeId(r,i);return{styleId:n,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(n,e)})):[this.computeSelector(n,s)]}}return{styleId:this.computeId(r),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var t=void 0===e?{}:e,s=t.name,n=void 0===s?"stylesheet":s,c=t.optimizeForSpeed,a=void 0===c?i:c,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(r(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",o("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,c,a=e.prototype;return a.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(o(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(c){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(n){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];o(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,s){t&&o(r(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return s?n.insertBefore(i,s):n.appendChild(i),i},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,n),c&&s(t,c),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=n}).call(this,s("8oxB"))},dtp5:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return p}));var i=s("nKUr"),r=s("MX0m"),n=s.n(r),o=s("8Kt/"),c=s.n(o),a=s("YFqc"),l=s.n(a),u=s("uW2g"),d=s("P5Cr"),h=s.n(d);function p(){var e,t,s=function(t){void 0===e&&(e=document.getElementById("select_multiple_items_img")),o(e,t.target,t.target.id,document.getElementById("section3_img")),e=t.target},r=function(e){void 0===t&&(t=document.getElementById("plain_text_img")),o(t,e.target,e.target.id,document.getElementById("section4_img")),t=e.target},o=function(e,t,s,i){e.style.color="#999",t.style.color="#000",i.style.backgroundImage="url('/images/pastory/"+s+".webp')",t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})};return Object(i.jsxs)("main",{className:"jsx-807694571",children:[Object(i.jsx)(n.a,{id:"807694571",children:["body{background-color:#333;}"]}),Object(i.jsx)(c.a,{children:Object(i.jsx)("title",{className:"jsx-807694571",children:"Pastory"})}),Object(i.jsx)("div",{className:"jsx-807694571 "+(h.a.section1_bg||""),children:Object(i.jsxs)("div",{className:"jsx-807694571 "+"".concat(h.a.section1," ").concat(h.a.pastory_container),children:[Object(i.jsx)("img",{src:"/images/pastory/icon.webp",alt:"Pastory Icon",width:"120px",height:"120px",className:"jsx-807694571 "+(h.a.icon||"")}),Object(i.jsx)("h1",{className:"jsx-807694571",children:Object(i.jsx)("span",{id:"text_yellow_underline",className:"jsx-807694571",children:"Pastory"})}),Object(i.jsx)("p",{className:"jsx-807694571",children:"A new way to manage your clipboard history."}),Object(i.jsx)("img",{src:"/images/download_from_mac_app_store.svg",alt:"Download from mac app store",width:"160px",height:"40px",className:"jsx-807694571 "+(h.a.download_from_mac_app_store||"")}),Object(i.jsx)("span",{className:"jsx-807694571 "+(h.a.info||""),children:"Require macOS 10.14 or later"})]})}),Object(i.jsx)("div",{className:"jsx-807694571 "+"".concat(h.a.section2," ").concat(h.a.section),children:Object(i.jsx)("img",{src:"/images/pastory/section2_bg.webp",className:"jsx-807694571"})}),Object(i.jsxs)("div",{className:"jsx-807694571 "+"".concat(h.a.section3," ").concat(h.a.section),children:[Object(i.jsxs)("ul",{className:"jsx-807694571",children:[Object(i.jsxs)("li",{id:"select_multiple_items_img",onClick:s,className:"jsx-807694571 "+(h.a.selected_indicator||""),children:["Select Multiple",Object(i.jsx)("br",{className:"jsx-807694571"})," Items"]}),Object(i.jsxs)("li",{id:"quick_switch_pasteboard_img",onClick:s,className:"jsx-807694571 "+(h.a.indicator||""),children:["Quick Switch",Object(i.jsx)("br",{className:"jsx-807694571"})," Clipboard"]}),Object(i.jsxs)("li",{id:"move_to_clipboard",onClick:s,className:"jsx-807694571 "+(h.a.indicator||""),children:["Move to Another",Object(i.jsx)("br",{className:"jsx-807694571"})," Clipboard"]})]}),Object(i.jsx)("div",{id:"section3_img",className:"jsx-807694571"})]}),Object(i.jsxs)("div",{className:"jsx-807694571 "+"".concat(h.a.section3," ").concat(h.a.section4," ").concat(h.a.section),children:[Object(i.jsx)("div",{id:"section4_img",className:"jsx-807694571"}),Object(i.jsxs)("ul",{className:"jsx-807694571",children:[Object(i.jsx)("li",{id:"plain_text_img",onClick:r,className:"jsx-807694571 "+(h.a.selected_indicator||""),children:"Plain Text"}),Object(i.jsx)("li",{id:"rich_text_img",onClick:r,className:"jsx-807694571 "+(h.a.indicator||""),children:"Rich Text"}),Object(i.jsx)("li",{id:"image_img",onClick:r,className:"jsx-807694571 "+(h.a.indicator||""),children:"Image"}),Object(i.jsx)("li",{id:"file_img",onClick:r,className:"jsx-807694571 "+(h.a.indicator||""),children:"File"}),Object(i.jsx)("li",{id:"color_img",onClick:r,className:"jsx-807694571 "+(h.a.indicator||""),children:"Color"}),Object(i.jsx)("li",{id:"link_img",onClick:r,className:"jsx-807694571 "+(h.a.indicator||""),children:"Link"})]})]}),Object(i.jsxs)("div",{className:"jsx-807694571 "+"".concat(h.a.section5," ").concat(h.a.section),children:[Object(i.jsx)("h1",{className:"jsx-807694571",children:"More Features"}),Object(i.jsxs)("div",{className:"jsx-807694571",children:[Object(i.jsx)("h2",{className:"jsx-807694571",children:"Auto Paste"}),Object(i.jsx)("p",{className:"jsx-807694571",children:"Auto paste to current running app."})]}),Object(i.jsxs)("div",{className:"jsx-807694571",children:[Object(i.jsx)("h2",{className:"jsx-807694571",children:"Ignore App"}),Object(i.jsx)("p",{className:"jsx-807694571",children:"Ignore copied content from specific app."})]}),Object(i.jsxs)("div",{className:"jsx-807694571",children:[Object(i.jsx)("h2",{className:"jsx-807694571",children:"Save to File"}),Object(i.jsx)("p",{className:"jsx-807694571",children:"Save the contents of the copied content to the file, including plain text, rich text, and image."})]}),Object(i.jsxs)("div",{className:"jsx-807694571",children:[Object(i.jsx)("h2",{className:"jsx-807694571",children:"Multiple Clipboards"}),Object(i.jsx)("p",{className:"jsx-807694571",children:"Create your own clipboard and move copied item to it."})]}),Object(i.jsxs)("div",{className:"jsx-807694571",children:[Object(i.jsx)("h2",{className:"jsx-807694571",children:"Shortcuts Support"}),Object(i.jsx)("p",{className:"jsx-807694571",children:"Full shortcut key support."})]}),Object(i.jsxs)("div",{className:"jsx-807694571",children:[Object(i.jsx)("h2",{className:"jsx-807694571",children:"Data Safety"}),Object(i.jsx)("p",{className:"jsx-807694571",children:"Data is stored only on your local device."})]})]}),Object(i.jsx)("div",{className:"jsx-807694571 "+"".concat(h.a.author_container," ").concat(h.a.section),children:Object(i.jsxs)("p",{className:"jsx-807694571",children:["Made by ",Object(i.jsx)(l.a,{href:"/",children:Object(i.jsx)("a",{id:"text_yellow_underline",className:"jsx-807694571",children:"BinaryEgg"})})]})}),Object(i.jsx)(u.a,{})]})}}},[["HXVO",0,2,1,3]]]);