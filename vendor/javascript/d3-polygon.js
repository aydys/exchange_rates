var n={};(function(e,r){r(n)})(n,(function(n){function area(n){var e=-1,r=n.length,o,t=n[r-1],l=0;while(++e<r){o=t;t=n[e];l+=o[1]*t[0]-o[0]*t[1]}return l/2}function centroid(n){var e=-1,r=n.length,o=0,t=0,l,u=n[r-1],a,i=0;while(++e<r){l=u;u=n[e];i+=a=l[0]*u[1]-u[0]*l[1];o+=(l[0]+u[0])*a;t+=(l[1]+u[1])*a}return i*=3,[o/i,t/i]}function cross(n,e,r){return(e[0]-n[0])*(r[1]-n[1])-(e[1]-n[1])*(r[0]-n[0])}function lexicographicOrder(n,e){return n[0]-e[0]||n[1]-e[1]}function computeUpperHullIndexes(n){var e=n.length,r=[0,1],o=2;for(var t=2;t<e;++t){while(o>1&&cross(n[r[o-2]],n[r[o-1]],n[t])<=0)--o;r[o++]=t}return r.slice(0,o)}function hull(n){if((r=n.length)<3)return null;var e,r,o=new Array(r),t=new Array(r);for(e=0;e<r;++e)o[e]=[+n[e][0],+n[e][1],e];o.sort(lexicographicOrder);for(e=0;e<r;++e)t[e]=[o[e][0],-o[e][1]];var l=computeUpperHullIndexes(o),u=computeUpperHullIndexes(t);var a=u[0]===l[0],i=u[u.length-1]===l[l.length-1],c=[];for(e=l.length-1;e>=0;--e)c.push(n[o[l[e]][2]]);for(e=+a;e<u.length-i;++e)c.push(n[o[u[e]][2]]);return c}function contains(n,e){var r=n.length,o=n[r-1],t=e[0],l=e[1],u=o[0],a=o[1],i,c,g=false;for(var p=0;p<r;++p){o=n[p],i=o[0],c=o[1];c>l!==a>l&&t<(u-i)*(l-c)/(a-c)+i&&(g=!g);u=i,a=c}return g}function length(n){var e=-1,r=n.length,o=n[r-1],t,l,u=o[0],a=o[1],i=0;while(++e<r){t=u;l=a;o=n[e];u=o[0];a=o[1];t-=u;l-=a;i+=Math.sqrt(t*t+l*l)}return i}n.polygonArea=area;n.polygonCentroid=centroid;n.polygonContains=contains;n.polygonHull=hull;n.polygonLength=length;Object.defineProperty(n,"__esModule",{value:true})}));const e=n.polygonArea,r=n.polygonCentroid,o=n.polygonContains,t=n.polygonHull,l=n.polygonLength,u=n.__esModule;export default n;export{u as __esModule,e as polygonArea,r as polygonCentroid,o as polygonContains,t as polygonHull,l as polygonLength};
