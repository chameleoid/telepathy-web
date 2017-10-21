(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

(function(exports) {

if(typeof document === 'undefined')
  var document = {};

if(typeof window === 'undefined')
  var window = {};
if(!window.document)
  window.document = document;

if(typeof navigator === 'undefined')
  var navigator = {};
if(!navigator.userAgent)
  navigator.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/534.51.22 (KHTML, like Gecko) Version/5.1.1 Safari/534.51.22';

function gwtapp() {};

(function(){var $gwt_version = "2.4.0";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $strongName = '4533928AF3A2228268FD8F10BB191446';var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;$stats && $stats({moduleName:'gwtapp',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});function H(){}
function P(){}
function O(){}
function N(){}
function M(){}
function rr(){}
function gb(){}
function ub(){}
function pb(){}
function Fb(){}
function Ab(){}
function Lb(){}
function Tb(){}
function Kb(){}
function Zb(){}
function _b(){}
function fc(){}
function ic(){}
function hc(){}
function Se(){}
function Re(){}
function Ze(){}
function Ye(){}
function Xe(){}
function Ah(){}
function Hh(){}
function Gh(){}
function Ej(){}
function Mj(){}
function Uj(){}
function _j(){}
function gk(){}
function mk(){}
function pk(){}
function wk(){}
function vk(){}
function Dk(){}
function Ik(){}
function Qk(){}
function Uk(){}
function il(){}
function ol(){}
function rl(){}
function Tl(){}
function Xl(){}
function km(){}
function om(){}
function Nn(){}
function Np(){}
function ep(){}
function dp(){}
function yp(){}
function yo(){}
function Zo(){}
function xp(){}
function Hp(){}
function Mp(){}
function Xp(){}
function bq(){}
function jq(){}
function qq(){}
function Dq(){}
function Hq(){}
function Nq(){}
function Qq(){}
function Zq(){}
function Yq(){}
function Yj(){Wj()}
function Ij(){Gj()}
function Eh(){Ch()}
function Ek(){Cb()}
function qk(){Cb()}
function Rk(){Cb()}
function Vk(){Cb()}
function jl(){Cb()}
function Oq(){Cb()}
function kk(){ik()}
function fm(){Yl(this)}
function gm(){Yl(this)}
function mg(a){Hf(this,a)}
function mq(a){this.c=a}
function bk(a){this.b=a}
function Cp(a){this.b=a}
function Sp(a){this.b=a}
function V(a){Cb();this.f=a}
function nk(a){V.call(this,a)}
function rk(a){V.call(this,a)}
function Sk(a){V.call(this,a)}
function Wk(a){V.call(this,a)}
function kl(a){V.call(this,a)}
function Yl(a){a.b=new fc}
function Ul(){this.b=new fc}
function rb(){rb=rr;qb=new ub}
function lr(){lr=rr;kr=new gr}
function jr(a,b){return b}
function ac(a,b){a.b+=b}
function bc(a,b){a.b+=b}
function cc(a,b){a.b+=b}
function dc(a,b){a.b+=b}
function or(a,b){lr();a[Ls]=b}
function nr(a,b){lr();ar(a,b)}
function _q(a,b,c){rp(a.b,b,c)}
function Jg(){rf();Hf(this,Tr)}
function pl(a){Sk.call(this,a)}
function Hk(a){return isNaN(a)}
function Jj(a){return new Oi(a)}
function Zj(a){return new Oj(a)}
function dl(a){return a<0?-a:a}
function hl(a,b){return a<b?a:b}
function gl(a,b){return a>b?a:b}
function xe(a,b){return !we(a,b)}
function ye(a,b){return !ve(a,b)}
function ir(a,b){return new b(a)}
function Oj(a){this.b=new Yn(a)}
function Nj(){this.b=(Un(),Rn)}
function ak(){this.b=(Qo(),Fo)}
function Wo(){Qo();return zo}
function mr(a,b){lr();_q(kr,a,b)}
function br(a,b){a[b]||(a[b]={})}
function kq(a){return a.b<a.c.c}
function Vn(a){return a.b<<3|a.c.c}
function Mi(a){return a.f*a.b[0]}
function Je(a){return a.l|a.m<<22}
function op(b,a){return b.f[Qr+a]}
function Yp(a,b){this.c=a;this.b=b}
function Ro(a,b){this.b=a;this.c=b}
function Iq(a,b){this.b=a;this.c=b}
function bm(a,b){ac(a.b,b);return a}
function cm(a,b){bc(a.b,b);return a}
function dm(a,b){cc(a.b,b);return a}
function pr(a){lr();return er(kr,a)}
function qr(a){lr();return fr(kr,a)}
function Oi(a){Oh();oi.call(this,a)}
function Ni(){Oh();oi.call(this,Tr)}
function cg(a){dg.call(this,a,0)}
function Kg(a){mg.call(this,a.tS())}
function el(a){return Math.floor(a)}
function yl(b,a){return b.indexOf(a)}
function qp(b,a){return Qr+a in b.f}
function uc(a,b){return a.cM&&a.cM[b]}
function re(a,b){return ee(a,b,false)}
function bn(a,b){return cn(a.b,a.e,b)}
function ce(a){return de(a.l,a.m,a.h)}
function Ac(a){return a==null?null:a}
function sf(a){return a.r()<0?Mf(a):a}
function ob(a){return a.$H||(a.$H=++jb)}
function zc(a){return a.tM==rr||tc(a,1)}
function tc(a,b){return a.cM&&!!a.cM[b]}
function vl(b,a){return b.charCodeAt(a)}
function hm(a){Yl(this);cc(this.b,a)}
function oi(a){Oh();pi.call(this,a,10)}
function Aq(a,b,c,d){a.splice(b,c,d)}
function dq(a,b){(a<0||a>=b)&&hq(a,b)}
function xc(a,b){return a!=null&&tc(a,b)}
function db(a){return yc(a)?Db(wc(a)):Lr}
function Z(a){return yc(a)?$(wc(a)):a+Lr}
function Fl(a){return lc(Vd,{6:1},1,a,0)}
function vq(){this.b=lc(Td,{6:1},0,0,0)}
function Pl(){Pl=rr;Ml={};Ol={}}
function Yo(){Yo=rr;Xo=Jk((Qo(),zo))}
function ik(){if(!hk){hk=true;jk()}}
function Gj(){if(!Fj){Fj=true;Hj()}}
function Wj(){if(!Vj){Vj=true;new kk;Xj()}}
function gr(){this.b=new Fq;new Fq;new Fq}
function X(a){Cb();this.c=a;Bb(new Tb,this)}
function Pi(a){Oh();oi.call(this,Hm(a,0))}
function gg(a){hg.call(this,a,0,a.length)}
function fg(a,b){cg.call(this,a);If(this,b)}
function ze(a,b){ee(a,b,true);return ae}
function tq(a,b){dq(b,a.c);return a.b[b]}
function rq(a,b){nc(a.b,a.c++,b);return true}
function _l(a,b,c){dc(a.b,Ll(b,0,c));return a}
function kb(a,b,c){return a.apply(b,c);var d}
function em(a,b,c){return ec(a.b,b,b,c),a}
function Af(a,b,c){return yf(a,b,Bc(a.f),c)}
function xf(a,b,c){return yf(a,b,Bc(a.f),Uo(c))}
function Bl(c,a,b){return c.substr(a,b-a)}
function Al(b,a){return b.substr(a,b.length-a)}
function fl(a){return Math.log(a)*Math.LOG10E}
function cb(a){return a==null?null:a.name}
function $(a){return a==null?null:a.message}
function yc(a){return a!=null&&a.tM!=rr&&!tc(a,1)}
function ec(a,b,c,d){a.b=Bl(a.b,0,b)+d+Al(a.b,c)}
function eg(a,b,c){dg.call(this,a,b);If(this,c)}
function pg(a,b){this.g=a;this.f=b;this.b=sg(a)}
function si(a,b,c){Oh();this.f=a;this.e=b;this.b=c}
function sl(a){this.b='Unknown';this.d=a;this.c=-1}
function yk(a,b){var c;c=new wk;c.d=a+b;return c}
function dr(a,b){var c;c=mp(a.b,b);return wc(c)}
function fb(a){var b;return b=a,zc(b)?b.hC():ob(b)}
function To(a){Qo();return Ok((Yo(),Xo),a)}
function qe(a,b){return de(a.l&b.l,a.m&b.m,a.h&b.h)}
function De(a,b){return de(a.l|b.l,a.m|b.m,a.h|b.h)}
function Le(a,b){return de(a.l^b.l,a.m^b.m,a.h^b.h)}
function Bm(a,b){return (a.b[~~b>>5]&1<<(b&31))!=0}
function Cq(a,b){var c;for(c=0;c<b;++c){a[c]=false}}
function Lf(a,b,c){var d;d=Kf(a,b);If(d,c);return d}
function zb(a,b){a.length>=b&&a.splice(0,b);return a}
function wb(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Ph(a,b){if(mi(a,b)){return tm(a,b)}return a}
function ii(a,b){if(!mi(a,b)){return tm(a,b)}return a}
function _d(a){if(xc(a,15)){return a}return new X(a)}
function Eb(){try{null.a()}catch(a){return a}}
function Ak(a){var b;b=new wk;b.d=Lr+a;b.c=1;return b}
function eb(a,b){var c;return c=a,zc(c)?c.eQ(b):c===b}
function se(a,b){return a.l==b.l&&a.m==b.m&&a.h==b.h}
function Ce(a,b){return a.l!=b.l||a.m!=b.m||a.h!=b.h}
function de(a,b,c){return _=new Se,_.l=a,_.m=b,_.h=c,_}
function rp(a,b,c){return !b?tp(a,c):sp(a,b,c,~~ob(b))}
function Eq(a,b){return Ac(a)===Ac(b)||a!=null&&eb(a,b)}
function Xq(a,b){return Ac(a)===Ac(b)||a!=null&&eb(a,b)}
function hq(a,b){throw new Wk('Index: '+a+', Size: '+b)}
function Xh(a,b){if(b<0){throw new nk(ts)}return tm(a,b)}
function dg(a,b){if(!a){throw new jl}this.f=b;Tf(this,a)}
function og(a,b){if(!a){throw new jl}this.f=b;Tf(this,a)}
function ig(a,b,c,d){hg.call(this,a,b,c);If(this,d)}
function jg(a,b){hg.call(this,a,0,a.length);If(this,b)}
function ng(a,b){hg.call(this,Cl(a),0,a.length);If(this,b)}
function lm(a){V.call(this,'String index out of range: '+a)}
function Zl(a,b){dc(a.b,String.fromCharCode(b));return a}
function pn(a,b){tn(a.b,a.b,a.e,b.b,b.e);Sh(a);a.c=-2}
function Tf(a,b){a.d=b;a.b=b.ab();a.b<54&&(a.g=Ie(ai(b)))}
function qc(){qc=rr;oc=[];pc=[];rc(new ic,oc,pc)}
function Ch(){if(!Bh){Bh=true;new Yj;new Ij;Dh()}}
function Sl(){if(Nl==256){Ml=Ol;Ol={};Nl=0}++Nl}
function cr(a){var b;b=a[Ls];if(!b){b=[];a[Ls]=b}return b}
function zk(a,b,c){var d;d=new wk;d.d=a+b;d.c=c?8:0;return d}
function xk(a,b,c){var d;d=new wk;d.d=a+b;d.c=4;d.b=c;return d}
function lc(a,b,c,d,e){var f;f=jc(e,d);mc(a,b,c,f);return f}
function Ll(a,b,c){var d;d=b+c;El(a.length,b,d);return Gl(a,b,d)}
function mo(a,b){go();return b<fo.length?lo(a,fo[b]):ei(a,po(b))}
function me(a){return a.l+a.m*4194304+a.h*17592186044416}
function vc(a,b){if(a!=null&&!uc(a,b)){throw new Ek}return a}
function lq(a){if(a.b>=a.c.c){throw new Oq}return tq(a.c,a.b++)}
function wl(a,b){if(!xc(b,1)){return false}return String(a)==b}
function lb(){if(ib++==0){sb((rb(),qb));return true}return false}
function fi(a){if(a.f<0){throw new nk('start < 0: '+a)}return xo(a)}
function pm(){V.call(this,'Add not supported on this collection')}
function Fq(){this.b=[];this.f={};this.d=false;this.c=null;this.e=0}
function qi(a,b){Oh();this.f=a;this.e=1;this.b=mc(Od,{6:1},-1,[b])}
function sc(a,b,c){qc();for(var d=0,e=b.length;d<e;++d){a[b[d]]=c[d]}}
function xl(a,b,c,d){var e;for(e=0;e<b;++e){c[d++]=a.charCodeAt(e)}}
function Wh(a,b){var c;for(c=a.e-1;c>=0&&a.b[c]==b[c];--c){}return c<0}
function tp(a,b){var c;c=a.c;a.c=b;if(!a.d){a.d=true;++a.e}return c}
function $l(a,b){dc(a.b,String.fromCharCode.apply(null,b));return a}
function am(a,b,c,d){b==null&&(b=Mr);bc(a.b,b.substr(c,d-c));return a}
function sn(a,b,c,d){var e;e=lc(Od,{6:1},-1,b,1);tn(e,a,b,c,d);return e}
function mc(a,b,c,d){qc();sc(d,oc,pc);d.aC=a;d.cM=b;d.qI=c;return d}
function uq(a,b,c){for(;c<a.c;++c){if(Xq(b,a.b[c])){return c}}return -1}
function sq(a,b,c){(b<0||b>a.c)&&hq(b,a.c);Aq(a.b,b,0,c);++a.c}
function nn(a,b){var c;c=on(a.b,a.e,b);if(c==1){a.b[a.e]=1;++a.e}a.c=-2}
function Sh(a){while(a.e>0&&a.b[--a.e]==0){}a.b[a.e++]==0&&(a.f=0)}
function Gg(a){if(we(a,ur)&&xe(a,xr)){return df[Je(a)]}return new qg(a,0)}
function ji(a,b){if(b==0||a.f==0){return a}return b>0?wm(a,b):zm(a,-b)}
function li(a,b){if(b==0||a.f==0){return a}return b>0?zm(a,b):wm(a,-b)}
function $h(a){var b;if(a.f==0){return -1}b=Zh(a);return (b<<5)+_k(a.b[b])}
function bl(a){var b;b=Je(a);return b!=0?_k(b):_k(Je(Fe(a,32)))+32}
function Sb(a,b){var c;c=Mb(a,b);return c.length==0?(new Fb).o(b):zb(c,1)}
function Gl(a,b,c){a=a.slice(b,c);return String.fromCharCode.apply(null,a)}
function rc(a,b,c){var d=0,e;for(var f in a){if(e=a[f]){b[d]=f;c[d]=e;++d}}}
function up(e,a,b){var c,d=e.f;a=Qr+a;a in d?(c=d[a]):++e.e;d[a]=b;return c}
function gn(a,b,c,d){var e;e=lc(Od,{6:1},-1,b+1,1);hn(e,a,b,c,d);return e}
function Cl(a){var b,c;c=a.length;b=lc(Md,{6:1},-1,c,1);xl(a,c,b,0);return b}
function _e(a){var b;b=bf(a);if(isNaN(b)){throw new pl(Zr+a+$r)}return b}
function Fg(a){if(!isFinite(a)||isNaN(a)){throw new pl(hs)}return new mg(Lr+a)}
function wc(a){if(a!=null&&(a.tM==rr||tc(a,1))){throw new Ek}return a}
function Qf(a,b){var c;c=new og((!a.d&&(a.d=Li(a.g)),a.d),a.f);If(c,b);return c}
function bg(a,b){var c;c=new Pi(Zf(a));if(sm(c)<b){return ai(c)}throw new nk(cs)}
function ei(a,b){if(b.f==0){return Nh}if(a.f==0){return Nh}return go(),ho(a,b)}
function bi(a,b){var c;if(b.f<=0){throw new nk(us)}c=hi(a,b);return c.f<0?fn(c,b):c}
function Ip(a){var b;b=new vq;a.d&&rq(b,new Sp(a));kp(a,b);jp(a,b);this.b=new mq(b)}
function lp(a,b){return b==null?a.d:xc(b,1)?qp(a,vc(b,1)):pp(a,b,~~fb(b))}
function mp(a,b){return b==null?a.c:xc(b,1)?op(a,vc(b,1)):np(a,b,~~fb(b))}
function Bc(a){return ~~Math.max(Math.min(a,2147483647),-2147483648)}
function qg(a,b){this.f=b;this.b=tg(a);this.b<54?(this.g=Ie(a)):(this.d=Ki(a))}
function kg(a){if(!isFinite(a)||isNaN(a)){throw new pl(hs)}Hf(this,a.toPrecision(20))}
function mb(b){return function(){try{return nb(b,this,arguments)}catch(a){throw a}}}
function nb(a,b,c){var d;d=lb();try{return kb(a,b,c)}finally{d&&tb((rb(),qb));--ib}}
function Ok(a,b){var c;c=a[Qr+b];if(c){return c}if(b==null){throw new jl}throw new Rk}
function sb(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=xb(b,c)}while(a.b);a.b=c}}
function tb(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=xb(b,c)}while(a.c);a.c=c}}
function _k(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function Jk(a){var b,c,d,e;b={};for(d=0,e=a.length;d<e;++d){c=a[d];b[Qr+c.b]=c}return b}
function Rb(a){var b;b=zb(Sb(a,Eb()),3);b.length==0&&(b=zb((new Fb).k(),1));return b}
function Wn(a){var b;b=new gm;$l(b,Sn);bm(b,a.b);b.b.b+=ys;$l(b,Tn);cm(b,a.c);return b.b.b}
function Rh(a){var b;b=lc(Od,{6:1},-1,a.e,1);nm(a.b,0,b,0,a.e);return new si(a.f,a.e,b)}
function Bf(a,b){var c;c=lc(Wd,{6:1},16,2,0);nc(c,0,Df(a,b));nc(c,1,Xf(a,Kf(c[0],b)));return c}
function Cf(a,b,c){var d;d=lc(Wd,{6:1},16,2,0);nc(d,0,Ef(a,b,c));nc(d,1,Xf(a,Kf(d[0],b)));return d}
function $o(a,b){var c;while(a.Pb()){c=a.Qb();if(b==null?c==null:eb(b,c)){return a}}return null}
function Zh(a){var b;if(a.c==-2){if(a.f==0){b=-1}else{for(b=0;a.b[b]==0;++b){}}a.c=b}return a.c}
function bb(a){var b;return a==null?Mr:yc(a)?cb(wc(a)):xc(a,1)?Nr:(b=a,zc(b)?b.gC():Gc).d}
function Uf(a){if(a.b<54){return a.g<0?-1:a.g>0?1:0}return (!a.d&&(a.d=Li(a.g)),a.d).r()}
function Mf(a){if(a.b<54){return new pg(-a.g,a.f)}return new og((!a.d&&(a.d=Li(a.g)),a.d).cb(),a.f)}
function El(a,b,c){if(b<0){throw new lm(b)}if(c<b){throw new lm(c-b)}if(c>a){throw new lm(c)}}
function lg(a,b){if(!isFinite(a)||isNaN(a)){throw new pl(hs)}Hf(this,a.toPrecision(20));If(this,b)}
function Gk(a,b){if(isNaN(a)){return isNaN(b)?0:1}else if(isNaN(b)){return -1}return a<b?-1:a>b?1:0}
function uk(a,b){if(b<2||b>36){return 0}if(a<0||a>=b){return 0}return a<10?48+a&65535:97+a-10&65535}
function er(a,b){var c;if(!b){return null}c=b[Ls];if(c){return c}c=ir(b,dr(a,b.gC()));b[Ls]=c;return c}
function ke(a){var b,c;c=$k(a.h);if(c==32){b=$k(a.m);return b==32?$k(a.l)+32:b+20-10}else{return c-12}}
function be(a){var b,c,d;b=a&4194303;c=~~a>>22&4194303;d=a<0?1048575:0;return de(b,c,d)}
function Qe(){Qe=rr;Me=de(4194303,4194303,524287);Ne=de(0,0,524288);Oe=ue(1);ue(2);Pe=ue(0)}
function mn(a,b){hn(a.b,a.b,a.e,b.b,b.e);a.e=hl(gl(a.e,b.e)+1,a.b.length);Sh(a);a.c=-2}
function um(a,b){var c;c=~~b>>5;a.e+=c+($k(a.b[a.e-1])-(b&31)>=0?0:1);xm(a.b,a.b,c,b&31);Sh(a);a.c=-2}
function Tm(a,b){var c,d;c=~~b>>5;if(a.e<c||a.ab()<=b){return}d=32-(b&31);a.e=c+1;a.b[c]&=d<32?~~-1>>>d:0;Sh(a)}
function ai(a){var b;b=a.e>1?De(Ee(ue(a.b[1]),32),qe(ue(a.b[0]),yr)):qe(ue(a.b[0]),yr);return Ae(ue(a.f),b)}
function jn(a,b,c){var d;for(d=c-1;d>=0&&a[d]==b[d];--d){}return d<0?0:xe(qe(ue(a[d]),yr),qe(ue(b[d]),yr))?-1:1}
function ym(a,b,c){var d,e,f;d=0;for(e=0;e<c;++e){f=b[e];a[e]=f<<1|d;d=~~f>>>31}d!=0&&(a[c]=d)}
function ge(a,b,c,d,e){var f;f=Fe(a,b);c&&je(f);if(e){a=ie(a,b);d?(ae=Be(a)):(ae=de(a.l,a.m,a.h))}return f}
function gwtOnLoad(b,c,d,e){$moduleName=c;$moduleBase=d;if(b)try{Jr($d)()}catch(a){b(c)}else{Jr($d)()}}
function fr(a,b){var c,d,e;if(b==null){return null}d=cr(b);e=d;for(c=0;c<b.length;++c){e[c]=er(a,b[c])}return d}
function Mb(a,b){var c,d,e;e=b&&b.stack?b.stack.split('\n'):[];for(c=0,d=e.length;c<d;++c){e[c]=a.n(e[c])}return e}
function Um(a,b){var c,d;d=~~b>>5==a.e-1&&a.b[a.e-1]==1<<(b&31);if(d){for(c=0;d&&c<a.e-1;++c){d=a.b[c]==0}}return d}
function _h(a){var b;if(a.d!=0){return a.d}for(b=0;b<a.b.length;++b){a.d=a.d*33+(a.b[b]&-1)}a.d=a.d*a.f;return a.d}
function Hg(a,b){if(b==0){return Gg(a)}if(se(a,ur)&&b>=0&&b<pf.length){return pf[b]}return new qg(a,b)}
function Ig(a){if(a==Bc(a)){return Hg(ur,Bc(a))}if(a>=0){return new qg(ur,2147483647)}return new qg(ur,-2147483648)}
function Li(a){Oh();if(a<0){if(a!=-1){return new ui(-1,-a)}return Ih}else return a<=10?Kh[Bc(a)]:new ui(1,a)}
function zg(a){var b=qf;!b&&(b=qf=/^[+-]?\d*$/i);if(b.test(a)){return parseInt(a,10)}else{return Number.NaN}}
function kp(e,a){var b=e.f;for(var c in b){if(c.charCodeAt(0)==58){var d=new Yp(e,c.substring(1));a.Kb(d)}}}
function Rl(a){Pl();var b=Qr+a;var c=Ol[b];if(c!=null){return c}c=Ml[b];c==null&&(c=Ql(a));Sl();return Ol[b]=c}
function Be(a){var b,c,d;b=~a.l+1&4194303;c=~a.m+(b==0?1:0)&4194303;d=~a.h+(b==0&&c==0?1:0)&1048575;return de(b,c,d)}
function je(a){var b,c,d;b=~a.l+1&4194303;c=~a.m+(b==0?1:0)&4194303;d=~a.h+(b==0&&c==0?1:0)&1048575;a.l=b;a.m=c;a.h=d}
function Q(a){var b,c,d;c=lc(Ud,{6:1},13,a.length,0);for(d=0,b=a.length;d<b;++d){if(!a[d]){throw new jl}c[d]=a[d]}}
function Cb(){var a,b,c,d;c=Rb(new Tb);d=lc(Ud,{6:1},13,c.length,0);for(a=0,b=d.length;a<b;++a){d[a]=new sl(c[a])}Q(d)}
function fk(){var a,b,c;c=(Qo(),Qo(),zo);b=lc(Sd,{6:1},5,c.length,0);for(a=0;a<c.length;++a)b[a]=new bk(c[a]);return b}
function ki(a){var b,c,d,e;return a.f==0?a:(e=a.e,c=e+1,b=lc(Od,{6:1},-1,c,1),ym(b,a.b,e),d=new si(a.f,c,b),Sh(d),d)}
function Ym(a,b,c,d){var e,f;e=c.e;f=lc(Od,{6:1},-1,(e<<1)+1,1);io(a.b,hl(e,a.e),b.b,hl(e,b.e),f);Zm(f,c,d);return Pm(f,c)}
function Vh(a,b){var c;if(a===b){return true}if(xc(b,17)){c=vc(b,17);return a.f==c.f&&a.e==c.e&&Wh(a,c.b)}return false}
function Zk(a){var b;if(a<0){return -2147483648}else if(a==0){return 0}else{for(b=1073741824;(b&a)==0;b>>=1){}return b}}
function sm(a){var b,c,d;if(a.f==0){return 0}b=a.e<<5;c=a.b[a.e-1];if(a.f<0){d=Zh(a);d==a.e-1&&(c=~~(c-1))}b-=$k(c);return b}
function io(a,b,c,d,e){go();if(b==0||d==0){return}b==1?(e[d]=ko(e,c,d,a[0])):d==1?(e[b]=ko(e,a,b,c[0])):jo(a,c,e,b,d)}
function en(a,b,c,d,e){var f,g;g=a;for(f=c.ab()-1;f>=0;--f){g=Ym(g,g,d,e);(c.b[~~f>>5]&1<<(f&31))!=0&&(g=Ym(g,b,d,e))}return g}
function on(a,b,c){var d,e;d=qe(ue(c),yr);for(e=0;Ce(d,ur)&&e<b;++e){d=pe(d,qe(ue(a[e]),yr));a[e]=Je(d);d=Fe(d,32)}return Je(d)}
function hg(b,c,d){var a,e;try{Hf(this,Ll(b,c,d))}catch(a){a=_d(a);if(xc(a,14)){e=a;throw new pl(e.f)}else throw a}}
function Dg(a){if(a<-2147483648){throw new nk('Overflow')}else if(a>2147483647){throw new nk('Underflow')}else{return Bc(a)}}
function Xn(a,b){Un();if(a<0){throw new Sk('Digits < 0')}if(!b){throw new kl('null RoundingMode')}this.b=a;this.c=b}
function Ki(a){Oh();if(xe(a,ur)){if(Ce(a,wr)){return new ti(-1,Be(a))}return Ih}else return ye(a,tr)?Kh[Je(a)]:new ti(1,a)}
function tg(a){var b;xe(a,ur)&&(a=de(~a.l&4194303,~a.m&4194303,~a.h&1048575));return 64-(b=Je(Fe(a,32)),b!=0?$k(b):$k(Je(a))+32)}
function pe(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(~~c>>22);e=a.h+b.h+(~~d>>22);return de(c&4194303,d&4194303,e&1048575)}
function He(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(~~c>>22);e=a.h-b.h+(~~d>>22);return de(c&4194303,d&4194303,e&1048575)}
function Sm(a,b){var c;c=b-1;if(a.f>0){while(!a.gb(c)){--c}return b-1-c}else{while(a.gb(c)){--c}return b-1-gl(c,a.bb())}}
function fe(a,b){if(a.h==524288&&a.m==0&&a.l==0){b&&(ae=de(0,0,0));return ce((Qe(),Oe))}b&&(ae=de(a.l,a.m,a.h));return de(0,0,0)}
function Ff(a,b){var c;if(a===b){return true}if(xc(b,16)){c=vc(b,16);return c.f==a.f&&(a.b<54?c.g==a.g:a.d.eQ(c.d))}return false}
function cn(a,b,c){var d,e,f,g;f=ur;for(d=b-1;d>=0;--d){g=pe(Ee(f,32),qe(ue(a[d]),yr));e=Nm(g,c);f=ue(Je(Fe(e,32)))}return Je(f)}
function wm(a,b){var c,d,e,f;c=~~b>>5;b&=31;e=a.e+c+(b==0?0:1);d=lc(Od,{6:1},-1,e,1);xm(d,a.b,c,b);f=new si(a.f,e,d);Sh(f);return f}
function ue(a){var b,c;if(a>-129&&a<128){b=a+128;oe==null&&(oe=lc(Pd,{6:1},2,256,0));c=oe[b];!c&&(c=oe[b]=be(a));return c}return be(a)}
function Ai(a){Oh();var b,c,d;if(a<Mh.length){return Mh[a]}c=~~a>>5;b=a&31;d=lc(Od,{6:1},-1,c+1,1);d[c]=1<<b;return new si(1,c+1,d)}
function ri(a){Oh();if(a.length==0){this.f=0;this.e=1;this.b=mc(Od,{6:1},-1,[0])}else{this.f=1;this.e=a.length;this.b=a;Sh(this)}}
function Dl(c){if(c.length==0||c[0]>ys&&c[c.length-1]>ys){return c}var a=c.replace(/^(\s*)/,Lr);var b=a.replace(/\s*$/,Lr);return b}
function Yk(a){a-=~~a>>1&1431655765;a=(~~a>>2&858993459)+(a&858993459);a=(~~a>>4)+a&252645135;a+=~~a>>8;a+=~~a>>16;return a&63}
function nc(a,b,c){if(c!=null){if(a.qI>0&&!uc(c,a.qI)){throw new qk}if(a.qI<0&&(c.tM==rr||tc(c,1))){throw new qk}}return a[b]=c}
function Qh(a,b){if(a.f>b.f){return 1}if(a.f<b.f){return -1}if(a.e>b.e){return a.f}if(a.e<b.e){return -b.f}return a.f*jn(a.b,b.b,a.e)}
function Rf(a,b){var c;c=a.f-b;if(a.b<54){if(a.g==0){return Ig(c)}return new pg(a.g,Dg(c))}return new dg((!a.d&&(a.d=Li(a.g)),a.d),Dg(c))}
function jp(i,a){var b=i.b;for(var c in b){var d=parseInt(c,10);if(c==d){var e=b[d];for(var f=0,g=e.length;f<g;++f){a.Kb(e[f])}}}}
function np(i,a,b){var c=i.b[b];if(c){for(var d=0,e=c.length;d<e;++d){var f=c[d];var g=f.Rb();if(i.Ob(a,g)){return f.Sb()}}}return null}
function pp(i,a,b){var c=i.b[b];if(c){for(var d=0,e=c.length;d<e;++d){var f=c[d];var g=f.Rb();if(i.Ob(a,g)){return true}}}return false}
function Bq(a,b){var c,d,e,f;d=0;c=a.length-1;while(d<=c){e=d+(~~(c-d)>>1);f=a[e];if(f<b){d=e+1}else if(f>b){c=e-1}else{return e}}return -d-1}
function Pk(a){var b;b=_e(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}
function Ie(a){if(se(a,(Qe(),Ne))){return -9223372036854775808}if(!we(a,Pe)){return -me(Be(a))}return a.l+a.m*4194304+a.h*17592186044416}
function Bb(a,b){var c,d,e,f;e=Sb(a,yc(b.c)?wc(b.c):null);f=lc(Ud,{6:1},13,e.length,0);for(c=0,d=f.length;c<d;++c){f[c]=new sl(e[c])}Q(f)}
function yb(a){var b,c,d;d=Lr;a=Dl(a);b=a.indexOf(Or);if(b!=-1){c=a.indexOf('function')==0?8:0;d=Dl(a.substr(c,b-c))}return d.length>0?d:Pr}
function ie(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return de(c,d,e)}
function Db(b){var c=Lr;try{for(var d in b){if(d!='name'&&d!='message'&&d!='toString'){try{c+='\n '+d+Kr+b[d]}catch(a){}}}}catch(a){}return c}
function ti(a,b){this.f=a;if(se(qe(b,zr),ur)){this.e=1;this.b=mc(Od,{6:1},-1,[Je(b)])}else{this.e=2;this.b=mc(Od,{6:1},-1,[Je(b),Je(Fe(b,32))])}}
function ui(a,b){this.f=a;if(b<4294967296){this.e=1;this.b=mc(Od,{6:1},-1,[~~b])}else{this.e=2;this.b=mc(Od,{6:1},-1,[~~(b%4294967296),~~(b/4294967296)])}}
function Xm(a,b){var c,d;d=new ri(lc(Od,{6:1},-1,1<<b,1));d.e=1;d.b[0]=1;d.f=1;for(c=1;c<b;++c){Bm(ei(a,d),c)&&(d.b[~~c>>5]|=1<<(c&31))}return d}
function Jm(a){var b,c,d;b=qe(ue(a.b[0]),yr);c=sr;d=vr;do{Ce(qe(Ae(b,c),d),ur)&&(c=De(c,d));d=Ee(d,1)}while(xe(d,Fr));c=Be(c);return Je(qe(c,yr))}
function Gm(a){var b,c,d;if(we(a,ur)){c=re(a,Ar);d=ze(a,Ar)}else{b=Ge(a,1);c=re(b,Br);d=ze(b,Br);d=pe(Ee(d,1),qe(a,sr))}return De(Ee(d,32),qe(c,yr))}
function ko(a,b,c,d){go();var e,f;e=ur;for(f=0;f<c;++f){e=pe(Ae(qe(ue(b[f]),yr),qe(ue(d),yr)),qe(ue(Je(e)),yr));a[f]=Je(e);e=Ge(e,32)}return Je(e)}
function _m(a,b,c){var d,e,f,g,i;e=c.e<<5;d=bi(a.eb(e),c);i=bi(Ai(e),c);f=Jm(c);c.e==1?(g=en(i,d,b,c,f)):(g=dn(i,d,b,c,f));return Ym(g,(Oh(),Jh),c,f)}
function Om(a,b,c){var d,e,f,g,i,j;d=c.bb();e=c.fb(d);g=_m(a,b,e);i=an(a,b,d);f=Xm(e,d);j=ei(rn(i,g),f);Tm(j,d);j.f<0&&(j=fn(j,Ai(d)));return fn(g,ei(e,j))}
function xb(b,c){var a,d,e,f;for(d=0,e=b.length;d<e;++d){f=b[d];try{f[1]?f[0].Ub()&&(c=wb(c,f)):f[0].Ub()}catch(a){a=_d(a);if(!xc(a,12))throw a}}return c}
function bf(a){var b=$e;!b&&(b=$e=/^\s*[+-]?((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?\s*$/i);if(b.test(a)){return parseFloat(a)}else{return Number.NaN}}
function pi(a,b){if(a==null){throw new jl}if(b<2||b>36){throw new pl('Radix out of range')}if(a.length==0){throw new pl('Zero length BigInteger')}Ei(this,a,b)}
function Vq(){Uq();var a,b,c;c=Tq+++(new Date).getTime();a=Bc(Math.floor(c*5.9604644775390625E-8))&16777215;b=Bc(c-a*16777216);this.b=a^1502;this.c=b^15525485}
function un(a,b,c,d){var e;if(c>d){return 1}else if(c<d){return -1}else{for(e=c-1;e>=0&&a[e]==b[e];--e){}return e<0?0:xe(qe(ue(a[e]),yr),qe(ue(b[e]),yr))?-1:1}}
function In(a,b){var c,d,e,f;e=a.e;d=lc(Od,{6:1},-1,e,1);hl(Zh(a),Zh(b));for(c=0;c<b.e;++c){d[c]=a.b[c]|b.b[c]}for(;c<e;++c){d[c]=a.b[c]}f=new si(1,e,d);return f}
function Mn(a,b){var c,d,e,f;e=a.e;d=lc(Od,{6:1},-1,e,1);c=hl(Zh(a),Zh(b));for(;c<b.e;++c){d[c]=a.b[c]^b.b[c]}for(;c<a.e;++c){d[c]=a.b[c]}f=new si(1,e,d);Sh(f);return f}
function Bn(a,b){var c,d,e,f;e=lc(Od,{6:1},-1,a.e,1);d=hl(a.e,b.e);for(c=Zh(a);c<d;++c){e[c]=a.b[c]&~b.b[c]}for(;c<a.e;++c){e[c]=a.b[c]}f=new si(1,a.e,e);Sh(f);return f}
function Dn(a,b){var c,d,e,f;e=hl(a.e,b.e);c=gl(Zh(a),Zh(b));if(c>=e){return Oh(),Nh}d=lc(Od,{6:1},-1,e,1);for(;c<e;++c){d[c]=a.b[c]&b.b[c]}f=new si(1,e,d);Sh(f);return f}
function Nf(a,b){var c;if(b==0){return lf}if(b<0||b>999999999){throw new nk(bs)}c=a.f*b;return a.b==0&&a.g!=-1?Ig(c):new dg((!a.d&&(a.d=Li(a.g)),a.d).db(b),Dg(c))}
function tk(a,b){if(b<2||b>36){return -1}if(a>=48&&a<48+(b<10?b:10)){return a-48}if(a>=97&&a<b+97-10){return a-97+10}if(a>=65&&a<b+65-10){return a-65+10}return -1}
function Uq(){Uq=rr;var a,b,c;Rq=lc(Nd,{6:1},-1,25,1);Sq=lc(Nd,{6:1},-1,33,1);c=1.52587890625E-5;for(a=32;a>=0;--a){Sq[a]=c;c*=0.5}b=1;for(a=24;a>=0;--a){Rq[a]=b;b*=0.5}}
function oo(a,b){go();var c,d;d=(Oh(),Jh);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=ei(d,c));c.e==1?(c=ei(c,c)):(c=new ri(qo(c.b,c.e,lc(Od,{6:1},-1,c.e<<1,1))))}d=ei(d,c);return d}
function nl(){nl=rr;ml=mc(Md,{6:1},-1,[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122])}
function rm(a){var b,c;b=0;if(a.f==0){return 0}c=Zh(a);if(a.f>0){for(;c<a.e;++c){b+=Yk(a.b[c])}}else{b+=Yk(-a.b[c]);for(++c;c<a.e;++c){b+=Yk(~a.b[c])}b=(a.e<<5)-b}return b}
function ne(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(~~c>>22);e+=~~d>>22;if(e<0){return false}a.l=c&4194303;a.m=d&4194303;a.h=e&1048575;return true}
function al(a){var b,c,d;b=lc(Md,{6:1},-1,8,1);c=(nl(),ml);d=7;if(a>=0){while(a>15){b[d--]=c[a&15];a>>=4}}else{while(d>0){b[d--]=c[a&15];a>>=4}}b[d]=c[a&15];return Gl(b,d,8)}
function vn(a,b){if(b.f==0||a.f==0){return Oh(),Nh}if(Vh(b,(Oh(),Ih))){return a}if(Vh(a,Ih)){return b}return a.f>0?b.f>0?Dn(a,b):wn(a,b):b.f>0?wn(b,a):a.e>b.e?xn(a,b):xn(b,a)}
function yn(a,b){if(b.f==0){return a}if(a.f==0){return Oh(),Nh}if(Vh(a,(Oh(),Ih))){return new Pi(En(b))}if(Vh(b,Ih)){return Nh}return a.f>0?b.f>0?Bn(a,b):Cn(a,b):b.f>0?An(a,b):zn(a,b)}
function Gf(a){var b;if(a.c!=0){return a.c}if(a.b<54){b=te(a.g);a.c=Je(qe(b,wr));a.c=33*a.c+Je(qe(Fe(b,32),wr));a.c=17*a.c+Bc(a.f);return a.c}a.c=17*a.d.hC()+Bc(a.f);return a.c}
function vg(a,b,c,d){var e,f,g,i,j;f=(j=a/b,j>0?Math.floor(j):Math.ceil(j));g=a%b;i=Gk(a*b,0);if(g!=0){e=Gk((g<=0?0-g:g)*2,b<=0?0-b:b);f+=Bg(Bc(f)&1,i*(5+e),d)}return new pg(f,c)}
function jc(a,b){var c=new Array(b);if(a==3){for(var d=0;d<b;++d){var e=new Object;e.l=e.m=e.h=0;c[d]=e}}else if(a>0){var e=[null,0,false][a];for(var d=0;d<b;++d){c[d]=e}}return c}
function tn(a,b,c,d,e){var f,g;f=ur;for(g=0;g<e;++g){f=pe(f,He(qe(ue(b[g]),yr),qe(ue(d[g]),yr)));a[g]=Je(f);f=Fe(f,32)}for(;g<c;++g){f=pe(f,qe(ue(b[g]),yr));a[g]=Je(f);f=Fe(f,32)}}
function xm(a,b,c,d){var e,f;if(d==0){nm(b,0,a,c,a.length-c)}else{f=32-d;a[a.length-1]=0;for(e=a.length-1;e>c;--e){a[e]|=~~b[e-c-1]>>>f;a[e-1]=b[e-c-1]<<d}}for(e=0;e<c;++e){a[e]=0}}
function rg(a,b,c){if(c<hf.length&&gl(a.b,b.b+jf[Bc(c)])+1<54){return new pg(a.g+b.g*hf[Bc(c)],a.f)}return new og(fn((!a.d&&(a.d=Li(a.g)),a.d),mo((!b.d&&(b.d=Li(b.g)),b.d),Bc(c))),a.f)}
function Ue(a){return $stats({moduleName:$moduleName,sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date).getTime(),type:'onModuleLoadStart',className:a})}
function vm(a,b){var c,d,e;e=a.r();if(b==0||a.r()==0){return}d=~~b>>5;a.e-=d;if(!Am(a.b,a.e,a.b,d,b&31)&&e<0){for(c=0;c<a.e&&a.b[c]==-1;++c){a.b[c]=0}c==a.e&&++a.e;++a.b[c]}Sh(a);a.c=-2}
function ve(a,b){var c,d;c=~~a.h>>19;d=~~b.h>>19;return c==0?d!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>b.l:!(d==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<=b.l)}
function we(a,b){var c,d;c=~~a.h>>19;d=~~b.h>>19;return c==0?d!=0||a.h>b.h||a.h==b.h&&a.m>b.m||a.h==b.h&&a.m==b.m&&a.l>=b.l:!(d==0||a.h<b.h||a.h==b.h&&a.m<b.m||a.h==b.h&&a.m==b.m&&a.l<b.l)}
function Rm(a,b){var c,d,e;c=bl(a);d=bl(b);e=c<d?c:d;c!=0&&(a=Ge(a,c));d!=0&&(b=Ge(b,d));do{if(we(a,b)){a=He(a,b);a=Ge(a,bl(a))}else{b=He(b,a);b=Ge(b,bl(b))}}while(Ce(a,ur));return Ee(b,e)}
function Fn(a,b){if(Vh(b,(Oh(),Ih))||Vh(a,Ih)){return Ih}if(b.f==0){return a}if(a.f==0){return b}return a.f>0?b.f>0?a.e>b.e?In(a,b):In(b,a):Gn(a,b):b.f>0?Gn(b,a):Zh(b)>Zh(a)?Hn(b,a):Hn(a,b)}
function sg(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=Bc(el(Math.log(a)/0.6931471805599453));(!b||a!=Math.pow(2,c))&&++c;return c}return tg(te(a))}
function Yh(a,b){var c,d;c=a._();d=b._();if(c.r()==0){return d}else if(d.r()==0){return c}if((c.e==1||c.e==2&&c.b[1]>0)&&(d.e==1||d.e==2&&d.b[1]>0)){return Ki(Rm(ai(c),ai(d)))}return Qm(Rh(c),Rh(d))}
function ci(a,b){var c;if(b.f<=0){throw new nk(us)}if(!(a.gb(0)||b.gb(0))){throw new nk(vs)}if(b.e==1&&b.b[0]==1){return Nh}c=Wm(bi(a._(),b),b);if(c.f==0){throw new nk(vs)}c=a.f<0?rn(b,c):c;return c}
function Am(a,b,c,d,e){var f,g,i;f=true;for(g=0;g<d;++g){f=f&c[g]==0}if(e==0){nm(c,d,a,0,b)}else{i=32-e;f=f&c[g]<<i==0;for(g=0;g<b-1;++g){a[g]=~~c[g+d]>>>e|c[g+d+1]<<i}a[g]=~~c[g+d]>>>e;++g}return f}
function Ql(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)))|0;c+=4}while(c<d){b=b*31+vl(a,c++)}return b|0}
function Pm(a,b){var c,d,e,f,g;f=b.e;c=a[f]!=0;if(!c){e=b.b;c=true;for(d=f-1;d>=0;--d){if(a[d]!=e[d]){c=a[d]!=0&&ve(qe(ue(a[d]),yr),qe(ue(e[d]),yr));break}}}g=new si(1,f+1,a);c&&pn(g,b);Sh(g);return g}
function Kf(a,b){var c;c=a.f+b.f;if(a.b==0&&a.g!=-1||b.b==0&&b.g!=-1){return Ig(c)}if(a.b+b.b<54){return new pg(a.g*b.g,Dg(c))}return new dg(ei((!a.d&&(a.d=Li(a.g)),a.d),(!b.d&&(b.d=Li(b.g)),b.d)),Dg(c))}
function sp(k,a,b,c){var d=k.b[c];if(d){for(var e=0,f=d.length;e<f;++e){var g=d[e];var i=g.Rb();if(k.Ob(a,i)){var j=g.Sb();g.Tb(b);return j}}}else{d=k.b[c]=[]}var g=new Iq(a,b);d.push(g);++k.e;return null}
function an(a,b,c){var d,e,f,g,i;g=(Oh(),Jh);e=Rh(b);d=Rh(a);a.gb(0)&&Tm(e,c-1);Tm(d,c);for(f=e.ab()-1;f>=0;--f){i=Rh(g);Tm(i,c);g=ei(g,i);if((e.b[~~f>>5]&1<<(f&31))!=0){g=ei(g,d);Tm(g,c)}}Tm(g,c);return g}
function ar(a,b){var c,d,e,f,g,i,j;j=zl(a,Ks,0);i=$wnd;for(g=0;g<j.length;++g){if(!wl(j[g],'client')){br(i,j[g]);i=i[j[g]]}}c=zl(b,Ks,0);for(e=0,f=c.length;e<f;++e){d=c[e];if(!wl(Dl(d),Lr)){br(i,d);i=i[d]}}}
function gi(a,b){var c;if(b<0){throw new nk('Negative exponent')}if(b==0){return Jh}else if(b==1||a.eQ(Jh)||a.eQ(Nh)){return a}if(!a.gb(0)){c=1;while(!a.gb(c)){++c}return ei(Ai(c*b),a.fb(c).db(b))}return oo(a,b)}
function Ee(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|~~a.l>>22-b;e=a.h<<b|~~a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|~~a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return de(c&4194303,d&4194303,e&1048575)}
function Ge(a,b){var c,d,e,f;b&=63;c=a.h&1048575;if(b<22){f=~~c>>>b;e=~~a.m>>b|c<<22-b;d=~~a.l>>b|a.m<<22-b}else if(b<44){f=0;e=~~c>>>b-22;d=~~a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=~~c>>>b-44}return de(d&4194303,e&4194303,f&1048575)}
function Uo(a){Qo();switch(a){case 2:return Ao;case 1:return Bo;case 3:return Co;case 5:return Do;case 6:return Eo;case 4:return Fo;case 7:return Go;case 0:return Ho;default:throw new Sk('Invalid rounding mode');}}
function mi(a,b){var c,d,e;if(b==0){return (a.b[0]&1)!=0}if(b<0){throw new nk(ts)}e=~~b>>5;if(e>=a.e){return a.f<0}c=a.b[e];b=1<<(b&31);if(a.f<0){d=Zh(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function Pf(a){var b,c;if(a.e>0){return a.e}b=1;c=1;if(a.b<54){a.b>=1&&(c=a.g);b+=Math.log(c<=0?0-c:c)*Math.LOG10E}else{b+=(a.b-1)*0.3010299956639812;Th((!a.d&&(a.d=Li(a.g)),a.d),po(b)).r()!=0&&++b}a.e=Bc(b);return a.e}
function zh(a){rf();var b,c;c=Lj(a);if(c==ks)b=Fg(a[0]);else if(c==ks)b=Gg(ue(a[0]));else if(c==ns)b=Hg(ue(a[0]),a[1]);else throw new V('Unknown call signature for bd = java.math.BigDecimal.valueOf: '+c);return new Kg(b)}
function Qi(a){Oh();var b,c;c=Lj(a);if(c==ms)b=new oi(a[0].toString());else if(c=='string number')b=new pi(a[0].toString(),a[1]);else throw new V('Unknown call signature for obj = new java.math.BigInteger: '+c);return new Pi(b)}
function Un(){Un=rr;On=new Xn(34,(Qo(),Eo));Pn=new Xn(7,Eo);Qn=new Xn(16,Eo);Rn=new Xn(0,Fo);Sn=mc(Md,{6:1},-1,[112,114,101,99,105,115,105,111,110,61]);Tn=mc(Md,{6:1},-1,[114,111,117,110,100,105,110,103,77,111,100,101,61])}
function Jn(a,b){if(b.f==0){return a}if(a.f==0){return b}if(Vh(b,(Oh(),Ih))){return new Pi(En(a))}if(Vh(a,Ih)){return new Pi(En(b))}return a.f>0?b.f>0?a.e>b.e?Mn(a,b):Mn(b,a):Kn(a,b):b.f>0?Kn(b,a):Zh(b)>Zh(a)?Ln(b,a):Ln(a,b)}
function Cn(a,b){var c,d,e,f,g,i;d=Zh(b);e=Zh(a);if(d>=a.e){return a}g=hl(a.e,b.e);f=lc(Od,{6:1},-1,g,1);c=e;for(;c<d;++c){f[c]=a.b[c]}if(c==d){f[c]=a.b[c]&b.b[c]-1;++c}for(;c<g;++c){f[c]=a.b[c]&b.b[c]}i=new si(1,g,f);Sh(i);return i}
function Wf(a){var b,c,d,e,f;b=1;c=nf.length-1;d=a.f;if(a.b==0&&a.g!=-1){return new mg(Tr)}f=(!a.d&&(a.d=Li(a.g)),a.d);while(!f.gb(0)){e=Uh(f,nf[b]);if(e[1].r()==0){d-=b;b<c&&++b;f=e[0]}else{if(b==1){break}b=1}}return new dg(f,Dg(d))}
function jo(a,b,c,d,e){var f,g,i,j;if(Ac(a)===Ac(b)&&d==e){qo(a,d,c);return}for(i=0;i<d;++i){g=ur;f=a[i];for(j=0;j<e;++j){g=pe(pe(Ae(qe(ue(f),yr),qe(ue(b[j]),yr)),qe(ue(c[i+j]),yr)),qe(ue(Je(g)),yr));c[i+j]=Je(g);g=Ge(g,32)}c[i+e]=Je(g)}}
function hi(a,b){var c,d,e,f,g;if(b.f==0){throw new nk(ss)}g=a.e;c=b.e;if((g!=c?g>c?1:-1:jn(a.b,b.b,g))==-1){return a}e=lc(Od,{6:1},-1,c,1);if(c==1){e[0]=cn(a.b,g,b.b[0])}else{d=g-c+1;e=Km(null,d,a.b,g,b.b,c)}f=new si(a.f,c,e);Sh(f);return f}
function $k(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(~~a>>16);b=~~d>>16&16;c=16-b;a=~~a>>b;d=a-256;b=~~d>>16&8;c+=b;a<<=b;d=a-4096;b=~~d>>16&4;c+=b;a<<=b;d=a-16384;b=~~d>>16&2;c+=b;a<<=b;d=~~a>>14;b=d&~(~~d>>1);return c+2-b}}
function kn(a,b){var c;if(a.f==0){nm(b.b,0,a.b,0,b.e)}else if(b.f==0){return}else if(a.f==b.f){hn(a.b,a.b,a.e,b.b,b.e)}else{c=un(a.b,b.b,a.e,b.e);if(c>0){tn(a.b,a.b,a.e,b.b,b.e)}else{qn(a.b,a.b,a.e,b.b,b.e);a.f=-a.f}}a.e=gl(a.e,b.e)+1;Sh(a);a.c=-2}
function ln(a,b){var c,d;c=Qh(a,b);if(a.f==0){nm(b.b,0,a.b,0,b.e);a.f=-b.f}else if(a.f!=b.f){hn(a.b,a.b,a.e,b.b,b.e);a.f=c}else{d=un(a.b,b.b,a.e,b.e);if(d>0){tn(a.b,a.b,a.e,b.b,b.e)}else{qn(a.b,a.b,a.e,b.b,b.e);a.f=-a.f}}a.e=gl(a.e,b.e)+1;Sh(a);a.c=-2}
function di(a,b,c){var d,e;if(c.f<=0){throw new nk(us)}d=a;if((c.e==1&&c.b[0]==1)|b.f>0&d.f==0){return Nh}if(d.f==0&&b.f==0){return Jh}if(b.f<0){d=ci(a,c);b=b.cb()}e=c.gb(0)?_m(d._(),b,c):Om(d._(),b,c);d.f<0&&b.gb(0)&&(e=bi(ei(rn(c,Jh),e),c));return e}
function $m(a,b,c,d,e){var f,g,i;f=ur;g=ur;for(i=0;i<d;++i){f=(go(),pe(Ae(qe(ue(c[i]),yr),qe(ue(e),yr)),qe(ue(Je(f)),yr)));g=pe(He(qe(ue(a[b+i]),yr),qe(f,yr)),g);a[b+i]=Je(g);g=Fe(g,32);f=Ge(f,32)}g=pe(He(qe(ue(a[b+d]),yr),f),g);a[b+d]=Je(g);return Je(Fe(g,32))}
function ho(a,b){go();var c,d,e,f,g,i,j,k,n;if(b.e>a.e){i=a;a=b;b=i}if(b.e<63){return no(a,b)}g=(a.e&-2)<<4;k=a.fb(g);n=b.fb(g);d=rn(a,k.eb(g));e=rn(b,n.eb(g));j=ho(k,n);c=ho(d,e);f=ho(rn(k,d),rn(e,n));f=fn(fn(f,j),c);f=f.eb(g);j=j.eb(g<<1);return fn(fn(j,f),c)}
function le(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return _k(c)}if(b==0&&d!=0&&c==0){return _k(d)+22}if(b!=0&&d==0&&c==0){return _k(b)+44}return -1}
function wn(a,b){var c,d,e,f,g,i,j;e=Zh(a);d=Zh(b);if(d>=a.e){return Oh(),Nh}i=a.e;g=lc(Od,{6:1},-1,i,1);c=e>d?e:d;if(c==d){g[c]=-b.b[c]&a.b[c];++c}f=hl(b.e,a.e);for(;c<f;++c){g[c]=~b.b[c]&a.b[c]}if(c>=b.e){for(;c<a.e;++c){g[c]=a.b[c]}}j=new si(1,i,g);Sh(j);return j}
function Jf(a,b){if(a.b==0&&a.g!=-1){return Ig(b>0?b:0)}if(b>=0){if(a.b<54){return new pg(a.g,Dg(b))}return new dg((!a.d&&(a.d=Li(a.g)),a.d),Dg(b))}if(-b<hf.length&&a.b+jf[Bc(-b)]<54){return new pg(a.g*hf[Bc(-b)],0)}return new dg(mo((!a.d&&(a.d=Li(a.g)),a.d),Bc(-b)),0)}
function Fe(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&524288)!=0;d&&(c|=-1048576);if(b<22){g=~~c>>b;f=~~a.m>>b|c<<22-b;e=~~a.l>>b|a.m<<22-b}else if(b<44){g=d?1048575:0;f=~~c>>b-22;e=~~a.m>>b-22|c<<44-b}else{g=d?1048575:0;f=d?4194303:0;e=~~c>>b-44}return de(e&4194303,f&4194303,g&1048575)}
function Oh(){Oh=rr;var a;Jh=new qi(1,1);Lh=new qi(1,10);Nh=new qi(0,0);Ih=new qi(-1,1);Kh=mc(Xd,{6:1},17,[Nh,Jh,new qi(1,2),new qi(1,3),new qi(1,4),new qi(1,5),new qi(1,6),new qi(1,7),new qi(1,8),new qi(1,9),Lh]);Mh=lc(Xd,{6:1},17,32,0);for(a=0;a<Mh.length;++a){nc(Mh,a,Ki(Ee(sr,a)))}}
function lo(a,b){go();var c,d,e,f,g,i,j,k,n;k=a.f;if(k==0){return Oh(),Nh}d=a.e;c=a.b;if(d==1){e=Ae(qe(ue(c[0]),yr),qe(ue(b),yr));j=Je(e);g=Je(Ge(e,32));return g==0?new qi(k,j):new si(k,2,mc(Od,{6:1},-1,[j,g]))}i=d+1;f=lc(Od,{6:1},-1,i,1);f[d]=ko(f,c,d,b);n=new si(k,i,f);Sh(n);return n}
function no(a,b){var c,d,e,f,g,i,j,k,n,o,q;d=a.e;f=b.e;i=d+f;j=a.f!=b.f?-1:1;if(i==2){n=Ae(qe(ue(a.b[0]),yr),qe(ue(b.b[0]),yr));q=Je(n);o=Je(Ge(n,32));return o==0?new qi(j,q):new si(j,2,mc(Od,{6:1},-1,[q,o]))}c=a.b;e=b.b;g=lc(Od,{6:1},-1,i,1);io(c,d,e,f,g);k=new si(j,i,g);Sh(k);return k}
function Hn(a,b){var c,d,e,f,g,i;d=Zh(b);e=Zh(a);if(e>=b.e){return b}else if(d>=a.e){return a}g=hl(a.e,b.e);f=lc(Od,{6:1},-1,g,1);if(d==e){f[e]=-(-a.b[e]|-b.b[e]);c=e}else{for(c=d;c<e;++c){f[c]=b.b[c]}f[c]=b.b[c]&a.b[c]-1}for(++c;c<g;++c){f[c]=a.b[c]&b.b[c]}i=new si(-1,g,f);Sh(i);return i}
function zm(a,b){var c,d,e,f,g;d=~~b>>5;b&=31;if(d>=a.e){return a.f<0?(Oh(),Ih):(Oh(),Nh)}f=a.e-d;e=lc(Od,{6:1},-1,f+1,1);Am(e,f,a.b,d,b);if(a.f<0){for(c=0;c<d&&a.b[c]==0;++c){}if(c<d||b>0&&a.b[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;++c){e[c]=0}c==f&&++f;++e[c]}}g=new si(a.f,f,e);Sh(g);return g}
function vo(a,b){uo();var c,d;if(b<=0||a.e==1&&a.b[0]==2){return true}if(!mi(a,0)){return false}if(a.e==1&&(a.b[0]&-1024)==0){return Bq(to,a.b[0])>=0}for(d=1;d<to.length;++d){if(cn(a.b,a.e,to[d])==0){return false}}c=sm(a);for(d=2;c<ro[d];++d){}b=d<1+(~~(b-1)>>1)?d:1+(~~(b-1)>>1);return wo(a,b)}
function Qm(a,b){var c,d,e,f;c=a.bb();d=b.bb();e=c<d?c:d;vm(a,c);vm(b,d);if(Qh(a,b)==1){f=a;a=b;b=f}do{if(b.e==1||b.e==2&&b.b[1]>0){b=Ki(Rm(ai(a),ai(b)));break}if(b.e>a.e*1.2){b=hi(b,a);b.r()!=0&&vm(b,b.bb())}else{do{pn(b,a);vm(b,b.bb())}while(Qh(b,a)>=0)}f=b;b=a;a=f}while(f.f!=0);return b.eb(e)}
function Sf(a,b,c){var d;if(!c){throw new jl}d=b-a.f;if(d==0){return a}if(d>0){if(d<hf.length&&a.b+jf[Bc(d)]<54){return new pg(a.g*hf[Bc(d)],b)}return new dg(mo((!a.d&&(a.d=Li(a.g)),a.d),Bc(d)),b)}if(a.b<54&&-d<hf.length){return vg(a.g,hf[Bc(-d)],b,c)}return ug((!a.d&&(a.d=Li(a.g)),a.d),po(-d),b,c)}
function cl(a,b){var c,d,e,f;if(b==10||b<2||b>36){return Lr+Ke(a)}c=lc(Md,{6:1},-1,65,1);d=(nl(),ml);e=64;f=ue(b);if(we(a,ur)){while(we(a,f)){c[e--]=d[Je(ze(a,f))];a=ee(a,f,false)}c[e]=d[Je(a)]}else{while(ye(a,Be(f))){c[e--]=d[Je(Be(ze(a,f)))];a=ee(a,f,false)}c[e--]=d[Je(Be(a))];c[e]=45}return Gl(c,e,65)}
function Of(a,b,c){var d,e,f,g,i,j;f=b<0?-b:b;g=c.b;e=Bc(fl(f))+1;i=c;if(b==0||a.b==0&&a.g!=-1&&b>0){return Nf(a,b)}if(f>999999999||g==0&&b<0||g>0&&e>g){throw new nk(bs)}g>0&&(i=new Xn(g+e+1,c.c));d=Qf(a,i);j=~~Zk(f)>>1;while(j>0){d=Lf(d,d,i);(f&j)==j&&(d=Lf(d,a,i));j>>=1}b<0&&(d=zf(lf,d,i));If(d,c);return d}
function tf(a,b){var c;c=a.f-b.f;if(a.b==0&&a.g!=-1){if(c<=0){return b}if(b.b==0&&b.g!=-1){return a}}else if(b.b==0&&b.g!=-1){if(c>=0){return a}}if(c==0){if(gl(a.b,b.b)+1<54){return new pg(a.g+b.g,a.f)}return new og(fn((!a.d&&(a.d=Li(a.g)),a.d),(!b.d&&(b.d=Li(b.g)),b.d)),a.f)}else return c>0?rg(a,b,c):rg(b,a,-c)}
function Nm(a,b){var c,d,e,f,g;d=qe(ue(b),yr);if(we(a,ur)){f=ee(a,d,false);g=ze(a,d)}else{c=Ge(a,1);e=ue(~~b>>>1);f=ee(c,e,false);g=ze(c,e);g=pe(Ee(g,1),qe(a,sr));if((b&1)!=0){if(!ve(f,g)){g=He(g,f)}else{if(ye(He(f,g),d)){g=pe(g,He(d,f));f=He(f,sr)}else{g=pe(g,He(Ee(d,1),f));f=He(f,vr)}}}}return De(Ee(g,32),qe(f,yr))}
function Ei(a,b,c){var d,e,f,g,i,j,k,n,o,q,r,s,t,u;r=b.length;k=r;if(b.charCodeAt(0)==45){o=-1;q=1;--r}else{o=1;q=0}g=(Em(),Dm)[c];f=~~(r/g);u=r%g;u!=0&&++f;j=lc(Od,{6:1},-1,f,1);d=Cm[c-2];i=0;s=q+(u==0?g:u);for(t=q;t<k;t=s,s=s+g){e=af(b.substr(t,s-t),c);n=(go(),ko(j,j,i,d));n+=on(j,i,e);j[i++]=n}a.f=o;a.e=i;a.b=j;Sh(a)}
function te(a){var b,c,d,e,f;if(isNaN(a)){return Qe(),Pe}if(a<-9223372036854775808){return Qe(),Ne}if(a>=9223372036854775807){return Qe(),Me}e=false;if(a<0){e=true;a=-a}d=0;if(a>=17592186044416){d=Bc(a/17592186044416);a-=d*17592186044416}c=0;if(a>=4194304){c=Bc(a/4194304);a-=c*4194304}b=Bc(a);f=de(b,c,d);e&&je(f);return f}
function Ke(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return Tr}if(a.h==524288&&a.m==0&&a.l==0){return '-9223372036854775808'}if(~~a.h>>19!=0){return Ur+Ke(Be(a))}c=a;d=Lr;while(!(c.l==0&&c.m==0&&c.h==0)){e=ue(1000000000);c=ee(c,e,true);b=Lr+Je(ae);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;--f){b=Tr+b}}d=b+d}return d}
function Uh(a,b){var c,d,e,f,g,i,j,k,n,o,q,r,s;f=b.f;if(f==0){throw new nk(ss)}e=b.e;d=b.b;if(e==1){return Lm(a,d[0],f)}q=a.b;r=a.e;c=r!=e?r>e?1:-1:jn(q,d,r);if(c<0){return mc(Xd,{6:1},17,[Nh,a])}s=a.f;i=r-e+1;j=s==f?1:-1;g=lc(Od,{6:1},-1,i,1);k=Km(g,i,q,r,d,e);n=new si(j,i,g);o=new si(s,e,k);Sh(n);Sh(o);return mc(Xd,{6:1},17,[n,o])}
function Zf(a){var b;if(a.f==0||a.b==0&&a.g!=-1){return !a.d&&(a.d=Li(a.g)),a.d}else if(a.f<0){return ei((!a.d&&(a.d=Li(a.g)),a.d),po(-a.f))}else{if(a.f>(a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1)||a.f>(!a.d&&(a.d=Li(a.g)),a.d).bb()){throw new nk(cs)}b=Uh((!a.d&&(a.d=Li(a.g)),a.d),po(a.f));if(b[1].r()!=0){throw new nk(cs)}return b[0]}}
function qn(a,b,c,d,e){var f,g;f=ur;if(c<e){for(g=0;g<c;++g){f=pe(f,He(qe(ue(d[g]),yr),qe(ue(b[g]),yr)));a[g]=Je(f);f=Fe(f,32)}for(;g<e;++g){f=pe(f,qe(ue(d[g]),yr));a[g]=Je(f);f=Fe(f,32)}}else{for(g=0;g<e;++g){f=pe(f,He(qe(ue(d[g]),yr),qe(ue(b[g]),yr)));a[g]=Je(f);f=Fe(f,32)}for(;g<c;++g){f=He(f,qe(ue(b[g]),yr));a[g]=Je(f);f=Fe(f,32)}}}
function Lm(a,b,c){var d,e,f,g,i,j,k,n,o,q,r,s;q=a.b;r=a.e;s=a.f;if(r==1){d=qe(ue(q[0]),yr);e=qe(ue(b),yr);f=ee(d,e,false);j=ze(d,e);s!=c&&(f=Be(f));s<0&&(j=Be(j));return mc(Xd,{6:1},17,[Ki(f),Ki(j)])}i=s==c?1:-1;g=lc(Od,{6:1},-1,r,1);k=mc(Od,{6:1},-1,[Mm(g,q,r,b)]);n=new si(i,r,g);o=new si(s,1,k);Sh(n);Sh(o);return mc(Xd,{6:1},17,[n,o])}
function Zm(a,b,c){var d,e,f,g,i,j,k;i=b.b;j=b.e;k=ur;for(d=0;d<j;++d){e=ur;g=Je((go(),Ae(qe(ue(a[d]),yr),qe(ue(c),yr))));for(f=0;f<j;++f){e=pe(pe(Ae(qe(ue(g),yr),qe(ue(i[f]),yr)),qe(ue(a[d+f]),yr)),qe(ue(Je(e)),yr));a[d+f]=Je(e);e=Ge(e,32)}k=pe(k,pe(qe(ue(a[d+j]),yr),e));a[d+j]=Je(k);k=Ge(k,32)}a[j<<1]=Je(k);for(f=0;f<j+1;++f){a[f]=a[f+j]}}
function af(a,b){var c,d,e,f;if(a==null){throw new pl(Mr)}if(b<2||b>36){throw new pl('radix '+b+' out of range')}d=a.length;e=d>0&&a.charCodeAt(0)==45?1:0;for(c=e;c<d;++c){if(tk(a.charCodeAt(c),b)==-1){throw new pl(Zr+a+$r)}}f=parseInt(a,b);if(isNaN(f)){throw new pl(Zr+a+$r)}else if(f<-2147483648||f>2147483647){throw new pl(Zr+a+$r)}return f}
function En(a){var b,c;if(a.f==0){return Oh(),Ih}if(Vh(a,(Oh(),Ih))){return Nh}c=lc(Od,{6:1},-1,a.e+1,1);if(a.f>0){if(a.b[a.e-1]!=-1){for(b=0;a.b[b]==-1;++b){}}else{for(b=0;b<a.e&&a.b[b]==-1;++b){}if(b==a.e){c[b]=1;return new si(-a.f,b+1,c)}}}else{for(b=0;a.b[b]==0;++b){c[b]=-1}}c[b]=a.b[b]+a.f;for(++b;b<a.e;++b){c[b]=a.b[b]}return new si(-a.f,b,c)}
function Bg(a,b,c){var d;d=0;switch(c.c){case 7:if(b!=0){throw new nk(cs)}break;case 0:d=b==0?0:b<0?-1:1;break;case 2:d=(b==0?0:b<0?-1:1)>0?b==0?0:b<0?-1:1:0;break;case 3:d=(b==0?0:b<0?-1:1)<0?b==0?0:b<0?-1:1:0;break;case 4:(b<0?-b:b)>=5&&(d=b==0?0:b<0?-1:1);break;case 5:(b<0?-b:b)>5&&(d=b==0?0:b<0?-1:1);break;case 6:(b<0?-b:b)+a>5&&(d=b==0?0:b<0?-1:1);}return d}
function Vf(a,b,c){var d,e,f,g,i,j;i=te(hf[c]);g=He(te(a.f),ue(c));j=te(a.g);f=ee(j,i,false);e=ze(j,i);if(Ce(e,ur)){d=se(He(Ee(xe(e,ur)?Be(e):e,1),i),ur)?0:xe(He(Ee(xe(e,ur)?Be(e):e,1),i),ur)?-1:1;f=pe(f,ue(Bg(Je(f)&1,(se(e,ur)?0:xe(e,ur)?-1:1)*(5+d),b.c)));if(fl(Ie(xe(f,ur)?Be(f):f))>=b.b){f=re(f,tr);g=He(g,sr)}}a.f=Dg(Ie(g));a.e=b.b;a.g=Ie(f);a.b=tg(f);a.d=null}
function tm(a,b){var c,d,e,f,g,i,j,k,n;k=a.f==0?1:a.f;g=~~b>>5;c=b&31;j=gl(g+1,a.e)+1;i=lc(Od,{6:1},-1,j,1);d=1<<c;nm(a.b,0,i,0,a.e);if(a.f<0){if(g>=a.e){i[g]=d}else{e=Zh(a);if(g>e){i[g]^=d}else if(g<e){i[g]=-d;for(f=g+1;f<e;++f){i[f]=-1}i[f]=i[f]--}else{f=g;i[g]=-(-i[g]^d);if(i[g]==0){for(++f;i[f]==-1;++f){i[f]=0}++i[f]}}}}else{i[g]^=d}n=new si(k,j,i);Sh(n);return n}
function wo(a,b){var c,d,e,f,g,i,j,k,n;g=rn(a,(Oh(),Jh));c=g.ab();f=g.bb();i=g.fb(f);j=new Vq;for(d=0;d<b;++d){if(d<to.length){k=so[d]}else{do{k=new ni(c,j)}while(Qh(k,a)>=0||k.f==0||k.e==1&&k.b[0]==1)}n=di(k,i,a);if(n.e==1&&n.b[0]==1||n.eQ(g)){continue}for(e=1;e<f;++e){if(n.eQ(g)){continue}n=bi(ei(n,n),a);if(n.e==1&&n.b[0]==1){return false}}if(!n.eQ(g)){return false}}return true}
function Mm(a,b,c,d){var e,f,g,i,j,k,n;k=ur;f=qe(ue(d),yr);for(i=c-1;i>=0;--i){n=De(Ee(k,32),qe(ue(b[i]),yr));if(we(n,ur)){j=ee(n,f,false);k=ze(n,f)}else{e=Ge(n,1);g=ue(~~d>>>1);j=ee(e,g,false);k=ze(e,g);k=pe(Ee(k,1),qe(n,sr));if((d&1)!=0){if(!ve(j,k)){k=He(k,j)}else{if(ye(He(j,k),f)){k=pe(k,He(f,j));j=He(j,sr)}else{k=pe(k,He(Ee(f,1),j));j=He(j,vr)}}}}a[i]=Je(qe(j,yr))}return Je(k)}
function he(a,b,c,d,e,f){var g,i,j,k,n,o,q;k=ke(b)-ke(a);g=Ee(b,k);j=de(0,0,0);while(k>=0){i=ne(a,g);if(i){k<22?(j.l|=1<<k,undefined):k<44?(j.m|=1<<k-22,undefined):(j.h|=1<<k-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}o=g.m;q=g.h;n=g.l;g.h=~~q>>>1;g.m=~~o>>>1|(q&1)<<21;g.l=~~n>>>1|(o&1)<<21;--k}c&&je(j);if(f){if(d){ae=Be(a);e&&(ae=He(ae,(Qe(),Oe)))}else{ae=de(a.l,a.m,a.h)}}return j}
function dn(a,b,c,d,e){var f,g,i,j,k,n,o;k=lc(Xd,{6:1},17,8,0);n=a;nc(k,0,b);o=Ym(b,b,d,e);for(g=1;g<=7;++g){nc(k,g,Ym(k[g-1],o,d,e))}for(g=c.ab()-1;g>=0;--g){if((c.b[~~g>>5]&1<<(g&31))!=0){j=1;f=g;for(i=g-3>0?g-3:0;i<=g-1;++i){if((c.b[~~i>>5]&1<<(i&31))!=0){if(i<f){f=i;j=j<<g-i^1}else{j=j^1<<i-f}}}for(i=f;i<=g;++i){n=Ym(n,n,d,e)}n=Ym(k[~~(j-1)>>1],n,d,e);g=f}else{n=Ym(n,n,d,e)}}return n}
function Ln(a,b){var c,d,e,f,g,i,j;i=gl(a.e,b.e);g=lc(Od,{6:1},-1,i,1);e=Zh(a);d=Zh(b);c=d;if(e==d){g[d]=-a.b[d]^-b.b[d]}else{g[d]=-b.b[d];f=hl(b.e,e);for(++c;c<f;++c){g[c]=~b.b[c]}if(c==b.e){for(;c<e;++c){g[c]=-1}g[c]=a.b[c]-1}else{g[c]=-a.b[c]^~b.b[c]}}f=hl(a.e,b.e);for(++c;c<f;++c){g[c]=a.b[c]^b.b[c]}for(;c<a.e;++c){g[c]=a.b[c]}for(;c<b.e;++c){g[c]=b.b[c]}j=new si(1,i,g);Sh(j);return j}
function qo(a,b,c){var d,e,f,g;for(e=0;e<b;++e){d=ur;for(g=e+1;g<b;++g){d=pe(pe(Ae(qe(ue(a[e]),yr),qe(ue(a[g]),yr)),qe(ue(c[e+g]),yr)),qe(ue(Je(d)),yr));c[e+g]=Je(d);d=Ge(d,32)}c[e+b]=Je(d)}ym(c,c,b<<1);d=ur;for(e=0,f=0;e<b;++e,++f){d=pe(pe(Ae(qe(ue(a[e]),yr),qe(ue(a[e]),yr)),qe(ue(c[f]),yr)),qe(ue(Je(d)),yr));c[f]=Je(d);d=Ge(d,32);++f;d=pe(d,qe(ue(c[f]),yr));c[f]=Je(d);d=Ge(d,32)}return c}
function vf(a,b){var c,d,e,f,g,i;e=Uf(a);i=Uf(b);if(e==i){if(a.f==b.f&&a.b<54&&b.b<54){return a.g<b.g?-1:a.g>b.g?1:0}d=a.f-b.f;c=(a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1)-(b.e>0?b.e:el((b.b-1)*0.3010299956639812)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.d&&(a.d=Li(a.g)),a.d);g=(!b.d&&(b.d=Li(b.g)),b.d);d<0?(f=ei(f,po(-d))):d>0&&(g=ei(g,po(d)));return Qh(f,g)}}else return e<i?-1:1}
function If(a,b){var c,d,e,f,g,i,j;f=b.b;if((a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1)-f<0||f==0){return}d=a.q()-f;if(d<=0){return}if(a.b<54){Vf(a,b,d);return}i=po(d);e=Uh((!a.d&&(a.d=Li(a.g)),a.d),i);g=a.f-d;if(e[1].r()!=0){c=Qh(ki(e[1]._()),i);c=Bg(e[0].gb(0)?1:0,e[1].r()*(5+c),b.c);c!=0&&nc(e,0,fn(e[0],Ki(ue(c))));j=new cg(e[0]);if(j.q()>f){nc(e,0,Th(e[0],(Oh(),Lh)));--g}}a.f=Dg(g);a.e=f;Tf(a,e[0])}
function Yf(a,b,c){var d,e,f,g;d=b.f-a.f;if(b.b==0&&b.g!=-1||a.b==0&&a.g!=-1||c.b==0){return Qf(Xf(a,b),c)}if((b.e>0?b.e:el((b.b-1)*0.3010299956639812)+1)<d-1){if(c.b<(a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1)){g=Uf(a);if(g!=b.r()){f=fn(lo((!a.d&&(a.d=Li(a.g)),a.d),10),Ki(ue(g)))}else{f=rn((!a.d&&(a.d=Li(a.g)),a.d),Ki(ue(g)));f=fn(lo(f,10),Ki(ue(g*9)))}e=new og(f,a.f+1);return Qf(e,c)}}return Qf(Xf(a,b),c)}
function rn(a,b){var c,d,e,f,g,i,j,k,n,o;g=a.f;j=b.f;if(j==0){return a}if(g==0){return b.cb()}f=a.e;i=b.e;if(f+i==2){c=qe(ue(a.b[0]),yr);d=qe(ue(b.b[0]),yr);g<0&&(c=Be(c));j<0&&(d=Be(d));return Ki(He(c,d))}e=f!=i?f>i?1:-1:jn(a.b,b.b,f);if(e==-1){o=-j;n=g==j?sn(b.b,i,a.b,f):gn(b.b,i,a.b,f)}else{o=g;if(g==j){if(e==0){return Oh(),Nh}n=sn(a.b,f,b.b,i)}else{n=gn(a.b,f,b.b,i)}}k=new si(o,n.length,n);Sh(k);return k}
function zn(a,b){var c,d,e,f,g,i,j;e=Zh(a);d=Zh(b);if(e>=b.e){return Oh(),Nh}i=b.e;g=lc(Od,{6:1},-1,i,1);c=e;if(e<d){g[e]=-a.b[e];f=hl(a.e,d);for(++c;c<f;++c){g[c]=~a.b[c]}if(c==a.e){for(;c<d;++c){g[c]=-1}g[c]=b.b[c]-1}else{g[c]=~a.b[c]&b.b[c]-1}}else d<e?(g[e]=-a.b[e]&b.b[e]):(g[e]=-a.b[e]&b.b[e]-1);f=hl(a.e,b.e);for(++c;c<f;++c){g[c]=~a.b[c]&b.b[c]}for(;c<b.e;++c){g[c]=b.b[c]}j=new si(1,i,g);Sh(j);return j}
function Th(a,b){var c,d,e,f,g,i,j,k,n,o;if(b.f==0){throw new nk(ss)}e=b.f;if(b.e==1&&b.b[0]==1){return b.f>0?a:a.cb()}n=a.f;k=a.e;d=b.e;if(k+d==2){o=re(qe(ue(a.b[0]),yr),qe(ue(b.b[0]),yr));n!=e&&(o=Be(o));return Ki(o)}c=k!=d?k>d?1:-1:jn(a.b,b.b,k);if(c==0){return n==e?Jh:Ih}if(c==-1){return Nh}g=k-d+1;f=lc(Od,{6:1},-1,g,1);i=n==e?1:-1;d==1?Mm(f,a.b,k,b.b[0]):Km(f,g,a.b,k,b.b,d);j=new si(i,g,f);Sh(j);return j}
function hn(a,b,c,d,e){var f,g;f=pe(qe(ue(b[0]),yr),qe(ue(d[0]),yr));a[0]=Je(f);f=Fe(f,32);if(c>=e){for(g=1;g<e;++g){f=pe(f,pe(qe(ue(b[g]),yr),qe(ue(d[g]),yr)));a[g]=Je(f);f=Fe(f,32)}for(;g<c;++g){f=pe(f,qe(ue(b[g]),yr));a[g]=Je(f);f=Fe(f,32)}}else{for(g=1;g<c;++g){f=pe(f,pe(qe(ue(b[g]),yr),qe(ue(d[g]),yr)));a[g]=Je(f);f=Fe(f,32)}for(;g<e;++g){f=pe(f,qe(ue(d[g]),yr));a[g]=Je(f);f=Fe(f,32)}}Ce(f,ur)&&(a[g]=Je(f))}
function go(){go=rr;var a,b;bo=lc(Xd,{6:1},17,32,0);co=lc(Xd,{6:1},17,32,0);eo=mc(Od,{6:1},-1,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125]);fo=mc(Od,{6:1},-1,[1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);a=sr;for(b=0;b<=18;++b){nc(bo,b,Ki(a));nc(co,b,Ki(Ee(a,b)));a=Ae(a,Hr)}for(;b<co.length;++b){nc(bo,b,ei(bo[b-1],bo[1]));nc(co,b,ei(co[b-1],(Oh(),Lh)))}}
function yf(a,b,c,d){var e,f,g;if(!d){throw new jl}if(b.b==0&&b.g!=-1){throw new nk(_r)}e=a.f-b.f-c;if(a.b<54&&b.b<54){if(e==0){return vg(a.g,b.g,c,d)}else if(e>0){if(e<hf.length&&b.b+jf[Bc(e)]<54){return vg(a.g,b.g*hf[Bc(e)],c,d)}}else{if(-e<hf.length&&a.b+jf[Bc(-e)]<54){return vg(a.g*hf[Bc(-e)],b.g,c,d)}}}f=(!a.d&&(a.d=Li(a.g)),a.d);g=(!b.d&&(b.d=Li(b.g)),b.d);e>0?(g=mo(g,Bc(e))):e<0&&(f=mo(f,Bc(-e)));return ug(f,g,c,d)}
function Gn(a,b){var c,d,e,f,g,i,j;d=Zh(b);e=Zh(a);if(e>=b.e){return b}i=b.e;g=lc(Od,{6:1},-1,i,1);if(d<e){for(c=d;c<e;++c){g[c]=b.b[c]}}else if(e<d){c=e;g[e]=-a.b[e];f=hl(a.e,d);for(++c;c<f;++c){g[c]=~a.b[c]}if(c!=a.e){g[c]=~(-b.b[c]|a.b[c])}else{for(;c<d;++c){g[c]=-1}g[c]=b.b[c]-1}++c}else{c=e;g[e]=-(-b.b[e]|a.b[e]);++c}f=hl(b.e,a.e);for(;c<f;++c){g[c]=b.b[c]&~a.b[c]}for(;c<b.e;++c){g[c]=b.b[c]}j=new si(-1,i,g);Sh(j);return j}
function _f(a){var b,c,d,e;d=Hm((!a.d&&(a.d=Li(a.g)),a.d),0);if(a.f==0||a.b==0&&a.g!=-1&&a.f<0){return d}b=Uf(a)<0?1:0;c=a.f;e=new gm(d.length+1+dl(Bc(a.f)));b==1&&(e.b.b+=Ur,e);if(a.f>0){c-=d.length-b;if(c>=0){e.b.b+=es;for(;c>ef.length;c-=ef.length){$l(e,ef)}_l(e,ef,Bc(c));dm(e,Al(d,b))}else{c=b-c;dm(e,Bl(d,b,Bc(c)));e.b.b+=ds;dm(e,Al(d,Bc(c)))}}else{dm(e,Al(d,b));for(;c<-ef.length;c+=ef.length){$l(e,ef)}_l(e,ef,Bc(-c))}return e.b.b}
function ug(a,b,c,d){var e,f,g,i,j,k,n;g=Uh(a,b);i=g[0];k=g[1];if(k.r()==0){return new dg(i,c)}n=a.r()*b.r();if(b.ab()<54){j=ai(k);f=ai(b);e=se(He(Ee(xe(j,ur)?Be(j):j,1),xe(f,ur)?Be(f):f),ur)?0:xe(He(Ee(xe(j,ur)?Be(j):j,1),xe(f,ur)?Be(f):f),ur)?-1:1;e=Bg(i.gb(0)?1:0,n*(5+e),d)}else{e=Qh(ki(k._()),b._());e=Bg(i.gb(0)?1:0,n*(5+e),d)}if(e!=0){if(i.ab()<54){return Hg(pe(ai(i),ue(e)),c)}i=fn(i,Ki(ue(e)));return new dg(i,c)}return new dg(i,c)}
function ag(a){var b,c,d,e,f;if(a.i!=null){return a.i}if(a.b<32){a.i=Im(te(a.g),Bc(a.f));return a.i}e=Hm((!a.d&&(a.d=Li(a.g)),a.d),0);if(a.f==0){return e}b=(!a.d&&(a.d=Li(a.g)),a.d).r()<0?2:1;c=e.length;d=-a.f+c-b;f=new fm;cc(f.b,e);if(a.f>0&&d>=-6){if(d>=0){em(f,c-Bc(a.f),ds)}else{ec(f.b,b-1,b-1,es);em(f,b+1,Ll(ef,0,-Bc(d)-1))}}else{if(c-b>=1){ec(f.b,b,b,ds);++c}ec(f.b,c,c,fs);d>0&&em(f,++c,gs);em(f,++c,Lr+Ke(te(d)))}a.i=f.b.b;return a.i}
function xn(a,b){var c,d,e,f,g,i,j;e=Zh(a);f=Zh(b);if(e>=b.e){return a}d=f>e?f:e;f>e?(c=-b.b[d]&~a.b[d]):f<e?(c=~b.b[d]&-a.b[d]):(c=-b.b[d]&-a.b[d]);if(c==0){for(++d;d<b.e&&(c=~(a.b[d]|b.b[d]))==0;++d){}if(c==0){for(;d<a.e&&(c=~a.b[d])==0;++d){}if(c==0){i=a.e+1;g=lc(Od,{6:1},-1,i,1);g[i-1]=1;j=new si(-1,i,g);return j}}}i=a.e;g=lc(Od,{6:1},-1,i,1);g[d]=-c;for(++d;d<b.e;++d){g[d]=a.b[d]|b.b[d]}for(;d<a.e;++d){g[d]=a.b[d]}j=new si(-1,i,g);return j}
function zl(o,a,b){var c=new RegExp(a,'g');var d=[];var e=0;var f=o;var g=null;while(true){var i=c.exec(f);if(i==null||f==Lr||e==b-1&&b>0){d[e]=f;break}else{d[e]=f.substring(0,i.index);f=f.substring(i.index+i[0].length,f.length);c.lastIndex=0;if(g==f){d[e]=f.substring(0,1);f=f.substring(1)}g=f;e++}}if(b==0&&o.length>0){var j=d.length;while(j>0&&d[j-1]==Lr){--j}j<d.length&&d.splice(j,d.length-j)}var k=Fl(d.length);for(var n=0;n<d.length;++n){k[n]=d[n]}return k}
function po(a){go();var b,c,d,e;b=Bc(a);if(a<co.length){return co[b]}else if(a<=50){return (Oh(),Lh).db(b)}else if(a<=1000){return bo[1].db(b).eb(b)}if(a>1000000){throw new nk('power of ten too big')}if(a<=2147483647){return bo[1].db(b).eb(b)}d=bo[1].db(2147483647);e=d;c=te(a-2147483647);b=Bc(a%2147483647);while(ve(c,Ir)){e=ei(e,d);c=He(c,Ir)}e=ei(e,bo[1].db(b));e=e.eb(2147483647);c=te(a-2147483647);while(ve(c,Ir)){e=e.eb(2147483647);c=He(c,Ir)}e=e.eb(b);return e}
function $d(){var a;!!$stats&&Ue('com.iriscouch.gwtapp.client.BigDecimalApp');ik(new kk);Wj(new Yj);Gj(new Ij);Ch(new Eh);!!$stats&&Ue('com.google.gwt.user.client.UserAgentAsserter');a=We();wl(Sr,a)||($wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value ('+a+'). Expect more errors.\n'),undefined);!!$stats&&Ue('com.google.gwt.user.client.DocumentModeAsserter');Ve()}
function Vo(a){Qo();var b,c,d,e,f;if(a==null){throw new jl}d=Cl(a);c=d.length;if(c<Po.length||c>Oo.length){throw new Rk}f=null;e=null;if(d[0]==67){e=Ao;f=Io}else if(d[0]==68){e=Bo;f=Jo}else if(d[0]==70){e=Co;f=Ko}else if(d[0]==72){if(c>6){if(d[5]==68){e=Do;f=Lo}else if(d[5]==69){e=Eo;f=Mo}else if(d[5]==85){e=Fo;f=No}}}else if(d[0]==85){if(d[1]==80){e=Ho;f=Po}else if(d[1]==78){e=Go;f=Oo}}if(!!e&&c==f.length){for(b=1;b<c&&d[b]==f[b];++b){}if(b==c){return e}}throw new Rk}
function ni(a,b){var d,e,f,g,i,j;Oh();var c;if(a<0){throw new Sk('numBits must be non-negative')}if(a==0){this.f=0;this.e=1;this.b=mc(Od,{6:1},-1,[0])}else{this.f=1;this.e=~~(a+31)>>5;this.b=lc(Od,{6:1},-1,this.e,1);for(c=0;c<this.e;++c){this.b[c]=Bc((g=b.b*15525485+b.c*1502,j=b.c*15525485+11,d=Math.floor(j*5.9604644775390625E-8),g+=d,j-=d*16777216,g%=16777216,b.b=g,b.c=j,f=b.b*256,i=el(b.c*Sq[32]),e=f+i,e>=2147483648&&(e-=4294967296),e))}this.b[this.e-1]>>>=-a&31;Sh(this)}}
function fn(a,b){var c,d,e,f,g,i,j,k,n,o,q,r;g=a.f;j=b.f;if(g==0){return b}if(j==0){return a}f=a.e;i=b.e;if(f+i==2){c=qe(ue(a.b[0]),yr);d=qe(ue(b.b[0]),yr);if(g==j){k=pe(c,d);r=Je(k);q=Je(Ge(k,32));return q==0?new qi(g,r):new si(g,2,mc(Od,{6:1},-1,[r,q]))}return Ki(g<0?He(d,c):He(c,d))}else if(g==j){o=g;n=f>=i?gn(a.b,f,b.b,i):gn(b.b,i,a.b,f)}else{e=f!=i?f>i?1:-1:jn(a.b,b.b,f);if(e==0){return Oh(),Nh}if(e==1){o=g;n=sn(a.b,f,b.b,i)}else{o=j;n=sn(b.b,i,a.b,f)}}k=new si(o,n.length,n);Sh(k);return k}
function Yn(a){Un();var b,c,d,e;if(a==null){throw new kl('null string')}b=Cl(a);if(b.length<27||b.length>45){throw new Sk(Hs)}for(d=0;d<Sn.length&&b[d]==Sn[d];++d){}if(d<Sn.length){throw new Sk(Hs)}c=tk(b[d],10);if(c==-1){throw new Sk(Hs)}this.b=this.b*10+c;++d;do{c=tk(b[d],10);if(c==-1){if(b[d]==32){++d;break}throw new Sk(Hs)}this.b=this.b*10+c;if(this.b<0){throw new Sk(Hs)}++d}while(true);for(e=0;e<Tn.length&&b[d]==Tn[e];++d,++e){}if(e<Tn.length){throw new Sk(Hs)}this.c=Vo(Ll(b,d,b.length-d))}
function Em(){Em=rr;Cm=mc(Od,{6:1},-1,[-2147483648,1162261467,1073741824,1220703125,362797056,1977326743,1073741824,387420489,1000000000,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,1073741824,1291467969,1544804416,1838265625,60466176]);Dm=mc(Od,{6:1},-1,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function uf(a,b,c){var d,e,f,g,i;d=a.f-b.f;if(b.b==0&&b.g!=-1||a.b==0&&a.g!=-1||c.b==0){return Qf(tf(a,b),c)}if((a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1)<d-1){e=b;g=a}else if((b.e>0?b.e:el((b.b-1)*0.3010299956639812)+1)<-d-1){e=a;g=b}else{return Qf(tf(a,b),c)}if(c.b>=(e.e>0?e.e:el((e.b-1)*0.3010299956639812)+1)){return Qf(tf(a,b),c)}f=e.r();if(f==g.r()){i=fn(lo((!e.d&&(e.d=Li(e.g)),e.d),10),Ki(ue(f)))}else{i=rn((!e.d&&(e.d=Li(e.g)),e.d),Ki(ue(f)));i=fn(lo(i,10),Ki(ue(f*9)))}e=new og(i,e.f+1);return Qf(e,c)}
function $f(a){var b,c,d,e,f,g,i,j;g=Hm((!a.d&&(a.d=Li(a.g)),a.d),0);if(a.f==0){return g}b=(!a.d&&(a.d=Li(a.g)),a.d).r()<0?2:1;d=g.length;e=-a.f+d-b;j=new hm(g);if(a.f>0&&e>=-6){if(e>=0){em(j,d-Bc(a.f),ds)}else{ec(j.b,b-1,b-1,es);em(j,b+1,Ll(ef,0,-Bc(e)-1))}}else{c=d-b;i=Bc(e%3);if(i!=0){if((!a.d&&(a.d=Li(a.g)),a.d).r()==0){i=i<0?-i:3-i;e+=i}else{i=i<0?i+3:i;e-=i;b+=i}if(c<3){for(f=i-c;f>0;--f){em(j,d++,Tr)}}}if(d-b>=1){ec(j.b,b,b,ds);++d}if(e!=0){ec(j.b,d,d,fs);e>0&&em(j,++d,gs);em(j,++d,Lr+Ke(te(e)))}}return j.b.b}
function nm(a,b,c,d,e){var f,g,i,j,k,n,o,q,r;if(a==null||c==null){throw new jl}q=a.gC();j=c.gC();if((q.c&4)==0||(j.c&4)==0){throw new rk('Must be array types')}o=q.b;g=j.b;if(!((o.c&1)!=0?o==g:(g.c&1)==0)){throw new rk('Array types must match')}r=a.length;k=c.length;if(b<0||d<0||e<0||b+e>r||d+e>k){throw new Vk}if(((o.c&1)==0||(o.c&4)!=0)&&q!=j){n=vc(a,11);f=vc(c,11);if(Ac(a)===Ac(c)&&b<d){b+=e;for(i=d+e;i-->d;){nc(f,i,n[--b])}}else{for(i=d+e;d<i;){nc(f,d++,n[b++])}}}else{Array.prototype.splice.apply(c,[d,e].concat(a.slice(b,b+e)))}}
function xo(a){uo();var b,c,d,e,f,g,i;f=lc(Od,{6:1},-1,to.length,1);d=lc(Zd,{6:1},-1,1024,2);if(a.e==1&&a.b[0]>=0&&a.b[0]<to[to.length-1]){for(c=0;a.b[0]>=to[c];++c){}return so[c]}i=new si(1,a.e,lc(Od,{6:1},-1,a.e+1,1));nm(a.b,0,i.b,0,a.e);mi(a,0)?nn(i,2):(i.b[0]|=1);e=i.ab();for(b=2;e<ro[b];++b){}for(c=0;c<to.length;++c){f[c]=bn(i,to[c])-1024}while(true){Cq(d,d.length);for(c=0;c<to.length;++c){f[c]=(f[c]+1024)%to[c];e=f[c]==0?0:to[c]-f[c];for(;e<1024;e+=to[c]){d[e]=true}}for(e=0;e<1024;++e){if(!d[e]){g=Rh(i);nn(g,e);if(wo(g,b)){return g}}}nn(i,1024)}}
function Qo(){Qo=rr;Ho=new Ro('UP',0);Bo=new Ro('DOWN',1);Ao=new Ro('CEILING',2);Co=new Ro('FLOOR',3);Fo=new Ro('HALF_UP',4);Do=new Ro('HALF_DOWN',5);Eo=new Ro('HALF_EVEN',6);Go=new Ro('UNNECESSARY',7);zo=mc(Yd,{6:1},19,[Ho,Bo,Ao,Co,Fo,Do,Eo,Go]);Io=mc(Md,{6:1},-1,[67,69,73,76,73,78,71]);Jo=mc(Md,{6:1},-1,[68,79,87,78]);Ko=mc(Md,{6:1},-1,[70,76,79,79,82]);Lo=mc(Md,{6:1},-1,[72,65,76,70,95,68,79,87,78]);Mo=mc(Md,{6:1},-1,[72,65,76,70,95,69,86,69,78]);No=mc(Md,{6:1},-1,[72,65,76,70,95,85,80]);Oo=mc(Md,{6:1},-1,[85,78,78,69,67,69,83,83,65,82,89]);Po=mc(Md,{6:1},-1,[85,80])}
function wf(a,b){var c,d,e,f,g,i,j,k,n,o;k=(!a.d&&(a.d=Li(a.g)),a.d);n=(!b.d&&(b.d=Li(b.g)),b.d);c=a.f-b.f;g=0;e=1;i=kf.length-1;if(b.b==0&&b.g!=-1){throw new nk(_r)}if(k.r()==0){return Ig(c)}d=Yh(k,n);k=Th(k,d);n=Th(n,d);f=n.bb();n=n.fb(f);do{o=Uh(n,kf[e]);if(o[1].r()==0){g+=e;e<i&&++e;n=o[0]}else{if(e==1){break}e=1}}while(true);if(!n._().eQ((Oh(),Jh))){throw new nk('Non-terminating decimal expansion; no exact representable decimal result')}n.r()<0&&(k=k.cb());j=Dg(c+(f>g?f:g));e=f-g;k=e>0?(go(),e<eo.length?lo(k,eo[e]):e<bo.length?ei(k,bo[e]):ei(k,bo[1].db(e))):k.eb(-e);return new dg(k,j)}
function ee(a,b,c){var d,e,f,g,i,j;if(b.l==0&&b.m==0&&b.h==0){throw new nk('divide by zero')}if(a.l==0&&a.m==0&&a.h==0){c&&(ae=de(0,0,0));return de(0,0,0)}if(b.h==524288&&b.m==0&&b.l==0){return fe(a,c)}j=false;if(~~b.h>>19!=0){b=Be(b);j=true}g=le(b);f=false;e=false;d=false;if(a.h==524288&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=ce((Qe(),Me));d=true;j=!j}else{i=Fe(a,g);j&&je(i);c&&(ae=de(0,0,0));return i}}else if(~~a.h>>19!=0){f=true;a=Be(a);d=true;j=!j}if(g!=-1){return ge(a,g,j,f,c)}if(!we(a,b)){c&&(f?(ae=Be(a)):(ae=de(a.l,a.m,a.h)));return de(0,0,0)}return he(d?a:de(a.l,a.m,a.h),b,j,f,e,c)}
function An(a,b){var c,d,e,f,g,i,j,k;e=Zh(a);f=Zh(b);if(e>=b.e){return a}j=gl(a.e,b.e);d=e;if(f>e){i=lc(Od,{6:1},-1,j,1);g=hl(a.e,f);for(;d<g;++d){i[d]=a.b[d]}if(d==a.e){for(d=f;d<b.e;++d){i[d]=b.b[d]}}}else{c=-a.b[e]&~b.b[e];if(c==0){g=hl(b.e,a.e);for(++d;d<g&&(c=~(a.b[d]|b.b[d]))==0;++d){}if(c==0){for(;d<b.e&&(c=~b.b[d])==0;++d){}for(;d<a.e&&(c=~a.b[d])==0;++d){}if(c==0){++j;i=lc(Od,{6:1},-1,j,1);i[j-1]=1;k=new si(-1,j,i);return k}}}i=lc(Od,{6:1},-1,j,1);i[d]=-c;++d}g=hl(b.e,a.e);for(;d<g;++d){i[d]=a.b[d]|b.b[d]}for(;d<a.e;++d){i[d]=a.b[d]}for(;d<b.e;++d){i[d]=b.b[d]}k=new si(-1,j,i);return k}
function Lj(a){var b=[];for(var c in a){var d=typeof a[c];d!=ws?(b[b.length]=d):a[c] instanceof Array?(b[b.length]=js):$wnd&&$wnd.bigdecimal&&$wnd.bigdecimal.BigInteger&&a[c] instanceof $wnd.bigdecimal.BigInteger?(b[b.length]=is):$wnd&&$wnd.bigdecimal&&$wnd.bigdecimal.BigDecimal&&a[c] instanceof $wnd.bigdecimal.BigDecimal?(b[b.length]=ps):$wnd&&$wnd.bigdecimal&&$wnd.bigdecimal.RoundingMode&&a[c] instanceof $wnd.bigdecimal.RoundingMode?(b[b.length]=xs):$wnd&&$wnd.bigdecimal&&$wnd.bigdecimal.MathContext&&a[c] instanceof $wnd.bigdecimal.MathContext?(b[b.length]=os):(b[b.length]=ws)}return b.join(ys)}
function Ae(a,b){var c,d,e,f,g,i,j,k,n,o,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G;c=a.l&8191;d=~~a.l>>13|(a.m&15)<<9;e=~~a.m>>4&8191;f=~~a.m>>17|(a.h&255)<<5;g=~~(a.h&1048320)>>8;i=b.l&8191;j=~~b.l>>13|(b.m&15)<<9;k=~~b.m>>4&8191;n=~~b.m>>17|(b.h&255)<<5;o=~~(b.h&1048320)>>8;C=c*i;D=d*i;E=e*i;F=f*i;G=g*i;if(j!=0){D+=c*j;E+=d*j;F+=e*j;G+=f*j}if(k!=0){E+=c*k;F+=d*k;G+=e*k}if(n!=0){F+=c*n;G+=d*n}o!=0&&(G+=c*o);r=C&4194303;s=(D&511)<<13;q=r+s;u=~~C>>22;v=~~D>>9;w=(E&262143)<<4;x=(F&31)<<17;t=u+v+w+x;z=~~E>>18;A=~~F>>5;B=(G&4095)<<8;y=z+A+B;t+=~~q>>22;q&=4194303;y+=~~t>>22;t&=4194303;y&=1048575;return de(q,t,y)}
function zf(a,b,c){var d,e,f,g,i,j,k,n;n=Ie(pe(ue(c.b),vr))+(b.e>0?b.e:el((b.b-1)*0.3010299956639812)+1)-(a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1);e=a.f-b.f;j=e;f=1;i=nf.length-1;k=mc(Xd,{6:1},17,[(!a.d&&(a.d=Li(a.g)),a.d)]);if(c.b==0||a.b==0&&a.g!=-1||b.b==0&&b.g!=-1){return wf(a,b)}if(n>0){nc(k,0,ei((!a.d&&(a.d=Li(a.g)),a.d),po(n)));j+=n}k=Uh(k[0],(!b.d&&(b.d=Li(b.g)),b.d));g=k[0];if(k[1].r()!=0){d=Qh(ki(k[1]),(!b.d&&(b.d=Li(b.g)),b.d));g=fn(ei(g,(Oh(),Lh)),Ki(ue(k[0].r()*(5+d))));++j}else{while(!g.gb(0)){k=Uh(g,nf[f]);if(k[1].r()==0&&j-f>=e){j-=f;f<i&&++f;g=k[0]}else{if(f==1){break}f=1}}}return new eg(g,Dg(j),c)}
function Wm(a,b){var c,d,e,f,g,i,j,k,n,o,q;if(a.f==0){throw new nk(vs)}if(!b.gb(0)){return Vm(a,b)}f=b.e*32;o=Rh(b);q=Rh(a);g=gl(q.e,o.e);j=new si(1,1,lc(Od,{6:1},-1,g+1,1));k=new si(1,1,lc(Od,{6:1},-1,g+1,1));k.b[0]=1;c=0;d=o.bb();e=q.bb();if(d>e){vm(o,d);vm(q,e);um(j,e);c+=d-e}else{vm(o,d);vm(q,e);um(k,d);c+=e-d}j.f=1;while(q.r()>0){while(Qh(o,q)>0){pn(o,q);n=o.bb();vm(o,n);mn(j,k);um(k,n);c+=n}while(Qh(o,q)<=0){pn(q,o);if(q.r()==0){break}n=q.bb();vm(q,n);mn(k,j);um(j,n);c+=n}}if(!(o.e==1&&o.b[0]==1)){throw new nk(vs)}Qh(j,b)>=0&&pn(j,b);j=rn(b,j);i=Jm(b);if(c>f){j=Ym(j,(Oh(),Jh),b,i);c=c-f}j=Ym(j,Ai(f-c),b,i);return j}
function Xf(a,b){var c;c=a.f-b.f;if(a.b==0&&a.g!=-1){if(c<=0){return Mf(b)}if(b.b==0&&b.g!=-1){return a}}else if(b.b==0&&b.g!=-1){if(c>=0){return a}}if(c==0){if(gl(a.b,b.b)+1<54){return new pg(a.g-b.g,a.f)}return new og(rn((!a.d&&(a.d=Li(a.g)),a.d),(!b.d&&(b.d=Li(b.g)),b.d)),a.f)}else if(c>0){if(c<hf.length&&gl(a.b,b.b+jf[Bc(c)])+1<54){return new pg(a.g-b.g*hf[Bc(c)],a.f)}return new og(rn((!a.d&&(a.d=Li(a.g)),a.d),mo((!b.d&&(b.d=Li(b.g)),b.d),Bc(c))),a.f)}else{c=-c;if(c<hf.length&&gl(a.b+jf[Bc(c)],b.b)+1<54){return new pg(a.g*hf[Bc(c)]-b.g,b.f)}return new og(rn(mo((!a.d&&(a.d=Li(a.g)),a.d),Bc(c)),(!b.d&&(b.d=Li(b.g)),b.d)),b.f)}}
function Df(a,b){var c,d,e,f,g,i,j;mc(Xd,{6:1},17,[(!a.d&&(a.d=Li(a.g)),a.d)]);f=a.f-b.f;j=0;c=1;e=nf.length-1;if(b.b==0&&b.g!=-1){throw new nk(_r)}if((b.e>0?b.e:el((b.b-1)*0.3010299956639812)+1)+f>(a.e>0?a.e:el((a.b-1)*0.3010299956639812)+1)+1||a.b==0&&a.g!=-1){d=(Oh(),Nh)}else if(f==0){d=Th((!a.d&&(a.d=Li(a.g)),a.d),(!b.d&&(b.d=Li(b.g)),b.d))}else if(f>0){g=po(f);d=Th((!a.d&&(a.d=Li(a.g)),a.d),ei((!b.d&&(b.d=Li(b.g)),b.d),g));d=ei(d,g)}else{g=po(-f);d=Th(ei((!a.d&&(a.d=Li(a.g)),a.d),g),(!b.d&&(b.d=Li(b.g)),b.d));while(!d.gb(0)){i=Uh(d,nf[c]);if(i[1].r()==0&&j-c>=f){j-=c;c<e&&++c;d=i[0]}else{if(c==1){break}c=1}}f=j}return d.r()==0?Ig(f):new dg(d,Dg(f))}
function Fm(a,b){Em();var c,d,e,f,g,i,j,k,n,o,q,r,s,t,u,v,w,x;u=a.f;o=a.e;i=a.b;if(u==0){return Tr}if(o==1){j=i[0];x=qe(ue(j),yr);u<0&&(x=Be(x));return cl(x,b)}if(b==10||b<2||b>36){return Hm(a,0)}d=Math.log(b)/Math.log(2);s=Bc(sm(new Pi(a.f<0?new si(1,a.e,a.b):a))/d+(u<0?1:0))+1;t=lc(Md,{6:1},-1,s,1);f=s;if(b!=16){v=lc(Od,{6:1},-1,o,1);nm(i,0,v,0,o);w=o;e=Dm[b];c=Cm[b-2];while(true){r=Mm(v,v,w,c);q=f;do{t[--f]=uk(r%b,b)}while((r=~~(r/b))!=0&&f!=0);g=e-q+f;for(k=0;k<g&&f>0;++k){t[--f]=48}for(k=w-1;k>0&&v[k]==0;--k){}w=k+1;if(w==1&&v[0]==0){break}}}else{for(k=0;k<o;++k){for(n=0;n<8&&f>0;++n){r=~~i[k]>>(n<<2)&15;t[--f]=uk(r,16)}}}while(t[f]==48){++f}u==-1&&(t[--f]=45);return Ll(t,f,s-f)}
function Km(a,b,c,d,e,f){var g,i,j,k,n,o,q,r,s,t,u,v,w,x,y,z,A;u=lc(Od,{6:1},-1,d+1,1);v=lc(Od,{6:1},-1,f+1,1);j=$k(e[f-1]);if(j!=0){xm(v,e,0,j);xm(u,c,0,j)}else{nm(c,0,u,0,d);nm(e,0,v,0,f)}k=v[f-1];o=b-1;q=d;while(o>=0){if(u[q]==k){n=-1}else{w=pe(Ee(qe(ue(u[q]),yr),32),qe(ue(u[q-1]),yr));z=Nm(w,k);n=Je(z);y=Je(Fe(z,32));if(n!=0){x=false;++n;do{--n;if(x){break}s=Ae(qe(ue(n),yr),qe(ue(v[f-2]),yr));A=pe(Ee(ue(y),32),qe(ue(u[q-2]),yr));t=pe(qe(ue(y),yr),qe(ue(k),yr));$k(Je(Ge(t,32)))<32?(x=true):(y=Je(t))}while(ve(Le(s,Gr),Le(A,Gr)))}}if(n!=0){g=$m(u,q-f,v,f,n);if(g!=0){--n;i=ur;for(r=0;r<f;++r){i=pe(i,pe(qe(ue(u[q-f+r]),yr),qe(ue(v[r]),yr)));u[q-f+r]=Je(i);i=Ge(i,32)}}}a!=null&&(a[o]=n);--q;--o}if(j!=0){Am(v,f,u,0,j);return v}nm(u,0,v,0,f);return u}
function Vm(a,b){var c,d,e,f,g,i,j,k,n,o,q;f=gl(a.e,b.e);n=lc(Od,{6:1},-1,f+1,1);q=lc(Od,{6:1},-1,f+1,1);nm(b.b,0,n,0,b.e);nm(a.b,0,q,0,a.e);k=new si(b.f,b.e,n);o=new si(a.f,a.e,q);i=new si(0,1,lc(Od,{6:1},-1,f+1,1));j=new si(1,1,lc(Od,{6:1},-1,f+1,1));j.b[0]=1;c=0;d=0;g=b.ab();while(!Um(k,c)&&!Um(o,d)){e=Sm(k,g);if(e!=0){um(k,e);if(c>=d){um(i,e)}else{vm(j,d-c<e?d-c:e);e-(d-c)>0&&um(i,e-d+c)}c+=e}e=Sm(o,g);if(e!=0){um(o,e);if(d>=c){um(j,e)}else{vm(i,c-d<e?c-d:e);e-(c-d)>0&&um(j,e-c+d)}d+=e}if(k.r()==o.r()){if(c<=d){ln(k,o);ln(i,j)}else{ln(o,k);ln(j,i)}}else{if(c<=d){kn(k,o);kn(i,j)}else{kn(o,k);kn(j,i)}}if(o.r()==0||k.r()==0){throw new nk(vs)}}if(Um(o,d)){i=j;o.r()!=k.r()&&(k=k.cb())}k.gb(g)&&(i.r()<0?(i=i.cb()):(i=rn(b,i)));i.r()<0&&(i=fn(i,b));return i}
function We(){var c=navigator.userAgent.toLowerCase();var d=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return c.indexOf(Wr)!=-1}())return Wr;if(function(){return c.indexOf('webkit')!=-1||function(){if(c.indexOf('chromeframe')!=-1){return true}if(typeof window['ActiveXObject']!=Xr){try{var b=new ActiveXObject('ChromeTab.ChromeFrame');if(b){b.registerBhoIfNeeded();return true}}catch(a){}}return false}()}())return Sr;if(function(){return c.indexOf(Yr)!=-1&&$doc.documentMode>=9}())return 'ie9';if(function(){return c.indexOf(Yr)!=-1&&$doc.documentMode>=8}())return 'ie8';if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(c);if(a&&a.length==3)return d(a)>=6000}())return 'ie6';if(function(){return c.indexOf('gecko')!=-1}())return 'gecko1_8';return 'unknown'}
function Kn(a,b){var c,d,e,f,g,i,j,k;j=gl(b.e,a.e);e=Zh(b);f=Zh(a);if(e<f){i=lc(Od,{6:1},-1,j,1);d=e;i[e]=b.b[e];g=hl(b.e,f);for(++d;d<g;++d){i[d]=b.b[d]}if(d==b.e){for(;d<a.e;++d){i[d]=a.b[d]}}}else if(f<e){i=lc(Od,{6:1},-1,j,1);d=f;i[f]=-a.b[f];g=hl(a.e,e);for(++d;d<g;++d){i[d]=~a.b[d]}if(d==e){i[d]=~(a.b[d]^-b.b[d]);++d}else{for(;d<e;++d){i[d]=-1}for(;d<b.e;++d){i[d]=b.b[d]}}}else{d=e;c=a.b[e]^-b.b[e];if(c==0){g=hl(a.e,b.e);for(++d;d<g&&(c=a.b[d]^~b.b[d])==0;++d){}if(c==0){for(;d<a.e&&(c=~a.b[d])==0;++d){}for(;d<b.e&&(c=~b.b[d])==0;++d){}if(c==0){j=j+1;i=lc(Od,{6:1},-1,j,1);i[j-1]=1;k=new si(-1,j,i);return k}}}i=lc(Od,{6:1},-1,j,1);i[d]=-c;++d}g=hl(b.e,a.e);for(;d<g;++d){i[d]=~(~b.b[d]^a.b[d])}for(;d<a.e;++d){i[d]=a.b[d]}for(;d<b.e;++d){i[d]=b.b[d]}k=new si(-1,j,i);Sh(k);return k}
function rf(){rf=rr;var a,b;lf=new qg(sr,0);mf=new qg(tr,0);of=new qg(ur,0);df=lc(Wd,{6:1},16,11,0);ef=lc(Md,{6:1},-1,100,1);ff=mc(Nd,{6:1},-1,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);gf=lc(Od,{6:1},-1,ff.length,1);hf=mc(Nd,{6:1},-1,[1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);jf=lc(Od,{6:1},-1,hf.length,1);pf=lc(Wd,{6:1},16,11,0);a=0;for(;a<pf.length;++a){nc(df,a,new qg(ue(a),0));nc(pf,a,new qg(ur,a));ef[a]=48}for(;a<ef.length;++a){ef[a]=48}for(b=0;b<gf.length;++b){gf[b]=sg(ff[b])}for(b=0;b<jf.length;++b){jf[b]=sg(hf[b])}nf=(go(),co);kf=bo}
function Hf(a,b){var c,d,e,f,g,i,j,k,n,o;c=0;i=0;g=b.length;n=new gm(b.length);if(0<g&&b.charCodeAt(0)==43){++i;++c;if(i<g&&(b.charCodeAt(i)==43||b.charCodeAt(i)==45)){throw new pl(Zr+b+$r)}}e=0;o=false;for(;i<g&&b.charCodeAt(i)!=46&&b.charCodeAt(i)!=101&&b.charCodeAt(i)!=69;++i){o||(b.charCodeAt(i)==48?++e:(o=true))}am(n,b,c,i);if(i<g&&b.charCodeAt(i)==46){++i;c=i;for(;i<g&&b.charCodeAt(i)!=101&&b.charCodeAt(i)!=69;++i){o||(b.charCodeAt(i)==48?++e:(o=true))}a.f=i-c;am(n,b,c,i)}else{a.f=0}if(i<g&&(b.charCodeAt(i)==101||b.charCodeAt(i)==69)){++i;c=i;if(i<g&&b.charCodeAt(i)==43){++i;i<g&&b.charCodeAt(i)!=45&&++c}j=b.substr(c,g-c);a.f=a.f-af(j,10);if(a.f!=Bc(a.f)){throw new pl('Scale out of range.')}}k=n.b.b;if(k.length<16){a.g=zg(k);if(Hk(a.g)){throw new pl(Zr+b+$r)}a.b=sg(a.g)}else{Tf(a,new oi(k))}a.e=n.b.b.length-e;for(f=0;f<n.b.b.length;++f){d=vl(n.b.b,f);if(d!=45&&d!=48){break}--a.e}}
function Im(a,b){Em();var c,d,e,f,g,i,j,k,n,o;g=xe(a,ur);g&&(a=Be(a));if(se(a,ur)){switch(b){case 0:return Tr;case 1:return zs;case 2:return As;case 3:return Bs;case 4:return Cs;case 5:return Ds;case 6:return Es;default:k=new fm;b<0?(k.b.b+=Fs,k):(k.b.b+=Gs,k);cc(k.b,b==-2147483648?'2147483648':Lr+-b);return k.b.b;}}j=lc(Md,{6:1},-1,19,1);c=18;o=a;do{i=o;o=re(o,tr);j[--c]=Je(pe(Cr,He(i,Ae(o,tr))))&65535}while(Ce(o,ur));d=He(He(He(Dr,ue(c)),ue(b)),sr);if(b==0){g&&(j[--c]=45);return Ll(j,c,18-c)}if(b>0&&we(d,Er)){if(we(d,ur)){e=c+Je(d);for(f=17;f>=e;--f){j[f+1]=j[f]}j[++e]=46;g&&(j[--c]=45);return Ll(j,c,18-c+1)}for(f=2;xe(ue(f),pe(Be(d),sr));++f){j[--c]=48}j[--c]=46;j[--c]=48;g&&(j[--c]=45);return Ll(j,c,18-c)}n=c+1;k=new gm;g&&(k.b.b+=Ur,k);if(18-n>=1){Zl(k,j[c]);k.b.b+=ds;dc(k.b,Ll(j,c+1,18-c-1))}else{dc(k.b,Ll(j,c,18-c))}k.b.b+=fs;ve(d,ur)&&(k.b.b+=gs,k);cc(k.b,Lr+Ke(d));return k.b.b}
function Ef(a,b,c){var d,e,f,g,i,j,k,n,o,q,r,s,t;n=c.b;e=Pf(a)-b.q();k=nf.length-1;f=a.f-b.f;o=f;r=e-f+1;q=lc(Xd,{6:1},17,2,0);if(n==0||a.b==0&&a.g!=-1||b.b==0&&b.g!=-1){return Df(a,b)}if(r<=0){nc(q,0,(Oh(),Nh))}else if(f==0){nc(q,0,Th((!a.d&&(a.d=Li(a.g)),a.d),(!b.d&&(b.d=Li(b.g)),b.d)))}else if(f>0){nc(q,0,Th((!a.d&&(a.d=Li(a.g)),a.d),ei((!b.d&&(b.d=Li(b.g)),b.d),po(f))));o=f<(n-r+1>0?n-r+1:0)?f:n-r+1>0?n-r+1:0;nc(q,0,ei(q[0],po(o)))}else{g=-f<(n-e>0?n-e:0)?-f:n-e>0?n-e:0;q=Uh(ei((!a.d&&(a.d=Li(a.g)),a.d),po(g)),(!b.d&&(b.d=Li(b.g)),b.d));o+=g;g=-o;if(q[1].r()!=0&&g>0){d=(new cg(q[1])).q()+g-b.q();if(d==0){nc(q,1,Th(ei(q[1],po(g)),(!b.d&&(b.d=Li(b.g)),b.d)));d=dl(q[1].r())}if(d>0){throw new nk(as)}}}if(q[0].r()==0){return Ig(f)}t=q[0];j=new cg(q[0]);s=j.q();i=1;while(!t.gb(0)){q=Uh(t,nf[i]);if(q[1].r()==0&&(s-i>=n||o-i>=f)){s-=i;o-=i;i<k&&++i;t=q[0]}else{if(i==1){break}i=1}}if(s>n){throw new nk(as)}j.f=Dg(o);Tf(j,t);return j}
function Ve(){var a,b,c;b=$doc.compatMode;a=mc(Vd,{6:1},1,[Vr]);for(c=0;c<a.length;++c){if(wl(a[c],b)){return}}a.length==1&&wl(Vr,a[0])&&wl('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom 'document.compatMode' configuration property settings."}
function Lg(a){rf();var b,c;c=Lj(a);if(c==is)b=new cg(new oi(a[0].toString()));else if(c=='BigInteger number')b=new dg(new oi(a[0].toString()),a[1]);else if(c=='BigInteger number MathContext')b=new eg(new oi(a[0].toString()),a[1],new Yn(a[2].toString()));else if(c=='BigInteger MathContext')b=new fg(new oi(a[0].toString()),new Yn(a[1].toString()));else if(c==js)b=new gg(Cl(a[0].toString()));else if(c=='array number number')b=new hg(Cl(a[0].toString()),a[1],a[2]);else if(c=='array number number MathContext')b=new ig(Cl(a[0].toString()),a[1],a[2],new Yn(a[3].toString()));else if(c=='array MathContext')b=new jg(Cl(a[0].toString()),new Yn(a[1].toString()));else if(c==ks)b=new kg(a[0]);else if(c==ls)b=new lg(a[0],new Yn(a[1].toString()));else if(c==ms)b=new mg(a[0].toString());else if(c=='string MathContext')b=new ng(a[0].toString(),new Yn(a[1].toString()));else throw new V('Unknown call signature for obj = new java.math.BigDecimal: '+c);return new Kg(b)}
function uo(){uo=rr;var a;ro=mc(Od,{6:1},-1,[0,0,1854,1233,927,747,627,543,480,431,393,361,335,314,295,279,265,253,242,232,223,216,181,169,158,150,145,140,136,132,127,123,119,114,110,105,101,96,92,87,83,78,73,69,64,59,54,49,44,38,32,26,1]);to=mc(Od,{6:1},-1,[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021]);so=lc(Xd,{6:1},17,to.length,0);for(a=0;a<to.length;++a){nc(so,a,Ki(ue(to[a])))}}
function Xj(){nr(rs,Lr);if($wnd.bigdecimal.MathContext){var b=$wnd.bigdecimal.MathContext}$wnd.bigdecimal.MathContext=Jr(function(){if(arguments.length==1&&arguments[0]!=null&&arguments[0].gC()==Uc){this.__gwt_instance=arguments[0]}else if(arguments.length==0){this.__gwt_instance=new Nj;or(this.__gwt_instance,this)}else if(arguments.length==1){this.__gwt_instance=Zj(arguments[0]);or(this.__gwt_instance,this)}});var c=$wnd.bigdecimal.MathContext.prototype=new Object;if(b){for(p in b){$wnd.bigdecimal.MathContext[p]=b[p]}}c.getPrecision=jr(Number,Jr(function(){var a=this.__gwt_instance.Hb();return a}));c.getRoundingMode=Jr(function(){var a=this.__gwt_instance.Ib();return pr(a)});c.hashCode=jr(Number,Jr(function(){var a=this.__gwt_instance.hC();return a}));c.toString=Jr(function(){var a=this.__gwt_instance.tS();return a});$wnd.bigdecimal.MathContext.DECIMAL128=Jr(function(){var a=new Oj(Wn((Un(),On)));return pr(a)});$wnd.bigdecimal.MathContext.DECIMAL32=Jr(function(){var a=new Oj(Wn((Un(),Pn)));return pr(a)});$wnd.bigdecimal.MathContext.DECIMAL64=Jr(function(){var a=new Oj(Wn((Un(),Qn)));return pr(a)});$wnd.bigdecimal.MathContext.UNLIMITED=Jr(function(){var a=new Oj(Wn((Un(),Rn)));return pr(a)});mr(Uc,$wnd.bigdecimal.MathContext)}
function Hm(a,b){Em();var c,d,e,f,g,i,j,k,n,o,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;z=a.f;q=a.e;e=a.b;if(z==0){switch(b){case 0:return Tr;case 1:return zs;case 2:return As;case 3:return Bs;case 4:return Cs;case 5:return Ds;case 6:return Es;default:x=new fm;b<0?(x.b.b+=Fs,x):(x.b.b+=Gs,x);ac(x.b,-b);return x.b.b;}}v=q*10+1+7;w=lc(Md,{6:1},-1,v+1,1);c=v;if(q==1){g=e[0];if(g<0){E=qe(ue(g),yr);do{r=E;E=re(E,tr);w[--c]=48+Je(He(r,Ae(E,tr)))&65535}while(Ce(E,ur))}else{E=g;do{r=E;E=~~(E/10);w[--c]=48+(r-E*10)&65535}while(E!=0)}}else{B=lc(Od,{6:1},-1,q,1);D=q;nm(e,0,B,0,q);F:while(true){y=ur;for(j=D-1;j>=0;--j){C=pe(Ee(y,32),qe(ue(B[j]),yr));t=Gm(C);B[j]=Je(t);y=ue(Je(Fe(t,32)))}u=Je(y);s=c;do{w[--c]=48+u%10&65535}while((u=~~(u/10))!=0&&c!=0);d=9-s+c;for(i=0;i<d&&c>0;++i){w[--c]=48}n=D-1;for(;B[n]==0;--n){if(n==0){break F}}D=n+1}while(w[c]==48){++c}}o=z<0;f=v-c-b-1;if(b==0){o&&(w[--c]=45);return Ll(w,c,v-c)}if(b>0&&f>=-6){if(f>=0){k=c+f;for(n=v-1;n>=k;--n){w[n+1]=w[n]}w[++k]=46;o&&(w[--c]=45);return Ll(w,c,v-c+1)}for(n=2;n<-f+1;++n){w[--c]=48}w[--c]=46;w[--c]=48;o&&(w[--c]=45);return Ll(w,c,v-c)}A=c+1;x=new gm;o&&(x.b.b+=Ur,x);if(v-A>=1){Zl(x,w[c]);x.b.b+=ds;dc(x.b,Ll(w,c+1,v-c-1))}else{dc(x.b,Ll(w,c,v-c))}x.b.b+=fs;f>0&&(x.b.b+=gs,x);cc(x.b,Lr+f);return x.b.b}
function jk(){nr(rs,Lr);if($wnd.bigdecimal.RoundingMode){var c=$wnd.bigdecimal.RoundingMode}$wnd.bigdecimal.RoundingMode=Jr(function(){if(arguments.length==1&&arguments[0]!=null&&arguments[0].gC()==Wc){this.__gwt_instance=arguments[0]}else if(arguments.length==0){this.__gwt_instance=new ak;or(this.__gwt_instance,this)}});var d=$wnd.bigdecimal.RoundingMode.prototype=new Object;if(c){for(p in c){$wnd.bigdecimal.RoundingMode[p]=c[p]}}$wnd.bigdecimal.RoundingMode.valueOf=Jr(function(a){var b=new bk((Qo(),Ok((Yo(),Xo),a)));return pr(b)});$wnd.bigdecimal.RoundingMode.values=Jr(function(){var a=fk();return qr(a)});d.name=Jr(function(){var a=this.__gwt_instance.Jb();return a});d.toString=Jr(function(){var a=this.__gwt_instance.tS();return a});$wnd.bigdecimal.RoundingMode.CEILING=Jr(function(){var a=new bk((Qo(),Ao));return pr(a)});$wnd.bigdecimal.RoundingMode.DOWN=Jr(function(){var a=new bk((Qo(),Bo));return pr(a)});$wnd.bigdecimal.RoundingMode.FLOOR=Jr(function(){var a=new bk((Qo(),Co));return pr(a)});$wnd.bigdecimal.RoundingMode.HALF_DOWN=Jr(function(){var a=new bk((Qo(),Do));return pr(a)});$wnd.bigdecimal.RoundingMode.HALF_EVEN=Jr(function(){var a=new bk((Qo(),Eo));return pr(a)});$wnd.bigdecimal.RoundingMode.HALF_UP=Jr(function(){var a=new bk((Qo(),Fo));return pr(a)});$wnd.bigdecimal.RoundingMode.UNNECESSARY=Jr(function(){var a=new bk((Qo(),Go));return pr(a)});$wnd.bigdecimal.RoundingMode.UP=Jr(function(){var a=new bk((Qo(),Ho));return pr(a)});mr(Wc,$wnd.bigdecimal.RoundingMode)}
function Hj(){nr(rs,Lr);if($wnd.bigdecimal.BigInteger){var d=$wnd.bigdecimal.BigInteger}$wnd.bigdecimal.BigInteger=Jr(function(){if(arguments.length==1&&arguments[0]!=null&&arguments[0].gC()==Sc){this.__gwt_instance=arguments[0]}else if(arguments.length==0){this.__gwt_instance=new Ni;or(this.__gwt_instance,this)}else if(arguments.length==1){this.__gwt_instance=Jj(arguments[0]);or(this.__gwt_instance,this)}});var e=$wnd.bigdecimal.BigInteger.prototype=new Object;if(d){for(p in d){$wnd.bigdecimal.BigInteger[p]=d[p]}}$wnd.bigdecimal.BigInteger.__init__=Jr(function(a){var b=Qi(a);return pr(b)});e.abs=Jr(function(){var a=this.__gwt_instance._();return pr(a)});e.add=Jr(function(a){var b=this.__gwt_instance.hb(a.__gwt_instance);return pr(b)});e.and=Jr(function(a){var b=this.__gwt_instance.ib(a.__gwt_instance);return pr(b)});e.andNot=Jr(function(a){var b=this.__gwt_instance.jb(a.__gwt_instance);return pr(b)});e.bitCount=jr(Number,Jr(function(){var a=this.__gwt_instance.kb();return a}));e.bitLength=jr(Number,Jr(function(){var a=this.__gwt_instance.ab();return a}));e.clearBit=Jr(function(a){var b=this.__gwt_instance.lb(a);return pr(b)});e.compareTo=jr(Number,Jr(function(a){var b=this.__gwt_instance.mb(a.__gwt_instance);return b}));e.divide=Jr(function(a){var b=this.__gwt_instance.nb(a.__gwt_instance);return pr(b)});e.doubleValue=jr(Number,Jr(function(){var a=this.__gwt_instance.z();return a}));e.equals=jr(Number,Jr(function(a){var b=this.__gwt_instance.eQ(a);return b}));e.flipBit=Jr(function(a){var b=this.__gwt_instance.pb(a);return pr(b)});e.floatValue=jr(Number,Jr(function(){var a=this.__gwt_instance.A();return a}));e.gcd=Jr(function(a){var b=this.__gwt_instance.qb(a.__gwt_instance);return pr(b)});e.getLowestSetBit=jr(Number,Jr(function(){var a=this.__gwt_instance.bb();return a}));e.hashCode=jr(Number,Jr(function(){var a=this.__gwt_instance.hC();return a}));e.intValue=jr(Number,Jr(function(){var a=this.__gwt_instance.B();return a}));e.isProbablePrime=jr(Number,Jr(function(a){var b=this.__gwt_instance.rb(a);return b}));e.max=Jr(function(a){var b=this.__gwt_instance.tb(a.__gwt_instance);return pr(b)});e.min=Jr(function(a){var b=this.__gwt_instance.ub(a.__gwt_instance);return pr(b)});e.mod=Jr(function(a){var b=this.__gwt_instance.vb(a.__gwt_instance);return pr(b)});e.modInverse=Jr(function(a){var b=this.__gwt_instance.wb(a.__gwt_instance);return pr(b)});e.modPow=Jr(function(a,b){var c=this.__gwt_instance.xb(a.__gwt_instance,b.__gwt_instance);return pr(c)});e.multiply=Jr(function(a){var b=this.__gwt_instance.yb(a.__gwt_instance);return pr(b)});e.negate=Jr(function(){var a=this.__gwt_instance.cb();return pr(a)});e.nextProbablePrime=Jr(function(){var a=this.__gwt_instance.zb();return pr(a)});e.not=Jr(function(){var a=this.__gwt_instance.Ab();return pr(a)});e.or=Jr(function(a){var b=this.__gwt_instance.Bb(a.__gwt_instance);return pr(b)});e.pow=Jr(function(a){var b=this.__gwt_instance.db(a);return pr(b)});e.remainder=Jr(function(a){var b=this.__gwt_instance.Cb(a.__gwt_instance);return pr(b)});e.setBit=Jr(function(a){var b=this.__gwt_instance.Db(a);return pr(b)});e.shiftLeft=Jr(function(a){var b=this.__gwt_instance.eb(a);return pr(b)});e.shiftRight=Jr(function(a){var b=this.__gwt_instance.fb(a);return pr(b)});e.signum=jr(Number,Jr(function(){var a=this.__gwt_instance.r();return a}));e.subtract=Jr(function(a){var b=this.__gwt_instance.Eb(a.__gwt_instance);return pr(b)});e.testBit=jr(Number,Jr(function(a){var b=this.__gwt_instance.gb(a);return b}));e.toString_va=Jr(function(a){var b=this.__gwt_instance.Fb(a);return b});e.xor=Jr(function(a){var b=this.__gwt_instance.Gb(a.__gwt_instance);return pr(b)});e.divideAndRemainder=Jr(function(a){var b=this.__gwt_instance.ob(a.__gwt_instance);return qr(b)});e.longValue=jr(Number,Jr(function(){var a=this.__gwt_instance.sb();return a}));$wnd.bigdecimal.BigInteger.valueOf=Jr(function(a){var b=(Oh(),new Pi(Ki(te(a))));return pr(b)});$wnd.bigdecimal.BigInteger.ONE=Jr(function(){var a=(Oh(),new Pi(Jh));return pr(a)});$wnd.bigdecimal.BigInteger.TEN=Jr(function(){var a=(Oh(),new Pi(Lh));return pr(a)});$wnd.bigdecimal.BigInteger.ZERO=Jr(function(){var a=(Oh(),new Pi(Nh));return pr(a)});mr(Sc,$wnd.bigdecimal.BigInteger)}
function Dh(){nr(rs,Lr);if($wnd.bigdecimal.BigDecimal){var c=$wnd.bigdecimal.BigDecimal}$wnd.bigdecimal.BigDecimal=Jr(function(){if(arguments.length==1&&arguments[0]!=null&&arguments[0].gC()==Qc){this.__gwt_instance=arguments[0]}else if(arguments.length==0){this.__gwt_instance=new Jg;or(this.__gwt_instance,this)}});var d=$wnd.bigdecimal.BigDecimal.prototype=new Object;if(c){for(p in c){$wnd.bigdecimal.BigDecimal[p]=c[p]}}$wnd.bigdecimal.BigDecimal.ROUND_CEILING=2;$wnd.bigdecimal.BigDecimal.ROUND_DOWN=1;$wnd.bigdecimal.BigDecimal.ROUND_FLOOR=3;$wnd.bigdecimal.BigDecimal.ROUND_HALF_DOWN=5;$wnd.bigdecimal.BigDecimal.ROUND_HALF_EVEN=6;$wnd.bigdecimal.BigDecimal.ROUND_HALF_UP=4;$wnd.bigdecimal.BigDecimal.ROUND_UNNECESSARY=7;$wnd.bigdecimal.BigDecimal.ROUND_UP=0;$wnd.bigdecimal.BigDecimal.__init__=Jr(function(a){var b=Lg(a);return pr(b)});d.abs_va=Jr(function(a){var b=this.__gwt_instance.s(a);return pr(b)});d.add_va=Jr(function(a){var b=this.__gwt_instance.t(a);return pr(b)});d.byteValueExact=jr(Number,Jr(function(){var a=this.__gwt_instance.u();return a}));d.compareTo=jr(Number,Jr(function(a){var b=this.__gwt_instance.v(a.__gwt_instance);return b}));d.divide_va=Jr(function(a){var b=this.__gwt_instance.y(a);return pr(b)});d.divideToIntegralValue_va=Jr(function(a){var b=this.__gwt_instance.x(a);return pr(b)});d.doubleValue=jr(Number,Jr(function(){var a=this.__gwt_instance.z();return a}));d.equals=jr(Number,Jr(function(a){var b=this.__gwt_instance.eQ(a);return b}));d.floatValue=jr(Number,Jr(function(){var a=this.__gwt_instance.A();return a}));d.hashCode=jr(Number,Jr(function(){var a=this.__gwt_instance.hC();return a}));d.intValue=jr(Number,Jr(function(){var a=this.__gwt_instance.B();return a}));d.intValueExact=jr(Number,Jr(function(){var a=this.__gwt_instance.C();return a}));d.max=Jr(function(a){var b=this.__gwt_instance.F(a.__gwt_instance);return pr(b)});d.min=Jr(function(a){var b=this.__gwt_instance.G(a.__gwt_instance);return pr(b)});d.movePointLeft=Jr(function(a){var b=this.__gwt_instance.H(a);return pr(b)});d.movePointRight=Jr(function(a){var b=this.__gwt_instance.I(a);return pr(b)});d.multiply_va=Jr(function(a){var b=this.__gwt_instance.J(a);return pr(b)});d.negate_va=Jr(function(a){var b=this.__gwt_instance.K(a);return pr(b)});d.plus_va=Jr(function(a){var b=this.__gwt_instance.L(a);return pr(b)});d.pow_va=Jr(function(a){var b=this.__gwt_instance.M(a);return pr(b)});d.precision=jr(Number,Jr(function(){var a=this.__gwt_instance.q();return a}));d.remainder_va=Jr(function(a){var b=this.__gwt_instance.N(a);return pr(b)});d.round=Jr(function(a){var b=this.__gwt_instance.O(a.__gwt_instance);return pr(b)});d.scale=jr(Number,Jr(function(){var a=this.__gwt_instance.P();return a}));d.scaleByPowerOfTen=Jr(function(a){var b=this.__gwt_instance.Q(a);return pr(b)});d.setScale_va=Jr(function(a){var b=this.__gwt_instance.R(a);return pr(b)});d.shortValueExact=jr(Number,Jr(function(){var a=this.__gwt_instance.S();return a}));d.signum=jr(Number,Jr(function(){var a=this.__gwt_instance.r();return a}));d.stripTrailingZeros=Jr(function(){var a=this.__gwt_instance.T();return pr(a)});d.subtract_va=Jr(function(a){var b=this.__gwt_instance.U(a);return pr(b)});d.toBigInteger=Jr(function(){var a=this.__gwt_instance.V();return pr(a)});d.toBigIntegerExact=Jr(function(){var a=this.__gwt_instance.W();return pr(a)});d.toEngineeringString=Jr(function(){var a=this.__gwt_instance.X();return a});d.toPlainString=Jr(function(){var a=this.__gwt_instance.Y();return a});d.toString=Jr(function(){var a=this.__gwt_instance.tS();return a});d.ulp=Jr(function(){var a=this.__gwt_instance.Z();return pr(a)});d.unscaledValue=Jr(function(){var a=this.__gwt_instance.$();return pr(a)});d.divideAndRemainder_va=Jr(function(a){var b=this.__gwt_instance.w(a);return qr(b)});d.longValue=jr(Number,Jr(function(){var a=this.__gwt_instance.E();return a}));d.longValueExact=jr(Number,Jr(function(){var a=this.__gwt_instance.D();return a}));$wnd.bigdecimal.BigDecimal.valueOf_va=Jr(function(a){var b=zh(a);return pr(b)});$wnd.bigdecimal.BigDecimal.log=jr(Number,Jr(function(a){rf();typeof console!==Xr&&console.log&&console.log(a)}));$wnd.bigdecimal.BigDecimal.logObj=jr(Number,Jr(function(a){rf();typeof console!==Xr&&console.log&&typeof JSON!==Xr&&JSON.stringify&&console.log('object: '+JSON.stringify(a))}));$wnd.bigdecimal.BigDecimal.ONE=Jr(function(){var a=(rf(),new Kg(lf));return pr(a)});$wnd.bigdecimal.BigDecimal.TEN=Jr(function(){var a=(rf(),new Kg(mf));return pr(a)});$wnd.bigdecimal.BigDecimal.ZERO=Jr(function(){var a=(rf(),new Kg(of));return pr(a)});mr(Qc,$wnd.bigdecimal.BigDecimal)}
var Lr='',ys=' ',$r='"',Or='(',gs='+',Is=', ',Ur='-',ds='.',Tr='0',es='0.',zs='0.0',As='0.00',Bs='0.000',Cs='0.0000',Ds='0.00000',Es='0.000000',Gs='0E',Fs='0E+',Qr=':',Kr=': ',Js='=',ps='BigDecimal',qs='BigDecimal MathContext',Ts='BigDecimal;',is='BigInteger',ss='BigInteger divide by zero',vs='BigInteger not invertible.',us='BigInteger: modulus not positive',Us='BigInteger;',Vr='CSS1Compat',_r='Division by zero',as='Division impossible',fs='E',Zr='For input string: "',hs='Infinite or NaN',bs='Invalid Operation',os='MathContext',ts='Negative bit address',cs='Rounding necessary',xs='RoundingMode',Vs='RoundingMode;',Nr='String',Rr='[',Ss='[Lcom.iriscouch.gwtapp.client.',Os='[Ljava.lang.',Ws='[Ljava.math.',Ks='\\.',Ls='__gwtex_wrap',Pr='anonymous',js='array',Hs='bad string format',rs='bigdecimal',Ns='com.google.gwt.core.client.',Ps='com.google.gwt.core.client.impl.',Rs='com.iriscouch.gwtapp.client.',Ms='java.lang.',Qs='java.math.',Xs='java.util.',Yr='msie',Mr='null',ks='number',ls='number MathContext',ns='number number',ws='object',Wr='opera',Ys='org.timepedia.exporter.client.',Sr='safari',ms='string',Xr='undefined';var _,Gr={l:0,m:0,h:524288},zr={l:0,m:4193280,h:1048575},Er={l:4194298,m:4194303,h:1048575},wr={l:4194303,m:4194303,h:1048575},ur={l:0,m:0,h:0},sr={l:1,m:0,h:0},vr={l:2,m:0,h:0},Hr={l:5,m:0,h:0},tr={l:10,m:0,h:0},xr={l:11,m:0,h:0},Dr={l:18,m:0,h:0},Cr={l:48,m:0,h:0},Br={l:877824,m:119,h:0},Ar={l:1755648,m:238,h:0},Ir={l:4194303,m:511,h:0},yr={l:4194303,m:1023,h:0},Fr={l:0,m:1024,h:0};_=H.prototype={};_.eQ=function I(a){return this===a};_.gC=function J(){return gd};_.hC=function K(){return ob(this)};_.tS=function L(){return this.gC().d+'@'+al(this.hC())};_.toString=function(){return this.tS()};_.tM=rr;_.cM={};_=P.prototype=new H;_.gC=function R(){return nd};_.j=function S(){return this.f};_.tS=function T(){var a,b;a=this.gC().d;b=this.j();return b!=null?a+Kr+b:a};_.cM={6:1,15:1};_.f=null;_=O.prototype=new P;_.gC=function U(){return ad};_.cM={6:1,15:1};_=V.prototype=N.prototype=new O;_.gC=function W(){return hd};_.cM={6:1,12:1,15:1};_=X.prototype=M.prototype=new N;_.gC=function Y(){return Fc};_.j=function ab(){this.d==null&&(this.e=bb(this.c),this.b=Z(this.c),this.d=Or+this.e+'): '+this.b+db(this.c),undefined);return this.d};_.cM={6:1,12:1,15:1};_.b=null;_.c=null;_.d=null;_.e=null;_=gb.prototype=new H;_.gC=function hb(){return Hc};var ib=0,jb=0;_=ub.prototype=pb.prototype=new gb;_.gC=function vb(){return Ic};_.b=null;_.c=null;var qb;_=Fb.prototype=Ab.prototype=new H;_.k=function Gb(){var a={};var b=[];var c=arguments.callee.caller.caller;while(c){var d=this.n(c.toString());b.push(d);var e=Qr+d;var f=a[e];if(f){var g,i;for(g=0,i=f.length;g<i;g++){if(f[g]===c){return b}}}(f||(a[e]=[])).push(c);c=c.caller}return b};_.n=function Hb(a){return yb(a)};_.gC=function Ib(){return Lc};_.o=function Jb(a){return []};_=Lb.prototype=new Ab;_.k=function Nb(){return zb(this.o(Eb()),this.p())};_.gC=function Ob(){return Kc};_.o=function Pb(a){return Mb(this,a)};_.p=function Qb(){return 2};_=Tb.prototype=Kb.prototype=new Lb;_.k=function Ub(){return Rb(this)};_.n=function Vb(a){var b,c;if(a.length==0){return Pr}c=Dl(a);c.indexOf('at ')==0&&(c=Al(c,3));b=c.indexOf(Rr);b==-1&&(b=c.indexOf(Or));if(b==-1){return Pr}else{c=Dl(c.substr(0,b-0))}b=yl(c,String.fromCharCode(46));b!=-1&&(c=Al(c,b+1));return c.length>0?c:Pr};_.gC=function Wb(){return Jc};_.o=function Xb(a){return Sb(this,a)};_.p=function Yb(){return 3};_=Zb.prototype=new H;_.gC=function $b(){return Nc};_=fc.prototype=_b.prototype=new Zb;_.gC=function gc(){return Mc};_.b=Lr;_=ic.prototype=hc.prototype=new H;_.gC=function kc(){return this.aC};_.aC=null;_.qI=0;var oc,pc;var ae=null;var oe=null;var Me,Ne,Oe,Pe;_=Se.prototype=Re.prototype=new H;_.gC=function Te(){return Oc};_.cM={2:1};_=Ze.prototype=new H;_.gC=function cf(){return fd};_.cM={6:1,10:1};var $e=null;_=qg.prototype=pg.prototype=og.prototype=ng.prototype=mg.prototype=lg.prototype=kg.prototype=jg.prototype=ig.prototype=hg.prototype=gg.prototype=fg.prototype=eg.prototype=dg.prototype=cg.prototype=Ye.prototype=new Ze;_.eQ=function wg(a){return Ff(this,a)};_.gC=function xg(){return pd};_.hC=function yg(){return Gf(this)};_.q=function Ag(){return Pf(this)};_.r=function Cg(){return Uf(this)};_.tS=function Eg(){return ag(this)};_.cM={6:1,8:1,10:1,16:1};_.b=0;_.c=0;_.d=null;_.e=0;_.f=0;_.g=0;_.i=null;var df,ef,ff,gf,hf,jf,kf=null,lf,mf,nf=null,of,pf,qf=null;_=Kg.prototype=Jg.prototype=Xe.prototype=new Ye;_.s=function Mg(a){var b,c,d;d=Lj(a);if(d==Lr)b=Uf(this)<0?Mf(this):this;else if(d==os)b=sf(Qf(this,new Yn(a[0].toString())));else throw new V('Unknown call signature for interim = super.abs: '+d);c=new Kg(b);return c};_.t=function Ng(a){var b,c,d;d=Lj(a);if(d==ps)b=tf(this,new mg(a[0].toString()));else if(d==qs)b=uf(this,new mg(a[0].toString()),new Yn(a[1].toString()));else throw new V('Unknown call signature for interim = super.add: '+d);c=new Kg(b);return c};_.u=function Og(){return ~~(Je(bg(this,8))<<24)>>24};_.v=function Pg(a){return vf(this,a)};_.w=function Qg(a){var b,c,d,e;e=Lj(a);if(e==ps)c=Bf(this,new mg(a[0].toString()));else if(e==qs)c=Cf(this,new mg(a[0].toString()),new Yn(a[1].toString()));else throw new V('Unknown call signature for interim = super.divideAndRemainder: '+e);d=lc(Qd,{6:1},3,c.length,0);for(b=0;b<c.length;++b)d[b]=new Kg(c[b]);return d};_.x=function Rg(a){var b,c,d;d=Lj(a);if(d==ps)b=Df(this,new mg(a[0].toString()));else if(d==qs)b=Ef(this,new mg(a[0].toString()),new Yn(a[1].toString()));else throw new V('Unknown call signature for interim = super.divideToIntegralValue: '+d);c=new Kg(b);return c};_.y=function Sg(a){var b,c,d;d=Lj(a);if(d==ps)b=wf(this,new mg(a[0].toString()));else if(d=='BigDecimal number')b=xf(this,new mg(a[0].toString()),a[1]);else if(d=='BigDecimal number number')b=yf(this,new mg(a[0].toString()),a[1],Uo(a[2]));else if(d=='BigDecimal number RoundingMode')b=yf(this,new mg(a[0].toString()),a[1],To(a[2].toString()));else if(d==qs)b=zf(this,new mg(a[0].toString()),new Yn(a[1].toString()));else if(d=='BigDecimal RoundingMode')b=Af(this,new mg(a[0].toString()),To(a[1].toString()));else throw new V('Unknown call signature for interim = super.divide: '+d);c=new Kg(b);return c};_.z=function Tg(){return _e(ag(this))};_.eQ=function Ug(a){return Ff(this,a)};_.A=function Vg(){var a,b;return a=Uf(this),b=this.b-this.f/0.3010299956639812,b<-149||a==0?(a*=0):b>129?(a*=Infinity):(a=_e(ag(this))),a};_.gC=function Wg(){return Qc};_.hC=function Xg(){return Gf(this)};_.B=function Yg(){return this.f<=-32||this.f>(this.e>0?this.e:el((this.b-1)*0.3010299956639812)+1)?0:Mi(new Pi(this.f==0||this.b==0&&this.g!=-1?(!this.d&&(this.d=Li(this.g)),this.d):this.f<0?ei((!this.d&&(this.d=Li(this.g)),this.d),po(-this.f)):Th((!this.d&&(this.d=Li(this.g)),this.d),po(this.f))))};_.C=function Zg(){return Je(bg(this,32))};_.D=function $g(){return Je(bg(this,32))};_.E=function _g(){return _e(ag(this))};_.F=function ah(a){return new Kg(vf(this,a)>=0?this:a)};_.G=function bh(a){return new Kg(vf(this,a)<=0?this:a)};_.H=function ch(a){return new Kg(Jf(this,this.f+a))};_.I=function dh(a){return new Kg(Jf(this,this.f-a))};_.J=function eh(a){var b,c,d;d=Lj(a);if(d==ps)b=Kf(this,new mg(a[0].toString()));else if(d==qs)b=Lf(this,new mg(a[0].toString()),new Yn(a[1].toString()));else throw new V('Unknown call signature for interim = super.multiply: '+d);c=new Kg(b);return c};_.K=function fh(a){var b,c,d;d=Lj(a);if(d==Lr)b=Mf(this);else if(d==os)b=Mf(Qf(this,new Yn(a[0].toString())));else throw new V('Unknown call signature for interim = super.negate: '+d);c=new Kg(b);return c};_.L=function gh(a){var b,c,d;d=Lj(a);if(d==Lr)b=this;else if(d==os)b=Qf(this,new Yn(a[0].toString()));else throw new V('Unknown call signature for interim = super.plus: '+d);c=new Kg(b);return c};_.M=function hh(a){var b,c,d;d=Lj(a);if(d==ks)b=Nf(this,a[0]);else if(d==ls)b=Of(this,a[0],new Yn(a[1].toString()));else throw new V('Unknown call signature for interim = super.pow: '+d);c=new Kg(b);return c};_.q=function ih(){return Pf(this)};_.N=function jh(a){var b,c,d;d=Lj(a);if(d==ps)b=Bf(this,new mg(a[0].toString()))[1];else if(d==qs)b=Cf(this,new mg(a[0].toString()),new Yn(a[1].toString()))[1];else throw new V('Unknown call signature for interim = super.remainder: '+d);c=new Kg(b);return c};_.O=function kh(a){return new Kg(Qf(this,new Yn(Wn(a.b))))};_.P=function lh(){return Bc(this.f)};_.Q=function mh(a){return new Kg(Rf(this,a))};_.R=function nh(a){var b,c,d;d=Lj(a);if(d==ks)b=Sf(this,a[0],(Qo(),Go));else if(d==ns)b=Sf(this,a[0],Uo(a[1]));else if(d=='number RoundingMode')b=Sf(this,a[0],To(a[1].toString()));else throw new V('Unknown call signature for interim = super.setScale: '+d);c=new Kg(b);return c};_.S=function oh(){return ~~(Je(bg(this,16))<<16)>>16};_.r=function ph(){return Uf(this)};_.T=function qh(){return new Kg(Wf(this))};_.U=function rh(a){var b,c,d;d=Lj(a);if(d==ps)b=Xf(this,new mg(a[0].toString()));else if(d==qs)b=Yf(this,new mg(a[0].toString()),new Yn(a[1].toString()));else throw new V('Unknown call signature for interim = super.subtract: '+d);c=new Kg(b);return c};_.V=function sh(){return new Pi(this.f==0||this.b==0&&this.g!=-1?(!this.d&&(this.d=Li(this.g)),this.d):this.f<0?ei((!this.d&&(this.d=Li(this.g)),this.d),po(-this.f)):Th((!this.d&&(this.d=Li(this.g)),this.d),po(this.f)))};_.W=function th(){return new Pi(Zf(this))};_.X=function uh(){return $f(this)};_.Y=function vh(){return _f(this)};_.tS=function wh(){return ag(this)};_.Z=function xh(){return new Kg(new pg(1,this.f))};_.$=function yh(){return new Pi((!this.d&&(this.d=Li(this.g)),this.d))};_.cM={3:1,6:1,8:1,10:1,16:1,24:1};_=Eh.prototype=Ah.prototype=new H;_.gC=function Fh(){return Pc};var Bh=false;_=ui.prototype=ti.prototype=si.prototype=ri.prototype=qi.prototype=pi.prototype=oi.prototype=ni.prototype=Hh.prototype=new Ze;_._=function vi(){return this.f<0?new si(1,this.e,this.b):this};_.ab=function wi(){return sm(this)};_.eQ=function xi(a){return Vh(this,a)};_.gC=function yi(){return qd};_.bb=function zi(){return $h(this)};_.hC=function Bi(){return _h(this)};_.cb=function Ci(){return this.f==0?this:new si(-this.f,this.e,this.b)};_.db=function Di(a){return gi(this,a)};_.eb=function Fi(a){return ji(this,a)};_.fb=function Gi(a){return li(this,a)};_.r=function Hi(){return this.f};_.gb=function Ii(a){return mi(this,a)};_.tS=function Ji(){return Hm(this,0)};_.cM={6:1,8:1,10:1,17:1};_.b=null;_.c=-2;_.d=0;_.e=0;_.f=0;var Ih,Jh,Kh,Lh,Mh=null,Nh;_=Pi.prototype=Oi.prototype=Ni.prototype=Gh.prototype=new Hh;_._=function Ri(){return new Pi(this.f<0?new si(1,this.e,this.b):this)};_.hb=function Si(a){return new Pi(fn(this,a))};_.ib=function Ti(a){return new Pi(vn(this,a))};_.jb=function Ui(a){return new Pi(yn(this,a))};_.kb=function Vi(){return rm(this)};_.ab=function Wi(){return sm(this)};_.lb=function Xi(a){return new Pi(Ph(this,a))};_.mb=function Yi(a){return Qh(this,a)};_.nb=function Zi(a){return new Pi(Th(this,a))};_.ob=function $i(a){var b,c,d;c=Uh(this,a);d=lc(Rd,{6:1},4,c.length,0);for(b=0;b<c.length;++b)d[b]=new Pi(c[b]);return d};_.z=function _i(){return _e(Hm(this,0))};_.eQ=function aj(a){return Vh(this,a)};_.pb=function bj(a){return new Pi(Xh(this,a))};_.A=function cj(){return Pk(Hm(this,0))};_.qb=function dj(a){return new Pi(Yh(this,a))};_.gC=function ej(){return Sc};_.bb=function fj(){return $h(this)};_.hC=function gj(){return _h(this)};_.B=function hj(){return Mi(this)};_.rb=function ij(a){return vo(new Pi(this.f<0?new si(1,this.e,this.b):this),a)};_.sb=function jj(){return _e(Hm(this,0))};_.tb=function kj(a){return new Pi(Qh(this,a)==1?this:a)};_.ub=function lj(a){return new Pi(Qh(this,a)==-1?this:a)};_.vb=function mj(a){return new Pi(bi(this,a))};_.wb=function nj(a){return new Pi(ci(this,a))};_.xb=function oj(a,b){return new Pi(di(this,a,b))};_.yb=function pj(a){return new Pi(ei(this,a))};_.cb=function qj(){return new Pi(this.f==0?this:new si(-this.f,this.e,this.b))};_.zb=function rj(){return new Pi(fi(this))};_.Ab=function sj(){return new Pi(En(this))};_.Bb=function tj(a){return new Pi(Fn(this,a))};_.db=function uj(a){return new Pi(gi(this,a))};_.Cb=function vj(a){return new Pi(hi(this,a))};_.Db=function wj(a){return new Pi(ii(this,a))};_.eb=function xj(a){return new Pi(ji(this,a))};_.fb=function yj(a){return new Pi(li(this,a))};_.r=function zj(){return this.f};_.Eb=function Aj(a){return new Pi(rn(this,a))};_.gb=function Bj(a){return mi(this,a)};_.Fb=function Cj(a){var b,c;c=Lj(a);if(c==Lr)b=Hm(this,0);else if(c==ks)b=Fm(this,a[0]);else throw new V('Unknown call signature for result = super.toString: '+c);return b};_.Gb=function Dj(a){return new Pi(Jn(this,a))};_.cM={4:1,6:1,8:1,10:1,17:1,24:1};_=Ij.prototype=Ej.prototype=new H;_.gC=function Kj(){return Rc};var Fj=false;_=Oj.prototype=Nj.prototype=Mj.prototype=new H;_.gC=function Pj(){return Uc};_.Hb=function Qj(){return this.b.b};_.Ib=function Rj(){return new bk(this.b.c)};_.hC=function Sj(){return Vn(this.b)};_.tS=function Tj(){return Wn(this.b)};_.cM={24:1};_.b=null;_=Yj.prototype=Uj.prototype=new H;_.gC=function $j(){return Tc};var Vj=false;_=bk.prototype=ak.prototype=_j.prototype=new H;_.gC=function ck(){return Wc};_.Jb=function dk(){return this.b.b};_.tS=function ek(){return this.b.b};_.cM={5:1,24:1};_.b=null;_=kk.prototype=gk.prototype=new H;_.gC=function lk(){return Vc};var hk=false;_=nk.prototype=mk.prototype=new N;_.gC=function ok(){return Xc};_.cM={6:1,12:1,15:1};_=rk.prototype=qk.prototype=pk.prototype=new N;_.gC=function sk(){return Yc};_.cM={6:1,12:1,15:1};_=wk.prototype=vk.prototype=new H;_.gC=function Bk(){return $c};_.tS=function Ck(){return ((this.c&2)!=0?'interface ':(this.c&1)!=0?Lr:'class ')+this.d};_.b=null;_.c=0;_.d=null;_=Ek.prototype=Dk.prototype=new N;_.gC=function Fk(){return Zc};_.cM={6:1,12:1,15:1};_=Ik.prototype=new H;_.eQ=function Kk(a){return this===a};_.gC=function Lk(){return _c};_.hC=function Mk(){return ob(this)};_.tS=function Nk(){return this.b};_.cM={6:1,8:1,9:1};_.b=null;_.c=0;_=Sk.prototype=Rk.prototype=Qk.prototype=new N;_.gC=function Tk(){return bd};_.cM={6:1,12:1,15:1};_=Wk.prototype=Vk.prototype=Uk.prototype=new N;_.gC=function Xk(){return cd};_.cM={6:1,12:1,15:1};_=kl.prototype=jl.prototype=il.prototype=new N;_.gC=function ll(){return dd};_.cM={6:1,12:1,15:1};var ml;_=pl.prototype=ol.prototype=new Qk;_.gC=function ql(){return ed};_.cM={6:1,12:1,15:1};_=sl.prototype=rl.prototype=new H;_.gC=function tl(){return id};_.tS=function ul(){return this.b+ds+this.d+'(Unknown Source'+(this.c>=0?Qr+this.c:Lr)+')'};_.cM={6:1,13:1};_.b=null;_.c=0;_.d=null;_=String.prototype;_.eQ=function Hl(a){return wl(this,a)};_.gC=function Il(){return md};_.hC=function Jl(){return Rl(this)};_.tS=function Kl(){return this};_.cM={1:1,6:1,7:1,8:1};var Ml,Nl=0,Ol;_=Ul.prototype=Tl.prototype=new H;_.gC=function Vl(){return jd};_.tS=function Wl(){return this.b.b};_.cM={7:1};_=hm.prototype=gm.prototype=fm.prototype=Xl.prototype=new H;_.gC=function im(){return kd};_.tS=function jm(){return this.b.b};_.cM={7:1};_=lm.prototype=km.prototype=new Uk;_.gC=function mm(){return ld};_.cM={6:1,12:1,14:1,15:1};_=pm.prototype=om.prototype=new N;_.gC=function qm(){return od};_.cM={6:1,12:1,15:1};var Cm,Dm;_=Yn.prototype=Xn.prototype=Nn.prototype=new H;_.eQ=function Zn(a){return xc(a,18)&&vc(a,18).b==this.b&&vc(a,18).c==this.c};_.gC=function $n(){return rd};_.hC=function _n(){return Vn(this)};_.tS=function ao(){return Wn(this)};_.cM={6:1,18:1};_.b=0;_.c=null;var On,Pn,Qn,Rn,Sn,Tn;var bo,co,eo,fo;var ro,so,to;_=Ro.prototype=yo.prototype=new Ik;_.gC=function So(){return sd};_.cM={6:1,8:1,9:1,19:1};var zo,Ao,Bo,Co,Do,Eo,Fo,Go,Ho,Io,Jo,Ko,Lo,Mo,No,Oo,Po;var Xo;_=Zo.prototype=new H;_.Kb=function _o(a){throw new pm};_.Lb=function ap(a){var b;b=$o(this.Mb(),a);return !!b};_.gC=function bp(){return td};_.tS=function cp(){var a,b,c,d;c=new Ul;a=null;c.b.b+=Rr;b=this.Mb();while(b.Pb()){a!=null?(cc(c.b,a),c):(a=Is);d=b.Qb();cc(c.b,d===this?'(this Collection)':Lr+d)}c.b.b+=']';return c.b.b};_=ep.prototype=new H;_.eQ=function fp(a){var b,c,d,e,f;if(a===this){return true}if(!xc(a,21)){return false}e=vc(a,21);if(this.e!=e.e){return false}for(c=new Ip((new Cp(e)).b);kq(c.b);){b=vc(lq(c.b),22);d=b.Rb();f=b.Sb();if(!(d==null?this.d:xc(d,1)?Qr+vc(d,1) in this.f:pp(this,d,~~fb(d)))){return false}if(!Xq(f,d==null?this.c:xc(d,1)?op(this,vc(d,1)):np(this,d,~~fb(d)))){return false}}return true};_.gC=function gp(){return Cd};_.hC=function hp(){var a,b,c;c=0;for(b=new Ip((new Cp(this)).b);kq(b.b);){a=vc(lq(b.b),22);c+=a.hC();c=~~c}return c};_.tS=function ip(){var a,b,c,d;d='{';a=false;for(c=new Ip((new Cp(this)).b);kq(c.b);){b=vc(lq(c.b),22);a?(d+=Is):(a=true);d+=Lr+b.Rb();d+=Js;d+=Lr+b.Sb()}return d+'}'};_.cM={21:1};_=dp.prototype=new ep;_.Ob=function vp(a,b){return Ac(a)===Ac(b)||a!=null&&eb(a,b)};_.gC=function wp(){return yd};_.cM={21:1};_.b=null;_.c=null;_.d=false;_.e=0;_.f=null;_=yp.prototype=new Zo;_.eQ=function zp(a){var b,c,d;if(a===this){return true}if(!xc(a,23)){return false}c=vc(a,23);if(c.b.e!=this.Nb()){return false}for(b=new Ip(c.b);kq(b.b);){d=vc(lq(b.b),22);if(!this.Lb(d)){return false}}return true};_.gC=function Ap(){return Dd};_.hC=function Bp(){var a,b,c;a=0;for(b=this.Mb();b.Pb();){c=b.Qb();if(c!=null){a+=fb(c);a=~~a}}return a};_.cM={23:1};_=Cp.prototype=xp.prototype=new yp;_.Lb=function Dp(a){var b,c,d;if(xc(a,22)){b=vc(a,22);c=b.Rb();if(lp(this.b,c)){d=mp(this.b,c);return Eq(b.Sb(),d)}}return false};_.gC=function Ep(){return vd};_.Mb=function Fp(){return new Ip(this.b)};_.Nb=function Gp(){return this.b.e};_.cM={23:1};_.b=null;_=Ip.prototype=Hp.prototype=new H;_.gC=function Jp(){return ud};_.Pb=function Kp(){return kq(this.b)};_.Qb=function Lp(){return vc(lq(this.b),22)};_.b=null;_=Np.prototype=new H;_.eQ=function Op(a){var b;if(xc(a,22)){b=vc(a,22);if(Xq(this.Rb(),b.Rb())&&Xq(this.Sb(),b.Sb())){return true}}return false};_.gC=function Pp(){return Bd};_.hC=function Qp(){var a,b;a=0;b=0;this.Rb()!=null&&(a=fb(this.Rb()));this.Sb()!=null&&(b=fb(this.Sb()));return a^b};_.tS=function Rp(){return this.Rb()+Js+this.Sb()};_.cM={22:1};_=Sp.prototype=Mp.prototype=new Np;_.gC=function Tp(){return wd};_.Rb=function Up(){return null};_.Sb=function Vp(){return this.b.c};_.Tb=function Wp(a){return tp(this.b,a)};_.cM={22:1};_.b=null;_=Yp.prototype=Xp.prototype=new Np;_.gC=function Zp(){return xd};_.Rb=function $p(){return this.b};_.Sb=function _p(){return op(this.c,this.b)};_.Tb=function aq(a){return up(this.c,this.b,a)};_.cM={22:1};_.b=null;_.c=null;_=bq.prototype=new Zo;_.Kb=function cq(a){sq(this,this.Nb(),a);return true};_.eQ=function eq(a){var b,c,d,e,f;if(a===this){return true}if(!xc(a,20)){return false}f=vc(a,20);if(this.Nb()!=f.c){return false}d=new mq(this);e=new mq(f);while(d.b<d.c.c){b=lq(d);c=lq(e);if(!(b==null?c==null:eb(b,c))){return false}}return true};_.gC=function fq(){return Ad};_.hC=function gq(){var a,b,c;b=1;a=new mq(this);while(a.b<a.c.c){c=lq(a);b=31*b+(c==null?0:fb(c));b=~~b}return b};_.Mb=function iq(){return new mq(this)};_.cM={20:1};_=mq.prototype=jq.prototype=new H;_.gC=function nq(){return zd};_.Pb=function oq(){return kq(this)};_.Qb=function pq(){return lq(this)};_.b=0;_.c=null;_=vq.prototype=qq.prototype=new bq;_.Kb=function wq(a){return rq(this,a)};_.Lb=function xq(a){return uq(this,a,0)!=-1};_.gC=function yq(){return Ed};_.Nb=function zq(){return this.c};_.cM={6:1,20:1};_.c=0;_=Fq.prototype=Dq.prototype=new dp;_.gC=function Gq(){return Fd};_.cM={6:1,21:1};_=Iq.prototype=Hq.prototype=new Np;_.gC=function Jq(){return Gd};_.Rb=function Kq(){return this.b};_.Sb=function Lq(){return this.c};_.Tb=function Mq(a){var b;b=this.c;this.c=a;return b};_.cM={22:1};_.b=null;_.c=null;_=Oq.prototype=Nq.prototype=new N;_.gC=function Pq(){return Hd};_.cM={6:1,12:1,15:1};_=Vq.prototype=Qq.prototype=new H;_.gC=function Wq(){return Id};_.b=0;_.c=0;var Rq,Sq,Tq=0;_=Zq.prototype=new H;_.gC=function $q(){return Kd};_=gr.prototype=Yq.prototype=new Zq;_.gC=function hr(){return Jd};var kr;var Jr=mb;var gd=yk(Ms,'Object'),_c=yk(Ms,'Enum'),nd=yk(Ms,'Throwable'),ad=yk(Ms,'Exception'),hd=yk(Ms,'RuntimeException'),Fc=yk(Ns,'JavaScriptException'),Gc=yk(Ns,'JavaScriptObject$'),Hc=yk(Ns,'Scheduler'),Ec=Ak('int'),Od=xk(Lr,'[I',Ec),Td=xk(Os,'Object;',gd),Ld=Ak('boolean'),Zd=xk(Lr,'[Z',Ld),Ic=yk(Ps,'SchedulerImpl'),Lc=yk(Ps,'StackTraceCreator$Collector'),id=yk(Ms,'StackTraceElement'),Ud=xk(Os,'StackTraceElement;',id),Kc=yk(Ps,'StackTraceCreator$CollectorMoz'),Jc=yk(Ps,'StackTraceCreator$CollectorChrome'),Nc=yk(Ps,'StringBufferImpl'),Mc=yk(Ps,'StringBufferImplAppend'),md=yk(Ms,Nr),Vd=xk(Os,'String;',md),Oc=yk('com.google.gwt.lang.','LongLibBase$LongEmul'),Pd=xk('[Lcom.google.gwt.lang.','LongLibBase$LongEmul;',Oc),fd=yk(Ms,'Number'),pd=yk(Qs,ps),Qc=yk(Rs,ps),Qd=xk(Ss,Ts,Qc),Pc=yk(Rs,'BigDecimalExporterImpl'),qd=yk(Qs,is),Sc=yk(Rs,is),Rd=xk(Ss,Us,Sc),Rc=yk(Rs,'BigIntegerExporterImpl'),Uc=yk(Rs,os),Tc=yk(Rs,'MathContextExporterImpl'),Wc=yk(Rs,xs),Sd=xk(Ss,Vs,Wc),Vc=yk(Rs,'RoundingModeExporterImpl'),Xc=yk(Ms,'ArithmeticException'),cd=yk(Ms,'IndexOutOfBoundsException'),Yc=yk(Ms,'ArrayStoreException'),Cc=Ak('char'),Md=xk(Lr,'[C',Cc),$c=yk(Ms,'Class'),Zc=yk(Ms,'ClassCastException'),bd=yk(Ms,'IllegalArgumentException'),dd=yk(Ms,'NullPointerException'),ed=yk(Ms,'NumberFormatException'),jd=yk(Ms,'StringBuffer'),kd=yk(Ms,'StringBuilder'),ld=yk(Ms,'StringIndexOutOfBoundsException'),od=yk(Ms,'UnsupportedOperationException'),Wd=xk(Ws,Ts,pd),Dc=Ak('double'),Nd=xk(Lr,'[D',Dc),Xd=xk(Ws,Us,qd),rd=yk(Qs,os),sd=zk(Qs,xs,Wo),Yd=xk(Ws,Vs,sd),td=yk(Xs,'AbstractCollection'),Cd=yk(Xs,'AbstractMap'),yd=yk(Xs,'AbstractHashMap'),Dd=yk(Xs,'AbstractSet'),vd=yk(Xs,'AbstractHashMap$EntrySet'),ud=yk(Xs,'AbstractHashMap$EntrySetIterator'),Bd=yk(Xs,'AbstractMapEntry'),wd=yk(Xs,'AbstractHashMap$MapEntryNull'),xd=yk(Xs,'AbstractHashMap$MapEntryString'),Ad=yk(Xs,'AbstractList'),zd=yk(Xs,'AbstractList$IteratorImpl'),Ed=yk(Xs,'ArrayList'),Fd=yk(Xs,'HashMap'),Gd=yk(Xs,'MapEntryImpl'),Hd=yk(Xs,'NoSuchElementException'),Id=yk(Xs,'Random'),Kd=yk(Ys,'ExporterBaseImpl'),Jd=yk(Ys,'ExporterBaseActual');$stats && $stats({moduleName:'gwtapp',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (gwtapp && gwtapp.onScriptLoad)gwtapp.onScriptLoad(gwtOnLoad);
gwtOnLoad(null, 'ModuleName', 'moduleBase');
})();

exports.RoundingMode = window.bigdecimal.RoundingMode;
exports.MathContext = window.bigdecimal.MathContext;

fix_and_export('BigDecimal');
fix_and_export('BigInteger');

// This is an unfortunate kludge because Java methods and constructors cannot accept vararg parameters.
function fix_and_export(class_name) {
  var Src = window.bigdecimal[class_name];
  var Fixed = Src;
  if(Src.__init__) {
    Fixed = function wrap_constructor() {
      var args = Array.prototype.slice.call(arguments);
      return Src.__init__(args);
    };

    Fixed.prototype = Src.prototype;

    for (var a in Src)
      if(Src.hasOwnProperty(a)) {
        if((typeof Src[a] != 'function') || !a.match(/_va$/))
          Fixed[a] = Src[a];
        else {
          var pub_name = a.replace(/_va$/, '');
          Fixed[pub_name] = function wrap_classmeth () {
            var args = Array.prototype.slice.call(arguments);
            return wrap_classmeth.inner_method(args);
          };
          Fixed[pub_name].inner_method = Src[a];
        }
      }

  }

  var proto = Fixed.prototype;
  for (var a in proto) {
    if(proto.hasOwnProperty(a) && (typeof proto[a] == 'function') && a.match(/_va$/)) {
      var pub_name = a.replace(/_va$/, '');
      proto[pub_name] = function wrap_meth() {
        var args = Array.prototype.slice.call(arguments);
        return wrap_meth.inner_method.apply(this, [args]);
      };
      proto[pub_name].inner_method = proto[a];
      delete proto[a];
    }
  }

  exports[class_name] = Fixed;
}

})(typeof exports !== 'undefined' ? exports : (typeof window !== 'undefined' ? window : {}));

},{}],2:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));
},{"./cipher-core":3,"./core":4,"./enc-base64":5,"./evpkdf":7,"./md5":12}],3:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;

	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }
	            this._mode = modeCreator.call(mode, this, iv && iv.words);
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));
},{"./core":4}],4:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
},{}],5:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));
},{"./core":4}],6:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));
},{"./core":4}],7:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));
},{"./core":4,"./hmac":9,"./sha1":28}],8:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));
},{"./cipher-core":3,"./core":4}],9:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));
},{"./core":4}],10:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	return CryptoJS;

}));
},{"./aes":2,"./cipher-core":3,"./core":4,"./enc-base64":5,"./enc-utf16":6,"./evpkdf":7,"./format-hex":8,"./hmac":9,"./lib-typedarrays":11,"./md5":12,"./mode-cfb":13,"./mode-ctr":15,"./mode-ctr-gladman":14,"./mode-ecb":16,"./mode-ofb":17,"./pad-ansix923":18,"./pad-iso10126":19,"./pad-iso97971":20,"./pad-nopadding":21,"./pad-zeropadding":22,"./pbkdf2":23,"./rabbit":25,"./rabbit-legacy":24,"./rc4":26,"./ripemd160":27,"./sha1":28,"./sha224":29,"./sha256":30,"./sha3":31,"./sha384":32,"./sha512":33,"./tripledes":34,"./x64-core":35}],11:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));
},{"./core":4}],12:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));
},{"./core":4}],13:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));
},{"./cipher-core":3,"./core":4}],14:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));
},{"./cipher-core":3,"./core":4}],15:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));
},{"./cipher-core":3,"./core":4}],16:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));
},{"./cipher-core":3,"./core":4}],17:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));
},{"./cipher-core":3,"./core":4}],18:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));
},{"./cipher-core":3,"./core":4}],19:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));
},{"./cipher-core":3,"./core":4}],20:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));
},{"./cipher-core":3,"./core":4}],21:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));
},{"./cipher-core":3,"./core":4}],22:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));
},{"./cipher-core":3,"./core":4}],23:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha1", "./hmac"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));
},{"./core":4,"./hmac":9,"./sha1":28}],24:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));
},{"./cipher-core":3,"./core":4,"./enc-base64":5,"./evpkdf":7,"./md5":12}],25:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));
},{"./cipher-core":3,"./core":4,"./enc-base64":5,"./evpkdf":7,"./md5":12}],26:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));
},{"./cipher-core":3,"./core":4,"./enc-base64":5,"./evpkdf":7,"./md5":12}],27:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));
},{"./core":4}],28:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));
},{"./core":4}],29:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./sha256"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./sha256"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));
},{"./core":4,"./sha256":30}],30:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));
},{"./core":4}],31:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./x64-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));
},{"./core":4,"./x64-core":35}],32:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core", "./sha512"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));
},{"./core":4,"./sha512":33,"./x64-core":35}],33:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./x64-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./x64-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));
},{"./core":4,"./x64-core":35}],34:[function(require,module,exports){
;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));
},{"./cipher-core":3,"./core":4,"./enc-base64":5,"./evpkdf":7,"./md5":12}],35:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));
},{"./core":4}],36:[function(require,module,exports){
/*
 * telepathy
 * https://github.com/rummik/telepathy
 *
 * Copyright (c) 2012 rummik
 * Licensed under the MPL license.
 */

var CryptoJS = require('crypto-js');
var BigInteger = require('bigdecimal').BigInteger;

/**
 * Telepathy constructor
 * @constructor
 * @param {object|string} [options]
 */
function Telepathy(options) {
  'use strict';

  options = options || {};

  if (typeof options == 'string')
    options = { secret: options };

  /** Private variable shared secret */
  var _secret = options.secret || '';
  delete options.secret;

  this.user = options.user || '';
  this.alphabet = options.alphabet || Telepathy.alphabet.base62;
  this.length = options.length || 10;
  this.domain = options.domain || '';
  this.algorithm = options.algorithm || 'SHA256';

  /**
   * Set the private secret we'll be using in generating passwords
   * @param {string} secret
   */
  this.setSecret = function(secret) {
    _secret = secret || '';
  };

  /**
   * Generate a password
   * @param {object|string|number} [options]
   * @returns {string} Generated password
   * @example
   * var telepathy = new Telepathy('secret');
   * console.log(telepathy.password('google.com'));
   */
  this.password = function(options) {
    return this._password(_secret, options);
  };
}

/** @ignore */
Telepathy.prototype._password = function(secret, options) {
  'use strict';

  options = options || {};

  if (typeof options == 'string')
    options = { domain: options };

  if (typeof options == 'number')
    options = { index: options };

  secret = options.secret || secret;

  var length = parseInt(options.length || this.length || 10, 10);
  var index = Math.max(parseInt(options.index || 0, 10), 0);
  var len = length * (index + 1);

  var algorithm = options.algorithm || this.algorithm;
  var hasher = Telepathy.algorithms[algorithm.toUpperCase()] || Telepathy.algorithms.SHA256;

  var alphabet = options.alphabet || this.alphabet;
  var base = new BigInteger(alphabet.length.toString());

  var user = options.user || this.user;
  var domain = options.domain || this.domain;
  var data = user + domain;

  var password = '';
  while (password.length < len) {
    // create hash, and make it a big integer
    var hash = new BigInteger(hasher(data + password, secret).toString(), 16);

    // convert hash to an arbitrary base
    while (hash.compareTo(base) >= 0 && password.length < len) {
      var result = hash.divideAndRemainder(base);
      var remainder = result[1];
      hash = result[0];

      password = alphabet[remainder] + password;

      if (hash.compareTo(base) == -1 && password.length < len)
        password = alphabet[hash] + password;
    }
  }

  return password.substr(0, length);
};


(function() {
  'use strict';

  /**
   * Available hashing algorithms
   * @namespace
   */
  Telepathy.algorithms = {
    MD5: function(data, secret) {
      return CryptoJS.MD5(secret + data);
    },

    SHA1: function(data, secret) {
      return CryptoJS.SHA1(secret + data);
    },

    SHA512: function(data, secret) {
      return CryptoJS.SHA512(secret + data);
    },
    SHA384: function(data, secret) {
      return CryptoJS.SHA384(secret + data);
    },
    SHA256: function(data, secret) {
      return CryptoJS.SHA256(secret + data);
    },
    SHA224: function(data, secret) {
      return CryptoJS.SHA224(secret + data);
    },

    SHA3: function(data, secret) {
      return Telepathy.algorithms.SHA3_512(data, secret);
    },
    SHA3_512: function(data, secret) {
      return CryptoJS.SHA3(secret + data, { outputLength: 512 });
    },
    SHA3_384: function(data, secret) {
      return CryptoJS.SHA3(secret + data, { outputLength: 384 });
    },
    SHA3_256: function(data, secret) {
      return CryptoJS.SHA3(secret + data, { outputLength: 256 });
    },
    SHA3_224: function(data, secret) {
      return CryptoJS.SHA3(secret + data, { outputLength: 224 });
    },

    RIPEMD160: function(data, secret) {
      return CryptoJS.RIPEMD160(secret + data);
    },
  };
})();

/**
 * Output alphabets used in password generation (larger alphabets are better)
 * @readonly
 * @namespace
 * @property {string} base94 WARNING: this could break insecure login forms
 * @property {string} base62
 * @property {string} base36
 * @property {string} base16
 * @property {string} base10
 * @property {string} base8
 * @property {string} base5
 * @property {string} base2
 */
Telepathy.alphabet = {
  base94: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
  base62: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  base36: '0123456789abcdefghijklmnopqrstuvwxyz',
  base16: '0123456789abcdef',
  base10: '0123456789',
  base8:  '01234567',
  base5:  '01234',
  base2:  '01',
};

module.exports = Telepathy;

},{"bigdecimal":1,"crypto-js":10}],37:[function(require,module,exports){
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.5.2';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, length = obj.length; i < length; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      var keys = _.keys(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed > result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array, using the modern version of the 
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // Sample **n** random values from an array.
  // If **n** is not specified, returns a single random element from the array.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (arguments.length < 2 || guard) {
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, value, context) {
      var result = {};
      var iterator = value == null ? _.identity : lookupIterator(value);
      each(obj, function(value, index) {
        var key = iterator.call(context, value, index, obj);
        behavior(result, key, value);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, key, value) {
    (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, key, value) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, key) {
    _.has(result, key) ? result[key]++ : result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n == null) || guard ? array[0] : slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n == null) || guard) {
      return array[array.length - 1];
    } else {
      return slice.call(array, Math.max(array.length - n, 0));
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    each(input, function(value) {
      if (_.isArray(value) || _.isArguments(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var length = _.max(_.pluck(arguments, "length").concat(0));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, '' + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, length + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(length);

    while(idx < length) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) throw new Error("bindAll must be passed function names");
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function() {
        var last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = new Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = new Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === void 0) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                             _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(Math.max(0, n));
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);

},{}],38:[function(require,module,exports){
/* Zepto v1.0 - polyfill zepto detect event ajax form fx - zeptojs.com/license */

;(function(undefined){
  if (String.prototype.trim === undefined) // fix for iOS 3.2
    String.prototype.trim = function(){ return this.replace(/^\s+|\s+$/g, '') }

  // For iOS 3.x
  // from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
  if (Array.prototype.reduce === undefined)
    Array.prototype.reduce = function(fun){
      if(this === void 0 || this === null) throw new TypeError()
      var t = Object(this), len = t.length >>> 0, k = 0, accumulator
      if(typeof fun != 'function') throw new TypeError()
      if(len == 0 && arguments.length == 1) throw new TypeError()

      if(arguments.length >= 2)
       accumulator = arguments[1]
      else
        do{
          if(k in t){
            accumulator = t[k++]
            break
          }
          if(++k >= len) throw new TypeError()
        } while (true)

      while (k < len){
        if(k in t) accumulator = fun.call(undefined, accumulator, t[k], k, t)
        k++
      }
      return accumulator
    }

})()





var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    getComputedStyle = document.defaultView.getComputedStyle,
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    classSelectorRE = /^\.([\w-]+)$/,
    idSelectorRE = /^#([\w-]*)$/,
    tagSelectorRE = /^[\w-]+$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div')

  zepto.matches = function(element, selector) {
    if (!element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype
  }
  function isArray(value) { return value instanceof Array }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
    if (!(name in containers)) name = '*'

    var nodes, dom, container = containers[name]
    container.innerHTML = '' + html
    dom = $.each(slice.call(container.childNodes), function(){
      container.removeChild(this)
    })
    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }
    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, juts return it
    else if (zepto.isZ(selector)) return selector
    else {
      var dom
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes. If a plain object is given, duplicate it.
      else if (isObject(selector))
        dom = [isPlainObject(selector) ? $.extend({}, selector) : selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector)
    }
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found
    return (isDocument(element) && idSelectorRE.test(selector)) ?
      ( (found = element.getElementById(RegExp.$1)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) :
        tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) :
        element.querySelectorAll(selector)
      )
  }

  function filtered(nodes, selector) {
    return selector === undefined ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = function(parent, node) {
    return parent !== node && parent.contains(node)
  }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className,
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) { return str.trim() }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      if (readyRE.test(document.readyState)) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = null)
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return html === undefined ?
        (this.length > 0 ? this[0].innerHTML : null) :
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        })
    },
    text: function(text){
      return text === undefined ?
        (this.length > 0 ? this[0].textContent : null) :
        this.each(function(){ this.textContent = text })
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && value === undefined) ?
        (this.length == 0 || this[0].nodeType !== 1 ? undefined :
          (name == 'value' && this[0].nodeName == 'INPUT') ? this.val() :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && setAttribute(this, name) })
    },
    prop: function(name, value){
      return (value === undefined) ?
        (this[0] && this[0][name]) :
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        })
    },
    data: function(name, value){
      var data = this.attr('data-' + dasherize(name), value)
      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return (value === undefined) ?
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(o){ return this.selected }).pluck('value') :
           this[0].value)
        ) :
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (this.length==0) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2 && typeof property == 'string')
        return this[0] && (this[0].style[camelize(property)] || getComputedStyle(this[0], '').getPropertyValue(property))

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      return this.each(function(idx){
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(){
      if (!this.length) return
      return ('scrollTop' in this[0]) ? this[0].scrollTop : this[0].scrollY
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    $.fn[dimension] = function(value){
      var offset, el = this[0],
        Dimension = dimension.replace(/./, function(m){ return m[0].toUpperCase() })
      if (value === undefined) return isWindow(el) ? el['inner' + Dimension] :
        isDocument(el) ? el.documentElement['offset' + Dimension] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var key in node.childNodes) traverseNode(node.childNodes[key], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          traverseNode(parent.insertBefore(node, target), function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

// @@ original loader
// window.Zepto = Zepto
// '$' in window || (window.$ = Zepto)
// @@ modified by jiyinyiyong
module.exports.$ = Zepto;
module.exports.Zepto = Zepto;
// @@ modifications end


;(function($){
  function detect(ua){
    var os = this.os = {}, browser = this.browser = {},
      webkit = ua.match(/WebKit\/([\d.]+)/),
      android = ua.match(/(Android)\s+([\d.]+)/),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
      bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
      rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
      playbook = ua.match(/PlayBook/),
      chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
      firefox = ua.match(/Firefox\/([\d.]+)/)

    // Todo: clean this up with a better OS/browser seperation:
    // - discern (more) between multiple browsers on android
    // - decide if kindle fire in silk mode is android or not
    // - Firefox on Android doesn't specify the Android version
    // - possibly devide in os, device and browser hashes

    if (browser.webkit = !!webkit) browser.version = webkit[1]

    if (android) os.android = true, os.version = android[2]
    if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
    if (webos) os.webos = true, os.version = webos[2]
    if (touchpad) os.touchpad = true
    if (blackberry) os.blackberry = true, os.version = blackberry[2]
    if (bb10) os.bb10 = true, os.version = bb10[2]
    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
    if (playbook) browser.playbook = true
    if (kindle) os.kindle = true, os.version = kindle[1]
    if (silk) browser.silk = true, browser.version = silk[1]
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
    if (chrome) browser.chrome = true, browser.version = chrome[1]
    if (firefox) browser.firefox = true, browser.version = firefox[1]

    os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
    os.phone  = !!(!os.tablet && (android || iphone || webos || blackberry || bb10 ||
      (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
  }

  detect.call($, navigator.userAgent)
  // make available to unit tests
  $.__detect = detect

})(Zepto)





;(function($){
  var $$ = $.zepto.qsa, handlers = {}, _zid = 1, specialEvents={},
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eachEvent(events, fn, iterator){
    if ($.type(events) != "string") $.each(events, iterator)
    else events.split(/\s/).forEach(function(type){ iterator(type, fn) })
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (handler.e == 'focus' || handler.e == 'blur') ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || type
  }

  function add(element, events, fn, selector, getDelegate, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    eachEvent(events, fn, function(event, fn){
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = getDelegate && getDelegate(fn, event)
      var callback  = handler.del || fn
      handler.proxy = function (e) {
        var result = callback.apply(element, [e].concat(e.data))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    eachEvent(events || '', fn, function(event, fn){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    if ($.isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (typeof context == 'string') {
      return $.proxy(fn[context], fn)
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, callback){
    return this.each(function(){
      add(this, event, callback)
    })
  }
  $.fn.unbind = function(event, callback){
    return this.each(function(){
      remove(this, event, callback)
    })
  }
  $.fn.one = function(event, callback){
    return this.each(function(i, element){
      add(this, event, callback, null, function(fn, type){
        return function(){
          var result = fn.apply(element, arguments)
          remove(element, type, fn)
          return result
        }
      })
    })
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }
  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    $.each(eventMethods, function(name, predicate) {
      proxy[name] = function(){
        this[predicate] = returnTrue
        return event[name].apply(event, arguments)
      }
      proxy[predicate] = returnFalse
    })
    return proxy
  }

  // emulates the 'defaultPrevented' property for browsers that have none
  function fix(event) {
    if (!('defaultPrevented' in event)) {
      event.defaultPrevented = false
      var prevent = event.preventDefault
      event.preventDefault = function() {
        this.defaultPrevented = true
        prevent.call(this)
      }
    }
  }

  $.fn.delegate = function(selector, event, callback){
    return this.each(function(i, element){
      add(element, event, callback, selector, function(fn){
        return function(e){
          var evt, match = $(e.target).closest(selector, element).get(0)
          if (match) {
            evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)))
          }
        }
      })
    })
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.bind(event, selector || callback) : this.delegate(selector, event, callback)
  }
  $.fn.off = function(event, selector, callback){
    return !selector || $.isFunction(selector) ?
      this.unbind(event, selector || callback) : this.undelegate(selector, event, callback)
  }

  $.fn.trigger = function(event, data){
    if (typeof event == 'string' || $.isPlainObject(event)) event = $.Event(event)
    fix(event)
    event.data = data
    return this.each(function(){
      // items in the collection might not be DOM elements
      // (todo: possibly support events on plain old objects)
      if('dispatchEvent' in this) this.dispatchEvent(event)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, data){
    var e, result
    this.each(function(i, element){
      e = createProxy(typeof event == 'string' ? $.Event(event) : event)
      e.data = data
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return callback ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else this.each(function(){
        try { this[name]() }
        catch(e) {}
      })
      return this
    }
  })

  $.Event = function(type, props) {
    if (typeof type != 'string') props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null)
    event.isDefaultPrevented = function(){ return this.defaultPrevented }
    return event
  }

})(Zepto)





;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.defaultPrevented
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options){
    if (!('type' in options)) return $.ajax(options)

    var callbackName = 'jsonp' + (++jsonpID),
      script = document.createElement('script'),
      cleanup = function() {
        clearTimeout(abortTimeout)
        $(script).remove()
        delete window[callbackName]
      },
      abort = function(type){
        cleanup()
        // In case of manual abort or timeout, keep an empty function as callback
        // so that the SCRIPT tag that eventually loads won't result in an error.
        if (!type || type == 'timeout') window[callbackName] = empty
        ajaxError(null, type || 'abort', xhr, options)
      },
      xhr = { abort: abort }, abortTimeout

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return false
    }

    window[callbackName] = function(data){
      cleanup()
      ajaxSuccess(data, xhr, options)
    }

    script.onerror = function() { abort('error') }

    script.src = options.url.replace(/=\?/, '=' + callbackName)
    $('head').append(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    accepts: {
      script: 'text/javascript, application/javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true,
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data)
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {})
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)
    if (settings.cache === false) settings.url = appendQuery(settings.url, '_=' + Date.now())

    var dataType = settings.dataType, hasPlaceholder = /=\?/.test(settings.url)
    if (dataType == 'jsonp' || hasPlaceholder) {
      if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?')
      return $.ajaxJSONP(settings)
    }

    var mime = settings.accepts[dataType],
        baseHeaders = { },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(), abortTimeout

    if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest'
    if (mime) {
      baseHeaders['Accept'] = mime
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded')
    settings.headers = $.extend(baseHeaders, settings.headers || {})

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty;
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings)
          else ajaxSuccess(result, xhr, settings)
        } else {
          ajaxError(null, xhr.status ? 'error' : 'abort', xhr, settings)
        }
      }
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async)

    for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name])

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      return false
    }

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    var hasData = !$.isFunction(data)
    return {
      url:      url,
      data:     hasData  ? data : undefined,
      success:  !hasData ? data : $.isFunction(success) ? success : undefined,
      dataType: hasData  ? dataType || success : success
    }
  }

  $.get = function(url, data, success, dataType){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(url, data, success, dataType){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(url, data, success){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)





;(function ($) {
  $.fn.serializeArray = function () {
    var result = [], el
    $( Array.prototype.slice.call(this.get(0).elements) ).each(function () {
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function () {
    var result = []
    this.serializeArray().forEach(function (elm) {
      result.push( encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value) )
    })
    return result.join('&')
  }

  $.fn.submit = function (callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.defaultPrevented) this.get(0).submit()
    }
    return this
  }

})(Zepto)





;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming,
    animationName, animationDuration, animationTiming,
    cssReset = {}

  function dasherize(str) { return downcase(str.replace(/([a-z])([A-Z])/, '$1-$2')) }
  function downcase(str) { return str.toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : downcase(name) }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + downcase(vendor) + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback){
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    return this.anim(properties, duration, ease, callback)
  }

  $.fn.anim = function(properties, duration, ease, callback){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd

    if (duration === undefined) duration = 0.4
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      }
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0) this.bind(endEvent, wrappedCallback)

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

},{}],39:[function(require,module,exports){
(function() {
  'use strict';

  var $ = require('zepto-browserify').Zepto;

  // Disable scroll if iOS standalone is happening
  if (window.navigator.standalone) {
    $(document).on('touchmove', function(event) {
      if ($('.modal').hasClass('open'))
        return;

      event.preventDefault();
      return false;
    });
  }
})();

},{"zepto-browserify":38}],40:[function(require,module,exports){
(function() {
  'use strict';

  var $ = require('zepto-browserify').Zepto;

  $('.modal-close').on('click', function() {
    $(this).parents('.modal').removeClass('open');
  });
})();

},{"zepto-browserify":38}],41:[function(require,module,exports){
(function() {
  'use strict';

  var $ = require('zepto-browserify').Zepto;
  var UI = require('./ui.js');

  $('#open-settings').on('click', function(event) {
    event.preventDefault();
    $('#settings').addClass('open');
  });

  $('#settings input, #settings select').each(function() {
    var $this = $(this);

    $this.on('change', function() {
      if (!$this.prop('name'))
        return;

      UI.settings[$this.prop('name')] = $this.val();
    });
  });

  $('.save-settings').on('click', function() {
    UI.save();
    UI.load();
  });

  $('.reset-settings').on('click', function() {
    UI.load();
  });

  if (!UI.settings['shared-secret'].length)
    $('#settings').addClass('open');
})();

},{"./ui.js":43,"zepto-browserify":38}],42:[function(require,module,exports){
(function() {
  'use strict';

  var $ = require('zepto-browserify').Zepto;
  var _ = require('underscore')._;
  var Telepathy = require('telepathy');
  var telepathy = new Telepathy();
  var UI = require('./ui.js');

  require('./modals');
  require('./settings');
  require('./ios-standalone');

  $('#domain').on('keydown', _.debounce(function() {
    var domain = this.value.replace(/^\s+|\s+$/g, '');

    if (!domain.length) {
      $('#password').val('');
      return;
    }

    $('#password').val(telepathy.password({
      domain: domain,
      algorithm: UI.settings['algorithm'],
      user: UI.settings['default-username'],
      secret: UI.settings['shared-secret'],
      length: (+$('#length').val()) || UI.settings['default-length'],
      index: (+$('#index').val()) || UI.settings['default-index'],

      alphabet:
        $('input[name=lax]:checked').val() == 'yes' ?
          Telepathy.alphabet.base62 :
          Telepathy.alphabet.base94,
    }));
  }));

  $('#password').on('focus click', _.debounce(function() {
    this.select();
  }));

  $('.modal-close, input[name=lax], #index, #length').on('click change keydown', function() {
    $('#domain').trigger('keydown');
  });

  $(window).on('blur focus keydown load', _.debounce(function(event) {
    // do nothing if we have an open modal
    if ($('.modal.open').length)
      return;

    // escape key
    if (event.type == 'keydown' && event.keyCode != 27)
      return;

    $('#domain, #password').val('');
    $('#domain').focus();
  }));
})();

},{"./ios-standalone":39,"./modals":40,"./settings":41,"./ui.js":43,"telepathy":36,"underscore":37,"zepto-browserify":38}],43:[function(require,module,exports){
(function() {
  'use strict';

  var $ = require('zepto-browserify').Zepto;
  var _ = require('underscore')._;

  // Populate values for index/length select boxes
  var i;
  for (i=4; i<=100; i+=(i<30?1:(i<50?5:10)))
    $('#length,#default-length').append('<option value="' + i +'">' + i + '</option>');

  for (i=0; i<=50; i++)
    $('#index,#default-index').append('<option value="' + i + '">' + i + '</option>');

  var UI = {
    settings: {},

    _settings: {
      'default-username': '',
      'shared-secret': '',
      'save-secret': 'no',
      'algorithm': 'SHA256',
      'default-length': 10,
      'default-index': 0,
    },

    save: function() {
      var omit = this.settings['save-secret'] == 'no' ? 'shared-secret' : '';
      var settings = _.omit(this.settings, omit);

      localStorage.telepathyWeb = JSON.stringify({
        settings: settings
      });

      this._settings = this.settings;
    },

    load: function() {
      var data = JSON.parse(localStorage.telepathyWeb || '{}');
      var that = this;

      if (!data) return;

      _.each(_.keys(that._settings), function(key) {
        if (data.settings && _.has(data.settings, key))
          that._settings[key] = data.settings[key];

        that.settings[key] = that._settings[key];

        var $option = $('#settings [name=' + key + ']');

        switch ($option.prop('type')) {
          case 'radio':
            $option.each(function() {
              var $this = $(this);
              $this.prop('checked', $this.val() == that.settings[key]);
            });
            break;

          default:
            $option.val(that.settings[key]);
            break;
        }
      });

      $('#index').val(this.settings['default-index']);
      $('#length').val(this.settings['default-length']);
    },
  };

  UI.load();

  module.exports = UI;
})();

},{"underscore":37,"zepto-browserify":38}]},{},[42]);
