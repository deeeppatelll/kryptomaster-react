(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{172:function(e,t,n){},236:function(e,t,n){},261:function(e,t){},385:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(172),n(415)),s=n(419),l=n(421),d=n(22),u=n.n(d),j=n(32),b=n(14),p=n(33),h=n.n(p),g=n(148),m=n.n(g),f=n(42),O=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},x=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},y=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")},k=n(3),C=Object(a.createContext)(),w=function(e){var t=e.children,n=Object(a.useState)("INR"),r=Object(b.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)("\u20b9"),s=Object(b.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){"INR"===c?d("\u20b9"):"USD"===c&&d("$")}),[c]),Object(k.jsx)(C.Provider,{value:{currency:c,setCurrency:i,symbol:l},children:t})},_=function(){return Object(a.useContext)(C)},M=n(435),S=n(158),N=n(418),D=n(437),F=n(424),I=n(386),T=n(425),B=n(426),P=n(427),E=n(428),R=n(429),W=n(430),L=n(12);function A(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function H(){var e,t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),d=Object(b.a)(i,2),p=d[0],g=d[1],m=Object(a.useState)(""),f=Object(b.a)(m,2),x=f[0],v=f[1],y=Object(a.useState)(1),C=Object(b.a)(y,2),w=C[0],H=C[1],z=_(),U=z.currency,J=z.symbol,K=Object(o.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),G=Object(L.e)(),Y=Object(S.a)({palette:{primary:{main:"#fff"},type:"dark"}}),$=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,h.a.get(O(U));case 3:t=e.sent,n=t.data,console.log(n),c(n),g(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){$()}),[U]);var q=function(){return r.filter((function(e){return e.name.toLowerCase().includes(x)||e.symbol.toLowerCase().includes(x)}))};return Object(k.jsx)(N.a,{theme:Y,children:Object(k.jsxs)(s.a,{style:{textAlign:"center"},children:[Object(k.jsx)(l.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(k.jsx)(D.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return v(e.target.value)}}),Object(k.jsx)(F.a,{component:I.a,children:p?Object(k.jsx)(T.a,{style:{backgroundColor:"white"}}):Object(k.jsxs)(B.a,{"aria-label":"simple table",children:[Object(k.jsx)(P.a,{style:{backgroundColor:"#51edf0"},children:Object(k.jsx)(E.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(k.jsx)(R.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(k.jsx)(W.a,{children:q().slice(10*(w-1),10*(w-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(k.jsxs)(E.a,{onClick:function(){return G.push("/coins/".concat(e.id))},className:K.row,children:[Object(k.jsxs)(R.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(k.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(k.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(k.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(k.jsxs)(R.a,{align:"right",children:[J," ",A(e.current_price.toFixed(2))]}),Object(k.jsxs)(R.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(k.jsxs)(R.a,{align:"right",children:[J," ",A(e.market_cap.toString().slice(0,-6)),"M"]})]},e.name)}))})]})}),Object(k.jsx)(M.a,{count:((null===(e=q())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:K.pagination},onChange:function(e,t){H(t),window.scroll(0,450)}})]})})}var z=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],c=_(),i=c.currency,s=c.symbol,l=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(y(i));case 2:t=e.sent,n=t.data,console.log(n),r(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[i]);var d=Object(o.a)((function(e){return{carousel:{height:"50%",display:"flex",alignItems:"center"},carouselItem:{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",textTransform:"uppercase",color:"white"}}}))(),p=n.map((function(e){var t,n=(null===e||void 0===e?void 0:e.price_change_percentage_24h)>=0;return Object(k.jsxs)(f.b,{className:d.carouselItem,to:"/coins/".concat(e.id),children:[Object(k.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"80",style:{marginBottom:10}}),Object(k.jsxs)("span",{children:[null===e||void 0===e?void 0:e.symbol,"\xa0",Object(k.jsxs)("span",{style:{color:n>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[n&&"+",null===e||void 0===e||null===(t=e.price_change_percentage_24h)||void 0===t?void 0:t.toFixed(2),"%"]})]}),Object(k.jsxs)("span",{style:{fontSize:22,fontWeight:500},children:[s," ",A(null===e||void 0===e?void 0:e.current_price.toFixed(2))]})]})}));return Object(k.jsx)("div",{className:d.carousel,children:Object(k.jsx)(m.a,{mouseTracking:!0,infinite:!0,autoPlayInterval:1e3,animationDuration:1500,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:2},512:{items:4}},items:p,autoPlay:!0})})},U=(n(234),Object(o.a)((function(e){return{banner:{},bannerContent:{height:400,display:"flex",flexDirection:"column",paddingTop:10,justifyContent:"space-evenly"},tagline:{display:"flex",height:"40%",flexDirection:"column",justifyContent:"center",textAlign:"center"},carousel:{height:"50%",display:"flex",alignItems:"center"}}})));var J=function(){var e=U();return Object(k.jsx)("div",{className:e.banner,children:Object(k.jsxs)(s.a,{className:e.bannerContent,children:[Object(k.jsxs)("div",{className:e.tagline,children:[Object(k.jsx)(l.a,{variant:"h2",style:{fontWeight:"bold",marginBottom:15,fontFamily:"Montserrat"},children:"Kryptomaster"}),Object(k.jsx)(l.a,{variant:"subtitle2",style:{color:"darkgrey",textTransform:"capitalize",fontFamily:"Montserrat"},children:"Get all the Info regarding your favorite Crypto Currency"})]}),Object(k.jsx)(z,{})]})})},K=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(J,{}),Object(k.jsx)(H,{})]})},G=(n(236),n(9)),Y=n(154),$=n.n(Y),q=n(157),Q=n(431),V=function(e){var t=e.children,n=e.selected,a=e.onClick,r=Object(o.a)({selectbutton:{border:"1px solid gold",borderRadius:5,padding:10,paddingLeft:20,paddingRight:20,fontFamily:"Montserrat",cursor:"pointer",backgroundColor:n?"gold":"",color:n?"black":"",fontWeight:n?700:500,"&:hover":{backgroundColor:"gold",color:"black"},width:"22%"}})();return Object(k.jsx)("span",{onClick:a,className:r.selectbutton,children:t})},X=[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}],Z=function(e){var t=e.coin,n=Object(a.useState)(),r=Object(b.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(1),l=Object(b.a)(s,2),d=l[0],p=l[1],g=_().currency,m=Object(a.useState)(!1),f=Object(b.a)(m,2),O=f[0],x=f[1],y=Object(o.a)((function(e){return{container:Object(G.a)({width:"75%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40},e.breakpoints.down("md"),{width:"100%",marginTop:0,padding:20,paddingTop:0})}}))(),C=function(){var e=Object(j.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(v(t.id,d,g));case 2:n=e.sent,a=n.data,x(!0),i(a.prices);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t),Object(a.useEffect)((function(){C()}),[d]);var w=Object(S.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(k.jsx)(N.a,{theme:w,children:Object(k.jsx)("div",{className:y.container,children:!c|!1===O?Object(k.jsx)(Q.a,{style:{color:"gold"},size:250,thickness:1}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(q.a,{data:{labels:c.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===d?n:t.toLocaleDateString()})),datasets:[{data:c.map((function(e){return e[1]})),label:"Price ( Past ".concat(d," Days ) in ").concat(g),borderColor:"#EEBC1D"}]},options:{elements:{point:{radius:1}}}}),Object(k.jsx)("div",{style:{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"},children:X.map((function(e){return Object(k.jsx)(V,{onClick:function(){p(e.value),x(!1)},selected:e.value===d,children:e.label},e.value)}))})]})})})},ee=function(){var e=Object(L.f)().id,t=Object(a.useState)(),n=Object(b.a)(t,2),r=n[0],c=n[1],i=_(),s=i.currency,d=i.symbol,p=function(){var t=Object(j.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(x(e));case 2:n=t.sent,a=n.data,c(a);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){p()}),[]);var g=Object(o.a)((function(e){var t,n;return{container:Object(G.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),sidebar:(t={width:"30%"},Object(G.a)(t,e.breakpoints.down("md"),{width:"100%"}),Object(G.a)(t,"display","flex"),Object(G.a)(t,"flexDirection","column"),Object(G.a)(t,"alignItems","center"),Object(G.a)(t,"marginTop",25),Object(G.a)(t,"borderRight","2px solid grey"),t),heading:{fontWeight:"bold",marginBottom:20,fontFamily:"Montserrat"},description:{width:"100%",fontFamily:"Montserrat",padding:25,paddingBottom:15,paddingTop:0,textAlign:"justify"},marketData:(n={alignSelf:"start",padding:25,paddingTop:10,width:"100%"},Object(G.a)(n,e.breakpoints.down("md"),{display:"flex",justifyContent:"space-around"}),Object(G.a)(n,e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center"}),Object(G.a)(n,e.breakpoints.down("xs"),{alignItems:"start"}),n)}}))();return r?Object(k.jsxs)("div",{className:g.container,children:[Object(k.jsxs)("div",{className:g.sidebar,children:[Object(k.jsx)("img",{src:null===r||void 0===r?void 0:r.image.large,alt:null===r||void 0===r?void 0:r.name,height:"200",style:{marginBottom:20}}),Object(k.jsx)(l.a,{variant:"h3",className:g.heading,children:null===r||void 0===r?void 0:r.name}),Object(k.jsxs)(l.a,{variant:"subtitle1",className:g.description,children:[$()(null===r||void 0===r?void 0:r.description.en.split(". ")[0]),"."]}),Object(k.jsxs)("div",{className:g.marketData,children:[Object(k.jsxs)("span",{style:{display:"flex"},children:[Object(k.jsx)(l.a,{variant:"h5",className:g.heading,children:"Rank:"}),"\xa0 \xa0",Object(k.jsx)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:A(null===r||void 0===r?void 0:r.market_cap_rank)})]}),Object(k.jsxs)("span",{style:{display:"flex"},children:[Object(k.jsx)(l.a,{variant:"h5",className:g.heading,children:"Current Price:"}),"\xa0 \xa0",Object(k.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[d," ",A(null===r||void 0===r?void 0:r.market_data.current_price[s.toLowerCase()])]})]}),Object(k.jsxs)("span",{style:{display:"flex"},children:[Object(k.jsx)(l.a,{variant:"h5",className:g.heading,children:"Market Cap:"}),"\xa0 \xa0",Object(k.jsxs)(l.a,{variant:"h5",style:{fontFamily:"Montserrat"},children:[d," ",A(null===r||void 0===r?void 0:r.market_data.market_cap[s.toLowerCase()].toString().slice(0,-6)),"M"]})]})]})]}),Object(k.jsx)(Z,{coin:r})]}):Object(k.jsx)(T.a,{style:{backgroundColor:"gold"}})},te=n(432),ne=n(433),ae=n(434),re=n(439),ce=Object(o.a)((function(e){return{title:{flex:1,color:"",fontFamily:"Montserrat",fontWeight:"bold",cursor:"pointer"}}})),ie=Object(S.a)({palette:{primary:{main:"#fff"},type:"dark"}});var oe=function(){var e=ce(),t=_(),n=t.currency,a=t.setCurrency,r=Object(L.e)();return Object(k.jsx)(N.a,{theme:ie,children:Object(k.jsx)(te.a,{color:"transparent",position:"static",children:Object(k.jsx)(s.a,{children:Object(k.jsxs)(ne.a,{children:[Object(k.jsx)(l.a,{onClick:function(){return r.push("/")},variant:"h6",className:e.title,children:"Kryptomaster"}),Object(k.jsxs)(ae.a,{variant:"outlined",labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,style:{width:100,height:40,marginLeft:15},onChange:function(e){return a(e.target.value)},children:[Object(k.jsx)(re.a,{value:"USD",children:"USD"}),Object(k.jsx)(re.a,{value:"INR",children:"INR"})]})]})})})})},se=Object(o.a)((function(){return{App:{backgroundImage:"url(./banner12.jpg)",color:"white",minHeight:"200vh"}}}));var le=function(){var e=se();return Object(k.jsx)(f.a,{children:Object(k.jsxs)("div",{className:e.App,children:[Object(k.jsx)(oe,{}),Object(k.jsx)(L.a,{path:"/",component:K,exact:!0}),Object(k.jsx)(L.a,{path:"/coins/:id",component:ee,exact:!0})]})})};n(384);i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(w,{children:Object(k.jsx)(le,{})})}),document.getElementById("root"))}},[[385,1,2]]]);
//# sourceMappingURL=main.09793121.chunk.js.map