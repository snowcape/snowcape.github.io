var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(d,e,h){d instanceof String&&(d=String(d));for(var g=d.length,t=0;t<g;t++){var u=d[t];if(e.call(h,u,t,d))return{i:t,v:u}}return{i:-1,v:void 0}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(d,e,h){d!=Array.prototype&&d!=Object.prototype&&(d[e]=h.value)};$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};
$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(d,e,h,g){if(e){h=$jscomp.global;d=d.split(".");for(g=0;g<d.length-1;g++){var t=d[g];t in h||(h[t]={});h=h[t]}d=d[d.length-1];g=h[d];e=e(g);e!=g&&null!=e&&$jscomp.defineProperty(h,d,{configurable:!0,writable:!0,value:e})}};$jscomp.polyfill("Array.prototype.find",function(d){return d?d:function(d,h){return $jscomp.findInternal(this,d,h).v}},"es6-impl","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var d=$jscomp.global.Symbol.iterator;d||(d=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[d]&&$jscomp.defineProperty(Array.prototype,d,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(d){var e=0;return $jscomp.iteratorPrototype(function(){return e<d.length?{done:!1,value:d[e++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(d){$jscomp.initSymbolIterator();d={next:d};d[$jscomp.global.Symbol.iterator]=function(){return this};return d};$jscomp.iteratorFromArray=function(d,e){$jscomp.initSymbolIterator();d instanceof String&&(d+="");var h=0,g={next:function(){if(h<d.length){var t=h++;return{value:e(t,d[t]),done:!1}}g.next=function(){return{done:!0,value:void 0}};return g.next()}};g[Symbol.iterator]=function(){return g};return g};
$jscomp.polyfill("Array.prototype.keys",function(d){return d?d:function(){return $jscomp.iteratorFromArray(this,function(d){return d})}},"es6-impl","es3");window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var Themify;
!function(d){var e,h=d.event;var g=h.special.tfsmartresize={setup:function(){d(this).on("resize",g.handler)},teardown:function(){d(this).off("resize",g.handler)},handler:function(d,u){if(!Themify.inputFocus){var a=this,b=arguments,c=this.innerWidth,n=this.innerHeight,m=function(){d.w=c;d.h=n;d.type="tfsmartresize";h.dispatch.apply(a,b);Themify.w=c;Themify.h=n};e&&clearTimeout(e);u?m():e=setTimeout(m,g.threshold)}},threshold:150}}(jQuery);
(function(d,e,h,g){e.addEventListener("load",function(){e.loaded=!0;Themify.is_builder_active||Themify.triggerEvent(e,"resize");Themify.body[0].classList.add("page-loaded");Themify.body.on("focus","input",function(){Themify.inputFocus=!0}).on("blur","input",function(){Themify.inputFocus=!1})},{once:!0,passive:!0});var t=null;if("function"!==typeof e.CustomEvent){var u=function(a,b){var c=h.createEvent("CustomEvent");c.initCustomEvent(a,!1,!1,b!==g?b.detail:g);return c};u.prototype=e.Event.prototype;
e.CustomEvent=u}Themify={fonts:[],loadedFonts:{},cssLazy:[],jsLazy:[],body:null,is_builder_active:!1,is_builder_loaded:!1,w:null,h:null,isTouch:!1,isRTL:!1,isoTopItems:[],isoTopSelectors:{},backstretchItems:[],isLoaded:null,inputFocus:!1,triggerEvent:function(a,b,c){try{var g=new e.CustomEvent(b,{detail:c})}catch(m){g=e.CustomEvent(b,{detail:c})}a.dispatchEvent(g)},UpdateQueryString:function(a,b,c){c||(c=e.location.href);var g=RegExp("([?|&])"+a+"=.*?(&|#|$)(.*)","gi");if(g.test(c))return void 0!==
b&&null!==b?c.replace(g,"$1"+a+"="+b+"$2$3"):c.replace(g,"$1$3").replace(/(&|\?)$/,"");if(void 0!==b&&null!==b){var g=-1!==c.indexOf("?")?"&":"?",m=c.split("#");return c=m[0]+g+a+"="+b,m[1]&&(c+="#"+m[1]),c}return c},Init:function(){this.body=d("body");this.isRTL=this.body[0].classList.contains("rtl");this.isTouch=this.body[0].classList.contains("touch");this.w=e.innerWidth;this.h=e.innerHeight;if(e.themify_vars!==g){if(e.tbLocalScript!==g&&null!==e.tbLocalScript){var a=this;this.is_builder_active=
this.body[0].classList.contains("themify_builder_active");!0===this.is_builder_active&&(e.top.Themify.is_builder_active=!0);var b=function(b,n){if(null!==h.querySelector(".themify_builder_content div:not(.js-turn-on-builder)")){if(!a.is_builder_active){if(null===a.isLoaded){var c=h.getElementById("builder-styles-css");if(null!==c&&null===h.getElementById("themify-builder-style")){var p=h.createElement("link");p.id="themify-builder-style";p.rel="stylesheet";p.type="text/css";p.href=tbLocalScript.builder_url+
"/css/themify-builder-style.css?ver="+themify_vars.version;c.insertAdjacentElement("beforebegin",p);c=null}}if(n){c=n[0].getElementsByClassName("tb_style_generated");for(p=c.length-1;-1<p;--p)a.LoadCss(c[p].getAttribute("data-url"),!1),c[p].parentNode.removeChild(c[p]);!0===a.isLoaded&&d(e).triggerHandler("resize")}}null===a.isLoaded&&a.LoadAsync(tbLocalScript.builder_url+"/js/themify.builder.script.js",function(){n&&d(e).triggerHandler("resize");a.isLoaded=!0},null,null,function(){return e.ThemifyBuilderModuleJs!==
g});return!0}return!1};d(function(){tbLocalScript.isTouch=a.isTouch;if(!a.is_builder_active&&!1===b())a.body.on("infiniteloaded.themify",b)})}this.bindEvents()}},bindEvents:function(){var a=this;e.loaded?(a.domready(),a.windowload()):(d(e).one("load",a.windowload),d(function(){a.domready();if(!0===a.is_builder_active)a.body.on("builder_load_module_partial.tf_masonry",a.liveIsoTop)}))},domready:function(a,b){a||setTimeout(this.LazyLoad,10);if(!1===this.is_builder_active||!0===b){this.InitCarousel(a);
this.InitMap(a);var c=a;c?(c=c[0],c.classList.contains("auto_tiles")&&this.autoTiles(c)):c=h;this.autoTiles(c.querySelectorAll(".auto_tiles.loops-wrapper"))}},windowload:function(){for(var a=h.getElementsByClassName("shortcode"),b=a.length-1;-1<b;--b)if(a[b].classList.contains("slider")||a[b].classList.contains("post-slider"))a[b].style.height="auto",a[b].style.visibility="visible";a=h.getElementsByClassName("slideshow-wrap");for(b=a.length-1;-1<b;--b)a[b].style.height="auto",a[b].style.visibility=
"visible";Themify.is_builder_active||(Themify.InitGallery(),Themify.parallaxScrollingInit())},LazyLoad:function(){var a=Themify;if(a.loadedFonts.awesome===g){var b=a.is_builder_active||null!==h.querySelector(".fa,.fas,.fab,.far");!1===b&&(b=a.checkFont("FontAwesome"));!0===b&&(a.loadedFonts.awesome=!0,a.LoadCss(themify_vars.url+"/fontawesome/css/font-awesome.min.css"))}a.loadedFonts.tf_icons===g&&(b=a.is_builder_active||null!==h.querySelector('.shortcode,.module-menu[data-menu-breakpoint],.section_spinner[class*="ti-"]'),
!1===b&&(b=null!==h.querySelector('span[class*="ti-"]'),!1===b&&(b=null!==h.querySelector('i[class*="ti-"]'),!1===b&&(b=a.checkFont("Themify")))),!0===b&&(a.loadedFonts.tf_icons=!0,a.LoadCss(themify_vars.url+"/themify-icons/themify-icons.css")));a.loadedFonts.fontello===g&&null!==h.querySelector('i[class*="icon-"]')&&(a.loadedFonts.fontello=!0,"string"===typeof themify_vars.fontello_path&&a.LoadCss(themify_vars.fontello_path));a.loadedFonts["framework-css"]!==g||!a.is_builder_active&&h.getElementsByClassName("shortcode")[0]===
g||(b=h.getElementById("themify-framework-css"),null!==b&&(a.loadedFonts["framework-css"]=!0,a.LoadCss(b.getAttribute("data-href"),!1,b)));""!==themify_vars.commentUrl&&a.loadComments()},loadComments:function(a){e.addComment===g&&null!==h.getElementById("cancel-comment-reply-link")&&this.LoadAsync(themify_vars.commentUrl,a,themify_vars.wp,null,null,function(){return e.addComment!==g})},InitCarousel:function(a){var b=d(".slides[data-slider]",a),c=this,n=function(){b.each(function(){if(0<d(this).closest(".carousel-ready").length)return!0;
d(this).find("> br, > p").remove();var a=d(this),b=JSON.parse(atob(d(this).data("slider"))),n="undefined"===typeof b.height?"auto":b.height,e=g!==b.custom_numsldr?"#"+b.custom_numsldr:"#slider-"+b.numsldr,k=1E3<=b.speed?b.speed:1E3*b.speed,f={responsive:!0,swipe:!0,circular:b.wrapvar,infinite:b.wrapvar,auto:{play:0!=b.auto,timeoutDuration:1E3<=b.auto?b.auto:1E3*b.auto,duration:k,pauseOnHover:b.pause_hover},scroll:{items:parseInt(b.scroll),duration:k,fx:b.effect},items:{visible:{min:1,max:parseInt(b.visible)},
width:120,height:n},onCreate:function(){a.closest(".caroufredsel_wrapper").outerHeight(a.outerHeight(!0));d(e).css({visibility:"visible",height:"auto"});a.closest(".carousel-wrap").addClass("carousel-ready");Themify.reLayoutIsoTop()}};b.slider_nav&&(f.prev=e+" .carousel-prev",f.next=e+" .carousel-next");b.pager&&(f.pagination=e+" .carousel-pager");c.imagesLoad(a,function(){a.carouFredSel(f)})});d(e).off("tfsmartresize.tfcarousel").on("tfsmartresize.tfcarousel",function(){b.each(function(){var a=[],
b=d(this);b.find("li").each(function(){a.push(d(this).outerHeight(!0))});var c=Math.max.apply(Math,a);b.outerHeight(c).parent().outerHeight(c)})});c=null};0<b.length&&this.imagesLoad(function(){"undefined"===typeof d.fn.carouFredSel?c.LoadAsync(themify_vars.url+"/js/carousel.min.js",n,null,null,function(){return"undefined"!==typeof d.fn.carouFredSel}):n()})},InitMap:function(a){var b=this;0<d(".themify_map",a).length&&setTimeout(function(){"object"!==typeof google||"object"!==typeof google.maps||
"enable"===themify_vars.isCached?("enable"===themify_vars.isCached?google.maps={__gjsload__:function(){}}:themify_vars.map_key||(themify_vars.map_key=""),b.LoadAsync("//maps.googleapis.com/maps/api/js",b.MapCallback,"v=3.exp&callback=Themify.MapCallback&key="+themify_vars.map_key,null,function(){return"object"===typeof google&&"object"===typeof google.maps})):b.MapCallback(a)},500);0<d(".themify_bing_map",a).length&&("object"!==typeof Microsoft||"object"!==typeof Microsoft.Maps||"enable"===themify_vars.isCached?
(themify_vars.bing_map_key=themify_vars.bing_map_key?themify_vars.bing_map_key:"",b.LoadAsync("//www.bing.com/api/maps/mapcontrol",function(){setTimeout(function(){b.GetMap(a)},1E3)},"&key="+themify_vars.bing_map_key,!0,function(){return"object"===typeof Microsoft&&"object"===typeof Microsoft.Maps})):b.GetMap(a))},MapCallback:function(a){d(".themify_map",a).each(function(a){var b=d(this),n=b.data("address"),m=parseInt(b.data("zoom")),e=b.data("type"),q=1===b.data("scroll"),l=1===b.data("drag"),k=
1===b.data("control");setTimeout(function(){var a=new google.maps.Geocoder;var c=new google.maps.LatLng(-34.397,150.644);c={zoom:m,center:c,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:q,draggable:l,disableDefaultUI:k};switch(e.toUpperCase()){case "ROADMAP":c.mapTypeId=google.maps.MapTypeId.ROADMAP;break;case "SATELLITE":c.mapTypeId=google.maps.MapTypeId.SATELLITE;break;case "HYBRID":c.mapTypeId=google.maps.MapTypeId.HYBRID;break;case "TERRAIN":c.mapTypeId=google.maps.MapTypeId.TERRAIN}var d=
new google.maps.Map(b[0],c),p=b.data("reverse-geocoding")?!0:!1;google.maps.event.addListenerOnce(d,"idle",function(){Themify.body.trigger("themify_map_loaded",[b,d])});b.data("gmap_object",d);if(p){var h=n.split(",",2);c=parseFloat(h[0]);h=parseFloat(h[1]);var x=new google.maps.LatLng(c,h);c={latLng:x}}else c={address:n};a.geocode(c,function(a,c){if(c==google.maps.GeocoderStatus.OK){var f=p?x:a[0].geometry.location;d.setCenter(f);var k=new google.maps.Marker({map:d,position:f}),f=b.data("info-window");
if(g!==f){var n=new google.maps.InfoWindow({content:'<div class="themify_builder_map_info_window">'+f+"</div>"});google.maps.event.addListener(k,"click",function(){n.open(d,k)})}}})},1E3*a)})},GetMap:function(a){d(".themify_bing_map",a).each(function(a){var b=d(this),n={},m=b.data("address"),p=parseInt(b.data("zoom")),h="1"!==b.data("scroll"),l="1"!==b.data("drag"),k=b.data("type"),f=1!==b.data("control");a*=1E3;var r,v,m=m.split(",");setTimeout(function(){function a(a){switch(k){case "aerial":a.mapTypeId=
Microsoft.Maps.MapTypeId.aerial;break;case "road":a.mapTypeId=Microsoft.Maps.MapTypeId.road;break;case "streetside":a.mapTypeId=Microsoft.Maps.MapTypeId.streetside;break;case "canvasDark":a.mapTypeId=Microsoft.Maps.MapTypeId.canvasDark;break;case "canvasLight":a.mapTypeId=Microsoft.Maps.MapTypeId.canvasLight;break;case "birdseye":a.mapTypeId=Microsoft.Maps.MapTypeId.birdseye;break;case "ordnanceSurvey":a.mapTypeId=Microsoft.Maps.MapTypeId.ordnanceSurvey;break;case "grayscale":a.mapTypeId=Microsoft.Maps.MapTypeId.grayscale}return a}
function c(f){v?v.geocode({where:f,callback:function(c){if(c&&c.results&&0<c.results.length){c={center:c.results[0].bestView.center};c=a(c);r.setView(c);c=new Microsoft.Maps.Pushpin(r.getCenter(),null);var f=b.data("info-window");if(g!==f){var d=new Microsoft.Maps.Infobox(r.getCenter(),{description:f,visible:!1});d.setMap(r);Microsoft.Maps.Events.addHandler(c,"click",function(a){d.setOptions({visible:!0})})}r.entities.push(c)}},errorCallback:function(a){"console"in e&&console.log("No results found.")}}):
Microsoft.Maps.loadModule("Microsoft.Maps.Search",function(){v=new Microsoft.Maps.Search.SearchManager(r);c(f)})}n={disableBirdseye:!0,disableScrollWheelZoom:h,showDashboard:f,credentials:themify_vars.bing_map_key,disablePanning:l,mapTypeId:null,zoom:p};try{r=new Microsoft.Maps.Map(b[0],n)}catch(x){Themify.GetMap();return}c(m);m=encodeURI(m)},a)})},LoadAsync:function(a,b,c,d,m){var n=this.hash(a),e=this.jsLazy[n]!==g,l=!0===e||h.getElementById(n);!1===e&&(this.jsLazy[n]=!0);if(!0===l){if(null!==d&&
d!==g&&""!==d&&this.loadExtra(d,h.getElementById(n)),b)if(m)if(!0===m.call())b.call();else var k=setInterval(function(){!0===m.call()&&(clearInterval(k),k=null,b.call())},20);else b()}else if(m&&!0===m.call())null!==d&&d!==g&&""!==d&&this.loadExtra(d),b&&b.call();else{-1===a.indexOf(".min.js")&&"undefined"!==typeof themify_vars&&null!==themify_vars&&(e=a.match(/([^\/]+)(?=\.\w+$)/))&&e[0]&&(e=e[0],themify_vars.minify.js[e]&&(a=a.replace(e+".js",e+".min.js")));var f=!1,e=h.createElement("script");
e.type="text/javascript";e.id=n;c||!1===c||"undefined"===typeof tbLocalScript||(c=tbLocalScript.version);e.src=c?a+"?ver="+c:a;e.async=!0;e.onload=e.onreadystatechange=function(){f||this.readyState&&"complete"!==this.readyState||(f=!0,b&&b())};h.head.appendChild(e);null!==d&&d!==g&&""!==d&&this.loadExtra(d,e)}},loadExtra:function(a,b,c){if(a){if("string"===typeof b&&(b=h.querySelector("script#"+b),null===b))return;var d="";if(b!==g&&null!==b&&a.before!==g){if("string"!==typeof a.before)for(var e in a.before)a.before[e]&&
(d+=a.before[e]);else d=a.before;if(""!==d){var p=h.createElement("script");p.type="text/javascript";p.text=d;b.parentNode.insertBefore(p,b)}}if("string"!==typeof a)for(e in d="",a)"before"!==e&&a[e]&&(d+=a[e]);else d=a;""!==d&&(a=h.createElement("script"),a.type="text/javascript",a.text=d,c===g||!0===c?h.head.appendChild(a):h.body.appendChild(a))}},LoadCss:function(a,b,c,d,m){if(null!==a&&a!==g){b||!1===b||"undefined"===typeof tbLocalScript||(b=tbLocalScript.version);var n=this.hash(a),q=-1!==this.cssLazy.indexOf(n),
l=!0===q||h.getElementById(n),k=b?a+"?ver="+b:a;!1===q&&this.cssLazy.push(n);!1===l&&(b=h.querySelector("link[href='"+k+"']"),l=null!==b&&"stylesheet"===b.getAttribute("rel"));if(!0===l||-1===a.indexOf(".min.css")&&e.themify_vars!==g&&null!==e.themify_vars&&(a=a.match(/([^\/]+)(?=\.\w+$)/))&&a[0]&&(a=a[0].replace(".min",""),themify_vars.minify.css[a]&&(k=k.replace(a+".css",a+".min.css"),b=h.querySelector("link[href='"+k+"']"),null!==b&&"stylesheet"===b.getAttribute("rel"))))return m&&m(),!1;a=e.document;
var f=a.createElement("link");c?b=c:(b=(a.body||a.head).childNodes,b=b[b.length-1]);var r=a.styleSheets;f.rel="stylesheet";-1===k.indexOf("http")&&(a=h.createElement("a"),a.href=k,k=a.href);f.href=k;f.media="only x";f.id=n;b.parentNode.insertBefore(f,c?b:b.nextSibling);var v=function(a){for(var b=k,c=r.length;--c;)if(r[c].href===b)return m&&m(),k=null,a();setTimeout(function(){v(a)})};f.onloadcssdefined=v;v(function(){f.media=d||"all"});return f}},checkFont:function(a){if(-1!==this.fonts.indexOf(a))return!0;
if(0===this.fonts.length){for(var b=[],c=h.styleSheets,d=c.length;0<=--d;)if(c[d].hasOwnProperty("cssRules")||c[d].hasOwnProperty("rules"))for(var g=c[d].cssRules||c[d].rules||[],e=g.length;0<=--e;)if(g[e].style){if(g[e].style.fontFamily)var q=g[e].style.fontFamily;else(q=g[e].style.cssText.match(/font-family\s*:\s*([^;\}]*)\s*[;}]/i))&&(q=q[1]);if(q===a)return this.fonts.push(q),!0;q&&(b[q]=!0)}this.fonts=Object.keys(b)}return!1},lightboxCallback:function(a){this.LoadAsync(themify_vars.url+"/js/themify.gallery.js",
function(){Themify.GalleryCallBack(a)},null,null,function(){return e.ThemifyGallery!==g})},InitGallery:function(a){if(!0!==this.jsLazy.lightbox){var b=!1,c="object"===typeof themifyScript&&themifyScript.lightbox;this.is_builder_active||((b=c&&(c.lightboxContentImages&&null!==h.querySelector(c.contentImagesAreas)||c.lightboxSelector&&null!==h.querySelector(c.lightboxSelector)))||(b=c&&c.lightboxGalleryOn&&(c.lightboxContentImagesSelector&&null!==h.querySelector(c.lightboxContentImagesSelector)||c.gallerySelector&&
null!==h.querySelector(c.gallerySelector))),!0===b&&(this.jsLazy.lightbox=!0,this.LoadCss(themify_vars.url+"/css/lightbox.css",null),this.LoadAsync(themify_vars.url+"/js/lightbox.min.js",function(){Themify.lightboxCallback(a)},null,null,function(){return"undefined"!==typeof d.fn.magnificPopup})));b||(this.body[0].classList.add("themify_lightbox_loaded"),this.body[0].classList.remove("themify_lightboxed_images"))}},GalleryCallBack:function(a){a=!a&&themifyScript.extraLightboxArgs?themifyScript.extraLightboxArgs:
{};ThemifyGallery.init({context:this.body,extraLightboxArgs:a});this.body[0].classList.add("themify_lightbox_loaded");this.body[0].classList.remove("themify_lightboxed_images")},parseVideo:function(a){a=a.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/i);return{type:null!==a?-1<a[3].indexOf("youtu")?"youtube":-1<a[3].indexOf("vimeo")?"vimeo":!1:!1,id:null!==a?a[6]:!1}},hash:function(a){for(var b=
0,c=a.length-1;-1<c;--c)b=(b<<5)-b+a.charCodeAt(c),b&=b;return b},getVendorPrefix:function(){if(this.vendor===g){for(var a=h.createElement("div"),b=["Moz","O","ms","Webkit"],c=b.length-1;-1<c;--c)if("undefined"!==typeof a.style[b[c]+"Transform"]){this.vendor=b[c].toLowerCase();break}this.vendor="-"+this.vendor+"-"}return this.vendor},scrollTo:function(a,b,c){b||(b=800);a||(a=0);d("html, body").stop().animate({scrollTop:a},{duration:b,complete:c})},imagesLoad:function(a,b){var c=function(a,b){b===
g&&"function"===typeof a?a():null!==a?a instanceof jQuery?a.imagesLoaded().always(b):imagesLoaded(a,b):"function"===typeof b&&b();c=null};g===e.imagesLoaded?this.LoadAsync(themify_vars.url+"/js/jquery.imagesloaded.min.js",c.bind(null,a,b),"4.1.0",null,function(){return g!==e.imagesLoaded}):c(a,b)},loadMainCss:function(a){if(null===t){var b=themify_vars.url+"/css/main.css",c=this.hash(b);this.LoadCss(b,null,h.getElementById("theme-style-css"),"all",function(a){var b=setInterval(function(){null!==h.getElementById(c)&&
(clearInterval(b),setTimeout(function(){t=!0;"function"===typeof a&&a();a=null},10))},10)}.bind(null,a))}else"function"===typeof a&&a()},setImageAsBackstretch:function(a,b,c){if(null!==a&&a!==g&&0!==a.length){this.loadMainCss();this.imagesLoad(null);a instanceof jQuery?a=a.get():a.length===g&&(a=[a]);var n=this,m=function(a,b,c){var k=function(a,b,c){for(var f=0,e=a.length;f<e;++f)n.imagesLoad(a[f],function(a){a=a.elements[0];for(var f=a.children,e=0,k=f.length;e<k;++e){var h=f[e].getElementsByTagName("img")[0];
if(h!==g){var l=h.getAttribute("src");if(l){var m="A"===h.parentNode.tagName?h.parentNode:null,h=null!==m?m.parentNode:h.parentNode,p=d(h);if(!p.data("tb_backstretch")&&!h.classList.contains("tb_backstretch")){if(null!==m)p.one("tb_backstretch.show",function(a){var b=a.cloneNode(!1);a.parentNode.removeChild(a);d(this).find("img").wrap(b)}.bind(p,m));b||(b=g);n.backstretchItems.push(p.tb_backstretch(l,b));p[0].classList.add("tf_has_backstretch")}}}}c&&c(a)})};k(a,c);d(e).off("resize.tb_backstretch").off("tfsmartresize.tf_backstretch orientationchange.tf_backstretch").on("tfsmartresize.tf_backstretch",
function(a){if(!0===this.loaded&&n.w!==a.w&&680<a.w)for(a=n.backstretchItems.length-1;-1<a;--a){var d=n.backstretchItems[a].data("tb_backstretch");if(d)if(h.body.contains(d.$wrap[0]))d.resize();else{n.backstretchItems.splice(a,1);var g=d.$container;d.destroy();k([g],b,c)}else n.backstretchItems.splice(a,1)}})};"undefined"===typeof d.fn.tb_backstretch?this.LoadAsync(themify_vars.url+"/js/backstretch.themify-version.js",m.bind(null,a,b,c),null,null,function(){return g!==d.fn.tb_backstretch}):m(a,b,
c)}},autoTiles:function(a,b,c){if(null!==a&&a!==g&&0!==a.length){var d=this;this.loadMainCss(function(a){for(var h=0,n=a.length;h<n;++h)if(null!==a[h].querySelector(".ptb_loops_wrapper"))a[h].classList.remove("auto_tiles");else{var l=a[h].children,k=parseInt(e.getComputedStyle(a[h]).getPropertyValue("grid-auto-rows")),f=l.length,m=0;5===f||6===f?a[h].classList.add("tf_tiles_"+f):a[h].classList.add("tf_tiles_more");var v=function(){for(var a=l.length;-1<a;--a)if(l[a]!==g&&null!==l[a]&&(l[a].classList.contains("post")||
l[a].classList.contains("product"))&&(++m,!l[a].classList.contains("tb_auto_tiled"))){var b=l[a].offsetWidth,c=l[a].offsetHeight;l[a].classList.add("tb_auto_tiled");b-10<=k?b===c||b>c&&10>b-c||c>b&&10>c-b?l[a].classList.add("tiled-square-small"):l[a].classList.add("tiled-portrait"):b>c?l[a].classList.add("tiled-landscape"):l[a].classList.add("tiled-square-large")}};v();if(0<m){if(f!==m){f=a[h].classList;if(!f.contains("tf_tiles_more")||6>m){for(var w=f.length-1;-1<w;--w)0===f[w].indexOf("tf_tiles_")&&
f.remove(f[w]);5===m||6===m?(f.remove("tb_tiles_more"),f.add("tf_tiles_"+m)):f.add("tf_tiles_more")}v()}null!==a[h].previousElementSibling&&a[h].previousElementSibling.classList.contains("post-filter")&&d.isoTopFilter(a[h].previousElementSibling);a[h].classList.add("tf_auto_tiles_init");!0!==c&&b&&b(a[h])}}}.bind(null,a));!0===c&&(a instanceof jQuery?a=a.get():a.length===g&&(a=[a]),this.setImageAsBackstretch(a,g,b))}},isoTopFilter:function(a,b,c){for(var h=a.children,m=h.length,p=a.nextElementSibling,
q=0,l=m-1;-1<l;--l){var k=h[l].getAttribute("class").replace(/(current-cat)|(cat-item)|(-)|(active)/g,"").replace(" ",""),k=p.querySelector(".cat-"+k);null===k||k.parentNode!==p?(h[l].style.display="none",++q):h[l].style.display=""}1<m-q?(a.classList.add("filter-visible"),a.style.display=""):a.style.display="none";if(b!==g||p.classList.contains("auto_tiles"))d(a).off("click.tf_isotop_filter").on("click.tf_isotop_filter",function(a){a.preventDefault();a=d(a.target).closest(".cat-item")[0];if(a!==g){var b=
"*";a.classList.contains("active")?a.classList.remove("active"):(d(a).addClass("active").siblings().removeClass("active"),b=a.getAttribute("class").replace(/(current-cat)|(cat-item)|(-)|(active)/g,"").replace(" ",""),b=".cat-"+b.trim());var f=this.nextElementSibling;if(null!==f){var k=e.Isotope.data(f);if(f.classList.contains("auto_tiles")){for(var h=f.children,l=h.length-1;-1<l;--l)h[l].classList.contains("post")&&!h[l].style.width&&(h[l].style.width=h[l].offsetWidth+"px",h[l].style.height=h[l].offsetHeight+
"px");f.classList.add("masonry-done");k||(680>Themify.w?k=0:(k=e.getComputedStyle(f).getPropertyValue("grid-row-gap"))?k=parseFloat(k):"0"!=k&&(k=5),k=new Isotope(f,{masonry:{gutter:k},resize:!1}));if("*"===b)k.once("arrangeComplete",function y(){this.off("arrangeComplete",y);setTimeout(function(){if("*"===b){var a=this.element.children;for(l=a.length-1;-1<l;--l)a[l].classList.contains("post")&&(a[l].style.width=a[l].style.height=a[l].style.position=a[l].style.left=a[l].style.top="");this.element.classList.remove("masonry-done");
this.element.style.height=this.element.style.position="";this.$element.trigger("resize.tb_backstretch")}}.bind(this),20)})}k&&(k.arrange({filter:"*"!==b?b+",.cat-all":b}),c!==g&&c.call(this,a,b,k))}}})},liveIsoTop:function(a,b,c){a=Themify;c=e.Isotope!==g;!0===c&&a.reLayoutIsoTop();for(var h in a.isoTopSelectors)for(var m=d(h,b).get(),p=a.isoTopSelectors[h].options,q=a.isoTopSelectors[h].callback,l=m.length-1;-1<l;--l)(!1===c||!0===c&&!e.Isotope.data(m[l]))&&a.isoTop([m[l]],p,q)},isoTop:function(a,
b,c){if("string"===typeof a){try{var n=h.querySelectorAll(a)}catch(p){n=d(a).get()}!0===this.is_builder_active&&(this.isoTopSelectors[a]={options:b,callback:c})}else n=a,n.length===g&&(n=[n]);if(null!==n&&n!==g&&0!==n.length){var m=this;this.imagesLoad(null);this.loadMainCss(function(a,b,c){b===g&&(b={});b.originLeft=!m.isRTL;b.resize=!1;b.containerStyle=null;b.layoutMode===g&&(b.layoutMode="masonry");var k=b.layoutMode;if(b[k]===g||b[k].columnWidth===g||b[k].gutter===g)b[k]===g&&(b[k]={}),b[k].columnWidth===
g&&!1!==b.columnWidth&&(b[k].columnWidth=".grid-sizer"),b[k].gutter===g&&!1!==b.gutter&&(b[k].gutter=".gutter-sizer");b.itemSelector===g&&(b.itemSelector=".loops-wrapper > .post");b.stagger===g&&(b.stagger=30);!0===b.fitWidth&&b[k].fitWidth===g&&(b[k].fitWidth=!0);b.percentPosition=!0===b[k].fitWidth?!1:b.percentPosition===g;m.imagesLoad(function(){var f=function(a,b,c){var l=function(a,b,c){for(var e=a.length-1;-1<e;--e)m.imagesLoad(a[e],function(a){var e=a.elements[0];if(!e.classList.contains("masonry-done")){a=
e.previousElementSibling;if(e.classList.contains("list-post")&&(null===a||!a.classList.contains("post-filter")))return;if(e.classList.contains("auto_tiles")){null!==a&&a.classList.contains("post-filter")&&m.isoTopFilter(a,g,b.iso_filter!==g?b.iso_filter.callback:g);return}k=b.layoutMode;var f=d.extend(!0,{},b);if(!1===f.gutter&&f[k].gutter===g||!1===f[k].gutter||e.classList.contains("no-gutter")||e.classList.contains("list-post"))f[k].gutter=0;else if("string"===typeof f[k].gutter)if("none"!==f[k].gutter){var l=
e.querySelector(f[k].gutter);if(null===l||l.parentNode!==e)l=h.createElement("div"),l.className=f[k].gutter.replace(".",""),e.insertBefore(l,e.firstChild),f[k].gutter=l}else delete f[k].gutter;if(!1===f.columnWidth&&f[k].columnWidth===g||!1===f[k].columnWidth)f[k].columnWidth=d(f.itemSelector,e)[0];else if("string"===typeof f[k].columnWidth)if("none"!==f[k].columnWidth){if(l=e.querySelector(f[k].columnWidth),null===l||l.parentNode!==e)l=h.createElement("div"),l.className=f[k].columnWidth.replace(".",
""),e.insertBefore(l,e.firstChild),f[k].columnWidth=l}else delete f[k].columnWidth;f[k].columnWidth===g&&!1!==f.columnWidth&&(e.className+=" tf_masonry_margin");e.className+=" masonry-done";e=new Isotope(e,f);null!==a&&a.classList.contains("post-filter")&&m.isoTopFilter(a,e,f.iso_filter!==g?f.iso_filter.callback:g);e.revealItemElements(e.items);if(f.onceLayoutComplete!==g)e.once("layoutComplete",f.onceLayoutComplete);if(f.layoutComplete!==g)e.on("layoutComplete",f.layoutComplete);if(f.arrangeComplete!==
g)e.on("arrangeComplete",f.arrangeComplete);if(f.removeComplete!==g)e.on("removeComplete",f.removeComplete);m.isoTopItems.push(e);c&&c(e)}c=null});a=l=f=null};"packery"===k&&e.Packery===g?m.LoadAsync(themify_vars.url+"/js/isotop-packery.min.js",l.bind(null,a,b,c),"2.0.1",null,function(){return g!==e.Packery}):l(a,b,c)};g===e.Isotope?m.LoadAsync(themify_vars.url+"/js/jquery.isotope.min.js",f.bind(null,a,b,c),"3.0.6",null,function(){return g!==e.Isotope}):f(a,b,c)});d(e).off("tfsmartresize.tf_masonry orientationchange.tf_masonry").on("tfsmartresize.tf_masonry orientationchange.tf_masonry",
function(a){!0===this.loaded&&m.w!==a.w&&m.reLayoutIsoTop()})}.bind(null,n,b,c))}},reLayoutIsoTop:function(){if(g!==e.Isotope)for(var a=Themify.isoTopItems.length-1;-1<a;--a)try{Themify.isoTopItems[a].layout()}catch(b){Themify.isoTopItems.splice(a,1)}},infinity:function(a,b){if(null!==a&&a!==g&&0!==a.length&&!0!==this.is_builder_active&&!((b.button===g||null===b.button)&&b.hasOwnProperty("button")||b.path!==g&&"string"===typeof b.path&&null===h.querySelector(b.path)))if(b.append&&!d(b.append).length)b.button&&
(b.button.style.display="block");else{a instanceof jQuery?a=a.get():a.length===g&&(a=[a]);var c=this,n=function(a){for(a=a.nextElementSibling;null!==a&&!a.classList.contains("load-more-button");)a=a.nextElementSibling;null!==a&&"A"!==a.tagName&&(a=a.firstChild);return a};this.loadMainCss();this.imagesLoad(null);var m=function(a,b){for(var l=a.length-1;-1<l;--l){var k=d.extend(!0,{},b);k.checkLastPage=!0;k.prefill=!1;var f=null;if(k.path===g&&(f=k.button!==g?k.button:n(a[l]),null!==f)){k.current=parseInt(f.getAttribute("data-current"));
k.total=parseInt(f.getAttribute("data-total"));if(k.total<k.current)continue;k.path=function(){var a=this.options.button!==g?this.options.button:n(this.element);if(null!==a)if(this.options.total>this.pageIndex){var b=a.getAttribute("href");if(b){if(!0===this.options.scroll||!1===this.options.scrollThreshold){var c="page",e=this.pageIndex,d=b;this.options.pageKey===g?-1===d.indexOf("/"+c+"/"+e)&&(c="paged"):c=this.options.pageKey;d=-1!==d.indexOf("/"+c+"/"+e)?d.replace("/"+c+"/"+e,"/"+c+"/"+(e+1)):
d.replace(c+"="+e,c+"="+(e+1));a.setAttribute("href",d);a.setAttribute("data-current",e)}return b}}else a.parentNode.removeChild(a)}}!1===k.scrollThreshold&&(k.button===g&&(k.button=null!==f?f:n(a[l])),k.button.style.display="inline-block");if(!1!==k.status){var f=h.createElement("div"),m=h.createElement("div"),p=h.createElement("div"),q=h.createElement("div");f.className="tf_load_status";m.className="infinite-scroll-request";p.className="infinite-scroll-last";q.className="infinite-scroll-error";
for(var t=4;-1<t;--t){var u=h.createElement("span");u.className="tf_dot";m.appendChild(u)}f.appendChild(m);f.appendChild(p);f.appendChild(q);a[l].parentNode.insertBefore(f,a[l].nextSibling);k.status=f}f=new InfiniteScroll(a[l],k);k.current!==g&&(f.pageIndex=k.current);if(!1!==k.scrollThreshold)f.on("scrollThreshold",function(){this.options.scroll=!0;this.options.loadOnScroll=!1});f.on("load",function(b,f){if(e.Isotope!==g&&e.Isotope.data(this.element)){var k=a[0].previousElementSibling;null!==k&&
k.classList.contains("post-filter")&&(k=k.querySelector(".active"),null!==k&&d(k).trigger("click.tf_isotop_filter"))}this.$element.triggerHandler("infinitebeforeloaded.themify",b);c.body.triggerHandler("infinitebeforeloaded.themify",[this.$element,b]);setTimeout(Themify.reLayoutIsoTop,1500)});f.on("append",function(a,b,f){var k=f.length,l=this.$element,m=this.options,n=e.Isotope!==g?e.Isotope.data(this.element):null,p=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);f[0].className+=" tf_firstitem";
for(var r=a=0;a<k;++a)f[a].style.opacity=0,c.imagesLoad(f[a],function(a){a=a.elements[0];if(p){var b=a.querySelector("img[srcset]");null!==b&&(b.outerHTML=b.outerHTML)}c.media(a.querySelectorAll(".wp-audio-shortcode, .wp-video-shortcode"));++r;n&&n.appended(a);a.style.opacity="";if(r===k){if(n||l[0].classList.contains("auto_tiles"))a=l[0].previousElementSibling,null!==a&&a.classList.contains("post-filter")&&c.isoTopFilter(a),n=null;l[0].classList.contains("auto_tiles")&&c.autoTiles(l[0]);c.LazyLoad();
a=d(f);l.triggerHandler("infiniteloaded.themify",[a]);c.body.triggerHandler("infiniteloaded.themify",[l,a]);c.InitGallery();c.body.triggerHandler("builder_load_module_partial",[a]);if("scroll"===m.scrollToNewOnLoad){a=l[0].getElementsByClassName("tf_firstitem");a=a[a.length-1];a=d(a).offset().top;var b=800<=a?800+Math.abs(a/1E3*100):800,e=h.getElementById("headerwrap");null!==e&&(e.classList.contains("fixed-header")||c.body[0].classList.contains("fixed-header"))&&(a-=d(e).outerHeight(!0));(!1===m.scrollThreshold||
a-h.documentElement.scrollTop>m.scrollThreshold)&&c.scrollTo(a,b)}m.loadOnScroll=!0;m=null}});e.ga!==g&&(a=h.createElement("a"),a.href=b,ga("set","page",a.pathname),ga("send","pageview"))})}};g===e.InfiniteScroll?this.LoadAsync(themify_vars.url+"/js/jquery.infinitescroll.min.js",m.bind(null,a,b),"3.0.6",null,function(){return g!==e.InfiniteScroll}):m(a,b)}},parallaxScrollingInit:function(a,b){if("undefined"!=typeof tbLocalScript&&tbLocalScript.isScrollEffectActive&&(!0===b||!this.is_builder_active)){var c=
h.querySelectorAll("div[data-lax]"),n=c.length;if(0<n){for(var m=e.innerHeight,p=h.body.getBoundingClientRect().top,q=null,n=n-1;-1<n;--n){var l=c[n];l.hasAttribute("data-box-position")&&-1!==l.getAttribute("data-box-position").indexOf("%")&&(l.style.transformOrigin=l.getAttribute("data-box-position"));if(l.hasAttribute("data-lax-scale")){var k=d(l).closest(".entry-content")[0];k!==g&&k.classList.add("themify-no-overflow-x");null===q&&(h.body.classList.add("themify-no-overflow-x"),p=h.body.getBoundingClientRect().top,
q=!0)}k=l.getBoundingClientRect().top-p;if(k+130<m){k=0>k?m:Math.floor(k);l.removeAttribute("data-lax-anchor");if(l.hasAttribute("data-lax-translate-y")){var f=l.getAttribute("data-lax-translate-y").split(","),r=f[0].split(" "),f=f[1].split(" ");l.setAttribute("data-lax-translate-y",f[0]+" "+r[1]+","+k+" "+f[1])}l.hasAttribute("data-lax-translate-x")&&(f=l.getAttribute("data-lax-translate-x").split(","),r=f[0].split(" "),f=f[1].split(" "),l.setAttribute("data-lax-translate-x",f[0]+" "+r[1]+","+k+
" "+f[1]));l.hasAttribute("data-lax-opacity")&&(f=l.getAttribute("data-lax-opacity").split(","),r=f[0].split(" "),f=f[1].split(" "),l.setAttribute("data-lax-opacity",f[0]+" "+r[1]+","+k+" "+f[1]));l.hasAttribute("data-lax-blur")&&(f=l.getAttribute("data-lax-blur").split(","),r=f[0].split(" "),f=f[1].split(" "),l.setAttribute("data-lax-blur",f[0]+" "+r[1]+","+k+" "+f[1]));l.hasAttribute("data-lax-rotate")&&(f=l.getAttribute("data-lax-rotate").split(","),r=f[0].split(" "),f=f[1].split(" "),l.setAttribute("data-lax-rotate",
f[0]+" "+r[1]+","+k+" "+f[1]));l.hasAttribute("data-lax-scale")&&(f=l.getAttribute("data-lax-scale").split(","),r=f[0].split(" "),f=f[1].split(" "),l.setAttribute("data-lax-scale",f[0]+" "+r[1]+","+k+" "+f[1]))}}c=function(){var a=function(){e.lax.setup({selector:'[data-lax="true"]'});var a=function(){e.lax.update(e.scrollY);e.requestAnimationFrame(a)};e.requestAnimationFrame(a)},b=function(){e.lax.updateElements()};d(e).off("tfsmartresize",b).on("tfsmartresize",b);Themify.is_builder_active||(d(h).ajaxComplete(function(){setTimeout(a,
300)}),Themify.body.on("infiniteloaded.themify",function(b,c){a()}));a()};e.lax===g?Themify.LoadAsync(tbLocalScript.builder_url+"/js/themify.lax.min.js",c,!1,!1,function(){return e.lax!==g}):c()}}},mediaCssLoad:function(){if(themify_vars.media!==g&&themify_vars.media.css!==g){for(var a in themify_vars.media.css)null===h.querySelector("link#"+a+"-css")&&this.LoadCss(themify_vars.media.css[a].src,themify_vars.media.css[a].v?themify_vars.media.css[a].v:themify_vars.wp);delete themify_vars.media.css}},
media:function(a,b){if(a===g||null===a||0===a.length||themify_vars.media===g)return!1;a instanceof jQuery?a=a.get():a.length===g&&(a=[a]);this.mediaCssLoad();var c=this,d=function(a,b){var d=e._wpmejsSettings;d===g&&(themify_vars.media._wpmejsSettings!==g?(c.loadExtra(themify_vars.media._wpmejsSettings),d=e._wpmejsSettings):d={});for(var f=a.length-1;-1<f;--f)"DIV"!==a[f].tagName&&new e.MediaElementPlayer(a[f],d);b&&b()};if(e.MediaElementPlayer===g){var h=Object.keys(themify_vars.media.js),p=0,q=
h.length,l=function(a,b,m){a=h[a];c.LoadAsync(themify_vars.media.js[a].src,function(a,b){++p;p<q?l(p,a,b):d(a,b)}.bind(null,b,m),themify_vars.media.js[a].v?themify_vars.media.js[a].v:themify_vars.wp,themify_vars.media.js[a].extra,"mediaelement-core"===a?function(){return e.MediaElementPlayer!==g}:null)};l(p,a,b)}else d(a,b)},sharer:function(a,b,c){if(c){var d=h.createElement("DIV");d.innerHTML=c;c=d.textContent||d.innerText||"";c=c.trim()}else c="";var d=e.screen.width/2-285;var m=e.screen.height/
2-200;var p="status=no,height=300,width=550,resizable=yes,left="+d+",top="+m+",screenX=#{left},screenY=#{top},toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";"facebook"===a?b="https://www.facebook.com/sharer.php?u="+b:"twitter"===a?b="http://twitter.com/share?url="+b+"&text="+c:"linkedin"===a?b="https://www.linkedin.com/shareArticle?mini=true&url="+b:"pinterest"===a?b="//pinterest.com/pin/create/button/?url="+b+"&description="+c:"email"===a&&e.tbLocalScript!==g&&(c=""!==c?c+"%0D%0A":
"",b="mailto:?subject="+encodeURIComponent(tbLocalScript.emailSub)+"&body="+c+b);e.open(encodeURI(b),"sharer",p).moveTo(d,m)}};Themify.Init()})(jQuery,window,document,void 0);
