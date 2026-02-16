/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var H6=s((cLe,z6)=>{"use strict";var z9r=typeof Object.defineProperty=="function"?Object.defineProperty:null;z6.exports=z9r});var x6=s((lLe,W6)=>{"use strict";var H9r=H6();function W9r(){try{return H9r({},"x",{}),!0}catch{return!1}}W6.exports=W9r});var J6=s((pLe,X6)=>{"use strict";var x9r=Object.defineProperty;X6.exports=x9r});var U1=s((dLe,Y6)=>{"use strict";function X9r(r){return typeof r=="number"}Y6.exports=X9r});var D1=s((gLe,Z6)=>{"use strict";function J9r(r){return r[0]==="-"}function $6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Y9r(r,e,t){var i=!1,a=e-r.length;return a<0||(J9r(r)&&(i=!0,r=r.substr(1)),r=t?r+$6(a):$6(a)+r,i&&(r="-"+r)),r}Z6.exports=Y9r});var el=s((mLe,rl)=>{"use strict";var $9r=U1(),Q6=D1(),Z9r=String.prototype.toLowerCase,K6=String.prototype.toUpperCase;function Q9r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!$9r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Q6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Q6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===K6.call(r.specifier)?K6.call(t):Z9r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}rl.exports=Q9r});var il=s((yLe,tl)=>{"use strict";function K9r(r){return typeof r=="string"}tl.exports=K9r});var sl=s((hLe,nl)=>{"use strict";var rdr=U1(),edr=Math.abs,tdr=String.prototype.toLowerCase,al=String.prototype.toUpperCase,Ji=String.prototype.replace,idr=/e\+(\d)$/,adr=/e-(\d)$/,ndr=/^(\d+)$/,sdr=/^(\d+)e/,udr=/\.0$/,odr=/\.0*e/,vdr=/(\..*[^0])0*e/;function fdr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!rdr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":edr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Ji.call(t,vdr,"$1e"),t=Ji.call(t,odr,"e"),t=Ji.call(t,udr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ji.call(t,idr,"e+0$1"),t=Ji.call(t,adr,"e-0$1"),r.alternate&&(t=Ji.call(t,ndr,"$1."),t=Ji.call(t,sdr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===al.call(r.specifier)?al.call(t):tdr.call(t),t}nl.exports=fdr});var vl=s((qLe,ol)=>{"use strict";function ul(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function cdr(r,e,t){var i=e-r.length;return i<0||(r=t?r+ul(i):ul(i)+r),r}ol.exports=cdr});var cl=s((bLe,fl)=>{"use strict";var ldr=el(),pdr=il(),ddr=sl(),gdr=vl(),mdr=D1(),ydr=String.fromCharCode,x0=isNaN,hdr=Array.isArray;function qdr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function bdr(r){var e,t,i,a,n,u,o,v,f;if(!hdr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],pdr(i))u+=i;else{if(e=i.precision!==void 0,i=qdr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,x0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,x0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ldr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!x0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x0(n)?String(i.arg):ydr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=ddr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=mdr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=gdr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}fl.exports=bdr});var pl=s((wLe,ll)=>{"use strict";var wdr=cl();ll.exports=wdr});var gl=s((ELe,dl)=>{"use strict";var X0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Edr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Ndr(r){var e,t,i,a;for(t=[],a=0,i=X0.exec(r);i;)e=r.slice(a,X0.lastIndex-i[0].length),e.length&&t.push(e),t.push(Edr(i)),a=X0.lastIndex,i=X0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}dl.exports=Ndr});var yl=s((NLe,ml)=>{"use strict";var Sdr=gl();ml.exports=Sdr});var ql=s((SLe,hl)=>{"use strict";function Odr(r){return typeof r=="string"}hl.exports=Odr});var El=s((OLe,wl)=>{"use strict";var _dr=pl(),Adr=yl(),Tdr=ql();function bl(r){var e,t,i;if(!Tdr(r))throw new TypeError(bl("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Adr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return _dr.apply(null,t)}wl.exports=bl});var V=s((_Le,Nl)=>{"use strict";var Idr=El();Nl.exports=Idr});var Il=s((ALe,Tl)=>{"use strict";var Sl=V(),ya=Object.prototype,Ol=ya.toString,_l=ya.__defineGetter__,Al=ya.__defineSetter__,Rdr=ya.__lookupGetter__,Pdr=ya.__lookupSetter__;function Ldr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||Ol.call(r)==="[object Array]")throw new TypeError(Sl("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Ol.call(t)==="[object Array]")throw new TypeError(Sl("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(Rdr.call(r,e)||Pdr.call(r,e)?(i=r.__proto__,r.__proto__=ya,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&_l&&_l.call(r,e,t.get),u&&Al&&Al.call(r,e,t.set),r}Tl.exports=Ldr});var ni=s((TLe,Rl)=>{"use strict";var Fdr=x6(),jdr=J6(),Mdr=Il(),z1;Fdr()?z1=jdr:z1=Mdr;Rl.exports=z1});var Ll=s((ILe,Pl)=>{"use strict";var Bdr=ni();function kdr(r,e,t){Bdr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Pl.exports=kdr});var D=s((RLe,Fl)=>{"use strict";var Cdr=Ll();Fl.exports=Cdr});var Ml=s((PLe,jl)=>{"use strict";var Vdr=ni();function Gdr(r,e,t){Vdr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}jl.exports=Gdr});var Qr=s((LLe,Bl)=>{"use strict";var Udr=Ml();Bl.exports=Udr});var Cl=s((FLe,kl)=>{"use strict";function Ddr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}kl.exports=Ddr});var In=s((jLe,Vl)=>{"use strict";var zdr=Cl();Vl.exports=zdr});var Ul=s((MLe,Gl)=>{"use strict";function Hdr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Gl.exports=Hdr});var Rn=s((BLe,Dl)=>{"use strict";var Wdr=Ul();Dl.exports=Wdr});var Hl=s((kLe,zl)=>{"use strict";var xdr=Rn();function Xdr(r){return xdr(0,r)}zl.exports=Xdr});var si=s((CLe,Wl)=>{"use strict";var Jdr=Hl();Wl.exports=Jdr});var Jl=s((VLe,Xl)=>{"use strict";var Pn=In(),Ydr=si(),xl=V();function $dr(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=Ydr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(xl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Pn(e).join(", "),Pn(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(xl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Pn(e).join(", "),Pn(t).join(", "),f))}return{ref:r,data:i,shape:Pn(t),strides:n}}Xl.exports=$dr});var H1=s((GLe,Yl)=>{"use strict";var Zdr=Jl();Yl.exports=Zdr});var Ql=s((ULe,Zl)=>{"use strict";var $l=H1();function Qdr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(_=$l(r[0],e[0],q),b=_.data,w=_.strides,i=w[1],a=w[0],_=$l(r[1],e[1],q),T=_.data,w=_.strides,n=w[1],u=w[0],S=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=S[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}Zl.exports=Qdr});var W1=s((DLe,Kl)=>{"use strict";var Kdr=Ql();Kl.exports=Kdr});var e5=s((zLe,r5)=>{"use strict";var x1=H1();function rgr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M;if(S=e[3],f=S[1],c=S[0],!(f<=0||c<=0))for(N=x1(r[0],e[0],S),I=N.data,O=N.strides,i=O[1],a=O[0],N=x1(r[1],e[1],S),E=N.data,O=N.strides,n=O[1],u=O[0],N=x1(r[2],e[2],S),L=N.data,O=N.strides,o=O[1],v=O[0],M=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],_=E[d],b=L[q],T=M[p],l=0;l<f;l++)T[l]=t(w[m],_[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}r5.exports=rgr});var X1=s((HLe,t5)=>{"use strict";var egr=e5();t5.exports=egr});var a5=s((WLe,i5)=>{"use strict";function tgr(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}i5.exports=tgr});var J0=s((xLe,n5)=>{"use strict";var igr=a5();n5.exports=igr});var u5=s((XLe,s5)=>{"use strict";var agr=Rn();function ngr(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push(agr(r,i));return t}s5.exports=ngr});var Y0=s((JLe,o5)=>{"use strict";var sgr=u5();o5.exports=sgr});var f5=s((YLe,v5)=>{"use strict";function ugr(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}v5.exports=ugr});var l5=s(($Le,c5)=>{"use strict";var ogr=f5();c5.exports=ogr});var d5=s((ZLe,p5)=>{"use strict";function vgr(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}p5.exports=vgr});var m5=s((QLe,g5)=>{"use strict";function fgr(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}g5.exports=fgr});var $0=s((KLe,h5)=>{"use strict";var cgr=D(),y5=d5(),lgr=m5();cgr(y5,"assign",lgr);h5.exports=y5});var b5=s((rFe,q5)=>{"use strict";var pgr=/./;q5.exports=pgr});var J1=s((eFe,w5)=>{"use strict";function dgr(r){return typeof r=="boolean"}w5.exports=dgr});var N5=s((tFe,E5)=>{"use strict";function ggr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}E5.exports=ggr});var O5=s((iFe,S5)=>{"use strict";var mgr=N5();S5.exports=mgr});var A5=s((aFe,_5)=>{"use strict";var ygr=O5(),hgr=ygr();function qgr(){return hgr&&typeof Symbol.toStringTag=="symbol"}_5.exports=qgr});var ha=s((nFe,T5)=>{"use strict";var bgr=A5();T5.exports=bgr});var Y1=s((sFe,I5)=>{"use strict";var wgr=Object.prototype.toString;I5.exports=wgr});var P5=s((uFe,R5)=>{"use strict";var Egr=Y1();function Ngr(r){return Egr.call(r)}R5.exports=Ngr});var F5=s((oFe,L5)=>{"use strict";var Sgr=Object.prototype.hasOwnProperty;function Ogr(r,e){return r==null?!1:Sgr.call(r,e)}L5.exports=Ogr});var vr=s((vFe,j5)=>{"use strict";var _gr=F5();j5.exports=_gr});var B5=s((fFe,M5)=>{"use strict";var Agr=typeof Symbol=="function"?Symbol:void 0;M5.exports=Agr});var $1=s((cFe,k5)=>{"use strict";var Tgr=B5();k5.exports=Tgr});var G5=s((lFe,V5)=>{"use strict";var C5=$1(),Igr=typeof C5=="function"?C5.toStringTag:"";V5.exports=Igr});var D5=s((pFe,U5)=>{"use strict";var Rgr=vr(),Ln=G5(),Z1=Y1();function Pgr(r){var e,t,i;if(r==null)return Z1.call(r);t=r[Ln],e=Rgr(r,Ln);try{r[Ln]=void 0}catch{return Z1.call(r)}return i=Z1.call(r),e?r[Ln]=t:delete r[Ln],i}U5.exports=Pgr});var re=s((dFe,z5)=>{"use strict";var Lgr=ha(),Fgr=P5(),jgr=D5(),Q1;Lgr()?Q1=jgr:Q1=Fgr;z5.exports=Q1});var W5=s((gFe,H5)=>{"use strict";var Mgr=Boolean;H5.exports=Mgr});var K1=s((mFe,x5)=>{"use strict";var Bgr=W5();x5.exports=Bgr});var J5=s((yFe,X5)=>{"use strict";var kgr=Boolean.prototype.toString;X5.exports=kgr});var $5=s((hFe,Y5)=>{"use strict";var Cgr=J5();function Vgr(r){try{return Cgr.call(r),!0}catch{return!1}}Y5.exports=Vgr});var r2=s((qFe,Z5)=>{"use strict";var Ggr=ha(),Ugr=re(),Dgr=K1(),zgr=$5(),Hgr=Ggr();function Wgr(r){return typeof r=="object"?r instanceof Dgr?!0:Hgr?zgr(r):Ugr(r)==="[object Boolean]":!1}Z5.exports=Wgr});var K5=s((bFe,Q5)=>{"use strict";var xgr=J1(),Xgr=r2();function Jgr(r){return xgr(r)||Xgr(r)}Q5.exports=Jgr});var de=s((wFe,e8)=>{"use strict";var r8=D(),e2=K5(),Ygr=J1(),$gr=r2();r8(e2,"isPrimitive",Ygr);r8(e2,"isObject",$gr);e8.exports=e2});var i8=s((EFe,t8)=>{"use strict";function Zgr(){return new Function("return this;")()}t8.exports=Zgr});var n8=s((NFe,a8)=>{"use strict";var Qgr=typeof self=="object"?self:null;a8.exports=Qgr});var u8=s((SFe,s8)=>{"use strict";var Kgr=typeof window=="object"?window:null;s8.exports=Kgr});var v8=s((OFe,o8)=>{"use strict";var rmr=typeof globalThis=="object"?globalThis:null;o8.exports=rmr});var t2=s((_Fe,p8)=>{"use strict";var emr=de().isPrimitive,tmr=V(),imr=i8(),f8=n8(),c8=u8(),l8=v8();function amr(r){if(arguments.length){if(!emr(r))throw new TypeError(tmr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return imr()}if(l8)return l8;if(f8)return f8;if(c8)return c8;throw new Error("unexpected error. Unable to resolve global object.")}p8.exports=amr});var m8=s((AFe,g8)=>{"use strict";var nmr=t2(),d8=nmr(),smr=d8.document&&d8.document.childNodes;g8.exports=smr});var h8=s((TFe,y8)=>{"use strict";var umr=Int8Array;y8.exports=umr});var b8=s((IFe,q8)=>{"use strict";var omr=b5(),vmr=m8(),fmr=h8();function cmr(){return typeof omr=="function"||typeof fmr=="object"||typeof vmr=="function"}q8.exports=cmr});var i2=s((RFe,w8)=>{"use strict";function lmr(){return/^\s*function\s*([^(]*)/i}w8.exports=lmr});var N8=s((PFe,E8)=>{"use strict";var pmr=i2(),dmr=pmr();E8.exports=dmr});var a2=s((LFe,O8)=>{"use strict";var gmr=D(),S8=i2(),mmr=N8();gmr(S8,"REGEXP",mmr);O8.exports=S8});var A8=s((FFe,_8)=>{"use strict";var ymr=re(),n2;function hmr(r){return ymr(r)==="[object Array]"}Array.isArray?n2=Array.isArray:n2=hmr;_8.exports=n2});var qe=s((jFe,T8)=>{"use strict";var qmr=A8();T8.exports=qmr});var R8=s((MFe,I8)=>{"use strict";var bmr=qe(),wmr=V();function Emr(r){if(typeof r!="function")throw new TypeError(wmr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!bmr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}I8.exports=Emr});var L8=s((BFe,P8)=>{"use strict";var Nmr=R8();P8.exports=Nmr});var j8=s((kFe,F8)=>{"use strict";function Smr(r){return r!==null&&typeof r=="object"}F8.exports=Smr});var u2=s((CFe,M8)=>{"use strict";var Omr=D(),_mr=L8(),s2=j8(),Amr=_mr(s2);Omr(s2,"isObjectLikeArray",Amr);M8.exports=s2});var k8=s((VFe,B8)=>{"use strict";var Tmr=u2();function Imr(r){return Tmr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}B8.exports=Imr});var Yi=s((GFe,C8)=>{"use strict";var Rmr=k8();C8.exports=Rmr});var G8=s((UFe,V8)=>{"use strict";var Pmr=re(),Lmr=a2().REGEXP,Fmr=Yi();function jmr(r){var e,t,i;if(t=Pmr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Lmr.exec(i.toString()),e)return e[1]}return Fmr(r)?"Buffer":t}V8.exports=jmr});var ui=s((DFe,U8)=>{"use strict";var Mmr=G8();U8.exports=Mmr});var z8=s((zFe,D8)=>{"use strict";var Bmr=ui();function kmr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Bmr(r).toLowerCase():e)}D8.exports=kmr});var W8=s((HFe,H8)=>{"use strict";var Cmr=ui();function Vmr(r){return Cmr(r).toLowerCase()}H8.exports=Vmr});var Z0=s((WFe,x8)=>{"use strict";var Gmr=b8(),Umr=z8(),Dmr=W8(),zmr=Gmr()?Dmr:Umr;x8.exports=zmr});var J8=s((xFe,X8)=>{"use strict";var Hmr=Z0();function Wmr(r){return Hmr(r)==="function"}X8.exports=Wmr});var qr=s((XFe,Y8)=>{"use strict";var xmr=J8();Y8.exports=xmr});var Z8=s((JFe,$8)=>{"use strict";var Xmr=Math.floor;$8.exports=Xmr});var Ur=s((YFe,Q8)=>{"use strict";var Jmr=Z8();Q8.exports=Jmr});var r7=s(($Fe,K8)=>{"use strict";var Ymr=Ur();function $mr(r){return Ymr(r)===r}K8.exports=$mr});var Ne=s((ZFe,e7)=>{"use strict";var Zmr=r7();e7.exports=Zmr});var i7=s((QFe,t7)=>{"use strict";var Qmr=9007199254740991;t7.exports=Qmr});var n7=s((KFe,a7)=>{"use strict";var Kmr=Ne(),ryr=i7();function eyr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Kmr(r.length)&&r.length>=0&&r.length<=ryr}a7.exports=eyr});var Ve=s((rje,s7)=>{"use strict";var tyr=n7();s7.exports=tyr});var o7=s((eje,u7)=>{"use strict";var iyr=qr();function ayr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&iyr(r.next)}u7.exports=ayr});var f7=s((tje,v7)=>{"use strict";var nyr=o7();v7.exports=nyr});var p7=s((ije,l7)=>{"use strict";var c7="function";function syr(r){return typeof r.get===c7&&typeof r.set===c7}l7.exports=syr});var qa=s((aje,d7)=>{"use strict";var uyr=p7();d7.exports=uyr});var y7=s((nje,m7)=>{"use strict";var g7={complex128:oyr,complex64:vyr,default:fyr};function oyr(r,e,t){r.set(t,e)}function vyr(r,e,t){r.set(t,e)}function fyr(r,e,t){r.set(t,e)}function cyr(r){var e=g7[r];return typeof e=="function"?e:g7.default}m7.exports=cyr});var Q0=s((sje,h7)=>{"use strict";var lyr=y7();h7.exports=lyr});var w7=s((uje,b7)=>{"use strict";var q7={float64:pyr,float32:dyr,int32:gyr,int16:myr,int8:yyr,uint32:hyr,uint16:qyr,uint8:byr,uint8c:wyr,generic:Eyr,default:Nyr};function pyr(r,e,t){r[e]=t}function dyr(r,e,t){r[e]=t}function gyr(r,e,t){r[e]=t}function myr(r,e,t){r[e]=t}function yyr(r,e,t){r[e]=t}function hyr(r,e,t){r[e]=t}function qyr(r,e,t){r[e]=t}function byr(r,e,t){r[e]=t}function wyr(r,e,t){r[e]=t}function Eyr(r,e,t){r[e]=t}function Nyr(r,e,t){r[e]=t}function Syr(r){var e=q7[r];return typeof e=="function"?e:q7.default}b7.exports=Syr});var K0=s((oje,E7)=>{"use strict";var Oyr=w7();E7.exports=Oyr});var S7=s((vje,N7)=>{"use strict";var _yr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};N7.exports=_yr});var _7=s((fje,O7)=>{"use strict";var Ayr=re(),Tyr=typeof Float64Array=="function";function Iyr(r){return Tyr&&r instanceof Float64Array||Ayr(r)==="[object Float64Array]"}O7.exports=Iyr});var T7=s((cje,A7)=>{"use strict";var Ryr=_7();A7.exports=Ryr});var R7=s((lje,I7)=>{"use strict";var Pyr=typeof Float64Array=="function"?Float64Array:null;I7.exports=Pyr});var F7=s((pje,L7)=>{"use strict";var Lyr=T7(),P7=R7();function Fyr(){var r,e;if(typeof P7!="function")return!1;try{e=new P7([1,3.14,-3.14,NaN]),r=Lyr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}L7.exports=Fyr});var o2=s((dje,j7)=>{"use strict";var jyr=F7();j7.exports=jyr});var B7=s((gje,M7)=>{"use strict";var Myr=typeof Float64Array=="function"?Float64Array:void 0;M7.exports=Myr});var C7=s((mje,k7)=>{"use strict";function Byr(){throw new Error("not implemented")}k7.exports=Byr});var ge=s((yje,V7)=>{"use strict";var kyr=o2(),Cyr=B7(),Vyr=C7(),v2;kyr()?v2=Cyr:v2=Vyr;V7.exports=v2});var U7=s((hje,G7)=>{"use strict";var Gyr=re(),Uyr=typeof Float32Array=="function";function Dyr(r){return Uyr&&r instanceof Float32Array||Gyr(r)==="[object Float32Array]"}G7.exports=Dyr});var z7=s((qje,D7)=>{"use strict";var zyr=U7();D7.exports=zyr});var pr=s((bje,H7)=>{"use strict";var Hyr=Number.POSITIVE_INFINITY;H7.exports=Hyr});var x7=s((wje,W7)=>{"use strict";var Wyr=typeof Float32Array=="function"?Float32Array:null;W7.exports=Wyr});var Y7=s((Eje,J7)=>{"use strict";var xyr=z7(),Xyr=pr(),X7=x7();function Jyr(){var r,e;if(typeof X7!="function")return!1;try{e=new X7([1,3.14,-3.14,5e40]),r=xyr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Xyr}catch{r=!1}return r}J7.exports=Jyr});var Z7=s((Nje,$7)=>{"use strict";var Yyr=Y7();$7.exports=Yyr});var K7=s((Sje,Q7)=>{"use strict";var $yr=typeof Float32Array=="function"?Float32Array:void 0;Q7.exports=$yr});var ep=s((Oje,rp)=>{"use strict";function Zyr(){throw new Error("not implemented")}rp.exports=Zyr});var et=s((_je,tp)=>{"use strict";var Qyr=Z7(),Kyr=K7(),rhr=ep(),f2;Qyr()?f2=Kyr:f2=rhr;tp.exports=f2});var ap=s((Aje,ip)=>{"use strict";var ehr=re(),thr=typeof Uint32Array=="function";function ihr(r){return thr&&r instanceof Uint32Array||ehr(r)==="[object Uint32Array]"}ip.exports=ihr});var qt=s((Tje,np)=>{"use strict";var ahr=ap();np.exports=ahr});var ba=s((Ije,sp)=>{"use strict";var nhr=4294967295;sp.exports=nhr});var op=s((Rje,up)=>{"use strict";var shr=typeof Uint32Array=="function"?Uint32Array:null;up.exports=shr});var cp=s((Pje,fp)=>{"use strict";var uhr=qt(),c2=ba(),vp=op();function ohr(){var r,e;if(typeof vp!="function")return!1;try{e=[1,3.14,-3.14,c2+1,c2+2],e=new vp(e),r=uhr(e)&&e[0]===1&&e[1]===3&&e[2]===c2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}fp.exports=ohr});var pp=s((Lje,lp)=>{"use strict";var vhr=cp();lp.exports=vhr});var gp=s((Fje,dp)=>{"use strict";var fhr=typeof Uint32Array=="function"?Uint32Array:void 0;dp.exports=fhr});var yp=s((jje,mp)=>{"use strict";function chr(){throw new Error("not implemented")}mp.exports=chr});var me=s((Mje,hp)=>{"use strict";var lhr=pp(),phr=gp(),dhr=yp(),l2;lhr()?l2=phr:l2=dhr;hp.exports=l2});var bp=s((Bje,qp)=>{"use strict";var ghr=re(),mhr=typeof Int32Array=="function";function yhr(r){return mhr&&r instanceof Int32Array||ghr(r)==="[object Int32Array]"}qp.exports=yhr});var rs=s((kje,wp)=>{"use strict";var hhr=bp();wp.exports=hhr});var wa=s((Cje,Ep)=>{"use strict";var qhr=2147483647;Ep.exports=qhr});var Sp=s((Vje,Np)=>{"use strict";var bhr=-2147483648;Np.exports=bhr});var _p=s((Gje,Op)=>{"use strict";var whr=typeof Int32Array=="function"?Int32Array:null;Op.exports=whr});var Ip=s((Uje,Tp)=>{"use strict";var Ehr=rs(),Nhr=wa(),Shr=Sp(),Ap=_p();function Ohr(){var r,e;if(typeof Ap!="function")return!1;try{e=new Ap([1,3.14,-3.14,Nhr+1]),r=Ehr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Shr}catch{r=!1}return r}Tp.exports=Ohr});var Pp=s((Dje,Rp)=>{"use strict";var _hr=Ip();Rp.exports=_hr});var Fp=s((zje,Lp)=>{"use strict";var Ahr=typeof Int32Array=="function"?Int32Array:void 0;Lp.exports=Ahr});var Mp=s((Hje,jp)=>{"use strict";function Thr(){throw new Error("not implemented")}jp.exports=Thr});var oi=s((Wje,Bp)=>{"use strict";var Ihr=Pp(),Rhr=Fp(),Phr=Mp(),p2;Ihr()?p2=Rhr:p2=Phr;Bp.exports=p2});var Cp=s((xje,kp)=>{"use strict";var Lhr=re(),Fhr=typeof Uint16Array=="function";function jhr(r){return Fhr&&r instanceof Uint16Array||Lhr(r)==="[object Uint16Array]"}kp.exports=jhr});var Gp=s((Xje,Vp)=>{"use strict";var Mhr=Cp();Vp.exports=Mhr});var Dp=s((Jje,Up)=>{"use strict";var Bhr=65535;Up.exports=Bhr});var Hp=s((Yje,zp)=>{"use strict";var khr=typeof Uint16Array=="function"?Uint16Array:null;zp.exports=khr});var Xp=s(($je,xp)=>{"use strict";var Chr=Gp(),d2=Dp(),Wp=Hp();function Vhr(){var r,e;if(typeof Wp!="function")return!1;try{e=[1,3.14,-3.14,d2+1,d2+2],e=new Wp(e),r=Chr(e)&&e[0]===1&&e[1]===3&&e[2]===d2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}xp.exports=Vhr});var Yp=s((Zje,Jp)=>{"use strict";var Ghr=Xp();Jp.exports=Ghr});var Zp=s((Qje,$p)=>{"use strict";var Uhr=typeof Uint16Array=="function"?Uint16Array:void 0;$p.exports=Uhr});var Kp=s((Kje,Qp)=>{"use strict";function Dhr(){throw new Error("not implemented")}Qp.exports=Dhr});var $i=s((rMe,r9)=>{"use strict";var zhr=Yp(),Hhr=Zp(),Whr=Kp(),g2;zhr()?g2=Hhr:g2=Whr;r9.exports=g2});var t9=s((eMe,e9)=>{"use strict";var xhr=re(),Xhr=typeof Int16Array=="function";function Jhr(r){return Xhr&&r instanceof Int16Array||xhr(r)==="[object Int16Array]"}e9.exports=Jhr});var a9=s((tMe,i9)=>{"use strict";var Yhr=t9();i9.exports=Yhr});var s9=s((iMe,n9)=>{"use strict";var $hr=32767;n9.exports=$hr});var o9=s((aMe,u9)=>{"use strict";var Zhr=-32768;u9.exports=Zhr});var f9=s((nMe,v9)=>{"use strict";var Qhr=typeof Int16Array=="function"?Int16Array:null;v9.exports=Qhr});var p9=s((sMe,l9)=>{"use strict";var Khr=a9(),rqr=s9(),eqr=o9(),c9=f9();function tqr(){var r,e;if(typeof c9!="function")return!1;try{e=new c9([1,3.14,-3.14,rqr+1]),r=Khr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===eqr}catch{r=!1}return r}l9.exports=tqr});var g9=s((uMe,d9)=>{"use strict";var iqr=p9();d9.exports=iqr});var y9=s((oMe,m9)=>{"use strict";var aqr=typeof Int16Array=="function"?Int16Array:void 0;m9.exports=aqr});var q9=s((vMe,h9)=>{"use strict";function nqr(){throw new Error("not implemented")}h9.exports=nqr});var Ea=s((fMe,b9)=>{"use strict";var sqr=g9(),uqr=y9(),oqr=q9(),m2;sqr()?m2=uqr:m2=oqr;b9.exports=m2});var E9=s((cMe,w9)=>{"use strict";var vqr=re(),fqr=typeof Uint8Array=="function";function cqr(r){return fqr&&r instanceof Uint8Array||vqr(r)==="[object Uint8Array]"}w9.exports=cqr});var S9=s((lMe,N9)=>{"use strict";var lqr=E9();N9.exports=lqr});var _9=s((pMe,O9)=>{"use strict";var pqr=255;O9.exports=pqr});var T9=s((dMe,A9)=>{"use strict";var dqr=typeof Uint8Array=="function"?Uint8Array:null;A9.exports=dqr});var P9=s((gMe,R9)=>{"use strict";var gqr=S9(),y2=_9(),I9=T9();function mqr(){var r,e;if(typeof I9!="function")return!1;try{e=[1,3.14,-3.14,y2+1,y2+2],e=new I9(e),r=gqr(e)&&e[0]===1&&e[1]===3&&e[2]===y2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}R9.exports=mqr});var F9=s((mMe,L9)=>{"use strict";var yqr=P9();L9.exports=yqr});var M9=s((yMe,j9)=>{"use strict";var hqr=typeof Uint8Array=="function"?Uint8Array:void 0;j9.exports=hqr});var k9=s((hMe,B9)=>{"use strict";function qqr(){throw new Error("not implemented")}B9.exports=qqr});var tt=s((qMe,C9)=>{"use strict";var bqr=F9(),wqr=M9(),Eqr=k9(),h2;bqr()?h2=wqr:h2=Eqr;C9.exports=h2});var G9=s((bMe,V9)=>{"use strict";var Nqr=re(),Sqr=typeof Uint8ClampedArray=="function";function Oqr(r){return Sqr&&r instanceof Uint8ClampedArray||Nqr(r)==="[object Uint8ClampedArray]"}V9.exports=Oqr});var D9=s((wMe,U9)=>{"use strict";var _qr=G9();U9.exports=_qr});var H9=s((EMe,z9)=>{"use strict";var Aqr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;z9.exports=Aqr});var X9=s((NMe,x9)=>{"use strict";var Tqr=D9(),W9=H9();function Iqr(){var r,e;if(typeof W9!="function")return!1;try{e=new W9([-1,0,1,3.14,4.99,255,256]),r=Tqr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}x9.exports=Iqr});var Y9=s((SMe,J9)=>{"use strict";var Rqr=X9();J9.exports=Rqr});var Z9=s((OMe,$9)=>{"use strict";var Pqr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;$9.exports=Pqr});var K9=s((_Me,Q9)=>{"use strict";function Lqr(){throw new Error("not implemented")}Q9.exports=Lqr});var Na=s((AMe,rd)=>{"use strict";var Fqr=Y9(),jqr=Z9(),Mqr=K9(),q2;Fqr()?q2=jqr:q2=Mqr;rd.exports=q2});var td=s((TMe,ed)=>{"use strict";var Bqr=re(),kqr=typeof Int8Array=="function";function Cqr(r){return kqr&&r instanceof Int8Array||Bqr(r)==="[object Int8Array]"}ed.exports=Cqr});var ad=s((IMe,id)=>{"use strict";var Vqr=td();id.exports=Vqr});var sd=s((RMe,nd)=>{"use strict";var Gqr=127;nd.exports=Gqr});var od=s((PMe,ud)=>{"use strict";var Uqr=-128;ud.exports=Uqr});var fd=s((LMe,vd)=>{"use strict";var Dqr=typeof Int8Array=="function"?Int8Array:null;vd.exports=Dqr});var pd=s((FMe,ld)=>{"use strict";var zqr=ad(),Hqr=sd(),Wqr=od(),cd=fd();function xqr(){var r,e;if(typeof cd!="function")return!1;try{e=new cd([1,3.14,-3.14,Hqr+1]),r=zqr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Wqr}catch{r=!1}return r}ld.exports=xqr});var gd=s((jMe,dd)=>{"use strict";var Xqr=pd();dd.exports=Xqr});var yd=s((MMe,md)=>{"use strict";var Jqr=typeof Int8Array=="function"?Int8Array:void 0;md.exports=Jqr});var qd=s((BMe,hd)=>{"use strict";function Yqr(){throw new Error("not implemented")}hd.exports=Yqr});var Sa=s((kMe,bd)=>{"use strict";var $qr=gd(),Zqr=yd(),Qqr=qd(),b2;$qr()?b2=Zqr:b2=Qqr;bd.exports=b2});var w2=s((CMe,wd)=>{"use strict";function Kqr(r){return typeof r=="number"}wd.exports=Kqr});var Nd=s((VMe,Ed)=>{"use strict";Ed.exports=Number});var es=s((GMe,Sd)=>{"use strict";var rbr=Nd();Sd.exports=rbr});var _d=s((UMe,Od)=>{"use strict";var ebr=es(),tbr=ebr.prototype.toString;Od.exports=tbr});var Td=s((DMe,Ad)=>{"use strict";var ibr=_d();function abr(r){try{return ibr.call(r),!0}catch{return!1}}Ad.exports=abr});var E2=s((zMe,Id)=>{"use strict";var nbr=ha(),sbr=re(),ubr=es(),obr=Td(),vbr=nbr();function fbr(r){return typeof r=="object"?r instanceof ubr?!0:vbr?obr(r):sbr(r)==="[object Number]":!1}Id.exports=fbr});var Pd=s((HMe,Rd)=>{"use strict";var cbr=w2(),lbr=E2();function pbr(r){return cbr(r)||lbr(r)}Rd.exports=pbr});var Nr=s((WMe,Fd)=>{"use strict";var Ld=D(),N2=Pd(),dbr=w2(),gbr=E2();Ld(N2,"isPrimitive",dbr);Ld(N2,"isObject",gbr);Fd.exports=N2});var Ir=s((xMe,jd)=>{"use strict";var mbr=es(),ybr=mbr.NEGATIVE_INFINITY;jd.exports=ybr});var S2=s((XMe,Md)=>{"use strict";var hbr=pr(),qbr=Ir(),bbr=Ne();function wbr(r){return r<hbr&&r>qbr&&bbr(r)}Md.exports=wbr});var O2=s((JMe,Bd)=>{"use strict";var Ebr=Nr().isPrimitive,Nbr=S2();function Sbr(r){return Ebr(r)&&Nbr(r)}Bd.exports=Sbr});var _2=s((YMe,kd)=>{"use strict";var Obr=Nr().isObject,_br=S2();function Abr(r){return Obr(r)&&_br(r.valueOf())}kd.exports=Abr});var Vd=s(($Me,Cd)=>{"use strict";var Tbr=O2(),Ibr=_2();function Rbr(r){return Tbr(r)||Ibr(r)}Cd.exports=Rbr});var ye=s((ZMe,Ud)=>{"use strict";var Gd=D(),A2=Vd(),Pbr=O2(),Lbr=_2();Gd(A2,"isPrimitive",Pbr);Gd(A2,"isObject",Lbr);Ud.exports=A2});var T2=s((QMe,Dd)=>{"use strict";var Fbr=ye().isPrimitive;function jbr(r){return Fbr(r)&&r>=0}Dd.exports=jbr});var I2=s((KMe,zd)=>{"use strict";var Mbr=ye().isObject;function Bbr(r){return Mbr(r)&&r.valueOf()>=0}zd.exports=Bbr});var Wd=s((rBe,Hd)=>{"use strict";var kbr=T2(),Cbr=I2();function Vbr(r){return kbr(r)||Cbr(r)}Hd.exports=Vbr});var be=s((eBe,Xd)=>{"use strict";var xd=D(),R2=Wd(),Gbr=T2(),Ubr=I2();xd(R2,"isPrimitive",Gbr);xd(R2,"isObject",Ubr);Xd.exports=R2});var P2=s((tBe,Jd)=>{"use strict";var Dbr=4294967295;Jd.exports=Dbr});var $d=s((iBe,Yd)=>{"use strict";var zbr=Ne(),Hbr=P2();function Wbr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&zbr(r.length)&&r.length>=0&&r.length<=Hbr}Yd.exports=Wbr});var Zi=s((aBe,Zd)=>{"use strict";var xbr=$d();Zd.exports=xbr});var Kd=s((nBe,Qd)=>{"use strict";var Xbr=re(),Jbr=typeof ArrayBuffer=="function";function Ybr(r){return Jbr&&r instanceof ArrayBuffer||Xbr(r)==="[object ArrayBuffer]"}Qd.exports=Ybr});var ts=s((sBe,rg)=>{"use strict";var $br=Kd();rg.exports=$br});var tg=s((uBe,eg)=>{"use strict";var Zbr=qe();function Qbr(r){return typeof r=="object"&&r!==null&&!Zbr(r)}eg.exports=Qbr});var is=s((oBe,ig)=>{"use strict";var Kbr=tg();ig.exports=Kbr});var ng=s((vBe,ag)=>{"use strict";function rwr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}ag.exports=rwr});var ug=s((fBe,sg)=>{"use strict";function ewr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}sg.exports=ewr});var lg=s((cBe,cg)=>{"use strict";var og=Nr().isPrimitive,vg=ni(),Fn=D(),fg=V(),twr=ng(),iwr=ug();function Qi(r,e){if(!(this instanceof Qi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!og(r))throw new TypeError(fg("invalid argument. Real component must be a number. Value: `%s`.",r));if(!og(e))throw new TypeError(fg("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return vg(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),vg(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Fn(Qi,"BYTES_PER_ELEMENT",8);Fn(Qi.prototype,"BYTES_PER_ELEMENT",8);Fn(Qi.prototype,"byteLength",16);Fn(Qi.prototype,"toString",twr);Fn(Qi.prototype,"toJSON",iwr);cg.exports=Qi});var Oa=s((lBe,pg)=>{"use strict";var awr=lg();pg.exports=awr});var gg=s((pBe,dg)=>{"use strict";var nwr=typeof Math.fround=="function"?Math.fround:null;dg.exports=nwr});var hg=s((dBe,yg)=>{"use strict";var swr=et(),mg=new swr(1);function uwr(r){return mg[0]=r,mg[0]}yg.exports=uwr});var wg=s((gBe,bg)=>{"use strict";var qg=gg(),owr=hg(),L2;typeof qg=="function"?L2=qg:L2=owr;bg.exports=L2});var Ng=s((mBe,Eg)=>{"use strict";function vwr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Eg.exports=vwr});var Og=s((yBe,Sg)=>{"use strict";function fwr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}Sg.exports=fwr});var Pg=s((hBe,Rg)=>{"use strict";var _g=Nr().isPrimitive,Ag=ni(),jn=D(),Tg=wg(),Ig=V(),cwr=Ng(),lwr=Og();function Ki(r,e){if(!(this instanceof Ki))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!_g(r))throw new TypeError(Ig("invalid argument. Real component must be a number. Value: `%s`.",r));if(!_g(e))throw new TypeError(Ig("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Ag(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Tg(r)}),Ag(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Tg(e)}),this}jn(Ki,"BYTES_PER_ELEMENT",4);jn(Ki.prototype,"BYTES_PER_ELEMENT",4);jn(Ki.prototype,"byteLength",8);jn(Ki.prototype,"toString",cwr);jn(Ki.prototype,"toJSON",lwr);Rg.exports=Ki});var _a=s((qBe,Lg)=>{"use strict";var pwr=Pg();Lg.exports=pwr});var jg=s((bBe,Fg)=>{"use strict";var dwr=Oa(),gwr=_a();function mwr(r){return r instanceof dwr||r instanceof gwr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Fg.exports=mwr});var Je=s((wBe,Mg)=>{"use strict";var ywr=jg();Mg.exports=ywr});var kg=s((EBe,Bg)=>{"use strict";var hwr=Ne();function qwr(r){return hwr(r/2)}Bg.exports=qwr});var as=s((NBe,Cg)=>{"use strict";var bwr=kg();Cg.exports=bwr});var Gg=s((SBe,Vg)=>{"use strict";var wwr=vr(),ns=$1();function Ewr(){return typeof ns=="function"&&typeof ns("foo")=="symbol"&&wwr(ns,"iterator")&&typeof ns.iterator=="symbol"}Vg.exports=Ewr});var ss=s((OBe,Ug)=>{"use strict";var Nwr=Gg();Ug.exports=Nwr});var zg=s((_Be,Dg)=>{"use strict";var Swr=ss(),Owr=Swr()?Symbol.iterator:null;Dg.exports=Owr});var Mn=s((ABe,Hg)=>{"use strict";var _wr=zg();Hg.exports=_wr});var xg=s((TBe,Wg)=>{"use strict";var Awr=ni();function Twr(r,e,t){Awr(r,e,{configurable:!1,enumerable:!1,get:t})}Wg.exports=Twr});var br=s((IBe,Xg)=>{"use strict";var Iwr=xg();Xg.exports=Iwr});var Yg=s((RBe,Jg)=>{"use strict";function Rwr(r){return r.re}Jg.exports=Rwr});var vi=s((PBe,$g)=>{"use strict";var Pwr=Yg();$g.exports=Pwr});var Qg=s((LBe,Zg)=>{"use strict";function Lwr(r){return r.im}Zg.exports=Lwr});var fi=s((FBe,Kg)=>{"use strict";var Fwr=Qg();Kg.exports=Fwr});var em=s((jBe,rm)=>{"use strict";var jwr=et();function Mwr(r,e){return new jwr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}rm.exports=Mwr});var Aa=s((MBe,tm)=>{"use strict";var Bwr=em();tm.exports=Bwr});var am=s((BBe,im)=>{"use strict";var kwr=ge();function Cwr(r,e){return new kwr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}im.exports=Cwr});var Ta=s((kBe,nm)=>{"use strict";var Vwr=am();nm.exports=Vwr});var om=s((CBe,um)=>{"use strict";var sm={float64:Gwr,float32:Uwr,int32:Dwr,int16:zwr,int8:Hwr,uint32:Wwr,uint16:xwr,uint8:Xwr,uint8c:Jwr,generic:Ywr,default:$wr};function Gwr(r,e){return r[e]}function Uwr(r,e){return r[e]}function Dwr(r,e){return r[e]}function zwr(r,e){return r[e]}function Hwr(r,e){return r[e]}function Wwr(r,e){return r[e]}function xwr(r,e){return r[e]}function Xwr(r,e){return r[e]}function Jwr(r,e){return r[e]}function Ywr(r,e){return r[e]}function $wr(r,e){return r[e]}function Zwr(r){var e=sm[r];return typeof e=="function"?e:sm.default}um.exports=Zwr});var Ia=s((VBe,vm)=>{"use strict";var Qwr=om();vm.exports=Qwr});var lm=s((GBe,cm)=>{"use strict";var fm={complex128:Kwr,complex64:rEr,default:eEr};function Kwr(r,e){return r.get(e)}function rEr(r,e){return r.get(e)}function eEr(r,e){return r.get(e)}function tEr(r){var e=fm[r];return typeof e=="function"?e:fm.default}cm.exports=tEr});var ra=s((UBe,pm)=>{"use strict";var iEr=lm();pm.exports=iEr});var gm=s((DBe,dm)=>{"use strict";var aEr=Zi(),nEr=Je(),sEr=vi(),uEr=fi(),oEr=V();function vEr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,aEr(i)&&i.length>=2)e.push(i[0],i[1]);else if(nEr(i))e.push(sEr(i),uEr(i));else return new TypeError(oEr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}dm.exports=vEr});var ym=s((zBe,mm)=>{"use strict";var fEr=Zi(),cEr=Je(),lEr=vi(),pEr=fi(),dEr=V();function gEr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),fEr(n)&&n.length>=2)i.push(n[0],n[1]);else if(cEr(n))i.push(lEr(n),pEr(n));else return new TypeError(dEr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}mm.exports=gEr});var qm=s((HBe,hm)=>{"use strict";var mEr=Je(),yEr=vi(),hEr=fi();function qEr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!mEr(i))return null;r[n]=yEr(i),r[n+1]=hEr(i),n+=2}return r}hm.exports=qEr});var Tm=s((WBe,Am)=>{"use strict";var Bn=be().isPrimitive,bm=Zi(),j2=Ve(),wm=ts(),Em=is(),bEr=qe(),ea=qr(),Ra=Je(),us=as(),F2=Ne(),wEr=ss(),Pa=Mn(),Se=D(),fs=br(),De=et(),Nm=_a(),$r=V(),os=vi(),vs=fi(),EEr=Aa(),NEr=Ta(),SEr=Ia(),OEr=ra(),Sm=gm(),_Er=ym(),AEr=qm(),Ge=De.BYTES_PER_ELEMENT*2,Om=wEr();function La(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function _m(r){return r===ee||r.name==="Complex128Array"}function TEr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ge}function IEr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ge*2}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Bn(arguments[0]))t=new De(arguments[0]*2);else if(j2(arguments[0]))if(t=arguments[0],i=t.length,i&&bEr(t)&&Ra(t[0])){if(t=AEr(new De(i*2),t),t===null){if(!us(i))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(TEr(t))t=EEr(t,0);else if(IEr(t))t=NEr(t,0);else if(!us(i))throw new RangeError($r("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if(wm(arguments[0])){if(t=arguments[0],!F2(t.byteLength/Ge))throw new RangeError($r("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new De(t)}else if(Em(arguments[0])){if(t=arguments[0],Om===!1)throw new TypeError($r("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ea(t[Pa]))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Pa](),!ea(t.next))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Sm(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!wm(t))throw new TypeError($r("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Bn(r))throw new TypeError($r("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!F2(r/Ge))throw new RangeError($r("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(e===2){if(i=t.byteLength-r,!F2(i/Ge))throw new RangeError($r("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,i));t=new De(t,r)}else{if(i=arguments[2],!Bn(i))throw new TypeError($r("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ge>t.byteLength-r)throw new RangeError($r("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ge));t=new De(t,r,i*2)}}return Se(this,"_buffer",t),Se(this,"_length",t.length/2),this}Se(ee,"BYTES_PER_ELEMENT",Ge);Se(ee,"name","Complex64Array");Se(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!_m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ea(a))throw new TypeError($r("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(La(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),Ra(l))u[m]=os(l),u[m+1]=vs(l);else if(bm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(j2(e)){if(a){for(f=e.length,e.get&&e.set?v=OEr("default"):v=SEr("default"),p=0;p<f;p++)if(!Ra(v(e,p))){c=!0;break}if(c){if(!us(f))throw new RangeError($r("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),Ra(l))u[m]=os(l),u[m+1]=vs(l);else if(bm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Em(e)&&Om&&ea(e[Pa])){if(u=e[Pa](),!ea(u.next))throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=_Er(u,a,t):o=Sm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Se(ee,"of",function(){var e,t;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!_m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});fs(ee.prototype,"buffer",function(){return this._buffer.buffer});fs(ee.prototype,"byteLength",function(){return this._buffer.byteLength});fs(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Se(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Se(ee.prototype,"copyWithin",function(e,t){if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Se(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Se(i,"next",v),Se(i,"return",f),Pa&&Se(i,Pa,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new Nm(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Se(ee.prototype,"get",function(e){var t;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Bn(e))throw new TypeError($r("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Nm(t[e],t[e+1])});fs(ee.prototype,"length",function(){return this._length});Se(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Bn(i))throw new TypeError($r("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Ra(e)){if(i>=this._length)throw new RangeError($r("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=os(e),a[i+1]=vs(e);return}if(La(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(j2(e)){for(o=e.length,f=0;f<o;f++)if(!Ra(e[f])){u=!0;break}if(u){if(!us(o))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=os(v),a[i+1]=vs(v),i+=2;return}throw new TypeError($r("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Am.exports=ee});var Fa=s((xBe,Im)=>{"use strict";var REr=Tm();Im.exports=REr});var Pm=s((XBe,Rm)=>{"use strict";function PEr(r){return r.re}Rm.exports=PEr});var it=s((JBe,Lm)=>{"use strict";var LEr=Pm();Lm.exports=LEr});var jm=s((YBe,Fm)=>{"use strict";function FEr(r){return r.im}Fm.exports=FEr});var at=s(($Be,Mm)=>{"use strict";var jEr=jm();Mm.exports=jEr});var km=s((ZBe,Bm)=>{"use strict";var MEr=Zi(),BEr=Je(),kEr=V(),CEr=it(),VEr=at();function GEr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,MEr(i)&&i.length>=2)e.push(i[0],i[1]);else if(BEr(i))e.push(CEr(i),VEr(i));else return new TypeError(kEr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Bm.exports=GEr});var Vm=s((QBe,Cm)=>{"use strict";var UEr=Zi(),DEr=Je(),zEr=V(),HEr=it(),WEr=at();function xEr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),UEr(n)&&n.length>=2)i.push(n[0],n[1]);else if(DEr(n))i.push(HEr(n),WEr(n));else return new TypeError(zEr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Cm.exports=xEr});var Um=s((KBe,Gm)=>{"use strict";var XEr=Je(),JEr=it(),YEr=at();function $Er(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!XEr(i))return null;r[n]=JEr(i),r[n+1]=YEr(i),n+=2}return r}Gm.exports=$Er});var $m=s((rke,Ym)=>{"use strict";var kn=be().isPrimitive,Dm=Zi(),B2=Ve(),zm=ts(),Hm=is(),ZEr=qe(),ta=qr(),ja=Je(),cs=as(),M2=Ne(),QEr=ss(),Ma=Mn(),Oe=D(),ds=br(),ze=ge(),Wm=Oa(),ls=it(),ps=at(),KEr=Aa(),rNr=Ta(),eNr=Ia(),tNr=ra(),Zr=V(),xm=km(),iNr=Vm(),aNr=Um(),Ue=ze.BYTES_PER_ELEMENT*2,Xm=QEr();function Ba(r){return r instanceof te||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Jm(r){return r===te||r.name==="Complex64Array"}function nNr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ue/2}function sNr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ue}function te(){var r,e,t,i;if(e=arguments.length,!(this instanceof te))return e===0?new te:e===1?new te(arguments[0]):e===2?new te(arguments[0],arguments[1]):new te(arguments[0],arguments[1],arguments[2]);if(e===0)t=new ze(0);else if(e===1)if(kn(arguments[0]))t=new ze(arguments[0]*2);else if(B2(arguments[0]))if(t=arguments[0],i=t.length,i&&ZEr(t)&&ja(t[0])){if(t=aNr(new ze(i*2),t),t===null){if(!cs(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new ze(arguments[0])}}else{if(nNr(t))t=KEr(t,0);else if(sNr(t))t=rNr(t,0);else if(!cs(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new ze(t)}else if(zm(arguments[0])){if(t=arguments[0],!M2(t.byteLength/Ue))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ue,t.byteLength));t=new ze(t)}else if(Hm(arguments[0])){if(t=arguments[0],Xm===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ta(t[Ma]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ma](),!ta(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=xm(t),t instanceof Error)throw t;t=new ze(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!zm(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!kn(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!M2(r/Ue))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ue,r));if(e===2){if(i=t.byteLength-r,!M2(i/Ue))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ue,i));t=new ze(t,r)}else{if(i=arguments[2],!kn(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ue>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ue));t=new ze(t,r,i*2)}}return Oe(this,"_buffer",t),Oe(this,"_length",t.length/2),this}Oe(te,"BYTES_PER_ELEMENT",Ue);Oe(te,"name","Complex128Array");Oe(te,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ta(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Jm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ta(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Ba(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),ja(l))u[m]=ls(l),u[m+1]=ps(l);else if(Dm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(B2(e)){if(a){for(f=e.length,e.get&&e.set?v=tNr("default"):v=eNr("default"),p=0;p<f;p++)if(!ja(v(e,p))){c=!0;break}if(c){if(!cs(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),ja(l))u[m]=ls(l),u[m+1]=ps(l);else if(Dm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Hm(e)&&Xm&&ta(e[Ma])){if(u=e[Ma](),!ta(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=iNr(u,a,t):o=xm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Oe(te,"of",function(){var e,t;if(!ta(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Jm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ds(te.prototype,"buffer",function(){return this._buffer.buffer});ds(te.prototype,"byteLength",function(){return this._buffer.byteLength});ds(te.prototype,"byteOffset",function(){return this._buffer.byteOffset});Oe(te.prototype,"BYTES_PER_ELEMENT",te.BYTES_PER_ELEMENT);Oe(te.prototype,"copyWithin",function(e,t){if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Oe(te.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Oe(i,"next",v),Oe(i,"return",f),Ma&&Oe(i,Ma,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new Wm(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Oe(te.prototype,"get",function(e){var t;if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!kn(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Wm(t[e],t[e+1])});ds(te.prototype,"length",function(){return this._length});Oe(te.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!kn(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ja(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=ls(e),a[i+1]=ps(e);return}if(Ba(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new ze(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(B2(e)){for(o=e.length,f=0;f<o;f++)if(!ja(e[f])){u=!0;break}if(u){if(!cs(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new ze(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=ls(v),a[i+1]=ps(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Ym.exports=te});var ka=s((eke,Zm)=>{"use strict";var uNr=$m();Zm.exports=uNr});var Km=s((tke,Qm)=>{"use strict";var oNr=ge(),vNr=et(),fNr=me(),cNr=oi(),lNr=$i(),pNr=Ea(),dNr=tt(),gNr=Na(),mNr=Sa(),yNr=Fa(),hNr=ka(),qNr=[oNr,vNr,cNr,fNr,pNr,lNr,mNr,dNr,gNr,yNr,hNr];Qm.exports=qNr});var ey=s((ike,ry)=>{"use strict";var bNr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];ry.exports=bNr});var ay=s((ake,iy)=>{"use strict";var wNr=Yi(),ENr=qe(),NNr=ui(),SNr=S7(),ONr=Km(),ty=ey(),_Nr=ty.length;function ANr(r){var e;if(ENr(r))return"generic";if(wNr(r))return null;for(e=0;e<_Nr;e++)if(r instanceof ONr[e])return ty[e];return SNr[NNr(r)]||null}iy.exports=ANr});var Ca=s((nke,ny)=>{"use strict";var TNr=ay();ny.exports=TNr});var oy=s((ske,uy)=>{"use strict";var sy=qr(),INr=Ve(),RNr=f7(),PNr=qa(),LNr=Q0(),FNr=K0(),jNr=Ca(),k2=V();function MNr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(INr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!sy(t))throw new TypeError(k2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!sy(t))throw new TypeError(k2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!RNr(r))throw new TypeError(k2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=jNr(i),PNr(i)?n=LNr(u):n=FNr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}uy.exports=MNr});var fy=s((uke,vy)=>{"use strict";var BNr=oy();vy.exports=BNr});var ly=s((oke,cy)=>{"use strict";function kNr(r){return r!==r}cy.exports=kNr});var H=s((vke,py)=>{"use strict";var CNr=ly();py.exports=CNr});var gy=s((fke,dy)=>{"use strict";var VNr={Complex64:"complex64",Complex128:"complex128"};dy.exports=VNr});var yy=s((cke,my)=>{"use strict";var GNr=_a(),UNr=Oa(),DNr=[GNr,UNr];my.exports=DNr});var qy=s((lke,hy)=>{"use strict";var zNr=["complex64","complex128"];hy.exports=zNr});var Ey=s((pke,wy)=>{"use strict";var HNr=ui(),WNr=gy(),xNr=yy(),by=qy(),XNr=by.length;function JNr(r){var e;for(e=0;e<XNr;e++)if(r instanceof xNr[e])return by[e];return WNr[HNr(r)]||null}wy.exports=JNr});var C2=s((dke,Ny)=>{"use strict";var YNr=Ey();Ny.exports=YNr});var Oy=s((gke,Sy)=>{"use strict";var $Nr=ge(),ZNr=et(),QNr=ka(),KNr=Fa(),rSr={float64:$Nr,float32:ZNr,complex128:QNr,complex64:KNr};Sy.exports=rSr});var Ay=s((mke,_y)=>{"use strict";var eSr=Oy();function tSr(r){return eSr[r]||null}_y.exports=tSr});var Iy=s((yke,Ty)=>{"use strict";var iSr=Ay();Ty.exports=iSr});var Py=s((hke,Ry)=>{"use strict";function aSr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}Ry.exports=aSr});var ky=s((qke,By)=>{"use strict";var nSr=_a(),sSr=Oa(),Ly=it(),Fy=at(),jy=vi(),My=fi();function uSr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=jy(e),l=My(e)):(f=Ly(e),l=Fy(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=jy(i),p=My(i)):(c=Ly(i),p=Fy(i)),o===2?u=nSr:u=sSr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}By.exports=uSr});var V2=s((bke,Cy)=>{"use strict";function oSr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}Cy.exports=oSr});var G2=s((wke,zy)=>{"use strict";var Vy=it(),Gy=at(),Uy=vi(),Dy=fi();function vSr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=Uy(t),f=Dy(t)):(o=Vy(t),f=Gy(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=Uy(a),c=Dy(a)):(v=Vy(a),c=Gy(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}zy.exports=vSr});var Wy=s((Eke,Hy)=>{"use strict";var fSr=Object;Hy.exports=fSr});var Va=s((Nke,xy)=>{"use strict";var cSr=Wy();xy.exports=cSr});var Jy=s((Ske,Xy)=>{"use strict";var lSr=Object.getPrototypeOf;Xy.exports=lSr});var $y=s((Oke,Yy)=>{"use strict";function pSr(r){return r.__proto__}Yy.exports=pSr});var Qy=s((_ke,Zy)=>{"use strict";var dSr=re(),gSr=$y();function mSr(r){var e=gSr(r);return e||e===null?e:dSr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Zy.exports=mSr});var rh=s((Ake,Ky)=>{"use strict";var ySr=qr(),hSr=Jy(),qSr=Qy(),U2;ySr(Object.getPrototypeOf)?U2=hSr:U2=qSr;Ky.exports=U2});var th=s((Tke,eh)=>{"use strict";var bSr=Va(),wSr=rh();function ESr(r){return r==null?null:(r=bSr(r),wSr(r))}eh.exports=ESr});var ia=s((Ike,ih)=>{"use strict";var NSr=th();ih.exports=NSr});var sh=s((Rke,nh)=>{"use strict";var SSr=is(),ah=qr(),OSr=ia(),gs=vr(),_Sr=re(),ASr=Object.prototype;function TSr(r){var e;for(e in r)if(!gs(r,e))return!1;return!0}function ISr(r){var e;return SSr(r)?(e=OSr(r),e?!gs(r,"constructor")&&gs(e,"constructor")&&ah(e.constructor)&&_Sr(e.constructor)==="[object Function]"&&gs(e,"isPrototypeOf")&&ah(e.isPrototypeOf)&&(e===ASr||TSr(r)):!0):!1}nh.exports=ISr});var hr=s((Pke,uh)=>{"use strict";var RSr=sh();uh.exports=RSr});var D2=s((Lke,oh)=>{"use strict";function PSr(r){return typeof r=="string"}oh.exports=PSr});var fh=s((Fke,vh)=>{"use strict";var LSr=String.prototype.valueOf;vh.exports=LSr});var lh=s((jke,ch)=>{"use strict";var FSr=fh();function jSr(r){try{return FSr.call(r),!0}catch{return!1}}ch.exports=jSr});var z2=s((Mke,ph)=>{"use strict";var MSr=ha(),BSr=re(),kSr=lh(),CSr=MSr();function VSr(r){return typeof r=="object"?r instanceof String?!0:CSr?kSr(r):BSr(r)==="[object String]":!1}ph.exports=VSr});var gh=s((Bke,dh)=>{"use strict";var GSr=D2(),USr=z2();function DSr(r){return GSr(r)||USr(r)}dh.exports=DSr});var Jr=s((kke,yh)=>{"use strict";var mh=D(),H2=gh(),zSr=D2(),HSr=z2();mh(H2,"isPrimitive",zSr);mh(H2,"isObject",HSr);yh.exports=H2});var x2=s((Cke,qh)=>{"use strict";var WSr=hr(),hh=vr(),xSr=Jr().isPrimitive,XSr=de().isPrimitive,W2=V();function JSr(r,e){return WSr(e)?hh(e,"dtype")&&(r.dtype=e.dtype,!xSr(r.dtype))?new TypeError(W2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):hh(e,"endpoint")&&(r.endpoint=e.endpoint,!XSr(r.endpoint))?new TypeError(W2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(W2("invalid argument. Options argument must be an object. Value: `%s`.",e))}qh.exports=JSr});var X2=s((Vke,YSr)=>{YSr.exports={endpoint:!0}});var _h=s((Gke,Oh)=>{"use strict";var bh=Je(),wh=Nr().isPrimitive,$Sr=be().isPrimitive,Eh=H(),Nh=C2(),ZSr=Iy(),QSr=Aa(),KSr=Ta(),Ga=V(),rOr=Py(),eOr=ky(),tOr=V2(),Sh=G2(),iOr=x2(),aOr=X2();function nOr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=Nh(r),o===null){if(!bh(r))throw new TypeError(Ga("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!wh(r)||Eh(r))throw new TypeError(Ga("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=Nh(e),v===null){if(!bh(e))throw new TypeError(Ga("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!wh(e)||Eh(e))throw new TypeError(Ga("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!$Sr(t))throw new TypeError(Ga("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:aOr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=iOr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?eOr(o,r,v,e,t,i.endpoint):rOr(r,e,t,i.endpoint);if(a=ZSr(i.dtype),a===null)throw new TypeError(Ga('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return Sh(QSr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return Sh(KSr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return tOr(u,r,e,t,i.endpoint)}Oh.exports=nOr});var Th=s((Uke,Ah)=>{"use strict";var sOr=qa(),uOr=Ia(),oOr=K0(),vOr=ra(),fOr=Q0(),cOr=Ca();function lOr(r){var e=cOr(r);return sOr(r)?{accessorProtocol:!0,accessors:[vOr(e),fOr(e)]}:{accessorProtocol:!1,accessors:[uOr(e),oOr(e)]}}Ah.exports=lOr});var Rh=s((Dke,Ih)=>{"use strict";var pOr=Th();Ih.exports=pOr});var Lh=s((zke,Ph)=>{"use strict";var dOr=Rh();function gOr(r){var e=dOr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Ph.exports=gOr});var Cn=s((Hke,Fh)=>{"use strict";var mOr=Lh();Fh.exports=mOr});var Vh=s((Wke,Ch)=>{"use strict";var yOr=_a(),hOr=Oa(),jh=it(),Mh=at(),Bh=vi(),kh=fi();function qOr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,_;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Bh(t),l=kh(t)):(f=jh(t),l=Mh(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=Bh(a),p=kh(a)):(c=jh(a),p=Mh(a)),v===2?o=yOr:o=hOr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,_=1;_<w;_++)g=f+h*_,d=l+q*_,m(y,_,new o(g,d));return u&&m(y,w,new o(c,p)),r}Ch.exports=qOr});var Uh=s((xke,Gh)=>{"use strict";function bOr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}Gh.exports=bOr});var Yh=s((Xke,Jh)=>{"use strict";var Dh=Je(),zh=Nr().isPrimitive,wOr=Ve(),Vn=V(),Hh=H(),Wh=C2(),EOr=Ca(),NOr=Aa(),SOr=Ta(),xh=Cn(),OOr=Vh(),_Or=Uh(),Xh=G2(),AOr=V2(),TOr=x2(),IOr=X2();function ROr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=Wh(r),n===null){if(!Dh(r))throw new TypeError(Vn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!zh(r)||Hh(r))throw new TypeError(Vn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=Wh(e),u===null){if(!Dh(e))throw new TypeError(Vn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!zh(e)||Hh(e))throw new TypeError(Vn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!wOr(t))throw new TypeError(Vn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:IOr.endpoint},arguments.length>3&&(a=TOr(i,arguments[3]),a))throw a;if(v=EOr(t),v===null&&(v="generic"),v==="complex64")return Xh(NOr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return Xh(SOr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=xh(t),OOr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=xh(t),f.accessorProtocol?(_Or(f,r,e,t.length,i.endpoint),t):(AOr(t,r,e,t.length,i.endpoint),t)}Jh.exports=ROr});var Qh=s((Jke,Zh)=>{"use strict";var POr=D(),$h=_h(),LOr=Yh();POr($h,"assign",LOr);Zh.exports=$h});var rq=s((Yke,Kh)=>{"use strict";var FOr=Nr().isPrimitive,jOr=Jr().isPrimitive,MOr=de().isPrimitive,BOr=qe(),kOr=V(),COr={number:FOr,string:jOr,boolean:MOr};function VOr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=COr[n],u(o))i.push([[o]]),a.push([1,1]);else if(BOr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(kOr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}Kh.exports=VOr});var ms=s(($ke,eq)=>{"use strict";var GOr=rq();eq.exports=GOr});var iq=s((Zke,tq)=>{"use strict";var UOr=Y0();function DOr(r){return UOr(1,r)}tq.exports=DOr});var nq=s((Qke,aq)=>{"use strict";var zOr=iq();aq.exports=zOr});var uq=s((Kke,sq)=>{"use strict";function HOr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(f=e[0],v=e[1],o=t[0],u=t[1],a=[],l=0;l<f;l++){for(n=[],p=i+o*l,c=0;c<v;c++)n.push(r[p]),p+=u;a.push(n)}return a}sq.exports=HOr});var ys=s((rCe,oq)=>{"use strict";var WOr=uq();oq.exports=WOr});var fq=s((eCe,vq)=>{"use strict";function xOr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}vq.exports=xOr});var J2=s((tCe,cq)=>{"use strict";var XOr=fq();cq.exports=XOr});var pq=s((iCe,lq)=>{"use strict";var JOr=Y0();function YOr(r){return JOr(0,r)}lq.exports=YOr});var hs=s((aCe,dq)=>{"use strict";var $Or=pq();dq.exports=$Or});var mq=s((nCe,gq)=>{"use strict";var we=Qr(),ZOr=W1(),QOr=X1(),KOr=J0(),r_r=Rn(),e_r=Y0(),t_r=l5(),i_r=$0(),a_r=fy(),n_r=Qh(),s_r=ms(),u_r=nq(),o_r=ys(),v_r=J2(),f_r=si(),c_r=hs();function l_r(r){return we(r,"bbinary2d",ZOr),we(r,"bternary2d",QOr),we(r,"broadcastShapes",KOr),we(r,"filled",r_r),we(r,"filled2d",e_r),we(r,"filled2dBy",t_r),we(r,"flatten2d",i_r),we(r,"iterator2array",a_r),we(r,"linspace",n_r),we(r,"normalizeBroadcastArgs",s_r),we(r,"ones2d",u_r),we(r,"strided2array2d",o_r),we(r,"unary2d",v_r),we(r,"zeros",f_r),we(r,"zeros2d",c_r),r}gq.exports=l_r});var qq=s((sCe,hq)=>{"use strict";var yq=V();function p_r(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(yq('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(yq('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}hq.exports=p_r});var wq=s((uCe,bq)=>{"use strict";var d_r=qq();bq.exports=d_r});var Nq=s((oCe,Eq)=>{"use strict";var g_r=Nr().isPrimitive,m_r=wq(),y_r=V();function h_r(r,e,t,i,a,n){var u,o;if(!(g_r(r)&&m_r(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(y_r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}Eq.exports=h_r});var Oq=s((vCe,Sq)=>{"use strict";var q_r=Nq();Sq.exports=q_r});var Aq=s((fCe,_q)=>{"use strict";var b_r=de().isPrimitive,w_r=V();function E_r(r,e){if(!b_r(r))throw new TypeError(w_r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}_q.exports=E_r});var Iq=s((cCe,Tq)=>{"use strict";var N_r=Aq();Tq.exports=N_r});var Pq=s((lCe,Rq)=>{"use strict";function S_r(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}Rq.exports=S_r});var Fq=s((pCe,Lq)=>{"use strict";var O_r=Pq();Lq.exports=O_r});var Mq=s((dCe,jq)=>{"use strict";var __r=V(),A_r=Fq();function T_r(r,e,t){if(!A_r(r,e))throw new TypeError(__r("invalid argument. %s must be broadcast compatible.",t))}jq.exports=T_r});var kq=s((gCe,Bq)=>{"use strict";var I_r=Mq();Bq.exports=I_r});var Vq=s((mCe,Cq)=>{"use strict";function R_r(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}Cq.exports=R_r});var Uq=s((yCe,Gq)=>{"use strict";var P_r=Vq();Gq.exports=P_r});var zq=s((hCe,Dq)=>{"use strict";var L_r=V(),F_r=Uq();function j_r(r,e,t,i){if(!F_r(r,e))throw new TypeError(L_r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Dq.exports=j_r});var Wq=s((qCe,Hq)=>{"use strict";var M_r=zq();Hq.exports=M_r});var Xq=s((bCe,xq)=>{"use strict";var B_r=typeof Object.defineProperty=="function"?Object.defineProperty:null;xq.exports=B_r});var Yq=s((wCe,Jq)=>{"use strict";var k_r=Xq();function C_r(){try{return k_r({},"x",{}),!0}catch{return!1}}Jq.exports=C_r});var Zq=s((ECe,$q)=>{"use strict";var V_r=Object.defineProperty;$q.exports=V_r});var Y2=s((NCe,Qq)=>{"use strict";function G_r(r){return typeof r=="number"}Qq.exports=G_r});var $2=s((SCe,rb)=>{"use strict";function U_r(r){return r[0]==="-"}function Kq(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function D_r(r,e,t){var i=!1,a=e-r.length;return a<0||(U_r(r)&&(i=!0,r=r.substr(1)),r=t?r+Kq(a):Kq(a)+r,i&&(r="-"+r)),r}rb.exports=D_r});var ab=s((OCe,ib)=>{"use strict";var z_r=Y2(),eb=$2(),H_r=String.prototype.toLowerCase,tb=String.prototype.toUpperCase;function W_r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!z_r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=eb(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=eb(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===tb.call(r.specifier)?tb.call(t):H_r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}ib.exports=W_r});var sb=s((_Ce,nb)=>{"use strict";function x_r(r){return typeof r=="string"}nb.exports=x_r});var vb=s((ACe,ob)=>{"use strict";var X_r=Math.abs,J_r=String.prototype.toLowerCase,ub=String.prototype.toUpperCase,aa=String.prototype.replace,Y_r=/e\+(\d)$/,$_r=/e-(\d)$/,Z_r=/^(\d+)$/,Q_r=/^(\d+)e/,K_r=/\.0$/,rAr=/\.0*e/,eAr=/(\..*[^0])0*e/;function tAr(r,e){var t,i;switch(e.specifier){case"e":case"E":i=r.toExponential(e.precision);break;case"f":case"F":i=r.toFixed(e.precision);break;case"g":case"G":X_r(r)<1e-4?(t=e.precision,t>0&&(t-=1),i=r.toExponential(t)):i=r.toPrecision(e.precision),e.alternate||(i=aa.call(i,eAr,"$1e"),i=aa.call(i,rAr,"e"),i=aa.call(i,K_r,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=aa.call(i,Y_r,"e+0$1"),i=aa.call(i,$_r,"e-0$1"),e.alternate&&(i=aa.call(i,Z_r,"$1."),i=aa.call(i,Q_r,"$1.e")),r>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ub.call(e.specifier)?ub.call(i):J_r.call(i),i}ob.exports=tAr});var lb=s((TCe,cb)=>{"use strict";function fb(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function iAr(r,e,t){var i=e-r.length;return i<0||(r=t?r+fb(i):fb(i)+r),r}cb.exports=iAr});var db=s((ICe,pb)=>{"use strict";var aAr=ab(),nAr=sb(),sAr=Y2(),uAr=vb(),oAr=lb(),vAr=$2(),fAr=String.fromCharCode,cAr=Array.isArray;function qs(r){return r!==r}function lAr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function pAr(r){var e,t,i,a,n,u,o,v,f,c;if(!cAr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],nAr(i))u+=i;else{if(e=i.precision!==void 0,i=lAr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,c=0;c<t.length;c++)switch(a=t.charAt(c),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,qs(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,qs(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=aAr(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!qs(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=qs(n)?String(i.arg):fAr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(e||(i.precision=6),v=parseFloat(i.arg),!isFinite(v)){if(!sAr(i.arg))throw new Error("invalid floating-point number. Value: "+u);v=i.arg,i.padZeros=!1}i.arg=uAr(v,i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=vAr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=oAr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}pb.exports=pAr});var mb=s((RCe,gb)=>{"use strict";var dAr=db();gb.exports=dAr});var hb=s((PCe,yb)=>{"use strict";var bs=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function gAr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function mAr(r){var e,t,i,a;for(t=[],a=0,i=bs.exec(r);i;)e=r.slice(a,bs.lastIndex-i[0].length),e.length&&t.push(e),i[6]==="%"?t.push("%"):t.push(gAr(i)),a=bs.lastIndex,i=bs.exec(r);return e=r.slice(a),e.length&&t.push(e),t}yb.exports=mAr});var bb=s((LCe,qb)=>{"use strict";var yAr=hb();qb.exports=yAr});var Eb=s((FCe,wb)=>{"use strict";function hAr(r){return typeof r=="string"}wb.exports=hAr});var Ob=s((jCe,Sb)=>{"use strict";var qAr=mb(),bAr=bb(),wAr=Eb();function Nb(r){var e,t;if(!wAr(r))throw new TypeError(Nb("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[bAr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return qAr.apply(null,e)}Sb.exports=Nb});var Ab=s((MCe,_b)=>{"use strict";var EAr=Ob();_b.exports=EAr});var Fb=s((BCe,Lb)=>{"use strict";var Tb=Ab(),Ua=Object.prototype,Ib=Ua.toString,Rb=Ua.__defineGetter__,Pb=Ua.__defineSetter__,NAr=Ua.__lookupGetter__,SAr=Ua.__lookupSetter__;function OAr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||Ib.call(r)==="[object Array]")throw new TypeError(Tb("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Ib.call(t)==="[object Array]")throw new TypeError(Tb("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(NAr.call(r,e)||SAr.call(r,e)?(i=r.__proto__,r.__proto__=Ua,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Rb&&Rb.call(r,e,t.get),u&&Pb&&Pb.call(r,e,t.set),r}Lb.exports=OAr});var Mb=s((kCe,jb)=>{"use strict";var _Ar=Yq(),AAr=Zq(),TAr=Fb(),Z2;_Ar()?Z2=AAr:Z2=TAr;jb.exports=Z2});var kb=s((CCe,Bb)=>{"use strict";var IAr=Mb();function RAr(r,e,t){IAr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Bb.exports=RAr});var Vb=s((VCe,Cb)=>{"use strict";var PAr=kb();Cb.exports=PAr});var Ub=s((GCe,Gb)=>{"use strict";function LAr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}Gb.exports=LAr});var zb=s((UCe,Db)=>{"use strict";function FAr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}Db.exports=FAr});var xb=s((DCe,Wb)=>{"use strict";var jAr=Vb(),Hb=Ub(),MAr=zb();jAr(Hb,"assign",MAr);Wb.exports=Hb});var Jb=s((zCe,Xb)=>{"use strict";var BAr=xb();function kAr(r,e,t,i){var a=BAr(e,t,i);return a[0]>=0&&a[1]<r}Xb.exports=kAr});var Q2=s((HCe,Yb)=>{"use strict";var CAr=Jb();Yb.exports=CAr});var Zb=s((WCe,$b)=>{"use strict";var VAr=Q2();function GAr(r,e,t,i){if(e.length&&!VAr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}$b.exports=GAr});var Kb=s((xCe,Qb)=>{"use strict";var UAr=Zb();Qb.exports=UAr});var ew=s((XCe,rw)=>{"use strict";var DAr=V();function zAr(r,e){if(r===void 0)throw new Error(DAr("invalid invocation. Must provide %s.",e))}rw.exports=zAr});var K2=s((JCe,tw)=>{"use strict";var HAr=ew();tw.exports=HAr});var aw=s((YCe,iw)=>{"use strict";var WAr=V();function xAr(r,e,t,i){if(!(r>e))throw new TypeError(WAr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}iw.exports=xAr});var sw=s(($Ce,nw)=>{"use strict";var XAr=aw();nw.exports=XAr});var ow=s((ZCe,uw)=>{"use strict";var JAr=V();function YAr(r,e,t,i){if(!(r>=e))throw new TypeError(JAr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}uw.exports=YAr});var fw=s((QCe,vw)=>{"use strict";var $Ar=ow();vw.exports=$Ar});var lw=s((KCe,cw)=>{"use strict";var ZAr=ye().isPrimitive,QAr=V();function KAr(r,e){if(!ZAr(r))throw new TypeError(QAr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}cw.exports=KAr});var dw=s((rVe,pw)=>{"use strict";var rTr=lw();pw.exports=rTr});var mw=s((eVe,gw)=>{"use strict";var eTr=V();function tTr(r,e,t,i){if(!(r<e))throw new TypeError(eTr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}gw.exports=tTr});var hw=s((tVe,yw)=>{"use strict";var iTr=mw();yw.exports=iTr});var bw=s((iVe,qw)=>{"use strict";var aTr=V();function nTr(r,e,t,i){if(!(r<=e))throw new TypeError(aTr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}qw.exports=nTr});var Ew=s((aVe,ww)=>{"use strict";var sTr=bw();ww.exports=sTr});var Sw=s((nVe,Nw)=>{"use strict";var uTr=be().isPrimitive,oTr=V();function vTr(r,e){if(!uTr(r))throw new TypeError(oTr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Nw.exports=vTr});var _w=s((sVe,Ow)=>{"use strict";var fTr=Sw();Ow.exports=fTr});var rv=s((uVe,Aw)=>{"use strict";var cTr=Nr().isPrimitive;function lTr(r){return cTr(r)&&r>=0}Aw.exports=lTr});var ev=s((oVe,Tw)=>{"use strict";var pTr=Nr().isObject;function dTr(r){return pTr(r)&&r.valueOf()>=0}Tw.exports=dTr});var Rw=s((vVe,Iw)=>{"use strict";var gTr=rv(),mTr=ev();function yTr(r){return gTr(r)||mTr(r)}Iw.exports=yTr});var ws=s((fVe,Lw)=>{"use strict";var Pw=D(),tv=Rw(),hTr=rv(),qTr=ev();Pw(tv,"isPrimitive",hTr);Pw(tv,"isObject",qTr);Lw.exports=tv});var jw=s((cVe,Fw)=>{"use strict";var bTr=ws().isPrimitive,wTr=V();function ETr(r,e){if(!bTr(r))throw new TypeError(wTr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Fw.exports=ETr});var Bw=s((lVe,Mw)=>{"use strict";var NTr=jw();Mw.exports=NTr});var Cw=s((pVe,kw)=>{"use strict";var STr=Nr().isPrimitive,OTr=V();function _Tr(r,e){if(!STr(r))throw new TypeError(OTr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}kw.exports=_Tr});var Gw=s((dVe,Vw)=>{"use strict";var ATr=Cw();Vw.exports=ATr});var Dw=s((gVe,Uw)=>{"use strict";var TTr=V();function ITr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(TTr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Uw.exports=ITr});var Hw=s((mVe,zw)=>{"use strict";var RTr=Dw();zw.exports=RTr});var iv=s((yVe,Ww)=>{"use strict";var PTr=ye().isPrimitive;function LTr(r){return PTr(r)&&r>0}Ww.exports=LTr});var av=s((hVe,xw)=>{"use strict";var FTr=ye().isObject;function jTr(r){return FTr(r)&&r.valueOf()>0}xw.exports=jTr});var Jw=s((qVe,Xw)=>{"use strict";var MTr=iv(),BTr=av();function kTr(r){return MTr(r)||BTr(r)}Xw.exports=kTr});var nt=s((bVe,$w)=>{"use strict";var Yw=D(),nv=Jw(),CTr=iv(),VTr=av();Yw(nv,"isPrimitive",CTr);Yw(nv,"isObject",VTr);$w.exports=nv});var Qw=s((wVe,Zw)=>{"use strict";var GTr=nt().isPrimitive,UTr=V();function DTr(r,e){if(!GTr(r))throw new TypeError(UTr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Zw.exports=DTr});var sv=s((EVe,Kw)=>{"use strict";var zTr=Qw();Kw.exports=zTr});var uv=s((NVe,rE)=>{"use strict";var HTr=Nr().isPrimitive;function WTr(r){return HTr(r)&&r>0}rE.exports=WTr});var ov=s((SVe,eE)=>{"use strict";var xTr=Nr().isObject;function XTr(r){return xTr(r)&&r.valueOf()>0}eE.exports=XTr});var iE=s((OVe,tE)=>{"use strict";var JTr=uv(),YTr=ov();function $Tr(r){return JTr(r)||YTr(r)}tE.exports=$Tr});var zr=s((_Ve,nE)=>{"use strict";var aE=D(),vv=iE(),ZTr=uv(),QTr=ov();aE(vv,"isPrimitive",ZTr);aE(vv,"isObject",QTr);nE.exports=vv});var uE=s((AVe,sE)=>{"use strict";var KTr=zr().isPrimitive,rIr=V();function eIr(r,e){if(!KTr(r))throw new TypeError(rIr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}sE.exports=eIr});var vE=s((TVe,oE)=>{"use strict";var tIr=uE();oE.exports=tIr});var fv=s((IVe,fE)=>{"use strict";var iIr=Nr().isPrimitive;function aIr(r){return iIr(r)&&r>=0&&r<=1}fE.exports=aIr});var cv=s((RVe,cE)=>{"use strict";var nIr=Nr().isObject;function sIr(r){return nIr(r)&&r.valueOf()>=0&&r.valueOf()<=1}cE.exports=sIr});var pE=s((PVe,lE)=>{"use strict";var uIr=fv(),oIr=cv();function vIr(r){return uIr(r)||oIr(r)}lE.exports=vIr});var Gn=s((LVe,gE)=>{"use strict";var dE=D(),lv=pE(),fIr=fv(),cIr=cv();dE(lv,"isPrimitive",fIr);dE(lv,"isObject",cIr);gE.exports=lv});var yE=s((FVe,mE)=>{"use strict";var lIr=Gn().isPrimitive,pIr=V();function dIr(r,e){if(!lIr(r))throw new TypeError(pIr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}mE.exports=dIr});var qE=s((jVe,hE)=>{"use strict";var gIr=yE();hE.exports=gIr});var wE=s((MVe,bE)=>{"use strict";var mIr=qe(),yIr=V();function hIr(r,e){if(!mIr(r))throw new TypeError(yIr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}bE.exports=hIr});var NE=s((BVe,EE)=>{"use strict";var qIr=wE();EE.exports=qIr});var OE=s((kVe,SE)=>{"use strict";function bIr(r){return r.length===1||r[0].length===1}SE.exports=bIr});var AE=s((CVe,_E)=>{"use strict";var wIr=OE();_E.exports=wIr});var IE=s((VVe,TE)=>{"use strict";var EIr=qe(),NIr=AE();function SIr(r){return EIr(r)&&NIr(r)}TE.exports=SIr});var pv=s((GVe,RE)=>{"use strict";var OIr=IE();RE.exports=OIr});var LE=s((UVe,PE)=>{"use strict";var _Ir=V(),AIr=pv();function TIr(r,e){if(!AIr(r))throw new TypeError(_Ir("invalid argument. %s must consist of only a single row or a single column.",e))}PE.exports=TIr});var jE=s((DVe,FE)=>{"use strict";var IIr=LE();FE.exports=IIr});var BE=s((zVe,ME)=>{"use strict";function RIr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}ME.exports=RIr});var CE=s((HVe,kE)=>{"use strict";var PIr=BE();kE.exports=PIr});var GE=s((WVe,VE)=>{"use strict";var LIr=V(),FIr=CE();function jIr(r,e,t){if(!FIr(r,e))throw new TypeError(LIr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}VE.exports=jIr});var DE=s((xVe,UE)=>{"use strict";var MIr=GE();UE.exports=MIr});var HE=s((XVe,zE)=>{"use strict";var BIr=Jr().isPrimitive,kIr=V();function CIr(r,e){if(!BIr(r))throw new TypeError(kIr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}zE.exports=CIr});var xE=s((JVe,WE)=>{"use strict";var VIr=HE();WE.exports=VIr});var JE=s((YVe,XE)=>{"use strict";var GIr=V(),UIr=be().isPrimitive;function DIr(r,e){var t;for(t=0;t<r.length;t++)if(!UIr(r[t]))throw new TypeError(GIr("invalid argument. %s must contain only nonnegative integers.",e))}XE.exports=DIr});var $E=s(($Ve,YE)=>{"use strict";var zIr=JE();YE.exports=zIr});var QE=s((ZVe,ZE)=>{"use strict";var HIr=V(),WIr=ye().isPrimitive;function xIr(r,e){var t;for(t=0;t<r.length;t++)if(!WIr(r[t]))throw new TypeError(HIr("invalid argument. %s must contain only integers.",e))}ZE.exports=xIr});var rN=s((QVe,KE)=>{"use strict";var XIr=QE();KE.exports=XIr});var tN=s((KVe,eN)=>{"use strict";var JIr=V();function YIr(r){throw new Error(JIr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}eN.exports=YIr});var aN=s((rGe,iN)=>{"use strict";var $Ir=tN();iN.exports=$Ir});var uN=s((eGe,sN)=>{"use strict";var nN=sv(),ZIr=K2();function QIr(r,e,t){nN(r,"Number of rows"),nN(e,"Number of columns"),ZIr(t,"a pseudorandom number generator seed")}sN.exports=QIr});var vN=s((tGe,oN)=>{"use strict";var KIr=uN();oN.exports=KIr});var cN=s((iGe,fN)=>{"use strict";var rRr=Ne(),eRr=P2();function tRr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&rRr(r.length)&&r.length>=0&&r.length<=eRr}fN.exports=tRr});var pN=s((aGe,lN)=>{"use strict";var iRr=cN();lN.exports=iRr});var gN=s((nGe,dN)=>{"use strict";var aRr=pN(),nRr=V();function sRr(r){if(typeof r!="function")throw new TypeError(nRr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!aRr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}dN.exports=sRr});var dv=s((sGe,mN)=>{"use strict";var uRr=gN();mN.exports=uRr});var qN=s((uGe,hN)=>{"use strict";var gv=ye(),yN=D(),mv=dv(),oRr=mv(gv.isPrimitive),vRr=mv(gv.isObject),yv=mv(gv);yN(yv,"primitives",oRr);yN(yv,"objects",vRr);hN.exports=yv});var EN=s((oGe,wN)=>{"use strict";var hv=be(),bN=D(),qv=dv(),fRr=qv(hv.isPrimitive),cRr=qv(hv.isObject),bv=qv(hv);bN(bv,"primitives",fRr);bN(bv,"objects",cRr);wN.exports=bv});var SN=s((vGe,NN)=>{"use strict";var st=Qr(),lRr=qe(),pRr=ye().isPrimitive,dRr=qN().primitives,gRr=be().isPrimitive,mRr=EN().primitives,yRr=ws().isPrimitive,hRr=Nr().isPrimitive,qRr=nt().isPrimitive,bRr=zr().isPrimitive,wRr=Jr().isPrimitive;function ERr(r){return st(r,"isArray",lRr),st(r,"isInteger",pRr),st(r,"isIntegerArray",dRr),st(r,"isNonNegativeInteger",gRr),st(r,"isNonNegativeIntegerArray",mRr),st(r,"isNonNegativeNumber",yRr),st(r,"isNumber",hRr),st(r,"isPositiveInteger",qRr),st(r,"isPositiveNumber",bRr),st(r,"isString",wRr),r}NN.exports=ERr});var _N=s((fGe,ON)=>{"use strict";var Hr=Qr(),NRr=Oq(),SRr=Iq(),ORr=kq(),_Rr=Wq(),ARr=Kb(),TRr=K2(),IRr=sw(),RRr=fw(),PRr=dw(),LRr=hw(),FRr=Ew(),jRr=_w(),MRr=Bw(),BRr=Gw(),kRr=Hw(),CRr=sv(),VRr=vE(),GRr=qE(),URr=NE(),DRr=jE(),zRr=DE(),HRr=xE(),WRr=$E(),xRr=rN(),XRr=aN(),JRr=vN(),YRr=SN();function $Rr(r){return Hr(r,"isBetween",NRr),Hr(r,"isBoolean",SRr),Hr(r,"isBroadcastCompatible",ORr),Hr(r,"isBroadcastCompatibleWith",_Rr),Hr(r,"isBufferLengthCompatible",ARr),Hr(r,"isDefined",TRr),Hr(r,"isGreaterThan",IRr),Hr(r,"isGreaterThanEqual",RRr),Hr(r,"isInteger",PRr),Hr(r,"isLessThan",LRr),Hr(r,"isLessThanEqual",FRr),Hr(r,"isNonNegativeInteger",jRr),Hr(r,"isNonNegativeNumber",MRr),Hr(r,"isNumber",BRr),Hr(r,"isOneOf",kRr),Hr(r,"isPositiveInteger",CRr),Hr(r,"isPositiveNumber",VRr),Hr(r,"isProbability",GRr),Hr(r,"isRange",URr),Hr(r,"isRange1d",DRr),Hr(r,"isSameShape",zRr),Hr(r,"isString",HRr),Hr(r,"isValidShape",WRr),Hr(r,"isValidStrides",xRr),Hr(r,"unrecognizedOptionName",XRr),Hr(r,"verifyCommonPRNGArgs",JRr),Hr(r,"base",YRr({})),r}ON.exports=$Rr});var TN=s((cGe,AN)=>{"use strict";var wv=4;function ZRr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%wv,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<wv)return a;for(f=v;f<r;f+=wv)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}AN.exports=ZRr});var RN=s((lGe,IN)=>{"use strict";var Un=4;function QRr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%Un,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<Un)return n;for(l=c;l<r;l+=Un)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=Un,f+=Un;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}IN.exports=QRr});var Ev=s((pGe,LN)=>{"use strict";var KRr=D(),PN=TN(),rPr=RN();KRr(PN,"ndarray",rPr);LN.exports=PN});var MN=s((dGe,jN)=>{"use strict";var FN=Qr(),ePr=Ev().ndarray,tPr=Ev().ndarray;function iPr(r){return FN(r,"daxpy",ePr),FN(r,"saxpy",tPr),r}jN.exports=iPr});var kN=s((gGe,BN)=>{"use strict";var aPr=ia(),nPr=re();function sPr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(nPr(r)==="[object Error]")return!0;r=aPr(r)}return!1}BN.exports=sPr});var VN=s((mGe,CN)=>{"use strict";var uPr=kN();CN.exports=uPr});var Nv=s((yGe,GN)=>{"use strict";function oPr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}GN.exports=oPr});var DN=s((hGe,UN)=>{"use strict";var vPr=Nv(),fPr=vPr();UN.exports=fPr});var WN=s((qGe,HN)=>{"use strict";var cPr=D(),zN=Nv(),lPr=DN();cPr(zN,"REGEXP",lPr);HN.exports=zN});var XN=s((bGe,xN)=>{"use strict";var pPr=Jr().isPrimitive,dPr=WN(),gPr=V();function mPr(r){if(!pPr(r))throw new TypeError(gPr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=dPr().exec(r),r?new RegExp(r[1],r[2]):null}xN.exports=mPr});var YN=s((wGe,JN)=>{"use strict";var yPr=XN();JN.exports=yPr});var Sv=s((EGe,$N)=>{"use strict";var hPr=Nr().isPrimitive,qPr=H();function bPr(r){return hPr(r)&&qPr(r)}$N.exports=bPr});var Ov=s((NGe,ZN)=>{"use strict";var wPr=Nr().isObject,EPr=H();function NPr(r){return wPr(r)&&EPr(r.valueOf())}ZN.exports=NPr});var KN=s((SGe,QN)=>{"use strict";var SPr=Sv(),OPr=Ov();function _Pr(r){return SPr(r)||OPr(r)}QN.exports=_Pr});var oe=s((OGe,eS)=>{"use strict";var rS=D(),_v=KN(),APr=Sv(),TPr=Ov();rS(_v,"isPrimitive",APr);rS(_v,"isObject",TPr);eS.exports=_v});var nS=s((_Ge,aS)=>{"use strict";var tS=oe(),IPr=Ve(),RPr=Jr().isPrimitive,PPr=ye().isPrimitive,iS=V();function LPr(r,e,t){var i,a;if(!IPr(r)&&!RPr(r))throw new TypeError(iS("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!PPr(t))throw new TypeError(iS("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(tS(e)){for(;a<i;a++)if(tS(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}aS.exports=LPr});var Es=s((AGe,sS)=>{"use strict";var FPr=nS();sS.exports=FPr});var Ns=s((TGe,uS)=>{"use strict";function jPr(r){return Object.keys(Object(r))}uS.exports=jPr});var vS=s((IGe,oS)=>{"use strict";var MPr=Ns();function BPr(){return(MPr(arguments)||"").length!==2}function kPr(){return BPr(1,2)}oS.exports=kPr});var cS=s((RGe,fS)=>{"use strict";var CPr=typeof Object.keys<"u";fS.exports=CPr});var Av=s((PGe,lS)=>{"use strict";var VPr=re();function GPr(r){return VPr(r)==="[object Arguments]"}lS.exports=GPr});var gS=s((LGe,dS)=>{"use strict";var UPr=Av(),pS;function DPr(){return UPr(arguments)}pS=DPr();dS.exports=pS});var Tv=s((FGe,mS)=>{"use strict";var zPr=Object.prototype.propertyIsEnumerable;mS.exports=zPr});var qS=s((jGe,hS)=>{"use strict";var HPr=Tv(),yS;function WPr(){return!HPr.call("beep","0")}yS=WPr();hS.exports=yS});var wS=s((MGe,bS)=>{"use strict";var xPr=Jr(),XPr=oe().isPrimitive,JPr=ye().isPrimitive,YPr=Tv(),$Pr=qS();function ZPr(r,e){var t;return r==null?!1:(t=YPr.call(r,e),!t&&$Pr&&xPr(r)?(e=+e,!XPr(e)&&JPr(e)&&e>=0&&e<r.length):t)}bS.exports=ZPr});var Dn=s((BGe,ES)=>{"use strict";var QPr=wS();ES.exports=QPr});var SS=s((kGe,NS)=>{"use strict";var KPr=vr(),rLr=Dn(),eLr=qe(),tLr=Ne(),iLr=ba();function aLr(r){return r!==null&&typeof r=="object"&&!eLr(r)&&typeof r.length=="number"&&tLr(r.length)&&r.length>=0&&r.length<=iLr&&KPr(r,"callee")&&!rLr(r,"callee")}NS.exports=aLr});var Rv=s((CGe,OS)=>{"use strict";var nLr=gS(),sLr=Av(),uLr=SS(),Iv;nLr?Iv=sLr:Iv=uLr;OS.exports=Iv});var TS=s((VGe,AS)=>{"use strict";var oLr=Rv(),_S=Ns(),vLr=Array.prototype.slice;function fLr(r){return oLr(r)?_S(vLr.call(r)):_S(r)}AS.exports=fLr});var RS=s((GGe,IS)=>{"use strict";function cLr(){}IS.exports=cLr});var Pr=s((UGe,PS)=>{"use strict";var lLr=RS();PS.exports=lLr});var FS=s((DGe,LS)=>{"use strict";var pLr=Dn(),dLr=Pr(),gLr=pLr(dLr,"prototype");LS.exports=gLr});var MS=s((zGe,jS)=>{"use strict";var mLr=Dn(),yLr={toString:null},hLr=!mLr(yLr,"toString");jS.exports=hLr});var Pv=s((HGe,BS)=>{"use strict";function qLr(r){return r.constructor&&r.constructor.prototype===r}BS.exports=qLr});var kS=s((WGe,bLr)=>{bLr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var VS=s((xGe,CS)=>{"use strict";var wLr=typeof window>"u"?void 0:window;CS.exports=wLr});var zS=s((XGe,DS)=>{"use strict";var ELr=vr(),NLr=Es(),GS=Z0(),SLr=Pv(),OLr=kS(),Da=VS(),US;function _Lr(){var r;if(GS(Da)==="undefined")return!1;for(r in Da)try{NLr(OLr,r)===-1&&ELr(Da,r)&&Da[r]!==null&&GS(Da[r])==="object"&&SLr(Da[r])}catch{return!0}return!1}US=_Lr();DS.exports=US});var WS=s((JGe,HS)=>{"use strict";var ALr=typeof window<"u";HS.exports=ALr});var JS=s((YGe,XS)=>{"use strict";var TLr=zS(),xS=Pv(),ILr=WS();function RLr(r){if(ILr===!1&&!TLr)return xS(r);try{return xS(r)}catch{return!1}}XS.exports=RLr});var YS=s(($Ge,PLr)=>{PLr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var QS=s((ZGe,ZS)=>{"use strict";var LLr=u2(),Lv=vr(),FLr=Rv(),jLr=FS(),MLr=MS(),BLr=JS(),$S=YS();function kLr(r){var e,t,i,a,n,u,o;if(a=[],FLr(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!Lv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!LLr(r))return a;t=jLr&&i}for(n in r)!(t&&n==="prototype")&&Lv(r,n)&&a.push(String(n));if(MLr)for(e=BLr(r),o=0;o<$S.length;o++)u=$S[o],!(e&&u==="constructor")&&Lv(r,u)&&a.push(String(u));return a}ZS.exports=kLr});var rO=s((QGe,KS)=>{"use strict";var CLr=vS(),VLr=cS(),GLr=Ns(),ULr=TS(),DLr=QS(),Ss;VLr?CLr()?Ss=ULr:Ss=GLr:Ss=DLr;KS.exports=Ss});var za=s((KGe,eO)=>{"use strict";var zLr=rO();eO.exports=zLr});var iO=s((rUe,tO)=>{"use strict";var HLr=typeof Object.getOwnPropertyNames<"u";tO.exports=HLr});var sO=s((eUe,nO)=>{"use strict";var aO=Va(),WLr=aO.getOwnPropertyNames;function xLr(r){return WLr(aO(r))}nO.exports=xLr});var oO=s((tUe,uO)=>{"use strict";var XLr=Va(),JLr=za();function YLr(r){return JLr(XLr(r))}uO.exports=YLr});var fO=s((iUe,vO)=>{"use strict";var $Lr=iO(),ZLr=sO(),QLr=oO(),Fv;$Lr?Fv=ZLr:Fv=QLr;vO.exports=Fv});var lO=s((aUe,cO)=>{"use strict";var KLr=typeof Object.getOwnPropertyDescriptor<"u";cO.exports=KLr});var dO=s((nUe,pO)=>{"use strict";var rFr=Object.getOwnPropertyDescriptor;function eFr(r,e){var t;return r==null?null:(t=rFr(r,e),t===void 0?null:t)}pO.exports=eFr});var mO=s((sUe,gO)=>{"use strict";var tFr=vr();function iFr(r,e){return tFr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}gO.exports=iFr});var hO=s((uUe,yO)=>{"use strict";var aFr=lO(),nFr=dO(),sFr=mO(),jv;aFr?jv=nFr:jv=sFr;yO.exports=jv});var bO=s((oUe,qO)=>{"use strict";var uFr=typeof Buffer=="function"?Buffer:null;qO.exports=uFr});var EO=s((vUe,wO)=>{"use strict";var oFr=Yi(),Os=bO();function vFr(){var r,e;if(typeof Os!="function")return!1;try{typeof Os.from=="function"?e=Os.from([1,2,3,4]):e=new Os([1,2,3,4]),r=oFr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}wO.exports=vFr});var SO=s((fUe,NO)=>{"use strict";var fFr=EO();NO.exports=fFr});var AO=s(_s=>{"use strict";_s.byteLength=lFr;_s.toByteArray=dFr;_s.fromByteArray=yFr;var ut=[],He=[],cFr=typeof Uint8Array<"u"?Uint8Array:Array,Mv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(na=0,OO=Mv.length;na<OO;++na)ut[na]=Mv[na],He[Mv.charCodeAt(na)]=na;var na,OO;He["-".charCodeAt(0)]=62;He["_".charCodeAt(0)]=63;function _O(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function lFr(r){var e=_O(r),t=e[0],i=e[1];return(t+i)*3/4-i}function pFr(r,e,t){return(e+t)*3/4-t}function dFr(r){var e,t=_O(r),i=t[0],a=t[1],n=new cFr(pFr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=He[r.charCodeAt(v)]<<18|He[r.charCodeAt(v+1)]<<12|He[r.charCodeAt(v+2)]<<6|He[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=He[r.charCodeAt(v)]<<2|He[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=He[r.charCodeAt(v)]<<10|He[r.charCodeAt(v+1)]<<4|He[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function gFr(r){return ut[r>>18&63]+ut[r>>12&63]+ut[r>>6&63]+ut[r&63]}function mFr(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(gFr(i));return a.join("")}function yFr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push(mFr(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(ut[e>>2]+ut[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(ut[e>>10]+ut[e>>4&63]+ut[e<<2&63]+"=")),a.join("")}});var TO=s(Bv=>{Bv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};Bv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var WO=s(Xa=>{"use strict";var kv=AO(),Wa=TO(),IO=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Xa.Buffer=z;Xa.SlowBuffer=NFr;Xa.INSPECT_MAX_BYTES=50;var As=2147483647;Xa.kMaxLength=As;z.TYPED_ARRAY_SUPPORT=hFr();!z.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function hFr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(z.prototype,"parent",{enumerable:!0,get:function(){if(!!z.isBuffer(this))return this.buffer}});Object.defineProperty(z.prototype,"offset",{enumerable:!0,get:function(){if(!!z.isBuffer(this))return this.byteOffset}});function bt(r){if(r>As)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,z.prototype),e}function z(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Uv(r)}return FO(r,e,t)}z.poolSize=8192;function FO(r,e,t){if(typeof r=="string")return bFr(r,e);if(ArrayBuffer.isView(r))return wFr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ot(r,ArrayBuffer)||r&&ot(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ot(r,SharedArrayBuffer)||r&&ot(r.buffer,SharedArrayBuffer)))return Vv(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return z.from(i,e,t);let a=EFr(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return z.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}z.from=function(r,e,t){return FO(r,e,t)};Object.setPrototypeOf(z.prototype,Uint8Array.prototype);Object.setPrototypeOf(z,Uint8Array);function jO(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function qFr(r,e,t){return jO(r),r<=0?bt(r):e!==void 0?typeof t=="string"?bt(r).fill(e,t):bt(r).fill(e):bt(r)}z.alloc=function(r,e,t){return qFr(r,e,t)};function Uv(r){return jO(r),bt(r<0?0:Dv(r)|0)}z.allocUnsafe=function(r){return Uv(r)};z.allocUnsafeSlow=function(r){return Uv(r)};function bFr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=MO(r,e)|0,i=bt(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function Cv(r){let e=r.length<0?0:Dv(r.length)|0,t=bt(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function wFr(r){if(ot(r,Uint8Array)){let e=new Uint8Array(r);return Vv(e.buffer,e.byteOffset,e.byteLength)}return Cv(r)}function Vv(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,z.prototype),i}function EFr(r){if(z.isBuffer(r)){let e=Dv(r.length)|0,t=bt(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Hv(r.length)?bt(0):Cv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Cv(r.data)}function Dv(r){if(r>=As)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+As.toString(16)+" bytes");return r|0}function NFr(r){return+r!=r&&(r=0),z.alloc(+r)}z.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==z.prototype};z.compare=function(e,t){if(ot(e,Uint8Array)&&(e=z.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=z.from(t,t.offset,t.byteLength)),!z.isBuffer(e)||!z.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};z.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};z.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return z.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=z.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ot(u,Uint8Array))n+u.length>a.length?(z.isBuffer(u)||(u=z.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(z.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function MO(r,e){if(z.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ot(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Gv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return HO(r).length;default:if(a)return i?-1:Gv(r).length;e=(""+e).toLowerCase(),a=!0}}z.byteLength=MO;function SFr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return jFr(this,e,t);case"utf8":case"utf-8":return kO(this,e,t);case"ascii":return LFr(this,e,t);case"latin1":case"binary":return FFr(this,e,t);case"base64":return RFr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return MFr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}z.prototype._isBuffer=!0;function sa(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}z.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)sa(this,t,t+1);return this};z.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)sa(this,t,t+3),sa(this,t+1,t+2);return this};z.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)sa(this,t,t+7),sa(this,t+1,t+6),sa(this,t+2,t+5),sa(this,t+3,t+4);return this};z.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?kO(this,0,e):SFr.apply(this,arguments)};z.prototype.toLocaleString=z.prototype.toString;z.prototype.equals=function(e){if(!z.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:z.compare(this,e)===0};z.prototype.inspect=function(){let e="",t=Xa.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};IO&&(z.prototype[IO]=z.prototype.inspect);z.prototype.compare=function(e,t,i,a,n){if(ot(e,Uint8Array)&&(e=z.from(e,e.offset,e.byteLength)),!z.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function BO(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Hv(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=z.from(e,i)),z.isBuffer(e))return e.length===0?-1:RO(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):RO(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function RO(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}z.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};z.prototype.indexOf=function(e,t,i){return BO(this,e,t,i,!0)};z.prototype.lastIndexOf=function(e,t,i){return BO(this,e,t,i,!1)};function OFr(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(Hv(o))return u;r[t+u]=o}return u}function _Fr(r,e,t,i){return Ts(Gv(e,r.length-t),r,t,i)}function AFr(r,e,t,i){return Ts(VFr(e),r,t,i)}function TFr(r,e,t,i){return Ts(HO(e),r,t,i)}function IFr(r,e,t,i){return Ts(GFr(e,r.length-t),r,t,i)}z.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return OFr(this,e,t,i);case"utf8":case"utf-8":return _Fr(this,e,t,i);case"ascii":case"latin1":case"binary":return AFr(this,e,t,i);case"base64":return TFr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return IFr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function RFr(r,e,t){return e===0&&t===r.length?kv.fromByteArray(r):kv.fromByteArray(r.slice(e,t))}function kO(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return PFr(i)}var PO=4096;function PFr(r){let e=r.length;if(e<=PO)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=PO));return t}function LFr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function FFr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function jFr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=UFr[r[n]];return a}function MFr(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}z.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,z.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}z.prototype.readUintLE=z.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};z.prototype.readUintBE=z.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};z.prototype.readUint8=z.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};z.prototype.readUint16LE=z.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};z.prototype.readUint16BE=z.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};z.prototype.readUint32LE=z.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};z.prototype.readUint32BE=z.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};z.prototype.readBigUInt64LE=ci(function(e){e=e>>>0,xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});z.prototype.readBigUInt64BE=ci(function(e){e=e>>>0,xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});z.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};z.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};z.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};z.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};z.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};z.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};z.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};z.prototype.readBigInt64LE=ci(function(e){e=e>>>0,xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});z.prototype.readBigInt64BE=ci(function(e){e=e>>>0,xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});z.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Wa.read(this,e,!0,23,4)};z.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Wa.read(this,e,!1,23,4)};z.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Wa.read(this,e,!0,52,8)};z.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Wa.read(this,e,!1,52,8)};function _e(r,e,t,i,a,n){if(!z.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}z.prototype.writeUintLE=z.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;_e(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};z.prototype.writeUintBE=z.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;_e(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};z.prototype.writeUint8=z.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,1,255,0),this[t]=e&255,t+1};z.prototype.writeUint16LE=z.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};z.prototype.writeUint16BE=z.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};z.prototype.writeUint32LE=z.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};z.prototype.writeUint32BE=z.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function CO(r,e,t,i,a){zO(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function VO(r,e,t,i,a){zO(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}z.prototype.writeBigUInt64LE=ci(function(e,t=0){return CO(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});z.prototype.writeBigUInt64BE=ci(function(e,t=0){return VO(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});z.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);_e(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};z.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);_e(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};z.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};z.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};z.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};z.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};z.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};z.prototype.writeBigInt64LE=ci(function(e,t=0){return CO(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});z.prototype.writeBigInt64BE=ci(function(e,t=0){return VO(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function GO(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function UO(r,e,t,i,a){return e=+e,t=t>>>0,a||GO(r,e,t,4,34028234663852886e22,-34028234663852886e22),Wa.write(r,e,t,i,23,4),t+4}z.prototype.writeFloatLE=function(e,t,i){return UO(this,e,t,!0,i)};z.prototype.writeFloatBE=function(e,t,i){return UO(this,e,t,!1,i)};function DO(r,e,t,i,a){return e=+e,t=t>>>0,a||GO(r,e,t,8,17976931348623157e292,-17976931348623157e292),Wa.write(r,e,t,i,52,8),t+8}z.prototype.writeDoubleLE=function(e,t,i){return DO(this,e,t,!0,i)};z.prototype.writeDoubleBE=function(e,t,i){return DO(this,e,t,!1,i)};z.prototype.copy=function(e,t,i,a){if(!z.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};z.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!z.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=z.isBuffer(e)?e:z.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var Ha={};function zv(r,e,t){Ha[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}zv("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);zv("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);zv("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=LO(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=LO(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function LO(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function BFr(r,e,t){xa(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&zn(e,r.length-(t+1))}function zO(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ha.ERR_OUT_OF_RANGE("value",o,r)}BFr(i,a,n)}function xa(r,e){if(typeof r!="number")throw new Ha.ERR_INVALID_ARG_TYPE(e,"number",r)}function zn(r,e,t){throw Math.floor(r)!==r?(xa(r,t),new Ha.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ha.ERR_BUFFER_OUT_OF_BOUNDS:new Ha.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var kFr=/[^+/0-9A-Za-z-_]/g;function CFr(r){if(r=r.split("=")[0],r=r.trim().replace(kFr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Gv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function VFr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function GFr(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function HO(r){return kv.toByteArray(CFr(r))}function Ts(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ot(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Hv(r){return r!==r}var UFr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function ci(r){return typeof BigInt>"u"?DFr:r}function DFr(){throw new Error("BigInt not supported")}});var XO=s((gUe,xO)=>{"use strict";var zFr=WO().Buffer;xO.exports=zFr});var YO=s((mUe,JO)=>{"use strict";function HFr(){throw new Error("not implemented")}JO.exports=HFr});var li=s((yUe,$O)=>{"use strict";var WFr=SO(),xFr=XO(),XFr=YO(),Wv;WFr()?Wv=xFr:Wv=XFr;$O.exports=Wv});var QO=s((hUe,ZO)=>{"use strict";var JFr=qr(),YFr=li(),$Fr=JFr(YFr.from);ZO.exports=$Fr});var r_=s((qUe,KO)=>{"use strict";var ZFr=Yi(),QFr=V(),KFr=li();function rjr(r){if(!ZFr(r))throw new TypeError(QFr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return KFr.from(r)}KO.exports=rjr});var t_=s((bUe,e_)=>{"use strict";var ejr=Yi(),tjr=V(),ijr=li();function ajr(r){if(!ejr(r))throw new TypeError(tjr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new ijr(r)}e_.exports=ajr});var a_=s((wUe,i_)=>{"use strict";var njr=QO(),sjr=r_(),ujr=t_(),xv;njr?xv=sjr:xv=ujr;i_.exports=xv});var u_=s((EUe,s_)=>{"use strict";var ojr=Sa(),vjr=tt(),fjr=Na(),cjr=Ea(),ljr=$i(),pjr=oi(),djr=me(),gjr=et(),mjr=ge(),n_;function yjr(r){return new ojr(r)}function hjr(r){return new vjr(r)}function qjr(r){return new fjr(r)}function bjr(r){return new cjr(r)}function wjr(r){return new ljr(r)}function Ejr(r){return new pjr(r)}function Njr(r){return new djr(r)}function Sjr(r){return new gjr(r)}function Ojr(r){return new mjr(r)}function _jr(){var r={int8array:yjr,uint8array:hjr,uint8clampedarray:qjr,int16array:bjr,uint16array:wjr,int32array:Ejr,uint32array:Njr,float32array:Sjr,float64array:Ojr};return r}n_=_jr();s_.exports=n_});var l_=s((NUe,c_)=>{"use strict";var Is=vr(),Xv=qe(),o_=Yi(),Ajr=VN(),v_=Z0(),Tjr=YN(),Ijr=Es(),f_=za(),Rjr=fO(),Hn=hO(),Pjr=ia(),Wn=ni(),Ljr=a_(),Fjr=u_();function jjr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(Pjr(r)),e.push(r),a.push(o),t=Rjr(r),v=0;v<t.length;v++)i=t[v],n=Hn(r,i),Is(n,"value")&&(u=Xv(r[i])?[]:{},n.value=ua(r[i],u,e,a,-1)),Wn(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Mjr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=f_(r),v=0;v<i.length;v++)u=i[v],a=Hn(r,u),Is(a,"value")&&(n=Xv(r[u])?[]:{},a.value=ua(r[u],n,e,t,-1)),Wn(o,u,a);return o}function ua(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(o_(r))return Ljr(r);if(Ajr(r))return Mjr(r);if(o=v_(r),o==="date")return new Date(+r);if(o==="regexp")return Tjr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=Fjr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?jjr(r):{};if(u=f_(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=v_(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||o_(p)){n==="object"?(v=Hn(r,c),Is(v,"value")&&(v.value=ua(p)),Wn(e,c,v)):e[c]=ua(p);continue}if(m=Ijr(t,p),m!==-1){e[c]=i[m];continue}l=Xv(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=ua(p,l,t,i,a):(v=Hn(r,c),Is(v,"value")&&(v.value=ua(p,l,t,i,a)),Wn(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=Hn(r,c),Wn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}c_.exports=ua});var d_=s((SUe,p_)=>{"use strict";var Bjr=qe(),kjr=be().isPrimitive,Cjr=V(),Vjr=pr(),Gjr=l_();function Ujr(r,e){var t;if(arguments.length>1){if(!kjr(e))throw new TypeError(Cjr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Vjr;return t=Bjr(r)?new Array(r.length):{},Gjr(r,t,[r],[t],e)}p_.exports=Ujr});var xn=s((OUe,g_)=>{"use strict";var Djr=d_();g_.exports=Djr});var m_=s((_Ue,zjr)=>{zjr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var h_=s((AUe,y_)=>{"use strict";var Hjr=xn(),Wjr=m_();function xjr(){return Hjr(Wjr)}y_.exports=xjr});var q_=s((TUe,Xjr)=>{Xjr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var w_=s((IUe,b_)=>{"use strict";var Jjr=xn(),Yjr=q_();function $jr(){return Jjr(Yjr)}b_.exports=$jr});var E_=s((RUe,Zjr)=>{Zjr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var S_=s((PUe,N_)=>{"use strict";var Qjr=xn(),Kjr=E_();function rMr(){return Qjr(Kjr)}N_.exports=rMr});var O_=s((LUe,eMr)=>{eMr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var A_=s((FUe,__)=>{"use strict";var tMr=O_();function iMr(){return tMr.slice()}__.exports=iMr});var T_=s((jUe,aMr)=>{aMr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var R_=s((MUe,I_)=>{"use strict";var nMr=xn(),sMr=T_();function uMr(){return nMr(sMr)}I_.exports=uMr});var L_=s((BUe,P_)=>{"use strict";var Xn=Qr(),oMr=h_(),vMr=w_(),fMr=S_(),cMr=A_(),lMr=R_();function pMr(r){return Xn(r,"AFINN_111",oMr),Xn(r,"AFINN_96",vMr),Xn(r,"ANSCOMBES_QUARTET",fMr),Xn(r,"HERNDON_VENUS_SEMIDIAMETERS",cMr),Xn(r,"NIGHTINGALES_ROSE",lMr),r}P_.exports=pMr});var j_=s((kUe,F_)=>{"use strict";function dMr(r,e){return r+e}F_.exports=dMr});var B_=s((CUe,M_)=>{"use strict";var gMr=j_();M_.exports=gMr});var C_=s((VUe,k_)=>{"use strict";var mMr=pr(),yMr=Ir();function hMr(r){return r===mMr||r===yMr}k_.exports=hMr});var Ae=s((GUe,V_)=>{"use strict";var qMr=C_();V_.exports=qMr});var D_=s((UUe,U_)=>{"use strict";var G_=as();function bMr(r){return r>0?G_(r-1):G_(r+1)}U_.exports=bMr});var Rs=s((DUe,z_)=>{"use strict";var wMr=D_();z_.exports=wMr});var W_=s((zUe,H_)=>{"use strict";var EMr=Math.sqrt;H_.exports=EMr});var Rr=s((HUe,x_)=>{"use strict";var NMr=W_();x_.exports=NMr});var J_=s((WUe,X_)=>{"use strict";function SMr(r){return Math.abs(r)}X_.exports=SMr});var Dr=s((xUe,Y_)=>{"use strict";var OMr=J_();Y_.exports=OMr});var Z_=s((XUe,$_)=>{"use strict";var _Mr=tt(),AMr=$i(),TMr={uint16:AMr,uint8:_Mr};$_.exports=TMr});var eA=s((JUe,rA)=>{"use strict";var Q_=Z_(),K_;function IMr(){var r,e;return r=new Q_.uint16(1),r[0]=4660,e=new Q_.uint8(r.buffer),e[0]===52}K_=IMr();rA.exports=K_});var Ye=s((YUe,tA)=>{"use strict";var RMr=eA();tA.exports=RMr});var nA=s(($Ue,aA)=>{"use strict";var PMr=Ye(),iA,Jv,Yv;PMr===!0?(Jv=1,Yv=0):(Jv=0,Yv=1);iA={HIGH:Jv,LOW:Yv};aA.exports=iA});var $v=s((ZUe,vA)=>{"use strict";var LMr=me(),FMr=ge(),uA=nA(),oA=new FMr(1),sA=new LMr(oA.buffer),jMr=uA.HIGH,MMr=uA.LOW;function BMr(r,e,t,i){return oA[0]=r,e[i]=sA[jMr],e[i+t]=sA[MMr],e}vA.exports=BMr});var cA=s((QUe,fA)=>{"use strict";var kMr=$v();function CMr(r){return kMr(r,[0>>>0,0>>>0],1,0)}fA.exports=CMr});var Ja=s((KUe,pA)=>{"use strict";var VMr=D(),lA=cA(),GMr=$v();VMr(lA,"assign",GMr);pA.exports=lA});var gA=s((rDe,dA)=>{"use strict";var UMr=Ye(),Zv;UMr===!0?Zv=0:Zv=1;dA.exports=Zv});var yA=s((eDe,mA)=>{"use strict";var DMr=me(),zMr=ge(),HMr=gA(),Qv=new zMr(1),WMr=new DMr(Qv.buffer);function xMr(r,e){return Qv[0]=r,WMr[HMr]=e>>>0,Qv[0]}mA.exports=xMr});var vt=s((tDe,hA)=>{"use strict";var XMr=yA();hA.exports=XMr});var bA=s((iDe,qA)=>{"use strict";function JMr(r){return r|0}qA.exports=JMr});var Kv=s((aDe,wA)=>{"use strict";var YMr=bA();wA.exports=YMr});var ft=s((nDe,EA)=>{"use strict";var $Mr=2147483647;EA.exports=$Mr});var r3=s((sDe,NA)=>{"use strict";var ZMr=2147483648;NA.exports=ZMr});var OA=s((uDe,SA)=>{"use strict";var QMr=Ye(),e3;QMr===!0?e3=1:e3=0;SA.exports=e3});var TA=s((oDe,AA)=>{"use strict";var KMr=me(),rBr=ge(),eBr=OA(),_A=new rBr(1),tBr=new KMr(_A.buffer);function iBr(r){return _A[0]=r,tBr[eBr]}AA.exports=iBr});var ae=s((vDe,IA)=>{"use strict";var aBr=TA();IA.exports=aBr});var LA=s((fDe,PA)=>{"use strict";var nBr=Ye(),RA,t3,i3;nBr===!0?(t3=1,i3=0):(t3=0,i3=1);RA={HIGH:t3,LOW:i3};PA.exports=RA});var kA=s((cDe,BA)=>{"use strict";var sBr=me(),uBr=ge(),jA=LA(),MA=new uBr(1),FA=new sBr(MA.buffer),oBr=jA.HIGH,vBr=jA.LOW;function fBr(r,e){return FA[oBr]=r,FA[vBr]=e,MA[0]}BA.exports=fBr});var Ya=s((lDe,CA)=>{"use strict";var cBr=kA();CA.exports=cBr});var GA=s((pDe,VA)=>{"use strict";var lBr=r3(),pBr=ft(),dBr=Ja(),gBr=ae(),mBr=Ya(),a3=[0,0];function yBr(r,e){var t,i;return dBr.assign(r,a3,1,0),t=a3[0],t&=pBr,i=gBr(e),i&=lBr,t|=i,mBr(t,a3[1])}VA.exports=yBr});var Ps=s((dDe,UA)=>{"use strict";var hBr=GA();UA.exports=hBr});var HA=s((gDe,zA)=>{"use strict";var DA=Rs(),qBr=Ps(),bBr=Ir(),Ls=pr();function wBr(r,e){return e===bBr?Ls:e===Ls?0:e>0?DA(e)?r:0:DA(e)?qBr(Ls,r):Ls}zA.exports=wBr});var xA=s((mDe,WA)=>{"use strict";var EBr=ft(),NBr=ae(),SBr=1072693247,Fs=1e300,js=1e-300;function OBr(r,e){var t,i;return i=NBr(r),t=i&EBr,t<=SBr?e<0?Fs*Fs:js*js:e>0?Fs*Fs:js*js}WA.exports=OBr});var YA=s((yDe,JA)=>{"use strict";var _Br=Dr(),XA=pr();function ABr(r,e){return r===-1?(r-r)/(r-r):r===1?1:_Br(r)<1==(e===XA)?0:XA}JA.exports=ABr});var ZA=s((hDe,$A)=>{"use strict";var TBr=Ye(),n3;TBr===!0?n3=1:n3=0;$A.exports=n3});var KA=s((qDe,QA)=>{"use strict";var IBr=me(),RBr=ge(),PBr=ZA(),s3=new RBr(1),LBr=new IBr(s3.buffer);function FBr(r,e){return s3[0]=r,LBr[PBr]=e>>>0,s3[0]}QA.exports=FBr});var wt=s((bDe,rT)=>{"use strict";var jBr=KA();rT.exports=jBr});var ct=s((wDe,eT)=>{"use strict";var MBr=1023;eT.exports=MBr});var iT=s((EDe,tT)=>{"use strict";function BBr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}tT.exports=BBr});var uT=s((NDe,sT)=>{"use strict";var kBr=ae(),Ms=vt(),aT=wt(),CBr=ct(),VBr=iT(),GBr=1048575,nT=1048576,UBr=1072693248,DBr=536870912,zBr=524288,HBr=20,WBr=9007199254740992,xBr=.9617966939259756,XBr=.9617967009544373,JBr=-7028461650952758e-24,YBr=[1,1.5],$Br=[0,.5849624872207642],ZBr=[0,1350039202129749e-23];function QBr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O;return T=0,t<nT&&(e*=WBr,T-=53,t=kBr(e)),T+=(t>>HBr)-CBr|0,S=t&GBr|0,t=S|UBr|0,S<=235662?O=0:S<767610?O=1:(O=0,T+=1,t-=nT),e=aT(e,t),c=YBr[O],_=e-c,b=1/(e+c),a=_*b,u=Ms(a,0),i=(t>>1|DBr)+zBr,i+=O<<18,v=aT(0,i),f=e-(v-c),o=b*(_-u*v-u*f),n=a*a,w=n*n*VBr(n),w+=o*(u+a),n=u*u,v=3+n+w,v=Ms(v,0),f=w-(v-3-n),_=u*v,b=o*v+f*a,p=_+b,p=Ms(p,0),m=b-(p-_),y=XBr*p,g=JBr*p+m*xBr+ZBr[O],l=$Br[O],q=T,d=y+g+l+q,d=Ms(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}sT.exports=QBr});var vT=s((SDe,oT)=>{"use strict";function KBr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}oT.exports=KBr});var cT=s((ODe,fT)=>{"use strict";var rkr=vt(),ekr=vT(),tkr=1.4426950408889634,ikr=1.4426950216293335,akr=19259629911266175e-24;function nkr(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*ekr(a),u=ikr*a,o=a*akr-n*tkr,i=u+o,i=rkr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}fT.exports=nkr});var Bs=s((_De,lT)=>{"use strict";var skr=1023;lT.exports=skr});var dT=s((ADe,pT)=>{"use strict";var ukr=-1023;pT.exports=ukr});var u3=s((TDe,gT)=>{"use strict";var okr=-1074;gT.exports=okr});var o3=s((IDe,mT)=>{"use strict";var vkr=22250738585072014e-324;mT.exports=vkr});var v3=s((RDe,yT)=>{"use strict";var fkr=o3(),ckr=Ae(),lkr=H(),pkr=Dr(),dkr=4503599627370496;function gkr(r,e,t,i){return lkr(r)||ckr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&pkr(r)<fkr?(e[i]=r*dkr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}yT.exports=gkr});var qT=s((PDe,hT)=>{"use strict";var mkr=v3();function ykr(r){return mkr(r,[0,0],1,0)}hT.exports=ykr});var ET=s((LDe,wT)=>{"use strict";var hkr=D(),bT=qT(),qkr=v3();hkr(bT,"assign",qkr);wT.exports=bT});var Jn=s((FDe,NT)=>{"use strict";var bkr=2146435072;NT.exports=bkr});var OT=s((jDe,ST)=>{"use strict";var wkr=ae(),Ekr=Jn(),Nkr=ct();function Skr(r){var e=wkr(r);return e=(e&Ekr)>>>20,e-Nkr|0}ST.exports=Skr});var AT=s((MDe,_T)=>{"use strict";var Okr=OT();_T.exports=Okr});var IT=s((BDe,TT)=>{"use strict";var _kr=pr(),Akr=Ir(),Tkr=ct(),Ikr=Bs(),Rkr=dT(),Pkr=u3(),Lkr=H(),Fkr=Ae(),jkr=Ps(),Mkr=ET().assign,Bkr=AT(),kkr=Ja(),Ckr=Ya(),Vkr=2220446049250313e-31,Gkr=2148532223>>>0,f3=[0,0],c3=[0,0];function Ukr(r,e){var t,i;return e===0||r===0||Lkr(r)||Fkr(r)?r:(Mkr(r,f3,1,0),r=f3[0],e+=f3[1],e+=Bkr(r),e<Pkr?jkr(0,r):e>Ikr?r<0?Akr:_kr:(e<=Rkr?(e+=52,i=Vkr):i=1,kkr.assign(r,c3,1,0),t=c3[0],t&=Gkr,t|=e+Tkr<<20,i*Ckr(t,c3[1])))}TT.exports=Ukr});var $a=s((kDe,RT)=>{"use strict";var Dkr=IT();RT.exports=Dkr});var Yn=s((CDe,PT)=>{"use strict";var zkr=.6931471805599453;PT.exports=zkr});var ks=s((VDe,LT)=>{"use strict";var Hkr=1048575;LT.exports=Hkr});var jT=s((GDe,FT)=>{"use strict";function Wkr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}FT.exports=Wkr});var UT=s((UDe,GT)=>{"use strict";var xkr=ae(),MT=wt(),Xkr=vt(),Jkr=Kv(),Ykr=$a(),$kr=Yn(),BT=ct(),kT=ft(),CT=ks(),Zkr=jT(),VT=1048576,Qkr=1071644672,$n=20,Kkr=.6931471824645996,rCr=-1904654299957768e-24;function eCr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&kT|0,m=(p>>$n)-BT|0,l=0,p>Qkr&&(l=r+(VT>>m+1)>>>0,m=((l&kT)>>$n)-BT|0,i=(l&~(CT>>m))>>>0,n=MT(0,i),l=(l&CT|VT)>>$n-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=Xkr(n,0),o=n*Kkr,v=(t-(n-e))*$kr+n*rCr,c=o+v,f=v-(c-o),n=c*c,a=c-n*Zkr(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=xkr(c),r=Jkr(r),r+=l<<$n>>>0,r>>$n<=0?c=Ykr(c,l):c=MT(c,r),c}GT.exports=eCr});var QT=s((DDe,ZT)=>{"use strict";var DT=H(),zT=Rs(),HT=Ae(),tCr=Ne(),WT=Rr(),iCr=Dr(),l3=Ja(),aCr=vt(),xT=Kv(),nCr=Ir(),sCr=pr(),p3=ft(),uCr=HA(),oCr=xA(),vCr=YA(),fCr=uT(),cCr=cT(),lCr=UT(),pCr=1072693247,dCr=1105199104,gCr=1139802112,XT=1083179008,mCr=1072693248,yCr=1083231232,hCr=3230714880>>>0,JT=31,pi=1e300,di=1e-300,qCr=8008566259537294e-32,Et=[0,0],YT=[0,0];function $T(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(DT(r)||DT(e))return NaN;if(l3.assign(e,Et,1,0),o=Et[0],v=Et[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return WT(r);if(e===-.5)return 1/WT(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(HT(e))return vCr(r,e)}if(l3.assign(r,Et,1,0),n=Et[0],u=Et[1],u===0){if(n===0)return uCr(r,e);if(r===1)return 1;if(r===-1&&zT(e))return-1;if(HT(r))return r===nCr?$T(-0,-e):e<0?0:sCr}if(r<0&&tCr(e)===!1)return(r-r)/(r-r);if(a=iCr(r),t=n&p3|0,i=o&p3|0,f=n>>>JT|0,c=o>>>JT|0,f&&zT(e)?f=-1:f=1,i>dCr){if(i>gCr)return oCr(r,e);if(t<pCr)return c===1?f*pi*pi:f*di*di;if(t>mCr)return c===0?f*pi*pi:f*di*di;y=cCr(YT,a)}else y=fCr(YT,a,t);if(l=aCr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,l3.assign(g,Et,1,0),d=xT(Et[0]),h=xT(Et[1]),d>=XT){if((d-XT|h)!==0||m+qCr>g-p)return f*pi*pi}else if((d&p3)>=yCr&&((d-hCr|h)!==0||m<=g-p))return f*di*di;return g=lCr(d,p,m),f*g}ZT.exports=$T});var Gr=s((zDe,KT)=>{"use strict";var bCr=QT();KT.exports=bCr});var oa=s((HDe,rI)=>{"use strict";var wCr=9007199254740991;rI.exports=wCr});var Zn=s((WDe,eI)=>{"use strict";var ECr=308;eI.exports=ECr});var Cs=s((xDe,tI)=>{"use strict";var NCr=-308;tI.exports=NCr});var Vs=s((XDe,iI)=>{"use strict";var SCr=-324;iI.exports=SCr});var fI=s((JDe,vI)=>{"use strict";var aI=H(),Gs=Ae(),nI=Gr(),OCr=Dr(),sI=Ur(),_Cr=oa(),uI=Zn(),ACr=Cs(),TCr=Vs(),ICr=Ir(),RCr=_Cr+1,oI=1e308;function PCr(r,e){var t,i;return aI(r)||aI(e)||Gs(e)?NaN:Gs(r)||r===0||e<TCr||OCr(r)>RCr&&e<=0?r:e>uI?r>=0?0:ICr:e<ACr?(t=nI(10,-(e+uI)),i=r*oI*t,Gs(i)?r:sI(i)/oI/t):(t=nI(10,-e),i=r*t,Gs(i)?r:sI(i)/t)}vI.exports=PCr});var lI=s((YDe,cI)=>{"use strict";var LCr=fI();cI.exports=LCr});var dI=s(($De,pI)=>{"use strict";function FCr(r,e){return r*e}pI.exports=FCr});var mI=s((ZDe,gI)=>{"use strict";var jCr=dI();gI.exports=jCr});var hI=s((QDe,yI)=>{"use strict";function MCr(r,e){return r-e}yI.exports=MCr});var bI=s((KDe,qI)=>{"use strict";var BCr=hI();qI.exports=BCr});var EI=s((rze,wI)=>{"use strict";var Qn=Qr(),kCr=B_(),CCr=lI(),VCr=mI(),GCr=Gr(),UCr=bI();function DCr(r){return Qn(r,"add",kCr),Qn(r,"floorn",CCr),Qn(r,"mul",VCr),Qn(r,"pow",GCr),Qn(r,"sub",UCr),r}wI.exports=DCr});var _I=s((eze,OI)=>{"use strict";var NI=Nr().isPrimitive,zCr=pr(),HCr=Ir(),SI=V();function WCr(r,e){return t;function t(i,a){var n;if(!NI(i)){if(e.nonnumeric===void 0)throw new TypeError(SI("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!NI(a)){if(e.nonnumeric===void 0)throw new TypeError(SI("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===zCr?e.pinf:n===HCr?e.ninf:n}}OI.exports=WCr});var d3=s((tze,AI)=>{"use strict";var xCr=_I();AI.exports=xCr});var II=s((ize,TI)=>{"use strict";var XCr=J0(),JCr=W1(),YCr=hs(),$Cr=V(),ZCr=ms(),QCr=d3(),KCr=["number","number"],rVr=["First argument","Second argument"];function eVr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error($Cr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=ZCr([r[0],r[1]],KCr,rVr),t=XCr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=YCr(t),n=QCr(e,i),r[0].push(a),r[1].push(t),JCr(r[0],r[1],n),a}TI.exports=eVr});var PI=s((aze,RI)=>{"use strict";var tVr=II();RI.exports=tVr});var FI=s((nze,LI)=>{"use strict";var iVr=Nr().isPrimitive,aVr=pr(),nVr=Ir(),sVr=V();function uVr(r,e){return t;function t(i){var a;if(!iVr(i)){if(e.nonnumeric===void 0)throw new TypeError(sVr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===aVr?e.pinf:a===nVr?e.ninf:a}}LI.exports=uVr});var Us=s((sze,jI)=>{"use strict";var oVr=FI();jI.exports=oVr});var BI=s((uze,MI)=>{"use strict";var g3=Nr().isPrimitive,vVr=pr(),fVr=Ir(),m3=V();function cVr(r,e){return t;function t(i,a,n){var u;if(!g3(i)){if(e.nonnumeric===void 0)throw new TypeError(m3("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!g3(a)){if(e.nonnumeric===void 0)throw new TypeError(m3("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!g3(n)){if(e.nonnumeric===void 0)throw new TypeError(m3("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===vVr?e.pinf:u===fVr?e.ninf:u}}MI.exports=cVr});var y3=s((oze,kI)=>{"use strict";var lVr=BI();kI.exports=lVr});var VI=s((vze,CI)=>{"use strict";var Ds=Nr().isPrimitive,pVr=pr(),dVr=Ir(),zs=V();function gVr(r,e){return t;function t(i,a,n,u){var o;if(!Ds(i)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ds(a)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Ds(n)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ds(u)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===pVr?e.pinf:o===dVr?e.ninf:o}}CI.exports=gVr});var UI=s((fze,GI)=>{"use strict";var mVr=VI();GI.exports=mVr});var zI=s((cze,DI)=>{"use strict";var Kn=Nr().isPrimitive,yVr=pr(),hVr=Ir(),r0=V();function qVr(r,e){return t;function t(i,a,n,u,o){var v;if(!Kn(i)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Kn(a)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Kn(n)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Kn(u)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Kn(o)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===yVr?e.pinf:v===hVr?e.ninf:v}}DI.exports=qVr});var WI=s((lze,HI)=>{"use strict";var bVr=zI();HI.exports=bVr});var XI=s((pze,xI)=>{"use strict";var wVr=J0(),EVr=X1(),NVr=hs(),SVr=V(),OVr=ms(),_Vr=y3(),AVr=["number","number","number"],TVr=["First argument","Second argument","Third argument"];function IVr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(SVr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=OVr([r[0],r[1],r[2]],AVr,TVr),t=wVr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=NVr(t),n=_Vr(e,i),r[0].push(a),r[1].push(t),EVr(r[0],r[1],n),a}xI.exports=IVr});var YI=s((dze,JI)=>{"use strict";var RVr=XI();JI.exports=RVr});var ZI=s((gze,$I)=>{"use strict";var PVr=qe(),LVr=J2(),FVr=V(),jVr=Us();function MVr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(FVr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=jVr(e,i),PVr(t)?(LVr([t,t],[t.length,t[0].length],a),t):a(t)}$I.exports=MVr});var KI=s((mze,QI)=>{"use strict";var BVr=ZI();QI.exports=BVr});var eR=s((yze,rR)=>{"use strict";function kVr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}rR.exports=kVr});var h3=s((hze,tR)=>{"use strict";var CVr=eR();tR.exports=CVr});var aR=s((qze,iR)=>{"use strict";function VVr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}iR.exports=VVr});var sR=s((bze,nR)=>{"use strict";function GVr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}nR.exports=GVr});var vR=s((wze,oR)=>{"use strict";var UVr=D(),uR=aR(),DVr=sR();UVr(uR,"assign",DVr);oR.exports=uR});var cR=s((Eze,fR)=>{"use strict";function zVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}fR.exports=zVr});var lt=s((Nze,lR)=>{"use strict";var HVr=cR();lR.exports=HVr});var dR=s((Sze,pR)=>{"use strict";var WVr=qa(),xVr=ra(),XVr=Q0(),JVr=Ia(),YVr=K0(),$Vr=lt();function ZVr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=WVr(e),{ref:r,dtype:a,data:e,length:$Vr(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[xVr(a),XVr(a)]:[JVr(a),YVr(a)]}}pR.exports=ZVr});var mR=s((Oze,gR)=>{"use strict";var QVr=dR();gR.exports=QVr});var hR=s((_ze,yR)=>{"use strict";function KVr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}yR.exports=KVr});var bR=s((Aze,qR)=>{"use strict";var rGr=hR();qR.exports=rGr});var ER=s((Tze,wR)=>{"use strict";function eGr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}wR.exports=eGr});var q3=s((Ize,NR)=>{"use strict";var tGr=ER();NR.exports=tGr});var OR=s((Rze,SR)=>{"use strict";function iGr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}SR.exports=iGr});var TR=s((Pze,AR)=>{"use strict";var aGr=bR(),nGr=In(),_R=q3(),sGr=OR();function uGr(r,e,t){var i;return i=aGr(r.length),e=nGr(e),sGr(e,i),r=_R(r,i),t=_R(t,i),{sh:r,sx:e,sy:t}}AR.exports=uGr});var ne=s((Lze,IR)=>{"use strict";var oGr=TR();IR.exports=oGr});var RR=s((Fze,vGr)=>{vGr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var LR=s((jze,PR)=>{"use strict";var fGr=RR();function cGr(r){return fGr[r]||null}PR.exports=cGr});var jR=s((Mze,FR)=>{"use strict";var lGr=LR();FR.exports=lGr});var BR=s((Bze,MR)=>{"use strict";var pGr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};MR.exports=pGr});var VR=s((kze,CR)=>{"use strict";var kR=jR(),b3=BR();function dGr(r,e){var t,i;return t=kR(r),i=kR(e),t===null||i===null?b3.BLOCK_SIZE_IN_ELEMENTS:t>i?b3.BLOCK_SIZE_IN_BYTES/t|0:b3.BLOCK_SIZE_IN_BYTES/i|0}CR.exports=dGr});var se=s((Cze,GR)=>{"use strict";var gGr=VR();GR.exports=gGr});var DR=s((Vze,UR)=>{"use strict";var mGr=ne(),yGr=se();function hGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E;for(E=mGr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=yGr(r.dtype,e.dtype),w=r.offset,_=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=_+I*q[1],N=y[0];N>0;)for(N<i?(g=N,N=0):(g=i,N-=i),b=p+N*h[0],T=m+N*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(S=0;S<g;S++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}UR.exports=hGr});var HR=s((Gze,zR)=>{"use strict";var qGr=ne(),bGr=se();function wGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G;for(G=qGr(r.shape,r.strides,e.strides),q=G.sh,T=G.sx,S=G.sy,i=bGr(r.dtype,e.dtype),O=r.offset,N=e.offset,a=r.data,n=e.data,v=T[0],l=S[0],u=r.accessors[0],o=e.accessors[1],P=q[2];P>0;)for(P<i?(b=P,P=0):(b=i,P-=i),g=O+P*T[2],h=N+P*S[2],j=q[1];j>0;)for(j<i?(_=j,j=0):(_=i,j-=i),c=T[2]-_*T[1],m=S[2]-_*S[1],y=g+j*T[1],d=h+j*S[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*S[0],f=T[1]-w*T[0],p=S[1]-w*S[0],A=0;A<b;A++){for(M=0;M<_;M++){for(L=0;L<w;L++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}zR.exports=wGr});var xR=s((Uze,WR)=>{"use strict";var EGr=ne(),NGr=se();function SGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x;for(x=EGr(r.shape,r.strides,e.strides),T=x.sh,E=x.sx,L=x.sy,i=NGr(r.dtype,e.dtype),M=r.offset,A=e.offset,a=r.data,n=e.data,v=E[0],p=L[0],u=r.accessors[0],o=e.accessors[1],W=T[3];W>0;)for(W<i?(I=W,W=0):(I=i,W-=i),q=M+W*E[3],b=A+W*L[3],U=T[2];U>0;)for(U<i?(N=U,U=0):(N=i,U-=i),l=E[3]-N*E[2],g=L[3]-N*L[2],h=q+U*E[2],_=b+U*L[2],B=T[1];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),c=E[2]-O*E[1],y=L[2]-O*L[1],d=h+B*E[1],w=_+B*L[1],C=T[0];C>0;)for(C<i?(S=C,C=0):(S=i,C-=i),F=d+C*E[0],j=w+C*L[0],f=E[1]-S*E[0],m=L[1]-S*L[0],R=0;R<I;R++){for(k=0;k<N;k++){for(G=0;G<O;G++){for(P=0;P<S;P++)o(n,j,t(u(a,F))),F+=v,j+=p;F+=f,j+=m}F+=c,j+=y}F+=l,j+=g}}WR.exports=SGr});var JR=s((Dze,XR)=>{"use strict";var OGr=ne(),_Gr=se();function AGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er;for(er=OGr(r.shape,r.strides,e.strides),I=er.sh,j=er.sx,P=er.sy,i=_Gr(r.dtype,e.dtype),G=r.offset,k=e.offset,a=r.data,n=e.data,v=j[0],m=P[0],u=r.accessors[0],o=e.accessors[1],Z=I[4];Z>0;)for(Z<i?(F=Z,Z=0):(F=i,Z-=i),b=G+Z*j[4],N=k+Z*P[4],J=I[3];J>0;)for(J<i?(A=J,J=0):(A=i,J-=i),p=j[4]-A*j[3],h=P[4]-A*P[3],_=b+J*j[3],O=N+J*P[3],X=I[2];X>0;)for(X<i?(M=X,X=0):(M=i,X-=i),l=j[3]-M*j[2],d=P[3]-M*P[2],w=_+X*j[2],S=O+X*P[2],Q=I[1];Q>0;)for(Q<i?(L=Q,Q=0):(L=i,Q-=i),c=j[2]-L*j[1],g=P[2]-L*P[1],q=w+Q*j[1],T=S+Q*P[1],$=I[0];$>0;)for($<i?(E=$,$=0):(E=i,$-=i),R=q+$*j[0],C=T+$*P[0],f=j[1]-E*j[0],y=P[1]-E*P[0],Y=0;Y<F;Y++){for(x=0;x<A;x++){for(W=0;W<M;W++){for(U=0;U<L;U++){for(B=0;B<E;B++)o(n,C,t(u(a,R))),R+=v,C+=m;R+=f,C+=y}R+=c,C+=g}R+=l,C+=d}R+=p,C+=h}}XR.exports=AGr});var $R=s((zze,YR)=>{"use strict";var TGr=ne(),IGr=se();function RGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir;for(ir=TGr(r.shape,r.strides,e.strides),A=ir.sh,C=ir.sx,B=ir.sy,i=IGr(r.dtype,e.dtype),U=r.offset,W=e.offset,a=r.data,n=e.data,v=C[0],y=B[0],u=r.accessors[0],o=e.accessors[1],fr=A[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=U+fr*C[5],M=W+fr*B[5],ar=A[4];ar>0;)for(ar<i?(k=ar,ar=0):(k=i,ar-=i),m=C[5]-k*C[4],w=B[5]-k*B[4],S=O+ar*C[4],L=M+ar*B[4],tr=A[3];tr>0;)for(tr<i?(G=tr,tr=0):(G=i,tr-=i),p=C[4]-G*C[3],q=B[4]-G*B[3],T=S+tr*C[3],E=L+tr*B[3],rr=A[2];rr>0;)for(rr<i?(P=rr,rr=0):(P=i,rr-=i),l=C[3]-P*C[2],h=B[3]-P*B[2],b=T+rr*C[2],I=E+rr*B[2],K=A[1];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=C[2]-j*C[1],d=B[2]-j*B[1],_=b+K*C[1],N=I+K*B[1],ur=A[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),x=_+ur*C[0],Y=N+ur*B[0],f=C[1]-F*C[0],g=B[1]-F*B[0],er=0;er<R;er++){for(Z=0;Z<k;Z++){for(J=0;J<G;J++){for(X=0;X<P;X++){for(Q=0;Q<j;Q++){for($=0;$<F;$++)o(n,Y,t(u(a,x))),x+=v,Y+=y;x+=f,Y+=g}x+=c,Y+=d}x+=l,Y+=h}x+=p,Y+=q}x+=m,Y+=w}}YR.exports=RGr});var QR=s((Hze,ZR)=>{"use strict";var PGr=ne(),LGr=se();function FGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr;for(yr=PGr(r.shape,r.strides,e.strides),G=yr.sh,Y=yr.sx,$=yr.sy,i=LGr(r.dtype,e.dtype),Q=r.offset,X=e.offset,a=r.data,n=e.data,v=Y[0],g=$[0],u=r.accessors[0],o=e.accessors[1],dr=G[6];dr>0;)for(dr<i?(x=dr,dr=0):(x=i,dr-=i),E=Q+dr*Y[6],P=X+dr*$[6],gr=G[5];gr>0;)for(gr<i?(W=gr,gr=0):(W=i,gr-=i),y=Y[6]-W*Y[5],b=$[6]-W*$[5],I=E+gr*Y[5],j=P+gr*$[5],cr=G[4];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),m=Y[5]-U*Y[4],_=$[5]-U*$[4],N=I+cr*Y[4],F=j+cr*$[4],or=G[3];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=Y[4]-B*Y[3],w=$[4]-B*$[3],O=N+or*Y[3],A=F+or*$[3],sr=G[2];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=Y[3]-C*Y[2],q=$[3]-C*$[2],S=O+sr*Y[2],M=A+sr*$[2],nr=G[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=Y[2]-R*Y[1],h=$[2]-R*$[1],T=S+nr*Y[1],L=M+nr*$[1],ir=G[0];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),J=T+ir*Y[0],Z=L+ir*$[0],f=Y[1]-k*Y[0],d=$[1]-k*$[0],fr=0;fr<x;fr++){for(ar=0;ar<W;ar++){for(tr=0;tr<U;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++)o(n,Z,t(u(a,J))),J+=v,Z+=g;J+=f,Z+=d}J+=c,Z+=h}J+=l,Z+=q}J+=p,Z+=w}J+=m,Z+=_}J+=y,Z+=b}}ZR.exports=FGr});var rP=s((Wze,KR)=>{"use strict";var jGr=ne(),MGr=se();function BGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr;for(kr=jGr(r.shape,r.strides,e.strides),B=kr.sh,Z=kr.sx,er=kr.sy,i=MGr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=Z[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Fr=B[7];Fr>0;)for(Fr<i?(J=Fr,Fr=0):(J=i,Fr-=i),A=ur+Fr*Z[7],C=K+Fr*er[7],Er=B[6];Er>0;)for(Er<i?(X=Er,Er=0):(X=i,Er-=i),g=Z[7]-X*Z[6],S=er[7]-X*er[6],M=A+Er*Z[6],R=C+Er*er[6],Tr=B[5];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),y=Z[6]-Q*Z[5],T=er[6]-Q*er[5],L=M+Tr*Z[5],k=R+Tr*er[5],Ar=B[4];Ar>0;)for(Ar<i?($=Ar,Ar=0):($=i,Ar-=i),m=Z[5]-$*Z[4],b=er[5]-$*er[4],E=L+Ar*Z[4],G=k+Ar*er[4],Mr=B[3];Mr>0;)for(Mr<i?(Y=Mr,Mr=0):(Y=i,Mr-=i),p=Z[4]-Y*Z[3],_=er[4]-Y*er[3],I=E+Mr*Z[3],P=G+Mr*er[3],jr=B[2];jr>0;)for(jr<i?(x=jr,jr=0):(x=i,jr-=i),l=Z[3]-x*Z[2],w=er[3]-x*er[2],N=I+jr*Z[2],j=P+jr*er[2],yr=B[1];yr>0;)for(yr<i?(W=yr,yr=0):(W=i,yr-=i),c=Z[2]-W*Z[1],q=er[2]-W*er[1],O=N+yr*Z[1],F=j+yr*er[1],dr=B[0];dr>0;)for(dr<i?(U=dr,dr=0):(U=i,dr-=i),rr=O+dr*Z[0],tr=F+dr*er[0],f=Z[1]-U*Z[0],h=er[1]-U*er[0],gr=0;gr<J;gr++){for(cr=0;cr<X;cr++){for(or=0;or<Q;or++){for(sr=0;sr<$;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<x;ir++){for(fr=0;fr<W;fr++){for(ar=0;ar<U;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=_}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=S}}KR.exports=BGr});var tP=s((xze,eP)=>{"use strict";var kGr=ne(),CGr=se();function VGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,Xr,Cr,Vr,Lr,Br,xr,Kr;for(Kr=kGr(r.shape,r.strides,e.strides),Y=Kr.sh,tr=Kr.sx,ar=Kr.sy,i=CGr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],xr=Y[8];xr>0;)for(xr<i?(rr=xr,xr=0):(rr=i,xr-=i),P=fr+xr*tr[8],x=ir+xr*ar[8],Br=Y[7];Br>0;)for(Br<i?(K=Br,Br=0):(K=i,Br-=i),d=tr[8]-K*tr[7],N=ar[8]-K*ar[7],j=P+Br*tr[7],W=x+Br*ar[7],Lr=Y[6];Lr>0;)for(Lr<i?(ur=Lr,Lr=0):(ur=i,Lr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=j+Lr*tr[6],U=W+Lr*ar[6],Vr=Y[5];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=tr[6]-er*tr[5],S=ar[6]-er*ar[5],A=F+Vr*tr[5],B=U+Vr*ar[5],Cr=Y[4];Cr>0;)for(Cr<i?(Z=Cr,Cr=0):(Z=i,Cr-=i),m=tr[5]-Z*tr[4],T=ar[5]-Z*ar[4],M=A+Cr*tr[4],C=B+Cr*ar[4],Xr=Y[3];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=tr[4]-J*tr[3],b=ar[4]-J*ar[3],L=M+Xr*tr[3],R=C+Xr*ar[3],kr=Y[2];kr>0;)for(kr<i?(X=kr,kr=0):(X=i,kr-=i),l=tr[3]-X*tr[2],_=ar[3]-X*ar[2],E=L+kr*tr[2],k=R+kr*ar[2],Fr=Y[1];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Fr*tr[1],G=k+Fr*ar[1],Er=Y[0];Er>0;)for(Er<i?($=Er,Er=0):($=i,Er-=i),nr=I+Er*tr[0],sr=G+Er*ar[0],f=tr[1]-$*tr[0],q=ar[1]-$*ar[0],Tr=0;Tr<rr;Tr++){for(Ar=0;Ar<K;Ar++){for(Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<Z;yr++){for(dr=0;dr<J;dr++){for(gr=0;gr<X;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<$;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=_}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=S}nr+=g,sr+=O}nr+=d,sr+=N}}eP.exports=VGr});var aP=s((Xze,iP)=>{"use strict";var GGr=ne(),UGr=se();function DGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,Xr,Cr,Vr,Lr,Br,xr,Kr,fe,ce,le,pe,Ce,ai,W0;for(W0=GGr(r.shape,r.strides,e.strides),J=W0.sh,sr=W0.sx,or=W0.sy,i=UGr(r.dtype,e.dtype),cr=r.offset,gr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ai=J[9];ai>0;)for(ai<i?(nr=ai,ai=0):(nr=i,ai-=i),R=cr+ai*sr[9],X=gr+ai*or[9],Ce=J[8];Ce>0;)for(Ce<i?(ir=Ce,Ce=0):(ir=i,Ce-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],k=R+Ce*sr[8],Q=X+Ce*or[8],pe=J[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],G=k+pe*sr[7],$=Q+pe*or[7],le=J[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],N=or[7]-ar*or[6],P=G+le*sr[6],Y=$+le*or[6],ce=J[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],j=P+ce*sr[5],x=Y+ce*or[5],fe=J[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],S=or[5]-rr*or[4],F=j+fe*sr[4],W=x+fe*or[4],Kr=J[3];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],A=F+Kr*sr[3],U=W+Kr*or[3],xr=J[2];xr>0;)for(xr<i?(ur=xr,xr=0):(ur=i,xr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],M=A+xr*sr[2],B=U+xr*or[2],Br=J[1];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=sr[2]-er*sr[1],_=or[2]-er*or[1],L=M+Br*sr[1],C=B+Br*or[1],Lr=J[0];Lr>0;)for(Lr<i?(Z=Lr,Lr=0):(Z=i,Lr-=i),dr=L+Lr*sr[0],yr=C+Lr*or[0],f=sr[1]-Z*sr[0],w=or[1]-Z*or[0],Vr=0;Vr<nr;Vr++){for(Cr=0;Cr<ir;Cr++){for(Xr=0;Xr<fr;Xr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(Ar=0;Ar<ur;Ar++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<Z;jr++)o(n,yr,t(u(a,dr))),dr+=v,yr+=q;dr+=f,yr+=w}dr+=c,yr+=_}dr+=l,yr+=b}dr+=p,yr+=T}dr+=m,yr+=S}dr+=y,yr+=O}dr+=g,yr+=N}dr+=d,yr+=I}dr+=h,yr+=E}}iP.exports=DGr});var sP=s((Jze,nP)=>{"use strict";var zGr=ne(),HGr=se();function WGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N;for(N=zGr(r.shape,r.strides,e.strides),p=N.sh,g=N.sx,d=N.sy,i=HGr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],S=p[0];S>0;)for(S<i?(m=S,S=0):(m=i,S-=i),w=c+S*g[0],_=l+S*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[_]=t(a[w]),w+=u,_+=v;w+=o,_+=f}}nP.exports=WGr});var oP=s((Yze,uP)=>{"use strict";var xGr=ne(),XGr=se();function JGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j;for(j=xGr(r.shape,r.strides,e.strides),d=j.sh,_=j.sx,b=j.sy,i=XGr(r.dtype,e.dtype),T=r.offset,S=e.offset,a=r.data,n=e.data,u=_[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*_[2],g=S+F*b[2],A=d[1];A>0;)for(A<i?(q=A,A=0):(q=i,A-=i),v=_[2]-q*_[1],l=b[2]-q*b[1],p=m+A*_[1],y=g+A*b[1],M=d[0];M>0;)for(M<i?(h=M,M=0):(h=i,M-=i),O=p+M*_[0],N=y+M*b[0],o=_[1]-h*_[0],c=b[1]-h*b[0],L=0;L<w;L++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[N]=t(a[O]),O+=u,N+=f;O+=o,N+=c}O+=v,N+=l}}uP.exports=JGr});var fP=s(($ze,vP)=>{"use strict";var YGr=ne(),$Gr=se();function ZGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U;for(U=YGr(r.shape,r.strides,e.strides),_=U.sh,N=U.sx,I=U.sy,i=$Gr(r.dtype,e.dtype),E=r.offset,L=e.offset,a=r.data,n=e.data,u=N[0],c=I[0],B=_[3];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),d=E+B*N[3],w=L+B*I[3],C=_[2];C>0;)for(C<i?(S=C,C=0):(S=i,C-=i),f=N[3]-S*N[2],m=I[3]-S*I[2],g=d+C*N[2],q=w+C*I[2],R=_[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=N[2]-T*N[1],p=I[2]-T*I[1],y=g+R*N[1],h=q+R*I[1],k=_[0];k>0;)for(k<i?(b=k,k=0):(b=i,k-=i),M=y+k*N[0],A=h+k*I[0],o=N[1]-b*N[0],l=I[1]-b*I[0],G=0;G<O;G++){for(P=0;P<S;P++){for(j=0;j<T;j++){for(F=0;F<b;F++)n[A]=t(a[M]),M+=u,A+=c;M+=o,A+=l}M+=v,A+=p}M+=f,A+=m}}vP.exports=ZGr});var lP=s((Zze,cP)=>{"use strict";var QGr=ne(),KGr=se();function rUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J;for(J=QGr(r.shape,r.strides,e.strides),O=J.sh,A=J.sx,F=J.sy,i=KGr(r.dtype,e.dtype),j=r.offset,P=e.offset,a=r.data,n=e.data,u=A[0],l=F[0],X=O[4];X>0;)for(X<i?(M=X,X=0):(M=i,X-=i),w=j+X*A[4],S=P+X*F[4],Q=O[3];Q>0;)for(Q<i?(L=Q,Q=0):(L=i,Q-=i),c=A[4]-L*A[3],g=F[4]-L*F[3],q=w+Q*A[3],T=S+Q*F[3],$=O[2];$>0;)for($<i?(E=$,$=0):(E=i,$-=i),f=A[3]-E*A[2],y=F[3]-E*F[2],h=q+$*A[2],b=T+$*F[2],Y=O[1];Y>0;)for(Y<i?(I=Y,Y=0):(I=i,Y-=i),v=A[2]-I*A[1],m=F[2]-I*F[1],d=h+Y*A[1],_=b+Y*F[1],x=O[0];x>0;)for(x<i?(N=x,x=0):(N=i,x-=i),G=d+x*A[0],k=_+x*F[0],o=A[1]-N*A[0],p=F[1]-N*F[0],W=0;W<M;W++){for(U=0;U<L;U++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<N;R++)n[k]=t(a[G]),G+=u,k+=l;G+=o,k+=p}G+=v,k+=m}G+=f,k+=y}G+=c,k+=g}}cP.exports=rUr});var dP=s((Qze,pP)=>{"use strict";var eUr=ne(),tUr=se();function iUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar;for(ar=eUr(r.shape,r.strides,e.strides),L=ar.sh,k=ar.sx,R=ar.sy,i=tUr(r.dtype,e.dtype),C=r.offset,B=e.offset,a=r.data,n=e.data,u=k[0],p=R[0],tr=L[5];tr>0;)for(tr<i?(G=tr,tr=0):(G=i,tr-=i),T=C+tr*k[5],E=B+tr*R[5],rr=L[4];rr>0;)for(rr<i?(P=rr,rr=0):(P=i,rr-=i),l=k[5]-P*k[4],h=R[5]-P*R[4],b=T+rr*k[4],I=E+rr*R[4],K=L[3];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=k[4]-j*k[3],d=R[4]-j*R[3],_=b+K*k[3],N=I+K*R[3],ur=L[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=k[3]-F*k[2],g=R[3]-F*R[2],w=_+ur*k[2],O=N+ur*R[2],er=L[1];er>0;)for(er<i?(A=er,er=0):(A=i,er-=i),v=k[2]-A*k[1],y=R[2]-A*R[1],q=w+er*k[1],S=O+er*R[1],Z=L[0];Z>0;)for(Z<i?(M=Z,Z=0):(M=i,Z-=i),U=q+Z*k[0],W=S+Z*R[0],o=k[1]-M*k[0],m=R[1]-M*R[0],J=0;J<G;J++){for(X=0;X<P;X++){for(Q=0;Q<j;Q++){for($=0;$<F;$++){for(Y=0;Y<A;Y++){for(x=0;x<M;x++)n[W]=t(a[U]),U+=u,W+=p;U+=o,W+=m}U+=v,W+=y}U+=f,W+=g}U+=c,W+=d}U+=l,W+=h}}pP.exports=iUr});var mP=s((Kze,gP)=>{"use strict";var aUr=ne(),nUr=se();function sUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr;for(gr=aUr(r.shape,r.strides,e.strides),j=gr.sh,W=gr.sx,x=gr.sy,i=nUr(r.dtype,e.dtype),Y=r.offset,$=e.offset,a=r.data,n=e.data,u=W[0],m=x[0],cr=j[6];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),N=Y+cr*W[6],F=$+cr*x[6],or=j[5];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=W[6]-B*W[5],w=x[6]-B*x[5],O=N+or*W[5],A=F+or*x[5],sr=j[4];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=W[5]-C*W[4],q=x[5]-C*x[4],S=O+sr*W[4],M=A+sr*x[4],nr=j[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=W[4]-R*W[3],h=x[4]-R*x[3],T=S+nr*W[3],L=M+nr*x[3],ir=j[2];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),f=W[3]-k*W[2],d=x[3]-k*x[2],b=T+ir*W[2],E=L+ir*x[2],fr=j[1];fr>0;)for(fr<i?(G=fr,fr=0):(G=i,fr-=i),v=W[2]-G*W[1],g=x[2]-G*x[1],_=b+fr*W[1],I=E+fr*x[1],ar=j[0];ar>0;)for(ar<i?(P=ar,ar=0):(P=i,ar-=i),Q=_+ar*W[0],X=I+ar*x[0],o=W[1]-P*W[0],y=x[1]-P*x[0],tr=0;tr<U;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++){for(Z=0;Z<G;Z++){for(J=0;J<P;J++)n[X]=t(a[Q]),Q+=u,X+=m;Q+=o,X+=y}Q+=v,X+=g}Q+=f,X+=d}Q+=c,X+=h}Q+=l,X+=q}Q+=p,X+=w}}gP.exports=sUr});var hP=s((rHe,yP)=>{"use strict";var uUr=ne(),oUr=se();function vUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er;for(Er=uUr(r.shape,r.strides,e.strides),R=Er.sh,X=Er.sx,J=Er.sy,i=oUr(r.dtype,e.dtype),Z=r.offset,er=e.offset,a=r.data,n=e.data,u=X[0],y=J[0],Tr=R[7];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),L=Z+Tr*X[7],k=er+Tr*J[7],Ar=R[6];Ar>0;)for(Ar<i?($=Ar,Ar=0):($=i,Ar-=i),m=X[7]-$*X[6],b=J[7]-$*J[6],E=L+Ar*X[6],G=k+Ar*J[6],Mr=R[5];Mr>0;)for(Mr<i?(Y=Mr,Mr=0):(Y=i,Mr-=i),p=X[6]-Y*X[5],_=J[6]-Y*J[5],I=E+Mr*X[5],P=G+Mr*J[5],jr=R[4];jr>0;)for(jr<i?(x=jr,jr=0):(x=i,jr-=i),l=X[5]-x*X[4],w=J[5]-x*J[4],N=I+jr*X[4],j=P+jr*J[4],yr=R[3];yr>0;)for(yr<i?(W=yr,yr=0):(W=i,yr-=i),c=X[4]-W*X[3],q=J[4]-W*J[3],O=N+yr*X[3],F=j+yr*J[3],dr=R[2];dr>0;)for(dr<i?(U=dr,dr=0):(U=i,dr-=i),f=X[3]-U*X[2],h=J[3]-U*J[2],S=O+dr*X[2],A=F+dr*J[2],gr=R[1];gr>0;)for(gr<i?(B=gr,gr=0):(B=i,gr-=i),v=X[2]-B*X[1],d=J[2]-B*J[1],T=S+gr*X[1],M=A+gr*J[1],cr=R[0];cr>0;)for(cr<i?(C=cr,cr=0):(C=i,cr-=i),ur=T+cr*X[0],K=M+cr*J[0],o=X[1]-C*X[0],g=J[1]-C*J[0],or=0;or<Q;or++){for(sr=0;sr<$;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<x;ir++){for(fr=0;fr<W;fr++){for(ar=0;ar<U;ar++){for(tr=0;tr<B;tr++){for(rr=0;rr<C;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=_}ur+=m,K+=b}}yP.exports=vUr});var bP=s((eHe,qP)=>{"use strict";var fUr=ne(),cUr=se();function lUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,Xr,Cr,Vr,Lr,Br;for(Br=fUr(r.shape,r.strides,e.strides),W=Br.sh,K=Br.sx,rr=Br.sy,i=cUr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Lr=W[8];Lr>0;)for(Lr<i?(ur=Lr,Lr=0):(ur=i,Lr-=i),F=tr+Lr*K[8],U=ar+Lr*rr[8],Vr=W[7];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=K[8]-er*K[7],S=rr[8]-er*rr[7],A=F+Vr*K[7],B=U+Vr*rr[7],Cr=W[6];Cr>0;)for(Cr<i?(Z=Cr,Cr=0):(Z=i,Cr-=i),m=K[7]-Z*K[6],T=rr[7]-Z*rr[6],M=A+Cr*K[6],C=B+Cr*rr[6],Xr=W[5];Xr>0;)for(Xr<i?(J=Xr,Xr=0):(J=i,Xr-=i),p=K[6]-J*K[5],b=rr[6]-J*rr[5],L=M+Xr*K[5],R=C+Xr*rr[5],kr=W[4];kr>0;)for(kr<i?(X=kr,kr=0):(X=i,kr-=i),l=K[5]-X*K[4],_=rr[5]-X*rr[4],E=L+kr*K[4],k=R+kr*rr[4],Fr=W[3];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Fr*K[3],G=k+Fr*rr[3],Er=W[2];Er>0;)for(Er<i?($=Er,Er=0):($=i,Er-=i),f=K[3]-$*K[2],q=rr[3]-$*rr[2],N=I+Er*K[2],P=G+Er*rr[2],Tr=W[1];Tr>0;)for(Tr<i?(Y=Tr,Tr=0):(Y=i,Tr-=i),v=K[2]-Y*K[1],h=rr[2]-Y*rr[1],O=N+Tr*K[1],j=P+Tr*rr[1],Ar=W[0];Ar>0;)for(Ar<i?(x=Ar,Ar=0):(x=i,Ar-=i),fr=O+Ar*K[0],ir=j+Ar*rr[0],o=K[1]-x*K[0],d=rr[1]-x*rr[0],Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<Z;yr++){for(dr=0;dr<J;dr++){for(gr=0;gr<X;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<$;or++){for(sr=0;sr<Y;sr++){for(nr=0;nr<x;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=_}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=S}}qP.exports=lUr});var EP=s((tHe,wP)=>{"use strict";var pUr=ne(),dUr=se();function gUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,Xr,Cr,Vr,Lr,Br,xr,Kr,fe,ce,le,pe,Ce;for(Ce=pUr(r.shape,r.strides,e.strides),Q=Ce.sh,ir=Ce.sx,nr=Ce.sy,i=dUr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),G=sr+pe*ir[9],$=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],N=nr[9]-ar*nr[8],P=G+le*ir[8],Y=$+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],j=P+ce*ir[7],x=Y+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],S=nr[7]-rr*nr[6],F=j+fe*ir[6],W=x+fe*nr[6],Kr=Q[5];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],A=F+Kr*ir[5],U=W+Kr*nr[5],xr=Q[4];xr>0;)for(xr<i?(ur=xr,xr=0):(ur=i,xr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],M=A+xr*ir[4],B=U+xr*nr[4],Br=Q[3];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=ir[4]-er*ir[3],_=nr[4]-er*nr[3],L=M+Br*ir[3],C=B+Br*nr[3],Lr=Q[2];Lr>0;)for(Lr<i?(Z=Lr,Lr=0):(Z=i,Lr-=i),f=ir[3]-Z*ir[2],w=nr[3]-Z*nr[2],E=L+Lr*ir[2],R=C+Lr*nr[2],Vr=Q[1];Vr>0;)for(Vr<i?(J=Vr,Vr=0):(J=i,Vr-=i),v=ir[2]-J*ir[1],q=nr[2]-J*nr[1],I=E+Vr*ir[1],k=R+Vr*nr[1],Cr=Q[0];Cr>0;)for(Cr<i?(X=Cr,Cr=0):(X=i,Cr-=i),cr=I+Cr*ir[0],gr=k+Cr*nr[0],o=ir[1]-X*ir[0],h=nr[1]-X*nr[0],Xr=0;Xr<fr;Xr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(Ar=0;Ar<ur;Ar++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<Z;jr++){for(yr=0;yr<J;yr++){for(dr=0;dr<X;dr++)n[gr]=t(a[cr]),cr+=u,gr+=d;cr+=o,gr+=h}cr+=v,gr+=q}cr+=f,gr+=w}cr+=c,gr+=_}cr+=l,gr+=b}cr+=p,gr+=T}cr+=m,gr+=S}cr+=y,gr+=O}cr+=g,gr+=N}}wP.exports=gUr});var SP=s((iHe,NP)=>{"use strict";function mUr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}NP.exports=mUr});var _P=s((aHe,OP)=>{"use strict";function yUr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}OP.exports=yUr});var TP=s((nHe,AP)=>{"use strict";function hUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}AP.exports=hUr});var RP=s((sHe,IP)=>{"use strict";function qUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,_=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],S=0;S<d;S++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,_,t(n(i,w))),w+=o,_+=c;w+=v,_+=l}w+=f,_+=p}}IP.exports=qUr});var LP=s((uHe,PP)=>{"use strict";function bUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E;for(g=r.shape,_=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=_[3],v=_[2]-d*_[3],f=_[1]-h*_[2],c=_[0]-q*_[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=_[0],v=_[1]-d*_[0],f=_[2]-h*_[1],c=_[3]-q*_[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,S=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(N=0;N<h;N++){for(O=0;O<d;O++)u(a,S,t(n(i,T))),T+=o,S+=l;T+=v,S+=p}T+=f,S+=m}T+=c,S+=y}}PP.exports=bUr});var jP=s((oHe,FP)=>{"use strict";function wUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F;for(h=r.shape,S=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],_=h[2],b=h[1],T=h[0],o=S[4],v=S[3]-q*S[4],f=S[2]-w*S[3],c=S[1]-_*S[2],l=S[0]-b*S[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-_*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],_=h[2],b=h[3],T=h[4],o=S[0],v=S[1]-q*S[0],f=S[2]-w*S[1],c=S[3]-_*S[2],l=S[4]-b*S[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-_*O[2],d=O[4]-b*O[3]),N=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(A=0;A<b;A++){for(M=0;M<_;M++){for(L=0;L<w;L++){for(E=0;E<q;E++)u(a,I,t(n(i,N))),N+=o,I+=p;N+=v,I+=m}N+=f,I+=y}N+=c,I+=g}N+=l,I+=d}}FP.exports=wUr});var BP=s((vHe,MP)=>{"use strict";function EUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(_=w[5],b=w[4],T=w[3],S=w[2],O=w[1],N=w[0],o=I[5],v=I[4]-_*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-S*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-_*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-S*E[2],q=E[0]-O*E[1]):(_=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],o=I[0],v=I[1]-_*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-S*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-_*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-S*E[3],q=E[5]-O*E[4]),L=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],k=0;k<N;k++){for(G=0;G<O;G++){for(P=0;P<S;P++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(A=0;A<_;A++)u(a,M,t(n(i,L))),L+=o,M+=m;L+=v,M+=y}L+=f,M+=g}L+=c,M+=d}L+=l,M+=h}L+=p,M+=q}}MP.exports=EUr});var CP=s((fHe,kP)=>{"use strict";function NUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U;for(b=r.shape,M=r.strides,A=e.strides,r.order==="row-major"?(T=b[6],S=b[5],O=b[4],N=b[3],I=b[2],E=b[1],L=b[0],o=M[6],v=M[5]-T*M[6],f=M[4]-S*M[5],c=M[3]-O*M[4],l=M[2]-N*M[3],p=M[1]-I*M[2],m=M[0]-E*M[1],y=A[6],g=A[5]-T*A[6],d=A[4]-S*A[5],h=A[3]-O*A[4],q=A[2]-N*A[3],w=A[1]-I*A[2],_=A[0]-E*A[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],L=b[6],o=M[0],v=M[1]-T*M[0],f=M[2]-S*M[1],c=M[3]-O*M[2],l=M[4]-N*M[3],p=M[5]-I*M[4],m=M[6]-E*M[5],y=A[0],g=A[1]-T*A[0],d=A[2]-S*A[1],h=A[3]-O*A[2],q=A[4]-N*A[3],w=A[5]-I*A[4],_=A[6]-E*A[5]),F=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],U=0;U<L;U++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<N;R++){for(k=0;k<O;k++){for(G=0;G<S;G++){for(P=0;P<T;P++)u(a,j,t(n(i,F))),F+=o,j+=y;F+=v,j+=g}F+=f,j+=d}F+=c,j+=h}F+=l,j+=q}F+=p,j+=w}F+=m,j+=_}}kP.exports=NUr});var GP=s((cHe,VP)=>{"use strict";function SUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$;for(S=r.shape,j=r.strides,P=e.strides,r.order==="row-major"?(O=S[7],N=S[6],I=S[5],E=S[4],L=S[3],M=S[2],A=S[1],F=S[0],o=j[7],v=j[6]-O*j[7],f=j[5]-N*j[6],c=j[4]-I*j[5],l=j[3]-E*j[4],p=j[2]-L*j[3],m=j[1]-M*j[2],y=j[0]-A*j[1],g=P[7],d=P[6]-O*P[7],h=P[5]-N*P[6],q=P[4]-I*P[5],w=P[3]-E*P[4],_=P[2]-L*P[3],b=P[1]-M*P[2],T=P[0]-A*P[1]):(O=S[0],N=S[1],I=S[2],E=S[3],L=S[4],M=S[5],A=S[6],F=S[7],o=j[0],v=j[1]-O*j[0],f=j[2]-N*j[1],c=j[3]-I*j[2],l=j[4]-E*j[3],p=j[5]-L*j[4],m=j[6]-M*j[5],y=j[7]-A*j[6],g=P[0],d=P[1]-O*P[0],h=P[2]-N*P[1],q=P[3]-I*P[2],w=P[4]-E*P[3],_=P[5]-L*P[4],b=P[6]-M*P[5],T=P[7]-A*P[6]),G=r.offset,k=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<F;$++){for(Y=0;Y<A;Y++){for(x=0;x<M;x++){for(W=0;W<L;W++){for(U=0;U<E;U++){for(B=0;B<I;B++){for(C=0;C<N;C++){for(R=0;R<O;R++)u(a,k,t(n(i,G))),G+=o,k+=g;G+=v,k+=d}G+=f,k+=h}G+=c,k+=q}G+=l,k+=w}G+=p,k+=_}G+=m,k+=b}G+=y,k+=T}}VP.exports=SUr});var DP=s((lHe,UP)=>{"use strict";function OUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z;for(N=r.shape,k=r.strides,R=e.strides,r.order==="row-major"?(I=N[8],E=N[7],L=N[6],M=N[5],A=N[4],F=N[3],j=N[2],P=N[1],G=N[0],o=k[8],v=k[7]-I*k[8],f=k[6]-E*k[7],c=k[5]-L*k[6],l=k[4]-M*k[5],p=k[3]-A*k[4],m=k[2]-F*k[3],y=k[1]-j*k[2],g=k[0]-P*k[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-L*R[6],_=R[4]-M*R[5],b=R[3]-A*R[4],T=R[2]-F*R[3],S=R[1]-j*R[2],O=R[0]-P*R[1]):(I=N[0],E=N[1],L=N[2],M=N[3],A=N[4],F=N[5],j=N[6],P=N[7],G=N[8],o=k[0],v=k[1]-I*k[0],f=k[2]-E*k[1],c=k[3]-L*k[2],l=k[4]-M*k[3],p=k[5]-A*k[4],m=k[6]-F*k[5],y=k[7]-j*k[6],g=k[8]-P*k[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-L*R[2],_=R[4]-M*R[3],b=R[5]-A*R[4],T=R[6]-F*R[5],S=R[7]-j*R[6],O=R[8]-P*R[7]),C=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<G;Z++){for(J=0;J<P;J++){for(X=0;X<j;X++){for(Q=0;Q<F;Q++){for($=0;$<A;$++){for(Y=0;Y<M;Y++){for(x=0;x<L;x++){for(W=0;W<E;W++){for(U=0;U<I;U++)u(a,B,t(n(i,C))),C+=o,B+=d;C+=v,B+=h}C+=f,B+=q}C+=c,B+=w}C+=l,B+=_}C+=p,B+=b}C+=m,B+=T}C+=y,B+=S}C+=g,B+=O}}UP.exports=OUr});var HP=s((pHe,zP)=>{"use strict";function _Ur(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur,K,rr;for(E=r.shape,B=r.strides,U=e.strides,r.order==="row-major"?(L=E[9],M=E[8],A=E[7],F=E[6],j=E[5],P=E[4],G=E[3],k=E[2],R=E[1],C=E[0],o=B[9],v=B[8]-L*B[9],f=B[7]-M*B[8],c=B[6]-A*B[7],l=B[5]-F*B[6],p=B[4]-j*B[5],m=B[3]-P*B[4],y=B[2]-G*B[3],g=B[1]-k*B[2],d=B[0]-R*B[1],h=U[9],q=U[8]-L*U[9],w=U[7]-M*U[8],_=U[6]-A*U[7],b=U[5]-F*U[6],T=U[4]-j*U[5],S=U[3]-P*U[4],O=U[2]-G*U[3],N=U[1]-k*U[2],I=U[0]-R*U[1]):(L=E[0],M=E[1],A=E[2],F=E[3],j=E[4],P=E[5],G=E[6],k=E[7],R=E[8],C=E[9],o=B[0],v=B[1]-L*B[0],f=B[2]-M*B[1],c=B[3]-A*B[2],l=B[4]-F*B[3],p=B[5]-j*B[4],m=B[6]-P*B[5],y=B[7]-G*B[6],g=B[8]-k*B[7],d=B[9]-R*B[8],h=U[0],q=U[1]-L*U[0],w=U[2]-M*U[1],_=U[3]-A*U[2],b=U[4]-F*U[3],T=U[5]-j*U[4],S=U[6]-P*U[5],O=U[7]-G*U[6],N=U[8]-k*U[7],I=U[9]-R*U[8]),W=r.offset,x=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<C;rr++){for(K=0;K<R;K++){for(ur=0;ur<k;ur++){for(er=0;er<G;er++){for(Z=0;Z<P;Z++){for(J=0;J<j;J++){for(X=0;X<F;X++){for(Q=0;Q<A;Q++){for($=0;$<M;$++){for(Y=0;Y<L;Y++)u(a,x,t(n(i,W))),W+=o,x+=h;W+=v,x+=q}W+=f,x+=w}W+=c,x+=_}W+=l,x+=b}W+=p,x+=T}W+=m,x+=S}W+=y,x+=O}W+=g,x+=N}W+=d,x+=I}}zP.exports=_Ur});var xP=s((dHe,WP)=>{"use strict";var AUr=V();function TUr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError(AUr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}WP.exports=TUr});var w3=s((gHe,XP)=>{"use strict";var IUr=xP();XP.exports=IUr});var ZP=s((mHe,$P)=>{"use strict";var RUr=lt(),JP=w3(),YP="throw";function PUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=RUr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=JP(c,l,m,n,h,YP),d=JP(c,p,y,u,h,YP),f(a,d,t(v(i,g)))}$P.exports=PUr});var KP=s((yHe,QP)=>{"use strict";function LUr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}QP.exports=LUr});var eL=s((hHe,rL)=>{"use strict";function FUr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}rL.exports=FUr});var iL=s((qHe,tL)=>{"use strict";function jUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}tL.exports=jUr});var nL=s((bHe,aL)=>{"use strict";function MUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(_=0;_<m;_++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}aL.exports=MUr});var uL=s((wHe,sL)=>{"use strict";function BUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),_=r.offset,b=e.offset,i=r.data,a=e.data,N=0;N<h;N++){for(O=0;O<d;O++){for(S=0;S<g;S++){for(T=0;T<y;T++)a[b]=t(i[_]),_+=n,b+=f;_+=u,b+=c}_+=o,b+=l}_+=v,b+=p}}sL.exports=BUr});var vL=s((EHe,oL)=>{"use strict";function kUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],_=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],_=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),S=r.offset,O=e.offset,i=r.data,a=e.data,M=0;M<_;M++){for(L=0;L<w;L++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(N=0;N<d;N++)a[O]=t(i[S]),S+=n,O+=c;S+=u,O+=l}S+=o,O+=p}S+=v,O+=m}S+=f,O+=y}}oL.exports=kUr});var cL=s((NHe,fL)=>{"use strict";function CUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P;for(h=r.shape,O=r.strides,N=e.strides,r.order==="row-major"?(q=h[5],w=h[4],_=h[3],b=h[2],T=h[1],S=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-_*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=N[5],p=N[4]-q*N[5],m=N[3]-w*N[4],y=N[2]-_*N[3],g=N[1]-b*N[2],d=N[0]-T*N[1]):(q=h[0],w=h[1],_=h[2],b=h[3],T=h[4],S=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-_*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=N[0],p=N[1]-q*N[0],m=N[2]-w*N[1],y=N[3]-_*N[2],g=N[4]-b*N[3],d=N[5]-T*N[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,P=0;P<S;P++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(A=0;A<_;A++){for(M=0;M<w;M++){for(L=0;L<q;L++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}fL.exports=CUr});var pL=s((SHe,lL)=>{"use strict";function VUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C;for(w=r.shape,E=r.strides,L=e.strides,r.order==="row-major"?(_=w[6],b=w[5],T=w[4],S=w[3],O=w[2],N=w[1],I=w[0],n=E[6],u=E[5]-_*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-S*E[3],c=E[1]-O*E[2],l=E[0]-N*E[1],p=L[6],m=L[5]-_*L[6],y=L[4]-b*L[5],g=L[3]-T*L[4],d=L[2]-S*L[3],h=L[1]-O*L[2],q=L[0]-N*L[1]):(_=w[0],b=w[1],T=w[2],S=w[3],O=w[4],N=w[5],I=w[6],n=E[0],u=E[1]-_*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-S*E[3],c=E[5]-O*E[4],l=E[6]-N*E[5],p=L[0],m=L[1]-_*L[0],y=L[2]-b*L[1],g=L[3]-T*L[2],d=L[4]-S*L[3],h=L[5]-O*L[4],q=L[6]-N*L[5]),M=r.offset,A=e.offset,i=r.data,a=e.data,C=0;C<I;C++){for(R=0;R<N;R++){for(k=0;k<O;k++){for(G=0;G<S;G++){for(P=0;P<T;P++){for(j=0;j<b;j++){for(F=0;F<_;F++)a[A]=t(i[M]),M+=n,A+=p;M+=u,A+=m}M+=o,A+=y}M+=v,A+=g}M+=f,A+=d}M+=c,A+=h}M+=l,A+=q}}lL.exports=VUr});var gL=s((OHe,dL)=>{"use strict";function GUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x;for(b=r.shape,A=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],S=b[6],O=b[5],N=b[4],I=b[3],E=b[2],L=b[1],M=b[0],n=A[7],u=A[6]-T*A[7],o=A[5]-S*A[6],v=A[4]-O*A[5],f=A[3]-N*A[4],c=A[2]-I*A[3],l=A[1]-E*A[2],p=A[0]-L*A[1],m=F[7],y=F[6]-T*F[7],g=F[5]-S*F[6],d=F[4]-O*F[5],h=F[3]-N*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],_=F[0]-L*F[1]):(T=b[0],S=b[1],O=b[2],N=b[3],I=b[4],E=b[5],L=b[6],M=b[7],n=A[0],u=A[1]-T*A[0],o=A[2]-S*A[1],v=A[3]-O*A[2],f=A[4]-N*A[3],c=A[5]-I*A[4],l=A[6]-E*A[5],p=A[7]-L*A[6],m=F[0],y=F[1]-T*F[0],g=F[2]-S*F[1],d=F[3]-O*F[2],h=F[4]-N*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],_=F[7]-L*F[6]),j=r.offset,P=e.offset,i=r.data,a=e.data,x=0;x<M;x++){for(W=0;W<L;W++){for(U=0;U<E;U++){for(B=0;B<I;B++){for(C=0;C<N;C++){for(R=0;R<O;R++){for(k=0;k<S;k++){for(G=0;G<T;G++)a[P]=t(i[j]),j+=n,P+=m;j+=u,P+=y}j+=o,P+=g}j+=v,P+=d}j+=f,P+=h}j+=c,P+=q}j+=l,P+=w}j+=p,P+=_}}dL.exports=GUr});var yL=s((_He,mL)=>{"use strict";function UUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X;for(S=r.shape,P=r.strides,G=e.strides,r.order==="row-major"?(O=S[8],N=S[7],I=S[6],E=S[5],L=S[4],M=S[3],A=S[2],F=S[1],j=S[0],n=P[8],u=P[7]-O*P[8],o=P[6]-N*P[7],v=P[5]-I*P[6],f=P[4]-E*P[5],c=P[3]-L*P[4],l=P[2]-M*P[3],p=P[1]-A*P[2],m=P[0]-F*P[1],y=G[8],g=G[7]-O*G[8],d=G[6]-N*G[7],h=G[5]-I*G[6],q=G[4]-E*G[5],w=G[3]-L*G[4],_=G[2]-M*G[3],b=G[1]-A*G[2],T=G[0]-F*G[1]):(O=S[0],N=S[1],I=S[2],E=S[3],L=S[4],M=S[5],A=S[6],F=S[7],j=S[8],n=P[0],u=P[1]-O*P[0],o=P[2]-N*P[1],v=P[3]-I*P[2],f=P[4]-E*P[3],c=P[5]-L*P[4],l=P[6]-M*P[5],p=P[7]-A*P[6],m=P[8]-F*P[7],y=G[0],g=G[1]-O*G[0],d=G[2]-N*G[1],h=G[3]-I*G[2],q=G[4]-E*G[3],w=G[5]-L*G[4],_=G[6]-M*G[5],b=G[7]-A*G[6],T=G[8]-F*G[7]),k=r.offset,R=e.offset,i=r.data,a=e.data,X=0;X<j;X++){for(Q=0;Q<F;Q++){for($=0;$<A;$++){for(Y=0;Y<M;Y++){for(x=0;x<L;x++){for(W=0;W<E;W++){for(U=0;U<I;U++){for(B=0;B<N;B++){for(C=0;C<O;C++)a[R]=t(i[k]),k+=n,R+=y;k+=u,R+=g}k+=o,R+=d}k+=v,R+=h}k+=f,R+=q}k+=c,R+=w}k+=l,R+=_}k+=p,R+=b}k+=m,R+=T}}mL.exports=UUr});var qL=s((AHe,hL)=>{"use strict";function DUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L,M,A,F,j,P,G,k,R,C,B,U,W,x,Y,$,Q,X,J,Z,er,ur;for(N=r.shape,R=r.strides,C=e.strides,r.order==="row-major"?(I=N[9],E=N[8],L=N[7],M=N[6],A=N[5],F=N[4],j=N[3],P=N[2],G=N[1],k=N[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-L*R[7],f=R[5]-M*R[6],c=R[4]-A*R[5],l=R[3]-F*R[4],p=R[2]-j*R[3],m=R[1]-P*R[2],y=R[0]-G*R[1],g=C[9],d=C[8]-I*C[9],h=C[7]-E*C[8],q=C[6]-L*C[7],w=C[5]-M*C[6],_=C[4]-A*C[5],b=C[3]-F*C[4],T=C[2]-j*C[3],S=C[1]-P*C[2],O=C[0]-G*C[1]):(I=N[0],E=N[1],L=N[2],M=N[3],A=N[4],F=N[5],j=N[6],P=N[7],G=N[8],k=N[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-L*R[2],f=R[4]-M*R[3],c=R[5]-A*R[4],l=R[6]-F*R[5],p=R[7]-j*R[6],m=R[8]-P*R[7],y=R[9]-G*R[8],g=C[0],d=C[1]-I*C[0],h=C[2]-E*C[1],q=C[3]-L*C[2],w=C[4]-M*C[3],_=C[5]-A*C[4],b=C[6]-F*C[5],T=C[7]-j*C[6],S=C[8]-P*C[7],O=C[9]-G*C[8]),B=r.offset,U=e.offset,i=r.data,a=e.data,ur=0;ur<k;ur++){for(er=0;er<G;er++){for(Z=0;Z<P;Z++){for(J=0;J<j;J++){for(X=0;X<F;X++){for(Q=0;Q<A;Q++){for($=0;$<M;$++){for(Y=0;Y<L;Y++){for(x=0;x<E;x++){for(W=0;W<I;W++)a[U]=t(i[B]),B+=n,U+=g;B+=u,U+=d}B+=o,U+=h}B+=v,U+=q}B+=f,U+=w}B+=c,U+=_}B+=l,U+=b}B+=p,U+=T}B+=m,U+=S}B+=y,U+=O}}hL.exports=DUr});var NL=s((THe,EL)=>{"use strict";var zUr=lt(),bL=w3(),wL="throw";function HUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=zUr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=bL(v,f,l,n,g,wL),y=bL(v,c,p,u,g,wL),a[y]=t(i[m])}EL.exports=HUr});var IL=s((IHe,TL)=>{"use strict";var SL=h3(),OL=vR(),_L=mR(),WUr=DR(),xUr=HR(),XUr=xR(),JUr=JR(),YUr=$R(),$Ur=QR(),ZUr=rP(),QUr=tP(),KUr=aP(),rDr=sP(),eDr=oP(),tDr=fP(),iDr=lP(),aDr=dP(),nDr=mP(),sDr=hP(),uDr=bP(),oDr=EP(),vDr=SP(),fDr=_P(),cDr=TP(),lDr=RP(),pDr=LP(),dDr=jP(),gDr=BP(),mDr=CP(),yDr=GP(),hDr=DP(),qDr=HP(),bDr=ZP(),wDr=KP(),EDr=eL(),NDr=iL(),SDr=nL(),ODr=uL(),_Dr=vL(),ADr=cL(),TDr=pL(),IDr=gL(),RDr=yL(),PDr=qL(),LDr=NL(),Za=[wDr,EDr,NDr,SDr,ODr,_Dr,ADr,TDr,IDr,RDr,PDr],e0=[vDr,fDr,cDr,lDr,pDr,dDr,gDr,mDr,yDr,hDr,qDr],FDr=[rDr,eDr,tDr,iDr,aDr,nDr,sDr,uDr,oDr],jDr=[WUr,xUr,XUr,JUr,YUr,$Ur,ZUr,QUr,KUr],AL=Za.length-1;function MDr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=_L(r[0]),d=_L(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?e0[t](g,d,e):Za[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?e0[t](g,d,e):Za[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?e0[1](g,d,e):Za[1](g,d,e)}if(o=SL(c),v=SL(l),o!==0&&v!==0&&g.order===d.order){if(i=OL(n,c,g.offset),a=OL(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?e0[1](g,d,e):Za[1](g,d,e);if(t<=AL)return g.accessorProtocol||d.accessorProtocol?e0[t](g,d,e):Za[t](g,d,e)}if(t<=AL)return g.accessorProtocol||d.accessorProtocol?jDr[t-2](g,d,e):FDr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return bDr(g,d,e);LDr(g,d,e)}}TL.exports=MDr});var PL=s((RHe,RL)=>{"use strict";var BDr=IL();RL.exports=BDr});var FL=s((PHe,LL)=>{"use strict";var kDr=PL(),CDr=V(),VDr=Us();function GDr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(CDr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return kDr([i,a],VDr(e,t)),a}LL.exports=GDr});var ML=s((LHe,jL)=>{"use strict";var UDr=FL();jL.exports=UDr});var kL=s((FHe,BL)=>{"use strict";var DDr=Qr(),zDr=ML();function HDr(r){return DDr(r,"unary",zDr),r}BL.exports=HDr});var VL=s((jHe,CL)=>{"use strict";var Nt=Qr(),WDr=PI(),xDr=Us(),XDr=d3(),JDr=y3(),YDr=UI(),$Dr=WI(),ZDr=YI(),QDr=KI(),KDr=kL();function rzr(r){return Nt(r,"binary",WDr),Nt(r,"d_d",xDr),Nt(r,"dd_d",XDr),Nt(r,"ddd_d",JDr),Nt(r,"dddd_d",YDr),Nt(r,"ddddd_d",$Dr),Nt(r,"ternary",ZDr),Nt(r,"unary",QDr),Nt(r,"ndarray",KDr({})),r}CL.exports=rzr});var UL=s((MHe,GL)=>{"use strict";function ezr(r){return r*r}GL.exports=ezr});var Hs=s((BHe,DL)=>{"use strict";var tzr=UL();DL.exports=tzr});var Ws=s((kHe,zL)=>{"use strict";var izr=.7853981633974483;zL.exports=izr});var WL=s((CHe,HL)=>{"use strict";function azr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}HL.exports=azr});var XL=s((VHe,xL)=>{"use strict";function nzr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}xL.exports=nzr});var $L=s((GHe,YL)=>{"use strict";var szr=H(),uzr=Rr(),JL=Ws(),ozr=WL(),vzr=XL(),fzr=6123233995736766e-32;function czr(r){var e,t,i,a,n;if(szr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*vzr(t),t=uzr(t+t),n=JL-t,t=t*a-fzr,n-=t,n+=JL;else{if(i<1e-8)return r;t=i*i,n=t*ozr(t),n=i*n+i}return e?-n:n}YL.exports=czr});var va=s((UHe,ZL)=>{"use strict";var lzr=$L();ZL.exports=lzr});var eF=s((DHe,rF)=>{"use strict";var pzr=H(),QL=va(),dzr=Rr(),KL=Ws(),gzr=6123233995736766e-32;function mzr(r){var e;return pzr(r)?NaN:r<-1||r>1?NaN:r>.5?2*QL(dzr(.5-.5*r)):(e=KL-QL(r),e+=gzr,e+=KL,e)}rF.exports=mzr});var t0=s((zHe,tF)=>{"use strict";var yzr=eF();tF.exports=yzr});var aF=s((HHe,iF)=>{"use strict";function hzr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}iF.exports=hzr});var vF=s((WHe,oF)=>{"use strict";var qzr=H(),nF=ae(),sF=wt(),bzr=pr(),wzr=Ir(),uF=ct(),Ezr=aF(),E3=.6931471803691238,N3=19082149292705877e-26,Nzr=.41421356237309503,Szr=-.2928932188134525,Ozr=1862645149230957e-24,_zr=5551115123125783e-32,Azr=9007199254740992,Tzr=.6666666666666666;function Izr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||qzr(r))return NaN;if(r===-1)return wzr;if(r===bzr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Nzr){if(i<Ozr)return i<_zr?r:r-r*r*.5;r>Szr&&(c=0,a=r,t=1)}return c!==0&&(i<Azr?(f=1+r,t=nF(f),c=(t>>20)-uF,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=nF(f),c=(t>>20)-uF,n=0),t&=1048575,t<434334?f=sF(f,t|1072693248):(c+=1,f=sF(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*N3,c*E3+n):(v=e*(1-Tzr*a),c*E3-(v-(c*N3+n)-a)):(u=a/(2+a),o=u*u,v=o*Ezr(o),c===0?a-(e-u*(e+v)):c*E3-(e-(u*(e+v)+(c*N3+n))-a))}oF.exports=Izr});var gi=s((xHe,fF)=>{"use strict";var Rzr=vF();fF.exports=Rzr});var lF=s((XHe,cF)=>{"use strict";function Pzr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}cF.exports=Pzr});var dF=s((JHe,pF)=>{"use strict";function Lzr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}pF.exports=Lzr});var hF=s((YHe,yF)=>{"use strict";var gF=ae(),Fzr=wt(),jzr=H(),Mzr=ct(),Bzr=Ir(),kzr=lF(),Czr=dF(),xs=.6931471803691238,Xs=19082149292705877e-26,Vzr=0x40000000000000,Gzr=.3333333333333333,mF=1048575,Uzr=2146435072,Dzr=1048576,zzr=1072693248;function Hzr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?Bzr:jzr(r)||r<0?NaN:(t=gF(r),n=0,t<Dzr&&(n-=54,r*=Vzr,t=gF(r)),t>=Uzr?r+r:(n+=(t>>20)-Mzr|0,t&=mF,v=t+614244&1048576|0,r=Fzr(r,t|v^zzr),n+=v>>20|0,o=r-1,(mF&2+t)<3?o===0?n===0?0:n*xs+n*Xs:(u=o*o*(.5-Gzr*o),n===0?o-u:n*xs-(u-n*Xs-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*kzr(l),i=p*Czr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*xs-(e-(c*(e+u)+n*Xs)-o)):n===0?o-c*(o-u):n*xs-(c*(o-u)-n*Xs-o))))}yF.exports=Hzr});var wr=s(($He,qF)=>{"use strict";var Wzr=hF();qF.exports=Wzr});var NF=s((ZHe,EF)=>{"use strict";var xzr=H(),Xzr=gi(),bF=Rr(),Jzr=Yn(),wF=wr(),Yzr=1<<28;function $zr(r){var e;return xzr(r)||r<1?NaN:r===1?0:r>=Yzr?wF(r)+Jzr:r>2?wF(2*r-1/(r+bF(r*r-1))):(e=r-1,Xzr(e+bF(2*e+e*e)))}EF.exports=$zr});var OF=s((QHe,SF)=>{"use strict";var Zzr=NF();SF.exports=Zzr});var Qa=s((KHe,_F)=>{"use strict";var Qzr=1.5707963267948966;_F.exports=Qzr});var TF=s((rWe,AF)=>{"use strict";function Kzr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}AF.exports=Kzr});var RF=s((eWe,IF)=>{"use strict";function rHr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}IF.exports=rHr});var FF=s((tWe,LF)=>{"use strict";var eHr=H(),tHr=pr(),S3=Qa(),iHr=Ws(),aHr=Ir(),nHr=TF(),sHr=RF(),PF=6123233995736766e-32,uHr=2.414213562373095;function oHr(r){var e,t,i,a;return eHr(r)||r===0?r:r===tHr?S3:r===aHr?-S3:(r<0&&(t=!0,r=-r),e=0,r>uHr?(i=S3,e=1,r=-(1/r)):r<=.66?i=0:(i=iHr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*nHr(a)/sHr(a),a=r*a+r,e===2?a+=.5*PF:e===1&&(a+=PF),i+=a,t?-i:i)}LF.exports=oHr});var Js=s((iWe,jF)=>{"use strict";var vHr=FF();jF.exports=vHr});var BF=s((aWe,MF)=>{"use strict";var fHr=Js();function cHr(r){return fHr(1/r)}MF.exports=cHr});var CF=s((nWe,kF)=>{"use strict";var lHr=BF();kF.exports=lHr});var GF=s((sWe,VF)=>{"use strict";var pHr=57.29577951308232;function dHr(r){return r*pHr}VF.exports=dHr});var DF=s((uWe,UF)=>{"use strict";var gHr=GF();UF.exports=gHr});var HF=s((oWe,zF)=>{"use strict";function mHr(r){return r!==r}zF.exports=mHr});var xF=s((vWe,WF)=>{"use strict";var yHr=HF();WF.exports=yHr});var JF=s((fWe,XF)=>{"use strict";var hHr=Number.POSITIVE_INFINITY;XF.exports=hHr});var $F=s((cWe,YF)=>{"use strict";var qHr=1.5707963267948966;YF.exports=qHr});var QF=s((lWe,ZF)=>{"use strict";var bHr=.7853981633974483;ZF.exports=bHr});var rj=s((pWe,KF)=>{"use strict";KF.exports=Number});var tj=s((dWe,ej)=>{"use strict";var wHr=rj();ej.exports=wHr});var aj=s((gWe,ij)=>{"use strict";var EHr=tj(),NHr=EHr.NEGATIVE_INFINITY;ij.exports=NHr});var sj=s((mWe,nj)=>{"use strict";function SHr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}nj.exports=SHr});var oj=s((yWe,uj)=>{"use strict";function OHr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}uj.exports=OHr});var cj=s((hWe,fj)=>{"use strict";var _Hr=xF(),AHr=JF(),O3=$F(),THr=QF(),IHr=aj(),RHr=sj(),PHr=oj(),vj=6123233995736766e-32,LHr=2.414213562373095;function FHr(r){var e,t,i,a;return _Hr(r)||r===0?r:r===AHr?O3:r===IHr?-O3:(r<0&&(t=!0,r=-r),e=0,r>LHr?(i=O3,e=1,r=-(1/r)):r<=.66?i=0:(i=THr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*RHr(a)/PHr(a),a=r*a+r,e===2?a+=.5*vj:e===1&&(a+=vj),i+=a,t?-i:i)}fj.exports=FHr});var pj=s((qWe,lj)=>{"use strict";var jHr=cj();lj.exports=jHr});var gj=s((bWe,dj)=>{"use strict";var MHr=pj();function BHr(r){return MHr(1/r)}dj.exports=BHr});var yj=s((wWe,mj)=>{"use strict";var kHr=gj();mj.exports=kHr});var qj=s((EWe,hj)=>{"use strict";var CHr=DF(),VHr=yj();function GHr(r){var e=VHr(r);return CHr(e)}hj.exports=GHr});var wj=s((NWe,bj)=>{"use strict";var UHr=qj();bj.exports=UHr});var Nj=s((SWe,Ej)=>{"use strict";var DHr=va();function zHr(r){return DHr(1+r)}Ej.exports=zHr});var Oj=s((OWe,Sj)=>{"use strict";var HHr=Nj();Sj.exports=HHr});var Aj=s((_We,_j)=>{"use strict";var WHr=va();function xHr(r){return WHr(1-r)}_j.exports=xHr});var Ij=s((AWe,Tj)=>{"use strict";var XHr=Aj();Tj.exports=XHr});var Pj=s((TWe,Rj)=>{"use strict";var JHr=va();function YHr(r){return JHr(1/r)}Rj.exports=YHr});var Fj=s((IWe,Lj)=>{"use strict";var $Hr=Pj();Lj.exports=$Hr});var kj=s((RWe,Bj)=>{"use strict";var ZHr=Ae(),QHr=H(),KHr=gi(),jj=Rr(),rWr=Yn(),Mj=wr(),eWr=1/(1<<28),tWr=1<<28;function iWr(r){var e,t,i;return QHr(r)||ZHr(r)?r:(r<0&&(r=-r,e=!0),r<eWr?i=r:r>tWr?i=Mj(r)+rWr:r>2?i=Mj(2*r+1/(jj(r*r+1)+r)):(t=r*r,i=KHr(r+t/(1+jj(1+t)))),e?-i:i)}Bj.exports=iWr});var _3=s((PWe,Cj)=>{"use strict";var aWr=kj();Cj.exports=aWr});var Gj=s((LWe,Vj)=>{"use strict";var nWr=_3();function sWr(r){return nWr(1/r)}Vj.exports=sWr});var Dj=s((FWe,Uj)=>{"use strict";var uWr=Gj();Uj.exports=uWr});var Hj=s((jWe,zj)=>{"use strict";var oWr=t0(),vWr=Rr();function fWr(r){return 2*oWr(vWr(r))}zj.exports=fWr});var xj=s((MWe,Wj)=>{"use strict";var cWr=Hj();Wj.exports=cWr});var Jj=s((BWe,Xj)=>{"use strict";var lWr=va(),pWr=Rr();function dWr(r){return 2*lWr(pWr(r))}Xj.exports=dWr});var $j=s((kWe,Yj)=>{"use strict";var gWr=Jj();Yj.exports=gWr});var Kj=s((CWe,Qj)=>{"use strict";var mWr=H(),Zj=gi(),yWr=pr(),hWr=Ir(),qWr=1/(1<<28);function bWr(r){var e,t;return mWr(r)||r<-1||r>1?NaN:r===1?yWr:r===-1?hWr:(r<0&&(e=!0,r=-r),r<qWr?e?-r:r:(r<.5?(t=r+r,t=.5*Zj(t+t*r/(1-r))):t=.5*Zj((r+r)/(1-r)),e?-t:t))}Qj.exports=bWr});var eM=s((VWe,rM)=>{"use strict";var wWr=Kj();rM.exports=wWr});var iM=s((GWe,tM)=>{"use strict";var EWr=t0();function NWr(r){return EWr(1+r)}tM.exports=NWr});var nM=s((UWe,aM)=>{"use strict";var SWr=iM();aM.exports=SWr});var uM=s((DWe,sM)=>{"use strict";var OWr=t0();function _Wr(r){return OWr(1-r)}sM.exports=_Wr});var vM=s((zWe,oM)=>{"use strict";var AWr=uM();oM.exports=AWr});var cM=s((HWe,fM)=>{"use strict";var TWr=Math.floor;fM.exports=TWr});var pM=s((WWe,lM)=>{"use strict";var IWr=cM();lM.exports=IWr});var gM=s((xWe,dM)=>{"use strict";var RWr=pM();function PWr(r){return RWr(r)===r&&r>=0}dM.exports=PWr});var A3=s((XWe,mM)=>{"use strict";var LWr=gM();mM.exports=LWr});var yM=s((JWe,FWr)=>{FWr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var qM=s((YWe,hM)=>{"use strict";var jWr=A3(),MWr=H(),BWr=Rs(),kWr=Ir(),CWr=pr(),VWr=yM(),GWr=258;function UWr(r){return MWr(r)||!jWr(r)?NaN:BWr(r)?0:r>GWr?r/2&1?CWr:kWr:VWr[r/2]}hM.exports=UWr});var wM=s(($We,bM)=>{"use strict";var DWr=qM();bM.exports=DWr});var NM=s((ZWe,EM)=>{"use strict";var zWr=Ye(),T3;zWr===!0?T3=0:T3=1;EM.exports=T3});var _M=s((QWe,OM)=>{"use strict";var HWr=me(),WWr=ge(),xWr=NM(),SM=new WWr(1),XWr=new HWr(SM.buffer);function JWr(r){return SM[0]=r,XWr[xWr]}OM.exports=JWr});var TM=s((KWe,AM)=>{"use strict";var YWr=_M();AM.exports=YWr});var FM=s((rxe,LM)=>{"use strict";var $Wr=Ur(),Ys=$a(),Qs=si(),RM=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ZWr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],I3=16777216,R3=5960464477539063e-23,$s=Qs(20),IM=Qs(20),Zs=Qs(20),he=Qs(20);function PM(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=R3*h|0,he[m]=h-I3*c|0,h=i[d-1]+c,d-=1;if(h=Ys(h,a),h-=8*$Wr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=Ys(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=RM[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,PM(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=Ys(h,-a),h>=I3?(c=R3*h|0,he[t]=h-I3*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=Ys(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=R3;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=ZWr[y]*i[m+y];Zs[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Zs[m];for(l===0?e[0]=c:e[0]=-c,c=Zs[0]-c,m=1;m<=t;m++)c+=Zs[m];return l===0?e[1]=c:e[1]=-c,g&7}function QWr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?$s[c]=0:$s[c]=RM[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*$s[o+(c-l)];IM[c]=a}return v=n,PM(r,e,v,IM,f,n,u,o,$s)}LM.exports=QWr});var MM=s((exe,jM)=>{"use strict";var KWr=Math.round;jM.exports=KWr});var Ks=s((txe,BM)=>{"use strict";var rxr=MM();BM.exports=rxr});var GM=s((ixe,VM)=>{"use strict";var exr=Ks(),kM=ae(),txr=.6366197723675814,ixr=1.5707963267341256,axr=6077100506506192e-26,nxr=6077100506303966e-26,sxr=20222662487959506e-37,uxr=20222662487111665e-37,oxr=84784276603689e-45,CM=2047;function vxr(r,e,t){var i,a,n,u,o,v,f;return a=exr(r*txr),u=r-a*ixr,o=a*axr,f=e>>20|0,t[0]=u-o,i=kM(t[0]),v=f-(i>>20&CM),v>16&&(n=u,o=a*nxr,u=n-o,o=a*sxr-(n-u-o),t[0]=u-o,i=kM(t[0]),v=f-(i>>20&CM),v>49&&(n=u,o=a*uxr,u=n-o,o=a*oxr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}VM.exports=vxr});var DM=s((axe,UM)=>{"use strict";var fxr=ft(),cxr=Jn(),lxr=ks(),pxr=ae(),dxr=TM(),gxr=Ya(),mxr=FM(),ru=GM(),yxr=0,hxr=16777216,mi=1.5707963267341256,fa=6077100506506192e-26,eu=2*fa,tu=3*fa,iu=4*fa,qxr=598523,bxr=1072243195,wxr=1073928572,Exr=1074752122,Nxr=1074977148,Sxr=1075183036,Oxr=1075388923,_xr=1075594811,Axr=1094263291,i0=[0,0,0],a0=[0,0];function Txr(r,e){var t,i,a,n,u,o,v,f;if(a=pxr(r),n=a&fxr|0,n<=bxr)return e[0]=r,e[1]=0,0;if(n<=Exr)return(n&lxr)===qxr?ru(r,n,e):n<=wxr?r>0?(f=r-mi,e[0]=f-fa,e[1]=f-e[0]-fa,1):(f=r+mi,e[0]=f+fa,e[1]=f-e[0]+fa,-1):r>0?(f=r-2*mi,e[0]=f-eu,e[1]=f-e[0]-eu,2):(f=r+2*mi,e[0]=f+eu,e[1]=f-e[0]+eu,-2);if(n<=_xr)return n<=Sxr?n===Nxr?ru(r,n,e):r>0?(f=r-3*mi,e[0]=f-tu,e[1]=f-e[0]-tu,3):(f=r+3*mi,e[0]=f+tu,e[1]=f-e[0]+tu,-3):n===Oxr?ru(r,n,e):r>0?(f=r-4*mi,e[0]=f-iu,e[1]=f-e[0]-iu,4):(f=r+4*mi,e[0]=f+iu,e[1]=f-e[0]+iu,-4);if(n<Axr)return ru(r,n,e);if(n>=cxr)return e[0]=NaN,e[1]=NaN,0;for(t=dxr(r),i=(n>>20)-1046,f=gxr(n-(i<<20|0),t),o=0;o<2;o++)i0[o]=f|0,f=(f-i0[o])*hxr;for(i0[2]=f,u=3;i0[u-1]===yxr;)u-=1;return v=mxr(i0,a0,i,u,1),r<0?(e[0]=-a0[0],e[1]=-a0[1],-v):(e[0]=a0[0],e[1]=a0[1],v)}UM.exports=Txr});var n0=s((nxe,zM)=>{"use strict";var Ixr=DM();zM.exports=Ixr});var xM=s((sxe,WM)=>{"use strict";var HM=-.16666666666666632,Rxr=.00833333333332249,Pxr=-.0001984126982985795,Lxr=27557313707070068e-22,Fxr=-25050760253406863e-24,jxr=158969099521155e-24,Mxr=.0416666666666666,Bxr=-.001388888888887411,kxr=2480158728947673e-20,Cxr=-27557314351390663e-23,Vxr=2087572321298175e-24,Gxr=-11359647557788195e-27;function Uxr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=Rxr+f*(Pxr+f*Lxr)+f*v*(Fxr+f*jxr),o=f*r,e===0?t[a]=r+o*(HM+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*HM),u=f*(Mxr+f*(Bxr+f*kxr)),u+=v*v*(Cxr+f*(Vxr+f*Gxr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}WM.exports=Uxr});var L3=s((uxe,JM)=>{"use strict";var Dxr=ft(),zxr=Jn(),Hxr=ae(),Wxr=n0(),XM=xM(),xxr=1072243195,Xxr=1044381696,P3=[0,0];function Jxr(r,e,t,i){var a,n;if(a=Hxr(r),a&=Dxr,a<=xxr)return a<Xxr&&(r|0)===0&&(e[i]=r,e[i+t]=0),XM(r,0,e,t,i);if(a>=zxr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=Wxr(r,P3),XM(P3[0],P3[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}JM.exports=Jxr});var $M=s((oxe,YM)=>{"use strict";var Yxr=L3();function $xr(r){return Yxr(r,[0,0],1,0)}YM.exports=$xr});var s0=s((vxe,QM)=>{"use strict";var Zxr=D(),ZM=$M(),Qxr=L3();Zxr(ZM,"assign",Qxr);QM.exports=ZM});var rB=s((fxe,KM)=>{"use strict";function Kxr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}KM.exports=Kxr});var tB=s((cxe,eB)=>{"use strict";function rXr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}eB.exports=rXr});var aB=s((lxe,iB)=>{"use strict";function eXr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}iB.exports=eXr});var sB=s((pxe,nB)=>{"use strict";function tXr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}nB.exports=tXr});var oB=s((dxe,uB)=>{"use strict";var iXr=Rr(),aXr=s0().assign,nXr=pr(),sXr=rB(),uXr=tB(),oXr=aB(),vXr=sB(),fXr=.5641895835477563,cXr=2.404825557695773,lXr=5.520078110286311,pXr=616,dXr=-.0014244423042272315,gXr=1413,mXr=.0005468602863106496,u0=[0,0];function yXr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===nXr?0:r===0?1:r<=4?(n=r*r,a=sXr(n),u=(r+cXr)*(r-pXr/256-dXr),u*a):r<=8?(n=1-r*r/64,a=uXr(n),u=(r+lXr)*(r-gXr/256-mXr),u*a):(n=8/r,i=n*n,e=oXr(i),t=vXr(i),u=fXr/iXr(r),aXr(r,u0,1,0),u*(e*(u0[1]+u0[0])-n*t*(u0[0]-u0[1])))}uB.exports=yXr});var F3=s((gxe,vB)=>{"use strict";var hXr=oB();vB.exports=hXr});var au=s((mxe,fB)=>{"use strict";var qXr=1.772453850905516;fB.exports=qXr});var lB=s((yxe,cB)=>{"use strict";function bXr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}cB.exports=bXr});var dB=s((hxe,pB)=>{"use strict";function wXr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}pB.exports=wXr});var mB=s((qxe,gB)=>{"use strict";function EXr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}gB.exports=EXr});var hB=s((bxe,yB)=>{"use strict";function NXr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}yB.exports=NXr});var bB=s((wxe,qB)=>{"use strict";var SXr=Rr(),OXr=Dr(),_Xr=s0().assign,AXr=pr(),TXr=au(),IXr=lB(),RXr=dB(),PXr=mB(),LXr=hB(),FXr=3.8317059702075125,jXr=7.015586669815619,MXr=981,BXr=-.0003252797924876844,kXr=1796,CXr=-38330184381246464e-21,o0=[0,0];function VXr(r){var e,t,i,a,n,u,o,v;return v=OXr(r),r===0||v===AXr?0:(v<=4?(u=r*r,n=IXr(u),o=v*(v+FXr)*(v-MXr/256-BXr),e=o*n):v<=8?(u=r*r,n=RXr(u),o=v*(v+jXr)*(v-kXr/256-CXr),e=o*n):(u=8/v,a=u*u,t=PXr(a),i=LXr(a),o=1/(SXr(v)*TXr),_Xr(v,o0,1,0),e=o*(t*(o0[0]-o0[1])+u*i*(o0[0]+o0[1]))),r<0&&(e*=-1),e)}qB.exports=VXr});var j3=s((Exe,wB)=>{"use strict";var GXr=bB();wB.exports=GXr});var Ee=s((Nxe,EB)=>{"use strict";var UXr=3.141592653589793;EB.exports=UXr});var SB=s((Sxe,NB)=>{"use strict";function DXr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}NB.exports=DXr});var _B=s((Oxe,OB)=>{"use strict";function zXr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}OB.exports=zXr});var TB=s((_xe,AB)=>{"use strict";function HXr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}AB.exports=HXr});var RB=s((Axe,IB)=>{"use strict";function WXr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}IB.exports=WXr});var LB=s((Txe,PB)=>{"use strict";function xXr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}PB.exports=xXr});var kB=s((Ixe,BB)=>{"use strict";var M3=wr(),XXr=Rr(),JXr=Ee(),YXr=au(),$Xr=Ir(),ZXr=pr(),QXr=s0().assign,B3=F3(),KXr=SB(),rJr=_B(),eJr=TB(),tJr=RB(),iJr=LB(),aJr=1/YXr,k3=2/JXr,FB=.8935769662791675,jB=3.957678419314858,MB=7.086051060301773,nJr=228,sJr=.0029519662791675214,uJr=1013,oJr=.0006471693148578684,vJr=1814,fJr=.00011356030177269763,v0=[0,0];function cJr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?$Xr:r===ZXr?0:r<=3?(n=r*r,u=M3(r/FB)*B3(r)*k3,a=KXr(n),o=(r+FB)*(r-nJr/256-sJr),u+o*a):r<=5.5?(n=r*r,u=M3(r/jB)*B3(r)*k3,a=rJr(n),o=(r+jB)*(r-uJr/256-oJr),u+o*a):r<=8?(n=r*r,u=M3(r/MB)*B3(r)*k3,a=eJr(n),o=(r+MB)*(r-vJr/256-fJr),u+o*a):(n=8/r,i=n*n,e=tJr(i),t=iJr(i),o=aJr/XXr(r),QXr(r,v0,1,0),o*(e*(v0[0]-v0[1])+n*t*(v0[1]+v0[0])))}BB.exports=cJr});var VB=s((Rxe,CB)=>{"use strict";var lJr=kB();CB.exports=lJr});var UB=s((Pxe,GB)=>{"use strict";function pJr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}GB.exports=pJr});var zB=s((Lxe,DB)=>{"use strict";function dJr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}DB.exports=dJr});var WB=s((Fxe,HB)=>{"use strict";function gJr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}HB.exports=gJr});var XB=s((jxe,xB)=>{"use strict";function mJr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}xB.exports=mJr});var rk=s((Mxe,KB)=>{"use strict";var JB=wr(),yJr=Rr(),hJr=Ee(),qJr=au(),bJr=Ir(),wJr=pr(),EJr=s0().assign,YB=j3(),NJr=UB(),SJr=zB(),OJr=WB(),_Jr=XB(),AJr=1/qJr,$B=2/hJr,ZB=2.197141326031017,QB=5.429681040794135,TJr=562,IJr=.001828826031017035,RJr=1390,PJr=-6459205864867228e-21,f0=[0,0];function LJr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?bJr:r===wJr?0:r<=4?(n=r*r,u=JB(r/ZB)*YB(r)*$B,a=NJr(n),o=(r+ZB)*(r-TJr/256-IJr)/r,u+o*a):r<=8?(n=r*r,u=JB(r/QB)*YB(r)*$B,a=SJr(n),o=(r+QB)*(r-RJr/256-PJr)/r,u+o*a):(n=8/r,i=n*n,e=OJr(i),t=_Jr(i),o=AJr/yJr(r),EJr(r,f0,1,0),o*(n*t*(f0[0]-f0[1])-e*(f0[0]+f0[1])))}KB.exports=LJr});var tk=s((Bxe,ek)=>{"use strict";var FJr=rk();ek.exports=FJr});var ak=s((kxe,ik)=>{"use strict";function jJr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}ik.exports=jJr});var sk=s((Cxe,nk)=>{"use strict";function MJr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}nk.exports=MJr});var ok=s((Vxe,uk)=>{"use strict";var BJr=ak(),kJr=sk();function CJr(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*BJr(n),i+=a*a*kJr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}uk.exports=CJr});var C3=s((Gxe,vk)=>{"use strict";var VJr=ok();vk.exports=VJr});var lk=s((Uxe,ck)=>{"use strict";var fk=-.16666666666666632,GJr=.00833333333332249,UJr=-.0001984126982985795,DJr=27557313707070068e-22,zJr=-25050760253406863e-24,HJr=158969099521155e-24;function WJr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=GJr+n*(UJr+n*DJr)+n*a*(zJr+n*HJr),i=n*r,e===0?r+i*(fk+n*t):r-(n*(.5*e-i*t)-e-i*fk)}ck.exports=WJr});var V3=s((Dxe,pk)=>{"use strict";var xJr=lk();pk.exports=xJr});var mk=s((zxe,gk)=>{"use strict";var XJr=ae(),G3=C3(),dk=V3(),JJr=n0(),St=[0,0],YJr=2147483647,$Jr=1072243195,ZJr=1044381696,QJr=2146435072;function KJr(r){var e,t;if(e=XJr(r),e&=YJr,e<=$Jr)return e<ZJr?1:G3(r,0);if(e>=QJr)return NaN;switch(t=JJr(r,St),t&3){case 0:return G3(St[0],St[1]);case 1:return-dk(St[0],St[1]);case 2:return-G3(St[0],St[1]);default:return dk(St[0],St[1])}}gk.exports=KJr});var Ot=s((Hxe,yk)=>{"use strict";var rYr=mk();yk.exports=rYr});var bk=s((Wxe,qk)=>{"use strict";var eYr=ft(),tYr=Jn(),iYr=ae(),hk=C3(),U3=V3(),aYr=n0(),nYr=1072243195,sYr=1045430272,_t=[0,0];function uYr(r){var e,t;if(e=iYr(r),e&=eYr,e<=nYr)return e<sYr?r:U3(r,0);if(e>=tYr)return NaN;switch(t=aYr(r,_t),t&3){case 0:return U3(_t[0],_t[1]);case 1:return hk(_t[0],_t[1]);case 2:return-U3(_t[0],_t[1]);default:return-hk(_t[0],_t[1])}}qk.exports=uYr});var pt=s((xxe,wk)=>{"use strict";var oYr=bk();wk.exports=oYr});var Sk=s((Xxe,Nk)=>{"use strict";var vYr=H(),fYr=Ae(),cYr=Dr(),Ek=Ot(),lYr=pt(),pYr=Ur(),D3=Ee(),dYr=oa(),gYr=dYr+1;function mYr(r){var e,t,i,a;return vYr(r)?NaN:fYr(r)?NaN:(e=cYr(r),e>gYr?1:(t=pYr(e),i=e-t,i===.5?0:(i<.25?a=Ek(D3*i):i<.75?(i=.5-i,a=lYr(D3*i)):(i=1-i,a=-Ek(D3*i)),t%2===1?-a:a)))}Nk.exports=mYr});var _k=s((Jxe,Ok)=>{"use strict";var yYr=Sk();Ok.exports=yYr});var Tk=s((Yxe,Ak)=>{"use strict";var hYr=1.618033988749895;Ak.exports=hYr});var Rk=s(($xe,Ik)=>{"use strict";var qYr=H(),bYr=_k(),wYr=Gr(),EYr=Tk(),NYr=pr(),SYr=Ir(),OYr=2.23606797749979;function _Yr(r){var e,t;return qYr(r)||r===NYr||r===SYr?NaN:(e=wYr(EYr,r),t=bYr(r)/e,(e-t)/OYr)}Ik.exports=_Yr});var Lk=s((Zxe,Pk)=>{"use strict";var AYr=Rk();Pk.exports=AYr});var jk=s((Qxe,Fk)=>{"use strict";function TYr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}Fk.exports=TYr});var Ck=s((Kxe,kk)=>{"use strict";var IYr=o3(),RYr=r3(),Mk=ft(),H3=ae(),PYr=wt(),LYr=Ae(),Bk=Ya(),FYr=Ja(),jYr=H(),MYr=jk(),BYr=4294967295>>>0,kYr=3221225472>>>0,CYr=0x40000000000000,z3=2147483648>>>0,VYr=1>>>0,GYr=715094163>>>0,UYr=696219795>>>0,DYr=H3(IYr),ca=[0>>>0,0>>>0];function zYr(r){var e,t,i,a,n,u,o;return r===0||jYr(r)||LYr(r)?r:(t=H3(r)>>>0,e=(t&RYr)>>>0,t&=Mk,t<DYr?(u=CYr*r,i=(H3(u)&Mk)>>>0,i=(i/3>>>0)+UYr>>>0,u=Bk(e|i,0)):(u=0,i=(t/3>>>0)+GYr>>>0,u=PYr(u,e|i)),a=u*u*(u/r),u*=MYr(a),FYr.assign(u,ca,1,0),ca[1]&z3?(ca[0]+=VYr,ca[1]&=~z3):ca[1]|=z3,u=Bk(ca[0]&BYr,ca[1]&kYr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}kk.exports=zYr});var Gk=s((rXe,Vk)=>{"use strict";var HYr=Ck();Vk.exports=HYr});var Dk=s((eXe,Uk)=>{"use strict";var WYr=Math.ceil;Uk.exports=WYr});var Ka=s((tXe,zk)=>{"use strict";var xYr=Dk();zk.exports=xYr});var Wk=s((iXe,Hk)=>{"use strict";function XYr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}Hk.exports=XYr});var Xk=s((aXe,xk)=>{"use strict";function JYr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}xk.exports=JYr});var $k=s((nXe,Yk)=>{"use strict";var YYr=ae(),$Yr=Wk(),ZYr=Xk(),Jk=1048575,QYr=.3333333333333333;function KYr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=YYr(r),n=r-1,(Jk&2+a)<3?n===0?0:n*n*(QYr*n-.5):(u=n/(2+n),o=u*u,a&=Jk,c=a-398458|0,f=o*o,l=440401-a|0,t=f*$Yr(f),i=o*ZYr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}Yk.exports=KYr});var rC=s((sXe,Kk)=>{"use strict";var Zk=ae(),r$r=wt(),e$r=vt(),t$r=H(),i$r=ct(),a$r=Ir(),n$r=$k(),s$r=0x40000000000000,Qk=.4342944818781689,u$r=25082946711645275e-27,o$r=.30102999566361177,v$r=3694239077158931e-28,f$r=1048575,c$r=2146435072,l$r=1048576,p$r=1072693248;function d$r(r){var e,t,i,a,n,u,o,v;return t$r(r)||r<0?NaN:r===0?a$r:(t=Zk(r),u=0,t<l$r&&(u-=54,r*=s$r,t=Zk(r)),t>=c$r?r+r:(u+=(t>>20)-i$r|0,t&=f$r,n=t+614244&1048576|0,r=r$r(r,t|n^p$r),u+=n>>20|0,o=u,a=n$r(r),r-=1,e=e$r(r,0),i=r-e,v=o*v$r+(r+a)*u$r,v+=(i+a)*Qk+e*Qk,v+o*o$r))}Kk.exports=d$r});var tC=s((uXe,eC)=>{"use strict";var g$r=rC();eC.exports=g$r});var aC=s((oXe,iC)=>{"use strict";var m$r=H(),y$r=Ae(),h$r=Gr(),q$r=Ur(),b$r=Ka(),w$r=tC(),E$r=Zn(),N$r=Vs(),S$r=pr();function O$r(r){var e,t;return m$r(r)||y$r(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=w$r(r),e===-1?t=q$r(t):t=b$r(t),t<=N$r?e*0:t>E$r?S$r:e*h$r(10,t))}iC.exports=O$r});var sC=s((vXe,nC)=>{"use strict";var _$r=aC();nC.exports=_$r});var oC=s((fXe,uC)=>{"use strict";function A$r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}uC.exports=A$r});var fC=s((cXe,vC)=>{"use strict";function T$r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}vC.exports=T$r});var pC=s((lXe,lC)=>{"use strict";var I$r=ae(),R$r=oC(),P$r=fC(),cC=1048575,L$r=.3333333333333333;function F$r(r){var e,t,i,a,n,u,o,v,f,c,l;return a=I$r(r),n=r-1,(cC&2+a)<3?n===0?0:n*n*(L$r*n-.5):(u=n/(2+n),o=u*u,a&=cC,c=a-398458|0,f=o*o,l=440401-a|0,t=f*R$r(f),i=o*P$r(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}lC.exports=F$r});var mC=s((pXe,gC)=>{"use strict";var j$r=ae(),M$r=wt(),B$r=vt(),k$r=Ja(),C$r=H(),V$r=ft(),G$r=ks(),U$r=ct(),D$r=Ir(),z$r=pC(),H$r=0x40000000000000,dC=1.4426950407214463,W$r=16751713164886512e-26,x$r=2146435072,X$r=1048576,J$r=1072693248,W3=[0,0];function Y$r(r){var e,t,i,a,n,u,o;if(C$r(r)||r<0)return NaN;if(k$r.assign(r,W3,1,0),i=W3[0],a=W3[1],o=0,i<X$r){if((i&V$r|a)===0)return D$r;o-=54,r*=H$r,i=j$r(r)}return i>=x$r?r+r:(o+=(i>>20)-U$r|0,i&=G$r,u=i+614244&1048576|0,r=M$r(r,i|u^J$r),o+=u>>20|0,n=z$r(r),r-=1,e=B$r(r,0),t=r-e,(r+n)*W$r+(t+n)*dC+e*dC+o)}gC.exports=Y$r});var hC=s((dXe,yC)=>{"use strict";var $$r=mC();yC.exports=$$r});var bC=s((gXe,qC)=>{"use strict";var Z$r=H(),Q$r=Ae(),K$r=Gr(),rZr=Ur(),eZr=Ka(),tZr=hC(),iZr=Bs(),aZr=u3(),nZr=pr();function sZr(r){var e,t;return Z$r(r)||Q$r(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=tZr(r),t===aZr)?r:(e===-1?t=rZr(t):t=eZr(t),t>iZr?nZr:e*K$r(2,t))}qC.exports=sZr});var EC=s((mXe,wC)=>{"use strict";var uZr=bC();wC.exports=uZr});var SC=s((yXe,NC)=>{"use strict";var oZr=Ur(),vZr=Ka();function fZr(r){return r<0?vZr(r):oZr(r)}NC.exports=fZr});var nu=s((hXe,OC)=>{"use strict";var cZr=SC();OC.exports=cZr});var AC=s((qXe,_C)=>{"use strict";function lZr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}_C.exports=lZr});var IC=s((bXe,TC)=>{"use strict";var pZr=$a(),dZr=AC();function gZr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*dZr(a),u=1-(e-i*n/(2-n)-r),pZr(u,t)}TC.exports=gZr});var MC=s((wXe,jC)=>{"use strict";var mZr=H(),RC=nu(),yZr=Ir(),PC=pr(),hZr=IC(),qZr=.6931471803691238,bZr=19082149292705877e-26,LC=1.4426950408889634,wZr=709.782712893384,EZr=-745.1332191019411,FC=1/(1<<28),NZr=-FC;function SZr(r){var e,t,i;return mZr(r)||r===PC?r:r===yZr?0:r>wZr?PC:r<EZr?0:r>NZr&&r<FC?1+r:(r<0?i=RC(LC*r-.5):i=RC(LC*r+.5),e=r-i*qZr,t=i*bZr,hZr(e,t,i))}jC.exports=SZr});var Yr=s((EXe,BC)=>{"use strict";var OZr=MC();BC.exports=OZr});var CC=s((NXe,kC)=>{"use strict";var _Zr=H(),x3=Yr();function AZr(r){return _Zr(r)?r:(r<0&&(r=-r),r>21?x3(r)/2:(x3(r)+x3(-r))/2)}kC.exports=AZr});var GC=s((SXe,VC)=>{"use strict";var TZr=CC();VC.exports=TZr});var DC=s((OXe,UC)=>{"use strict";function IZr(r){return r===0?.041666666666666664:.041666666666666664+r*(-.0013888888888888872+r*(2480158730157055e-20+r*(-2755731921499979e-22+r*(2087675428708152e-24+r*(-1147028484342536e-26+r*4737750796424621e-29)))))}UC.exports=IZr});var WC=s((_Xe,HC)=>{"use strict";var RZr=Ot(),PZr=DC(),zC=.7853981633974483;function LZr(r){var e;return r<-zC||r>zC?RZr(r)-1:(e=r*r,-.5*e+e*e*PZr(e))}HC.exports=LZr});var XC=s((AXe,xC)=>{"use strict";var FZr=WC();xC.exports=FZr});var $C=s((TXe,YC)=>{"use strict";var jZr=H(),MZr=Ae(),BZr=Dr(),JC=Ot(),kZr=pt(),CZr=Ur(),X3=Ee(),VZr=oa(),GZr=VZr+1;function UZr(r){var e,t,i,a;return jZr(r)?NaN:MZr(r)?NaN:(e=BZr(r),e>GZr?1:(t=CZr(e),i=e-t,i===.5?0:(i<.25?a=JC(X3*i):i<.75?(i=.5-i,a=kZr(X3*i)):(i=1-i,a=-JC(X3*i)),t%2===1?-a:a)))}YC.exports=UZr});var QC=s((IXe,ZC)=>{"use strict";var DZr=$C();ZC.exports=DZr});var rV=s((RXe,KC)=>{"use strict";function zZr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}KC.exports=zZr});var tV=s((PXe,eV)=>{"use strict";function HZr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}eV.exports=HZr});var nV=s((LXe,aV)=>{"use strict";var WZr=ae(),iV=vt(),xZr=rV(),XZr=tV(),JZr=.7853981633974483,YZr=3061616997868383e-32,$Zr=.3333333333333341,ZZr=2147483647;function QZr(r,e,t){var i,a,n,u,o,v,f,c,l;return i=WZr(r),a=i&ZZr|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=JZr-r,c=YZr-e,r=l+c,e=0),l=r*r,c=l*l,u=xZr(c),f=l*XZr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=$Zr*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=iV(c,0),f=u-(l-r),n=-1/c,v=iV(n,0),o=1+v*l,v+n*(o+v*f))}aV.exports=QZr});var uV=s((FXe,sV)=>{"use strict";var KZr=nV();sV.exports=KZr});var fV=s((jXe,vV)=>{"use strict";var rQr=ae(),oV=uV(),eQr=n0(),J3=[0,0],tQr=2147483647,iQr=1072243195,aQr=2146435072,nQr=1044381696;function sQr(r){var e,t;return e=rQr(r),e&=tQr,e<=iQr?e<nQr?r:oV(r,0,1):e>=aQr?NaN:(t=eQr(r,J3),oV(J3[0],J3[1],1-((t&1)<<1)))}vV.exports=sQr});var c0=s((MXe,cV)=>{"use strict";var uQr=fV();cV.exports=uQr});var pV=s((BXe,lV)=>{"use strict";var oQr=c0();function vQr(r){return 1/oQr(r)}lV.exports=vQr});var gV=s((kXe,dV)=>{"use strict";var fQr=pV();dV.exports=fQr});var yV=s((CXe,mV)=>{"use strict";function cQr(r){var e,t,i;return r===0?-.3333333333333332:(r<0?e=-r:e=r,e<=1?(t=-1614.6876844170845+r*(-99.28772310019185+r*(-.9643991794250523+r*0)),i=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+r*1))):(r=1/r,t=0+r*(-.9643991794250523+r*(-99.28772310019185+r*-1614.6876844170845)),i=1+r*(112.81167849163293+r*(2235.4883906010045+r*4844.063053251255))),t/i)}mV.exports=cQr});var qV=s((VXe,hV)=>{"use strict";var lQr=Dr(),pQr=Yr(),dQr=yV(),gQr=88.02969193111305;function mQr(r){var e,t;if(t=lQr(r),t>.5*gQr)return r<0?-1:1;if(t>=.625)e=pQr(2*t),t=1-2/(e+1),r<0&&(t=-t);else{if(r===0)return r;e=r*r,t=r+r*e*dQr(e)}return t}hV.exports=mQr});var wV=s((GXe,bV)=>{"use strict";var yQr=qV();bV.exports=yQr});var NV=s((UXe,EV)=>{"use strict";var hQr=wV();function qQr(r){return 1/hQr(r)}EV.exports=qQr});var OV=s((DXe,SV)=>{"use strict";var bQr=NV();SV.exports=bQr});var AV=s((zXe,_V)=>{"use strict";var wQr=pt();function EQr(r){return 1+wQr(r)}_V.exports=EQr});var IV=s((HXe,TV)=>{"use strict";var NQr=AV();TV.exports=NQr});var PV=s((WXe,RV)=>{"use strict";var SQr=pt();function OQr(r){return 1-SQr(r)}RV.exports=OQr});var FV=s((xXe,LV)=>{"use strict";var _Qr=PV();LV.exports=_Qr});var MV=s((XXe,jV)=>{"use strict";var AQr=.017453292519943295;function TQr(r){return r*AQr}jV.exports=TQr});var kV=s((JXe,BV)=>{"use strict";var IQr=MV();BV.exports=IQr});var VV=s((YXe,CV)=>{"use strict";function RQr(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}CV.exports=RQr});var UV=s(($Xe,GV)=>{"use strict";var PQr=wr(),LQr=VV();function FQr(r){var e,t;return r-=1,e=PQr(r)+1/(2*r),t=1/(r*r),e-t*LQr(t)}GV.exports=FQr});var zV=s((ZXe,DV)=>{"use strict";function jQr(r){var e,t,i;return r===0?.25479851061131553:(r<0?e=-r:e=r,e<=1?(t=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,t=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),t/i)}DV.exports=jQr});var WV=s((QXe,HV)=>{"use strict";var MQr=zV(),BQr=1569415565/1073741824,kQr=381566830/1073741824/1073741824,CQr=9016312093258695e-35,VQr=.9955816268920898;function GQr(r){var e,t;return e=r-BQr,e-=kQr,e-=CQr,t=MQr(r-1),e*VQr+e*t}HV.exports=GQr});var JV=s((KXe,XV)=>{"use strict";var UQr=H(),DQr=Ur(),zQr=c0(),xV=Ee(),HQr=UV(),WQr=WV(),xQr=10;function XQr(r){var e,t;if(UQr(r)||r===0)return NaN;if(r<=-1){if(r=1-r,e=r-DQr(r),e>.5&&(e-=1),e===0)return NaN;t=xV/zQr(xV*e)}else t=0;if(r>=xQr)return t+=HQr(r),t;for(;r>2;)r-=1,t+=1/r;for(;r<1;)t-=1/r,r+=1;return t+=WQr(r),t}XV.exports=XQr});var $V=s((rJe,YV)=>{"use strict";var JQr=JV();YV.exports=JQr});var QV=s((eJe,ZV)=>{"use strict";var YQr=.34657359027997264;ZV.exports=YQr});var rG=s((tJe,KV)=>{"use strict";function $Qr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}KV.exports=$Qr});var sG=s((iJe,nG)=>{"use strict";var ZQr=H(),eG=ae(),Y3=wt(),QQr=Ya(),tG=pr(),KQr=Ir(),iG=ct(),rKr=QV(),eKr=rG(),tKr=709.782712893384,$3=.6931471803691238,Z3=19082149292705877e-26,aG=1.4426950408889634,iKr=38.816242111356935,aKr=1.0397207708399179;function nKr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===tG||ZQr(r))return r;if(r===KQr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=iKr){if(i)return-1;if(v>=tKr)return tG}if(u=eG(v)|0,v>rKr)v<aKr?i?(a=r+$3,n=-Z3,m=-1):(a=r-$3,n=Z3,m=1):(i?m=aG*r-.5:m=aG*r+.5,m|=0,l=m,a=r-l*$3,n=l*Z3),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*eKr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=QQr(iG+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=eG(v)+(m<<20)|0,v=Y3(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=Y3(l,a),v=l-(p-r)):(a=iG-m<<20|0,l=Y3(l,a),v=r-(p+l),v+=1),v*=t,v))}nG.exports=nKr});var l0=s((aJe,uG)=>{"use strict";var sKr=sG();uG.exports=sKr});var cG=s((nJe,fG)=>{"use strict";var oG=H(),vG=Dr(),uKr=l0(),oKr=wr(),vKr=Gr(),fKr=nu();function cKr(r,e){var t;if(oG(r)||oG(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((vG(e*(r-1))<.5||vG(e)<.2)&&(t=oKr(r)*e,t<.5))return uKr(t)}else if(fKr(e)!==e)return NaN;return vKr(r,e)-1}fG.exports=cKr});var Q3=s((sJe,lG)=>{"use strict";var lKr=cG();lG.exports=lKr});var dG=s((uJe,pG)=>{"use strict";var pKr=Ir();function dKr(r){return r===0&&1/r===pKr}pG.exports=dKr});var K3=s((oJe,gG)=>{"use strict";var gKr=dG();gG.exports=gKr});var rf=s((vJe,mG)=>{"use strict";var mKr=2.5066282746310007;mG.exports=mKr});var hG=s((fJe,yG)=>{"use strict";function yKr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}yG.exports=yKr});var wG=s((cJe,bG)=>{"use strict";var hKr=rf(),qG=Gr(),qKr=Yr(),bKr=hG(),wKr=143.01608;function EKr(r){var e,t,i;return e=1/r,e=1+e*bKr(e),t=qKr(r),r>wKr?(i=qG(r,.5*r-.25),t=i*(i/t)):t=qG(r,r-.5)/t,hKr*t*e}bG.exports=EKr});var NG=s((lJe,EG)=>{"use strict";var NKr=.5772156649015329;EG.exports=NKr});var OG=s((pJe,SG)=>{"use strict";var SKr=NG();function OKr(r,e){return e/((1+SKr*r)*r)}SG.exports=OKr});var AG=s((dJe,_G)=>{"use strict";function _Kr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}_G.exports=_Kr});var MG=s((gJe,jG)=>{"use strict";var AKr=H(),TKr=Ne(),IKr=K3(),TG=Dr(),RKr=Ur(),PKr=pt(),IG=pr(),RG=Ir(),PG=Ee(),LG=wG(),FG=OG(),LKr=AG();function FKr(r){var e,t,i,a;if(TKr(r)&&r<0||r===RG||AKr(r))return NaN;if(r===0)return IKr(r)?RG:IG;if(r>171.61447887182297)return IG;if(r<-170.5674972726612)return 0;if(t=TG(r),t>33)return r>=0?LG(r):(i=RKr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*PKr(PG*a),e*PG/(TG(a)*LG(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return FG(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return FG(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*LKr(r))}jG.exports=FKr});var rn=s((mJe,BG)=>{"use strict";var jKr=MG();BG.exports=jKr});var VG=s((yJe,CG)=>{"use strict";var MKr=H(),BKr=Ae(),kG=Ot(),ef=pt(),kKr=Dr(),p0=Ps(),d0=Ee();function CKr(r){var e,t;return MKr(r)?NaN:BKr(r)?NaN:(t=r%2,e=kKr(t),e===0||e===1?p0(0,t):e<.25?ef(d0*t):e<.75?(e=.5-e,p0(kG(d0*e),t)):e<1.25?(t=p0(1,t)-t,ef(d0*t)):e<1.75?(e-=1.5,-p0(kG(d0*e),t)):(t-=p0(2,t),ef(d0*t)))}CG.exports=CKr});var g0=s((hJe,GG)=>{"use strict";var VKr=VG();GG.exports=VKr});var DG=s((qJe,UG)=>{"use strict";function GKr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}UG.exports=GKr});var HG=s((bJe,zG)=>{"use strict";function UKr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}zG.exports=UKr});var xG=s((wJe,WG)=>{"use strict";function DKr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}WG.exports=DKr});var JG=s((EJe,XG)=>{"use strict";function zKr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}XG.exports=zKr});var $G=s((NJe,YG)=>{"use strict";function HKr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}YG.exports=HKr});var QG=s((SJe,ZG)=>{"use strict";function WKr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}ZG.exports=WKr});var rU=s((OJe,KG)=>{"use strict";function xKr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}KG.exports=xKr});var tU=s((_Je,eU)=>{"use strict";function XKr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}eU.exports=XKr});var aU=s((AJe,iU)=>{"use strict";function JKr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}iU.exports=JKr});var sU=s((TJe,nU)=>{"use strict";function YKr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}nU.exports=YKr});var vU=s((IJe,oU)=>{"use strict";var $Kr=H(),ZKr=Ae(),QKr=Dr(),en=wr(),KKr=nu(),rre=g0(),ere=Ee(),tf=pr(),tre=DG(),ire=HG(),are=xG(),nre=JG(),sre=$G(),ure=QG(),ore=rU(),vre=tU(),fre=aU(),cre=sU(),lre=.07721566490153287,pre=.3224670334241136,dre=1,gre=-.07721566490153287,mre=.48383612272381005,yre=-.1475877229945939,hre=.06462494023913339,qre=-.07721566490153287,bre=1,wre=.4189385332046727,su=1.4616321449683622,Ere=4503599627370496,Nre=0x400000000000000,Sre=8470329472543003e-37,uU=1.4616321449683622,Ore=-.12148629053584961,_re=-3638676997039505e-33;function Are(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if($Kr(r)||ZKr(r))return r;if(r===0)return tf;if(r<0?(e=!0,r=-r):e=!1,r<Sre)return-en(r);if(e){if(r>=Ere||(f=rre(r),f===0))return tf;t=en(ere/QKr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-en(r),r>=su-1+.27?(l=1-r,i=0):r>=su-1-.27?(l=r-(uU-1),i=1):(l=r,i=2)):(m=0,r>=su+.27?(l=2-r,i=0):r>=su-.27?(l=r-uU,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=lre+p*tre(p),n=p*(pre+p*ire(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=mre+c*sre(c),n=yre+c*ure(c),a=hre+c*ore(c),o=p*u-(_re-c*(n+l*a)),m+=Ore+o;break;case 2:u=l*(qre+l*vre(l)),n=bre+l*fre(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=KKr(r),l=r-i,o=l*(gre+l*nre(l)),v=dre+l*are(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=en(p)}else r<Nre?(f=en(r),p=1/r,l=p*p,c=wre+p*cre(l),m=(r-.5)*(f-1)+c):m=r*(en(r)-1);return e&&(m=t-m),m}oU.exports=Are});var m0=s((RJe,fU)=>{"use strict";var Tre=vU();fU.exports=Tre});var yi=s((PJe,cU)=>{"use strict";var Ire=6.283185307179586;cU.exports=Ire});var af=s((LJe,lU)=>{"use strict";var Rre=14901161193847656e-24;lU.exports=Rre});var nf=s((FJe,pU)=>{"use strict";var Pre=.9189385332046728;pU.exports=Pre});var dU=s((jJe,Lre)=>{Lre.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var gU=s((MJe,Fre)=>{Fre.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var mU=s((BJe,jre)=>{jre.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var hU=s((kJe,yU)=>{"use strict";function Mre(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}yU.exports=Mre});var bU=s((CJe,qU)=>{"use strict";function Bre(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}qU.exports=Bre});var EU=s((VJe,wU)=>{"use strict";function kre(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}wU.exports=kre});var SU=s((GJe,NU)=>{"use strict";function Cre(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}NU.exports=Cre});var _U=s((UJe,OU)=>{"use strict";function Vre(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}OU.exports=Vre});var TU=s((DJe,AU)=>{"use strict";function Gre(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}AU.exports=Gre});var FU=s((zJe,LU)=>{"use strict";var Ure=H(),Dre=Ne(),zre=Dr(),uu=Yr(),Hre=Ur(),Wre=rn(),xre=m0(),IU=g0(),RU=Gr(),Xre=wr(),Jre=pr(),Yre=Ir(),PU=yi(),$re=af(),Zre=nf(),Qre=dU(),Kre=gU(),ree=mU(),eee=hU(),tee=bU(),iee=EU(),aee=SU(),nee=_U(),see=TU(),uee=129,oee=170,vee=709,fee=1.2433929443359375,cee=.6986598968505859;function sf(r){var e,t,i,a,n,u;if(Ure(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(Dre(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=uee)return-ree[u]/(i+1)}else return(a&1)===0?Kre[a/2]:Qre[(a-3)/2];return zre(r)<$re?-.5-Zre*r:(t=1-r,r<0?Hre(r/2)===r/2?0:(e=r,r=t,t=e,r>oee?(e=IU(.5*t)*2*sf(r),n=xre(r),n-=r*Xre(PU),n>vee?e<0?Yre:Jre:e*uu(n)):IU(.5*t)*2*RU(PU,-r)*Wre(r)*sf(r)):r<1?(e=eee(t),e-=fee,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+tee(t)):r<=4?(e=cee+1/-t,e+iee(r-2)):r<=7?(e=aee(r-4),1+uu(e)):r<15?(e=nee(r-7),1+uu(e)):r<36?(e=see(r-15),1+uu(e)):1+RU(2,-r))}LU.exports=sf});var uf=s((HJe,jU)=>{"use strict";var lee=FU();jU.exports=lee});var BU=s((WJe,MU)=>{"use strict";var pee=H(),dee=Q3(),gee=uf(),mee=Yn();function yee(r){return pee(r)?NaN:r===1?mee:-dee(2,1-r)*gee(r)}MU.exports=yee});var CU=s((xJe,kU)=>{"use strict";var hee=BU();kU.exports=hee});var GU=s((XJe,VU)=>{"use strict";function qee(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}VU.exports=qee});var DU=s((JJe,UU)=>{"use strict";function bee(r){return r===0?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+r*.26636380989261754))))))))))}UU.exports=bee});var HU=s((YJe,zU)=>{"use strict";function wee(r){return r===0?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+r*1.057652872753547))))))))))}zU.exports=wee});var xU=s(($Je,WU)=>{"use strict";function Eee(r){return r===0?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+r*7.224080007363877)))))))))))}WU.exports=Eee});var JU=s((ZJe,XU)=>{"use strict";function Nee(r){return r===0?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+r*90.27388602941))))))))))))}XU.exports=Nee});var $U=s((QJe,YU)=>{"use strict";function See(r){return r===0?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+r*2536.5297553827645)))))))))))))}YU.exports=See});var QU=s((KJe,ZU)=>{"use strict";function Oee(r){return r===0?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+r*612757.2711915852)))))))))))))))}ZU.exports=Oee});var rD=s((rYe,KU)=>{"use strict";function _ee(r){return r===0?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994048255285e-9+r*(9541921966748387e-9+r*(3563492744218076e-8+r*(13366929846120408e-8+r*(50335218668662846e-8+r*(190197572953866e-5+r*7208915015330104e-6))))))))))))))))))}KU.exports=_ee});var tD=s((eYe,eD)=>{"use strict";function Aee(r){return r===0?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1.8472382637239718e6+r*(9600515416049214e-9+r*(5030767708502367e-8+r*(2654441886527128e-7+r*(14088623250287027e-7+r*7515687935373775e-6))))))))))))))}eD.exports=Aee});var aD=s((tYe,iD)=>{"use strict";function Tee(r){return r===0?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1.0439993310899908e6+r*(7427974817042039e-9+r*(5350383967558661e-8+r*(38924988699487084e-8+r*(28552883511008105e-7+r*(2109007703876684e-5+r*(1566998339477902e-4+r*(117022224242244e-2+r*(87779483236689375e-4+r*(6610124275248495e-2+r*(4994880537133888e-1+r*0x86813c6c7adde8))))))))))))))))))}iD.exports=Tee});var sD=s((iYe,nD)=>{"use strict";function Iee(r){return r===0?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+r*.003919665602267974)))))))))))))}nD.exports=Iee});var oD=s((aYe,uD)=>{"use strict";function Ree(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}uD.exports=Ree});var fD=s((nYe,vD)=>{"use strict";var Pee=Rr(),Lee=wr(),Fee=pr(),jee=Qa(),Mee=GU(),Bee=DU(),kee=HU(),Cee=xU(),Vee=JU(),Gee=$U(),Uee=QU(),Dee=rD(),zee=tD(),Hee=aD(),Wee=sD(),xee=oD(),Xee=.3183098861837907;function Jee(r){var e,t,i,a,n,u;return u=r,r<0&&(u=r/(r-1),e=!0),u===0?jee:u===1?Fee:u>1?NaN:(u<.1?n=Mee(u-.05):u<.2?n=Bee(u-.15):u<.3?n=kee(u-.25):u<.4?n=Cee(u-.35):u<.5?n=Vee(u-.45):u<.6?n=Gee(u-.55):u<.7?n=Uee(u-.65):u<.8?n=Dee(u-.75):u<.85?n=zee(u-.825):u<.9?n=Hee(u-.875):(i=1-u,a=Wee(i),t=xee(i-.05),n=-Lee(a)*(t*Xee)),e?n/Pee(1-r):n)}vD.exports=Jee});var of=s((sYe,cD)=>{"use strict";var Yee=fD();cD.exports=Yee});var pD=s((uYe,lD)=>{"use strict";function $ee(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}lD.exports=$ee});var gD=s((oYe,dD)=>{"use strict";function Zee(r){return r===0?1.5101218320928198:1.5101218320928198+r*(-.41711633390586755+r*(-.09012382040477457+r*(-.04372994401908431+r*(-.027965493064761784+r*(-.020644781177568104+r*(-.016650786739707237+r*(-.01426196082884252+r*(-.012759847429264804+r*(-.011799303775587354+r*-.011197445703074968)))))))))}dD.exports=Zee});var yD=s((vYe,mD)=>{"use strict";function Qee(r){return r===0?1.4674622093394272:1.4674622093394272+r*(-.43657629094633776+r*(-.10515555766694255+r*(-.05737184359324173+r*(-.04139162772734022+r*(-.03452772850528084+r*(-.031495443512532785+r*(-.030527000890325277+r*(-.0309169840192389+r*(-.03237139531475812+r*-.03478996038640416)))))))))}mD.exports=Qee});var qD=s((fYe,hD)=>{"use strict";function Kee(r){return r===0?1.4226911334908792:1.4226911334908792+r*(-.4595135196210487+r*(-.12525053982206188+r*(-.07813854509440948+r*(-.06471427847205+r*(-.06208433913173031+r*(-.06519703281557247+r*(-.07279389536257878+r*(-.084959075171781+r*(-.102539850131046+r*(-.12705358515769605+r*-.1607911206912746))))))))))}hD.exports=Kee});var wD=s((cYe,bD)=>{"use strict";function rte(r){return r===0?1.3754019718711163:1.3754019718711163+r*(-.4872021832731848+r*(-.15331170134854022+r*(-.11184944491702783+r*(-.10884095252313576+r*(-.12295422312026907+r*(-.15221716396203505+r*(-.20049532364269734+r*(-.27617433306775174+r*(-.39351311430437586+r*(-.5757544060278792+r*(-.8605232357272398+r*-1.3088332057585401)))))))))))}bD.exports=rte});var ND=s((lYe,ED)=>{"use strict";function ete(r){return r===0?1.3250244979582302:1.3250244979582302+r*(-.5217276475575667+r*(-.19490643048212622+r*(-.17162372682201127+r*(-.20275465292641914+r*(-.27879895311853475+r*(-.42069845728100574+r*(-.675948400853106+r*(-1.1363431218392293+r*(-1.9767211439543984+r*(-3.5316967730957227+r*(-6.446753640156048+r*-11.97703130208884)))))))))))}ED.exports=ete});var OD=s((pYe,SD)=>{"use strict";function tte(r){return r===0?1.2707074796501499:1.2707074796501499+r*(-.5668391682878666+r*(-.2621607934324926+r*(-.2922441735330774+r*(-.4403978408504232+r*(-.7749476413813975+r*(-1.498870837987561+r*(-3.089708310445187+r*(-6.6675959033810015+r*(-14.89436036517319+r*(-34.18120574251449+r*(-80.15895841905397+r*(-191.34894807629848+r*(-463.5938853480342+r*-1137.38082216936)))))))))))))}SD.exports=tte});var AD=s((dYe,_D)=>{"use strict";function ite(r){return r===0?1.2110560275684594:1.2110560275684594+r*(-.6303064132874558+r*(-.38716640952066916+r*(-.5922782353119346+r*(-1.23755558451305+r*(-3.0320566617452474+r*(-8.18168822157359+r*(-23.55507217389693+r*(-71.04099935893065+r*(-221.879685319235+r*(-712.1364793277636+r*(-2336.1253314403966+r*(-7801.945954775964+r*(-26448.19586059192+r*(-90799.48341621365+r*(-315126.04064491636+r*-1.1040113443115912e6)))))))))))))))}_D.exports=ite});var ID=s((gYe,TD)=>{"use strict";function ate(r){return r===0?1.1613071521962828:1.1613071521962828+r*(-.7011002845552895+r*(-.5805514744654373+r*(-1.2436930610777865+r*(-3.679383613496635+r*(-12.815909243378957+r*(-49.25672530759985+r*(-202.18187354340904+r*(-869.8602699308701+r*(-3877.0058473132895+r*(-17761.7071017094+r*(-83182.69029154233+r*(-396650.4505013548+r*-1.9200334136826345e6))))))))))))}TD.exports=ate});var PD=s((mYe,RD)=>{"use strict";function nte(r){return r===0?1.1246173251197522:1.1246173251197522+r*(-.7708450563609095+r*(-.8447940536449113+r*(-2.4900973094503946+r*(-10.239717411543843+r*(-49.7490054655148+r*(-267.09866751957054+r*(-1532.66588382523+r*(-9222.313478526092+r*(-57502.51612140314+r*(-368596.11674161063+r*(-2.4156110887010912e6+r*(-16120097815816568e-9+r*(-10920993852030899e-8+r*(-7493807581942496e-7+r*(-5198725846725541e-6+r*-364092568881214e-4)))))))))))))))}RD.exports=nte});var FD=s((yYe,LD)=>{"use strict";function ste(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}LD.exports=ste});var MD=s((hYe,jD)=>{"use strict";function ute(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}jD.exports=ute});var CD=s((qYe,kD)=>{"use strict";var ote=Rr(),BD=Qa(),vte=of(),fte=pD(),cte=gD(),lte=yD(),pte=qD(),dte=wD(),gte=ND(),mte=OD(),yte=AD(),hte=ID(),qte=PD(),bte=FD(),wte=MD();function Ete(r){var e,t,i,a,n,u,o;return o=r,r<0&&(o=r/(r-1),e=!0),o===0?BD:o===1?1:o>1?NaN:(o<.1?u=fte(o-.05):o<.2?u=cte(o-.15):o<.3?u=lte(o-.25):o<.4?u=pte(o-.35):o<.5?u=dte(o-.45):o<.6?u=gte(o-.55):o<.7?u=mte(o-.65):o<.8?u=yte(o-.75):o<.85?u=hte(o-.825):o<.9?u=qte(o-.875):(a=.95-o,t=bte(a),i=wte(a),n=vte(o),u=(BD+n*(t-i))/t),e?u*ote(1-r):u)}kD.exports=Ete});var GD=s((bYe,VD)=>{"use strict";var Nte=CD();VD.exports=Nte});var DD=s((wYe,UD)=>{"use strict";function Ste(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}UD.exports=Ste});var HD=s((EYe,zD)=>{"use strict";function Ote(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}zD.exports=Ote});var xD=s((NYe,WD)=>{"use strict";function _te(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}WD.exports=_te});var JD=s((SYe,XD)=>{"use strict";function Ate(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}XD.exports=Ate});var $D=s((OYe,YD)=>{"use strict";function Tte(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}YD.exports=Tte});var QD=s((_Ye,ZD)=>{"use strict";function Ite(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}ZD.exports=Ite});var rz=s((AYe,KD)=>{"use strict";function Rte(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}KD.exports=Rte});var tz=s((TYe,ez)=>{"use strict";function Pte(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}ez.exports=Pte});var uz=s((IYe,sz)=>{"use strict";var Lte=H(),iz=Yr(),Fte=vt(),jte=pr(),Mte=Ir(),Bte=DD(),kte=HD(),Cte=xD(),Vte=JD(),Gte=$D(),Ute=QD(),Dte=rz(),zte=tz(),az=1e-300,Hte=2848094538889218e-321,Wte=3725290298461914e-24,nz=.8450629115104675,xte=.1283791670955126,Xte=1.0270333367641007,Jte=.12837916709551256,Yte=1,$te=-.0023621185607526594,Zte=1,Qte=-.009864944034847148,Kte=1,rie=-.0098649429247001,eie=1;function tie(r){var e,t,i,a,n,u,o,v;return Lte(r)?NaN:r===jte?1:r===Mte?-1:r===0?r:(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375?t<Wte?t<Hte?.125*(8*r+Xte*r):r+xte*r:(i=r*r,a=Jte+i*Bte(i),n=Yte+i*kte(i),u=a/n,r+r*u):t<1.25?(n=t-1,o=$te+n*Cte(n),v=Zte+n*Vte(n),e?-nz-o/v:nz+o/v):t>=6?e?az-1:1-az:(n=1/(t*t),t<2.857142857142857?(a=Qte+n*Gte(n),n=Kte+n*Ute(n)):(a=rie+n*Dte(n),n=eie+n*zte(n)),i=Fte(t,0),a=iz(-(i*i)-.5625)*iz((i-t)*(i+t)+a/n),e?a/t-1:1-a/t))}sz.exports=tie});var vz=s((RYe,oz)=>{"use strict";var iie=uz();oz.exports=iie});var cz=s((PYe,fz)=>{"use strict";function aie(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}fz.exports=aie});var pz=s((LYe,lz)=>{"use strict";function nie(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}lz.exports=nie});var gz=s((FYe,dz)=>{"use strict";function sie(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}dz.exports=sie});var yz=s((jYe,mz)=>{"use strict";function uie(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}mz.exports=uie});var qz=s((MYe,hz)=>{"use strict";function oie(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}hz.exports=oie});var wz=s((BYe,bz)=>{"use strict";function vie(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}bz.exports=vie});var Nz=s((kYe,Ez)=>{"use strict";function fie(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Ez.exports=fie});var Oz=s((CYe,Sz)=>{"use strict";function cie(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Sz.exports=cie});var Iz=s((VYe,Tz)=>{"use strict";var lie=H(),_z=Yr(),pie=vt(),die=pr(),gie=Ir(),mie=cz(),yie=pz(),hie=gz(),qie=yz(),bie=qz(),wie=wz(),Eie=Nz(),Nie=Oz(),ou=1e-300,Sie=13877787807814457e-33,Az=.8450629115104675,Oie=.12837916709551256,_ie=1,Aie=-.0023621185607526594,Tie=1,Iie=-.009864944034847148,Rie=1,Pie=-.0098649429247001,Lie=1;function Fie(r){var e,t,i,a,n,u,o,v;if(lie(r))return NaN;if(r===die)return 0;if(r===gie)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Sie?1-r:(i=r*r,a=Oie+i*mie(i),n=_ie+i*yie(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=Aie+n*hie(n),v=Tie+n*qie(n),e?1+Az+o/v:1-Az-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=Iie+n*bie(n),n=Rie+n*wie(n);else{if(r<-6)return 2-ou;a=Pie+n*Eie(n),n=Lie+n*Nie(n)}return i=pie(t,0),a=_z(-(i*i)-.5625)*_z((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-ou:ou*ou}Tz.exports=Fie});var hi=s((GYe,Rz)=>{"use strict";var jie=Iz();Rz.exports=jie});var Lz=s((UYe,Pz)=>{"use strict";function Mie(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Pz.exports=Mie});var jz=s((DYe,Fz)=>{"use strict";function Bie(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Fz.exports=Bie});var Bz=s((zYe,Mz)=>{"use strict";function kie(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Mz.exports=kie});var Cz=s((HYe,kz)=>{"use strict";function Cie(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}kz.exports=Cie});var Gz=s((WYe,Vz)=>{"use strict";function Vie(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Vz.exports=Vie});var Hz=s((xYe,zz)=>{"use strict";var Gie=H(),Uz=Rr(),Dz=wr(),Uie=pr(),Die=Ir(),zie=Lz(),Hie=jz(),Wie=Bz(),xie=Cz(),Xie=Gz(),Jie=.08913147449493408,Yie=2.249481201171875,$ie=.807220458984375,Zie=.9399557113647461,Qie=.9836282730102539;function Kie(r){var e,t,i,a,n;return Gie(r)?NaN:r===0?Uie:r===2?Die:r===1?0:r>2||r<0?NaN:(r>1?(e=-1,i=2-r):(e=1,i=r),r=1-i,r<=.5?(a=r*(r+10),n=zie(r),e*(a*Jie+a*n)):i>=.25?(a=Uz(-2*Dz(i)),i-=.25,n=Hie(i),e*(a/(Yie+n))):(i=Uz(-Dz(i)),i<3?(t=i-1.125,n=Wie(t),e*($ie*i+n*i)):i<6?(t=i-3,n=xie(t),e*(Zie*i+n*i)):(t=i-6,n=Xie(t),e*(Qie*i+n*i))))}zz.exports=Kie});var xz=s((XYe,Wz)=>{"use strict";var rae=Hz();Wz.exports=rae});var Jz=s((JYe,Xz)=>{"use strict";function eae(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Xz.exports=eae});var $z=s((YYe,Yz)=>{"use strict";function tae(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Yz.exports=tae});var Qz=s(($Ye,Zz)=>{"use strict";function iae(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Zz.exports=iae});var rH=s((ZYe,Kz)=>{"use strict";function aae(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Kz.exports=aae});var tH=s((QYe,eH)=>{"use strict";function nae(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}eH.exports=nae});var sH=s((KYe,nH)=>{"use strict";var sae=H(),iH=Rr(),aH=wr(),uae=pr(),oae=Ir(),vae=Jz(),fae=$z(),cae=Qz(),lae=rH(),pae=tH(),dae=.08913147449493408,gae=2.249481201171875,mae=.807220458984375,yae=.9399557113647461,hae=.9836282730102539;function qae(r){var e,t,i,a,n,u;return sae(r)?NaN:r===1?uae:r===-1?oae:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=vae(t),e*(n*dae+n*u)):a>=.25?(n=iH(-2*aH(a)),a-=.25,u=fae(a),e*(n/(gae+u))):(a=iH(-aH(a)),a<3?(i=a-1.125,u=cae(i),e*(mae*a+u*a)):a<6?(i=a-3,u=lae(i),e*(yae*a+u*a)):(i=a-6,u=pae(i),e*(hae*a+u*a))))}nH.exports=qae});var vu=s((r$e,uH)=>{"use strict";var bae=sH();uH.exports=bae});var vH=s((e$e,oH)=>{"use strict";function wae(r){return r===0?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+r*.040996251979858706))}oH.exports=wae});var cH=s((t$e,fH)=>{"use strict";function Eae(r){return r===0?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+r*1))}fH.exports=Eae});var dH=s((i$e,pH)=>{"use strict";var Nae=Ur(),lH=$a(),Sae=H(),Oae=Zn(),_ae=Cs(),Aae=pr(),Tae=vH(),Iae=cH(),Rae=3.321928094887362,Pae=.301025390625,Lae=4605038981195214e-21;function Fae(r){var e,t,i;return Sae(r)?r:r>Oae?Aae:r<_ae?0:(e=Nae(Rae*r+.5),i=e,r-=e*Pae,r-=e*Lae,t=r*r,e=r*Tae(t),r=e/(Iae(t)-e),r=1+lH(r,1),lH(r,i))}pH.exports=Fae});var mH=s((a$e,gH)=>{"use strict";var jae=dH();gH.exports=jae});var hH=s((n$e,yH)=>{"use strict";var Mae=-1022;yH.exports=Mae});var bH=s((s$e,qH)=>{"use strict";function Bae(r){return r===0?1513.906801156151:1513.906801156151+r*(20.202065669316532+r*.023093347705734523)}qH.exports=Bae});var EH=s((u$e,wH)=>{"use strict";function kae(r){return r===0?4368.211668792106:4368.211668792106+r*(233.1842117223149+r*1)}wH.exports=kae});var OH=s((o$e,SH)=>{"use strict";var Cae=Bs(),Vae=hH(),Gae=Ks(),NH=$a(),Uae=H(),Dae=pr(),zae=bH(),Hae=EH();function Wae(r){var e,t,i;return Uae(r)?r:r>Cae?Dae:r<Vae?0:(i=Gae(r),r-=i,t=r*r,e=r*zae(t),r=e/(Hae(t)-e),r=1+NH(r,1),NH(r,i))}SH.exports=Wae});var AH=s((v$e,_H)=>{"use strict";var xae=OH();_H.exports=xae});var IH=s((f$e,TH)=>{"use strict";var Xae=H(),Jae=Yr();function Yae(r){return Xae(r)?r:1/(1+Jae(-r))}TH.exports=Yae});var PH=s((c$e,RH)=>{"use strict";var $ae=IH();RH.exports=$ae});var qi=s((l$e,LH)=>{"use strict";var Zae=2220446049250313e-31;LH.exports=Zae});var jH=s((p$e,FH)=>{"use strict";var Qae=l0(),Kae=Dr(),rne=qi(),ene=pr(),tne=709.782712893384;function ine(r){return Kae(r)<=rne?1:r>=tne?ene:Qae(r)/r}FH.exports=ine});var BH=s((d$e,MH)=>{"use strict";var ane=jH();MH.exports=ane});var CH=s((g$e,kH)=>{"use strict";var lr=Qr(),nne=Dr(),sne=Hs(),une=t0(),one=OF(),vne=CF(),fne=wj(),cne=Oj(),lne=Ij(),pne=Fj(),dne=Dj(),gne=xj(),mne=$j(),yne=va(),hne=_3(),qne=Js(),bne=eM(),wne=nM(),Ene=vM(),Nne=wM(),Sne=F3(),One=j3(),_ne=VB(),Ane=tk(),Tne=Lk(),Ine=Gk(),Rne=Ka(),Pne=sC(),Lne=EC(),Fne=Ot(),jne=GC(),Mne=XC(),Bne=QC(),kne=gV(),Cne=OV(),Vne=IV(),Gne=FV(),Une=kV(),Dne=$V(),zne=CU(),Hne=GD(),Wne=of(),xne=vz(),Xne=hi(),Jne=xz(),Yne=vu(),$ne=Yr(),Zne=mH(),Qne=AH(),Kne=PH(),r0e=l0(),e0e=BH(),t0e=pt(),i0e=Rr(),a0e=uf();function n0e(r){return lr(r,"abs",nne),lr(r,"abs2",sne),lr(r,"acos",une),lr(r,"acosh",one),lr(r,"acot",vne),lr(r,"acotd",fne),lr(r,"acovercos",cne),lr(r,"acoversin",lne),lr(r,"acsc",pne),lr(r,"acsch",dne),lr(r,"ahavercos",gne),lr(r,"ahaversin",mne),lr(r,"asin",yne),lr(r,"asinh",hne),lr(r,"atan",qne),lr(r,"atanh",bne),lr(r,"avercos",wne),lr(r,"aversin",Ene),lr(r,"bernoulli",Nne),lr(r,"besselj0",Sne),lr(r,"besselj1",One),lr(r,"bessely0",_ne),lr(r,"bessely1",Ane),lr(r,"binet",Tne),lr(r,"cbrt",Ine),lr(r,"ceil",Rne),lr(r,"ceil10",Pne),lr(r,"ceil2",Lne),lr(r,"cos",Fne),lr(r,"cosh",jne),lr(r,"cosm1",Mne),lr(r,"cospi",Bne),lr(r,"cot",kne),lr(r,"coth",Cne),lr(r,"covercos",Vne),lr(r,"coversin",Gne),lr(r,"deg2rad",Une),lr(r,"digamma",Dne),lr(r,"eta",zne),lr(r,"ellipe",Hne),lr(r,"ellipk",Wne),lr(r,"erf",xne),lr(r,"erfc",Xne),lr(r,"erfcinv",Jne),lr(r,"erfinv",Yne),lr(r,"exp",$ne),lr(r,"exp10",Zne),lr(r,"exp2",Qne),lr(r,"expit",Kne),lr(r,"expm1",r0e),lr(r,"expm1rel",e0e),lr(r,"sin",t0e),lr(r,"sqrt",i0e),lr(r,"zeta",a0e),r}kH.exports=n0e});var GH=s((m$e,VH)=>{"use strict";var s0e=Qr(),u0e=EI(),o0e=VL(),v0e=CH();function f0e(r){return s0e(r,"tools",o0e({})),r=u0e(r),r=v0e(r),r}VH.exports=f0e});var zH=s((y$e,DH)=>{"use strict";var c0e=t2(),UH=c0e();function l0e(){return typeof UH.BigInt=="function"&&typeof BigInt=="function"&&typeof UH.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}DH.exports=l0e});var WH=s((h$e,HH)=>{"use strict";var p0e=zH();HH.exports=p0e});var xH=s((q$e,d0e)=>{d0e.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var JH=s((b$e,XH)=>{"use strict";var g0e=xH();function m0e(r){return g0e[r]||null}XH.exports=m0e});var $H=s((w$e,YH)=>{"use strict";var y0e=JH();YH.exports=y0e});var KH=s((E$e,QH)=>{"use strict";var ZH=Dr();function h0e(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=ZH(r[0]),u=1;u<t;u++)if(n=ZH(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}QH.exports=h0e});var vf=s((N$e,rW)=>{"use strict";var q0e=KH();rW.exports=q0e});var tW=s((S$e,eW)=>{"use strict";function b0e(r,e){return e&&(r===2||r===3)}eW.exports=b0e});var aW=s((O$e,iW)=>{"use strict";function w0e(r,e){return e&&(r===1||r===3)}iW.exports=w0e});var sW=s((_$e,nW)=>{"use strict";function E0e(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}nW.exports=E0e});var oW=s((A$e,uW)=>{"use strict";function N0e(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}uW.exports=N0e});var cW=s((T$e,fW)=>{"use strict";var S0e=D(),vW=sW(),O0e=oW();S0e(vW,"assign",O0e);fW.exports=vW});var pW=s((I$e,lW)=>{"use strict";var _0e=cW();function A0e(r,e,t,i,a){var n;return r===0||a===0?!1:(n=_0e(e,t,i),r===n[1]-n[0]+1)}lW.exports=A0e});var gW=s((R$e,dW)=>{"use strict";function T0e(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}dW.exports=T0e});var yW=s((P$e,mW)=>{"use strict";function I0e(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}mW.exports=I0e});var qW=s((L$e,hW)=>{"use strict";function R0e(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}hW.exports=R0e});var wW=s((F$e,bW)=>{"use strict";function P0e(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}bW.exports=P0e});var NW=s((j$e,EW)=>{"use strict";function L0e(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}EW.exports=L0e});var OW=s((M$e,SW)=>{"use strict";var F0e=it(),j0e=at();function M0e(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(F0e(t),j0e(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}SW.exports=M0e});var TW=s((B$e,AW)=>{"use strict";var B0e=Jr().isPrimitive,k0e=V(),_W=/[-\/\\^$*+?.()|[\]{}]/g;function C0e(r){var e,t,i;if(!B0e(r))throw new TypeError(k0e("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(_W,"\\$&"):(t=r.substring(1,i),t=t.replace(_W,"\\$&"),r=r[0]+t+r.substring(i),r)}AW.exports=C0e});var RW=s((k$e,IW)=>{"use strict";var V0e=TW();IW.exports=V0e});var LW=s((C$e,PW)=>{"use strict";var G0e=RegExp.prototype.exec;PW.exports=G0e});var jW=s((V$e,FW)=>{"use strict";var U0e=LW();function D0e(r){try{return U0e.call(r),!0}catch{return!1}}FW.exports=D0e});var BW=s((G$e,MW)=>{"use strict";var z0e=ha(),H0e=re(),W0e=jW(),x0e=z0e();function X0e(r){return typeof r=="object"?r instanceof RegExp?!0:x0e?W0e(r):H0e(r)==="[object RegExp]":!1}MW.exports=X0e});var CW=s((U$e,kW)=>{"use strict";var J0e=BW();kW.exports=J0e});var GW=s((D$e,VW)=>{"use strict";function Y0e(r,e,t){return r.replace(e,t)}VW.exports=Y0e});var bi=s((z$e,UW)=>{"use strict";var $0e=GW();UW.exports=$0e});var zW=s((H$e,DW)=>{"use strict";var Z0e=RW(),Q0e=qr(),ff=Jr().isPrimitive,K0e=CW(),cf=V(),rse=bi();function ese(r,e,t){if(!ff(r))throw new TypeError(cf("invalid argument. First argument must be a string. Value: `%s`.",r));if(ff(e))e=new RegExp(Z0e(e),"g");else if(!K0e(e))throw new TypeError(cf("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!ff(t)&&!Q0e(t))throw new TypeError(cf("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return rse(r,e,t)}DW.exports=ese});var WW=s((W$e,HW)=>{"use strict";var tse=zW();HW.exports=tse});var XW=s((x$e,xW)=>{"use strict";var ise=WW(),lf=it(),pf=at(),ase={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function nse(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=lf(n)+", "+pf(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=lf(n)+", "+pf(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=lf(n)+", "+pf(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=ase[this.dtype],i+=ise(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}xW.exports=nse});var YW=s((X$e,JW)=>{"use strict";var sse=typeof ArrayBuffer=="function"?ArrayBuffer:null;JW.exports=sse});var ZW=s((J$e,$W)=>{"use strict";var use=ts(),ose=ge(),fu=YW();function vse(){var r,e,t;if(typeof fu!="function")return!1;try{t=new fu(16),r=use(t)&&typeof fu.isView=="function",r&&(e=new ose(t),e[0]=-3.14,e[1]=NaN,r=r&&fu.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}$W.exports=vse});var KW=s((Y$e,QW)=>{"use strict";var fse=ZW();QW.exports=fse});var ex=s(($$e,rx)=>{"use strict";var cse=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;rx.exports=cse});var ix=s((Z$e,tx)=>{"use strict";function lse(){throw new Error("not implemented")}tx.exports=lse});var cu=s((Q$e,ax)=>{"use strict";var pse=KW(),dse=ex(),gse=ix(),df;pse()?df=dse:df=gse;ax.exports=df});var sx=s((K$e,nx)=>{"use strict";var mse=re(),yse=typeof DataView=="function";function hse(r){return yse&&r instanceof DataView||mse(r)==="[object DataView]"}nx.exports=hse});var ox=s((rZe,ux)=>{"use strict";var qse=sx();ux.exports=qse});var fx=s((eZe,vx)=>{"use strict";var bse=typeof DataView=="function"?DataView:null;vx.exports=bse});var px=s((tZe,lx)=>{"use strict";var wse=ox(),Ese=cu(),cx=fx();function Nse(){var r,e,t;if(typeof cx!="function")return!1;try{t=new Ese(24),e=new cx(t,8),r=wse(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}lx.exports=Nse});var gx=s((iZe,dx)=>{"use strict";var Sse=px();dx.exports=Sse});var yx=s((aZe,mx)=>{"use strict";var Ose=typeof DataView=="function"?DataView:void 0;mx.exports=Ose});var qx=s((nZe,hx)=>{"use strict";function _se(){throw new Error("not implemented")}hx.exports=_se});var y0=s((sZe,bx)=>{"use strict";var Ase=gx(),Tse=yx(),Ise=qx(),gf;Ase()?gf=Tse:gf=Ise;bx.exports=gf});var Ex=s((uZe,wx)=>{"use strict";var Rse=typeof BigInt=="function"?BigInt:void 0;wx.exports=Rse});var Sx=s((oZe,Nx)=>{"use strict";var Pse=Ex();Nx.exports=Pse});var Ox=s((vZe,Lse)=>{Lse.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var Tx=s((fZe,Ax)=>{"use strict";var _x=Ox();function Fse(){var r;return arguments.length===0?_x.all.slice():(r=_x[arguments[0]],r?r.slice():[])}Ax.exports=Fse});var Rx=s((cZe,Ix)=>{"use strict";function jse(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}Ix.exports=jse});var Lx=s((lZe,Px)=>{"use strict";var Mse=Qr(),Bse=za();function kse(r,e){var t,i,a;for(t=Bse(e),a=0;a<t.length;a++)i=t[a],Mse(r,i,e[i]);return r}Px.exports=kse});var yf=s((pZe,jx)=>{"use strict";var Cse=D(),mf=Tx(),Fx=Rx(),Vse=Lx();Cse(mf,"enum",Fx);Vse(mf,Fx());jx.exports=mf});var Mx=s((dZe,Gse)=>{Gse.exports=["row-major","column-major"]});var kx=s((gZe,Bx)=>{"use strict";var Use=Mx();function Dse(){return Use.slice()}Bx.exports=Dse});var Vx=s((mZe,Cx)=>{"use strict";function zse(){return{"row-major":1,"column-major":2}}Cx.exports=zse});var h0=s((yZe,Ux)=>{"use strict";var Hse=D(),Gx=kx(),Wse=Vx();Hse(Gx,"enum",Wse);Ux.exports=Gx});var Dx=s((hZe,xse)=>{xse.exports=["throw","clamp","wrap"]});var Hx=s((qZe,zx)=>{"use strict";var Xse=Dx();function Jse(){return Xse.slice()}zx.exports=Jse});var xx=s((bZe,Wx)=>{"use strict";function Yse(){return{throw:1,clamp:2,wrap:3}}Wx.exports=Yse});var hf=s((wZe,Jx)=>{"use strict";var $se=D(),Xx=Hx(),Zse=xx();$se(Xx,"enum",Zse);Jx.exports=Xx});var Zx=s((EZe,$x)=>{"use strict";var wi=Ye(),Qse=cu(),Kse=y0(),q0=Sx(),rue=yf().enum,eue=h0().enum,tue=hf().enum,iue=rue(),aue=eue(),Yx=tue();function nue(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new Kse(new Qse(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,wi?1:0),f+=1,o.setInt16(f,iue[i],wi),f+=2,o.setBigInt64(f,q0(l),wi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,q0(a[m]),wi),o.setBigInt64(f+c,q0(n[m]*r),wi),f+=8;for(f+=c,o.setBigInt64(f,q0(this._offset*r),wi),f+=8,o.setInt8(f,aue[this._order]),f+=1,o.setInt8(f,Yx[v]),f+=1,o.setBigInt64(f,q0(p),wi),f+=8,m=0;m<p;m++)o.setInt8(f,Yx[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,wi),this.__meta_dataview__=o,o}$x.exports=nue});var Kx=s((NZe,Qx)=>{"use strict";var b0=Ye(),sue=tt(),uue=y0(),oue=Ur(),vue=4294967295>>>0,fue=4294967296;function cue(r){var e,t,i,a;return e=new sue(8),r===0||(a=(r&vue)>>>0,i=oue(r/fue),t=new uue(e.buffer),b0?(t.setUint32(0,a,b0),t.setUint32(4,i,b0)):(t.setUint32(0,i,b0),t.setUint32(4,a,b0))),e}Qx.exports=cue});var eX=s((SZe,rX)=>{"use strict";var w0=Ye(),lue=tt(),pue=y0(),due=Ur(),gue=4294967295>>>0,mue=4294967296,pu=new lue(8),lu=new pue(pu.buffer);function yue(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<pu.length;u++)e[i]=0,i+=t;return e}for(n=(r&gue)>>>0,a=due(r/mue),w0?(lu.setUint32(0,n,w0),lu.setUint32(4,a,w0)):(lu.setUint32(0,a,w0),lu.setUint32(4,n,w0)),u=0;u<pu.length;u++)e[i]=pu[u],i+=t;return e}rX.exports=yue});var aX=s((OZe,iX)=>{"use strict";var hue=D(),tX=Kx(),que=eX();hue(tX,"assign",que);iX.exports=tX});var uX=s((_Ze,sX)=>{"use strict";var qf=Ye(),bue=cu(),wue=y0(),Eue=tt(),Nue=yf().enum,Sue=h0().enum,Oue=hf().enum,E0=aX().assign,_ue=Nue(),Aue=Sue(),nX=Oue();function Tue(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new wue(new bue(i)),e=new Eue(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,qf?1:0),c+=1,v.setInt16(c,_ue[a],qf),c+=2,E0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)E0(n[y],e,1,c),E0(u[y]*r,e,1,c+l),c+=8;for(c+=l,E0(this._offset*r,e,1,c),c+=8,v.setInt8(c,Aue[this._order]),c+=1,v.setInt8(c,nX[f]),c+=1,E0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,nX[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,qf),this.__meta_dataview__=v,v}sX.exports=Tue});var vX=s((AZe,oX)=>{"use strict";var Iue=WH(),Ei=D(),$e=br(),Rue=$H(),Pue=h3(),Lue=vf(),Fue=K1(),jue=tW(),Mue=aW(),Bue=pW(),kue=gW(),Cue=yW(),Vue=qW(),Gue=wW(),Uue=NW(),Due=OW(),zue=XW(),Hue=Zx(),Wue=uX();function ie(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof ie))return new ie(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=Rue(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=Fue(e.get&&e.set),this._iterationOrder=Pue(i),u=Bue(f,t,i,a,this._iterationOrder),v=Lue(i),this._flags={ROW_MAJOR_CONTIGUOUS:Mue(v,u),COLUMN_MAJOR_CONTIGUOUS:jue(v,u),READONLY:!1},this.__meta_dataview__=null,this}Ei(ie,"name","ndarray");$e(ie.prototype,"byteLength",function(){return this._byteLength});$e(ie.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});$e(ie.prototype,"data",function(){return this._buffer});$e(ie.prototype,"dtype",function(){return this._dtype});$e(ie.prototype,"flags",function(){return kue(this._flags)});$e(ie.prototype,"length",function(){return this._length});$e(ie.prototype,"ndims",function(){return this._ndims});$e(ie.prototype,"offset",function(){return this._offset});$e(ie.prototype,"order",function(){return this._order});$e(ie.prototype,"shape",function(){return this._shape.slice()});$e(ie.prototype,"strides",function(){return this._strides.slice()});Ei(ie.prototype,"get",Uue);Ei(ie.prototype,"iget",Cue);Ei(ie.prototype,"set",Gue);Ei(ie.prototype,"iset",Vue);Ei(ie.prototype,"toString",zue);Ei(ie.prototype,"toJSON",Due);Ei(ie.prototype,"__array_meta_dataview__",Iue()?Hue:Wue);oX.exports=ie});var N0=s((TZe,fX)=>{"use strict";var xue=vX();fX.exports=xue});var lX=s((IZe,cX)=>{"use strict";var Xue=ys(),Jue=lt();function Yue(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:Jue(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:Xue(r,[r.length,1],[1,1],0)}cX.exports=Yue});var dX=s((RZe,pX)=>{"use strict";var $ue=lX();pX.exports=$ue});var yX=s((PZe,mX)=>{"use strict";var Zue=h0(),gX=Zue(),Que=gX.length;function Kue(r){var e;for(e=0;e<Que;e++)if(r===gX[e])return!0;return!1}mX.exports=Kue});var qX=s((LZe,hX)=>{"use strict";var roe=yX();hX.exports=roe});var wX=s((FZe,bX)=>{"use strict";function eoe(r){return r.toLowerCase()}bX.exports=eoe});var la=s((jZe,EX)=>{"use strict";var toe=wX();EX.exports=toe});var SX=s((MZe,NX)=>{"use strict";var ioe=qa(),aoe=ra(),noe=Ia(),soe=Ca();function uoe(r,e){var t,i,a,n;for(a=soe(r),ioe(r)?i=aoe(a):i=noe(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}NX.exports=uoe});var _X=s((BZe,OX)=>{"use strict";var ooe=Ve(),voe=qa(),foe=ra(),coe=Ca(),loe=V();function poe(r){var e,t,i;if(!ooe(r))throw new TypeError(loe("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=coe(r),voe(r)&&(e=foe(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}OX.exports=poe});var IX=s((kZe,TX)=>{"use strict";var doe=D(),AX=SX(),goe=_X();doe(AX,"factory",goe);TX.exports=AX});var FX=s((CZe,LX)=>{"use strict";var du=be().isPrimitive,moe=ye().isPrimitive,RX=Nr().isPrimitive,yoe=qX(),hoe=Q2(),bf=la(),qoe=IX().factory,boe=h0(),woe=N0(),Eoe=lt(),dt=V(),Noe=pv(),Soe=$0(),Ooe=boe(),PX=["string","number","complex","boolean","date","any"],_oe=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],Aoe=_oe.length,Toe=5,Ioe=qoe(PX);function Roe(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function Poe(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!RX(i));a++){if(!du(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function Loe(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!RX(i));a++){if(!moe(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function Foe(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(dt('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=bf(r[a]),i==="shape")e.shape=Poe(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=Loe(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!du(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=bf(r[a]),!yoe(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',Ooe.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=bf(r[a]),!Ioe(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',PX.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!du(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!du(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(dt('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function joe(r,e){return Aoe+r+e+Toe}function Moe(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(dt("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=Eoe(r.shape),t!==r.length)throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!hoe(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function Boe(r){var e;if(!Noe(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=Roe(),e.rawBuffer=Soe(r),e=Foe(e.rawBuffer,e),e=Moe(e),e.headerLength=joe(e.ndims,e.strides.length),e.ndarray=new woe("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}LX.exports=Boe});var MX=s((VZe,jX)=>{"use strict";var koe=FX();jX.exports=koe});var kX=s((GZe,BX)=>{"use strict";var Coe=typeof String.prototype.trim<"u";BX.exports=Coe});var wf=s((UZe,CX)=>{"use strict";var Voe=String.prototype.trim;CX.exports=Voe});var DX=s((DZe,UX)=>{"use strict";var VX=wf(),Goe=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,GX="\u180E";function Uoe(){return VX.call(Goe)===""&&VX.call(GX)===GX}UX.exports=Uoe});var HX=s((zZe,zX)=>{"use strict";var Doe=bi(),zoe=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Hoe(r){return Doe(r,zoe,"$1")}zX.exports=Hoe});var xX=s((HZe,WX)=>{"use strict";var Woe=wf();function xoe(r){return Woe.call(r)}WX.exports=xoe});var Ni=s((WZe,XX)=>{"use strict";var Xoe=kX(),Joe=DX(),Yoe=HX(),$oe=xX(),Ef;Xoe&&Joe()?Ef=$oe:Ef=Yoe;XX.exports=Ef});var YX=s((xZe,JX)=>{"use strict";function Zoe(r){return r===null}JX.exports=Zoe});var Nf=s((XZe,$X)=>{"use strict";var Qoe=YX();$X.exports=Qoe});var QX=s((JZe,ZX)=>{"use strict";function Koe(r){return r===void 0}ZX.exports=Koe});var Sf=s((YZe,KX)=>{"use strict";var r1e=QX();KX.exports=r1e});var eJ=s(($Ze,rJ)=>{"use strict";var _f=D(),Af=br(),e1e=ye().isPrimitive,t1e=Nf(),i1e=Sf(),gu=V();function Of(r){return e1e(r)||t1e(r)||i1e(r)}function At(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof At))return new At(e,t,i);if(!Of(e))throw new TypeError(gu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!Of(t))throw new TypeError(gu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(Of(i)){if(i===0)throw new RangeError(gu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(gu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}_f(At,"name","Slice");Af(At.prototype,"start",function(){return this._start});Af(At.prototype,"stop",function(){return this._stop});Af(At.prototype,"step",function(){return this._step});_f(At.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});_f(At.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});rJ.exports=At});var S0=s((ZZe,tJ)=>{"use strict";var a1e=eJ();tJ.exports=a1e});var aJ=s((QZe,iJ)=>{"use strict";var n1e=typeof Object.defineProperty=="function"?Object.defineProperty:null;iJ.exports=n1e});var sJ=s((KZe,nJ)=>{"use strict";var s1e=aJ();function u1e(){try{return s1e({},"x",{}),!0}catch{return!1}}nJ.exports=u1e});var oJ=s((rQe,uJ)=>{"use strict";var o1e=Object.defineProperty;uJ.exports=o1e});var Tf=s((eQe,vJ)=>{"use strict";function v1e(r){return typeof r=="number"}vJ.exports=v1e});var If=s((tQe,cJ)=>{"use strict";function f1e(r){return r[0]==="-"}function fJ(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function c1e(r,e,t){var i=!1,a=e-r.length;return a<0||(f1e(r)&&(i=!0,r=r.substr(1)),r=t?r+fJ(a):fJ(a)+r,i&&(r="-"+r)),r}cJ.exports=c1e});var gJ=s((iQe,dJ)=>{"use strict";var l1e=Tf(),lJ=If(),p1e=String.prototype.toLowerCase,pJ=String.prototype.toUpperCase;function d1e(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!l1e(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=lJ(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=lJ(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===pJ.call(r.specifier)?pJ.call(t):p1e.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}dJ.exports=d1e});var yJ=s((aQe,mJ)=>{"use strict";function g1e(r){return typeof r=="string"}mJ.exports=g1e});var bJ=s((nQe,qJ)=>{"use strict";var m1e=Math.abs,y1e=String.prototype.toLowerCase,hJ=String.prototype.toUpperCase,pa=String.prototype.replace,h1e=/e\+(\d)$/,q1e=/e-(\d)$/,b1e=/^(\d+)$/,w1e=/^(\d+)e/,E1e=/\.0$/,N1e=/\.0*e/,S1e=/(\..*[^0])0*e/;function O1e(r,e){var t,i;switch(e.specifier){case"e":case"E":i=r.toExponential(e.precision);break;case"f":case"F":i=r.toFixed(e.precision);break;case"g":case"G":m1e(r)<1e-4?(t=e.precision,t>0&&(t-=1),i=r.toExponential(t)):i=r.toPrecision(e.precision),e.alternate||(i=pa.call(i,S1e,"$1e"),i=pa.call(i,N1e,"e"),i=pa.call(i,E1e,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pa.call(i,h1e,"e+0$1"),i=pa.call(i,q1e,"e-0$1"),e.alternate&&(i=pa.call(i,b1e,"$1."),i=pa.call(i,w1e,"$1.e")),r>=0&&e.sign&&(i=e.sign+i),i=e.specifier===hJ.call(e.specifier)?hJ.call(i):y1e.call(i),i}qJ.exports=O1e});var NJ=s((sQe,EJ)=>{"use strict";function wJ(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function _1e(r,e,t){var i=e-r.length;return i<0||(r=t?r+wJ(i):wJ(i)+r),r}EJ.exports=_1e});var OJ=s((uQe,SJ)=>{"use strict";var A1e=gJ(),T1e=yJ(),I1e=Tf(),R1e=bJ(),P1e=NJ(),L1e=If(),F1e=String.fromCharCode,j1e=Array.isArray;function mu(r){return r!==r}function M1e(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B1e(r){var e,t,i,a,n,u,o,v,f,c;if(!j1e(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],T1e(i))u+=i;else{if(e=i.precision!==void 0,i=M1e(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,c=0;c<t.length;c++)switch(a=t.charAt(c),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,mu(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,mu(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=A1e(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!mu(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=mu(n)?String(i.arg):F1e(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(e||(i.precision=6),v=parseFloat(i.arg),!isFinite(v)){if(!I1e(i.arg))throw new Error("invalid floating-point number. Value: "+u);v=i.arg,i.padZeros=!1}i.arg=R1e(v,i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=L1e(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=P1e(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}SJ.exports=B1e});var AJ=s((oQe,_J)=>{"use strict";var k1e=OJ();_J.exports=k1e});var IJ=s((vQe,TJ)=>{"use strict";var yu=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C1e(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function V1e(r){var e,t,i,a;for(t=[],a=0,i=yu.exec(r);i;)e=r.slice(a,yu.lastIndex-i[0].length),e.length&&t.push(e),i[6]==="%"?t.push("%"):t.push(C1e(i)),a=yu.lastIndex,i=yu.exec(r);return e=r.slice(a),e.length&&t.push(e),t}TJ.exports=V1e});var PJ=s((fQe,RJ)=>{"use strict";var G1e=IJ();RJ.exports=G1e});var FJ=s((cQe,LJ)=>{"use strict";function U1e(r){return typeof r=="string"}LJ.exports=U1e});var BJ=s((lQe,MJ)=>{"use strict";var D1e=AJ(),z1e=PJ(),H1e=FJ();function jJ(r){var e,t;if(!H1e(r))throw new TypeError(jJ("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[z1e(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return D1e.apply(null,e)}MJ.exports=jJ});var hu=s((pQe,kJ)=>{"use strict";var W1e=BJ();kJ.exports=W1e});var zJ=s((dQe,DJ)=>{"use strict";var CJ=hu(),tn=Object.prototype,VJ=tn.toString,GJ=tn.__defineGetter__,UJ=tn.__defineSetter__,x1e=tn.__lookupGetter__,X1e=tn.__lookupSetter__;function J1e(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||VJ.call(r)==="[object Array]")throw new TypeError(CJ("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||VJ.call(t)==="[object Array]")throw new TypeError(CJ("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(x1e.call(r,e)||X1e.call(r,e)?(i=r.__proto__,r.__proto__=tn,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&GJ&&GJ.call(r,e,t.get),u&&UJ&&UJ.call(r,e,t.set),r}DJ.exports=J1e});var Pf=s((gQe,HJ)=>{"use strict";var Y1e=sJ(),$1e=oJ(),Z1e=zJ(),Rf;Y1e()?Rf=$1e:Rf=Z1e;HJ.exports=Rf});var xJ=s((mQe,WJ)=>{"use strict";var Q1e=Pf();function K1e(r,e,t){Q1e(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}WJ.exports=K1e});var an=s((yQe,XJ)=>{"use strict";var r2e=xJ();XJ.exports=r2e});var YJ=s((hQe,JJ)=>{"use strict";var e2e=Pf();function t2e(r,e,t){e2e(r,e,{configurable:!1,enumerable:!1,get:t})}JJ.exports=t2e});var ZJ=s((qQe,$J)=>{"use strict";var i2e=YJ();$J.exports=i2e});var Lf=s((bQe,QJ)=>{"use strict";function a2e(r){return typeof r=="number"}QJ.exports=a2e});var rY=s((wQe,KJ)=>{"use strict";function n2e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}KJ.exports=n2e});var tY=s((EQe,eY)=>{"use strict";var s2e=rY();eY.exports=s2e});var aY=s((NQe,iY)=>{"use strict";var u2e=tY(),o2e=u2e();function v2e(){return o2e&&typeof Symbol.toStringTag=="symbol"}iY.exports=v2e});var Ff=s((SQe,nY)=>{"use strict";var f2e=aY();nY.exports=f2e});var jf=s((OQe,sY)=>{"use strict";var c2e=Object.prototype.toString;sY.exports=c2e});var oY=s((_Qe,uY)=>{"use strict";var l2e=jf();function p2e(r){return l2e.call(r)}uY.exports=p2e});var fY=s((AQe,vY)=>{"use strict";var d2e=Object.prototype.hasOwnProperty;function g2e(r,e){return r==null?!1:d2e.call(r,e)}vY.exports=g2e});var lY=s((TQe,cY)=>{"use strict";var m2e=fY();cY.exports=m2e});var dY=s((IQe,pY)=>{"use strict";var y2e=typeof Symbol=="function"?Symbol:void 0;pY.exports=y2e});var mY=s((RQe,gY)=>{"use strict";var h2e=dY();gY.exports=h2e});var qY=s((PQe,hY)=>{"use strict";var yY=mY(),q2e=typeof yY=="function"?yY.toStringTag:"";hY.exports=q2e});var wY=s((LQe,bY)=>{"use strict";var b2e=lY(),O0=qY(),Mf=jf();function w2e(r){var e,t,i;if(r==null)return Mf.call(r);t=r[O0],e=b2e(r,O0);try{r[O0]=void 0}catch{return Mf.call(r)}return i=Mf.call(r),e?r[O0]=t:delete r[O0],i}bY.exports=w2e});var qu=s((FQe,EY)=>{"use strict";var E2e=Ff(),N2e=oY(),S2e=wY(),Bf;E2e()?Bf=S2e:Bf=N2e;EY.exports=Bf});var SY=s((jQe,NY)=>{"use strict";NY.exports=Number});var bu=s((MQe,OY)=>{"use strict";var O2e=SY();OY.exports=O2e});var AY=s((BQe,_Y)=>{"use strict";var _2e=bu(),A2e=_2e.prototype.toString;_Y.exports=A2e});var IY=s((kQe,TY)=>{"use strict";var T2e=AY();function I2e(r){try{return T2e.call(r),!0}catch{return!1}}TY.exports=I2e});var kf=s((CQe,RY)=>{"use strict";var R2e=Ff(),P2e=qu(),L2e=bu(),F2e=IY(),j2e=R2e();function M2e(r){return typeof r=="object"?r instanceof L2e?!0:j2e?F2e(r):P2e(r)==="[object Number]":!1}RY.exports=M2e});var LY=s((VQe,PY)=>{"use strict";var B2e=Lf(),k2e=kf();function C2e(r){return B2e(r)||k2e(r)}PY.exports=C2e});var Vf=s((GQe,jY)=>{"use strict";var FY=an(),Cf=LY(),V2e=Lf(),G2e=kf();FY(Cf,"isPrimitive",V2e);FY(Cf,"isObject",G2e);jY.exports=Cf});var BY=s((UQe,MY)=>{"use strict";var U2e=Number.POSITIVE_INFINITY;MY.exports=U2e});var CY=s((DQe,kY)=>{"use strict";var D2e=bu(),z2e=D2e.NEGATIVE_INFINITY;kY.exports=z2e});var GY=s((zQe,VY)=>{"use strict";var H2e=Math.floor;VY.exports=H2e});var DY=s((HQe,UY)=>{"use strict";var W2e=GY();UY.exports=W2e});var HY=s((WQe,zY)=>{"use strict";var x2e=DY();function X2e(r){return x2e(r)===r}zY.exports=X2e});var xY=s((xQe,WY)=>{"use strict";var J2e=HY();WY.exports=J2e});var Gf=s((XQe,XY)=>{"use strict";var Y2e=BY(),$2e=CY(),Z2e=xY();function Q2e(r){return r<Y2e&&r>$2e&&Z2e(r)}XY.exports=Q2e});var Uf=s((JQe,JY)=>{"use strict";var K2e=Vf().isPrimitive,rve=Gf();function eve(r){return K2e(r)&&rve(r)}JY.exports=eve});var Df=s((YQe,YY)=>{"use strict";var tve=Vf().isObject,ive=Gf();function ave(r){return tve(r)&&ive(r.valueOf())}YY.exports=ave});var ZY=s(($Qe,$Y)=>{"use strict";var nve=Uf(),sve=Df();function uve(r){return nve(r)||sve(r)}$Y.exports=uve});var r$=s((ZQe,KY)=>{"use strict";var QY=an(),zf=ZY(),ove=Uf(),vve=Df();QY(zf,"isPrimitive",ove);QY(zf,"isObject",vve);KY.exports=zf});var t$=s((QQe,e$)=>{"use strict";function fve(r){return r===null}e$.exports=fve});var a$=s((KQe,i$)=>{"use strict";var cve=t$();i$.exports=cve});var s$=s((rKe,n$)=>{"use strict";function lve(r){return r===void 0}n$.exports=lve});var o$=s((eKe,u$)=>{"use strict";var pve=s$();u$.exports=pve});var f$=s((tKe,v$)=>{"use strict";var Wf=an(),xf=ZJ(),dve=r$().isPrimitive,gve=a$(),mve=o$(),wu=hu();function Hf(r){return dve(r)||gve(r)||mve(r)}function Tt(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Tt))return new Tt(e,t,i);if(!Hf(e))throw new TypeError(wu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!Hf(t))throw new TypeError(wu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(Hf(i)){if(i===0)throw new RangeError(wu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(wu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}Wf(Tt,"name","Slice");xf(Tt.prototype,"start",function(){return this._start});xf(Tt.prototype,"stop",function(){return this._stop});xf(Tt.prototype,"step",function(){return this._step});Wf(Tt.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});Wf(Tt.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});v$.exports=Tt});var l$=s((iKe,c$)=>{"use strict";var yve=f$();c$.exports=yve});var Xf=s((aKe,p$)=>{"use strict";function hve(){return/^\s*function\s*([^(]*)/i}p$.exports=hve});var g$=s((nKe,d$)=>{"use strict";var qve=Xf(),bve=qve();d$.exports=bve});var h$=s((sKe,y$)=>{"use strict";var wve=an(),m$=Xf(),Eve=g$();wve(m$,"REGEXP",Eve);y$.exports=m$});var b$=s((uKe,q$)=>{"use strict";var Nve=qu(),Jf;function Sve(r){return Nve(r)==="[object Array]"}Array.isArray?Jf=Array.isArray:Jf=Sve;q$.exports=Jf});var E$=s((oKe,w$)=>{"use strict";var Ove=b$();w$.exports=Ove});var S$=s((vKe,N$)=>{"use strict";var _ve=E$(),Ave=hu();function Tve(r){if(typeof r!="function")throw new TypeError(Ave("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!_ve(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}N$.exports=Tve});var _$=s((fKe,O$)=>{"use strict";var Ive=S$();O$.exports=Ive});var T$=s((cKe,A$)=>{"use strict";function Rve(r){return r!==null&&typeof r=="object"}A$.exports=Rve});var R$=s((lKe,I$)=>{"use strict";var Pve=an(),Lve=_$(),Yf=T$(),Fve=Lve(Yf);Pve(Yf,"isObjectLikeArray",Fve);I$.exports=Yf});var L$=s((pKe,P$)=>{"use strict";var jve=R$();function Mve(r){return jve(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}P$.exports=Mve});var j$=s((dKe,F$)=>{"use strict";var Bve=L$();F$.exports=Bve});var B$=s((gKe,M$)=>{"use strict";var kve=qu(),Cve=h$().REGEXP,Vve=j$();function Gve(r){var e,t,i;if(t=kve(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Cve.exec(i.toString()),e)return e[1]}return Vve(r)?"Buffer":t}M$.exports=Gve});var C$=s((mKe,k$)=>{"use strict";var Uve=B$();k$.exports=Uve});var G$=s((yKe,V$)=>{"use strict";var Dve=l$(),zve=C$();function Hve(r){return r instanceof Dve||zve(r)==="Slice"}V$.exports=Hve});var D$=s((hKe,U$)=>{"use strict";var Wve=G$();U$.exports=Wve});var W$=s((qKe,H$)=>{"use strict";var $f=D(),z$=br(),xve=ye().isPrimitive,Xve=Nf(),Jve=Sf(),Yve=D$(),$ve=V();function Zve(r){return xve(r)||Xve(r)||Jve(r)||Yve(r)}function Te(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Te)){if(r===1)return new Te(arguments[0]);if(r===2)return new Te(arguments[0],arguments[1]);if(r===3)return new Te(arguments[0],arguments[1],arguments[2]);if(r===4)return new Te(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Te(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Te.prototype),Te.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!Zve(i))throw new TypeError($ve("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}$f(Te,"name","MultiSlice");z$(Te.prototype,"ndims",function(){return this._data.length});z$(Te.prototype,"data",function(){return this._data.slice()});$f(Te.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});$f(Te.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});H$.exports=Te});var Eu=s((bKe,x$)=>{"use strict";var Qve=W$();x$.exports=Qve});var J$=s((wKe,X$)=>{"use strict";var Kve=/(?:\s*-\s*)(?=\d+)(\d+)$/;X$.exports=Kve});var $$=s((EKe,Y$)=>{"use strict";var r3e=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;Y$.exports=r3e});var K$=s((NKe,Q$)=>{"use strict";var Z$=Ur(),e3e=J$(),t3e=$$();function i3e(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(e3e),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match(t3e),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?Z$((e-1)/r):Z$(e/r)):-1}Q$.exports=i3e});var eZ=s((SKe,rZ)=>{"use strict";var a3e=/\s*:\s*/;rZ.exports=a3e});var iZ=s((OKe,tZ)=>{"use strict";var n3e=/^[-+]?[0-9]+$/;tZ.exports=n3e});var nZ=s((_Ke,aZ)=>{"use strict";var s3e=/^end/;aZ.exports=s3e});var uZ=s((AKe,sZ)=>{"use strict";function u3e(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}sZ.exports=u3e});var vZ=s((TKe,oZ)=>{"use strict";function o3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}oZ.exports=o3e});var cZ=s((IKe,fZ)=>{"use strict";function v3e(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}fZ.exports=v3e});var mZ=s((RKe,gZ)=>{"use strict";var lZ=S0(),f3e=Ni(),pZ=K$(),c3e=eZ(),Zf=iZ(),dZ=nZ(),nn=uZ(),da=vZ(),l3e=cZ();function p3e(r,e,t){var i,a,n;if(i=f3e(r).split(c3e),a=i.length,a<2||a>3)return nn();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(Zf.test(n)===!1)return nn();if(n=parseInt(n,10),n===0)return l3e();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(dZ.test(n)){if(n=pZ(n,e,i[2]<0,t),n<0)return n===-2?da():nn();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(Zf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return da();n=0}}else if(n>=e){if(t)return da();i[2]<0?n=e-1:n=e}i[0]=n}else return nn();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(dZ.test(n)){if(n=pZ(n,e,i[2]<0,t),n<0)return n===-2?da():nn();i[1]=n}else if(Zf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return da();n=0}else{if(t&&n<-1)return da();n=null}}else if(n>e){if(t)return da();n=e}i[1]=n}else return nn();return e===0?new lZ(0,0,i[2]):new lZ(i[0],i[1],i[2])}gZ.exports=p3e});var hZ=s((PKe,yZ)=>{"use strict";var d3e=mZ();yZ.exports=d3e});var bZ=s((LKe,qZ)=>{"use strict";function g3e(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}qZ.exports=g3e});var EZ=s((FKe,wZ)=>{"use strict";function m3e(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}wZ.exports=m3e});var SZ=s((jKe,NZ)=>{"use strict";function y3e(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}NZ.exports=y3e});var _Z=s((MKe,OZ)=>{"use strict";function h3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}OZ.exports=h3e});var TZ=s((BKe,AZ)=>{"use strict";var q3e=/\s*,\s*/;AZ.exports=q3e});var RZ=s((kKe,IZ)=>{"use strict";var b3e=/^[-+]?[0-9]+$/;IZ.exports=b3e});var FZ=s((CKe,LZ)=>{"use strict";var w3e=Ni(),E3e=S0(),N3e=Eu(),S3e=hZ(),O3e=bZ(),_3e=EZ(),A3e=SZ(),PZ=_Z(),T3e=TZ(),I3e=RZ();function R3e(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=w3e(r).split(T3e),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return O3e();for(n=!0,p=0;p<o-v+1;p++)a.push(new E3e(0,e[l],1)),l+=1;continue}if(u=e[l],I3e.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return PZ()}else if(f>=u)return PZ()}l+=1}else{if(f=S3e(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?_3e():A3e():N3e.apply(null,a)}LZ.exports=R3e});var MZ=s((VKe,jZ)=>{"use strict";var P3e=FZ();jZ.exports=P3e});var CZ=s((GKe,kZ)=>{"use strict";var L3e=Jr().isPrimitive,BZ=MZ(),F3e=V();function j3e(r,e,t){var i;if(!L3e(r))throw new TypeError(F3e('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=BZ(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=BZ(r,e,!1)}}return i}kZ.exports=j3e});var GZ=s((UKe,VZ)=>{"use strict";var M3e=CZ();VZ.exports=M3e});var DZ=s((DKe,UZ)=>{"use strict";function B3e(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function k3e(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function C3e(r,e){return e==="column-major"?k3e(r):B3e(r)}UZ.exports=C3e});var HZ=s((zKe,zZ)=>{"use strict";function V3e(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function G3e(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function U3e(r,e,t){return e==="column-major"?G3e(r,t):V3e(r,t)}zZ.exports=U3e});var Nu=s((HKe,xZ)=>{"use strict";var D3e=D(),WZ=DZ(),z3e=HZ();D3e(WZ,"assign",z3e);xZ.exports=WZ});var JZ=s((WKe,XZ)=>{"use strict";function H3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}XZ.exports=H3e});var $Z=s((xKe,YZ)=>{"use strict";var W3e=S0(),_0=JZ();function x3e(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return _0();i=0}}else if(i>=e){if(t)return _0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return _0();a=0}else{if(t&&a<-1)return _0();a=null}}else if(a>e){if(t)return _0();a=e}return new W3e(i,a,n)}YZ.exports=x3e});var QZ=s((XKe,ZZ)=>{"use strict";var X3e=$Z();ZZ.exports=X3e});var rQ=s((JKe,KZ)=>{"use strict";function J3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}KZ.exports=J3e});var iQ=s((YKe,tQ)=>{"use strict";var Y3e=Eu(),A0=S0(),$3e=QZ(),eQ=rQ();function Z3e(r,e,t){return r===null?new A0(0,e,1):typeof r=="number"?r>=e?t?eQ():new A0(e,e,1):r<0?(r=e+r,r<0?t?eQ():new A0(0,0,1):new A0(r,r+1,1)):new A0(r,r+1,1):$3e(r,e,t)}function Q3e(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=Z3e(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return Y3e.apply(null,a)}tQ.exports=Q3e});var nQ=s(($Ke,aQ)=>{"use strict";var K3e=iQ();aQ.exports=K3e});var uQ=s((ZKe,sQ)=>{"use strict";function rfe(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}sQ.exports=rfe});var vQ=s((QKe,oQ)=>{"use strict";var efe=uQ();oQ.exports=efe});var cQ=s((KKe,fQ)=>{"use strict";var tfe=Ka();function ife(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:tfe((i-t)/e)}fQ.exports=ife});var pQ=s((rrt,lQ)=>{"use strict";var afe=cQ();lQ.exports=afe});var gQ=s((ert,dQ)=>{"use strict";var nfe=pQ();function sfe(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(nfe(e[i]));return t}dQ.exports=sfe});var yQ=s((trt,mQ)=>{"use strict";var ufe=gQ();mQ.exports=ufe});var qQ=s((irt,hQ)=>{"use strict";function ofe(r){return r.dtype}hQ.exports=ofe});var wQ=s((art,bQ)=>{"use strict";var vfe=qQ();bQ.exports=vfe});var NQ=s((nrt,EQ)=>{"use strict";var ffe=In();function cfe(r,e){var t=r.shape;return e?ffe(t):t}EQ.exports=cfe});var OQ=s((srt,SQ)=>{"use strict";var lfe=NQ();SQ.exports=lfe});var AQ=s((urt,_Q)=>{"use strict";var pfe=Nu(),dfe=In(),gfe="row-major";function mfe(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=gfe),pfe(i,t))):e?dfe(a):a}_Q.exports=mfe});var IQ=s((ort,TQ)=>{"use strict";var yfe=AQ();TQ.exports=yfe});var PQ=s((vrt,RQ)=>{"use strict";function hfe(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}RQ.exports=hfe});var Su=s((frt,LQ)=>{"use strict";var qfe=PQ();LQ.exports=qfe});var jQ=s((crt,FQ)=>{"use strict";var bfe=Su();function wfe(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:bfe(t,e))}FQ.exports=wfe});var BQ=s((lrt,MQ)=>{"use strict";var Efe=jQ();MQ.exports=Efe});var CQ=s((prt,kQ)=>{"use strict";var Nfe=vf(),Qf="row-major",Sfe="column-major";function Ofe(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=Nfe(e),t===1||t===3)?Qf:t===2?Sfe:r.shape.length===0?Qf:null)}kQ.exports=Ofe});var GQ=s((drt,VQ)=>{"use strict";var _fe=CQ();VQ.exports=_fe});var DQ=s((grt,UQ)=>{"use strict";function Afe(r){return r.data}UQ.exports=Afe});var HQ=s((mrt,zQ)=>{"use strict";var Tfe=DQ();zQ.exports=Tfe});var xQ=s((yrt,WQ)=>{"use strict";function Ife(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}WQ.exports=Ife});var JQ=s((hrt,XQ)=>{"use strict";function Rfe(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}XQ.exports=Rfe});var $Q=s((qrt,YQ)=>{"use strict";var Pfe=li(),Lfe=ge(),Ffe=et(),jfe=Ea(),Mfe=oi(),Bfe=Sa(),kfe=$i(),Cfe=me(),Vfe=tt(),Gfe=Na(),Ufe=Fa(),Dfe=ka(),zfe={binary:Pfe,float64:Lfe,float32:Ffe,generic:Array,int16:jfe,int32:Mfe,int8:Bfe,uint16:kfe,uint32:Cfe,uint8:Vfe,uint8c:Gfe,complex64:Ufe,complex128:Dfe};YQ.exports=zfe});var QQ=s((brt,ZQ)=>{"use strict";var Hfe=$Q();function Wfe(r){return Hfe[r]||null}ZQ.exports=Wfe});var rK=s((wrt,KQ)=>{"use strict";var xfe=QQ();KQ.exports=xfe});var tK=s((Ert,eK)=>{"use strict";var Xfe=qr(),Jfe=li(),Yfe=Xfe(Jfe.allocUnsafe);eK.exports=Yfe});var aK=s((Nrt,iK)=>{"use strict";var $fe=be(),Zfe=V(),Qfe=li();function Kfe(r){if(!$fe(r))throw new TypeError(Zfe("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return Qfe.allocUnsafe(r)}iK.exports=Kfe});var sK=s((Srt,nK)=>{"use strict";var r4e=be(),e4e=V(),t4e=li();function i4e(r){if(!r4e(r))throw new TypeError(e4e("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new t4e(r)}nK.exports=i4e});var oK=s((Ort,uK)=>{"use strict";var a4e=tK(),n4e=aK(),s4e=sK(),Kf;a4e?Kf=n4e:Kf=s4e;uK.exports=Kf});var fK=s((_rt,vK)=>{"use strict";function u4e(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}vK.exports=u4e});var lK=s((Art,cK)=>{"use strict";var o4e=rK(),v4e=oK(),f4e=fK();function c4e(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function l4e(r){return f4e(v4e(r))}function p4e(r,e){var t=o4e(r);return t?new t(e):null}function d4e(r,e){return r==="generic"?c4e(e):r==="binary"?l4e(e):p4e(r,e)}cK.exports=d4e});var r4=s((Trt,pK)=>{"use strict";var g4e=lK();pK.exports=g4e});var gK=s((Irt,dK)=>{"use strict";var m4e=r4(),y4e=si();function h4e(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=y4e(u),new r(e,m4e(e,0),t,n,0,i,{readonly:a})}dK.exports=h4e});var wK=s((Rrt,bK)=>{"use strict";var mK=nQ(),q4e=vQ(),yK=yQ(),e4=q3(),b4e=si(),hK=lt(),w4e=wQ(),E4e=OQ(),N4e=IQ(),S4e=BQ(),O4e=GQ(),t4=HQ(),qK=V(),_4e=xQ(),A4e=JQ(),T4e=gK();function I4e(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=w4e(r),o=E4e(r,!0),a=N4e(r,!0),n=S4e(r),v=O4e(r),c=o.length,e.ndims!==c)throw new RangeError(qK("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,t4(r),o,a,n,v,{readonly:!i});if(f=q4e(e),m=mK(e,o,!0),m.code){if(t)throw new RangeError(qK("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=mK(e,o,!1),p=yK(m),hK(e4(p,f))>0&&(p=b4e(p.length))}else p=yK(m);return hK(p)===0?T4e(l,u,e4(p,f),v,!i):(n=_4e(m,a,n),p=e4(p,f),p.length===0?new l(u,t4(r),[],[0],n,v,{readonly:!i}):(a=A4e(m,a,f),new l(u,t4(r),p,a,n,v,{readonly:!i})))}bK.exports=I4e});var i4=s((Prt,EK)=>{"use strict";var R4e=wK();EK.exports=R4e});var SK=s((Lrt,NK)=>{"use strict";var P4e=N0();function L4e(r){return r instanceof P4e||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}NK.exports=L4e});var _K=s((Frt,OK)=>{"use strict";var F4e=SK();OK.exports=F4e});var TK=s((jrt,AK)=>{"use strict";function j4e(r){var e=r.flags;return e&&e.READONLY===!0}AK.exports=j4e});var RK=s((Mrt,IK)=>{"use strict";var M4e=TK();IK.exports=M4e});var LK=s((Brt,PK)=>{"use strict";var B4e=be().isPrimitive,k4e=Ve(),a4=V();function C4e(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(a4("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!k4e(t))throw new TypeError(a4("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!B4e(i))throw new TypeError(a4("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}PK.exports=C4e});var jK=s((krt,FK)=>{"use strict";var V4e=LK();FK.exports=V4e});var n4=s((Crt,MK)=>{"use strict";var G4e="row-major";function U4e(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function D4e(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function z4e(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===G4e?U4e(n,r,t,i,a):D4e(n,r,t,i,a)}MK.exports=z4e});var kK=s((Vrt,BK)=>{"use strict";var H4e=si(),W4e=n4();function x4e(r,e,t,i){return W4e(r,e,t,i,H4e(r.length))}BK.exports=x4e});var GK=s((Grt,VK)=>{"use strict";var X4e=D(),CK=kK(),J4e=n4();X4e(CK,"assign",J4e);VK.exports=CK});var DK=s((Urt,UK)=>{"use strict";var We=Eu();function Y4e(r){switch(r.length){case 0:return new We;case 1:return new We(r[0]);case 2:return new We(r[0],r[1]);case 3:return new We(r[0],r[1],r[2]);case 4:return new We(r[0],r[1],r[2],r[3]);case 5:return new We(r[0],r[1],r[2],r[3],r[4]);case 6:return new We(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new We(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return We.apply(null,r)}}UK.exports=Y4e});var HK=s((Drt,zK)=>{"use strict";var $4e=DK();zK.exports=$4e});var JK=s((zrt,XK)=>{"use strict";var s4=D(),Z4e=hr(),Q4e=de().isPrimitive,K4e=_K(),rce=RK(),ece=vr(),WK=Mn(),tce=si(),ice=jK(),ace=lt(),nce=i4(),sce=GK().assign,uce=HK(),Ou=V();function xK(r){var e,t,i,a,n,u,o,v,f,c,l;if(!K4e(r))throw new TypeError(Ou("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!Z4e(e))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ece(e,"readonly")){if(!Q4e(e.readonly))throw new TypeError(Ou("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&rce(r))throw new Error(Ou("invalid option. Cannot write to read-only array."))}}if(t=ice(r),i=t.length,i<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return c=ace(t),c===0&&(u=!0),c/=t[i-1]*t[i-2],v=i-3,f=t[v],l=-1,o=tce(i),o[i-1]=null,o[i-2]=null,n={},s4(n,"next",p),s4(n,"return",m),WK&&s4(n,WK,y),n;function p(){var g,d,h;return l+=1,u||l>=c?{done:!0}:(g=o.slice(),d=uce(o),h=(o[v]+1)%f,o[v]=h,h===0&&(o=sce(t,"row-major",o,v-1,o)),{value:[g,nce(r,d,!0,a.writable)],done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return xK(r,a)}}XK.exports=xK});var $K=s((Hrt,YK)=>{"use strict";var oce=JK();YK.exports=oce});var QK=s((Wrt,ZK)=>{"use strict";var vce=$K(),u4=ys(),fce=Rn();function cce(r){return[["[ ] ="],[""],[r.ndarray.get()]]}function lce(r){var e=[["[ : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(u4(r.ndarray.data,[r.length,1],[r.strides[0],1],r.ndarray.offset))}function pce(r){var e=[["[ :, : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(u4(r.ndarray.data,r.shape,r.strides,r.ndarray.offset))}function T0(r){return fce("",r)}function dce(r){var e,t,i,a,n;for(e=r.length,t=e-1,n=e-2,i="",a=0;a<e;a++)a<n?i+=r[a].toString():i+=":",a<t&&(i+=", ");return i}function gce(r){return u4(r.data,r.shape,r.strides,r.offset)}function mce(r,e){var t;for(t=0;t<r.length;t++)e.push(r[t]);return e}function yce(r,e){var t=T0(e);return t[0]="ndarray: ("+r.join(", ")+")",t}function hce(r,e){var t=T0(e);return t[0]="[ "+dce(r)+" ] =",t}function qce(r){var e,t,i,a,n,u;if(t=r.ndims,t===0)return cce(r);if(t===1)return lce(r);if(t===2)return pce(r);for(e=r.shape,i=e[t-1],n=vce(r.ndarray),a=[yce(e,i),T0(i)];u=n.next(),!u.done;)a.push(hce(u.value[0],i)),a.push(T0(i)),mce(gce(u.value[1]),a),a.push(T0(i));return a}ZK.exports=qce});var rrr=s((xrt,KK)=>{"use strict";var bce=QK();KK.exports=bce});var irr=s((Xrt,trr)=>{"use strict";function err(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=err(r,e,t,i,a,n+1),v.push(o),i+=u;return v}trr.exports=err});var nrr=s((Jrt,arr)=>{"use strict";var wce=Cn(),Ece=irr();function Nce(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return Ece(wce(r),e,t,i,a,0)}arr.exports=Nce});var urr=s((Yrt,srr)=>{"use strict";var Sce=nrr();srr.exports=Sce});var vrr=s(($rt,orr)=>{"use strict";var Oce=Nu(),_ce=Su(),Ace=r4(),Tce=V(),Ice=N0(),Rce=lt();function Pce(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=Rce(e),u=Oce(e,t)):(n=1,u=[0]),a=Ace(r,n),a===null)throw new TypeError(Tce("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new Ice(r,a,e,u,_ce(e,u),t)}orr.exports=Pce});var crr=s((Zrt,frr)=>{"use strict";var Lce=vrr();frr.exports=Lce});var prr=s((Qrt,lrr)=>{"use strict";var Ze=Qr(),Fce=N0(),jce=dX(),Mce=lt(),Bce=MX(),kce=GZ(),Cce=Nu(),Vce=i4(),Gce=rrr(),Uce=Su(),Dce=urr(),zce=crr();function Hce(r){return Ze(r,"ndarray",Fce),Ze(r,"ndarray2range",jce),Ze(r,"numel",Mce),Ze(r,"range2ndarray",Bce),Ze(r,"seq2multislice",kce),Ze(r,"shape2strides",Cce),Ze(r,"slice",Vce),Ze(r,"stackedRepr",Gce),Ze(r,"strides2offset",Uce),Ze(r,"toArray",Dce),Ze(r,"zeros",zce),r}lrr.exports=Hce});var grr=s((Krt,drr)=>{"use strict";var Wce=ni();function xce(r,e,t,i){Wce(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}drr.exports=xce});var Sr=s((ret,mrr)=>{"use strict";var Xce=grr();mrr.exports=Xce});var hrr=s((eet,yrr)=>{"use strict";function Jce(r){return e;function e(){return r}}yrr.exports=Jce});var mr=s((tet,qrr)=>{"use strict";var Yce=hrr();qrr.exports=Yce});var wrr=s((iet,brr)=>{"use strict";var $ce=pr();function Zce(r){return r===0&&1/r===$ce}brr.exports=Zce});var Si=s((aet,Err)=>{"use strict";var Qce=wrr();Err.exports=Qce});var Orr=s((net,Srr)=>{"use strict";var Kce=Si(),Nrr=H(),o4=pr();function r6e(r,e){return Nrr(r)||Nrr(e)?NaN:r===o4||e===o4?o4:r===e&&r===0?Kce(r)?r:e:r>e?r:e}Srr.exports=r6e});var v4=s((set,_rr)=>{"use strict";var e6e=Orr();_rr.exports=e6e});var Irr=s((uet,Trr)=>{"use strict";var Arr=65535;function t6e(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&Arr)>>>0,o=(e&Arr)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}Trr.exports=t6e});var Prr=s((oet,Rrr)=>{"use strict";var i6e=Irr();Rrr.exports=i6e});var f4=s((vet,Lrr)=>{"use strict";function a6e(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}Lrr.exports=a6e});var Mrr=s((fet,jrr)=>{"use strict";var Frr=Cn(),n6e=f4(),c4=8;function s6e(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=Frr(e),v=Frr(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,n6e(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%c4,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<c4)return i;for(c=f;c<r;c+=c4)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}jrr.exports=s6e});var Crr=s((cet,krr)=>{"use strict";var Brr=Cn(),u6e=f4(),I0=8;function o6e(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=Brr(e),c=Brr(a),f.accessorProtocol||c.accessorProtocol)return u6e(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%I0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<I0)return a;for(p=l;p<r;p+=I0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=I0,v+=I0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}krr.exports=o6e});var Oi=s((pet,Grr)=>{"use strict";var v6e=D(),Vrr=Mrr(),f6e=Crr();v6e(Vrr,"ndarray",f6e);Grr.exports=Vrr});var Drr=s((det,Urr)=>{"use strict";function c6e(){}Urr.exports=c6e});var Hrr=s((get,zrr)=>{"use strict";var l6e=Drr();function p6e(){return l6e.name==="foo"}zrr.exports=p6e});var xrr=s((met,Wrr)=>{"use strict";var d6e=Hrr();Wrr.exports=d6e});var Jrr=s((yet,Xrr)=>{"use strict";var g6e=qr(),m6e=xrr(),y6e=V(),h6e=a2().REGEXP,q6e=m6e();function b6e(r){if(g6e(r)===!1)throw new TypeError(y6e("invalid argument. Must provide a function. Value: `%s`.",r));return q6e?r.name:h6e.exec(r.toString())[1]}Xrr.exports=b6e});var $rr=s((het,Yrr)=>{"use strict";var w6e=Jrr();Yrr.exports=w6e});var Qrr=s((qet,Zrr)=>{"use strict";var E6e=Sa(),N6e=tt(),S6e=Na(),O6e=Ea(),_6e=$i(),A6e=oi(),T6e=me(),I6e=et(),R6e=ge(),P6e=[R6e,I6e,A6e,T6e,O6e,_6e,E6e,N6e,S6e];Zrr.exports=P6e});var Krr=s((bet,L6e)=>{L6e.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var ner=s((wet,aer)=>{"use strict";var F6e=ui(),j6e=$rr(),ter=ia(),M6e=o2(),B6e=ge(),rer=Qrr(),eer=Krr(),_u=M6e()?ter(B6e):ier;_u=j6e(_u)==="TypedArray"?_u:ier;function ier(){}function k6e(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof _u)return!0;for(t=0;t<rer.length;t++)if(r instanceof rer[t])return!0;for(;r;){for(e=F6e(r),t=0;t<eer.length;t++)if(eer[t]===e)return!0;r=ter(r)}return!1}aer.exports=k6e});var uer=s((Eet,ser)=>{"use strict";var C6e=ner();ser.exports=C6e});var ver=s((Net,oer)=>{"use strict";var V6e=Fa(),G6e=ka(),U6e=[G6e,V6e];oer.exports=U6e});var fer=s((Oet,D6e)=>{D6e.exports=["Complex64Array","Complex128Array"]});var der=s((_et,per)=>{"use strict";var z6e=ui(),H6e=ia(),cer=ver(),ler=fer();function W6e(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<cer.length;t++)if(r instanceof cer[t])return!0;for(;r;){for(e=z6e(r),t=0;t<ler.length;t++)if(ler[t]===e)return!0;r=H6e(r)}return!1}per.exports=W6e});var mer=s((Aet,ger)=>{"use strict";var x6e=der();ger.exports=x6e});var her=s((Tet,yer)=>{"use strict";var X6e=V();function J6e(r,e){if(typeof e!="function")throw new TypeError(X6e("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}yer.exports=J6e});var ber=s((Iet,qer)=>{"use strict";var Y6e=her();qer.exports=Y6e});var Eer=s((Ret,wer)=>{"use strict";var $6e=Sa(),Z6e=tt(),Q6e=Na(),K6e=Ea(),rle=$i(),ele=oi(),tle=me(),ile=et(),ale=ge(),nle=Fa(),sle=ka(),ule=[[ale,"Float64Array"],[ile,"Float32Array"],[ele,"Int32Array"],[tle,"Uint32Array"],[K6e,"Int16Array"],[rle,"Uint16Array"],[$6e,"Int8Array"],[Z6e,"Uint8Array"],[Q6e,"Uint8ClampedArray"],[nle,"Complex64Array"],[sle,"Complex128Array"]];wer.exports=ule});var Ser=s((Pet,Ner)=>{"use strict";var ole=ber(),vle=ui(),fle=ia(),sn=Eer();function cle(r){var e,t;for(t=0;t<sn.length;t++)if(ole(r,sn[t][0]))return sn[t][1];for(;r;){for(e=vle(r),t=0;t<sn.length;t++)if(e===sn[t][1])return sn[t][1];r=fle(r)}}Ner.exports=cle});var _er=s((Let,Oer)=>{"use strict";var lle=uer(),ple=mer(),dle=Aa(),gle=Ta(),mle=V(),yle=Ser();function hle(r){var e,t,i;if(lle(r))e=r;else if(ple(r))r.BYTES_PER_ELEMENT===8?e=dle(r,0):e=gle(r,0);else throw new TypeError(mle("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:yle(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}Oer.exports=hle});var Or=s((Fet,Aer)=>{"use strict";var qle=_er();Aer.exports=qle});var l4=s((jet,Ter)=>{"use strict";var ble=ba(),wle=Ur(),Ele=ble-1;function Nle(){var r=wle(1+Ele*Math.random());return r>>>0}Ter.exports=Nle});var b4=s((Met,Ver)=>{"use strict";var It=D(),_i=br(),Ier=Sr(),p4=vr(),Sle=hr(),Ole=Ve(),Rer=qt(),_le=de().isPrimitive,Per=nt().isPrimitive,Ber=oa(),ker=ba(),Ie=me(),Ale=v4(),q4=Prr(),un=Oi(),Tle=Or(),Pe=V(),Ler=l4(),ue=624,d4=397,Fer=ker>>>0,Ile=19650218>>>0,g4=2147483648>>>0,m4=2147483647>>>0,Rle=1812433253>>>0,Ple=1664525>>>0,Lle=1566083941>>>0,Fle=2636928640>>>0,jle=4022730752>>>0,Mle=2567483615>>>0,y4=[0>>>0,Mle>>>0],Cer=1/(Ber+1),Ble=67108864>>>0,kle=2147483648>>>0,h4=1>>>0,Cle=Ber*Cer,Au=1,Tu=3,Ai=2,Ti=ue+3,Re=ue+5,R0=ue+6;function jer(r,e){var t;return e?t="option":t="argument",r.length<R0+1?new RangeError(Pe("invalid %s. `state` array has insufficient length.",t)):r[0]!==Au?new RangeError(Pe("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,Au,r[0])):r[1]!==Tu?new RangeError(Pe("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Tu,r[1])):r[Ai]!==ue?new RangeError(Pe("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[Ai])):r[Ti]!==1?new RangeError(Pe("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[Ti])):r[Re]!==r.length-R0?new RangeError(Pe("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-R0,r[Re])):null}function Mer(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=q4(t,Rle)+i>>>0;return r}function Vle(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=Ale(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=q4(a,Ple)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=q4(a,Lle)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=kle,r}function Gle(r){var e,t,i,a;for(a=ue-d4,t=0;t<a;t++)e=r[t]&g4|r[t+1]&m4,r[t]=r[t+d4]^e>>>1^y4[e&h4];for(i=ue-1;t<i;t++)e=r[t]&g4|r[t+1]&m4,r[t]=r[t-a]^e>>>1^y4[e&h4];return e=r[i]&g4|r[0]&m4,r[i]=r[d4-1]^e>>>1^y4[e&h4],r}function Ule(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Sle(r))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(p4(r,"copy")&&(i.copy=r.copy,!_le(r.copy)))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(p4(r,"state")){if(t=r.state,i.state=!0,!Rer(t))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=jer(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ie(t.length),un(t.length,t,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,t[Re])}if(a===void 0)if(p4(r,"seed"))if(a=r.seed,i.seed=!0,Per(a)){if(a>Fer)throw new RangeError(Pe("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(Ole(a)===!1||a.length<1)throw new TypeError(Pe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!Per(a))throw new TypeError(Pe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>Fer)throw new RangeError(Pe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new Ie(R0+n),e[0]=Au,e[1]=Tu,e[Ai]=ue,e[Ti]=1,e[Ti+1]=ue,e[Re]=n,un.ndarray(n,a,1,0,e,1,Re+1),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,n),t=Mer(t,ue,Ile),t=Vle(t,ue,a,n)}else a=Ler()>>>0}else a=Ler()>>>0;return t===void 0&&(e=new Ie(R0+1),e[0]=Au,e[1]=Tu,e[Ai]=ue,e[Ti]=1,e[Ti+1]=ue,e[Re]=1,e[Re+1]=a,t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,1),t=Mer(t,ue,a)),It(y,"NAME","mt19937"),_i(y,"seed",o),_i(y,"seedLength",v),Ier(y,"state",l,p),_i(y,"stateLength",f),_i(y,"byteLength",c),It(y,"toJSON",m),It(y,"MIN",0),It(y,"MAX",ker),It(y,"normalized",g),It(g,"NAME",y.NAME),_i(g,"seed",o),_i(g,"seedLength",v),Ier(g,"state",l,p),_i(g,"stateLength",f),_i(g,"byteLength",c),It(g,"toJSON",m),It(g,"MIN",0),It(g,"MAX",Cle),y;function o(){var d=e[Re];return un(d,a,1,new Ie(d),1)}function v(){return e[Re]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return un(d,e,1,new Ie(d),1)}function p(d){var h;if(!Rer(d))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=jer(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?un(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Ie(d.length)),un(d.length,d,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,e[Re])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=Tle(e),d.params=[],d}function y(){var d,h;return h=e[Ti+1],h>=ue&&(t=Gle(t),h=0),d=t[h],e[Ti+1]=h+1,d^=d>>>11,d^=d<<7&Fle,d^=d<<15&jle,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*Ble+h)*Cer}}Ver.exports=Ule});var Uer=s((Bet,Ger)=>{"use strict";var Dle=b4(),zle=l4(),Hle=Dle({seed:zle()});Ger.exports=Hle});var Wr=s((ket,zer)=>{"use strict";var Wle=D(),Der=Uer(),xle=b4();Wle(Der,"factory",xle);zer.exports=Der});var Xer=s((Cet,xer)=>{"use strict";var Her=Nr().isPrimitive,w4=V(),Wer=oe();function Xle(r,e){return!Her(r)||Wer(r)?new TypeError(w4("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Her(e)||Wer(e)?new TypeError(w4("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(w4("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}xer.exports=Xle});var Yer=s((Vet,Jer)=>{"use strict";var Jle=Gr(),Yle=pt(),$le=Qa();function Zle(r,e,t){return e+Jle(Yle($le*r()),2)*(t-e)}Jer.exports=Zle});var E4=s((Get,itr)=>{"use strict";var Rt=D(),Iu=br(),$er=Sr(),Zer=hr(),Qer=qr(),Ker=vr(),rtr=mr(),Qle=Pr(),Ru=Wr().factory,etr=H(),Kle=Or(),Pu=V(),r5e=Xer(),ttr=Yer();function e5e(){var r,e,t,i,a,n;if(arguments.length===0)e=Ru();else if(arguments.length===1){if(r=arguments[0],!Zer(r))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ker(r,"prng")){if(!Qer(r.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else{if(a=arguments[0],n=arguments[1],i=r5e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Zer(r))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ker(r,"prng")){if(!Qer(r.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else e=Ru()}return a===void 0?t=y:t=m,Rt(t,"NAME","arcsine"),r&&r.prng?(Rt(t,"seed",null),Rt(t,"seedLength",null),$er(t,"state",rtr(null),Qle),Rt(t,"stateLength",null),Rt(t,"byteLength",null),Rt(t,"toJSON",rtr(null)),Rt(t,"PRNG",e)):(Iu(t,"seed",u),Iu(t,"seedLength",o),$er(t,"state",c,l),Iu(t,"stateLength",v),Iu(t,"byteLength",f),Rt(t,"toJSON",p),Rt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Kle(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return ttr(e,a,n)}function y(g,d){return etr(g)||etr(d)||g>=d?NaN:ttr(e,g,d)}}itr.exports=e5e});var ntr=s((Uet,atr)=>{"use strict";var t5e=E4(),i5e=t5e();atr.exports=i5e});var otr=s((Det,utr)=>{"use strict";var a5e=D(),str=ntr(),n5e=E4();a5e(str,"factory",n5e);utr.exports=str});var N4=s((zet,dtr)=>{"use strict";var Pt=D(),Lu=br(),vtr=Sr(),ftr=hr(),s5e=Gn().isPrimitive,ctr=qr(),ltr=vr(),ptr=mr(),u5e=Pr(),Fu=Wr().factory,o5e=H(),v5e=Or(),ju=V();function f5e(){var r,e,t,i;if(arguments.length===0)e=Fu();else if(arguments.length===1&&ftr(arguments[0]))if(r=arguments[0],ltr(r,"prng")){if(!ctr(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Fu(r);else{if(i=arguments[0],!s5e(i))throw new TypeError(ju("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!ftr(r))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ltr(r,"prng")){if(!ctr(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Fu(r)}else e=Fu()}return i===void 0?t=p:t=l,Pt(t,"NAME","bernoulli"),r&&r.prng?(Pt(t,"seed",null),Pt(t,"seedLength",null),vtr(t,"state",ptr(null),u5e),Pt(t,"stateLength",null),Pt(t,"byteLength",null),Pt(t,"toJSON",ptr(null)),Pt(t,"PRNG",e)):(Lu(t,"seed",a),Lu(t,"seedLength",n),vtr(t,"state",v,f),Lu(t,"stateLength",u),Lu(t,"byteLength",o),Pt(t,"toJSON",c),Pt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=v5e(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return o5e(m)||m<0||m>1?NaN:e()<=m?1:0}}dtr.exports=f5e});var mtr=s((Het,gtr)=>{"use strict";var c5e=N4(),l5e=c5e();gtr.exports=l5e});var qtr=s((Wet,htr)=>{"use strict";var p5e=D(),ytr=mtr(),d5e=N4();p5e(ytr,"factory",d5e);htr.exports=ytr});var Ntr=s((xet,Etr)=>{"use strict";var g5e=Rr(),btr=Yr(),m5e=wr(),wtr=.00991256303526217;function y5e(r,e){var t,i,a;for(i=btr(-.5*e*e),t=[],t.push(wtr/i),t.push(e),a=2;a<r;a++)t[a]=g5e(-2*m5e(wtr/t[a-1]+i)),i=btr(-.5*t[a]*t[a]);return t.push(0),t}Etr.exports=y5e});var Otr=s((Xet,Str)=>{"use strict";function h5e(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}Str.exports=h5e});var Ttr=s((Jet,Atr)=>{"use strict";var _tr=wr();function q5e(r,e,t){var i,a;do i=_tr(r())/e,a=_tr(r());while(-2*a<i*i);return t?i-e:e-i}Atr.exports=q5e});var Ltr=s((Yet,Ptr)=>{"use strict";var b5e=Dr(),Itr=Yr(),w5e=Ntr(),E5e=Otr(),N5e=Ttr(),S5e=128,Rtr=3.442619855899,ga=w5e(S5e,Rtr),O5e=E5e(ga),_5e=127;function A5e(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&_5e,b5e(o)<O5e[v])return o*ga[v];if(v===0)return N5e(r,Rtr,o<0);if(u=o*ga[v],n=u*u,f=v+1,i=Itr(-.5*(ga[v]*ga[v]-n)),a=Itr(-.5*(ga[f]*ga[f]-n)),a+r()*(i-a)<1)return u}}}Ptr.exports=A5e});var O4=s(($et,Mtr)=>{"use strict";var Ii=D(),Mu=br(),Ftr=Sr(),T5e=qr(),I5e=hr(),R5e=de().isPrimitive,Bu=vr(),P5e=qt(),S4=Wr().factory,jtr=mr(),L5e=Pr(),F5e=Ur(),j5e=ba(),M5e=Or(),P0=V(),B5e=Ltr();function k5e(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!I5e(r))throw new TypeError(P0("invalid argument. Must provide an object. Value: `%s`.",r));if(Bu(r,"copy")&&(a.copy=r.copy,!R5e(r.copy)))throw new TypeError(P0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Bu(r,"prng")){if(!T5e(r.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Bu(r,"state")){if(a.state=r.state,!P5e(r.state))throw new TypeError(P0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Bu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(P0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=S4(a),e=t.normalized):(t=S4({seed:F5e(1+j5e*e()),copy:a.copy}),a.seed=null):(t=S4(a),e=t.normalized),i=B5e(e,t),Ii(i,"NAME","improved-ziggurat"),a.seed===null?(Ii(i,"seed",null),Ii(i,"seedLength",null)):(Mu(i,"seed",n),Mu(i,"seedLength",u)),r&&r.prng?(Ftr(i,"state",jtr(null),L5e),Ii(i,"stateLength",null),Ii(i,"byteLength",null),Ii(i,"toJSON",jtr(null))):(Ftr(i,"state",f,c),Mu(i,"stateLength",o),Mu(i,"byteLength",v),Ii(i,"toJSON",l)),Ii(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=M5e(t.state),p.params=[],p}}Mtr.exports=k5e});var ktr=s((Zet,Btr)=>{"use strict";var C5e=O4(),V5e=C5e();Btr.exports=V5e});var Ri=s((Qet,Vtr)=>{"use strict";var G5e=D(),Ctr=ktr(),U5e=O4();G5e(Ctr,"factory",U5e);Vtr.exports=Ctr});var Utr=s((Ket,Gtr)=>{"use strict";var D5e=qr(),z5e=D5e(Object.assign);Gtr.exports=z5e});var ztr=s((rtt,Dtr)=>{"use strict";var H5e=Object.assign;Dtr.exports=H5e});var Wtr=s((ett,Htr)=>{"use strict";var W5e=typeof Object.getOwnPropertySymbols<"u";Htr.exports=W5e});var Jtr=s((ttt,Xtr)=>{"use strict";var xtr=Va(),x5e=xtr.getOwnPropertySymbols;function X5e(r){return x5e(xtr(r))}Xtr.exports=X5e});var $tr=s((itt,Ytr)=>{"use strict";function J5e(){return[]}Ytr.exports=J5e});var Qtr=s((att,Ztr)=>{"use strict";var Y5e=Wtr(),$5e=Jtr(),Z5e=$tr(),_4;Y5e?_4=$5e:_4=Z5e;Ztr.exports=_4});var rir=s((ntt,Ktr)=>{"use strict";var Q5e=za(),K5e=Qtr(),r8e=Dn();function e8e(r){var e,t,i;for(e=Q5e(r),t=K5e(r),i=0;i<t.length;i++)r8e(r,t[i])&&e.push(t[i]);return e}Ktr.exports=e8e});var tir=s((stt,eir)=>{"use strict";var t8e=rir();eir.exports=t8e});var nir=s((utt,air)=>{"use strict";var i8e=tir(),iir=Va(),a8e=V();function n8e(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError(a8e("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=iir(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=i8e(iir(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}air.exports=n8e});var L0=s((ott,sir)=>{"use strict";var s8e=Utr(),u8e=ztr(),o8e=nir(),A4;s8e?A4=u8e:A4=o8e;sir.exports=A4});var fir=s((vtt,vir)=>{"use strict";var uir=zr().isPrimitive,oir=V();function v8e(r,e){return uir(r)?uir(e)?null:new TypeError(oir("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(oir("invalid argument. First argument must be a positive number. Value: `%s`.",r))}vir.exports=v8e});var gir=s((ftt,dir)=>{"use strict";var cir=wr(),lir=Rr(),f8e=Gr(),pir=1/3;function c8e(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-pir,o=1/lir(9*v),c=f8e(r(),1/t)):(v=t-pir,o=1/lir(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+cir(p)),l=r(),(l<n||cir(l)<u)&&(i=!1)}return v*p*c}dir.exports=c8e});var hir=s((ctt,yir)=>{"use strict";var T4=Gr(),mir=wr();function l8e(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=T4(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=T4(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*T4(a/(8*t-8),2),v<c&&(c=n*mir(4*f*(1-f)),c+=u*u/2,c>=mir(v)&&(i=!1))));return f}yir.exports=l8e});var bir=s((ltt,qir)=>{"use strict";var p8e=Gr(),ku=wr();function d8e(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*ku(f),u=o/f,a=.5/p8e(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*ku(m/o),y+=v*ku((1-m)/v),y+=c+.5*l*l,y>=ku(p)&&(n=!1));return m}qir.exports=d8e});var Nir=s((ptt,Eir)=>{"use strict";var I4=Yr(),wir=Gr(),R4=wr();function g8e(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=wir(u,1/e),f=wir(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=R4(u)/e,a=R4(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),I4(i-R4(I4(i)+I4(a))))}Eir.exports=g8e});var _ir=s((dtt,Oir)=>{"use strict";var Sir=gir(),m8e=hir(),y8e=bir(),h8e=Nir();function q8e(r,e,t,i){var a,n;return t===i&&t>1.5?m8e(r,e,t):t>1&&i>1?y8e(r,e,t,i):t<1&&i<1?h8e(r,t,i):(a=Sir(r,e,t),n=Sir(r,e,i),a/(a+n))}Oir.exports=q8e});var j4=s((gtt,Bir)=>{"use strict";var Lt=D(),Cu=br(),Air=Sr(),Tir=hr(),Iir=de().isPrimitive,Rir=qr(),on=vr(),Pir=mr(),b8e=Pr(),Lir=Ri().factory,Vu=Wr().factory,Fir=H(),P4=Oi(),L4=me(),F4=qt(),jir=L0(),w8e=Or(),Ft=V(),E8e=fir(),Mir=_ir();function N8e(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=Vu(a);else if(arguments.length===1){if(a=arguments[0],!Tir(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(on(a,"copy")&&!Iir(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(on(a,"prng")){if(!Rir(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(on(a,"state")&&!F4(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=jir({},a),a.copy===!1?o=!1:a.state&&(a.state=P4(a.state.length,a.state,1,new L4(a.state.length),1)),a.copy=!1,n=Vu(a)}}else{if(t=arguments[0],i=arguments[1],v=E8e(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!Tir(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(on(a,"copy")&&!Iir(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(on(a,"prng")){if(!Rir(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(on(a,"state")&&!F4(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=jir({},a),a.copy===!1?o=!1:a.state&&(a.state=P4(a.state.length,a.state,1,new L4(a.state.length),1)),a.copy=!1,n=Vu(a)}}else a={copy:!1},n=Vu(a)}return a&&a.prng?e=Lir({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=Lir({state:r,copy:!1})),t===void 0?u=h:u=d,Lt(u,"NAME","beta"),a&&a.prng?(Lt(u,"seed",null),Lt(u,"seedLength",null),Air(u,"state",Pir(null),b8e),Lt(u,"stateLength",null),Lt(u,"byteLength",null),Lt(u,"toJSON",Pir(null)),Lt(u,"PRNG",n)):(Cu(u,"seed",f),Cu(u,"seedLength",c),Air(u,"state",m,y),Cu(u,"stateLength",l),Cu(u,"byteLength",p),Lt(u,"toJSON",g),Lt(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!F4(q))throw new TypeError(Ft("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=P4(q.length,q,1,new L4(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=w8e(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return Mir(n,e,t,i)}function h(q,w){return Fir(q)||Fir(w)||q<=0||w<=0?NaN:Mir(n,e,q,w)}}Bir.exports=N8e});var Cir=s((mtt,kir)=>{"use strict";var S8e=j4(),O8e=S8e();kir.exports=O8e});var Uir=s((ytt,Gir)=>{"use strict";var _8e=D(),Vir=Cir(),A8e=j4();_8e(Vir,"factory",A8e);Gir.exports=Vir});var Wir=s((htt,Hir)=>{"use strict";var Dir=zr().isPrimitive,zir=V();function T8e(r,e){return Dir(r)?Dir(e)?null:new TypeError(zir("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(zir("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Hir.exports=T8e});var Jir=s((qtt,Xir)=>{"use strict";var xir=wr();function I8e(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+xir(l)),c=r(),(c<o||xir(c)<v)&&(n=!1)}return 1/t*i*l}Xir.exports=I8e});var V4=s((btt,aar)=>{"use strict";var jt=D(),Gu=br(),Yir=Sr(),$ir=hr(),M4=qt(),Zir=de().isPrimitive,Qir=qr(),vn=vr(),Kir=mr(),R8e=Pr(),rar=Ri().factory,Uu=Wr().factory,ear=H(),B4=Rr(),tar=Gr(),k4=Oi(),C4=me(),P8e=Or(),iar=L0(),Mt=V(),L8e=Wir(),Du=Jir(),zu=1/3;function F8e(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=Uu(a);else if(arguments.length===1){if(a=arguments[0],!$ir(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(vn(a,"copy")&&!Zir(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(vn(a,"prng")){if(!Qir(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(vn(a,"state")&&!M4(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=iar({},a),a.copy===!1?o=!1:a.state&&(a.state=k4(a.state.length,a.state,1,new C4(a.state.length),1)),a.copy=!1,n=Uu(a)}}else{if(e=arguments[0],i=arguments[1],v=L8e(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!$ir(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(vn(a,"copy")&&!Zir(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(vn(a,"prng")){if(!Qir(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(vn(a,"state")&&!M4(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=iar({},a),a.copy===!1?o=!1:a.state&&(a.state=k4(a.state.length,a.state,1,new C4(a.state.length),1)),a.copy=!1,n=Uu(a)}}else a={copy:!1},n=Uu(a)}return a&&a.prng?t=rar({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=rar({state:r,copy:!1})),e===void 0?u=_:(e>=1?(u=q,c=e-zu):(u=w,c=e+1-zu),f=1/B4(9*c)),jt(u,"NAME","gamma"),a&&a.prng?(jt(u,"seed",null),jt(u,"seedLength",null),Yir(u,"state",Kir(null),R8e),jt(u,"stateLength",null),jt(u,"byteLength",null),jt(u,"toJSON",Kir(null)),jt(u,"PRNG",n)):(Gu(u,"seed",l),Gu(u,"seedLength",p),Yir(u,"state",g,d),Gu(u,"stateLength",m),Gu(u,"byteLength",y),jt(u,"toJSON",h),jt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!M4(b))throw new TypeError(Mt("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=k4(b.length,b,1,new C4(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=P8e(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return Du(n,t,i,c,f)}function w(){return Du(n,t,i,c,f)*tar(n(),1/e)}function _(b,T){var S,O;return ear(b)||ear(T)||b<=0||T<=0?NaN:b<1?(O=b+1-zu,S=1/B4(9*O),Du(n,t,T,O,S)*tar(n(),1/b)):(O=b-zu,S=1/B4(9*O),Du(n,t,T,O,S))}}aar.exports=F8e});var sar=s((wtt,nar)=>{"use strict";var j8e=V4(),M8e=j8e();nar.exports=M8e});var fn=s((Ett,oar)=>{"use strict";var B8e=D(),uar=sar(),k8e=V4();B8e(uar,"factory",k8e);oar.exports=uar});var par=s((Ntt,lar)=>{"use strict";var far=zr().isPrimitive,car=V();function C8e(r,e){return far(r)?far(e)?null:new TypeError(car("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(car("invalid argument. First argument must be a positive number. Value: `%s`.",r))}lar.exports=C8e});var gar=s((Stt,dar)=>{"use strict";function V8e(r,e,t){return r(e,1)/r(t,1)}dar.exports=V8e});var G4=s((Ott,Ear)=>{"use strict";var Pi=D(),Hu=br(),mar=Sr(),yar=hr(),har=mr(),G8e=Pr(),Wu=fn().factory,qar=H(),U8e=Or(),bar=V(),D8e=par(),war=gar();function z8e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=Wu();else if(arguments.length===1){if(i=arguments[0],!yar(i))throw new TypeError(bar("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Wu(i)}else{if(e=arguments[0],t=arguments[1],u=D8e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!yar(i))throw new TypeError(bar("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Wu(i)}else r=Wu()}return e===void 0?n=g:n=y,a=r.PRNG,Pi(n,"NAME","betaprime"),i&&i.prng?(Pi(n,"seed",null),Pi(n,"seedLength",null),mar(n,"state",har(null),G8e),Pi(n,"stateLength",null),Pi(n,"byteLength",null),Pi(n,"toJSON",har(null))):(Hu(n,"seed",o),Hu(n,"seedLength",v),mar(n,"state",l,p),Hu(n,"stateLength",f),Hu(n,"byteLength",c),Pi(n,"toJSON",m)),Pi(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=U8e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return war(r,e,t)}function g(d,h){return qar(d)||qar(h)||d<=0||h<=0?NaN:war(r,d,h)}}Ear.exports=z8e});var Sar=s((_tt,Nar)=>{"use strict";var H8e=G4(),W8e=H8e();Nar.exports=W8e});var Aar=s((Att,_ar)=>{"use strict";var x8e=D(),Oar=Sar(),X8e=G4();x8e(Oar,"factory",X8e);_ar.exports=Oar});var Iar=s((Ttt,Tar)=>{"use strict";var J8e=Ur();function Y8e(r){return J8e(r)===r&&r>0}Tar.exports=Y8e});var U4=s((Itt,Rar)=>{"use strict";var $8e=Iar();Rar.exports=$8e});var Lar=s((Rtt,Par)=>{"use strict";function Z8e(r){return r>=0&&r<=1}Par.exports=Z8e});var jar=s((Ptt,Far)=>{"use strict";var Q8e=Lar();Far.exports=Q8e});var kar=s((Ltt,Bar)=>{"use strict";var K8e=nt().isPrimitive,r7e=Gn().isPrimitive,Mar=V();function e7e(r,e){return K8e(r)?r7e(e)?null:new TypeError(Mar("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(Mar("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}Bar.exports=e7e});var Var=s((Ftt,Car)=>{"use strict";function t7e(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}Car.exports=t7e});var Uar=s((jtt,Gar)=>{"use strict";var i7e=H();function a7e(r){return r===0||i7e(r)?r:r<0?-1:1}Gar.exports=a7e});var xu=s((Mtt,Dar)=>{"use strict";var n7e=Uar();Dar.exports=n7e});var Har=s((Btt,zar)=>{"use strict";var s7e=Gr(),u7e=1/12,o7e=1/360,v7e=1/1260;function f7e(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=s7e(r,2),(u7e-(o7e-v7e/e)/e)/r}}zar.exports=f7e});var xar=s((ktt,War)=>{"use strict";var D4=Ur(),c7e=xu(),l7e=Rr(),z4=Dr(),Xu=wr(),Ju=Har(),p7e=1/6;function d7e(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,S,O,N,I,E,L;for(T=D4((e+1)*t),f=e-T+1,S=1-t,O=t/S,c=(e+1)*O,u=e*t*S,n=l7e(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*Xu((T+1)/(O*f)),w+=Ju(T)+Ju(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-z4(I))+d)+h,D4(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=c7e(I)*.5-I,E=y*r()),l=.5-z4(I),b=D4(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=z4(b-T),p>15){if(E=Xu(E),o=p/u,v=(p/3+.625)*p,v+=p7e,v/=u,o*=v+.5,N=-(p*p)/(2*u),E<N-o||E<=N+o&&(m=e-b+1,L=w+(e+1)*Xu(f/m),L+=(b+.5)*Xu(m*O/(b+1)),L+=-(Ju(b)+Ju(e-b)),E<=L))return b}else{if(q=1,T<b)for(_=T;_<=b;_++)q*=c/_-O;else if(T>b)for(_=b;_<=T;_++)E*=c/_-O;if(E<=q)return b}}}War.exports=d7e});var Yar=s((Ctt,Jar)=>{"use strict";var g7e=Var(),m7e=xar();function Xar(r,e,t){return t>.5?e-Xar(r,e,1-t):e*t<10?g7e(r,e,t):m7e(r,e,t)}Jar.exports=Xar});var H4=s((Vtt,inr)=>{"use strict";var Bt=D(),Yu=br(),$ar=Sr(),Zar=hr(),Qar=qr(),Kar=vr(),rnr=mr(),y7e=Pr(),enr=H(),h7e=U4(),q7e=jar(),$u=Wr().factory,b7e=Or(),Zu=V(),w7e=kar(),tnr=Yar();function E7e(){var r,e,t,i,a,n;if(arguments.length===0)e=$u();else if(arguments.length===1){if(r=arguments[0],!Zar(r))throw new TypeError(Zu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Kar(r,"prng")){if(!Qar(r.prng))throw new TypeError(Zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$u(r)}else{if(a=arguments[0],n=arguments[1],i=w7e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Zar(r))throw new TypeError(Zu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Kar(r,"prng")){if(!Qar(r.prng))throw new TypeError(Zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$u(r)}else e=$u()}return a===void 0?t=y:t=m,Bt(t,"NAME","binomial"),r&&r.prng?(Bt(t,"seed",null),Bt(t,"seedLength",null),$ar(t,"state",rnr(null),y7e),Bt(t,"stateLength",null),Bt(t,"byteLength",null),Bt(t,"toJSON",rnr(null)),Bt(t,"PRNG",e)):(Yu(t,"seed",u),Yu(t,"seedLength",o),$ar(t,"state",c,l),Yu(t,"stateLength",v),Yu(t,"byteLength",f),Bt(t,"toJSON",p),Bt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=b7e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return tnr(e,a,n)}function y(g,d){return enr(g)||enr(d)||!h7e(g)||!q7e(d)?NaN:tnr(e,g,d)}}inr.exports=E7e});var nnr=s((Gtt,anr)=>{"use strict";var N7e=H4(),S7e=N7e();anr.exports=S7e});var onr=s((Utt,unr)=>{"use strict";var O7e=D(),snr=nnr(),_7e=H4();O7e(snr,"factory",_7e);unr.exports=snr});var fnr=s((Dtt,vnr)=>{"use strict";var A7e=Rr(),T7e=wr(),I7e=pt(),R7e=Ot(),P7e=yi();function L7e(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=A7e(-2*T7e(a)),o=P7e*n,t=u*R7e(o),e=!1,u*I7e(o)}return e=!0,t}}vnr.exports=L7e});var lnr=s((ztt,cnr)=>{"use strict";var F7e=Rr(),j7e=wr(),M7e=Ot(),B7e=Ee(),k7e=M7e(B7e);function C7e(r){var e=F7e(-2*j7e(r));return e*k7e}cnr.exports=C7e});var dnr=s((Htt,pnr)=>{"use strict";var V7e=Rr(),G7e=wr(),U7e=Ot(),D7e=yi();function z7e(r){var e=V7e(-2*G7e(r)),t=D7e*r;return e*U7e(t)}pnr.exports=z7e});var W4=s((Wtt,hnr)=>{"use strict";var xe=D(),Qu=br(),gnr=Sr(),H7e=hr(),W7e=qr(),x7e=de().isPrimitive,F0=vr(),X7e=qt(),mnr=Wr().factory,ynr=mr(),J7e=Pr(),Y7e=Or(),j0=V(),$7e=fnr(),Z7e=lnr(),Q7e=dnr();function K7e(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!H7e(r))throw new TypeError(j0("invalid argument. Must provide an object. Value: `%s`.",r));if(F0(r,"copy")&&(a.copy=r.copy,!x7e(r.copy)))throw new TypeError(j0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(F0(r,"prng")){if(!W7e(r.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(F0(r,"state")){if(a.state=r.state,!X7e(r.state))throw new TypeError(j0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(F0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(j0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=mnr(a),e=i.normalized):a.seed=null:(i=mnr(a),e=i.normalized),t=$7e(e),xe(t,"NAME","box-muller"),a.seed===null?(xe(t,"seed",null),xe(t,"seedLength",null)):(Qu(t,"seed",n),Qu(t,"seedLength",u)),r&&r.prng?(gnr(t,"state",ynr(null),J7e),xe(t,"stateLength",null),xe(t,"byteLength",null),xe(t,"toJSON",ynr(null))):(gnr(t,"state",f,c),Qu(t,"stateLength",o),Qu(t,"byteLength",v),xe(t,"toJSON",l)),xe(t,"PRNG",e),F0(e,"MIN")?(xe(t,"MIN",Z7e(e.MIN)),xe(t,"MAX",Q7e(e.MIN))):(xe(t,"MIN",null),xe(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=Y7e(i.state),p.params=[],p}}hnr.exports=K7e});var bnr=s((xtt,qnr)=>{"use strict";var rpe=W4(),epe=rpe();qnr.exports=epe});var Nnr=s((Xtt,Enr)=>{"use strict";var tpe=D(),wnr=bnr(),ipe=W4();tpe(wnr,"factory",ipe);Enr.exports=wnr});var _nr=s((Jtt,Onr)=>{"use strict";var ape=Nr().isPrimitive,npe=zr().isPrimitive,Snr=V(),spe=oe();function upe(r,e){return!ape(r)||spe(r)?new TypeError(Snr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):npe(e)?null:new TypeError(Snr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Onr.exports=upe});var Tnr=s((Ytt,Anr)=>{"use strict";var ope=c0(),vpe=Ee();function fpe(r,e,t){return e+t*ope(vpe*(r()-.5))}Anr.exports=fpe});var x4=s(($tt,Bnr)=>{"use strict";var Li=D(),Ku=br(),Inr=Sr(),Rnr=hr(),Pnr=qr(),Lnr=vr(),Fnr=mr(),cpe=Pr(),jnr=H(),cn=Ri().factory,lpe=Or(),ro=V(),ppe=_nr(),Mnr=Tnr();function dpe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!Rnr(t))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Lnr(t,"prng")){if(!Pnr(t.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],n=ppe(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Rnr(t))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Lnr(t,"prng")){if(!Pnr(t.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?a=g:a=y,i=e.PRNG,Li(a,"NAME","cauchy"),t&&t.prng?(Li(a,"seed",null),Li(a,"seedLength",null),Inr(a,"state",Fnr(null),cpe),Li(a,"stateLength",null),Li(a,"byteLength",null),Li(a,"toJSON",Fnr(null))):(Ku(a,"seed",o),Ku(a,"seedLength",v),Inr(a,"state",l,p),Ku(a,"stateLength",f),Ku(a,"byteLength",c),Li(a,"toJSON",m)),Li(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=lpe(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Mnr(e,u,r)}function g(d,h){return jnr(d)||jnr(h)||h<=0?NaN:Mnr(e,d,h)}}Bnr.exports=dpe});var Cnr=s((Ztt,knr)=>{"use strict";var gpe=x4(),mpe=gpe();knr.exports=mpe});var Unr=s((Qtt,Gnr)=>{"use strict";var ype=D(),Vnr=Cnr(),hpe=x4();ype(Vnr,"factory",hpe);Gnr.exports=Vnr});var X4=s((Ktt,Xnr)=>{"use strict";var Fi=D(),eo=br(),Dnr=Sr(),qpe=zr().isPrimitive,znr=hr(),Hnr=qr(),Wnr=vr(),xnr=mr(),bpe=Pr(),wpe=H(),ln=fn().factory,Epe=Or(),to=V();function Npe(){var r,e,t,i,a;if(arguments.length===0)r=ln();else if(arguments.length===1&&znr(arguments[0]))if(t=arguments[0],Wnr(t,"prng")){if(!Hnr(t.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=ln({prng:t.prng})}else r=ln(t);else{if(a=arguments[0],!qpe(a))throw new TypeError(to("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!znr(t))throw new TypeError(to("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Wnr(t,"prng")){if(!Hnr(t.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=ln(a/2,.5,{prng:t.prng})}else r=ln(a/2,.5,t)}else r=ln(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,Fi(i,"NAME","chisquare"),t&&t.prng?(Fi(i,"seed",null),Fi(i,"seedLength",null),Dnr(i,"state",xnr(null),bpe),Fi(i,"stateLength",null),Fi(i,"byteLength",null),Fi(i,"toJSON",xnr(null))):(eo(i,"seed",n),eo(i,"seedLength",u),Dnr(i,"state",f,c),eo(i,"stateLength",o),eo(i,"byteLength",v),Fi(i,"toJSON",l)),Fi(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Epe(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return wpe(y)||y<=0?NaN:r(y/2,.5)}}Xnr.exports=Npe});var Ynr=s((rit,Jnr)=>{"use strict";var Spe=X4(),Ope=Spe();Jnr.exports=Ope});var M0=s((eit,Znr)=>{"use strict";var _pe=D(),$nr=Ynr(),Ape=X4();_pe($nr,"factory",Ape);Znr.exports=$nr});var J4=s((tit,a0r)=>{"use strict";var ji=D(),io=br(),Qnr=Sr(),Tpe=zr().isPrimitive,Knr=hr(),r0r=qr(),e0r=vr(),t0r=mr(),Ipe=Pr(),Rpe=H(),pn=M0().factory,Ppe=Or(),i0r=Rr(),ao=V();function Lpe(){var r,e,t,i,a;if(arguments.length===0)r=pn();else if(arguments.length===1&&Knr(arguments[0]))if(t=arguments[0],e0r(t,"prng")){if(!r0r(t.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=pn({prng:t.prng})}else r=pn(t);else{if(a=arguments[0],!Tpe(a))throw new TypeError(ao("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!Knr(t))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",t));if(e0r(t,"prng")){if(!r0r(t.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=pn(a,{prng:t.prng})}else r=pn(a,t)}else r=pn(a)}return a===void 0?i=m:i=p,e=r.PRNG,ji(i,"NAME","chi"),t&&t.prng?(ji(i,"seed",null),ji(i,"seedLength",null),Qnr(i,"state",t0r(null),Ipe),ji(i,"stateLength",null),ji(i,"byteLength",null),ji(i,"toJSON",t0r(null))):(io(i,"seed",n),io(i,"seedLength",u),Qnr(i,"state",f,c),io(i,"stateLength",o),io(i,"byteLength",v),ji(i,"toJSON",l)),ji(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Ppe(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return i0r(r())}function m(y){return Rpe(y)||y<=0?NaN:i0r(r(y))}}a0r.exports=Lpe});var s0r=s((iit,n0r)=>{"use strict";var Fpe=J4(),jpe=Fpe();n0r.exports=jpe});var v0r=s((ait,o0r)=>{"use strict";var Mpe=D(),u0r=s0r(),Bpe=J4();Mpe(u0r,"factory",Bpe);o0r.exports=u0r});var l0r=s((nit,c0r)=>{"use strict";var kpe=Nr().isPrimitive,Cpe=zr().isPrimitive,f0r=V(),Vpe=oe();function Gpe(r,e){return!kpe(r)||Vpe(r)?new TypeError(f0r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Cpe(e)?null:new TypeError(f0r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}c0r.exports=Gpe});var d0r=s((sit,p0r)=>{"use strict";var Y4=H(),Upe=g0(),Dpe=Ee();function zpe(r,e,t){var i;return Y4(r)||Y4(e)||Y4(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+Upe(i)/Dpe)/2)}p0r.exports=zpe});var y0r=s((uit,m0r)=>{"use strict";var g0r=H();function Hpe(r,e){return g0r(r)||g0r(e)?NaN:r<e?0:1}m0r.exports=Hpe});var b0r=s((oit,q0r)=>{"use strict";var Wpe=mr(),h0r=H();function xpe(r){if(h0r(r))return Wpe(NaN);return e;function e(t){return h0r(t)?NaN:t<r?0:1}}q0r.exports=xpe});var no=s((vit,E0r)=>{"use strict";var Xpe=D(),w0r=y0r(),Jpe=b0r();Xpe(w0r,"factory",Jpe);E0r.exports=w0r});var S0r=s((fit,N0r)=>{"use strict";var Ype=mr(),$pe=no().factory,$4=H(),Zpe=g0(),Qpe=Ee();function Kpe(r,e){if($4(r)||$4(e)||e<0)return Ype(NaN);if(e===0)return $pe(r);return t;function t(i){var a;return $4(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+Zpe(a)/Qpe)/2)}}N0r.exports=Kpe});var A0r=s((cit,_0r)=>{"use strict";var r9e=D(),O0r=d0r(),e9e=S0r();r9e(O0r,"factory",e9e);_0r.exports=O0r});var Z4=s((lit,T0r)=>{"use strict";var t9e=A0r(),i9e=1e4,a9e=1e-12;function n9e(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<i9e;){if(u=(i+a)/2,a-i<a9e)return u;n=t9e(u,e,t),r>n?i=u:a=u,o+=1}return u}T0r.exports=n9e});var R0r=s((pit,I0r)=>{"use strict";var Q4=H(),s9e=Z4();function u9e(r,e,t){return Q4(e)||Q4(t)||Q4(r)||t<0||r<0||r>1?NaN:t===0?e:s9e(r,e,t)}I0r.exports=u9e});var L0r=s((dit,P0r)=>{"use strict";var o9e=H();function v9e(r,e){return o9e(r)||r<0||r>1?NaN:e}P0r.exports=v9e});var M0r=s((git,j0r)=>{"use strict";var f9e=mr(),F0r=H();function c9e(r){if(F0r(r))return f9e(NaN);return e;function e(t){return F0r(t)||t<0||t>1?NaN:r}}j0r.exports=c9e});var K4=s((mit,k0r)=>{"use strict";var l9e=D(),B0r=L0r(),p9e=M0r();l9e(B0r,"factory",p9e);k0r.exports=B0r});var V0r=s((yit,C0r)=>{"use strict";var d9e=mr(),g9e=K4().factory,rc=H(),m9e=Z4();function y9e(r,e){if(rc(r)||rc(e)||e<0)return d9e(NaN);if(e===0)return g9e(r);return t;function t(i){return rc(i)||i<0||i>1?NaN:m9e(i,r,e)}}C0r.exports=y9e});var D0r=s((hit,U0r)=>{"use strict";var h9e=D(),G0r=R0r(),q9e=V0r();h9e(G0r,"factory",q9e);U0r.exports=G0r});var H0r=s((qit,z0r)=>{"use strict";var b9e=D0r();function w9e(r,e,t){return b9e(r(),e,t)}z0r.exports=w9e});var ec=s((bit,Q0r)=>{"use strict";var kt=D(),so=br(),W0r=Sr(),x0r=hr(),X0r=qr(),J0r=vr(),Y0r=mr(),E9e=Pr(),uo=Wr().factory,$0r=H(),N9e=Or(),oo=V(),S9e=l0r(),Z0r=H0r();function O9e(){var r,e,t,i,a,n;if(arguments.length===0)e=uo();else if(arguments.length===1){if(r=arguments[0],!x0r(r))throw new TypeError(oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(J0r(r,"prng")){if(!X0r(r.prng))throw new TypeError(oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uo(r)}else{if(a=arguments[0],n=arguments[1],i=S9e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!x0r(r))throw new TypeError(oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(J0r(r,"prng")){if(!X0r(r.prng))throw new TypeError(oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uo(r)}else e=uo()}return a===void 0?t=y:t=m,kt(t,"NAME","cosine"),r&&r.prng?(kt(t,"seed",null),kt(t,"seedLength",null),W0r(t,"state",Y0r(null),E9e),kt(t,"stateLength",null),kt(t,"byteLength",null),kt(t,"toJSON",Y0r(null)),kt(t,"PRNG",e)):(so(t,"seed",u),so(t,"seedLength",o),W0r(t,"state",c,l),so(t,"stateLength",v),so(t,"byteLength",f),kt(t,"toJSON",p),kt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=N9e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Z0r(e,a,n)}function y(g,d){return $0r(g)||$0r(d)||d<=0?NaN:Z0r(e,g,d)}}Q0r.exports=O9e});var rsr=s((wit,K0r)=>{"use strict";var _9e=ec(),A9e=_9e();K0r.exports=A9e});var isr=s((Eit,tsr)=>{"use strict";var T9e=D(),esr=rsr(),I9e=ec();T9e(esr,"factory",I9e);tsr.exports=esr});var usr=s((Nit,ssr)=>{"use strict";var asr=ye().isPrimitive,tc=V(),nsr=oe();function R9e(r,e){return!asr(r)||nsr(r)?new TypeError(tc("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!asr(e)||nsr(e)?new TypeError(tc("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(tc("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}ssr.exports=R9e});var fsr=s((Sit,vsr)=>{"use strict";var ic=oa(),dn=Ur();function osr(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===ic?(u=dn(n/(a+1)),n%(a+1)===a&&(u+=1)):u=dn((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=osr(r,0,dn(n/v)),!(l>ic/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===ic?(o=dn(a/(n+1)),a%(n+1)===n&&(o+=1)):o=dn((a+1)/(n+1));;)if(i=r()-f,i=dn(i/o),i<=n)return i+e}vsr.exports=osr});var ac=s((Oit,hsr)=>{"use strict";var Ct=D(),vo=br(),csr=Sr(),lsr=hr(),psr=qr(),dsr=vr(),gsr=mr(),P9e=Pr(),fo=Wr().factory,msr=H(),gn=Ne(),L9e=Or(),Mi=V(),F9e=usr(),ysr=fsr();function j9e(){var r,e,t,i,a,n;if(arguments.length===0)e=fo();else if(arguments.length===1){if(r=arguments[0],!lsr(r))throw new TypeError(Mi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(dsr(r,"prng")){if(!psr(r.prng))throw new TypeError(Mi("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!gn(e.MIN))throw new TypeError(Mi("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!gn(e.MAX))throw new TypeError(Mi("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fo(r)}else{if(a=arguments[0],n=arguments[1],i=F9e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!lsr(r))throw new TypeError(Mi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(dsr(r,"prng")){if(!psr(r.prng))throw new TypeError(Mi("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!gn(e.MIN))throw new TypeError(Mi("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!gn(e.MAX))throw new TypeError(Mi("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fo(r)}else e=fo()}return a===void 0?t=y:t=m,Ct(t,"NAME","discrete-uniform"),r&&r.prng?(Ct(t,"seed",null),Ct(t,"seedLength",null),csr(t,"state",gsr(null),P9e),Ct(t,"stateLength",null),Ct(t,"byteLength",null),Ct(t,"toJSON",gsr(null)),Ct(t,"PRNG",e)):(vo(t,"seed",u),vo(t,"seedLength",o),csr(t,"state",c,l),vo(t,"stateLength",v),vo(t,"byteLength",f),Ct(t,"toJSON",p),Ct(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=L9e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return ysr(e,a,n)}function y(g,d){return msr(g)||msr(d)||!gn(g)||!gn(d)||g>d?NaN:ysr(e,g,d)}}hsr.exports=j9e});var bsr=s((_it,qsr)=>{"use strict";var M9e=ac(),B9e=M9e();qsr.exports=B9e});var Nsr=s((Ait,Esr)=>{"use strict";var k9e=D(),wsr=bsr(),C9e=ac();k9e(wsr,"factory",C9e);Esr.exports=wsr});var _sr=s((Tit,Osr)=>{"use strict";var V9e=zr().isPrimitive,G9e=nt().isPrimitive,Ssr=V();function U9e(r,e){return G9e(r)?V9e(e)?null:new TypeError(Ssr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Ssr("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}Osr.exports=U9e});var Tsr=s((Iit,Asr)=>{"use strict";var D9e=wr();function z9e(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*D9e(i)}Asr.exports=z9e});var nc=s((Rit,Bsr)=>{"use strict";var Vt=D(),co=br(),Isr=Sr(),Rsr=hr(),Psr=qr(),Lsr=vr(),Fsr=mr(),H9e=Pr(),lo=Wr().factory,jsr=H(),W9e=U4(),x9e=Or(),po=V(),X9e=_sr(),Msr=Tsr();function J9e(){var r,e,t,i,a,n;if(arguments.length===0)e=lo();else if(arguments.length===1){if(t=arguments[0],!Rsr(t))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Lsr(t,"prng")){if(!Psr(t.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=lo(t)}else{if(n=arguments[0],r=arguments[1],a=X9e(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Rsr(t))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Lsr(t,"prng")){if(!Psr(t.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=lo(t)}else e=lo()}return n===void 0?i=y:i=m,Vt(i,"NAME","erlang"),t&&t.prng?(Vt(i,"seed",null),Vt(i,"seedLength",null),Isr(i,"state",Fsr(null),H9e),Vt(i,"stateLength",null),Vt(i,"byteLength",null),Vt(i,"toJSON",Fsr(null)),Vt(i,"PRNG",e)):(co(i,"seed",u),co(i,"seedLength",o),Isr(i,"state",c,l),co(i,"stateLength",v),co(i,"byteLength",f),Vt(i,"toJSON",p),Vt(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=x9e(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return Msr(e,n,r)}function y(g,d){return jsr(g)||jsr(d)||!W9e(g)||d<=0?NaN:Msr(e,g,d)}}Bsr.exports=J9e});var Csr=s((Pit,ksr)=>{"use strict";var Y9e=nc(),$9e=Y9e();ksr.exports=$9e});var Usr=s((Lit,Gsr)=>{"use strict";var Z9e=D(),Vsr=Csr(),Q9e=nc();Z9e(Vsr,"factory",Q9e);Gsr.exports=Vsr});var zsr=s((Fit,Dsr)=>{"use strict";var K9e=wr();function rde(r,e){return-K9e(1-r())/e}Dsr.exports=rde});var sc=s((jit,$sr)=>{"use strict";var Gt=D(),go=br(),Hsr=Sr(),ede=zr().isPrimitive,Wsr=hr(),xsr=qr(),Xsr=vr(),Jsr=mr(),tde=Pr(),mo=Wr().factory,ide=H(),ade=Or(),yo=V(),Ysr=zsr();function nde(){var r,e,t,i;if(arguments.length===0)t=mo();else if(arguments.length===1&&Wsr(arguments[0]))if(e=arguments[0],Xsr(e,"prng")){if(!xsr(e.prng))throw new TypeError(yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=mo(e);else{if(r=arguments[0],!ede(r))throw new TypeError(yo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Wsr(e))throw new TypeError(yo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xsr(e,"prng")){if(!xsr(e.prng))throw new TypeError(yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=mo(e)}else t=mo()}return r===void 0?i=p:i=l,Gt(i,"NAME","exponential"),e&&e.prng?(Gt(i,"seed",null),Gt(i,"seedLength",null),Hsr(i,"state",Jsr(null),tde),Gt(i,"stateLength",null),Gt(i,"byteLength",null),Gt(i,"toJSON",Jsr(null)),Gt(i,"PRNG",t)):(go(i,"seed",a),go(i,"seedLength",n),Hsr(i,"state",v,f),go(i,"stateLength",u),go(i,"byteLength",o),Gt(i,"toJSON",c),Gt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=ade(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Ysr(t,r)}function p(m){return ide(m)||m<=0?NaN:Ysr(t,m)}}$sr.exports=nde});var Qsr=s((Mit,Zsr)=>{"use strict";var sde=sc(),ude=sde();Zsr.exports=ude});var eur=s((Bit,rur)=>{"use strict";var ode=D(),Ksr=Qsr(),vde=sc();ode(Ksr,"factory",vde);rur.exports=Ksr});var nur=s((kit,aur)=>{"use strict";var tur=zr().isPrimitive,iur=V();function fde(r,e){return tur(r)?tur(e)?null:new TypeError(iur("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(iur("invalid argument. First argument must be a positive number. Value: `%s`.",r))}aur.exports=fde});var uur=s((Cit,sur)=>{"use strict";function cde(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}sur.exports=cde});var uc=s((Vit,gur)=>{"use strict";var Bi=D(),ho=br(),our=Sr(),vur=hr(),fur=qr(),cur=vr(),lur=mr(),lde=Pr(),mn=M0().factory,pur=H(),pde=Or(),qo=V(),dde=nur(),dur=uur();function gde(){var r,e,t,i,a,n,u;if(arguments.length===0)r=mn();else if(arguments.length===1){if(e=arguments[0],!vur(e))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cur(e,"prng")){if(!fur(e.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=mn({prng:e.prng})}else r=mn(e)}else{if(n=arguments[0],u=arguments[1],a=dde(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!vur(e))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cur(e,"prng")){if(!fur(e.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=mn({prng:e.prng})}else r=mn(e)}else r=mn()}return n===void 0?i=g:i=y,t=r.PRNG,Bi(i,"NAME","f"),e&&e.prng?(Bi(i,"seed",null),Bi(i,"seedLength",null),our(i,"state",lur(null),lde),Bi(i,"stateLength",null),Bi(i,"byteLength",null),Bi(i,"toJSON",lur(null))):(ho(i,"seed",o),ho(i,"seedLength",v),our(i,"state",l,p),ho(i,"stateLength",f),ho(i,"byteLength",c),Bi(i,"toJSON",m)),Bi(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=pde(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return dur(r,n,u)}function g(d,h){return pur(d)||pur(h)||d<=0||h<=0?NaN:dur(r,d,h)}}gur.exports=gde});var yur=s((Git,mur)=>{"use strict";var mde=uc(),yde=mde();mur.exports=yde});var bur=s((Uit,qur)=>{"use strict";var hde=D(),hur=yur(),qde=uc();hde(hur,"factory",qde);qur.exports=hur});var Nur=s((Dit,Eur)=>{"use strict";var wur=zr().isPrimitive,bde=Nr().isPrimitive,oc=oe(),vc=V();function wde(r,e,t){return!wur(r)||oc(r)?new TypeError(vc("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!wur(e)||oc(e)?new TypeError(vc("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!bde(t)||oc(t)?new TypeError(vc("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}Eur.exports=wde});var Our=s((zit,Sur)=>{"use strict";var Ede=Gr(),Nde=wr();function Sde(r,e,t,i){return i+t*Ede(-Nde(r()),-1/e)}Sur.exports=Sde});var cc=s((Hit,Lur)=>{"use strict";var Ut=D(),bo=br(),_ur=Sr(),Aur=hr(),Tur=qr(),Iur=vr(),Rur=mr(),Ode=Pr(),wo=Wr().factory,fc=H(),_de=Or(),Eo=V(),Ade=Nur(),Pur=Our();function Tde(){var r,e,t,i,a,n,u;if(arguments.length===0)t=wo();else if(arguments.length===1){if(e=arguments[0],!Aur(e))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Iur(e,"prng")){if(!Tur(e.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=wo(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=Ade(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!Aur(e))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Iur(e,"prng")){if(!Tur(e.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=wo(e)}else t=wo()}return r===void 0?i=g:i=y,Ut(i,"NAME","frechet"),e&&e.prng?(Ut(i,"seed",null),Ut(i,"seedLength",null),_ur(i,"state",Rur(null),Ode),Ut(i,"stateLength",null),Ut(i,"byteLength",null),Ut(i,"toJSON",Rur(null)),Ut(i,"PRNG",t)):(bo(i,"seed",o),bo(i,"seedLength",v),_ur(i,"state",l,p),bo(i,"stateLength",f),bo(i,"byteLength",c),Ut(i,"toJSON",m),Ut(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=_de(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return Pur(t,r,n,u)}function g(d,h,q){return fc(d)||fc(h)||fc(q)||d<=0||h<=0?NaN:Pur(t,d,h,q)}}Lur.exports=Tde});var jur=s((Wit,Fur)=>{"use strict";var Ide=cc(),Rde=Ide();Fur.exports=Rde});var kur=s((xit,Bur)=>{"use strict";var Pde=D(),Mur=jur(),Lde=cc();Pde(Mur,"factory",Lde);Bur.exports=Mur});var Gur=s((Xit,Vur)=>{"use strict";var Fde=Ur(),Cur=wr();function jde(r,e){var t=r();return t===0&&(t=r()),Fde(Cur(t)/Cur(1-e))}Vur.exports=jde});var lc=s((Jit,Xur)=>{"use strict";var Dt=D(),No=br(),Uur=Sr(),Dur=hr(),Mde=Gn().isPrimitive,zur=qr(),Hur=vr(),Wur=mr(),Bde=Pr(),So=Wr().factory,kde=H(),Cde=Or(),Oo=V(),xur=Gur();function Vde(){var r,e,t,i;if(arguments.length===0)e=So();else if(arguments.length===1&&Dur(arguments[0]))if(r=arguments[0],Hur(r,"prng")){if(!zur(r.prng))throw new TypeError(Oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=So(r);else{if(i=arguments[0],!Mde(i))throw new TypeError(Oo("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Dur(r))throw new TypeError(Oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hur(r,"prng")){if(!zur(r.prng))throw new TypeError(Oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=So(r)}else e=So()}return i===void 0?t=p:t=l,Dt(t,"NAME","geometric"),r&&r.prng?(Dt(t,"seed",null),Dt(t,"seedLength",null),Uur(t,"state",Wur(null),Bde),Dt(t,"stateLength",null),Dt(t,"byteLength",null),Dt(t,"toJSON",Wur(null)),Dt(t,"PRNG",e)):(No(t,"seed",a),No(t,"seedLength",n),Uur(t,"state",v,f),No(t,"stateLength",u),No(t,"byteLength",o),Dt(t,"toJSON",c),Dt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Cde(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return xur(e,i)}function p(m){return kde(m)||m<0||m>1?NaN:xur(e,m)}}Xur.exports=Vde});var Yur=s((Yit,Jur)=>{"use strict";var Gde=lc(),Ude=Gde();Jur.exports=Ude});var Qur=s(($it,Zur)=>{"use strict";var Dde=D(),$ur=Yur(),zde=lc();Dde($ur,"factory",zde);Zur.exports=$ur});var eor=s((Zit,ror)=>{"use strict";var Hde=Nr().isPrimitive,Wde=zr().isPrimitive,Kur=V(),xde=oe();function Xde(r,e){return!Hde(r)||xde(r)?new TypeError(Kur("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Wde(e)?null:new TypeError(Kur("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ror.exports=Xde});var aor=s((Qit,ior)=>{"use strict";var tor=wr();function Jde(r,e,t){return e-t*tor(-tor(r()))}ior.exports=Jde});var pc=s((Kit,por)=>{"use strict";var zt=D(),_o=br(),nor=Sr(),sor=hr(),uor=qr(),oor=vr(),vor=mr(),Yde=Pr(),Ao=Wr().factory,cor=H(),$de=Or(),To=V(),Zde=eor(),lor=aor();function Qde(){var r,e,t,i,a,n;if(arguments.length===0)t=Ao();else if(arguments.length===1){if(e=arguments[0],!sor(e))throw new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",e));if(oor(e,"prng")){if(!uor(e.prng))throw new TypeError(To("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ao(e)}else{if(n=arguments[0],r=arguments[1],a=Zde(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!sor(e))throw new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",e));if(oor(e,"prng")){if(!uor(e.prng))throw new TypeError(To("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ao(e)}else t=Ao()}return n===void 0?i=y:i=m,zt(i,"NAME","gumbel"),e&&e.prng?(zt(i,"seed",null),zt(i,"seedLength",null),nor(i,"state",vor(null),Yde),zt(i,"stateLength",null),zt(i,"byteLength",null),zt(i,"toJSON",vor(null)),zt(i,"PRNG",t)):(_o(i,"seed",u),_o(i,"seedLength",o),nor(i,"state",c,l),_o(i,"stateLength",v),_o(i,"byteLength",f),zt(i,"toJSON",p),zt(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=$de(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return lor(t,n,r)}function y(g,d){return cor(g)||cor(d)||d<=0?NaN:lor(t,g,d)}}por.exports=Qde});var gor=s((rat,dor)=>{"use strict";var Kde=pc(),rge=Kde();dor.exports=rge});var hor=s((eat,yor)=>{"use strict";var ege=D(),mor=gor(),tge=pc();ege(mor,"factory",tge);yor.exports=mor});var bor=s((tat,qor)=>{"use strict";var dc=be().isPrimitive,B0=V();function ige(r,e,t){return dc(r)?dc(e)?dc(t)?t>r?new RangeError(B0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(B0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(B0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(B0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(B0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}qor.exports=ige});var wor=s((iat,age)=>{age.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var Nor=s((aat,Eor)=>{"use strict";var nge=H(),sge=Ne(),uge=rn(),oge=pr(),vge=wor(),fge=170;function cge(r){return nge(r)?NaN:sge(r)?r<0?NaN:r<=fge?vge[r]:oge:uge(r+1)}Eor.exports=cge});var Oor=s((nat,Sor)=>{"use strict";var lge=Nor();Sor.exports=lge});var Aor=s((sat,_or)=>{"use strict";var ki=Oor();function pge(r,e,t,i){var a,n,u;for(i<t?(a=ki(t)*ki(e+t-i)/(ki(e+t)*ki(t-i)),u=0):(a=ki(e)*ki(i)/(ki(i-t)*ki(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}_or.exports=pge});var Ior=s((uat,Tor)=>{"use strict";var Io=Aor();function dge(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=Io(r,a,n,u),t-o):(n=t,a=e-t,o=Io(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=Io(r,a,n,u),o):(a=e-t,n=t,o=Io(r,a,n,u),i-o))}Tor.exports=dge});var mc=s((oat,kor)=>{"use strict";var Ht=D(),Ro=br(),Ror=Sr(),Por=hr(),Lor=qr(),For=vr(),jor=mr(),gge=Pr(),Po=Wr().factory,gc=A3(),Mor=pr(),mge=Or(),Lo=V(),yge=bor(),Bor=Ior();function hge(){var r,e,t,i,a,n,u;if(arguments.length===0)e=Po();else if(arguments.length===1){if(r=arguments[0],!Por(r))throw new TypeError(Lo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(For(r,"prng")){if(!Lor(r.prng))throw new TypeError(Lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Po(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=yge(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Por(r))throw new TypeError(Lo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(For(r,"prng")){if(!Lor(r.prng))throw new TypeError(Lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Po(r)}else e=Po()}return a===void 0?t=g:t=y,Ht(t,"NAME","hypergeometric"),r&&r.prng?(Ht(t,"seed",null),Ht(t,"seedLength",null),Ror(t,"state",jor(null),gge),Ht(t,"stateLength",null),Ht(t,"byteLength",null),Ht(t,"toJSON",jor(null)),Ht(t,"PRNG",e)):(Ro(t,"seed",o),Ro(t,"seedLength",v),Ror(t,"state",l,p),Ro(t,"stateLength",f),Ro(t,"byteLength",c),Ht(t,"toJSON",m),Ht(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=mge(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return Bor(e,a,n,u)}function g(d,h,q){return d===Mor||h===Mor||!gc(d)||!gc(h)||!gc(q)||q>d?NaN:Bor(e,d,h,q)}}kor.exports=hge});var Vor=s((vat,Cor)=>{"use strict";var qge=mc(),bge=qge();Cor.exports=bge});var Dor=s((fat,Uor)=>{"use strict";var wge=D(),Gor=Vor(),Ege=mc();wge(Gor,"factory",Ege);Uor.exports=Gor});var xor=s((cat,Wor)=>{"use strict";var zor=zr().isPrimitive,Hor=V();function Nge(r,e){return zor(r)?zor(e)?null:new TypeError(Hor("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Hor("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Wor.exports=Nge});var yc=s((lat,Kor)=>{"use strict";var Ci=D(),Fo=br(),Xor=Sr(),Jor=hr(),Yor=qr(),$or=vr(),Zor=mr(),Sge=Pr(),yn=fn().factory,Qor=H(),Oge=Or(),jo=V(),_ge=xor();function Age(){var r,e,t,i,a,n,u;if(arguments.length===0)r=yn();else if(arguments.length===1){if(i=arguments[0],!Jor(i))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",i));if($or(i,"prng")){if(!Yor(i.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=yn({prng:i.prng})}else r=yn(i)}else{if(e=arguments[0],t=arguments[1],u=_ge(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!Jor(i))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",i));if($or(i,"prng")){if(!Yor(i.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=yn(e,t,{prng:i.prng})}else r=yn(e,t,i)}else r=yn(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,Ci(n,"NAME","invgamma"),i&&i.prng?(Ci(n,"seed",null),Ci(n,"seedLength",null),Xor(n,"state",Zor(null),Sge),Ci(n,"stateLength",null),Ci(n,"byteLength",null),Ci(n,"toJSON",Zor(null))):(Fo(n,"seed",o),Fo(n,"seedLength",v),Xor(n,"state",l,p),Fo(n,"stateLength",f),Fo(n,"byteLength",c),Ci(n,"toJSON",m)),Ci(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Oge(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return Qor(d)||Qor(h)||d<=0||h<=0?NaN:1/r(d,h)}}Kor.exports=Age});var e1r=s((pat,r1r)=>{"use strict";var Tge=yc(),Ige=Tge();r1r.exports=Ige});var a1r=s((dat,i1r)=>{"use strict";var Rge=D(),t1r=e1r(),Pge=yc();Rge(t1r,"factory",Pge);i1r.exports=t1r});var o1r=s((gat,u1r)=>{"use strict";var n1r=zr().isPrimitive,s1r=V();function Lge(r,e){return n1r(r)?n1r(e)?null:new TypeError(s1r("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(s1r("invalid argument. First argument must be a positive number. Value: `%s`.",r))}u1r.exports=Lge});var c1r=s((mat,f1r)=>{"use strict";var v1r=Gr();function Fge(r,e,t){var i=r();return v1r(1-v1r(1-i,1/t),1/e)}f1r.exports=Fge});var hc=s((yat,q1r)=>{"use strict";var Wt=D(),Mo=br(),l1r=Sr(),p1r=hr(),d1r=qr(),g1r=vr(),m1r=mr(),jge=Pr(),Bo=Wr().factory,y1r=H(),Mge=Or(),ko=V(),Bge=o1r(),h1r=c1r();function kge(){var r,e,t,i,a,n;if(arguments.length===0)e=Bo();else if(arguments.length===1){if(r=arguments[0],!p1r(r))throw new TypeError(ko("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g1r(r,"prng")){if(!d1r(r.prng))throw new TypeError(ko("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bo(r)}else{if(a=arguments[0],n=arguments[1],i=Bge(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!p1r(r))throw new TypeError(ko("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g1r(r,"prng")){if(!d1r(r.prng))throw new TypeError(ko("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bo(r)}else e=Bo()}return a===void 0?t=y:t=m,Wt(t,"NAME","kumaraswamy"),r&&r.prng?(Wt(t,"seed",null),Wt(t,"seedLength",null),l1r(t,"state",m1r(null),jge),Wt(t,"stateLength",null),Wt(t,"byteLength",null),Wt(t,"toJSON",m1r(null)),Wt(t,"PRNG",e)):(Mo(t,"seed",u),Mo(t,"seedLength",o),l1r(t,"state",c,l),Mo(t,"stateLength",v),Mo(t,"byteLength",f),Wt(t,"toJSON",p),Wt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Mge(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return h1r(e,a,n)}function y(g,d){return y1r(g)||y1r(d)||g<=0||d<=0?NaN:h1r(e,g,d)}}q1r.exports=kge});var w1r=s((hat,b1r)=>{"use strict";var Cge=hc(),Vge=Cge();b1r.exports=Vge});var S1r=s((qat,N1r)=>{"use strict";var Gge=D(),E1r=w1r(),Uge=hc();Gge(E1r,"factory",Uge);N1r.exports=E1r});var A1r=s((bat,_1r)=>{"use strict";var Dge=Nr().isPrimitive,zge=zr().isPrimitive,O1r=V(),Hge=oe();function Wge(r,e){return!Dge(r)||Hge(r)?new TypeError(O1r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zge(e)?null:new TypeError(O1r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_1r.exports=Wge});var I1r=s((wat,T1r)=>{"use strict";var xge=xu(),Xge=Dr(),Jge=wr();function Yge(r,e,t){var i=r()-.5;return e-t*xge(i)*Jge(1-2*Xge(i))}T1r.exports=Yge});var qc=s((Eat,k1r)=>{"use strict";var xt=D(),Co=br(),R1r=Sr(),P1r=hr(),L1r=qr(),F1r=vr(),j1r=mr(),$ge=Pr(),Vo=Wr().factory,M1r=H(),Zge=Or(),Go=V(),Qge=A1r(),B1r=I1r();function Kge(){var r,e,t,i,a,n;if(arguments.length===0)e=Vo();else if(arguments.length===1){if(r=arguments[0],!P1r(r))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F1r(r,"prng")){if(!L1r(r.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vo(r)}else{if(a=arguments[0],n=arguments[1],i=Qge(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!P1r(r))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F1r(r,"prng")){if(!L1r(r.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vo(r)}else e=Vo()}return a===void 0?t=y:t=m,xt(t,"NAME","laplace"),r&&r.prng?(xt(t,"seed",null),xt(t,"seedLength",null),R1r(t,"state",j1r(null),$ge),xt(t,"stateLength",null),xt(t,"byteLength",null),xt(t,"toJSON",j1r(null)),xt(t,"PRNG",e)):(Co(t,"seed",u),Co(t,"seedLength",o),R1r(t,"state",c,l),Co(t,"stateLength",v),Co(t,"byteLength",f),xt(t,"toJSON",p),xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Zge(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return B1r(e,a,n)}function y(g,d){return M1r(g)||M1r(d)||d<=0?NaN:B1r(e,g,d)}}k1r.exports=Kge});var V1r=s((Nat,C1r)=>{"use strict";var rme=qc(),eme=rme();C1r.exports=eme});var D1r=s((Sat,U1r)=>{"use strict";var tme=D(),G1r=V1r(),ime=qc();tme(G1r,"factory",ime);U1r.exports=G1r});var W1r=s((Oat,H1r)=>{"use strict";var ame=Nr().isPrimitive,nme=zr().isPrimitive,z1r=V(),sme=oe();function ume(r,e){return!ame(r)||sme(r)?new TypeError(z1r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):nme(e)?null:new TypeError(z1r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}H1r.exports=ume});var X1r=s((_at,x1r)=>{"use strict";var ome=vu(),bc=H(),vme=Rr();function fme(r,e,t){var i,a;return bc(e)||bc(t)||bc(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*vme(2),i+a*ome(2*r-1))}x1r.exports=fme});var Y1r=s((Aat,J1r)=>{"use strict";var cme=mr(),lme=K4().factory,pme=vu(),wc=H(),dme=Rr();function gme(r,e){var t,i;if(wc(r)||wc(e)||e<0)return cme(NaN);return e===0&&lme(r),t=r,i=e*dme(2),a;function a(n){return wc(n)||n<0||n>1?NaN:t+i*pme(2*n-1)}}J1r.exports=gme});var Ec=s((Tat,Z1r)=>{"use strict";var mme=D(),$1r=X1r(),yme=Y1r();mme($1r,"factory",yme);Z1r.exports=$1r});var K1r=s((Iat,Q1r)=>{"use strict";var hme=Ec();function qme(r,e,t){var i=hme(1-r()/2,0,1);return e+t/(i*i)}Q1r.exports=qme});var Nc=s((Rat,u2r)=>{"use strict";var Xt=D(),Uo=br(),r2r=Sr(),e2r=hr(),t2r=qr(),i2r=vr(),a2r=mr(),bme=Pr(),Do=Wr().factory,n2r=H(),wme=Or(),zo=V(),Eme=W1r(),s2r=K1r();function Nme(){var r,e,t,i,a,n;if(arguments.length===0)e=Do();else if(arguments.length===1){if(r=arguments[0],!e2r(r))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(i2r(r,"prng")){if(!t2r(r.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Do(r)}else{if(a=arguments[0],n=arguments[1],i=Eme(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!e2r(r))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(i2r(r,"prng")){if(!t2r(r.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Do(r)}else e=Do()}return a===void 0?t=y:t=m,Xt(t,"NAME","levy"),r&&r.prng?(Xt(t,"seed",null),Xt(t,"seedLength",null),r2r(t,"state",a2r(null),bme),Xt(t,"stateLength",null),Xt(t,"byteLength",null),Xt(t,"toJSON",a2r(null)),Xt(t,"PRNG",e)):(Uo(t,"seed",u),Uo(t,"seedLength",o),r2r(t,"state",c,l),Uo(t,"stateLength",v),Uo(t,"byteLength",f),Xt(t,"toJSON",p),Xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=wme(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return s2r(e,a,n)}function y(g,d){return n2r(g)||n2r(d)||d<=0?NaN:s2r(e,g,d)}}u2r.exports=Nme});var v2r=s((Pat,o2r)=>{"use strict";var Sme=Nc(),Ome=Sme();o2r.exports=Ome});var l2r=s((Lat,c2r)=>{"use strict";var _me=D(),f2r=v2r(),Ame=Nc();_me(f2r,"factory",Ame);c2r.exports=f2r});var g2r=s((Fat,d2r)=>{"use strict";var Tme=Nr().isPrimitive,Ime=zr().isPrimitive,Rme=oe(),p2r=V();function Pme(r,e){return!Tme(r)||Rme(r)?new TypeError(p2r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ime(e)?null:new TypeError(p2r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}d2r.exports=Pme});var y2r=s((jat,m2r)=>{"use strict";var Lme=wr();function Fme(r,e,t){var i=r();return e+t*Lme(i/(1-i))}m2r.exports=Fme});var Sc=s((Mat,O2r)=>{"use strict";var Jt=D(),Ho=br(),h2r=Sr(),q2r=hr(),b2r=qr(),w2r=vr(),E2r=mr(),jme=Pr(),Wo=Wr().factory,N2r=H(),Mme=Or(),xo=V(),Bme=g2r(),S2r=y2r();function kme(){var r,e,t,i,a,n;if(arguments.length===0)e=Wo();else if(arguments.length===1){if(r=arguments[0],!q2r(r))throw new TypeError(xo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(w2r(r,"prng")){if(!b2r(r.prng))throw new TypeError(xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Wo(r)}else{if(a=arguments[0],n=arguments[1],i=Bme(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!q2r(r))throw new TypeError(xo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(w2r(r,"prng")){if(!b2r(r.prng))throw new TypeError(xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Wo(r)}else e=Wo()}return a===void 0?t=y:t=m,Jt(t,"NAME","logistic"),r&&r.prng?(Jt(t,"seed",null),Jt(t,"seedLength",null),h2r(t,"state",E2r(null),jme),Jt(t,"stateLength",null),Jt(t,"byteLength",null),Jt(t,"toJSON",E2r(null)),Jt(t,"PRNG",e)):(Ho(t,"seed",u),Ho(t,"seedLength",o),h2r(t,"state",c,l),Ho(t,"stateLength",v),Ho(t,"byteLength",f),Jt(t,"toJSON",p),Jt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Mme(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return S2r(e,a,n)}function y(g,d){return N2r(g)||N2r(d)||d<=0?NaN:S2r(e,g,d)}}O2r.exports=kme});var A2r=s((Bat,_2r)=>{"use strict";var Cme=Sc(),Vme=Cme();_2r.exports=Vme});var R2r=s((kat,I2r)=>{"use strict";var Gme=D(),T2r=A2r(),Ume=Sc();Gme(T2r,"factory",Ume);I2r.exports=T2r});var F2r=s((Cat,L2r)=>{"use strict";var Dme=Nr().isPrimitive,zme=zr().isPrimitive,P2r=V(),Hme=oe();function Wme(r,e){return!Dme(r)||Hme(r)?new TypeError(P2r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zme(e)?null:new TypeError(P2r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}L2r.exports=Wme});var M2r=s((Vat,j2r)=>{"use strict";var xme=Yr();function Xme(r,e,t){return xme(e+t*r())}j2r.exports=Xme});var Oc=s((Gat,z2r)=>{"use strict";var Vi=D(),Xo=br(),B2r=Sr(),k2r=hr(),C2r=qr(),V2r=vr(),G2r=mr(),Jme=Pr(),hn=Ri().factory,U2r=H(),Yme=Or(),Jo=V(),$me=F2r(),D2r=M2r();function Zme(){var r,e,t,i,a,n,u;if(arguments.length===0)e=hn();else if(arguments.length===1){if(t=arguments[0],!k2r(t))throw new TypeError(Jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(V2r(t,"prng")){if(!C2r(t.prng))throw new TypeError(Jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=hn({prng:t.prng})}else e=hn(t)}else{if(u=arguments[0],r=arguments[1],n=$me(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!k2r(t))throw new TypeError(Jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(V2r(t,"prng")){if(!C2r(t.prng))throw new TypeError(Jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=hn({prng:t.prng})}else e=hn(t)}else e=hn()}return u===void 0?a=g:a=y,i=e.PRNG,Vi(a,"NAME","lognormal"),t&&t.prng?(Vi(a,"seed",null),Vi(a,"seedLength",null),B2r(a,"state",G2r(null),Jme),Vi(a,"stateLength",null),Vi(a,"byteLength",null),Vi(a,"toJSON",G2r(null))):(Xo(a,"seed",o),Xo(a,"seedLength",v),B2r(a,"state",l,p),Xo(a,"stateLength",f),Xo(a,"byteLength",c),Vi(a,"toJSON",m)),Vi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Yme(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return D2r(e,u,r)}function g(d,h){return U2r(d)||U2r(h)||h<=0?NaN:D2r(e,d,h)}}z2r.exports=Zme});var W2r=s((Uat,H2r)=>{"use strict";var Qme=Oc(),Kme=Qme();H2r.exports=Kme});var J2r=s((Dat,X2r)=>{"use strict";var rye=D(),x2r=W2r(),eye=Oc();rye(x2r,"factory",eye);X2r.exports=x2r});var _c=s((zat,Y2r)=>{"use strict";var tye=wa(),iye=Ur(),aye=tye-1;function nye(){var r=iye(1+aye*Math.random());return r|0}Y2r.exports=nye});var Ic=s((Hat,rvr)=>{"use strict";var Yt=D(),Gi=br(),$2r=Sr(),Ac=vr(),sye=hr(),uye=de().isPrimitive,oye=Ve(),vye=nt().isPrimitive,Z2r=rs(),Qe=V(),Yo=wa(),Le=oi(),qn=Oi(),fye=Or(),Q2r=_c(),Tc=Yo-1|0,cye=Yo-1|0,lye=16807,$o=1,Zo=2,Ui=2,Fe=4,k0=5;function K2r(r,e){var t;return e?t="option":t="argument",r.length<k0+1?new RangeError(Qe("invalid %s. State array has insufficient length.",t)):r[0]!==$o?new RangeError(Qe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,$o,r[0])):r[1]!==Zo?new RangeError(Qe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Zo,r[1])):r[Ui]!==1?new RangeError(Qe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ui])):r[Fe]!==r.length-k0?new RangeError(Qe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-k0,r[Fe])):null}function pye(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!sye(r))throw new TypeError(Qe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ac(r,"copy")&&(i.copy=r.copy,!uye(r.copy)))throw new TypeError(Qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Ac(r,"state")){if(t=r.state,i.state=!0,!Z2r(t))throw new TypeError(Qe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=K2r(t,!0),u)throw u;i.copy===!1?e=t:(e=new Le(t.length),qn(t.length,t,1,e,1)),t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(Ac(r,"seed"))if(a=r.seed,i.seed=!0,vye(a)){if(a>cye)throw new RangeError(Qe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(oye(a)&&a.length>0)n=a.length,e=new Le(k0+n),e[0]=$o,e[1]=Zo,e[Ui]=1,e[Fe]=n,qn.ndarray(n,a,1,0,e,1,Fe+1),t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError(Qe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=Q2r()|0}else a=Q2r()|0;return t===void 0&&(e=new Le(k0+1),e[0]=$o,e[1]=Zo,e[Ui]=1,e[Fe]=1,e[Fe+1]=a,t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),Yt(y,"NAME","minstd"),Gi(y,"seed",o),Gi(y,"seedLength",v),$2r(y,"state",l,p),Gi(y,"stateLength",f),Gi(y,"byteLength",c),Yt(y,"toJSON",m),Yt(y,"MIN",1),Yt(y,"MAX",Yo-1),Yt(y,"normalized",g),Yt(g,"NAME",y.NAME),Gi(g,"seed",o),Gi(g,"seedLength",v),$2r(g,"state",l,p),Gi(g,"stateLength",f),Gi(g,"byteLength",c),Yt(g,"toJSON",m),Yt(g,"MIN",(y.MIN-1)/Tc),Yt(g,"MAX",(y.MAX-1)/Tc),y;function o(){var d=e[Fe];return qn(d,a,1,new Le(d),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return qn(d,e,1,new Le(d),1)}function p(d){var h;if(!Z2r(d))throw new TypeError(Qe("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=K2r(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?qn(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Le(d.length)),qn(d.length,d,1,e,1)),t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=fye(e),d.params=[],d}function y(){var d=t[0]|0;return d=lye*d%Yo|0,t[0]=d,d|0}function g(){return(y()-1)/Tc}}rvr.exports=pye});var tvr=s((Wat,evr)=>{"use strict";var dye=Ic(),gye=_c(),mye=dye({seed:gye()});evr.exports=mye});var nvr=s((xat,avr)=>{"use strict";var yye=D(),ivr=tvr(),hye=Ic();yye(ivr,"factory",hye);avr.exports=ivr});var uvr=s((Xat,svr)=>{"use strict";var qye=H(),bye=8;function wye(r,e,t){var i,a;for(a=0;a<bye;a++)if(i=r(),qye(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}svr.exports=wye});var Rc=s((Jat,ovr)=>{"use strict";var Eye=wa(),Nye=Ur(),Sye=Eye-1;function Oye(){var r=Nye(1+Sye*Math.random());return r|0}ovr.exports=Oye});var Fc=s((Yat,dvr)=>{"use strict";var $t=D(),Di=br(),vvr=Sr(),Pc=vr(),_ye=hr(),Aye=de().isPrimitive,Tye=Ve(),Iye=nt().isPrimitive,fvr=rs(),bn=Oi(),Rye=Ur(),je=oi(),C0=wa(),Pye=Or(),Xe=V(),cvr=uvr(),lvr=Rc(),Lc=C0-1|0,Lye=C0-1|0,Fye=16807,Be=32,r1=1,e1=3,zi=2,wn=Be+3,Me=Be+6,V0=Be+7,Qo=wn+1,Ko=wn+2;function pvr(r,e){var t;return e?t="option":t="argument",r.length<V0+1?new RangeError(Xe("invalid %s. State array has insufficient length.",t)):r[0]!==r1?new RangeError(Xe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,r1,r[0])):r[1]!==e1?new RangeError(Xe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,e1,r[1])):r[zi]!==Be?new RangeError(Xe("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Be,r[zi])):r[wn]!==2?new RangeError(Xe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[wn])):r[Me]!==r.length-V0?new RangeError(Xe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-V0,r[Me])):null}function jye(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!_ye(r))throw new TypeError(Xe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Pc(r,"copy")&&(i.copy=r.copy,!Aye(r.copy)))throw new TypeError(Xe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Pc(r,"state")){if(t=r.state,i.state=!0,!fvr(t))throw new TypeError(Xe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=pvr(t,!0),u)throw u;i.copy===!1?e=t:(e=new je(t.length),bn(t.length,t,1,e,1)),t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,t[Me])}if(a===void 0)if(Pc(r,"seed"))if(a=r.seed,i.seed=!0,Iye(a)){if(a>Lye)throw new RangeError(Xe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(Tye(a)&&a.length>0)n=a.length,e=new je(V0+n),e[0]=r1,e[1]=e1,e[zi]=Be,e[wn]=2,e[Ko]=a[0],e[Me]=n,bn.ndarray(n,a,1,0,e,1,Me+1),t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,n),t=cvr(y,t,Be),e[Qo]=t[0];else throw new TypeError(Xe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=lvr()|0}else a=lvr()|0;return t===void 0&&(e=new je(V0+1),e[0]=r1,e[1]=e1,e[zi]=Be,e[wn]=2,e[Ko]=a,e[Me]=1,e[Me+1]=a,t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,1),t=cvr(y,t,Be),e[Qo]=t[0]),$t(g,"NAME","minstd-shuffle"),Di(g,"seed",o),Di(g,"seedLength",v),vvr(g,"state",l,p),Di(g,"stateLength",f),Di(g,"byteLength",c),$t(g,"toJSON",m),$t(g,"MIN",1),$t(g,"MAX",C0-1),$t(g,"normalized",d),$t(d,"NAME",g.NAME),Di(d,"seed",o),Di(d,"seedLength",v),vvr(d,"state",l,p),Di(d,"stateLength",f),Di(d,"byteLength",c),$t(d,"toJSON",m),$t(d,"MIN",(g.MIN-1)/Lc),$t(d,"MAX",(g.MAX-1)/Lc),g;function o(){var h=e[Me];return bn(h,a,1,new je(h),1)}function v(){return e[Me]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return bn(h,e,1,new je(h),1)}function p(h){var q;if(!fvr(h))throw new TypeError(Xe("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=pvr(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?bn(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new je(h.length)),bn(h.length,h,1,e,1)),t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,e[Me])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=Pye(e),h.params=[],h}function y(){var h=e[Ko]|0;return h=Fye*h%C0|0,e[Ko]=h,h|0}function g(){var h,q;return h=e[Qo],q=Rye(Be*(h/C0)),h=t[q],e[Qo]=h,t[q]=y(),h}function d(){return(g()-1)/Lc}}dvr.exports=jye});var mvr=s(($at,gvr)=>{"use strict";var Mye=Fc(),Bye=Rc(),kye=Mye({seed:Bye()});gvr.exports=kye});var qvr=s((Zat,hvr)=>{"use strict";var Cye=D(),yvr=mvr(),Vye=Fc();Cye(yvr,"factory",Vye);hvr.exports=yvr});var wvr=s((Qat,bvr)=>{"use strict";var Gye=Yr();function Uye(r,e){for(var t=r(),i=1;t>Gye(-e);)i+=1,t*=r();return i-1}bvr.exports=Uye});var Nvr=s((Kat,Evr)=>{"use strict";var Dye=Ur();function zye(r){return Dye(r)===r&&r<0}Evr.exports=zye});var Ovr=s((rnt,Svr)=>{"use strict";var Hye=Nvr();Svr.exports=Hye});var Avr=s((ent,_vr)=>{"use strict";var Wye=Ovr(),xye=m0();function Xye(r){return Wye(r)?NaN:xye(r+1)}_vr.exports=Xye});var Ivr=s((tnt,Tvr)=>{"use strict";var Jye=Avr();Tvr.exports=Jye});var Fvr=s((int,Lvr)=>{"use strict";var Yye=Ivr(),Rvr=Ur(),$ye=xu(),Zye=Rr(),Pvr=Dr(),t1=wr(),Qye=nf(),Kye=1/12,rhe=1/360;function ehe(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=Zye(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-Pvr(c))+v,c+=e+.445,Rvr(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=$ye(c)*.5-c,l=u*r()),n=.5-Pvr(c),(n>=.013||n>=l)&&(f=Rvr((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*t1(e/f),c+=-e-Qye+f,c-=(Kye-rhe/(f*f))/f,f>=10&&c>=t1(l*t)||(c=f*t1(e)-e-Yye(f),f>=0&&f<=9&&c>=t1(l))))return f}}Lvr.exports=ehe});var Mvr=s((ant,jvr)=>{"use strict";var the=wvr(),ihe=Fvr();function ahe(r,e){return e<30?the(r,e):ihe(r,e)}jvr.exports=ahe});var jc=s((nnt,Dvr)=>{"use strict";var Zt=D(),i1=br(),Bvr=Sr(),nhe=zr().isPrimitive,kvr=hr(),Cvr=qr(),Vvr=vr(),Gvr=mr(),she=Pr(),a1=Wr().factory,uhe=H(),ohe=Or(),n1=V(),Uvr=Mvr();function vhe(){var r,e,t,i;if(arguments.length===0)t=a1();else if(arguments.length===1&&kvr(arguments[0]))if(e=arguments[0],Vvr(e,"prng")){if(!Cvr(e.prng))throw new TypeError(n1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=a1(e);else{if(r=arguments[0],!nhe(r))throw new TypeError(n1("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!kvr(e))throw new TypeError(n1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Vvr(e,"prng")){if(!Cvr(e.prng))throw new TypeError(n1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=a1(e)}else t=a1()}return r===void 0?i=p:i=l,Zt(i,"NAME","poisson"),e&&e.prng?(Zt(i,"seed",null),Zt(i,"seedLength",null),Bvr(i,"state",Gvr(null),she),Zt(i,"stateLength",null),Zt(i,"byteLength",null),Zt(i,"toJSON",Gvr(null)),Zt(i,"PRNG",t)):(i1(i,"seed",a),i1(i,"seedLength",n),Bvr(i,"state",v,f),i1(i,"stateLength",u),i1(i,"byteLength",o),Zt(i,"toJSON",c),Zt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=ohe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Uvr(t,r)}function p(m){return uhe(m)||m<=0?NaN:Uvr(t,m)}}Dvr.exports=vhe});var Hvr=s((snt,zvr)=>{"use strict";var fhe=jc(),che=fhe();zvr.exports=che});var Mc=s((unt,xvr)=>{"use strict";var lhe=D(),Wvr=Hvr(),phe=jc();lhe(Wvr,"factory",phe);xvr.exports=Wvr});var Jvr=s((ont,Xvr)=>{"use strict";var dhe=zr().isPrimitive,ghe=Nr().isPrimitive,Bc=V(),mhe=oe();function yhe(r,e){return dhe(r)?!ghe(e)||mhe(e)?new TypeError(Bc("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Bc("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Bc("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Xvr.exports=yhe});var Gc=s((vnt,t3r)=>{"use strict";var Hi=D(),s1=br(),Yvr=Sr(),En=vr(),$vr=hr(),kc=qt(),Zvr=de().isPrimitive,Qvr=qr(),Kvr=mr(),hhe=Pr(),r3r=H(),Nn=Mc().factory,u1=fn().factory,Cc=Oi(),Vc=me(),e3r=L0(),qhe=Or(),Qt=V(),bhe=Jvr();function whe(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Nn(i);else if(arguments.length===1){if(i=arguments[0],!$vr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(En(i,"copy")&&!Zvr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(En(i,"prng")){if(!Qvr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Nn({prng:i.prng})}else{if(En(i,"state")&&!kc(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=e3r({},i),i.copy===!1?u=!1:i.state&&(i.state=Cc(i.state.length,i.state,1,new Vc(i.state.length),1)),i.copy=!1,t=Nn(i)}}else{if(f=arguments[0],v=arguments[1],o=bhe(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!$vr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(En(i,"copy")&&!Zvr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(En(i,"prng")){if(!Qvr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Nn({prng:i.prng})}else{if(En(i,"state")&&!kc(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=e3r({},i),i.copy===!1?u=!1:i.state&&(i.state=Cc(i.state.length,i.state,1,new Vc(i.state.length),1)),i.copy=!1,t=Nn(i)}}else i={copy:!1},t=Nn(i)}return i&&i.prng?f===void 0?r=u1({prng:i.prng}):r=u1(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=u1({state:e,copy:!1}):r=u1(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,Hi(a,"NAME","negative-binomial"),i&&i.prng?(Hi(a,"seed",null),Hi(a,"seedLength",null),Yvr(a,"state",Kvr(null),hhe),Hi(a,"stateLength",null),Hi(a,"byteLength",null),Hi(a,"toJSON",Kvr(null))):(s1(a,"seed",c),s1(a,"seedLength",l),Yvr(a,"state",y,g),s1(a,"stateLength",p),s1(a,"byteLength",m),Hi(a,"toJSON",d)),Hi(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!kc(w))throw new TypeError(Qt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=Cc(w.length,w,1,new Vc(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=qhe(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,_){return r3r(w)||r3r(_)||_<=0||_>=1?NaN:t(r(w,_/(1-_)))}}t3r.exports=whe});var a3r=s((fnt,i3r)=>{"use strict";var Ehe=Gc(),Nhe=Ehe();i3r.exports=Nhe});var u3r=s((cnt,s3r)=>{"use strict";var She=D(),n3r=a3r(),Ohe=Gc();She(n3r,"factory",Ohe);s3r.exports=n3r});var f3r=s((lnt,v3r)=>{"use strict";var _he=Nr().isPrimitive,Ahe=zr().isPrimitive,o3r=V(),The=oe();function Ihe(r,e){return!_he(r)||The(r)?new TypeError(o3r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ahe(e)?null:new TypeError(o3r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}v3r.exports=Ihe});var l3r=s((pnt,c3r)=>{"use strict";function Rhe(r,e,t){return e+t*r()}c3r.exports=Rhe});var Uc=s((dnt,b3r)=>{"use strict";var Wi=D(),o1=br(),p3r=Sr(),d3r=hr(),g3r=qr(),m3r=vr(),y3r=mr(),Phe=Pr(),Sn=Ri().factory,h3r=H(),Lhe=Or(),v1=V(),Fhe=f3r(),q3r=l3r();function jhe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=Sn();else if(arguments.length===1){if(t=arguments[0],!d3r(t))throw new TypeError(v1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(m3r(t,"prng")){if(!g3r(t.prng))throw new TypeError(v1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Sn({prng:t.prng})}else e=Sn(t)}else{if(u=arguments[0],r=arguments[1],n=Fhe(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!d3r(t))throw new TypeError(v1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(m3r(t,"prng")){if(!g3r(t.prng))throw new TypeError(v1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Sn({prng:t.prng})}else e=Sn(t)}else e=Sn()}return u===void 0?a=g:a=y,i=e.PRNG,Wi(a,"NAME","normal"),t&&t.prng?(Wi(a,"seed",null),Wi(a,"seedLength",null),p3r(a,"state",y3r(null),Phe),Wi(a,"stateLength",null),Wi(a,"byteLength",null),Wi(a,"toJSON",y3r(null))):(o1(a,"seed",o),o1(a,"seedLength",v),p3r(a,"state",l,p),o1(a,"stateLength",f),o1(a,"byteLength",c),Wi(a,"toJSON",m)),Wi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Lhe(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return q3r(e,u,r)}function g(d,h){return h3r(d)||h3r(h)||h<=0?NaN:q3r(e,d,h)}}b3r.exports=jhe});var E3r=s((gnt,w3r)=>{"use strict";var Mhe=Uc(),Bhe=Mhe();w3r.exports=Bhe});var O3r=s((mnt,S3r)=>{"use strict";var khe=D(),N3r=E3r(),Che=Uc();khe(N3r,"factory",Che);S3r.exports=N3r});var I3r=s((ynt,T3r)=>{"use strict";var _3r=zr().isPrimitive,A3r=V();function Vhe(r,e){return _3r(r)?_3r(e)?null:new TypeError(A3r("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(A3r("invalid argument. First argument must be a positive number. Value: `%s`.",r))}T3r.exports=Vhe});var P3r=s((hnt,R3r)=>{"use strict";var Ghe=Gr();function Uhe(r,e,t){return t/Ghe(r(),1/e)}R3r.exports=Uhe});var Dc=s((qnt,V3r)=>{"use strict";var Kt=D(),f1=br(),L3r=Sr(),F3r=hr(),j3r=qr(),M3r=vr(),B3r=mr(),Dhe=Pr(),c1=Wr().factory,k3r=H(),zhe=Or(),l1=V(),Hhe=I3r(),C3r=P3r();function Whe(){var r,e,t,i,a,n;if(arguments.length===0)i=c1();else if(arguments.length===1){if(t=arguments[0],!F3r(t))throw new TypeError(l1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(M3r(t,"prng")){if(!j3r(t.prng))throw new TypeError(l1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=c1(t)}else{if(r=arguments[0],e=arguments[1],n=Hhe(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!F3r(t))throw new TypeError(l1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(M3r(t,"prng")){if(!j3r(t.prng))throw new TypeError(l1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=c1(t)}else i=c1()}return r===void 0?a=y:a=m,Kt(a,"NAME","pareto-type1"),t&&t.prng?(Kt(a,"seed",null),Kt(a,"seedLength",null),L3r(a,"state",B3r(null),Dhe),Kt(a,"stateLength",null),Kt(a,"byteLength",null),Kt(a,"toJSON",B3r(null)),Kt(a,"PRNG",i)):(f1(a,"seed",u),f1(a,"seedLength",o),L3r(a,"state",c,l),f1(a,"stateLength",v),f1(a,"byteLength",f),Kt(a,"toJSON",p),Kt(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=zhe(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return C3r(i,r,e)}function y(g,d){return k3r(g)||k3r(d)||g<=0||d<=0?NaN:C3r(i,g,d)}}V3r.exports=Whe});var U3r=s((bnt,G3r)=>{"use strict";var xhe=Dc(),Xhe=xhe();G3r.exports=Xhe});var H3r=s((wnt,z3r)=>{"use strict";var Jhe=D(),D3r=U3r(),Yhe=Dc();Jhe(D3r,"factory",Yhe);z3r.exports=D3r});var x3r=s((Ent,W3r)=>{"use strict";var $he=Rr(),Zhe=wr();function Qhe(r,e){return e*$he(-2*Zhe(r()))}W3r.exports=Qhe});var zc=s((Nnt,K3r)=>{"use strict";var ri=D(),p1=br(),X3r=Sr(),Khe=zr().isPrimitive,J3r=hr(),Y3r=qr(),$3r=vr(),Z3r=mr(),rqe=Pr(),d1=Wr().factory,eqe=H(),tqe=Or(),g1=V(),Q3r=x3r();function iqe(){var r,e,t,i;if(arguments.length===0)t=d1();else if(arguments.length===1&&J3r(arguments[0]))if(e=arguments[0],$3r(e,"prng")){if(!Y3r(e.prng))throw new TypeError(g1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=d1(e);else{if(r=arguments[0],!Khe(r))throw new TypeError(g1("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!J3r(e))throw new TypeError(g1("invalid argument. Options argument must be an object. Value: `%s`.",e));if($3r(e,"prng")){if(!Y3r(e.prng))throw new TypeError(g1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=d1(e)}else t=d1()}return r===void 0?i=p:i=l,ri(i,"NAME","rayleigh"),e&&e.prng?(ri(i,"seed",null),ri(i,"seedLength",null),X3r(i,"state",Z3r(null),rqe),ri(i,"stateLength",null),ri(i,"byteLength",null),ri(i,"toJSON",Z3r(null)),ri(i,"PRNG",t)):(p1(i,"seed",a),p1(i,"seedLength",n),X3r(i,"state",v,f),p1(i,"stateLength",u),p1(i,"byteLength",o),ri(i,"toJSON",c),ri(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=tqe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Q3r(t,r)}function p(m){return eqe(m)||m<=0?NaN:Q3r(t,m)}}K3r.exports=iqe});var efr=s((Snt,rfr)=>{"use strict";var aqe=zc(),nqe=aqe();rfr.exports=nqe});var afr=s((Ont,ifr)=>{"use strict";var sqe=D(),tfr=efr(),uqe=zc();sqe(tfr,"factory",uqe);ifr.exports=tfr});var Xc=s((_nt,pfr)=>{"use strict";var xi=D(),m1=br(),nfr=Sr(),On=vr(),sfr=zr().isPrimitive,ufr=hr(),Hc=qt(),ofr=de().isPrimitive,oqe=H(),vfr=qr(),ffr=mr(),vqe=Pr(),y1=M0().factory,_n=Ri().factory,Wc=Oi(),xc=me(),cfr=L0(),fqe=Or(),gt=V(),lfr=Rr();function cqe(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=_n(a);else if(arguments.length===1)if(ufr(arguments[0])){if(a=arguments[0],On(a,"copy")&&!ofr(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(On(a,"prng")){if(!vfr(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=_n({prng:a.prng})}else{if(On(a,"state")&&!Hc(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=cfr({},a),a.copy===!1?u=!1:a.state&&(a.state=Wc(a.state.length,a.state,1,new xc(a.state.length),1)),a.copy=!1,t=_n(a)}}else{if(o=arguments[0],!sfr(o))throw new TypeError(gt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=_n(a)}else{if(o=arguments[0],!sfr(o))throw new TypeError(gt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!ufr(a))throw new TypeError(gt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(On(a,"copy")&&!ofr(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(On(a,"prng")){if(!vfr(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=_n({prng:a.prng})}else{if(On(a,"state")&&!Hc(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=cfr({},a),a.copy===!1?u=!1:a.state&&(a.state=Wc(a.state.length,a.state,1,new xc(a.state.length),1)),a.copy=!1,t=_n(a)}}return a&&a.prng?o===void 0?r=y1({prng:a.prng}):r=y1(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=y1({state:e,copy:!1}):r=y1(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,xi(n,"NAME","t"),a&&a.prng?(xi(n,"seed",null),xi(n,"seedLength",null),nfr(n,"state",ffr(null),vqe),xi(n,"stateLength",null),xi(n,"byteLength",null),xi(n,"toJSON",ffr(null))):(m1(n,"seed",v),m1(n,"seedLength",f),nfr(n,"state",p,m),m1(n,"stateLength",c),m1(n,"byteLength",l),xi(n,"toJSON",y)),xi(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!Hc(h))throw new TypeError(gt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=Wc(h.length,h,1,new xc(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=fqe(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/lfr(r()/o)}function d(h){return oqe(h)||h<=0?NaN:t()/lfr(r(h)/h)}}pfr.exports=cqe});var gfr=s((Ant,dfr)=>{"use strict";var lqe=Xc(),pqe=lqe();dfr.exports=pqe});var hfr=s((Tnt,yfr)=>{"use strict";var dqe=D(),mfr=gfr(),gqe=Xc();dqe(mfr,"factory",gqe);yfr.exports=mfr});var bfr=s((Int,qfr)=>{"use strict";var Jc=Nr().isPrimitive,h1=V(),Yc=oe();function mqe(r,e,t){return!Jc(r)||Yc(r)?new TypeError(h1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Jc(e)||Yc(e)?new TypeError(h1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Jc(t)||Yc(t)?new TypeError(h1("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(h1("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}qfr.exports=mqe});var Nfr=s((Rnt,Efr)=>{"use strict";var wfr=Rr();function yqe(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+wfr(n*u)):(n=(t-e)*(t-i),t-wfr(n*(1-u)))}Efr.exports=yqe});var Zc=s((Pnt,Rfr)=>{"use strict";var ei=D(),q1=br(),Sfr=Sr(),Ofr=hr(),_fr=qr(),Afr=vr(),Tfr=mr(),hqe=Pr(),b1=Wr().factory,$c=H(),qqe=Or(),w1=V(),bqe=bfr(),Ifr=Nfr();function wqe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=b1();else if(arguments.length===1){if(r=arguments[0],!Ofr(r))throw new TypeError(w1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Afr(r,"prng")){if(!_fr(r.prng))throw new TypeError(w1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=b1(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=bqe(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Ofr(r))throw new TypeError(w1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Afr(r,"prng")){if(!_fr(r.prng))throw new TypeError(w1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=b1(r)}else e=b1()}return a===void 0?t=g:t=y,ei(t,"NAME","triangular"),r&&r.prng?(ei(t,"seed",null),ei(t,"seedLength",null),Sfr(t,"state",Tfr(null),hqe),ei(t,"stateLength",null),ei(t,"byteLength",null),ei(t,"toJSON",Tfr(null)),ei(t,"PRNG",e)):(q1(t,"seed",o),q1(t,"seedLength",v),Sfr(t,"state",l,p),q1(t,"stateLength",f),q1(t,"byteLength",c),ei(t,"toJSON",m),ei(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=qqe(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return Ifr(e,a,n,u)}function g(d,h,q){return $c(d)||$c(h)||$c(q)||!(d<=q&&q<=h)?NaN:Ifr(e,d,h,q)}}Rfr.exports=wqe});var Lfr=s((Lnt,Pfr)=>{"use strict";var Eqe=Zc(),Nqe=Eqe();Pfr.exports=Nqe});var Mfr=s((Fnt,jfr)=>{"use strict";var Sqe=D(),Ffr=Lfr(),Oqe=Zc();Sqe(Ffr,"factory",Oqe);jfr.exports=Ffr});var Vfr=s((jnt,Cfr)=>{"use strict";var Bfr=Nr().isPrimitive,Qc=V(),kfr=oe();function _qe(r,e){return!Bfr(r)||kfr(r)?new TypeError(Qc("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Bfr(e)||kfr(e)?new TypeError(Qc("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Qc("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Cfr.exports=_qe});var Ufr=s((Mnt,Gfr)=>{"use strict";function Aqe(r,e,t){var i=r();return t*i+(1-i)*e}Gfr.exports=Aqe});var Kc=s((Bnt,Yfr)=>{"use strict";var ti=D(),E1=br(),Dfr=Sr(),zfr=hr(),Hfr=qr(),Wfr=vr(),xfr=mr(),Tqe=Pr(),N1=Wr().factory,Xfr=H(),Iqe=Or(),S1=V(),Rqe=Vfr(),Jfr=Ufr();function Pqe(){var r,e,t,i,a,n;if(arguments.length===0)e=N1();else if(arguments.length===1){if(r=arguments[0],!zfr(r))throw new TypeError(S1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Wfr(r,"prng")){if(!Hfr(r.prng))throw new TypeError(S1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=N1(r)}else{if(a=arguments[0],n=arguments[1],i=Rqe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!zfr(r))throw new TypeError(S1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Wfr(r,"prng")){if(!Hfr(r.prng))throw new TypeError(S1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=N1(r)}else e=N1()}return a===void 0?t=y:t=m,ti(t,"NAME","uniform"),r&&r.prng?(ti(t,"seed",null),ti(t,"seedLength",null),Dfr(t,"state",xfr(null),Tqe),ti(t,"stateLength",null),ti(t,"byteLength",null),ti(t,"toJSON",xfr(null)),ti(t,"PRNG",e)):(E1(t,"seed",u),E1(t,"seedLength",o),Dfr(t,"state",c,l),E1(t,"stateLength",v),E1(t,"byteLength",f),ti(t,"toJSON",p),ti(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Iqe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Jfr(e,a,n)}function y(g,d){return Xfr(g)||Xfr(d)||g>=d?NaN:Jfr(e,g,d)}}Yfr.exports=Pqe});var Zfr=s((knt,$fr)=>{"use strict";var Lqe=Kc(),Fqe=Lqe();$fr.exports=Fqe});var r4r=s((Cnt,Kfr)=>{"use strict";var jqe=D(),Qfr=Zfr(),Mqe=Kc();jqe(Qfr,"factory",Mqe);Kfr.exports=Qfr});var a4r=s((Vnt,i4r)=>{"use strict";var e4r=zr().isPrimitive,t4r=V();function Bqe(r,e){return e4r(r)?e4r(e)?null:new TypeError(t4r("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(t4r("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}i4r.exports=Bqe});var s4r=s((Gnt,n4r)=>{"use strict";var kqe=Gr(),Cqe=wr();function Vqe(r,e,t){return t*kqe(-Cqe(1-r()),1/e)}n4r.exports=Vqe});var r6=s((Unt,d4r)=>{"use strict";var ii=D(),O1=br(),u4r=Sr(),o4r=hr(),v4r=qr(),f4r=vr(),c4r=mr(),Gqe=Pr(),_1=Wr().factory,l4r=H(),Uqe=Or(),A1=V(),Dqe=a4r(),p4r=s4r();function zqe(){var r,e,t,i,a,n;if(arguments.length===0)t=_1();else if(arguments.length===1){if(e=arguments[0],!o4r(e))throw new TypeError(A1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(f4r(e,"prng")){if(!v4r(e.prng))throw new TypeError(A1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=_1(e)}else{if(n=arguments[0],r=arguments[1],a=Dqe(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!o4r(e))throw new TypeError(A1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(f4r(e,"prng")){if(!v4r(e.prng))throw new TypeError(A1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=_1(e)}else t=_1()}return r===void 0?i=y:i=m,ii(i,"NAME","weibull"),e&&e.prng?(ii(i,"seed",null),ii(i,"seedLength",null),u4r(i,"state",c4r(null),Gqe),ii(i,"stateLength",null),ii(i,"byteLength",null),ii(i,"toJSON",c4r(null)),ii(i,"PRNG",t)):(O1(i,"seed",u),O1(i,"seedLength",o),u4r(i,"state",c,l),O1(i,"stateLength",v),O1(i,"byteLength",f),ii(i,"toJSON",p),ii(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Uqe(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return p4r(t,n,r)}function y(g,d){return l4r(g)||l4r(d)||g<=0||d<=0?NaN:p4r(t,g,d)}}d4r.exports=zqe});var m4r=s((Dnt,g4r)=>{"use strict";var Hqe=r6(),Wqe=Hqe();g4r.exports=Wqe});var q4r=s((znt,h4r)=>{"use strict";var xqe=D(),y4r=m4r(),Xqe=r6();xqe(y4r,"factory",Xqe);h4r.exports=y4r});var w4r=s((Hnt,b4r)=>{"use strict";var Jqe=qe(),Yqe=ye().isPrimitive,$qe=V(),Zqe=$0();function Qqe(r){if(Yqe(r))return r;if(Jqe(r))return Zqe(r);throw new TypeError($qe("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}b4r.exports=Qqe});var N4r=s((Wnt,E4r)=>{"use strict";var Kqe=w4r();E4r.exports=Kqe});var O4r=s((xnt,S4r)=>{"use strict";var _r=Qr(),rbe=otr().factory,ebe=qtr().factory,tbe=Uir().factory,ibe=Aar().factory,abe=onr().factory,nbe=Nnr().factory,sbe=Unr().factory,ube=v0r().factory,obe=M0().factory,vbe=isr().factory,fbe=Nsr().factory,cbe=Usr().factory,lbe=eur().factory,pbe=bur().factory,dbe=kur().factory,gbe=fn().factory,mbe=Qur().factory,ybe=hor().factory,hbe=Dor().factory,qbe=Ri().factory,bbe=a1r().factory,wbe=S1r().factory,Ebe=D1r().factory,Nbe=l2r().factory,Sbe=R2r().factory,Obe=J2r().factory,_be=nvr().factory,Abe=qvr().factory,Tbe=Wr().factory,Ibe=u3r().factory,Rbe=O3r().factory,Pbe=H3r().factory,Lbe=Mc().factory,Fbe=afr().factory,jbe=hfr().factory,Mbe=Mfr().factory,Bbe=r4r().factory,kbe=q4r().factory,Cbe=N4r();function Vbe(r){return _r(r,"arcsine",rbe),_r(r,"bernoulli",ebe),_r(r,"beta",tbe),_r(r,"betaprime",ibe),_r(r,"binomial",abe),_r(r,"boxMuller",nbe),_r(r,"cauchy",sbe),_r(r,"chi",ube),_r(r,"chisquare",obe),_r(r,"cosine",vbe),_r(r,"discreteUniform",fbe),_r(r,"erlang",cbe),_r(r,"exponential",lbe),_r(r,"f",pbe),_r(r,"frechet",dbe),_r(r,"gamma",gbe),_r(r,"geometric",mbe),_r(r,"gumbel",ybe),_r(r,"hypergeometric",hbe),_r(r,"improvedZiggurat",qbe),_r(r,"invgamma",bbe),_r(r,"kumaraswamy",wbe),_r(r,"laplace",Ebe),_r(r,"levy",Nbe),_r(r,"logistic",Sbe),_r(r,"lognormal",Obe),_r(r,"minstd",_be),_r(r,"minstdShuffle",Abe),_r(r,"mt19937",Tbe),_r(r,"negativeBinomial",Ibe),_r(r,"normal",Rbe),_r(r,"pareto1",Pbe),_r(r,"poisson",Lbe),_r(r,"rayleigh",Fbe),_r(r,"t",jbe),_r(r,"triangular",Mbe),_r(r,"uniform",Bbe),_r(r,"weibull",kbe),r.base={},_r(r.base,"normalizeSeed",Cbe),r}S4r.exports=Vbe});var A4r=s((Xnt,_4r)=>{"use strict";var Gbe=hr(),T1=vr(),Ube=ye().isPrimitive,Dbe=nt().isPrimitive,zbe=be().isPrimitive,Hbe=ws().isPrimitive,G0=V();function Wbe(r,e){return Gbe(e)?T1(e,"period")&&(r.period=e.period,!Dbe(e.period))?new TypeError(G0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):T1(e,"amplitude")&&(r.amplitude=e.amplitude,!Hbe(e.amplitude))?new TypeError(G0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):T1(e,"offset")&&(r.offset=e.offset,!Ube(e.offset))?new TypeError(G0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):T1(e,"iter")&&(r.iter=e.iter,!zbe(e.iter))?new TypeError(G0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",e))}_4r.exports=Wbe});var P4r=s((Jnt,R4r)=>{"use strict";var e6=D(),T4r=Mn(),xbe=c0(),Xbe=Js(),Jbe=Qa(),Ybe=Ee(),$be=A4r();function I4r(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=$be(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=Ybe/e.period,o=e.amplitude/Jbe,v=0,t={},e6(t,"next",f),e6(t,"return",c),T4r&&e6(t,T4r,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*Xbe(xbe(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return I4r(e)}}R4r.exports=I4r});var F4r=s((Ynt,L4r)=>{"use strict";var Zbe=P4r();L4r.exports=Zbe});var M4r=s(($nt,j4r)=>{"use strict";var Qbe=Qr(),Kbe=F4r();function rwe(r){return Qbe(r,"iterSawtoothWave",Kbe),r}j4r.exports=rwe});var k4r=s((Znt,B4r)=>{"use strict";var ewe=17976931348623157e292;B4r.exports=ewe});var I1=s((Qnt,C4r)=>{"use strict";var twe=709.782712893384;C4r.exports=twe});var G4r=s((Knt,V4r)=>{"use strict";var iwe=Yr();function awe(r,e){var t,i,a,n;if(a=iwe(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}V4r.exports=awe});var z4r=s((r0t,D4r)=>{"use strict";var nwe=hi(),U4r=Rr(),swe=Yr(),uwe=Ee();function owe(r,e){var t,i,a,n,u;if(n=nwe(U4r(e)),n!==0&&r>1){for(i=swe(-e)/U4r(uwe*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}D4r.exports=owe});var t6=s((e0t,H4r)=>{"use strict";var vwe=-708.3964185322641;H4r.exports=vwe});var J4r=s((t0t,X4r)=>{"use strict";var An=Yr(),R1=Gr(),fwe=wr(),W4r=I1(),x4r=t6();function cwe(r,e){var t,i;return i=r*fwe(e),e>=1?i<W4r&&-e>x4r?t=R1(e,r)*An(-e):r>=1?t=R1(e/An(e/r),r):t=An(i-e):i>x4r?t=R1(e,r)*An(-e):e/r<W4r?t=R1(e/An(e/r),r):t=An(i-e),t}X4r.exports=cwe});var i6=s((i0t,Y4r)=>{"use strict";function lwe(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Y4r.exports=lwe});var Z4r=s((a0t,$4r)=>{"use strict";var pwe=Function;$4r.exports=pwe});var K4r=s((n0t,Q4r)=>{"use strict";var dwe=Z4r();Q4r.exports=dwe});var ecr=s((s0t,rcr)=>{"use strict";var gwe=K4r(),mwe=i6();function ywe(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new gwe(e)();function n(u){return mwe(r,u)}}rcr.exports=ywe});var acr=s((u0t,icr)=>{"use strict";var hwe=D(),tcr=i6(),qwe=ecr();hwe(tcr,"factory",qwe);icr.exports=tcr});var scr=s((o0t,ncr)=>{"use strict";var bwe=eval;ncr.exports=bwe});var ocr=s((v0t,ucr)=>{"use strict";var wwe=scr();function Ewe(){var r;try{wwe('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}ucr.exports=Ewe});var a6=s((f0t,vcr)=>{"use strict";var Nwe=ocr();vcr.exports=Nwe});var ccr=s((c0t,fcr)=>{"use strict";var P1=Dr(),Swe=qi(),Owe=1e6;function _we(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Swe,n=o.maxTerms||Owe,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,P1(i*u)>=P1(a)||--n===0)break}else do a=r(),u+=a;while(P1(i*u)<P1(a)&&--n);return u}fcr.exports=_we});var dcr=s((l0t,pcr)=>{"use strict";var lcr=Dr(),Awe=qi(),Twe=1e6;function Iwe(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||Awe,a=u.maxTerms||Twe,n=u.initialValue||0;do i=r(),n+=i;while(lcr(t*n)<lcr(i)&&--a);return n}pcr.exports=Iwe});var L1=s((p0t,gcr)=>{"use strict";var Rwe=a6(),Pwe=ccr(),Lwe=dcr(),n6;Rwe()?n6=Pwe:n6=Lwe;gcr.exports=n6});var ycr=s((d0t,mcr)=>{"use strict";function Fwe(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}mcr.exports=Fwe});var qcr=s((g0t,hcr)=>{"use strict";var jwe=Dr(),Mwe=wr(),Bwe=qi(),kwe=L1(),Cwe=ycr();function Vwe(r){var e,t;return r<=-1?NaN:(t=jwe(r),t>.95?Mwe(1+r)-r:t<Bwe?-r*r/2:(e={initialValue:-r},kwe(Cwe(r),e)))}hcr.exports=Vwe});var wcr=s((m0t,bcr)=>{"use strict";var Gwe=qcr();bcr.exports=Gwe});var Ncr=s((y0t,Ecr)=>{"use strict";function Uwe(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Ecr.exports=Uwe});var Ocr=s((h0t,Scr)=>{"use strict";function Dwe(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Scr.exports=Dwe});var Acr=s((q0t,_cr)=>{"use strict";function zwe(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}_cr.exports=zwe});var Icr=s((b0t,Tcr)=>{"use strict";function Hwe(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Tcr.exports=Hwe});var Pcr=s((w0t,Rcr)=>{"use strict";function Wwe(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Rcr.exports=Wwe});var Fcr=s((E0t,Lcr)=>{"use strict";function xwe(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Lcr.exports=xwe});var Mcr=s((N0t,jcr)=>{"use strict";function Xwe(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}jcr.exports=Xwe});var kcr=s((S0t,Bcr)=>{"use strict";function Jwe(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Bcr.exports=Jwe});var Vcr=s((O0t,Ccr)=>{"use strict";function Ywe(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Ccr.exports=Ywe});var Ucr=s((_0t,Gcr)=>{"use strict";var $we=acr(),Zwe=wcr(),Qwe=hi(),s6=Rr(),Kwe=Yr(),rEe=yi(),eEe=Ncr(),tEe=Ocr(),iEe=Acr(),aEe=Icr(),nEe=Pcr(),sEe=Fcr(),uEe=Mcr(),oEe=kcr(),vEe=Vcr(),Ke=[0,0,0,0,0,0,0,0,0,0];function fEe(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-Zwe(i),n=r*a,u=s6(2*a),e<r&&(u=-u),Ke[0]=eEe(u),Ke[1]=tEe(u),Ke[2]=iEe(u),Ke[3]=aEe(u),Ke[4]=nEe(u),Ke[5]=sEe(u),Ke[6]=uEe(u),Ke[7]=oEe(u),Ke[8]=vEe(u),Ke[9]=-.0005967612901927463,t=$we(Ke,1/r),t*=Kwe(-n)/s6(rEe*r),e<r&&(t=-t),t+=Qwe(s6(n))/2,t}Gcr.exports=fEe});var zcr=s((A0t,Dcr)=>{"use strict";function cEe(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}Dcr.exports=cEe});var Wcr=s((T0t,Hcr)=>{"use strict";var lEe=L1(),pEe=zcr();function dEe(r,e,t){var i,a;return t=t||0,a=pEe(r,e),i=lEe(a,{initialValue:t}),i}Hcr.exports=dEe});var Xcr=s((I0t,xcr)=>{"use strict";function gEe(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}xcr.exports=gEe});var Ycr=s((R0t,Jcr)=>{"use strict";var mEe=Xcr();Jcr.exports=mEe});var Zcr=s((P0t,$cr)=>{"use strict";var yEe=Ycr();$cr.exports=yEe});var r6r=s((L0t,Kcr)=>{"use strict";var hEe=K3(),Qcr=H(),u6=Ir();function qEe(r,e){return Qcr(r)||Qcr(e)?NaN:r===u6||e===u6?u6:r===e&&r===0?hEe(r)?r:e:r<e?r:e}Kcr.exports=qEe});var t6r=s((F0t,e6r)=>{"use strict";var bEe=r6r();e6r.exports=bEe});var a6r=s((j0t,i6r)=>{"use strict";var wEe=10.900511;i6r.exports=wEe});var o6=s((M0t,n6r)=>{"use strict";var EEe=2.718281828459045;n6r.exports=EEe});var o6r=s((B0t,u6r)=>{"use strict";var NEe=Zcr(),SEe=m0(),OEe=rn(),_Ee=gi(),AEe=Rr(),TEe=Dr(),Xi=Yr(),U0=Gr(),v6=v4(),f6=t6r(),s6r=wr(),F1=I1(),D0=t6(),c6=a6r(),IEe=o6();function REe(r,e){var t,i,a,n,u,o,v;return a=r+c6-.5,v=(e-r-c6+.5)/a,r<1?e<=D0?Xi(r*s6r(e)-e-SEe(r)):U0(e,r)*Xi(-e)/OEe(r):(TEe(v*v*r)<=100&&r>150?(t=r*(_Ee(v)-v)+e*(.5-c6)/a,t=Xi(t)):(n=r*s6r(e/a),u=r-e,f6(n,u)<=D0||v6(n,u)>=F1?(i=u/r,f6(n,u)/2>D0&&v6(n,u)/2<F1?(o=U0(e/a,r/2)*Xi(u/2),t=o*o):f6(n,u)/4>D0&&v6(n,u)/4<F1&&e>r?(o=U0(e/a,r/4)*Xi(u/4),t=o*o,t*=t):i>D0&&i<F1?t=U0(e*Xi(i)/a,r):t=Xi(n+u)):t=U0(e/a,r)*Xi(u)),t*=AEe(a/IEe)/NEe(r),t)}u6r.exports=REe});var f6r=s((k0t,v6r)=>{"use strict";function PEe(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}v6r.exports=PEe});var l6r=s((C0t,c6r)=>{"use strict";function LEe(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}c6r.exports=LEe});var d6r=s((V0t,p6r)=>{"use strict";function FEe(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}p6r.exports=FEe});var m6r=s((G0t,g6r)=>{"use strict";var l6=wr(),jEe=qi(),MEe=f6r(),BEe=l6r(),kEe=d6r(),CEe=.15896368026733398,VEe=.5281534194946289,GEe=.45201730728149414;function UEe(r,e,t){var i,a,n,u;if(r<jEe)return-l6(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=l6(r);while(r>=3);t=r-2}return n=t*(r+1),u=MEe(t),a+=n*CEe+n*u,a}return r<1&&(a+=-l6(r),t=e,e=r,r+=1),r<=1.5?(n=BEe(e),i=e*t,a+=i*VEe+i*n,a):(n=t*e,u=kEe(-t),a+=n*GEe+n*u,a)}g6r.exports=UEe});var w6r=s((U0t,b6r)=>{"use strict";var y6r=rn(),h6r=l0(),DEe=gi(),zEe=H(),q6r=m6r();function HEe(r){return zEe(r)?NaN:r<0?r<-.5?y6r(1+r)-1:h6r(-DEe(r)+q6r(r+2,r+1,r)):r<2?h6r(q6r(r+1,r,r-1)):y6r(1+r)-1}b6r.exports=HEe});var N6r=s((D0t,E6r)=>{"use strict";var WEe=w6r();E6r.exports=WEe});var O6r=s((z0t,S6r)=>{"use strict";function xEe(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}S6r.exports=xEe});var A6r=s((H0t,_6r)=>{"use strict";var XEe=Q3(),JEe=L1(),YEe=N6r(),$Ee=O6r();function ZEe(r,e,t){var i,a,n,u,o;return a=YEe(r),n=(a+1)/r,u=XEe(e,r),a-=u,a/=r,o=$Ee(r,e),u+=1,i=t?n:0,a=-u*JEe(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}_6r.exports=ZEe});var p6=s((W0t,T6r)=>{"use strict";var QEe=11754943508222875e-54;T6r.exports=QEe});var R6r=s((x0t,I6r)=>{"use strict";var j1=Dr(),mt=p6(),KEe=qi(),rNe=1e6;function eNe(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=mt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(j1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(f&&j1(a-1)>e&&--t);return n/u}function tNe(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=mt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&j1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&j1(a-1)>e&&--t);return n}function iNe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||rNe,a=i.tolerance||KEe,i.keep?tNe(r,a,t):eNe(r,a,t)}I6r.exports=iNe});var F6r=s((X0t,L6r)=>{"use strict";var P6r=Dr(),aNe=qi(),Tn=p6(),nNe=1e6;function sNe(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=Tn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=Tn),n=v[1]+v[0]/n,n===0&&(n=Tn),u=1/u,i=n*u,o*=i);while(v&&P6r(i-1)>e&&--t);return a/o}function uNe(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=Tn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=Tn),a=o[1]+o[0]/a,a===0&&(a=Tn),n=1/n,i=a*n,u*=i);while(o&&P6r(i-1)>e&&--t);return u}function oNe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||aNe,t=i.maxIter||nNe,i.keep?uNe(r,a,t):sNe(r,a,t)}L6r.exports=oNe});var M6r=s((J0t,j6r)=>{"use strict";var vNe=a6(),fNe=R6r(),cNe=F6r(),d6;vNe()?d6=fNe:d6=cNe;j6r.exports=d6});var k6r=s((Y0t,B6r)=>{"use strict";function lNe(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}B6r.exports=lNe});var V6r=s(($0t,C6r)=>{"use strict";var pNe=M6r(),dNe=k6r();function gNe(r,e){var t=dNe(r,e);return 1/(e-r+1+pNe(t))}C6r.exports=gNe});var Y6r=s((Z0t,J6r)=>{"use strict";var mNe=m0(),yNe=Ur(),z0=rn(),G6r=Dr(),hNe=Yr(),U6r=Gr(),rt=wr(),qNe=af(),D6r=k4r(),bNe=rf(),z6r=I1(),wNe=pr(),ENe=G4r(),NNe=z4r(),H6r=J4r(),SNe=Ucr(),g6=Wcr(),W6r=o6r(),ONe=A6r(),x6r=V6r(),_Ne=170;function X6r(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=_Ne&&!n)return l&&e*4<r?(p=e*rt(r)-r,p+=rt(x6r(e,r))):!l&&e>4*r?(p=e*rt(r)-r,o=0,p+=rt(g6(e,r,o)/e)):(p=X6r(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=rt(p)-e+(e-.5)*rt(e),p+=rt(bNe)):(p=e*rt(r)-r,o=0,p+=rt(g6(e,r,o)/e)):p=rt(p)+mNe(e)),p>z6r?wNe:hNe(p);switch(c=e<30&&e<=r+1&&r<z6r,c?(h=yNe(e),m=h===e,v=m?!1:G6r(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<qNe&&e>1?u=6:r<.5?-.4/rt(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=G6r((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=ENe(e,r),n===!1&&(p*=z0(e));break;case 1:p=NNe(e,r),n===!1&&(p*=z0(e));break;case 2:p=n?W6r(e,r):H6r(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:z0(e),n||p>=1||D6r*p>o?(o/=p,n||e<1||D6r/e>o?(o*=-e,a=!0):o=0):o=0)),p*=g6(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=ONe(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?W6r(e,r):H6r(e,r),p!==0&&(p*=x6r(e,r));break;case 5:p=SNe(e,r),r>=e&&(l=!l);break;case 6:p=n?U6r(r,e)/z0(e+1):U6r(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:z0(e),p=g-p),p}J6r.exports=X6r});var m6=s((Q0t,$6r)=>{"use strict";var ANe=Y6r();$6r.exports=ANe});var Q6r=s((K0t,Z6r)=>{"use strict";var TNe=m6(),y6=H(),INe=pr();function RNe(r,e,t){return y6(r)||y6(e)||y6(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===INe?1:TNe(r*t,e)}Z6r.exports=RNe});var elr=s((rst,rlr)=>{"use strict";var PNe=mr(),LNe=no().factory,FNe=m6(),K6r=H(),jNe=pr();function MNe(r,e){if(K6r(r)||K6r(e)||r<0||e<=0)return PNe(NaN);if(r===0)return LNe(0);return t;function t(i){return i<=0?0:i===jNe?1:FNe(i*e,r)}}rlr.exports=MNe});var h6=s((est,ilr)=>{"use strict";var BNe=D(),tlr=Q6r(),kNe=elr();BNe(tlr,"factory",kNe);ilr.exports=tlr});var nlr=s((tst,alr)=>{"use strict";var CNe=h6();function VNe(r,e){return CNe(r,e/2,.5)}alr.exports=VNe});var ulr=s((ist,slr)=>{"use strict";var GNe=h6().factory;function UNe(r){return GNe(r/2,.5)}slr.exports=UNe});var flr=s((ast,vlr)=>{"use strict";var DNe=D(),olr=nlr(),zNe=ulr();DNe(olr,"factory",zNe);vlr.exports=olr});var dlr=s((nst,plr)=>{"use strict";var HNe=hr(),WNe=vr(),xNe=Es(),clr=V(),llr=["values","indices","*"];function XNe(r,e){return HNe(e)?WNe(e,"returns")&&(r.returns=e.returns,xNe(llr,r.returns)===-1)?new TypeError(clr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",llr.join('", "'),r.returns)):null:new TypeError(clr("invalid argument. Options argument must be an object. Value: `%s`.",e))}plr.exports=XNe});var mlr=s((sst,glr)=>{"use strict";var JNe=vr();function YNe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),JNe(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}glr.exports=YNe});var hlr=s((ust,ylr)=>{"use strict";var $Ne=vr();function ZNe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),$Ne(t,a)?t[a].push(n):t[a]=[n];return t}ylr.exports=ZNe});var blr=s((ost,qlr)=>{"use strict";var QNe=vr();function KNe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),QNe(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}qlr.exports=KNe});var Slr=s((vst,Nlr)=>{"use strict";var wlr=Ve(),Elr=V(),rSe=dlr(),eSe=mlr(),tSe=hlr(),iSe=blr();function aSe(r,e,t){var i,a,n;if(!wlr(r))throw new TypeError(Elr("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=rSe(i,e),a)throw a;n=t}if(!wlr(n))throw new TypeError(Elr("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?eSe(r,n):i.returns==="indices"?tSe(r,n):iSe(r,n)}Nlr.exports=aSe});var _lr=s((fst,Olr)=>{"use strict";var nSe=Slr();Olr.exports=nSe});var Tlr=s((cst,Alr)=>{"use strict";function sSe(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}Alr.exports=sSe});var Plr=s((lst,Rlr)=>{"use strict";var uSe=qe(),oSe=Nr().isPrimitive,vSe=hr(),fSe=oe(),Ilr=vr(),q6=V();function cSe(r,e){return vSe(e)?Ilr(e,"alpha")&&(r.alpha=e.alpha,!oSe(r.alpha)||fSe(r.alpha))?new TypeError(q6("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Ilr(e,"groups")&&(r.groups=e.groups,!uSe(r.groups))?new TypeError(q6("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(q6("invalid argument. Options argument must be an object. Value: `%s`.",e))}Rlr.exports=cSe});var Clr=s((pst,klr)=>{"use strict";var Llr=H(),M1=Ae(),Flr=Gr(),lSe=Dr(),jlr=Ks(),pSe=oa(),Mlr=Zn(),dSe=Cs(),gSe=Vs(),mSe=pSe+1,Blr=1e308;function ySe(r,e){var t,i;return Llr(r)||Llr(e)||M1(e)?NaN:M1(r)||r===0||e<gSe||lSe(r)>mSe&&e<=0?r:e>Mlr?0*r:e<dSe?(t=Flr(10,-(e+Mlr)),i=r*Blr*t,M1(i)?r:jlr(i)/Blr/t):(t=Flr(10,-e),i=r*t,M1(i)?r:jlr(i)/t)}klr.exports=ySe});var Glr=s((dst,Vlr)=>{"use strict";var hSe=Clr();Vlr.exports=hSe});var zlr=s((gst,Dlr)=>{"use strict";var qSe=nt(),bSe=hr(),wSe=de().isPrimitive,Ulr=vr(),b6=V(),w6=Glr();function ESe(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!bSe(r))throw new TypeError(b6("invalid argument. First argument must be an object. Value: `%s`.",r));if(Ulr(r,"digits")){if(!qSe(r.digits))throw new TypeError(b6("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Ulr(r,"decision")){if(!wSe(r.decision))throw new TypeError(b6("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+w6(this.pValue,-t)+`
`,i+="    statistic: "+w6(this.statistic,-t)+`
`,i+="    df: "+w6(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Dlr.exports=ESe});var xlr=s((mst,Wlr)=>{"use strict";var NSe=Ve(),SSe=hr(),ma=Qr(),OSe=za(),B1=V(),_Se=flr(),ASe=_lr(),Hlr=wr(),TSe=Tlr(),ISe=Plr(),RSe=zlr();function PSe(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},SSe(arguments[e-1])&&(r=arguments[e-1],e-=1,m=ISe(f,r),m))throw m;if(f.groups){if(a=ASe(arguments[0],f.groups),i=OSe(a),e=i.length,e<2)throw new Error(B1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!NSe(p))throw new TypeError(B1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(B1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=TSe(p),o+=h[w]*q[w],y+=h[w]*Hlr(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(B1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*Hlr(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-_Se(l,d),g={},ma(g,"rejected",c<=n),ma(g,"alpha",n),ma(g,"pValue",c),ma(g,"statistic",l),ma(g,"df",d),ma(g,"method","Bartlett's test of equal variances"),ma(g,"print",RSe),g}Wlr.exports=PSe});var Jlr=s((yst,Xlr)=>{"use strict";var LSe=xlr();Xlr.exports=LSe});var $lr=s((hst,Ylr)=>{"use strict";var E6=H(),FSe=Si();function jSe(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,E6(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],E6(v)){n=v;break}(v>n||v===n&&FSe(v))&&(n=v),i[o]=n,o+=a}if(E6(n))for(f;f<r;f++)i[o]=n,o+=a;return i}Ylr.exports=jSe});var Qlr=s((qst,Zlr)=>{"use strict";var N6=H(),MSe=Si();function BSe(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,N6(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],N6(c)){o=c;break}(c>o||c===o&&MSe(c))&&(o=c),a[f]=o,f+=n}if(N6(o))for(l;l<r;l++)a[f]=o,f+=n;return a}Zlr.exports=BSe});var e5r=s((bst,r5r)=>{"use strict";var kSe=D(),Klr=$lr(),CSe=Qlr();kSe(Klr,"ndarray",CSe);r5r.exports=Klr});var i5r=s((wst,t5r)=>{"use strict";var VSe=e5r();t5r.exports=VSe});var n5r=s((Est,a5r)=>{"use strict";var GSe=H(),USe=Si();function DSe(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],GSe(n))return n;(n>i||n===i&&USe(n))&&(i=n)}return i}a5r.exports=DSe});var u5r=s((Nst,s5r)=>{"use strict";var zSe=H(),HSe=Si();function WSe(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],zSe(u))return u;(u>a||u===a&&HSe(u))&&(a=u)}return a}s5r.exports=WSe});var f5r=s((Sst,v5r)=>{"use strict";var xSe=D(),o5r=n5r(),XSe=u5r();xSe(o5r,"ndarray",XSe);v5r.exports=o5r});var l5r=s((Ost,c5r)=>{"use strict";var JSe=f5r();c5r.exports=JSe});var g5r=s((_st,d5r)=>{"use strict";var p5r=H(),YSe=Si();function $Se(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],p5r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],p5r(v))return v;(v>n||v===n&&YSe(v))&&(n=v)}return n}d5r.exports=$Se});var h5r=s((Ast,y5r)=>{"use strict";var m5r=H(),ZSe=Si();function QSe(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],m5r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],m5r(c))return c;(c>o||c===o&&ZSe(c))&&(o=c)}return o}y5r.exports=QSe});var w5r=s((Tst,b5r)=>{"use strict";var KSe=D(),q5r=g5r(),rOe=h5r();KSe(q5r,"ndarray",rOe);b5r.exports=q5r});var N5r=s((Ist,E5r)=>{"use strict";var eOe=hi(),tOe=Rr(),S6=H();function iOe(r,e,t){var i,a;return S6(r)||S6(e)||S6(t)||t<0?NaN:t===0?r<e?0:1:(i=t*tOe(2),a=r-e,.5*eOe(-a/i))}E5r.exports=iOe});var O5r=s((Rst,S5r)=>{"use strict";var aOe=mr(),nOe=no().factory,O6=H(),sOe=Rr(),uOe=hi();function oOe(r,e){var t;if(O6(r)||O6(e)||e<0)return aOe(NaN);if(e===0)return nOe(r);return t=e*sOe(2),i;function i(a){var n;return O6(a)?NaN:(n=a-r,.5*uOe(-n/t))}}S5r.exports=oOe});var T5r=s((Pst,A5r)=>{"use strict";var vOe=D(),_5r=N5r(),fOe=O5r();vOe(_5r,"factory",fOe);A5r.exports=_5r});var P5r=s((Lst,R5r)=>{"use strict";var I5r=H(),cOe=wr(),lOe=yi(),pOe=o6();function dOe(r,e){return I5r(r)||I5r(e)||e<=0?NaN:.5*cOe(lOe*pOe*e*e)}R5r.exports=dOe});var F5r=s((Fst,L5r)=>{"use strict";var gOe=P5r();L5r.exports=gOe});var B5r=s((jst,M5r)=>{"use strict";var j5r=H();function mOe(r,e){return j5r(r)||j5r(e)||e<=0?NaN:0}M5r.exports=mOe});var C5r=s((Mst,k5r)=>{"use strict";var yOe=B5r();k5r.exports=yOe});var G5r=s((Bst,V5r)=>{"use strict";var hOe=Ur(),qOe=[bOe,wOe,EOe,NOe,SOe,OOe,_Oe,AOe,TOe,IOe,ROe,POe,LOe,FOe,jOe,MOe,BOe,kOe,COe,VOe,GOe,UOe,DOe,zOe,HOe,WOe,xOe,XOe,JOe,YOe,$Oe,ZOe,QOe,KOe,r_e,e_e,t_e,i_e,a_e,n_e,s_e,u_e,o_e,v_e,f_e,c_e,l_e,p_e,d_e,g_e,m_e,y_e,h_e,q_e,b_e,w_e,E_e,N_e,S_e,O_e,__e,A_e,T_e,I_e,R_e,P_e,L_e,F_e,j_e,M_e,B_e,k_e,C_e,V_e,G_e,U_e,D_e,z_e,H_e,W_e,x_e,X_e,J_e,Y_e,$_e,Z_e,Q_e,K_e,rAe,eAe,tAe,iAe,aAe,nAe,sAe,uAe,oAe,vAe,fAe,cAe,lAe];function bOe(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function wOe(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function EOe(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function NOe(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function SOe(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function OOe(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function _Oe(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function AOe(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function TOe(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function IOe(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function ROe(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function POe(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function LOe(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function FOe(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function jOe(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function MOe(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function BOe(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function kOe(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function COe(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function VOe(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function GOe(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function UOe(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function DOe(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function zOe(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function HOe(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function WOe(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function xOe(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function XOe(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function JOe(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function YOe(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function $Oe(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function ZOe(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function QOe(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function KOe(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function r_e(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function e_e(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function t_e(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function i_e(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function a_e(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function n_e(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function s_e(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function u_e(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function o_e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function v_e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function f_e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function c_e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function l_e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function p_e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function d_e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function g_e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function m_e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function y_e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function h_e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function q_e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function b_e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function w_e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function E_e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function N_e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function S_e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function O_e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function __e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function A_e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function T_e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function I_e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function R_e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function P_e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function L_e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function F_e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function j_e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function M_e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function B_e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function k_e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function C_e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function V_e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function G_e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function U_e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function D_e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function z_e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function H_e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function W_e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function x_e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function X_e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function J_e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Y_e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function $_e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function Z_e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Q_e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function K_e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function rAe(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function eAe(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function tAe(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function iAe(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function aAe(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function nAe(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function sAe(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function uAe(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function oAe(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function vAe(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function fAe(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function cAe(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function lAe(){return 1}function pAe(r){var e=hOe(r),t=qOe[e];return t(2*r-(2*e+1))}V5r.exports=pAe});var W5r=s((kst,H5r)=>{"use strict";var U5r=Yr(),dAe=pr(),D5r=G5r(),z5r=.5641895835477563;function gAe(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?z5r/r:(e=r*r,z5r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):D5r(400/(4+r)):r<-26.7?dAe:(e=r*r,r<-6.1?2*U5r(e):2*U5r(e)-D5r(400/(4-r)))}H5r.exports=gAe});var _6=s((Cst,x5r)=>{"use strict";var mAe=W5r();x5r.exports=mAe});var Y5r=s((Vst,J5r)=>{"use strict";var yAe=wr(),hAe=gi(),qAe=Hs(),bAe=hi(),wAe=_6(),EAe=Ir(),A6=H(),X5r=.7071067811865475;function NAe(r,e,t){var i;return A6(r)||A6(e)||A6(t)||t<0?NaN:t===0?r<e?EAe:0:(i=(r-e)/t,i<-1?yAe(wAe(-i*X5r)/2)-qAe(i)/2:hAe(-bAe(i*X5r)/2))}J5r.exports=NAe});var Q5r=s((Gst,Z5r)=>{"use strict";var $5r=H(),SAe=Ir();function OAe(r,e){return $5r(r)||$5r(e)?NaN:r<e?SAe:0}Z5r.exports=OAe});var e8r=s((Ust,r8r)=>{"use strict";var _Ae=mr(),K5r=H(),AAe=Ir();function TAe(r){if(K5r(r))return _Ae(NaN);return e;function e(t){return K5r(t)?NaN:t<r?AAe:0}}r8r.exports=TAe});var a8r=s((Dst,i8r)=>{"use strict";var IAe=D(),t8r=Q5r(),RAe=e8r();IAe(t8r,"factory",RAe);i8r.exports=t8r});var o8r=s((zst,u8r)=>{"use strict";var PAe=mr(),LAe=a8r().factory,n8r=H(),FAe=gi(),jAe=Hs(),MAe=hi(),BAe=_6(),kAe=wr(),s8r=.7071067811865475;function CAe(r,e){if(n8r(r)||n8r(e)||e<0)return PAe(NaN);if(e===0)return LAe(r);return t;function t(i){var a=(i-r)/e;return a<-1?kAe(BAe(-a*s8r)/2)-jAe(a)/2:FAe(-MAe(a*s8r)/2)}}u8r.exports=CAe});var c8r=s((Hst,f8r)=>{"use strict";var VAe=D(),v8r=Y5r(),GAe=o8r();VAe(v8r,"factory",GAe);f8r.exports=v8r});var T6=s((Wst,l8r)=>{"use strict";var UAe=1.8378770664093456;l8r.exports=UAe});var g8r=s((xst,d8r)=>{"use strict";var DAe=wr(),p8r=Gr(),zAe=T6(),HAe=Ir(),WAe=pr(),I6=H();function xAe(r,e,t){var i,a,n;return I6(r)||I6(e)||I6(t)||t<0?NaN:t===0?r===e?WAe:HAe:(i=p8r(t,2),a=-.5*(2*DAe(t)+zAe),n=-1/(2*i),a+n*p8r(r-e,2))}d8r.exports=xAe});var h8r=s((Xst,y8r)=>{"use strict";var XAe=pr(),JAe=Ir(),m8r=H();function YAe(r,e){return m8r(r)||m8r(e)?NaN:r===e?XAe:JAe}y8r.exports=YAe});var w8r=s((Jst,b8r)=>{"use strict";var $Ae=mr(),ZAe=pr(),QAe=Ir(),q8r=H();function KAe(r){if(q8r(r))return $Ae(NaN);return e;function e(t){return q8r(t)?NaN:t===r?ZAe:QAe}}b8r.exports=KAe});var S8r=s((Yst,N8r)=>{"use strict";var rTe=D(),E8r=h8r(),eTe=w8r();rTe(E8r,"factory",eTe);N8r.exports=E8r});var T8r=s(($st,A8r)=>{"use strict";var tTe=mr(),iTe=S8r().factory,aTe=T6(),O8r=H(),_8r=Gr(),nTe=wr();function sTe(r,e){var t,i,a;if(O8r(r)||O8r(e)||e<0)return tTe(NaN);if(e===0)return iTe(r);return t=_8r(e,2),i=-.5*(2*nTe(e)+aTe),a=-1/(2*t),n;function n(u){return i+a*_8r(u-r,2)}}A8r.exports=sTe});var P8r=s((Zst,R8r)=>{"use strict";var uTe=D(),I8r=g8r(),oTe=T8r();uTe(I8r,"factory",oTe);R8r.exports=I8r});var j8r=s((Qst,F8r)=>{"use strict";var L8r=H();function vTe(r,e){return L8r(r)||L8r(e)||e<=0?NaN:r}F8r.exports=vTe});var B8r=s((Kst,M8r)=>{"use strict";var fTe=j8r();M8r.exports=fTe});var V8r=s((rut,C8r)=>{"use strict";var k8r=H();function cTe(r,e){return k8r(r)||k8r(e)||e<=0?NaN:r}C8r.exports=cTe});var U8r=s((eut,G8r)=>{"use strict";var lTe=V8r();G8r.exports=lTe});var z8r=s((tut,D8r)=>{"use strict";var R6=H(),pTe=Yr(),dTe=Gr();function gTe(r,e,t){return R6(r)||R6(e)||R6(t)||t<=0?NaN:pTe(e*r+.5*dTe(t*r,2))}D8r.exports=gTe});var W8r=s((iut,H8r)=>{"use strict";var mTe=mr(),P6=H(),yTe=Yr(),hTe=Gr();function qTe(r,e){if(P6(r)||P6(e)||e<=0)return mTe(NaN);return t;function t(i){return P6(i)?NaN:yTe(r*i+.5*hTe(e*i,2))}}H8r.exports=qTe});var J8r=s((aut,X8r)=>{"use strict";var bTe=D(),x8r=z8r(),wTe=W8r();bTe(x8r,"factory",wTe);X8r.exports=x8r});var Z8r=s((nut,$8r)=>{"use strict";var Y8r=H();function ETe(r,e){return Y8r(r)||Y8r(e)||e<=0?NaN:r}$8r.exports=ETe});var K8r=s((sut,Q8r)=>{"use strict";var NTe=Z8r();Q8r.exports=NTe});var t7r=s((uut,e7r)=>{"use strict";var STe=Yr(),r7r=Gr(),OTe=Rr(),_Te=yi(),ATe=pr(),L6=H();function TTe(r,e,t){var i,a,n;return L6(r)||L6(e)||L6(t)||t<0?NaN:t===0?r===e?ATe:0:(i=r7r(t,2),a=1/OTe(i*_Te),n=-1/(2*i),a*STe(n*r7r(r-e,2)))}e7r.exports=TTe});var n7r=s((out,a7r)=>{"use strict";var ITe=pr(),i7r=H();function RTe(r,e){return i7r(r)||i7r(e)?NaN:r===e?ITe:0}a7r.exports=RTe});var o7r=s((vut,u7r)=>{"use strict";var PTe=mr(),LTe=pr(),s7r=H();function FTe(r){if(s7r(r))return PTe(NaN);return e;function e(t){return s7r(t)?NaN:t===r?LTe:0}}u7r.exports=FTe});var c7r=s((fut,f7r)=>{"use strict";var jTe=D(),v7r=n7r(),MTe=o7r();jTe(v7r,"factory",MTe);f7r.exports=v7r});var d7r=s((cut,p7r)=>{"use strict";var BTe=mr(),kTe=c7r().factory,F6=H(),CTe=Rr(),VTe=Yr(),l7r=Gr(),GTe=yi();function UTe(r,e){var t,i,a;if(F6(r)||F6(e)||e<0)return BTe(NaN);if(e===0)return kTe(r);return t=l7r(e,2),i=1/CTe(t*GTe),a=-1/(2*t),n;function n(u){return F6(u)?NaN:i*VTe(a*l7r(u-r,2))}}p7r.exports=UTe});var y7r=s((lut,m7r)=>{"use strict";var DTe=D(),g7r=t7r(),zTe=d7r();DTe(g7r,"factory",zTe);m7r.exports=g7r});var b7r=s((put,q7r)=>{"use strict";var h7r=H();function HTe(r,e){return h7r(r)||h7r(e)||e<=0?NaN:0}q7r.exports=HTe});var E7r=s((dut,w7r)=>{"use strict";var WTe=b7r();w7r.exports=WTe});var O7r=s((gut,S7r)=>{"use strict";var N7r=H();function xTe(r,e){return N7r(r)||N7r(e)||e<=0?NaN:e}S7r.exports=xTe});var A7r=s((mut,_7r)=>{"use strict";var XTe=O7r();_7r.exports=XTe});var R7r=s((yut,I7r)=>{"use strict";var T7r=H();function JTe(r,e){return T7r(r)||T7r(e)||e<=0?NaN:e*e}I7r.exports=JTe});var L7r=s((hut,P7r)=>{"use strict";var YTe=R7r();P7r.exports=YTe});var j7r=s((qut,F7r)=>{"use strict";var ke=Qr(),$Te=T5r(),ZTe=F5r(),QTe=C5r(),KTe=c8r(),rIe=P8r(),eIe=B8r(),tIe=U8r(),iIe=J8r(),aIe=K8r(),nIe=y7r(),sIe=Ec(),uIe=E7r(),oIe=A7r(),vIe=L7r();function fIe(r){return ke(r,"cdf",$Te),ke(r,"entropy",ZTe),ke(r,"kurtosis",QTe),ke(r,"logcdf",KTe),ke(r,"logpdf",rIe),ke(r,"mean",eIe),ke(r,"median",tIe),ke(r,"mgf",iIe),ke(r,"mode",aIe),ke(r,"pdf",nIe),ke(r,"quantile",sIe),ke(r,"skewness",uIe),ke(r,"stdev",oIe),ke(r,"variance",vIe),r}F7r.exports=fIe});var B7r=s((but,M7r)=>{"use strict";var cIe=Qr(),lIe=j7r();function pIe(r){return cIe(r,"normal",lIe({})),r}M7r.exports=pIe});var C7r=s((wut,k7r)=>{"use strict";var H0=Qr(),dIe=Jlr(),gIe=i5r().ndarray,mIe=l5r().ndarray,yIe=w5r().ndarray,hIe=B7r();function qIe(r){return H0(r,"bartlettTest",dIe),H0(r,"cumax",gIe),H0(r,"max",mIe),H0(r,"mskmax",yIe),H0(r,"dists",hIe({})),r}k7r.exports=qIe});var G7r=s((Eut,V7r)=>{"use strict";var bIe=Jr().isPrimitive,wIe=V();function EIe(r){return e;function e(t){if(!bIe(t))throw new TypeError(wIe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}V7r.exports=EIe});var D7r=s((Nut,U7r)=>{"use strict";var NIe=G7r();U7r.exports=NIe});var x7r=s((Sut,W7r)=>{"use strict";var z7r=Jr().isPrimitive,H7r=V();function SIe(r){return e;function e(t,i){if(!z7r(t))throw new TypeError(H7r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!z7r(i))throw new TypeError(H7r("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}W7r.exports=SIe});var J7r=s((Out,X7r)=>{"use strict";var OIe=x7r();X7r.exports=OIe});var $7r=s((_ut,Y7r)=>{"use strict";var j6=Jr().isPrimitive,M6=V();function _Ie(r){return e;function e(t,i,a){if(!j6(t))throw new TypeError(M6("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!j6(i))throw new TypeError(M6("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!j6(a))throw new TypeError(M6("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}Y7r.exports=_Ie});var Q7r=s((Aut,Z7r)=>{"use strict";var AIe=$7r();Z7r.exports=AIe});var rpr=s((Tut,K7r)=>{"use strict";var B6=Qr(),TIe=D7r(),IIe=J7r(),RIe=Q7r();function PIe(r){return B6(r,"s_o",TIe),B6(r,"ss_o",IIe),B6(r,"sss_o",RIe),r}K7r.exports=PIe});var tpr=s((Iut,epr)=>{"use strict";function LIe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}epr.exports=LIe});var k1=s((Rut,ipr)=>{"use strict";var FIe=tpr();ipr.exports=FIe});var npr=s((Put,apr)=>{"use strict";var jIe=k1(),MIe=la(),C1=bi(),BIe=Ni(),kIe=/\s+/g,CIe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,VIe=/(?:\s|^)([^\s]+)(?=\s|$)/g,GIe=/([a-z0-9])([A-Z])/g;function UIe(r,e,t){return e=MIe(e),t===0?e:jIe(e)}function DIe(r){return r=C1(r,CIe," "),r=C1(r,kIe," "),r=C1(r,GIe,"$1 $2"),r=BIe(r),C1(r,VIe,UIe)}apr.exports=DIe});var upr=s((Lut,spr)=>{"use strict";var zIe=npr();spr.exports=zIe});var vpr=s((Fut,opr)=>{"use strict";var HIe=Jr().isPrimitive,WIe=V(),xIe=upr();function XIe(r){if(!HIe(r))throw new TypeError(WIe("invalid argument. First argument must be a string. Value: `%s`.",r));return xIe(r)}opr.exports=XIe});var cpr=s((jut,fpr)=>{"use strict";var JIe=vpr();fpr.exports=JIe});var ppr=s((Mut,lpr)=>{"use strict";var YIe=Jr().isPrimitive,$Ie=V(),ZIe=k1();function QIe(r){if(!YIe(r))throw new TypeError($Ie("invalid argument. First argument must be a string. Value: `%s`.",r));return ZIe(r)}lpr.exports=QIe});var gpr=s((But,dpr)=>{"use strict";var KIe=ppr();dpr.exports=KIe});var ypr=s((kut,mpr)=>{"use strict";function rRe(r){return r.toUpperCase()}mpr.exports=rRe});var qpr=s((Cut,hpr)=>{"use strict";var eRe=ypr();hpr.exports=eRe});var wpr=s((Vut,bpr)=>{"use strict";var tRe=qpr(),k6=bi(),iRe=Ni(),aRe=/\s+/g,nRe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,sRe=/([a-z0-9])([A-Z])/g;function uRe(r){return r=k6(r,nRe," "),r=k6(r,sRe,"$1 $2"),r=iRe(r),r=k6(r,aRe,"_"),tRe(r)}bpr.exports=uRe});var Npr=s((Gut,Epr)=>{"use strict";var oRe=wpr();Epr.exports=oRe});var Opr=s((Uut,Spr)=>{"use strict";var vRe=Jr().isPrimitive,fRe=V(),cRe=Npr();function lRe(r){if(!vRe(r))throw new TypeError(fRe("invalid argument. Must provide a string. Value: `%s`.",r));return cRe(r)}Spr.exports=lRe});var Apr=s((Dut,_pr)=>{"use strict";var pRe=Opr();_pr.exports=pRe});var Ipr=s((zut,Tpr)=>{"use strict";var dRe=la(),C6=bi(),gRe=Ni(),mRe=/\s+/g,yRe=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,hRe=/([a-z0-9])([A-Z])/g;function qRe(r){return r=C6(r,yRe," "),r=C6(r,hRe,"$1 $2"),r=gRe(r),r=C6(r,mRe,"-"),dRe(r)}Tpr.exports=qRe});var Ppr=s((Hut,Rpr)=>{"use strict";var bRe=Ipr();Rpr.exports=bRe});var Fpr=s((Wut,Lpr)=>{"use strict";var wRe=Jr().isPrimitive,ERe=V(),NRe=Ppr();function SRe(r){if(!wRe(r))throw new TypeError(ERe("invalid argument. Must provide a string. Value: `%s`.",r));return NRe(r)}Lpr.exports=SRe});var Mpr=s((xut,jpr)=>{"use strict";var ORe=Fpr();jpr.exports=ORe});var kpr=s((Xut,Bpr)=>{"use strict";var _Re=Jr().isPrimitive,ARe=V(),TRe=la();function IRe(r){if(!_Re(r))throw new TypeError(ARe("invalid argument. Must provide a string. Value: `%s`.",r));return TRe(r)}Bpr.exports=IRe});var Vpr=s((Jut,Cpr)=>{"use strict";var RRe=kpr();Cpr.exports=RRe});var Upr=s((Yut,Gpr)=>{"use strict";var PRe=k1(),LRe=la(),V1=bi(),FRe=Ni(),jRe=/\s+/g,MRe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,BRe=/(?:\s|^)([^\s]+)(?=\s|$)/g,kRe=/([a-z0-9])([A-Z])/g;function CRe(r,e){return PRe(LRe(e))}function VRe(r){return r=V1(r,MRe," "),r=V1(r,jRe," "),r=V1(r,kRe,"$1 $2"),r=FRe(r),V1(r,BRe,CRe)}Gpr.exports=VRe});var zpr=s(($ut,Dpr)=>{"use strict";var GRe=Upr();Dpr.exports=GRe});var Wpr=s((Zut,Hpr)=>{"use strict";var URe=Jr().isPrimitive,DRe=V(),zRe=zpr();function HRe(r){if(!URe(r))throw new TypeError(DRe("invalid argument. First argument must be a string. Value: `%s`.",r));return zRe(r)}Hpr.exports=HRe});var Xpr=s((Qut,xpr)=>{"use strict";var WRe=Wpr();xpr.exports=WRe});var Ypr=s((Kut,Jpr)=>{"use strict";var xRe=la(),V6=bi(),XRe=Ni(),JRe=/\s+/g,YRe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,$Re=/([a-z0-9])([A-Z])/g;function ZRe(r){return r=V6(r,YRe," "),r=V6(r,$Re,"$1 $2"),r=XRe(r),r=V6(r,JRe,"_"),xRe(r)}Jpr.exports=ZRe});var Zpr=s((rot,$pr)=>{"use strict";var QRe=Ypr();$pr.exports=QRe});var Kpr=s((eot,Qpr)=>{"use strict";var KRe=Jr().isPrimitive,rPe=V(),ePe=Zpr();function tPe(r){if(!KRe(r))throw new TypeError(rPe("invalid argument. Must provide a string. Value: `%s`.",r));return ePe(r)}Qpr.exports=tPe});var e9r=s((tot,r9r)=>{"use strict";var iPe=Kpr();r9r.exports=iPe});var a9r=s((iot,i9r)=>{"use strict";var aPe=hr(),t9r=vr(),nPe=de().isPrimitive,sPe=Jr().isPrimitive,G6=V();function uPe(r,e){return aPe(e)?t9r(e,"flags")&&(r.flags=e.flags,!sPe(r.flags))?new TypeError(G6("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):t9r(e,"capture")&&(r.capture=e.capture,!nPe(r.capture))?new TypeError(G6("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(G6("invalid argument. Options argument must be an object. Value: `%s`.",e))}i9r.exports=uPe});var G1=s((aot,s9r)=>{"use strict";var oPe=a9r(),n9r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function vPe(r){var e,t;if(arguments.length>0){if(e={},t=oPe(e,r),t)throw t;return e.capture?new RegExp("("+n9r+")",e.flags):new RegExp(n9r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}s9r.exports=vPe});var o9r=s((not,u9r)=>{"use strict";var fPe=G1(),cPe=fPe({capture:!0});u9r.exports=cPe});var f9r=s((sot,v9r)=>{"use strict";var lPe=G1(),pPe=lPe();v9r.exports=pPe});var p9r=s((uot,l9r)=>{"use strict";var c9r=D(),U6=G1(),dPe=o9r(),gPe=f9r();c9r(U6,"REGEXP",gPe);c9r(U6,"REGEXP_CAPTURE",dPe);l9r.exports=U6});var g9r=s((oot,d9r)=>{"use strict";var mPe=p9r().REGEXP;function yPe(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),mPe.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}d9r.exports=yPe});var y9r=s((vot,m9r)=>{"use strict";var hPe=g9r();m9r.exports=hPe});var q9r=s((fot,h9r)=>{"use strict";var qPe=Jr().isPrimitive,bPe=V(),wPe=y9r();function EPe(r){if(!qPe(r))throw new TypeError(bPe("invalid argument. Must provide a string. Value: `%s`.",r));return wPe(r)}h9r.exports=EPe});var w9r=s((cot,b9r)=>{"use strict";var NPe=q9r();b9r.exports=NPe});var N9r=s((lot,E9r)=>{"use strict";function SPe(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}E9r.exports=SPe});var O9r=s((pot,S9r)=>{"use strict";var OPe=N9r();S9r.exports=OPe});var A9r=s((dot,_9r)=>{"use strict";var _Pe=Jr().isPrimitive,APe=V(),TPe=O9r();function IPe(r){if(!_Pe(r))throw new TypeError(APe("invalid argument. First argument must be a string. Value: `%s`.",r));return TPe(r)}_9r.exports=IPe});var I9r=s((got,T9r)=>{"use strict";var RPe=A9r();T9r.exports=RPe});var P9r=s((mot,R9r)=>{"use strict";var PPe=Jr().isPrimitive,LPe=V();function FPe(r){if(!PPe(r))throw new TypeError(LPe("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}R9r.exports=FPe});var F9r=s((yot,L9r)=>{"use strict";var jPe=P9r();L9r.exports=jPe});var M9r=s((hot,j9r)=>{"use strict";var yt=Qr(),MPe=cpr(),BPe=gpr(),kPe=Apr(),CPe=Mpr(),VPe=Vpr(),GPe=Xpr(),UPe=e9r(),DPe=w9r(),zPe=I9r(),HPe=F9r();function WPe(r){return yt(r,"camelcase",MPe),yt(r,"capitalize",BPe),yt(r,"constantcase",kPe),yt(r,"kebabcase",CPe),yt(r,"lowercase",VPe),yt(r,"pascalcase",GPe),yt(r,"snakecase",UPe),yt(r,"startcase",DPe),yt(r,"uncapitalize",zPe),yt(r,"uppercase",HPe),r}j9r.exports=WPe});var k9r=s((qot,B9r)=>{"use strict";var xPe=Qr(),XPe=rpr(),JPe=M9r();function YPe(r){return xPe(r,"tools",XPe({})),r=JPe(r),r}B9r.exports=YPe});var V9r=s((bot,C9r)=>{"use strict";var ht=Qr(),$Pe=mq(),ZPe=_N(),QPe=MN(),KPe=L_(),rLe=GH(),eLe=prr(),tLe=O4r(),iLe=M4r(),aLe=C7r(),nLe=k9r();function sLe(){var r={};return ht(r,"array",$Pe({})),ht(r,"assert",ZPe({})),ht(r,"blas",QPe({})),ht(r,"datasets",KPe({})),ht(r,"math",rLe({})),ht(r,"ndarray",eLe({})),ht(r,"random",tLe({})),ht(r,"simulate",iLe({})),ht(r,"stats",aLe({})),ht(r,"string",nLe({})),r}C9r.exports=sLe});var U9r=s((wot,G9r)=>{"use strict";var uLe=D(),D6=V9r();uLe(D6,"CACHED",D6());G9r.exports=D6});var vLe=s((Eot,D9r)=>{var oLe=U9r().CACHED;D9r.exports=oLe});return vLe();})();
/**
* Displays a printable stacked representation of an ndarray.
*
* @customfunction
* @param {Range} x - input ndarray
* @returns {Range} stacked representation of an ndarray
*
* @example
* STDLIB_NDARRAY_STACKED_REPR( A1:A100 )
*/
function STDLIB_NDARRAY_STACKED_REPR( x ) { 
	var o;
	var i;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		ns.assert.unrecognizedOptionName( o );
	}
	return ns.ndarray.stackedRepr( ns.ndarray.range2ndarray( x ) );
}
/**
* Creates an ndarray view.
*
* @customfunction
* @param {Range} x - input ndarray
* @param {string} slice - subsequence string
* @param {string} strict - option name for specifying whether to enforce strict bounds checking
* @param {boolean} strictValue - boolean indicating whether to enforce strict bounds checking
* @param {string} view - option name for specifying whether to return a "view" of the input ndarray
* @param {boolean} viewValue - boolean indicating whether to return a "view" of the input ndarray
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} ndarray view
*
* @example
* STDLIB_NDSLICE( A1:A100, '::-1,...,::-2' )
*/
function STDLIB_NDSLICE( x, slice, strict, strictValue, view, viewValue, as, asValue ) { 
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var hlen;
	var vlen;
	var len;
	var tmp;
	var buf;
	var obj;
	var vx;
	var s;
	var o;
	var i;
	opts = {
		'strict': true,
		'view': false,
		'as': null
	};
	// Parse optional keyword arguments...
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'strict' || o === 'view' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate strict/view/layout values
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Parse the input range as an ndarray:
	obj = ns.ndarray.range2ndarray( x );
	// Resolve the default presentation layout based on the presentation layout of the input array...
	if ( opts.as === null ) {
		if ( x.length === 1 && x[ 0 ].length > 1 ) { // TODO: move to utility package: gsheets/ndarray/default-presentation-layout
			opts.as = 'row';
		} else {
			opts.as = 'column';
		}
	}
	// Parse the provided indexing expression:
	s = ns.ndarray.seq2multislice( slice, obj.shape, opts.strict );
	// Cache a reference to the linearized ndarray data:
	x = obj.rawBuffer;
	hlen = obj.headerLength;
	// Create the slice:
	vx = ns.ndarray.slice( obj.ndarray, s, opts.strict, false );
	vlen = vx.length;
	shape = vx.shape;
	strides = vx.strides;
	order = vx.order;
	ndims = shape.length;
	// Calculate the header length for the slice:
	vhlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package instead of hardcoding
	// Adjust the view index offset to account for the header info:
	offset = vx.offset - hlen;
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		len = x.length;
		buf = x;
		// Check whether the number of dimensions was reduced and, if so, shift the data to account for less header info...
		if ( vhlen !== hlen ) {
			buf.splice( vhlen, hlen-vhlen );
		}
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		len = vhlen + vlen;
		buf = ns.array.zeros( len );
		// Return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
			tmp = new ns.ndarray.ndarray( 'generic', buf, shape, strides, vhlen, order );
			for ( i = 0; i < vlen; i++ ) {
				tmp.iset( i, vx.iget( i ) ); // use getter as iteration order can be non-contiguous depending on the view
			}
		} else {
			strides = [ 0 ];
			buf[ len-1 ] = vx.get();
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = 0;
	}
	return ns.ndarray.ndarray2range( buf, len-vhlen, obj.dtype, shape, strides, offset, order, opts.as );
}
/**
* Creates an ndarray.
*
* @customfunction
* @param {Range} data - ndarray data
* @param {string} shape - option name for specifying the ndarray shape
* @param {Range<integer>} shapeValue - ndarray shape
* @param {string} strides - option name for specifying the ndarray strides
* @param {Range<integer>} stridesValue - ndarray strides
* @param {string} offset - option name for specifying an index offset
* @param {integer} offsetValue - index offset
* @param {string} order - option name for specifying the ndarray memory layout
* @param {string} orderValue - ndarray memory layout (either "row-major" or "column-major")
* @param {string} dtype - option name for specifying the ndarray data type
* @param {string} dtypeValue - ndarray data type
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} ndarray
*
* @example
* STDLIB_NDARRAY( A1:A100, "shape", { 10, 10 } )
*/
function STDLIB_NDARRAY( data, shape, shapeValue, strides, stridesValue, offset, offsetValue, order, orderValue, dtype, dtypeValue, as, asValue ) { 
	var ndims;
	var opts;
	var hlen;
	var buf;
	var len;
	var o;
	var i;
	opts = {
		'shape': null,
		'strides': null,
		'offset': null,
		'order': 'row-major',
		'dtype': 'generic',
		'as': 'column'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'shape' || o === 'strides' || o === 'offset' || o === 'order' || o === 'dtype' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate option values: order, dtype, as
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( data, 'First argument' );
	if ( opts.shape === null ) {
		opts.shape = [ data.length ];
	} else {
		ns.assert.isRange1d( opts.shape, 'Shape argument' );
		opts.shape = ns.array.flatten2d( opts.shape );
		ns.assert.isValidShape( opts.shape, 'Shape argument' );
	}
	ndims = opts.shape.length;
	if ( opts.strides === null ) {
		if ( ndims === 0 ) {
			opts.strides = [ 0 ];
		} else {
			opts.strides = ns.ndarray.shape2strides( opts.shape, opts.order );
		}
	} else {
		ns.assert.isRange1d( opts.strides, 'Strides argument' );
		opts.strides = ns.array.flatten2d( opts.strides );
		ns.assert.isValidStrides( opts.strides, 'Strides argument' );
		if ( ndims === 0 && ( opts.strides.length !== 1 || opts.strides[ 0 ] !== 0 ) ) {
			// TODO: raise an exception
		}
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	// Compute the number of elements in the provided data buffer:
	len = data.length * data[ 0 ].length;
	// Verify that, for zero-dimensional ndarrays, the index of the underlying data element does not exceed the bounds of the underlying data buffer:
	if ( ndims === 0 && offset >= len ) {
		// TODO: raise an exception
	}
	// Verify that the desired shape, strides, and offset are compatible with the number of elements in the provided data buffer:
	if ( len > 0 ) {
		ns.assert.isBufferLengthCompatible( len, opts.shape, opts.strides, opts.offset ); 
	}
	// Calculate the header length:
	hlen = 9 + ndims + opts.strides.length + (5*1); // TODO: use internal utility package, rather than hardcode
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	buf = ns.array.zeros( hlen + len );
	// Copy the data elements to the ndarray buffer:
	buf = ns.array.flatten2d.assign( data, buf, 1, hlen );
	// Serialize ndarray data as a range:
	return ns.ndarray.ndarray2range( buf, len, opts.dtype, opts.shape, opts.strides, opts.offset, opts.order, opts.as ); 
}
/**
* Creates a zero-filled ndarray having a specified shape.
*
* @customfunction
* @param {Range<integer>} shape - array shape
* @param {string} order - option name for specifying the ndarray memory layout
* @param {string} orderValue - order option value
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {Range} zero-filled ndarray
*
* @example
* STDLIB_NDZEROS( { 10, 1 } )
*/
function STDLIB_NDZEROS( shape, order, orderValue, as, asValue ) { 
	var strides;
	var ndims;
	var opts;
	var hlen;
	var buf;
	var len;
	var o;
	var i;
	opts = {
		'order': 'row-major',
		'as': 'column'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'order' || o === 'as' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate order/layout value
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( shape, 'First argument' );
	shape = ns.array.flatten2d( shape );
	ns.assert.isValidShape( shape, 'First argument' );
	// Compute the output array strides from the input array shape:
	ndims = shape.length;
	if ( ndims === 0 ) { // TODO: consider moving this logic to a separate utility package, as this may be a recurring pattern
		strides = [ 0 ];
	} else {
		strides = ns.ndarray.shape2strides( shape, opts.order );
	}
	// Calculate the header length:
	hlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package, rather than hardcode
	// Allocate an ndarray buffer which can accommodate both the header and data elements:
	if ( ndims === 0 ) {
		len = 1;
	} else {
		len = ns.ndarray.numel( shape );
	}
	buf = ns.array.zeros( hlen + len );
	// Serialize ndarray info to a range:
	return ns.ndarray.ndarray2range( buf, len, 'number', shape, strides, 0, opts.order, opts.as );
}
/**
* Generates pseudorandom numbers drawn from a raised cosine distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} s - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_COSINE( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_COSINE( nrows, ncols, mu, s, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( s, 'Scale parameter' );
	rand = ns.random.cosine( mu, s, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an exponential distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} lambda - rate parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_EXPONENTIAL( 10, 1, 7.9, "seed", 1234 )
*/
function STDLIB_RANDOM_EXPONENTIAL( nrows, ncols, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.exponential( lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from Kumaraswamy's double bounded distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - first shape parameter
* @param {number} b - second shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_KUMARASWAMY( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_KUMARASWAMY( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( a, 'First shape parameter' );
	ns.assert.isPositiveNumber( b, 'Second shape parameter' );
	rand = ns.random.kumaraswamy( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Gumbel distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} beta - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_GUMBEL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_GUMBEL( nrows, ncols, mu, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( beta, 'Scale parameter' );
	rand = ns.random.gumbel( mu, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an Erlang distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {integer} k - shape parameter
* @param {number} lambda - rate parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_ERLANG( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_ERLANG( nrows, ncols, k, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveInteger( k, 'Shape parameter' );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.erlang( k, lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a hypergeometric distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {integer} N - population size
* @param {integer} K - subpopulation size
* @param {integer} n - number of draws
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_HYPERGEOMETRIC( 10, 1, 20, 10, 7, "seed", 1234 )
*/
function STDLIB_RANDOM_HYPERGEOMETRIC( nrows, ncols, N, K, n, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 5; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNonNegativeInteger( N, 'Population size' );
	ns.assert.isNonNegativeInteger( K, 'Subpopulation size' );
	ns.assert.isNonNegativeInteger( n, 'Number of draws' );
	ns.assert.isLessThanEqual( n, N, 'Number of draws', 'population size' );
	ns.assert.isLessThanEqual( K, N, 'Subpopulation size', 'population size' );
	rand = ns.random.hypergeometric( N, K, n, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a gamma distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} beta - rate parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_GAMMA( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_GAMMA( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Rate parameter' );
	rand = ns.random.gamma( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers using a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*
* ## Notes
*
* -   Without normalization, generates numbers on the closed interval `[0, 2147483646]`.
* -   With normalization, generates numbers on the half-open interval `[0, 1)`.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: `FALSE`)
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_MINSTD_SHUFFLE( 10, 1, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_MINSTD_SHUFFLE( 10, 1, "seed", 1234, "normalized", FALSE )
*
* @example
* STDLIB_RANDOM_MINSTD_SHUFFLE( 10, 1, "seed", 1234, "normalized", TRUE )
*/
function STDLIB_RANDOM_MINSTD_SHUFFLE( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { 
	var rand;
	var flg;
	var s;
	var o;
	var v;
	var f;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else if ( o === 'normalized' ) {
			flg = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.minstdShuffle({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	return ns.array.filled2dBy( [ nrows, ncols ], f );
}
/**
* Generates pseudorandom numbers drawn from a beta prime distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - first shape parameter
* @param {number} beta - second shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BETAPRIME( 10, 1, 1, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_BETAPRIME( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'First shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Second shape parameter' );
	rand = ns.random.betaprime( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a discrete uniform distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {integer} a - minimum support (inclusive)
* @param {integer} b - maximum support (inclusive)
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_DISCRETE_UNIFORM( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_DISCRETE_UNIFORM( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isInteger( a, 'Minimum support' );
	ns.assert.isInteger( b, 'Maximum support' );
	ns.assert.isLessThanEqual( a, b, 'Minimum support', 'maximum support' );
	rand = ns.random.discreteUniform( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Weibull distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} k - scale parameter
* @param {number} lambda - shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_WEIBULL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_WEIBULL( nrows, ncols, k, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Scale parameter' );
	ns.assert.isPositiveNumber( lambda, 'Shape parameter' );
	rand = ns.random.weibull( k, lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Fréchet distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} s - scale parameter
* @param {number} m - location parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_FRECHET( 10, 1, 2, 5, 3.33, "seed", 1234 )
*/
function STDLIB_RANDOM_FRECHET( nrows, ncols, alpha, s, m, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 5; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( s, 'Scale parameter' );
	ns.assert.isNumber( m, 'Location parameter' );
	rand = ns.random.frechet( alpha, s, m, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Pareto (Type 1) distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} beta - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_PARETO1( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_PARETO1( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Scale parameter' );
	rand = ns.random.pareto1( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Lévy distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - location parameter
* @param {number} c - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LEVY( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LEVY( nrows, ncols, mu, c, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Location parameter' );
	ns.assert.isPositiveNumber( c, 'Scale parameter' );
	rand = ns.random.levy( mu, c, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a geometric distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_GEOMETRIC( 10, 1, 0.5, "seed", 1234 )
*/
function STDLIB_RANDOM_GEOMETRIC( nrows, ncols, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.geometric( p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Rayleigh distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} sigma - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_RAYLEIGH( 10, 1, 2.5, "seed", 1234 )
*/
function STDLIB_RANDOM_RAYLEIGH( nrows, ncols, sigma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.rayleigh( sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a lognormal distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - location parameter
* @param {number} sigma - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LOGNORMAL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LOGNORMAL( nrows, ncols, mu, sigma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( mu, 'Location parameter' );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.lognormal( mu, sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a logistic distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} s - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LOGISTIC( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LOGISTIC( nrows, ncols, mu, s, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( s, 'Scale parameter' );
	rand = ns.random.logistic( mu, s, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers using a linear congruential pseudorandom number generator (LCG).
*
* ## Notes
*
* -   Without normalization, generates numbers on the closed interval `[0, 2147483646]`.
* -   With normalization, generates numbers on the half-open interval `[0, 1)`.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: `FALSE`)
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_MINSTD( 10, 1, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_MINSTD( 10, 1, "seed", 1234, "normalized", FALSE )
*
* @example
* STDLIB_RANDOM_MINSTD( 10, 1, "seed", 1234, "normalized", TRUE )
*/
function STDLIB_RANDOM_MINSTD( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { 
	var rand;
	var flg;
	var s;
	var o;
	var v;
	var f;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else if ( o === 'normalized' ) {
			flg = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.minstd({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	return ns.array.filled2dBy( [ nrows, ncols ], f );
}
/**
* Generates pseudorandom numbers drawn from a binomial distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} n - number of trials
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BINOMIAL( 10, 1, 20, 0.8, "seed", 1234 )
*/
function STDLIB_RANDOM_BINOMIAL( nrows, ncols, n, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveInteger( n, 'Number of trials' );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.binomial( n, p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Cauchy distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} x0 - location parameter
* @param {number} gamma - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_CAUCHY( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_CAUCHY( nrows, ncols, x0, gamma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( x0, 'Location parameter' );
	ns.assert.isPositiveNumber( gamma, 'Scale parameter' );
	rand = ns.random.cauchy( x0, gamma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a chi-square distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} k - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_CHISQUARE( 10, 1, 2, "seed", 1234 )
*/
function STDLIB_RANDOM_CHISQUARE( nrows, ncols, k, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chisquare( k, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a triangular distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {number} c - mode
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_TRIANGULAR( 10, 1, 0, 10, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_TRIANGULAR( nrows, ncols, a, b, c, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 5; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( a, 'Minimum support' );
	ns.assert.isNumber( b, 'Maximum support' );
	ns.assert.isNumber( c, 'Mode' );
	ns.assert.isBetween( c, a, b, 'closed', 'closed', 'Mode' );
	rand = ns.random.triangular( a, b, c, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an arcsine distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - minimum support
* @param {number} b - maximum support
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_ARCSINE( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_ARCSINE( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( a, 'Minimum support' );
	ns.assert.isNumber( b, 'Maximum support' );
	ns.assert.isLessThan( a, b, 'Minimum support', 'maximum support' );
	rand = ns.random.arcsine( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Laplace (double exponential) distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} b - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_LAPLACE( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_LAPLACE( nrows, ncols, mu, b, seed, seedValue ) { 
	var rand;
	var sd;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			sd = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, sd );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( b, 'Scale parameter' );
	rand = ns.random.laplace( mu, b, {
		'seed': sd
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a chi distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} k - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_CHI( 10, 1, 2, "seed", 1234 )
*/
function STDLIB_RANDOM_CHI( nrows, ncols, k, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chi( k, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Poisson distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} lambda - mean parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_POISSON( 10, 1, 7.9, "seed", 1234 )
*/
function STDLIB_RANDOM_POISSON( nrows, ncols, lambda, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Mean parameter' );
	rand = ns.random.poisson( lambda, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a normal distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} mu - mean
* @param {number} sigma - standard deviation
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_NORMAL( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_NORMAL( nrows, ncols, mu, sigma, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( mu, 'Mean' );
	ns.assert.isPositiveNumber( sigma, 'Standard deviation' );
	rand = ns.random.normal( mu, sigma, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an F distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} d1 - degrees of freedom
* @param {number} d2 - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_F( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_F( nrows, ncols, d1, d2, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( d1, 'Degrees of freedom' );
	ns.assert.isPositiveNumber( d2, 'Degrees of freedom' );
	rand = ns.random.f( d1, d2, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a standard normal distribution using the Improved Ziggurat transform.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_IMPROVED_ZIGGURAT( 10, 1, "seed", 1234 )
*/
function STDLIB_RANDOM_IMPROVED_ZIGGURAT( nrows, ncols, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.improvedZiggurat({
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a beta distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - first shape parameter
* @param {number} beta - second shape parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BETA( 10, 1, 1, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_BETA( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'First shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Second shape parameter' );
	rand = ns.random.beta( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a Bernoulli distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BERNOULLI( 10, 1, 0.5, "seed", 1234 )
*/
function STDLIB_RANDOM_BERNOULLI( nrows, ncols, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.bernoulli( p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a standard normal distribution using the Box-Muller transform.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_BOX_MULLER( 10, 1, "seed", 1234 )
*/
function STDLIB_RANDOM_BOX_MULLER( nrows, ncols, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.boxMuller({
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers using the Mersenne Twister pseudorandom number generator.
*
* ## Notes
*
* -   Without normalization, generates numbers on the closed interval `[0, 4294967295]`.
* -   With normalization, generates numbers on the half-open interval `[0, 1)`.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @param {string} normalized - normalized option name
* @param {boolean} normalizedValue - normalized option value (default: `FALSE`)
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234 )
*
* @example
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234, "normalized", FALSE )
*
* @example
* STDLIB_RANDOM_MT19937( 10, 1, "seed", 1234, "normalized", TRUE )
*/
function STDLIB_RANDOM_MT19937( nrows, ncols, seed, seedValue, normalized, normalizedValue ) { 
	var rand;
	var flg;
	var s;
	var o;
	var v;
	var f;
	var i;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else if ( o === 'normalized' ) {
			flg = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.mt19937({
		'seed': s
	});
	if ( flg ) {
		f = rand.normalized;
	} else {
		f = rand;
	}
	return ns.array.filled2dBy( [ nrows, ncols ], f );
}
/**
* Generates pseudorandom numbers drawn from a Student's t-distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} v - degrees of freedom
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_T( 10, 1, 2.4, "seed", 1234 )
*/
function STDLIB_RANDOM_T( nrows, ncols, v, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var a;
	var i;
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		a = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( a );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( v, 'Degrees of freedom' );
	rand = ns.random.t( v, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a continuous uniform distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} a - minimum support (inclusive)
* @param {number} b - maximum support (exclusive)
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_UNIFORM( 10, 1, 0, 10, "seed", 1234 )
*/
function STDLIB_RANDOM_UNIFORM( nrows, ncols, a, b, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isNumber( a, 'Minimum support' );
	ns.assert.isNumber( b, 'Maximum support' );
	ns.assert.isLessThan( a, b, 'Minimum support', 'maximum support' );
	rand = ns.random.uniform( a, b, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from a negative binomial distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} r - number of successes until experiment is stopped
* @param {number} p - success probability
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<integer>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_NEGATIVE_BINOMIAL( 10, 1, 20, 0.8, "seed", 1234 )
*/
function STDLIB_RANDOM_NEGATIVE_BINOMIAL( nrows, ncols, r, p, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( r, 'Number of successes until experiment is stopped' );
	ns.assert.isBetween( p, 0.0, 1.0, 'open', 'open', 'Success probability' );
	rand = ns.random.negativeBinomial( r, p, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Generates pseudorandom numbers drawn from an inverse gamma distribution.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {number} alpha - shape parameter
* @param {number} beta - scale parameter
* @param {string} seed - seed option name
* @param {integer|Range<integer>} seedValue - pseudorandom number generator seed value
* @returns {Range<number>} pseudorandom numbers
*
* @example
* STDLIB_RANDOM_INVGAMMA( 10, 1, 2, 5, "seed", 1234 )
*/
function STDLIB_RANDOM_INVGAMMA( nrows, ncols, alpha, beta, seed, seedValue ) { 
	var rand;
	var s;
	var o;
	var v;
	var i;
	for ( i = 4; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'seed' ) {
			s = ns.random.base.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( alpha, 'Shape parameter' );
	ns.assert.isPositiveNumber( beta, 'Scale parameter' );
	rand = ns.random.invgamma( alpha, beta, {
		'seed': s
	});
	return ns.array.filled2dBy( [ nrows, ncols ], rand );
}
/**
* Anscombe's quartet.
*
* @customfunction
* @returns {Range<number>} dataset
*
* @example
* STDLIB_ANSCOMBES_QUARTET()
*/
function STDLIB_ANSCOMBES_QUARTET() {
	var data;
	var out;
	var tmp;
	var d;
	var i;
	var j;
	data = ns.datasets.ANSCOMBES_QUARTET(); 
	out = [];
	for ( i = 0; i < data.length; i++ ) {
		d = data[ i ];
		for ( j = 0; j < d.length; j++ ) {
			tmp = d[ j ];
			tmp.push( i+1 );
			out.push( tmp );
		}
	}
	return out;
}
/**
* Multiplies a vector by a constant and adds the result to another vector.
*
* @customfunction
* @param {integer} N - number of elements on which to operate
* @param {number} alpha - scalar constant
* @param {Range<number>} x - first vector
* @param {integer} strideX - index increment for the first vector
* @param {integer} offsetX - index offset for the first vector
* @param {Range<number>} y - second vector
* @param {integer} strideY - index increment for the second vector
* @param {integer} offsetY - index offset for the second vector
* @returns {Range<number>} results
*
* @example
* STDLIB_BLAS_DAXPY( 10, 5, A1:A100, 1, 0, B1:B100, 1, 0 )
*/
function STDLIB_BLAS_DAXPY( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) { 
	var out;
	ns.assert.isNonNegativeInteger( N, 'Number of elements' );
	ns.assert.isNumber( alpha, 'Scalar constant' );
	ns.assert.isRange1d( x, 'First vector argument' );
	ns.assert.isInteger( strideX, 'Stride for first vector' );
	ns.assert.isNonNegativeInteger( offsetX, 'Offset for first vector' );
	ns.assert.isRange1d( y, 'Second vector argument' );
	ns.assert.isInteger( strideY, 'Stride for second vector' );
	ns.assert.isNonNegativeInteger( offsetY, 'Offset for second vector' );
	out = ns.blas.daxpy( N, alpha, ns.array.flatten2d( x ), strideX, offsetX, ns.array.flatten2d( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
}
/**
* Multiplies a vector by a constant and adds the result to another vector.
*
* @customfunction
* @param {integer} N - number of elements on which to operate
* @param {number} alpha - scalar constant
* @param {Range<number>} x - first vector
* @param {integer} strideX - index increment for the first vector
* @param {integer} offsetX - index offset for the first vector
* @param {Range<number>} y - second vector
* @param {integer} strideY - index increment for the second vector
* @param {integer} offsetY - index offset for the second vector
* @returns {Range<number>} results
*
* @example
* STDLIB_BLAS_SAXPY( 10, 5, A1:A100, 1, 0, B1:B100, 1, 0 )
*/
function STDLIB_BLAS_SAXPY( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) { 
	var out;
	ns.assert.isNonNegativeInteger( N, 'Number of elements' );
	ns.assert.isNumber( alpha, 'Scalar constant' );
	ns.assert.isRange1d( x, 'First vector argument' );
	ns.assert.isInteger( strideX, 'Stride for first vector' );
	ns.assert.isNonNegativeInteger( offsetX, 'Offset for first vector' );
	ns.assert.isRange1d( y, 'Second vector argument' );
	ns.assert.isInteger( strideY, 'Stride for second vector' );
	ns.assert.isNonNegativeInteger( offsetY, 'Offset for second vector' );
	out = ns.blas.saxpy( N, alpha, ns.array.flatten2d( x ), strideX, offsetX, ns.array.flatten2d( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
}
var __STDLIB_LOWERCASE = ns.string.tools.s_o( ns.string.lowercase ); 
/**
* Converts a string to lowercase.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_LOWERCASE( "Foo Bar" )
*
* @example
* STDLIB_LOWERCASE( A2:A100 )
*
* @example
* STDLIB_LOWERCASE( A2:D100 )
*/
function STDLIB_LOWERCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_LOWERCASE );
		return value;
	}
	return __STDLIB_LOWERCASE( value );
}
var __STDLIB_CAMELCASE = ns.string.tools.s_o( ns.string.camelcase ); 
/**
* Converts a string to camel case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_CAMELCASE( "foo bar" )
*
* @example
* STDLIB_CAMELCASE( A2:A100 )
*
* @example
* STDLIB_CAMELCASE( A2:D100 )
*/
function STDLIB_CAMELCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAMELCASE );
		return value;
	}
	return __STDLIB_CAMELCASE( value );
}
var __STDLIB_UNCAPITALIZE = ns.string.tools.s_o( ns.string.uncapitalize ); 
/**
* Lowercases the first character of a string.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_UNCAPITALIZE( "Foo Bar" )
*
* @example
* STDLIB_UNCAPITALIZE( A2:A100 )
*
* @example
* STDLIB_UNCAPITALIZE( A2:D100 )
*/
function STDLIB_UNCAPITALIZE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UNCAPITALIZE );
		return value;
	}
	return __STDLIB_UNCAPITALIZE( value );
}
var __STDLIB_PASCALCASE = ns.string.tools.s_o( ns.string.pascalcase ); 
/**
* Converts a string to Pascal case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_PASCALCASE( "foo bar" )
*
* @example
* STDLIB_PASCALCASE( A2:A100 )
*
* @example
* STDLIB_PASCALCASE( A2:D100 )
*/
function STDLIB_PASCALCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_PASCALCASE );
		return value;
	}
	return __STDLIB_PASCALCASE( value );
}
var __STDLIB_SNAKECASE = ns.string.tools.s_o( ns.string.snakecase ); 
/**
* Converts a string to snake case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_SNAKECASE( "foo bar" )
*
* @example
* STDLIB_SNAKECASE( A2:A100 )
*
* @example
* STDLIB_SNAKECASE( A2:D100 )
*/
function STDLIB_SNAKECASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_SNAKECASE );
		return value;
	}
	return __STDLIB_SNAKECASE( value );
}
var __STDLIB_UPPERCASE = ns.string.tools.s_o( ns.string.uppercase ); 
/**
* Converts a string to uppercase.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_UPPERCASE( "foo bar" )
*
* @example
* STDLIB_UPPERCASE( A2:A100 )
*
* @example
* STDLIB_UPPERCASE( A2:D100 )
*/
function STDLIB_UPPERCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UPPERCASE );
		return value;
	}
	return __STDLIB_UPPERCASE( value );
}
var __STDLIB_CAPITALIZE = ns.string.tools.s_o( ns.string.capitalize ); 
/**
* Capitalizes the first character of a string.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_CAPITALIZE( "foo bar" )
*
* @example
* STDLIB_CAPITALIZE( A2:A100 )
*
* @example
* STDLIB_CAPITALIZE( A2:D100 )
*/
function STDLIB_CAPITALIZE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAPITALIZE );
		return value;
	}
	return __STDLIB_CAPITALIZE( value );
}
var __STDLIB_STARTCASE = ns.string.tools.s_o( ns.string.startcase ); 
/**
* Converts a string to start case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_STARTCASE( "foo bar" )
*
* @example
* STDLIB_STARTCASE( A2:A100 )
*
* @example
* STDLIB_STARTCASE( A2:D100 )
*/
function STDLIB_STARTCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_STARTCASE );
		return value;
	}
	return __STDLIB_STARTCASE( value );
}
var __STDLIB_CONSTANTCASE = ns.string.tools.s_o( ns.string.constantcase ); 
/**
* Converts a string to constant case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_CONSTANTCASE( "foo bar" )
*
* @example
* STDLIB_CONSTANTCASE( A2:A100 )
*
* @example
* STDLIB_CONSTANTCASE( A2:D100 )
*/
function STDLIB_CONSTANTCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CONSTANTCASE );
		return value;
	}
	return __STDLIB_CONSTANTCASE( value );
}
var __STDLIB_KEBABCASE = ns.string.tools.s_o( ns.string.kebabcase ); 
/**
* Converts a string to kebab case.
*
* @customfunction
* @param {string|Range<string>} value - input value(s)
* @returns {string|Range<string>} results
*
* @example
* STDLIB_KEBABCASE( "foo bar" )
*
* @example
* STDLIB_KEBABCASE( A2:A100 )
*
* @example
* STDLIB_KEBABCASE( A2:D100 )
*/
function STDLIB_KEBABCASE( value ) {
	if ( ns.assert.base.isArray( value ) ) {
		ns.array.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_KEBABCASE );
		return value;
	}
	return __STDLIB_KEBABCASE( value );
}
/**
* Generates a sawtooth wave.
*
* @customfunction
* @param {integer} N - number of values
* @param {string} period - period option name
* @param {integer} periodValue - period value (default: `10`)
* @param {string} amplitude - amplitude option name
* @param {number} amplitudeValue - amplitude value (default: `1`)
* @param {string} offset - phase offset option name
* @param {integer} offsetValue - phase offset value (default: `0`)
* @returns {Range<number>} simulated values
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "amplitude", 20 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "offset", 3 )
*
* @example
* STDLIB_SAWTOOTH_WAVE( 10, "period", 10, "amplitude", 20, "offset", 3 )
*/
function STDLIB_SAWTOOTH_WAVE( N, period, periodValue, amplitude, amplitudeValue, offset, offsetValue ) { 
	var opts;
	var it;
	var o;
	var v;
	var i;
	ns.assert.isNonNegativeInteger( N, 'Number of values' );
	opts = {
		'iter': N
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'period' ) {
			ns.assert.isPositiveInteger( v, 'Period' );
			opts[ o ] = v;
		} else if ( o === 'amplitude' ) {
			ns.assert.isNonNegativeNumber( v, 'Amplitude' );
			opts[ o ] = v;
		} else if ( o === 'offset' ) {
			ns.assert.isInteger( v, 'Offset' );
			opts[ o ] = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	it = ns.simulate.iterSawtoothWave( opts );
	return ns.array.iterator2array( it );
}
/**
* Tests the null hypothesis that the variances in all groups are the same.
*
* @customfunction
* @param {Range<number>} values - numeric observations
* @param {string} groups - groups option name
* @param {Range} groupsValue - groups option values
* @param {string} alpha - significance level option name
* @param {number} alphaValue - significance level option value (default: `0.05`)
* @param {string} format - results format option name
* @param {string} formatValue - results format option value (either `"print"` or `"raw"`; default: `"print"`)
* @returns {string|Range<string|number>} results
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100 )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "alpha", 0.10 )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "format", "print" )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "format", "raw" )
*
* @example
* STDLIB_BARTLETT_TEST( A1:A100, "groups", B1:B100, "alpha", 0.10, "format", "print" )
*/
function STDLIB_BARTLETT_TEST( values, groups, groupsValue, alpha, alphaValue, format, formatValue ) { 
	var opts;
	var out;
	var o;
	var v;
	var i;
	ns.assert.isRange( values, 'Observations' );
	opts = {};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'groups' ) {
			ns.assert.isRange( v, 'Groups' );
			opts[ o ] = ns.array.flatten2d( v );
		} else if ( o === 'alpha' ) {
			ns.assert.isNumber( v, 'Significance level' );
			opts[ o ] = v;
		} else if ( o === 'format' ) {
			ns.assert.isOneOf( v, [ 'raw', 'print' ], 'format' );
			opts[ o ] = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isDefined( opts.groups, 'groups' );
	out = ns.stats.bartlettTest( ns.array.flatten2d( values ), opts );
	if ( opts.format === 'raw' ) {
		return [
			[ 'rejected', out.rejected ],
			[ 'alpha', out.alpha ],
			[ 'df', out.df ],
			[ 'pValue', out.pValue ],
			[ 'statistic', out.statistic ]
		];
	}
	return out.print();
}
/**
* Evaluates the cumulative density function (CDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the CDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_CDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_CDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_CDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_CDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_CDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.cdf );
}
/**
* Evaluates the natural logarithm of the probability density function (PDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the PDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGPDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_LOGPDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.logpdf );
}
/**
* Computes the expected value of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEAN( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MEAN( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.mean );
}
/**
* Evaluates the moment-generating function (MGF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} t - value(s) at which to evaluate the MGF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MGF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MGF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MGF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MGF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MGF( t, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.mgf );
}
/**
* Evaluates the natural logarithm of the cumulative density function (CDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the CDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_LOGCDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_LOGCDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.logcdf );
}
/**
* Computes the variance of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_VARIANCE( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_VARIANCE( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.variance );
}
/**
* Computes the expected value of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MEDIAN( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MEDIAN( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.median );
}
/**
* Computes the standard deviation of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_STDEV( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_STDEV( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.stdev );
}
/**
* Evaluates the quantile function for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} p - value(s) at which to evaluate the quantile function
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_QUANTILE( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_QUANTILE( p, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.quantile );
}
/**
* Evaluates the probability density function (PDF) for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} x - value(s) at which to evaluate the PDF
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_PDF( 2, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( A1:A100, 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( 2, A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_PDF( A1:A100, 0, 1, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_PDF( x, mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.ternary( args, ns.stats.dists.normal.pdf );
}
/**
* Computes the skewness of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_SKEWNESS( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_SKEWNESS( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.skewness );
}
/**
* Computes the excess kurtosis for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_KURTOSIS( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_KURTOSIS( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.kurtosis );
}
/**
* Computes the mode of a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_MODE( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_MODE( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MODE( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_MODE( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_MODE( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.mode );
}
/**
* Computes the differential entropy for a normal distribution.
*
* @customfunction
* @param {number|Range<number>} mu - mean
* @param {number|Range<number>} sigma - standard deviation (in nats)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @throws {Error} input arguments must be broadcast compatible
* @returns {Range<number>} results
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( 0, 1 )
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( 0, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( A1:A100, B1:B100 )
*
* @example
* STDLIB_DISTS_NORMAL_ENTROPY( 1, B1:B100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DISTS_NORMAL_ENTROPY( mu, sigma, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.stats.dists.normal.entropy );
}
/**
* Computes the maximum value according to a mask.
*
* @customfunction
* @param {Range<number>} x - input range
* @param {Range<integer>} mask - mask range (must be broadcast compatible with the input range)
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_MSKMAX( A1:A100, B1:B100 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:D100 )
*
* @example
* STDLIB_MSKMAX( A1:A100, D1:F100 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:F100, "axis", 1 )
*
* @example
* STDLIB_MSKMAX( A1:C100, D1:F100, "axis", 0 )
*/
function STDLIB_MSKMAX( x, mask, axis, axisValue ) { 
	var sarray;
	var smask;
	var out;
	var sox;
	var som;
	var ax;
	var xM;
	var xN;
	var mM;
	var mN;
	var sx;
	var sm;
	var ix;
	var im;
	var M;
	var N;
	var o;
	var v;
	var i;
	ns.assert.isRange( x, 'First argument' );
	ns.assert.isRange( mask, 'Second argument' );
	ns.assert.isBroadcastCompatible( x, mask, 'First and second arguments' );
	ax = 1;
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	out = [];
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		// Retrieve input array dimensions:
		xM = x.length;
		xN = x[ 0 ].length;
		mM = mask.length;
		mN = mask[ 0 ].length;
		// Determine the broadcasted dimensions:
		M = ( xM > mM ) ? xM : mM;
		N = ( xN > mN ) ? xN : mN;
		// Set the "offset" strides (i.e., the increment for moving to the next row):
		sox = ( xM > 1 ) ? 1 : 0;
		som = ( mM > 1 ) ? 1 : 0;
		// Set the array element strides (i.e., the increment for moving to the next column):
		sx = ( xN > 1 ) ? 1 : 0;
		sm = ( mN > 1 ) ? 1 : 0;
		// Initialize the row pointers:
		ix = 0;
		im = 0;
		// Iterate over columns...
		for ( i = 0; i < M; i++ ) {
			out.push( ns.stats.mskmax( N, x[ ix ], sx, 0, mask[ im ], sm, 0 ) );
			ix += sox;
			im += som;
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	// Retrieve input array dimensions:
	xM = x[ 0 ].length;    // number of columns
	xN = x.length;         // number of rows
	mM = mask[ 0 ].length;
	mN = mask.length;
	// Determine the broadcasted dimensions:
	M = ( xM > mM ) ? xM : mM;
	N = ( xN > mN ) ? xN : mN;
	// Set the "offset" strides (i.e., the increment for moving to the next column):
	sox = ( xM > 1 ) ? 1 : 0;
	som = ( mM > 1 ) ? 1 : 0;
	// Set the array element strides (i.e., the increment for moving to the next row):
	sx = ( xN > 1 ) ? M : 1;
	sm = ( mN > 1 ) ? M : 1;
	// Initialize the column pointers:
	ix = 0;
	im = 0;
	// Flatten the input arrays to strided arrays in row-major order:
	sarray = ns.array.flatten2d( x );
	smask = ns.array.flatten2d( mask );
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.stats.mskmax( N, sarray, sx, ix, smask, sm, im ) );
		ix += sox;
		im += som;
	}
	return [ out ];
}
/**
* Computes the maximum value.
*
* @customfunction
* @param {Range<number>} x - range
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_MAX( A1:A100 )
*
* @example
* STDLIB_MAX( A1:C100, "axis", 1 )
*
* @example
* STDLIB_MAX( A1:C100, "axis", 0 )
*/
function STDLIB_MAX( x, axis, axisValue ) { 
	var sarray;
	var offset;
	var out;
	var ax;
	var M;
	var N;
	var o;
	var v;
	var i;
	ns.assert.isRange( x, 'First argument' );
	ax = 1;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	out = [];
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		M = x.length;
		N = x[ 0 ].length;
		for ( i = 0; i < M; i++ ) {
			out.push( ns.stats.max( N, x[ i ], 1, 0 ) );
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.array.flatten2d( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.stats.max( N, sarray, M, offset ) );
		offset += 1;
	}
	return [ out ];
}
/**
* Computes the cumulative maximum value.
*
* @customfunction
* @param {Range<number>} x - range
* @param {string} axis - axis option name
* @param {integer} axisValue - axis option value (where `0` indicates across columns and `1` indicates across rows; default: `1`)
* @returns {Range<number>} results
*
* @example
* STDLIB_CUMAX( A1:A100 )
*
* @example
* STDLIB_CUMAX( A1:C100, "axis", 1 )
*
* @example
* STDLIB_CUMAX( A1:C100, "axis", 0 )
*/
function STDLIB_CUMAX( x, axis, axisValue ) { 
	var sarray;
	var offset;
	var tmp;
	var ax;
	var M;
	var N;
	var o;
	var v;
	var i;
	var j;
	ns.assert.isRange( x, 'First argument' );
	ax = 1;
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'axis' ) {
			ns.assert.isOneOf( v, [ 0, 1 ], 'axis' );
			ax = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Check for the simple case where we're provided a range in row-major order and asked to operate across columns...
	if ( ax === 0 ) {
		M = x.length;
		N = x[ 0 ].length;
		for ( i = 0; i < M; i++ ) {
			ns.stats.cumax( N, x[ i ], 1, 0, x[ i ], 1, 0 );
		}
		return x;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.array.flatten2d( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		ns.stats.cumax( N, sarray, M, offset, sarray, M, offset );
		offset += 1;
	}
	// Check for a singleton dimension and whether we can avoid performing a copy...
	if ( M === 1 ) {
		return sarray;
	}
	// Reuse the input array as the output array...
	offset = 0;
	for ( i = 0; i < N; i++ ) {
		tmp = x[ i ];
		for ( j = 0; j < M; j++ ) {
			tmp[ j ] = sarray[ offset ];
			offset += 1;
		}
	}
	return x;
}
/**
* Computes the inverse versed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AVERSIN( 0.0 )
*
* @example
* STDLIB_AVERSIN( A1:A100 )
*
* @example
* STDLIB_AVERSIN( A1:D100 )
*
* @example
* STDLIB_AVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.aversin );
}
/**
* Computes the Bessel function of the first kind of order zero.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELJ0( 0.0 )
*
* @example
* STDLIB_BESSELJ0( A1:A100 )
*
* @example
* STDLIB_BESSELJ0( A1:D100 )
*
* @example
* STDLIB_BESSELJ0( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELJ0( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.besselj0 );
}
/**
* Computes the inverse coversed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOVERSIN( 0.0 )
*
* @example
* STDLIB_ACOVERSIN( A1:A100 )
*
* @example
* STDLIB_ACOVERSIN( A1:D100 )
*
* @example
* STDLIB_ACOVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acoversin );
}
/**
* Rounds a number toward positive infinity.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CEIL( 0.0 )
*
* @example
* STDLIB_CEIL( A1:A100 )
*
* @example
* STDLIB_CEIL( A1:D100 )
*
* @example
* STDLIB_CEIL( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CEIL( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil );
}
/**
* Computes the absolute value.
*
* @customfunction
* @param {Range} x - input ndarray
* @param {string} slice - option name for specifying a subsequence indexing expression for operating on an ndarray slice
* @param {string} sliceValue - subsequence string
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @param {string} view - option name for specifying whether to return a "view" of the input ndarray
* @param {boolean} viewValue - boolean indicating whether to return a "view" of the input ndarray
* @param {string} strict - option name for specifying whether to enforce strict bounds checking
* @param {boolean} strictValue - boolean indicating whether to enforce strict bounds checking
* @param {string} as - option name for specifying the presentation layout
* @param {string} asValue - as option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS( A1:A100 )
*
* @example
* STDLIB_ABS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_NDARRAY_ABS( x, slice, sliceValue, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue, view, viewValue, strict, strictValue, as, asValue ) { 
	var strides;
	var offset;
	var shape;
	var order;
	var ndims;
	var vhlen;
	var opts;
	var args;
	var data;
	var hlen;
	var obj;
	var out;
	var len;
	var buf;
	var s;
	var d;
	var o;
	var i;
	opts = {
		'slice': null,
		'strict': true,
		'view': false,
		'as': 'column' // FIXME: infer default based on orientation of `x`
	};
	obj = ns.ndarray.range2ndarray( x );
	hlen = obj.headerLength;
	x = obj.ndarray;
	args = [ null, null ];
	for ( i = 1; i < arguments.length; i++ ) {
		o = arguments[ i ];
		if ( o === 'as' || o === 'slice' || o === 'strict' || o === 'view' ) {
			i += 1;
			opts[ o ] = arguments[ i ];
			// TODO: validate as/strict/view option values
		} else {
			args.push( o );
		}
	}
	if ( opts.slice !== null ) {
		// Parse the provided indexing expression:
		s = ns.ndarray.seq2multislice( opts.slice, obj.shape, opts.strict );
		// Create the slice:
		x = ns.ndarray.slice( x, s, opts.strict, false );
	}
	len = x.length; // numel(x)
	shape = x.shape;
	strides = x.strides;
	offset = x.offset;
	order = x.order;
	data = x.data;
	ndims = shape.length;
	// Calculate the header length for the slice:
	vhlen = 9 + ndims + strides.length + (5*1); // TODO: use internal utility package instead of hardcoding
	// Check whether we need to return the same data buffer as the input array...
	if ( opts.view ) {
		// Copy the data to avoid mutation of the same elements over which we are iterating:
		buf = data.slice();
	}
	// Otherwise, return a fresh ndarray with data arranged contiguously...
	else {
		// Allocate a new data buffer which can accommodate the new header info and slice data:
		buf = ns.array.zeros( vhlen + len );
		// When returning a view, return elements in array iteration order...
		if ( ndims > 0 ) {
			strides = ns.ndarray.shape2strides( shape, order );
		} else {
			strides = [ 0 ];
		}
		// Reset the index offset as the strides should all be nonnegative integers:
		offset = vhlen;
	}
	// Set the input and output ndarray arguments:
	args[ 0 ] = x;
	args[ 1 ] = new ns.ndarray.ndarray( 'generic', buf, shape, strides, offset, order );
	// Perform element-wise computation:
	out = ns.math.tools.ndarray.unary( args, ns.math.abs );
	// If we are returning a view of the input data buffer, check whether we need to shift the data to account for less header info and thus ensure a compact representation...
	len = buf.length; // header + numel(out)
	if ( opts.view ) {
		if ( vhlen !== hlen ) {
			d = hlen - vhlen;
			buf.splice( vhlen, d );
			offset -= d;
		}
	}
	// TODO: do we need to consider a returned ndarray having a different dtype? ANSWER: no. Once we convert this to a scaffold, we can hard code the expected output dtype
	// Serialize the output ndarray to a range:
	return ns.ndarray.ndarray2range( out.data, len-vhlen, obj.dtype, out.shape, out.strides, offset-vhlen, out.order, opts.as ); 
}
/**
* Computes the hyperbolic arccosecant.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACSCH( 1.0 )
*
* @example
* STDLIB_ACSCH( A1:A100 )
*
* @example
* STDLIB_ACSCH( A1:D100 )
*
* @example
* STDLIB_ACSCH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACSCH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acsch );
}
/**
* Evaluates the cotangent of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COT( 0.1 )
*
* @example
* STDLIB_COT( A1:A100 )
*
* @example
* STDLIB_COT( A1:D100 )
*
* @example
* STDLIB_COT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cot );
}
/**
* Computes the inverse half-value versed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AHAVERSIN( 0.0 )
*
* @example
* STDLIB_AHAVERSIN( A1:A100 )
*
* @example
* STDLIB_AHAVERSIN( A1:D100 )
*
* @example
* STDLIB_AHAVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AHAVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ahaversin );
}
/**
* Computes the inverse cotangent of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOT( 2.0 )
*
* @example
* STDLIB_ACOT( A1:A100 )
*
* @example
* STDLIB_ACOT( A1:D100 )
*
* @example
* STDLIB_ACOT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acot );
}
/**
* Performs subtraction.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_SUB( -1.2, 3.1 )
*
* @example
* STDLIB_SUB( A1:A100, B1:B100 )
*
* @example
* STDLIB_SUB( A1:D100, 3.1 )
*
* @example
* STDLIB_SUB( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SUB( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.sub );
}
/**
* Evaluates the digamma function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_DIGAMMA( -2.5 )
*
* @example
* STDLIB_DIGAMMA( A1:A100 )
*
* @example
* STDLIB_DIGAMMA( A1:D100 )
*
* @example
* STDLIB_DIGAMMA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DIGAMMA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.digamma );
}
/**
* Computes the arccosine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOS( 1.0 )
*
* @example
* STDLIB_ACOS( A1:A100 )
*
* @example
* STDLIB_ACOS( A1:D100 )
*
* @example
* STDLIB_ACOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acos );
}
/**
* Evaluates Binet's formula extended to real numbers.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BINET( 0.0 )
*
* @example
* STDLIB_BINET( A1:A100 )
*
* @example
* STDLIB_BINET( A1:D100 )
*
* @example
* STDLIB_BINET( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BINET( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.binet );
}
/**
* Evaluates the Dirichlet eta function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ETA( -2.5 )
*
* @example
* STDLIB_ETA( A1:A100 )
*
* @example
* STDLIB_ETA( A1:D100 )
*
* @example
* STDLIB_ETA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ETA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.eta );
}
/**
* Computes the sine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_SIN( 0.0 )
*
* @example
* STDLIB_SIN( A1:A100 )
*
* @example
* STDLIB_SIN( A1:D100 )
*
* @example
* STDLIB_SIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.sin );
}
/**
* Computes the absolute value.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS( -1.2 )
*
* @example
* STDLIB_ABS( A1:A100 )
*
* @example
* STDLIB_ABS( A1:D100 )
*
* @example
* STDLIB_ABS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ABS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.abs );
}
/**
* Computes the cube root.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CBRT( 64.0 )
*
* @example
* STDLIB_CBRT( A1:A100 )
*
* @example
* STDLIB_CBRT( A1:D100 )
*
* @example
* STDLIB_CBRT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CBRT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cbrt );
}
/**
* Evaluates the base 2 exponential function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_EXP2( 4.0 )
*
* @example
* STDLIB_EXP2( A1:A100 )
*
* @example
* STDLIB_EXP2( A1:D100 )
*
* @example
* STDLIB_EXP2( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXP2( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.exp2 );
}
/**
* Computes the hyperbolic arccosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOSH( 1.0 )
*
* @example
* STDLIB_ACOSH( A1:A100 )
*
* @example
* STDLIB_ACOSH( A1:D100 )
*
* @example
* STDLIB_ACOSH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOSH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acosh );
}
/**
* Evaluates the natural exponential function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_EXP( 4.0 )
*
* @example
* STDLIB_EXP( A1:A100 )
*
* @example
* STDLIB_EXP( A1:D100 )
*
* @example
* STDLIB_EXP( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXP( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.exp );
}
/**
* Computes the cosine of a number times π.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COSPI( 0.0 )
*
* @example
* STDLIB_COSPI( A1:A100 )
*
* @example
* STDLIB_COSPI( A1:D100 )
*
* @example
* STDLIB_COSPI( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSPI( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cospi );
}
/**
* Computes the sum.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_ADD( -1.2, 3.1 )
*
* @example
* STDLIB_ADD( A1:A100, B1:B100 )
*
* @example
* STDLIB_ADD( A1:D100, 3.1 )
*
* @example
* STDLIB_ADD( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ADD( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.add );
}
/**
* Converts an angle from degrees to radians.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_DEG2RAD( 90.0 )
*
* @example
* STDLIB_DEG2RAD( A1:A100 )
*
* @example
* STDLIB_DEG2RAD( A1:D100 )
*
* @example
* STDLIB_DEG2RAD( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_DEG2RAD( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.deg2rad );
}
/**
* Computes the hyperbolic arcsine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ASINH( 1.0 )
*
* @example
* STDLIB_ASINH( A1:A100 )
*
* @example
* STDLIB_ASINH( A1:D100 )
*
* @example
* STDLIB_ASINH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ASINH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.asinh );
}
/**
* Computes the hyperbolic cotangent of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COTH( -2.0 )
*
* @example
* STDLIB_COTH( A1:A100 )
*
* @example
* STDLIB_COTH( A1:D100 )
*
* @example
* STDLIB_COTH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COTH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.coth );
}
/**
* Computes the arccosine (in degrees) of a double-precision floating-point number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOSD( 1.0 )
*
* @example
* STDLIB_ACOSD( A1:A100 )
*
* @example
* STDLIB_ACOSD( A1:D100 )
*
* @example
* STDLIB_ACOSD( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOSD( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acosd );
}
/**
* Computes the relative error exponential.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_EXPM1REL( 0.0 )
*
* @example
* STDLIB_EXPM1REL( A1:A100 )
*
* @example
* STDLIB_EXPM1REL( A1:D100 )
*
* @example
* STDLIB_EXPM1REL( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXPM1REL( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.expm1rel );
}
/**
* Computes the coversed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COVERCOS( -2.0 )
*
* @example
* STDLIB_COVERCOS( A1:A100 )
*
* @example
* STDLIB_COVERCOS( A1:D100 )
*
* @example
* STDLIB_COVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.covercos );
}
/**
* Computes the coversed sine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COVERSIN( -2.0 )
*
* @example
* STDLIB_COVERSIN( A1:A100 )
*
* @example
* STDLIB_COVERSIN( A1:D100 )
*
* @example
* STDLIB_COVERSIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COVERSIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.coversin );
}
/**
* Computes the principal root.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_SQRT( 64.0 )
*
* @example
* STDLIB_SQRT( A1:A100 )
*
* @example
* STDLIB_SQRT( A1:D100 )
*
* @example
* STDLIB_SQRT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_SQRT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.sqrt );
}
/**
* Computes the inverse cotangent of a number (in degrees).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOTD( 1.0 )
*
* @example
* STDLIB_ACOTD( A1:A100 )
*
* @example
* STDLIB_ACOTD( A1:D100 )
*
* @example
* STDLIB_ACOTD( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOTD( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acotd );
}
/**
* Computes the inverse coversed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACOVERCOS( 0.0 )
*
* @example
* STDLIB_ACOVERCOS( A1:A100 )
*
* @example
* STDLIB_ACOVERCOS( A1:D100 )
*
* @example
* STDLIB_ACOVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACOVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acovercos );
}
/**
* Computes the inverse half-value versed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AHAVERCOS( 0.0 )
*
* @example
* STDLIB_AHAVERCOS( A1:A100 )
*
* @example
* STDLIB_AHAVERCOS( A1:D100 )
*
* @example
* STDLIB_AHAVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AHAVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ahavercos );
}
/**
* Computes the product.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_MUL( -1.2, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:B100 )
*
* @example
* STDLIB_MUL( A1:D100, 3.1 )
*
* @example
* STDLIB_MUL( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_MUL( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.mul );
}
/**
* Computes the Bessel function of the second kind of order one.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELY1( 0.0 )
*
* @example
* STDLIB_BESSELY1( A1:A100 )
*
* @example
* STDLIB_BESSELY1( A1:D100 )
*
* @example
* STDLIB_BESSELY1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELY1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bessely1 );
}
/**
* Computes the Bessel function of the second kind of order zero.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELY0( 0.0 )
*
* @example
* STDLIB_BESSELY0( A1:A100 )
*
* @example
* STDLIB_BESSELY0( A1:D100 )
*
* @example
* STDLIB_BESSELY0( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELY0( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bessely0 );
}
/**
* Computes exp(x)-1, where exp(x) is the natural exponential function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_EXPM1( 4.0 )
*
* @example
* STDLIB_EXPM1( A1:A100 )
*
* @example
* STDLIB_EXPM1( A1:D100 )
*
* @example
* STDLIB_EXPM1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXPM1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.expm1 );
}
/**
* Computes the squared absolute value.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ABS2( -1.2 )
*
* @example
* STDLIB_ABS2( A1:A100 )
*
* @example
* STDLIB_ABS2( A1:D100 )
*
* @example
* STDLIB_ABS2( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ABS2( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.abs2 );
}
/**
* Evaluates the inverse error function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ERFINV( 0.5 )
*
* @example
* STDLIB_ERFINV( A1:A100 )
*
* @example
* STDLIB_ERFINV( A1:D100 )
*
* @example
* STDLIB_ERFINV( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERFINV( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erfinv );
}
/**
* Computes the arctangent of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ATAN( 1.0 )
*
* @example
* STDLIB_ATAN( A1:A100 )
*
* @example
* STDLIB_ATAN( A1:D100 )
*
* @example
* STDLIB_ATAN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ATAN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.atan );
}
/**
* Evaluates the base 10 exponential function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_EXP10( 4.0 )
*
* @example
* STDLIB_EXP10( A1:A100 )
*
* @example
* STDLIB_EXP10( A1:D100 )
*
* @example
* STDLIB_EXP10( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXP10( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.exp10 );
}
/**
* Computes the complete elliptic integral of the first kind.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ELLIPK( -2.5 )
*
* @example
* STDLIB_ELLIPK( A1:A100 )
*
* @example
* STDLIB_ELLIPK( A1:D100 )
*
* @example
* STDLIB_ELLIPK( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ELLIPK( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ellipk );
}
/**
* Rounds a number to the nearest power of 2 toward positive infinity.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CEIL2( -4.2 )
*
* @example
* STDLIB_CEIL2( A1:A100 )
*
* @example
* STDLIB_CEIL2( A1:D100 )
*
* @example
* STDLIB_CEIL2( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CEIL2( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil2 );
}
/**
* Computes the Bessel function of the first kind of order one.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BESSELJ1( 0.0 )
*
* @example
* STDLIB_BESSELJ1( A1:A100 )
*
* @example
* STDLIB_BESSELJ1( A1:D100 )
*
* @example
* STDLIB_BESSELJ1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BESSELJ1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.besselj1 );
}
/**
* Rounds a number to the nearest power of 10 toward positive infinity.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_CEIL10( 0.0 )
*
* @example
* STDLIB_CEIL10( A1:A100 )
*
* @example
* STDLIB_CEIL10( A1:D100 )
*
* @example
* STDLIB_CEIL10( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_CEIL10( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ceil10 );
}
/**
* Computes the hyperbolic arctangent.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ATANH( 1.0 )
*
* @example
* STDLIB_ATANH( A1:A100 )
*
* @example
* STDLIB_ATANH( A1:D100 )
*
* @example
* STDLIB_ATANH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ATANH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.atanh );
}
/**
* Computes the arcsine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ASIN( 1.0 )
*
* @example
* STDLIB_ASIN( A1:A100 )
*
* @example
* STDLIB_ASIN( A1:D100 )
*
* @example
* STDLIB_ASIN( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ASIN( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.asin );
}
/**
* Computes the complete elliptic integral of the second kind.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ELLIPE( -2.5 )
*
* @example
* STDLIB_ELLIPE( A1:A100 )
*
* @example
* STDLIB_ELLIPE( A1:D100 )
*
* @example
* STDLIB_ELLIPE( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ELLIPE( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.ellipe );
}
/**
* Evaluates the exponential function.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_POW( 2.0, 3.0 )
*
* @example
* STDLIB_POW( A1:A100, B1:B100 )
*
* @example
* STDLIB_POW( A1:D100, 3.0 )
*
* @example
* STDLIB_POW( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_POW( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.pow );
}
/**
* Computes the arccosecant.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ACSC( 1.0 )
*
* @example
* STDLIB_ACSC( A1:A100 )
*
* @example
* STDLIB_ACSC( A1:D100 )
*
* @example
* STDLIB_ACSC( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ACSC( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.acsc );
}
/**
* Rounds a number to the nearest multiple of 10^n toward negative infinity.
*
* @customfunction
* @param {number|Range<number>} x - input value(s)
* @param {number|Range<number>} y - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {Range<number>} result(s)
*
* @example
* STDLIB_FLOORN( 3.141592653589793, -4 )
*
* @example
* STDLIB_FLOORN( A1:A100, B1:B100 )
*
* @example
* STDLIB_FLOORN( A1:D100, -4 )
*
* @example
* STDLIB_FLOORN( A1:A100, B1:E100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_FLOORN( x, y, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.binary( args, ns.math.floorn );
}
/**
* Computes the nth Bernoulli number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_BERNOULLI( 0 )
*
* @example
* STDLIB_BERNOULLI( A1:A100 )
*
* @example
* STDLIB_BERNOULLI( A1:D100 )
*
* @example
* STDLIB_BERNOULLI( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_BERNOULLI( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.bernoulli );
}
/**
* Evaluates the Riemann zeta function as a function of a real variable.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ZETA( 1.2 )
*
* @example
* STDLIB_ZETA( A1:A100 )
*
* @example
* STDLIB_ZETA( A1:D100 )
*
* @example
* STDLIB_ZETA( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ZETA( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.zeta );
}
/**
* Computes the cosine of a number (in radians).
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COS( 0.0 )
*
* @example
* STDLIB_COS( A1:A100 )
*
* @example
* STDLIB_COS( A1:D100 )
*
* @example
* STDLIB_COS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cos );
}
/**
* Evaluates the complementary error function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ERFC( -2.5 )
*
* @example
* STDLIB_ERFC( A1:A100 )
*
* @example
* STDLIB_ERFC( A1:D100 )
*
* @example
* STDLIB_ERFC( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERFC( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erfc );
}
/**
* Computes the inverse versed cosine.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_AVERCOS( 0.0 )
*
* @example
* STDLIB_AVERCOS( A1:A100 )
*
* @example
* STDLIB_AVERCOS( A1:D100 )
*
* @example
* STDLIB_AVERCOS( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_AVERCOS( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.avercos );
}
/**
* Evaluates the inverse complementary error function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ERFCINV( 1.5 )
*
* @example
* STDLIB_ERFCINV( A1:A100 )
*
* @example
* STDLIB_ERFCINV( A1:D100 )
*
* @example
* STDLIB_ERFCINV( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERFCINV( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erfcinv );
}
/**
* Computes cos(x)-1.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COSM1( 0.0 )
*
* @example
* STDLIB_COSM1( A1:A100 )
*
* @example
* STDLIB_COSM1( A1:D100 )
*
* @example
* STDLIB_COSM1( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSM1( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cosm1 );
}
/**
* Evaluates the error function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_ERF( -2.5 )
*
* @example
* STDLIB_ERF( A1:A100 )
*
* @example
* STDLIB_ERF( A1:D100 )
*
* @example
* STDLIB_ERF( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_ERF( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.erf );
}
/**
* Computes the standard logistic function.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_EXPIT( 0.0 )
*
* @example
* STDLIB_EXPIT( A1:A100 )
*
* @example
* STDLIB_EXPIT( A1:D100 )
*
* @example
* STDLIB_EXPIT( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_EXPIT( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.expit );
}
/**
* Computes the hyperbolic cosine of a number.
*
* @customfunction
* @param {number|Range<number>} value - input value(s)
* @param {string} nonnumeric - option name for specifying the value to return in place of raising an exception when an input value is not a number
* @param {*} nonnumericValue - non-numeric option value
* @param {string} nan - option name for specifying the value to return in place of `NaN`
* @param {*} nanValue - `NaN` option value
* @param {string} pinf - option name for specifying the value to return in place of positive infinity
* @param {*} pinfValue - positive infinity option value
* @param {string} ninf - option name for specifying the value to return in place of negative infinity
* @param {*} ninfValue - negative infinity option value
* @returns {number|Range<number>} result(s)
*
* @example
* STDLIB_COSH( 0.0 )
*
* @example
* STDLIB_COSH( A1:A100 )
*
* @example
* STDLIB_COSH( A1:D100 )
*
* @example
* STDLIB_COSH( A1:A100, "nan", "", "pinf", "", "ninf", "" )
*/
function STDLIB_COSH( value, nonnumeric, nonnumericValue, nan, nanValue, pinf, pinfValue, ninf, ninfValue ) { 
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	return ns.math.tools.unary( args, ns.math.cosh );
}
/**
* Generates a linearly spaced range over a specified interval.
*
* ## Notes
*
* -   If `length` is `1`, the function returns a range containing `stop`, but not `start`, when the endpoint option is `TRUE`; otherwise, the function returns a range containing `start`, but not `stop`.
* -   When the output array length is greater than `1` and endpoint option value is `TRUE`, the output range is guaranteed to include the interval start and end values. Beware, however, that values between the interval start and end values are subject to floating-point rounding errors.
* -   When the endpoint option value is `FALSE`, the function generates `length + 1` linearly spaced values over the interval `[start, stop]` and only writes `length` values to the output range, thus excluding `stop` from the output range. Accordingly, for a fixed `length`, the spacing between adjacent values in the output range changes depending on the endpoint option value.
* -   By default, the function generates a linearly spaced range over the closed interval `[start, stop]`. To generate linearly spaced values over the half-open interval `[start, stop)`, set the endpoint option value to `FALSE`.
* -   If `start` is less than `stop`, the output range will contain ascending values, and, if `start` is greater than `stop`, the output range will contain descending values.
*
* @customfunction
* @param {number} start - start of interval
* @param {number} stop - end of interval
* @param {integer} length - range length
* @param {string} endpoint - endpoint option name
* @param {boolean} endpointValue - endpoint option value indicating whether to include the stop value in the output range (default: `TRUE`)
* @returns {Range<number>} linearly spaced range
*
* @example
* STDLIB_LINSPACE( 1, 10, 100 )
*
* @example
* STDLIB_LINSPACE( 1, 10, 100, "endpoint", FALSE )
*/
function STDLIB_LINSPACE( start, stop, length, endpoint, endpointValue ) { 
	var opts;
	var o;
	var v;
	var i;
	ns.assert.isNumber( start, 'Start of interval' );
	ns.assert.isNumber( stop, 'End of interval' );
	ns.assert.isPositiveInteger( length, 'Range length' );
	opts = {
		'dtype': 'generic'
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		v = arguments[ i+1 ];
		if ( o === 'endpoint' ) {
			ns.assert.isBoolean( v, 'Endpoint' );
			opts[ o ] = v;
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	return ns.array.linspace( start, stop, length, opts );
}
/**
* Fills one or more cells with a specified value.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @param {*} value - fill value
* @returns {Range} filled range
*
* @example
* STDLIB_FULL( 10, 1, 5 )
*
* @example
* STDLIB_FULL( 10, 1, "beep" )
*/
function STDLIB_FULL( nrows, ncols, value ) {
	ns.assert.isPositiveInteger( nrows, 'Number of rows' );
	ns.assert.isPositiveInteger( ncols, 'Number of columns' );
	return ns.array.filled2d( value, [ nrows, ncols ] );
}
/**
* Fills one or more cells with ones.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @returns {Range<integer>} ones
*
* @example
* STDLIB_ONES( 10, 1 )
*/
function STDLIB_ONES( nrows, ncols ) {
	ns.assert.isPositiveInteger( nrows, 'Number of rows' );
	ns.assert.isPositiveInteger( ncols, 'Number of columns' );
	return ns.array.ones2d( [ nrows, ncols ] );
}
/**
* Fills one or more cells with zeros.
*
* @customfunction
* @param {integer} nrows - number of rows
* @param {integer} ncols - number of columns
* @returns {Range<integer>} zeros
*
* @example
* STDLIB_ZEROS( 10, 1 )
*/
function STDLIB_ZEROS( nrows, ncols ) {
	ns.assert.isPositiveInteger( nrows, 'Number of rows' );
	ns.assert.isPositiveInteger( ncols, 'Number of columns' );
	return ns.array.zeros2d( [ nrows, ncols ] );
}
