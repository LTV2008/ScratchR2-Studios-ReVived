var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
;function initialize_lazyload(e){var t={threshold:0};if(typeof e=="undefined")e=t;else for(key in t)t.hasOwnProperty(key)&&(e.hasOwnProperty(key)||(e.key=t.key));$("img.lazy").lazyload(e)}!function(e,t,n,r){var i=e(t);e.fn.lazyload=function(s){function o(){var t=0;f.each(function(){var n=e(this);if(!l.skip_invisible||n.is(":visible"))if(!e.abovethetop(this,l)&&!e.leftofbegin(this,l))if(e.belowthefold(this,l)||e.rightoffold(this,l)){if(++t>l.failure_limit)return!1}else n.trigger("appear"),t=0})}var u,f=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return s&&(r!==s.failurelimit&&(s.failure_limit=s.failurelimit,delete s.failurelimit),r!==s.effectspeed&&(s.effect_speed=s.effectspeed,delete s.effectspeed),e.extend(l,s)),u=l.container===r||l.container===t?i:e(l.container),0===l.event.indexOf("scroll")&&u.bind(l.event,function(){return o()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,(n.attr("src")===r||n.attr("src")===!1)&&n.is("img")&&n.attr("src",l.placeholder),n.one("appear",function(){if(!this.loaded){if(l.appear){var r=f.length;l.appear.call(t,r,l)}e("<img />").bind("load",function(){var r=n.attr("data-"+l.data_attribute);n.hide(),n.is("img")?n.attr("src",r):n.css("background-image","url('"+r+"')"),n[l.effect](l.effect_speed),t.loaded=!0;var i=e.grep(f,function(e){return!e.loaded});if(f=e(i),l.load){var s=f.length;l.load.call(t,s,l)}}).attr("src",n.attr("data-"+l.data_attribute))}}),0!==l.event.indexOf("scroll")&&n.bind(l.event,function(){t.loaded||n.trigger("appear")})}),i.bind("resize",function(){o()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&f.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){o()}),this},e.belowthefold=function(n,s){var o;return o=s.container===r||s.container===t?(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():e(s.container).offset().top+e(s.container).height(),o<=e(n).offset().top-s.threshold},e.rightoffold=function(n,s){var o;return o=s.container===r||s.container===t?i.width()+i.scrollLeft():e(s.container).offset().left+e(s.container).width(),o<=e(n).offset().left-s.threshold},e.abovethetop=function(n,s){var o;return o=s.container===r||s.container===t?i.scrollTop():e(s.container).offset().top,o>=e(n).offset().top+s.threshold+e(n).height()},e.leftofbegin=function(n,s){var o;return o=s.container===r||s.container===t?i.scrollLeft():e(s.container).offset().left,o>=e(n).offset().left+s.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightoffold(t,n)||e.leftofbegin(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document),$(".scroll-content").each(function(e){initialize_lazyload({container:$(this)})}),initialize_lazyload();


}
/*
     FILE ARCHIVED ON 07:14:22 Apr 28, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:27:32 Feb 03, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.138
  exclusion.robots.policy: 0.123
  cdx.remote: 0.123
  esindex: 0.011
  LoadShardBlock: 170.918 (6)
  PetaboxLoader3.resolve: 143.45 (5)
  PetaboxLoader3.datanode: 117.283 (8)
  load_resource: 132.28 (2)
*/