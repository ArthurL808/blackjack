(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{17:function(e,t,n){e.exports={hideCard:"Cards_hideCard__2nmRA",cardBack:"Cards_cardBack__3l7e-"}},21:function(e,t,n){e.exports={resultWindow:"RoundResults_resultWindow__12NIw",closeResults:"RoundResults_closeResults__3Tms4"}},31:function(e,t,n){e.exports={gameBoard:"GameBoard_gameBoard__3G_6U"}},32:function(e,t,n){e.exports={playerHand:"PlayerHand_playerHand__2b2Ks"}},33:function(e,t,n){e.exports={dealerHand:"DealerHand_dealerHand__3GMcX"}},39:function(e,t,n){},5:function(e,t,n){e.exports={betWindow:"BetWindow_betWindow__2EiTz",betButton:"BetWindow_betButton__hL23M",betMenu:"BetWindow_betMenu__2ctAR",clearBet:"BetWindow_clearBet__1GN2p",placeBet:"BetWindow_placeBet__20A1d"}},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(13),c=n.n(r),s=(n(39),n(3)),o=n(21),u=n.n(o),d=n(6),l=n(9),i=n(16),b=n.n(i),j="HIT_USER",O="LOAD_DECK",p="DEAL_HANDS",f="PLAYER_LOSS",y="PLAYER_BLACKJACK",m="HIT_DEALER",h="PLAYER_STAND",g="PLAYER_WIN",C="PLAYER_PUSH",_="PLACE_BET",v="START_BETTING",x="DOUBLE_DOWN",k="PLAYER_BUST",B=function(){var e=Object(l.a)(Object(d.a)().mark((function e(t,n){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.remaining<=4||t.remaining<=n)){e.next=3;break}return e.next=3,E(t);case 3:return e.next=5,b.a.get("https://deckofcardsapi.com/api/deck/".concat(t.deck_id,"/draw/?count=").concat(n)).then((function(e){return e.data})).catch((function(e){console.error(e)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(e){return b.a.get("https://deckofcardsapi.com/api/deck/".concat(e.deck_id,"/shuffle/")).then((function(e){return e.data})).catch((function(e){console.log(e),console.error(e)}))},N=function(e){return e({type:h,payload:!0})},w=function(e){return e({type:f,payload:!0,message:"Sorry you've lost $"})},R=function(e){return e({type:y,payload:!0,message:"Blackjack! you have won $"})},A=function(e){return e({type:g,payload:!0,message:"Congratulations you have won $"})},S=function(e){return e({type:k,payload:!0,message:"Bust! Sorry you've lost $"})},T=function(e){return e({type:C,payload:!0,message:"Nothing gained, Nothing loss you have pushed with the dealer."})},D=function(e){return e({type:v,payload:!0})},L=n(0),I=function(e){var t=Object.assign({},e),n=Object(s.b)();return t.roundResults.roundEnd?Object(L.jsxs)("div",{className:u.a.resultWindow,children:[t.roundResults.message,Object(L.jsx)("button",{className:u.a.closeResults,onClick:function(){n(D)},children:"close"})]}):""},W=n(15),H=n(5),P=n.n(H),$=n(7),M=n(66),G=function(e){return e.deck},U=function(e){return e.roundResults},Y=function(e){return e.bettingRound},X=function(e){return e.playerCurrency},F=function(e){return e.playerStand},K=function(e){return e.playersCards},J=function(e){return e.dealersCards},V=Object(M.a)(K,(function(e){return Object($.a)(e).sort((function(e,t){return"ACE"===e.value?1:"ACE"===t.value?-1:e.value-t.value})).reduce((function(e,t){return"ACE"===t.value&&e>10?e+1:"ACE"===t.value&&e<=10?e+11:isNaN(t.value)?e+10:e+parseInt(t.value)}),0)})),z=Object(M.a)(J,(function(e){return Object($.a)(e).sort((function(e,t){return"ACE"===e.value?1:"ACE"===t.value?-1:e.value-t.value})).reduce((function(e,t){return"ACE"===t.value&&e>10?e+1:"ACE"===t.value&&e<=10?e+11:isNaN(t.value)?e+10:e+parseInt(t.value)}),0)})),q=function(e){var t=Object.assign({},e),n=Object(s.b)(),r=Object(a.useState)(0),c=Object(W.a)(r,2),o=c[0],u=c[1],i=Object(s.c)(X);return Object(L.jsxs)("div",{className:P.a.betWindow,children:[Object(L.jsxs)("h4",{children:["Player's wallet: $",i-o]}),Object(L.jsxs)("h5",{children:["Current Bet: $",o]}),Object(L.jsxs)("div",{className:P.a.betMenu,children:[Object(L.jsx)("button",{className:P.a.betButton,onClick:function(){o+50>i?alert("Not enought funds."):u(o+50)},children:"$50"}),Object(L.jsx)("button",{className:P.a.betButton,onClick:function(){o+100>i?alert("Not enought funds."):u(o+100)},children:"$100"}),Object(L.jsx)("button",{className:P.a.betButton,onClick:function(){o+250>i?alert("Not enought funds."):u(o+250)},children:"$250"}),Object(L.jsx)("button",{className:P.a.betButton,onClick:function(){o+500>i?alert("Not enought funds."):u(o+500)},children:"$500"}),Object(L.jsx)("button",{id:P.a.placeBet,className:P.a.betButton,onClick:function(){return o<=0?alert("Please place a bet."):i-o<0?alert("You don't have the money to place that bet."):(n(function(e){return function(t){t({type:_,payload:e})}}(o)),u(0),void n((e=t.deck,function(){var t=Object(l.a)(Object(d.a)().mark((function t(n){var a,r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e,2);case 2:return a=t.sent,t.next=5,B(e,2);case 5:r=t.sent,n({type:p,payload:{playersCards:a.cards,dealersCards:r.cards,remaining:r.remaining}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())));var e},children:"Deal"}),Object(L.jsx)("button",{id:P.a.clearBet,className:P.a.betButton,onClick:function(){u(0)},children:"Clear Bet"})]})]})},Q=q,Z=n(31),ee=n.n(Z),te=n(32),ne=n.n(te),ae=n(17),re=n.n(ae),ce=function(e){var t=Object.assign({},e);return t.hideCard?Object(L.jsx)("div",{className:re.a.cardBack,children:Object(L.jsx)("img",{className:re.a.hideCard,src:t.card.image,alt:"playing card"},t.code)}):Object(L.jsx)("img",{className:re.a.card,src:t.card.image,alt:"playing card"},t.code)},se=function(e){var t=Object.assign({},e),n=Object(s.b)();Object(a.useEffect)((function(){c(t.cards,t.total),r(t.total)}),[t.total,t.cards]);var r=function(e){e>21&&n(S)},c=function(e,t){if(2===e.length&&21===t)return n(R)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("p",{children:t.total}),Object(L.jsx)("div",{className:ne.a.playerHand,children:t.cards.map((function(e){return Object(L.jsx)(ce,{card:e},e.code)}))})]})},oe=n(33),ue=n.n(oe),de=function(e){var t=Object.assign({},e),n=Object(s.b)(),r=Object(a.useState)(!0),c=Object(W.a)(r,2),o=c[0],u=c[1];Object(a.useEffect)((function(){t.cards.length>2&&i(t.total),!0===t.playerStand&&(u(!1),b(t.total))}),[t.total,t.cards,t.playerStand]);var i=function(e){if(e>21)return n(A)},b=function(e){if(e>=17)return a=t.playerTotal,r=t.total,a===r?n(T):a>r?n(A):r>a&&r<=21?n(w):void 0;var a,r,c,s;n((c=t.deck,s=1,function(){var e=Object(l.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(c,s);case 2:n=e.sent,t({type:m,payload:{card:n.cards[0],remaining:n.remaining}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(L.jsxs)(L.Fragment,{children:[o?null:Object(L.jsx)("p",{children:t.total}),Object(L.jsx)("div",{className:ue.a.dealerHand,children:t.cards.map((function(e,t){return 1===t&&!0===o?Object(L.jsx)(ce,{card:e,hideCard:o},e.code):Object(L.jsx)(ce,{card:e},e.code)}))})]})},le=de,ie=n(8),be=n.n(ie),je=function(e){var t=Object.assign({},e),n=Object(s.b)(),a=Object(s.c)((function(e){return e.currentBet})),r=Object(s.c)((function(e){return e.playerCurrency}));return Object(L.jsx)(L.Fragment,{children:t.playersCards.length>2?null:Object(L.jsx)("button",{className:be.a.gameControlsButton,onClick:function(){var e;a>r?alert("Not enough funds for double down."):n((e=t.deckId,function(){var t=Object(l.a)(Object(d.a)().mark((function t(n){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e,1);case 2:a=t.sent,n({type:x,payload:a.cards[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"Double Down"})})},Oe=je,pe=function(e){var t=Object.assign({},e),n=Object(s.b)();return Object(L.jsxs)("div",{className:be.a.controlsContainer,children:[Object(L.jsx)("button",{className:be.a.gameControlsButton,onClick:function(){var e,a;n((e=t.deck,a=1,function(){var t=Object(l.a)(Object(d.a)().mark((function t(n){var r;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e,a);case 2:r=t.sent,n({type:j,payload:{card:r.cards[0],remaining:r.remaining}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"HIT"}),Object(L.jsx)("button",{className:be.a.gameControlsButton,onClick:function(){n(N)},children:"STAND"}),Object(L.jsx)(Oe,{deckId:t.deck,playersCards:t.playersCards})]})},fe=pe,ye=function(e){var t=Object.assign({},e),n=Object(s.c)(K),a=Object(s.c)(J),r=Object(s.c)(V),c=Object(s.c)(z),o=Object(s.c)(F);return Object(L.jsxs)("div",{className:ee.a.gameBoard,children:[Object(L.jsxs)("p",{children:["Cards remaining: ",t.deck.remaining]}),Object(L.jsx)(le,{deck:t.deck,total:c,cards:a,playerStand:o,playerTotal:r}),Object(L.jsx)(se,{cards:n,total:r}),t.roundEnd?null:Object(L.jsx)(fe,{roundEnd:t.roundEnd,playersCards:n,deck:t.deck})]})},me=(n(62),function(){var e=Object(s.b)(),t=Object(s.c)(G),n=Object(s.c)(U),r=Object(s.c)(Y);return Object(a.useEffect)((function(){e((function(e){b.a.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((function(t){e({type:O,payload:t.data})})).catch((function(e){console.error(e)}))}))}),[e]),Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)("h3",{children:"Welcome to S.F.M. Blackjack!"}),Object(L.jsx)(I,{roundResults:n}),r?Object(L.jsx)(Q,{deck:t}):Object(L.jsx)(ye,{deck:t,roundEnd:n.roundEnd})]})}),he=n(18),ge=n(2),Ce={deck:{deck_id:"",remaining:0,shuffled:!1,success:!1},playersCards:[],dealersCards:[],playerCurrency:1e3,currentBet:0,playerStand:!1,bettingRound:!0,roundResults:{roundEnd:!1,message:""}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(ge.a)(Object(ge.a)({},e),{},{deck:t.payload});case v:return Object(ge.a)(Object(ge.a)({},e),{},{playersCards:[],dealersCards:[],currentBet:0,playerStand:!1,bettingRound:t.payload,roundResults:{roundEnd:!1,message:""}});case _:return Object(ge.a)(Object(ge.a)({},e),{},{bettingRound:!1,playerCurrency:e.playerCurrency-t.payload,currentBet:t.payload});case p:return Object(ge.a)(Object(ge.a)({},e),{},{deck:Object(ge.a)(Object(ge.a)({},e.deck),{},{remaining:t.payload.remaining}),playersCards:t.payload.playersCards,dealersCards:t.payload.dealersCards});case j:return Object(ge.a)(Object(ge.a)({},e),{},{deck:Object(ge.a)(Object(ge.a)({},e.deck),{},{remaining:t.payload.remaining}),playersCards:[].concat(Object($.a)(e.playersCards),[t.payload.card])});case x:return Object(ge.a)(Object(ge.a)({},e),{},{playersCards:[].concat(Object($.a)(e.playersCards),[t.payload]),playerStand:!0,playerCurrency:e.playerCurrency-e.currentBet,currentBet:2*e.currentBet});case m:return Object(ge.a)(Object(ge.a)({},e),{},{deck:Object(ge.a)(Object(ge.a)({},e.deck),{},{remaining:t.payload.remaining}),dealersCards:[].concat(Object($.a)(e.dealersCards),[t.payload.card])});case f:case k:return Object(ge.a)(Object(ge.a)({},e),{},{roundResults:Object(ge.a)(Object(ge.a)({},e.roundResults),{},{roundEnd:t.payload,message:t.message+e.currentBet})});case y:return Object(ge.a)(Object(ge.a)({},e),{},{roundResults:Object(ge.a)(Object(ge.a)({},e.roundResults),{},{roundEnd:t.payload,message:t.message+1.5*e.currentBet}),playerCurrency:e.playerCurrency+(e.currentBet+1.5*e.currentBet)});case h:return Object(ge.a)(Object(ge.a)({},e),{},{playerStand:t.payload});case g:return Object(ge.a)(Object(ge.a)({},e),{},{roundResults:Object(ge.a)(Object(ge.a)({},e.roundResults),{},{roundEnd:t.payload,message:t.message+e.currentBet}),playerCurrency:e.playerCurrency+2*e.currentBet});case C:return Object(ge.a)(Object(ge.a)({},e),{},{roundResults:Object(ge.a)(Object(ge.a)({},e.roundResults),{},{roundEnd:t.payload,message:t.message}),playerCurrency:e.playerCurrency+e.currentBet});default:return e}},ve=n(34),xe=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):he.b)(Object(he.a)(ve.a)),ke=Object(he.c)(_e,xe);c.a.render(Object(L.jsx)(s.a,{store:ke,children:Object(L.jsx)(me,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={controlsContainer:"GameControls_controlsContainer__uLjOB",gameControlsButton:"GameControls_gameControlsButton__2TnII"}}},[[63,1,2]]]);
//# sourceMappingURL=main.e309f302.chunk.js.map