"use strict";(self.webpackChunkfaraway_test_task=self.webpackChunkfaraway_test_task||[]).push([[775],{9289:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var l=a(5795),r=a(7294),n=a(9250),c=a(3249),s=a(4644),i=a(1781),m=a(19),o=a(5816),u=a(7484),d=a.n(u),E=a(6010),g=a(161),k=a(8479),p=a(8152),f="disabledLink-TnVER",y=a(9655);const w=(e,t)=>e?r.createElement(s.Z,{status:"processing",text:"Upcoming"}):t?r.createElement(s.Z,{status:"success",text:"Success"}):r.createElement(s.Z,{status:"error",text:"Failure"});var h=({name:e,details:t,links:a,date_utc:l,success:n,upcoming:c,loading:s})=>r.createElement(i.Z,{loading:s,className:"card-_KiNs",title:e,cover:a?.patch.large?r.createElement("img",{loading:"lazy",alt:`Patch of ${e||"not named"} mission`,src:a?.patch.large,className:"cardCoverImage-Sw92X"}):r.createElement("div",null),extra:r.createElement(y.rU,{to:"edit","data-cy":"edit-launch-link"},r.createElement(m.ZP,null,"Edit")),actions:[r.createElement(y.rU,{className:(0,E.Z)(!a?.article&&f),key:"spacex",target:a?.article?"_blank":"_self",to:a?.article||"/"},r.createElement(g.Z,null)),r.createElement(y.rU,{className:(0,E.Z)(!a?.presskit&&f),key:"reddit",target:a?.presskit?"_blank":"_self",to:a?.presskit||"/"},r.createElement(k.Z,null)),r.createElement(y.rU,{className:(0,E.Z)(!a?.webcast&&f),key:"youtube",target:a?.webcast?"_blank":"_self",to:a?.webcast||"/"},r.createElement(p.Z,null))]},r.createElement(i.Z.Meta,{avatar:r.createElement(o.C,{size:"large",shape:"square",src:a?.patch.small}),title:r.createElement("div",{className:"metaTitle-Y4Rq4"},d()(l).format("YYYY.MM.DD HH:mm:ss [UTC]"),w(c,n)),description:t})),b=a(2049),Z=({links:e})=>r.createElement(b.Z,{className:"carousel-yjm1D",effect:"fade"},e?.map(((e,t)=>r.createElement("img",{key:`${e}-${t}`,src:e,loading:"lazy",className:"carouselImg-nYPCv"})))),_=({title:e,link:t})=>r.createElement("iframe",{loading:"lazy",src:t,title:e,className:"iFrame-NQ6gw",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),N=a(1739),v=({retry:e})=>{const t=(0,n.s0)();return r.createElement(N.ZP,{status:"warning",title:"Something went wrong.",extra:[r.createElement(m.ZP,{key:"console",type:"primary",onClick:()=>{e()}},"Retry last operation"),r.createElement(m.ZP,{key:"home",onClick:()=>{t("/")}},"Go home")]})},C=()=>r.createElement(h,{loading:!0,name:"...",details:"..."}),U=()=>{const{launchId:e}=(0,n.UO)();if(!e)return null;const{data:t,isLoading:a,isFetching:s,isError:i,refetch:m}=(0,c.Ir)(e);if(a||s)return r.createElement(C,null);if(i)return r.createElement(v,{retry:m});if(!t)return r.createElement(l.Z,null);const{name:o,date_utc:u,details:d,links:E,success:g,upcoming:k}=t;return r.createElement(r.Fragment,null,r.createElement(h,{name:o,details:d,success:g,upcoming:k,date_utc:u,links:E}),!!E?.flickr?.original?.length&&r.createElement(Z,{links:E.flickr.original}),E?.youtube_id&&r.createElement(_,{title:`Webcast of ${o}`,link:`https://www.youtube.com/embed/${E?.youtube_id}`}))}}}]);
//# sourceMappingURL=launch-lazy.38e582c126fdbe73a968.js.map