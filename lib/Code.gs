/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Xc=s((iLe,Hc)=>{"use strict";var Cpr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Hc.exports=Cpr});var Jc=s((aLe,xc)=>{"use strict";var Vpr=Xc();function Gpr(){try{return Vpr({},"x",{}),!0}catch{return!1}}xc.exports=Gpr});var $c=s((nLe,Yc)=>{"use strict";var Upr=Object.defineProperty;Yc.exports=Upr});var U1=s((sLe,Zc)=>{"use strict";function Dpr(r){return typeof r=="number"}Zc.exports=Dpr});var D1=s((uLe,Kc)=>{"use strict";function zpr(r){return r[0]==="-"}function Qc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Wpr(r,e,t){var i=!1,a=e-r.length;return a<0||(zpr(r)&&(i=!0,r=r.substr(1)),r=t?r+Qc(a):Qc(a)+r,i&&(r="-"+r)),r}Kc.exports=Wpr});var il=s((oLe,tl)=>{"use strict";var Hpr=U1(),rl=D1(),Xpr=String.prototype.toLowerCase,el=String.prototype.toUpperCase;function xpr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Hpr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=rl(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=rl(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===el.call(r.specifier)?el.call(t):Xpr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}tl.exports=xpr});var nl=s((vLe,al)=>{"use strict";function Jpr(r){return typeof r=="string"}al.exports=Jpr});var ol=s((fLe,ul)=>{"use strict";var Ypr=U1(),$pr=Math.abs,Zpr=String.prototype.toLowerCase,sl=String.prototype.toUpperCase,Ji=String.prototype.replace,Qpr=/e\+(\d)$/,Kpr=/e-(\d)$/,rdr=/^(\d+)$/,edr=/^(\d+)e/,tdr=/\.0$/,idr=/\.0*e/,adr=/(\..*[^0])0*e/;function ndr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Ypr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":$pr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Ji.call(t,adr,"$1e"),t=Ji.call(t,idr,"e"),t=Ji.call(t,tdr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ji.call(t,Qpr,"e+0$1"),t=Ji.call(t,Kpr,"e-0$1"),r.alternate&&(t=Ji.call(t,rdr,"$1."),t=Ji.call(t,edr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===sl.call(r.specifier)?sl.call(t):Zpr.call(t),t}ul.exports=ndr});var cl=s((cLe,fl)=>{"use strict";function vl(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function sdr(r,e,t){var i=e-r.length;return i<0||(r=t?r+vl(i):vl(i)+r),r}fl.exports=sdr});var pl=s((lLe,ll)=>{"use strict";var udr=il(),odr=nl(),vdr=ol(),fdr=cl(),cdr=D1(),ldr=String.fromCharCode,X0=isNaN,pdr=Array.isArray;function ddr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function gdr(r){var e,t,i,a,n,u,o,v,f;if(!pdr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],odr(i))u+=i;else{if(e=i.precision!==void 0,i=ddr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,X0(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,X0(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=udr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!X0(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=X0(n)?String(i.arg):ldr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=vdr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=cdr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fdr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}ll.exports=gdr});var gl=s((pLe,dl)=>{"use strict";var mdr=pl();dl.exports=mdr});var yl=s((dLe,ml)=>{"use strict";var x0=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ydr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function hdr(r){var e,t,i,a;for(t=[],a=0,i=x0.exec(r);i;)e=r.slice(a,x0.lastIndex-i[0].length),e.length&&t.push(e),t.push(ydr(i)),a=x0.lastIndex,i=x0.exec(r);return e=r.slice(a),e.length&&t.push(e),t}ml.exports=hdr});var ql=s((gLe,hl)=>{"use strict";var qdr=yl();hl.exports=qdr});var wl=s((mLe,bl)=>{"use strict";function bdr(r){return typeof r=="string"}bl.exports=bdr});var Nl=s((yLe,Sl)=>{"use strict";var wdr=gl(),Edr=ql(),Sdr=wl();function El(r){var e,t,i;if(!Sdr(r))throw new TypeError(El("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Edr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return wdr.apply(null,t)}Sl.exports=El});var V=s((hLe,Ol)=>{"use strict";var Ndr=Nl();Ol.exports=Ndr});var Pl=s((qLe,Rl)=>{"use strict";var _l=V(),ya=Object.prototype,Al=ya.toString,Tl=ya.__defineGetter__,Il=ya.__defineSetter__,Odr=ya.__lookupGetter__,_dr=ya.__lookupSetter__;function Adr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||Al.call(r)==="[object Array]")throw new TypeError(_l("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Al.call(t)==="[object Array]")throw new TypeError(_l("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(Odr.call(r,e)||_dr.call(r,e)?(i=r.__proto__,r.__proto__=ya,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Tl&&Tl.call(r,e,t.get),u&&Il&&Il.call(r,e,t.set),r}Rl.exports=Adr});var ni=s((bLe,Ll)=>{"use strict";var Tdr=Jc(),Idr=$c(),Rdr=Pl(),z1;Tdr()?z1=Idr:z1=Rdr;Ll.exports=z1});var jl=s((wLe,Fl)=>{"use strict";var Pdr=ni();function Ldr(r,e,t){Pdr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Fl.exports=Ldr});var D=s((ELe,Ml)=>{"use strict";var Fdr=jl();Ml.exports=Fdr});var kl=s((SLe,Bl)=>{"use strict";var jdr=ni();function Mdr(r,e,t){jdr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Bl.exports=Mdr});var Qr=s((NLe,Cl)=>{"use strict";var Bdr=kl();Cl.exports=Bdr});var Gl=s((OLe,Vl)=>{"use strict";function kdr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}Vl.exports=kdr});var In=s((_Le,Ul)=>{"use strict";var Cdr=Gl();Ul.exports=Cdr});var zl=s((ALe,Dl)=>{"use strict";function Vdr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Dl.exports=Vdr});var Rn=s((TLe,Wl)=>{"use strict";var Gdr=zl();Wl.exports=Gdr});var Xl=s((ILe,Hl)=>{"use strict";var Udr=Rn();function Ddr(r){return Udr(0,r)}Hl.exports=Ddr});var si=s((RLe,xl)=>{"use strict";var zdr=Xl();xl.exports=zdr});var $l=s((PLe,Yl)=>{"use strict";var Pn=In(),Wdr=si(),Jl=V();function Hdr(r,e,t){var i,a,n,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(n=Wdr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],a=t[f],a!==0&&a<v)throw new Error(Jl("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Pn(e).join(", "),Pn(t).join(", "),f));if(v===a)n[f]=1;else if(v===1)n[f]=0;else throw new Error(Jl("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Pn(e).join(", "),Pn(t).join(", "),f))}return{ref:r,data:i,shape:Pn(t),strides:n}}Yl.exports=Hdr});var W1=s((LLe,Zl)=>{"use strict";var Xdr=$l();Zl.exports=Xdr});var r5=s((FLe,Kl)=>{"use strict";var Ql=W1();function xdr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N;if(q=e[2],o=q[1],v=q[0],!(o<=0||v<=0))for(_=Ql(r[0],e[0],q),b=_.data,w=_.strides,i=w[1],a=w[0],_=Ql(r[1],e[1],q),T=_.data,w=_.strides,n=w[1],u=w[0],N=r[2],p=0,y=0,c=0;c<v;c++){for(l=0,m=0,g=b[p],d=T[y],h=N[c],f=0;f<o;f++)h[f]=t(g[l],d[m]),l+=i,m+=n;p+=a,y+=u}}Kl.exports=xdr});var H1=s((jLe,e5)=>{"use strict";var Jdr=r5();e5.exports=Jdr});var i5=s((MLe,t5)=>{"use strict";var X1=W1();function Ydr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M;if(N=e[3],f=N[1],c=N[0],!(f<=0||c<=0))for(S=X1(r[0],e[0],N),I=S.data,O=S.strides,i=O[1],a=O[0],S=X1(r[1],e[1],N),E=S.data,O=S.strides,n=O[1],u=O[0],S=X1(r[2],e[2],N),L=S.data,O=S.strides,o=O[1],v=O[0],M=r[3],y=0,d=0,q=0,p=0;p<c;p++){for(m=0,g=0,h=0,w=I[y],_=E[d],b=L[q],T=M[p],l=0;l<f;l++)T[l]=t(w[m],_[g],b[h]),m+=i,g+=n,h+=o;y+=a,d+=u,q+=v}}t5.exports=Ydr});var x1=s((BLe,a5)=>{"use strict";var $dr=i5();a5.exports=$dr});var s5=s((kLe,n5)=>{"use strict";function Zdr(r){var e,t,i,a,n,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(a=r[0],f=a.length,v===1){for(c=0;c<f;c++)t.push(a[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(n=e[0]-f+c,n>=0?i=a[n]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}n5.exports=Zdr});var J0=s((CLe,u5)=>{"use strict";var Qdr=s5();u5.exports=Qdr});var v5=s((VLe,o5)=>{"use strict";var Kdr=Rn();function rgr(r,e){var t,i,a,n;for(i=e[1],a=e[0],t=[],n=0;n<a;n++)t.push(Kdr(r,i));return t}o5.exports=rgr});var Y0=s((GLe,f5)=>{"use strict";var egr=v5();f5.exports=egr});var l5=s((ULe,c5)=>{"use strict";function tgr(r,e,t){var i,a,n,u,o,v;for(n=r[1],u=r[0],i=[],o=0;o<u;o++){for(a=[],v=0;v<n;v++)a.push(e.call(t,[o,v]));i.push(a)}return i}c5.exports=tgr});var d5=s((DLe,p5)=>{"use strict";var igr=l5();p5.exports=igr});var m5=s((zLe,g5)=>{"use strict";function agr(r){var e,t,i,a,n,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],n=0;n<t;n++)for(a=r[n],u=0;u<i;u++)e.push(a[u]);return e}g5.exports=agr});var h5=s((WLe,y5)=>{"use strict";function ngr(r,e,t,i){var a,n,u,o,v,f;for(n=r.length,u=r[0].length,a=i,v=0;v<n;v++)for(o=r[v],f=0;f<u;f++)e[a]=o[f],a+=t;return e}y5.exports=ngr});var $0=s((HLe,b5)=>{"use strict";var sgr=D(),q5=m5(),ugr=h5();sgr(q5,"assign",ugr);b5.exports=q5});var E5=s((XLe,w5)=>{"use strict";var ogr=/./;w5.exports=ogr});var J1=s((xLe,S5)=>{"use strict";function vgr(r){return typeof r=="boolean"}S5.exports=vgr});var O5=s((JLe,N5)=>{"use strict";function fgr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}N5.exports=fgr});var A5=s((YLe,_5)=>{"use strict";var cgr=O5();_5.exports=cgr});var I5=s(($Le,T5)=>{"use strict";var lgr=A5(),pgr=lgr();function dgr(){return pgr&&typeof Symbol.toStringTag=="symbol"}T5.exports=dgr});var ha=s((ZLe,R5)=>{"use strict";var ggr=I5();R5.exports=ggr});var Y1=s((QLe,P5)=>{"use strict";var mgr=Object.prototype.toString;P5.exports=mgr});var F5=s((KLe,L5)=>{"use strict";var ygr=Y1();function hgr(r){return ygr.call(r)}L5.exports=hgr});var M5=s((rFe,j5)=>{"use strict";var qgr=Object.prototype.hasOwnProperty;function bgr(r,e){return r==null?!1:qgr.call(r,e)}j5.exports=bgr});var vr=s((eFe,B5)=>{"use strict";var wgr=M5();B5.exports=wgr});var C5=s((tFe,k5)=>{"use strict";var Egr=typeof Symbol=="function"?Symbol:void 0;k5.exports=Egr});var $1=s((iFe,V5)=>{"use strict";var Sgr=C5();V5.exports=Sgr});var D5=s((aFe,U5)=>{"use strict";var G5=$1(),Ngr=typeof G5=="function"?G5.toStringTag:"";U5.exports=Ngr});var W5=s((nFe,z5)=>{"use strict";var Ogr=vr(),Ln=D5(),Z1=Y1();function _gr(r){var e,t,i;if(r==null)return Z1.call(r);t=r[Ln],e=Ogr(r,Ln);try{r[Ln]=void 0}catch{return Z1.call(r)}return i=Z1.call(r),e?r[Ln]=t:delete r[Ln],i}z5.exports=_gr});var re=s((sFe,H5)=>{"use strict";var Agr=ha(),Tgr=F5(),Igr=W5(),Q1;Agr()?Q1=Igr:Q1=Tgr;H5.exports=Q1});var x5=s((uFe,X5)=>{"use strict";var Rgr=Boolean;X5.exports=Rgr});var K1=s((oFe,J5)=>{"use strict";var Pgr=x5();J5.exports=Pgr});var $5=s((vFe,Y5)=>{"use strict";var Lgr=Boolean.prototype.toString;Y5.exports=Lgr});var Q5=s((fFe,Z5)=>{"use strict";var Fgr=$5();function jgr(r){try{return Fgr.call(r),!0}catch{return!1}}Z5.exports=jgr});var r2=s((cFe,K5)=>{"use strict";var Mgr=ha(),Bgr=re(),kgr=K1(),Cgr=Q5(),Vgr=Mgr();function Ggr(r){return typeof r=="object"?r instanceof kgr?!0:Vgr?Cgr(r):Bgr(r)==="[object Boolean]":!1}K5.exports=Ggr});var e8=s((lFe,r8)=>{"use strict";var Ugr=J1(),Dgr=r2();function zgr(r){return Ugr(r)||Dgr(r)}r8.exports=zgr});var de=s((pFe,i8)=>{"use strict";var t8=D(),e2=e8(),Wgr=J1(),Hgr=r2();t8(e2,"isPrimitive",Wgr);t8(e2,"isObject",Hgr);i8.exports=e2});var n8=s((dFe,a8)=>{"use strict";function Xgr(){return new Function("return this;")()}a8.exports=Xgr});var u8=s((gFe,s8)=>{"use strict";var xgr=typeof self=="object"?self:null;s8.exports=xgr});var v8=s((mFe,o8)=>{"use strict";var Jgr=typeof window=="object"?window:null;o8.exports=Jgr});var c8=s((yFe,f8)=>{"use strict";var Ygr=typeof globalThis=="object"?globalThis:null;f8.exports=Ygr});var t2=s((hFe,g8)=>{"use strict";var $gr=de().isPrimitive,Zgr=V(),Qgr=n8(),l8=u8(),p8=v8(),d8=c8();function Kgr(r){if(arguments.length){if(!$gr(r))throw new TypeError(Zgr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Qgr()}if(d8)return d8;if(l8)return l8;if(p8)return p8;throw new Error("unexpected error. Unable to resolve global object.")}g8.exports=Kgr});var h8=s((qFe,y8)=>{"use strict";var rmr=t2(),m8=rmr(),emr=m8.document&&m8.document.childNodes;y8.exports=emr});var b8=s((bFe,q8)=>{"use strict";var tmr=Int8Array;q8.exports=tmr});var E8=s((wFe,w8)=>{"use strict";var imr=E5(),amr=h8(),nmr=b8();function smr(){return typeof imr=="function"||typeof nmr=="object"||typeof amr=="function"}w8.exports=smr});var i2=s((EFe,S8)=>{"use strict";function umr(){return/^\s*function\s*([^(]*)/i}S8.exports=umr});var O8=s((SFe,N8)=>{"use strict";var omr=i2(),vmr=omr();N8.exports=vmr});var a2=s((NFe,A8)=>{"use strict";var fmr=D(),_8=i2(),cmr=O8();fmr(_8,"REGEXP",cmr);A8.exports=_8});var I8=s((OFe,T8)=>{"use strict";var lmr=re(),n2;function pmr(r){return lmr(r)==="[object Array]"}Array.isArray?n2=Array.isArray:n2=pmr;T8.exports=n2});var qe=s((_Fe,R8)=>{"use strict";var dmr=I8();R8.exports=dmr});var L8=s((AFe,P8)=>{"use strict";var gmr=qe(),mmr=V();function ymr(r){if(typeof r!="function")throw new TypeError(mmr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!gmr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}P8.exports=ymr});var j8=s((TFe,F8)=>{"use strict";var hmr=L8();F8.exports=hmr});var B8=s((IFe,M8)=>{"use strict";function qmr(r){return r!==null&&typeof r=="object"}M8.exports=qmr});var u2=s((RFe,k8)=>{"use strict";var bmr=D(),wmr=j8(),s2=B8(),Emr=wmr(s2);bmr(s2,"isObjectLikeArray",Emr);k8.exports=s2});var V8=s((PFe,C8)=>{"use strict";var Smr=u2();function Nmr(r){return Smr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}C8.exports=Nmr});var Yi=s((LFe,G8)=>{"use strict";var Omr=V8();G8.exports=Omr});var D8=s((FFe,U8)=>{"use strict";var _mr=re(),Amr=a2().REGEXP,Tmr=Yi();function Imr(r){var e,t,i;if(t=_mr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Amr.exec(i.toString()),e)return e[1]}return Tmr(r)?"Buffer":t}U8.exports=Imr});var ui=s((jFe,z8)=>{"use strict";var Rmr=D8();z8.exports=Rmr});var H8=s((MFe,W8)=>{"use strict";var Pmr=ui();function Lmr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Pmr(r).toLowerCase():e)}W8.exports=Lmr});var x8=s((BFe,X8)=>{"use strict";var Fmr=ui();function jmr(r){return Fmr(r).toLowerCase()}X8.exports=jmr});var Z0=s((kFe,J8)=>{"use strict";var Mmr=E8(),Bmr=H8(),kmr=x8(),Cmr=Mmr()?kmr:Bmr;J8.exports=Cmr});var $8=s((CFe,Y8)=>{"use strict";var Vmr=Z0();function Gmr(r){return Vmr(r)==="function"}Y8.exports=Gmr});var qr=s((VFe,Z8)=>{"use strict";var Umr=$8();Z8.exports=Umr});var K8=s((GFe,Q8)=>{"use strict";var Dmr=Math.floor;Q8.exports=Dmr});var Ur=s((UFe,r7)=>{"use strict";var zmr=K8();r7.exports=zmr});var t7=s((DFe,e7)=>{"use strict";var Wmr=Ur();function Hmr(r){return Wmr(r)===r}e7.exports=Hmr});var Se=s((zFe,i7)=>{"use strict";var Xmr=t7();i7.exports=Xmr});var n7=s((WFe,a7)=>{"use strict";var xmr=9007199254740991;a7.exports=xmr});var u7=s((HFe,s7)=>{"use strict";var Jmr=Se(),Ymr=n7();function $mr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Jmr(r.length)&&r.length>=0&&r.length<=Ymr}s7.exports=$mr});var Ve=s((XFe,o7)=>{"use strict";var Zmr=u7();o7.exports=Zmr});var f7=s((xFe,v7)=>{"use strict";var Qmr=qr();function Kmr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Qmr(r.next)}v7.exports=Kmr});var l7=s((JFe,c7)=>{"use strict";var ryr=f7();c7.exports=ryr});var g7=s((YFe,d7)=>{"use strict";var p7="function";function eyr(r){return typeof r.get===p7&&typeof r.set===p7}d7.exports=eyr});var qa=s(($Fe,m7)=>{"use strict";var tyr=g7();m7.exports=tyr});var q7=s((ZFe,h7)=>{"use strict";var y7={complex128:iyr,complex64:ayr,default:nyr};function iyr(r,e,t){r.set(t,e)}function ayr(r,e,t){r.set(t,e)}function nyr(r,e,t){r.set(t,e)}function syr(r){var e=y7[r];return typeof e=="function"?e:y7.default}h7.exports=syr});var Q0=s((QFe,b7)=>{"use strict";var uyr=q7();b7.exports=uyr});var S7=s((KFe,E7)=>{"use strict";var w7={float64:oyr,float32:vyr,int32:fyr,int16:cyr,int8:lyr,uint32:pyr,uint16:dyr,uint8:gyr,uint8c:myr,generic:yyr,default:hyr};function oyr(r,e,t){r[e]=t}function vyr(r,e,t){r[e]=t}function fyr(r,e,t){r[e]=t}function cyr(r,e,t){r[e]=t}function lyr(r,e,t){r[e]=t}function pyr(r,e,t){r[e]=t}function dyr(r,e,t){r[e]=t}function gyr(r,e,t){r[e]=t}function myr(r,e,t){r[e]=t}function yyr(r,e,t){r[e]=t}function hyr(r,e,t){r[e]=t}function qyr(r){var e=w7[r];return typeof e=="function"?e:w7.default}E7.exports=qyr});var K0=s((rje,N7)=>{"use strict";var byr=S7();N7.exports=byr});var _7=s((eje,O7)=>{"use strict";var wyr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};O7.exports=wyr});var T7=s((tje,A7)=>{"use strict";var Eyr=re(),Syr=typeof Float64Array=="function";function Nyr(r){return Syr&&r instanceof Float64Array||Eyr(r)==="[object Float64Array]"}A7.exports=Nyr});var R7=s((ije,I7)=>{"use strict";var Oyr=T7();I7.exports=Oyr});var L7=s((aje,P7)=>{"use strict";var _yr=typeof Float64Array=="function"?Float64Array:null;P7.exports=_yr});var M7=s((nje,j7)=>{"use strict";var Ayr=R7(),F7=L7();function Tyr(){var r,e;if(typeof F7!="function")return!1;try{e=new F7([1,3.14,-3.14,NaN]),r=Ayr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}j7.exports=Tyr});var o2=s((sje,B7)=>{"use strict";var Iyr=M7();B7.exports=Iyr});var C7=s((uje,k7)=>{"use strict";var Ryr=typeof Float64Array=="function"?Float64Array:void 0;k7.exports=Ryr});var G7=s((oje,V7)=>{"use strict";function Pyr(){throw new Error("not implemented")}V7.exports=Pyr});var ge=s((vje,U7)=>{"use strict";var Lyr=o2(),Fyr=C7(),jyr=G7(),v2;Lyr()?v2=Fyr:v2=jyr;U7.exports=v2});var z7=s((fje,D7)=>{"use strict";var Myr=re(),Byr=typeof Float32Array=="function";function kyr(r){return Byr&&r instanceof Float32Array||Myr(r)==="[object Float32Array]"}D7.exports=kyr});var H7=s((cje,W7)=>{"use strict";var Cyr=z7();W7.exports=Cyr});var pr=s((lje,X7)=>{"use strict";var Vyr=Number.POSITIVE_INFINITY;X7.exports=Vyr});var J7=s((pje,x7)=>{"use strict";var Gyr=typeof Float32Array=="function"?Float32Array:null;x7.exports=Gyr});var Z7=s((dje,$7)=>{"use strict";var Uyr=H7(),Dyr=pr(),Y7=J7();function zyr(){var r,e;if(typeof Y7!="function")return!1;try{e=new Y7([1,3.14,-3.14,5e40]),r=Uyr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Dyr}catch{r=!1}return r}$7.exports=zyr});var K7=s((gje,Q7)=>{"use strict";var Wyr=Z7();Q7.exports=Wyr});var e9=s((mje,r9)=>{"use strict";var Hyr=typeof Float32Array=="function"?Float32Array:void 0;r9.exports=Hyr});var i9=s((yje,t9)=>{"use strict";function Xyr(){throw new Error("not implemented")}t9.exports=Xyr});var et=s((hje,a9)=>{"use strict";var xyr=K7(),Jyr=e9(),Yyr=i9(),f2;xyr()?f2=Jyr:f2=Yyr;a9.exports=f2});var s9=s((qje,n9)=>{"use strict";var $yr=re(),Zyr=typeof Uint32Array=="function";function Qyr(r){return Zyr&&r instanceof Uint32Array||$yr(r)==="[object Uint32Array]"}n9.exports=Qyr});var qt=s((bje,u9)=>{"use strict";var Kyr=s9();u9.exports=Kyr});var ba=s((wje,o9)=>{"use strict";var rhr=4294967295;o9.exports=rhr});var f9=s((Eje,v9)=>{"use strict";var ehr=typeof Uint32Array=="function"?Uint32Array:null;v9.exports=ehr});var p9=s((Sje,l9)=>{"use strict";var thr=qt(),c2=ba(),c9=f9();function ihr(){var r,e;if(typeof c9!="function")return!1;try{e=[1,3.14,-3.14,c2+1,c2+2],e=new c9(e),r=thr(e)&&e[0]===1&&e[1]===3&&e[2]===c2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}l9.exports=ihr});var g9=s((Nje,d9)=>{"use strict";var ahr=p9();d9.exports=ahr});var y9=s((Oje,m9)=>{"use strict";var nhr=typeof Uint32Array=="function"?Uint32Array:void 0;m9.exports=nhr});var q9=s((_je,h9)=>{"use strict";function shr(){throw new Error("not implemented")}h9.exports=shr});var me=s((Aje,b9)=>{"use strict";var uhr=g9(),ohr=y9(),vhr=q9(),l2;uhr()?l2=ohr:l2=vhr;b9.exports=l2});var E9=s((Tje,w9)=>{"use strict";var fhr=re(),chr=typeof Int32Array=="function";function lhr(r){return chr&&r instanceof Int32Array||fhr(r)==="[object Int32Array]"}w9.exports=lhr});var rs=s((Ije,S9)=>{"use strict";var phr=E9();S9.exports=phr});var wa=s((Rje,N9)=>{"use strict";var dhr=2147483647;N9.exports=dhr});var _9=s((Pje,O9)=>{"use strict";var ghr=-2147483648;O9.exports=ghr});var T9=s((Lje,A9)=>{"use strict";var mhr=typeof Int32Array=="function"?Int32Array:null;A9.exports=mhr});var P9=s((Fje,R9)=>{"use strict";var yhr=rs(),hhr=wa(),qhr=_9(),I9=T9();function bhr(){var r,e;if(typeof I9!="function")return!1;try{e=new I9([1,3.14,-3.14,hhr+1]),r=yhr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===qhr}catch{r=!1}return r}R9.exports=bhr});var F9=s((jje,L9)=>{"use strict";var whr=P9();L9.exports=whr});var M9=s((Mje,j9)=>{"use strict";var Ehr=typeof Int32Array=="function"?Int32Array:void 0;j9.exports=Ehr});var k9=s((Bje,B9)=>{"use strict";function Shr(){throw new Error("not implemented")}B9.exports=Shr});var oi=s((kje,C9)=>{"use strict";var Nhr=F9(),Ohr=M9(),_hr=k9(),p2;Nhr()?p2=Ohr:p2=_hr;C9.exports=p2});var G9=s((Cje,V9)=>{"use strict";var Ahr=re(),Thr=typeof Uint16Array=="function";function Ihr(r){return Thr&&r instanceof Uint16Array||Ahr(r)==="[object Uint16Array]"}V9.exports=Ihr});var D9=s((Vje,U9)=>{"use strict";var Rhr=G9();U9.exports=Rhr});var W9=s((Gje,z9)=>{"use strict";var Phr=65535;z9.exports=Phr});var X9=s((Uje,H9)=>{"use strict";var Lhr=typeof Uint16Array=="function"?Uint16Array:null;H9.exports=Lhr});var Y9=s((Dje,J9)=>{"use strict";var Fhr=D9(),d2=W9(),x9=X9();function jhr(){var r,e;if(typeof x9!="function")return!1;try{e=[1,3.14,-3.14,d2+1,d2+2],e=new x9(e),r=Fhr(e)&&e[0]===1&&e[1]===3&&e[2]===d2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}J9.exports=jhr});var Z9=s((zje,$9)=>{"use strict";var Mhr=Y9();$9.exports=Mhr});var K9=s((Wje,Q9)=>{"use strict";var Bhr=typeof Uint16Array=="function"?Uint16Array:void 0;Q9.exports=Bhr});var ep=s((Hje,rp)=>{"use strict";function khr(){throw new Error("not implemented")}rp.exports=khr});var $i=s((Xje,tp)=>{"use strict";var Chr=Z9(),Vhr=K9(),Ghr=ep(),g2;Chr()?g2=Vhr:g2=Ghr;tp.exports=g2});var ap=s((xje,ip)=>{"use strict";var Uhr=re(),Dhr=typeof Int16Array=="function";function zhr(r){return Dhr&&r instanceof Int16Array||Uhr(r)==="[object Int16Array]"}ip.exports=zhr});var sp=s((Jje,np)=>{"use strict";var Whr=ap();np.exports=Whr});var op=s((Yje,up)=>{"use strict";var Hhr=32767;up.exports=Hhr});var fp=s(($je,vp)=>{"use strict";var Xhr=-32768;vp.exports=Xhr});var lp=s((Zje,cp)=>{"use strict";var xhr=typeof Int16Array=="function"?Int16Array:null;cp.exports=xhr});var gp=s((Qje,dp)=>{"use strict";var Jhr=sp(),Yhr=op(),$hr=fp(),pp=lp();function Zhr(){var r,e;if(typeof pp!="function")return!1;try{e=new pp([1,3.14,-3.14,Yhr+1]),r=Jhr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===$hr}catch{r=!1}return r}dp.exports=Zhr});var yp=s((Kje,mp)=>{"use strict";var Qhr=gp();mp.exports=Qhr});var qp=s((rMe,hp)=>{"use strict";var Khr=typeof Int16Array=="function"?Int16Array:void 0;hp.exports=Khr});var wp=s((eMe,bp)=>{"use strict";function rqr(){throw new Error("not implemented")}bp.exports=rqr});var Ea=s((tMe,Ep)=>{"use strict";var eqr=yp(),tqr=qp(),iqr=wp(),m2;eqr()?m2=tqr:m2=iqr;Ep.exports=m2});var Np=s((iMe,Sp)=>{"use strict";var aqr=re(),nqr=typeof Uint8Array=="function";function sqr(r){return nqr&&r instanceof Uint8Array||aqr(r)==="[object Uint8Array]"}Sp.exports=sqr});var _p=s((aMe,Op)=>{"use strict";var uqr=Np();Op.exports=uqr});var Tp=s((nMe,Ap)=>{"use strict";var oqr=255;Ap.exports=oqr});var Rp=s((sMe,Ip)=>{"use strict";var vqr=typeof Uint8Array=="function"?Uint8Array:null;Ip.exports=vqr});var Fp=s((uMe,Lp)=>{"use strict";var fqr=_p(),y2=Tp(),Pp=Rp();function cqr(){var r,e;if(typeof Pp!="function")return!1;try{e=[1,3.14,-3.14,y2+1,y2+2],e=new Pp(e),r=fqr(e)&&e[0]===1&&e[1]===3&&e[2]===y2-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Lp.exports=cqr});var Mp=s((oMe,jp)=>{"use strict";var lqr=Fp();jp.exports=lqr});var kp=s((vMe,Bp)=>{"use strict";var pqr=typeof Uint8Array=="function"?Uint8Array:void 0;Bp.exports=pqr});var Vp=s((fMe,Cp)=>{"use strict";function dqr(){throw new Error("not implemented")}Cp.exports=dqr});var tt=s((cMe,Gp)=>{"use strict";var gqr=Mp(),mqr=kp(),yqr=Vp(),h2;gqr()?h2=mqr:h2=yqr;Gp.exports=h2});var Dp=s((lMe,Up)=>{"use strict";var hqr=re(),qqr=typeof Uint8ClampedArray=="function";function bqr(r){return qqr&&r instanceof Uint8ClampedArray||hqr(r)==="[object Uint8ClampedArray]"}Up.exports=bqr});var Wp=s((pMe,zp)=>{"use strict";var wqr=Dp();zp.exports=wqr});var Xp=s((dMe,Hp)=>{"use strict";var Eqr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Hp.exports=Eqr});var Yp=s((gMe,Jp)=>{"use strict";var Sqr=Wp(),xp=Xp();function Nqr(){var r,e;if(typeof xp!="function")return!1;try{e=new xp([-1,0,1,3.14,4.99,255,256]),r=Sqr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Jp.exports=Nqr});var Zp=s((mMe,$p)=>{"use strict";var Oqr=Yp();$p.exports=Oqr});var Kp=s((yMe,Qp)=>{"use strict";var _qr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Qp.exports=_qr});var ed=s((hMe,rd)=>{"use strict";function Aqr(){throw new Error("not implemented")}rd.exports=Aqr});var Sa=s((qMe,td)=>{"use strict";var Tqr=Zp(),Iqr=Kp(),Rqr=ed(),q2;Tqr()?q2=Iqr:q2=Rqr;td.exports=q2});var ad=s((bMe,id)=>{"use strict";var Pqr=re(),Lqr=typeof Int8Array=="function";function Fqr(r){return Lqr&&r instanceof Int8Array||Pqr(r)==="[object Int8Array]"}id.exports=Fqr});var sd=s((wMe,nd)=>{"use strict";var jqr=ad();nd.exports=jqr});var od=s((EMe,ud)=>{"use strict";var Mqr=127;ud.exports=Mqr});var fd=s((SMe,vd)=>{"use strict";var Bqr=-128;vd.exports=Bqr});var ld=s((NMe,cd)=>{"use strict";var kqr=typeof Int8Array=="function"?Int8Array:null;cd.exports=kqr});var gd=s((OMe,dd)=>{"use strict";var Cqr=sd(),Vqr=od(),Gqr=fd(),pd=ld();function Uqr(){var r,e;if(typeof pd!="function")return!1;try{e=new pd([1,3.14,-3.14,Vqr+1]),r=Cqr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Gqr}catch{r=!1}return r}dd.exports=Uqr});var yd=s((_Me,md)=>{"use strict";var Dqr=gd();md.exports=Dqr});var qd=s((AMe,hd)=>{"use strict";var zqr=typeof Int8Array=="function"?Int8Array:void 0;hd.exports=zqr});var wd=s((TMe,bd)=>{"use strict";function Wqr(){throw new Error("not implemented")}bd.exports=Wqr});var Na=s((IMe,Ed)=>{"use strict";var Hqr=yd(),Xqr=qd(),xqr=wd(),b2;Hqr()?b2=Xqr:b2=xqr;Ed.exports=b2});var w2=s((RMe,Sd)=>{"use strict";function Jqr(r){return typeof r=="number"}Sd.exports=Jqr});var Od=s((PMe,Nd)=>{"use strict";Nd.exports=Number});var es=s((LMe,_d)=>{"use strict";var Yqr=Od();_d.exports=Yqr});var Td=s((FMe,Ad)=>{"use strict";var $qr=es(),Zqr=$qr.prototype.toString;Ad.exports=Zqr});var Rd=s((jMe,Id)=>{"use strict";var Qqr=Td();function Kqr(r){try{return Qqr.call(r),!0}catch{return!1}}Id.exports=Kqr});var E2=s((MMe,Pd)=>{"use strict";var rbr=ha(),ebr=re(),tbr=es(),ibr=Rd(),abr=rbr();function nbr(r){return typeof r=="object"?r instanceof tbr?!0:abr?ibr(r):ebr(r)==="[object Number]":!1}Pd.exports=nbr});var Fd=s((BMe,Ld)=>{"use strict";var sbr=w2(),ubr=E2();function obr(r){return sbr(r)||ubr(r)}Ld.exports=obr});var Sr=s((kMe,Md)=>{"use strict";var jd=D(),S2=Fd(),vbr=w2(),fbr=E2();jd(S2,"isPrimitive",vbr);jd(S2,"isObject",fbr);Md.exports=S2});var Ir=s((CMe,Bd)=>{"use strict";var cbr=es(),lbr=cbr.NEGATIVE_INFINITY;Bd.exports=lbr});var N2=s((VMe,kd)=>{"use strict";var pbr=pr(),dbr=Ir(),gbr=Se();function mbr(r){return r<pbr&&r>dbr&&gbr(r)}kd.exports=mbr});var O2=s((GMe,Cd)=>{"use strict";var ybr=Sr().isPrimitive,hbr=N2();function qbr(r){return ybr(r)&&hbr(r)}Cd.exports=qbr});var _2=s((UMe,Vd)=>{"use strict";var bbr=Sr().isObject,wbr=N2();function Ebr(r){return bbr(r)&&wbr(r.valueOf())}Vd.exports=Ebr});var Ud=s((DMe,Gd)=>{"use strict";var Sbr=O2(),Nbr=_2();function Obr(r){return Sbr(r)||Nbr(r)}Gd.exports=Obr});var ye=s((zMe,zd)=>{"use strict";var Dd=D(),A2=Ud(),_br=O2(),Abr=_2();Dd(A2,"isPrimitive",_br);Dd(A2,"isObject",Abr);zd.exports=A2});var T2=s((WMe,Wd)=>{"use strict";var Tbr=ye().isPrimitive;function Ibr(r){return Tbr(r)&&r>=0}Wd.exports=Ibr});var I2=s((HMe,Hd)=>{"use strict";var Rbr=ye().isObject;function Pbr(r){return Rbr(r)&&r.valueOf()>=0}Hd.exports=Pbr});var xd=s((XMe,Xd)=>{"use strict";var Lbr=T2(),Fbr=I2();function jbr(r){return Lbr(r)||Fbr(r)}Xd.exports=jbr});var be=s((xMe,Yd)=>{"use strict";var Jd=D(),R2=xd(),Mbr=T2(),Bbr=I2();Jd(R2,"isPrimitive",Mbr);Jd(R2,"isObject",Bbr);Yd.exports=R2});var P2=s((JMe,$d)=>{"use strict";var kbr=4294967295;$d.exports=kbr});var Qd=s((YMe,Zd)=>{"use strict";var Cbr=Se(),Vbr=P2();function Gbr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Cbr(r.length)&&r.length>=0&&r.length<=Vbr}Zd.exports=Gbr});var Zi=s(($Me,Kd)=>{"use strict";var Ubr=Qd();Kd.exports=Ubr});var eg=s((ZMe,rg)=>{"use strict";var Dbr=re(),zbr=typeof ArrayBuffer=="function";function Wbr(r){return zbr&&r instanceof ArrayBuffer||Dbr(r)==="[object ArrayBuffer]"}rg.exports=Wbr});var ts=s((QMe,tg)=>{"use strict";var Hbr=eg();tg.exports=Hbr});var ag=s((KMe,ig)=>{"use strict";var Xbr=qe();function xbr(r){return typeof r=="object"&&r!==null&&!Xbr(r)}ig.exports=xbr});var is=s((rBe,ng)=>{"use strict";var Jbr=ag();ng.exports=Jbr});var ug=s((eBe,sg)=>{"use strict";function Ybr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}sg.exports=Ybr});var vg=s((tBe,og)=>{"use strict";function $br(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}og.exports=$br});var dg=s((iBe,pg)=>{"use strict";var fg=Sr().isPrimitive,cg=ni(),Fn=D(),lg=V(),Zbr=ug(),Qbr=vg();function Qi(r,e){if(!(this instanceof Qi))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!fg(r))throw new TypeError(lg("invalid argument. Real component must be a number. Value: `%s`.",r));if(!fg(e))throw new TypeError(lg("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return cg(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),cg(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Fn(Qi,"BYTES_PER_ELEMENT",8);Fn(Qi.prototype,"BYTES_PER_ELEMENT",8);Fn(Qi.prototype,"byteLength",16);Fn(Qi.prototype,"toString",Zbr);Fn(Qi.prototype,"toJSON",Qbr);pg.exports=Qi});var Oa=s((aBe,gg)=>{"use strict";var Kbr=dg();gg.exports=Kbr});var yg=s((nBe,mg)=>{"use strict";var rwr=typeof Math.fround=="function"?Math.fround:null;mg.exports=rwr});var bg=s((sBe,qg)=>{"use strict";var ewr=et(),hg=new ewr(1);function twr(r){return hg[0]=r,hg[0]}qg.exports=twr});var Sg=s((uBe,Eg)=>{"use strict";var wg=yg(),iwr=bg(),L2;typeof wg=="function"?L2=wg:L2=iwr;Eg.exports=L2});var Og=s((oBe,Ng)=>{"use strict";function awr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}Ng.exports=awr});var Ag=s((vBe,_g)=>{"use strict";function nwr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}_g.exports=nwr});var Fg=s((fBe,Lg)=>{"use strict";var Tg=Sr().isPrimitive,Ig=ni(),jn=D(),Rg=Sg(),Pg=V(),swr=Og(),uwr=Ag();function Ki(r,e){if(!(this instanceof Ki))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Tg(r))throw new TypeError(Pg("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Tg(e))throw new TypeError(Pg("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Ig(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Rg(r)}),Ig(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Rg(e)}),this}jn(Ki,"BYTES_PER_ELEMENT",4);jn(Ki.prototype,"BYTES_PER_ELEMENT",4);jn(Ki.prototype,"byteLength",8);jn(Ki.prototype,"toString",swr);jn(Ki.prototype,"toJSON",uwr);Lg.exports=Ki});var _a=s((cBe,jg)=>{"use strict";var owr=Fg();jg.exports=owr});var Bg=s((lBe,Mg)=>{"use strict";var vwr=Oa(),fwr=_a();function cwr(r){return r instanceof vwr||r instanceof fwr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}Mg.exports=cwr});var Je=s((pBe,kg)=>{"use strict";var lwr=Bg();kg.exports=lwr});var Vg=s((dBe,Cg)=>{"use strict";var pwr=Se();function dwr(r){return pwr(r/2)}Cg.exports=dwr});var as=s((gBe,Gg)=>{"use strict";var gwr=Vg();Gg.exports=gwr});var Dg=s((mBe,Ug)=>{"use strict";var mwr=vr(),ns=$1();function ywr(){return typeof ns=="function"&&typeof ns("foo")=="symbol"&&mwr(ns,"iterator")&&typeof ns.iterator=="symbol"}Ug.exports=ywr});var ss=s((yBe,zg)=>{"use strict";var hwr=Dg();zg.exports=hwr});var Hg=s((hBe,Wg)=>{"use strict";var qwr=ss(),bwr=qwr()?Symbol.iterator:null;Wg.exports=bwr});var Mn=s((qBe,Xg)=>{"use strict";var wwr=Hg();Xg.exports=wwr});var Jg=s((bBe,xg)=>{"use strict";var Ewr=ni();function Swr(r,e,t){Ewr(r,e,{configurable:!1,enumerable:!1,get:t})}xg.exports=Swr});var br=s((wBe,Yg)=>{"use strict";var Nwr=Jg();Yg.exports=Nwr});var Zg=s((EBe,$g)=>{"use strict";function Owr(r){return r.re}$g.exports=Owr});var vi=s((SBe,Qg)=>{"use strict";var _wr=Zg();Qg.exports=_wr});var rm=s((NBe,Kg)=>{"use strict";function Awr(r){return r.im}Kg.exports=Awr});var fi=s((OBe,em)=>{"use strict";var Twr=rm();em.exports=Twr});var im=s((_Be,tm)=>{"use strict";var Iwr=et();function Rwr(r,e){return new Iwr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}tm.exports=Rwr});var Aa=s((ABe,am)=>{"use strict";var Pwr=im();am.exports=Pwr});var sm=s((TBe,nm)=>{"use strict";var Lwr=ge();function Fwr(r,e){return new Lwr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}nm.exports=Fwr});var Ta=s((IBe,um)=>{"use strict";var jwr=sm();um.exports=jwr});var fm=s((RBe,vm)=>{"use strict";var om={float64:Mwr,float32:Bwr,int32:kwr,int16:Cwr,int8:Vwr,uint32:Gwr,uint16:Uwr,uint8:Dwr,uint8c:zwr,generic:Wwr,default:Hwr};function Mwr(r,e){return r[e]}function Bwr(r,e){return r[e]}function kwr(r,e){return r[e]}function Cwr(r,e){return r[e]}function Vwr(r,e){return r[e]}function Gwr(r,e){return r[e]}function Uwr(r,e){return r[e]}function Dwr(r,e){return r[e]}function zwr(r,e){return r[e]}function Wwr(r,e){return r[e]}function Hwr(r,e){return r[e]}function Xwr(r){var e=om[r];return typeof e=="function"?e:om.default}vm.exports=Xwr});var Ia=s((PBe,cm)=>{"use strict";var xwr=fm();cm.exports=xwr});var dm=s((LBe,pm)=>{"use strict";var lm={complex128:Jwr,complex64:Ywr,default:$wr};function Jwr(r,e){return r.get(e)}function Ywr(r,e){return r.get(e)}function $wr(r,e){return r.get(e)}function Zwr(r){var e=lm[r];return typeof e=="function"?e:lm.default}pm.exports=Zwr});var ra=s((FBe,gm)=>{"use strict";var Qwr=dm();gm.exports=Qwr});var ym=s((jBe,mm)=>{"use strict";var Kwr=Zi(),rEr=Je(),eEr=vi(),tEr=fi(),iEr=V();function aEr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Kwr(i)&&i.length>=2)e.push(i[0],i[1]);else if(rEr(i))e.push(eEr(i),tEr(i));else return new TypeError(iEr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}mm.exports=aEr});var qm=s((MBe,hm)=>{"use strict";var nEr=Zi(),sEr=Je(),uEr=vi(),oEr=fi(),vEr=V();function fEr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),nEr(n)&&n.length>=2)i.push(n[0],n[1]);else if(sEr(n))i.push(uEr(n),oEr(n));else return new TypeError(vEr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}hm.exports=fEr});var wm=s((BBe,bm)=>{"use strict";var cEr=Je(),lEr=vi(),pEr=fi();function dEr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!cEr(i))return null;r[n]=lEr(i),r[n+1]=pEr(i),n+=2}return r}bm.exports=dEr});var Rm=s((kBe,Im)=>{"use strict";var Bn=be().isPrimitive,Em=Zi(),j2=Ve(),Sm=ts(),Nm=is(),gEr=qe(),ea=qr(),Ra=Je(),us=as(),F2=Se(),mEr=ss(),Pa=Mn(),Ne=D(),fs=br(),De=et(),Om=_a(),$r=V(),os=vi(),vs=fi(),yEr=Aa(),hEr=Ta(),qEr=Ia(),bEr=ra(),_m=ym(),wEr=qm(),EEr=wm(),Ge=De.BYTES_PER_ELEMENT*2,Am=mEr();function La(r){return r instanceof ee||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Tm(r){return r===ee||r.name==="Complex128Array"}function SEr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ge}function NEr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ge*2}function ee(){var r,e,t,i;if(e=arguments.length,!(this instanceof ee))return e===0?new ee:e===1?new ee(arguments[0]):e===2?new ee(arguments[0],arguments[1]):new ee(arguments[0],arguments[1],arguments[2]);if(e===0)t=new De(0);else if(e===1)if(Bn(arguments[0]))t=new De(arguments[0]*2);else if(j2(arguments[0]))if(t=arguments[0],i=t.length,i&&gEr(t)&&Ra(t[0])){if(t=EEr(new De(i*2),t),t===null){if(!us(i))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(arguments[0])}}else{if(SEr(t))t=yEr(t,0);else if(NEr(t))t=hEr(t,0);else if(!us(i))throw new RangeError($r("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new De(t)}else if(Sm(arguments[0])){if(t=arguments[0],!F2(t.byteLength/Ge))throw new RangeError($r("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new De(t)}else if(Nm(arguments[0])){if(t=arguments[0],Am===!1)throw new TypeError($r("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ea(t[Pa]))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Pa](),!ea(t.next))throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=_m(t),t instanceof Error)throw t;t=new De(t)}else throw new TypeError($r("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Sm(t))throw new TypeError($r("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!Bn(r))throw new TypeError($r("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!F2(r/Ge))throw new RangeError($r("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(e===2){if(i=t.byteLength-r,!F2(i/Ge))throw new RangeError($r("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,i));t=new De(t,r)}else{if(i=arguments[2],!Bn(i))throw new TypeError($r("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ge>t.byteLength-r)throw new RangeError($r("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ge));t=new De(t,r,i*2)}}return Ne(this,"_buffer",t),Ne(this,"_length",t.length/2),this}Ne(ee,"BYTES_PER_ELEMENT",Ge);Ne(ee,"name","Complex64Array");Ne(ee,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ea(a))throw new TypeError($r("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(La(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),Ra(l))u[m]=os(l),u[m+1]=vs(l);else if(Em(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(j2(e)){if(a){for(f=e.length,e.get&&e.set?v=bEr("default"):v=qEr("default"),p=0;p<f;p++)if(!Ra(v(e,p))){c=!0;break}if(c){if(!us(f))throw new RangeError($r("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),Ra(l))u[m]=os(l),u[m+1]=vs(l);else if(Em(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Nm(e)&&Am&&ea(e[Pa])){if(u=e[Pa](),!ea(u.next))throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=wEr(u,a,t):o=_m(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError($r("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Ne(ee,"of",function(){var e,t;if(!ea(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Tm(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});fs(ee.prototype,"buffer",function(){return this._buffer.buffer});fs(ee.prototype,"byteLength",function(){return this._buffer.byteLength});fs(ee.prototype,"byteOffset",function(){return this._buffer.byteOffset});Ne(ee.prototype,"BYTES_PER_ELEMENT",ee.BYTES_PER_ELEMENT);Ne(ee.prototype,"copyWithin",function(e,t){if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Ne(ee.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Ne(i,"next",v),Ne(i,"return",f),Pa&&Ne(i,Pa,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new Om(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Ne(ee.prototype,"get",function(e){var t;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Bn(e))throw new TypeError($r("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Om(t[e],t[e+1])});fs(ee.prototype,"length",function(){return this._length});Ne(ee.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!La(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!Bn(i))throw new TypeError($r("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(Ra(e)){if(i>=this._length)throw new RangeError($r("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=os(e),a[i+1]=vs(e);return}if(La(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(j2(e)){for(o=e.length,f=0;f<o;f++)if(!Ra(e[f])){u=!0;break}if(u){if(!us(o))throw new RangeError($r("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ge,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new De(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=os(v),a[i+1]=vs(v),i+=2;return}throw new TypeError($r("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Im.exports=ee});var Fa=s((CBe,Pm)=>{"use strict";var OEr=Rm();Pm.exports=OEr});var Fm=s((VBe,Lm)=>{"use strict";function _Er(r){return r.re}Lm.exports=_Er});var it=s((GBe,jm)=>{"use strict";var AEr=Fm();jm.exports=AEr});var Bm=s((UBe,Mm)=>{"use strict";function TEr(r){return r.im}Mm.exports=TEr});var at=s((DBe,km)=>{"use strict";var IEr=Bm();km.exports=IEr});var Vm=s((zBe,Cm)=>{"use strict";var REr=Zi(),PEr=Je(),LEr=V(),FEr=it(),jEr=at();function MEr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,REr(i)&&i.length>=2)e.push(i[0],i[1]);else if(PEr(i))e.push(FEr(i),jEr(i));else return new TypeError(LEr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Cm.exports=MEr});var Um=s((WBe,Gm)=>{"use strict";var BEr=Zi(),kEr=Je(),CEr=V(),VEr=it(),GEr=at();function UEr(r,e,t){var i,a,n,u;for(i=[],u=-1;a=r.next(),!a.done;)if(u+=1,n=e.call(t,a.value,u),BEr(n)&&n.length>=2)i.push(n[0],n[1]);else if(kEr(n))i.push(VEr(n),GEr(n));else return new TypeError(CEr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));return i}Gm.exports=UEr});var zm=s((HBe,Dm)=>{"use strict";var DEr=Je(),zEr=it(),WEr=at();function HEr(r,e){var t,i,a,n;for(t=e.length,n=0,a=0;a<t;a++){if(i=e[a],!DEr(i))return null;r[n]=zEr(i),r[n+1]=WEr(i),n+=2}return r}Dm.exports=HEr});var Qm=s((XBe,Zm)=>{"use strict";var kn=be().isPrimitive,Wm=Zi(),B2=Ve(),Hm=ts(),Xm=is(),XEr=qe(),ta=qr(),ja=Je(),cs=as(),M2=Se(),xEr=ss(),Ma=Mn(),Oe=D(),ds=br(),ze=ge(),xm=Oa(),ls=it(),ps=at(),JEr=Aa(),YEr=Ta(),$Er=Ia(),ZEr=ra(),Zr=V(),Jm=Vm(),QEr=Um(),KEr=zm(),Ue=ze.BYTES_PER_ELEMENT*2,Ym=xEr();function Ba(r){return r instanceof te||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function $m(r){return r===te||r.name==="Complex64Array"}function rSr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ue/2}function eSr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ue}function te(){var r,e,t,i;if(e=arguments.length,!(this instanceof te))return e===0?new te:e===1?new te(arguments[0]):e===2?new te(arguments[0],arguments[1]):new te(arguments[0],arguments[1],arguments[2]);if(e===0)t=new ze(0);else if(e===1)if(kn(arguments[0]))t=new ze(arguments[0]*2);else if(B2(arguments[0]))if(t=arguments[0],i=t.length,i&&XEr(t)&&ja(t[0])){if(t=KEr(new ze(i*2),t),t===null){if(!cs(i))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new ze(arguments[0])}}else{if(rSr(t))t=JEr(t,0);else if(eSr(t))t=YEr(t,0);else if(!cs(i))throw new RangeError(Zr("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new ze(t)}else if(Hm(arguments[0])){if(t=arguments[0],!M2(t.byteLength/Ue))throw new RangeError(Zr("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ue,t.byteLength));t=new ze(t)}else if(Xm(arguments[0])){if(t=arguments[0],Ym===!1)throw new TypeError(Zr("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ta(t[Ma]))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[Ma](),!ta(t.next))throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Jm(t),t instanceof Error)throw t;t=new ze(t)}else throw new TypeError(Zr("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Hm(t))throw new TypeError(Zr("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!kn(r))throw new TypeError(Zr("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!M2(r/Ue))throw new RangeError(Zr("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ue,r));if(e===2){if(i=t.byteLength-r,!M2(i/Ue))throw new RangeError(Zr("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ue,i));t=new ze(t,r)}else{if(i=arguments[2],!kn(i))throw new TypeError(Zr("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Ue>t.byteLength-r)throw new RangeError(Zr("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Ue));t=new ze(t,r,i*2)}}return Oe(this,"_buffer",t),Oe(this,"_length",t.length/2),this}Oe(te,"BYTES_PER_ELEMENT",Ue);Oe(te,"name","Complex128Array");Oe(te,"from",function(e){var t,i,a,n,u,o,v,f,c,l,p,m;if(!ta(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!$m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(a=arguments[1],!ta(a))throw new TypeError(Zr("invalid argument. Second argument must be a function. Value: `%s`.",a));i>2&&(t=arguments[2])}if(Ba(e)){if(f=e.length,a){for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,e.get(p),p),ja(l))u[m]=ls(l),u[m+1]=ps(l);else if(Wm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(B2(e)){if(a){for(f=e.length,e.get&&e.set?v=ZEr("default"):v=$Er("default"),p=0;p<f;p++)if(!ja(v(e,p))){c=!0;break}if(c){if(!cs(f))throw new RangeError(Zr("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(n=new this(f/2),u=n._buffer,p=0;p<f;p++)u[p]=a.call(t,v(e,p),p);return n}for(n=new this(f),u=n._buffer,m=0,p=0;p<f;p++){if(l=a.call(t,v(e,p),p),ja(l))u[m]=ls(l),u[m+1]=ps(l);else if(Wm(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Zr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return n}return new this(e)}if(Xm(e)&&Ym&&ta(e[Ma])){if(u=e[Ma](),!ta(u.next))throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(a?o=QEr(u,a,t):o=Jm(u),o instanceof Error)throw o;for(f=o.length/2,n=new this(f),u=n._buffer,p=0;p<f;p++)u[p]=o[p];return n}throw new TypeError(Zr("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});Oe(te,"of",function(){var e,t;if(!ta(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!$m(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ds(te.prototype,"buffer",function(){return this._buffer.buffer});ds(te.prototype,"byteLength",function(){return this._buffer.byteLength});ds(te.prototype,"byteOffset",function(){return this._buffer.byteOffset});Oe(te.prototype,"BYTES_PER_ELEMENT",te.BYTES_PER_ELEMENT);Oe(te.prototype,"copyWithin",function(e,t){if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});Oe(te.prototype,"entries",function(){var e,t,i,a,n,u,o;if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,a=this._length,u=-1,o=-2,i={},Oe(i,"next",v),Oe(i,"return",f),Ma&&Oe(i,Ma,c),i;function v(){var l;return u+=1,n||u>=a?{done:!0}:(o+=2,l=new xm(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return n=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});Oe(te.prototype,"get",function(e){var t;if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!kn(e))throw new TypeError(Zr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new xm(t[e],t[e+1])});ds(te.prototype,"length",function(){return this._length});Oe(te.prototype,"set",function(e){var t,i,a,n,u,o,v,f,c;if(!Ba(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(a=this._buffer,arguments.length>1){if(i=arguments[1],!kn(i))throw new TypeError(Zr("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ja(e)){if(i>=this._length)throw new RangeError(Zr("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,a[i]=ls(e),a[i+1]=ps(e);return}if(Ba(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new ze(t.length),f=0;f<t.length;f++)n[f]=t[f];t=n}for(i*=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(B2(e)){for(o=e.length,f=0;f<o;f++)if(!ja(e[f])){u=!0;break}if(u){if(!cs(o))throw new RangeError(Zr("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=a.byteOffset+i*Ue,t.buffer===a.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(n=new ze(o),f=0;f<o;f++)n[f]=t[f];t=n}for(i*=2,o/=2,c=0,f=0;f<o;f++)a[i]=t[c],a[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],a[i]=ls(v),a[i+1]=ps(v),i+=2;return}throw new TypeError(Zr("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Zm.exports=te});var ka=s((xBe,Km)=>{"use strict";var tSr=Qm();Km.exports=tSr});var ey=s((JBe,ry)=>{"use strict";var iSr=ge(),aSr=et(),nSr=me(),sSr=oi(),uSr=$i(),oSr=Ea(),vSr=tt(),fSr=Sa(),cSr=Na(),lSr=Fa(),pSr=ka(),dSr=[iSr,aSr,sSr,nSr,oSr,uSr,cSr,vSr,fSr,lSr,pSr];ry.exports=dSr});var iy=s((YBe,ty)=>{"use strict";var gSr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];ty.exports=gSr});var sy=s(($Be,ny)=>{"use strict";var mSr=Yi(),ySr=qe(),hSr=ui(),qSr=_7(),bSr=ey(),ay=iy(),wSr=ay.length;function ESr(r){var e;if(ySr(r))return"generic";if(mSr(r))return null;for(e=0;e<wSr;e++)if(r instanceof bSr[e])return ay[e];return qSr[hSr(r)]||null}ny.exports=ESr});var Ca=s((ZBe,uy)=>{"use strict";var SSr=sy();uy.exports=SSr});var fy=s((QBe,vy)=>{"use strict";var oy=qr(),NSr=Ve(),OSr=l7(),_Sr=qa(),ASr=Q0(),TSr=K0(),ISr=Ca(),k2=V();function RSr(){var r,e,t,i,a,n,u,o,v;if(r=arguments[0],arguments.length>1)if(NSr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!oy(t))throw new TypeError(k2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!oy(t))throw new TypeError(k2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!OSr(r))throw new TypeError(k2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(a=i.length,u=ISr(i),_Sr(i)?n=ASr(u):n=TSr(u),t){for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,t.call(e,v.value,o));return i}for(;o<a-1&&(o+=1,v=r.next(),!v.done);)n(i,o,v.value);return i}vy.exports=RSr});var ly=s((KBe,cy)=>{"use strict";var PSr=fy();cy.exports=PSr});var dy=s((rke,py)=>{"use strict";function LSr(r){return r!==r}py.exports=LSr});var W=s((eke,gy)=>{"use strict";var FSr=dy();gy.exports=FSr});var yy=s((tke,my)=>{"use strict";var jSr={Complex64:"complex64",Complex128:"complex128"};my.exports=jSr});var qy=s((ike,hy)=>{"use strict";var MSr=_a(),BSr=Oa(),kSr=[MSr,BSr];hy.exports=kSr});var wy=s((ake,by)=>{"use strict";var CSr=["complex64","complex128"];by.exports=CSr});var Ny=s((nke,Sy)=>{"use strict";var VSr=ui(),GSr=yy(),USr=qy(),Ey=wy(),DSr=Ey.length;function zSr(r){var e;for(e=0;e<DSr;e++)if(r instanceof USr[e])return Ey[e];return GSr[VSr(r)]||null}Sy.exports=zSr});var C2=s((ske,Oy)=>{"use strict";var WSr=Ny();Oy.exports=WSr});var Ay=s((uke,_y)=>{"use strict";var HSr=ge(),XSr=et(),xSr=ka(),JSr=Fa(),YSr={float64:HSr,float32:XSr,complex128:xSr,complex64:JSr};_y.exports=YSr});var Iy=s((oke,Ty)=>{"use strict";var $Sr=Ay();function ZSr(r){return $Sr[r]||null}Ty.exports=ZSr});var Py=s((vke,Ry)=>{"use strict";var QSr=Iy();Ry.exports=QSr});var Fy=s((fke,Ly)=>{"use strict";function KSr(r,e,t,i){var a,n,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(a=[r],i?n=t-1:n=t,u=(e-r)/n,o=1;o<n;o++)a.push(r+u*o);return i&&a.push(e),a}Ly.exports=KSr});var Vy=s((cke,Cy)=>{"use strict";var rNr=_a(),eNr=Oa(),jy=it(),My=at(),By=vi(),ky=fi();function tNr(r,e,t,i,a,n){var u,o,v,f,c,l,p,m,y,g,d,h,q;if(a===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=By(e),l=ky(e)):(f=jy(e),l=My(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=By(i),p=ky(i)):(c=jy(i),p=My(i)),o===2?u=rNr:u=eNr,a===1)return n?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],n?h=a-1:h=a,g=(c-f)/h,d=(p-l)/h,q=1;q<h;q++)m=f+g*q,y=l+d*q,v.push(new u(m,y));return n&&v.push(new u(c,p)),v}Cy.exports=tNr});var V2=s((lke,Gy)=>{"use strict";function iNr(r,e,t,i,a){var n,u,o;if(i===0)return r;if(i===1)return a?r[0]=t:r[0]=e,r;for(r[0]=e,a?n=i-1:n=i,u=(t-e)/n,o=1;o<n;o++)r[o]=e+u*o;return a&&(r[n]=t),r}Gy.exports=iNr});var G2=s((pke,Hy)=>{"use strict";var Uy=it(),Dy=at(),zy=vi(),Wy=fi();function aNr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g;if(n===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=zy(t),f=Wy(t)):(o=Uy(t),f=Dy(t)),i==="float64"?(v=a,c=0):i==="complex64"?(v=zy(a),c=Wy(a)):(v=Uy(a),c=Dy(a)),n===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=n-1:m=n,l=(v-o)/m,p=(c-f)/m,g=2,y=1;y<m;y++)r[g]=o+l*y,r[g+1]=f+p*y,g+=2;return u&&(r[g]=v,r[g+1]=c),r}Hy.exports=aNr});var xy=s((dke,Xy)=>{"use strict";var nNr=Object;Xy.exports=nNr});var Va=s((gke,Jy)=>{"use strict";var sNr=xy();Jy.exports=sNr});var $y=s((mke,Yy)=>{"use strict";var uNr=Object.getPrototypeOf;Yy.exports=uNr});var Qy=s((yke,Zy)=>{"use strict";function oNr(r){return r.__proto__}Zy.exports=oNr});var rh=s((hke,Ky)=>{"use strict";var vNr=re(),fNr=Qy();function cNr(r){var e=fNr(r);return e||e===null?e:vNr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Ky.exports=cNr});var th=s((qke,eh)=>{"use strict";var lNr=qr(),pNr=$y(),dNr=rh(),U2;lNr(Object.getPrototypeOf)?U2=pNr:U2=dNr;eh.exports=U2});var ah=s((bke,ih)=>{"use strict";var gNr=Va(),mNr=th();function yNr(r){return r==null?null:(r=gNr(r),mNr(r))}ih.exports=yNr});var ia=s((wke,nh)=>{"use strict";var hNr=ah();nh.exports=hNr});var oh=s((Eke,uh)=>{"use strict";var qNr=is(),sh=qr(),bNr=ia(),gs=vr(),wNr=re(),ENr=Object.prototype;function SNr(r){var e;for(e in r)if(!gs(r,e))return!1;return!0}function NNr(r){var e;return qNr(r)?(e=bNr(r),e?!gs(r,"constructor")&&gs(e,"constructor")&&sh(e.constructor)&&wNr(e.constructor)==="[object Function]"&&gs(e,"isPrototypeOf")&&sh(e.isPrototypeOf)&&(e===ENr||SNr(r)):!0):!1}uh.exports=NNr});var hr=s((Ske,vh)=>{"use strict";var ONr=oh();vh.exports=ONr});var D2=s((Nke,fh)=>{"use strict";function _Nr(r){return typeof r=="string"}fh.exports=_Nr});var lh=s((Oke,ch)=>{"use strict";var ANr=String.prototype.valueOf;ch.exports=ANr});var dh=s((_ke,ph)=>{"use strict";var TNr=lh();function INr(r){try{return TNr.call(r),!0}catch{return!1}}ph.exports=INr});var z2=s((Ake,gh)=>{"use strict";var RNr=ha(),PNr=re(),LNr=dh(),FNr=RNr();function jNr(r){return typeof r=="object"?r instanceof String?!0:FNr?LNr(r):PNr(r)==="[object String]":!1}gh.exports=jNr});var yh=s((Tke,mh)=>{"use strict";var MNr=D2(),BNr=z2();function kNr(r){return MNr(r)||BNr(r)}mh.exports=kNr});var Jr=s((Ike,qh)=>{"use strict";var hh=D(),W2=yh(),CNr=D2(),VNr=z2();hh(W2,"isPrimitive",CNr);hh(W2,"isObject",VNr);qh.exports=W2});var X2=s((Rke,wh)=>{"use strict";var GNr=hr(),bh=vr(),UNr=Jr().isPrimitive,DNr=de().isPrimitive,H2=V();function zNr(r,e){return GNr(e)?bh(e,"dtype")&&(r.dtype=e.dtype,!UNr(r.dtype))?new TypeError(H2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):bh(e,"endpoint")&&(r.endpoint=e.endpoint,!DNr(r.endpoint))?new TypeError(H2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(H2("invalid argument. Options argument must be an object. Value: `%s`.",e))}wh.exports=zNr});var x2=s((Pke,WNr)=>{WNr.exports={endpoint:!0}});var Th=s((Lke,Ah)=>{"use strict";var Eh=Je(),Sh=Sr().isPrimitive,HNr=be().isPrimitive,Nh=W(),Oh=C2(),XNr=Py(),xNr=Aa(),JNr=Ta(),Ga=V(),YNr=Fy(),$Nr=Vy(),ZNr=V2(),_h=G2(),QNr=X2(),KNr=x2();function rOr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(o=Oh(r),o===null){if(!Eh(r))throw new TypeError(Ga("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!Sh(r)||Nh(r))throw new TypeError(Ga("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=Oh(e),v===null){if(!Eh(e))throw new TypeError(Ga("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!Sh(e)||Nh(e))throw new TypeError(Ga("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!HNr(t))throw new TypeError(Ga("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:KNr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(n=QNr(i,arguments[3]),n))throw n;if(i.dtype==="generic")return f?$Nr(o,r,v,e,t,i.endpoint):YNr(r,e,t,i.endpoint);if(a=XNr(i.dtype),a===null)throw new TypeError(Ga('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new a(t),i.dtype==="complex64")return _h(xNr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return _h(JNr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return ZNr(u,r,e,t,i.endpoint)}Ah.exports=rOr});var Rh=s((Fke,Ih)=>{"use strict";var eOr=qa(),tOr=Ia(),iOr=K0(),aOr=ra(),nOr=Q0(),sOr=Ca();function uOr(r){var e=sOr(r);return eOr(r)?{accessorProtocol:!0,accessors:[aOr(e),nOr(e)]}:{accessorProtocol:!1,accessors:[tOr(e),iOr(e)]}}Ih.exports=uOr});var Lh=s((jke,Ph)=>{"use strict";var oOr=Rh();Ph.exports=oOr});var jh=s((Mke,Fh)=>{"use strict";var vOr=Lh();function fOr(r){var e=vOr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Fh.exports=fOr});var Cn=s((Bke,Mh)=>{"use strict";var cOr=jh();Mh.exports=cOr});var Uh=s((kke,Gh)=>{"use strict";var lOr=_a(),pOr=Oa(),Bh=it(),kh=at(),Ch=vi(),Vh=fi();function dOr(r,e,t,i,a,n,u){var o,v,f,c,l,p,m,y,g,d,h,q,w,_;if(n===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=Ch(t),l=Vh(t)):(f=Bh(t),l=kh(t)),i==="float64"?(c=a,p=0):i==="complex64"?(v+=1,c=Ch(a),p=Vh(a)):(c=Bh(a),p=kh(a)),v===2?o=lOr:o=pOr,y=r.data,m=r.accessors[1],n===1)return u?m(y,0,new o(c,p)):m(y,0,new o(f,l)),r;for(m(y,0,new o(f,l)),u?w=n-1:w=n,h=(c-f)/w,q=(p-l)/w,_=1;_<w;_++)g=f+h*_,d=l+q*_,m(y,_,new o(g,d));return u&&m(y,w,new o(c,p)),r}Gh.exports=dOr});var zh=s((Cke,Dh)=>{"use strict";function gOr(r,e,t,i,a){var n,u,o,v,f;if(i===0)return r;if(n=r.data,u=r.accessors[1],i===1)return a?u(n,0,t):u(n,0,e),r;for(u(n,0,e),a?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(n,f,e+v*f);return a&&u(n,o,t),r}Dh.exports=gOr});var Zh=s((Vke,$h)=>{"use strict";var Wh=Je(),Hh=Sr().isPrimitive,mOr=Ve(),Vn=V(),Xh=W(),xh=C2(),yOr=Ca(),hOr=Aa(),qOr=Ta(),Jh=Cn(),bOr=Uh(),wOr=zh(),Yh=G2(),EOr=V2(),SOr=X2(),NOr=x2();function OOr(r,e,t){var i,a,n,u,o,v,f;if(typeof r=="object"){if(n=xh(r),n===null){if(!Wh(r))throw new TypeError(Vn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="complex128"}o=!0}else{if(!Hh(r)||Xh(r))throw new TypeError(Vn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));n="float64"}if(typeof e=="object"){if(u=xh(e),u===null){if(!Wh(e))throw new TypeError(Vn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Hh(e)||Xh(e))throw new TypeError(Vn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!mOr(t))throw new TypeError(Vn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:NOr.endpoint},arguments.length>3&&(a=SOr(i,arguments[3]),a))throw a;if(v=yOr(t),v===null&&(v="generic"),v==="complex64")return Yh(hOr(t,0),n,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return Yh(qOr(t,0),n,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=Jh(t),bOr(f,n,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=Jh(t),f.accessorProtocol?(wOr(f,r,e,t.length,i.endpoint),t):(EOr(t,r,e,t.length,i.endpoint),t)}$h.exports=OOr});var rq=s((Gke,Kh)=>{"use strict";var _Or=D(),Qh=Th(),AOr=Zh();_Or(Qh,"assign",AOr);Kh.exports=Qh});var tq=s((Uke,eq)=>{"use strict";var TOr=Sr().isPrimitive,IOr=Jr().isPrimitive,ROr=de().isPrimitive,POr=qe(),LOr=V(),FOr={number:TOr,string:IOr,boolean:ROr};function jOr(r,e,t){var i,a,n,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],i=[],v=0;v<r.length;v++)if(o=r[v],n=e[v],u=FOr[n],u(o))i.push([[o]]),a.push([1,1]);else if(POr(o))i.push(o),a.push([o.length,o[0].length]);else throw new TypeError(LOr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],n,n,String(o)));return[i,a]}eq.exports=jOr});var ms=s((Dke,iq)=>{"use strict";var MOr=tq();iq.exports=MOr});var nq=s((zke,aq)=>{"use strict";var BOr=Y0();function kOr(r){return BOr(1,r)}aq.exports=kOr});var uq=s((Wke,sq)=>{"use strict";var COr=nq();sq.exports=COr});var vq=s((Hke,oq)=>{"use strict";function VOr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(f=e[0],v=e[1],o=t[0],u=t[1],a=[],l=0;l<f;l++){for(n=[],p=i+o*l,c=0;c<v;c++)n.push(r[p]),p+=u;a.push(n)}return a}oq.exports=VOr});var ys=s((Xke,fq)=>{"use strict";var GOr=vq();fq.exports=GOr});var lq=s((xke,cq)=>{"use strict";function UOr(r,e,t){var i,a,n,u,o,v,f,c;if(i=e[1],a=e[0],!(i<=0||a<=0))for(f=r[0],c=r[1],u=0;u<a;u++)for(o=f[u],v=c[u],n=0;n<i;n++)v[n]=t(o[n])}cq.exports=UOr});var J2=s((Jke,pq)=>{"use strict";var DOr=lq();pq.exports=DOr});var gq=s((Yke,dq)=>{"use strict";var zOr=Y0();function WOr(r){return zOr(0,r)}dq.exports=WOr});var hs=s(($ke,mq)=>{"use strict";var HOr=gq();mq.exports=HOr});var hq=s((Zke,yq)=>{"use strict";var we=Qr(),XOr=H1(),xOr=x1(),JOr=J0(),YOr=Rn(),$Or=Y0(),ZOr=d5(),QOr=$0(),KOr=ly(),r_r=rq(),e_r=ms(),t_r=uq(),i_r=ys(),a_r=J2(),n_r=si(),s_r=hs();function u_r(r){return we(r,"bbinary2d",XOr),we(r,"bternary2d",xOr),we(r,"broadcastShapes",JOr),we(r,"filled",YOr),we(r,"filled2d",$Or),we(r,"filled2dBy",ZOr),we(r,"flatten2d",QOr),we(r,"iterator2array",KOr),we(r,"linspace",r_r),we(r,"normalizeBroadcastArgs",e_r),we(r,"ones2d",t_r),we(r,"strided2array2d",i_r),we(r,"unary2d",a_r),we(r,"zeros",n_r),we(r,"zeros2d",s_r),r}yq.exports=u_r});var wq=s((Qke,bq)=>{"use strict";var qq=V();function o_r(r,e,t,i,a){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(qq('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(a!=="closed"&&a!=="open")throw new TypeError(qq('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),a))}return i==="closed"||i===void 0?a==="closed"||a===void 0?r>=e&&r<=t:r>=e&&r<t:a==="closed"||a===void 0?r>e&&r<=t:r>e&&r<t}bq.exports=o_r});var Sq=s((Kke,Eq)=>{"use strict";var v_r=wq();Eq.exports=v_r});var Oq=s((rCe,Nq)=>{"use strict";var f_r=Sr().isPrimitive,c_r=Sq(),l_r=V();function p_r(r,e,t,i,a,n){var u,o;if(!(f_r(r)&&c_r(r,e,t,i,a)))throw i==="closed"?u="[":u="(",a==="closed"?o="]":o=")",new TypeError(l_r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",n,u,e,t,o,String(r)))}Nq.exports=p_r});var Aq=s((eCe,_q)=>{"use strict";var d_r=Oq();_q.exports=d_r});var Iq=s((tCe,Tq)=>{"use strict";var g_r=de().isPrimitive,m_r=V();function y_r(r,e){if(!g_r(r))throw new TypeError(m_r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Tq.exports=y_r});var Pq=s((iCe,Rq)=>{"use strict";var h_r=Iq();Rq.exports=h_r});var Fq=s((aCe,Lq)=>{"use strict";function q_r(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,e!==1&&i!==1&&i!==e||t!==1&&a!==1&&a!==t)return!1;return!0}Lq.exports=q_r});var Mq=s((nCe,jq)=>{"use strict";var b_r=Fq();jq.exports=b_r});var kq=s((sCe,Bq)=>{"use strict";var w_r=V(),E_r=Mq();function S_r(r,e,t){if(!E_r(r,e))throw new TypeError(w_r("invalid argument. %s must be broadcast compatible.",t))}Bq.exports=S_r});var Vq=s((uCe,Cq)=>{"use strict";var N_r=kq();Cq.exports=N_r});var Uq=s((oCe,Gq)=>{"use strict";function O_r(r){var e,t,i,a,n,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(n=arguments[u],i=n.length,a=n[0].length,i!==1&&i!==e||a!==1&&a!==t)return!1;return!0}Gq.exports=O_r});var zq=s((vCe,Dq)=>{"use strict";var __r=Uq();Dq.exports=__r});var Hq=s((fCe,Wq)=>{"use strict";var A_r=V(),T_r=zq();function I_r(r,e,t,i){if(!T_r(r,e))throw new TypeError(A_r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Wq.exports=I_r});var xq=s((cCe,Xq)=>{"use strict";var R_r=Hq();Xq.exports=R_r});var Yq=s((lCe,Jq)=>{"use strict";var P_r=typeof Object.defineProperty=="function"?Object.defineProperty:null;Jq.exports=P_r});var Zq=s((pCe,$q)=>{"use strict";var L_r=Yq();function F_r(){try{return L_r({},"x",{}),!0}catch{return!1}}$q.exports=F_r});var Kq=s((dCe,Qq)=>{"use strict";var j_r=Object.defineProperty;Qq.exports=j_r});var Y2=s((gCe,rb)=>{"use strict";function M_r(r){return typeof r=="number"}rb.exports=M_r});var $2=s((mCe,tb)=>{"use strict";function B_r(r){return r[0]==="-"}function eb(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function k_r(r,e,t){var i=!1,a=e-r.length;return a<0||(B_r(r)&&(i=!0,r=r.substr(1)),r=t?r+eb(a):eb(a)+r,i&&(r="-"+r)),r}tb.exports=k_r});var sb=s((yCe,nb)=>{"use strict";var C_r=Y2(),ib=$2(),V_r=String.prototype.toLowerCase,ab=String.prototype.toUpperCase;function G_r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!C_r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ib(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=ib(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===ab.call(r.specifier)?ab.call(t):V_r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}nb.exports=G_r});var ob=s((hCe,ub)=>{"use strict";function U_r(r){return typeof r=="string"}ub.exports=U_r});var cb=s((qCe,fb)=>{"use strict";var D_r=Math.abs,z_r=String.prototype.toLowerCase,vb=String.prototype.toUpperCase,aa=String.prototype.replace,W_r=/e\+(\d)$/,H_r=/e-(\d)$/,X_r=/^(\d+)$/,x_r=/^(\d+)e/,J_r=/\.0$/,Y_r=/\.0*e/,$_r=/(\..*[^0])0*e/;function Z_r(r,e){var t,i;switch(e.specifier){case"e":case"E":i=r.toExponential(e.precision);break;case"f":case"F":i=r.toFixed(e.precision);break;case"g":case"G":D_r(r)<1e-4?(t=e.precision,t>0&&(t-=1),i=r.toExponential(t)):i=r.toPrecision(e.precision),e.alternate||(i=aa.call(i,$_r,"$1e"),i=aa.call(i,Y_r,"e"),i=aa.call(i,J_r,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=aa.call(i,W_r,"e+0$1"),i=aa.call(i,H_r,"e-0$1"),e.alternate&&(i=aa.call(i,X_r,"$1."),i=aa.call(i,x_r,"$1.e")),r>=0&&e.sign&&(i=e.sign+i),i=e.specifier===vb.call(e.specifier)?vb.call(i):z_r.call(i),i}fb.exports=Z_r});var db=s((bCe,pb)=>{"use strict";function lb(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Q_r(r,e,t){var i=e-r.length;return i<0||(r=t?r+lb(i):lb(i)+r),r}pb.exports=Q_r});var mb=s((wCe,gb)=>{"use strict";var K_r=sb(),rAr=ob(),eAr=Y2(),tAr=cb(),iAr=db(),aAr=$2(),nAr=String.fromCharCode,sAr=Array.isArray;function qs(r){return r!==r}function uAr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function oAr(r){var e,t,i,a,n,u,o,v,f,c;if(!sAr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],rAr(i))u+=i;else{if(e=i.precision!==void 0,i=uAr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,c=0;c<t.length;c++)switch(a=t.charAt(c),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,qs(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,qs(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=K_r(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!qs(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=qs(n)?String(i.arg):nAr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(e||(i.precision=6),v=parseFloat(i.arg),!isFinite(v)){if(!eAr(i.arg))throw new Error("invalid floating-point number. Value: "+u);v=i.arg,i.padZeros=!1}i.arg=tAr(v,i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=aAr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=iAr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}gb.exports=oAr});var hb=s((ECe,yb)=>{"use strict";var vAr=mb();yb.exports=vAr});var bb=s((SCe,qb)=>{"use strict";var bs=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function fAr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function cAr(r){var e,t,i,a;for(t=[],a=0,i=bs.exec(r);i;)e=r.slice(a,bs.lastIndex-i[0].length),e.length&&t.push(e),i[6]==="%"?t.push("%"):t.push(fAr(i)),a=bs.lastIndex,i=bs.exec(r);return e=r.slice(a),e.length&&t.push(e),t}qb.exports=cAr});var Eb=s((NCe,wb)=>{"use strict";var lAr=bb();wb.exports=lAr});var Nb=s((OCe,Sb)=>{"use strict";function pAr(r){return typeof r=="string"}Sb.exports=pAr});var Ab=s((_Ce,_b)=>{"use strict";var dAr=hb(),gAr=Eb(),mAr=Nb();function Ob(r){var e,t;if(!mAr(r))throw new TypeError(Ob("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[gAr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return dAr.apply(null,e)}_b.exports=Ob});var Ib=s((ACe,Tb)=>{"use strict";var yAr=Ab();Tb.exports=yAr});var Mb=s((TCe,jb)=>{"use strict";var Rb=Ib(),Ua=Object.prototype,Pb=Ua.toString,Lb=Ua.__defineGetter__,Fb=Ua.__defineSetter__,hAr=Ua.__lookupGetter__,qAr=Ua.__lookupSetter__;function bAr(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||Pb.call(r)==="[object Array]")throw new TypeError(Rb("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Pb.call(t)==="[object Array]")throw new TypeError(Rb("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(hAr.call(r,e)||qAr.call(r,e)?(i=r.__proto__,r.__proto__=Ua,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Lb&&Lb.call(r,e,t.get),u&&Fb&&Fb.call(r,e,t.set),r}jb.exports=bAr});var kb=s((ICe,Bb)=>{"use strict";var wAr=Zq(),EAr=Kq(),SAr=Mb(),Z2;wAr()?Z2=EAr:Z2=SAr;Bb.exports=Z2});var Vb=s((RCe,Cb)=>{"use strict";var NAr=kb();function OAr(r,e,t){NAr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Cb.exports=OAr});var Ub=s((PCe,Gb)=>{"use strict";var _Ar=Vb();Gb.exports=_Ar});var zb=s((LCe,Db)=>{"use strict";function AAr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}Db.exports=AAr});var Hb=s((FCe,Wb)=>{"use strict";function TAr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}Wb.exports=TAr});var Jb=s((jCe,xb)=>{"use strict";var IAr=Ub(),Xb=zb(),RAr=Hb();IAr(Xb,"assign",RAr);xb.exports=Xb});var $b=s((MCe,Yb)=>{"use strict";var PAr=Jb();function LAr(r,e,t,i){var a=PAr(e,t,i);return a[0]>=0&&a[1]<r}Yb.exports=LAr});var Q2=s((BCe,Zb)=>{"use strict";var FAr=$b();Zb.exports=FAr});var Kb=s((kCe,Qb)=>{"use strict";var jAr=Q2();function MAr(r,e,t,i){if(e.length&&!jAr(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}Qb.exports=MAr});var ew=s((CCe,rw)=>{"use strict";var BAr=Kb();rw.exports=BAr});var iw=s((VCe,tw)=>{"use strict";var kAr=V();function CAr(r,e){if(r===void 0)throw new Error(kAr("invalid invocation. Must provide %s.",e))}tw.exports=CAr});var K2=s((GCe,aw)=>{"use strict";var VAr=iw();aw.exports=VAr});var sw=s((UCe,nw)=>{"use strict";var GAr=V();function UAr(r,e,t,i){if(!(r>e))throw new TypeError(GAr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}nw.exports=UAr});var ow=s((DCe,uw)=>{"use strict";var DAr=sw();uw.exports=DAr});var fw=s((zCe,vw)=>{"use strict";var zAr=V();function WAr(r,e,t,i){if(!(r>=e))throw new TypeError(zAr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}vw.exports=WAr});var lw=s((WCe,cw)=>{"use strict";var HAr=fw();cw.exports=HAr});var dw=s((HCe,pw)=>{"use strict";var XAr=ye().isPrimitive,xAr=V();function JAr(r,e){if(!XAr(r))throw new TypeError(xAr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}pw.exports=JAr});var mw=s((XCe,gw)=>{"use strict";var YAr=dw();gw.exports=YAr});var hw=s((xCe,yw)=>{"use strict";var $Ar=V();function ZAr(r,e,t,i){if(!(r<e))throw new TypeError($Ar("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}yw.exports=ZAr});var bw=s((JCe,qw)=>{"use strict";var QAr=hw();qw.exports=QAr});var Ew=s((YCe,ww)=>{"use strict";var KAr=V();function rTr(r,e,t,i){if(!(r<=e))throw new TypeError(KAr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}ww.exports=rTr});var Nw=s(($Ce,Sw)=>{"use strict";var eTr=Ew();Sw.exports=eTr});var _w=s((ZCe,Ow)=>{"use strict";var tTr=be().isPrimitive,iTr=V();function aTr(r,e){if(!tTr(r))throw new TypeError(iTr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Ow.exports=aTr});var Tw=s((QCe,Aw)=>{"use strict";var nTr=_w();Aw.exports=nTr});var rv=s((KCe,Iw)=>{"use strict";var sTr=Sr().isPrimitive;function uTr(r){return sTr(r)&&r>=0}Iw.exports=uTr});var ev=s((rVe,Rw)=>{"use strict";var oTr=Sr().isObject;function vTr(r){return oTr(r)&&r.valueOf()>=0}Rw.exports=vTr});var Lw=s((eVe,Pw)=>{"use strict";var fTr=rv(),cTr=ev();function lTr(r){return fTr(r)||cTr(r)}Pw.exports=lTr});var ws=s((tVe,jw)=>{"use strict";var Fw=D(),tv=Lw(),pTr=rv(),dTr=ev();Fw(tv,"isPrimitive",pTr);Fw(tv,"isObject",dTr);jw.exports=tv});var Bw=s((iVe,Mw)=>{"use strict";var gTr=ws().isPrimitive,mTr=V();function yTr(r,e){if(!gTr(r))throw new TypeError(mTr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Mw.exports=yTr});var Cw=s((aVe,kw)=>{"use strict";var hTr=Bw();kw.exports=hTr});var Gw=s((nVe,Vw)=>{"use strict";var qTr=Sr().isPrimitive,bTr=V();function wTr(r,e){if(!qTr(r))throw new TypeError(bTr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Vw.exports=wTr});var Dw=s((sVe,Uw)=>{"use strict";var ETr=Gw();Uw.exports=ETr});var Ww=s((uVe,zw)=>{"use strict";var STr=V();function NTr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(STr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}zw.exports=NTr});var Xw=s((oVe,Hw)=>{"use strict";var OTr=Ww();Hw.exports=OTr});var iv=s((vVe,xw)=>{"use strict";var _Tr=ye().isPrimitive;function ATr(r){return _Tr(r)&&r>0}xw.exports=ATr});var av=s((fVe,Jw)=>{"use strict";var TTr=ye().isObject;function ITr(r){return TTr(r)&&r.valueOf()>0}Jw.exports=ITr});var $w=s((cVe,Yw)=>{"use strict";var RTr=iv(),PTr=av();function LTr(r){return RTr(r)||PTr(r)}Yw.exports=LTr});var nt=s((lVe,Qw)=>{"use strict";var Zw=D(),nv=$w(),FTr=iv(),jTr=av();Zw(nv,"isPrimitive",FTr);Zw(nv,"isObject",jTr);Qw.exports=nv});var rE=s((pVe,Kw)=>{"use strict";var MTr=nt().isPrimitive,BTr=V();function kTr(r,e){if(!MTr(r))throw new TypeError(BTr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Kw.exports=kTr});var sv=s((dVe,eE)=>{"use strict";var CTr=rE();eE.exports=CTr});var uv=s((gVe,tE)=>{"use strict";var VTr=Sr().isPrimitive;function GTr(r){return VTr(r)&&r>0}tE.exports=GTr});var ov=s((mVe,iE)=>{"use strict";var UTr=Sr().isObject;function DTr(r){return UTr(r)&&r.valueOf()>0}iE.exports=DTr});var nE=s((yVe,aE)=>{"use strict";var zTr=uv(),WTr=ov();function HTr(r){return zTr(r)||WTr(r)}aE.exports=HTr});var zr=s((hVe,uE)=>{"use strict";var sE=D(),vv=nE(),XTr=uv(),xTr=ov();sE(vv,"isPrimitive",XTr);sE(vv,"isObject",xTr);uE.exports=vv});var vE=s((qVe,oE)=>{"use strict";var JTr=zr().isPrimitive,YTr=V();function $Tr(r,e){if(!JTr(r))throw new TypeError(YTr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}oE.exports=$Tr});var cE=s((bVe,fE)=>{"use strict";var ZTr=vE();fE.exports=ZTr});var fv=s((wVe,lE)=>{"use strict";var QTr=Sr().isPrimitive;function KTr(r){return QTr(r)&&r>=0&&r<=1}lE.exports=KTr});var cv=s((EVe,pE)=>{"use strict";var rIr=Sr().isObject;function eIr(r){return rIr(r)&&r.valueOf()>=0&&r.valueOf()<=1}pE.exports=eIr});var gE=s((SVe,dE)=>{"use strict";var tIr=fv(),iIr=cv();function aIr(r){return tIr(r)||iIr(r)}dE.exports=aIr});var Gn=s((NVe,yE)=>{"use strict";var mE=D(),lv=gE(),nIr=fv(),sIr=cv();mE(lv,"isPrimitive",nIr);mE(lv,"isObject",sIr);yE.exports=lv});var qE=s((OVe,hE)=>{"use strict";var uIr=Gn().isPrimitive,oIr=V();function vIr(r,e){if(!uIr(r))throw new TypeError(oIr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}hE.exports=vIr});var wE=s((_Ve,bE)=>{"use strict";var fIr=qE();bE.exports=fIr});var SE=s((AVe,EE)=>{"use strict";var cIr=qe(),lIr=V();function pIr(r,e){if(!cIr(r))throw new TypeError(lIr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}EE.exports=pIr});var OE=s((TVe,NE)=>{"use strict";var dIr=SE();NE.exports=dIr});var AE=s((IVe,_E)=>{"use strict";function gIr(r){return r.length===1||r[0].length===1}_E.exports=gIr});var IE=s((RVe,TE)=>{"use strict";var mIr=AE();TE.exports=mIr});var PE=s((PVe,RE)=>{"use strict";var yIr=qe(),hIr=IE();function qIr(r){return yIr(r)&&hIr(r)}RE.exports=qIr});var pv=s((LVe,LE)=>{"use strict";var bIr=PE();LE.exports=bIr});var jE=s((FVe,FE)=>{"use strict";var wIr=V(),EIr=pv();function SIr(r,e){if(!EIr(r))throw new TypeError(wIr("invalid argument. %s must consist of only a single row or a single column.",e))}FE.exports=SIr});var BE=s((jVe,ME)=>{"use strict";var NIr=jE();ME.exports=NIr});var CE=s((MVe,kE)=>{"use strict";function OIr(r){var e,t,i,a;for(e=r.length,t=r[0].length,a=1;a<arguments.length;a++)if(i=arguments[a],i.length!==e||i[0].length!==t)return!1;return!0}kE.exports=OIr});var GE=s((BVe,VE)=>{"use strict";var _Ir=CE();VE.exports=_Ir});var DE=s((kVe,UE)=>{"use strict";var AIr=V(),TIr=GE();function IIr(r,e,t){if(!TIr(r,e))throw new TypeError(AIr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}UE.exports=IIr});var WE=s((CVe,zE)=>{"use strict";var RIr=DE();zE.exports=RIr});var XE=s((VVe,HE)=>{"use strict";var PIr=Jr().isPrimitive,LIr=V();function FIr(r,e){if(!PIr(r))throw new TypeError(LIr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}HE.exports=FIr});var JE=s((GVe,xE)=>{"use strict";var jIr=XE();xE.exports=jIr});var $E=s((UVe,YE)=>{"use strict";var MIr=V(),BIr=be().isPrimitive;function kIr(r,e){var t;for(t=0;t<r.length;t++)if(!BIr(r[t]))throw new TypeError(MIr("invalid argument. %s must contain only nonnegative integers.",e))}YE.exports=kIr});var QE=s((DVe,ZE)=>{"use strict";var CIr=$E();ZE.exports=CIr});var rS=s((zVe,KE)=>{"use strict";var VIr=V(),GIr=ye().isPrimitive;function UIr(r,e){var t;for(t=0;t<r.length;t++)if(!GIr(r[t]))throw new TypeError(VIr("invalid argument. %s must contain only integers.",e))}KE.exports=UIr});var tS=s((WVe,eS)=>{"use strict";var DIr=rS();eS.exports=DIr});var aS=s((HVe,iS)=>{"use strict";var zIr=V();function WIr(r){throw new Error(zIr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}iS.exports=WIr});var sS=s((XVe,nS)=>{"use strict";var HIr=aS();nS.exports=HIr});var vS=s((xVe,oS)=>{"use strict";var uS=sv(),XIr=K2();function xIr(r,e,t){uS(r,"Number of rows"),uS(e,"Number of columns"),XIr(t,"a pseudorandom number generator seed")}oS.exports=xIr});var cS=s((JVe,fS)=>{"use strict";var JIr=vS();fS.exports=JIr});var pS=s((YVe,lS)=>{"use strict";var YIr=Se(),$Ir=P2();function ZIr(r){return r!=null&&typeof r!="function"&&typeof r.length=="number"&&YIr(r.length)&&r.length>=0&&r.length<=$Ir}lS.exports=ZIr});var gS=s(($Ve,dS)=>{"use strict";var QIr=pS();dS.exports=QIr});var yS=s((ZVe,mS)=>{"use strict";var KIr=gS(),rRr=V();function eRr(r){if(typeof r!="function")throw new TypeError(rRr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!KIr(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}mS.exports=eRr});var dv=s((QVe,hS)=>{"use strict";var tRr=yS();hS.exports=tRr});var wS=s((KVe,bS)=>{"use strict";var gv=ye(),qS=D(),mv=dv(),iRr=mv(gv.isPrimitive),aRr=mv(gv.isObject),yv=mv(gv);qS(yv,"primitives",iRr);qS(yv,"objects",aRr);bS.exports=yv});var NS=s((rGe,SS)=>{"use strict";var hv=be(),ES=D(),qv=dv(),nRr=qv(hv.isPrimitive),sRr=qv(hv.isObject),bv=qv(hv);ES(bv,"primitives",nRr);ES(bv,"objects",sRr);SS.exports=bv});var _S=s((eGe,OS)=>{"use strict";var st=Qr(),uRr=qe(),oRr=ye().isPrimitive,vRr=wS().primitives,fRr=be().isPrimitive,cRr=NS().primitives,lRr=ws().isPrimitive,pRr=Sr().isPrimitive,dRr=nt().isPrimitive,gRr=zr().isPrimitive,mRr=Jr().isPrimitive;function yRr(r){return st(r,"isArray",uRr),st(r,"isInteger",oRr),st(r,"isIntegerArray",vRr),st(r,"isNonNegativeInteger",fRr),st(r,"isNonNegativeIntegerArray",cRr),st(r,"isNonNegativeNumber",lRr),st(r,"isNumber",pRr),st(r,"isPositiveInteger",dRr),st(r,"isPositiveNumber",gRr),st(r,"isString",mRr),r}OS.exports=yRr});var TS=s((tGe,AS)=>{"use strict";var Wr=Qr(),hRr=Aq(),qRr=Pq(),bRr=Vq(),wRr=xq(),ERr=ew(),SRr=K2(),NRr=ow(),ORr=lw(),_Rr=mw(),ARr=bw(),TRr=Nw(),IRr=Tw(),RRr=Cw(),PRr=Dw(),LRr=Xw(),FRr=sv(),jRr=cE(),MRr=wE(),BRr=OE(),kRr=BE(),CRr=WE(),VRr=JE(),GRr=QE(),URr=tS(),DRr=sS(),zRr=cS(),WRr=_S();function HRr(r){return Wr(r,"isBetween",hRr),Wr(r,"isBoolean",qRr),Wr(r,"isBroadcastCompatible",bRr),Wr(r,"isBroadcastCompatibleWith",wRr),Wr(r,"isBufferLengthCompatible",ERr),Wr(r,"isDefined",SRr),Wr(r,"isGreaterThan",NRr),Wr(r,"isGreaterThanEqual",ORr),Wr(r,"isInteger",_Rr),Wr(r,"isLessThan",ARr),Wr(r,"isLessThanEqual",TRr),Wr(r,"isNonNegativeInteger",IRr),Wr(r,"isNonNegativeNumber",RRr),Wr(r,"isNumber",PRr),Wr(r,"isOneOf",LRr),Wr(r,"isPositiveInteger",FRr),Wr(r,"isPositiveNumber",jRr),Wr(r,"isProbability",MRr),Wr(r,"isRange",BRr),Wr(r,"isRange1d",kRr),Wr(r,"isSameShape",CRr),Wr(r,"isString",VRr),Wr(r,"isValidShape",GRr),Wr(r,"isValidStrides",URr),Wr(r,"unrecognizedOptionName",DRr),Wr(r,"verifyCommonPRNGArgs",zRr),Wr(r,"base",WRr({})),r}AS.exports=HRr});var RS=s((iGe,IS)=>{"use strict";var wv=4;function XRr(r,e,t,i,a,n){var u,o,v,f;if(r<=0||e===0)return a;if(i===1&&n===1){if(v=r%wv,v>0)for(f=0;f<v;f++)a[f]+=e*t[f];if(r<wv)return a;for(f=v;f<r;f+=wv)a[f]+=e*t[f],a[f+1]+=e*t[f+1],a[f+2]+=e*t[f+2],a[f+3]+=e*t[f+3];return a}for(i<0?u=(1-r)*i:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r;f++)a[o]+=e*t[u],u+=i,o+=n;return a}IS.exports=XRr});var LS=s((aGe,PS)=>{"use strict";var Un=4;function xRr(r,e,t,i,a,n,u,o){var v,f,c,l;if(r<=0||e===0)return n;if(v=a,f=o,i===1&&u===1){if(c=r%Un,c>0)for(l=0;l<c;l++)n[f]+=e*t[v],v+=i,f+=u;if(r<Un)return n;for(l=c;l<r;l+=Un)n[f]+=e*t[v],n[f+1]+=e*t[v+1],n[f+2]+=e*t[v+2],n[f+3]+=e*t[v+3],v+=Un,f+=Un;return n}for(l=0;l<r;l++)n[f]+=e*t[v],v+=i,f+=u;return n}PS.exports=xRr});var Ev=s((nGe,jS)=>{"use strict";var JRr=D(),FS=RS(),YRr=LS();JRr(FS,"ndarray",YRr);jS.exports=FS});var kS=s((sGe,BS)=>{"use strict";var MS=Qr(),$Rr=Ev().ndarray,ZRr=Ev().ndarray;function QRr(r){return MS(r,"daxpy",$Rr),MS(r,"saxpy",ZRr),r}BS.exports=QRr});var VS=s((uGe,CS)=>{"use strict";var KRr=ia(),rPr=re();function ePr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(rPr(r)==="[object Error]")return!0;r=KRr(r)}return!1}CS.exports=ePr});var US=s((oGe,GS)=>{"use strict";var tPr=VS();GS.exports=tPr});var Sv=s((vGe,DS)=>{"use strict";function iPr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}DS.exports=iPr});var WS=s((fGe,zS)=>{"use strict";var aPr=Sv(),nPr=aPr();zS.exports=nPr});var xS=s((cGe,XS)=>{"use strict";var sPr=D(),HS=Sv(),uPr=WS();sPr(HS,"REGEXP",uPr);XS.exports=HS});var YS=s((lGe,JS)=>{"use strict";var oPr=Jr().isPrimitive,vPr=xS(),fPr=V();function cPr(r){if(!oPr(r))throw new TypeError(fPr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=vPr().exec(r),r?new RegExp(r[1],r[2]):null}JS.exports=cPr});var ZS=s((pGe,$S)=>{"use strict";var lPr=YS();$S.exports=lPr});var Nv=s((dGe,QS)=>{"use strict";var pPr=Sr().isPrimitive,dPr=W();function gPr(r){return pPr(r)&&dPr(r)}QS.exports=gPr});var Ov=s((gGe,KS)=>{"use strict";var mPr=Sr().isObject,yPr=W();function hPr(r){return mPr(r)&&yPr(r.valueOf())}KS.exports=hPr});var eN=s((mGe,rN)=>{"use strict";var qPr=Nv(),bPr=Ov();function wPr(r){return qPr(r)||bPr(r)}rN.exports=wPr});var oe=s((yGe,iN)=>{"use strict";var tN=D(),_v=eN(),EPr=Nv(),SPr=Ov();tN(_v,"isPrimitive",EPr);tN(_v,"isObject",SPr);iN.exports=_v});var uN=s((hGe,sN)=>{"use strict";var aN=oe(),NPr=Ve(),OPr=Jr().isPrimitive,_Pr=ye().isPrimitive,nN=V();function APr(r,e,t){var i,a;if(!NPr(r)&&!OPr(r))throw new TypeError(nN("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!_Pr(t))throw new TypeError(nN("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;a=t}else a=i+t,a<0&&(a=0)}else a=0;if(aN(e)){for(;a<i;a++)if(aN(r[a]))return a}else for(;a<i;a++)if(r[a]===e)return a;return-1}sN.exports=APr});var Es=s((qGe,oN)=>{"use strict";var TPr=uN();oN.exports=TPr});var Ss=s((bGe,vN)=>{"use strict";function IPr(r){return Object.keys(Object(r))}vN.exports=IPr});var cN=s((wGe,fN)=>{"use strict";var RPr=Ss();function PPr(){return(RPr(arguments)||"").length!==2}function LPr(){return PPr(1,2)}fN.exports=LPr});var pN=s((EGe,lN)=>{"use strict";var FPr=typeof Object.keys<"u";lN.exports=FPr});var Av=s((SGe,dN)=>{"use strict";var jPr=re();function MPr(r){return jPr(r)==="[object Arguments]"}dN.exports=MPr});var yN=s((NGe,mN)=>{"use strict";var BPr=Av(),gN;function kPr(){return BPr(arguments)}gN=kPr();mN.exports=gN});var Tv=s((OGe,hN)=>{"use strict";var CPr=Object.prototype.propertyIsEnumerable;hN.exports=CPr});var wN=s((_Ge,bN)=>{"use strict";var VPr=Tv(),qN;function GPr(){return!VPr.call("beep","0")}qN=GPr();bN.exports=qN});var SN=s((AGe,EN)=>{"use strict";var UPr=Jr(),DPr=oe().isPrimitive,zPr=ye().isPrimitive,WPr=Tv(),HPr=wN();function XPr(r,e){var t;return r==null?!1:(t=WPr.call(r,e),!t&&HPr&&UPr(r)?(e=+e,!DPr(e)&&zPr(e)&&e>=0&&e<r.length):t)}EN.exports=XPr});var Dn=s((TGe,NN)=>{"use strict";var xPr=SN();NN.exports=xPr});var _N=s((IGe,ON)=>{"use strict";var JPr=vr(),YPr=Dn(),$Pr=qe(),ZPr=Se(),QPr=ba();function KPr(r){return r!==null&&typeof r=="object"&&!$Pr(r)&&typeof r.length=="number"&&ZPr(r.length)&&r.length>=0&&r.length<=QPr&&JPr(r,"callee")&&!YPr(r,"callee")}ON.exports=KPr});var Rv=s((RGe,AN)=>{"use strict";var rLr=yN(),eLr=Av(),tLr=_N(),Iv;rLr?Iv=eLr:Iv=tLr;AN.exports=Iv});var RN=s((PGe,IN)=>{"use strict";var iLr=Rv(),TN=Ss(),aLr=Array.prototype.slice;function nLr(r){return iLr(r)?TN(aLr.call(r)):TN(r)}IN.exports=nLr});var LN=s((LGe,PN)=>{"use strict";function sLr(){}PN.exports=sLr});var Pr=s((FGe,FN)=>{"use strict";var uLr=LN();FN.exports=uLr});var MN=s((jGe,jN)=>{"use strict";var oLr=Dn(),vLr=Pr(),fLr=oLr(vLr,"prototype");jN.exports=fLr});var kN=s((MGe,BN)=>{"use strict";var cLr=Dn(),lLr={toString:null},pLr=!cLr(lLr,"toString");BN.exports=pLr});var Pv=s((BGe,CN)=>{"use strict";function dLr(r){return r.constructor&&r.constructor.prototype===r}CN.exports=dLr});var VN=s((kGe,gLr)=>{gLr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var UN=s((CGe,GN)=>{"use strict";var mLr=typeof window>"u"?void 0:window;GN.exports=mLr});var HN=s((VGe,WN)=>{"use strict";var yLr=vr(),hLr=Es(),DN=Z0(),qLr=Pv(),bLr=VN(),Da=UN(),zN;function wLr(){var r;if(DN(Da)==="undefined")return!1;for(r in Da)try{hLr(bLr,r)===-1&&yLr(Da,r)&&Da[r]!==null&&DN(Da[r])==="object"&&qLr(Da[r])}catch{return!0}return!1}zN=wLr();WN.exports=zN});var xN=s((GGe,XN)=>{"use strict";var ELr=typeof window<"u";XN.exports=ELr});var $N=s((UGe,YN)=>{"use strict";var SLr=HN(),JN=Pv(),NLr=xN();function OLr(r){if(NLr===!1&&!SLr)return JN(r);try{return JN(r)}catch{return!1}}YN.exports=OLr});var ZN=s((DGe,_Lr)=>{_Lr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var rO=s((zGe,KN)=>{"use strict";var ALr=u2(),Lv=vr(),TLr=Rv(),ILr=MN(),RLr=kN(),PLr=$N(),QN=ZN();function LLr(r){var e,t,i,a,n,u,o;if(a=[],TLr(r)){for(o=0;o<r.length;o++)a.push(o.toString());return a}if(typeof r=="string"){if(r.length>0&&!Lv(r,"0"))for(o=0;o<r.length;o++)a.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!ALr(r))return a;t=ILr&&i}for(n in r)!(t&&n==="prototype")&&Lv(r,n)&&a.push(String(n));if(RLr)for(e=PLr(r),o=0;o<QN.length;o++)u=QN[o],!(e&&u==="constructor")&&Lv(r,u)&&a.push(String(u));return a}KN.exports=LLr});var tO=s((WGe,eO)=>{"use strict";var FLr=cN(),jLr=pN(),MLr=Ss(),BLr=RN(),kLr=rO(),Ns;jLr?FLr()?Ns=BLr:Ns=MLr:Ns=kLr;eO.exports=Ns});var za=s((HGe,iO)=>{"use strict";var CLr=tO();iO.exports=CLr});var nO=s((XGe,aO)=>{"use strict";var VLr=typeof Object.getOwnPropertyNames<"u";aO.exports=VLr});var oO=s((xGe,uO)=>{"use strict";var sO=Va(),GLr=sO.getOwnPropertyNames;function ULr(r){return GLr(sO(r))}uO.exports=ULr});var fO=s((JGe,vO)=>{"use strict";var DLr=Va(),zLr=za();function WLr(r){return zLr(DLr(r))}vO.exports=WLr});var lO=s((YGe,cO)=>{"use strict";var HLr=nO(),XLr=oO(),xLr=fO(),Fv;HLr?Fv=XLr:Fv=xLr;cO.exports=Fv});var dO=s(($Ge,pO)=>{"use strict";var JLr=typeof Object.getOwnPropertyDescriptor<"u";pO.exports=JLr});var mO=s((ZGe,gO)=>{"use strict";var YLr=Object.getOwnPropertyDescriptor;function $Lr(r,e){var t;return r==null?null:(t=YLr(r,e),t===void 0?null:t)}gO.exports=$Lr});var hO=s((QGe,yO)=>{"use strict";var ZLr=vr();function QLr(r,e){return ZLr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}yO.exports=QLr});var bO=s((KGe,qO)=>{"use strict";var KLr=dO(),rFr=mO(),eFr=hO(),jv;KLr?jv=rFr:jv=eFr;qO.exports=jv});var EO=s((rUe,wO)=>{"use strict";var tFr=typeof Buffer=="function"?Buffer:null;wO.exports=tFr});var NO=s((eUe,SO)=>{"use strict";var iFr=Yi(),Os=EO();function aFr(){var r,e;if(typeof Os!="function")return!1;try{typeof Os.from=="function"?e=Os.from([1,2,3,4]):e=new Os([1,2,3,4]),r=iFr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}SO.exports=aFr});var _O=s((tUe,OO)=>{"use strict";var nFr=NO();OO.exports=nFr});var IO=s(_s=>{"use strict";_s.byteLength=uFr;_s.toByteArray=vFr;_s.fromByteArray=lFr;var ut=[],We=[],sFr=typeof Uint8Array<"u"?Uint8Array:Array,Mv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(na=0,AO=Mv.length;na<AO;++na)ut[na]=Mv[na],We[Mv.charCodeAt(na)]=na;var na,AO;We["-".charCodeAt(0)]=62;We["_".charCodeAt(0)]=63;function TO(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function uFr(r){var e=TO(r),t=e[0],i=e[1];return(t+i)*3/4-i}function oFr(r,e,t){return(e+t)*3/4-t}function vFr(r){var e,t=TO(r),i=t[0],a=t[1],n=new sFr(oFr(r,i,a)),u=0,o=a>0?i-4:i,v;for(v=0;v<o;v+=4)e=We[r.charCodeAt(v)]<<18|We[r.charCodeAt(v+1)]<<12|We[r.charCodeAt(v+2)]<<6|We[r.charCodeAt(v+3)],n[u++]=e>>16&255,n[u++]=e>>8&255,n[u++]=e&255;return a===2&&(e=We[r.charCodeAt(v)]<<2|We[r.charCodeAt(v+1)]>>4,n[u++]=e&255),a===1&&(e=We[r.charCodeAt(v)]<<10|We[r.charCodeAt(v+1)]<<4|We[r.charCodeAt(v+2)]>>2,n[u++]=e>>8&255,n[u++]=e&255),n}function fFr(r){return ut[r>>18&63]+ut[r>>12&63]+ut[r>>6&63]+ut[r&63]}function cFr(r,e,t){for(var i,a=[],n=e;n<t;n+=3)i=(r[n]<<16&16711680)+(r[n+1]<<8&65280)+(r[n+2]&255),a.push(fFr(i));return a.join("")}function lFr(r){for(var e,t=r.length,i=t%3,a=[],n=16383,u=0,o=t-i;u<o;u+=n)a.push(cFr(r,u,u+n>o?o:u+n));return i===1?(e=r[t-1],a.push(ut[e>>2]+ut[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],a.push(ut[e>>10]+ut[e>>4&63]+ut[e<<2&63]+"=")),a.join("")}});var RO=s(Bv=>{Bv.read=function(r,e,t,i,a){var n,u,o=a*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?a-1:0,p=t?-1:1,m=r[e+l];for(l+=p,n=m&(1<<-c)-1,m>>=-c,c+=o;c>0;n=n*256+r[e+l],l+=p,c-=8);for(u=n&(1<<-c)-1,n>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(n===0)n=1-f;else{if(n===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),n=n-f}return(m?-1:1)*u*Math.pow(2,n-i)};Bv.write=function(r,e,t,i,a,n){var u,o,v,f=n*8-a-1,c=(1<<f)-1,l=c>>1,p=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:n-1,y=i?1:-1,g=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,a),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,a),u=0));a>=8;r[t+m]=o&255,m+=y,o/=256,a-=8);for(u=u<<a|o,f+=a;f>0;r[t+m]=u&255,m+=y,u/=256,f-=8);r[t+m-y]|=g*128}});var xO=s(xa=>{"use strict";var kv=IO(),Ha=RO(),PO=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;xa.Buffer=z;xa.SlowBuffer=hFr;xa.INSPECT_MAX_BYTES=50;var As=2147483647;xa.kMaxLength=As;z.TYPED_ARRAY_SUPPORT=pFr();!z.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function pFr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(z.prototype,"parent",{enumerable:!0,get:function(){if(!!z.isBuffer(this))return this.buffer}});Object.defineProperty(z.prototype,"offset",{enumerable:!0,get:function(){if(!!z.isBuffer(this))return this.byteOffset}});function bt(r){if(r>As)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,z.prototype),e}function z(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Uv(r)}return MO(r,e,t)}z.poolSize=8192;function MO(r,e,t){if(typeof r=="string")return gFr(r,e);if(ArrayBuffer.isView(r))return mFr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(ot(r,ArrayBuffer)||r&&ot(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ot(r,SharedArrayBuffer)||r&&ot(r.buffer,SharedArrayBuffer)))return Vv(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return z.from(i,e,t);let a=yFr(r);if(a)return a;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return z.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}z.from=function(r,e,t){return MO(r,e,t)};Object.setPrototypeOf(z.prototype,Uint8Array.prototype);Object.setPrototypeOf(z,Uint8Array);function BO(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function dFr(r,e,t){return BO(r),r<=0?bt(r):e!==void 0?typeof t=="string"?bt(r).fill(e,t):bt(r).fill(e):bt(r)}z.alloc=function(r,e,t){return dFr(r,e,t)};function Uv(r){return BO(r),bt(r<0?0:Dv(r)|0)}z.allocUnsafe=function(r){return Uv(r)};z.allocUnsafeSlow=function(r){return Uv(r)};function gFr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=kO(r,e)|0,i=bt(t),a=i.write(r,e);return a!==t&&(i=i.slice(0,a)),i}function Cv(r){let e=r.length<0?0:Dv(r.length)|0,t=bt(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function mFr(r){if(ot(r,Uint8Array)){let e=new Uint8Array(r);return Vv(e.buffer,e.byteOffset,e.byteLength)}return Cv(r)}function Vv(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,z.prototype),i}function yFr(r){if(z.isBuffer(r)){let e=Dv(r.length)|0,t=bt(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Wv(r.length)?bt(0):Cv(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Cv(r.data)}function Dv(r){if(r>=As)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+As.toString(16)+" bytes");return r|0}function hFr(r){return+r!=r&&(r=0),z.alloc(+r)}z.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==z.prototype};z.compare=function(e,t){if(ot(e,Uint8Array)&&(e=z.from(e,e.offset,e.byteLength)),ot(t,Uint8Array)&&(t=z.from(t,t.offset,t.byteLength)),!z.isBuffer(e)||!z.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,a=t.length;for(let n=0,u=Math.min(i,a);n<u;++n)if(e[n]!==t[n]){i=e[n],a=t[n];break}return i<a?-1:a<i?1:0};z.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};z.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return z.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let a=z.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){let u=e[i];if(ot(u,Uint8Array))n+u.length>a.length?(z.isBuffer(u)||(u=z.from(u)),u.copy(a,n)):Uint8Array.prototype.set.call(a,u,n);else if(z.isBuffer(u))u.copy(a,n);else throw new TypeError('"list" argument must be an Array of Buffers');n+=u.length}return a};function kO(r,e){if(z.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ot(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let a=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Gv(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return XO(r).length;default:if(a)return i?-1:Gv(r).length;e=(""+e).toLowerCase(),a=!0}}z.byteLength=kO;function qFr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return IFr(this,e,t);case"utf8":case"utf-8":return VO(this,e,t);case"ascii":return AFr(this,e,t);case"latin1":case"binary":return TFr(this,e,t);case"base64":return OFr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return RFr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}z.prototype._isBuffer=!0;function sa(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}z.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)sa(this,t,t+1);return this};z.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)sa(this,t,t+3),sa(this,t+1,t+2);return this};z.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)sa(this,t,t+7),sa(this,t+1,t+6),sa(this,t+2,t+5),sa(this,t+3,t+4);return this};z.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?VO(this,0,e):qFr.apply(this,arguments)};z.prototype.toLocaleString=z.prototype.toString;z.prototype.equals=function(e){if(!z.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:z.compare(this,e)===0};z.prototype.inspect=function(){let e="",t=xa.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};PO&&(z.prototype[PO]=z.prototype.inspect);z.prototype.compare=function(e,t,i,a,n){if(ot(e,Uint8Array)&&(e=z.from(e,e.offset,e.byteLength)),!z.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),a===void 0&&(a=0),n===void 0&&(n=this.length),t<0||i>e.length||a<0||n>this.length)throw new RangeError("out of range index");if(a>=n&&t>=i)return 0;if(a>=n)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,a>>>=0,n>>>=0,this===e)return 0;let u=n-a,o=i-t,v=Math.min(u,o),f=this.slice(a,n),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function CO(r,e,t,i,a){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Wv(t)&&(t=a?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(a)return-1;t=r.length-1}else if(t<0)if(a)t=0;else return-1;if(typeof e=="string"&&(e=z.from(e,i)),z.isBuffer(e))return e.length===0?-1:LO(r,e,t,i,a);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?a?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):LO(r,[e],t,i,a);throw new TypeError("val must be string, number or Buffer")}function LO(r,e,t,i,a){let n=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;n=2,u/=2,o/=2,t/=2}function v(c,l){return n===1?c[l]:c.readUInt16BE(l*n)}let f;if(a){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*n}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}z.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};z.prototype.indexOf=function(e,t,i){return CO(this,e,t,i,!0)};z.prototype.lastIndexOf=function(e,t,i){return CO(this,e,t,i,!1)};function bFr(r,e,t,i){t=Number(t)||0;let a=r.length-t;i?(i=Number(i),i>a&&(i=a)):i=a;let n=e.length;i>n/2&&(i=n/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(Wv(o))return u;r[t+u]=o}return u}function wFr(r,e,t,i){return Ts(Gv(e,r.length-t),r,t,i)}function EFr(r,e,t,i){return Ts(jFr(e),r,t,i)}function SFr(r,e,t,i){return Ts(XO(e),r,t,i)}function NFr(r,e,t,i){return Ts(MFr(e,r.length-t),r,t,i)}z.prototype.write=function(e,t,i,a){if(t===void 0)a="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")a=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,a===void 0&&(a="utf8")):(a=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let n=this.length-t;if((i===void 0||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");a||(a="utf8");let u=!1;for(;;)switch(a){case"hex":return bFr(this,e,t,i);case"utf8":case"utf-8":return wFr(this,e,t,i);case"ascii":case"latin1":case"binary":return EFr(this,e,t,i);case"base64":return SFr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return NFr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+a);a=(""+a).toLowerCase(),u=!0}};z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function OFr(r,e,t){return e===0&&t===r.length?kv.fromByteArray(r):kv.fromByteArray(r.slice(e,t))}function VO(r,e,t){t=Math.min(r.length,t);let i=[],a=e;for(;a<t;){let n=r[a],u=null,o=n>239?4:n>223?3:n>191?2:1;if(a+o<=t){let v,f,c,l;switch(o){case 1:n<128&&(u=n);break;case 2:v=r[a+1],(v&192)===128&&(l=(n&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[a+1],f=r[a+2],(v&192)===128&&(f&192)===128&&(l=(n&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[a+1],f=r[a+2],c=r[a+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(n&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),a+=o}return _Fr(i)}var FO=4096;function _Fr(r){let e=r.length;if(e<=FO)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=FO));return t}function AFr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]&127);return i}function TFr(r,e,t){let i="";t=Math.min(r.length,t);for(let a=e;a<t;++a)i+=String.fromCharCode(r[a]);return i}function IFr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let a="";for(let n=e;n<t;++n)a+=BFr[r[n]];return a}function RFr(r,e,t){let i=r.slice(e,t),a="";for(let n=0;n<i.length-1;n+=2)a+=String.fromCharCode(i[n]+i[n+1]*256);return a}z.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let a=this.subarray(e,t);return Object.setPrototypeOf(a,z.prototype),a};function ve(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}z.prototype.readUintLE=z.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return a};z.prototype.readUintBE=z.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e+--t],n=1;for(;t>0&&(n*=256);)a+=this[e+--t]*n;return a};z.prototype.readUint8=z.prototype.readUInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]};z.prototype.readUint16LE=z.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]|this[e+1]<<8};z.prototype.readUint16BE=z.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ve(e,2,this.length),this[e]<<8|this[e+1]};z.prototype.readUint32LE=z.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};z.prototype.readUint32BE=z.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};z.prototype.readBigUInt64LE=ci(function(e){e=e>>>0,Xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,n=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(a)+(BigInt(n)<<BigInt(32))});z.prototype.readBigUInt64BE=ci(function(e){e=e>>>0,Xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],n=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(a)<<BigInt(32))+BigInt(n)});z.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=this[e],n=1,u=0;for(;++u<t&&(n*=256);)a+=this[e+u]*n;return n*=128,a>=n&&(a-=Math.pow(2,8*t)),a};z.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ve(e,t,this.length);let a=t,n=1,u=this[e+--a];for(;a>0&&(n*=256);)u+=this[e+--a]*n;return n*=128,u>=n&&(u-=Math.pow(2,8*t)),u};z.prototype.readInt8=function(e,t){return e=e>>>0,t||ve(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};z.prototype.readInt16LE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};z.prototype.readInt16BE=function(e,t){e=e>>>0,t||ve(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};z.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};z.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};z.prototype.readBigInt64LE=ci(function(e){e=e>>>0,Xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(a)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});z.prototype.readBigInt64BE=ci(function(e){e=e>>>0,Xa(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&zn(e,this.length-8);let a=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(a)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});z.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ha.read(this,e,!0,23,4)};z.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ve(e,4,this.length),Ha.read(this,e,!1,23,4)};z.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ha.read(this,e,!0,52,8)};z.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ve(e,8,this.length),Ha.read(this,e,!1,52,8)};function _e(r,e,t,i,a,n){if(!z.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>a||e<n)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}z.prototype.writeUintLE=z.prototype.writeUIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;_e(this,e,t,i,o,0)}let n=1,u=0;for(this[t]=e&255;++u<i&&(n*=256);)this[t+u]=e/n&255;return t+i};z.prototype.writeUintBE=z.prototype.writeUIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,i=i>>>0,!a){let o=Math.pow(2,8*i)-1;_e(this,e,t,i,o,0)}let n=i-1,u=1;for(this[t+n]=e&255;--n>=0&&(u*=256);)this[t+n]=e/u&255;return t+i};z.prototype.writeUint8=z.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,1,255,0),this[t]=e&255,t+1};z.prototype.writeUint16LE=z.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};z.prototype.writeUint16BE=z.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};z.prototype.writeUint32LE=z.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};z.prototype.writeUint32BE=z.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function GO(r,e,t,i,a){HO(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n,n=n>>8,r[t++]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function UO(r,e,t,i,a){HO(e,i,a,r,t,7);let n=Number(e&BigInt(4294967295));r[t+7]=n,n=n>>8,r[t+6]=n,n=n>>8,r[t+5]=n,n=n>>8,r[t+4]=n;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}z.prototype.writeBigUInt64LE=ci(function(e,t=0){return GO(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});z.prototype.writeBigUInt64BE=ci(function(e,t=0){return UO(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});z.prototype.writeIntLE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);_e(this,e,t,i,v-1,-v)}let n=0,u=1,o=0;for(this[t]=e&255;++n<i&&(u*=256);)e<0&&o===0&&this[t+n-1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};z.prototype.writeIntBE=function(e,t,i,a){if(e=+e,t=t>>>0,!a){let v=Math.pow(2,8*i-1);_e(this,e,t,i,v-1,-v)}let n=i-1,u=1,o=0;for(this[t+n]=e&255;--n>=0&&(u*=256);)e<0&&o===0&&this[t+n+1]!==0&&(o=1),this[t+n]=(e/u>>0)-o&255;return t+i};z.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};z.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};z.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};z.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};z.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||_e(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};z.prototype.writeBigInt64LE=ci(function(e,t=0){return GO(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});z.prototype.writeBigInt64BE=ci(function(e,t=0){return UO(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function DO(r,e,t,i,a,n){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function zO(r,e,t,i,a){return e=+e,t=t>>>0,a||DO(r,e,t,4,34028234663852886e22,-34028234663852886e22),Ha.write(r,e,t,i,23,4),t+4}z.prototype.writeFloatLE=function(e,t,i){return zO(this,e,t,!0,i)};z.prototype.writeFloatBE=function(e,t,i){return zO(this,e,t,!1,i)};function WO(r,e,t,i,a){return e=+e,t=t>>>0,a||DO(r,e,t,8,17976931348623157e292,-17976931348623157e292),Ha.write(r,e,t,i,52,8),t+8}z.prototype.writeDoubleLE=function(e,t,i){return WO(this,e,t,!0,i)};z.prototype.writeDoubleBE=function(e,t,i){return WO(this,e,t,!1,i)};z.prototype.copy=function(e,t,i,a){if(!z.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!a&&a!==0&&(a=this.length),t>=e.length&&(t=e.length),t||(t=0),a>0&&a<i&&(a=i),a===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(a<0)throw new RangeError("sourceEnd out of bounds");a>this.length&&(a=this.length),e.length-t<a-i&&(a=e.length-t+i);let n=a-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,a):Uint8Array.prototype.set.call(e,this.subarray(i,a),t),n};z.prototype.fill=function(e,t,i,a){if(typeof e=="string"){if(typeof t=="string"?(a=t,t=0,i=this.length):typeof i=="string"&&(a=i,i=this.length),a!==void 0&&typeof a!="string")throw new TypeError("encoding must be a string");if(typeof a=="string"&&!z.isEncoding(a))throw new TypeError("Unknown encoding: "+a);if(e.length===1){let u=e.charCodeAt(0);(a==="utf8"&&u<128||a==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let n;if(typeof e=="number")for(n=t;n<i;++n)this[n]=e;else{let u=z.isBuffer(e)?e:z.from(e,a),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<i-t;++n)this[n+t]=u[n%o]}return this};var Wa={};function zv(r,e,t){Wa[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(a){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:a,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}zv("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);zv("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);zv("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,a=t;return Number.isInteger(t)&&Math.abs(t)>2**32?a=jO(String(t)):typeof t=="bigint"&&(a=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(a=jO(a)),a+="n"),i+=` It must be ${e}. Received ${a}`,i},RangeError);function jO(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function PFr(r,e,t){Xa(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&zn(e,r.length-(t+1))}function HO(r,e,t,i,a,n){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw n>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(n+1)*8}${u}`:o=`>= -(2${u} ** ${(n+1)*8-1}${u}) and < 2 ** ${(n+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Wa.ERR_OUT_OF_RANGE("value",o,r)}PFr(i,a,n)}function Xa(r,e){if(typeof r!="number")throw new Wa.ERR_INVALID_ARG_TYPE(e,"number",r)}function zn(r,e,t){throw Math.floor(r)!==r?(Xa(r,t),new Wa.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Wa.ERR_BUFFER_OUT_OF_BOUNDS:new Wa.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var LFr=/[^+/0-9A-Za-z-_]/g;function FFr(r){if(r=r.split("=")[0],r=r.trim().replace(LFr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Gv(r,e){e=e||1/0;let t,i=r.length,a=null,n=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!a){if(t>56319){(e-=3)>-1&&n.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&n.push(239,191,189);continue}a=t;continue}if(t<56320){(e-=3)>-1&&n.push(239,191,189),a=t;continue}t=(a-55296<<10|t-56320)+65536}else a&&(e-=3)>-1&&n.push(239,191,189);if(a=null,t<128){if((e-=1)<0)break;n.push(t)}else if(t<2048){if((e-=2)<0)break;n.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;n.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;n.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return n}function jFr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function MFr(r,e){let t,i,a,n=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,a=t%256,n.push(a),n.push(i);return n}function XO(r){return kv.toByteArray(FFr(r))}function Ts(r,e,t,i){let a;for(a=0;a<i&&!(a+t>=e.length||a>=r.length);++a)e[a+t]=r[a];return a}function ot(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Wv(r){return r!==r}var BFr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let a=0;a<16;++a)e[i+a]=r[t]+r[a]}return e}();function ci(r){return typeof BigInt>"u"?kFr:r}function kFr(){throw new Error("BigInt not supported")}});var YO=s((uUe,JO)=>{"use strict";var CFr=xO().Buffer;JO.exports=CFr});var ZO=s((oUe,$O)=>{"use strict";function VFr(){throw new Error("not implemented")}$O.exports=VFr});var li=s((vUe,QO)=>{"use strict";var GFr=_O(),UFr=YO(),DFr=ZO(),Hv;GFr()?Hv=UFr:Hv=DFr;QO.exports=Hv});var r_=s((fUe,KO)=>{"use strict";var zFr=qr(),WFr=li(),HFr=zFr(WFr.from);KO.exports=HFr});var t_=s((cUe,e_)=>{"use strict";var XFr=Yi(),xFr=V(),JFr=li();function YFr(r){if(!XFr(r))throw new TypeError(xFr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return JFr.from(r)}e_.exports=YFr});var a_=s((lUe,i_)=>{"use strict";var $Fr=Yi(),ZFr=V(),QFr=li();function KFr(r){if(!$Fr(r))throw new TypeError(ZFr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new QFr(r)}i_.exports=KFr});var s_=s((pUe,n_)=>{"use strict";var rjr=r_(),ejr=t_(),tjr=a_(),Xv;rjr?Xv=ejr:Xv=tjr;n_.exports=Xv});var v_=s((dUe,o_)=>{"use strict";var ijr=Na(),ajr=tt(),njr=Sa(),sjr=Ea(),ujr=$i(),ojr=oi(),vjr=me(),fjr=et(),cjr=ge(),u_;function ljr(r){return new ijr(r)}function pjr(r){return new ajr(r)}function djr(r){return new njr(r)}function gjr(r){return new sjr(r)}function mjr(r){return new ujr(r)}function yjr(r){return new ojr(r)}function hjr(r){return new vjr(r)}function qjr(r){return new fjr(r)}function bjr(r){return new cjr(r)}function wjr(){var r={int8array:ljr,uint8array:pjr,uint8clampedarray:djr,int16array:gjr,uint16array:mjr,int32array:yjr,uint32array:hjr,float32array:qjr,float64array:bjr};return r}u_=wjr();o_.exports=u_});var d_=s((gUe,p_)=>{"use strict";var Is=vr(),xv=qe(),f_=Yi(),Ejr=US(),c_=Z0(),Sjr=ZS(),Njr=Es(),l_=za(),Ojr=lO(),Wn=bO(),_jr=ia(),Hn=ni(),Ajr=s_(),Tjr=v_();function Ijr(r){var e,t,i,a,n,u,o,v;for(e=[],a=[],o=Object.create(_jr(r)),e.push(r),a.push(o),t=Ojr(r),v=0;v<t.length;v++)i=t[v],n=Wn(r,i),Is(n,"value")&&(u=xv(r[i])?[]:{},n.value=ua(r[i],u,e,a,-1)),Hn(o,i,n);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Rjr(r){var e=[],t=[],i,a,n,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=l_(r),v=0;v<i.length;v++)u=i[v],a=Wn(r,u),Is(a,"value")&&(n=xv(r[u])?[]:{},a.value=ua(r[u],n,e,t,-1)),Hn(o,u,a);return o}function ua(r,e,t,i,a){var n,u,o,v,f,c,l,p,m,y;if(a-=1,typeof r!="object"||r===null)return r;if(f_(r))return Ajr(r);if(Ejr(r))return Rjr(r);if(o=c_(r),o==="date")return new Date(+r);if(o==="regexp")return Sjr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=Tjr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Ijr(r):{};if(u=l_(r),a>0)for(n=o,y=0;y<u.length;y++){if(c=u[y],p=r[c],o=c_(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||f_(p)){n==="object"?(v=Wn(r,c),Is(v,"value")&&(v.value=ua(p)),Hn(e,c,v)):e[c]=ua(p);continue}if(m=Njr(t,p),m!==-1){e[c]=i[m];continue}l=xv(p)?new Array(p.length):{},t.push(p),i.push(l),n==="array"?e[c]=ua(p,l,t,i,a):(v=Wn(r,c),Is(v,"value")&&(v.value=ua(p,l,t,i,a)),Hn(e,c,v))}else if(o==="array")for(y=0;y<u.length;y++)c=u[y],e[c]=r[c];else for(y=0;y<u.length;y++)c=u[y],v=Wn(r,c),Hn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}p_.exports=ua});var m_=s((mUe,g_)=>{"use strict";var Pjr=qe(),Ljr=be().isPrimitive,Fjr=V(),jjr=pr(),Mjr=d_();function Bjr(r,e){var t;if(arguments.length>1){if(!Ljr(e))throw new TypeError(Fjr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=jjr;return t=Pjr(r)?new Array(r.length):{},Mjr(r,t,[r],[t],e)}g_.exports=Bjr});var Xn=s((yUe,y_)=>{"use strict";var kjr=m_();y_.exports=kjr});var h_=s((hUe,Cjr)=>{Cjr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var b_=s((qUe,q_)=>{"use strict";var Vjr=Xn(),Gjr=h_();function Ujr(){return Vjr(Gjr)}q_.exports=Ujr});var w_=s((bUe,Djr)=>{Djr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var S_=s((wUe,E_)=>{"use strict";var zjr=Xn(),Wjr=w_();function Hjr(){return zjr(Wjr)}E_.exports=Hjr});var N_=s((EUe,Xjr)=>{Xjr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var __=s((SUe,O_)=>{"use strict";var xjr=Xn(),Jjr=N_();function Yjr(){return xjr(Jjr)}O_.exports=Yjr});var A_=s((NUe,$jr)=>{$jr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var I_=s((OUe,T_)=>{"use strict";var Zjr=A_();function Qjr(){return Zjr.slice()}T_.exports=Qjr});var R_=s((_Ue,Kjr)=>{Kjr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var L_=s((AUe,P_)=>{"use strict";var rMr=Xn(),eMr=R_();function tMr(){return rMr(eMr)}P_.exports=tMr});var j_=s((TUe,F_)=>{"use strict";var xn=Qr(),iMr=b_(),aMr=S_(),nMr=__(),sMr=I_(),uMr=L_();function oMr(r){return xn(r,"AFINN_111",iMr),xn(r,"AFINN_96",aMr),xn(r,"ANSCOMBES_QUARTET",nMr),xn(r,"HERNDON_VENUS_SEMIDIAMETERS",sMr),xn(r,"NIGHTINGALES_ROSE",uMr),r}F_.exports=oMr});var B_=s((IUe,M_)=>{"use strict";function vMr(r,e){return r+e}M_.exports=vMr});var C_=s((RUe,k_)=>{"use strict";var fMr=B_();k_.exports=fMr});var G_=s((PUe,V_)=>{"use strict";var cMr=pr(),lMr=Ir();function pMr(r){return r===cMr||r===lMr}V_.exports=pMr});var Ae=s((LUe,U_)=>{"use strict";var dMr=G_();U_.exports=dMr});var W_=s((FUe,z_)=>{"use strict";var D_=as();function gMr(r){return r>0?D_(r-1):D_(r+1)}z_.exports=gMr});var Rs=s((jUe,H_)=>{"use strict";var mMr=W_();H_.exports=mMr});var x_=s((MUe,X_)=>{"use strict";var yMr=Math.sqrt;X_.exports=yMr});var Rr=s((BUe,J_)=>{"use strict";var hMr=x_();J_.exports=hMr});var $_=s((kUe,Y_)=>{"use strict";function qMr(r){return Math.abs(r)}Y_.exports=qMr});var Dr=s((CUe,Z_)=>{"use strict";var bMr=$_();Z_.exports=bMr});var K_=s((VUe,Q_)=>{"use strict";var wMr=tt(),EMr=$i(),SMr={uint16:EMr,uint8:wMr};Q_.exports=SMr});var iA=s((GUe,tA)=>{"use strict";var rA=K_(),eA;function NMr(){var r,e;return r=new rA.uint16(1),r[0]=4660,e=new rA.uint8(r.buffer),e[0]===52}eA=NMr();tA.exports=eA});var Ye=s((UUe,aA)=>{"use strict";var OMr=iA();aA.exports=OMr});var uA=s((DUe,sA)=>{"use strict";var _Mr=Ye(),nA,Jv,Yv;_Mr===!0?(Jv=1,Yv=0):(Jv=0,Yv=1);nA={HIGH:Jv,LOW:Yv};sA.exports=nA});var $v=s((zUe,cA)=>{"use strict";var AMr=me(),TMr=ge(),vA=uA(),fA=new TMr(1),oA=new AMr(fA.buffer),IMr=vA.HIGH,RMr=vA.LOW;function PMr(r,e,t,i){return fA[0]=r,e[i]=oA[IMr],e[i+t]=oA[RMr],e}cA.exports=PMr});var pA=s((WUe,lA)=>{"use strict";var LMr=$v();function FMr(r){return LMr(r,[0>>>0,0>>>0],1,0)}lA.exports=FMr});var Ja=s((HUe,gA)=>{"use strict";var jMr=D(),dA=pA(),MMr=$v();jMr(dA,"assign",MMr);gA.exports=dA});var yA=s((XUe,mA)=>{"use strict";var BMr=Ye(),Zv;BMr===!0?Zv=0:Zv=1;mA.exports=Zv});var qA=s((xUe,hA)=>{"use strict";var kMr=me(),CMr=ge(),VMr=yA(),Qv=new CMr(1),GMr=new kMr(Qv.buffer);function UMr(r,e){return Qv[0]=r,GMr[VMr]=e>>>0,Qv[0]}hA.exports=UMr});var vt=s((JUe,bA)=>{"use strict";var DMr=qA();bA.exports=DMr});var EA=s((YUe,wA)=>{"use strict";function zMr(r){return r|0}wA.exports=zMr});var Kv=s(($Ue,SA)=>{"use strict";var WMr=EA();SA.exports=WMr});var ft=s((ZUe,NA)=>{"use strict";var HMr=2147483647;NA.exports=HMr});var r3=s((QUe,OA)=>{"use strict";var XMr=2147483648;OA.exports=XMr});var AA=s((KUe,_A)=>{"use strict";var xMr=Ye(),e3;xMr===!0?e3=1:e3=0;_A.exports=e3});var RA=s((rDe,IA)=>{"use strict";var JMr=me(),YMr=ge(),$Mr=AA(),TA=new YMr(1),ZMr=new JMr(TA.buffer);function QMr(r){return TA[0]=r,ZMr[$Mr]}IA.exports=QMr});var ae=s((eDe,PA)=>{"use strict";var KMr=RA();PA.exports=KMr});var jA=s((tDe,FA)=>{"use strict";var rBr=Ye(),LA,t3,i3;rBr===!0?(t3=1,i3=0):(t3=0,i3=1);LA={HIGH:t3,LOW:i3};FA.exports=LA});var VA=s((iDe,CA)=>{"use strict";var eBr=me(),tBr=ge(),BA=jA(),kA=new tBr(1),MA=new eBr(kA.buffer),iBr=BA.HIGH,aBr=BA.LOW;function nBr(r,e){return MA[iBr]=r,MA[aBr]=e,kA[0]}CA.exports=nBr});var Ya=s((aDe,GA)=>{"use strict";var sBr=VA();GA.exports=sBr});var DA=s((nDe,UA)=>{"use strict";var uBr=r3(),oBr=ft(),vBr=Ja(),fBr=ae(),cBr=Ya(),a3=[0,0];function lBr(r,e){var t,i;return vBr.assign(r,a3,1,0),t=a3[0],t&=oBr,i=fBr(e),i&=uBr,t|=i,cBr(t,a3[1])}UA.exports=lBr});var Ps=s((sDe,zA)=>{"use strict";var pBr=DA();zA.exports=pBr});var XA=s((uDe,HA)=>{"use strict";var WA=Rs(),dBr=Ps(),gBr=Ir(),Ls=pr();function mBr(r,e){return e===gBr?Ls:e===Ls?0:e>0?WA(e)?r:0:WA(e)?dBr(Ls,r):Ls}HA.exports=mBr});var JA=s((oDe,xA)=>{"use strict";var yBr=ft(),hBr=ae(),qBr=1072693247,Fs=1e300,js=1e-300;function bBr(r,e){var t,i;return i=hBr(r),t=i&yBr,t<=qBr?e<0?Fs*Fs:js*js:e>0?Fs*Fs:js*js}xA.exports=bBr});var ZA=s((vDe,$A)=>{"use strict";var wBr=Dr(),YA=pr();function EBr(r,e){return r===-1?(r-r)/(r-r):r===1?1:wBr(r)<1==(e===YA)?0:YA}$A.exports=EBr});var KA=s((fDe,QA)=>{"use strict";var SBr=Ye(),n3;SBr===!0?n3=1:n3=0;QA.exports=n3});var eT=s((cDe,rT)=>{"use strict";var NBr=me(),OBr=ge(),_Br=KA(),s3=new OBr(1),ABr=new NBr(s3.buffer);function TBr(r,e){return s3[0]=r,ABr[_Br]=e>>>0,s3[0]}rT.exports=TBr});var wt=s((lDe,tT)=>{"use strict";var IBr=eT();tT.exports=IBr});var ct=s((pDe,iT)=>{"use strict";var RBr=1023;iT.exports=RBr});var nT=s((dDe,aT)=>{"use strict";function PBr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}aT.exports=PBr});var vT=s((gDe,oT)=>{"use strict";var LBr=ae(),Ms=vt(),sT=wt(),FBr=ct(),jBr=nT(),MBr=1048575,uT=1048576,BBr=1072693248,kBr=536870912,CBr=524288,VBr=20,GBr=9007199254740992,UBr=.9617966939259756,DBr=.9617967009544373,zBr=-7028461650952758e-24,WBr=[1,1.5],HBr=[0,.5849624872207642],XBr=[0,1350039202129749e-23];function xBr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O;return T=0,t<uT&&(e*=GBr,T-=53,t=LBr(e)),T+=(t>>VBr)-FBr|0,N=t&MBr|0,t=N|BBr|0,N<=235662?O=0:N<767610?O=1:(O=0,T+=1,t-=uT),e=sT(e,t),c=WBr[O],_=e-c,b=1/(e+c),a=_*b,u=Ms(a,0),i=(t>>1|kBr)+CBr,i+=O<<18,v=sT(0,i),f=e-(v-c),o=b*(_-u*v-u*f),n=a*a,w=n*n*jBr(n),w+=o*(u+a),n=u*u,v=3+n+w,v=Ms(v,0),f=w-(v-3-n),_=u*v,b=o*v+f*a,p=_+b,p=Ms(p,0),m=b-(p-_),y=DBr*p,g=zBr*p+m*UBr+XBr[O],l=HBr[O],q=T,d=y+g+l+q,d=Ms(d,0),h=g-(d-q-l-y),r[0]=d,r[1]=h,r}oT.exports=xBr});var cT=s((mDe,fT)=>{"use strict";function JBr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}fT.exports=JBr});var pT=s((yDe,lT)=>{"use strict";var YBr=vt(),$Br=cT(),ZBr=1.4426950408889634,QBr=1.4426950216293335,KBr=19259629911266175e-24;function rkr(r,e){var t,i,a,n,u,o;return a=e-1,n=a*a*$Br(a),u=QBr*a,o=a*KBr-n*ZBr,i=u+o,i=YBr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}lT.exports=rkr});var Bs=s((hDe,dT)=>{"use strict";var ekr=1023;dT.exports=ekr});var mT=s((qDe,gT)=>{"use strict";var tkr=-1023;gT.exports=tkr});var u3=s((bDe,yT)=>{"use strict";var ikr=-1074;yT.exports=ikr});var o3=s((wDe,hT)=>{"use strict";var akr=22250738585072014e-324;hT.exports=akr});var v3=s((EDe,qT)=>{"use strict";var nkr=o3(),skr=Ae(),ukr=W(),okr=Dr(),vkr=4503599627370496;function fkr(r,e,t,i){return ukr(r)||skr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&okr(r)<nkr?(e[i]=r*vkr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}qT.exports=fkr});var wT=s((SDe,bT)=>{"use strict";var ckr=v3();function lkr(r){return ckr(r,[0,0],1,0)}bT.exports=lkr});var NT=s((NDe,ST)=>{"use strict";var pkr=D(),ET=wT(),dkr=v3();pkr(ET,"assign",dkr);ST.exports=ET});var Jn=s((ODe,OT)=>{"use strict";var gkr=2146435072;OT.exports=gkr});var AT=s((_De,_T)=>{"use strict";var mkr=ae(),ykr=Jn(),hkr=ct();function qkr(r){var e=mkr(r);return e=(e&ykr)>>>20,e-hkr|0}_T.exports=qkr});var IT=s((ADe,TT)=>{"use strict";var bkr=AT();TT.exports=bkr});var PT=s((TDe,RT)=>{"use strict";var wkr=pr(),Ekr=Ir(),Skr=ct(),Nkr=Bs(),Okr=mT(),_kr=u3(),Akr=W(),Tkr=Ae(),Ikr=Ps(),Rkr=NT().assign,Pkr=IT(),Lkr=Ja(),Fkr=Ya(),jkr=2220446049250313e-31,Mkr=2148532223>>>0,f3=[0,0],c3=[0,0];function Bkr(r,e){var t,i;return e===0||r===0||Akr(r)||Tkr(r)?r:(Rkr(r,f3,1,0),r=f3[0],e+=f3[1],e+=Pkr(r),e<_kr?Ikr(0,r):e>Nkr?r<0?Ekr:wkr:(e<=Okr?(e+=52,i=jkr):i=1,Lkr.assign(r,c3,1,0),t=c3[0],t&=Mkr,t|=e+Skr<<20,i*Fkr(t,c3[1])))}RT.exports=Bkr});var $a=s((IDe,LT)=>{"use strict";var kkr=PT();LT.exports=kkr});var Yn=s((RDe,FT)=>{"use strict";var Ckr=.6931471805599453;FT.exports=Ckr});var ks=s((PDe,jT)=>{"use strict";var Vkr=1048575;jT.exports=Vkr});var BT=s((LDe,MT)=>{"use strict";function Gkr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}MT.exports=Gkr});var zT=s((FDe,DT)=>{"use strict";var Ukr=ae(),kT=wt(),Dkr=vt(),zkr=Kv(),Wkr=$a(),Hkr=Yn(),CT=ct(),VT=ft(),GT=ks(),Xkr=BT(),UT=1048576,xkr=1071644672,$n=20,Jkr=.6931471824645996,Ykr=-1904654299957768e-24;function $kr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m;return p=r&VT|0,m=(p>>$n)-CT|0,l=0,p>xkr&&(l=r+(UT>>m+1)>>>0,m=((l&VT)>>$n)-CT|0,i=(l&~(GT>>m))>>>0,n=kT(0,i),l=(l&GT|UT)>>$n-m>>>0,r<0&&(l=-l),e-=n),n=t+e,n=Dkr(n,0),o=n*Jkr,v=(t-(n-e))*Hkr+n*Ykr,c=o+v,f=v-(c-o),n=c*c,a=c-n*Xkr(n),u=c*a/(a-2)-(f+c*f),c=1-(u-c),r=Ukr(c),r=zkr(r),r+=l<<$n>>>0,r>>$n<=0?c=Wkr(c,l):c=kT(c,r),c}DT.exports=$kr});var rI=s((jDe,KT)=>{"use strict";var WT=W(),HT=Rs(),XT=Ae(),Zkr=Se(),xT=Rr(),Qkr=Dr(),l3=Ja(),Kkr=vt(),JT=Kv(),rCr=Ir(),eCr=pr(),p3=ft(),tCr=XA(),iCr=JA(),aCr=ZA(),nCr=vT(),sCr=pT(),uCr=zT(),oCr=1072693247,vCr=1105199104,fCr=1139802112,YT=1083179008,cCr=1072693248,lCr=1083231232,pCr=3230714880>>>0,$T=31,pi=1e300,di=1e-300,dCr=8008566259537294e-32,Et=[0,0],ZT=[0,0];function QT(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;if(WT(r)||WT(e))return NaN;if(l3.assign(e,Et,1,0),o=Et[0],v=Et[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return xT(r);if(e===-.5)return 1/xT(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(XT(e))return aCr(r,e)}if(l3.assign(r,Et,1,0),n=Et[0],u=Et[1],u===0){if(n===0)return tCr(r,e);if(r===1)return 1;if(r===-1&&HT(e))return-1;if(XT(r))return r===rCr?QT(-0,-e):e<0?0:eCr}if(r<0&&Zkr(e)===!1)return(r-r)/(r-r);if(a=Qkr(r),t=n&p3|0,i=o&p3|0,f=n>>>$T|0,c=o>>>$T|0,f&&HT(e)?f=-1:f=1,i>vCr){if(i>fCr)return iCr(r,e);if(t<oCr)return c===1?f*pi*pi:f*di*di;if(t>cCr)return c===0?f*pi*pi:f*di*di;y=sCr(ZT,a)}else y=nCr(ZT,a,t);if(l=Kkr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],g=m+p,l3.assign(g,Et,1,0),d=JT(Et[0]),h=JT(Et[1]),d>=YT){if((d-YT|h)!==0||m+dCr>g-p)return f*pi*pi}else if((d&p3)>=lCr&&((d-pCr|h)!==0||m<=g-p))return f*di*di;return g=uCr(d,p,m),f*g}KT.exports=QT});var Gr=s((MDe,eI)=>{"use strict";var gCr=rI();eI.exports=gCr});var oa=s((BDe,tI)=>{"use strict";var mCr=9007199254740991;tI.exports=mCr});var Zn=s((kDe,iI)=>{"use strict";var yCr=308;iI.exports=yCr});var Cs=s((CDe,aI)=>{"use strict";var hCr=-308;aI.exports=hCr});var Vs=s((VDe,nI)=>{"use strict";var qCr=-324;nI.exports=qCr});var lI=s((GDe,cI)=>{"use strict";var sI=W(),Gs=Ae(),uI=Gr(),bCr=Dr(),oI=Ur(),wCr=oa(),vI=Zn(),ECr=Cs(),SCr=Vs(),NCr=Ir(),OCr=wCr+1,fI=1e308;function _Cr(r,e){var t,i;return sI(r)||sI(e)||Gs(e)?NaN:Gs(r)||r===0||e<SCr||bCr(r)>OCr&&e<=0?r:e>vI?r>=0?0:NCr:e<ECr?(t=uI(10,-(e+vI)),i=r*fI*t,Gs(i)?r:oI(i)/fI/t):(t=uI(10,-e),i=r*t,Gs(i)?r:oI(i)/t)}cI.exports=_Cr});var dI=s((UDe,pI)=>{"use strict";var ACr=lI();pI.exports=ACr});var mI=s((DDe,gI)=>{"use strict";function TCr(r,e){return r*e}gI.exports=TCr});var hI=s((zDe,yI)=>{"use strict";var ICr=mI();yI.exports=ICr});var bI=s((WDe,qI)=>{"use strict";function RCr(r,e){return r-e}qI.exports=RCr});var EI=s((HDe,wI)=>{"use strict";var PCr=bI();wI.exports=PCr});var NI=s((XDe,SI)=>{"use strict";var Qn=Qr(),LCr=C_(),FCr=dI(),jCr=hI(),MCr=Gr(),BCr=EI();function kCr(r){return Qn(r,"add",LCr),Qn(r,"floorn",FCr),Qn(r,"mul",jCr),Qn(r,"pow",MCr),Qn(r,"sub",BCr),r}SI.exports=kCr});var TI=s((xDe,AI)=>{"use strict";var OI=Sr().isPrimitive,CCr=pr(),VCr=Ir(),_I=V();function GCr(r,e){return t;function t(i,a){var n;if(!OI(i)){if(e.nonnumeric===void 0)throw new TypeError(_I("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!OI(a)){if(e.nonnumeric===void 0)throw new TypeError(_I("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return n=r(i,a),n!==n?e.nan:n===CCr?e.pinf:n===VCr?e.ninf:n}}AI.exports=GCr});var d3=s((JDe,II)=>{"use strict";var UCr=TI();II.exports=UCr});var PI=s((YDe,RI)=>{"use strict";var DCr=J0(),zCr=H1(),WCr=hs(),HCr=V(),XCr=ms(),xCr=d3(),JCr=["number","number"],YCr=["First argument","Second argument"];function $Cr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(HCr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=XCr([r[0],r[1]],JCr,YCr),t=DCr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=WCr(t),n=xCr(e,i),r[0].push(a),r[1].push(t),zCr(r[0],r[1],n),a}RI.exports=$Cr});var FI=s(($De,LI)=>{"use strict";var ZCr=PI();LI.exports=ZCr});var MI=s((ZDe,jI)=>{"use strict";var QCr=Sr().isPrimitive,KCr=pr(),rVr=Ir(),eVr=V();function tVr(r,e){return t;function t(i){var a;if(!QCr(i)){if(e.nonnumeric===void 0)throw new TypeError(eVr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return a=r(i),a!==a?e.nan:a===KCr?e.pinf:a===rVr?e.ninf:a}}jI.exports=tVr});var Us=s((QDe,BI)=>{"use strict";var iVr=MI();BI.exports=iVr});var CI=s((KDe,kI)=>{"use strict";var g3=Sr().isPrimitive,aVr=pr(),nVr=Ir(),m3=V();function sVr(r,e){return t;function t(i,a,n){var u;if(!g3(i)){if(e.nonnumeric===void 0)throw new TypeError(m3("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!g3(a)){if(e.nonnumeric===void 0)throw new TypeError(m3("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!g3(n)){if(e.nonnumeric===void 0)throw new TypeError(m3("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return u=r(i,a,n),u!==u?e.nan:u===aVr?e.pinf:u===nVr?e.ninf:u}}kI.exports=sVr});var y3=s((rze,VI)=>{"use strict";var uVr=CI();VI.exports=uVr});var UI=s((eze,GI)=>{"use strict";var Ds=Sr().isPrimitive,oVr=pr(),vVr=Ir(),zs=V();function fVr(r,e){return t;function t(i,a,n,u){var o;if(!Ds(i)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ds(a)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Ds(n)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ds(u)){if(e.nonnumeric===void 0)throw new TypeError(zs("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,a,n,u),o!==o?e.nan:o===oVr?e.pinf:o===vVr?e.ninf:o}}GI.exports=fVr});var zI=s((tze,DI)=>{"use strict";var cVr=UI();DI.exports=cVr});var HI=s((ize,WI)=>{"use strict";var Kn=Sr().isPrimitive,lVr=pr(),pVr=Ir(),r0=V();function dVr(r,e){return t;function t(i,a,n,u,o){var v;if(!Kn(i)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Kn(a)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Kn(n)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Kn(u)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Kn(o)){if(e.nonnumeric===void 0)throw new TypeError(r0("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,a,n,u,o),v!==v?e.nan:v===lVr?e.pinf:v===pVr?e.ninf:v}}WI.exports=dVr});var xI=s((aze,XI)=>{"use strict";var gVr=HI();XI.exports=gVr});var YI=s((nze,JI)=>{"use strict";var mVr=J0(),yVr=x1(),hVr=hs(),qVr=V(),bVr=ms(),wVr=y3(),EVr=["number","number","number"],SVr=["First argument","Second argument","Third argument"];function NVr(r,e){var t,i,a,n,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(qVr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=bVr([r[0],r[1],r[2]],EVr,SVr),t=mVr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return a=hVr(t),n=wVr(e,i),r[0].push(a),r[1].push(t),yVr(r[0],r[1],n),a}JI.exports=NVr});var ZI=s((sze,$I)=>{"use strict";var OVr=YI();$I.exports=OVr});var KI=s((uze,QI)=>{"use strict";var _Vr=qe(),AVr=J2(),TVr=V(),IVr=Us();function RVr(r,e){var t,i,a,n,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")i[n]=r[u+1];else throw new Error(TVr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return a=IVr(e,i),_Vr(t)?(AVr([t,t],[t.length,t[0].length],a),t):a(t)}QI.exports=RVr});var eR=s((oze,rR)=>{"use strict";var PVr=KI();rR.exports=PVr});var iR=s((vze,tR)=>{"use strict";function LVr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}tR.exports=LVr});var h3=s((fze,aR)=>{"use strict";var FVr=iR();aR.exports=FVr});var sR=s((cze,nR)=>{"use strict";function jVr(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}nR.exports=jVr});var oR=s((lze,uR)=>{"use strict";function MVr(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}uR.exports=MVr});var cR=s((pze,fR)=>{"use strict";var BVr=D(),vR=sR(),kVr=oR();BVr(vR,"assign",kVr);fR.exports=vR});var pR=s((dze,lR)=>{"use strict";function CVr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}lR.exports=CVr});var lt=s((gze,dR)=>{"use strict";var VVr=pR();dR.exports=VVr});var mR=s((mze,gR)=>{"use strict";var GVr=qa(),UVr=ra(),DVr=Q0(),zVr=Ia(),WVr=K0(),HVr=lt();function XVr(r){var e,t,i,a;return e=r.data,i=r.shape,a=r.dtype,t=GVr(e),{ref:r,dtype:a,data:e,length:HVr(i),shape:i,strides:r.strides,offset:r.offset,order:r.order,accessorProtocol:t,accessors:t?[UVr(a),DVr(a)]:[zVr(a),WVr(a)]}}gR.exports=XVr});var hR=s((yze,yR)=>{"use strict";var xVr=mR();yR.exports=xVr});var bR=s((hze,qR)=>{"use strict";function JVr(r){var e,t;if(e=[],r<=0)return e;for(t=0;t<r;t++)e.push(t);return e}qR.exports=JVr});var ER=s((qze,wR)=>{"use strict";var YVr=bR();wR.exports=YVr});var NR=s((bze,SR)=>{"use strict";function $Vr(r,e){var t,i;for(t=[],i=0;i<e.length;i++)t.push(r[e[i]]);return t}SR.exports=$Vr});var q3=s((wze,OR)=>{"use strict";var ZVr=NR();OR.exports=ZVr});var AR=s((Eze,_R)=>{"use strict";function QVr(r,e){var t,i,a,n,u,o,v,f,c,l;for(a=1,n=1,l=1;l<r.length;l++){for(v=r[a],t=v<0?-v:v,f=e[n],u=a-1,o=n-1;u>=0&&(c=r[u],i=c<0?-c:c,!(i<=t));)r[u+1]=c,e[o+1]=e[o],u-=1,o-=1;r[u+1]=v,e[o+1]=f,a+=1,n+=1}}_R.exports=QVr});var RR=s((Sze,IR)=>{"use strict";var KVr=ER(),rGr=In(),TR=q3(),eGr=AR();function tGr(r,e,t){var i;return i=KVr(r.length),e=rGr(e),eGr(e,i),r=TR(r,i),t=TR(t,i),{sh:r,sx:e,sy:t}}IR.exports=tGr});var ne=s((Nze,PR)=>{"use strict";var iGr=RR();PR.exports=iGr});var LR=s((Oze,aGr)=>{aGr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var jR=s((_ze,FR)=>{"use strict";var nGr=LR();function sGr(r){return nGr[r]||null}FR.exports=sGr});var BR=s((Aze,MR)=>{"use strict";var uGr=jR();MR.exports=uGr});var CR=s((Tze,kR)=>{"use strict";var oGr={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};kR.exports=oGr});var UR=s((Ize,GR)=>{"use strict";var VR=BR(),b3=CR();function vGr(r,e){var t,i;return t=VR(r),i=VR(e),t===null||i===null?b3.BLOCK_SIZE_IN_ELEMENTS:t>i?b3.BLOCK_SIZE_IN_BYTES/t|0:b3.BLOCK_SIZE_IN_BYTES/i|0}GR.exports=vGr});var se=s((Rze,DR)=>{"use strict";var fGr=UR();DR.exports=fGr});var WR=s((Pze,zR)=>{"use strict";var cGr=ne(),lGr=se();function pGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E;for(E=cGr(r.shape,r.strides,e.strides),y=E.sh,h=E.sx,q=E.sy,i=lGr(r.dtype,e.dtype),w=r.offset,_=e.offset,a=r.data,n=e.data,v=h[0],c=q[0],u=r.accessors[0],o=e.accessors[1],I=y[1];I>0;)for(I<i?(d=I,I=0):(d=i,I-=i),p=w+I*h[1],m=_+I*q[1],S=y[0];S>0;)for(S<i?(g=S,S=0):(g=i,S-=i),b=p+S*h[0],T=m+S*q[0],f=h[1]-g*h[0],l=q[1]-g*q[0],O=0;O<d;O++){for(N=0;N<g;N++)o(n,T,t(u(a,b))),b+=v,T+=c;b+=f,T+=l}}zR.exports=pGr});var XR=s((Lze,HR)=>{"use strict";var dGr=ne(),gGr=se();function mGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G;for(G=dGr(r.shape,r.strides,e.strides),q=G.sh,T=G.sx,N=G.sy,i=gGr(r.dtype,e.dtype),O=r.offset,S=e.offset,a=r.data,n=e.data,v=T[0],l=N[0],u=r.accessors[0],o=e.accessors[1],P=q[2];P>0;)for(P<i?(b=P,P=0):(b=i,P-=i),g=O+P*T[2],h=S+P*N[2],j=q[1];j>0;)for(j<i?(_=j,j=0):(_=i,j-=i),c=T[2]-_*T[1],m=N[2]-_*N[1],y=g+j*T[1],d=h+j*N[1],F=q[0];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),I=y+F*T[0],E=d+F*N[0],f=T[1]-w*T[0],p=N[1]-w*N[0],A=0;A<b;A++){for(M=0;M<_;M++){for(L=0;L<w;L++)o(n,E,t(u(a,I))),I+=v,E+=l;I+=f,E+=p}I+=c,E+=m}}HR.exports=mGr});var JR=s((Fze,xR)=>{"use strict";var yGr=ne(),hGr=se();function qGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X;for(X=yGr(r.shape,r.strides,e.strides),T=X.sh,E=X.sx,L=X.sy,i=hGr(r.dtype,e.dtype),M=r.offset,A=e.offset,a=r.data,n=e.data,v=E[0],p=L[0],u=r.accessors[0],o=e.accessors[1],H=T[3];H>0;)for(H<i?(I=H,H=0):(I=i,H-=i),q=M+H*E[3],b=A+H*L[3],U=T[2];U>0;)for(U<i?(S=U,U=0):(S=i,U-=i),l=E[3]-S*E[2],g=L[3]-S*L[2],h=q+U*E[2],_=b+U*L[2],B=T[1];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),c=E[2]-O*E[1],y=L[2]-O*L[1],d=h+B*E[1],w=_+B*L[1],C=T[0];C>0;)for(C<i?(N=C,C=0):(N=i,C-=i),F=d+C*E[0],j=w+C*L[0],f=E[1]-N*E[0],m=L[1]-N*L[0],R=0;R<I;R++){for(k=0;k<S;k++){for(G=0;G<O;G++){for(P=0;P<N;P++)o(n,j,t(u(a,F))),F+=v,j+=p;F+=f,j+=m}F+=c,j+=y}F+=l,j+=g}}xR.exports=qGr});var $R=s((jze,YR)=>{"use strict";var bGr=ne(),wGr=se();function EGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er;for(er=bGr(r.shape,r.strides,e.strides),I=er.sh,j=er.sx,P=er.sy,i=wGr(r.dtype,e.dtype),G=r.offset,k=e.offset,a=r.data,n=e.data,v=j[0],m=P[0],u=r.accessors[0],o=e.accessors[1],Z=I[4];Z>0;)for(Z<i?(F=Z,Z=0):(F=i,Z-=i),b=G+Z*j[4],S=k+Z*P[4],J=I[3];J>0;)for(J<i?(A=J,J=0):(A=i,J-=i),p=j[4]-A*j[3],h=P[4]-A*P[3],_=b+J*j[3],O=S+J*P[3],x=I[2];x>0;)for(x<i?(M=x,x=0):(M=i,x-=i),l=j[3]-M*j[2],d=P[3]-M*P[2],w=_+x*j[2],N=O+x*P[2],Q=I[1];Q>0;)for(Q<i?(L=Q,Q=0):(L=i,Q-=i),c=j[2]-L*j[1],g=P[2]-L*P[1],q=w+Q*j[1],T=N+Q*P[1],$=I[0];$>0;)for($<i?(E=$,$=0):(E=i,$-=i),R=q+$*j[0],C=T+$*P[0],f=j[1]-E*j[0],y=P[1]-E*P[0],Y=0;Y<F;Y++){for(X=0;X<A;X++){for(H=0;H<M;H++){for(U=0;U<L;U++){for(B=0;B<E;B++)o(n,C,t(u(a,R))),R+=v,C+=m;R+=f,C+=y}R+=c,C+=g}R+=l,C+=d}R+=p,C+=h}}YR.exports=EGr});var QR=s((Mze,ZR)=>{"use strict";var SGr=ne(),NGr=se();function OGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir;for(ir=SGr(r.shape,r.strides,e.strides),A=ir.sh,C=ir.sx,B=ir.sy,i=NGr(r.dtype,e.dtype),U=r.offset,H=e.offset,a=r.data,n=e.data,v=C[0],y=B[0],u=r.accessors[0],o=e.accessors[1],fr=A[5];fr>0;)for(fr<i?(R=fr,fr=0):(R=i,fr-=i),O=U+fr*C[5],M=H+fr*B[5],ar=A[4];ar>0;)for(ar<i?(k=ar,ar=0):(k=i,ar-=i),m=C[5]-k*C[4],w=B[5]-k*B[4],N=O+ar*C[4],L=M+ar*B[4],tr=A[3];tr>0;)for(tr<i?(G=tr,tr=0):(G=i,tr-=i),p=C[4]-G*C[3],q=B[4]-G*B[3],T=N+tr*C[3],E=L+tr*B[3],rr=A[2];rr>0;)for(rr<i?(P=rr,rr=0):(P=i,rr-=i),l=C[3]-P*C[2],h=B[3]-P*B[2],b=T+rr*C[2],I=E+rr*B[2],K=A[1];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=C[2]-j*C[1],d=B[2]-j*B[1],_=b+K*C[1],S=I+K*B[1],ur=A[0];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),X=_+ur*C[0],Y=S+ur*B[0],f=C[1]-F*C[0],g=B[1]-F*B[0],er=0;er<R;er++){for(Z=0;Z<k;Z++){for(J=0;J<G;J++){for(x=0;x<P;x++){for(Q=0;Q<j;Q++){for($=0;$<F;$++)o(n,Y,t(u(a,X))),X+=v,Y+=y;X+=f,Y+=g}X+=c,Y+=d}X+=l,Y+=h}X+=p,Y+=q}X+=m,Y+=w}}ZR.exports=OGr});var rP=s((Bze,KR)=>{"use strict";var _Gr=ne(),AGr=se();function TGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr;for(yr=_Gr(r.shape,r.strides,e.strides),G=yr.sh,Y=yr.sx,$=yr.sy,i=AGr(r.dtype,e.dtype),Q=r.offset,x=e.offset,a=r.data,n=e.data,v=Y[0],g=$[0],u=r.accessors[0],o=e.accessors[1],dr=G[6];dr>0;)for(dr<i?(X=dr,dr=0):(X=i,dr-=i),E=Q+dr*Y[6],P=x+dr*$[6],gr=G[5];gr>0;)for(gr<i?(H=gr,gr=0):(H=i,gr-=i),y=Y[6]-H*Y[5],b=$[6]-H*$[5],I=E+gr*Y[5],j=P+gr*$[5],cr=G[4];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),m=Y[5]-U*Y[4],_=$[5]-U*$[4],S=I+cr*Y[4],F=j+cr*$[4],or=G[3];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=Y[4]-B*Y[3],w=$[4]-B*$[3],O=S+or*Y[3],A=F+or*$[3],sr=G[2];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=Y[3]-C*Y[2],q=$[3]-C*$[2],N=O+sr*Y[2],M=A+sr*$[2],nr=G[1];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=Y[2]-R*Y[1],h=$[2]-R*$[1],T=N+nr*Y[1],L=M+nr*$[1],ir=G[0];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),J=T+ir*Y[0],Z=L+ir*$[0],f=Y[1]-k*Y[0],d=$[1]-k*$[0],fr=0;fr<X;fr++){for(ar=0;ar<H;ar++){for(tr=0;tr<U;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++)o(n,Z,t(u(a,J))),J+=v,Z+=g;J+=f,Z+=d}J+=c,Z+=h}J+=l,Z+=q}J+=p,Z+=w}J+=m,Z+=_}J+=y,Z+=b}}KR.exports=TGr});var tP=s((kze,eP)=>{"use strict";var IGr=ne(),RGr=se();function PGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr;for(kr=IGr(r.shape,r.strides,e.strides),B=kr.sh,Z=kr.sx,er=kr.sy,i=RGr(r.dtype,e.dtype),ur=r.offset,K=e.offset,a=r.data,n=e.data,v=Z[0],d=er[0],u=r.accessors[0],o=e.accessors[1],Fr=B[7];Fr>0;)for(Fr<i?(J=Fr,Fr=0):(J=i,Fr-=i),A=ur+Fr*Z[7],C=K+Fr*er[7],Er=B[6];Er>0;)for(Er<i?(x=Er,Er=0):(x=i,Er-=i),g=Z[7]-x*Z[6],N=er[7]-x*er[6],M=A+Er*Z[6],R=C+Er*er[6],Tr=B[5];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),y=Z[6]-Q*Z[5],T=er[6]-Q*er[5],L=M+Tr*Z[5],k=R+Tr*er[5],Ar=B[4];Ar>0;)for(Ar<i?($=Ar,Ar=0):($=i,Ar-=i),m=Z[5]-$*Z[4],b=er[5]-$*er[4],E=L+Ar*Z[4],G=k+Ar*er[4],Mr=B[3];Mr>0;)for(Mr<i?(Y=Mr,Mr=0):(Y=i,Mr-=i),p=Z[4]-Y*Z[3],_=er[4]-Y*er[3],I=E+Mr*Z[3],P=G+Mr*er[3],jr=B[2];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),l=Z[3]-X*Z[2],w=er[3]-X*er[2],S=I+jr*Z[2],j=P+jr*er[2],yr=B[1];yr>0;)for(yr<i?(H=yr,yr=0):(H=i,yr-=i),c=Z[2]-H*Z[1],q=er[2]-H*er[1],O=S+yr*Z[1],F=j+yr*er[1],dr=B[0];dr>0;)for(dr<i?(U=dr,dr=0):(U=i,dr-=i),rr=O+dr*Z[0],tr=F+dr*er[0],f=Z[1]-U*Z[0],h=er[1]-U*er[0],gr=0;gr<J;gr++){for(cr=0;cr<x;cr++){for(or=0;or<Q;or++){for(sr=0;sr<$;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<X;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++)o(n,tr,t(u(a,rr))),rr+=v,tr+=d;rr+=f,tr+=h}rr+=c,tr+=q}rr+=l,tr+=w}rr+=p,tr+=_}rr+=m,tr+=b}rr+=y,tr+=T}rr+=g,tr+=N}}eP.exports=PGr});var aP=s((Cze,iP)=>{"use strict";var LGr=ne(),FGr=se();function jGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,xr,Cr,Vr,Lr,Br,Xr,Kr;for(Kr=LGr(r.shape,r.strides,e.strides),Y=Kr.sh,tr=Kr.sx,ar=Kr.sy,i=FGr(r.dtype,e.dtype),fr=r.offset,ir=e.offset,a=r.data,n=e.data,v=tr[0],h=ar[0],u=r.accessors[0],o=e.accessors[1],Xr=Y[8];Xr>0;)for(Xr<i?(rr=Xr,Xr=0):(rr=i,Xr-=i),P=fr+Xr*tr[8],X=ir+Xr*ar[8],Br=Y[7];Br>0;)for(Br<i?(K=Br,Br=0):(K=i,Br-=i),d=tr[8]-K*tr[7],S=ar[8]-K*ar[7],j=P+Br*tr[7],H=X+Br*ar[7],Lr=Y[6];Lr>0;)for(Lr<i?(ur=Lr,Lr=0):(ur=i,Lr-=i),g=tr[7]-ur*tr[6],O=ar[7]-ur*ar[6],F=j+Lr*tr[6],U=H+Lr*ar[6],Vr=Y[5];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=tr[6]-er*tr[5],N=ar[6]-er*ar[5],A=F+Vr*tr[5],B=U+Vr*ar[5],Cr=Y[4];Cr>0;)for(Cr<i?(Z=Cr,Cr=0):(Z=i,Cr-=i),m=tr[5]-Z*tr[4],T=ar[5]-Z*ar[4],M=A+Cr*tr[4],C=B+Cr*ar[4],xr=Y[3];xr>0;)for(xr<i?(J=xr,xr=0):(J=i,xr-=i),p=tr[4]-J*tr[3],b=ar[4]-J*ar[3],L=M+xr*tr[3],R=C+xr*ar[3],kr=Y[2];kr>0;)for(kr<i?(x=kr,kr=0):(x=i,kr-=i),l=tr[3]-x*tr[2],_=ar[3]-x*ar[2],E=L+kr*tr[2],k=R+kr*ar[2],Fr=Y[1];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=tr[2]-Q*tr[1],w=ar[2]-Q*ar[1],I=E+Fr*tr[1],G=k+Fr*ar[1],Er=Y[0];Er>0;)for(Er<i?($=Er,Er=0):($=i,Er-=i),nr=I+Er*tr[0],sr=G+Er*ar[0],f=tr[1]-$*tr[0],q=ar[1]-$*ar[0],Tr=0;Tr<rr;Tr++){for(Ar=0;Ar<K;Ar++){for(Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<Z;yr++){for(dr=0;dr<J;dr++){for(gr=0;gr<x;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<$;or++)o(n,sr,t(u(a,nr))),nr+=v,sr+=h;nr+=f,sr+=q}nr+=c,sr+=w}nr+=l,sr+=_}nr+=p,sr+=b}nr+=m,sr+=T}nr+=y,sr+=N}nr+=g,sr+=O}nr+=d,sr+=S}}iP.exports=jGr});var sP=s((Vze,nP)=>{"use strict";var MGr=ne(),BGr=se();function kGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,xr,Cr,Vr,Lr,Br,Xr,Kr,fe,ce,le,pe,Ce,ai,H0;for(H0=MGr(r.shape,r.strides,e.strides),J=H0.sh,sr=H0.sx,or=H0.sy,i=BGr(r.dtype,e.dtype),cr=r.offset,gr=e.offset,a=r.data,n=e.data,v=sr[0],q=or[0],u=r.accessors[0],o=e.accessors[1],ai=J[9];ai>0;)for(ai<i?(nr=ai,ai=0):(nr=i,ai-=i),R=cr+ai*sr[9],x=gr+ai*or[9],Ce=J[8];Ce>0;)for(Ce<i?(ir=Ce,Ce=0):(ir=i,Ce-=i),h=sr[9]-ir*sr[8],E=or[9]-ir*or[8],k=R+Ce*sr[8],Q=x+Ce*or[8],pe=J[7];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),d=sr[8]-fr*sr[7],I=or[8]-fr*or[7],G=k+pe*sr[7],$=Q+pe*or[7],le=J[6];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=sr[7]-ar*sr[6],S=or[7]-ar*or[6],P=G+le*sr[6],Y=$+le*or[6],ce=J[5];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=sr[6]-tr*sr[5],O=or[6]-tr*or[5],j=P+ce*sr[5],X=Y+ce*or[5],fe=J[4];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=sr[5]-rr*sr[4],N=or[5]-rr*or[4],F=j+fe*sr[4],H=X+fe*or[4],Kr=J[3];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=sr[4]-K*sr[3],T=or[4]-K*or[3],A=F+Kr*sr[3],U=H+Kr*or[3],Xr=J[2];Xr>0;)for(Xr<i?(ur=Xr,Xr=0):(ur=i,Xr-=i),l=sr[3]-ur*sr[2],b=or[3]-ur*or[2],M=A+Xr*sr[2],B=U+Xr*or[2],Br=J[1];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=sr[2]-er*sr[1],_=or[2]-er*or[1],L=M+Br*sr[1],C=B+Br*or[1],Lr=J[0];Lr>0;)for(Lr<i?(Z=Lr,Lr=0):(Z=i,Lr-=i),dr=L+Lr*sr[0],yr=C+Lr*or[0],f=sr[1]-Z*sr[0],w=or[1]-Z*or[0],Vr=0;Vr<nr;Vr++){for(Cr=0;Cr<ir;Cr++){for(xr=0;xr<fr;xr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(Ar=0;Ar<ur;Ar++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<Z;jr++)o(n,yr,t(u(a,dr))),dr+=v,yr+=q;dr+=f,yr+=w}dr+=c,yr+=_}dr+=l,yr+=b}dr+=p,yr+=T}dr+=m,yr+=N}dr+=y,yr+=O}dr+=g,yr+=S}dr+=d,yr+=I}dr+=h,yr+=E}}nP.exports=kGr});var oP=s((Gze,uP)=>{"use strict";var CGr=ne(),VGr=se();function GGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S;for(S=CGr(r.shape,r.strides,e.strides),p=S.sh,g=S.sx,d=S.sy,i=VGr(r.dtype,e.dtype),h=r.offset,q=e.offset,a=r.data,n=e.data,u=g[0],v=d[0],O=p[1];O>0;)for(O<i?(y=O,O=0):(y=i,O-=i),c=h+O*g[1],l=q+O*d[1],N=p[0];N>0;)for(N<i?(m=N,N=0):(m=i,N-=i),w=c+N*g[0],_=l+N*d[0],o=g[1]-m*g[0],f=d[1]-m*d[0],T=0;T<y;T++){for(b=0;b<m;b++)n[_]=t(a[w]),w+=u,_+=v;w+=o,_+=f}}uP.exports=GGr});var fP=s((Uze,vP)=>{"use strict";var UGr=ne(),DGr=se();function zGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j;for(j=UGr(r.shape,r.strides,e.strides),d=j.sh,_=j.sx,b=j.sy,i=DGr(r.dtype,e.dtype),T=r.offset,N=e.offset,a=r.data,n=e.data,u=_[0],f=b[0],F=d[2];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),m=T+F*_[2],g=N+F*b[2],A=d[1];A>0;)for(A<i?(q=A,A=0):(q=i,A-=i),v=_[2]-q*_[1],l=b[2]-q*b[1],p=m+A*_[1],y=g+A*b[1],M=d[0];M>0;)for(M<i?(h=M,M=0):(h=i,M-=i),O=p+M*_[0],S=y+M*b[0],o=_[1]-h*_[0],c=b[1]-h*b[0],L=0;L<w;L++){for(E=0;E<q;E++){for(I=0;I<h;I++)n[S]=t(a[O]),O+=u,S+=f;O+=o,S+=c}O+=v,S+=l}}vP.exports=zGr});var lP=s((Dze,cP)=>{"use strict";var WGr=ne(),HGr=se();function XGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U;for(U=WGr(r.shape,r.strides,e.strides),_=U.sh,S=U.sx,I=U.sy,i=HGr(r.dtype,e.dtype),E=r.offset,L=e.offset,a=r.data,n=e.data,u=S[0],c=I[0],B=_[3];B>0;)for(B<i?(O=B,B=0):(O=i,B-=i),d=E+B*S[3],w=L+B*I[3],C=_[2];C>0;)for(C<i?(N=C,C=0):(N=i,C-=i),f=S[3]-N*S[2],m=I[3]-N*I[2],g=d+C*S[2],q=w+C*I[2],R=_[1];R>0;)for(R<i?(T=R,R=0):(T=i,R-=i),v=S[2]-T*S[1],p=I[2]-T*I[1],y=g+R*S[1],h=q+R*I[1],k=_[0];k>0;)for(k<i?(b=k,k=0):(b=i,k-=i),M=y+k*S[0],A=h+k*I[0],o=S[1]-b*S[0],l=I[1]-b*I[0],G=0;G<O;G++){for(P=0;P<N;P++){for(j=0;j<T;j++){for(F=0;F<b;F++)n[A]=t(a[M]),M+=u,A+=c;M+=o,A+=l}M+=v,A+=p}M+=f,A+=m}}cP.exports=XGr});var dP=s((zze,pP)=>{"use strict";var xGr=ne(),JGr=se();function YGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J;for(J=xGr(r.shape,r.strides,e.strides),O=J.sh,A=J.sx,F=J.sy,i=JGr(r.dtype,e.dtype),j=r.offset,P=e.offset,a=r.data,n=e.data,u=A[0],l=F[0],x=O[4];x>0;)for(x<i?(M=x,x=0):(M=i,x-=i),w=j+x*A[4],N=P+x*F[4],Q=O[3];Q>0;)for(Q<i?(L=Q,Q=0):(L=i,Q-=i),c=A[4]-L*A[3],g=F[4]-L*F[3],q=w+Q*A[3],T=N+Q*F[3],$=O[2];$>0;)for($<i?(E=$,$=0):(E=i,$-=i),f=A[3]-E*A[2],y=F[3]-E*F[2],h=q+$*A[2],b=T+$*F[2],Y=O[1];Y>0;)for(Y<i?(I=Y,Y=0):(I=i,Y-=i),v=A[2]-I*A[1],m=F[2]-I*F[1],d=h+Y*A[1],_=b+Y*F[1],X=O[0];X>0;)for(X<i?(S=X,X=0):(S=i,X-=i),G=d+X*A[0],k=_+X*F[0],o=A[1]-S*A[0],p=F[1]-S*F[0],H=0;H<M;H++){for(U=0;U<L;U++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<S;R++)n[k]=t(a[G]),G+=u,k+=l;G+=o,k+=p}G+=v,k+=m}G+=f,k+=y}G+=c,k+=g}}pP.exports=YGr});var mP=s((Wze,gP)=>{"use strict";var $Gr=ne(),ZGr=se();function QGr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar;for(ar=$Gr(r.shape,r.strides,e.strides),L=ar.sh,k=ar.sx,R=ar.sy,i=ZGr(r.dtype,e.dtype),C=r.offset,B=e.offset,a=r.data,n=e.data,u=k[0],p=R[0],tr=L[5];tr>0;)for(tr<i?(G=tr,tr=0):(G=i,tr-=i),T=C+tr*k[5],E=B+tr*R[5],rr=L[4];rr>0;)for(rr<i?(P=rr,rr=0):(P=i,rr-=i),l=k[5]-P*k[4],h=R[5]-P*R[4],b=T+rr*k[4],I=E+rr*R[4],K=L[3];K>0;)for(K<i?(j=K,K=0):(j=i,K-=i),c=k[4]-j*k[3],d=R[4]-j*R[3],_=b+K*k[3],S=I+K*R[3],ur=L[2];ur>0;)for(ur<i?(F=ur,ur=0):(F=i,ur-=i),f=k[3]-F*k[2],g=R[3]-F*R[2],w=_+ur*k[2],O=S+ur*R[2],er=L[1];er>0;)for(er<i?(A=er,er=0):(A=i,er-=i),v=k[2]-A*k[1],y=R[2]-A*R[1],q=w+er*k[1],N=O+er*R[1],Z=L[0];Z>0;)for(Z<i?(M=Z,Z=0):(M=i,Z-=i),U=q+Z*k[0],H=N+Z*R[0],o=k[1]-M*k[0],m=R[1]-M*R[0],J=0;J<G;J++){for(x=0;x<P;x++){for(Q=0;Q<j;Q++){for($=0;$<F;$++){for(Y=0;Y<A;Y++){for(X=0;X<M;X++)n[H]=t(a[U]),U+=u,H+=p;U+=o,H+=m}U+=v,H+=y}U+=f,H+=g}U+=c,H+=d}U+=l,H+=h}}gP.exports=QGr});var hP=s((Hze,yP)=>{"use strict";var KGr=ne(),rUr=se();function eUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr;for(gr=KGr(r.shape,r.strides,e.strides),j=gr.sh,H=gr.sx,X=gr.sy,i=rUr(r.dtype,e.dtype),Y=r.offset,$=e.offset,a=r.data,n=e.data,u=H[0],m=X[0],cr=j[6];cr>0;)for(cr<i?(U=cr,cr=0):(U=i,cr-=i),S=Y+cr*H[6],F=$+cr*X[6],or=j[5];or>0;)for(or<i?(B=or,or=0):(B=i,or-=i),p=H[6]-B*H[5],w=X[6]-B*X[5],O=S+or*H[5],A=F+or*X[5],sr=j[4];sr>0;)for(sr<i?(C=sr,sr=0):(C=i,sr-=i),l=H[5]-C*H[4],q=X[5]-C*X[4],N=O+sr*H[4],M=A+sr*X[4],nr=j[3];nr>0;)for(nr<i?(R=nr,nr=0):(R=i,nr-=i),c=H[4]-R*H[3],h=X[4]-R*X[3],T=N+nr*H[3],L=M+nr*X[3],ir=j[2];ir>0;)for(ir<i?(k=ir,ir=0):(k=i,ir-=i),f=H[3]-k*H[2],d=X[3]-k*X[2],b=T+ir*H[2],E=L+ir*X[2],fr=j[1];fr>0;)for(fr<i?(G=fr,fr=0):(G=i,fr-=i),v=H[2]-G*H[1],g=X[2]-G*X[1],_=b+fr*H[1],I=E+fr*X[1],ar=j[0];ar>0;)for(ar<i?(P=ar,ar=0):(P=i,ar-=i),Q=_+ar*H[0],x=I+ar*X[0],o=H[1]-P*H[0],y=X[1]-P*X[0],tr=0;tr<U;tr++){for(rr=0;rr<B;rr++){for(K=0;K<C;K++){for(ur=0;ur<R;ur++){for(er=0;er<k;er++){for(Z=0;Z<G;Z++){for(J=0;J<P;J++)n[x]=t(a[Q]),Q+=u,x+=m;Q+=o,x+=y}Q+=v,x+=g}Q+=f,x+=d}Q+=c,x+=h}Q+=l,x+=q}Q+=p,x+=w}}yP.exports=eUr});var bP=s((Xze,qP)=>{"use strict";var tUr=ne(),iUr=se();function aUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er;for(Er=tUr(r.shape,r.strides,e.strides),R=Er.sh,x=Er.sx,J=Er.sy,i=iUr(r.dtype,e.dtype),Z=r.offset,er=e.offset,a=r.data,n=e.data,u=x[0],y=J[0],Tr=R[7];Tr>0;)for(Tr<i?(Q=Tr,Tr=0):(Q=i,Tr-=i),L=Z+Tr*x[7],k=er+Tr*J[7],Ar=R[6];Ar>0;)for(Ar<i?($=Ar,Ar=0):($=i,Ar-=i),m=x[7]-$*x[6],b=J[7]-$*J[6],E=L+Ar*x[6],G=k+Ar*J[6],Mr=R[5];Mr>0;)for(Mr<i?(Y=Mr,Mr=0):(Y=i,Mr-=i),p=x[6]-Y*x[5],_=J[6]-Y*J[5],I=E+Mr*x[5],P=G+Mr*J[5],jr=R[4];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),l=x[5]-X*x[4],w=J[5]-X*J[4],S=I+jr*x[4],j=P+jr*J[4],yr=R[3];yr>0;)for(yr<i?(H=yr,yr=0):(H=i,yr-=i),c=x[4]-H*x[3],q=J[4]-H*J[3],O=S+yr*x[3],F=j+yr*J[3],dr=R[2];dr>0;)for(dr<i?(U=dr,dr=0):(U=i,dr-=i),f=x[3]-U*x[2],h=J[3]-U*J[2],N=O+dr*x[2],A=F+dr*J[2],gr=R[1];gr>0;)for(gr<i?(B=gr,gr=0):(B=i,gr-=i),v=x[2]-B*x[1],d=J[2]-B*J[1],T=N+gr*x[1],M=A+gr*J[1],cr=R[0];cr>0;)for(cr<i?(C=cr,cr=0):(C=i,cr-=i),ur=T+cr*x[0],K=M+cr*J[0],o=x[1]-C*x[0],g=J[1]-C*J[0],or=0;or<Q;or++){for(sr=0;sr<$;sr++){for(nr=0;nr<Y;nr++){for(ir=0;ir<X;ir++){for(fr=0;fr<H;fr++){for(ar=0;ar<U;ar++){for(tr=0;tr<B;tr++){for(rr=0;rr<C;rr++)n[K]=t(a[ur]),ur+=u,K+=y;ur+=o,K+=g}ur+=v,K+=d}ur+=f,K+=h}ur+=c,K+=q}ur+=l,K+=w}ur+=p,K+=_}ur+=m,K+=b}}qP.exports=aUr});var EP=s((xze,wP)=>{"use strict";var nUr=ne(),sUr=se();function uUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,xr,Cr,Vr,Lr,Br;for(Br=nUr(r.shape,r.strides,e.strides),H=Br.sh,K=Br.sx,rr=Br.sy,i=sUr(r.dtype,e.dtype),tr=r.offset,ar=e.offset,a=r.data,n=e.data,u=K[0],g=rr[0],Lr=H[8];Lr>0;)for(Lr<i?(ur=Lr,Lr=0):(ur=i,Lr-=i),F=tr+Lr*K[8],U=ar+Lr*rr[8],Vr=H[7];Vr>0;)for(Vr<i?(er=Vr,Vr=0):(er=i,Vr-=i),y=K[8]-er*K[7],N=rr[8]-er*rr[7],A=F+Vr*K[7],B=U+Vr*rr[7],Cr=H[6];Cr>0;)for(Cr<i?(Z=Cr,Cr=0):(Z=i,Cr-=i),m=K[7]-Z*K[6],T=rr[7]-Z*rr[6],M=A+Cr*K[6],C=B+Cr*rr[6],xr=H[5];xr>0;)for(xr<i?(J=xr,xr=0):(J=i,xr-=i),p=K[6]-J*K[5],b=rr[6]-J*rr[5],L=M+xr*K[5],R=C+xr*rr[5],kr=H[4];kr>0;)for(kr<i?(x=kr,kr=0):(x=i,kr-=i),l=K[5]-x*K[4],_=rr[5]-x*rr[4],E=L+kr*K[4],k=R+kr*rr[4],Fr=H[3];Fr>0;)for(Fr<i?(Q=Fr,Fr=0):(Q=i,Fr-=i),c=K[4]-Q*K[3],w=rr[4]-Q*rr[3],I=E+Fr*K[3],G=k+Fr*rr[3],Er=H[2];Er>0;)for(Er<i?($=Er,Er=0):($=i,Er-=i),f=K[3]-$*K[2],q=rr[3]-$*rr[2],S=I+Er*K[2],P=G+Er*rr[2],Tr=H[1];Tr>0;)for(Tr<i?(Y=Tr,Tr=0):(Y=i,Tr-=i),v=K[2]-Y*K[1],h=rr[2]-Y*rr[1],O=S+Tr*K[1],j=P+Tr*rr[1],Ar=H[0];Ar>0;)for(Ar<i?(X=Ar,Ar=0):(X=i,Ar-=i),fr=O+Ar*K[0],ir=j+Ar*rr[0],o=K[1]-X*K[0],d=rr[1]-X*rr[0],Mr=0;Mr<ur;Mr++){for(jr=0;jr<er;jr++){for(yr=0;yr<Z;yr++){for(dr=0;dr<J;dr++){for(gr=0;gr<x;gr++){for(cr=0;cr<Q;cr++){for(or=0;or<$;or++){for(sr=0;sr<Y;sr++){for(nr=0;nr<X;nr++)n[ir]=t(a[fr]),fr+=u,ir+=g;fr+=o,ir+=d}fr+=v,ir+=h}fr+=f,ir+=q}fr+=c,ir+=w}fr+=l,ir+=_}fr+=p,ir+=b}fr+=m,ir+=T}fr+=y,ir+=N}}wP.exports=uUr});var NP=s((Jze,SP)=>{"use strict";var oUr=ne(),vUr=se();function fUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr,tr,ar,fr,ir,nr,sr,or,cr,gr,dr,yr,jr,Mr,Ar,Tr,Er,Fr,kr,xr,Cr,Vr,Lr,Br,Xr,Kr,fe,ce,le,pe,Ce;for(Ce=oUr(r.shape,r.strides,e.strides),Q=Ce.sh,ir=Ce.sx,nr=Ce.sy,i=vUr(r.dtype,e.dtype),sr=r.offset,or=e.offset,a=r.data,n=e.data,u=ir[0],d=nr[0],pe=Q[9];pe>0;)for(pe<i?(fr=pe,pe=0):(fr=i,pe-=i),G=sr+pe*ir[9],$=or+pe*nr[9],le=Q[8];le>0;)for(le<i?(ar=le,le=0):(ar=i,le-=i),g=ir[9]-ar*ir[8],S=nr[9]-ar*nr[8],P=G+le*ir[8],Y=$+le*nr[8],ce=Q[7];ce>0;)for(ce<i?(tr=ce,ce=0):(tr=i,ce-=i),y=ir[8]-tr*ir[7],O=nr[8]-tr*nr[7],j=P+ce*ir[7],X=Y+ce*nr[7],fe=Q[6];fe>0;)for(fe<i?(rr=fe,fe=0):(rr=i,fe-=i),m=ir[7]-rr*ir[6],N=nr[7]-rr*nr[6],F=j+fe*ir[6],H=X+fe*nr[6],Kr=Q[5];Kr>0;)for(Kr<i?(K=Kr,Kr=0):(K=i,Kr-=i),p=ir[6]-K*ir[5],T=nr[6]-K*nr[5],A=F+Kr*ir[5],U=H+Kr*nr[5],Xr=Q[4];Xr>0;)for(Xr<i?(ur=Xr,Xr=0):(ur=i,Xr-=i),l=ir[5]-ur*ir[4],b=nr[5]-ur*nr[4],M=A+Xr*ir[4],B=U+Xr*nr[4],Br=Q[3];Br>0;)for(Br<i?(er=Br,Br=0):(er=i,Br-=i),c=ir[4]-er*ir[3],_=nr[4]-er*nr[3],L=M+Br*ir[3],C=B+Br*nr[3],Lr=Q[2];Lr>0;)for(Lr<i?(Z=Lr,Lr=0):(Z=i,Lr-=i),f=ir[3]-Z*ir[2],w=nr[3]-Z*nr[2],E=L+Lr*ir[2],R=C+Lr*nr[2],Vr=Q[1];Vr>0;)for(Vr<i?(J=Vr,Vr=0):(J=i,Vr-=i),v=ir[2]-J*ir[1],q=nr[2]-J*nr[1],I=E+Vr*ir[1],k=R+Vr*nr[1],Cr=Q[0];Cr>0;)for(Cr<i?(x=Cr,Cr=0):(x=i,Cr-=i),cr=I+Cr*ir[0],gr=k+Cr*nr[0],o=ir[1]-x*ir[0],h=nr[1]-x*nr[0],xr=0;xr<fr;xr++){for(kr=0;kr<ar;kr++){for(Fr=0;Fr<tr;Fr++){for(Er=0;Er<rr;Er++){for(Tr=0;Tr<K;Tr++){for(Ar=0;Ar<ur;Ar++){for(Mr=0;Mr<er;Mr++){for(jr=0;jr<Z;jr++){for(yr=0;yr<J;yr++){for(dr=0;dr<x;dr++)n[gr]=t(a[cr]),cr+=u,gr+=d;cr+=o,gr+=h}cr+=v,gr+=q}cr+=f,gr+=w}cr+=c,gr+=_}cr+=l,gr+=b}cr+=p,gr+=T}cr+=m,gr+=N}cr+=y,gr+=O}cr+=g,gr+=S}}SP.exports=fUr});var _P=s((Yze,OP)=>{"use strict";function cUr(r,e,t){e.accessors[1](e.data,e.offset,t(r.accessors[0](r.data,r.offset)))}OP.exports=cUr});var TP=s(($ze,AP)=>{"use strict";function lUr(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(f=r.shape[0],o=r.strides[0],v=e.strides[0],c=r.offset,l=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],p=0;p<f;p++)u(a,l,t(n(i,c))),c+=o,l+=v}AP.exports=lUr});var RP=s((Zze,IP)=>{"use strict";function pUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;for(l=r.shape,y=r.strides,g=e.strides,r.order==="row-major"?(p=l[1],m=l[0],o=y[1],v=y[0]-p*y[1],f=g[1],c=g[0]-p*g[1]):(p=l[0],m=l[1],o=y[0],v=y[1]-p*y[0],f=g[0],c=g[1]-p*g[0]),d=r.offset,h=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],w=0;w<m;w++){for(q=0;q<p;q++)u(a,h,t(n(i,d))),d+=o,h+=f;d+=v,h+=c}}IP.exports=pUr});var LP=s((Qze,PP)=>{"use strict";function dUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N;for(m=r.shape,h=r.strides,q=e.strides,r.order==="row-major"?(y=m[2],g=m[1],d=m[0],o=h[2],v=h[1]-y*h[2],f=h[0]-g*h[1],c=q[2],l=q[1]-y*q[2],p=q[0]-g*q[1]):(y=m[0],g=m[1],d=m[2],o=h[0],v=h[1]-y*h[0],f=h[2]-g*h[1],c=q[0],l=q[1]-y*q[0],p=q[2]-g*q[1]),w=r.offset,_=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],N=0;N<d;N++){for(T=0;T<g;T++){for(b=0;b<y;b++)u(a,_,t(n(i,w))),w+=o,_+=c;w+=v,_+=l}w+=f,_+=p}}PP.exports=dUr});var jP=s((Kze,FP)=>{"use strict";function gUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E;for(g=r.shape,_=r.strides,b=e.strides,r.order==="row-major"?(d=g[3],h=g[2],q=g[1],w=g[0],o=_[3],v=_[2]-d*_[3],f=_[1]-h*_[2],c=_[0]-q*_[1],l=b[3],p=b[2]-d*b[3],m=b[1]-h*b[2],y=b[0]-q*b[1]):(d=g[0],h=g[1],q=g[2],w=g[3],o=_[0],v=_[1]-d*_[0],f=_[2]-h*_[1],c=_[3]-q*_[2],l=b[0],p=b[1]-d*b[0],m=b[2]-h*b[1],y=b[3]-q*b[2]),T=r.offset,N=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],E=0;E<w;E++){for(I=0;I<q;I++){for(S=0;S<h;S++){for(O=0;O<d;O++)u(a,N,t(n(i,T))),T+=o,N+=l;T+=v,N+=p}T+=f,N+=m}T+=c,N+=y}}FP.exports=gUr});var BP=s((rWe,MP)=>{"use strict";function mUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F;for(h=r.shape,N=r.strides,O=e.strides,r.order==="row-major"?(q=h[4],w=h[3],_=h[2],b=h[1],T=h[0],o=N[4],v=N[3]-q*N[4],f=N[2]-w*N[3],c=N[1]-_*N[2],l=N[0]-b*N[1],p=O[4],m=O[3]-q*O[4],y=O[2]-w*O[3],g=O[1]-_*O[2],d=O[0]-b*O[1]):(q=h[0],w=h[1],_=h[2],b=h[3],T=h[4],o=N[0],v=N[1]-q*N[0],f=N[2]-w*N[1],c=N[3]-_*N[2],l=N[4]-b*N[3],p=O[0],m=O[1]-q*O[0],y=O[2]-w*O[1],g=O[3]-_*O[2],d=O[4]-b*O[3]),S=r.offset,I=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],F=0;F<T;F++){for(A=0;A<b;A++){for(M=0;M<_;M++){for(L=0;L<w;L++){for(E=0;E<q;E++)u(a,I,t(n(i,S))),S+=o,I+=p;S+=v,I+=m}S+=f,I+=y}S+=c,I+=g}S+=l,I+=d}}MP.exports=mUr});var CP=s((eWe,kP)=>{"use strict";function yUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k;for(w=r.shape,I=r.strides,E=e.strides,r.order==="row-major"?(_=w[5],b=w[4],T=w[3],N=w[2],O=w[1],S=w[0],o=I[5],v=I[4]-_*I[5],f=I[3]-b*I[4],c=I[2]-T*I[3],l=I[1]-N*I[2],p=I[0]-O*I[1],m=E[5],y=E[4]-_*E[5],g=E[3]-b*E[4],d=E[2]-T*E[3],h=E[1]-N*E[2],q=E[0]-O*E[1]):(_=w[0],b=w[1],T=w[2],N=w[3],O=w[4],S=w[5],o=I[0],v=I[1]-_*I[0],f=I[2]-b*I[1],c=I[3]-T*I[2],l=I[4]-N*I[3],p=I[5]-O*I[4],m=E[0],y=E[1]-_*E[0],g=E[2]-b*E[1],d=E[3]-T*E[2],h=E[4]-N*E[3],q=E[5]-O*E[4]),L=r.offset,M=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],k=0;k<S;k++){for(G=0;G<O;G++){for(P=0;P<N;P++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(A=0;A<_;A++)u(a,M,t(n(i,L))),L+=o,M+=m;L+=v,M+=y}L+=f,M+=g}L+=c,M+=d}L+=l,M+=h}L+=p,M+=q}}kP.exports=yUr});var GP=s((tWe,VP)=>{"use strict";function hUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U;for(b=r.shape,M=r.strides,A=e.strides,r.order==="row-major"?(T=b[6],N=b[5],O=b[4],S=b[3],I=b[2],E=b[1],L=b[0],o=M[6],v=M[5]-T*M[6],f=M[4]-N*M[5],c=M[3]-O*M[4],l=M[2]-S*M[3],p=M[1]-I*M[2],m=M[0]-E*M[1],y=A[6],g=A[5]-T*A[6],d=A[4]-N*A[5],h=A[3]-O*A[4],q=A[2]-S*A[3],w=A[1]-I*A[2],_=A[0]-E*A[1]):(T=b[0],N=b[1],O=b[2],S=b[3],I=b[4],E=b[5],L=b[6],o=M[0],v=M[1]-T*M[0],f=M[2]-N*M[1],c=M[3]-O*M[2],l=M[4]-S*M[3],p=M[5]-I*M[4],m=M[6]-E*M[5],y=A[0],g=A[1]-T*A[0],d=A[2]-N*A[1],h=A[3]-O*A[2],q=A[4]-S*A[3],w=A[5]-I*A[4],_=A[6]-E*A[5]),F=r.offset,j=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],U=0;U<L;U++){for(B=0;B<E;B++){for(C=0;C<I;C++){for(R=0;R<S;R++){for(k=0;k<O;k++){for(G=0;G<N;G++){for(P=0;P<T;P++)u(a,j,t(n(i,F))),F+=o,j+=y;F+=v,j+=g}F+=f,j+=d}F+=c,j+=h}F+=l,j+=q}F+=p,j+=w}F+=m,j+=_}}VP.exports=hUr});var DP=s((iWe,UP)=>{"use strict";function qUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$;for(N=r.shape,j=r.strides,P=e.strides,r.order==="row-major"?(O=N[7],S=N[6],I=N[5],E=N[4],L=N[3],M=N[2],A=N[1],F=N[0],o=j[7],v=j[6]-O*j[7],f=j[5]-S*j[6],c=j[4]-I*j[5],l=j[3]-E*j[4],p=j[2]-L*j[3],m=j[1]-M*j[2],y=j[0]-A*j[1],g=P[7],d=P[6]-O*P[7],h=P[5]-S*P[6],q=P[4]-I*P[5],w=P[3]-E*P[4],_=P[2]-L*P[3],b=P[1]-M*P[2],T=P[0]-A*P[1]):(O=N[0],S=N[1],I=N[2],E=N[3],L=N[4],M=N[5],A=N[6],F=N[7],o=j[0],v=j[1]-O*j[0],f=j[2]-S*j[1],c=j[3]-I*j[2],l=j[4]-E*j[3],p=j[5]-L*j[4],m=j[6]-M*j[5],y=j[7]-A*j[6],g=P[0],d=P[1]-O*P[0],h=P[2]-S*P[1],q=P[3]-I*P[2],w=P[4]-E*P[3],_=P[5]-L*P[4],b=P[6]-M*P[5],T=P[7]-A*P[6]),G=r.offset,k=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],$=0;$<F;$++){for(Y=0;Y<A;Y++){for(X=0;X<M;X++){for(H=0;H<L;H++){for(U=0;U<E;U++){for(B=0;B<I;B++){for(C=0;C<S;C++){for(R=0;R<O;R++)u(a,k,t(n(i,G))),G+=o,k+=g;G+=v,k+=d}G+=f,k+=h}G+=c,k+=q}G+=l,k+=w}G+=p,k+=_}G+=m,k+=b}G+=y,k+=T}}UP.exports=qUr});var WP=s((aWe,zP)=>{"use strict";function bUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z;for(S=r.shape,k=r.strides,R=e.strides,r.order==="row-major"?(I=S[8],E=S[7],L=S[6],M=S[5],A=S[4],F=S[3],j=S[2],P=S[1],G=S[0],o=k[8],v=k[7]-I*k[8],f=k[6]-E*k[7],c=k[5]-L*k[6],l=k[4]-M*k[5],p=k[3]-A*k[4],m=k[2]-F*k[3],y=k[1]-j*k[2],g=k[0]-P*k[1],d=R[8],h=R[7]-I*R[8],q=R[6]-E*R[7],w=R[5]-L*R[6],_=R[4]-M*R[5],b=R[3]-A*R[4],T=R[2]-F*R[3],N=R[1]-j*R[2],O=R[0]-P*R[1]):(I=S[0],E=S[1],L=S[2],M=S[3],A=S[4],F=S[5],j=S[6],P=S[7],G=S[8],o=k[0],v=k[1]-I*k[0],f=k[2]-E*k[1],c=k[3]-L*k[2],l=k[4]-M*k[3],p=k[5]-A*k[4],m=k[6]-F*k[5],y=k[7]-j*k[6],g=k[8]-P*k[7],d=R[0],h=R[1]-I*R[0],q=R[2]-E*R[1],w=R[3]-L*R[2],_=R[4]-M*R[3],b=R[5]-A*R[4],T=R[6]-F*R[5],N=R[7]-j*R[6],O=R[8]-P*R[7]),C=r.offset,B=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],Z=0;Z<G;Z++){for(J=0;J<P;J++){for(x=0;x<j;x++){for(Q=0;Q<F;Q++){for($=0;$<A;$++){for(Y=0;Y<M;Y++){for(X=0;X<L;X++){for(H=0;H<E;H++){for(U=0;U<I;U++)u(a,B,t(n(i,C))),C+=o,B+=d;C+=v,B+=h}C+=f,B+=q}C+=c,B+=w}C+=l,B+=_}C+=p,B+=b}C+=m,B+=T}C+=y,B+=N}C+=g,B+=O}}zP.exports=bUr});var XP=s((nWe,HP)=>{"use strict";function wUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur,K,rr;for(E=r.shape,B=r.strides,U=e.strides,r.order==="row-major"?(L=E[9],M=E[8],A=E[7],F=E[6],j=E[5],P=E[4],G=E[3],k=E[2],R=E[1],C=E[0],o=B[9],v=B[8]-L*B[9],f=B[7]-M*B[8],c=B[6]-A*B[7],l=B[5]-F*B[6],p=B[4]-j*B[5],m=B[3]-P*B[4],y=B[2]-G*B[3],g=B[1]-k*B[2],d=B[0]-R*B[1],h=U[9],q=U[8]-L*U[9],w=U[7]-M*U[8],_=U[6]-A*U[7],b=U[5]-F*U[6],T=U[4]-j*U[5],N=U[3]-P*U[4],O=U[2]-G*U[3],S=U[1]-k*U[2],I=U[0]-R*U[1]):(L=E[0],M=E[1],A=E[2],F=E[3],j=E[4],P=E[5],G=E[6],k=E[7],R=E[8],C=E[9],o=B[0],v=B[1]-L*B[0],f=B[2]-M*B[1],c=B[3]-A*B[2],l=B[4]-F*B[3],p=B[5]-j*B[4],m=B[6]-P*B[5],y=B[7]-G*B[6],g=B[8]-k*B[7],d=B[9]-R*B[8],h=U[0],q=U[1]-L*U[0],w=U[2]-M*U[1],_=U[3]-A*U[2],b=U[4]-F*U[3],T=U[5]-j*U[4],N=U[6]-P*U[5],O=U[7]-G*U[6],S=U[8]-k*U[7],I=U[9]-R*U[8]),H=r.offset,X=e.offset,i=r.data,a=e.data,n=r.accessors[0],u=e.accessors[1],rr=0;rr<C;rr++){for(K=0;K<R;K++){for(ur=0;ur<k;ur++){for(er=0;er<G;er++){for(Z=0;Z<P;Z++){for(J=0;J<j;J++){for(x=0;x<F;x++){for(Q=0;Q<A;Q++){for($=0;$<M;$++){for(Y=0;Y<L;Y++)u(a,X,t(n(i,H))),H+=o,X+=h;H+=v,X+=q}H+=f,X+=w}H+=c,X+=_}H+=l,X+=b}H+=p,X+=T}H+=m,X+=N}H+=y,X+=O}H+=g,X+=S}H+=d,X+=I}}HP.exports=wUr});var JP=s((sWe,xP)=>{"use strict";var EUr=V();function SUr(r,e,t,i,a,n){var u,o,v,f,c;for(u=r.length,o=1,c=0;c<u;c++)o*=r[c];if(n==="clamp")a<0?a=0:a>=o&&(a=o-1);else if(n==="wrap")a<0?(a+=o,a<0&&(a%=o,a!==0&&(a+=o))):a>=o&&(a-=o,a>=o&&(a%=o));else if(a<0||a>=o)throw new RangeError(EUr("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",o,a));if(v=t,i==="column-major"){for(c=0;c<u;c++)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}for(c=u-1;c>=0;c--)f=a%r[c],a-=f,a/=r[c],v+=f*e[c];return v}xP.exports=SUr});var w3=s((uWe,YP)=>{"use strict";var NUr=JP();YP.exports=NUr});var KP=s((oWe,QP)=>{"use strict";var OUr=lt(),$P=w3(),ZP="throw";function _Ur(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(c=r.shape,o=OUr(c),i=r.data,a=e.data,l=r.strides,p=e.strides,m=r.offset,y=e.offset,n=r.order,u=e.order,v=r.accessors[0],f=e.accessors[1],h=0;h<o;h++)g=$P(c,l,m,n,h,ZP),d=$P(c,p,y,u,h,ZP),f(a,d,t(v(i,g)))}QP.exports=_Ur});var eL=s((vWe,rL)=>{"use strict";function AUr(r,e,t){e.data[e.offset]=t(r.data[r.offset])}rL.exports=AUr});var iL=s((fWe,tL)=>{"use strict";function TUr(r,e,t){var i,a,n,u,o,v,f,c;for(o=r.shape[0],n=r.strides[0],u=e.strides[0],v=r.offset,f=e.offset,i=r.data,a=e.data,c=0;c<o;c++)a[f]=t(i[v]),v+=n,f+=u}tL.exports=TUr});var nL=s((cWe,aL)=>{"use strict";function IUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h;for(f=r.shape,p=r.strides,m=e.strides,r.order==="row-major"?(c=f[1],l=f[0],n=p[1],u=p[0]-c*p[1],o=m[1],v=m[0]-c*m[1]):(c=f[0],l=f[1],n=p[0],u=p[1]-c*p[0],o=m[0],v=m[1]-c*m[0]),y=r.offset,g=e.offset,i=r.data,a=e.data,h=0;h<l;h++){for(d=0;d<c;d++)a[g]=t(i[y]),y+=n,g+=o;y+=u,g+=v}}aL.exports=IUr});var uL=s((lWe,sL)=>{"use strict";function RUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b;for(l=r.shape,g=r.strides,d=e.strides,r.order==="row-major"?(p=l[2],m=l[1],y=l[0],n=g[2],u=g[1]-p*g[2],o=g[0]-m*g[1],v=d[2],f=d[1]-p*d[2],c=d[0]-m*d[1]):(p=l[0],m=l[1],y=l[2],n=g[0],u=g[1]-p*g[0],o=g[2]-m*g[1],v=d[0],f=d[1]-p*d[0],c=d[2]-m*d[1]),h=r.offset,q=e.offset,i=r.data,a=e.data,b=0;b<y;b++){for(_=0;_<m;_++){for(w=0;w<p;w++)a[q]=t(i[h]),h+=n,q+=v;h+=u,q+=f}h+=o,q+=c}}sL.exports=RUr});var vL=s((pWe,oL)=>{"use strict";function PUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S;for(m=r.shape,q=r.strides,w=e.strides,r.order==="row-major"?(y=m[3],g=m[2],d=m[1],h=m[0],n=q[3],u=q[2]-y*q[3],o=q[1]-g*q[2],v=q[0]-d*q[1],f=w[3],c=w[2]-y*w[3],l=w[1]-g*w[2],p=w[0]-d*w[1]):(y=m[0],g=m[1],d=m[2],h=m[3],n=q[0],u=q[1]-y*q[0],o=q[2]-g*q[1],v=q[3]-d*q[2],f=w[0],c=w[1]-y*w[0],l=w[2]-g*w[1],p=w[3]-d*w[2]),_=r.offset,b=e.offset,i=r.data,a=e.data,S=0;S<h;S++){for(O=0;O<d;O++){for(N=0;N<g;N++){for(T=0;T<y;T++)a[b]=t(i[_]),_+=n,b+=f;_+=u,b+=c}_+=o,b+=l}_+=v,b+=p}}oL.exports=PUr});var cL=s((dWe,fL)=>{"use strict";function LUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M;for(g=r.shape,b=r.strides,T=e.strides,r.order==="row-major"?(d=g[4],h=g[3],q=g[2],w=g[1],_=g[0],n=b[4],u=b[3]-d*b[4],o=b[2]-h*b[3],v=b[1]-q*b[2],f=b[0]-w*b[1],c=T[4],l=T[3]-d*T[4],p=T[2]-h*T[3],m=T[1]-q*T[2],y=T[0]-w*T[1]):(d=g[0],h=g[1],q=g[2],w=g[3],_=g[4],n=b[0],u=b[1]-d*b[0],o=b[2]-h*b[1],v=b[3]-q*b[2],f=b[4]-w*b[3],c=T[0],l=T[1]-d*T[0],p=T[2]-h*T[1],m=T[3]-q*T[2],y=T[4]-w*T[3]),N=r.offset,O=e.offset,i=r.data,a=e.data,M=0;M<_;M++){for(L=0;L<w;L++){for(E=0;E<q;E++){for(I=0;I<h;I++){for(S=0;S<d;S++)a[O]=t(i[N]),N+=n,O+=c;N+=u,O+=l}N+=o,O+=p}N+=v,O+=m}N+=f,O+=y}}fL.exports=LUr});var pL=s((gWe,lL)=>{"use strict";function FUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P;for(h=r.shape,O=r.strides,S=e.strides,r.order==="row-major"?(q=h[5],w=h[4],_=h[3],b=h[2],T=h[1],N=h[0],n=O[5],u=O[4]-q*O[5],o=O[3]-w*O[4],v=O[2]-_*O[3],f=O[1]-b*O[2],c=O[0]-T*O[1],l=S[5],p=S[4]-q*S[5],m=S[3]-w*S[4],y=S[2]-_*S[3],g=S[1]-b*S[2],d=S[0]-T*S[1]):(q=h[0],w=h[1],_=h[2],b=h[3],T=h[4],N=h[5],n=O[0],u=O[1]-q*O[0],o=O[2]-w*O[1],v=O[3]-_*O[2],f=O[4]-b*O[3],c=O[5]-T*O[4],l=S[0],p=S[1]-q*S[0],m=S[2]-w*S[1],y=S[3]-_*S[2],g=S[4]-b*S[3],d=S[5]-T*S[4]),I=r.offset,E=e.offset,i=r.data,a=e.data,P=0;P<N;P++){for(j=0;j<T;j++){for(F=0;F<b;F++){for(A=0;A<_;A++){for(M=0;M<w;M++){for(L=0;L<q;L++)a[E]=t(i[I]),I+=n,E+=l;I+=u,E+=p}I+=o,E+=m}I+=v,E+=y}I+=f,E+=g}I+=c,E+=d}}lL.exports=FUr});var gL=s((mWe,dL)=>{"use strict";function jUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C;for(w=r.shape,E=r.strides,L=e.strides,r.order==="row-major"?(_=w[6],b=w[5],T=w[4],N=w[3],O=w[2],S=w[1],I=w[0],n=E[6],u=E[5]-_*E[6],o=E[4]-b*E[5],v=E[3]-T*E[4],f=E[2]-N*E[3],c=E[1]-O*E[2],l=E[0]-S*E[1],p=L[6],m=L[5]-_*L[6],y=L[4]-b*L[5],g=L[3]-T*L[4],d=L[2]-N*L[3],h=L[1]-O*L[2],q=L[0]-S*L[1]):(_=w[0],b=w[1],T=w[2],N=w[3],O=w[4],S=w[5],I=w[6],n=E[0],u=E[1]-_*E[0],o=E[2]-b*E[1],v=E[3]-T*E[2],f=E[4]-N*E[3],c=E[5]-O*E[4],l=E[6]-S*E[5],p=L[0],m=L[1]-_*L[0],y=L[2]-b*L[1],g=L[3]-T*L[2],d=L[4]-N*L[3],h=L[5]-O*L[4],q=L[6]-S*L[5]),M=r.offset,A=e.offset,i=r.data,a=e.data,C=0;C<I;C++){for(R=0;R<S;R++){for(k=0;k<O;k++){for(G=0;G<N;G++){for(P=0;P<T;P++){for(j=0;j<b;j++){for(F=0;F<_;F++)a[A]=t(i[M]),M+=n,A+=p;M+=u,A+=m}M+=o,A+=y}M+=v,A+=g}M+=f,A+=d}M+=c,A+=h}M+=l,A+=q}}dL.exports=jUr});var yL=s((yWe,mL)=>{"use strict";function MUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X;for(b=r.shape,A=r.strides,F=e.strides,r.order==="row-major"?(T=b[7],N=b[6],O=b[5],S=b[4],I=b[3],E=b[2],L=b[1],M=b[0],n=A[7],u=A[6]-T*A[7],o=A[5]-N*A[6],v=A[4]-O*A[5],f=A[3]-S*A[4],c=A[2]-I*A[3],l=A[1]-E*A[2],p=A[0]-L*A[1],m=F[7],y=F[6]-T*F[7],g=F[5]-N*F[6],d=F[4]-O*F[5],h=F[3]-S*F[4],q=F[2]-I*F[3],w=F[1]-E*F[2],_=F[0]-L*F[1]):(T=b[0],N=b[1],O=b[2],S=b[3],I=b[4],E=b[5],L=b[6],M=b[7],n=A[0],u=A[1]-T*A[0],o=A[2]-N*A[1],v=A[3]-O*A[2],f=A[4]-S*A[3],c=A[5]-I*A[4],l=A[6]-E*A[5],p=A[7]-L*A[6],m=F[0],y=F[1]-T*F[0],g=F[2]-N*F[1],d=F[3]-O*F[2],h=F[4]-S*F[3],q=F[5]-I*F[4],w=F[6]-E*F[5],_=F[7]-L*F[6]),j=r.offset,P=e.offset,i=r.data,a=e.data,X=0;X<M;X++){for(H=0;H<L;H++){for(U=0;U<E;U++){for(B=0;B<I;B++){for(C=0;C<S;C++){for(R=0;R<O;R++){for(k=0;k<N;k++){for(G=0;G<T;G++)a[P]=t(i[j]),j+=n,P+=m;j+=u,P+=y}j+=o,P+=g}j+=v,P+=d}j+=f,P+=h}j+=c,P+=q}j+=l,P+=w}j+=p,P+=_}}mL.exports=MUr});var qL=s((hWe,hL)=>{"use strict";function BUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x;for(N=r.shape,P=r.strides,G=e.strides,r.order==="row-major"?(O=N[8],S=N[7],I=N[6],E=N[5],L=N[4],M=N[3],A=N[2],F=N[1],j=N[0],n=P[8],u=P[7]-O*P[8],o=P[6]-S*P[7],v=P[5]-I*P[6],f=P[4]-E*P[5],c=P[3]-L*P[4],l=P[2]-M*P[3],p=P[1]-A*P[2],m=P[0]-F*P[1],y=G[8],g=G[7]-O*G[8],d=G[6]-S*G[7],h=G[5]-I*G[6],q=G[4]-E*G[5],w=G[3]-L*G[4],_=G[2]-M*G[3],b=G[1]-A*G[2],T=G[0]-F*G[1]):(O=N[0],S=N[1],I=N[2],E=N[3],L=N[4],M=N[5],A=N[6],F=N[7],j=N[8],n=P[0],u=P[1]-O*P[0],o=P[2]-S*P[1],v=P[3]-I*P[2],f=P[4]-E*P[3],c=P[5]-L*P[4],l=P[6]-M*P[5],p=P[7]-A*P[6],m=P[8]-F*P[7],y=G[0],g=G[1]-O*G[0],d=G[2]-S*G[1],h=G[3]-I*G[2],q=G[4]-E*G[3],w=G[5]-L*G[4],_=G[6]-M*G[5],b=G[7]-A*G[6],T=G[8]-F*G[7]),k=r.offset,R=e.offset,i=r.data,a=e.data,x=0;x<j;x++){for(Q=0;Q<F;Q++){for($=0;$<A;$++){for(Y=0;Y<M;Y++){for(X=0;X<L;X++){for(H=0;H<E;H++){for(U=0;U<I;U++){for(B=0;B<S;B++){for(C=0;C<O;C++)a[R]=t(i[k]),k+=n,R+=y;k+=u,R+=g}k+=o,R+=d}k+=v,R+=h}k+=f,R+=q}k+=c,R+=w}k+=l,R+=_}k+=p,R+=b}k+=m,R+=T}}hL.exports=BUr});var wL=s((qWe,bL)=>{"use strict";function kUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L,M,A,F,j,P,G,k,R,C,B,U,H,X,Y,$,Q,x,J,Z,er,ur;for(S=r.shape,R=r.strides,C=e.strides,r.order==="row-major"?(I=S[9],E=S[8],L=S[7],M=S[6],A=S[5],F=S[4],j=S[3],P=S[2],G=S[1],k=S[0],n=R[9],u=R[8]-I*R[9],o=R[7]-E*R[8],v=R[6]-L*R[7],f=R[5]-M*R[6],c=R[4]-A*R[5],l=R[3]-F*R[4],p=R[2]-j*R[3],m=R[1]-P*R[2],y=R[0]-G*R[1],g=C[9],d=C[8]-I*C[9],h=C[7]-E*C[8],q=C[6]-L*C[7],w=C[5]-M*C[6],_=C[4]-A*C[5],b=C[3]-F*C[4],T=C[2]-j*C[3],N=C[1]-P*C[2],O=C[0]-G*C[1]):(I=S[0],E=S[1],L=S[2],M=S[3],A=S[4],F=S[5],j=S[6],P=S[7],G=S[8],k=S[9],n=R[0],u=R[1]-I*R[0],o=R[2]-E*R[1],v=R[3]-L*R[2],f=R[4]-M*R[3],c=R[5]-A*R[4],l=R[6]-F*R[5],p=R[7]-j*R[6],m=R[8]-P*R[7],y=R[9]-G*R[8],g=C[0],d=C[1]-I*C[0],h=C[2]-E*C[1],q=C[3]-L*C[2],w=C[4]-M*C[3],_=C[5]-A*C[4],b=C[6]-F*C[5],T=C[7]-j*C[6],N=C[8]-P*C[7],O=C[9]-G*C[8]),B=r.offset,U=e.offset,i=r.data,a=e.data,ur=0;ur<k;ur++){for(er=0;er<G;er++){for(Z=0;Z<P;Z++){for(J=0;J<j;J++){for(x=0;x<F;x++){for(Q=0;Q<A;Q++){for($=0;$<M;$++){for(Y=0;Y<L;Y++){for(X=0;X<E;X++){for(H=0;H<I;H++)a[U]=t(i[B]),B+=n,U+=g;B+=u,U+=d}B+=o,U+=h}B+=v,U+=q}B+=f,U+=w}B+=c,U+=_}B+=l,U+=b}B+=p,U+=T}B+=m,U+=N}B+=y,U+=O}}bL.exports=kUr});var OL=s((bWe,NL)=>{"use strict";var CUr=lt(),EL=w3(),SL="throw";function VUr(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g;for(v=r.shape,o=CUr(v),i=r.data,a=e.data,f=r.strides,c=e.strides,l=r.offset,p=e.offset,n=r.order,u=e.order,g=0;g<o;g++)m=EL(v,f,l,n,g,SL),y=EL(v,c,p,u,g,SL),a[y]=t(i[m])}NL.exports=VUr});var PL=s((wWe,RL)=>{"use strict";var _L=h3(),AL=cR(),TL=hR(),GUr=WR(),UUr=XR(),DUr=JR(),zUr=$R(),WUr=QR(),HUr=rP(),XUr=tP(),xUr=aP(),JUr=sP(),YUr=oP(),$Ur=fP(),ZUr=lP(),QUr=dP(),KUr=mP(),rDr=hP(),eDr=bP(),tDr=EP(),iDr=NP(),aDr=_P(),nDr=TP(),sDr=RP(),uDr=LP(),oDr=jP(),vDr=BP(),fDr=CP(),cDr=GP(),lDr=DP(),pDr=WP(),dDr=XP(),gDr=KP(),mDr=eL(),yDr=iL(),hDr=nL(),qDr=uL(),bDr=vL(),wDr=cL(),EDr=pL(),SDr=gL(),NDr=yL(),ODr=qL(),_Dr=wL(),ADr=OL(),Za=[mDr,yDr,hDr,qDr,bDr,wDr,EDr,SDr,NDr,ODr,_Dr],e0=[aDr,nDr,sDr,uDr,oDr,vDr,fDr,cDr,lDr,pDr,dDr],TDr=[YUr,$Ur,ZUr,QUr,KUr,rDr,eDr,tDr,iDr],IDr=[GUr,UUr,DUr,zUr,WUr,HUr,XUr,xUr,JUr],IL=Za.length-1;function RDr(r,e){var t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(g=TL(r[0]),d=TL(r[1]),n=g.shape,u=d.shape,t=n.length,t!==u.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+t+". ndims(y) == "+u.length+".");if(t===0)return g.accessorProtocol||d.accessorProtocol?e0[t](g,d,e):Za[t](g,d,e);for(f=1,y=0,q=0;q<t;q++){if(h=n[q],h!==u[q])throw new Error("invalid arguments. Arrays must have the same shape.");f*=h,h===1&&(y+=1)}if(f!==0){if(t===1)return g.accessorProtocol||d.accessorProtocol?e0[t](g,d,e):Za[t](g,d,e);if(c=g.strides,l=d.strides,y===t-1){for(q=0;q<t&&n[q]===1;q++);return g.shape=[n[q]],d.shape=g.shape,g.strides=[c[q]],d.strides=[l[q]],g.accessorProtocol||d.accessorProtocol?e0[1](g,d,e):Za[1](g,d,e)}if(o=_L(c),v=_L(l),o!==0&&v!==0&&g.order===d.order){if(i=AL(n,c,g.offset),a=AL(u,l,d.offset),f===i[1]-i[0]+1&&f===a[1]-a[0]+1)return o===1?p=i[0]:p=i[1],v===1?m=a[0]:m=a[1],g.shape=[f],d.shape=g.shape,g.strides=[o],d.strides=[v],g.offset=p,d.offset=m,g.accessorProtocol||d.accessorProtocol?e0[1](g,d,e):Za[1](g,d,e);if(t<=IL)return g.accessorProtocol||d.accessorProtocol?e0[t](g,d,e):Za[t](g,d,e)}if(t<=IL)return g.accessorProtocol||d.accessorProtocol?IDr[t-2](g,d,e):TDr[t-2](g,d,e);if(g.accessorProtocol||d.accessorProtocol)return gDr(g,d,e);ADr(g,d,e)}}RL.exports=RDr});var FL=s((EWe,LL)=>{"use strict";var PDr=PL();LL.exports=PDr});var ML=s((SWe,jL)=>{"use strict";var LDr=FL(),FDr=V(),jDr=Us();function MDr(r,e){var t,i,a,n,u;for(t={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},i=r[0],a=r[1],u=2;u<r.length;u+=2)if(n=r[u],n==="nonnumeric"||n==="nan"||n==="pinf"||n==="ninf")t[n]=r[u+1];else throw new Error(FDr("invalid argument. Unrecognized option name. Value: %s.",String(n)));return LDr([i,a],jDr(e,t)),a}jL.exports=MDr});var kL=s((NWe,BL)=>{"use strict";var BDr=ML();BL.exports=BDr});var VL=s((OWe,CL)=>{"use strict";var kDr=Qr(),CDr=kL();function VDr(r){return kDr(r,"unary",CDr),r}CL.exports=VDr});var UL=s((_We,GL)=>{"use strict";var St=Qr(),GDr=FI(),UDr=Us(),DDr=d3(),zDr=y3(),WDr=zI(),HDr=xI(),XDr=ZI(),xDr=eR(),JDr=VL();function YDr(r){return St(r,"binary",GDr),St(r,"d_d",UDr),St(r,"dd_d",DDr),St(r,"ddd_d",zDr),St(r,"dddd_d",WDr),St(r,"ddddd_d",HDr),St(r,"ternary",XDr),St(r,"unary",xDr),St(r,"ndarray",JDr({})),r}GL.exports=YDr});var zL=s((AWe,DL)=>{"use strict";function $Dr(r){return r*r}DL.exports=$Dr});var Ws=s((TWe,WL)=>{"use strict";var ZDr=zL();WL.exports=ZDr});var Hs=s((IWe,HL)=>{"use strict";var QDr=.7853981633974483;HL.exports=QDr});var xL=s((RWe,XL)=>{"use strict";function KDr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}XL.exports=KDr});var YL=s((PWe,JL)=>{"use strict";function rzr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}JL.exports=rzr});var QL=s((LWe,ZL)=>{"use strict";var ezr=W(),tzr=Rr(),$L=Hs(),izr=xL(),azr=YL(),nzr=6123233995736766e-32;function szr(r){var e,t,i,a,n;if(ezr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*azr(t),t=tzr(t+t),n=$L-t,t=t*a-nzr,n-=t,n+=$L;else{if(i<1e-8)return r;t=i*i,n=t*izr(t),n=i*n+i}return e?-n:n}ZL.exports=szr});var va=s((FWe,KL)=>{"use strict";var uzr=QL();KL.exports=uzr});var iF=s((jWe,tF)=>{"use strict";var ozr=W(),rF=va(),vzr=Rr(),eF=Hs(),fzr=6123233995736766e-32;function czr(r){var e;return ozr(r)?NaN:r<-1||r>1?NaN:r>.5?2*rF(vzr(.5-.5*r)):(e=eF-rF(r),e+=fzr,e+=eF,e)}tF.exports=czr});var t0=s((MWe,aF)=>{"use strict";var lzr=iF();aF.exports=lzr});var sF=s((BWe,nF)=>{"use strict";var pzr=57.29577951308232;function dzr(r){return r*pzr}nF.exports=dzr});var oF=s((kWe,uF)=>{"use strict";var gzr=sF();uF.exports=gzr});var fF=s((CWe,vF)=>{"use strict";function mzr(r){return r!==r}vF.exports=mzr});var E3=s((VWe,cF)=>{"use strict";var yzr=fF();cF.exports=yzr});var pF=s((GWe,lF)=>{"use strict";var hzr=Math.sqrt;lF.exports=hzr});var S3=s((UWe,dF)=>{"use strict";var qzr=pF();dF.exports=qzr});var N3=s((DWe,gF)=>{"use strict";var bzr=.7853981633974483;gF.exports=bzr});var yF=s((zWe,mF)=>{"use strict";function wzr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}mF.exports=wzr});var qF=s((WWe,hF)=>{"use strict";function Ezr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}hF.exports=Ezr});var EF=s((HWe,wF)=>{"use strict";var Szr=E3(),Nzr=S3(),bF=N3(),Ozr=yF(),_zr=qF(),Azr=6123233995736766e-32;function Tzr(r){var e,t,i,a,n;if(Szr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,a=t*_zr(t),t=Nzr(t+t),n=bF-t,t=t*a-Azr,n-=t,n+=bF;else{if(i<1e-8)return r;t=i*i,n=t*Ozr(t),n=i*n+i}return e?-n:n}wF.exports=Tzr});var NF=s((XWe,SF)=>{"use strict";var Izr=EF();SF.exports=Izr});var TF=s((xWe,AF)=>{"use strict";var Rzr=E3(),OF=NF(),Pzr=S3(),_F=N3(),Lzr=6123233995736766e-32;function Fzr(r){var e;return Rzr(r)?NaN:r<-1||r>1?NaN:r>.5?2*OF(Pzr(.5-.5*r)):(e=_F-OF(r),e+=Lzr,e+=_F,e)}AF.exports=Fzr});var RF=s((JWe,IF)=>{"use strict";var jzr=TF();IF.exports=jzr});var LF=s((YWe,PF)=>{"use strict";var Mzr=oF(),Bzr=RF();function kzr(r){var e=Bzr(r);return Mzr(e)}PF.exports=kzr});var jF=s(($We,FF)=>{"use strict";var Czr=LF();FF.exports=Czr});var BF=s((ZWe,MF)=>{"use strict";function Vzr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}MF.exports=Vzr});var UF=s((QWe,GF)=>{"use strict";var Gzr=W(),kF=ae(),CF=wt(),Uzr=pr(),Dzr=Ir(),VF=ct(),zzr=BF(),O3=.6931471803691238,_3=19082149292705877e-26,Wzr=.41421356237309503,Hzr=-.2928932188134525,Xzr=1862645149230957e-24,xzr=5551115123125783e-32,Jzr=9007199254740992,Yzr=.6666666666666666;function $zr(r){var e,t,i,a,n,u,o,v,f,c;if(r<-1||Gzr(r))return NaN;if(r===-1)return Dzr;if(r===Uzr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Wzr){if(i<Xzr)return i<xzr?r:r-r*r*.5;r>Hzr&&(c=0,a=r,t=1)}return c!==0&&(i<Jzr?(f=1+r,t=kF(f),c=(t>>20)-VF,c>0?n=1-(f-r):n=r-(f-1),n/=f):(f=r,t=kF(f),c=(t>>20)-VF,n=0),t&=1048575,t<434334?f=CF(f,t|1072693248):(c+=1,f=CF(f,t|1071644672),t=1048576-t>>2),a=f-1),e=.5*a*a,t===0?a===0?(n+=c*_3,c*O3+n):(v=e*(1-Yzr*a),c*O3-(v-(c*_3+n)-a)):(u=a/(2+a),o=u*u,v=o*zzr(o),c===0?a-(e-u*(e+v)):c*O3-(e-(u*(e+v)+(c*_3+n))-a))}GF.exports=$zr});var gi=s((KWe,DF)=>{"use strict";var Zzr=UF();DF.exports=Zzr});var WF=s((rHe,zF)=>{"use strict";function Qzr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}zF.exports=Qzr});var XF=s((eHe,HF)=>{"use strict";function Kzr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}HF.exports=Kzr});var $F=s((tHe,YF)=>{"use strict";var xF=ae(),rWr=wt(),eWr=W(),tWr=ct(),iWr=Ir(),aWr=WF(),nWr=XF(),Xs=.6931471803691238,xs=19082149292705877e-26,sWr=0x40000000000000,uWr=.3333333333333333,JF=1048575,oWr=2146435072,vWr=1048576,fWr=1072693248;function cWr(r){var e,t,i,a,n,u,o,v,f,c,l,p;return r===0?iWr:eWr(r)||r<0?NaN:(t=xF(r),n=0,t<vWr&&(n-=54,r*=sWr,t=xF(r)),t>=oWr?r+r:(n+=(t>>20)-tWr|0,t&=JF,v=t+614244&1048576|0,r=rWr(r,t|v^fWr),n+=v>>20|0,o=r-1,(JF&2+t)<3?o===0?n===0?0:n*Xs+n*xs:(u=o*o*(.5-uWr*o),n===0?o-u:n*Xs-(u-n*xs-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,a=l*aWr(l),i=p*nWr(l),v|=f,u=i+a,v>0?(e=.5*o*o,n===0?o-(e-c*(e+u)):n*Xs-(e-(c*(e+u)+n*xs)-o)):n===0?o-c*(o-u):n*Xs-(c*(o-u)-n*xs-o))))}YF.exports=cWr});var wr=s((iHe,ZF)=>{"use strict";var lWr=$F();ZF.exports=lWr});var ej=s((aHe,rj)=>{"use strict";var pWr=W(),dWr=gi(),QF=Rr(),gWr=Yn(),KF=wr(),mWr=1<<28;function yWr(r){var e;return pWr(r)||r<1?NaN:r===1?0:r>=mWr?KF(r)+gWr:r>2?KF(2*r-1/(r+QF(r*r-1))):(e=r-1,dWr(e+QF(2*e+e*e)))}rj.exports=yWr});var ij=s((nHe,tj)=>{"use strict";var hWr=ej();tj.exports=hWr});var Qa=s((sHe,aj)=>{"use strict";var qWr=1.5707963267948966;aj.exports=qWr});var sj=s((uHe,nj)=>{"use strict";function bWr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}nj.exports=bWr});var oj=s((oHe,uj)=>{"use strict";function wWr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}uj.exports=wWr});var cj=s((vHe,fj)=>{"use strict";var EWr=W(),SWr=pr(),A3=Qa(),NWr=Hs(),OWr=Ir(),_Wr=sj(),AWr=oj(),vj=6123233995736766e-32,TWr=2.414213562373095;function IWr(r){var e,t,i,a;return EWr(r)||r===0?r:r===SWr?A3:r===OWr?-A3:(r<0&&(t=!0,r=-r),e=0,r>TWr?(i=A3,e=1,r=-(1/r)):r<=.66?i=0:(i=NWr,e=2,r=(r-1)/(r+1)),a=r*r,a=a*_Wr(a)/AWr(a),a=r*a+r,e===2?a+=.5*vj:e===1&&(a+=vj),i+=a,t?-i:i)}fj.exports=IWr});var Js=s((fHe,lj)=>{"use strict";var RWr=cj();lj.exports=RWr});var dj=s((cHe,pj)=>{"use strict";var PWr=Js();function LWr(r){return PWr(1/r)}pj.exports=LWr});var mj=s((lHe,gj)=>{"use strict";var FWr=dj();gj.exports=FWr});var hj=s((pHe,yj)=>{"use strict";var jWr=va();function MWr(r){return jWr(1+r)}yj.exports=MWr});var bj=s((dHe,qj)=>{"use strict";var BWr=hj();qj.exports=BWr});var Ej=s((gHe,wj)=>{"use strict";var kWr=va();function CWr(r){return kWr(1-r)}wj.exports=CWr});var Nj=s((mHe,Sj)=>{"use strict";var VWr=Ej();Sj.exports=VWr});var _j=s((yHe,Oj)=>{"use strict";var GWr=va();function UWr(r){return GWr(1/r)}Oj.exports=UWr});var Tj=s((hHe,Aj)=>{"use strict";var DWr=_j();Aj.exports=DWr});var Lj=s((qHe,Pj)=>{"use strict";var zWr=Ae(),WWr=W(),HWr=gi(),Ij=Rr(),XWr=Yn(),Rj=wr(),xWr=1/(1<<28),JWr=1<<28;function YWr(r){var e,t,i;return WWr(r)||zWr(r)?r:(r<0&&(r=-r,e=!0),r<xWr?i=r:r>JWr?i=Rj(r)+XWr:r>2?i=Rj(2*r+1/(Ij(r*r+1)+r)):(t=r*r,i=HWr(r+t/(1+Ij(1+t)))),e?-i:i)}Pj.exports=YWr});var T3=s((bHe,Fj)=>{"use strict";var $Wr=Lj();Fj.exports=$Wr});var Mj=s((wHe,jj)=>{"use strict";var ZWr=T3();function QWr(r){return ZWr(1/r)}jj.exports=QWr});var kj=s((EHe,Bj)=>{"use strict";var KWr=Mj();Bj.exports=KWr});var Vj=s((SHe,Cj)=>{"use strict";var rHr=t0(),eHr=Rr();function tHr(r){return 2*rHr(eHr(r))}Cj.exports=tHr});var Uj=s((NHe,Gj)=>{"use strict";var iHr=Vj();Gj.exports=iHr});var zj=s((OHe,Dj)=>{"use strict";var aHr=va(),nHr=Rr();function sHr(r){return 2*aHr(nHr(r))}Dj.exports=sHr});var Hj=s((_He,Wj)=>{"use strict";var uHr=zj();Wj.exports=uHr});var Jj=s((AHe,xj)=>{"use strict";var oHr=W(),Xj=gi(),vHr=pr(),fHr=Ir(),cHr=1/(1<<28);function lHr(r){var e,t;return oHr(r)||r<-1||r>1?NaN:r===1?vHr:r===-1?fHr:(r<0&&(e=!0,r=-r),r<cHr?e?-r:r:(r<.5?(t=r+r,t=.5*Xj(t+t*r/(1-r))):t=.5*Xj((r+r)/(1-r)),e?-t:t))}xj.exports=lHr});var $j=s((THe,Yj)=>{"use strict";var pHr=Jj();Yj.exports=pHr});var Qj=s((IHe,Zj)=>{"use strict";var dHr=t0();function gHr(r){return dHr(1+r)}Zj.exports=gHr});var rM=s((RHe,Kj)=>{"use strict";var mHr=Qj();Kj.exports=mHr});var tM=s((PHe,eM)=>{"use strict";var yHr=t0();function hHr(r){return yHr(1-r)}eM.exports=hHr});var aM=s((LHe,iM)=>{"use strict";var qHr=tM();iM.exports=qHr});var sM=s((FHe,nM)=>{"use strict";var bHr=Math.floor;nM.exports=bHr});var oM=s((jHe,uM)=>{"use strict";var wHr=sM();uM.exports=wHr});var fM=s((MHe,vM)=>{"use strict";var EHr=oM();function SHr(r){return EHr(r)===r&&r>=0}vM.exports=SHr});var I3=s((BHe,cM)=>{"use strict";var NHr=fM();cM.exports=NHr});var lM=s((kHe,OHr)=>{OHr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var dM=s((CHe,pM)=>{"use strict";var _Hr=I3(),AHr=W(),THr=Rs(),IHr=Ir(),RHr=pr(),PHr=lM(),LHr=258;function FHr(r){return AHr(r)||!_Hr(r)?NaN:THr(r)?0:r>LHr?r/2&1?RHr:IHr:PHr[r/2]}pM.exports=FHr});var mM=s((VHe,gM)=>{"use strict";var jHr=dM();gM.exports=jHr});var hM=s((GHe,yM)=>{"use strict";var MHr=Ye(),R3;MHr===!0?R3=0:R3=1;yM.exports=R3});var wM=s((UHe,bM)=>{"use strict";var BHr=me(),kHr=ge(),CHr=hM(),qM=new kHr(1),VHr=new BHr(qM.buffer);function GHr(r){return qM[0]=r,VHr[CHr]}bM.exports=GHr});var SM=s((DHe,EM)=>{"use strict";var UHr=wM();EM.exports=UHr});var TM=s((zHe,AM)=>{"use strict";var DHr=Ur(),Ys=$a(),Qs=si(),OM=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],zHr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],P3=16777216,L3=5960464477539063e-23,$s=Qs(20),NM=Qs(20),Zs=Qs(20),he=Qs(20);function _M(r,e,t,i,a,n,u,o,v){var f,c,l,p,m,y,g,d,h;for(p=n,h=i[t],d=t,m=0;d>0;m++)c=L3*h|0,he[m]=h-P3*c|0,h=i[d-1]+c,d-=1;if(h=Ys(h,a),h-=8*DHr(h*.125),g=h|0,h-=g,l=0,a>0?(m=he[t-1]>>24-a,g+=m,he[t-1]-=m<<24-a,l=he[t-1]>>23-a):a===0?l=he[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,m=0;m<t;m++)d=he[m],f===0?d!==0&&(f=1,he[m]=16777216-d):he[m]=16777215-d;if(a>0)switch(a){case 1:he[t-1]&=8388607;break;case 2:he[t-1]&=4194303;break}l===2&&(h=1-h,f!==0&&(h-=Ys(1,a)))}if(h===0){for(d=0,m=t-1;m>=n;m--)d|=he[m];if(d===0){for(y=1;he[n-y]===0;y++);for(m=t+1;m<=t+y;m++){for(v[o+m]=OM[u+m],c=0,d=0;d<=o;d++)c+=r[d]*v[o+(m-d)];i[m]=c}return t+=y,_M(r,e,t,i,a,n,u,o,v)}}if(h===0)for(t-=1,a-=24;he[t]===0;)t-=1,a-=24;else h=Ys(h,-a),h>=P3?(c=L3*h|0,he[t]=h-P3*c|0,t+=1,a+=24,he[t]=c):he[t]=h|0;for(c=Ys(1,a),m=t;m>=0;m--)i[m]=c*he[m],c*=L3;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=zHr[y]*i[m+y];Zs[t-m]=c}for(c=0,m=t;m>=0;m--)c+=Zs[m];for(l===0?e[0]=c:e[0]=-c,c=Zs[0]-c,m=1;m<=t;m++)c+=Zs[m];return l===0?e[1]=c:e[1]=-c,g&7}function WHr(r,e,t,i){var a,n,u,o,v,f,c,l,p;for(n=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+n,c=0;c<=p;c++)l<0?$s[c]=0:$s[c]=OM[l],l+=1;for(c=0;c<=n;c++){for(a=0,l=0;l<=o;l++)a+=r[l]*$s[o+(c-l)];NM[c]=a}return v=n,_M(r,e,v,NM,f,n,u,o,$s)}AM.exports=WHr});var RM=s((WHe,IM)=>{"use strict";var HHr=Math.round;IM.exports=HHr});var Ks=s((HHe,PM)=>{"use strict";var XHr=RM();PM.exports=XHr});var MM=s((XHe,jM)=>{"use strict";var xHr=Ks(),LM=ae(),JHr=.6366197723675814,YHr=1.5707963267341256,$Hr=6077100506506192e-26,ZHr=6077100506303966e-26,QHr=20222662487959506e-37,KHr=20222662487111665e-37,rXr=84784276603689e-45,FM=2047;function eXr(r,e,t){var i,a,n,u,o,v,f;return a=xHr(r*JHr),u=r-a*YHr,o=a*$Hr,f=e>>20|0,t[0]=u-o,i=LM(t[0]),v=f-(i>>20&FM),v>16&&(n=u,o=a*ZHr,u=n-o,o=a*QHr-(n-u-o),t[0]=u-o,i=LM(t[0]),v=f-(i>>20&FM),v>49&&(n=u,o=a*KHr,u=n-o,o=a*rXr-(n-u-o),t[0]=u-o)),t[1]=u-t[0]-o,a}jM.exports=eXr});var kM=s((xHe,BM)=>{"use strict";var tXr=ft(),iXr=Jn(),aXr=ks(),nXr=ae(),sXr=SM(),uXr=Ya(),oXr=TM(),ru=MM(),vXr=0,fXr=16777216,mi=1.5707963267341256,fa=6077100506506192e-26,eu=2*fa,tu=3*fa,iu=4*fa,cXr=598523,lXr=1072243195,pXr=1073928572,dXr=1074752122,gXr=1074977148,mXr=1075183036,yXr=1075388923,hXr=1075594811,qXr=1094263291,i0=[0,0,0],a0=[0,0];function bXr(r,e){var t,i,a,n,u,o,v,f;if(a=nXr(r),n=a&tXr|0,n<=lXr)return e[0]=r,e[1]=0,0;if(n<=dXr)return(n&aXr)===cXr?ru(r,n,e):n<=pXr?r>0?(f=r-mi,e[0]=f-fa,e[1]=f-e[0]-fa,1):(f=r+mi,e[0]=f+fa,e[1]=f-e[0]+fa,-1):r>0?(f=r-2*mi,e[0]=f-eu,e[1]=f-e[0]-eu,2):(f=r+2*mi,e[0]=f+eu,e[1]=f-e[0]+eu,-2);if(n<=hXr)return n<=mXr?n===gXr?ru(r,n,e):r>0?(f=r-3*mi,e[0]=f-tu,e[1]=f-e[0]-tu,3):(f=r+3*mi,e[0]=f+tu,e[1]=f-e[0]+tu,-3):n===yXr?ru(r,n,e):r>0?(f=r-4*mi,e[0]=f-iu,e[1]=f-e[0]-iu,4):(f=r+4*mi,e[0]=f+iu,e[1]=f-e[0]+iu,-4);if(n<qXr)return ru(r,n,e);if(n>=iXr)return e[0]=NaN,e[1]=NaN,0;for(t=sXr(r),i=(n>>20)-1046,f=uXr(n-(i<<20|0),t),o=0;o<2;o++)i0[o]=f|0,f=(f-i0[o])*fXr;for(i0[2]=f,u=3;i0[u-1]===vXr;)u-=1;return v=oXr(i0,a0,i,u,1),r<0?(e[0]=-a0[0],e[1]=-a0[1],-v):(e[0]=a0[0],e[1]=a0[1],v)}BM.exports=bXr});var n0=s((JHe,CM)=>{"use strict";var wXr=kM();CM.exports=wXr});var UM=s((YHe,GM)=>{"use strict";var VM=-.16666666666666632,EXr=.00833333333332249,SXr=-.0001984126982985795,NXr=27557313707070068e-22,OXr=-25050760253406863e-24,_Xr=158969099521155e-24,AXr=.0416666666666666,TXr=-.001388888888887411,IXr=2480158728947673e-20,RXr=-27557314351390663e-23,PXr=2087572321298175e-24,LXr=-11359647557788195e-27;function FXr(r,e,t,i,a){var n,u,o,v,f;return f=r*r,v=f*f,u=EXr+f*(SXr+f*NXr)+f*v*(OXr+f*_Xr),o=f*r,e===0?t[a]=r+o*(VM+f*u):t[a]=r-(f*(.5*e-o*u)-e-o*VM),u=f*(AXr+f*(TXr+f*IXr)),u+=v*v*(RXr+f*(PXr+f*LXr)),n=.5*f,v=1-n,t[a+i]=v+(1-v-n+(f*u-r*e)),t}GM.exports=FXr});var j3=s(($He,zM)=>{"use strict";var jXr=ft(),MXr=Jn(),BXr=ae(),kXr=n0(),DM=UM(),CXr=1072243195,VXr=1044381696,F3=[0,0];function GXr(r,e,t,i){var a,n;if(a=BXr(r),a&=jXr,a<=CXr)return a<VXr&&(r|0)===0&&(e[i]=r,e[i+t]=0),DM(r,0,e,t,i);if(a>=MXr)return e[i]=NaN,e[i+t]=NaN,e;switch(n=kXr(r,F3),DM(F3[0],F3[1],e,t,i),n&3){case 1:return a=e[i+t],e[i+t]=-e[i],e[i]=a,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return a=-e[i+t],e[i+t]=e[i],e[i]=a,e;default:return e}}zM.exports=GXr});var HM=s((ZHe,WM)=>{"use strict";var UXr=j3();function DXr(r){return UXr(r,[0,0],1,0)}WM.exports=DXr});var s0=s((QHe,xM)=>{"use strict";var zXr=D(),XM=HM(),WXr=j3();zXr(XM,"assign",WXr);xM.exports=XM});var YM=s((KHe,JM)=>{"use strict";function HXr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}JM.exports=HXr});var ZM=s((rXe,$M)=>{"use strict";function XXr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}$M.exports=XXr});var KM=s((eXe,QM)=>{"use strict";function xXr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}QM.exports=xXr});var eB=s((tXe,rB)=>{"use strict";function JXr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}rB.exports=JXr});var iB=s((iXe,tB)=>{"use strict";var YXr=Rr(),$Xr=s0().assign,ZXr=pr(),QXr=YM(),KXr=ZM(),rxr=KM(),exr=eB(),txr=.5641895835477563,ixr=2.404825557695773,axr=5.520078110286311,nxr=616,sxr=-.0014244423042272315,uxr=1413,oxr=.0005468602863106496,u0=[0,0];function vxr(r){var e,t,i,a,n,u;return r<0&&(r=-r),r===ZXr?0:r===0?1:r<=4?(n=r*r,a=QXr(n),u=(r+ixr)*(r-nxr/256-sxr),u*a):r<=8?(n=1-r*r/64,a=KXr(n),u=(r+axr)*(r-uxr/256-oxr),u*a):(n=8/r,i=n*n,e=rxr(i),t=exr(i),u=txr/YXr(r),$Xr(r,u0,1,0),u*(e*(u0[1]+u0[0])-n*t*(u0[0]-u0[1])))}tB.exports=vxr});var M3=s((aXe,aB)=>{"use strict";var fxr=iB();aB.exports=fxr});var au=s((nXe,nB)=>{"use strict";var cxr=1.772453850905516;nB.exports=cxr});var uB=s((sXe,sB)=>{"use strict";function lxr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}sB.exports=lxr});var vB=s((uXe,oB)=>{"use strict";function pxr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}oB.exports=pxr});var cB=s((oXe,fB)=>{"use strict";function dxr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}fB.exports=dxr});var pB=s((vXe,lB)=>{"use strict";function gxr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}lB.exports=gxr});var gB=s((fXe,dB)=>{"use strict";var mxr=Rr(),yxr=Dr(),hxr=s0().assign,qxr=pr(),bxr=au(),wxr=uB(),Exr=vB(),Sxr=cB(),Nxr=pB(),Oxr=3.8317059702075125,_xr=7.015586669815619,Axr=981,Txr=-.0003252797924876844,Ixr=1796,Rxr=-38330184381246464e-21,o0=[0,0];function Pxr(r){var e,t,i,a,n,u,o,v;return v=yxr(r),r===0||v===qxr?0:(v<=4?(u=r*r,n=wxr(u),o=v*(v+Oxr)*(v-Axr/256-Txr),e=o*n):v<=8?(u=r*r,n=Exr(u),o=v*(v+_xr)*(v-Ixr/256-Rxr),e=o*n):(u=8/v,a=u*u,t=Sxr(a),i=Nxr(a),o=1/(mxr(v)*bxr),hxr(v,o0,1,0),e=o*(t*(o0[0]-o0[1])+u*i*(o0[0]+o0[1]))),r<0&&(e*=-1),e)}dB.exports=Pxr});var B3=s((cXe,mB)=>{"use strict";var Lxr=gB();mB.exports=Lxr});var Ee=s((lXe,yB)=>{"use strict";var Fxr=3.141592653589793;yB.exports=Fxr});var qB=s((pXe,hB)=>{"use strict";function jxr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}hB.exports=jxr});var wB=s((dXe,bB)=>{"use strict";function Mxr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}bB.exports=Mxr});var SB=s((gXe,EB)=>{"use strict";function Bxr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}EB.exports=Bxr});var OB=s((mXe,NB)=>{"use strict";function kxr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}NB.exports=kxr});var AB=s((yXe,_B)=>{"use strict";function Cxr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}_B.exports=Cxr});var LB=s((hXe,PB)=>{"use strict";var k3=wr(),Vxr=Rr(),Gxr=Ee(),Uxr=au(),Dxr=Ir(),zxr=pr(),Wxr=s0().assign,C3=M3(),Hxr=qB(),Xxr=wB(),xxr=SB(),Jxr=OB(),Yxr=AB(),$xr=1/Uxr,V3=2/Gxr,TB=.8935769662791675,IB=3.957678419314858,RB=7.086051060301773,Zxr=228,Qxr=.0029519662791675214,Kxr=1013,rJr=.0006471693148578684,eJr=1814,tJr=.00011356030177269763,v0=[0,0];function iJr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?Dxr:r===zxr?0:r<=3?(n=r*r,u=k3(r/TB)*C3(r)*V3,a=Hxr(n),o=(r+TB)*(r-Zxr/256-Qxr),u+o*a):r<=5.5?(n=r*r,u=k3(r/IB)*C3(r)*V3,a=Xxr(n),o=(r+IB)*(r-Kxr/256-rJr),u+o*a):r<=8?(n=r*r,u=k3(r/RB)*C3(r)*V3,a=xxr(n),o=(r+RB)*(r-eJr/256-tJr),u+o*a):(n=8/r,i=n*n,e=Jxr(i),t=Yxr(i),o=$xr/Vxr(r),Wxr(r,v0,1,0),o*(e*(v0[0]-v0[1])+n*t*(v0[1]+v0[0])))}PB.exports=iJr});var jB=s((qXe,FB)=>{"use strict";var aJr=LB();FB.exports=aJr});var BB=s((bXe,MB)=>{"use strict";function nJr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}MB.exports=nJr});var CB=s((wXe,kB)=>{"use strict";function sJr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}kB.exports=sJr});var GB=s((EXe,VB)=>{"use strict";function uJr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}VB.exports=uJr});var DB=s((SXe,UB)=>{"use strict";function oJr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}UB.exports=oJr});var YB=s((NXe,JB)=>{"use strict";var zB=wr(),vJr=Rr(),fJr=Ee(),cJr=au(),lJr=Ir(),pJr=pr(),dJr=s0().assign,WB=B3(),gJr=BB(),mJr=CB(),yJr=GB(),hJr=DB(),qJr=1/cJr,HB=2/fJr,XB=2.197141326031017,xB=5.429681040794135,bJr=562,wJr=.001828826031017035,EJr=1390,SJr=-6459205864867228e-21,f0=[0,0];function NJr(r){var e,t,i,a,n,u,o;return r<0?NaN:r===0?lJr:r===pJr?0:r<=4?(n=r*r,u=zB(r/XB)*WB(r)*HB,a=gJr(n),o=(r+XB)*(r-bJr/256-wJr)/r,u+o*a):r<=8?(n=r*r,u=zB(r/xB)*WB(r)*HB,a=mJr(n),o=(r+xB)*(r-EJr/256-SJr)/r,u+o*a):(n=8/r,i=n*n,e=yJr(i),t=hJr(i),o=qJr/vJr(r),dJr(r,f0,1,0),o*(n*t*(f0[0]-f0[1])-e*(f0[0]+f0[1])))}JB.exports=NJr});var ZB=s((OXe,$B)=>{"use strict";var OJr=YB();$B.exports=OJr});var KB=s((_Xe,QB)=>{"use strict";function _Jr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}QB.exports=_Jr});var ek=s((AXe,rk)=>{"use strict";function AJr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}rk.exports=AJr});var ik=s((TXe,tk)=>{"use strict";var TJr=KB(),IJr=ek();function RJr(r,e){var t,i,a,n;return n=r*r,a=n*n,i=n*TJr(n),i+=a*a*IJr(n),t=.5*n,a=1-t,a+(1-a-t+(n*i-r*e))}tk.exports=RJr});var G3=s((IXe,ak)=>{"use strict";var PJr=ik();ak.exports=PJr});var uk=s((RXe,sk)=>{"use strict";var nk=-.16666666666666632,LJr=.00833333333332249,FJr=-.0001984126982985795,jJr=27557313707070068e-22,MJr=-25050760253406863e-24,BJr=158969099521155e-24;function kJr(r,e){var t,i,a,n;return n=r*r,a=n*n,t=LJr+n*(FJr+n*jJr)+n*a*(MJr+n*BJr),i=n*r,e===0?r+i*(nk+n*t):r-(n*(.5*e-i*t)-e-i*nk)}sk.exports=kJr});var U3=s((PXe,ok)=>{"use strict";var CJr=uk();ok.exports=CJr});var ck=s((LXe,fk)=>{"use strict";var VJr=ae(),D3=G3(),vk=U3(),GJr=n0(),Nt=[0,0],UJr=2147483647,DJr=1072243195,zJr=1044381696,WJr=2146435072;function HJr(r){var e,t;if(e=VJr(r),e&=UJr,e<=DJr)return e<zJr?1:D3(r,0);if(e>=WJr)return NaN;switch(t=GJr(r,Nt),t&3){case 0:return D3(Nt[0],Nt[1]);case 1:return-vk(Nt[0],Nt[1]);case 2:return-D3(Nt[0],Nt[1]);default:return vk(Nt[0],Nt[1])}}fk.exports=HJr});var Ot=s((FXe,lk)=>{"use strict";var XJr=ck();lk.exports=XJr});var gk=s((jXe,dk)=>{"use strict";var xJr=ft(),JJr=Jn(),YJr=ae(),pk=G3(),z3=U3(),$Jr=n0(),ZJr=1072243195,QJr=1045430272,_t=[0,0];function KJr(r){var e,t;if(e=YJr(r),e&=xJr,e<=ZJr)return e<QJr?r:z3(r,0);if(e>=JJr)return NaN;switch(t=$Jr(r,_t),t&3){case 0:return z3(_t[0],_t[1]);case 1:return pk(_t[0],_t[1]);case 2:return-z3(_t[0],_t[1]);default:return-pk(_t[0],_t[1])}}dk.exports=KJr});var pt=s((MXe,mk)=>{"use strict";var rYr=gk();mk.exports=rYr});var qk=s((BXe,hk)=>{"use strict";var eYr=W(),tYr=Ae(),iYr=Dr(),yk=Ot(),aYr=pt(),nYr=Ur(),W3=Ee(),sYr=oa(),uYr=sYr+1;function oYr(r){var e,t,i,a;return eYr(r)?NaN:tYr(r)?NaN:(e=iYr(r),e>uYr?1:(t=nYr(e),i=e-t,i===.5?0:(i<.25?a=yk(W3*i):i<.75?(i=.5-i,a=aYr(W3*i)):(i=1-i,a=-yk(W3*i)),t%2===1?-a:a)))}hk.exports=oYr});var wk=s((kXe,bk)=>{"use strict";var vYr=qk();bk.exports=vYr});var Sk=s((CXe,Ek)=>{"use strict";var fYr=1.618033988749895;Ek.exports=fYr});var Ok=s((VXe,Nk)=>{"use strict";var cYr=W(),lYr=wk(),pYr=Gr(),dYr=Sk(),gYr=pr(),mYr=Ir(),yYr=2.23606797749979;function hYr(r){var e,t;return cYr(r)||r===gYr||r===mYr?NaN:(e=pYr(dYr,r),t=lYr(r)/e,(e-t)/yYr)}Nk.exports=hYr});var Ak=s((GXe,_k)=>{"use strict";var qYr=Ok();_k.exports=qYr});var Ik=s((UXe,Tk)=>{"use strict";function bYr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}Tk.exports=bYr});var Fk=s((DXe,Lk)=>{"use strict";var wYr=o3(),EYr=r3(),Rk=ft(),X3=ae(),SYr=wt(),NYr=Ae(),Pk=Ya(),OYr=Ja(),_Yr=W(),AYr=Ik(),TYr=4294967295>>>0,IYr=3221225472>>>0,RYr=0x40000000000000,H3=2147483648>>>0,PYr=1>>>0,LYr=715094163>>>0,FYr=696219795>>>0,jYr=X3(wYr),ca=[0>>>0,0>>>0];function MYr(r){var e,t,i,a,n,u,o;return r===0||_Yr(r)||NYr(r)?r:(t=X3(r)>>>0,e=(t&EYr)>>>0,t&=Rk,t<jYr?(u=RYr*r,i=(X3(u)&Rk)>>>0,i=(i/3>>>0)+FYr>>>0,u=Pk(e|i,0)):(u=0,i=(t/3>>>0)+LYr>>>0,u=SYr(u,e|i)),a=u*u*(u/r),u*=AYr(a),OYr.assign(u,ca,1,0),ca[1]&H3?(ca[0]+=PYr,ca[1]&=~H3):ca[1]|=H3,u=Pk(ca[0]&TYr,ca[1]&IYr),n=u*u,a=r/n,o=u+u,a=(a-u)/(o+a),u+=u*a,u)}Lk.exports=MYr});var Mk=s((zXe,jk)=>{"use strict";var BYr=Fk();jk.exports=BYr});var kk=s((WXe,Bk)=>{"use strict";var kYr=Math.ceil;Bk.exports=kYr});var Ka=s((HXe,Ck)=>{"use strict";var CYr=kk();Ck.exports=CYr});var Gk=s((XXe,Vk)=>{"use strict";function VYr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}Vk.exports=VYr});var Dk=s((xXe,Uk)=>{"use strict";function GYr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}Uk.exports=GYr});var Hk=s((JXe,Wk)=>{"use strict";var UYr=ae(),DYr=Gk(),zYr=Dk(),zk=1048575,WYr=.3333333333333333;function HYr(r){var e,t,i,a,n,u,o,v,f,c,l;return a=UYr(r),n=r-1,(zk&2+a)<3?n===0?0:n*n*(WYr*n-.5):(u=n/(2+n),o=u*u,a&=zk,c=a-398458|0,f=o*o,l=440401-a|0,t=f*DYr(f),i=o*zYr(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}Wk.exports=HYr});var Yk=s((YXe,Jk)=>{"use strict";var Xk=ae(),XYr=wt(),xYr=vt(),JYr=W(),YYr=ct(),$Yr=Ir(),ZYr=Hk(),QYr=0x40000000000000,xk=.4342944818781689,KYr=25082946711645275e-27,r$r=.30102999566361177,e$r=3694239077158931e-28,t$r=1048575,i$r=2146435072,a$r=1048576,n$r=1072693248;function s$r(r){var e,t,i,a,n,u,o,v;return JYr(r)||r<0?NaN:r===0?$Yr:(t=Xk(r),u=0,t<a$r&&(u-=54,r*=QYr,t=Xk(r)),t>=i$r?r+r:(u+=(t>>20)-YYr|0,t&=t$r,n=t+614244&1048576|0,r=XYr(r,t|n^n$r),u+=n>>20|0,o=u,a=ZYr(r),r-=1,e=xYr(r,0),i=r-e,v=o*e$r+(r+a)*KYr,v+=(i+a)*xk+e*xk,v+o*r$r))}Jk.exports=s$r});var Zk=s(($Xe,$k)=>{"use strict";var u$r=Yk();$k.exports=u$r});var Kk=s((ZXe,Qk)=>{"use strict";var o$r=W(),v$r=Ae(),f$r=Gr(),c$r=Ur(),l$r=Ka(),p$r=Zk(),d$r=Zn(),g$r=Vs(),m$r=pr();function y$r(r){var e,t;return o$r(r)||v$r(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=p$r(r),e===-1?t=c$r(t):t=l$r(t),t<=g$r?e*0:t>d$r?m$r:e*f$r(10,t))}Qk.exports=y$r});var eC=s((QXe,rC)=>{"use strict";var h$r=Kk();rC.exports=h$r});var iC=s((KXe,tC)=>{"use strict";function q$r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}tC.exports=q$r});var nC=s((rxe,aC)=>{"use strict";function b$r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}aC.exports=b$r});var oC=s((exe,uC)=>{"use strict";var w$r=ae(),E$r=iC(),S$r=nC(),sC=1048575,N$r=.3333333333333333;function O$r(r){var e,t,i,a,n,u,o,v,f,c,l;return a=w$r(r),n=r-1,(sC&2+a)<3?n===0?0:n*n*(N$r*n-.5):(u=n/(2+n),o=u*u,a&=sC,c=a-398458|0,f=o*o,l=440401-a|0,t=f*E$r(f),i=o*S$r(f),c|=l,v=i+t,c>0?(e=.5*n*n,u*(e+v)-e):u*(v-n))}uC.exports=O$r});var cC=s((txe,fC)=>{"use strict";var _$r=ae(),A$r=wt(),T$r=vt(),I$r=Ja(),R$r=W(),P$r=ft(),L$r=ks(),F$r=ct(),j$r=Ir(),M$r=oC(),B$r=0x40000000000000,vC=1.4426950407214463,k$r=16751713164886512e-26,C$r=2146435072,V$r=1048576,G$r=1072693248,x3=[0,0];function U$r(r){var e,t,i,a,n,u,o;if(R$r(r)||r<0)return NaN;if(I$r.assign(r,x3,1,0),i=x3[0],a=x3[1],o=0,i<V$r){if((i&P$r|a)===0)return j$r;o-=54,r*=B$r,i=_$r(r)}return i>=C$r?r+r:(o+=(i>>20)-F$r|0,i&=L$r,u=i+614244&1048576|0,r=A$r(r,i|u^G$r),o+=u>>20|0,n=M$r(r),r-=1,e=T$r(r,0),t=r-e,(r+n)*k$r+(t+n)*vC+e*vC+o)}fC.exports=U$r});var pC=s((ixe,lC)=>{"use strict";var D$r=cC();lC.exports=D$r});var gC=s((axe,dC)=>{"use strict";var z$r=W(),W$r=Ae(),H$r=Gr(),X$r=Ur(),x$r=Ka(),J$r=pC(),Y$r=Bs(),$$r=u3(),Z$r=pr();function Q$r(r){var e,t;return z$r(r)||W$r(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=J$r(r),t===$$r)?r:(e===-1?t=X$r(t):t=x$r(t),t>Y$r?Z$r:e*H$r(2,t))}dC.exports=Q$r});var yC=s((nxe,mC)=>{"use strict";var K$r=gC();mC.exports=K$r});var qC=s((sxe,hC)=>{"use strict";var rZr=Ur(),eZr=Ka();function tZr(r){return r<0?eZr(r):rZr(r)}hC.exports=tZr});var nu=s((uxe,bC)=>{"use strict";var iZr=qC();bC.exports=iZr});var EC=s((oxe,wC)=>{"use strict";function aZr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}wC.exports=aZr});var NC=s((vxe,SC)=>{"use strict";var nZr=$a(),sZr=EC();function uZr(r,e,t){var i,a,n,u;return i=r-e,a=i*i,n=i-a*sZr(a),u=1-(e-i*n/(2-n)-r),nZr(u,t)}SC.exports=uZr});var RC=s((fxe,IC)=>{"use strict";var oZr=W(),OC=nu(),vZr=Ir(),_C=pr(),fZr=NC(),cZr=.6931471803691238,lZr=19082149292705877e-26,AC=1.4426950408889634,pZr=709.782712893384,dZr=-745.1332191019411,TC=1/(1<<28),gZr=-TC;function mZr(r){var e,t,i;return oZr(r)||r===_C?r:r===vZr?0:r>pZr?_C:r<dZr?0:r>gZr&&r<TC?1+r:(r<0?i=OC(AC*r-.5):i=OC(AC*r+.5),e=r-i*cZr,t=i*lZr,fZr(e,t,i))}IC.exports=mZr});var Yr=s((cxe,PC)=>{"use strict";var yZr=RC();PC.exports=yZr});var FC=s((lxe,LC)=>{"use strict";var hZr=W(),J3=Yr();function qZr(r){return hZr(r)?r:(r<0&&(r=-r),r>21?J3(r)/2:(J3(r)+J3(-r))/2)}LC.exports=qZr});var MC=s((pxe,jC)=>{"use strict";var bZr=FC();jC.exports=bZr});var kC=s((dxe,BC)=>{"use strict";function wZr(r){return r===0?.041666666666666664:.041666666666666664+r*(-.0013888888888888872+r*(2480158730157055e-20+r*(-2755731921499979e-22+r*(2087675428708152e-24+r*(-1147028484342536e-26+r*4737750796424621e-29)))))}BC.exports=wZr});var GC=s((gxe,VC)=>{"use strict";var EZr=Ot(),SZr=kC(),CC=.7853981633974483;function NZr(r){var e;return r<-CC||r>CC?EZr(r)-1:(e=r*r,-.5*e+e*e*SZr(e))}VC.exports=NZr});var DC=s((mxe,UC)=>{"use strict";var OZr=GC();UC.exports=OZr});var HC=s((yxe,WC)=>{"use strict";var _Zr=W(),AZr=Ae(),TZr=Dr(),zC=Ot(),IZr=pt(),RZr=Ur(),Y3=Ee(),PZr=oa(),LZr=PZr+1;function FZr(r){var e,t,i,a;return _Zr(r)?NaN:AZr(r)?NaN:(e=TZr(r),e>LZr?1:(t=RZr(e),i=e-t,i===.5?0:(i<.25?a=zC(Y3*i):i<.75?(i=.5-i,a=IZr(Y3*i)):(i=1-i,a=-zC(Y3*i)),t%2===1?-a:a)))}WC.exports=FZr});var xC=s((hxe,XC)=>{"use strict";var jZr=HC();XC.exports=jZr});var YC=s((qxe,JC)=>{"use strict";function MZr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}JC.exports=MZr});var ZC=s((bxe,$C)=>{"use strict";function BZr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}$C.exports=BZr});var rV=s((wxe,KC)=>{"use strict";var kZr=ae(),QC=vt(),CZr=YC(),VZr=ZC(),GZr=.7853981633974483,UZr=3061616997868383e-32,DZr=.3333333333333341,zZr=2147483647;function WZr(r,e,t){var i,a,n,u,o,v,f,c,l;return i=kZr(r),a=i&zZr|0,a>=1072010280&&(r<0&&(r=-r,e=-e),l=GZr-r,c=UZr-e,r=l+c,e=0),l=r*r,c=l*l,u=CZr(c),f=l*VZr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=DZr*o,c=r+u,a>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=QC(c,0),f=u-(l-r),n=-1/c,v=QC(n,0),o=1+v*l,v+n*(o+v*f))}KC.exports=WZr});var tV=s((Exe,eV)=>{"use strict";var HZr=rV();eV.exports=HZr});var nV=s((Sxe,aV)=>{"use strict";var XZr=ae(),iV=tV(),xZr=n0(),$3=[0,0],JZr=2147483647,YZr=1072243195,$Zr=2146435072,ZZr=1044381696;function QZr(r){var e,t;return e=XZr(r),e&=JZr,e<=YZr?e<ZZr?r:iV(r,0,1):e>=$Zr?NaN:(t=xZr(r,$3),iV($3[0],$3[1],1-((t&1)<<1)))}aV.exports=QZr});var c0=s((Nxe,sV)=>{"use strict";var KZr=nV();sV.exports=KZr});var oV=s((Oxe,uV)=>{"use strict";var rQr=c0();function eQr(r){return 1/rQr(r)}uV.exports=eQr});var fV=s((_xe,vV)=>{"use strict";var tQr=oV();vV.exports=tQr});var lV=s((Axe,cV)=>{"use strict";function iQr(r){var e,t,i;return r===0?-.3333333333333332:(r<0?e=-r:e=r,e<=1?(t=-1614.6876844170845+r*(-99.28772310019185+r*(-.9643991794250523+r*0)),i=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+r*1))):(r=1/r,t=0+r*(-.9643991794250523+r*(-99.28772310019185+r*-1614.6876844170845)),i=1+r*(112.81167849163293+r*(2235.4883906010045+r*4844.063053251255))),t/i)}cV.exports=iQr});var dV=s((Txe,pV)=>{"use strict";var aQr=Dr(),nQr=Yr(),sQr=lV(),uQr=88.02969193111305;function oQr(r){var e,t;if(t=aQr(r),t>.5*uQr)return r<0?-1:1;if(t>=.625)e=nQr(2*t),t=1-2/(e+1),r<0&&(t=-t);else{if(r===0)return r;e=r*r,t=r+r*e*sQr(e)}return t}pV.exports=oQr});var mV=s((Ixe,gV)=>{"use strict";var vQr=dV();gV.exports=vQr});var hV=s((Rxe,yV)=>{"use strict";var fQr=mV();function cQr(r){return 1/fQr(r)}yV.exports=cQr});var bV=s((Pxe,qV)=>{"use strict";var lQr=hV();qV.exports=lQr});var EV=s((Lxe,wV)=>{"use strict";var pQr=pt();function dQr(r){return 1+pQr(r)}wV.exports=dQr});var NV=s((Fxe,SV)=>{"use strict";var gQr=EV();SV.exports=gQr});var _V=s((jxe,OV)=>{"use strict";var mQr=pt();function yQr(r){return 1-mQr(r)}OV.exports=yQr});var TV=s((Mxe,AV)=>{"use strict";var hQr=_V();AV.exports=hQr});var RV=s((Bxe,IV)=>{"use strict";var qQr=.017453292519943295;function bQr(r){return r*qQr}IV.exports=bQr});var LV=s((kxe,PV)=>{"use strict";var wQr=RV();PV.exports=wQr});var jV=s((Cxe,FV)=>{"use strict";function EQr(r){return r===0?.08333333333333333:.08333333333333333+r*(-.008333333333333333+r*(.003968253968253968+r*(-.004166666666666667+r*(.007575757575757576+r*(-.021092796092796094+r*(.08333333333333333+r*-.4432598039215686))))))}FV.exports=EQr});var BV=s((Vxe,MV)=>{"use strict";var SQr=wr(),NQr=jV();function OQr(r){var e,t;return r-=1,e=SQr(r)+1/(2*r),t=1/(r*r),e-t*NQr(t)}MV.exports=OQr});var CV=s((Gxe,kV)=>{"use strict";function _Qr(r){var e,t,i;return r===0?.25479851061131553:(r<0?e=-r:e=r,e<=1?(t=.25479851061131553+r*(-.3255503118680449+r*(-.6503185377089651+r*(-.28919126444774784+r*(-.04525132144873906+r*(-.002071332116774595+r*0))))),i=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+r*-5578984132167551e-22)))))):(r=1/r,t=0+r*(-.002071332116774595+r*(-.04525132144873906+r*(-.28919126444774784+r*(-.6503185377089651+r*(-.3255503118680449+r*.25479851061131553))))),i=-5578984132167551e-22+r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+r*1)))))),t/i)}kV.exports=_Qr});var GV=s((Uxe,VV)=>{"use strict";var AQr=CV(),TQr=1569415565/1073741824,IQr=381566830/1073741824/1073741824,RQr=9016312093258695e-35,PQr=.9955816268920898;function LQr(r){var e,t;return e=r-TQr,e-=IQr,e-=RQr,t=AQr(r-1),e*PQr+e*t}VV.exports=LQr});var zV=s((Dxe,DV)=>{"use strict";var FQr=W(),jQr=Ur(),MQr=c0(),UV=Ee(),BQr=BV(),kQr=GV(),CQr=10;function VQr(r){var e,t;if(FQr(r)||r===0)return NaN;if(r<=-1){if(r=1-r,e=r-jQr(r),e>.5&&(e-=1),e===0)return NaN;t=UV/MQr(UV*e)}else t=0;if(r>=CQr)return t+=BQr(r),t;for(;r>2;)r-=1,t+=1/r;for(;r<1;)t-=1/r,r+=1;return t+=kQr(r),t}DV.exports=VQr});var HV=s((zxe,WV)=>{"use strict";var GQr=zV();WV.exports=GQr});var xV=s((Wxe,XV)=>{"use strict";var UQr=.34657359027997264;XV.exports=UQr});var YV=s((Hxe,JV)=>{"use strict";function DQr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}JV.exports=DQr});var eG=s((Xxe,rG)=>{"use strict";var zQr=W(),$V=ae(),Z3=wt(),WQr=Ya(),ZV=pr(),HQr=Ir(),QV=ct(),XQr=xV(),xQr=YV(),JQr=709.782712893384,Q3=.6931471803691238,K3=19082149292705877e-26,KV=1.4426950408889634,YQr=38.816242111356935,$Qr=1.0397207708399179;function ZQr(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(r===ZV||zQr(r))return r;if(r===HQr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=YQr){if(i)return-1;if(v>=JQr)return ZV}if(u=$V(v)|0,v>XQr)v<$Qr?i?(a=r+Q3,n=-K3,m=-1):(a=r-Q3,n=K3,m=1):(i?m=KV*r-.5:m=KV*r+.5,m|=0,l=m,a=r-l*Q3,n=l*K3),r=a-n,c=a-r-n;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*xQr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=WQr(QV+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(a=$V(v)+(m<<20)|0,v=Z3(v,a)):v*=t,v-1):(l=1,m<20?(a=1072693248-(2097152>>m)|0,l=Z3(l,a),v=l-(p-r)):(a=QV-m<<20|0,l=Z3(l,a),v=r-(p+l),v+=1),v*=t,v))}rG.exports=ZQr});var l0=s((xxe,tG)=>{"use strict";var QQr=eG();tG.exports=QQr});var sG=s((Jxe,nG)=>{"use strict";var iG=W(),aG=Dr(),KQr=l0(),rKr=wr(),eKr=Gr(),tKr=nu();function iKr(r,e){var t;if(iG(r)||iG(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((aG(e*(r-1))<.5||aG(e)<.2)&&(t=rKr(r)*e,t<.5))return KQr(t)}else if(tKr(e)!==e)return NaN;return eKr(r,e)-1}nG.exports=iKr});var rf=s((Yxe,uG)=>{"use strict";var aKr=sG();uG.exports=aKr});var vG=s(($xe,oG)=>{"use strict";var nKr=Ir();function sKr(r){return r===0&&1/r===nKr}oG.exports=sKr});var ef=s((Zxe,fG)=>{"use strict";var uKr=vG();fG.exports=uKr});var tf=s((Qxe,cG)=>{"use strict";var oKr=2.5066282746310007;cG.exports=oKr});var pG=s((Kxe,lG)=>{"use strict";function vKr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}lG.exports=vKr});var mG=s((rJe,gG)=>{"use strict";var fKr=tf(),dG=Gr(),cKr=Yr(),lKr=pG(),pKr=143.01608;function dKr(r){var e,t,i;return e=1/r,e=1+e*lKr(e),t=cKr(r),r>pKr?(i=dG(r,.5*r-.25),t=i*(i/t)):t=dG(r,r-.5)/t,fKr*t*e}gG.exports=dKr});var hG=s((eJe,yG)=>{"use strict";var gKr=.5772156649015329;yG.exports=gKr});var bG=s((tJe,qG)=>{"use strict";var mKr=hG();function yKr(r,e){return e/((1+mKr*r)*r)}qG.exports=yKr});var EG=s((iJe,wG)=>{"use strict";function hKr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}wG.exports=hKr});var RG=s((aJe,IG)=>{"use strict";var qKr=W(),bKr=Se(),wKr=ef(),SG=Dr(),EKr=Ur(),SKr=pt(),NG=pr(),OG=Ir(),_G=Ee(),AG=mG(),TG=bG(),NKr=EG();function OKr(r){var e,t,i,a;if(bKr(r)&&r<0||r===OG||qKr(r))return NaN;if(r===0)return wKr(r)?OG:NG;if(r>171.61447887182297)return NG;if(r<-170.5674972726612)return 0;if(t=SG(r),t>33)return r>=0?AG(r):(i=EKr(t),(i&1)===0?e=-1:e=1,a=t-i,a>.5&&(i+=1,a=t-i),a=t*SKr(_G*a),e*_G/(SG(a)*AG(t)));for(a=1;r>=3;)r-=1,a*=r;for(;r<0;){if(r>-1e-9)return TG(r,a);a/=r,r+=1}for(;r<2;){if(r<1e-9)return TG(r,a);a/=r,r+=1}return r===2?a:(r-=2,a*NKr(r))}IG.exports=OKr});var rn=s((nJe,PG)=>{"use strict";var _Kr=RG();PG.exports=_Kr});var jG=s((sJe,FG)=>{"use strict";var AKr=W(),TKr=Ae(),LG=Ot(),af=pt(),IKr=Dr(),p0=Ps(),d0=Ee();function RKr(r){var e,t;return AKr(r)?NaN:TKr(r)?NaN:(t=r%2,e=IKr(t),e===0||e===1?p0(0,t):e<.25?af(d0*t):e<.75?(e=.5-e,p0(LG(d0*e),t)):e<1.25?(t=p0(1,t)-t,af(d0*t)):e<1.75?(e-=1.5,-p0(LG(d0*e),t)):(t-=p0(2,t),af(d0*t)))}FG.exports=RKr});var g0=s((uJe,MG)=>{"use strict";var PKr=jG();MG.exports=PKr});var kG=s((oJe,BG)=>{"use strict";function LKr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}BG.exports=LKr});var VG=s((vJe,CG)=>{"use strict";function FKr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}CG.exports=FKr});var UG=s((fJe,GG)=>{"use strict";function jKr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}GG.exports=jKr});var zG=s((cJe,DG)=>{"use strict";function MKr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}DG.exports=MKr});var HG=s((lJe,WG)=>{"use strict";function BKr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}WG.exports=BKr});var xG=s((pJe,XG)=>{"use strict";function kKr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}XG.exports=kKr});var YG=s((dJe,JG)=>{"use strict";function CKr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}JG.exports=CKr});var ZG=s((gJe,$G)=>{"use strict";function VKr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}$G.exports=VKr});var KG=s((mJe,QG)=>{"use strict";function GKr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}QG.exports=GKr});var eU=s((yJe,rU)=>{"use strict";function UKr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}rU.exports=UKr});var aU=s((hJe,iU)=>{"use strict";var DKr=W(),zKr=Ae(),WKr=Dr(),en=wr(),HKr=nu(),XKr=g0(),xKr=Ee(),nf=pr(),JKr=kG(),YKr=VG(),$Kr=UG(),ZKr=zG(),QKr=HG(),KKr=xG(),rre=YG(),ere=ZG(),tre=KG(),ire=eU(),are=.07721566490153287,nre=.3224670334241136,sre=1,ure=-.07721566490153287,ore=.48383612272381005,vre=-.1475877229945939,fre=.06462494023913339,cre=-.07721566490153287,lre=1,pre=.4189385332046727,su=1.4616321449683622,dre=4503599627370496,gre=0x400000000000000,mre=8470329472543003e-37,tU=1.4616321449683622,yre=-.12148629053584961,hre=-3638676997039505e-33;function qre(r){var e,t,i,a,n,u,o,v,f,c,l,p,m;if(DKr(r)||zKr(r))return r;if(r===0)return nf;if(r<0?(e=!0,r=-r):e=!1,r<mre)return-en(r);if(e){if(r>=dre||(f=XKr(r),f===0))return nf;t=en(xKr/WKr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-en(r),r>=su-1+.27?(l=1-r,i=0):r>=su-1-.27?(l=r-(tU-1),i=1):(l=r,i=2)):(m=0,r>=su+.27?(l=2-r,i=0):r>=su-.27?(l=r-tU,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=are+p*JKr(p),n=p*(nre+p*YKr(p)),o=l*u+n,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=ore+c*QKr(c),n=vre+c*KKr(c),a=fre+c*rre(c),o=p*u-(hre-c*(n+l*a)),m+=yre+o;break;case 2:u=l*(cre+l*ere(l)),n=lre+l*tre(l),m+=-.5*l+u/n;break}else if(r<8)switch(i=HKr(r),l=r-i,o=l*(ure+l*ZKr(l)),v=sre+l*$Kr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=en(p)}else r<gre?(f=en(r),p=1/r,l=p*p,c=pre+p*ire(l),m=(r-.5)*(f-1)+c):m=r*(en(r)-1);return e&&(m=t-m),m}iU.exports=qre});var m0=s((qJe,nU)=>{"use strict";var bre=aU();nU.exports=bre});var yi=s((bJe,sU)=>{"use strict";var wre=6.283185307179586;sU.exports=wre});var sf=s((wJe,uU)=>{"use strict";var Ere=14901161193847656e-24;uU.exports=Ere});var uf=s((EJe,oU)=>{"use strict";var Sre=.9189385332046728;oU.exports=Sre});var vU=s((SJe,Nre)=>{Nre.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var fU=s((NJe,Ore)=>{Ore.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var cU=s((OJe,_re)=>{_re.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var pU=s((_Je,lU)=>{"use strict";function Are(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}lU.exports=Are});var gU=s((AJe,dU)=>{"use strict";function Tre(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}dU.exports=Tre});var yU=s((TJe,mU)=>{"use strict";function Ire(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}mU.exports=Ire});var qU=s((IJe,hU)=>{"use strict";function Rre(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}hU.exports=Rre});var wU=s((RJe,bU)=>{"use strict";function Pre(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}bU.exports=Pre});var SU=s((PJe,EU)=>{"use strict";function Lre(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}EU.exports=Lre});var TU=s((LJe,AU)=>{"use strict";var Fre=W(),jre=Se(),Mre=Dr(),uu=Yr(),Bre=Ur(),kre=rn(),Cre=m0(),NU=g0(),OU=Gr(),Vre=wr(),Gre=pr(),Ure=Ir(),_U=yi(),Dre=sf(),zre=uf(),Wre=vU(),Hre=fU(),Xre=cU(),xre=pU(),Jre=gU(),Yre=yU(),$re=qU(),Zre=wU(),Qre=SU(),Kre=129,ree=170,eee=709,tee=1.2433929443359375,iee=.6986598968505859;function of(r){var e,t,i,a,n,u;if(Fre(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(jre(r)&&(a=r|0,a===r))if(a<0){if(i=-a|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=Kre)return-Xre[u]/(i+1)}else return(a&1)===0?Hre[a/2]:Wre[(a-3)/2];return Mre(r)<Dre?-.5-zre*r:(t=1-r,r<0?Bre(r/2)===r/2?0:(e=r,r=t,t=e,r>ree?(e=NU(.5*t)*2*of(r),n=Cre(r),n-=r*Vre(_U),n>eee?e<0?Ure:Gre:e*uu(n)):NU(.5*t)*2*OU(_U,-r)*kre(r)*of(r)):r<1?(e=xre(t),e-=tee,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+Jre(t)):r<=4?(e=iee+1/-t,e+Yre(r-2)):r<=7?(e=$re(r-4),1+uu(e)):r<15?(e=Zre(r-7),1+uu(e)):r<36?(e=Qre(r-15),1+uu(e)):1+OU(2,-r))}AU.exports=of});var vf=s((FJe,IU)=>{"use strict";var aee=TU();IU.exports=aee});var PU=s((jJe,RU)=>{"use strict";var nee=W(),see=rf(),uee=vf(),oee=Yn();function vee(r){return nee(r)?NaN:r===1?oee:-see(2,1-r)*uee(r)}RU.exports=vee});var FU=s((MJe,LU)=>{"use strict";var fee=PU();LU.exports=fee});var MU=s((BJe,jU)=>{"use strict";function cee(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}jU.exports=cee});var kU=s((kJe,BU)=>{"use strict";function lee(r){return r===0?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+r*.26636380989261754))))))))))}BU.exports=lee});var VU=s((CJe,CU)=>{"use strict";function pee(r){return r===0?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+r*1.057652872753547))))))))))}CU.exports=pee});var UU=s((VJe,GU)=>{"use strict";function dee(r){return r===0?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+r*7.224080007363877)))))))))))}GU.exports=dee});var zU=s((GJe,DU)=>{"use strict";function gee(r){return r===0?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+r*90.27388602941))))))))))))}DU.exports=gee});var HU=s((UJe,WU)=>{"use strict";function mee(r){return r===0?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+r*2536.5297553827645)))))))))))))}WU.exports=mee});var xU=s((DJe,XU)=>{"use strict";function yee(r){return r===0?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+r*612757.2711915852)))))))))))))))}XU.exports=yee});var YU=s((zJe,JU)=>{"use strict";function hee(r){return r===0?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994048255285e-9+r*(9541921966748387e-9+r*(3563492744218076e-8+r*(13366929846120408e-8+r*(50335218668662846e-8+r*(190197572953866e-5+r*7208915015330104e-6))))))))))))))))))}JU.exports=hee});var ZU=s((WJe,$U)=>{"use strict";function qee(r){return r===0?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1.8472382637239718e6+r*(9600515416049214e-9+r*(5030767708502367e-8+r*(2654441886527128e-7+r*(14088623250287027e-7+r*7515687935373775e-6))))))))))))))}$U.exports=qee});var KU=s((HJe,QU)=>{"use strict";function bee(r){return r===0?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1.0439993310899908e6+r*(7427974817042039e-9+r*(5350383967558661e-8+r*(38924988699487084e-8+r*(28552883511008105e-7+r*(2109007703876684e-5+r*(1566998339477902e-4+r*(117022224242244e-2+r*(87779483236689375e-4+r*(6610124275248495e-2+r*(4994880537133888e-1+r*0x86813c6c7adde8))))))))))))))))))}QU.exports=bee});var eD=s((XJe,rD)=>{"use strict";function wee(r){return r===0?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+r*.003919665602267974)))))))))))))}rD.exports=wee});var iD=s((xJe,tD)=>{"use strict";function Eee(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}tD.exports=Eee});var nD=s((JJe,aD)=>{"use strict";var See=Rr(),Nee=wr(),Oee=pr(),_ee=Qa(),Aee=MU(),Tee=kU(),Iee=VU(),Ree=UU(),Pee=zU(),Lee=HU(),Fee=xU(),jee=YU(),Mee=ZU(),Bee=KU(),kee=eD(),Cee=iD(),Vee=.3183098861837907;function Gee(r){var e,t,i,a,n,u;return u=r,r<0&&(u=r/(r-1),e=!0),u===0?_ee:u===1?Oee:u>1?NaN:(u<.1?n=Aee(u-.05):u<.2?n=Tee(u-.15):u<.3?n=Iee(u-.25):u<.4?n=Ree(u-.35):u<.5?n=Pee(u-.45):u<.6?n=Lee(u-.55):u<.7?n=Fee(u-.65):u<.8?n=jee(u-.75):u<.85?n=Mee(u-.825):u<.9?n=Bee(u-.875):(i=1-u,a=kee(i),t=Cee(i-.05),n=-Nee(a)*(t*Vee)),e?n/See(1-r):n)}aD.exports=Gee});var ff=s((YJe,sD)=>{"use strict";var Uee=nD();sD.exports=Uee});var oD=s(($Je,uD)=>{"use strict";function Dee(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}uD.exports=Dee});var fD=s((ZJe,vD)=>{"use strict";function zee(r){return r===0?1.5101218320928198:1.5101218320928198+r*(-.41711633390586755+r*(-.09012382040477457+r*(-.04372994401908431+r*(-.027965493064761784+r*(-.020644781177568104+r*(-.016650786739707237+r*(-.01426196082884252+r*(-.012759847429264804+r*(-.011799303775587354+r*-.011197445703074968)))))))))}vD.exports=zee});var lD=s((QJe,cD)=>{"use strict";function Wee(r){return r===0?1.4674622093394272:1.4674622093394272+r*(-.43657629094633776+r*(-.10515555766694255+r*(-.05737184359324173+r*(-.04139162772734022+r*(-.03452772850528084+r*(-.031495443512532785+r*(-.030527000890325277+r*(-.0309169840192389+r*(-.03237139531475812+r*-.03478996038640416)))))))))}cD.exports=Wee});var dD=s((KJe,pD)=>{"use strict";function Hee(r){return r===0?1.4226911334908792:1.4226911334908792+r*(-.4595135196210487+r*(-.12525053982206188+r*(-.07813854509440948+r*(-.06471427847205+r*(-.06208433913173031+r*(-.06519703281557247+r*(-.07279389536257878+r*(-.084959075171781+r*(-.102539850131046+r*(-.12705358515769605+r*-.1607911206912746))))))))))}pD.exports=Hee});var mD=s((rYe,gD)=>{"use strict";function Xee(r){return r===0?1.3754019718711163:1.3754019718711163+r*(-.4872021832731848+r*(-.15331170134854022+r*(-.11184944491702783+r*(-.10884095252313576+r*(-.12295422312026907+r*(-.15221716396203505+r*(-.20049532364269734+r*(-.27617433306775174+r*(-.39351311430437586+r*(-.5757544060278792+r*(-.8605232357272398+r*-1.3088332057585401)))))))))))}gD.exports=Xee});var hD=s((eYe,yD)=>{"use strict";function xee(r){return r===0?1.3250244979582302:1.3250244979582302+r*(-.5217276475575667+r*(-.19490643048212622+r*(-.17162372682201127+r*(-.20275465292641914+r*(-.27879895311853475+r*(-.42069845728100574+r*(-.675948400853106+r*(-1.1363431218392293+r*(-1.9767211439543984+r*(-3.5316967730957227+r*(-6.446753640156048+r*-11.97703130208884)))))))))))}yD.exports=xee});var bD=s((tYe,qD)=>{"use strict";function Jee(r){return r===0?1.2707074796501499:1.2707074796501499+r*(-.5668391682878666+r*(-.2621607934324926+r*(-.2922441735330774+r*(-.4403978408504232+r*(-.7749476413813975+r*(-1.498870837987561+r*(-3.089708310445187+r*(-6.6675959033810015+r*(-14.89436036517319+r*(-34.18120574251449+r*(-80.15895841905397+r*(-191.34894807629848+r*(-463.5938853480342+r*-1137.38082216936)))))))))))))}qD.exports=Jee});var ED=s((iYe,wD)=>{"use strict";function Yee(r){return r===0?1.2110560275684594:1.2110560275684594+r*(-.6303064132874558+r*(-.38716640952066916+r*(-.5922782353119346+r*(-1.23755558451305+r*(-3.0320566617452474+r*(-8.18168822157359+r*(-23.55507217389693+r*(-71.04099935893065+r*(-221.879685319235+r*(-712.1364793277636+r*(-2336.1253314403966+r*(-7801.945954775964+r*(-26448.19586059192+r*(-90799.48341621365+r*(-315126.04064491636+r*-1.1040113443115912e6)))))))))))))))}wD.exports=Yee});var ND=s((aYe,SD)=>{"use strict";function $ee(r){return r===0?1.1613071521962828:1.1613071521962828+r*(-.7011002845552895+r*(-.5805514744654373+r*(-1.2436930610777865+r*(-3.679383613496635+r*(-12.815909243378957+r*(-49.25672530759985+r*(-202.18187354340904+r*(-869.8602699308701+r*(-3877.0058473132895+r*(-17761.7071017094+r*(-83182.69029154233+r*(-396650.4505013548+r*-1.9200334136826345e6))))))))))))}SD.exports=$ee});var _D=s((nYe,OD)=>{"use strict";function Zee(r){return r===0?1.1246173251197522:1.1246173251197522+r*(-.7708450563609095+r*(-.8447940536449113+r*(-2.4900973094503946+r*(-10.239717411543843+r*(-49.7490054655148+r*(-267.09866751957054+r*(-1532.66588382523+r*(-9222.313478526092+r*(-57502.51612140314+r*(-368596.11674161063+r*(-2.4156110887010912e6+r*(-16120097815816568e-9+r*(-10920993852030899e-8+r*(-7493807581942496e-7+r*(-5198725846725541e-6+r*-364092568881214e-4)))))))))))))))}OD.exports=Zee});var TD=s((sYe,AD)=>{"use strict";function Qee(r){return r===0?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+r*.08154111871830322)))))))))}AD.exports=Qee});var RD=s((uYe,ID)=>{"use strict";function Kee(r){return r===0?1.5509733517804722:1.5509733517804722+r*(-.4003010201031985+r*(-.07849861944294194+r*(-.034318853117591995+r*(-.0197180433173655+r*(-.01305950773199331+r*(-.009442372874146548+r*(-.007246728512402157+r*(-.00580742401295609+r*-.004809187786009338))))))))}ID.exports=Kee});var FD=s((oYe,LD)=>{"use strict";var rte=Rr(),PD=Qa(),ete=ff(),tte=oD(),ite=fD(),ate=lD(),nte=dD(),ste=mD(),ute=hD(),ote=bD(),vte=ED(),fte=ND(),cte=_D(),lte=TD(),pte=RD();function dte(r){var e,t,i,a,n,u,o;return o=r,r<0&&(o=r/(r-1),e=!0),o===0?PD:o===1?1:o>1?NaN:(o<.1?u=tte(o-.05):o<.2?u=ite(o-.15):o<.3?u=ate(o-.25):o<.4?u=nte(o-.35):o<.5?u=ste(o-.45):o<.6?u=ute(o-.55):o<.7?u=ote(o-.65):o<.8?u=vte(o-.75):o<.85?u=fte(o-.825):o<.9?u=cte(o-.875):(a=.95-o,t=lte(a),i=pte(a),n=ete(o),u=(PD+n*(t-i))/t),e?u*rte(1-r):u)}LD.exports=dte});var MD=s((vYe,jD)=>{"use strict";var gte=FD();jD.exports=gte});var kD=s((fYe,BD)=>{"use strict";function mte(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}BD.exports=mte});var VD=s((cYe,CD)=>{"use strict";function yte(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}CD.exports=yte});var UD=s((lYe,GD)=>{"use strict";function hte(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}GD.exports=hte});var zD=s((pYe,DD)=>{"use strict";function qte(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}DD.exports=qte});var HD=s((dYe,WD)=>{"use strict";function bte(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}WD.exports=bte});var xD=s((gYe,XD)=>{"use strict";function wte(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}XD.exports=wte});var YD=s((mYe,JD)=>{"use strict";function Ete(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}JD.exports=Ete});var ZD=s((yYe,$D)=>{"use strict";function Ste(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}$D.exports=Ste});var tz=s((hYe,ez)=>{"use strict";var Nte=W(),QD=Yr(),Ote=vt(),_te=pr(),Ate=Ir(),Tte=kD(),Ite=VD(),Rte=UD(),Pte=zD(),Lte=HD(),Fte=xD(),jte=YD(),Mte=ZD(),KD=1e-300,Bte=2848094538889218e-321,kte=3725290298461914e-24,rz=.8450629115104675,Cte=.1283791670955126,Vte=1.0270333367641007,Gte=.12837916709551256,Ute=1,Dte=-.0023621185607526594,zte=1,Wte=-.009864944034847148,Hte=1,Xte=-.0098649429247001,xte=1;function Jte(r){var e,t,i,a,n,u,o,v;return Nte(r)?NaN:r===_te?1:r===Ate?-1:r===0?r:(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375?t<kte?t<Bte?.125*(8*r+Vte*r):r+Cte*r:(i=r*r,a=Gte+i*Tte(i),n=Ute+i*Ite(i),u=a/n,r+r*u):t<1.25?(n=t-1,o=Dte+n*Rte(n),v=zte+n*Pte(n),e?-rz-o/v:rz+o/v):t>=6?e?KD-1:1-KD:(n=1/(t*t),t<2.857142857142857?(a=Wte+n*Lte(n),n=Hte+n*Fte(n)):(a=Xte+n*jte(n),n=xte+n*Mte(n)),i=Ote(t,0),a=QD(-(i*i)-.5625)*QD((i-t)*(i+t)+a/n),e?a/t-1:1-a/t))}ez.exports=Jte});var az=s((qYe,iz)=>{"use strict";var Yte=tz();iz.exports=Yte});var sz=s((bYe,nz)=>{"use strict";function $te(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}nz.exports=$te});var oz=s((wYe,uz)=>{"use strict";function Zte(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}uz.exports=Zte});var fz=s((EYe,vz)=>{"use strict";function Qte(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}vz.exports=Qte});var lz=s((SYe,cz)=>{"use strict";function Kte(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}cz.exports=Kte});var dz=s((NYe,pz)=>{"use strict";function rie(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}pz.exports=rie});var mz=s((OYe,gz)=>{"use strict";function eie(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}gz.exports=eie});var hz=s((_Ye,yz)=>{"use strict";function tie(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}yz.exports=tie});var bz=s((AYe,qz)=>{"use strict";function iie(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}qz.exports=iie});var Nz=s((TYe,Sz)=>{"use strict";var aie=W(),wz=Yr(),nie=vt(),sie=pr(),uie=Ir(),oie=sz(),vie=oz(),fie=fz(),cie=lz(),lie=dz(),pie=mz(),die=hz(),gie=bz(),ou=1e-300,mie=13877787807814457e-33,Ez=.8450629115104675,yie=.12837916709551256,hie=1,qie=-.0023621185607526594,bie=1,wie=-.009864944034847148,Eie=1,Sie=-.0098649429247001,Nie=1;function Oie(r){var e,t,i,a,n,u,o,v;if(aie(r))return NaN;if(r===sie)return 0;if(r===uie)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<mie?1-r:(i=r*r,a=yie+i*oie(i),n=hie+i*vie(i),u=a/n,r<.25?1-(r+r*u):(a=r*u,a+=r-.5,.5-a));if(t<1.25)return n=t-1,o=qie+n*fie(n),v=bie+n*cie(n),e?1+Ez+o/v:1-Ez-o/v;if(t<28){if(n=1/(t*t),t<2.857142857142857)a=wie+n*lie(n),n=Eie+n*pie(n);else{if(r<-6)return 2-ou;a=Sie+n*die(n),n=Nie+n*gie(n)}return i=nie(t,0),a=wz(-(i*i)-.5625)*wz((i-t)*(i+t)+a/n),e?2-a/t:a/t}return e?2-ou:ou*ou}Sz.exports=Oie});var hi=s((IYe,Oz)=>{"use strict";var _ie=Nz();Oz.exports=_ie});var Az=s((RYe,_z)=>{"use strict";function Aie(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}_z.exports=Aie});var Iz=s((PYe,Tz)=>{"use strict";function Tie(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Tz.exports=Tie});var Pz=s((LYe,Rz)=>{"use strict";function Iie(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Rz.exports=Iie});var Fz=s((FYe,Lz)=>{"use strict";function Rie(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Lz.exports=Rie});var Mz=s((jYe,jz)=>{"use strict";function Pie(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}jz.exports=Pie});var Vz=s((MYe,Cz)=>{"use strict";var Lie=W(),Bz=Rr(),kz=wr(),Fie=pr(),jie=Ir(),Mie=Az(),Bie=Iz(),kie=Pz(),Cie=Fz(),Vie=Mz(),Gie=.08913147449493408,Uie=2.249481201171875,Die=.807220458984375,zie=.9399557113647461,Wie=.9836282730102539;function Hie(r){var e,t,i,a,n;return Lie(r)?NaN:r===0?Fie:r===2?jie:r===1?0:r>2||r<0?NaN:(r>1?(e=-1,i=2-r):(e=1,i=r),r=1-i,r<=.5?(a=r*(r+10),n=Mie(r),e*(a*Gie+a*n)):i>=.25?(a=Bz(-2*kz(i)),i-=.25,n=Bie(i),e*(a/(Uie+n))):(i=Bz(-kz(i)),i<3?(t=i-1.125,n=kie(t),e*(Die*i+n*i)):i<6?(t=i-3,n=Cie(t),e*(zie*i+n*i)):(t=i-6,n=Vie(t),e*(Wie*i+n*i))))}Cz.exports=Hie});var Uz=s((BYe,Gz)=>{"use strict";var Xie=Vz();Gz.exports=Xie});var zz=s((kYe,Dz)=>{"use strict";function xie(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Dz.exports=xie});var Hz=s((CYe,Wz)=>{"use strict";function Jie(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Wz.exports=Jie});var xz=s((VYe,Xz)=>{"use strict";function Yie(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Xz.exports=Yie});var Yz=s((GYe,Jz)=>{"use strict";function $ie(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Jz.exports=$ie});var Zz=s((UYe,$z)=>{"use strict";function Zie(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}$z.exports=Zie});var eW=s((DYe,rW)=>{"use strict";var Qie=W(),Qz=Rr(),Kz=wr(),Kie=pr(),rae=Ir(),eae=zz(),tae=Hz(),iae=xz(),aae=Yz(),nae=Zz(),sae=.08913147449493408,uae=2.249481201171875,oae=.807220458984375,vae=.9399557113647461,fae=.9836282730102539;function cae(r){var e,t,i,a,n,u;return Qie(r)?NaN:r===1?Kie:r===-1?rae:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),a=1-t,t<=.5?(n=t*(t+10),u=eae(t),e*(n*sae+n*u)):a>=.25?(n=Qz(-2*Kz(a)),a-=.25,u=tae(a),e*(n/(uae+u))):(a=Qz(-Kz(a)),a<3?(i=a-1.125,u=iae(i),e*(oae*a+u*a)):a<6?(i=a-3,u=aae(i),e*(vae*a+u*a)):(i=a-6,u=nae(i),e*(fae*a+u*a))))}rW.exports=cae});var vu=s((zYe,tW)=>{"use strict";var lae=eW();tW.exports=lae});var aW=s((WYe,iW)=>{"use strict";function pae(r){return r===0?2394.2374120738828:2394.2374120738828+r*(406.7172899368727+r*(11.745273255434405+r*.040996251979858706))}iW.exports=pae});var sW=s((HYe,nW)=>{"use strict";function dae(r){return r===0?2079.608192860019:2079.608192860019+r*(1272.0927117834513+r*(85.09361608493066+r*1))}nW.exports=dae});var vW=s((XYe,oW)=>{"use strict";var gae=Ur(),uW=$a(),mae=W(),yae=Zn(),hae=Cs(),qae=pr(),bae=aW(),wae=sW(),Eae=3.321928094887362,Sae=.301025390625,Nae=4605038981195214e-21;function Oae(r){var e,t,i;return mae(r)?r:r>yae?qae:r<hae?0:(e=gae(Eae*r+.5),i=e,r-=e*Sae,r-=e*Nae,t=r*r,e=r*bae(t),r=e/(wae(t)-e),r=1+uW(r,1),uW(r,i))}oW.exports=Oae});var cW=s((xYe,fW)=>{"use strict";var _ae=vW();fW.exports=_ae});var pW=s((JYe,lW)=>{"use strict";var Aae=-1022;lW.exports=Aae});var gW=s((YYe,dW)=>{"use strict";function Tae(r){return r===0?1513.906801156151:1513.906801156151+r*(20.202065669316532+r*.023093347705734523)}dW.exports=Tae});var yW=s(($Ye,mW)=>{"use strict";function Iae(r){return r===0?4368.211668792106:4368.211668792106+r*(233.1842117223149+r*1)}mW.exports=Iae});var bW=s((ZYe,qW)=>{"use strict";var Rae=Bs(),Pae=pW(),Lae=Ks(),hW=$a(),Fae=W(),jae=pr(),Mae=gW(),Bae=yW();function kae(r){var e,t,i;return Fae(r)?r:r>Rae?jae:r<Pae?0:(i=Lae(r),r-=i,t=r*r,e=r*Mae(t),r=e/(Bae(t)-e),r=1+hW(r,1),hW(r,i))}qW.exports=kae});var EW=s((QYe,wW)=>{"use strict";var Cae=bW();wW.exports=Cae});var NW=s((KYe,SW)=>{"use strict";var Vae=W(),Gae=Yr();function Uae(r){return Vae(r)?r:1/(1+Gae(-r))}SW.exports=Uae});var _W=s((r$e,OW)=>{"use strict";var Dae=NW();OW.exports=Dae});var qi=s((e$e,AW)=>{"use strict";var zae=2220446049250313e-31;AW.exports=zae});var IW=s((t$e,TW)=>{"use strict";var Wae=l0(),Hae=Dr(),Xae=qi(),xae=pr(),Jae=709.782712893384;function Yae(r){return Hae(r)<=Xae?1:r>=Jae?xae:Wae(r)/r}TW.exports=Yae});var PW=s((i$e,RW)=>{"use strict";var $ae=IW();RW.exports=$ae});var FW=s((a$e,LW)=>{"use strict";var lr=Qr(),Zae=Dr(),Qae=Ws(),Kae=t0(),rne=jF(),ene=ij(),tne=mj(),ine=bj(),ane=Nj(),nne=Tj(),sne=kj(),une=Uj(),one=Hj(),vne=va(),fne=T3(),cne=Js(),lne=$j(),pne=rM(),dne=aM(),gne=mM(),mne=M3(),yne=B3(),hne=jB(),qne=ZB(),bne=Ak(),wne=Mk(),Ene=Ka(),Sne=eC(),Nne=yC(),One=Ot(),_ne=MC(),Ane=DC(),Tne=xC(),Ine=fV(),Rne=bV(),Pne=NV(),Lne=TV(),Fne=LV(),jne=HV(),Mne=FU(),Bne=MD(),kne=ff(),Cne=az(),Vne=hi(),Gne=Uz(),Une=vu(),Dne=Yr(),zne=cW(),Wne=EW(),Hne=_W(),Xne=l0(),xne=PW(),Jne=pt(),Yne=Rr(),$ne=vf();function Zne(r){return lr(r,"abs",Zae),lr(r,"abs2",Qae),lr(r,"acos",Kae),lr(r,"acosd",rne),lr(r,"acosh",ene),lr(r,"acot",tne),lr(r,"acovercos",ine),lr(r,"acoversin",ane),lr(r,"acsc",nne),lr(r,"acsch",sne),lr(r,"ahavercos",une),lr(r,"ahaversin",one),lr(r,"asin",vne),lr(r,"asinh",fne),lr(r,"atan",cne),lr(r,"atanh",lne),lr(r,"avercos",pne),lr(r,"aversin",dne),lr(r,"bernoulli",gne),lr(r,"besselj0",mne),lr(r,"besselj1",yne),lr(r,"bessely0",hne),lr(r,"bessely1",qne),lr(r,"binet",bne),lr(r,"cbrt",wne),lr(r,"ceil",Ene),lr(r,"ceil10",Sne),lr(r,"ceil2",Nne),lr(r,"cos",One),lr(r,"cosh",_ne),lr(r,"cosm1",Ane),lr(r,"cospi",Tne),lr(r,"cot",Ine),lr(r,"coth",Rne),lr(r,"covercos",Pne),lr(r,"coversin",Lne),lr(r,"deg2rad",Fne),lr(r,"digamma",jne),lr(r,"eta",Mne),lr(r,"ellipe",Bne),lr(r,"ellipk",kne),lr(r,"erf",Cne),lr(r,"erfc",Vne),lr(r,"erfcinv",Gne),lr(r,"erfinv",Une),lr(r,"exp",Dne),lr(r,"exp10",zne),lr(r,"exp2",Wne),lr(r,"expit",Hne),lr(r,"expm1",Xne),lr(r,"expm1rel",xne),lr(r,"sin",Jne),lr(r,"sqrt",Yne),lr(r,"zeta",$ne),r}LW.exports=Zne});var MW=s((n$e,jW)=>{"use strict";var Qne=Qr(),Kne=NI(),r0e=UL(),e0e=FW();function t0e(r){return Qne(r,"tools",r0e({})),r=Kne(r),r=e0e(r),r}jW.exports=t0e});var CW=s((s$e,kW)=>{"use strict";var i0e=t2(),BW=i0e();function a0e(){return typeof BW.BigInt=="function"&&typeof BigInt=="function"&&typeof BW.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}kW.exports=a0e});var GW=s((u$e,VW)=>{"use strict";var n0e=CW();VW.exports=n0e});var UW=s((o$e,s0e)=>{s0e.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var zW=s((v$e,DW)=>{"use strict";var u0e=UW();function o0e(r){return u0e[r]||null}DW.exports=o0e});var HW=s((f$e,WW)=>{"use strict";var v0e=zW();WW.exports=v0e});var JW=s((c$e,xW)=>{"use strict";var XW=Dr();function f0e(r){var e,t,i,a,n,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,a=XW(r[0]),u=1;u<t;u++)if(n=XW(r[u]),e&&n<a?e=!1:i&&n>a&&(i=!1),i||e)a=n;else return 0;return i&&e?3:i?1:2}xW.exports=f0e});var cf=s((l$e,YW)=>{"use strict";var c0e=JW();YW.exports=c0e});var ZW=s((p$e,$W)=>{"use strict";function l0e(r,e){return e&&(r===2||r===3)}$W.exports=l0e});var KW=s((d$e,QW)=>{"use strict";function p0e(r,e){return e&&(r===1||r===3)}QW.exports=p0e});var eH=s((g$e,rH)=>{"use strict";function d0e(r,e,t){var i,a,n,u,o;for(i=r.length,a=t,n=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?n+=u*(r[o]-1):u<0&&(a+=u*(r[o]-1))}return[a,n]}rH.exports=d0e});var iH=s((m$e,tH)=>{"use strict";function g0e(r,e,t,i){var a,n,u,o,v;for(a=r.length,n=t,u=t,v=0;v<a;v++){if(r[v]===0)return i[0]=t,i[1]=t,i;o=e[v],o>0?u+=o*(r[v]-1):o<0&&(n+=o*(r[v]-1))}return i[0]=n,i[1]=u,i}tH.exports=g0e});var sH=s((y$e,nH)=>{"use strict";var m0e=D(),aH=eH(),y0e=iH();m0e(aH,"assign",y0e);nH.exports=aH});var oH=s((h$e,uH)=>{"use strict";var h0e=sH();function q0e(r,e,t,i,a){var n;return r===0||a===0?!1:(n=h0e(e,t,i),r===n[1]-n[0]+1)}uH.exports=q0e});var fH=s((q$e,vH)=>{"use strict";function b0e(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}vH.exports=b0e});var lH=s((b$e,cH)=>{"use strict";function w0e(r){var e,t,i,a,n,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,a=this._offset,this._order==="column-major"){for(u=0;u<i;u++)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}for(u=i-1;u>=0;u--)n=r%t[u],r-=n,r/=t[u],a+=n*e[u];return this._accessors?this._buffer.get(a):this._buffer[a]}cH.exports=w0e});var dH=s((w$e,pH)=>{"use strict";function E0e(r,e){var t,i,a,n,u,o;if(a=this._ndims,a===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,n=this._offset,this._order==="column-major"){for(o=0;o<a;o++)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}for(o=a-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],n+=u*t[o];return this._accessors?this._buffer.set(e,n):this._buffer[n]=e,this}pH.exports=E0e});var mH=s((E$e,gH)=>{"use strict";function S0e(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}gH.exports=S0e});var hH=s((S$e,yH)=>{"use strict";function N0e(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}yH.exports=N0e});var bH=s((N$e,qH)=>{"use strict";var O0e=it(),_0e=at();function A0e(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(O0e(t),_0e(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}qH.exports=A0e});var SH=s((O$e,EH)=>{"use strict";var T0e=Jr().isPrimitive,I0e=V(),wH=/[-\/\\^$*+?.()|[\]{}]/g;function R0e(r){var e,t,i;if(!T0e(r))throw new TypeError(I0e("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(wH,"\\$&"):(t=r.substring(1,i),t=t.replace(wH,"\\$&"),r=r[0]+t+r.substring(i),r)}EH.exports=R0e});var OH=s((_$e,NH)=>{"use strict";var P0e=SH();NH.exports=P0e});var AH=s((A$e,_H)=>{"use strict";var L0e=RegExp.prototype.exec;_H.exports=L0e});var IH=s((T$e,TH)=>{"use strict";var F0e=AH();function j0e(r){try{return F0e.call(r),!0}catch{return!1}}TH.exports=j0e});var PH=s((I$e,RH)=>{"use strict";var M0e=ha(),B0e=re(),k0e=IH(),C0e=M0e();function V0e(r){return typeof r=="object"?r instanceof RegExp?!0:C0e?k0e(r):B0e(r)==="[object RegExp]":!1}RH.exports=V0e});var FH=s((R$e,LH)=>{"use strict";var G0e=PH();LH.exports=G0e});var MH=s((P$e,jH)=>{"use strict";function U0e(r,e,t){return r.replace(e,t)}jH.exports=U0e});var bi=s((L$e,BH)=>{"use strict";var D0e=MH();BH.exports=D0e});var CH=s((F$e,kH)=>{"use strict";var z0e=OH(),W0e=qr(),lf=Jr().isPrimitive,H0e=FH(),pf=V(),X0e=bi();function x0e(r,e,t){if(!lf(r))throw new TypeError(pf("invalid argument. First argument must be a string. Value: `%s`.",r));if(lf(e))e=new RegExp(z0e(e),"g");else if(!H0e(e))throw new TypeError(pf("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!lf(t)&&!W0e(t))throw new TypeError(pf("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return X0e(r,e,t)}kH.exports=x0e});var GH=s((j$e,VH)=>{"use strict";var J0e=CH();VH.exports=J0e});var DH=s((M$e,UH)=>{"use strict";var Y0e=GH(),df=it(),gf=at(),$0e={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function Z0e(){var r,e,t,i,a,n,u;if(e=this._shape.length,a=this._dtype,i="ndarray( '"+a+"', ",r="",this._length<=100)if(a==="complex64"||a==="complex128")for(u=0;u<this._length;u++)n=this.iget(u),r+=df(n)+", "+gf(n),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(a==="complex64"||a==="complex128")for(u=0;u<3;u++)n=this.iget(u),r+=df(n)+", "+gf(n),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",a==="complex64"||a==="complex128")for(u=2;u>=0;u--)n=this.iget(this._length-1-u),r+=df(n)+", "+gf(n),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=$0e[this.dtype],i+=Y0e(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}UH.exports=Z0e});var WH=s((B$e,zH)=>{"use strict";var Q0e=typeof ArrayBuffer=="function"?ArrayBuffer:null;zH.exports=Q0e});var XH=s((k$e,HH)=>{"use strict";var K0e=ts(),rse=ge(),fu=WH();function ese(){var r,e,t;if(typeof fu!="function")return!1;try{t=new fu(16),r=K0e(t)&&typeof fu.isView=="function",r&&(e=new rse(t),e[0]=-3.14,e[1]=NaN,r=r&&fu.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}HH.exports=ese});var JH=s((C$e,xH)=>{"use strict";var tse=XH();xH.exports=tse});var $H=s((V$e,YH)=>{"use strict";var ise=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;YH.exports=ise});var QH=s((G$e,ZH)=>{"use strict";function ase(){throw new Error("not implemented")}ZH.exports=ase});var cu=s((U$e,KH)=>{"use strict";var nse=JH(),sse=$H(),use=QH(),mf;nse()?mf=sse:mf=use;KH.exports=mf});var eX=s((D$e,rX)=>{"use strict";var ose=re(),vse=typeof DataView=="function";function fse(r){return vse&&r instanceof DataView||ose(r)==="[object DataView]"}rX.exports=fse});var iX=s((z$e,tX)=>{"use strict";var cse=eX();tX.exports=cse});var nX=s((W$e,aX)=>{"use strict";var lse=typeof DataView=="function"?DataView:null;aX.exports=lse});var oX=s((H$e,uX)=>{"use strict";var pse=iX(),dse=cu(),sX=nX();function gse(){var r,e,t;if(typeof sX!="function")return!1;try{t=new dse(24),e=new sX(t,8),r=pse(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}uX.exports=gse});var fX=s((X$e,vX)=>{"use strict";var mse=oX();vX.exports=mse});var lX=s((x$e,cX)=>{"use strict";var yse=typeof DataView=="function"?DataView:void 0;cX.exports=yse});var dX=s((J$e,pX)=>{"use strict";function hse(){throw new Error("not implemented")}pX.exports=hse});var y0=s((Y$e,gX)=>{"use strict";var qse=fX(),bse=lX(),wse=dX(),yf;qse()?yf=bse:yf=wse;gX.exports=yf});var yX=s(($$e,mX)=>{"use strict";var Ese=typeof BigInt=="function"?BigInt:void 0;mX.exports=Ese});var qX=s((Z$e,hX)=>{"use strict";var Sse=yX();hX.exports=Sse});var bX=s((Q$e,Nse)=>{Nse.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var SX=s((K$e,EX)=>{"use strict";var wX=bX();function Ose(){var r;return arguments.length===0?wX.all.slice():(r=wX[arguments[0]],r?r.slice():[])}EX.exports=Ose});var OX=s((rZe,NX)=>{"use strict";function _se(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}NX.exports=_se});var AX=s((eZe,_X)=>{"use strict";var Ase=Qr(),Tse=za();function Ise(r,e){var t,i,a;for(t=Tse(e),a=0;a<t.length;a++)i=t[a],Ase(r,i,e[i]);return r}_X.exports=Ise});var qf=s((tZe,IX)=>{"use strict";var Rse=D(),hf=SX(),TX=OX(),Pse=AX();Rse(hf,"enum",TX);Pse(hf,TX());IX.exports=hf});var RX=s((iZe,Lse)=>{Lse.exports=["row-major","column-major"]});var LX=s((aZe,PX)=>{"use strict";var Fse=RX();function jse(){return Fse.slice()}PX.exports=jse});var jX=s((nZe,FX)=>{"use strict";function Mse(){return{"row-major":1,"column-major":2}}FX.exports=Mse});var h0=s((sZe,BX)=>{"use strict";var Bse=D(),MX=LX(),kse=jX();Bse(MX,"enum",kse);BX.exports=MX});var kX=s((uZe,Cse)=>{Cse.exports=["throw","clamp","wrap"]});var VX=s((oZe,CX)=>{"use strict";var Vse=kX();function Gse(){return Vse.slice()}CX.exports=Gse});var UX=s((vZe,GX)=>{"use strict";function Use(){return{throw:1,clamp:2,wrap:3}}GX.exports=Use});var bf=s((fZe,zX)=>{"use strict";var Dse=D(),DX=VX(),zse=UX();Dse(DX,"enum",zse);zX.exports=DX});var XX=s((cZe,HX)=>{"use strict";var wi=Ye(),Wse=cu(),Hse=y0(),q0=qX(),Xse=qf().enum,xse=h0().enum,Jse=bf().enum,Yse=Xse(),$se=xse(),WX=Jse();function Zse(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m;if(v=this._mode||"throw",u=this._submode||[v],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new Hse(new Wse(t)),a=this._shape,n=this._strides,i=this._dtype,r=this._bytesPerElement,f=0,o.setInt8(f,wi?1:0),f+=1,o.setInt16(f,Yse[i],wi),f+=2,o.setBigInt64(f,q0(l),wi),c=l*8,f+=8,m=0;m<l;m++)o.setBigInt64(f,q0(a[m]),wi),o.setBigInt64(f+c,q0(n[m]*r),wi),f+=8;for(f+=c,o.setBigInt64(f,q0(this._offset*r),wi),f+=8,o.setInt8(f,$se[this._order]),f+=1,o.setInt8(f,WX[v]),f+=1,o.setBigInt64(f,q0(p),wi),f+=8,m=0;m<p;m++)o.setInt8(f,WX[u[m]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(f,e,wi),this.__meta_dataview__=o,o}HX.exports=Zse});var JX=s((lZe,xX)=>{"use strict";var b0=Ye(),Qse=tt(),Kse=y0(),rue=Ur(),eue=4294967295>>>0,tue=4294967296;function iue(r){var e,t,i,a;return e=new Qse(8),r===0||(a=(r&eue)>>>0,i=rue(r/tue),t=new Kse(e.buffer),b0?(t.setUint32(0,a,b0),t.setUint32(4,i,b0)):(t.setUint32(0,i,b0),t.setUint32(4,a,b0))),e}xX.exports=iue});var $X=s((pZe,YX)=>{"use strict";var w0=Ye(),aue=tt(),nue=y0(),sue=Ur(),uue=4294967295>>>0,oue=4294967296,pu=new aue(8),lu=new nue(pu.buffer);function vue(r,e,t,i){var a,n,u;if(r===0){for(u=0;u<pu.length;u++)e[i]=0,i+=t;return e}for(n=(r&uue)>>>0,a=sue(r/oue),w0?(lu.setUint32(0,n,w0),lu.setUint32(4,a,w0)):(lu.setUint32(0,a,w0),lu.setUint32(4,n,w0)),u=0;u<pu.length;u++)e[i]=pu[u],i+=t;return e}YX.exports=vue});var KX=s((dZe,QX)=>{"use strict";var fue=D(),ZX=JX(),cue=$X();fue(ZX,"assign",cue);QX.exports=ZX});var tx=s((gZe,ex)=>{"use strict";var wf=Ye(),lue=cu(),pue=y0(),due=tt(),gue=qf().enum,mue=h0().enum,yue=bf().enum,E0=KX().assign,hue=gue(),que=mue(),rx=yue();function bue(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y;if(f=this._mode||"throw",o=this._submode||[f],p=this._ndims,m=o.length,i=33+p*16+m,v=this.__meta_dataview__,v&&v.byteLength===i)return v;for(v=new pue(new lue(i)),e=new due(v.buffer),n=this._shape,u=this._strides,a=this._dtype,r=this._bytesPerElement,c=0,v.setInt8(c,wf?1:0),c+=1,v.setInt16(c,hue[a],wf),c+=2,E0(p,e,1,c),l=p*8,c+=8,y=0;y<p;y++)E0(n[y],e,1,c),E0(u[y]*r,e,1,c+l),c+=8;for(c+=l,E0(this._offset*r,e,1,c),c+=8,v.setInt8(c,que[this._order]),c+=1,v.setInt8(c,rx[f]),c+=1,E0(m,e,1,c),c+=8,y=0;y<m;y++)v.setInt8(c,rx[o[y]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,v.setInt32(c,t,wf),this.__meta_dataview__=v,v}ex.exports=bue});var ax=s((mZe,ix)=>{"use strict";var wue=GW(),Ei=D(),$e=br(),Eue=HW(),Sue=h3(),Nue=cf(),Oue=K1(),_ue=ZW(),Aue=KW(),Tue=oH(),Iue=fH(),Rue=lH(),Pue=dH(),Lue=mH(),Fue=hH(),jue=bH(),Mue=DH(),Bue=XX(),kue=tx();function ie(r,e,t,i,a,n){var u,o,v,f,c;if(!(this instanceof ie))return new ie(r,e,t,i,a,n);for(f=1,c=0;c<t.length;c++)f*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*f:o=null,this._byteLength=o,this._bytesPerElement=Eue(r),this._buffer=e,this._dtype=r,this._length=f,this._ndims=t.length,this._offset=a,this._order=n,this._shape=t,this._strides=i,this._accessors=Oue(e.get&&e.set),this._iterationOrder=Sue(i),u=Tue(f,t,i,a,this._iterationOrder),v=Nue(i),this._flags={ROW_MAJOR_CONTIGUOUS:Aue(v,u),COLUMN_MAJOR_CONTIGUOUS:_ue(v,u),READONLY:!1},this.__meta_dataview__=null,this}Ei(ie,"name","ndarray");$e(ie.prototype,"byteLength",function(){return this._byteLength});$e(ie.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});$e(ie.prototype,"data",function(){return this._buffer});$e(ie.prototype,"dtype",function(){return this._dtype});$e(ie.prototype,"flags",function(){return Iue(this._flags)});$e(ie.prototype,"length",function(){return this._length});$e(ie.prototype,"ndims",function(){return this._ndims});$e(ie.prototype,"offset",function(){return this._offset});$e(ie.prototype,"order",function(){return this._order});$e(ie.prototype,"shape",function(){return this._shape.slice()});$e(ie.prototype,"strides",function(){return this._strides.slice()});Ei(ie.prototype,"get",Fue);Ei(ie.prototype,"iget",Rue);Ei(ie.prototype,"set",Lue);Ei(ie.prototype,"iset",Pue);Ei(ie.prototype,"toString",Mue);Ei(ie.prototype,"toJSON",jue);Ei(ie.prototype,"__array_meta_dataview__",wue()?Bue:kue);ix.exports=ie});var S0=s((yZe,nx)=>{"use strict";var Cue=ax();nx.exports=Cue});var ux=s((hZe,sx)=>{"use strict";var Vue=ys(),Gue=lt();function Uue(r,e,t,i,a,n,u,o){var v,f;for(v=0,r[v]="ndarray",v+=1,r[v]="shape",v+=1,f=0;f<i.length;f++)r[v]=i[f],v+=1;for(r[v]="strides",v+=1,f=0;f<a.length;f++)r[v]=a[f],v+=1;return r[v]="offset",v+=1,r[v]=n,v+=1,r[v]="order",v+=1,r[v]=u,v+=1,r[v]="dtype",v+=1,r[v]=t,v+=1,r[v]="length",v+=1,r[v]=i.length===0?1:Gue(i),v+=1,r[v]="capacity",v+=1,r[v]=e,v+=1,r[v]="data",o==="row"?[r]:Vue(r,[r.length,1],[1,1],0)}sx.exports=Uue});var vx=s((qZe,ox)=>{"use strict";var Due=ux();ox.exports=Due});var lx=s((bZe,cx)=>{"use strict";var zue=h0(),fx=zue(),Wue=fx.length;function Hue(r){var e;for(e=0;e<Wue;e++)if(r===fx[e])return!0;return!1}cx.exports=Hue});var dx=s((wZe,px)=>{"use strict";var Xue=lx();px.exports=Xue});var mx=s((EZe,gx)=>{"use strict";function xue(r){return r.toLowerCase()}gx.exports=xue});var la=s((SZe,yx)=>{"use strict";var Jue=mx();yx.exports=Jue});var qx=s((NZe,hx)=>{"use strict";var Yue=qa(),$ue=ra(),Zue=Ia(),Que=Ca();function Kue(r,e){var t,i,a,n;for(a=Que(r),Yue(r)?i=$ue(a):i=Zue(a),t=r.length,n=0;n<t;n++)if(i(r,n)===e)return!0;return!1}hx.exports=Kue});var wx=s((OZe,bx)=>{"use strict";var roe=Ve(),eoe=qa(),toe=ra(),ioe=Ca(),aoe=V();function noe(r){var e,t,i;if(!roe(r))throw new TypeError(aoe("invalid argument. Must provide an array-like object. Value: `%s`.",r));return i=ioe(r),eoe(r)&&(e=toe(i)),t=r.length,e===void 0?a:n;function a(u){var o;for(o=0;o<t;o++)if(r[o]===u)return!0;return!1}function n(u){var o;for(o=0;o<t;o++)if(e(r,o)===u)return!0;return!1}}bx.exports=noe});var Nx=s((_Ze,Sx)=>{"use strict";var soe=D(),Ex=qx(),uoe=wx();soe(Ex,"factory",uoe);Sx.exports=Ex});var Tx=s((AZe,Ax)=>{"use strict";var du=be().isPrimitive,ooe=ye().isPrimitive,Ox=Sr().isPrimitive,voe=dx(),foe=Q2(),Ef=la(),coe=Nx().factory,loe=h0(),poe=S0(),doe=lt(),dt=V(),goe=pv(),moe=$0(),yoe=loe(),_x=["string","number","complex","boolean","date","any"],hoe=["ndarray","shape","strides","offset","order","dtype","length","capacity","data"],qoe=hoe.length,boe=5,woe=coe(_x);function Eoe(){return{ndims:0,shape:null,strides:null,offset:-1,order:"",dtype:"",length:-1,capacity:-1,ndarray:null,headerLength:0,rawBuffer:null}}function Soe(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!Ox(i));a++){if(!du(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "shape" field must only contain nonnegative integers. Value: "%s".',i));t.push(i)}return t}function Noe(r,e){var t,i,a;for(t=[],a=e;a<r.length&&(i=r[a],!!Ox(i));a++){if(!ooe(i))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "strides" field must only contain integers. Value: "%s".',i));t.push(i)}return t}function Ooe(r,e){var t,i,a;if(r[0]!=="ndarray")throw new TypeError(dt('invalid argument. The first field in a range representing an ndarray must equal the string "ndarray", thus marking the beginning of an ndarray range. Value: "%s".',r[0]));for(a=1;a<r.length;a++)if(i=Ef(r[a]),i==="shape")e.shape=Soe(r,a+1),e.ndims=e.shape.length,a+=e.ndims;else if(i==="strides")e.strides=Noe(r,a+1),a+=e.strides.length;else if(i==="offset"){if(a+=1,t=r[a],!du(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "offset" field must be a nonnegative integer. Value: "%s".',t));e.offset=t}else if(i==="order"){if(a+=1,t=Ef(r[a]),!voe(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "order" field must be one of the following: "%s". Value: "%s".',yoe.join('", "'),t));e.order=t}else if(i==="dtype"){if(a+=1,t=Ef(r[a]),!woe(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "dtype" field must be one of the following: "%s". Value: "%s".',_x.join('", "'),t));e.dtype=t}else if(i==="length"){if(a+=1,t=r[a],!du(t))throw new TypeError('invalid argument. Range representing an ndarray is invalid. "length" field must be a nonnegative integer.');e.length=t}else if(i==="capacity"){if(a+=1,t=r[a],!du(t))throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. "capacity" field must be a nonnegative integer. Value: "%s".',t));e.capacity=t}else if(i==="data"){a+=1;break}else throw new TypeError(dt('invalid argument. Range presenting an ndarray is invalid. Unrecognized ndarray field. Value: "%s".',i));return e}function _oe(r,e){return qoe+r+e+boe}function Aoe(r){var e,t;if(e=r.ndims,r.shape===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "shape" field.');if(r.strides===null)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "strides" field.');if(e>0&&r.strides.length!==e)throw new TypeError(dt("invalid argument. Range representing an ndarray is invalid. Number of strides does not match the number of dimensions. Number of dimensions: %d. Number of strides: %d.",e,r.strides.length));if(e===0&&(r.strides.length!==1||r.strides[0]!==0))throw new TypeError("invalid argument. Range representing an ndarray is invalid. A zero-dimensional ndarray must have a single stride equal to 0.");if(r.offset===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "offset" field.');if(r.order==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "order" field.');if(r.dtype==="")throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "dtype" field.');if(r.length===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "length" field.');if(t=doe(r.shape),t!==r.length)throw new TypeError(dt('invalid argument. Range representing an ndarray is invalid. The "length" field is not consistent with the "shape" field. Expected length: "%s". Computed length: "%s".',r.length,t));if(r.capacity===-1)throw new TypeError('invalid argument. Range representing an ndarray is invalid. Missing "capacity" field.');if(t>0&&!foe(r.capacity,r.shape,r.strides,r.offset))throw new TypeError('invalid argument. Range representing an ndarray is invalid. The "capacity" field is incompatible with the specified ndarray meta data. Ensure that the "offset" field is valid with regard to the "strides" field and that the data buffer has enough elements to satisfy the desired ndarray shape.');return r}function Toe(r){var e;if(!goe(r))throw new TypeError("invalid argument. A range representing an ndarray must be either a single row or a single column.");return e=Eoe(),e.rawBuffer=moe(r),e=Ooe(e.rawBuffer,e),e=Aoe(e),e.headerLength=_oe(e.ndims,e.strides.length),e.ndarray=new poe("generic",e.rawBuffer,e.shape,e.strides,e.offset+e.headerLength,e.order),e}Ax.exports=Toe});var Rx=s((TZe,Ix)=>{"use strict";var Ioe=Tx();Ix.exports=Ioe});var Lx=s((IZe,Px)=>{"use strict";var Roe=typeof String.prototype.trim<"u";Px.exports=Roe});var Sf=s((RZe,Fx)=>{"use strict";var Poe=String.prototype.trim;Fx.exports=Poe});var kx=s((PZe,Bx)=>{"use strict";var jx=Sf(),Loe=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Mx="\u180E";function Foe(){return jx.call(Loe)===""&&jx.call(Mx)===Mx}Bx.exports=Foe});var Vx=s((LZe,Cx)=>{"use strict";var joe=bi(),Moe=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Boe(r){return joe(r,Moe,"$1")}Cx.exports=Boe});var Ux=s((FZe,Gx)=>{"use strict";var koe=Sf();function Coe(r){return koe.call(r)}Gx.exports=Coe});var Si=s((jZe,Dx)=>{"use strict";var Voe=Lx(),Goe=kx(),Uoe=Vx(),Doe=Ux(),Nf;Voe&&Goe()?Nf=Doe:Nf=Uoe;Dx.exports=Nf});var Wx=s((MZe,zx)=>{"use strict";function zoe(r){return r===null}zx.exports=zoe});var Of=s((BZe,Hx)=>{"use strict";var Woe=Wx();Hx.exports=Woe});var xx=s((kZe,Xx)=>{"use strict";function Hoe(r){return r===void 0}Xx.exports=Hoe});var _f=s((CZe,Jx)=>{"use strict";var Xoe=xx();Jx.exports=Xoe});var $x=s((VZe,Yx)=>{"use strict";var Tf=D(),If=br(),xoe=ye().isPrimitive,Joe=Of(),Yoe=_f(),gu=V();function Af(r){return xoe(r)||Joe(r)||Yoe(r)}function At(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof At))return new At(e,t,i);if(!Af(e))throw new TypeError(gu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!Af(t))throw new TypeError(gu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(Af(i)){if(i===0)throw new RangeError(gu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(gu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}Tf(At,"name","Slice");If(At.prototype,"start",function(){return this._start});If(At.prototype,"stop",function(){return this._stop});If(At.prototype,"step",function(){return this._step});Tf(At.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});Tf(At.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});Yx.exports=At});var N0=s((GZe,Zx)=>{"use strict";var $oe=$x();Zx.exports=$oe});var Kx=s((UZe,Qx)=>{"use strict";var Zoe=typeof Object.defineProperty=="function"?Object.defineProperty:null;Qx.exports=Zoe});var eJ=s((DZe,rJ)=>{"use strict";var Qoe=Kx();function Koe(){try{return Qoe({},"x",{}),!0}catch{return!1}}rJ.exports=Koe});var iJ=s((zZe,tJ)=>{"use strict";var r1e=Object.defineProperty;tJ.exports=r1e});var Rf=s((WZe,aJ)=>{"use strict";function e1e(r){return typeof r=="number"}aJ.exports=e1e});var Pf=s((HZe,sJ)=>{"use strict";function t1e(r){return r[0]==="-"}function nJ(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function i1e(r,e,t){var i=!1,a=e-r.length;return a<0||(t1e(r)&&(i=!0,r=r.substr(1)),r=t?r+nJ(a):nJ(a)+r,i&&(r="-"+r)),r}sJ.exports=i1e});var fJ=s((XZe,vJ)=>{"use strict";var a1e=Rf(),uJ=Pf(),n1e=String.prototype.toLowerCase,oJ=String.prototype.toUpperCase;function s1e(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!a1e(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=uJ(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=uJ(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===oJ.call(r.specifier)?oJ.call(t):n1e.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}vJ.exports=s1e});var lJ=s((xZe,cJ)=>{"use strict";function u1e(r){return typeof r=="string"}cJ.exports=u1e});var gJ=s((JZe,dJ)=>{"use strict";var o1e=Math.abs,v1e=String.prototype.toLowerCase,pJ=String.prototype.toUpperCase,pa=String.prototype.replace,f1e=/e\+(\d)$/,c1e=/e-(\d)$/,l1e=/^(\d+)$/,p1e=/^(\d+)e/,d1e=/\.0$/,g1e=/\.0*e/,m1e=/(\..*[^0])0*e/;function y1e(r,e){var t,i;switch(e.specifier){case"e":case"E":i=r.toExponential(e.precision);break;case"f":case"F":i=r.toFixed(e.precision);break;case"g":case"G":o1e(r)<1e-4?(t=e.precision,t>0&&(t-=1),i=r.toExponential(t)):i=r.toPrecision(e.precision),e.alternate||(i=pa.call(i,m1e,"$1e"),i=pa.call(i,g1e,"e"),i=pa.call(i,d1e,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=pa.call(i,f1e,"e+0$1"),i=pa.call(i,c1e,"e-0$1"),e.alternate&&(i=pa.call(i,l1e,"$1."),i=pa.call(i,p1e,"$1.e")),r>=0&&e.sign&&(i=e.sign+i),i=e.specifier===pJ.call(e.specifier)?pJ.call(i):v1e.call(i),i}dJ.exports=y1e});var hJ=s((YZe,yJ)=>{"use strict";function mJ(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function h1e(r,e,t){var i=e-r.length;return i<0||(r=t?r+mJ(i):mJ(i)+r),r}yJ.exports=h1e});var bJ=s(($Ze,qJ)=>{"use strict";var q1e=fJ(),b1e=lJ(),w1e=Rf(),E1e=gJ(),S1e=hJ(),N1e=Pf(),O1e=String.fromCharCode,_1e=Array.isArray;function mu(r){return r!==r}function A1e(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T1e(r){var e,t,i,a,n,u,o,v,f,c;if(!_1e(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],b1e(i))u+=i;else{if(e=i.precision!==void 0,i=A1e(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,c=0;c<t.length;c++)switch(a=t.charAt(c),a){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,mu(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,mu(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=q1e(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!mu(i.arg)){if(n=parseInt(i.arg,10),n<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=mu(n)?String(i.arg):O1e(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":if(e||(i.precision=6),v=parseFloat(i.arg),!isFinite(v)){if(!w1e(i.arg))throw new Error("invalid floating-point number. Value: "+u);v=i.arg,i.padZeros=!1}i.arg=E1e(v,i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=N1e(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S1e(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}qJ.exports=T1e});var EJ=s((ZZe,wJ)=>{"use strict";var I1e=bJ();wJ.exports=I1e});var NJ=s((QZe,SJ)=>{"use strict";var yu=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R1e(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function P1e(r){var e,t,i,a;for(t=[],a=0,i=yu.exec(r);i;)e=r.slice(a,yu.lastIndex-i[0].length),e.length&&t.push(e),i[6]==="%"?t.push("%"):t.push(R1e(i)),a=yu.lastIndex,i=yu.exec(r);return e=r.slice(a),e.length&&t.push(e),t}SJ.exports=P1e});var _J=s((KZe,OJ)=>{"use strict";var L1e=NJ();OJ.exports=L1e});var TJ=s((rQe,AJ)=>{"use strict";function F1e(r){return typeof r=="string"}AJ.exports=F1e});var PJ=s((eQe,RJ)=>{"use strict";var j1e=EJ(),M1e=_J(),B1e=TJ();function IJ(r){var e,t;if(!B1e(r))throw new TypeError(IJ("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[M1e(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return j1e.apply(null,e)}RJ.exports=IJ});var hu=s((tQe,LJ)=>{"use strict";var k1e=PJ();LJ.exports=k1e});var CJ=s((iQe,kJ)=>{"use strict";var FJ=hu(),tn=Object.prototype,jJ=tn.toString,MJ=tn.__defineGetter__,BJ=tn.__defineSetter__,C1e=tn.__lookupGetter__,V1e=tn.__lookupSetter__;function G1e(r,e,t){var i,a,n,u;if(typeof r!="object"||r===null||jJ.call(r)==="[object Array]")throw new TypeError(FJ("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||jJ.call(t)==="[object Array]")throw new TypeError(FJ("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(a="value"in t,a&&(C1e.call(r,e)||V1e.call(r,e)?(i=r.__proto__,r.__proto__=tn,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),n="get"in t,u="set"in t,a&&(n||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&MJ&&MJ.call(r,e,t.get),u&&BJ&&BJ.call(r,e,t.set),r}kJ.exports=G1e});var Ff=s((aQe,VJ)=>{"use strict";var U1e=eJ(),D1e=iJ(),z1e=CJ(),Lf;U1e()?Lf=D1e:Lf=z1e;VJ.exports=Lf});var UJ=s((nQe,GJ)=>{"use strict";var W1e=Ff();function H1e(r,e,t){W1e(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}GJ.exports=H1e});var an=s((sQe,DJ)=>{"use strict";var X1e=UJ();DJ.exports=X1e});var WJ=s((uQe,zJ)=>{"use strict";var x1e=Ff();function J1e(r,e,t){x1e(r,e,{configurable:!1,enumerable:!1,get:t})}zJ.exports=J1e});var XJ=s((oQe,HJ)=>{"use strict";var Y1e=WJ();HJ.exports=Y1e});var jf=s((vQe,xJ)=>{"use strict";function $1e(r){return typeof r=="number"}xJ.exports=$1e});var YJ=s((fQe,JJ)=>{"use strict";function Z1e(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}JJ.exports=Z1e});var ZJ=s((cQe,$J)=>{"use strict";var Q1e=YJ();$J.exports=Q1e});var KJ=s((lQe,QJ)=>{"use strict";var K1e=ZJ(),r2e=K1e();function e2e(){return r2e&&typeof Symbol.toStringTag=="symbol"}QJ.exports=e2e});var Mf=s((pQe,rY)=>{"use strict";var t2e=KJ();rY.exports=t2e});var Bf=s((dQe,eY)=>{"use strict";var i2e=Object.prototype.toString;eY.exports=i2e});var iY=s((gQe,tY)=>{"use strict";var a2e=Bf();function n2e(r){return a2e.call(r)}tY.exports=n2e});var nY=s((mQe,aY)=>{"use strict";var s2e=Object.prototype.hasOwnProperty;function u2e(r,e){return r==null?!1:s2e.call(r,e)}aY.exports=u2e});var uY=s((yQe,sY)=>{"use strict";var o2e=nY();sY.exports=o2e});var vY=s((hQe,oY)=>{"use strict";var v2e=typeof Symbol=="function"?Symbol:void 0;oY.exports=v2e});var cY=s((qQe,fY)=>{"use strict";var f2e=vY();fY.exports=f2e});var dY=s((bQe,pY)=>{"use strict";var lY=cY(),c2e=typeof lY=="function"?lY.toStringTag:"";pY.exports=c2e});var mY=s((wQe,gY)=>{"use strict";var l2e=uY(),O0=dY(),kf=Bf();function p2e(r){var e,t,i;if(r==null)return kf.call(r);t=r[O0],e=l2e(r,O0);try{r[O0]=void 0}catch{return kf.call(r)}return i=kf.call(r),e?r[O0]=t:delete r[O0],i}gY.exports=p2e});var qu=s((EQe,yY)=>{"use strict";var d2e=Mf(),g2e=iY(),m2e=mY(),Cf;d2e()?Cf=m2e:Cf=g2e;yY.exports=Cf});var qY=s((SQe,hY)=>{"use strict";hY.exports=Number});var bu=s((NQe,bY)=>{"use strict";var y2e=qY();bY.exports=y2e});var EY=s((OQe,wY)=>{"use strict";var h2e=bu(),q2e=h2e.prototype.toString;wY.exports=q2e});var NY=s((_Qe,SY)=>{"use strict";var b2e=EY();function w2e(r){try{return b2e.call(r),!0}catch{return!1}}SY.exports=w2e});var Vf=s((AQe,OY)=>{"use strict";var E2e=Mf(),S2e=qu(),N2e=bu(),O2e=NY(),_2e=E2e();function A2e(r){return typeof r=="object"?r instanceof N2e?!0:_2e?O2e(r):S2e(r)==="[object Number]":!1}OY.exports=A2e});var AY=s((TQe,_Y)=>{"use strict";var T2e=jf(),I2e=Vf();function R2e(r){return T2e(r)||I2e(r)}_Y.exports=R2e});var Uf=s((IQe,IY)=>{"use strict";var TY=an(),Gf=AY(),P2e=jf(),L2e=Vf();TY(Gf,"isPrimitive",P2e);TY(Gf,"isObject",L2e);IY.exports=Gf});var PY=s((RQe,RY)=>{"use strict";var F2e=Number.POSITIVE_INFINITY;RY.exports=F2e});var FY=s((PQe,LY)=>{"use strict";var j2e=bu(),M2e=j2e.NEGATIVE_INFINITY;LY.exports=M2e});var MY=s((LQe,jY)=>{"use strict";var B2e=Math.floor;jY.exports=B2e});var kY=s((FQe,BY)=>{"use strict";var k2e=MY();BY.exports=k2e});var VY=s((jQe,CY)=>{"use strict";var C2e=kY();function V2e(r){return C2e(r)===r}CY.exports=V2e});var UY=s((MQe,GY)=>{"use strict";var G2e=VY();GY.exports=G2e});var Df=s((BQe,DY)=>{"use strict";var U2e=PY(),D2e=FY(),z2e=UY();function W2e(r){return r<U2e&&r>D2e&&z2e(r)}DY.exports=W2e});var zf=s((kQe,zY)=>{"use strict";var H2e=Uf().isPrimitive,X2e=Df();function x2e(r){return H2e(r)&&X2e(r)}zY.exports=x2e});var Wf=s((CQe,WY)=>{"use strict";var J2e=Uf().isObject,Y2e=Df();function $2e(r){return J2e(r)&&Y2e(r.valueOf())}WY.exports=$2e});var XY=s((VQe,HY)=>{"use strict";var Z2e=zf(),Q2e=Wf();function K2e(r){return Z2e(r)||Q2e(r)}HY.exports=K2e});var YY=s((GQe,JY)=>{"use strict";var xY=an(),Hf=XY(),rve=zf(),eve=Wf();xY(Hf,"isPrimitive",rve);xY(Hf,"isObject",eve);JY.exports=Hf});var ZY=s((UQe,$Y)=>{"use strict";function tve(r){return r===null}$Y.exports=tve});var KY=s((DQe,QY)=>{"use strict";var ive=ZY();QY.exports=ive});var e$=s((zQe,r$)=>{"use strict";function ave(r){return r===void 0}r$.exports=ave});var i$=s((WQe,t$)=>{"use strict";var nve=e$();t$.exports=nve});var n$=s((HQe,a$)=>{"use strict";var xf=an(),Jf=XJ(),sve=YY().isPrimitive,uve=KY(),ove=i$(),wu=hu();function Xf(r){return sve(r)||uve(r)||ove(r)}function Tt(){var r,e,t,i;if(r=arguments.length,r===0?(e=null,t=null,i=null):r===1?(e=null,t=arguments[0],i=null):r===2?(e=arguments[0],t=arguments[1],i=null):(e=arguments[0],t=arguments[1],i=arguments[2]),!(this instanceof Tt))return new Tt(e,t,i);if(!Xf(e))throw new TypeError(wu("invalid argument. First argument must be an integer, null, or undefined. Value: `%s`.",e));if(!Xf(t))throw new TypeError(wu("invalid argument. Second argument must be an integer, null, or undefined. Value: `%s`.",t));if(Xf(i)){if(i===0)throw new RangeError(wu("invalid argument. Third argument cannot be zero. Value: `%s`.",i))}else throw new TypeError(wu("invalid argument. Third argument must be an integer, null, or undefined. Value: `%s`.",i));return this._start=e===void 0?null:e,this._stop=t===void 0?null:t,this._step=i===void 0?null:i,this}xf(Tt,"name","Slice");Jf(Tt.prototype,"start",function(){return this._start});Jf(Tt.prototype,"stop",function(){return this._stop});Jf(Tt.prototype,"step",function(){return this._step});xf(Tt.prototype,"toString",function(){return"Slice("+this._start+","+this._stop+","+this.step+")"});xf(Tt.prototype,"toJSON",function(){return{type:"Slice",data:[this._start,this._stop,this._step]}});a$.exports=Tt});var u$=s((XQe,s$)=>{"use strict";var vve=n$();s$.exports=vve});var Yf=s((xQe,o$)=>{"use strict";function fve(){return/^\s*function\s*([^(]*)/i}o$.exports=fve});var f$=s((JQe,v$)=>{"use strict";var cve=Yf(),lve=cve();v$.exports=lve});var p$=s((YQe,l$)=>{"use strict";var pve=an(),c$=Yf(),dve=f$();pve(c$,"REGEXP",dve);l$.exports=c$});var g$=s(($Qe,d$)=>{"use strict";var gve=qu(),$f;function mve(r){return gve(r)==="[object Array]"}Array.isArray?$f=Array.isArray:$f=mve;d$.exports=$f});var y$=s((ZQe,m$)=>{"use strict";var yve=g$();m$.exports=yve});var q$=s((QQe,h$)=>{"use strict";var hve=y$(),qve=hu();function bve(r){if(typeof r!="function")throw new TypeError(qve("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,a;if(!hve(t)||(i=t.length,i===0))return!1;for(a=0;a<i;a++)if(r(t[a])===!1)return!1;return!0}}h$.exports=bve});var w$=s((KQe,b$)=>{"use strict";var wve=q$();b$.exports=wve});var S$=s((rKe,E$)=>{"use strict";function Eve(r){return r!==null&&typeof r=="object"}E$.exports=Eve});var O$=s((eKe,N$)=>{"use strict";var Sve=an(),Nve=w$(),Zf=S$(),Ove=Nve(Zf);Sve(Zf,"isObjectLikeArray",Ove);N$.exports=Zf});var A$=s((tKe,_$)=>{"use strict";var _ve=O$();function Ave(r){return _ve(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}_$.exports=Ave});var I$=s((iKe,T$)=>{"use strict";var Tve=A$();T$.exports=Tve});var P$=s((aKe,R$)=>{"use strict";var Ive=qu(),Rve=p$().REGEXP,Pve=I$();function Lve(r){var e,t,i;if(t=Ive(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Rve.exec(i.toString()),e)return e[1]}return Pve(r)?"Buffer":t}R$.exports=Lve});var F$=s((nKe,L$)=>{"use strict";var Fve=P$();L$.exports=Fve});var M$=s((sKe,j$)=>{"use strict";var jve=u$(),Mve=F$();function Bve(r){return r instanceof jve||Mve(r)==="Slice"}j$.exports=Bve});var k$=s((uKe,B$)=>{"use strict";var kve=M$();B$.exports=kve});var G$=s((oKe,V$)=>{"use strict";var Qf=D(),C$=br(),Cve=ye().isPrimitive,Vve=Of(),Gve=_f(),Uve=k$(),Dve=V();function zve(r){return Cve(r)||Vve(r)||Gve(r)||Uve(r)}function Te(){var r,e,t,i,a;if(r=arguments.length,!(this instanceof Te)){if(r===1)return new Te(arguments[0]);if(r===2)return new Te(arguments[0],arguments[1]);if(r===3)return new Te(arguments[0],arguments[1],arguments[2]);if(r===4)return new Te(arguments[0],arguments[1],arguments[2],arguments[3]);if(r===5)return new Te(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);for(t=[],a=0;a<r;a++)t.push(arguments[a]);return e=Object.create(Te.prototype),Te.apply(e,t)}for(this._data=[],a=0;a<r;a++){if(i=arguments[a],!zve(i))throw new TypeError(Dve("invalid argument. Provided arguments must be either a Slice, integer, null, or undefined. Argument: `%d`. Value: `%s`.",a,i));this._data.push(i===void 0?null:i)}return this}Qf(Te,"name","MultiSlice");C$(Te.prototype,"ndims",function(){return this._data.length});C$(Te.prototype,"data",function(){return this._data.slice()});Qf(Te.prototype,"toString",function(){var e,t,i;for(e=this._data,t=[],i=0;i<e.length;i++)t.push(String(e[i]));return"MultiSlice("+t.join(",")+")"});Qf(Te.prototype,"toJSON",function(){var e,t,i,a;for(e=this._data,t={type:"MultiSlice",data:[]},a=0;a<e.length;a++)i=e[a],t.data.push(i&&typeof i.toJSON=="function"?i.toJSON():i);return t});V$.exports=Te});var Eu=s((vKe,U$)=>{"use strict";var Wve=G$();U$.exports=Wve});var z$=s((fKe,D$)=>{"use strict";var Hve=/(?:\s*-\s*)(?=\d+)(\d+)$/;D$.exports=Hve});var H$=s((cKe,W$)=>{"use strict";var Xve=/(?:\s*\/\s*)(?=\d*\.?\d+)(\d*\.?\d+)$/;W$.exports=Xve});var J$=s((lKe,x$)=>{"use strict";var X$=Ur(),xve=z$(),Jve=H$();function Yve(r,e,t,i){var a;if(r==="end")return e;if(a=r.match(xve),a){if(r=e-parseInt(a[1],10),r<0){if(i)return-2;r=0}return r}return a=r.match(Jve),a?(r=parseFloat(a[1]),r<1?i?-2:-1:t&&e>0&&r!==1?X$((e-1)/r):X$(e/r)):-1}x$.exports=Yve});var $$=s((pKe,Y$)=>{"use strict";var $ve=/\s*:\s*/;Y$.exports=$ve});var Q$=s((dKe,Z$)=>{"use strict";var Zve=/^[-+]?[0-9]+$/;Z$.exports=Zve});var rZ=s((gKe,K$)=>{"use strict";var Qve=/^end/;K$.exports=Qve});var tZ=s((mKe,eZ)=>{"use strict";function Kve(){return{code:"ERR_SLICE_INVALID_SUBSEQUENCE"}}eZ.exports=Kve});var aZ=s((yKe,iZ)=>{"use strict";function r3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}iZ.exports=r3e});var sZ=s((hKe,nZ)=>{"use strict";function e3e(){return{code:"ERR_SLICE_INVALID_INCREMENT"}}nZ.exports=e3e});var cZ=s((qKe,fZ)=>{"use strict";var uZ=N0(),t3e=Si(),oZ=J$(),i3e=$$(),Kf=Q$(),vZ=rZ(),nn=tZ(),da=aZ(),a3e=sZ();function n3e(r,e,t){var i,a,n;if(i=t3e(r).split(i3e),a=i.length,a<2||a>3)return nn();if(a===3)if(n=i[2],n.length===0)i[2]=1;else{if(Kf.test(n)===!1)return nn();if(n=parseInt(n,10),n===0)return a3e();i[2]=n}else i.push(1);if(n=i[0],n.length===0)i[2]<0&&e>0?i[0]=e-1:i[0]=0;else if(vZ.test(n)){if(n=oZ(n,e,i[2]<0,t),n<0)return n===-2?da():nn();i[2]<0&&n>=e&&(n-=1),i[0]=n}else if(Kf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0){if(t)return da();n=0}}else if(n>=e){if(t)return da();i[2]<0?n=e-1:n=e}i[0]=n}else return nn();if(n=i[1],n.length===0)i[2]<0?i[1]=null:i[1]=e;else if(vZ.test(n)){if(n=oZ(n,e,i[2]<0,t),n<0)return n===-2?da():nn();i[1]=n}else if(Kf.test(n)){if(n=parseInt(n,10),n<0){if(n=e+n,n<0)if(i[2]>0){if(t)return da();n=0}else{if(t&&n<-1)return da();n=null}}else if(n>e){if(t)return da();n=e}i[1]=n}else return nn();return e===0?new uZ(0,0,i[2]):new uZ(i[0],i[1],i[2])}fZ.exports=n3e});var pZ=s((bKe,lZ)=>{"use strict";var s3e=cZ();lZ.exports=s3e});var gZ=s((wKe,dZ)=>{"use strict";function u3e(){return{code:"ERR_SLICE_INVALID_ELLIPSIS"}}dZ.exports=u3e});var yZ=s((EKe,mZ)=>{"use strict";function o3e(){return{code:"ERR_SLICE_INSUFFICIENT_DIMENSIONS"}}mZ.exports=o3e});var qZ=s((SKe,hZ)=>{"use strict";function v3e(){return{code:"ERR_SLICE_TOO_MANY_DIMENSIONS"}}hZ.exports=v3e});var wZ=s((NKe,bZ)=>{"use strict";function f3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}bZ.exports=f3e});var SZ=s((OKe,EZ)=>{"use strict";var c3e=/\s*,\s*/;EZ.exports=c3e});var OZ=s((_Ke,NZ)=>{"use strict";var l3e=/^[-+]?[0-9]+$/;NZ.exports=l3e});var TZ=s((AKe,AZ)=>{"use strict";var p3e=Si(),d3e=N0(),g3e=Eu(),m3e=pZ(),y3e=gZ(),h3e=yZ(),q3e=qZ(),_Z=wZ(),b3e=SZ(),w3e=OZ();function E3e(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(o=e.length,i=p3e(r).split(b3e),v=i.length,n=!1,a=[],l=0,c=0;c<v;c++){if(f=i[c],f==="..."){if(n)return y3e();for(n=!0,p=0;p<o-v+1;p++)a.push(new d3e(0,e[l],1)),l+=1;continue}if(u=e[l],w3e.test(f)){if(f=parseInt(f,10),t){if(f<0){if(u+f<0)return _Z()}else if(f>=u)return _Z()}l+=1}else{if(f=m3e(f,u,t),f.code)return f;l+=1}a.push(f)}return a.length!==o?a.length<o?h3e():q3e():g3e.apply(null,a)}AZ.exports=E3e});var RZ=s((TKe,IZ)=>{"use strict";var S3e=TZ();IZ.exports=S3e});var FZ=s((IKe,LZ)=>{"use strict";var N3e=Jr().isPrimitive,PZ=RZ(),O3e=V();function _3e(r,e,t){var i;if(!N3e(r))throw new TypeError(O3e('invalid argument. A slice indexing expression must be a string. Value: "%s".',r));if(i=PZ(r,e,!0),i.code){if(i.code==="ERR_SLICE_INVALID_SUBSEQUENCE")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence.");if(i.code==="ERR_SLICE_INVALID_INCREMENT")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. The increment must be a non-zero integer value.");if(i.code==="ERR_SLICE_TOO_MANY_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression includes excess dimensions.");if(i.code==="ERR_SLICE_INSUFFICIENT_DIMENSIONS")throw new TypeError("invalid argument. The provided slice indexing expression has too few dimensions.");if(i.code==="ERR_SLICE_INVALID_ELLIPSIS")throw new TypeError("invalid argument. The provided slice indexing expression is not a valid subsequence. A subsequence must only contain at most one ellipsis.");if(i.code==="ERR_SLICE_OUT_OF_BOUNDS"){if(t)throw new RangeError("invalid argument. The provided slice indexing expression resolves to a slice exceeding index bounds.");i=PZ(r,e,!1)}}return i}LZ.exports=_3e});var MZ=s((RKe,jZ)=>{"use strict";var A3e=FZ();jZ.exports=A3e});var kZ=s((PKe,BZ)=>{"use strict";function T3e(r){var e,t,i,a;for(e=r.length,t=[],a=0;a<e;a++)t.push(0);for(i=1,a=e-1;a>=0;a--)t[a]=i,i*=r[a];return t}function I3e(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function R3e(r,e){return e==="column-major"?I3e(r):T3e(r)}BZ.exports=R3e});var VZ=s((LKe,CZ)=>{"use strict";function P3e(r,e){var t,i,a;for(t=r.length,i=1,a=t-1;a>=0;a--)e[a]=i,i*=r[a];return e}function L3e(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function F3e(r,e,t){return e==="column-major"?L3e(r,t):P3e(r,t)}CZ.exports=F3e});var Su=s((FKe,UZ)=>{"use strict";var j3e=D(),GZ=kZ(),M3e=VZ();j3e(GZ,"assign",M3e);UZ.exports=GZ});var zZ=s((jKe,DZ)=>{"use strict";function B3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}DZ.exports=B3e});var HZ=s((MKe,WZ)=>{"use strict";var k3e=N0(),_0=zZ();function C3e(r,e,t){var i,a,n;if(i=r.start,a=r.stop,n=r.step,n===null&&(n=1),i===null)n>0?i=0:i=e-1;else if(i<0){if(i=e+i,i<0){if(t)return _0();i=0}}else if(i>=e){if(t)return _0();n<0?i=e-1:i=e}if(a===null)n>0?a=e:a=null;else if(a<0){if(a=e+a,a<0)if(n>0){if(t)return _0();a=0}else{if(t&&a<-1)return _0();a=null}}else if(a>e){if(t)return _0();a=e}return new k3e(i,a,n)}WZ.exports=C3e});var xZ=s((BKe,XZ)=>{"use strict";var V3e=HZ();XZ.exports=V3e});var YZ=s((kKe,JZ)=>{"use strict";function G3e(){return{code:"ERR_SLICE_OUT_OF_BOUNDS"}}JZ.exports=G3e});var QZ=s((CKe,ZZ)=>{"use strict";var U3e=Eu(),A0=N0(),D3e=xZ(),$Z=YZ();function z3e(r,e,t){return r===null?new A0(0,e,1):typeof r=="number"?r>=e?t?$Z():new A0(e,e,1):r<0?(r=e+r,r<0?t?$Z():new A0(0,0,1):new A0(r,r+1,1)):new A0(r,r+1,1):D3e(r,e,t)}function W3e(r,e,t){var i,a,n,u;for(i=r.data,a=[],u=0;u<i.length;u++){if(n=z3e(i[u],e[u],t),n.code!==void 0)return n;a.push(n)}return U3e.apply(null,a)}ZZ.exports=W3e});var rQ=s((VKe,KZ)=>{"use strict";var H3e=QZ();KZ.exports=H3e});var tQ=s((GKe,eQ)=>{"use strict";function X3e(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)typeof e[i]!="number"&&t.push(i);return t}eQ.exports=X3e});var aQ=s((UKe,iQ)=>{"use strict";var x3e=tQ();iQ.exports=x3e});var sQ=s((DKe,nQ)=>{"use strict";var J3e=Ka();function Y3e(r){var e,t,i;return t=r.start,i=r.stop,e=r.step,i===null&&(i=-1),e>0&&t>=i||e<0&&t<=i?0:J3e((i-t)/e)}nQ.exports=Y3e});var oQ=s((zKe,uQ)=>{"use strict";var $3e=sQ();uQ.exports=$3e});var fQ=s((WKe,vQ)=>{"use strict";var Z3e=oQ();function Q3e(r){var e,t,i;for(e=r.data,t=[],i=0;i<e.length;i++)t.push(Z3e(e[i]));return t}vQ.exports=Q3e});var lQ=s((HKe,cQ)=>{"use strict";var K3e=fQ();cQ.exports=K3e});var dQ=s((XKe,pQ)=>{"use strict";function rfe(r){return r.dtype}pQ.exports=rfe});var mQ=s((xKe,gQ)=>{"use strict";var efe=dQ();gQ.exports=efe});var hQ=s((JKe,yQ)=>{"use strict";var tfe=In();function ife(r,e){var t=r.shape;return e?tfe(t):t}yQ.exports=ife});var bQ=s((YKe,qQ)=>{"use strict";var afe=hQ();qQ.exports=afe});var EQ=s(($Ke,wQ)=>{"use strict";var nfe=Su(),sfe=In(),ufe="row-major";function ofe(r,e){var t,i,a;return a=r.strides,typeof a!="object"||a===null?(i=r.shape,i.length===0?[0]:(t=r.order,typeof t!="string"&&(t=ufe),nfe(i,t))):e?sfe(a):a}wQ.exports=ofe});var NQ=s((ZKe,SQ)=>{"use strict";var vfe=EQ();SQ.exports=vfe});var _Q=s((QKe,OQ)=>{"use strict";function ffe(r,e){var t,i,a;for(i=r.length,t=0,a=0;a<i;a++)e[a]<0&&(t-=e[a]*(r[a]-1));return t}OQ.exports=ffe});var Nu=s((KKe,AQ)=>{"use strict";var cfe=_Q();AQ.exports=cfe});var IQ=s((rrt,TQ)=>{"use strict";var lfe=Nu();function pfe(r){var e,t,i;return i=r.offset,typeof i=="number"?i:(t=r.shape,t.length===0||(e=r.strides,typeof e!="object"||e===null)?0:lfe(t,e))}TQ.exports=pfe});var PQ=s((ert,RQ)=>{"use strict";var dfe=IQ();RQ.exports=dfe});var FQ=s((trt,LQ)=>{"use strict";var gfe=cf(),r4="row-major",mfe="column-major";function yfe(r){var e,t;return t=r.order,typeof t=="string"?t:(e=r.strides,typeof e!="object"||e===null||(t=gfe(e),t===1||t===3)?r4:t===2?mfe:r.shape.length===0?r4:null)}LQ.exports=yfe});var MQ=s((irt,jQ)=>{"use strict";var hfe=FQ();jQ.exports=hfe});var kQ=s((art,BQ)=>{"use strict";function qfe(r){return r.data}BQ.exports=qfe});var VQ=s((nrt,CQ)=>{"use strict";var bfe=kQ();CQ.exports=bfe});var UQ=s((srt,GQ)=>{"use strict";function wfe(r,e,t){var i,a,n;for(i=r.data,a=t,n=0;n<i.length;n++)a+=e[n]*i[n].start;return a}GQ.exports=wfe});var zQ=s((urt,DQ)=>{"use strict";function Efe(r,e,t){var i,a,n,u;for(i=r.data,a=[],n=0;n<t.length;n++)u=t[n],a.push(e[u]*i[u].step);return a}DQ.exports=Efe});var HQ=s((ort,WQ)=>{"use strict";var Sfe=li(),Nfe=ge(),Ofe=et(),_fe=Ea(),Afe=oi(),Tfe=Na(),Ife=$i(),Rfe=me(),Pfe=tt(),Lfe=Sa(),Ffe=Fa(),jfe=ka(),Mfe={binary:Sfe,float64:Nfe,float32:Ofe,generic:Array,int16:_fe,int32:Afe,int8:Tfe,uint16:Ife,uint32:Rfe,uint8:Pfe,uint8c:Lfe,complex64:Ffe,complex128:jfe};WQ.exports=Mfe});var xQ=s((vrt,XQ)=>{"use strict";var Bfe=HQ();function kfe(r){return Bfe[r]||null}XQ.exports=kfe});var YQ=s((frt,JQ)=>{"use strict";var Cfe=xQ();JQ.exports=Cfe});var ZQ=s((crt,$Q)=>{"use strict";var Vfe=qr(),Gfe=li(),Ufe=Vfe(Gfe.allocUnsafe);$Q.exports=Ufe});var KQ=s((lrt,QQ)=>{"use strict";var Dfe=be(),zfe=V(),Wfe=li();function Hfe(r){if(!Dfe(r))throw new TypeError(zfe("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return Wfe.allocUnsafe(r)}QQ.exports=Hfe});var eK=s((prt,rK)=>{"use strict";var Xfe=be(),xfe=V(),Jfe=li();function Yfe(r){if(!Xfe(r))throw new TypeError(xfe("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new Jfe(r)}rK.exports=Yfe});var iK=s((drt,tK)=>{"use strict";var $fe=ZQ(),Zfe=KQ(),Qfe=eK(),e4;$fe?e4=Zfe:e4=Qfe;tK.exports=e4});var nK=s((grt,aK)=>{"use strict";function Kfe(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}aK.exports=Kfe});var uK=s((mrt,sK)=>{"use strict";var r4e=YQ(),e4e=iK(),t4e=nK();function i4e(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function a4e(r){return t4e(e4e(r))}function n4e(r,e){var t=r4e(r);return t?new t(e):null}function s4e(r,e){return r==="generic"?i4e(e):r==="binary"?a4e(e):n4e(r,e)}sK.exports=s4e});var t4=s((yrt,oK)=>{"use strict";var u4e=uK();oK.exports=u4e});var fK=s((hrt,vK)=>{"use strict";var o4e=t4(),v4e=si();function f4e(r,e,t,i,a){var n,u;return u=t.length,u===0?n=[0]:n=v4e(u),new r(e,o4e(e,0),t,n,0,i,{readonly:a})}vK.exports=f4e});var mK=s((qrt,gK)=>{"use strict";var cK=rQ(),c4e=aQ(),lK=lQ(),i4=q3(),l4e=si(),pK=lt(),p4e=mQ(),d4e=bQ(),g4e=NQ(),m4e=PQ(),y4e=MQ(),a4=VQ(),dK=V(),h4e=UQ(),q4e=zQ(),b4e=fK();function w4e(r,e,t,i){var a,n,u,o,v,f,c,l,p,m;if(u=p4e(r),o=d4e(r,!0),a=g4e(r,!0),n=m4e(r),v=y4e(r),c=o.length,e.ndims!==c)throw new RangeError(dK("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",o.join(","),e.ndims));if(l=r.constructor,c===0)return new l(u,a4(r),o,a,n,v,{readonly:!i});if(f=c4e(e),m=cK(e,o,!0),m.code){if(t)throw new RangeError(dK("invalid argument. Slice exceeds array bounds. Array shape: (%s).",o.join(",")));m=cK(e,o,!1),p=lK(m),pK(i4(p,f))>0&&(p=l4e(p.length))}else p=lK(m);return pK(p)===0?b4e(l,u,i4(p,f),v,!i):(n=h4e(m,a,n),p=i4(p,f),p.length===0?new l(u,a4(r),[],[0],n,v,{readonly:!i}):(a=q4e(m,a,f),new l(u,a4(r),p,a,n,v,{readonly:!i})))}gK.exports=w4e});var n4=s((brt,yK)=>{"use strict";var E4e=mK();yK.exports=E4e});var qK=s((wrt,hK)=>{"use strict";var S4e=S0();function N4e(r){return r instanceof S4e||r!==null&&typeof r=="object"&&typeof r.data=="object"&&typeof r.shape=="object"&&typeof r.strides=="object"&&typeof r.offset=="number"&&typeof r.order=="string"&&typeof r.ndims=="number"&&typeof r.dtype=="string"&&typeof r.length=="number"&&typeof r.flags=="object"&&typeof r.get=="function"&&typeof r.set=="function"}hK.exports=N4e});var wK=s((Ert,bK)=>{"use strict";var O4e=qK();bK.exports=O4e});var SK=s((Srt,EK)=>{"use strict";function _4e(r){var e=r.flags;return e&&e.READONLY===!0}EK.exports=_4e});var OK=s((Nrt,NK)=>{"use strict";var A4e=SK();NK.exports=A4e});var AK=s((Ort,_K)=>{"use strict";var T4e=be().isPrimitive,I4e=Ve(),s4=V();function R4e(r){var e,t,i,a;if(typeof r!="object"||r===null)throw new TypeError(s4("invalid argument. Must provide an ndarray. Value: `%s`.",r));if(t=r.shape,!I4e(t))throw new TypeError(s4("invalid argument. Must provide an ndarray. Value: `%s`.",r));for(e=[],a=0;a<t.length;a++){if(i=t[a],!T4e(i))throw new TypeError(s4("invalid argument. Must provide an ndarray. Value: `%s`.",r));e.push(i)}return e}_K.exports=R4e});var IK=s((_rt,TK)=>{"use strict";var P4e=AK();TK.exports=P4e});var u4=s((Art,RK)=>{"use strict";var L4e="row-major";function F4e(r,e,t,i,a){var n,u;for(n=r-1;n>i;n--)a[n]=t[n];for(n=i;n>=0&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n--);for(n-=1;n>=0;n--)a[n]=t[n];return a}function j4e(r,e,t,i,a){var n,u;for(n=0;n<i;n++)a[n]=t[n];for(n=i;n<r&&(u=(t[n]+1)%e[n],a[n]=u,!(u>0));n++);for(n+=1;n<r;n++)a[n]=t[n];return a}function M4e(r,e,t,i,a){var n=r.length;if(n===0)return null;if(i<0){if(i+=n,i<0)return null}else if(i>=n)return null;return e===L4e?F4e(n,r,t,i,a):j4e(n,r,t,i,a)}RK.exports=M4e});var LK=s((Trt,PK)=>{"use strict";var B4e=si(),k4e=u4();function C4e(r,e,t,i){return k4e(r,e,t,i,B4e(r.length))}PK.exports=C4e});var MK=s((Irt,jK)=>{"use strict";var V4e=D(),FK=LK(),G4e=u4();V4e(FK,"assign",G4e);jK.exports=FK});var kK=s((Rrt,BK)=>{"use strict";var He=Eu();function U4e(r){switch(r.length){case 0:return new He;case 1:return new He(r[0]);case 2:return new He(r[0],r[1]);case 3:return new He(r[0],r[1],r[2]);case 4:return new He(r[0],r[1],r[2],r[3]);case 5:return new He(r[0],r[1],r[2],r[3],r[4]);case 6:return new He(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new He(r[0],r[1],r[2],r[3],r[4],r[5],r[6]);case 8:return new He(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]);case 9:return new He(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8]);case 10:return new He(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);default:return He.apply(null,r)}}BK.exports=U4e});var VK=s((Prt,CK)=>{"use strict";var D4e=kK();CK.exports=D4e});var zK=s((Lrt,DK)=>{"use strict";var o4=D(),z4e=hr(),W4e=de().isPrimitive,H4e=wK(),X4e=OK(),x4e=vr(),GK=Mn(),J4e=si(),Y4e=IK(),$4e=lt(),Z4e=n4(),Q4e=MK().assign,K4e=VK(),Ou=V();function UK(r){var e,t,i,a,n,u,o,v,f,c,l;if(!H4e(r))throw new TypeError(Ou("invalid argument. First argument must be an ndarray. Value: `%s`.",r));if(a={writable:!1},arguments.length>1){if(e=arguments[1],!z4e(e))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(x4e(e,"readonly")){if(!W4e(e.readonly))throw new TypeError(Ou("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(a.writable=!e.readonly,a.writable&&X4e(r))throw new Error(Ou("invalid option. Cannot write to read-only array."))}}if(t=Y4e(r),i=t.length,i<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return c=$4e(t),c===0&&(u=!0),c/=t[i-1]*t[i-2],v=i-3,f=t[v],l=-1,o=J4e(i),o[i-1]=null,o[i-2]=null,n={},o4(n,"next",p),o4(n,"return",m),GK&&o4(n,GK,y),n;function p(){var g,d,h;return l+=1,u||l>=c?{done:!0}:(g=o.slice(),d=K4e(o),h=(o[v]+1)%f,o[v]=h,h===0&&(o=Q4e(t,"row-major",o,v-1,o)),{value:[g,Z4e(r,d,!0,a.writable)],done:!1})}function m(g){return u=!0,arguments.length?{value:g,done:!0}:{done:!0}}function y(){return UK(r,a)}}DK.exports=UK});var HK=s((Frt,WK)=>{"use strict";var r6e=zK();WK.exports=r6e});var xK=s((jrt,XK)=>{"use strict";var e6e=HK(),v4=ys(),t6e=Rn();function i6e(r){return[["[ ] ="],[""],[r.ndarray.get()]]}function a6e(r){var e=[["[ : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(v4(r.ndarray.data,[r.length,1],[r.strides[0],1],r.ndarray.offset))}function n6e(r){var e=[["[ :, : ] ="],[""]];return r.length===0?(e.push(["(empty)"]),e):e.concat(v4(r.ndarray.data,r.shape,r.strides,r.ndarray.offset))}function T0(r){return t6e("",r)}function s6e(r){var e,t,i,a,n;for(e=r.length,t=e-1,n=e-2,i="",a=0;a<e;a++)a<n?i+=r[a].toString():i+=":",a<t&&(i+=", ");return i}function u6e(r){return v4(r.data,r.shape,r.strides,r.offset)}function o6e(r,e){var t;for(t=0;t<r.length;t++)e.push(r[t]);return e}function v6e(r,e){var t=T0(e);return t[0]="ndarray: ("+r.join(", ")+")",t}function f6e(r,e){var t=T0(e);return t[0]="[ "+s6e(r)+" ] =",t}function c6e(r){var e,t,i,a,n,u;if(t=r.ndims,t===0)return i6e(r);if(t===1)return a6e(r);if(t===2)return n6e(r);for(e=r.shape,i=e[t-1],n=e6e(r.ndarray),a=[v6e(e,i),T0(i)];u=n.next(),!u.done;)a.push(f6e(u.value[0],i)),a.push(T0(i)),o6e(u6e(u.value[1]),a),a.push(T0(i));return a}XK.exports=c6e});var YK=s((Mrt,JK)=>{"use strict";var l6e=xK();JK.exports=l6e});var QK=s((Brt,ZK)=>{"use strict";function $K(r,e,t,i,a,n){var u,o,v,f,c;if(n>=e.length)return r.accessors[0](r.data,i);for(v=[],f=e[n],u=t[n],c=0;c<f;c++)o=$K(r,e,t,i,a,n+1),v.push(o),i+=u;return v}ZK.exports=$K});var rrr=s((krt,KK)=>{"use strict";var p6e=Cn(),d6e=QK();function g6e(r,e,t,i,a){var n;if(e.length===0)return[];for(n=0;n<e.length;n++)if(e[n]===0)return[];return d6e(p6e(r),e,t,i,a,0)}KK.exports=g6e});var trr=s((Crt,err)=>{"use strict";var m6e=rrr();err.exports=m6e});var arr=s((Vrt,irr)=>{"use strict";var y6e=Su(),h6e=Nu(),q6e=t4(),b6e=V(),w6e=S0(),E6e=lt();function S6e(r,e,t){var i,a,n,u;if(i=e.length,i>0?(n=E6e(e),u=y6e(e,t)):(n=1,u=[0]),a=q6e(r,n),a===null)throw new TypeError(b6e("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new w6e(r,a,e,u,h6e(e,u),t)}irr.exports=S6e});var srr=s((Grt,nrr)=>{"use strict";var N6e=arr();nrr.exports=N6e});var orr=s((Urt,urr)=>{"use strict";var Ze=Qr(),O6e=S0(),_6e=vx(),A6e=lt(),T6e=Rx(),I6e=MZ(),R6e=Su(),P6e=n4(),L6e=YK(),F6e=Nu(),j6e=trr(),M6e=srr();function B6e(r){return Ze(r,"ndarray",O6e),Ze(r,"ndarray2range",_6e),Ze(r,"numel",A6e),Ze(r,"range2ndarray",T6e),Ze(r,"seq2multislice",I6e),Ze(r,"shape2strides",R6e),Ze(r,"slice",P6e),Ze(r,"stackedRepr",L6e),Ze(r,"strides2offset",F6e),Ze(r,"toArray",j6e),Ze(r,"zeros",M6e),r}urr.exports=B6e});var frr=s((Drt,vrr)=>{"use strict";var k6e=ni();function C6e(r,e,t,i){k6e(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}vrr.exports=C6e});var Nr=s((zrt,crr)=>{"use strict";var V6e=frr();crr.exports=V6e});var prr=s((Wrt,lrr)=>{"use strict";function G6e(r){return e;function e(){return r}}lrr.exports=G6e});var mr=s((Hrt,drr)=>{"use strict";var U6e=prr();drr.exports=U6e});var mrr=s((Xrt,grr)=>{"use strict";var D6e=pr();function z6e(r){return r===0&&1/r===D6e}grr.exports=z6e});var Ni=s((xrt,yrr)=>{"use strict";var W6e=mrr();yrr.exports=W6e});var brr=s((Jrt,qrr)=>{"use strict";var H6e=Ni(),hrr=W(),f4=pr();function X6e(r,e){return hrr(r)||hrr(e)?NaN:r===f4||e===f4?f4:r===e&&r===0?H6e(r)?r:e:r>e?r:e}qrr.exports=X6e});var c4=s((Yrt,wrr)=>{"use strict";var x6e=brr();wrr.exports=x6e});var Nrr=s(($rt,Srr)=>{"use strict";var Err=65535;function J6e(r,e){var t,i,a,n,u,o;return r>>>=0,e>>>=0,a=r>>>16>>>0,n=e>>>16>>>0,u=(r&Err)>>>0,o=(e&Err)>>>0,t=u*o>>>0,i=a*o+u*n<<16>>>0,t+i>>>0}Srr.exports=J6e});var _rr=s((Zrt,Orr)=>{"use strict";var Y6e=Nrr();Orr.exports=Y6e});var l4=s((Qrt,Arr)=>{"use strict";function $6e(r,e,t,i,a,n,u){var o,v,f,c,l,p,m;for(o=e.data,v=a.data,c=e.accessors[0],f=a.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=n;return e}Arr.exports=$6e});var Rrr=s((Krt,Irr)=>{"use strict";var Trr=Cn(),Z6e=l4(),p4=8;function Q6e(r,e,t,i,a){var n,u,o,v,f,c;if(r<=0)return i;if(o=Trr(e),v=Trr(i),o.accessorProtocol||v.accessorProtocol)return t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,Z6e(r,o,t,n,v,a,u),v.data;if(t===1&&a===1){if(f=r%p4,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<p4)return i;for(c=f;c<r;c+=p4)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?n=(1-r)*t:n=0,a<0?u=(1-r)*a:u=0,c=0;c<r;c++)i[u]=e[n],n+=t,u+=a;return i}Irr.exports=Q6e});var Frr=s((ret,Lrr)=>{"use strict";var Prr=Cn(),K6e=l4(),I0=8;function rce(r,e,t,i,a,n,u){var o,v,f,c,l,p;if(r<=0)return a;if(f=Prr(e),c=Prr(a),f.accessorProtocol||c.accessorProtocol)return K6e(r,f,t,i,c,n,u),c.data;if(o=i,v=u,t===1&&n===1){if(l=r%I0,l>0)for(p=0;p<l;p++)a[v]=e[o],o+=t,v+=n;if(r<I0)return a;for(p=l;p<r;p+=I0)a[v]=e[o],a[v+1]=e[o+1],a[v+2]=e[o+2],a[v+3]=e[o+3],a[v+4]=e[o+4],a[v+5]=e[o+5],a[v+6]=e[o+6],a[v+7]=e[o+7],o+=I0,v+=I0;return a}for(p=0;p<r;p++)a[v]=e[o],o+=t,v+=n;return a}Lrr.exports=rce});var Oi=s((eet,Mrr)=>{"use strict";var ece=D(),jrr=Rrr(),tce=Frr();ece(jrr,"ndarray",tce);Mrr.exports=jrr});var krr=s((tet,Brr)=>{"use strict";function ice(){}Brr.exports=ice});var Vrr=s((iet,Crr)=>{"use strict";var ace=krr();function nce(){return ace.name==="foo"}Crr.exports=nce});var Urr=s((aet,Grr)=>{"use strict";var sce=Vrr();Grr.exports=sce});var zrr=s((net,Drr)=>{"use strict";var uce=qr(),oce=Urr(),vce=V(),fce=a2().REGEXP,cce=oce();function lce(r){if(uce(r)===!1)throw new TypeError(vce("invalid argument. Must provide a function. Value: `%s`.",r));return cce?r.name:fce.exec(r.toString())[1]}Drr.exports=lce});var Hrr=s((set,Wrr)=>{"use strict";var pce=zrr();Wrr.exports=pce});var xrr=s((uet,Xrr)=>{"use strict";var dce=Na(),gce=tt(),mce=Sa(),yce=Ea(),hce=$i(),qce=oi(),bce=me(),wce=et(),Ece=ge(),Sce=[Ece,wce,qce,bce,yce,hce,dce,gce,mce];Xrr.exports=Sce});var Jrr=s((oet,Nce)=>{Nce.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var rer=s((vet,Krr)=>{"use strict";var Oce=ui(),_ce=Hrr(),Zrr=ia(),Ace=o2(),Tce=ge(),Yrr=xrr(),$rr=Jrr(),_u=Ace()?Zrr(Tce):Qrr;_u=_ce(_u)==="TypedArray"?_u:Qrr;function Qrr(){}function Ice(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof _u)return!0;for(t=0;t<Yrr.length;t++)if(r instanceof Yrr[t])return!0;for(;r;){for(e=Oce(r),t=0;t<$rr.length;t++)if($rr[t]===e)return!0;r=Zrr(r)}return!1}Krr.exports=Ice});var ter=s((fet,eer)=>{"use strict";var Rce=rer();eer.exports=Rce});var aer=s((cet,ier)=>{"use strict";var Pce=Fa(),Lce=ka(),Fce=[Lce,Pce];ier.exports=Fce});var ner=s((pet,jce)=>{jce.exports=["Complex64Array","Complex128Array"]});var ver=s((det,oer)=>{"use strict";var Mce=ui(),Bce=ia(),ser=aer(),uer=ner();function kce(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<ser.length;t++)if(r instanceof ser[t])return!0;for(;r;){for(e=Mce(r),t=0;t<uer.length;t++)if(uer[t]===e)return!0;r=Bce(r)}return!1}oer.exports=kce});var cer=s((get,fer)=>{"use strict";var Cce=ver();fer.exports=Cce});var per=s((met,ler)=>{"use strict";var Vce=V();function Gce(r,e){if(typeof e!="function")throw new TypeError(Vce("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}ler.exports=Gce});var ger=s((yet,der)=>{"use strict";var Uce=per();der.exports=Uce});var yer=s((het,mer)=>{"use strict";var Dce=Na(),zce=tt(),Wce=Sa(),Hce=Ea(),Xce=$i(),xce=oi(),Jce=me(),Yce=et(),$ce=ge(),Zce=Fa(),Qce=ka(),Kce=[[$ce,"Float64Array"],[Yce,"Float32Array"],[xce,"Int32Array"],[Jce,"Uint32Array"],[Hce,"Int16Array"],[Xce,"Uint16Array"],[Dce,"Int8Array"],[zce,"Uint8Array"],[Wce,"Uint8ClampedArray"],[Zce,"Complex64Array"],[Qce,"Complex128Array"]];mer.exports=Kce});var qer=s((qet,her)=>{"use strict";var rle=ger(),ele=ui(),tle=ia(),sn=yer();function ile(r){var e,t;for(t=0;t<sn.length;t++)if(rle(r,sn[t][0]))return sn[t][1];for(;r;){for(e=ele(r),t=0;t<sn.length;t++)if(e===sn[t][1])return sn[t][1];r=tle(r)}}her.exports=ile});var wer=s((bet,ber)=>{"use strict";var ale=ter(),nle=cer(),sle=Aa(),ule=Ta(),ole=V(),vle=qer();function fle(r){var e,t,i;if(ale(r))e=r;else if(nle(r))r.BYTES_PER_ELEMENT===8?e=sle(r,0):e=ule(r,0);else throw new TypeError(ole("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:vle(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}ber.exports=fle});var Or=s((wet,Eer)=>{"use strict";var cle=wer();Eer.exports=cle});var d4=s((Eet,Ser)=>{"use strict";var lle=ba(),ple=Ur(),dle=lle-1;function gle(){var r=ple(1+dle*Math.random());return r>>>0}Ser.exports=gle});var E4=s((Net,jer)=>{"use strict";var It=D(),_i=br(),Ner=Nr(),g4=vr(),mle=hr(),yle=Ve(),Oer=qt(),hle=de().isPrimitive,_er=nt().isPrimitive,Per=oa(),Ler=ba(),Ie=me(),qle=c4(),w4=_rr(),un=Oi(),ble=Or(),Pe=V(),Aer=d4(),ue=624,m4=397,Ter=Ler>>>0,wle=19650218>>>0,y4=2147483648>>>0,h4=2147483647>>>0,Ele=1812433253>>>0,Sle=1664525>>>0,Nle=1566083941>>>0,Ole=2636928640>>>0,_le=4022730752>>>0,Ale=2567483615>>>0,q4=[0>>>0,Ale>>>0],Fer=1/(Per+1),Tle=67108864>>>0,Ile=2147483648>>>0,b4=1>>>0,Rle=Per*Fer,Au=1,Tu=3,Ai=2,Ti=ue+3,Re=ue+5,R0=ue+6;function Ier(r,e){var t;return e?t="option":t="argument",r.length<R0+1?new RangeError(Pe("invalid %s. `state` array has insufficient length.",t)):r[0]!==Au?new RangeError(Pe("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,Au,r[0])):r[1]!==Tu?new RangeError(Pe("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Tu,r[1])):r[Ai]!==ue?new RangeError(Pe("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ue,r[Ai])):r[Ti]!==1?new RangeError(Pe("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[Ti])):r[Re]!==r.length-R0?new RangeError(Pe("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-R0,r[Re])):null}function Rer(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=w4(t,Ele)+i>>>0;return r}function Ple(r,e,t,i){var a,n,u,o;for(n=1,u=0,o=qle(e,i);o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=w4(a,Sle)>>>0,r[n]=(r[n]>>>0^a)+t[u]+u>>>0,n+=1,u+=1,n>=e&&(r[0]=r[e-1],n=1),u>=i&&(u=0);for(o=e-1;o>0;o--)a=r[n-1]>>>0,a=(a^a>>>30)>>>0,a=w4(a,Nle)>>>0,r[n]=(r[n]>>>0^a)-n>>>0,n+=1,n>=e&&(r[0]=r[e-1],n=1);return r[0]=Ile,r}function Lle(r){var e,t,i,a;for(a=ue-m4,t=0;t<a;t++)e=r[t]&y4|r[t+1]&h4,r[t]=r[t+m4]^e>>>1^q4[e&b4];for(i=ue-1;t<i;t++)e=r[t]&y4|r[t+1]&h4,r[t]=r[t-a]^e>>>1^q4[e&b4];return e=r[i]&y4|r[0]&h4,r[i]=r[m4-1]^e>>>1^q4[e&b4],r}function Fle(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!mle(r))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g4(r,"copy")&&(i.copy=r.copy,!hle(r.copy)))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(g4(r,"state")){if(t=r.state,i.state=!0,!Oer(t))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=Ier(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ie(t.length),un(t.length,t,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,t[Re])}if(a===void 0)if(g4(r,"seed"))if(a=r.seed,i.seed=!0,_er(a)){if(a>Ter)throw new RangeError(Pe("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else{if(yle(a)===!1||a.length<1)throw new TypeError(Pe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a.length===1){if(a=a[0],!_er(a))throw new TypeError(Pe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",a));if(a>Ter)throw new RangeError(Pe("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",a));a>>>=0}else n=a.length,e=new Ie(R0+n),e[0]=Au,e[1]=Tu,e[Ai]=ue,e[Ti]=1,e[Ti+1]=ue,e[Re]=n,un.ndarray(n,a,1,0,e,1,Re+1),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,n),t=Rer(t,ue,wle),t=Ple(t,ue,a,n)}else a=Aer()>>>0}else a=Aer()>>>0;return t===void 0&&(e=new Ie(R0+1),e[0]=Au,e[1]=Tu,e[Ai]=ue,e[Ti]=1,e[Ti+1]=ue,e[Re]=1,e[Re+1]=a,t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,1),t=Rer(t,ue,a)),It(y,"NAME","mt19937"),_i(y,"seed",o),_i(y,"seedLength",v),Ner(y,"state",l,p),_i(y,"stateLength",f),_i(y,"byteLength",c),It(y,"toJSON",m),It(y,"MIN",0),It(y,"MAX",Ler),It(y,"normalized",g),It(g,"NAME",y.NAME),_i(g,"seed",o),_i(g,"seedLength",v),Ner(g,"state",l,p),_i(g,"stateLength",f),_i(g,"byteLength",c),It(g,"toJSON",m),It(g,"MIN",0),It(g,"MAX",Rle),y;function o(){var d=e[Re];return un(d,a,1,new Ie(d),1)}function v(){return e[Re]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return un(d,e,1,new Ie(d),1)}function p(d){var h;if(!Oer(d))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",d));if(h=Ier(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?un(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Ie(d.length)),un(d.length,d,1,e,1)),t=new Ie(e.buffer,e.byteOffset+(Ai+1)*e.BYTES_PER_ELEMENT,ue),a=new Ie(e.buffer,e.byteOffset+(Re+1)*e.BYTES_PER_ELEMENT,e[Re])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=ble(e),d.params=[],d}function y(){var d,h;return h=e[Ti+1],h>=ue&&(t=Lle(t),h=0),d=t[h],e[Ti+1]=h+1,d^=d>>>11,d^=d<<7&Ole,d^=d<<15&_le,d^=d>>>18,d>>>0}function g(){var d=y()>>>5,h=y()>>>6;return(d*Tle+h)*Fer}}jer.exports=Fle});var Ber=s((Oet,Mer)=>{"use strict";var jle=E4(),Mle=d4(),Ble=jle({seed:Mle()});Mer.exports=Ble});var Hr=s((_et,Cer)=>{"use strict";var kle=D(),ker=Ber(),Cle=E4();kle(ker,"factory",Cle);Cer.exports=ker});var Der=s((Aet,Uer)=>{"use strict";var Ver=Sr().isPrimitive,S4=V(),Ger=oe();function Vle(r,e){return!Ver(r)||Ger(r)?new TypeError(S4("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Ver(e)||Ger(e)?new TypeError(S4("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(S4("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Uer.exports=Vle});var Wer=s((Tet,zer)=>{"use strict";var Gle=Gr(),Ule=pt(),Dle=Qa();function zle(r,e,t){return e+Gle(Ule(Dle*r()),2)*(t-e)}zer.exports=zle});var N4=s((Iet,Qer)=>{"use strict";var Rt=D(),Iu=br(),Her=Nr(),Xer=hr(),xer=qr(),Jer=vr(),Yer=mr(),Wle=Pr(),Ru=Hr().factory,$er=W(),Hle=Or(),Pu=V(),Xle=Der(),Zer=Wer();function xle(){var r,e,t,i,a,n;if(arguments.length===0)e=Ru();else if(arguments.length===1){if(r=arguments[0],!Xer(r))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Jer(r,"prng")){if(!xer(r.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else{if(a=arguments[0],n=arguments[1],i=Xle(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Xer(r))throw new TypeError(Pu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Jer(r,"prng")){if(!xer(r.prng))throw new TypeError(Pu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ru(r)}else e=Ru()}return a===void 0?t=y:t=m,Rt(t,"NAME","arcsine"),r&&r.prng?(Rt(t,"seed",null),Rt(t,"seedLength",null),Her(t,"state",Yer(null),Wle),Rt(t,"stateLength",null),Rt(t,"byteLength",null),Rt(t,"toJSON",Yer(null)),Rt(t,"PRNG",e)):(Iu(t,"seed",u),Iu(t,"seedLength",o),Her(t,"state",c,l),Iu(t,"stateLength",v),Iu(t,"byteLength",f),Rt(t,"toJSON",p),Rt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Hle(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Zer(e,a,n)}function y(g,d){return $er(g)||$er(d)||g>=d?NaN:Zer(e,g,d)}}Qer.exports=xle});var rtr=s((Ret,Ker)=>{"use strict";var Jle=N4(),Yle=Jle();Ker.exports=Yle});var itr=s((Pet,ttr)=>{"use strict";var $le=D(),etr=rtr(),Zle=N4();$le(etr,"factory",Zle);ttr.exports=etr});var O4=s((Let,vtr)=>{"use strict";var Pt=D(),Lu=br(),atr=Nr(),ntr=hr(),Qle=Gn().isPrimitive,str=qr(),utr=vr(),otr=mr(),Kle=Pr(),Fu=Hr().factory,r5e=W(),e5e=Or(),ju=V();function t5e(){var r,e,t,i;if(arguments.length===0)e=Fu();else if(arguments.length===1&&ntr(arguments[0]))if(r=arguments[0],utr(r,"prng")){if(!str(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Fu(r);else{if(i=arguments[0],!Qle(i))throw new TypeError(ju("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!ntr(r))throw new TypeError(ju("invalid argument. Options argument must be an object. Value: `%s`.",r));if(utr(r,"prng")){if(!str(r.prng))throw new TypeError(ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Fu(r)}else e=Fu()}return i===void 0?t=p:t=l,Pt(t,"NAME","bernoulli"),r&&r.prng?(Pt(t,"seed",null),Pt(t,"seedLength",null),atr(t,"state",otr(null),Kle),Pt(t,"stateLength",null),Pt(t,"byteLength",null),Pt(t,"toJSON",otr(null)),Pt(t,"PRNG",e)):(Lu(t,"seed",a),Lu(t,"seedLength",n),atr(t,"state",v,f),Lu(t,"stateLength",u),Lu(t,"byteLength",o),Pt(t,"toJSON",c),Pt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=e5e(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return r5e(m)||m<0||m>1?NaN:e()<=m?1:0}}vtr.exports=t5e});var ctr=s((Fet,ftr)=>{"use strict";var i5e=O4(),a5e=i5e();ftr.exports=a5e});var dtr=s((jet,ptr)=>{"use strict";var n5e=D(),ltr=ctr(),s5e=O4();n5e(ltr,"factory",s5e);ptr.exports=ltr});var htr=s((Met,ytr)=>{"use strict";var u5e=Rr(),gtr=Yr(),o5e=wr(),mtr=.00991256303526217;function v5e(r,e){var t,i,a;for(i=gtr(-.5*e*e),t=[],t.push(mtr/i),t.push(e),a=2;a<r;a++)t[a]=u5e(-2*o5e(mtr/t[a-1]+i)),i=gtr(-.5*t[a]*t[a]);return t.push(0),t}ytr.exports=v5e});var btr=s((Bet,qtr)=>{"use strict";function f5e(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}qtr.exports=f5e});var Str=s((ket,Etr)=>{"use strict";var wtr=wr();function c5e(r,e,t){var i,a;do i=wtr(r())/e,a=wtr(r());while(-2*a<i*i);return t?i-e:e-i}Etr.exports=c5e});var Atr=s((Cet,_tr)=>{"use strict";var l5e=Dr(),Ntr=Yr(),p5e=htr(),d5e=btr(),g5e=Str(),m5e=128,Otr=3.442619855899,ga=p5e(m5e,Otr),y5e=d5e(ga),h5e=127;function q5e(r,e){return t;function t(){for(var i,a,n,u,o,v,f;;){if(o=2*r()-1,v=e()&h5e,l5e(o)<y5e[v])return o*ga[v];if(v===0)return g5e(r,Otr,o<0);if(u=o*ga[v],n=u*u,f=v+1,i=Ntr(-.5*(ga[v]*ga[v]-n)),a=Ntr(-.5*(ga[f]*ga[f]-n)),a+r()*(i-a)<1)return u}}}_tr.exports=q5e});var A4=s((Vet,Rtr)=>{"use strict";var Ii=D(),Mu=br(),Ttr=Nr(),b5e=qr(),w5e=hr(),E5e=de().isPrimitive,Bu=vr(),S5e=qt(),_4=Hr().factory,Itr=mr(),N5e=Pr(),O5e=Ur(),_5e=ba(),A5e=Or(),P0=V(),T5e=Atr();function I5e(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!w5e(r))throw new TypeError(P0("invalid argument. Must provide an object. Value: `%s`.",r));if(Bu(r,"copy")&&(a.copy=r.copy,!E5e(r.copy)))throw new TypeError(P0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Bu(r,"prng")){if(!b5e(r.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Bu(r,"state")){if(a.state=r.state,!S5e(r.state))throw new TypeError(P0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Bu(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(P0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(t=_4(a),e=t.normalized):(t=_4({seed:O5e(1+_5e*e()),copy:a.copy}),a.seed=null):(t=_4(a),e=t.normalized),i=T5e(e,t),Ii(i,"NAME","improved-ziggurat"),a.seed===null?(Ii(i,"seed",null),Ii(i,"seedLength",null)):(Mu(i,"seed",n),Mu(i,"seedLength",u)),r&&r.prng?(Ttr(i,"state",Itr(null),N5e),Ii(i,"stateLength",null),Ii(i,"byteLength",null),Ii(i,"toJSON",Itr(null))):(Ttr(i,"state",f,c),Mu(i,"stateLength",o),Mu(i,"byteLength",v),Ii(i,"toJSON",l)),Ii(i,"PRNG",e),i;function n(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=A5e(t.state),p.params=[],p}}Rtr.exports=I5e});var Ltr=s((Get,Ptr)=>{"use strict";var R5e=A4(),P5e=R5e();Ptr.exports=P5e});var Ri=s((Uet,jtr)=>{"use strict";var L5e=D(),Ftr=Ltr(),F5e=A4();L5e(Ftr,"factory",F5e);jtr.exports=Ftr});var Btr=s((Det,Mtr)=>{"use strict";var j5e=qr(),M5e=j5e(Object.assign);Mtr.exports=M5e});var Ctr=s((zet,ktr)=>{"use strict";var B5e=Object.assign;ktr.exports=B5e});var Gtr=s((Wet,Vtr)=>{"use strict";var k5e=typeof Object.getOwnPropertySymbols<"u";Vtr.exports=k5e});var ztr=s((Het,Dtr)=>{"use strict";var Utr=Va(),C5e=Utr.getOwnPropertySymbols;function V5e(r){return C5e(Utr(r))}Dtr.exports=V5e});var Htr=s((Xet,Wtr)=>{"use strict";function G5e(){return[]}Wtr.exports=G5e});var xtr=s((xet,Xtr)=>{"use strict";var U5e=Gtr(),D5e=ztr(),z5e=Htr(),T4;U5e?T4=D5e:T4=z5e;Xtr.exports=T4});var Ytr=s((Jet,Jtr)=>{"use strict";var W5e=za(),H5e=xtr(),X5e=Dn();function x5e(r){var e,t,i;for(e=W5e(r),t=H5e(r),i=0;i<t.length;i++)X5e(r,t[i])&&e.push(t[i]);return e}Jtr.exports=x5e});var Ztr=s((Yet,$tr)=>{"use strict";var J5e=Ytr();$tr.exports=J5e});var rir=s(($et,Ktr)=>{"use strict";var Y5e=Ztr(),Qtr=Va(),$5e=V();function Z5e(r){var e,t,i,a,n,u,o;if(r==null)throw new TypeError($5e("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(n=Qtr(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=Y5e(Qtr(e)),a=t.length,o=0;o<a;o++)i=t[o],n[i]=e[i];return n}Ktr.exports=Z5e});var L0=s((Zet,eir)=>{"use strict";var Q5e=Btr(),K5e=Ctr(),r8e=rir(),I4;Q5e?I4=K5e:I4=r8e;eir.exports=I4});var nir=s((Qet,air)=>{"use strict";var tir=zr().isPrimitive,iir=V();function e8e(r,e){return tir(r)?tir(e)?null:new TypeError(iir("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(iir("invalid argument. First argument must be a positive number. Value: `%s`.",r))}air.exports=e8e});var fir=s((Ket,vir)=>{"use strict";var sir=wr(),uir=Rr(),t8e=Gr(),oir=1/3;function i8e(r,e,t){var i,a,n,u,o,v,f,c,l,p;for(t<1?(v=t+1-oir,o=1/uir(9*v),c=t8e(r(),1/t)):(v=t-oir,o=1/uir(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,a=f*f,n=1-.331*a*a,u=.5*a+v*(1-p+sir(p)),l=r(),(l<n||sir(l)<u)&&(i=!1)}return v*p*c}vir.exports=i8e});var pir=s((rtt,lir)=>{"use strict";var R4=Gr(),cir=wr();function a8e(r,e,t){var i,a,n,u,o,v,f,c;for(n=t-1,o=R4(n+n,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),a=R4(u,4),c=8*t-12,c=1-a/c,v<=c?i=!1:(c+=.5*R4(a/(8*t-8),2),v<c&&(c=n*cir(4*f*(1-f)),c+=u*u/2,c>=cir(v)&&(i=!1))));return f}lir.exports=a8e});var gir=s((ett,dir)=>{"use strict";var n8e=Gr(),ku=wr();function s8e(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y;for(o=t-1,v=i-1,f=o+v,c=f*ku(f),u=o/f,a=.5/n8e(f,.5),n=!0;n===!0;)l=e(),m=u+l*a,m>=0&&m<=1&&(p=r(),y=o*ku(m/o),y+=v*ku((1-m)/v),y+=c+.5*l*l,y>=ku(p)&&(n=!1));return m}dir.exports=s8e});var hir=s((ttt,yir)=>{"use strict";var P4=Yr(),mir=Gr(),L4=wr();function u8e(r,e,t){for(var i,a,n,u,o,v,f;;)if(u=r(),o=r(),v=mir(u,1/e),f=mir(o,1/t),n=v+f,n<=1)return n>0?v/n:(i=L4(u)/e,a=L4(o)/t,i>a?(a-=i,i=0):(i-=a,a=0),P4(i-L4(P4(i)+P4(a))))}yir.exports=u8e});var wir=s((itt,bir)=>{"use strict";var qir=fir(),o8e=pir(),v8e=gir(),f8e=hir();function c8e(r,e,t,i){var a,n;return t===i&&t>1.5?o8e(r,e,t):t>1&&i>1?v8e(r,e,t,i):t<1&&i<1?f8e(r,t,i):(a=qir(r,e,t),n=qir(r,e,i),a/(a+n))}bir.exports=c8e});var B4=s((att,Pir)=>{"use strict";var Lt=D(),Cu=br(),Eir=Nr(),Sir=hr(),Nir=de().isPrimitive,Oir=qr(),on=vr(),_ir=mr(),l8e=Pr(),Air=Ri().factory,Vu=Hr().factory,Tir=W(),F4=Oi(),j4=me(),M4=qt(),Iir=L0(),p8e=Or(),Ft=V(),d8e=nir(),Rir=wir();function g8e(){var r,e,t,i,a,n,u,o,v;if(o=!0,arguments.length===0)a={copy:!1},n=Vu(a);else if(arguments.length===1){if(a=arguments[0],!Sir(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(on(a,"copy")&&!Nir(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(on(a,"prng")){if(!Oir(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(on(a,"state")&&!M4(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Iir({},a),a.copy===!1?o=!1:a.state&&(a.state=F4(a.state.length,a.state,1,new j4(a.state.length),1)),a.copy=!1,n=Vu(a)}}else{if(t=arguments[0],i=arguments[1],v=d8e(t,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!Sir(a))throw new TypeError(Ft("invalid argument. Options argument must be an object. Value: `%s`.",a));if(on(a,"copy")&&!Nir(a.copy))throw new TypeError(Ft("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(on(a,"prng")){if(!Oir(a.prng))throw new TypeError(Ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(on(a,"state")&&!M4(a.state))throw new TypeError(Ft("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Iir({},a),a.copy===!1?o=!1:a.state&&(a.state=F4(a.state.length,a.state,1,new j4(a.state.length),1)),a.copy=!1,n=Vu(a)}}else a={copy:!1},n=Vu(a)}return a&&a.prng?e=Air({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),e=Air({state:r,copy:!1})),t===void 0?u=h:u=d,Lt(u,"NAME","beta"),a&&a.prng?(Lt(u,"seed",null),Lt(u,"seedLength",null),Eir(u,"state",_ir(null),l8e),Lt(u,"stateLength",null),Lt(u,"byteLength",null),Lt(u,"toJSON",_ir(null)),Lt(u,"PRNG",n)):(Cu(u,"seed",f),Cu(u,"seedLength",c),Eir(u,"state",m,y),Cu(u,"stateLength",l),Cu(u,"byteLength",p),Lt(u,"toJSON",g),Lt(u,"PRNG",n),n=n.normalized),u;function f(){return n.seed}function c(){return n.seedLength}function l(){return n.stateLength}function p(){return n.byteLength}function m(){return n.state}function y(q){if(!M4(q))throw new TypeError(Ft("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));o&&(q=F4(q.length,q,1,new j4(q.length),1)),n.state=q}function g(){var q={};return q.type="PRNG",q.name=u.NAME,q.state=p8e(n.state),t===void 0?q.params=[]:q.params=[t,i],q}function d(){return Rir(n,e,t,i)}function h(q,w){return Tir(q)||Tir(w)||q<=0||w<=0?NaN:Rir(n,e,q,w)}}Pir.exports=g8e});var Fir=s((ntt,Lir)=>{"use strict";var m8e=B4(),y8e=m8e();Lir.exports=y8e});var Bir=s((stt,Mir)=>{"use strict";var h8e=D(),jir=Fir(),q8e=B4();h8e(jir,"factory",q8e);Mir.exports=jir});var Gir=s((utt,Vir)=>{"use strict";var kir=zr().isPrimitive,Cir=V();function b8e(r,e){return kir(r)?kir(e)?null:new TypeError(Cir("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Cir("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Vir.exports=b8e});var zir=s((ott,Dir)=>{"use strict";var Uir=wr();function w8e(r,e,t,i,a){var n,u,o,v,f,c,l;for(n=!0;n;){do f=e(),l=1+a*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+Uir(l)),c=r(),(c<o||Uir(c)<v)&&(n=!1)}return 1/t*i*l}Dir.exports=w8e});var U4=s((vtt,Kir)=>{"use strict";var jt=D(),Gu=br(),Wir=Nr(),Hir=hr(),k4=qt(),Xir=de().isPrimitive,xir=qr(),vn=vr(),Jir=mr(),E8e=Pr(),Yir=Ri().factory,Uu=Hr().factory,$ir=W(),C4=Rr(),Zir=Gr(),V4=Oi(),G4=me(),S8e=Or(),Qir=L0(),Mt=V(),N8e=Gir(),Du=zir(),zu=1/3;function O8e(){var r,e,t,i,a,n,u,o,v,f,c;if(o=!0,arguments.length===0)a={copy:!1},n=Uu(a);else if(arguments.length===1){if(a=arguments[0],!Hir(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(vn(a,"copy")&&!Xir(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(vn(a,"prng")){if(!xir(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(vn(a,"state")&&!k4(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Qir({},a),a.copy===!1?o=!1:a.state&&(a.state=V4(a.state.length,a.state,1,new G4(a.state.length),1)),a.copy=!1,n=Uu(a)}}else{if(e=arguments[0],i=arguments[1],v=N8e(e,i),v)throw v;if(arguments.length>2){if(a=arguments[2],!Hir(a))throw new TypeError(Mt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(vn(a,"copy")&&!Xir(a.copy))throw new TypeError(Mt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(vn(a,"prng")){if(!xir(a.prng))throw new TypeError(Mt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));n=a.prng}else{if(vn(a,"state")&&!k4(a.state))throw new TypeError(Mt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=Qir({},a),a.copy===!1?o=!1:a.state&&(a.state=V4(a.state.length,a.state,1,new G4(a.state.length),1)),a.copy=!1,n=Uu(a)}}else a={copy:!1},n=Uu(a)}return a&&a.prng?t=Yir({prng:a.prng}):(a.state?r=a.state:(r=n.state,n.state=r),t=Yir({state:r,copy:!1})),e===void 0?u=_:(e>=1?(u=q,c=e-zu):(u=w,c=e+1-zu),f=1/C4(9*c)),jt(u,"NAME","gamma"),a&&a.prng?(jt(u,"seed",null),jt(u,"seedLength",null),Wir(u,"state",Jir(null),E8e),jt(u,"stateLength",null),jt(u,"byteLength",null),jt(u,"toJSON",Jir(null)),jt(u,"PRNG",n)):(Gu(u,"seed",l),Gu(u,"seedLength",p),Wir(u,"state",g,d),Gu(u,"stateLength",m),Gu(u,"byteLength",y),jt(u,"toJSON",h),jt(u,"PRNG",n),n=n.normalized),u;function l(){return n.seed}function p(){return n.seedLength}function m(){return n.stateLength}function y(){return n.byteLength}function g(){return n.state}function d(b){if(!k4(b))throw new TypeError(Mt("invalid argument. Must provide a Uint32Array. Value: `%s`.",b));o&&(b=V4(b.length,b,1,new G4(b.length),1)),n.state=b}function h(){var b={};return b.type="PRNG",b.name=u.NAME,b.state=S8e(n.state),e===void 0?b.params=[]:b.params=[e,i],b}function q(){return Du(n,t,i,c,f)}function w(){return Du(n,t,i,c,f)*Zir(n(),1/e)}function _(b,T){var N,O;return $ir(b)||$ir(T)||b<=0||T<=0?NaN:b<1?(O=b+1-zu,N=1/C4(9*O),Du(n,t,T,O,N)*Zir(n(),1/b)):(O=b-zu,N=1/C4(9*O),Du(n,t,T,O,N))}}Kir.exports=O8e});var ear=s((ftt,rar)=>{"use strict";var _8e=U4(),A8e=_8e();rar.exports=A8e});var fn=s((ctt,iar)=>{"use strict";var T8e=D(),tar=ear(),I8e=U4();T8e(tar,"factory",I8e);iar.exports=tar});var uar=s((ltt,sar)=>{"use strict";var aar=zr().isPrimitive,nar=V();function R8e(r,e){return aar(r)?aar(e)?null:new TypeError(nar("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(nar("invalid argument. First argument must be a positive number. Value: `%s`.",r))}sar.exports=R8e});var far=s((ptt,oar)=>{"use strict";function P8e(r,e,t){return r(e,1)/r(t,1)}oar.exports=P8e});var D4=s((dtt,yar)=>{"use strict";var Pi=D(),Wu=br(),car=Nr(),lar=hr(),par=mr(),L8e=Pr(),Hu=fn().factory,dar=W(),F8e=Or(),gar=V(),j8e=uar(),mar=far();function M8e(){var r,e,t,i,a,n,u;if(arguments.length===0)r=Hu();else if(arguments.length===1){if(i=arguments[0],!lar(i))throw new TypeError(gar("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Hu(i)}else{if(e=arguments[0],t=arguments[1],u=j8e(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!lar(i))throw new TypeError(gar("invalid argument. Options argument must be an object. Value: `%s`.",i));r=Hu(i)}else r=Hu()}return e===void 0?n=g:n=y,a=r.PRNG,Pi(n,"NAME","betaprime"),i&&i.prng?(Pi(n,"seed",null),Pi(n,"seedLength",null),car(n,"state",par(null),L8e),Pi(n,"stateLength",null),Pi(n,"byteLength",null),Pi(n,"toJSON",par(null))):(Wu(n,"seed",o),Wu(n,"seedLength",v),car(n,"state",l,p),Wu(n,"stateLength",f),Wu(n,"byteLength",c),Pi(n,"toJSON",m)),Pi(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=F8e(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return mar(r,e,t)}function g(d,h){return dar(d)||dar(h)||d<=0||h<=0?NaN:mar(r,d,h)}}yar.exports=M8e});var qar=s((gtt,har)=>{"use strict";var B8e=D4(),k8e=B8e();har.exports=k8e});var Ear=s((mtt,war)=>{"use strict";var C8e=D(),bar=qar(),V8e=D4();C8e(bar,"factory",V8e);war.exports=bar});var Nar=s((ytt,Sar)=>{"use strict";var G8e=Ur();function U8e(r){return G8e(r)===r&&r>0}Sar.exports=U8e});var z4=s((htt,Oar)=>{"use strict";var D8e=Nar();Oar.exports=D8e});var Aar=s((qtt,_ar)=>{"use strict";function z8e(r){return r>=0&&r<=1}_ar.exports=z8e});var Iar=s((btt,Tar)=>{"use strict";var W8e=Aar();Tar.exports=W8e});var Lar=s((wtt,Par)=>{"use strict";var H8e=nt().isPrimitive,X8e=Gn().isPrimitive,Rar=V();function x8e(r,e){return H8e(r)?X8e(e)?null:new TypeError(Rar("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(Rar("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}Par.exports=x8e});var jar=s((Ett,Far)=>{"use strict";function J8e(r,e,t){var i=0,a;for(a=0;a<e;a++)r()<=t&&(i+=1);return i}Far.exports=J8e});var Bar=s((Stt,Mar)=>{"use strict";var Y8e=W();function $8e(r){return r===0||Y8e(r)?r:r<0?-1:1}Mar.exports=$8e});var Xu=s((Ntt,kar)=>{"use strict";var Z8e=Bar();kar.exports=Z8e});var Var=s((Ott,Car)=>{"use strict";var Q8e=Gr(),K8e=1/12,r7e=1/360,e7e=1/1260;function t7e(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=Q8e(r,2),(K8e-(r7e-e7e/e)/e)/r}}Car.exports=t7e});var Uar=s((_tt,Gar)=>{"use strict";var W4=Ur(),i7e=Xu(),a7e=Rr(),H4=Dr(),xu=wr(),Ju=Var(),n7e=1/6;function s7e(r,e,t){var i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w,_,b,T,N,O,S,I,E,L;for(T=W4((e+1)*t),f=e-T+1,N=1-t,O=t/N,c=(e+1)*O,u=e*t*N,n=a7e(u),d=1.15+2.53*n,g=-.0873+.0248*d+.01*t,h=e*t+.5,i=(2.83+5.1/d)*n,y=.92-4.2/d,a=.86*y,w=(T+.5)*xu((T+1)/(O*f)),w+=Ju(T)+Ju(e-T);;){if(E=r(),E<=a)return I=E/y-.43,O=I*(2*g/(.5-H4(I))+d)+h,W4(O);if(E>=y?I=r()-.5:(I=E/y-.93,I=i7e(I)*.5-I,E=y*r()),l=.5-H4(I),b=W4(I*(2*g/l+d)+h),!(b<0||b>e))if(E=E*i/(g/(l*l)+d),p=H4(b-T),p>15){if(E=xu(E),o=p/u,v=(p/3+.625)*p,v+=n7e,v/=u,o*=v+.5,S=-(p*p)/(2*u),E<S-o||E<=S+o&&(m=e-b+1,L=w+(e+1)*xu(f/m),L+=(b+.5)*xu(m*O/(b+1)),L+=-(Ju(b)+Ju(e-b)),E<=L))return b}else{if(q=1,T<b)for(_=T;_<=b;_++)q*=c/_-O;else if(T>b)for(_=b;_<=T;_++)E*=c/_-O;if(E<=q)return b}}}Gar.exports=s7e});var War=s((Att,zar)=>{"use strict";var u7e=jar(),o7e=Uar();function Dar(r,e,t){return t>.5?e-Dar(r,e,1-t):e*t<10?u7e(r,e,t):o7e(r,e,t)}zar.exports=Dar});var X4=s((Ttt,Qar)=>{"use strict";var Bt=D(),Yu=br(),Har=Nr(),Xar=hr(),xar=qr(),Jar=vr(),Yar=mr(),v7e=Pr(),$ar=W(),f7e=z4(),c7e=Iar(),$u=Hr().factory,l7e=Or(),Zu=V(),p7e=Lar(),Zar=War();function d7e(){var r,e,t,i,a,n;if(arguments.length===0)e=$u();else if(arguments.length===1){if(r=arguments[0],!Xar(r))throw new TypeError(Zu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Jar(r,"prng")){if(!xar(r.prng))throw new TypeError(Zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$u(r)}else{if(a=arguments[0],n=arguments[1],i=p7e(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Xar(r))throw new TypeError(Zu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Jar(r,"prng")){if(!xar(r.prng))throw new TypeError(Zu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$u(r)}else e=$u()}return a===void 0?t=y:t=m,Bt(t,"NAME","binomial"),r&&r.prng?(Bt(t,"seed",null),Bt(t,"seedLength",null),Har(t,"state",Yar(null),v7e),Bt(t,"stateLength",null),Bt(t,"byteLength",null),Bt(t,"toJSON",Yar(null)),Bt(t,"PRNG",e)):(Yu(t,"seed",u),Yu(t,"seedLength",o),Har(t,"state",c,l),Yu(t,"stateLength",v),Yu(t,"byteLength",f),Bt(t,"toJSON",p),Bt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=l7e(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return Zar(e,a,n)}function y(g,d){return $ar(g)||$ar(d)||!f7e(g)||!c7e(d)?NaN:Zar(e,g,d)}}Qar.exports=d7e});var rnr=s((Itt,Kar)=>{"use strict";var g7e=X4(),m7e=g7e();Kar.exports=m7e});var inr=s((Rtt,tnr)=>{"use strict";var y7e=D(),enr=rnr(),h7e=X4();y7e(enr,"factory",h7e);tnr.exports=enr});var nnr=s((Ptt,anr)=>{"use strict";var q7e=Rr(),b7e=wr(),w7e=pt(),E7e=Ot(),S7e=yi();function N7e(r){var e,t;return e=!0,i;function i(){var a,n,u,o;if(e){do a=r(),n=r();while(a===0);return u=q7e(-2*b7e(a)),o=S7e*n,t=u*E7e(o),e=!1,u*w7e(o)}return e=!0,t}}anr.exports=N7e});var unr=s((Ltt,snr)=>{"use strict";var O7e=Rr(),_7e=wr(),A7e=Ot(),T7e=Ee(),I7e=A7e(T7e);function R7e(r){var e=O7e(-2*_7e(r));return e*I7e}snr.exports=R7e});var vnr=s((Ftt,onr)=>{"use strict";var P7e=Rr(),L7e=wr(),F7e=Ot(),j7e=yi();function M7e(r){var e=P7e(-2*L7e(r)),t=j7e*r;return e*F7e(t)}onr.exports=M7e});var x4=s((jtt,pnr)=>{"use strict";var Xe=D(),Qu=br(),fnr=Nr(),B7e=hr(),k7e=qr(),C7e=de().isPrimitive,F0=vr(),V7e=qt(),cnr=Hr().factory,lnr=mr(),G7e=Pr(),U7e=Or(),j0=V(),D7e=nnr(),z7e=unr(),W7e=vnr();function H7e(r){var e,t,i,a;if(a={copy:!0},arguments.length){if(!B7e(r))throw new TypeError(j0("invalid argument. Must provide an object. Value: `%s`.",r));if(F0(r,"copy")&&(a.copy=r.copy,!C7e(r.copy)))throw new TypeError(j0("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(F0(r,"prng")){if(!k7e(r.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(F0(r,"state")){if(a.state=r.state,!V7e(r.state))throw new TypeError(j0("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(F0(r,"seed")&&(a.seed=r.seed,r.seed===void 0))throw new TypeError(j0("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return a.state===void 0?e===void 0?(i=cnr(a),e=i.normalized):a.seed=null:(i=cnr(a),e=i.normalized),t=D7e(e),Xe(t,"NAME","box-muller"),a.seed===null?(Xe(t,"seed",null),Xe(t,"seedLength",null)):(Qu(t,"seed",n),Qu(t,"seedLength",u)),r&&r.prng?(fnr(t,"state",lnr(null),G7e),Xe(t,"stateLength",null),Xe(t,"byteLength",null),Xe(t,"toJSON",lnr(null))):(fnr(t,"state",f,c),Qu(t,"stateLength",o),Qu(t,"byteLength",v),Xe(t,"toJSON",l)),Xe(t,"PRNG",e),F0(e,"MIN")?(Xe(t,"MIN",z7e(e.MIN)),Xe(t,"MAX",W7e(e.MIN))):(Xe(t,"MIN",null),Xe(t,"MAX",null)),t;function n(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=U7e(i.state),p.params=[],p}}pnr.exports=H7e});var gnr=s((Mtt,dnr)=>{"use strict";var X7e=x4(),x7e=X7e();dnr.exports=x7e});var hnr=s((Btt,ynr)=>{"use strict";var J7e=D(),mnr=gnr(),Y7e=x4();J7e(mnr,"factory",Y7e);ynr.exports=mnr});var wnr=s((ktt,bnr)=>{"use strict";var $7e=Sr().isPrimitive,Z7e=zr().isPrimitive,qnr=V(),Q7e=oe();function K7e(r,e){return!$7e(r)||Q7e(r)?new TypeError(qnr("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Z7e(e)?null:new TypeError(qnr("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}bnr.exports=K7e});var Snr=s((Ctt,Enr)=>{"use strict";var r9e=c0(),e9e=Ee();function t9e(r,e,t){return e+t*r9e(e9e*(r()-.5))}Enr.exports=t9e});var J4=s((Vtt,Pnr)=>{"use strict";var Li=D(),Ku=br(),Nnr=Nr(),Onr=hr(),_nr=qr(),Anr=vr(),Tnr=mr(),i9e=Pr(),Inr=W(),cn=Ri().factory,a9e=Or(),ro=V(),n9e=wnr(),Rnr=Snr();function s9e(){var r,e,t,i,a,n,u;if(arguments.length===0)e=cn();else if(arguments.length===1){if(t=arguments[0],!Onr(t))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Anr(t,"prng")){if(!_nr(t.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else{if(u=arguments[0],r=arguments[1],n=n9e(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Onr(t))throw new TypeError(ro("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Anr(t,"prng")){if(!_nr(t.prng))throw new TypeError(ro("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=cn({prng:t.prng})}else e=cn(t)}else e=cn()}return u===void 0?a=g:a=y,i=e.PRNG,Li(a,"NAME","cauchy"),t&&t.prng?(Li(a,"seed",null),Li(a,"seedLength",null),Nnr(a,"state",Tnr(null),i9e),Li(a,"stateLength",null),Li(a,"byteLength",null),Li(a,"toJSON",Tnr(null))):(Ku(a,"seed",o),Ku(a,"seedLength",v),Nnr(a,"state",l,p),Ku(a,"stateLength",f),Ku(a,"byteLength",c),Li(a,"toJSON",m)),Li(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=a9e(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return Rnr(e,u,r)}function g(d,h){return Inr(d)||Inr(h)||h<=0?NaN:Rnr(e,d,h)}}Pnr.exports=s9e});var Fnr=s((Gtt,Lnr)=>{"use strict";var u9e=J4(),o9e=u9e();Lnr.exports=o9e});var Bnr=s((Utt,Mnr)=>{"use strict";var v9e=D(),jnr=Fnr(),f9e=J4();v9e(jnr,"factory",f9e);Mnr.exports=jnr});var Y4=s((Dtt,Dnr)=>{"use strict";var Fi=D(),eo=br(),knr=Nr(),c9e=zr().isPrimitive,Cnr=hr(),Vnr=qr(),Gnr=vr(),Unr=mr(),l9e=Pr(),p9e=W(),ln=fn().factory,d9e=Or(),to=V();function g9e(){var r,e,t,i,a;if(arguments.length===0)r=ln();else if(arguments.length===1&&Cnr(arguments[0]))if(t=arguments[0],Gnr(t,"prng")){if(!Vnr(t.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=ln({prng:t.prng})}else r=ln(t);else{if(a=arguments[0],!c9e(a))throw new TypeError(to("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!Cnr(t))throw new TypeError(to("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Gnr(t,"prng")){if(!Vnr(t.prng))throw new TypeError(to("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=ln(a/2,.5,{prng:t.prng})}else r=ln(a/2,.5,t)}else r=ln(a/2,.5)}return a===void 0?i=m:i=p,e=r.PRNG,Fi(i,"NAME","chisquare"),t&&t.prng?(Fi(i,"seed",null),Fi(i,"seedLength",null),knr(i,"state",Unr(null),l9e),Fi(i,"stateLength",null),Fi(i,"byteLength",null),Fi(i,"toJSON",Unr(null))):(eo(i,"seed",n),eo(i,"seedLength",u),knr(i,"state",f,c),eo(i,"stateLength",o),eo(i,"byteLength",v),Fi(i,"toJSON",l)),Fi(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=d9e(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return r()}function m(y){return p9e(y)||y<=0?NaN:r(y/2,.5)}}Dnr.exports=g9e});var Wnr=s((ztt,znr)=>{"use strict";var m9e=Y4(),y9e=m9e();znr.exports=y9e});var M0=s((Wtt,Xnr)=>{"use strict";var h9e=D(),Hnr=Wnr(),q9e=Y4();h9e(Hnr,"factory",q9e);Xnr.exports=Hnr});var $4=s((Htt,Knr)=>{"use strict";var ji=D(),io=br(),xnr=Nr(),b9e=zr().isPrimitive,Jnr=hr(),Ynr=qr(),$nr=vr(),Znr=mr(),w9e=Pr(),E9e=W(),pn=M0().factory,S9e=Or(),Qnr=Rr(),ao=V();function N9e(){var r,e,t,i,a;if(arguments.length===0)r=pn();else if(arguments.length===1&&Jnr(arguments[0]))if(t=arguments[0],$nr(t,"prng")){if(!Ynr(t.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=pn({prng:t.prng})}else r=pn(t);else{if(a=arguments[0],!b9e(a))throw new TypeError(ao("invalid argument. First argument must be a positive number. Value: `%s`.",a));if(arguments.length>1){if(t=arguments[1],!Jnr(t))throw new TypeError(ao("invalid argument. Options argument must be an object. Value: `%s`.",t));if($nr(t,"prng")){if(!Ynr(t.prng))throw new TypeError(ao("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=pn(a,{prng:t.prng})}else r=pn(a,t)}else r=pn(a)}return a===void 0?i=m:i=p,e=r.PRNG,ji(i,"NAME","chi"),t&&t.prng?(ji(i,"seed",null),ji(i,"seedLength",null),xnr(i,"state",Znr(null),w9e),ji(i,"stateLength",null),ji(i,"byteLength",null),ji(i,"toJSON",Znr(null))):(io(i,"seed",n),io(i,"seedLength",u),xnr(i,"state",f,c),io(i,"stateLength",o),io(i,"byteLength",v),ji(i,"toJSON",l)),ji(i,"PRNG",e),i;function n(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=S9e(e.state),a===void 0?y.params=[]:y.params=[a],y}function p(){return Qnr(r())}function m(y){return E9e(y)||y<=0?NaN:Qnr(r(y))}}Knr.exports=N9e});var e0r=s((Xtt,r0r)=>{"use strict";var O9e=$4(),_9e=O9e();r0r.exports=_9e});var a0r=s((xtt,i0r)=>{"use strict";var A9e=D(),t0r=e0r(),T9e=$4();A9e(t0r,"factory",T9e);i0r.exports=t0r});var u0r=s((Jtt,s0r)=>{"use strict";var I9e=Sr().isPrimitive,R9e=zr().isPrimitive,n0r=V(),P9e=oe();function L9e(r,e){return!I9e(r)||P9e(r)?new TypeError(n0r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):R9e(e)?null:new TypeError(n0r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}s0r.exports=L9e});var v0r=s((Ytt,o0r)=>{"use strict";var Z4=W(),F9e=g0(),j9e=Ee();function M9e(r,e,t){var i;return Z4(r)||Z4(e)||Z4(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+F9e(i)/j9e)/2)}o0r.exports=M9e});var l0r=s(($tt,c0r)=>{"use strict";var f0r=W();function B9e(r,e){return f0r(r)||f0r(e)?NaN:r<e?0:1}c0r.exports=B9e});var g0r=s((Ztt,d0r)=>{"use strict";var k9e=mr(),p0r=W();function C9e(r){if(p0r(r))return k9e(NaN);return e;function e(t){return p0r(t)?NaN:t<r?0:1}}d0r.exports=C9e});var no=s((Qtt,y0r)=>{"use strict";var V9e=D(),m0r=l0r(),G9e=g0r();V9e(m0r,"factory",G9e);y0r.exports=m0r});var q0r=s((Ktt,h0r)=>{"use strict";var U9e=mr(),D9e=no().factory,Q4=W(),z9e=g0(),W9e=Ee();function H9e(r,e){if(Q4(r)||Q4(e)||e<0)return U9e(NaN);if(e===0)return D9e(r);return t;function t(i){var a;return Q4(i)?NaN:i<r-e?0:i>r+e?1:(a=(i-r)/e,(1+a+z9e(a)/W9e)/2)}}h0r.exports=H9e});var E0r=s((rit,w0r)=>{"use strict";var X9e=D(),b0r=v0r(),x9e=q0r();X9e(b0r,"factory",x9e);w0r.exports=b0r});var K4=s((eit,S0r)=>{"use strict";var J9e=E0r(),Y9e=1e4,$9e=1e-12;function Z9e(r,e,t){var i,a,n,u,o;for(o=1,i=e-t,a=e+t;o<Y9e;){if(u=(i+a)/2,a-i<$9e)return u;n=J9e(u,e,t),r>n?i=u:a=u,o+=1}return u}S0r.exports=Z9e});var O0r=s((tit,N0r)=>{"use strict";var r6=W(),Q9e=K4();function K9e(r,e,t){return r6(e)||r6(t)||r6(r)||t<0||r<0||r>1?NaN:t===0?e:Q9e(r,e,t)}N0r.exports=K9e});var A0r=s((iit,_0r)=>{"use strict";var rpe=W();function epe(r,e){return rpe(r)||r<0||r>1?NaN:e}_0r.exports=epe});var R0r=s((ait,I0r)=>{"use strict";var tpe=mr(),T0r=W();function ipe(r){if(T0r(r))return tpe(NaN);return e;function e(t){return T0r(t)||t<0||t>1?NaN:r}}I0r.exports=ipe});var e6=s((nit,L0r)=>{"use strict";var ape=D(),P0r=A0r(),npe=R0r();ape(P0r,"factory",npe);L0r.exports=P0r});var j0r=s((sit,F0r)=>{"use strict";var spe=mr(),upe=e6().factory,t6=W(),ope=K4();function vpe(r,e){if(t6(r)||t6(e)||e<0)return spe(NaN);if(e===0)return upe(r);return t;function t(i){return t6(i)||i<0||i>1?NaN:ope(i,r,e)}}F0r.exports=vpe});var k0r=s((uit,B0r)=>{"use strict";var fpe=D(),M0r=O0r(),cpe=j0r();fpe(M0r,"factory",cpe);B0r.exports=M0r});var V0r=s((oit,C0r)=>{"use strict";var lpe=k0r();function ppe(r,e,t){return lpe(r(),e,t)}C0r.exports=ppe});var i6=s((vit,x0r)=>{"use strict";var kt=D(),so=br(),G0r=Nr(),U0r=hr(),D0r=qr(),z0r=vr(),W0r=mr(),dpe=Pr(),uo=Hr().factory,H0r=W(),gpe=Or(),oo=V(),mpe=u0r(),X0r=V0r();function ype(){var r,e,t,i,a,n;if(arguments.length===0)e=uo();else if(arguments.length===1){if(r=arguments[0],!U0r(r))throw new TypeError(oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(z0r(r,"prng")){if(!D0r(r.prng))throw new TypeError(oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uo(r)}else{if(a=arguments[0],n=arguments[1],i=mpe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!U0r(r))throw new TypeError(oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(z0r(r,"prng")){if(!D0r(r.prng))throw new TypeError(oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uo(r)}else e=uo()}return a===void 0?t=y:t=m,kt(t,"NAME","cosine"),r&&r.prng?(kt(t,"seed",null),kt(t,"seedLength",null),G0r(t,"state",W0r(null),dpe),kt(t,"stateLength",null),kt(t,"byteLength",null),kt(t,"toJSON",W0r(null)),kt(t,"PRNG",e)):(so(t,"seed",u),so(t,"seedLength",o),G0r(t,"state",c,l),so(t,"stateLength",v),so(t,"byteLength",f),kt(t,"toJSON",p),kt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=gpe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return X0r(e,a,n)}function y(g,d){return H0r(g)||H0r(d)||d<=0?NaN:X0r(e,g,d)}}x0r.exports=ype});var Y0r=s((fit,J0r)=>{"use strict";var hpe=i6(),qpe=hpe();J0r.exports=qpe});var Q0r=s((cit,Z0r)=>{"use strict";var bpe=D(),$0r=Y0r(),wpe=i6();bpe($0r,"factory",wpe);Z0r.exports=$0r});var tsr=s((lit,esr)=>{"use strict";var K0r=ye().isPrimitive,a6=V(),rsr=oe();function Epe(r,e){return!K0r(r)||rsr(r)?new TypeError(a6("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!K0r(e)||rsr(e)?new TypeError(a6("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(a6("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}esr.exports=Epe});var nsr=s((pit,asr)=>{"use strict";var n6=oa(),dn=Ur();function isr(r,e,t){var i,a,n,u,o,v,f,c,l;if(n=t-e,n===0)return e;if(f=r.MIN,c=r.MAX,a=c-f,a===n)return r()-f+e;if(a<n)for(u=0;;){for(n===n6?(u=dn(n/(a+1)),n%(a+1)===a&&(u+=1)):u=dn((n+1)/(a+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*a===n-v+1)return i;v*=a+1}if(l=isr(r,0,dn(n/v)),!(l>n6/v)&&(l*=v,i+=l,!(i>n)))return i+e}for(a===n6?(o=dn(a/(n+1)),a%(n+1)===n&&(o+=1)):o=dn((a+1)/(n+1));;)if(i=r()-f,i=dn(i/o),i<=n)return i+e}asr.exports=isr});var s6=s((dit,psr)=>{"use strict";var Ct=D(),vo=br(),ssr=Nr(),usr=hr(),osr=qr(),vsr=vr(),fsr=mr(),Spe=Pr(),fo=Hr().factory,csr=W(),gn=Se(),Npe=Or(),Mi=V(),Ope=tsr(),lsr=nsr();function _pe(){var r,e,t,i,a,n;if(arguments.length===0)e=fo();else if(arguments.length===1){if(r=arguments[0],!usr(r))throw new TypeError(Mi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vsr(r,"prng")){if(!osr(r.prng))throw new TypeError(Mi("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!gn(e.MIN))throw new TypeError(Mi("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!gn(e.MAX))throw new TypeError(Mi("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fo(r)}else{if(a=arguments[0],n=arguments[1],i=Ope(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!usr(r))throw new TypeError(Mi("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vsr(r,"prng")){if(!osr(r.prng))throw new TypeError(Mi("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!gn(e.MIN))throw new TypeError(Mi("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!gn(e.MAX))throw new TypeError(Mi("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fo(r)}else e=fo()}return a===void 0?t=y:t=m,Ct(t,"NAME","discrete-uniform"),r&&r.prng?(Ct(t,"seed",null),Ct(t,"seedLength",null),ssr(t,"state",fsr(null),Spe),Ct(t,"stateLength",null),Ct(t,"byteLength",null),Ct(t,"toJSON",fsr(null)),Ct(t,"PRNG",e)):(vo(t,"seed",u),vo(t,"seedLength",o),ssr(t,"state",c,l),vo(t,"stateLength",v),vo(t,"byteLength",f),Ct(t,"toJSON",p),Ct(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Npe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return lsr(e,a,n)}function y(g,d){return csr(g)||csr(d)||!gn(g)||!gn(d)||g>d?NaN:lsr(e,g,d)}}psr.exports=_pe});var gsr=s((git,dsr)=>{"use strict";var Ape=s6(),Tpe=Ape();dsr.exports=Tpe});var hsr=s((mit,ysr)=>{"use strict";var Ipe=D(),msr=gsr(),Rpe=s6();Ipe(msr,"factory",Rpe);ysr.exports=msr});var wsr=s((yit,bsr)=>{"use strict";var Ppe=zr().isPrimitive,Lpe=nt().isPrimitive,qsr=V();function Fpe(r,e){return Lpe(r)?Ppe(e)?null:new TypeError(qsr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(qsr("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}bsr.exports=Fpe});var Ssr=s((hit,Esr)=>{"use strict";var jpe=wr();function Mpe(r,e,t){var i,a;for(i=1,a=0;a<e;a++)i*=r();return-(1/t)*jpe(i)}Esr.exports=Mpe});var u6=s((qit,Psr)=>{"use strict";var Vt=D(),co=br(),Nsr=Nr(),Osr=hr(),_sr=qr(),Asr=vr(),Tsr=mr(),Bpe=Pr(),lo=Hr().factory,Isr=W(),kpe=z4(),Cpe=Or(),po=V(),Vpe=wsr(),Rsr=Ssr();function Gpe(){var r,e,t,i,a,n;if(arguments.length===0)e=lo();else if(arguments.length===1){if(t=arguments[0],!Osr(t))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Asr(t,"prng")){if(!_sr(t.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=lo(t)}else{if(n=arguments[0],r=arguments[1],a=Vpe(n,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Osr(t))throw new TypeError(po("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Asr(t,"prng")){if(!_sr(t.prng))throw new TypeError(po("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=lo(t)}else e=lo()}return n===void 0?i=y:i=m,Vt(i,"NAME","erlang"),t&&t.prng?(Vt(i,"seed",null),Vt(i,"seedLength",null),Nsr(i,"state",Tsr(null),Bpe),Vt(i,"stateLength",null),Vt(i,"byteLength",null),Vt(i,"toJSON",Tsr(null)),Vt(i,"PRNG",e)):(co(i,"seed",u),co(i,"seedLength",o),Nsr(i,"state",c,l),co(i,"stateLength",v),co(i,"byteLength",f),Vt(i,"toJSON",p),Vt(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Cpe(e.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return Rsr(e,n,r)}function y(g,d){return Isr(g)||Isr(d)||!kpe(g)||d<=0?NaN:Rsr(e,g,d)}}Psr.exports=Gpe});var Fsr=s((bit,Lsr)=>{"use strict";var Upe=u6(),Dpe=Upe();Lsr.exports=Dpe});var Bsr=s((wit,Msr)=>{"use strict";var zpe=D(),jsr=Fsr(),Wpe=u6();zpe(jsr,"factory",Wpe);Msr.exports=jsr});var Csr=s((Eit,ksr)=>{"use strict";var Hpe=wr();function Xpe(r,e){return-Hpe(1-r())/e}ksr.exports=Xpe});var o6=s((Sit,Hsr)=>{"use strict";var Gt=D(),go=br(),Vsr=Nr(),xpe=zr().isPrimitive,Gsr=hr(),Usr=qr(),Dsr=vr(),zsr=mr(),Jpe=Pr(),mo=Hr().factory,Ype=W(),$pe=Or(),yo=V(),Wsr=Csr();function Zpe(){var r,e,t,i;if(arguments.length===0)t=mo();else if(arguments.length===1&&Gsr(arguments[0]))if(e=arguments[0],Dsr(e,"prng")){if(!Usr(e.prng))throw new TypeError(yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=mo(e);else{if(r=arguments[0],!xpe(r))throw new TypeError(yo("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Gsr(e))throw new TypeError(yo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Dsr(e,"prng")){if(!Usr(e.prng))throw new TypeError(yo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=mo(e)}else t=mo()}return r===void 0?i=p:i=l,Gt(i,"NAME","exponential"),e&&e.prng?(Gt(i,"seed",null),Gt(i,"seedLength",null),Vsr(i,"state",zsr(null),Jpe),Gt(i,"stateLength",null),Gt(i,"byteLength",null),Gt(i,"toJSON",zsr(null)),Gt(i,"PRNG",t)):(go(i,"seed",a),go(i,"seedLength",n),Vsr(i,"state",v,f),go(i,"stateLength",u),go(i,"byteLength",o),Gt(i,"toJSON",c),Gt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=$pe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Wsr(t,r)}function p(m){return Ype(m)||m<=0?NaN:Wsr(t,m)}}Hsr.exports=Zpe});var xsr=s((Nit,Xsr)=>{"use strict";var Qpe=o6(),Kpe=Qpe();Xsr.exports=Kpe});var $sr=s((Oit,Ysr)=>{"use strict";var rde=D(),Jsr=xsr(),ede=o6();rde(Jsr,"factory",ede);Ysr.exports=Jsr});var rur=s((_it,Ksr)=>{"use strict";var Zsr=zr().isPrimitive,Qsr=V();function tde(r,e){return Zsr(r)?Zsr(e)?null:new TypeError(Qsr("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Qsr("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Ksr.exports=tde});var tur=s((Ait,eur)=>{"use strict";function ide(r,e,t){var i=r(e)/e,a=r(t)/t;return i/a}eur.exports=ide});var v6=s((Tit,fur)=>{"use strict";var Bi=D(),ho=br(),iur=Nr(),aur=hr(),nur=qr(),sur=vr(),uur=mr(),ade=Pr(),mn=M0().factory,our=W(),nde=Or(),qo=V(),sde=rur(),vur=tur();function ude(){var r,e,t,i,a,n,u;if(arguments.length===0)r=mn();else if(arguments.length===1){if(e=arguments[0],!aur(e))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(sur(e,"prng")){if(!nur(e.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=mn({prng:e.prng})}else r=mn(e)}else{if(n=arguments[0],u=arguments[1],a=sde(n,u),a)throw a;if(arguments.length>2){if(e=arguments[2],!aur(e))throw new TypeError(qo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(sur(e,"prng")){if(!nur(e.prng))throw new TypeError(qo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=mn({prng:e.prng})}else r=mn(e)}else r=mn()}return n===void 0?i=g:i=y,t=r.PRNG,Bi(i,"NAME","f"),e&&e.prng?(Bi(i,"seed",null),Bi(i,"seedLength",null),iur(i,"state",uur(null),ade),Bi(i,"stateLength",null),Bi(i,"byteLength",null),Bi(i,"toJSON",uur(null))):(ho(i,"seed",o),ho(i,"seedLength",v),iur(i,"state",l,p),ho(i,"stateLength",f),ho(i,"byteLength",c),Bi(i,"toJSON",m)),Bi(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=nde(t.state),n===void 0?d.params=[]:d.params=[n,u],d}function y(){return vur(r,n,u)}function g(d,h){return our(d)||our(h)||d<=0||h<=0?NaN:vur(r,d,h)}}fur.exports=ude});var lur=s((Iit,cur)=>{"use strict";var ode=v6(),vde=ode();cur.exports=vde});var gur=s((Rit,dur)=>{"use strict";var fde=D(),pur=lur(),cde=v6();fde(pur,"factory",cde);dur.exports=pur});var hur=s((Pit,yur)=>{"use strict";var mur=zr().isPrimitive,lde=Sr().isPrimitive,f6=oe(),c6=V();function pde(r,e,t){return!mur(r)||f6(r)?new TypeError(c6("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!mur(e)||f6(e)?new TypeError(c6("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!lde(t)||f6(t)?new TypeError(c6("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}yur.exports=pde});var bur=s((Lit,qur)=>{"use strict";var dde=Gr(),gde=wr();function mde(r,e,t,i){return i+t*dde(-gde(r()),-1/e)}qur.exports=mde});var p6=s((Fit,Aur)=>{"use strict";var Ut=D(),bo=br(),wur=Nr(),Eur=hr(),Sur=qr(),Nur=vr(),Our=mr(),yde=Pr(),wo=Hr().factory,l6=W(),hde=Or(),Eo=V(),qde=hur(),_ur=bur();function bde(){var r,e,t,i,a,n,u;if(arguments.length===0)t=wo();else if(arguments.length===1){if(e=arguments[0],!Eur(e))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Nur(e,"prng")){if(!Sur(e.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=wo(e)}else{if(r=arguments[0],n=arguments[1],u=arguments[2],a=qde(r,n,u),a)throw a;if(arguments.length>3){if(e=arguments[3],!Eur(e))throw new TypeError(Eo("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Nur(e,"prng")){if(!Sur(e.prng))throw new TypeError(Eo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=wo(e)}else t=wo()}return r===void 0?i=g:i=y,Ut(i,"NAME","frechet"),e&&e.prng?(Ut(i,"seed",null),Ut(i,"seedLength",null),wur(i,"state",Our(null),yde),Ut(i,"stateLength",null),Ut(i,"byteLength",null),Ut(i,"toJSON",Our(null)),Ut(i,"PRNG",t)):(bo(i,"seed",o),bo(i,"seedLength",v),wur(i,"state",l,p),bo(i,"stateLength",f),bo(i,"byteLength",c),Ut(i,"toJSON",m),Ut(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(d){t.state=d}function m(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=hde(t.state),r===void 0?d.params=[]:d.params=[r,n,u],d}function y(){return _ur(t,r,n,u)}function g(d,h,q){return l6(d)||l6(h)||l6(q)||d<=0||h<=0?NaN:_ur(t,d,h,q)}}Aur.exports=bde});var Iur=s((jit,Tur)=>{"use strict";var wde=p6(),Ede=wde();Tur.exports=Ede});var Lur=s((Mit,Pur)=>{"use strict";var Sde=D(),Rur=Iur(),Nde=p6();Sde(Rur,"factory",Nde);Pur.exports=Rur});var Mur=s((Bit,jur)=>{"use strict";var Ode=Ur(),Fur=wr();function _de(r,e){var t=r();return t===0&&(t=r()),Ode(Fur(t)/Fur(1-e))}jur.exports=_de});var d6=s((kit,Dur)=>{"use strict";var Dt=D(),So=br(),Bur=Nr(),kur=hr(),Ade=Gn().isPrimitive,Cur=qr(),Vur=vr(),Gur=mr(),Tde=Pr(),No=Hr().factory,Ide=W(),Rde=Or(),Oo=V(),Uur=Mur();function Pde(){var r,e,t,i;if(arguments.length===0)e=No();else if(arguments.length===1&&kur(arguments[0]))if(r=arguments[0],Vur(r,"prng")){if(!Cur(r.prng))throw new TypeError(Oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=No(r);else{if(i=arguments[0],!Ade(i))throw new TypeError(Oo("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!kur(r))throw new TypeError(Oo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Vur(r,"prng")){if(!Cur(r.prng))throw new TypeError(Oo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=No(r)}else e=No()}return i===void 0?t=p:t=l,Dt(t,"NAME","geometric"),r&&r.prng?(Dt(t,"seed",null),Dt(t,"seedLength",null),Bur(t,"state",Gur(null),Tde),Dt(t,"stateLength",null),Dt(t,"byteLength",null),Dt(t,"toJSON",Gur(null)),Dt(t,"PRNG",e)):(So(t,"seed",a),So(t,"seedLength",n),Bur(t,"state",v,f),So(t,"stateLength",u),So(t,"byteLength",o),Dt(t,"toJSON",c),Dt(t,"PRNG",e),e=e.normalized),t;function a(){return e.seed}function n(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Rde(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return Uur(e,i)}function p(m){return Ide(m)||m<0||m>1?NaN:Uur(e,m)}}Dur.exports=Pde});var Wur=s((Cit,zur)=>{"use strict";var Lde=d6(),Fde=Lde();zur.exports=Fde});var xur=s((Vit,Xur)=>{"use strict";var jde=D(),Hur=Wur(),Mde=d6();jde(Hur,"factory",Mde);Xur.exports=Hur});var $ur=s((Git,Yur)=>{"use strict";var Bde=Sr().isPrimitive,kde=zr().isPrimitive,Jur=V(),Cde=oe();function Vde(r,e){return!Bde(r)||Cde(r)?new TypeError(Jur("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):kde(e)?null:new TypeError(Jur("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Yur.exports=Vde});var Kur=s((Uit,Qur)=>{"use strict";var Zur=wr();function Gde(r,e,t){return e-t*Zur(-Zur(r()))}Qur.exports=Gde});var g6=s((Dit,uor)=>{"use strict";var zt=D(),_o=br(),ror=Nr(),eor=hr(),tor=qr(),ior=vr(),aor=mr(),Ude=Pr(),Ao=Hr().factory,nor=W(),Dde=Or(),To=V(),zde=$ur(),sor=Kur();function Wde(){var r,e,t,i,a,n;if(arguments.length===0)t=Ao();else if(arguments.length===1){if(e=arguments[0],!eor(e))throw new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ior(e,"prng")){if(!tor(e.prng))throw new TypeError(To("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ao(e)}else{if(n=arguments[0],r=arguments[1],a=zde(n,r),a)throw a;if(arguments.length>2){if(e=arguments[2],!eor(e))throw new TypeError(To("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ior(e,"prng")){if(!tor(e.prng))throw new TypeError(To("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ao(e)}else t=Ao()}return n===void 0?i=y:i=m,zt(i,"NAME","gumbel"),e&&e.prng?(zt(i,"seed",null),zt(i,"seedLength",null),ror(i,"state",aor(null),Ude),zt(i,"stateLength",null),zt(i,"byteLength",null),zt(i,"toJSON",aor(null)),zt(i,"PRNG",t)):(_o(i,"seed",u),_o(i,"seedLength",o),ror(i,"state",c,l),_o(i,"stateLength",v),_o(i,"byteLength",f),zt(i,"toJSON",p),zt(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Dde(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return sor(t,n,r)}function y(g,d){return nor(g)||nor(d)||d<=0?NaN:sor(t,g,d)}}uor.exports=Wde});var vor=s((zit,oor)=>{"use strict";var Hde=g6(),Xde=Hde();oor.exports=Xde});var por=s((Wit,lor)=>{"use strict";var xde=D(),cor=vor(),Jde=g6();xde(cor,"factory",Jde);lor.exports=cor});var gor=s((Hit,dor)=>{"use strict";var m6=be().isPrimitive,B0=V();function Yde(r,e,t){return m6(r)?m6(e)?m6(t)?t>r?new RangeError(B0("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(B0("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(B0("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(B0("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(B0("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}dor.exports=Yde});var mor=s((Xit,$de)=>{$de.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var hor=s((xit,yor)=>{"use strict";var Zde=W(),Qde=Se(),Kde=rn(),rge=pr(),ege=mor(),tge=170;function ige(r){return Zde(r)?NaN:Qde(r)?r<0?NaN:r<=tge?ege[r]:rge:Kde(r+1)}yor.exports=ige});var bor=s((Jit,qor)=>{"use strict";var age=hor();qor.exports=age});var Eor=s((Yit,wor)=>{"use strict";var ki=bor();function nge(r,e,t,i){var a,n,u;for(i<t?(a=ki(t)*ki(e+t-i)/(ki(e+t)*ki(t-i)),u=0):(a=ki(e)*ki(i)/(ki(i-t)*ki(e+t)),u=i-t),n=r();n>a;)n-=a,a*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}wor.exports=nge});var Nor=s(($it,Sor)=>{"use strict";var Io=Eor();function sge(r,e,t,i){var a,n,u,o;return i>e/2?(u=e-i,2*t<=e?(a=t,n=e-t,o=Io(r,a,n,u),t-o):(n=t,a=e-t,o=Io(r,a,n,u),i-e+t+o)):(u=i,2*t<=e?(a=t,n=e-t,o=Io(r,a,n,u),o):(a=e-t,n=t,o=Io(r,a,n,u),i-o))}Sor.exports=sge});var h6=s((Zit,Lor)=>{"use strict";var Wt=D(),Ro=br(),Oor=Nr(),_or=hr(),Aor=qr(),Tor=vr(),Ior=mr(),uge=Pr(),Po=Hr().factory,y6=I3(),Ror=pr(),oge=Or(),Lo=V(),vge=gor(),Por=Nor();function fge(){var r,e,t,i,a,n,u;if(arguments.length===0)e=Po();else if(arguments.length===1){if(r=arguments[0],!_or(r))throw new TypeError(Lo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Tor(r,"prng")){if(!Aor(r.prng))throw new TypeError(Lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Po(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=vge(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!_or(r))throw new TypeError(Lo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Tor(r,"prng")){if(!Aor(r.prng))throw new TypeError(Lo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Po(r)}else e=Po()}return a===void 0?t=g:t=y,Wt(t,"NAME","hypergeometric"),r&&r.prng?(Wt(t,"seed",null),Wt(t,"seedLength",null),Oor(t,"state",Ior(null),uge),Wt(t,"stateLength",null),Wt(t,"byteLength",null),Wt(t,"toJSON",Ior(null)),Wt(t,"PRNG",e)):(Ro(t,"seed",o),Ro(t,"seedLength",v),Oor(t,"state",l,p),Ro(t,"stateLength",f),Ro(t,"byteLength",c),Wt(t,"toJSON",m),Wt(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=oge(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return Por(e,a,n,u)}function g(d,h,q){return d===Ror||h===Ror||!y6(d)||!y6(h)||!y6(q)||q>d?NaN:Por(e,d,h,q)}}Lor.exports=fge});var jor=s((Qit,For)=>{"use strict";var cge=h6(),lge=cge();For.exports=lge});var kor=s((Kit,Bor)=>{"use strict";var pge=D(),Mor=jor(),dge=h6();pge(Mor,"factory",dge);Bor.exports=Mor});var Uor=s((rat,Gor)=>{"use strict";var Cor=zr().isPrimitive,Vor=V();function gge(r,e){return Cor(r)?Cor(e)?null:new TypeError(Vor("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Vor("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Gor.exports=gge});var q6=s((eat,Jor)=>{"use strict";var Ci=D(),Fo=br(),Dor=Nr(),zor=hr(),Wor=qr(),Hor=vr(),Xor=mr(),mge=Pr(),yn=fn().factory,xor=W(),yge=Or(),jo=V(),hge=Uor();function qge(){var r,e,t,i,a,n,u;if(arguments.length===0)r=yn();else if(arguments.length===1){if(i=arguments[0],!zor(i))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Hor(i,"prng")){if(!Wor(i.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=yn({prng:i.prng})}else r=yn(i)}else{if(e=arguments[0],t=arguments[1],u=hge(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!zor(i))throw new TypeError(jo("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Hor(i,"prng")){if(!Wor(i.prng))throw new TypeError(jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=yn(e,t,{prng:i.prng})}else r=yn(e,t,i)}else r=yn(e,t)}return e===void 0?n=g:n=y,a=r.PRNG,Ci(n,"NAME","invgamma"),i&&i.prng?(Ci(n,"seed",null),Ci(n,"seedLength",null),Dor(n,"state",Xor(null),mge),Ci(n,"stateLength",null),Ci(n,"byteLength",null),Ci(n,"toJSON",Xor(null))):(Fo(n,"seed",o),Fo(n,"seedLength",v),Dor(n,"state",l,p),Fo(n,"stateLength",f),Fo(n,"byteLength",c),Ci(n,"toJSON",m)),Ci(n,"PRNG",a),n;function o(){return a.seed}function v(){return a.seedLength}function f(){return a.stateLength}function c(){return a.byteLength}function l(){return a.state}function p(d){a.state=d}function m(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=yge(a.state),e===void 0?d.params=[]:d.params=[e,t],d}function y(){return 1/r()}function g(d,h){return xor(d)||xor(h)||d<=0||h<=0?NaN:1/r(d,h)}}Jor.exports=qge});var $or=s((tat,Yor)=>{"use strict";var bge=q6(),wge=bge();Yor.exports=wge});var Kor=s((iat,Qor)=>{"use strict";var Ege=D(),Zor=$or(),Sge=q6();Ege(Zor,"factory",Sge);Qor.exports=Zor});var i1r=s((aat,t1r)=>{"use strict";var r1r=zr().isPrimitive,e1r=V();function Nge(r,e){return r1r(r)?r1r(e)?null:new TypeError(e1r("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(e1r("invalid argument. First argument must be a positive number. Value: `%s`.",r))}t1r.exports=Nge});var s1r=s((nat,n1r)=>{"use strict";var a1r=Gr();function Oge(r,e,t){var i=r();return a1r(1-a1r(1-i,1/t),1/e)}n1r.exports=Oge});var b6=s((sat,d1r)=>{"use strict";var Ht=D(),Mo=br(),u1r=Nr(),o1r=hr(),v1r=qr(),f1r=vr(),c1r=mr(),_ge=Pr(),Bo=Hr().factory,l1r=W(),Age=Or(),ko=V(),Tge=i1r(),p1r=s1r();function Ige(){var r,e,t,i,a,n;if(arguments.length===0)e=Bo();else if(arguments.length===1){if(r=arguments[0],!o1r(r))throw new TypeError(ko("invalid argument. Options argument must be an object. Value: `%s`.",r));if(f1r(r,"prng")){if(!v1r(r.prng))throw new TypeError(ko("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bo(r)}else{if(a=arguments[0],n=arguments[1],i=Tge(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!o1r(r))throw new TypeError(ko("invalid argument. Options argument must be an object. Value: `%s`.",r));if(f1r(r,"prng")){if(!v1r(r.prng))throw new TypeError(ko("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bo(r)}else e=Bo()}return a===void 0?t=y:t=m,Ht(t,"NAME","kumaraswamy"),r&&r.prng?(Ht(t,"seed",null),Ht(t,"seedLength",null),u1r(t,"state",c1r(null),_ge),Ht(t,"stateLength",null),Ht(t,"byteLength",null),Ht(t,"toJSON",c1r(null)),Ht(t,"PRNG",e)):(Mo(t,"seed",u),Mo(t,"seedLength",o),u1r(t,"state",c,l),Mo(t,"stateLength",v),Mo(t,"byteLength",f),Ht(t,"toJSON",p),Ht(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Age(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return p1r(e,a,n)}function y(g,d){return l1r(g)||l1r(d)||g<=0||d<=0?NaN:p1r(e,g,d)}}d1r.exports=Ige});var m1r=s((uat,g1r)=>{"use strict";var Rge=b6(),Pge=Rge();g1r.exports=Pge});var q1r=s((oat,h1r)=>{"use strict";var Lge=D(),y1r=m1r(),Fge=b6();Lge(y1r,"factory",Fge);h1r.exports=y1r});var E1r=s((vat,w1r)=>{"use strict";var jge=Sr().isPrimitive,Mge=zr().isPrimitive,b1r=V(),Bge=oe();function kge(r,e){return!jge(r)||Bge(r)?new TypeError(b1r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Mge(e)?null:new TypeError(b1r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}w1r.exports=kge});var N1r=s((fat,S1r)=>{"use strict";var Cge=Xu(),Vge=Dr(),Gge=wr();function Uge(r,e,t){var i=r()-.5;return e-t*Cge(i)*Gge(1-2*Vge(i))}S1r.exports=Uge});var w6=s((cat,L1r)=>{"use strict";var Xt=D(),Co=br(),O1r=Nr(),_1r=hr(),A1r=qr(),T1r=vr(),I1r=mr(),Dge=Pr(),Vo=Hr().factory,R1r=W(),zge=Or(),Go=V(),Wge=E1r(),P1r=N1r();function Hge(){var r,e,t,i,a,n;if(arguments.length===0)e=Vo();else if(arguments.length===1){if(r=arguments[0],!_1r(r))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",r));if(T1r(r,"prng")){if(!A1r(r.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vo(r)}else{if(a=arguments[0],n=arguments[1],i=Wge(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!_1r(r))throw new TypeError(Go("invalid argument. Options argument must be an object. Value: `%s`.",r));if(T1r(r,"prng")){if(!A1r(r.prng))throw new TypeError(Go("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vo(r)}else e=Vo()}return a===void 0?t=y:t=m,Xt(t,"NAME","laplace"),r&&r.prng?(Xt(t,"seed",null),Xt(t,"seedLength",null),O1r(t,"state",I1r(null),Dge),Xt(t,"stateLength",null),Xt(t,"byteLength",null),Xt(t,"toJSON",I1r(null)),Xt(t,"PRNG",e)):(Co(t,"seed",u),Co(t,"seedLength",o),O1r(t,"state",c,l),Co(t,"stateLength",v),Co(t,"byteLength",f),Xt(t,"toJSON",p),Xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=zge(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return P1r(e,a,n)}function y(g,d){return R1r(g)||R1r(d)||d<=0?NaN:P1r(e,g,d)}}L1r.exports=Hge});var j1r=s((lat,F1r)=>{"use strict";var Xge=w6(),xge=Xge();F1r.exports=xge});var k1r=s((pat,B1r)=>{"use strict";var Jge=D(),M1r=j1r(),Yge=w6();Jge(M1r,"factory",Yge);B1r.exports=M1r});var G1r=s((dat,V1r)=>{"use strict";var $ge=Sr().isPrimitive,Zge=zr().isPrimitive,C1r=V(),Qge=oe();function Kge(r,e){return!$ge(r)||Qge(r)?new TypeError(C1r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Zge(e)?null:new TypeError(C1r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}V1r.exports=Kge});var D1r=s((gat,U1r)=>{"use strict";var rme=vu(),E6=W(),eme=Rr();function tme(r,e,t){var i,a;return E6(e)||E6(t)||E6(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,a=t*eme(2),i+a*rme(2*r-1))}U1r.exports=tme});var W1r=s((mat,z1r)=>{"use strict";var ime=mr(),ame=e6().factory,nme=vu(),S6=W(),sme=Rr();function ume(r,e){var t,i;if(S6(r)||S6(e)||e<0)return ime(NaN);return e===0&&ame(r),t=r,i=e*sme(2),a;function a(n){return S6(n)||n<0||n>1?NaN:t+i*nme(2*n-1)}}z1r.exports=ume});var N6=s((yat,X1r)=>{"use strict";var ome=D(),H1r=D1r(),vme=W1r();ome(H1r,"factory",vme);X1r.exports=H1r});var J1r=s((hat,x1r)=>{"use strict";var fme=N6();function cme(r,e,t){var i=fme(1-r()/2,0,1);return e+t/(i*i)}x1r.exports=cme});var O6=s((qat,t2r)=>{"use strict";var xt=D(),Uo=br(),Y1r=Nr(),$1r=hr(),Z1r=qr(),Q1r=vr(),K1r=mr(),lme=Pr(),Do=Hr().factory,r2r=W(),pme=Or(),zo=V(),dme=G1r(),e2r=J1r();function gme(){var r,e,t,i,a,n;if(arguments.length===0)e=Do();else if(arguments.length===1){if(r=arguments[0],!$1r(r))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Q1r(r,"prng")){if(!Z1r(r.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Do(r)}else{if(a=arguments[0],n=arguments[1],i=dme(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!$1r(r))throw new TypeError(zo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Q1r(r,"prng")){if(!Z1r(r.prng))throw new TypeError(zo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Do(r)}else e=Do()}return a===void 0?t=y:t=m,xt(t,"NAME","levy"),r&&r.prng?(xt(t,"seed",null),xt(t,"seedLength",null),Y1r(t,"state",K1r(null),lme),xt(t,"stateLength",null),xt(t,"byteLength",null),xt(t,"toJSON",K1r(null)),xt(t,"PRNG",e)):(Uo(t,"seed",u),Uo(t,"seedLength",o),Y1r(t,"state",c,l),Uo(t,"stateLength",v),Uo(t,"byteLength",f),xt(t,"toJSON",p),xt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=pme(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return e2r(e,a,n)}function y(g,d){return r2r(g)||r2r(d)||d<=0?NaN:e2r(e,g,d)}}t2r.exports=gme});var a2r=s((bat,i2r)=>{"use strict";var mme=O6(),yme=mme();i2r.exports=yme});var u2r=s((wat,s2r)=>{"use strict";var hme=D(),n2r=a2r(),qme=O6();hme(n2r,"factory",qme);s2r.exports=n2r});var f2r=s((Eat,v2r)=>{"use strict";var bme=Sr().isPrimitive,wme=zr().isPrimitive,Eme=oe(),o2r=V();function Sme(r,e){return!bme(r)||Eme(r)?new TypeError(o2r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wme(e)?null:new TypeError(o2r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}v2r.exports=Sme});var l2r=s((Sat,c2r)=>{"use strict";var Nme=wr();function Ome(r,e,t){var i=r();return e+t*Nme(i/(1-i))}c2r.exports=Ome});var _6=s((Nat,b2r)=>{"use strict";var Jt=D(),Wo=br(),p2r=Nr(),d2r=hr(),g2r=qr(),m2r=vr(),y2r=mr(),_me=Pr(),Ho=Hr().factory,h2r=W(),Ame=Or(),Xo=V(),Tme=f2r(),q2r=l2r();function Ime(){var r,e,t,i,a,n;if(arguments.length===0)e=Ho();else if(arguments.length===1){if(r=arguments[0],!d2r(r))throw new TypeError(Xo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(m2r(r,"prng")){if(!g2r(r.prng))throw new TypeError(Xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ho(r)}else{if(a=arguments[0],n=arguments[1],i=Tme(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!d2r(r))throw new TypeError(Xo("invalid argument. Options argument must be an object. Value: `%s`.",r));if(m2r(r,"prng")){if(!g2r(r.prng))throw new TypeError(Xo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ho(r)}else e=Ho()}return a===void 0?t=y:t=m,Jt(t,"NAME","logistic"),r&&r.prng?(Jt(t,"seed",null),Jt(t,"seedLength",null),p2r(t,"state",y2r(null),_me),Jt(t,"stateLength",null),Jt(t,"byteLength",null),Jt(t,"toJSON",y2r(null)),Jt(t,"PRNG",e)):(Wo(t,"seed",u),Wo(t,"seedLength",o),p2r(t,"state",c,l),Wo(t,"stateLength",v),Wo(t,"byteLength",f),Jt(t,"toJSON",p),Jt(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Ame(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return q2r(e,a,n)}function y(g,d){return h2r(g)||h2r(d)||d<=0?NaN:q2r(e,g,d)}}b2r.exports=Ime});var E2r=s((Oat,w2r)=>{"use strict";var Rme=_6(),Pme=Rme();w2r.exports=Pme});var O2r=s((_at,N2r)=>{"use strict";var Lme=D(),S2r=E2r(),Fme=_6();Lme(S2r,"factory",Fme);N2r.exports=S2r});var T2r=s((Aat,A2r)=>{"use strict";var jme=Sr().isPrimitive,Mme=zr().isPrimitive,_2r=V(),Bme=oe();function kme(r,e){return!jme(r)||Bme(r)?new TypeError(_2r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Mme(e)?null:new TypeError(_2r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}A2r.exports=kme});var R2r=s((Tat,I2r)=>{"use strict";var Cme=Yr();function Vme(r,e,t){return Cme(e+t*r())}I2r.exports=Vme});var A6=s((Iat,C2r)=>{"use strict";var Vi=D(),xo=br(),P2r=Nr(),L2r=hr(),F2r=qr(),j2r=vr(),M2r=mr(),Gme=Pr(),hn=Ri().factory,B2r=W(),Ume=Or(),Jo=V(),Dme=T2r(),k2r=R2r();function zme(){var r,e,t,i,a,n,u;if(arguments.length===0)e=hn();else if(arguments.length===1){if(t=arguments[0],!L2r(t))throw new TypeError(Jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(j2r(t,"prng")){if(!F2r(t.prng))throw new TypeError(Jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=hn({prng:t.prng})}else e=hn(t)}else{if(u=arguments[0],r=arguments[1],n=Dme(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!L2r(t))throw new TypeError(Jo("invalid argument. Options argument must be an object. Value: `%s`.",t));if(j2r(t,"prng")){if(!F2r(t.prng))throw new TypeError(Jo("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=hn({prng:t.prng})}else e=hn(t)}else e=hn()}return u===void 0?a=g:a=y,i=e.PRNG,Vi(a,"NAME","lognormal"),t&&t.prng?(Vi(a,"seed",null),Vi(a,"seedLength",null),P2r(a,"state",M2r(null),Gme),Vi(a,"stateLength",null),Vi(a,"byteLength",null),Vi(a,"toJSON",M2r(null))):(xo(a,"seed",o),xo(a,"seedLength",v),P2r(a,"state",l,p),xo(a,"stateLength",f),xo(a,"byteLength",c),Vi(a,"toJSON",m)),Vi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Ume(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return k2r(e,u,r)}function g(d,h){return B2r(d)||B2r(h)||h<=0?NaN:k2r(e,d,h)}}C2r.exports=zme});var G2r=s((Rat,V2r)=>{"use strict";var Wme=A6(),Hme=Wme();V2r.exports=Hme});var z2r=s((Pat,D2r)=>{"use strict";var Xme=D(),U2r=G2r(),xme=A6();Xme(U2r,"factory",xme);D2r.exports=U2r});var T6=s((Lat,W2r)=>{"use strict";var Jme=wa(),Yme=Ur(),$me=Jme-1;function Zme(){var r=Yme(1+$me*Math.random());return r|0}W2r.exports=Zme});var P6=s((Fat,Y2r)=>{"use strict";var Yt=D(),Gi=br(),H2r=Nr(),I6=vr(),Qme=hr(),Kme=de().isPrimitive,rye=Ve(),eye=nt().isPrimitive,X2r=rs(),Qe=V(),Yo=wa(),Le=oi(),qn=Oi(),tye=Or(),x2r=T6(),R6=Yo-1|0,iye=Yo-1|0,aye=16807,$o=1,Zo=2,Ui=2,Fe=4,k0=5;function J2r(r,e){var t;return e?t="option":t="argument",r.length<k0+1?new RangeError(Qe("invalid %s. State array has insufficient length.",t)):r[0]!==$o?new RangeError(Qe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,$o,r[0])):r[1]!==Zo?new RangeError(Qe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Zo,r[1])):r[Ui]!==1?new RangeError(Qe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ui])):r[Fe]!==r.length-k0?new RangeError(Qe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-k0,r[Fe])):null}function nye(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!Qme(r))throw new TypeError(Qe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(I6(r,"copy")&&(i.copy=r.copy,!Kme(r.copy)))throw new TypeError(Qe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(I6(r,"state")){if(t=r.state,i.state=!0,!X2r(t))throw new TypeError(Qe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=J2r(t,!0),u)throw u;i.copy===!1?e=t:(e=new Le(t.length),qn(t.length,t,1,e,1)),t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,t[Fe])}if(a===void 0)if(I6(r,"seed"))if(a=r.seed,i.seed=!0,eye(a)){if(a>iye)throw new RangeError(Qe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(rye(a)&&a.length>0)n=a.length,e=new Le(k0+n),e[0]=$o,e[1]=Zo,e[Ui]=1,e[Fe]=n,qn.ndarray(n,a,1,0,e,1,Fe+1),t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,n),t[0]=a[0];else throw new TypeError(Qe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=x2r()|0}else a=x2r()|0;return t===void 0&&(e=new Le(k0+1),e[0]=$o,e[1]=Zo,e[Ui]=1,e[Fe]=1,e[Fe+1]=a,t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,1),t[0]=a[0]),Yt(y,"NAME","minstd"),Gi(y,"seed",o),Gi(y,"seedLength",v),H2r(y,"state",l,p),Gi(y,"stateLength",f),Gi(y,"byteLength",c),Yt(y,"toJSON",m),Yt(y,"MIN",1),Yt(y,"MAX",Yo-1),Yt(y,"normalized",g),Yt(g,"NAME",y.NAME),Gi(g,"seed",o),Gi(g,"seedLength",v),H2r(g,"state",l,p),Gi(g,"stateLength",f),Gi(g,"byteLength",c),Yt(g,"toJSON",m),Yt(g,"MIN",(y.MIN-1)/R6),Yt(g,"MAX",(y.MAX-1)/R6),y;function o(){var d=e[Fe];return qn(d,a,1,new Le(d),1)}function v(){return e[Fe]}function f(){return e.length}function c(){return e.byteLength}function l(){var d=e.length;return qn(d,e,1,new Le(d),1)}function p(d){var h;if(!X2r(d))throw new TypeError(Qe("invalid argument. Must provide an Int32Array. Value: `%s`.",d));if(h=J2r(d,!1),h)throw h;i.copy===!1?i.state&&d.length===e.length?qn(d.length,d,1,e,1):(e=d,i.state=!0):(d.length!==e.length&&(e=new Le(d.length)),qn(d.length,d,1,e,1)),t=new Le(e.buffer,e.byteOffset+(Ui+1)*e.BYTES_PER_ELEMENT,1),a=new Le(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,e[Fe])}function m(){var d={};return d.type="PRNG",d.name=y.NAME,d.state=tye(e),d.params=[],d}function y(){var d=t[0]|0;return d=aye*d%Yo|0,t[0]=d,d|0}function g(){return(y()-1)/R6}}Y2r.exports=nye});var Z2r=s((jat,$2r)=>{"use strict";var sye=P6(),uye=T6(),oye=sye({seed:uye()});$2r.exports=oye});var rvr=s((Mat,K2r)=>{"use strict";var vye=D(),Q2r=Z2r(),fye=P6();vye(Q2r,"factory",fye);K2r.exports=Q2r});var tvr=s((Bat,evr)=>{"use strict";var cye=W(),lye=8;function pye(r,e,t){var i,a;for(a=0;a<lye;a++)if(i=r(),cye(i))throw new Error("unexpected error. PRNG returned NaN.");for(a=t-1;a>=0;a--)e[a]=r();return e}evr.exports=pye});var L6=s((kat,ivr)=>{"use strict";var dye=wa(),gye=Ur(),mye=dye-1;function yye(){var r=gye(1+mye*Math.random());return r|0}ivr.exports=yye});var M6=s((Cat,vvr)=>{"use strict";var $t=D(),Di=br(),avr=Nr(),F6=vr(),hye=hr(),qye=de().isPrimitive,bye=Ve(),wye=nt().isPrimitive,nvr=rs(),bn=Oi(),Eye=Ur(),je=oi(),C0=wa(),Sye=Or(),xe=V(),svr=tvr(),uvr=L6(),j6=C0-1|0,Nye=C0-1|0,Oye=16807,Be=32,r1=1,e1=3,zi=2,wn=Be+3,Me=Be+6,V0=Be+7,Qo=wn+1,Ko=wn+2;function ovr(r,e){var t;return e?t="option":t="argument",r.length<V0+1?new RangeError(xe("invalid %s. State array has insufficient length.",t)):r[0]!==r1?new RangeError(xe("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,r1,r[0])):r[1]!==e1?new RangeError(xe("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,e1,r[1])):r[zi]!==Be?new RangeError(xe("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Be,r[zi])):r[wn]!==2?new RangeError(xe("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[wn])):r[Me]!==r.length-V0?new RangeError(xe("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-V0,r[Me])):null}function _ye(r){var e,t,i,a,n,u;if(i={},arguments.length){if(!hye(r))throw new TypeError(xe("invalid argument. Options argument must be an object. Value: `%s`.",r));if(F6(r,"copy")&&(i.copy=r.copy,!qye(r.copy)))throw new TypeError(xe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(F6(r,"state")){if(t=r.state,i.state=!0,!nvr(t))throw new TypeError(xe("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=ovr(t,!0),u)throw u;i.copy===!1?e=t:(e=new je(t.length),bn(t.length,t,1,e,1)),t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,t[Me])}if(a===void 0)if(F6(r,"seed"))if(a=r.seed,i.seed=!0,wye(a)){if(a>Nye)throw new RangeError(xe("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",a));a|=0}else if(bye(a)&&a.length>0)n=a.length,e=new je(V0+n),e[0]=r1,e[1]=e1,e[zi]=Be,e[wn]=2,e[Ko]=a[0],e[Me]=n,bn.ndarray(n,a,1,0,e,1,Me+1),t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,n),t=svr(y,t,Be),e[Qo]=t[0];else throw new TypeError(xe("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",a));else a=uvr()|0}else a=uvr()|0;return t===void 0&&(e=new je(V0+1),e[0]=r1,e[1]=e1,e[zi]=Be,e[wn]=2,e[Ko]=a,e[Me]=1,e[Me+1]=a,t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,1),t=svr(y,t,Be),e[Qo]=t[0]),$t(g,"NAME","minstd-shuffle"),Di(g,"seed",o),Di(g,"seedLength",v),avr(g,"state",l,p),Di(g,"stateLength",f),Di(g,"byteLength",c),$t(g,"toJSON",m),$t(g,"MIN",1),$t(g,"MAX",C0-1),$t(g,"normalized",d),$t(d,"NAME",g.NAME),Di(d,"seed",o),Di(d,"seedLength",v),avr(d,"state",l,p),Di(d,"stateLength",f),Di(d,"byteLength",c),$t(d,"toJSON",m),$t(d,"MIN",(g.MIN-1)/j6),$t(d,"MAX",(g.MAX-1)/j6),g;function o(){var h=e[Me];return bn(h,a,1,new je(h),1)}function v(){return e[Me]}function f(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return bn(h,e,1,new je(h),1)}function p(h){var q;if(!nvr(h))throw new TypeError(xe("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(q=ovr(h,!1),q)throw q;i.copy===!1?i.state&&h.length===e.length?bn(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new je(h.length)),bn(h.length,h,1,e,1)),t=new je(e.buffer,e.byteOffset+(zi+1)*e.BYTES_PER_ELEMENT,Be),a=new je(e.buffer,e.byteOffset+(Me+1)*e.BYTES_PER_ELEMENT,e[Me])}function m(){var h={};return h.type="PRNG",h.name=g.NAME,h.state=Sye(e),h.params=[],h}function y(){var h=e[Ko]|0;return h=Oye*h%C0|0,e[Ko]=h,h|0}function g(){var h,q;return h=e[Qo],q=Eye(Be*(h/C0)),h=t[q],e[Qo]=h,t[q]=y(),h}function d(){return(g()-1)/j6}}vvr.exports=_ye});var cvr=s((Vat,fvr)=>{"use strict";var Aye=M6(),Tye=L6(),Iye=Aye({seed:Tye()});fvr.exports=Iye});var dvr=s((Gat,pvr)=>{"use strict";var Rye=D(),lvr=cvr(),Pye=M6();Rye(lvr,"factory",Pye);pvr.exports=lvr});var mvr=s((Uat,gvr)=>{"use strict";var Lye=Yr();function Fye(r,e){for(var t=r(),i=1;t>Lye(-e);)i+=1,t*=r();return i-1}gvr.exports=Fye});var hvr=s((Dat,yvr)=>{"use strict";var jye=Ur();function Mye(r){return jye(r)===r&&r<0}yvr.exports=Mye});var bvr=s((zat,qvr)=>{"use strict";var Bye=hvr();qvr.exports=Bye});var Evr=s((Wat,wvr)=>{"use strict";var kye=bvr(),Cye=m0();function Vye(r){return kye(r)?NaN:Cye(r+1)}wvr.exports=Vye});var Nvr=s((Hat,Svr)=>{"use strict";var Gye=Evr();Svr.exports=Gye});var Tvr=s((Xat,Avr)=>{"use strict";var Uye=Nvr(),Ovr=Ur(),Dye=Xu(),zye=Rr(),_vr=Dr(),t1=wr(),Wye=uf(),Hye=1/12,Xye=1/360;function xye(r,e){var t,i,a,n,u,o,v,f,c,l;for(t=zye(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,a=.86*u;;){if(l=r(),l<=a)return c=l/u-.43,c*=2*o/(.5-_vr(c))+v,c+=e+.445,Ovr(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=Dye(c)*.5-c,l=u*r()),n=.5-_vr(c),(n>=.013||n>=l)&&(f=Ovr((2*o/n+v)*c+e+.445),l*=i/(o/(n*n)+v),c=(f+.5)*t1(e/f),c+=-e-Wye+f,c-=(Hye-Xye/(f*f))/f,f>=10&&c>=t1(l*t)||(c=f*t1(e)-e-Uye(f),f>=0&&f<=9&&c>=t1(l))))return f}}Avr.exports=xye});var Rvr=s((xat,Ivr)=>{"use strict";var Jye=mvr(),Yye=Tvr();function $ye(r,e){return e<30?Jye(r,e):Yye(r,e)}Ivr.exports=$ye});var B6=s((Jat,kvr)=>{"use strict";var Zt=D(),i1=br(),Pvr=Nr(),Zye=zr().isPrimitive,Lvr=hr(),Fvr=qr(),jvr=vr(),Mvr=mr(),Qye=Pr(),a1=Hr().factory,Kye=W(),rhe=Or(),n1=V(),Bvr=Rvr();function ehe(){var r,e,t,i;if(arguments.length===0)t=a1();else if(arguments.length===1&&Lvr(arguments[0]))if(e=arguments[0],jvr(e,"prng")){if(!Fvr(e.prng))throw new TypeError(n1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=a1(e);else{if(r=arguments[0],!Zye(r))throw new TypeError(n1("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!Lvr(e))throw new TypeError(n1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(jvr(e,"prng")){if(!Fvr(e.prng))throw new TypeError(n1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=a1(e)}else t=a1()}return r===void 0?i=p:i=l,Zt(i,"NAME","poisson"),e&&e.prng?(Zt(i,"seed",null),Zt(i,"seedLength",null),Pvr(i,"state",Mvr(null),Qye),Zt(i,"stateLength",null),Zt(i,"byteLength",null),Zt(i,"toJSON",Mvr(null)),Zt(i,"PRNG",t)):(i1(i,"seed",a),i1(i,"seedLength",n),Pvr(i,"state",v,f),i1(i,"stateLength",u),i1(i,"byteLength",o),Zt(i,"toJSON",c),Zt(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=rhe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Bvr(t,r)}function p(m){return Kye(m)||m<=0?NaN:Bvr(t,m)}}kvr.exports=ehe});var Vvr=s((Yat,Cvr)=>{"use strict";var the=B6(),ihe=the();Cvr.exports=ihe});var k6=s(($at,Uvr)=>{"use strict";var ahe=D(),Gvr=Vvr(),nhe=B6();ahe(Gvr,"factory",nhe);Uvr.exports=Gvr});var zvr=s((Zat,Dvr)=>{"use strict";var she=zr().isPrimitive,uhe=Sr().isPrimitive,C6=V(),ohe=oe();function vhe(r,e){return she(r)?!uhe(e)||ohe(e)?new TypeError(C6("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(C6("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(C6("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Dvr.exports=vhe});var D6=s((Qat,Zvr)=>{"use strict";var Wi=D(),s1=br(),Wvr=Nr(),En=vr(),Hvr=hr(),V6=qt(),Xvr=de().isPrimitive,xvr=qr(),Jvr=mr(),fhe=Pr(),Yvr=W(),Sn=k6().factory,u1=fn().factory,G6=Oi(),U6=me(),$vr=L0(),che=Or(),Qt=V(),lhe=zvr();function phe(){var r,e,t,i,a,n,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Sn(i);else if(arguments.length===1){if(i=arguments[0],!Hvr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(En(i,"copy")&&!Xvr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(En(i,"prng")){if(!xvr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Sn({prng:i.prng})}else{if(En(i,"state")&&!V6(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=$vr({},i),i.copy===!1?u=!1:i.state&&(i.state=G6(i.state.length,i.state,1,new U6(i.state.length),1)),i.copy=!1,t=Sn(i)}}else{if(f=arguments[0],v=arguments[1],o=lhe(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!Hvr(i))throw new TypeError(Qt("invalid argument. Options argument must be an object. Value: `%s`.",i));if(En(i,"copy")&&!Xvr(i.copy))throw new TypeError(Qt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(En(i,"prng")){if(!xvr(i.prng))throw new TypeError(Qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Sn({prng:i.prng})}else{if(En(i,"state")&&!V6(i.state))throw new TypeError(Qt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=$vr({},i),i.copy===!1?u=!1:i.state&&(i.state=G6(i.state.length,i.state,1,new U6(i.state.length),1)),i.copy=!1,t=Sn(i)}}else i={copy:!1},t=Sn(i)}return i&&i.prng?f===void 0?r=u1({prng:i.prng}):r=u1(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=u1({state:e,copy:!1}):r=u1(f,v/(1-v),{state:e,copy:!1})),f===void 0?a=q:a=h,n=t.PRNG,Wi(a,"NAME","negative-binomial"),i&&i.prng?(Wi(a,"seed",null),Wi(a,"seedLength",null),Wvr(a,"state",Jvr(null),fhe),Wi(a,"stateLength",null),Wi(a,"byteLength",null),Wi(a,"toJSON",Jvr(null))):(s1(a,"seed",c),s1(a,"seedLength",l),Wvr(a,"state",y,g),s1(a,"stateLength",p),s1(a,"byteLength",m),Wi(a,"toJSON",d)),Wi(a,"PRNG",n),a;function c(){return n.seed}function l(){return n.seedLength}function p(){return n.stateLength}function m(){return n.byteLength}function y(){return n.state}function g(w){if(!V6(w))throw new TypeError(Qt("invalid argument. Must provide a Uint32Array. Value: `%s`.",w));u&&(w=G6(w.length,w,1,new U6(w.length),1)),n.state=w}function d(){var w={};return w.type="PRNG",w.name=a.NAME,w.state=che(n.state),f===void 0?w.params=[]:w.params=[f,v],w}function h(){return t(r())}function q(w,_){return Yvr(w)||Yvr(_)||_<=0||_>=1?NaN:t(r(w,_/(1-_)))}}Zvr.exports=phe});var Kvr=s((Kat,Qvr)=>{"use strict";var dhe=D6(),ghe=dhe();Qvr.exports=ghe});var t3r=s((rnt,e3r)=>{"use strict";var mhe=D(),r3r=Kvr(),yhe=D6();mhe(r3r,"factory",yhe);e3r.exports=r3r});var n3r=s((ent,a3r)=>{"use strict";var hhe=Sr().isPrimitive,qhe=zr().isPrimitive,i3r=V(),bhe=oe();function whe(r,e){return!hhe(r)||bhe(r)?new TypeError(i3r("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):qhe(e)?null:new TypeError(i3r("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}a3r.exports=whe});var u3r=s((tnt,s3r)=>{"use strict";function Ehe(r,e,t){return e+t*r()}s3r.exports=Ehe});var z6=s((int,g3r)=>{"use strict";var Hi=D(),o1=br(),o3r=Nr(),v3r=hr(),f3r=qr(),c3r=vr(),l3r=mr(),She=Pr(),Nn=Ri().factory,p3r=W(),Nhe=Or(),v1=V(),Ohe=n3r(),d3r=u3r();function _he(){var r,e,t,i,a,n,u;if(arguments.length===0)e=Nn();else if(arguments.length===1){if(t=arguments[0],!v3r(t))throw new TypeError(v1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(c3r(t,"prng")){if(!f3r(t.prng))throw new TypeError(v1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Nn({prng:t.prng})}else e=Nn(t)}else{if(u=arguments[0],r=arguments[1],n=Ohe(u,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!v3r(t))throw new TypeError(v1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(c3r(t,"prng")){if(!f3r(t.prng))throw new TypeError(v1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Nn({prng:t.prng})}else e=Nn(t)}else e=Nn()}return u===void 0?a=g:a=y,i=e.PRNG,Hi(a,"NAME","normal"),t&&t.prng?(Hi(a,"seed",null),Hi(a,"seedLength",null),o3r(a,"state",l3r(null),She),Hi(a,"stateLength",null),Hi(a,"byteLength",null),Hi(a,"toJSON",l3r(null))):(o1(a,"seed",o),o1(a,"seedLength",v),o3r(a,"state",l,p),o1(a,"stateLength",f),o1(a,"byteLength",c),Hi(a,"toJSON",m)),Hi(a,"PRNG",i),a;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(d){i.state=d}function m(){var d={};return d.type="PRNG",d.name=a.NAME,d.state=Nhe(i.state),u===void 0?d.params=[]:d.params=[u,r],d}function y(){return d3r(e,u,r)}function g(d,h){return p3r(d)||p3r(h)||h<=0?NaN:d3r(e,d,h)}}g3r.exports=_he});var y3r=s((ant,m3r)=>{"use strict";var Ahe=z6(),The=Ahe();m3r.exports=The});var b3r=s((nnt,q3r)=>{"use strict";var Ihe=D(),h3r=y3r(),Rhe=z6();Ihe(h3r,"factory",Rhe);q3r.exports=h3r});var N3r=s((snt,S3r)=>{"use strict";var w3r=zr().isPrimitive,E3r=V();function Phe(r,e){return w3r(r)?w3r(e)?null:new TypeError(E3r("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(E3r("invalid argument. First argument must be a positive number. Value: `%s`.",r))}S3r.exports=Phe});var _3r=s((unt,O3r)=>{"use strict";var Lhe=Gr();function Fhe(r,e,t){return t/Lhe(r(),1/e)}O3r.exports=Fhe});var W6=s((ont,j3r)=>{"use strict";var Kt=D(),f1=br(),A3r=Nr(),T3r=hr(),I3r=qr(),R3r=vr(),P3r=mr(),jhe=Pr(),c1=Hr().factory,L3r=W(),Mhe=Or(),l1=V(),Bhe=N3r(),F3r=_3r();function khe(){var r,e,t,i,a,n;if(arguments.length===0)i=c1();else if(arguments.length===1){if(t=arguments[0],!T3r(t))throw new TypeError(l1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(R3r(t,"prng")){if(!I3r(t.prng))throw new TypeError(l1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=c1(t)}else{if(r=arguments[0],e=arguments[1],n=Bhe(r,e),n)throw n;if(arguments.length>2){if(t=arguments[2],!T3r(t))throw new TypeError(l1("invalid argument. Options argument must be an object. Value: `%s`.",t));if(R3r(t,"prng")){if(!I3r(t.prng))throw new TypeError(l1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=c1(t)}else i=c1()}return r===void 0?a=y:a=m,Kt(a,"NAME","pareto-type1"),t&&t.prng?(Kt(a,"seed",null),Kt(a,"seedLength",null),A3r(a,"state",P3r(null),jhe),Kt(a,"stateLength",null),Kt(a,"byteLength",null),Kt(a,"toJSON",P3r(null)),Kt(a,"PRNG",i)):(f1(a,"seed",u),f1(a,"seedLength",o),A3r(a,"state",c,l),f1(a,"stateLength",v),f1(a,"byteLength",f),Kt(a,"toJSON",p),Kt(a,"PRNG",i),i=i.normalized),a;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(g){i.state=g}function p(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Mhe(i.state),r===void 0?g.params=[]:g.params=[r,e],g}function m(){return F3r(i,r,e)}function y(g,d){return L3r(g)||L3r(d)||g<=0||d<=0?NaN:F3r(i,g,d)}}j3r.exports=khe});var B3r=s((vnt,M3r)=>{"use strict";var Che=W6(),Vhe=Che();M3r.exports=Vhe});var V3r=s((fnt,C3r)=>{"use strict";var Ghe=D(),k3r=B3r(),Uhe=W6();Ghe(k3r,"factory",Uhe);C3r.exports=k3r});var U3r=s((cnt,G3r)=>{"use strict";var Dhe=Rr(),zhe=wr();function Whe(r,e){return e*Dhe(-2*zhe(r()))}G3r.exports=Whe});var H6=s((lnt,J3r)=>{"use strict";var ri=D(),p1=br(),D3r=Nr(),Hhe=zr().isPrimitive,z3r=hr(),W3r=qr(),H3r=vr(),X3r=mr(),Xhe=Pr(),d1=Hr().factory,xhe=W(),Jhe=Or(),g1=V(),x3r=U3r();function Yhe(){var r,e,t,i;if(arguments.length===0)t=d1();else if(arguments.length===1&&z3r(arguments[0]))if(e=arguments[0],H3r(e,"prng")){if(!W3r(e.prng))throw new TypeError(g1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=d1(e);else{if(r=arguments[0],!Hhe(r))throw new TypeError(g1("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!z3r(e))throw new TypeError(g1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(H3r(e,"prng")){if(!W3r(e.prng))throw new TypeError(g1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=d1(e)}else t=d1()}return r===void 0?i=p:i=l,ri(i,"NAME","rayleigh"),e&&e.prng?(ri(i,"seed",null),ri(i,"seedLength",null),D3r(i,"state",X3r(null),Xhe),ri(i,"stateLength",null),ri(i,"byteLength",null),ri(i,"toJSON",X3r(null)),ri(i,"PRNG",t)):(p1(i,"seed",a),p1(i,"seedLength",n),D3r(i,"state",v,f),p1(i,"stateLength",u),p1(i,"byteLength",o),ri(i,"toJSON",c),ri(i,"PRNG",t),t=t.normalized),i;function a(){return t.seed}function n(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Jhe(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return x3r(t,r)}function p(m){return xhe(m)||m<=0?NaN:x3r(t,m)}}J3r.exports=Yhe});var $3r=s((pnt,Y3r)=>{"use strict";var $he=H6(),Zhe=$he();Y3r.exports=Zhe});var K3r=s((dnt,Q3r)=>{"use strict";var Qhe=D(),Z3r=$3r(),Khe=H6();Qhe(Z3r,"factory",Khe);Q3r.exports=Z3r});var Y6=s((gnt,ofr)=>{"use strict";var Xi=D(),m1=br(),rfr=Nr(),On=vr(),efr=zr().isPrimitive,tfr=hr(),X6=qt(),ifr=de().isPrimitive,rqe=W(),afr=qr(),nfr=mr(),eqe=Pr(),y1=M0().factory,_n=Ri().factory,x6=Oi(),J6=me(),sfr=L0(),tqe=Or(),gt=V(),ufr=Rr();function iqe(){var r,e,t,i,a,n,u,o;if(u=!0,arguments.length===0)a={copy:!1},t=_n(a);else if(arguments.length===1)if(tfr(arguments[0])){if(a=arguments[0],On(a,"copy")&&!ifr(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(On(a,"prng")){if(!afr(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=_n({prng:a.prng})}else{if(On(a,"state")&&!X6(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=sfr({},a),a.copy===!1?u=!1:a.state&&(a.state=x6(a.state.length,a.state,1,new J6(a.state.length),1)),a.copy=!1,t=_n(a)}}else{if(o=arguments[0],!efr(o))throw new TypeError(gt("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));a={copy:!1},t=_n(a)}else{if(o=arguments[0],!efr(o))throw new TypeError(gt("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(a=arguments[1],!tfr(a))throw new TypeError(gt("invalid argument. Options argument must be an object. Value: `%s`.",a));if(On(a,"copy")&&!ifr(a.copy))throw new TypeError(gt("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",a.copy));if(On(a,"prng")){if(!afr(a.prng))throw new TypeError(gt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",a.prng));t=_n({prng:a.prng})}else{if(On(a,"state")&&!X6(a.state))throw new TypeError(gt("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",a.state));a=sfr({},a),a.copy===!1?u=!1:a.state&&(a.state=x6(a.state.length,a.state,1,new J6(a.state.length),1)),a.copy=!1,t=_n(a)}}return a&&a.prng?o===void 0?r=y1({prng:a.prng}):r=y1(o,{prng:a.prng}):(a.state?e=a.state:(e=t.state,t.state=e),o===void 0?r=y1({state:e,copy:!1}):r=y1(o,{state:e,copy:!1})),o===void 0?n=d:n=g,i=t.PRNG,Xi(n,"NAME","t"),a&&a.prng?(Xi(n,"seed",null),Xi(n,"seedLength",null),rfr(n,"state",nfr(null),eqe),Xi(n,"stateLength",null),Xi(n,"byteLength",null),Xi(n,"toJSON",nfr(null))):(m1(n,"seed",v),m1(n,"seedLength",f),rfr(n,"state",p,m),m1(n,"stateLength",c),m1(n,"byteLength",l),Xi(n,"toJSON",y)),Xi(n,"PRNG",i),n;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!X6(h))throw new TypeError(gt("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));u&&(h=x6(h.length,h,1,new J6(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=n.NAME,h.state=tqe(i.state),o===void 0?h.params=[]:h.params=[o],h}function g(){return t()/ufr(r()/o)}function d(h){return rqe(h)||h<=0?NaN:t()/ufr(r(h)/h)}}ofr.exports=iqe});var ffr=s((mnt,vfr)=>{"use strict";var aqe=Y6(),nqe=aqe();vfr.exports=nqe});var pfr=s((ynt,lfr)=>{"use strict";var sqe=D(),cfr=ffr(),uqe=Y6();sqe(cfr,"factory",uqe);lfr.exports=cfr});var gfr=s((hnt,dfr)=>{"use strict";var $6=Sr().isPrimitive,h1=V(),Z6=oe();function oqe(r,e,t){return!$6(r)||Z6(r)?new TypeError(h1("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!$6(e)||Z6(e)?new TypeError(h1("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!$6(t)||Z6(t)?new TypeError(h1("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(h1("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}dfr.exports=oqe});var hfr=s((qnt,yfr)=>{"use strict";var mfr=Rr();function vqe(r,e,t,i){var a,n,u;return a=(i-e)/(t-e),u=r(),u<a?(n=(t-e)*(i-e),e+mfr(n*u)):(n=(t-e)*(t-i),t-mfr(n*(1-u)))}yfr.exports=vqe});var K6=s((bnt,Ofr)=>{"use strict";var ei=D(),q1=br(),qfr=Nr(),bfr=hr(),wfr=qr(),Efr=vr(),Sfr=mr(),fqe=Pr(),b1=Hr().factory,Q6=W(),cqe=Or(),w1=V(),lqe=gfr(),Nfr=hfr();function pqe(){var r,e,t,i,a,n,u;if(arguments.length===0)e=b1();else if(arguments.length===1){if(r=arguments[0],!bfr(r))throw new TypeError(w1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Efr(r,"prng")){if(!wfr(r.prng))throw new TypeError(w1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=b1(r)}else{if(a=arguments[0],n=arguments[1],u=arguments[2],i=lqe(a,n,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!bfr(r))throw new TypeError(w1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Efr(r,"prng")){if(!wfr(r.prng))throw new TypeError(w1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=b1(r)}else e=b1()}return a===void 0?t=g:t=y,ei(t,"NAME","triangular"),r&&r.prng?(ei(t,"seed",null),ei(t,"seedLength",null),qfr(t,"state",Sfr(null),fqe),ei(t,"stateLength",null),ei(t,"byteLength",null),ei(t,"toJSON",Sfr(null)),ei(t,"PRNG",e)):(q1(t,"seed",o),q1(t,"seedLength",v),qfr(t,"state",l,p),q1(t,"stateLength",f),q1(t,"byteLength",c),ei(t,"toJSON",m),ei(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(d){e.state=d}function m(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=cqe(e.state),a===void 0?d.params=[]:d.params=[a,n,u],d}function y(){return Nfr(e,a,n,u)}function g(d,h,q){return Q6(d)||Q6(h)||Q6(q)||!(d<=q&&q<=h)?NaN:Nfr(e,d,h,q)}}Ofr.exports=pqe});var Afr=s((wnt,_fr)=>{"use strict";var dqe=K6(),gqe=dqe();_fr.exports=gqe});var Rfr=s((Ent,Ifr)=>{"use strict";var mqe=D(),Tfr=Afr(),yqe=K6();mqe(Tfr,"factory",yqe);Ifr.exports=Tfr});var jfr=s((Snt,Ffr)=>{"use strict";var Pfr=Sr().isPrimitive,rc=V(),Lfr=oe();function hqe(r,e){return!Pfr(r)||Lfr(r)?new TypeError(rc("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Pfr(e)||Lfr(e)?new TypeError(rc("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(rc("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Ffr.exports=hqe});var Bfr=s((Nnt,Mfr)=>{"use strict";function qqe(r,e,t){var i=r();return t*i+(1-i)*e}Mfr.exports=qqe});var ec=s((Ont,Wfr)=>{"use strict";var ti=D(),E1=br(),kfr=Nr(),Cfr=hr(),Vfr=qr(),Gfr=vr(),Ufr=mr(),bqe=Pr(),S1=Hr().factory,Dfr=W(),wqe=Or(),N1=V(),Eqe=jfr(),zfr=Bfr();function Sqe(){var r,e,t,i,a,n;if(arguments.length===0)e=S1();else if(arguments.length===1){if(r=arguments[0],!Cfr(r))throw new TypeError(N1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gfr(r,"prng")){if(!Vfr(r.prng))throw new TypeError(N1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=S1(r)}else{if(a=arguments[0],n=arguments[1],i=Eqe(a,n),i)throw i;if(arguments.length>2){if(r=arguments[2],!Cfr(r))throw new TypeError(N1("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gfr(r,"prng")){if(!Vfr(r.prng))throw new TypeError(N1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=S1(r)}else e=S1()}return a===void 0?t=y:t=m,ti(t,"NAME","uniform"),r&&r.prng?(ti(t,"seed",null),ti(t,"seedLength",null),kfr(t,"state",Ufr(null),bqe),ti(t,"stateLength",null),ti(t,"byteLength",null),ti(t,"toJSON",Ufr(null)),ti(t,"PRNG",e)):(E1(t,"seed",u),E1(t,"seedLength",o),kfr(t,"state",c,l),E1(t,"stateLength",v),E1(t,"byteLength",f),ti(t,"toJSON",p),ti(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(g){e.state=g}function p(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=wqe(e.state),a===void 0?g.params=[]:g.params=[a,n],g}function m(){return zfr(e,a,n)}function y(g,d){return Dfr(g)||Dfr(d)||g>=d?NaN:zfr(e,g,d)}}Wfr.exports=Sqe});var Xfr=s((_nt,Hfr)=>{"use strict";var Nqe=ec(),Oqe=Nqe();Hfr.exports=Oqe});var Yfr=s((Ant,Jfr)=>{"use strict";var _qe=D(),xfr=Xfr(),Aqe=ec();_qe(xfr,"factory",Aqe);Jfr.exports=xfr});var Kfr=s((Tnt,Qfr)=>{"use strict";var $fr=zr().isPrimitive,Zfr=V();function Tqe(r,e){return $fr(r)?$fr(e)?null:new TypeError(Zfr("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(Zfr("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}Qfr.exports=Tqe});var e4r=s((Int,r4r)=>{"use strict";var Iqe=Gr(),Rqe=wr();function Pqe(r,e,t){return t*Iqe(-Rqe(1-r()),1/e)}r4r.exports=Pqe});var tc=s((Rnt,v4r)=>{"use strict";var ii=D(),O1=br(),t4r=Nr(),i4r=hr(),a4r=qr(),n4r=vr(),s4r=mr(),Lqe=Pr(),_1=Hr().factory,u4r=W(),Fqe=Or(),A1=V(),jqe=Kfr(),o4r=e4r();function Mqe(){var r,e,t,i,a,n;if(arguments.length===0)t=_1();else if(arguments.length===1){if(e=arguments[0],!i4r(e))throw new TypeError(A1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(n4r(e,"prng")){if(!a4r(e.prng))throw new TypeError(A1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=_1(e)}else{if(n=arguments[0],r=arguments[1],a=jqe(r,n),a)throw a;if(arguments.length>2){if(e=arguments[2],!i4r(e))throw new TypeError(A1("invalid argument. Options argument must be an object. Value: `%s`.",e));if(n4r(e,"prng")){if(!a4r(e.prng))throw new TypeError(A1("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=_1(e)}else t=_1()}return r===void 0?i=y:i=m,ii(i,"NAME","weibull"),e&&e.prng?(ii(i,"seed",null),ii(i,"seedLength",null),t4r(i,"state",s4r(null),Lqe),ii(i,"stateLength",null),ii(i,"byteLength",null),ii(i,"toJSON",s4r(null)),ii(i,"PRNG",t)):(O1(i,"seed",u),O1(i,"seedLength",o),t4r(i,"state",c,l),O1(i,"stateLength",v),O1(i,"byteLength",f),ii(i,"toJSON",p),ii(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(g){t.state=g}function p(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Fqe(t.state),n===void 0?g.params=[]:g.params=[n,r],g}function m(){return o4r(t,n,r)}function y(g,d){return u4r(g)||u4r(d)||g<=0||d<=0?NaN:o4r(t,g,d)}}v4r.exports=Mqe});var c4r=s((Pnt,f4r)=>{"use strict";var Bqe=tc(),kqe=Bqe();f4r.exports=kqe});var d4r=s((Lnt,p4r)=>{"use strict";var Cqe=D(),l4r=c4r(),Vqe=tc();Cqe(l4r,"factory",Vqe);p4r.exports=l4r});var m4r=s((Fnt,g4r)=>{"use strict";var Gqe=qe(),Uqe=ye().isPrimitive,Dqe=V(),zqe=$0();function Wqe(r){if(Uqe(r))return r;if(Gqe(r))return zqe(r);throw new TypeError(Dqe("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}g4r.exports=Wqe});var h4r=s((jnt,y4r)=>{"use strict";var Hqe=m4r();y4r.exports=Hqe});var b4r=s((Mnt,q4r)=>{"use strict";var _r=Qr(),Xqe=itr().factory,xqe=dtr().factory,Jqe=Bir().factory,Yqe=Ear().factory,$qe=inr().factory,Zqe=hnr().factory,Qqe=Bnr().factory,Kqe=a0r().factory,rbe=M0().factory,ebe=Q0r().factory,tbe=hsr().factory,ibe=Bsr().factory,abe=$sr().factory,nbe=gur().factory,sbe=Lur().factory,ube=fn().factory,obe=xur().factory,vbe=por().factory,fbe=kor().factory,cbe=Ri().factory,lbe=Kor().factory,pbe=q1r().factory,dbe=k1r().factory,gbe=u2r().factory,mbe=O2r().factory,ybe=z2r().factory,hbe=rvr().factory,qbe=dvr().factory,bbe=Hr().factory,wbe=t3r().factory,Ebe=b3r().factory,Sbe=V3r().factory,Nbe=k6().factory,Obe=K3r().factory,_be=pfr().factory,Abe=Rfr().factory,Tbe=Yfr().factory,Ibe=d4r().factory,Rbe=h4r();function Pbe(r){return _r(r,"arcsine",Xqe),_r(r,"bernoulli",xqe),_r(r,"beta",Jqe),_r(r,"betaprime",Yqe),_r(r,"binomial",$qe),_r(r,"boxMuller",Zqe),_r(r,"cauchy",Qqe),_r(r,"chi",Kqe),_r(r,"chisquare",rbe),_r(r,"cosine",ebe),_r(r,"discreteUniform",tbe),_r(r,"erlang",ibe),_r(r,"exponential",abe),_r(r,"f",nbe),_r(r,"frechet",sbe),_r(r,"gamma",ube),_r(r,"geometric",obe),_r(r,"gumbel",vbe),_r(r,"hypergeometric",fbe),_r(r,"improvedZiggurat",cbe),_r(r,"invgamma",lbe),_r(r,"kumaraswamy",pbe),_r(r,"laplace",dbe),_r(r,"levy",gbe),_r(r,"logistic",mbe),_r(r,"lognormal",ybe),_r(r,"minstd",hbe),_r(r,"minstdShuffle",qbe),_r(r,"mt19937",bbe),_r(r,"negativeBinomial",wbe),_r(r,"normal",Ebe),_r(r,"pareto1",Sbe),_r(r,"poisson",Nbe),_r(r,"rayleigh",Obe),_r(r,"t",_be),_r(r,"triangular",Abe),_r(r,"uniform",Tbe),_r(r,"weibull",Ibe),r.base={},_r(r.base,"normalizeSeed",Rbe),r}q4r.exports=Pbe});var E4r=s((Bnt,w4r)=>{"use strict";var Lbe=hr(),T1=vr(),Fbe=ye().isPrimitive,jbe=nt().isPrimitive,Mbe=be().isPrimitive,Bbe=ws().isPrimitive,G0=V();function kbe(r,e){return Lbe(e)?T1(e,"period")&&(r.period=e.period,!jbe(e.period))?new TypeError(G0("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):T1(e,"amplitude")&&(r.amplitude=e.amplitude,!Bbe(e.amplitude))?new TypeError(G0("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):T1(e,"offset")&&(r.offset=e.offset,!Fbe(e.offset))?new TypeError(G0("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):T1(e,"iter")&&(r.iter=e.iter,!Mbe(e.iter))?new TypeError(G0("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",e))}w4r.exports=kbe});var _4r=s((knt,O4r)=>{"use strict";var ic=D(),S4r=Mn(),Cbe=c0(),Vbe=Js(),Gbe=Qa(),Ube=Ee(),Dbe=E4r();function N4r(r){var e,t,i,a,n,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(a=Dbe(e,r),a))throw a;return n=(e.period-e.offset)%e.period,n<0&&(n+=e.period),n-=1,u=Ube/e.period,o=e.amplitude/Gbe,v=0,t={},ic(t,"next",f),ic(t,"return",c),S4r&&ic(t,S4r,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(n+=1,n%=e.period,{value:o*Vbe(Cbe(u*n)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return N4r(e)}}O4r.exports=N4r});var T4r=s((Cnt,A4r)=>{"use strict";var zbe=_4r();A4r.exports=zbe});var R4r=s((Vnt,I4r)=>{"use strict";var Wbe=Qr(),Hbe=T4r();function Xbe(r){return Wbe(r,"iterSawtoothWave",Hbe),r}I4r.exports=Xbe});var L4r=s((Gnt,P4r)=>{"use strict";var xbe=17976931348623157e292;P4r.exports=xbe});var I1=s((Unt,F4r)=>{"use strict";var Jbe=709.782712893384;F4r.exports=Jbe});var M4r=s((Dnt,j4r)=>{"use strict";var Ybe=Yr();function $be(r,e){var t,i,a,n;if(a=Ybe(-e),i=a,i!==0)for(t=i,n=1;n<r;++n)t/=n,t*=e,i+=t;return i}j4r.exports=$be});var C4r=s((znt,k4r)=>{"use strict";var Zbe=hi(),B4r=Rr(),Qbe=Yr(),Kbe=Ee();function rwe(r,e){var t,i,a,n,u;if(n=Zbe(B4r(e)),n!==0&&r>1){for(i=Qbe(-e)/B4r(Kbe*e),i*=e,t=.5,i/=t,a=i,u=2;u<r;++u)i/=u-t,i*=e,a+=i;n+=a}return n}k4r.exports=rwe});var ac=s((Wnt,V4r)=>{"use strict";var ewe=-708.3964185322641;V4r.exports=ewe});var z4r=s((Hnt,D4r)=>{"use strict";var An=Yr(),R1=Gr(),twe=wr(),G4r=I1(),U4r=ac();function iwe(r,e){var t,i;return i=r*twe(e),e>=1?i<G4r&&-e>U4r?t=R1(e,r)*An(-e):r>=1?t=R1(e/An(e/r),r):t=An(i-e):i>U4r?t=R1(e,r)*An(-e):e/r<G4r?t=R1(e/An(e/r),r):t=An(i-e),t}D4r.exports=iwe});var nc=s((Xnt,W4r)=>{"use strict";function awe(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}W4r.exports=awe});var X4r=s((xnt,H4r)=>{"use strict";var nwe=Function;H4r.exports=nwe});var J4r=s((Jnt,x4r)=>{"use strict";var swe=X4r();x4r.exports=swe});var $4r=s((Ynt,Y4r)=>{"use strict";var uwe=J4r(),owe=nc();function vwe(r){var e,t,i,a;if(r.length>500)return n;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,a=1;a<t;a++)e+="+x*",a<i&&(e+="("),e+=r[a];for(a=0;a<i-1;a++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new uwe(e)();function n(u){return owe(r,u)}}Y4r.exports=vwe});var K4r=s(($nt,Q4r)=>{"use strict";var fwe=D(),Z4r=nc(),cwe=$4r();fwe(Z4r,"factory",cwe);Q4r.exports=Z4r});var e6r=s((Znt,r6r)=>{"use strict";var lwe=eval;r6r.exports=lwe});var i6r=s((Qnt,t6r)=>{"use strict";var pwe=e6r();function dwe(){var r;try{pwe('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}t6r.exports=dwe});var sc=s((Knt,a6r)=>{"use strict";var gwe=i6r();a6r.exports=gwe});var s6r=s((r0t,n6r)=>{"use strict";var P1=Dr(),mwe=qi(),ywe=1e6;function hwe(r,e){var t,i,a,n,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||mwe,n=o.maxTerms||ywe,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(a of r)if(u+=a,P1(i*u)>=P1(a)||--n===0)break}else do a=r(),u+=a;while(P1(i*u)<P1(a)&&--n);return u}n6r.exports=hwe});var v6r=s((e0t,o6r)=>{"use strict";var u6r=Dr(),qwe=qi(),bwe=1e6;function wwe(r,e){var t,i,a,n,u;u={},arguments.length>1&&(u=e),t=u.tolerance||qwe,a=u.maxTerms||bwe,n=u.initialValue||0;do i=r(),n+=i;while(u6r(t*n)<u6r(i)&&--a);return n}o6r.exports=wwe});var L1=s((t0t,f6r)=>{"use strict";var Ewe=sc(),Swe=s6r(),Nwe=v6r(),uc;Ewe()?uc=Swe:uc=Nwe;f6r.exports=uc});var l6r=s((i0t,c6r)=>{"use strict";function Owe(r){var e=-r,t=-1,i=0;return a;function a(){return t*=e,i+=1,t/i}}c6r.exports=Owe});var d6r=s((a0t,p6r)=>{"use strict";var _we=Dr(),Awe=wr(),Twe=qi(),Iwe=L1(),Rwe=l6r();function Pwe(r){var e,t;return r<=-1?NaN:(t=_we(r),t>.95?Awe(1+r)-r:t<Twe?-r*r/2:(e={initialValue:-r},Iwe(Rwe(r),e)))}p6r.exports=Pwe});var m6r=s((n0t,g6r)=>{"use strict";var Lwe=d6r();g6r.exports=Lwe});var h6r=s((s0t,y6r)=>{"use strict";function Fwe(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}y6r.exports=Fwe});var b6r=s((u0t,q6r)=>{"use strict";function jwe(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}q6r.exports=jwe});var E6r=s((o0t,w6r)=>{"use strict";function Mwe(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}w6r.exports=Mwe});var N6r=s((v0t,S6r)=>{"use strict";function Bwe(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}S6r.exports=Bwe});var _6r=s((f0t,O6r)=>{"use strict";function kwe(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}O6r.exports=kwe});var T6r=s((c0t,A6r)=>{"use strict";function Cwe(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}A6r.exports=Cwe});var R6r=s((l0t,I6r)=>{"use strict";function Vwe(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}I6r.exports=Vwe});var L6r=s((p0t,P6r)=>{"use strict";function Gwe(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}P6r.exports=Gwe});var j6r=s((d0t,F6r)=>{"use strict";function Uwe(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}F6r.exports=Uwe});var B6r=s((g0t,M6r)=>{"use strict";var Dwe=K4r(),zwe=m6r(),Wwe=hi(),oc=Rr(),Hwe=Yr(),Xwe=yi(),xwe=h6r(),Jwe=b6r(),Ywe=E6r(),$we=N6r(),Zwe=_6r(),Qwe=T6r(),Kwe=R6r(),rEe=L6r(),eEe=j6r(),Ke=[0,0,0,0,0,0,0,0,0,0];function tEe(r,e){var t,i,a,n,u;return i=(e-r)/r,a=-zwe(i),n=r*a,u=oc(2*a),e<r&&(u=-u),Ke[0]=xwe(u),Ke[1]=Jwe(u),Ke[2]=Ywe(u),Ke[3]=$we(u),Ke[4]=Zwe(u),Ke[5]=Qwe(u),Ke[6]=Kwe(u),Ke[7]=rEe(u),Ke[8]=eEe(u),Ke[9]=-.0005967612901927463,t=Dwe(Ke,1/r),t*=Hwe(-n)/oc(Xwe*r),e<r&&(t=-t),t+=Wwe(oc(n))/2,t}M6r.exports=tEe});var C6r=s((m0t,k6r)=>{"use strict";function iEe(r,e){var t=1,i=r,a=e;return n;function n(){var u=t;return i+=1,t*=a/i,u}}k6r.exports=iEe});var G6r=s((y0t,V6r)=>{"use strict";var aEe=L1(),nEe=C6r();function sEe(r,e,t){var i,a;return t=t||0,a=nEe(r,e),i=aEe(a,{initialValue:t}),i}V6r.exports=sEe});var D6r=s((h0t,U6r)=>{"use strict";function uEe(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}U6r.exports=uEe});var W6r=s((q0t,z6r)=>{"use strict";var oEe=D6r();z6r.exports=oEe});var X6r=s((b0t,H6r)=>{"use strict";var vEe=W6r();H6r.exports=vEe});var Y6r=s((w0t,J6r)=>{"use strict";var fEe=ef(),x6r=W(),vc=Ir();function cEe(r,e){return x6r(r)||x6r(e)?NaN:r===vc||e===vc?vc:r===e&&r===0?fEe(r)?r:e:r<e?r:e}J6r.exports=cEe});var Z6r=s((E0t,$6r)=>{"use strict";var lEe=Y6r();$6r.exports=lEe});var K6r=s((S0t,Q6r)=>{"use strict";var pEe=10.900511;Q6r.exports=pEe});var fc=s((N0t,rcr)=>{"use strict";var dEe=2.718281828459045;rcr.exports=dEe});var icr=s((O0t,tcr)=>{"use strict";var gEe=X6r(),mEe=m0(),yEe=rn(),hEe=gi(),qEe=Rr(),bEe=Dr(),xi=Yr(),U0=Gr(),cc=c4(),lc=Z6r(),ecr=wr(),F1=I1(),D0=ac(),pc=K6r(),wEe=fc();function EEe(r,e){var t,i,a,n,u,o,v;return a=r+pc-.5,v=(e-r-pc+.5)/a,r<1?e<=D0?xi(r*ecr(e)-e-mEe(r)):U0(e,r)*xi(-e)/yEe(r):(bEe(v*v*r)<=100&&r>150?(t=r*(hEe(v)-v)+e*(.5-pc)/a,t=xi(t)):(n=r*ecr(e/a),u=r-e,lc(n,u)<=D0||cc(n,u)>=F1?(i=u/r,lc(n,u)/2>D0&&cc(n,u)/2<F1?(o=U0(e/a,r/2)*xi(u/2),t=o*o):lc(n,u)/4>D0&&cc(n,u)/4<F1&&e>r?(o=U0(e/a,r/4)*xi(u/4),t=o*o,t*=t):i>D0&&i<F1?t=U0(e*xi(i)/a,r):t=xi(n+u)):t=U0(e/a,r)*xi(u)),t*=qEe(a/wEe)/gEe(r),t)}tcr.exports=EEe});var ncr=s((_0t,acr)=>{"use strict";function SEe(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}acr.exports=SEe});var ucr=s((A0t,scr)=>{"use strict";function NEe(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}scr.exports=NEe});var vcr=s((T0t,ocr)=>{"use strict";function OEe(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}ocr.exports=OEe});var ccr=s((I0t,fcr)=>{"use strict";var dc=wr(),_Ee=qi(),AEe=ncr(),TEe=ucr(),IEe=vcr(),REe=.15896368026733398,PEe=.5281534194946289,LEe=.45201730728149414;function FEe(r,e,t){var i,a,n,u;if(r<_Ee)return-dc(r);if(e===0||t===0)return 0;if(a=0,r>2){if(r>=3){do r-=1,t-=1,a+=dc(r);while(r>=3);t=r-2}return n=t*(r+1),u=AEe(t),a+=n*REe+n*u,a}return r<1&&(a+=-dc(r),t=e,e=r,r+=1),r<=1.5?(n=TEe(e),i=e*t,a+=i*PEe+i*n,a):(n=t*e,u=IEe(-t),a+=n*LEe+n*u,a)}fcr.exports=FEe});var mcr=s((R0t,gcr)=>{"use strict";var lcr=rn(),pcr=l0(),jEe=gi(),MEe=W(),dcr=ccr();function BEe(r){return MEe(r)?NaN:r<0?r<-.5?lcr(1+r)-1:pcr(-jEe(r)+dcr(r+2,r+1,r)):r<2?pcr(dcr(r+1,r,r-1)):lcr(1+r)-1}gcr.exports=BEe});var hcr=s((P0t,ycr)=>{"use strict";var kEe=mcr();ycr.exports=kEe});var bcr=s((L0t,qcr)=>{"use strict";function CEe(r,e){var t,i,a,n;return t=-e,e=-e,i=r+1,a=1,u;function u(){return n=t/i,t*=e,a+=1,t/=a,i+=1,n}}qcr.exports=CEe});var Ecr=s((F0t,wcr)=>{"use strict";var VEe=rf(),GEe=L1(),UEe=hcr(),DEe=bcr();function zEe(r,e,t){var i,a,n,u,o;return a=UEe(r),n=(a+1)/r,u=VEe(e,r),a-=u,a/=r,o=DEe(r,e),u+=1,i=t?n:0,a=-u*GEe(o,{initialValue:(i-a)/u}),t&&(a=-a),[a,n]}wcr.exports=zEe});var gc=s((j0t,Scr)=>{"use strict";var WEe=11754943508222875e-54;Scr.exports=WEe});var Ocr=s((M0t,Ncr)=>{"use strict";var j1=Dr(),mt=gc(),HEe=qi(),XEe=1e6;function xEe(r,e,t){var i,a,n,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],n=f[0],u===0&&(u=mt),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(j1(a-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=mt),o=f[1]+f[0]/o,o===0&&(o=mt),v=1/v,a=o*v,u*=a);while(f&&j1(a-1)>e&&--t);return n/u}function JEe(r,e,t){var i,a,n,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),n=v[1],n===0&&(n=mt),u=n,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&j1(a-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=mt),u=v[1]+v[0]/u,u===0&&(u=mt),o=1/o,a=u*o,n*=a);while(v&&j1(a-1)>e&&--t);return n}function YEe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),t=i.maxIter||XEe,a=i.tolerance||HEe,i.keep?JEe(r,a,t):xEe(r,a,t)}Ncr.exports=YEe});var Tcr=s((B0t,Acr)=>{"use strict";var _cr=Dr(),$Ee=qi(),Tn=gc(),ZEe=1e6;function QEe(r,e,t){var i,a,n,u,o,v;v=r(),o=v[1],a=v[0],o===0&&(o=Tn),n=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=Tn),n=v[1]+v[0]/n,n===0&&(n=Tn),u=1/u,i=n*u,o*=i);while(v&&_cr(i-1)>e&&--t);return a/o}function KEe(r,e,t){var i,a,n,u,o;o=r(),u=o[1],u===0&&(u=Tn),a=u,n=0;do o=r(),o&&(n=o[1]+o[0]*n,n===0&&(n=Tn),a=o[1]+o[0]/a,a===0&&(a=Tn),n=1/n,i=a*n,u*=i);while(o&&_cr(i-1)>e&&--t);return u}function rSe(r,e){var t,i,a;return i={},arguments.length>1&&(i=e),a=i.tolerance||$Ee,t=i.maxIter||ZEe,i.keep?KEe(r,a,t):QEe(r,a,t)}Acr.exports=rSe});var Rcr=s((k0t,Icr)=>{"use strict";var eSe=sc(),tSe=Ocr(),iSe=Tcr(),mc;eSe()?mc=tSe:mc=iSe;Icr.exports=mc});var Lcr=s((C0t,Pcr)=>{"use strict";function aSe(r,e){var t=e-r+1,i=r,a=0;return n;function n(){return a+=1,t+=2,[a*(i-a),t]}}Pcr.exports=aSe});var jcr=s((V0t,Fcr)=>{"use strict";var nSe=Rcr(),sSe=Lcr();function uSe(r,e){var t=sSe(r,e);return 1/(e-r+1+nSe(t))}Fcr.exports=uSe});var Wcr=s((G0t,zcr)=>{"use strict";var oSe=m0(),vSe=Ur(),z0=rn(),Mcr=Dr(),fSe=Yr(),Bcr=Gr(),rt=wr(),cSe=sf(),kcr=L4r(),lSe=tf(),Ccr=I1(),pSe=pr(),dSe=M4r(),gSe=C4r(),Vcr=z4r(),mSe=B6r(),yc=G6r(),Gcr=icr(),ySe=Ecr(),Ucr=jcr(),hSe=170;function Dcr(r,e,t,i){var a,n,u,o,v,f,c,l,p,m,y,g,d,h,q;if(r<0||e<=0)return NaN;if(n=t===void 0?!0:t,l=i,p=0,e>=hSe&&!n)return l&&e*4<r?(p=e*rt(r)-r,p+=rt(Ucr(e,r))):!l&&e>4*r?(p=e*rt(r)-r,o=0,p+=rt(yc(e,r,o)/e)):(p=Dcr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=rt(p)-e+(e-.5)*rt(e),p+=rt(lSe)):(p=e*rt(r)-r,o=0,p+=rt(yc(e,r,o)/e)):p=rt(p)+oSe(e)),p>Ccr?pSe:fSe(p);switch(c=e<30&&e<=r+1&&r<Ccr,c?(h=vSe(e),m=h===e,v=m?!1:Mcr(h-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<cSe&&e>1?u=6:r<.5?-.4/rt(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,n&&e>20&&(y=Mcr((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=dSe(e,r),n===!1&&(p*=z0(e));break;case 1:p=gSe(e,r),n===!1&&(p*=z0(e));break;case 2:p=n?Gcr(e,r):Vcr(e,r),p!==0&&(o=0,a=!1,l&&(o=n?1:z0(e),n||p>=1||kcr*p>o?(o/=p,n||e<1||kcr/e>o?(o*=-e,a=!0):o=0):o=0)),p*=yc(e,r,o)/e,a&&(l=!1,p=-p);break;case 3:l=!l,d=ySe(e,r,l),p=d[0],q=d[1],l=!1,n&&(p/=q);break;case 4:p=n?Gcr(e,r):Vcr(e,r),p!==0&&(p*=Ucr(e,r));break;case 5:p=mSe(e,r),r>=e&&(l=!l);break;case 6:p=n?Bcr(r,e)/z0(e+1):Bcr(r,e)/e,p*=1-e*r/(e+1);break}return n&&p>1&&(p=1),l&&(g=n?1:z0(e),p=g-p),p}zcr.exports=Dcr});var hc=s((U0t,Hcr)=>{"use strict";var qSe=Wcr();Hcr.exports=qSe});var xcr=s((D0t,Xcr)=>{"use strict";var bSe=hc(),qc=W(),wSe=pr();function ESe(r,e,t){return qc(r)||qc(e)||qc(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===wSe?1:bSe(r*t,e)}Xcr.exports=ESe});var $cr=s((z0t,Ycr)=>{"use strict";var SSe=mr(),NSe=no().factory,OSe=hc(),Jcr=W(),_Se=pr();function ASe(r,e){if(Jcr(r)||Jcr(e)||r<0||e<=0)return SSe(NaN);if(r===0)return NSe(0);return t;function t(i){return i<=0?0:i===_Se?1:OSe(i*e,r)}}Ycr.exports=ASe});var bc=s((W0t,Qcr)=>{"use strict";var TSe=D(),Zcr=xcr(),ISe=$cr();TSe(Zcr,"factory",ISe);Qcr.exports=Zcr});var rlr=s((H0t,Kcr)=>{"use strict";var RSe=bc();function PSe(r,e){return RSe(r,e/2,.5)}Kcr.exports=PSe});var tlr=s((X0t,elr)=>{"use strict";var LSe=bc().factory;function FSe(r){return LSe(r/2,.5)}elr.exports=FSe});var nlr=s((x0t,alr)=>{"use strict";var jSe=D(),ilr=rlr(),MSe=tlr();jSe(ilr,"factory",MSe);alr.exports=ilr});var vlr=s((J0t,olr)=>{"use strict";var BSe=hr(),kSe=vr(),CSe=Es(),slr=V(),ulr=["values","indices","*"];function VSe(r,e){return BSe(e)?kSe(e,"returns")&&(r.returns=e.returns,CSe(ulr,r.returns)===-1)?new TypeError(slr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",ulr.join('", "'),r.returns)):null:new TypeError(slr("invalid argument. Options argument must be an object. Value: `%s`.",e))}olr.exports=VSe});var clr=s((Y0t,flr)=>{"use strict";var GSe=vr();function USe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),GSe(t,a)?t[a].push(r[n]):t[a]=[r[n]];return t}flr.exports=USe});var plr=s(($0t,llr)=>{"use strict";var DSe=vr();function zSe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),DSe(t,a)?t[a].push(n):t[a]=[n];return t}llr.exports=zSe});var glr=s((Z0t,dlr)=>{"use strict";var WSe=vr();function HSe(r,e){var t,i,a,n;for(i=r.length,t={},n=0;n<i;n++)a=e[n].toString(),WSe(t,a)?t[a].push([n,r[n]]):t[a]=[[n,r[n]]];return t}dlr.exports=HSe});var qlr=s((Q0t,hlr)=>{"use strict";var mlr=Ve(),ylr=V(),XSe=vlr(),xSe=clr(),JSe=plr(),YSe=glr();function $Se(r,e,t){var i,a,n;if(!mlr(r))throw new TypeError(ylr("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)n=e;else{if(a=XSe(i,e),a)throw a;n=t}if(!mlr(n))throw new TypeError(ylr("invalid argument. Last argument must be a collection. Value: `%s`.",n));if(r.length!==n.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?xSe(r,n):i.returns==="indices"?JSe(r,n):YSe(r,n)}hlr.exports=$Se});var wlr=s((K0t,blr)=>{"use strict";var ZSe=qlr();blr.exports=ZSe});var Slr=s((rst,Elr)=>{"use strict";function QSe(r){var e,t,i,a,n,u;for(e=0,t=0,a=0,i=r.length,n=0;n<i;n++)u=r[n],e=u-t,t+=e/(n+1),a+=e*(u-t);return a/(n-1)}Elr.exports=QSe});var _lr=s((est,Olr)=>{"use strict";var KSe=qe(),rNe=Sr().isPrimitive,eNe=hr(),tNe=oe(),Nlr=vr(),wc=V();function iNe(r,e){return eNe(e)?Nlr(e,"alpha")&&(r.alpha=e.alpha,!rNe(r.alpha)||tNe(r.alpha))?new TypeError(wc("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Nlr(e,"groups")&&(r.groups=e.groups,!KSe(r.groups))?new TypeError(wc("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(wc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Olr.exports=iNe});var Flr=s((tst,Llr)=>{"use strict";var Alr=W(),M1=Ae(),Tlr=Gr(),aNe=Dr(),Ilr=Ks(),nNe=oa(),Rlr=Zn(),sNe=Cs(),uNe=Vs(),oNe=nNe+1,Plr=1e308;function vNe(r,e){var t,i;return Alr(r)||Alr(e)||M1(e)?NaN:M1(r)||r===0||e<uNe||aNe(r)>oNe&&e<=0?r:e>Rlr?0*r:e<sNe?(t=Tlr(10,-(e+Rlr)),i=r*Plr*t,M1(i)?r:Ilr(i)/Plr/t):(t=Tlr(10,-e),i=r*t,M1(i)?r:Ilr(i)/t)}Llr.exports=vNe});var Mlr=s((ist,jlr)=>{"use strict";var fNe=Flr();jlr.exports=fNe});var Clr=s((ast,klr)=>{"use strict";var cNe=nt(),lNe=hr(),pNe=de().isPrimitive,Blr=vr(),Ec=V(),Sc=Mlr();function dNe(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!lNe(r))throw new TypeError(Ec("invalid argument. First argument must be an object. Value: `%s`.",r));if(Blr(r,"digits")){if(!cNe(r.digits))throw new TypeError(Ec("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Blr(r,"decision")){if(!pNe(r.decision))throw new TypeError(Ec("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Sc(this.pValue,-t)+`
`,i+="    statistic: "+Sc(this.statistic,-t)+`
`,i+="    df: "+Sc(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}klr.exports=dNe});var Ulr=s((nst,Glr)=>{"use strict";var gNe=Ve(),mNe=hr(),ma=Qr(),yNe=za(),B1=V(),hNe=nlr(),qNe=wlr(),Vlr=wr(),bNe=Slr(),wNe=_lr(),ENe=Clr();function SNe(){var r,e,t,i,a,n,u,o,v,f,c,l,p,m,y,g,d,h,q,w;if(v=[],e=arguments.length,f={},mNe(arguments[e-1])&&(r=arguments[e-1],e-=1,m=wNe(f,r),m))throw m;if(f.groups){if(a=qNe(arguments[0],f.groups),i=yNe(a),e=i.length,e<2)throw new Error(B1("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(w=0;w<e;w++)v.push(a[i[w]])}else for(w=0;w<e;w++)v.push(arguments[w]);for(u=0,t=0,o=0,y=0,h=new Array(e),q=h.slice(),w=0;w<e;w++){if(p=v[w],!gNe(p))throw new TypeError(B1("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(B1("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[w]=p.length-1,u+=h[w],t+=1/h[w],q[w]=bNe(p),o+=h[w]*q[w],y+=h[w]*Vlr(q[w])}if(o/=u,f.alpha===void 0?n=.05:n=f.alpha,n<0||n>1)throw new RangeError(B1("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",n));return l=u*Vlr(o)-y,l/=1+(t-1/u)/(3*(e-1)),d=e-1,c=1-hNe(l,d),g={},ma(g,"rejected",c<=n),ma(g,"alpha",n),ma(g,"pValue",c),ma(g,"statistic",l),ma(g,"df",d),ma(g,"method","Bartlett's test of equal variances"),ma(g,"print",ENe),g}Glr.exports=SNe});var zlr=s((sst,Dlr)=>{"use strict";var NNe=Ulr();Dlr.exports=NNe});var Hlr=s((ust,Wlr)=>{"use strict";var Nc=W(),ONe=Ni();function _Ne(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,n=e[u],i[o]=n,o+=a,f=1,Nc(n)===!1)for(f;f<r;f++){if(u+=t,v=e[u],Nc(v)){n=v;break}(v>n||v===n&&ONe(v))&&(n=v),i[o]=n,o+=a}if(Nc(n))for(f;f<r;f++)i[o]=n,o+=a;return i}Wlr.exports=_Ne});var xlr=s((ost,Xlr)=>{"use strict";var Oc=W(),ANe=Ni();function TNe(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return a;if(v=i,f=u,o=e[v],a[f]=o,f+=n,l=1,Oc(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],Oc(c)){o=c;break}(c>o||c===o&&ANe(c))&&(o=c),a[f]=o,f+=n}if(Oc(o))for(l;l<r;l++)a[f]=o,f+=n;return a}Xlr.exports=TNe});var $lr=s((vst,Ylr)=>{"use strict";var INe=D(),Jlr=Hlr(),RNe=xlr();INe(Jlr,"ndarray",RNe);Ylr.exports=Jlr});var Qlr=s((fst,Zlr)=>{"use strict";var PNe=$lr();Zlr.exports=PNe});var r5r=s((cst,Klr)=>{"use strict";var LNe=W(),FNe=Ni();function jNe(r,e,t){var i,a,n,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?a=(1-r)*t:a=0,i=e[a],u=1;u<r;u++){if(a+=t,n=e[a],LNe(n))return n;(n>i||n===i&&FNe(n))&&(i=n)}return i}Klr.exports=jNe});var t5r=s((lst,e5r)=>{"use strict";var MNe=W(),BNe=Ni();function kNe(r,e,t,i){var a,n,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(n=i,a=e[n],o=1;o<r;o++){if(n+=t,u=e[n],MNe(u))return u;(u>a||u===a&&BNe(u))&&(a=u)}return a}e5r.exports=kNe});var n5r=s((pst,a5r)=>{"use strict";var CNe=D(),i5r=r5r(),VNe=t5r();CNe(i5r,"ndarray",VNe);a5r.exports=i5r});var u5r=s((dst,s5r)=>{"use strict";var GNe=n5r();s5r.exports=GNe});var f5r=s((gst,v5r)=>{"use strict";var o5r=W(),UNe=Ni();function DNe(r,e,t,i,a){var n,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=a;if(f===r)return NaN;if(n=e[u],o5r(n))return n;for(f+=1,f;f<r;f++)if(u+=t,o+=a,!i[o]){if(v=e[u],o5r(v))return v;(v>n||v===n&&UNe(v))&&(n=v)}return n}v5r.exports=DNe});var p5r=s((mst,l5r)=>{"use strict";var c5r=W(),zNe=Ni();function WNe(r,e,t,i,a,n,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&a[f]!==0;l++)v+=t,f+=n;if(l===r)return NaN;if(o=e[v],c5r(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=n,!a[f]){if(c=e[v],c5r(c))return c;(c>o||c===o&&zNe(c))&&(o=c)}return o}l5r.exports=WNe});var m5r=s((yst,g5r)=>{"use strict";var HNe=D(),d5r=f5r(),XNe=p5r();HNe(d5r,"ndarray",XNe);g5r.exports=d5r});var h5r=s((hst,y5r)=>{"use strict";var xNe=hi(),JNe=Rr(),_c=W();function YNe(r,e,t){var i,a;return _c(r)||_c(e)||_c(t)||t<0?NaN:t===0?r<e?0:1:(i=t*JNe(2),a=r-e,.5*xNe(-a/i))}y5r.exports=YNe});var b5r=s((qst,q5r)=>{"use strict";var $Ne=mr(),ZNe=no().factory,Ac=W(),QNe=Rr(),KNe=hi();function rOe(r,e){var t;if(Ac(r)||Ac(e)||e<0)return $Ne(NaN);if(e===0)return ZNe(r);return t=e*QNe(2),i;function i(a){var n;return Ac(a)?NaN:(n=a-r,.5*KNe(-n/t))}}q5r.exports=rOe});var S5r=s((bst,E5r)=>{"use strict";var eOe=D(),w5r=h5r(),tOe=b5r();eOe(w5r,"factory",tOe);E5r.exports=w5r});var _5r=s((wst,O5r)=>{"use strict";var N5r=W(),iOe=wr(),aOe=yi(),nOe=fc();function sOe(r,e){return N5r(r)||N5r(e)||e<=0?NaN:.5*iOe(aOe*nOe*e*e)}O5r.exports=sOe});var T5r=s((Est,A5r)=>{"use strict";var uOe=_5r();A5r.exports=uOe});var P5r=s((Sst,R5r)=>{"use strict";var I5r=W();function oOe(r,e){return I5r(r)||I5r(e)||e<=0?NaN:0}R5r.exports=oOe});var F5r=s((Nst,L5r)=>{"use strict";var vOe=P5r();L5r.exports=vOe});var M5r=s((Ost,j5r)=>{"use strict";var fOe=Ur(),cOe=[lOe,pOe,dOe,gOe,mOe,yOe,hOe,qOe,bOe,wOe,EOe,SOe,NOe,OOe,_Oe,AOe,TOe,IOe,ROe,POe,LOe,FOe,jOe,MOe,BOe,kOe,COe,VOe,GOe,UOe,DOe,zOe,WOe,HOe,XOe,xOe,JOe,YOe,$Oe,ZOe,QOe,KOe,r_e,e_e,t_e,i_e,a_e,n_e,s_e,u_e,o_e,v_e,f_e,c_e,l_e,p_e,d_e,g_e,m_e,y_e,h_e,q_e,b_e,w_e,E_e,S_e,N_e,O_e,__e,A_e,T_e,I_e,R_e,P_e,L_e,F_e,j_e,M_e,B_e,k_e,C_e,V_e,G_e,U_e,D_e,z_e,W_e,H_e,X_e,x_e,J_e,Y_e,$_e,Z_e,Q_e,K_e,rAe,eAe,tAe,iAe,aAe];function lOe(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function pOe(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function dOe(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function gOe(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function mOe(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function yOe(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function hOe(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function qOe(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function bOe(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function wOe(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function EOe(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function SOe(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function NOe(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function OOe(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function _Oe(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function AOe(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function TOe(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function IOe(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function ROe(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function POe(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function LOe(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function FOe(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function jOe(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function MOe(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function BOe(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function kOe(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function COe(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function VOe(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function GOe(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function UOe(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function DOe(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function zOe(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function WOe(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function HOe(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function XOe(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function xOe(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function JOe(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function YOe(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function $Oe(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function ZOe(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function QOe(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function KOe(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function r_e(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function e_e(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function t_e(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function i_e(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function a_e(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function n_e(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function s_e(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function u_e(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function o_e(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function v_e(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function f_e(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function c_e(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function l_e(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function p_e(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function d_e(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function g_e(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function m_e(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function y_e(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function h_e(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function q_e(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function b_e(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function w_e(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function E_e(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function S_e(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function N_e(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function O_e(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function __e(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function A_e(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function T_e(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function I_e(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function R_e(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function P_e(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function L_e(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function F_e(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function j_e(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function M_e(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function B_e(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function k_e(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function C_e(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function V_e(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function G_e(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function U_e(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function D_e(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function z_e(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function W_e(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function H_e(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function X_e(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function x_e(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function J_e(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function Y_e(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function $_e(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function Z_e(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function Q_e(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function K_e(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function rAe(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function eAe(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function tAe(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function iAe(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function aAe(){return 1}function nAe(r){var e=fOe(r),t=cOe[e];return t(2*r-(2*e+1))}j5r.exports=nAe});var G5r=s((_st,V5r)=>{"use strict";var B5r=Yr(),sAe=pr(),k5r=M5r(),C5r=.5641895835477563;function uAe(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?C5r/r:(e=r*r,C5r*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):k5r(400/(4+r)):r<-26.7?sAe:(e=r*r,r<-6.1?2*B5r(e):2*B5r(e)-k5r(400/(4-r)))}V5r.exports=uAe});var Tc=s((Ast,U5r)=>{"use strict";var oAe=G5r();U5r.exports=oAe});var W5r=s((Tst,z5r)=>{"use strict";var vAe=wr(),fAe=gi(),cAe=Ws(),lAe=hi(),pAe=Tc(),dAe=Ir(),Ic=W(),D5r=.7071067811865475;function gAe(r,e,t){var i;return Ic(r)||Ic(e)||Ic(t)||t<0?NaN:t===0?r<e?dAe:0:(i=(r-e)/t,i<-1?vAe(pAe(-i*D5r)/2)-cAe(i)/2:fAe(-lAe(i*D5r)/2))}z5r.exports=gAe});var x5r=s((Ist,X5r)=>{"use strict";var H5r=W(),mAe=Ir();function yAe(r,e){return H5r(r)||H5r(e)?NaN:r<e?mAe:0}X5r.exports=yAe});var $5r=s((Rst,Y5r)=>{"use strict";var hAe=mr(),J5r=W(),qAe=Ir();function bAe(r){if(J5r(r))return hAe(NaN);return e;function e(t){return J5r(t)?NaN:t<r?qAe:0}}Y5r.exports=bAe});var K5r=s((Pst,Q5r)=>{"use strict";var wAe=D(),Z5r=x5r(),EAe=$5r();wAe(Z5r,"factory",EAe);Q5r.exports=Z5r});var i8r=s((Lst,t8r)=>{"use strict";var SAe=mr(),NAe=K5r().factory,r8r=W(),OAe=gi(),_Ae=Ws(),AAe=hi(),TAe=Tc(),IAe=wr(),e8r=.7071067811865475;function RAe(r,e){if(r8r(r)||r8r(e)||e<0)return SAe(NaN);if(e===0)return NAe(r);return t;function t(i){var a=(i-r)/e;return a<-1?IAe(TAe(-a*e8r)/2)-_Ae(a)/2:OAe(-AAe(a*e8r)/2)}}t8r.exports=RAe});var s8r=s((Fst,n8r)=>{"use strict";var PAe=D(),a8r=W5r(),LAe=i8r();PAe(a8r,"factory",LAe);n8r.exports=a8r});var Rc=s((jst,u8r)=>{"use strict";var FAe=1.8378770664093456;u8r.exports=FAe});var f8r=s((Mst,v8r)=>{"use strict";var jAe=wr(),o8r=Gr(),MAe=Rc(),BAe=Ir(),kAe=pr(),Pc=W();function CAe(r,e,t){var i,a,n;return Pc(r)||Pc(e)||Pc(t)||t<0?NaN:t===0?r===e?kAe:BAe:(i=o8r(t,2),a=-.5*(2*jAe(t)+MAe),n=-1/(2*i),a+n*o8r(r-e,2))}v8r.exports=CAe});var p8r=s((Bst,l8r)=>{"use strict";var VAe=pr(),GAe=Ir(),c8r=W();function UAe(r,e){return c8r(r)||c8r(e)?NaN:r===e?VAe:GAe}l8r.exports=UAe});var m8r=s((kst,g8r)=>{"use strict";var DAe=mr(),zAe=pr(),WAe=Ir(),d8r=W();function HAe(r){if(d8r(r))return DAe(NaN);return e;function e(t){return d8r(t)?NaN:t===r?zAe:WAe}}g8r.exports=HAe});var q8r=s((Cst,h8r)=>{"use strict";var XAe=D(),y8r=p8r(),xAe=m8r();XAe(y8r,"factory",xAe);h8r.exports=y8r});var S8r=s((Vst,E8r)=>{"use strict";var JAe=mr(),YAe=q8r().factory,$Ae=Rc(),b8r=W(),w8r=Gr(),ZAe=wr();function QAe(r,e){var t,i,a;if(b8r(r)||b8r(e)||e<0)return JAe(NaN);if(e===0)return YAe(r);return t=w8r(e,2),i=-.5*(2*ZAe(e)+$Ae),a=-1/(2*t),n;function n(u){return i+a*w8r(u-r,2)}}E8r.exports=QAe});var _8r=s((Gst,O8r)=>{"use strict";var KAe=D(),N8r=f8r(),rTe=S8r();KAe(N8r,"factory",rTe);O8r.exports=N8r});var I8r=s((Ust,T8r)=>{"use strict";var A8r=W();function eTe(r,e){return A8r(r)||A8r(e)||e<=0?NaN:r}T8r.exports=eTe});var P8r=s((Dst,R8r)=>{"use strict";var tTe=I8r();R8r.exports=tTe});var j8r=s((zst,F8r)=>{"use strict";var L8r=W();function iTe(r,e){return L8r(r)||L8r(e)||e<=0?NaN:r}F8r.exports=iTe});var B8r=s((Wst,M8r)=>{"use strict";var aTe=j8r();M8r.exports=aTe});var C8r=s((Hst,k8r)=>{"use strict";var Lc=W(),nTe=Yr(),sTe=Gr();function uTe(r,e,t){return Lc(r)||Lc(e)||Lc(t)||t<=0?NaN:nTe(e*r+.5*sTe(t*r,2))}k8r.exports=uTe});var G8r=s((Xst,V8r)=>{"use strict";var oTe=mr(),Fc=W(),vTe=Yr(),fTe=Gr();function cTe(r,e){if(Fc(r)||Fc(e)||e<=0)return oTe(NaN);return t;function t(i){return Fc(i)?NaN:vTe(r*i+.5*fTe(e*i,2))}}V8r.exports=cTe});var z8r=s((xst,D8r)=>{"use strict";var lTe=D(),U8r=C8r(),pTe=G8r();lTe(U8r,"factory",pTe);D8r.exports=U8r});var X8r=s((Jst,H8r)=>{"use strict";var W8r=W();function dTe(r,e){return W8r(r)||W8r(e)||e<=0?NaN:r}H8r.exports=dTe});var J8r=s((Yst,x8r)=>{"use strict";var gTe=X8r();x8r.exports=gTe});var Z8r=s(($st,$8r)=>{"use strict";var mTe=Yr(),Y8r=Gr(),yTe=Rr(),hTe=yi(),qTe=pr(),jc=W();function bTe(r,e,t){var i,a,n;return jc(r)||jc(e)||jc(t)||t<0?NaN:t===0?r===e?qTe:0:(i=Y8r(t,2),a=1/yTe(i*hTe),n=-1/(2*i),a*mTe(n*Y8r(r-e,2)))}$8r.exports=bTe});var r7r=s((Zst,K8r)=>{"use strict";var wTe=pr(),Q8r=W();function ETe(r,e){return Q8r(r)||Q8r(e)?NaN:r===e?wTe:0}K8r.exports=ETe});var i7r=s((Qst,t7r)=>{"use strict";var STe=mr(),NTe=pr(),e7r=W();function OTe(r){if(e7r(r))return STe(NaN);return e;function e(t){return e7r(t)?NaN:t===r?NTe:0}}t7r.exports=OTe});var s7r=s((Kst,n7r)=>{"use strict";var _Te=D(),a7r=r7r(),ATe=i7r();_Te(a7r,"factory",ATe);n7r.exports=a7r});var v7r=s((rut,o7r)=>{"use strict";var TTe=mr(),ITe=s7r().factory,Mc=W(),RTe=Rr(),PTe=Yr(),u7r=Gr(),LTe=yi();function FTe(r,e){var t,i,a;if(Mc(r)||Mc(e)||e<0)return TTe(NaN);if(e===0)return ITe(r);return t=u7r(e,2),i=1/RTe(t*LTe),a=-1/(2*t),n;function n(u){return Mc(u)?NaN:i*PTe(a*u7r(u-r,2))}}o7r.exports=FTe});var l7r=s((eut,c7r)=>{"use strict";var jTe=D(),f7r=Z8r(),MTe=v7r();jTe(f7r,"factory",MTe);c7r.exports=f7r});var g7r=s((tut,d7r)=>{"use strict";var p7r=W();function BTe(r,e){return p7r(r)||p7r(e)||e<=0?NaN:0}d7r.exports=BTe});var y7r=s((iut,m7r)=>{"use strict";var kTe=g7r();m7r.exports=kTe});var b7r=s((aut,q7r)=>{"use strict";var h7r=W();function CTe(r,e){return h7r(r)||h7r(e)||e<=0?NaN:e}q7r.exports=CTe});var E7r=s((nut,w7r)=>{"use strict";var VTe=b7r();w7r.exports=VTe});var O7r=s((sut,N7r)=>{"use strict";var S7r=W();function GTe(r,e){return S7r(r)||S7r(e)||e<=0?NaN:e*e}N7r.exports=GTe});var A7r=s((uut,_7r)=>{"use strict";var UTe=O7r();_7r.exports=UTe});var I7r=s((out,T7r)=>{"use strict";var ke=Qr(),DTe=S5r(),zTe=T5r(),WTe=F5r(),HTe=s8r(),XTe=_8r(),xTe=P8r(),JTe=B8r(),YTe=z8r(),$Te=J8r(),ZTe=l7r(),QTe=N6(),KTe=y7r(),rIe=E7r(),eIe=A7r();function tIe(r){return ke(r,"cdf",DTe),ke(r,"entropy",zTe),ke(r,"kurtosis",WTe),ke(r,"logcdf",HTe),ke(r,"logpdf",XTe),ke(r,"mean",xTe),ke(r,"median",JTe),ke(r,"mgf",YTe),ke(r,"mode",$Te),ke(r,"pdf",ZTe),ke(r,"quantile",QTe),ke(r,"skewness",KTe),ke(r,"stdev",rIe),ke(r,"variance",eIe),r}T7r.exports=tIe});var P7r=s((vut,R7r)=>{"use strict";var iIe=Qr(),aIe=I7r();function nIe(r){return iIe(r,"normal",aIe({})),r}R7r.exports=nIe});var F7r=s((fut,L7r)=>{"use strict";var W0=Qr(),sIe=zlr(),uIe=Qlr().ndarray,oIe=u5r().ndarray,vIe=m5r().ndarray,fIe=P7r();function cIe(r){return W0(r,"bartlettTest",sIe),W0(r,"cumax",uIe),W0(r,"max",oIe),W0(r,"mskmax",vIe),W0(r,"dists",fIe({})),r}L7r.exports=cIe});var M7r=s((cut,j7r)=>{"use strict";var lIe=Jr().isPrimitive,pIe=V();function dIe(r){return e;function e(t){if(!lIe(t))throw new TypeError(pIe("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}j7r.exports=dIe});var k7r=s((lut,B7r)=>{"use strict";var gIe=M7r();B7r.exports=gIe});var U7r=s((put,G7r)=>{"use strict";var C7r=Jr().isPrimitive,V7r=V();function mIe(r){return e;function e(t,i){if(!C7r(t))throw new TypeError(V7r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!C7r(i))throw new TypeError(V7r("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}G7r.exports=mIe});var z7r=s((dut,D7r)=>{"use strict";var yIe=U7r();D7r.exports=yIe});var H7r=s((gut,W7r)=>{"use strict";var Bc=Jr().isPrimitive,kc=V();function hIe(r){return e;function e(t,i,a){if(!Bc(t))throw new TypeError(kc("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Bc(i))throw new TypeError(kc("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Bc(a))throw new TypeError(kc("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(a)));return r(t,i,a)}}W7r.exports=hIe});var x7r=s((mut,X7r)=>{"use strict";var qIe=H7r();X7r.exports=qIe});var Y7r=s((yut,J7r)=>{"use strict";var Cc=Qr(),bIe=k7r(),wIe=z7r(),EIe=x7r();function SIe(r){return Cc(r,"s_o",bIe),Cc(r,"ss_o",wIe),Cc(r,"sss_o",EIe),r}J7r.exports=SIe});var Z7r=s((hut,$7r)=>{"use strict";function NIe(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}$7r.exports=NIe});var k1=s((qut,Q7r)=>{"use strict";var OIe=Z7r();Q7r.exports=OIe});var r9r=s((but,K7r)=>{"use strict";var _Ie=k1(),AIe=la(),C1=bi(),TIe=Si(),IIe=/\s+/g,RIe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,PIe=/(?:\s|^)([^\s]+)(?=\s|$)/g,LIe=/([a-z0-9])([A-Z])/g;function FIe(r,e,t){return e=AIe(e),t===0?e:_Ie(e)}function jIe(r){return r=C1(r,RIe," "),r=C1(r,IIe," "),r=C1(r,LIe,"$1 $2"),r=TIe(r),C1(r,PIe,FIe)}K7r.exports=jIe});var t9r=s((wut,e9r)=>{"use strict";var MIe=r9r();e9r.exports=MIe});var a9r=s((Eut,i9r)=>{"use strict";var BIe=Jr().isPrimitive,kIe=V(),CIe=t9r();function VIe(r){if(!BIe(r))throw new TypeError(kIe("invalid argument. First argument must be a string. Value: `%s`.",r));return CIe(r)}i9r.exports=VIe});var s9r=s((Sut,n9r)=>{"use strict";var GIe=a9r();n9r.exports=GIe});var o9r=s((Nut,u9r)=>{"use strict";var UIe=Jr().isPrimitive,DIe=V(),zIe=k1();function WIe(r){if(!UIe(r))throw new TypeError(DIe("invalid argument. First argument must be a string. Value: `%s`.",r));return zIe(r)}u9r.exports=WIe});var f9r=s((Out,v9r)=>{"use strict";var HIe=o9r();v9r.exports=HIe});var l9r=s((_ut,c9r)=>{"use strict";function XIe(r){return r.toUpperCase()}c9r.exports=XIe});var d9r=s((Aut,p9r)=>{"use strict";var xIe=l9r();p9r.exports=xIe});var m9r=s((Tut,g9r)=>{"use strict";var JIe=d9r(),Vc=bi(),YIe=Si(),$Ie=/\s+/g,ZIe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,QIe=/([a-z0-9])([A-Z])/g;function KIe(r){return r=Vc(r,ZIe," "),r=Vc(r,QIe,"$1 $2"),r=YIe(r),r=Vc(r,$Ie,"_"),JIe(r)}g9r.exports=KIe});var h9r=s((Iut,y9r)=>{"use strict";var rRe=m9r();y9r.exports=rRe});var b9r=s((Rut,q9r)=>{"use strict";var eRe=Jr().isPrimitive,tRe=V(),iRe=h9r();function aRe(r){if(!eRe(r))throw new TypeError(tRe("invalid argument. Must provide a string. Value: `%s`.",r));return iRe(r)}q9r.exports=aRe});var E9r=s((Put,w9r)=>{"use strict";var nRe=b9r();w9r.exports=nRe});var N9r=s((Lut,S9r)=>{"use strict";var sRe=la(),Gc=bi(),uRe=Si(),oRe=/\s+/g,vRe=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,fRe=/([a-z0-9])([A-Z])/g;function cRe(r){return r=Gc(r,vRe," "),r=Gc(r,fRe,"$1 $2"),r=uRe(r),r=Gc(r,oRe,"-"),sRe(r)}S9r.exports=cRe});var _9r=s((Fut,O9r)=>{"use strict";var lRe=N9r();O9r.exports=lRe});var T9r=s((jut,A9r)=>{"use strict";var pRe=Jr().isPrimitive,dRe=V(),gRe=_9r();function mRe(r){if(!pRe(r))throw new TypeError(dRe("invalid argument. Must provide a string. Value: `%s`.",r));return gRe(r)}A9r.exports=mRe});var R9r=s((Mut,I9r)=>{"use strict";var yRe=T9r();I9r.exports=yRe});var L9r=s((But,P9r)=>{"use strict";var hRe=Jr().isPrimitive,qRe=V(),bRe=la();function wRe(r){if(!hRe(r))throw new TypeError(qRe("invalid argument. Must provide a string. Value: `%s`.",r));return bRe(r)}P9r.exports=wRe});var j9r=s((kut,F9r)=>{"use strict";var ERe=L9r();F9r.exports=ERe});var B9r=s((Cut,M9r)=>{"use strict";var SRe=k1(),NRe=la(),V1=bi(),ORe=Si(),_Re=/\s+/g,ARe=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,TRe=/(?:\s|^)([^\s]+)(?=\s|$)/g,IRe=/([a-z0-9])([A-Z])/g;function RRe(r,e){return SRe(NRe(e))}function PRe(r){return r=V1(r,ARe," "),r=V1(r,_Re," "),r=V1(r,IRe,"$1 $2"),r=ORe(r),V1(r,TRe,RRe)}M9r.exports=PRe});var C9r=s((Vut,k9r)=>{"use strict";var LRe=B9r();k9r.exports=LRe});var G9r=s((Gut,V9r)=>{"use strict";var FRe=Jr().isPrimitive,jRe=V(),MRe=C9r();function BRe(r){if(!FRe(r))throw new TypeError(jRe("invalid argument. First argument must be a string. Value: `%s`.",r));return MRe(r)}V9r.exports=BRe});var D9r=s((Uut,U9r)=>{"use strict";var kRe=G9r();U9r.exports=kRe});var W9r=s((Dut,z9r)=>{"use strict";var CRe=la(),Uc=bi(),VRe=Si(),GRe=/\s+/g,URe=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,DRe=/([a-z0-9])([A-Z])/g;function zRe(r){return r=Uc(r,URe," "),r=Uc(r,DRe,"$1 $2"),r=VRe(r),r=Uc(r,GRe,"_"),CRe(r)}z9r.exports=zRe});var X9r=s((zut,H9r)=>{"use strict";var WRe=W9r();H9r.exports=WRe});var J9r=s((Wut,x9r)=>{"use strict";var HRe=Jr().isPrimitive,XRe=V(),xRe=X9r();function JRe(r){if(!HRe(r))throw new TypeError(XRe("invalid argument. Must provide a string. Value: `%s`.",r));return xRe(r)}x9r.exports=JRe});var $9r=s((Hut,Y9r)=>{"use strict";var YRe=J9r();Y9r.exports=YRe});var K9r=s((Xut,Q9r)=>{"use strict";var $Re=hr(),Z9r=vr(),ZRe=de().isPrimitive,QRe=Jr().isPrimitive,Dc=V();function KRe(r,e){return $Re(e)?Z9r(e,"flags")&&(r.flags=e.flags,!QRe(r.flags))?new TypeError(Dc("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Z9r(e,"capture")&&(r.capture=e.capture,!ZRe(r.capture))?new TypeError(Dc("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Dc("invalid argument. Options argument must be an object. Value: `%s`.",e))}Q9r.exports=KRe});var G1=s((xut,epr)=>{"use strict";var rPe=K9r(),rpr=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function ePe(r){var e,t;if(arguments.length>0){if(e={},t=rPe(e,r),t)throw t;return e.capture?new RegExp("("+rpr+")",e.flags):new RegExp(rpr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}epr.exports=ePe});var ipr=s((Jut,tpr)=>{"use strict";var tPe=G1(),iPe=tPe({capture:!0});tpr.exports=iPe});var npr=s((Yut,apr)=>{"use strict";var aPe=G1(),nPe=aPe();apr.exports=nPe});var opr=s(($ut,upr)=>{"use strict";var spr=D(),zc=G1(),sPe=ipr(),uPe=npr();spr(zc,"REGEXP",uPe);spr(zc,"REGEXP_CAPTURE",sPe);upr.exports=zc});var fpr=s((Zut,vpr)=>{"use strict";var oPe=opr().REGEXP;function vPe(r){var e,t,i,a;for(e=!0,t="",a=0;a<r.length;a++)i=r.charAt(a),oPe.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}vpr.exports=vPe});var lpr=s((Qut,cpr)=>{"use strict";var fPe=fpr();cpr.exports=fPe});var dpr=s((Kut,ppr)=>{"use strict";var cPe=Jr().isPrimitive,lPe=V(),pPe=lpr();function dPe(r){if(!cPe(r))throw new TypeError(lPe("invalid argument. Must provide a string. Value: `%s`.",r));return pPe(r)}ppr.exports=dPe});var mpr=s((rot,gpr)=>{"use strict";var gPe=dpr();gpr.exports=gPe});var hpr=s((eot,ypr)=>{"use strict";function mPe(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}ypr.exports=mPe});var bpr=s((tot,qpr)=>{"use strict";var yPe=hpr();qpr.exports=yPe});var Epr=s((iot,wpr)=>{"use strict";var hPe=Jr().isPrimitive,qPe=V(),bPe=bpr();function wPe(r){if(!hPe(r))throw new TypeError(qPe("invalid argument. First argument must be a string. Value: `%s`.",r));return bPe(r)}wpr.exports=wPe});var Npr=s((aot,Spr)=>{"use strict";var EPe=Epr();Spr.exports=EPe});var _pr=s((not,Opr)=>{"use strict";var SPe=Jr().isPrimitive,NPe=V();function OPe(r){if(!SPe(r))throw new TypeError(NPe("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}Opr.exports=OPe});var Tpr=s((sot,Apr)=>{"use strict";var _Pe=_pr();Apr.exports=_Pe});var Rpr=s((uot,Ipr)=>{"use strict";var yt=Qr(),APe=s9r(),TPe=f9r(),IPe=E9r(),RPe=R9r(),PPe=j9r(),LPe=D9r(),FPe=$9r(),jPe=mpr(),MPe=Npr(),BPe=Tpr();function kPe(r){return yt(r,"camelcase",APe),yt(r,"capitalize",TPe),yt(r,"constantcase",IPe),yt(r,"kebabcase",RPe),yt(r,"lowercase",PPe),yt(r,"pascalcase",LPe),yt(r,"snakecase",FPe),yt(r,"startcase",jPe),yt(r,"uncapitalize",MPe),yt(r,"uppercase",BPe),r}Ipr.exports=kPe});var Lpr=s((oot,Ppr)=>{"use strict";var CPe=Qr(),VPe=Y7r(),GPe=Rpr();function UPe(r){return CPe(r,"tools",VPe({})),r=GPe(r),r}Ppr.exports=UPe});var jpr=s((vot,Fpr)=>{"use strict";var ht=Qr(),DPe=hq(),zPe=TS(),WPe=kS(),HPe=j_(),XPe=MW(),xPe=orr(),JPe=b4r(),YPe=R4r(),$Pe=F7r(),ZPe=Lpr();function QPe(){var r={};return ht(r,"array",DPe({})),ht(r,"assert",zPe({})),ht(r,"blas",WPe({})),ht(r,"datasets",HPe({})),ht(r,"math",XPe({})),ht(r,"ndarray",xPe({})),ht(r,"random",JPe({})),ht(r,"simulate",YPe({})),ht(r,"stats",$Pe({})),ht(r,"string",ZPe({})),r}Fpr.exports=QPe});var Bpr=s((fot,Mpr)=>{"use strict";var KPe=D(),Wc=jpr();KPe(Wc,"CACHED",Wc());Mpr.exports=Wc});var eLe=s((cot,kpr)=>{var rLe=Bpr().CACHED;kpr.exports=rLe});return eLe();})();
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
