(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,s){e.exports={header:"Header_header__1hm4S"}},109:function(e,t,s){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__nmEEx"}},110:function(e,t,s){e.exports={content:"Post_content__3jn7l",item:"Post_item__wDNQ_"}},111:function(e,t,s){e.exports={posts:"MyPosts_posts__1AScq"}},112:function(e,t,s){e.exports={content:"Content_content__14Bda"}},113:function(e,t,s){e.exports={usersFoto:"Users_usersFoto__2xEXg"}},129:function(e,t,s){},163:function(e,t,s){"use strict";s.r(t);s(0),s(129);var n=s(4),a=s(101),i=s.n(a),c=s(207),r=s(206),o=s(208),d=s(209),l=s(210),j=s(106),u=s.n(j),b=s(107),O=s.n(b),h=s(3),m=s(197),p=s(22),x=s(1),v=function(){var e=Object(h.a)("div")((function(e){var t=e.theme;return Object(n.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(m.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),t=Object(h.a)(p.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(n.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),s=Object(h.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}));return Object(x.jsxs)("header",{className:i.a.header,children:[Object(x.jsx)(r.a,{sx:{flexGrow:1},children:Object(x.jsx)(c.a,{position:"static",children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(d.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(x.jsx)(u.a,{})}),Object(x.jsx)(l.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"ChillPlace"}),Object(x.jsxs)(e,{children:[Object(x.jsx)(s,{children:Object(x.jsx)(O.a,{})}),Object(x.jsx)(t,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})]})})}),Object(x.jsx)("img",{src:"https://themified.com/friend-finder/images/logo.png"})]})},f=s(21),g=s(27),_=s.n(g),w=function(){return Object(x.jsxs)("nav",{className:_.a.nav,children:[Object(x.jsx)("div",{className:_.a.item,children:Object(x.jsx)(f.b,{to:"/profile",activeClassName:_.a.active,children:"Profile"})}),Object(x.jsx)("div",{className:_.a.item,children:Object(x.jsx)(f.b,{to:"/dialogs",activeClassName:_.a.active,children:"Messages"})}),Object(x.jsx)("div",{className:_.a.item,children:Object(x.jsx)(f.b,{to:"/news",activeClassName:_.a.active,children:"News"})}),Object(x.jsx)("div",{className:_.a.item,children:Object(x.jsx)(f.b,{to:"/music",activeClassName:_.a.active,children:"Music"})}),Object(x.jsx)("div",{className:_.a.item,children:Object(x.jsx)(f.b,{to:"/settings",activeClassName:_.a.active,children:"Settings"})}),Object(x.jsx)("div",{className:_.a.item,children:Object(x.jsx)(f.b,{to:"/users",activeClassName:_.a.active,children:"Users"})})]})},P=s(109),N=s.n(P),y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:N.a.ProfileInfo,children:Object(x.jsx)("img",{src:"http://www.wpkixx.com/html/winku-dark/images/resources/timeline-1.jpg"})}),Object(x.jsx)("div",{children:"ava+dicription"})]})},C=s(110),S=s.n(C),D=function(e){return Object(x.jsxs)("div",{className:S.a.item,children:[Object(x.jsx)("img",{src:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"}),e.message,Object(x.jsx)("div",{children:e.LikesCount})]})},E=s(111),k=s.n(E),B=s(203),M=s(212),I=s(23),T=s(211),L=function(e){var t=Object(I.d)((function(e){return e.profileReducer})),s=t.ProfilePage.MyPostsData.map((function(e){return Object(x.jsx)(D,{message:e.message,LikesCount:e.LikesCount})})),n=function(){e.addPost()};return Object(x.jsxs)("div",{children:[Object(x.jsx)(l.a,{variant:"subtitle1",gutterBottom:!0,component:"div",children:Object(x.jsx)("div",{className:k.a.posts,children:Object(x.jsx)(r.a,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,width:1e3}},children:Object(x.jsx)(T.a,{elevation:3,children:s})})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(B.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",variant:"outlined",onKeyPress:function(e){13===e.charCode&&n()},value:t.ProfilePage.postProfile,onChange:function(t){var s=t.currentTarget.value;e.onPostChangeContainer(s)}})}),Object(x.jsx)("div",{children:Object(x.jsx)(M.a,{onClick:n,children:"Add post"})})]})]})},A=s(16),W=s(14),F="ADD-POST",R="UPDATE_NEW_POST_TEXT",U={ProfilePage:{MyPostsData:[{id:1,message:"Hello my friend",LikesCount:"12"},{id:2,message:"This is my first post",LikesCount:"10"},{id:3,message:"DaDa",LikesCount:"10"}],postProfile:""}},G=function(){var e=Object(I.c)();return Object(x.jsx)("div",{children:Object(x.jsx)(L,{addPost:function(){e({type:F})},onPostChangeContainer:function(t){e(function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}}(t))}})})},Y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(y,{}),Object(x.jsx)("div",{children:Object(x.jsx)(G,{})})]})},H=s(86),Z=s.n(H),z=s(112),X=s.n(z),J=s(17),q=s(54),K=s.n(q),V=function(e){var t="/profile/"+e.id;return Object(x.jsx)("div",{className:K.a.dialog+""+K.a.active,children:Object(x.jsx)(f.b,{to:t,children:e.name})})},Q=function(){var e=Object(I.d)((function(e){return e.sidebarReducer})).SideBar.map((function(e){return Object(x.jsx)(V,{name:e.name,id:e.id})}));return Object(x.jsx)("nav",{className:K.a.sideBar,children:Object(x.jsxs)("div",{className:K.a.content,children:["Friends online",Object(x.jsx)(f.b,{to:"/friends",activeClassName:K.a.active,children:e})]})})},$={DialogsData:[{id:1,name:"Pall"},{id:2,name:"Artur"},{id:3,name:"Valeri"},{id:4,name:"Nikol"},{id:5,name:"Bond"},{id:6,name:"Petrovich"}],MessagesData:[{id:1,message:"hello"},{id:2,message:"How are you"},{id:3,message:"Yo"}],newMessageBody:""},ee=s(39),te=s.n(ee),se=function(e){var t=Object(x.jsx)("img",{className:te.a.img,src:"https://themified.com/friend-finder/images/users/user-7.jpg"});return Object(x.jsxs)("div",{className:te.a.dialog,children:[t,e.message]})},ne=function(e){var t="/dialogs/"+e.id;return Object(x.jsx)("div",{className:te.a.dialog+""+te.a.active,children:Object(x.jsx)(f.b,{to:t,children:e.name})})},ae=function(e){var t=Object(I.d)((function(e){return e.dialogsReducer})),s=t.DialogsData.map((function(e){return Object(x.jsx)(ne,{name:e.name,id:e.id})})),n=t.MessagesData.map((function(e){return Object(x.jsx)(se,{message:e.message})})),a=function(){e.addChatContainer()};return Object(x.jsxs)("div",{className:te.a.dialogs,children:[Object(x.jsx)("div",{className:te.a.dialogItems,children:Object(x.jsx)("span",{children:s})}),Object(x.jsxs)("div",{className:te.a.messages,children:[Object(x.jsx)("div",{children:n}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)(B.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",variant:"outlined",onKeyPress:function(e){13===e.charCode&&a()},value:t.newMessageBody,onChange:function(t){var s=t.currentTarget.value;e.onNewChangeNewBody(s)}})}),Object(x.jsx)("div",{children:Object(x.jsx)(M.a,{variant:"contained",onClick:a,children:"Sent"})})]})]})]})},ie=function(){var e=Object(I.c)();Object(I.d)((function(e){return e.dialogsReducer}));return Object(x.jsx)(ae,{onNewChangeNewBody:function(t){e(function(e){return{type:"UPDATE_NEW_MESSAGE_BODY",body:e}}(t))},addChatContainer:function(){e({type:"SEND_MESSAGE_BODY"})}})},ce="FOLLOW",re="UNFOLLOW",oe="SET-USERS",de={users:[]},le=s(113),je=s.n(le),ue=s(114),be=s.n(ue),Oe=s.p+"static/media/dudeWithSuite.5d9ea631.jpg",he=function(e){return 0===e.usersPage.users.length&&be.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){e.setUsers(t.data.items)})),Object(x.jsx)("div",{children:e.usersPage.users.map((function(t){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("span",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:null!=t.photos.Small?t.photos.Small:Oe,className:je.a.usersFoto})}),Object(x.jsx)("div",{children:t.followed?Object(x.jsx)(M.a,{variant:"contained",size:"small",onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(x.jsx)(M.a,{variant:"contained",size:"small",onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(x.jsxs)("span",{children:[Object(x.jsxs)(l.a,{mt:2,children:[Object(x.jsxs)("span",{children:[Object(x.jsx)("div",{children:t.name}),Object(x.jsx)("div",{children:t.status})]}),Object(x.jsxs)("span",{children:[Object(x.jsx)("div",{children:"u.location.country"}),Object(x.jsx)("div",{children:"u.location.city"})]})]}),Object(x.jsx)("span",{children:Object(x.jsx)("div",{})})]})]},t.id)}))})},me=Object(I.b)((function(e){return{usersPage:e.users}}),(function(e){return{follow:function(t){e({type:ce,userId:t})},unfollow:function(t){e(function(e){return{type:re,userId:e}}(t))},setUsers:function(t){e(function(e){return{type:oe,users:e}}(t))}}}))(he),pe=function(e){return Object(x.jsx)(f.a,{children:Object(x.jsxs)("div",{className:Z.a.appWrapper,children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:Z.a.navbarwrappper,children:[Object(x.jsx)(w,{}),Object(x.jsx)(Q,{})]}),Object(x.jsxs)("div",{className:X.a.content,children:[Object(x.jsx)(J.a,{path:"/dialogs",render:function(){return Object(x.jsx)(ie,{})}}),Object(x.jsx)(J.a,{path:"/profile",render:function(){return Object(x.jsx)(Y,{})}}),Object(x.jsx)(J.a,{path:"/users",render:function(){return Object(x.jsx)(me,{})}})]})]})})},xe=s(36),ve=s.n(xe),fe=s(87),ge={SideBar:[{id:1,name:"Andru"},{id:2,name:"Sasha"},{id:3,name:"Sveta"}]},_e=Object(fe.a)({dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_BODY":return Object(W.a)(Object(W.a)({},e),{},{newMessageBody:t.body});case"SEND_MESSAGE_BODY":var s=e.newMessageBody;return Object(W.a)(Object(W.a)({},e),{},{newMessageBody:"",MessagesData:[].concat(Object(A.a)(e.MessagesData),[{id:6,message:s}])});default:return e}},profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var s={id:(new Date).getTime(),message:e.ProfilePage.postProfile,LikesCount:"0"};return Object(W.a)(Object(W.a)({},e),{},{ProfilePage:{MyPostsData:[].concat(Object(A.a)(e.ProfilePage.MyPostsData),[s]),postProfile:""}});case R:var n=Object(W.a)({},e);return n.ProfilePage.postProfile=t.newText,Object(W.a)({},e);default:return e}},sidebarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;return e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(W.a)(Object(W.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(W.a)(Object(W.a)({},e),{},{followed:!0}):e}))});case re:return Object(W.a)(Object(W.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(W.a)(Object(W.a)({},e),{},{followed:!1}):e}))});case oe:return Object(W.a)(Object(W.a)({},e),{},{users:[].concat(Object(A.a)(e.users),Object(A.a)(t.users))});default:return e}}}),we=Object(fe.b)(_e);ve.a.render(Object(x.jsx)(f.a,{children:Object(x.jsx)(I.a,{store:we,children:Object(x.jsx)(pe,{})})}),document.getElementById("root"));we.getState()},27:function(e,t,s){e.exports={nav:"Navbar_nav__1x_5z",item:"Navbar_item__aF-j8",active:"Navbar_active__2Wknj"}},39:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__-eIhE",dialogItems:"Dialogs_dialogItems__1E-VT",messages:"Dialogs_messages__1DwvL",message:"Dialogs_message__4C7ZL",s:"Dialogs_s__24nYo",img:"Dialogs_img__14RvZ"}},54:function(e,t,s){e.exports={sideBar:"SIdebarFriends_sideBar__34H3G",item:"SIdebarFriends_item__e04Zd",active:"SIdebarFriends_active__3mvtD",content:"SIdebarFriends_content__2ZlIc"}},86:function(e,t,s){e.exports={appWrapper:"App_appWrapper__1WaLk",navbarwrappper:"App_navbarwrappper__3iLdn"}}},[[163,1,2]]]);
//# sourceMappingURL=main.4cdcb041.chunk.js.map