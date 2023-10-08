module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1673114263613, function(require, module, exports) {
!function(b,f){for(var e in f)b[e]=f[e]}(exports,function(b){var f={};function e(c){if(f[c])return f[c].exports;var t=f[c]={i:c,l:!1,exports:{}};return b[c].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=b,e.c=f,e.d=function(b,f,c){e.o(b,f)||Object.defineProperty(b,f,{enumerable:!0,get:c})},e.r=function(b){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},e.t=function(b,f){if(1&f&&(b=e(b)),8&f)return b;if(4&f&&"object"==typeof b&&b&&b.__esModule)return b;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:b}),2&f&&"string"!=typeof b)for(var t in b)e.d(c,t,function(f){return b[f]}.bind(null,t));return c},e.n=function(b){var f=b&&b.__esModule?function(){return b.default}:function(){return b};return e.d(f,"a",f),f},e.o=function(b,f){return Object.prototype.hasOwnProperty.call(b,f)},e.p="",e(e.s=0)}([function(b,f,e){e.r(f),e.d(f,"calendar",(function(){return c}));var c={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,92821,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,37600,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],festival:{"1-1":{title:"元旦节"},"2-14":{title:"情人节"},"5-1":{title:"劳动节"},"5-4":{title:"青年节"},"6-1":{title:"儿童节"},"9-10":{title:"教师节"},"10-1":{title:"国庆节"},"12-25":{title:"圣诞节"},"3-8":{title:"妇女节"},"3-12":{title:"植树节"},"4-1":{title:"愚人节"},"5-12":{title:"护士节"},"7-1":{title:"建党节"},"8-1":{title:"建军节"},"12-24":{title:"平安夜"}},lfestival:{"12-30":{title:"除夕"},"1-1":{title:"春节"},"1-15":{title:"元宵节"},"5-5":{title:"端午节"},"8-15":{title:"中秋节"},"9-9":{title:"重阳节"}},getFestival(){return this.festival},getLunarFestival(){return this.lfestival},setFestival(b={}){this.festival=b},setLunarFestival(b={}){this.lfestival=b},solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lYearDays:function(b){var f,e=348;for(f=32768;f>8;f>>=1)e+=this.lunarInfo[b-1900]&f?1:0;return e+this.leapDays(b)},leapMonth:function(b){return 15&this.lunarInfo[b-1900]},leapDays:function(b){return this.leapMonth(b)?65536&this.lunarInfo[b-1900]?30:29:0},monthDays:function(b,f){return f>12||f<1?-1:this.lunarInfo[b-1900]&65536>>f?30:29},solarDays:function(b,f){if(f>12||f<1)return-1;var e=f-1;return 1==e?b%4==0&&b%100!=0||b%400==0?29:28:this.solarMonth[e]},toGanZhiYear:function(b){var f=(b-3)%10,e=(b-3)%12;return 0==f&&(f=10),0==e&&(e=12),this.Gan[f-1]+this.Zhi[e-1]},toAstro:function(b,f){return"魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2*b-(f<[20,19,21,21,21,22,23,23,23,23,22,22][b-1]?2:0),2)+"座"},toGanZhi:function(b){return this.Gan[b%10]+this.Zhi[b%12]},getTerm:function(b,f){if(b<1900||b>2100)return-1;if(f<1||f>24)return-1;var e=this.sTermInfo[b-1900],c=[parseInt("0x"+e.substr(0,5)).toString(),parseInt("0x"+e.substr(5,5)).toString(),parseInt("0x"+e.substr(10,5)).toString(),parseInt("0x"+e.substr(15,5)).toString(),parseInt("0x"+e.substr(20,5)).toString(),parseInt("0x"+e.substr(25,5)).toString()],t=[c[0].substr(0,1),c[0].substr(1,2),c[0].substr(3,1),c[0].substr(4,2),c[1].substr(0,1),c[1].substr(1,2),c[1].substr(3,1),c[1].substr(4,2),c[2].substr(0,1),c[2].substr(1,2),c[2].substr(3,1),c[2].substr(4,2),c[3].substr(0,1),c[3].substr(1,2),c[3].substr(3,1),c[3].substr(4,2),c[4].substr(0,1),c[4].substr(1,2),c[4].substr(3,1),c[4].substr(4,2),c[5].substr(0,1),c[5].substr(1,2),c[5].substr(3,1),c[5].substr(4,2)];return parseInt(t[f-1])},toChinaMonth:function(b){if(b>12||b<1)return-1;var f=this.nStr3[b-1];return f+="月"},toChinaDay:function(b){var f;switch(b){case 10:f="初十";break;case 20:f="二十";break;case 30:f="三十";break;default:f=this.nStr2[Math.floor(b/10)],f+=this.nStr1[b%10]}return f},getAnimal:function(b){return this.Animals[(b-4)%12]},solar2lunar:function(b,f,e){if(b=parseInt(b),f=parseInt(f),e=parseInt(e),b<1900||b>2100)return-1;if(1900==b&&1==f&&e<31)return-1;if(b)c=new Date(b,parseInt(f)-1,e);else var c=new Date;var t,r=0,a=(b=c.getFullYear(),f=c.getMonth()+1,e=c.getDate(),(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate())-Date.UTC(1900,0,31))/864e5);for(t=1900;t<2101&&a>0;t++)a-=r=this.lYearDays(t);a<0&&(a+=r,t--);var n=new Date,s=!1;n.getFullYear()==b&&n.getMonth()+1==f&&n.getDate()==e&&(s=!0);var i=c.getDay(),d=this.nStr1[i];0==i&&(i=7);var u=t,l=this.leapMonth(t),o=!1;for(t=1;t<13&&a>0;t++)l>0&&t==l+1&&0==o?(--t,o=!0,r=this.leapDays(u)):r=this.monthDays(u,t),1==o&&t==l+1&&(o=!1),a-=r;0==a&&l>0&&t==l+1&&(o?o=!1:(o=!0,--t)),a<0&&(a+=r,--t);var h=t,p=a+1,v=f-1,g=this.toGanZhiYear(u),y=this.getTerm(b,2*f-1),D=this.getTerm(b,2*f),m=this.toGanZhi(12*(b-1900)+f+11);e>=y&&(m=this.toGanZhi(12*(b-1900)+f+12));var I=!1,M=null;y==e&&(I=!0,M=this.solarTerm[2*f-2]),D==e&&(I=!0,M=this.solarTerm[2*f-1]);var T=Date.UTC(b,v,1,0,0,0,0)/864e5+25567+10,S=this.toGanZhi(T+e-1),C=this.toAstro(f,e),x=b+"-"+f+"-"+e,Y=u+"-"+h+"-"+p,F=this.festival,G=this.lfestival,Z=f+"-"+e,j=h+"-"+p;return{date:x,lunarDate:Y,festival:F[Z]?F[Z].title:null,lunarFestival:G[j]?G[j].title:null,lYear:u,lMonth:h,lDay:p,Animal:this.getAnimal(u),IMonthCn:(o?"闰":"")+this.toChinaMonth(h),IDayCn:this.toChinaDay(p),cYear:b,cMonth:f,cDay:e,gzYear:g,gzMonth:m,gzDay:S,isToday:s,isLeap:o,nWeek:i,ncWeek:"星期"+d,isTerm:I,Term:M,astro:C}},lunar2solar:function(b,f,e,c){b=parseInt(b),f=parseInt(f),e=parseInt(e);c=!!c;var t=this.leapMonth(b);this.leapDays(b);if(c&&t!=f)return-1;if(2100==b&&12==f&&e>1||1900==b&&1==f&&e<31)return-1;var r=this.monthDays(b,f),a=r;if(c&&(a=this.leapDays(b,f)),b<1900||b>2100||e>a)return-1;for(var n=0,s=1900;s<b;s++)n+=this.lYearDays(s);var i=0,d=!1;for(s=1;s<f;s++)i=this.leapMonth(b),d||i<=s&&i>0&&(n+=this.leapDays(b),d=!0),n+=this.monthDays(b,s);c&&(n+=r);var u=Date.UTC(1900,1,30,0,0,0),l=new Date(864e5*(n+e-31)+u),o=l.getUTCFullYear(),h=l.getUTCMonth()+1,p=l.getUTCDate();return this.solar2lunar(o,h,p)}}}]).calendar);
}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1673114263613);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map