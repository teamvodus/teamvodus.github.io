!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("lodash"));else if("function"==typeof define&&define.amd)define(["lodash"],n);else{var r=n("object"==typeof exports?require("lodash"):t.lodash);for(var o in r)("object"==typeof exports?exports:t)[o]=r[o]}}(this,function(t){return function(t){function n(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,o){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=4)}([function(n,r){n.exports=t},function(t,n,r){"use strict";function o(t){var n=t.height,r=t.width,o=t.minHeight,e=t.fitToContentHeight;return{height:void 0!==e&&e?"auto":l(n),width:l(r),minHeight:a.isUndefined(o)?"":l(o)}}function e(t,n,r,i){var u=r.cssGridVariant,f=r.softMargin,p=r.minLockMargin;void 0===i&&(i=0);var m=t.components;if(a.isEmpty(m))return{hierarchy:(O={},O[n]=[],O),styles:(T={},T[n]=o(t),T)};var d="ms"===u,h=a.sortBy(m,c),l=a.sortBy(m,s),g=I(t,h,l),v=U(h,g),b=F(v,g,i,n,f,p),y=a(b).map("components").flatten().value(),w=x(b),j=tt(t,g),k=et(t),S=it(j),H=ut(d,t,w,l,j,p),M=n+"-gridWrapper",B=n+"-gridContainer",R=(_={},_[n]=[M],_[M]=[B],_[B]=[],_),E=(C={},C[n]=k,C[M]=S,C[B]=H,C),L=function(n){if(R[B].push(n.id),n.wedge)return void a.assign(E,(o={},o[n.id]=ct(w,n,d),o));if(a.assign(E,(c={},c[n.id]=ft(w,n,d,t,f,p),c)),n.dynamicBlock){var r=e(n,n.id,{cssGridVariant:u,softMargin:f,minLockMargin:p},i+1);a.forEach(r.styles,function(t,n){E[n]=a.assign({},E[n],t)}),a.assign(R,r.hierarchy)}var o,c};return a.forEach(y,L),{hierarchy:R,styles:E};var O,T,_,C}function i(t,n){var r=void 0===n?{}:n,o=r.cssGridVariant,i=void 0===o?"standard":o,u=r.softMargin,c=void 0===u?10:u,f=r.minLockMargin,s=void 0===f?70:f,p=a.isUndefined(t.id)?"root":t.id,m=e(t,p,{cssGridVariant:i,softMargin:c,minLockMargin:s}),d=m.hierarchy,h=m.styles;return{structure:at(d,p),styles:h}}var u=this&&this.__assign||Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};Object.defineProperty(n,"__esModule",{value:!0});var a=r(0),c=function(t){return t.top},f=function(t){return t.left},s=function(t){return t.top+t.height},p=function(t){return t.left+t.width},m=function(t){return Boolean(t.fitToContentHeight)},d=function(t){return{top:c(t),bottom:s(t)}},h=function(t){return{left:f(t),right:p(t)}},l=function(t){return a.isString(t)?t:t+"px"},g=function(t){return a.isNumber(t)?l(t):function(t){return"calc("+l(t.px)+" + "+t.pct+"%)"}(t)},v=function(t,n){return t.bottom===n.top},b=function(t,n){return n.top-t.bottom},y=function(t,n,r,o,e){return{id:e+"-wedge-"+r+"-"+o,left:0,top:t,width:0,height:n+(t<0?-1*t:0),wedge:!0}},w=function(t,n,r,o,e){var i=[],u=function(t,n,r){return i.push({area:t,components:n,subRows:r})};u(t[0].area,t[0].components,t[0].subRows);for(var c=1;c<t.length;c++){var f=t[c-1].area,s=t[c].area,p=t[c].components,m=t[c].subRows;if(v(f,s))u(s,p,m);else{var d=b(f,s);if(d<=e){var h=a.defaults({top:s.top-d},s);u(h,p,m)}else{var h=a.defaults({top:s.top-o},s);!function(t,o,e,i){u({bottom:o.top,top:t.bottom},[y(n.top,o.top,e,i,r)],[])}(f,h,c,c),u(h,p,m)}}}return i},x=function(t){return a.reduce(t,function(t,n){var r=n.area,o=n.subRows;if(a.isEmpty(o))t.push(u({},r,{isSubRow:!1}));else for(var e=[r.top].concat(o,[r.bottom]),i=1;i<e.length;i++)t.push({top:e[i-1],bottom:e[i],isSubRow:!0});return t},[])},j=function(t){return function(n,r,o,e){return t?{"-ms-grid-column":r.toString(),"-ms-grid-column-span":(e-r).toString(),"-ms-grid-row":n.toString(),"-ms-grid-row-span":(o-n).toString()}:{gridArea:[n,r,o,e].join(" / ")}}},k=function(t,n){return a.findLastIndex(t,function(t){return t.top<=c(n)})},S=function(t,n){return a.findIndex(t,function(t){return t.bottom>=s(n)})},H=function(t,n){return t===n.length-1},M=function(t,n,r,o){var e=n.bottom-s(t);return e>o?r:a.min([e,o])},B=function(t,n){return n.bottom-s(t)},R=function(t,n,r,o,e,i){var u=n[r],a=u.isSubRow;return H(r,n)?m(o)?0:M(t,u,e,i):a?B(t,u):0},E=function(t,n,r){return c(t)-n[r].top},L=function(t){if(!t)return null;var n=a.compact([t.px&&t.px+"px",t.pct&&t.pct+"%",t.vw&&t.vw+"vw"]);switch(a.size(n)){case 0:return"0";case 1:return n[0];default:return"calc("+a.join(n," + ")+")"}},O=function(t,n){return L(t.docked&&t.docked.left)||(n.contentArea?"calc((100% - "+n.contentArea.width+"px) * "+n.contentArea.alignment+")":"0")},T=function(t){return L(t.docked&&t.docked.right)||"0px"},_=function(t){var n=a.pick(t,["left","right"])||{};return n.left&&n.right?"stretch":n.right?"end":"start"},C=function(t,n,r,o,e){var i=k(t,n),u=S(t,n);return{justifySelf:_(n.docked),marginTop:E(n,t,i),marginBottom:R(n,t,u,r,o,e),marginLeft:O(n,r),marginRight:T(n),left:f(n),rowStart:i+1,columnStart:1,rowEnd:u+2,columnEnd:2}},P=function(t,n){return{top:a.min([t.top,n.top]),bottom:a.max([t.bottom,n.bottom])}},q=function(t,n){return P(t,d(n))},A=function(t,n){return{left:a.min([t.left,n.left]),right:a.max([t.right,n.right])}},G=function(t,n){return A(t,h(n))},U=function(t,n){var r=function(t){return{components:[t],area:d(t)}},o=[];if(0===t.length)return o;var e=r(t[0]);e.area.top=n.top;for(var i=1;i<t.length;i++)!function(t,n){return c(n)<t.bottom}(e.area,t[i])?(o.push(e),e=r(t[i])):e=function(t,n){return{components:t.components.concat([n]),area:q(t.area,n)}}(e,t[i]);return e.area.bottom=n.bottom,o.push(e),o},V=function(t){var n=function(t){return{components:[t],area:h(t)}},r=[];if(0===t.length)return r;for(var o=n(t[0]),e=1;e<t.length;e++)!function(t,n){return f(n)<t.right}(o.area,t[e])?(r.push(o),o=n(t[e])):o=function(t,n){return{components:t.components.concat([n]),area:G(t.area,n)}}(o,t[e]);return r.push(o),r},D=function(t){return a.max([t.height||0,t.minHeight||0])},I=function(t,n,r){return{top:a.min([0,c(a.first(n))]),bottom:a.max([t.height||0,t.minHeight||0,s(a.last(r))])}},z=function(t){return{left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top,fitToContentHeight:!0}},N=function(t,n,r,o,e,i){var c=z(u({},n,r));return u({id:i+"-dynamic-block-"+o+"-"+e},c,{components:a.map(t,function(t){return u({},t,{left:t.left-c.left,top:t.top-c.top})}),dynamicBlock:!0})},W=function(t,n,r,o){return a.map(t,function(t,e){var i=t.components,u=t.area;return 1===i.length?i[0]:N(i,n,u,e,r,o)})},F=function(t,n,r,o,e,i){var u=a.map(t,function(t,n){var e=Q(t),i=e.length>0,u=i&&r<3,c=t.components;if(u){var s=V(a.sortBy(c,f));if(s.length>1)return{area:t.area,components:W(s,t.area,n,o),subRows:[]}}return{area:t.area,components:c,subRows:e}});return w(u,n,o,e,i)},J=function(t){return a(t).map(s).uniq().value()},K=function(t,n){var r=J(n),o=a.sortBy([t.top].concat(r)),e=0,i=function(t){for(;o[e+1]<t;)e++;return o[e]};return a(n).map(c).map(i).uniq().reject(function(n){return n===t.top}).value()},Q=function(t){var n=t.area,r=t.components,o=a.sortBy(r,c);return K(n,o)},X=function(t){return a(t).map(function(n,r){return H(r,t)?"1fr":"min-content"}).join(" ")},Y=function(t,n){return r={},r[n?"-ms-grid-rows":"gridTemplateRows"]=X(t),r;var r},Z=function(t,n,r){return t-n>r},$=function(t,n,r,o){if(m(t))return a.isUndefined(t.minHeight)?"auto":l(t.minHeight+r.top);var e=s(a.last(n));return Z(t.height,e,o)?l(a.max([t.height,t.minHeight])+r.top):a.isUndefined(t.minHeight)?"auto":l(t.minHeight+r.top)},tt=function(t,n){return{top:0-n.top,bottom:m(t)?0:n.bottom-D(t)}},nt=function(t){return t.top>0||t.bottom>0},rt={top:"marginTop",bottom:"marginBottom"},ot=function(t){return a(t).pickBy(function(t){return t>0}).reduce(function(t,n,r){return t[rt[r]]=l(-1*n),t},{})},et=function(t){return{height:"auto",width:t.width?l(t.width):""}},it=function(t){return nt(t)?{display:"flex"}:{}},ut=function(t,n,r,o,e,i){return u({position:"relative",display:t?"-ms-grid":"grid",height:"auto",width:"100%",minHeight:$(n,o,e,i)},ot(e),Y(r,t),(a={},a[t?"-ms-grid-columns":"gridTemplateColumns"]="100%",a));var a},at=function(t,n){var r=function(n,o){return void 0===o&&(o=[]),{id:n,children:a.map(o,function(n){return r(n,t[n])})}};return r(n,t[n])},ct=function(t,n,r){var o=j(r),e=k(t,n),i=S(t,n);return u({visibility:"hidden",height:l(n.height),width:"0"},o(e+1,1,i+2,2))},ft=function(t,n,r,o,e,i){var c=j(r),f=C(t,n,o,e,i),s=f.marginTop,p=f.marginRight,m=f.marginBottom,d=f.marginLeft,h=f.justifySelf,v=f.left,b=f.rowStart,y=f.columnStart,w=f.rowEnd,x=f.columnEnd;return u({position:"relative",margin:g(s)+" "+p+" "+g(m)+" "+d,left:a.has(n,"docked.left")?0:l(v)},c(b,y,w,x),(k={},k[r?"-ms-grid-column-align":"justifySelf"]=h,k[r?"-ms-grid-row-align":"alignSelf"]="start",k));var k};n.createMeshData=e,n.structure2mesh=i},,,function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=r(1);n.structure2mesh=o.structure2mesh;var e=function(){function t(){}return t}();n.Margins=e;var i=function(){function t(){}return t}();n.Dock=i;var u=function(){function t(){}return t}();n.Layout=u;var a=function(){function t(){}return t}();n.Container=a}])});
//# sourceMappingURL=main.js.map