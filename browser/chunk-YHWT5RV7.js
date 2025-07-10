import{a as A}from"./chunk-SRALMX3X.js";import{a as _}from"./chunk-VI2LS5VB.js";import"./chunk-T2OOGRTG.js";import"./chunk-HIMDNJT5.js";import"./chunk-HCYZF75H.js";import"./chunk-ZTE2AGK2.js";import"./chunk-KP5ZTFUO.js";import{a as D}from"./chunk-SZE5UXR6.js";import{l as w}from"./chunk-4YFRIEAZ.js";import"./chunk-N3DO6V3P.js";import{D as y,P as B,T as S,U as z,V as F,W as P,X as E,Y as W,Z as T,h as s,j as m,v as $}from"./chunk-UKJSOLR5.js";import"./chunk-LRBKJSZ4.js";import"./chunk-HQHX3CXS.js";import"./chunk-GNFHJF7Z.js";import"./chunk-XLYDRCLS.js";import"./chunk-KP7MGEBM.js";import"./chunk-E6CJUGOO.js";import{a as v,g as C}from"./chunk-7IQ7MVDA.js";var N={packet:[]},x=structuredClone(N),I=$.packet,M=s(()=>{let t=w(v(v({},I),y().packet));return t.showBits&&(t.paddingY+=10),t},"getConfig"),O=s(()=>x.packet,"getPacket"),G=s(t=>{t.length>0&&x.packet.push(t)},"pushWord"),H=s(()=>{S(),x=structuredClone(N)},"clear"),u={pushWord:G,getPacket:O,getConfig:M,clear:H,setAccTitle:z,getAccTitle:F,setDiagramTitle:W,getDiagramTitle:T,getAccDescription:E,setAccDescription:P},K=1e4,R=s(t=>{A(t,u);let e=-1,o=[],n=1,{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,bits:c,label:f}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??=e+1,a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??=a+(c??1)-1,c??=r-a+1,e=r,m.debug(`Packet block ${a} - ${e} with label ${f}`);o.length<=i+1&&u.getPacket().length<K;){let[d,p]=U({start:a,end:r,bits:c,label:f},n,i);if(o.push(d),d.end+1===n*i&&(u.pushWord(o),o=[],n++),!p)break;({start:a,end:r,bits:c,label:f}=p)}}u.pushWord(o)},"populate"),U=s((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];let n=e*o-1,i=e*o;return[{start:t.start,end:n,label:t.label,bits:n-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),X={parse:s(t=>C(null,null,function*(){let e=yield _("packet",t);m.debug(e),R(e)}),"parse")},j=s((t,e,o,n)=>{let i=n.db,a=i.getConfig(),{rowHeight:r,paddingY:c,bitWidth:f,bitsPerRow:d}=a,p=i.getPacket(),l=i.getDiagramTitle(),k=r+c,g=k*(p.length+1)-(l?0:r),b=f*d+2,h=D(e);h.attr("viewbox",`0 0 ${b} ${g}`),B(h,g,b,a.useMaxWidth);for(let[L,Y]of p.entries())q(h,Y,L,a);h.append("text").text(l).attr("x",b/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),q=s((t,e,o,{rowHeight:n,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:f})=>{let d=t.append("g"),p=o*(n+a)+a;for(let l of e){let k=l.start%c*r+1,g=(l.end-l.start+1)*r-i;if(d.append("rect").attr("x",k).attr("y",p).attr("width",g).attr("height",n).attr("class","packetBlock"),d.append("text").attr("x",k+g/2).attr("y",p+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!f)continue;let b=l.end===l.start,h=p-2;d.append("text").attr("x",k+(b?g/2:0)).attr("y",h).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(l.start),b||d.append("text").attr("x",k+g).attr("y",h).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),J={draw:j},Q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},V=s(({packet:t}={})=>{let e=w(Q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),ot={parser:X,db:u,renderer:J,styles:V};export{ot as diagram};
