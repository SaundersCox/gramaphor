import{m as Ct}from"./chunk-4YFRIEAZ.js";import{a as Xt}from"./chunk-N3DO6V3P.js";import{Aa as wt,Ba as _t,Ca as Dt,Da as Fe,Ea as We,Fa as St,O as nt,P as st,T as at,U as ot,V as ct,W as lt,X as ut,Y as dt,Z as ft,_ as ne,a as it,fa as ht,ga as kt,h as l,ha as mt,ia as yt,j as ke,ja as me,ka as gt,qa as pt,ra as Me,sa as Ie,ta as Ae,ua as Le,va as Ye,wa as vt,xa as bt,ya as Tt,za as xt}from"./chunk-UKJSOLR5.js";import"./chunk-E6CJUGOO.js";import{c as Ee,f as de}from"./chunk-7IQ7MVDA.js";var Et=Ee((Ve,Oe)=>{"use strict";(function(e,t){typeof Ve=="object"&&typeof Oe<"u"?Oe.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_isoWeek=t()})(Ve,function(){"use strict";var e="day";return function(t,s,a){var r=function(D){return D.add(4-D.isoWeekday(),e)},f=s.prototype;f.isoWeekYear=function(){return r(this).year()},f.isoWeek=function(D){if(!this.$utils().u(D))return this.add(7*(D-this.isoWeek()),e);var _,L,S,W,G=r(this),z=(_=this.isoWeekYear(),L=this.$u,S=(L?a.utc:a)().year(_).startOf("year"),W=4-S.isoWeekday(),S.isoWeekday()>4&&(W+=7),S.add(W,e));return G.diff(z,"week")+1},f.isoWeekday=function(D){return this.$utils().u(D)?this.day()||7:this.day(this.day()%7?D:D-7)};var k=f.startOf;f.startOf=function(D,_){var L=this.$utils(),S=!!L.u(_)||_;return L.p(D)==="isoweek"?S?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):k.bind(this)(D,_)}}})});var Mt=Ee((Pe,ze)=>{"use strict";(function(e,t){typeof Pe=="object"&&typeof ze<"u"?ze.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_customParseFormat=t()})(Pe,function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,r=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,k={},D=function(g){return(g=+g)+(g>68?1900:2e3)},_=function(g){return function(y){this[g]=+y}},L=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(y){if(!y||y==="Z")return 0;var M=y.match(/([+-]|\d\d)/g),A=60*M[1]+(+M[2]||0);return A===0?0:M[0]==="+"?-A:A}(g)}],S=function(g){var y=k[g];return y&&(y.indexOf?y:y.s.concat(y.f))},W=function(g,y){var M,A=k.meridiem;if(A){for(var R=1;R<=24;R+=1)if(g.indexOf(A(R,0,y))>-1){M=R>12;break}}else M=g===(y?"pm":"PM");return M},G={A:[f,function(g){this.afternoon=W(g,!1)}],a:[f,function(g){this.afternoon=W(g,!0)}],Q:[s,function(g){this.month=3*(g-1)+1}],S:[s,function(g){this.milliseconds=100*+g}],SS:[a,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[r,_("seconds")],ss:[r,_("seconds")],m:[r,_("minutes")],mm:[r,_("minutes")],H:[r,_("hours")],h:[r,_("hours")],HH:[r,_("hours")],hh:[r,_("hours")],D:[r,_("day")],DD:[a,_("day")],Do:[f,function(g){var y=k.ordinal,M=g.match(/\d+/);if(this.day=M[0],y)for(var A=1;A<=31;A+=1)y(A).replace(/\[|\]/g,"")===g&&(this.day=A)}],w:[r,_("week")],ww:[a,_("week")],M:[r,_("month")],MM:[a,_("month")],MMM:[f,function(g){var y=S("months"),M=(S("monthsShort")||y.map(function(A){return A.slice(0,3)})).indexOf(g)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[f,function(g){var y=S("months").indexOf(g)+1;if(y<1)throw new Error;this.month=y%12||y}],Y:[/[+-]?\d+/,_("year")],YY:[a,function(g){this.year=D(g)}],YYYY:[/\d{4}/,_("year")],Z:L,ZZ:L};function z(g){var y,M;y=g,M=k&&k.formats;for(var A=(g=y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(p,x,b){var v=b&&b.toUpperCase();return x||M[b]||e[b]||M[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(m,w,o){return w||o.slice(1)})})).match(t),R=A.length,N=0;N<R;N+=1){var Z=A[N],H=G[Z],B=H&&H[0],j=H&&H[1];A[N]=j?{regex:B,parser:j}:Z.replace(/^\[|\]$/g,"")}return function(p){for(var x={},b=0,v=0;b<R;b+=1){var m=A[b];if(typeof m=="string")v+=m.length;else{var w=m.regex,o=m.parser,u=p.slice(v),h=w.exec(u)[0];o.call(x,h),p=p.replace(h,"")}}return function(d){var T=d.afternoon;if(T!==void 0){var i=d.hours;T?i<12&&(d.hours+=12):i===12&&(d.hours=0),delete d.afternoon}}(x),x}}return function(g,y,M){M.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(D=g.parseTwoDigitYear);var A=y.prototype,R=A.parse;A.parse=function(N){var Z=N.date,H=N.utc,B=N.args;this.$u=H;var j=B[1];if(typeof j=="string"){var p=B[2]===!0,x=B[3]===!0,b=p||x,v=B[2];x&&(v=B[2]),k=this.$locale(),!p&&v&&(k=M.Ls[v]),this.$d=function(u,h,d,T){try{if(["x","X"].indexOf(h)>-1)return new Date((h==="X"?1e3:1)*u);var i=z(h)(u),c=i.year,n=i.month,I=i.day,E=i.hours,C=i.minutes,P=i.seconds,Y=i.milliseconds,ae=i.zone,F=i.week,Q=new Date,te=I||(c||n?1:Q.getDate()),re=c||Q.getFullYear(),oe=0;c&&!n||(oe=n>0?n-1:Q.getMonth());var ce,le=E||0,V=C||0,ie=P||0,$=Y||0;return ae?new Date(Date.UTC(re,oe,te,le,V,ie,$+60*ae.offset*1e3)):d?new Date(Date.UTC(re,oe,te,le,V,ie,$)):(ce=new Date(re,oe,te,le,V,ie,$),F&&(ce=T(ce).week(F).toDate()),ce)}catch{return new Date("")}}(Z,j,H,M),this.init(),v&&v!==!0&&(this.$L=this.locale(v).$L),b&&Z!=this.format(j)&&(this.$d=new Date("")),k={}}else if(j instanceof Array)for(var m=j.length,w=1;w<=m;w+=1){B[1]=j[w-1];var o=M.apply(this,B);if(o.isValid()){this.$d=o.$d,this.$L=o.$L,this.init();break}w===m&&(this.$d=new Date(""))}else R.call(this,N)}}})});var It=Ee((Re,Ne)=>{"use strict";(function(e,t){typeof Re=="object"&&typeof Ne<"u"?Ne.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self).dayjs_plugin_advancedFormat=t()})(Re,function(){"use strict";return function(e,t){var s=t.prototype,a=s.format;s.format=function(r){var f=this,k=this.$locale();if(!this.isValid())return a.bind(this)(r);var D=this.$utils(),_=(r||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(L){switch(L){case"Q":return Math.ceil((f.$M+1)/3);case"Do":return k.ordinal(f.$D);case"gggg":return f.weekYear();case"GGGG":return f.isoWeekYear();case"wo":return k.ordinal(f.week(),"W");case"w":case"ww":return D.s(f.week(),L==="w"?1:2,"0");case"W":case"WW":return D.s(f.isoWeek(),L==="W"?1:2,"0");case"k":case"kk":return D.s(String(f.$H===0?24:f.$H),L==="k"?1:2,"0");case"X":return Math.floor(f.$d.getTime()/1e3);case"x":return f.$d.getTime();case"z":return"["+f.offsetName()+"]";case"zzz":return"["+f.offsetName("long")+"]";default:return L}});return a.bind(this)(_)}}})});var Ft=de(Xt(),1),U=de(it(),1),Wt=de(Et(),1),Vt=de(Mt(),1),Ot=de(It(),1),we=de(it(),1);var Be=function(){var e=l(function(w,o,u,h){for(u=u||{},h=w.length;h--;u[w[h]]=o);return u},"o"),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],s=[1,26],a=[1,27],r=[1,28],f=[1,29],k=[1,30],D=[1,31],_=[1,32],L=[1,33],S=[1,34],W=[1,9],G=[1,10],z=[1,11],g=[1,12],y=[1,13],M=[1,14],A=[1,15],R=[1,16],N=[1,19],Z=[1,20],H=[1,21],B=[1,22],j=[1,23],p=[1,25],x=[1,35],b={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(o,u,h,d,T,i,c){var n=i.length-1;switch(T){case 1:return i[n-1];case 2:this.$=[];break;case 3:i[n-1].push(i[n]),this.$=i[n-1];break;case 4:case 5:this.$=i[n];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(i[n].substr(11)),this.$=i[n].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=i[n].substr(18);break;case 19:d.TopAxis(),this.$=i[n].substr(8);break;case 20:d.setAxisFormat(i[n].substr(11)),this.$=i[n].substr(11);break;case 21:d.setTickInterval(i[n].substr(13)),this.$=i[n].substr(13);break;case 22:d.setExcludes(i[n].substr(9)),this.$=i[n].substr(9);break;case 23:d.setIncludes(i[n].substr(9)),this.$=i[n].substr(9);break;case 24:d.setTodayMarker(i[n].substr(12)),this.$=i[n].substr(12);break;case 27:d.setDiagramTitle(i[n].substr(6)),this.$=i[n].substr(6);break;case 28:this.$=i[n].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=i[n].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(i[n].substr(8)),this.$=i[n].substr(8);break;case 33:d.addTask(i[n-1],i[n]),this.$="task";break;case 34:this.$=i[n-1],d.setClickEvent(i[n-1],i[n],null);break;case 35:this.$=i[n-2],d.setClickEvent(i[n-2],i[n-1],i[n]);break;case 36:this.$=i[n-2],d.setClickEvent(i[n-2],i[n-1],null),d.setLink(i[n-2],i[n]);break;case 37:this.$=i[n-3],d.setClickEvent(i[n-3],i[n-2],i[n-1]),d.setLink(i[n-3],i[n]);break;case 38:this.$=i[n-2],d.setClickEvent(i[n-2],i[n],null),d.setLink(i[n-2],i[n-1]);break;case 39:this.$=i[n-3],d.setClickEvent(i[n-3],i[n-1],i[n]),d.setLink(i[n-3],i[n-2]);break;case 40:this.$=i[n-1],d.setLink(i[n-1],i[n]);break;case 41:case 47:this.$=i[n-1]+" "+i[n];break;case 42:case 43:case 45:this.$=i[n-2]+" "+i[n-1]+" "+i[n];break;case 44:case 46:this.$=i[n-3]+" "+i[n-2]+" "+i[n-1]+" "+i[n];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:a,14:r,15:f,16:k,17:D,18:_,19:18,20:L,21:S,22:W,23:G,24:z,25:g,26:y,27:M,28:A,29:R,30:N,31:Z,33:H,35:B,36:j,37:24,38:p,40:x},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:s,13:a,14:r,15:f,16:k,17:D,18:_,19:18,20:L,21:S,22:W,23:G,24:z,25:g,26:y,27:M,28:A,29:R,30:N,31:Z,33:H,35:B,36:j,37:24,38:p,40:x},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:l(function(o,u){if(u.recoverable)this.trace(o);else{var h=new Error(o);throw h.hash=u,h}},"parseError"),parse:l(function(o){var u=this,h=[0],d=[],T=[null],i=[],c=this.table,n="",I=0,E=0,C=0,P=2,Y=1,ae=i.slice.call(arguments,1),F=Object.create(this.lexer),Q={yy:{}};for(var te in this.yy)Object.prototype.hasOwnProperty.call(this.yy,te)&&(Q.yy[te]=this.yy[te]);F.setInput(o,Q.yy),Q.yy.lexer=F,Q.yy.parser=this,typeof F.yylloc>"u"&&(F.yylloc={});var re=F.yylloc;i.push(re);var oe=F.options&&F.options.ranges;typeof Q.yy.parseError=="function"?this.parseError=Q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ce(q){h.length=h.length-2*q,T.length=T.length-q,i.length=i.length-q}l(ce,"popStack");function le(){var q;return q=d.pop()||F.lex()||Y,typeof q!="number"&&(q instanceof Array&&(d=q,q=d.pop()),q=u.symbols_[q]||q),q}l(le,"lex");for(var V,ie,$,X,Vr,Se,ue={},ve,J,rt,be;;){if($=h[h.length-1],this.defaultActions[$]?X=this.defaultActions[$]:((V===null||typeof V>"u")&&(V=le()),X=c[$]&&c[$][V]),typeof X>"u"||!X.length||!X[0]){var Ce="";be=[];for(ve in c[$])this.terminals_[ve]&&ve>P&&be.push("'"+this.terminals_[ve]+"'");F.showPosition?Ce="Parse error on line "+(I+1)+`:
`+F.showPosition()+`
Expecting `+be.join(", ")+", got '"+(this.terminals_[V]||V)+"'":Ce="Parse error on line "+(I+1)+": Unexpected "+(V==Y?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(Ce,{text:F.match,token:this.terminals_[V]||V,line:F.yylineno,loc:re,expected:be})}if(X[0]instanceof Array&&X.length>1)throw new Error("Parse Error: multiple actions possible at state: "+$+", token: "+V);switch(X[0]){case 1:h.push(V),T.push(F.yytext),i.push(F.yylloc),h.push(X[1]),V=null,ie?(V=ie,ie=null):(E=F.yyleng,n=F.yytext,I=F.yylineno,re=F.yylloc,C>0&&C--);break;case 2:if(J=this.productions_[X[1]][1],ue.$=T[T.length-J],ue._$={first_line:i[i.length-(J||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(J||1)].first_column,last_column:i[i.length-1].last_column},oe&&(ue._$.range=[i[i.length-(J||1)].range[0],i[i.length-1].range[1]]),Se=this.performAction.apply(ue,[n,E,I,Q.yy,X[1],T,i].concat(ae)),typeof Se<"u")return Se;J&&(h=h.slice(0,-1*J*2),T=T.slice(0,-1*J),i=i.slice(0,-1*J)),h.push(this.productions_[X[1]][0]),T.push(ue.$),i.push(ue._$),rt=c[h[h.length-2]][h[h.length-1]],h.push(rt);break;case 3:return!0}}return!0},"parse")},v=function(){var w={EOF:1,parseError:l(function(u,h){if(this.yy.parser)this.yy.parser.parseError(u,h);else throw new Error(u)},"parseError"),setInput:l(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:l(function(o){var u=o.length,h=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var T=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===d.length?this.yylloc.first_column:0)+d[d.length-h.length].length-h[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[T[0],T[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(o){this.unput(this.match.slice(o))},"less"),pastInput:l(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:l(function(o,u){var h,d,T;if(this.options.backtrack_lexer&&(T={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(T.yylloc.range=this.yylloc.range.slice(0))),d=o[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],h=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var i in T)this[i]=T[i];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,h,d;this._more||(this.yytext="",this.match="");for(var T=this._currentRules(),i=0;i<T.length;i++)if(h=this._input.match(this.rules[T[i]]),h&&(!u||h[0].length>u[0].length)){if(u=h,d=i,this.options.backtrack_lexer){if(o=this.test_match(h,T[i]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,T[d]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var u=this.next();return u||this.lex()},"lex"),begin:l(function(u){this.conditionStack.push(u)},"begin"),popState:l(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:l(function(u){this.begin(u)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(u,h,d,T){var i=T;switch(d){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return w}();b.lexer=v;function m(){this.yy={}}return l(m,"Parser"),m.prototype=b,b.Parser=m,new m}();Be.parser=Be;var qt=Be;U.default.extend(Wt.default);U.default.extend(Vt.default);U.default.extend(Ot.default);var At={friday:5,saturday:6},K="",Xe="",qe=void 0,Ue="",ye=[],ge=[],Ze=new Map,Qe=[],_e=[],he="",$e="",Pt=["active","done","crit","milestone","vert"],Ke=[],pe=!1,Je=!1,et="sunday",De="saturday",je=0,Ut=l(function(){Qe=[],_e=[],he="",Ke=[],Te=0,He=void 0,xe=void 0,O=[],K="",Xe="",$e="",qe=void 0,Ue="",ye=[],ge=[],pe=!1,Je=!1,je=0,Ze=new Map,at(),et="sunday",De="saturday"},"clear"),Zt=l(function(e){Xe=e},"setAxisFormat"),Qt=l(function(){return Xe},"getAxisFormat"),$t=l(function(e){qe=e},"setTickInterval"),Kt=l(function(){return qe},"getTickInterval"),Jt=l(function(e){Ue=e},"setTodayMarker"),er=l(function(){return Ue},"getTodayMarker"),tr=l(function(e){K=e},"setDateFormat"),rr=l(function(){pe=!0},"enableInclusiveEndDates"),ir=l(function(){return pe},"endDatesAreInclusive"),nr=l(function(){Je=!0},"enableTopAxis"),sr=l(function(){return Je},"topAxisEnabled"),ar=l(function(e){$e=e},"setDisplayMode"),or=l(function(){return $e},"getDisplayMode"),cr=l(function(){return K},"getDateFormat"),lr=l(function(e){ye=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),ur=l(function(){return ye},"getIncludes"),dr=l(function(e){ge=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),fr=l(function(){return ge},"getExcludes"),hr=l(function(){return Ze},"getLinks"),kr=l(function(e){he=e,Qe.push(e)},"addSection"),mr=l(function(){return Qe},"getSections"),yr=l(function(){let e=Lt(),t=10,s=0;for(;!e&&s<t;)e=Lt(),s++;return _e=O,_e},"getTasks"),zt=l(function(e,t,s,a){return a.includes(e.format(t.trim()))?!1:s.includes("weekends")&&(e.isoWeekday()===At[De]||e.isoWeekday()===At[De]+1)||s.includes(e.format("dddd").toLowerCase())?!0:s.includes(e.format(t.trim()))},"isInvalidDate"),gr=l(function(e){et=e},"setWeekday"),pr=l(function(){return et},"getWeekday"),vr=l(function(e){De=e},"setWeekend"),Rt=l(function(e,t,s,a){if(!s.length||e.manualEndTime)return;let r;e.startTime instanceof Date?r=(0,U.default)(e.startTime):r=(0,U.default)(e.startTime,t,!0),r=r.add(1,"d");let f;e.endTime instanceof Date?f=(0,U.default)(e.endTime):f=(0,U.default)(e.endTime,t,!0);let[k,D]=br(r,f,t,s,a);e.endTime=k.toDate(),e.renderEndTime=D},"checkTaskDates"),br=l(function(e,t,s,a,r){let f=!1,k=null;for(;e<=t;)f||(k=t.toDate()),f=zt(e,s,a,r),f&&(t=t.add(1,"d")),e=e.add(1,"d");return[t,k]},"fixTaskDates"),Ge=l(function(e,t,s){s=s.trim();let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(r!==null){let k=null;for(let _ of r.groups.ids.split(" ")){let L=se(_);L!==void 0&&(!k||L.endTime>k.endTime)&&(k=L)}if(k)return k.endTime;let D=new Date;return D.setHours(0,0,0,0),D}let f=(0,U.default)(s,t.trim(),!0);if(f.isValid())return f.toDate();{ke.debug("Invalid date:"+s),ke.debug("With date format:"+t.trim());let k=new Date(s);if(k===void 0||isNaN(k.getTime())||k.getFullYear()<-1e4||k.getFullYear()>1e4)throw new Error("Invalid date:"+s);return k}},"getStartDate"),Nt=l(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t!==null?[Number.parseFloat(t[1]),t[2]]:[NaN,"ms"]},"parseDuration"),Bt=l(function(e,t,s,a=!1){s=s.trim();let f=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(f!==null){let S=null;for(let G of f.groups.ids.split(" ")){let z=se(G);z!==void 0&&(!S||z.startTime<S.startTime)&&(S=z)}if(S)return S.startTime;let W=new Date;return W.setHours(0,0,0,0),W}let k=(0,U.default)(s,t.trim(),!0);if(k.isValid())return a&&(k=k.add(1,"d")),k.toDate();let D=(0,U.default)(e),[_,L]=Nt(s);if(!Number.isNaN(_)){let S=D.add(_,L);S.isValid()&&(D=S)}return D.toDate()},"getEndDate"),Te=0,fe=l(function(e){return e===void 0?(Te=Te+1,"task"+Te):e},"parseId"),Tr=l(function(e,t){let s;t.substr(0,1)===":"?s=t.substr(1,t.length):s=t;let a=s.split(","),r={};tt(a,r,Pt);for(let k=0;k<a.length;k++)a[k]=a[k].trim();let f="";switch(a.length){case 1:r.id=fe(),r.startTime=e.endTime,f=a[0];break;case 2:r.id=fe(),r.startTime=Ge(void 0,K,a[0]),f=a[1];break;case 3:r.id=fe(a[0]),r.startTime=Ge(void 0,K,a[1]),f=a[2];break;default:}return f&&(r.endTime=Bt(r.startTime,K,f,pe),r.manualEndTime=(0,U.default)(f,"YYYY-MM-DD",!0).isValid(),Rt(r,K,ge,ye)),r},"compileData"),xr=l(function(e,t){let s;t.substr(0,1)===":"?s=t.substr(1,t.length):s=t;let a=s.split(","),r={};tt(a,r,Pt);for(let f=0;f<a.length;f++)a[f]=a[f].trim();switch(a.length){case 1:r.id=fe(),r.startTime={type:"prevTaskEnd",id:e},r.endTime={data:a[0]};break;case 2:r.id=fe(),r.startTime={type:"getStartDate",startData:a[0]},r.endTime={data:a[1]};break;case 3:r.id=fe(a[0]),r.startTime={type:"getStartDate",startData:a[1]},r.endTime={data:a[2]};break;default:}return r},"parseData"),He,xe,O=[],jt={},wr=l(function(e,t){let s={section:he,type:he,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},a=xr(xe,t);s.raw.startTime=a.startTime,s.raw.endTime=a.endTime,s.id=a.id,s.prevTaskId=xe,s.active=a.active,s.done=a.done,s.crit=a.crit,s.milestone=a.milestone,s.vert=a.vert,s.order=je,je++;let r=O.push(s);xe=s.id,jt[s.id]=r-1},"addTask"),se=l(function(e){let t=jt[e];return O[t]},"findTaskById"),_r=l(function(e,t){let s={section:he,type:he,description:e,task:e,classes:[]},a=Tr(He,t);s.startTime=a.startTime,s.endTime=a.endTime,s.id=a.id,s.active=a.active,s.done=a.done,s.crit=a.crit,s.milestone=a.milestone,s.vert=a.vert,He=s,_e.push(s)},"addTaskOrg"),Lt=l(function(){let e=l(function(s){let a=O[s],r="";switch(O[s].raw.startTime.type){case"prevTaskEnd":{let f=se(a.prevTaskId);a.startTime=f.endTime;break}case"getStartDate":r=Ge(void 0,K,O[s].raw.startTime.startData),r&&(O[s].startTime=r);break}return O[s].startTime&&(O[s].endTime=Bt(O[s].startTime,K,O[s].raw.endTime.data,pe),O[s].endTime&&(O[s].processed=!0,O[s].manualEndTime=(0,U.default)(O[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Rt(O[s],K,ge,ye))),O[s].processed},"compileTask"),t=!0;for(let[s,a]of O.entries())e(s),t=t&&a.processed;return t},"compileTasks"),Dr=l(function(e,t){let s=t;ne().securityLevel!=="loose"&&(s=(0,Ft.sanitizeUrl)(t)),e.split(",").forEach(function(a){se(a)!==void 0&&(Ht(a,()=>{window.open(s,"_self")}),Ze.set(a,s))}),Gt(e,"clickable")},"setLink"),Gt=l(function(e,t){e.split(",").forEach(function(s){let a=se(s);a!==void 0&&a.classes.push(t)})},"setClass"),Sr=l(function(e,t,s){if(ne().securityLevel!=="loose"||t===void 0)return;let a=[];if(typeof s=="string"){a=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<a.length;f++){let k=a[f].trim();k.startsWith('"')&&k.endsWith('"')&&(k=k.substr(1,k.length-2)),a[f]=k}}a.length===0&&a.push(e),se(e)!==void 0&&Ht(e,()=>{Ct.runFunc(t,...a)})},"setClickFun"),Ht=l(function(e,t){Ke.push(function(){let s=document.querySelector(`[id="${e}"]`);s!==null&&s.addEventListener("click",function(){t()})},function(){let s=document.querySelector(`[id="${e}-text"]`);s!==null&&s.addEventListener("click",function(){t()})})},"pushFun"),Cr=l(function(e,t,s){e.split(",").forEach(function(a){Sr(a,t,s)}),Gt(e,"clickable")},"setClickEvent"),Er=l(function(e){Ke.forEach(function(t){t(e)})},"bindFunctions"),Mr={getConfig:l(()=>ne().gantt,"getConfig"),clear:Ut,setDateFormat:tr,getDateFormat:cr,enableInclusiveEndDates:rr,endDatesAreInclusive:ir,enableTopAxis:nr,topAxisEnabled:sr,setAxisFormat:Zt,getAxisFormat:Qt,setTickInterval:$t,getTickInterval:Kt,setTodayMarker:Jt,getTodayMarker:er,setAccTitle:ot,getAccTitle:ct,setDiagramTitle:dt,getDiagramTitle:ft,setDisplayMode:ar,getDisplayMode:or,setAccDescription:lt,getAccDescription:ut,addSection:kr,getSections:mr,getTasks:yr,addTask:wr,findTaskById:se,addTaskOrg:_r,setIncludes:lr,getIncludes:ur,setExcludes:dr,getExcludes:fr,setClickEvent:Cr,setLink:Dr,getLinks:hr,bindFunctions:Er,parseDuration:Nt,isInvalidDate:zt,setWeekday:gr,getWeekday:pr,setWeekend:vr};function tt(e,t,s){let a=!0;for(;a;)a=!1,s.forEach(function(r){let f="^\\s*"+r+"\\s*$",k=new RegExp(f);e[0].match(k)&&(t[r]=!0,e.shift(1),a=!0)})}l(tt,"getTaskTags");var Ir=l(function(){ke.debug("Something is calling, setConf, remove the call")},"setConf"),Yt={monday:bt,tuesday:Tt,wednesday:xt,thursday:wt,friday:_t,saturday:Dt,sunday:vt},Ar=l((e,t)=>{let s=[...e].map(()=>-1/0),a=[...e].sort((f,k)=>f.startTime-k.startTime||f.order-k.order),r=0;for(let f of a)for(let k=0;k<s.length;k++)if(f.startTime>=s[k]){s[k]=f.endTime,f.order=k+t,k>r&&(r=k);break}return r},"getMaxIntersections"),ee,Lr=l(function(e,t,s,a){let r=ne().gantt,f=ne().securityLevel,k;f==="sandbox"&&(k=me("#i"+t));let D=f==="sandbox"?me(k.nodes()[0].contentDocument.body):me("body"),_=f==="sandbox"?k.nodes()[0].contentDocument:document,L=_.getElementById(t);ee=L.parentElement.offsetWidth,ee===void 0&&(ee=1200),r.useWidth!==void 0&&(ee=r.useWidth);let S=a.db.getTasks(),W=[];for(let p of S)W.push(p.type);W=j(W);let G={},z=2*r.topPadding;if(a.db.getDisplayMode()==="compact"||r.displayMode==="compact"){let p={};for(let b of S)p[b.section]===void 0?p[b.section]=[b]:p[b.section].push(b);let x=0;for(let b of Object.keys(p)){let v=Ar(p[b],x)+1;x+=v,z+=v*(r.barHeight+r.barGap),G[b]=v}}else{z+=S.length*(r.barHeight+r.barGap);for(let p of W)G[p]=S.filter(x=>x.type===p).length}L.setAttribute("viewBox","0 0 "+ee+" "+z);let g=D.select(`[id="${t}"]`),y=St().domain([kt(S,function(p){return p.startTime}),ht(S,function(p){return p.endTime})]).rangeRound([0,ee-r.leftPadding-r.rightPadding]);function M(p,x){let b=p.startTime,v=x.startTime,m=0;return b>v?m=1:b<v&&(m=-1),m}l(M,"taskCompare"),S.sort(M),A(S,ee,z),st(g,z,ee,r.useMaxWidth),g.append("text").text(a.db.getDiagramTitle()).attr("x",ee/2).attr("y",r.titleTopMargin).attr("class","titleText");function A(p,x,b){let v=r.barHeight,m=v+r.barGap,w=r.topPadding,o=r.leftPadding,u=pt().domain([0,W.length]).range(["#00B9FA","#F95002"]).interpolate(gt);N(m,w,o,x,b,p,a.db.getExcludes(),a.db.getIncludes()),Z(o,w,x,b),R(p,m,w,o,v,u,x,b),H(m,w,o,v,u),B(o,w,x,b)}l(A,"makeGantt");function R(p,x,b,v,m,w,o){p.sort((c,n)=>c.vert===n.vert?0:c.vert?1:-1);let h=[...new Set(p.map(c=>c.order))].map(c=>p.find(n=>n.order===c));g.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(c,n){return n=c.order,n*x+b-2}).attr("width",function(){return o-r.rightPadding/2}).attr("height",x).attr("class",function(c){for(let[n,I]of W.entries())if(c.type===I)return"section section"+n%r.numberSectionStyles;return"section section0"}).enter();let d=g.append("g").selectAll("rect").data(p).enter(),T=a.db.getLinks();if(d.append("rect").attr("id",function(c){return c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?y(c.startTime)+v+.5*(y(c.endTime)-y(c.startTime))-.5*m:y(c.startTime)+v}).attr("y",function(c,n){return n=c.order,c.vert?r.gridLineStartPadding:n*x+b}).attr("width",function(c){return c.milestone?m:c.vert?.08*m:y(c.renderEndTime||c.endTime)-y(c.startTime)}).attr("height",function(c){return c.vert?S.length*(r.barHeight+r.barGap)+r.barHeight*2:m}).attr("transform-origin",function(c,n){return n=c.order,(y(c.startTime)+v+.5*(y(c.endTime)-y(c.startTime))).toString()+"px "+(n*x+b+.5*m).toString()+"px"}).attr("class",function(c){let n="task",I="";c.classes.length>0&&(I=c.classes.join(" "));let E=0;for(let[P,Y]of W.entries())c.type===Y&&(E=P%r.numberSectionStyles);let C="";return c.active?c.crit?C+=" activeCrit":C=" active":c.done?c.crit?C=" doneCrit":C=" done":c.crit&&(C+=" crit"),C.length===0&&(C=" task"),c.milestone&&(C=" milestone "+C),c.vert&&(C=" vert "+C),C+=E,C+=" "+I,n+C}),d.append("text").attr("id",function(c){return c.id+"-text"}).text(function(c){return c.task}).attr("font-size",r.fontSize).attr("x",function(c){let n=y(c.startTime),I=y(c.renderEndTime||c.endTime);if(c.milestone&&(n+=.5*(y(c.endTime)-y(c.startTime))-.5*m,I=n+m),c.vert)return y(c.startTime)+v;let E=this.getBBox().width;return E>I-n?I+E+1.5*r.leftPadding>o?n+v-5:I+v+5:(I-n)/2+n+v}).attr("y",function(c,n){return c.vert?r.gridLineStartPadding+S.length*(r.barHeight+r.barGap)+60:(n=c.order,n*x+r.barHeight/2+(r.fontSize/2-2)+b)}).attr("text-height",m).attr("class",function(c){let n=y(c.startTime),I=y(c.endTime);c.milestone&&(I=n+m);let E=this.getBBox().width,C="";c.classes.length>0&&(C=c.classes.join(" "));let P=0;for(let[ae,F]of W.entries())c.type===F&&(P=ae%r.numberSectionStyles);let Y="";return c.active&&(c.crit?Y="activeCritText"+P:Y="activeText"+P),c.done?c.crit?Y=Y+" doneCritText"+P:Y=Y+" doneText"+P:c.crit&&(Y=Y+" critText"+P),c.milestone&&(Y+=" milestoneText"),c.vert&&(Y+=" vertText"),E>I-n?I+E+1.5*r.leftPadding>o?C+" taskTextOutsideLeft taskTextOutside"+P+" "+Y:C+" taskTextOutsideRight taskTextOutside"+P+" "+Y+" width-"+E:C+" taskText taskText"+P+" "+Y+" width-"+E}),ne().securityLevel==="sandbox"){let c;c=me("#i"+t);let n=c.nodes()[0].contentDocument;d.filter(function(I){return T.has(I.id)}).each(function(I){var E=n.querySelector("#"+I.id),C=n.querySelector("#"+I.id+"-text");let P=E.parentNode;var Y=n.createElement("a");Y.setAttribute("xlink:href",T.get(I.id)),Y.setAttribute("target","_top"),P.appendChild(Y),Y.appendChild(E),Y.appendChild(C)})}}l(R,"drawRects");function N(p,x,b,v,m,w,o,u){if(o.length===0&&u.length===0)return;let h,d;for(let{startTime:E,endTime:C}of w)(h===void 0||E<h)&&(h=E),(d===void 0||C>d)&&(d=C);if(!h||!d)return;if((0,we.default)(d).diff((0,we.default)(h),"year")>5){ke.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let T=a.db.getDateFormat(),i=[],c=null,n=(0,we.default)(h);for(;n.valueOf()<=d;)a.db.isInvalidDate(n,T,o,u)?c?c.end=n:c={start:n,end:n}:c&&(i.push(c),c=null),n=n.add(1,"d");g.append("g").selectAll("rect").data(i).enter().append("rect").attr("id",function(E){return"exclude-"+E.start.format("YYYY-MM-DD")}).attr("x",function(E){return y(E.start)+b}).attr("y",r.gridLineStartPadding).attr("width",function(E){let C=E.end.add(1,"day");return y(C)-y(E.start)}).attr("height",m-x-r.gridLineStartPadding).attr("transform-origin",function(E,C){return(y(E.start)+b+.5*(y(E.end)-y(E.start))).toString()+"px "+(C*p+.5*m).toString()+"px"}).attr("class","exclude-range")}l(N,"drawExcludeDays");function Z(p,x,b,v){let m=yt(y).tickSize(-v+x+r.gridLineStartPadding).tickFormat(We(a.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(a.db.getTickInterval()||r.tickInterval);if(o!==null){let u=o[1],h=o[2],d=a.db.getWeekday()||r.weekday;switch(h){case"millisecond":m.ticks(Me.every(u));break;case"second":m.ticks(Ie.every(u));break;case"minute":m.ticks(Ae.every(u));break;case"hour":m.ticks(Le.every(u));break;case"day":m.ticks(Ye.every(u));break;case"week":m.ticks(Yt[d].every(u));break;case"month":m.ticks(Fe.every(u));break}}if(g.append("g").attr("class","grid").attr("transform","translate("+p+", "+(v-50)+")").call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),a.db.topAxisEnabled()||r.topAxis){let u=mt(y).tickSize(-v+x+r.gridLineStartPadding).tickFormat(We(a.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(o!==null){let h=o[1],d=o[2],T=a.db.getWeekday()||r.weekday;switch(d){case"millisecond":u.ticks(Me.every(h));break;case"second":u.ticks(Ie.every(h));break;case"minute":u.ticks(Ae.every(h));break;case"hour":u.ticks(Le.every(h));break;case"day":u.ticks(Ye.every(h));break;case"week":u.ticks(Yt[T].every(h));break;case"month":u.ticks(Fe.every(h));break}}g.append("g").attr("class","grid").attr("transform","translate("+p+", "+x+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(Z,"makeGrid");function H(p,x){let b=0,v=Object.keys(G).map(m=>[m,G[m]]);g.append("g").selectAll("text").data(v).enter().append(function(m){let w=m[0].split(nt.lineBreakRegex),o=-(w.length-1)/2,u=_.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",o+"em");for(let[h,d]of w.entries()){let T=_.createElementNS("http://www.w3.org/2000/svg","tspan");T.setAttribute("alignment-baseline","central"),T.setAttribute("x","10"),h>0&&T.setAttribute("dy","1em"),T.textContent=d,u.appendChild(T)}return u}).attr("x",10).attr("y",function(m,w){if(w>0)for(let o=0;o<w;o++)return b+=v[w-1][1],m[1]*p/2+b*p+x;else return m[1]*p/2+x}).attr("font-size",r.sectionFontSize).attr("class",function(m){for(let[w,o]of W.entries())if(m[0]===o)return"sectionTitle sectionTitle"+w%r.numberSectionStyles;return"sectionTitle"})}l(H,"vertLabels");function B(p,x,b,v){let m=a.db.getTodayMarker();if(m==="off")return;let w=g.append("g").attr("class","today"),o=new Date,u=w.append("line");u.attr("x1",y(o)+p).attr("x2",y(o)+p).attr("y1",r.titleTopMargin).attr("y2",v-r.titleTopMargin).attr("class","today"),m!==""&&u.attr("style",m.replace(/,/g,";"))}l(B,"drawToday");function j(p){let x={},b=[];for(let v=0,m=p.length;v<m;++v)Object.prototype.hasOwnProperty.call(x,p[v])||(x[p[v]]=!0,b.push(p[v]));return b}l(j,"checkUnique")},"draw"),Yr={setConf:Ir,draw:Lr},Fr=l(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,"getStyles"),Wr=Fr,Rr={parser:qt,db:Mr,renderer:Yr,styles:Wr};export{Rr as diagram};
