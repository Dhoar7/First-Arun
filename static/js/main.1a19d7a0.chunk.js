(this["webpackJsonplc-p"]=this["webpackJsonplc-p"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),a=n.n(r),o=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(15),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"Source",src:"https://robohash.org/{props.mons.id}?set=set2&size=180x180"}),Object(l.jsx)("h2",{children:e.mons.name}),Object(l.jsx)("p",{children:e.mons.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monst.map((function(e){return Object(l.jsx)(d,{mons:e},e.id)}))})},m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})}),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monster Arun Test"}),Object(l.jsx)(m,{placeholder:"search monster",handleChange:this.handleChange}),Object(l.jsx)(j,{monst:c})]})}}]),n}(c.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.1a19d7a0.chunk.js.map