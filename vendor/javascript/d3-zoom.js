import t from"d3-dispatch";import o from"d3-drag";import e from"d3-interpolate";import n from"d3-selection";import i from"d3-transition";var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var u={};(function(r,s){s(u,t,o,e,n,i)})(u,(function(t,o,e,n,i,u){function constant(t){return function(){return t}}function ZoomEvent(t,o,e){(this||r).target=t;(this||r).type=o;(this||r).transform=e}function Transform(t,o,e){(this||r).k=t;(this||r).x=o;(this||r).y=e}Transform.prototype={constructor:Transform,scale:function(t){return 1===t?this||r:new Transform((this||r).k*t,(this||r).x,(this||r).y)},translate:function(t,o){return 0===t&0===o?this||r:new Transform((this||r).k,(this||r).x+(this||r).k*t,(this||r).y+(this||r).k*o)},apply:function(t){return[t[0]*(this||r).k+(this||r).x,t[1]*(this||r).k+(this||r).y]},applyX:function(t){return t*(this||r).k+(this||r).x},applyY:function(t){return t*(this||r).k+(this||r).y},invert:function(t){return[(t[0]-(this||r).x)/(this||r).k,(t[1]-(this||r).y)/(this||r).k]},invertX:function(t){return(t-(this||r).x)/(this||r).k},invertY:function(t){return(t-(this||r).y)/(this||r).k},rescaleX:function(t){return t.copy().domain(t.range().map((this||r).invertX,this||r).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map((this||r).invertY,this||r).map(t.invert,t))},toString:function(){return"translate("+(this||r).x+","+(this||r).y+") scale("+(this||r).k+")"}};var s=new Transform(1,0,0);transform.prototype=Transform.prototype;function transform(t){while(!t.__zoom)if(!(t=t.parentNode))return s;return t.__zoom}function nopropagation(){i.event.stopImmediatePropagation()}function noevent(){i.event.preventDefault();i.event.stopImmediatePropagation()}function defaultFilter(){return!i.event.ctrlKey&&!i.event.button}function defaultExtent(){var t=this||r;if(t instanceof SVGElement){t=t.ownerSVGElement||t;if(t.hasAttribute("viewBox")){t=t.viewBox.baseVal;return[[t.x,t.y],[t.x+t.width,t.y+t.height]]}return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}return[[0,0],[t.clientWidth,t.clientHeight]]}function defaultTransform(){return(this||r).__zoom||s}function defaultWheelDelta(){return-i.event.deltaY*(1===i.event.deltaMode?.05:i.event.deltaMode?1:.002)}function defaultTouchable(){return navigator.maxTouchPoints||"ontouchstart"in(this||r)}function defaultConstrain(t,o,e){var n=t.invertX(o[0][0])-e[0][0],i=t.invertX(o[1][0])-e[1][0],r=t.invertY(o[0][1])-e[0][1],u=t.invertY(o[1][1])-e[1][1];return t.translate(i>n?(n+i)/2:Math.min(0,n)||Math.max(0,i),u>r?(r+u)/2:Math.min(0,r)||Math.max(0,u))}function zoom(){var t=defaultFilter,a=defaultExtent,h=defaultConstrain,c=defaultWheelDelta,m=defaultTouchable,l=[0,Infinity],f=[[-Infinity,-Infinity],[Infinity,Infinity]],p=250,d=n.interpolateZoom,v=o.dispatch("start","zoom","end"),z,y,g=500,_=150,w=0;function zoom(t){t.property("__zoom",defaultTransform).on("wheel.zoom",wheeled).on("mousedown.zoom",mousedowned).on("dblclick.zoom",dblclicked).filter(m).on("touchstart.zoom",touchstarted).on("touchmove.zoom",touchmoved).on("touchend.zoom touchcancel.zoom",touchended).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}zoom.transform=function(t,o,e){var n=t.selection?t.selection():t;n.property("__zoom",defaultTransform);t!==n?schedule(t,o,e):n.interrupt().each((function(){gesture(this||r,arguments).start().zoom(null,"function"===typeof o?o.apply(this||r,arguments):o).end()}))};zoom.scaleBy=function(t,o,e){zoom.scaleTo(t,(function(){var t=(this||r).__zoom.k,e="function"===typeof o?o.apply(this||r,arguments):o;return t*e}),e)};zoom.scaleTo=function(t,o,e){zoom.transform(t,(function(){var t=a.apply(this||r,arguments),n=(this||r).__zoom,i=null==e?centroid(t):"function"===typeof e?e.apply(this||r,arguments):e,u=n.invert(i),s="function"===typeof o?o.apply(this||r,arguments):o;return h(translate(scale(n,s),i,u),t,f)}),e)};zoom.translateBy=function(t,o,e){zoom.transform(t,(function(){return h((this||r).__zoom.translate("function"===typeof o?o.apply(this||r,arguments):o,"function"===typeof e?e.apply(this||r,arguments):e),a.apply(this||r,arguments),f)}))};zoom.translateTo=function(t,o,e,n){zoom.transform(t,(function(){var t=a.apply(this||r,arguments),i=(this||r).__zoom,u=null==n?centroid(t):"function"===typeof n?n.apply(this||r,arguments):n;return h(s.translate(u[0],u[1]).scale(i.k).translate("function"===typeof o?-o.apply(this||r,arguments):-o,"function"===typeof e?-e.apply(this||r,arguments):-e),t,f)}),n)};function scale(t,o){o=Math.max(l[0],Math.min(l[1],o));return o===t.k?t:new Transform(o,t.x,t.y)}function translate(t,o,e){var n=o[0]-e[0]*t.k,i=o[1]-e[1]*t.k;return n===t.x&&i===t.y?t:new Transform(t.k,n,i)}function centroid(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function schedule(t,o,e){t.on("start.zoom",(function(){gesture(this||r,arguments).start()})).on("interrupt.zoom end.zoom",(function(){gesture(this||r,arguments).end()})).tween("zoom",(function(){var t=this||r,n=arguments,i=gesture(t,n),u=a.apply(t,n),s=null==e?centroid(u):"function"===typeof e?e.apply(t,n):e,h=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),c=t.__zoom,m="function"===typeof o?o.apply(t,n):o,l=d(c.invert(s).concat(h/c.k),m.invert(s).concat(h/m.k));return function(t){if(1===t)t=m;else{var o=l(t),e=h/o[2];t=new Transform(e,s[0]-o[0]*e,s[1]-o[1]*e)}i.zoom(null,t)}}))}function gesture(t,o,e){return!e&&t.__zooming||new Gesture(t,o)}function Gesture(t,o){(this||r).that=t;(this||r).args=o;(this||r).active=0;(this||r).extent=a.apply(t,o);(this||r).taps=0}Gesture.prototype={start:function(){if(1===++(this||r).active){(this||r).that.__zooming=this||r;this.emit("start")}return this||r},zoom:function(t,o){(this||r).mouse&&"mouse"!==t&&((this||r).mouse[1]=o.invert((this||r).mouse[0]));(this||r).touch0&&"touch"!==t&&((this||r).touch0[1]=o.invert((this||r).touch0[0]));(this||r).touch1&&"touch"!==t&&((this||r).touch1[1]=o.invert((this||r).touch1[0]));(this||r).that.__zoom=o;this.emit("zoom");return this||r},end:function(){if(0===--(this||r).active){delete(this||r).that.__zooming;this.emit("end")}return this||r},emit:function(t){i.customEvent(new ZoomEvent(zoom,t,(this||r).that.__zoom),v.apply,v,[t,(this||r).that,(this||r).args])}};function wheeled(){if(t.apply(this||r,arguments)){var o=gesture(this||r,arguments),e=(this||r).__zoom,n=Math.max(l[0],Math.min(l[1],e.k*Math.pow(2,c.apply(this||r,arguments)))),s=i.mouse(this||r);if(o.wheel){o.mouse[0][0]===s[0]&&o.mouse[0][1]===s[1]||(o.mouse[1]=e.invert(o.mouse[0]=s));clearTimeout(o.wheel)}else{if(e.k===n)return;o.mouse=[s,e.invert(s)];u.interrupt(this||r);o.start()}noevent();o.wheel=setTimeout(wheelidled,_);o.zoom("mouse",h(translate(scale(e,n),o.mouse[0],o.mouse[1]),o.extent,f))}function wheelidled(){o.wheel=null;o.end()}}function mousedowned(){if(!y&&t.apply(this||r,arguments)){var o=gesture(this||r,arguments,true),n=i.select(i.event.view).on("mousemove.zoom",mousemoved,true).on("mouseup.zoom",mouseupped,true),s=i.mouse(this||r),a=i.event.clientX,c=i.event.clientY;e.dragDisable(i.event.view);nopropagation();o.mouse=[s,(this||r).__zoom.invert(s)];u.interrupt(this||r);o.start()}function mousemoved(){noevent();if(!o.moved){var t=i.event.clientX-a,e=i.event.clientY-c;o.moved=t*t+e*e>w}o.zoom("mouse",h(translate(o.that.__zoom,o.mouse[0]=i.mouse(o.that),o.mouse[1]),o.extent,f))}function mouseupped(){n.on("mousemove.zoom mouseup.zoom",null);e.dragEnable(i.event.view,o.moved);noevent();o.end()}}function dblclicked(){if(t.apply(this||r,arguments)){var o=(this||r).__zoom,e=i.mouse(this||r),n=o.invert(e),u=o.k*(i.event.shiftKey?.5:2),s=h(translate(scale(o,u),e,n),a.apply(this||r,arguments),f);noevent();p>0?i.select(this||r).transition().duration(p).call(schedule,s,e):i.select(this||r).call(zoom.transform,s)}}function touchstarted(){if(t.apply(this||r,arguments)){var o=i.event.touches,e=o.length,n=gesture(this||r,arguments,i.event.changedTouches.length===e),s,a,h,c;nopropagation();for(a=0;a<e;++a){h=o[a],c=i.touch(this||r,o,h.identifier);c=[c,(this||r).__zoom.invert(c),h.identifier];n.touch0?n.touch1||n.touch0[2]===c[2]||(n.touch1=c,n.taps=0):(n.touch0=c,s=true,n.taps=1+!!z)}z&&(z=clearTimeout(z));if(s){n.taps<2&&(z=setTimeout((function(){z=null}),g));u.interrupt(this||r);n.start()}}}function touchmoved(){if((this||r).__zooming){var t=gesture(this||r,arguments),o=i.event.changedTouches,e=o.length,n,u,s,a;noevent();z&&(z=clearTimeout(z));t.taps=0;for(n=0;n<e;++n){u=o[n],s=i.touch(this||r,o,u.identifier);t.touch0&&t.touch0[2]===u.identifier?t.touch0[0]=s:t.touch1&&t.touch1[2]===u.identifier&&(t.touch1[0]=s)}u=t.that.__zoom;if(t.touch1){var c=t.touch0[0],m=t.touch0[1],l=t.touch1[0],p=t.touch1[1],d=(d=l[0]-c[0])*d+(d=l[1]-c[1])*d,v=(v=p[0]-m[0])*v+(v=p[1]-m[1])*v;u=scale(u,Math.sqrt(d/v));s=[(c[0]+l[0])/2,(c[1]+l[1])/2];a=[(m[0]+p[0])/2,(m[1]+p[1])/2]}else{if(!t.touch0)return;s=t.touch0[0],a=t.touch0[1]}t.zoom("touch",h(translate(u,s,a),t.extent,f))}}function touchended(){if((this||r).__zooming){var t=gesture(this||r,arguments),o=i.event.changedTouches,e=o.length,n,u;nopropagation();y&&clearTimeout(y);y=setTimeout((function(){y=null}),g);for(n=0;n<e;++n){u=o[n];t.touch0&&t.touch0[2]===u.identifier?delete t.touch0:t.touch1&&t.touch1[2]===u.identifier&&delete t.touch1}t.touch1&&!t.touch0&&(t.touch0=t.touch1,delete t.touch1);if(t.touch0)t.touch0[1]=(this||r).__zoom.invert(t.touch0[0]);else{t.end();if(2===t.taps){var s=i.select(this||r).on("dblclick.zoom");s&&s.apply(this||r,arguments)}}}}zoom.wheelDelta=function(t){return arguments.length?(c="function"===typeof t?t:constant(+t),zoom):c};zoom.filter=function(o){return arguments.length?(t="function"===typeof o?o:constant(!!o),zoom):t};zoom.touchable=function(t){return arguments.length?(m="function"===typeof t?t:constant(!!t),zoom):m};zoom.extent=function(t){return arguments.length?(a="function"===typeof t?t:constant([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),zoom):a};zoom.scaleExtent=function(t){return arguments.length?(l[0]=+t[0],l[1]=+t[1],zoom):[l[0],l[1]]};zoom.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],zoom):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]};zoom.constrain=function(t){return arguments.length?(h=t,zoom):h};zoom.duration=function(t){return arguments.length?(p=+t,zoom):p};zoom.interpolate=function(t){return arguments.length?(d=t,zoom):d};zoom.on=function(){var t=v.on.apply(v,arguments);return t===v?zoom:t};zoom.clickDistance=function(t){return arguments.length?(w=(t=+t)*t,zoom):Math.sqrt(w)};return zoom}t.zoom=zoom;t.zoomIdentity=s;t.zoomTransform=transform;Object.defineProperty(t,"__esModule",{value:true})}));const s=u.zoom,a=u.zoomIdentity,h=u.zoomTransform,c=u.__esModule;export default u;export{c as __esModule,s as zoom,a as zoomIdentity,h as zoomTransform};
