(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),o=(n(9),n(2)),r=n(0),l=function(e){var t=e.onHandleGoodBtn,n=e.onHandleNeutralBtn,c=e.onHandleBadBtn;return Object(r.jsxs)("div",{className:"BtnContainer",children:[Object(r.jsx)("button",{type:"button",onClick:t,className:"statBtn",children:" Good"}),Object(r.jsx)("button",{type:"button",onClick:n,className:"statBtn",children:" Neutral"}),Object(r.jsx)("button",{type:"button",onClick:c,className:"statBtn",children:" Bad "})]})},d=function(e){var t=e.Good,n=e.Neutral,c=e.Bad,s=e.Total,a=e.Positive;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("ul",{className:"statistic",children:[Object(r.jsxs)("li",{children:["Good: ",t," "]}),Object(r.jsxs)("li",{children:[" Neutral: ",n," "]}),Object(r.jsxs)("li",{children:["Bad: ",c," "]})]}),0!==s?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:Object(r.jsxs)("b",{children:["Total feedbacks: ",s]})}),Object(r.jsxs)("p",{children:["Positive feedbacks: ",Object(r.jsxs)("b",{children:[a(),"%"]})]}),Object(r.jsx)("h3",{children:"Thank you for yours feedback! "})]}):"No feedback given"]})},j=function(e){var t=e.title,n=e.children;return Object(r.jsxs)("div",{children:[t&&Object(r.jsx)("h2",{children:t}),n]})};j.defaultProps={title:""};var b=j,u=function(e){var t=e.message;return Object(r.jsx)("div",{className:"Notification",children:Object(r.jsx)("h2",{children:t})})};u.defaultProps={message:"Ooops...."};var h=u,O=(n(11),function(e){var t=Object(c.useState)(0),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(0),j=Object(o.a)(i,2),u=j[0],O=j[1],f=Object(c.useState)(0),x=Object(o.a)(f,2),p=x[0],v=x[1],B=function(){return s+u+p},k=function(){return Math.ceil(s/(s+u+p)*100)||0};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)("h1",{children:"Please leave feedback"})}),Object(r.jsx)(b,{title:"",children:Object(r.jsx)(l,{onHandleGoodBtn:function(){a((function(e){return e+1})),B(),k()},onHandleNeutralBtn:function(){O((function(e){return e+1})),B()},onHandleBadBtn:function(){v((function(e){return e+1})),B()}})}),0!==e?Object(r.jsx)(b,{title:"Statistics",children:Object(r.jsx)(d,{Good:s,Neutral:u,Bad:p,Total:B(),Positive:k})}):Object(r.jsx)(h,{message:"No feedback yet"})]})});O.defaultProps={totalFeedback:0,percentageOfGoodFeedb:0};var f=O,x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),x()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5a065ef9.chunk.js.map