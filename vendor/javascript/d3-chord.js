import n from"d3-array";import r from"d3-path";var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var e={};(function(t,u){u(e,n,r)})(e,(function(n,r,e){var u=Math.cos;var o=Math.sin;var a=Math.PI;var l=a/2;var i=2*a;var c=Math.max;function compareValue(n){return function(r,t){return n(r.source.value+r.target.value,t.source.value+t.target.value)}}function chord(){var n=0,t=null,e=null,u=null;function chord(o){var a=o.length,l=[],f=r.range(a),h=[],d=[],s=d.groups=new Array(a),b=new Array(a*a),g,p,v,y,A,m;g=0,A=-1;while(++A<a){p=0,m=-1;while(++m<a)p+=o[A][m];l.push(p);h.push(r.range(a));g+=p}t&&f.sort((function(n,r){return t(l[n],l[r])}));e&&h.forEach((function(n,r){n.sort((function(n,t){return e(o[r][n],o[r][t])}))}));g=c(0,i-n*a)/g;y=g?n:i/a;p=0,A=-1;while(++A<a){v=p,m=-1;while(++m<a){var w=f[A],x=h[w][m],T=o[w][x],M=p,_=p+=T*g;b[x*a+w]={index:w,subindex:x,startAngle:M,endAngle:_,value:T}}s[w]={index:w,startAngle:v,endAngle:p,value:l[w]};p+=y}A=-1;while(++A<a){m=A-1;while(++m<a){var S=b[m*a+A],C=b[A*a+m];(S.value||C.value)&&d.push(S.value<C.value?{source:C,target:S}:{source:S,target:C})}}return u?d.sort(u):d}chord.padAngle=function(r){return arguments.length?(n=c(0,r),chord):n};chord.sortGroups=function(n){return arguments.length?(t=n,chord):t};chord.sortSubgroups=function(n){return arguments.length?(e=n,chord):e};chord.sortChords=function(n){return arguments.length?(null==n?u=null:(u=compareValue(n))._=n,chord):u&&u._};return chord}var f=Array.prototype.slice;function constant(n){return function(){return n}}function defaultSource(n){return n.source}function defaultTarget(n){return n.target}function defaultRadius(n){return n.radius}function defaultStartAngle(n){return n.startAngle}function defaultEndAngle(n){return n.endAngle}function ribbon(){var n=defaultSource,r=defaultTarget,a=defaultRadius,i=defaultStartAngle,c=defaultEndAngle,h=null;function ribbon(){var d,s=f.call(arguments),b=n.apply(this||t,s),g=r.apply(this||t,s),p=+a.apply(this||t,(s[0]=b,s)),v=i.apply(this||t,s)-l,y=c.apply(this||t,s)-l,A=p*u(v),m=p*o(v),w=+a.apply(this||t,(s[0]=g,s)),x=i.apply(this||t,s)-l,T=c.apply(this||t,s)-l;h||(h=d=e.path());h.moveTo(A,m);h.arc(0,0,p,v,y);if(v!==x||y!==T){h.quadraticCurveTo(0,0,w*u(x),w*o(x));h.arc(0,0,w,x,T)}h.quadraticCurveTo(0,0,A,m);h.closePath();if(d)return h=null,d+""||null}ribbon.radius=function(n){return arguments.length?(a="function"===typeof n?n:constant(+n),ribbon):a};ribbon.startAngle=function(n){return arguments.length?(i="function"===typeof n?n:constant(+n),ribbon):i};ribbon.endAngle=function(n){return arguments.length?(c="function"===typeof n?n:constant(+n),ribbon):c};ribbon.source=function(r){return arguments.length?(n=r,ribbon):n};ribbon.target=function(n){return arguments.length?(r=n,ribbon):r};ribbon.context=function(n){return arguments.length?(h=null==n?null:n,ribbon):h};return ribbon}n.chord=chord;n.ribbon=ribbon;Object.defineProperty(n,"__esModule",{value:true})}));const u=e.chord,o=e.ribbon,a=e.__esModule;export default e;export{a as __esModule,u as chord,o as ribbon};
