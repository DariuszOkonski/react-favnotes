(this["webpackJsonp002-favnotes"]=this["webpackJsonp002-favnotes"]||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=a(5),o=a(7),s=function(e){var t=e.setFormOn;return r.a.createElement("nav",{id:"navigation"},r.a.createElement("section",{className:"logo-nav"},r.a.createElement("h2",{className:"logo-nav__header"},"FavNotes"),r.a.createElement("ul",{className:"logo-nav__items"},r.a.createElement("li",{className:"logo-nav__item"},r.a.createElement(o.b,{exact:!0,to:"/"},"twitters")),r.a.createElement("li",{className:"logo-nav__item"},r.a.createElement(o.b,{to:"/articles"},"articles")),r.a.createElement("li",{className:"logo-nav__item"},r.a.createElement(o.b,{to:"/notes"},"notes")))),r.a.createElement("button",{className:"btn",onClick:t},"new item"))},m=a(6),u=a(23),d=a(19),p=a.n(d),h=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([{id:1,picture:"https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/square_480/oapgW_Fp_400x400.jpg",name:"Dan Abramov",description:"Working on react.js.",twitterPage:"https://twitter.com/dan_abramov"},{id:2,picture:"https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg",name:"Ryan Florence",description:"Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",twitterPage:"https://twitter.com/ryanflorence"}]),a=Object(i.a)(t,2),c=a[0],l=a[1];return r.a.createElement(h.Provider,{value:{twitters:c,removeTwitt:function(e){l(c.filter((function(t){return t.id!==e})))},addTwitt:function(e,t,a,n){console.log("TwittersContext => addTwitt()"),l([].concat(Object(u.a)(c),[{id:p()(),picture:e,name:t,description:a,twitterPage:n}]))}}},e.children)},f=function(e){var t=e.id,a=e.picture,c=e.name,l=e.description,i=e.twitterPage,o=Object(n.useContext)(h).removeTwitt;return r.a.createElement("div",{id:"twitterItem"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a,alt:"".concat(c)})),r.a.createElement("div",{className:"description"},r.a.createElement("h2",{className:"header"},c),r.a.createElement("p",{className:"paragraph"},l),r.a.createElement("button",{className:"btn btn-transparent"},r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"visit twitter page")),r.a.createElement("button",{onClick:function(){return o(t)},className:"btn btn-transparent"},"remove")))},b=function(){return r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"There's nothing here yet, please add some items!"))},v=function(){var e=Object(n.useContext)(h).twitters;return e.length?r.a.createElement("div",{id:"twittersItems"},e.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))):r.a.createElement(b,null)},g=function(){return r.a.createElement("section",{id:"view-container"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(m.a,{exact:!0,path:"/articles",render:function(){return r.a.createElement("div",null,"Articles")}}),r.a.createElement(m.a,{exact:!0,path:"/notes",render:function(){return r.a.createElement("div",null,"Notes")}}),r.a.createElement(m.a,{render:function(){return r.a.createElement("div",null,"Error")}})))},w=a(13),O=a(20),N=a(21),j=a(24),C=a(22),y=a(25),F=function(e){var t=e.setFormOff,a=Object(n.useContext)(h).addTwitt,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],s=l[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],p=u[1],E=Object(n.useState)(""),f=Object(i.a)(E,2),b=f[0],v=f[1],g=Object(n.useState)(""),w=Object(i.a)(g,2),O=w[0],N=w[1];return r.a.createElement("form",{className:"newForm",onSubmit:function(e){e.preventDefault(),a(b,o,O,d),s(""),p(""),v(""),N(""),t()}},r.a.createElement("input",{type:"text",placeholder:"Twitter Name...",required:!0,value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Twitter Link...",required:!0,value:d,onChange:function(e){return p(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Image Url...",required:!0,value:b,onChange:function(e){return v(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Description...",required:!0,value:O,onChange:function(e){return N(e.target.value)}}),r.a.createElement("button",{className:"btn btn-transparent"},"Add New Item"))},x=function(){return r.a.createElement("h3",null,"NewFormArticle")},_=function(){return r.a.createElement("h3",null,"NewFormNotes")},k=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(c)))).headerInfo={twitter:"Add new Twitter account",article:"Add new Article",notes:"Add new Note"},a.state={twitter:!0,article:!1,notes:!1,header:""},a.handleChange=function(e){var t;a.setState({twitter:!1,article:!1,notes:!1}),a.setState((t={},Object(w.a)(t,e.target.id,!0),Object(w.a)(t,"header",a.headerInfo[e.target.id]),t))},a.displayForm=function(){return a.state.twitter?r.a.createElement(F,{setFormOff:a.props.setFormOff}):a.state.article?r.a.createElement(x,null):a.state.notes?r.a.createElement(_,null):r.a.createElement("h3",null,"Something went wrong")},a}return Object(y.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.setState({header:this.headerInfo.twitter})}},{key:"render",value:function(){var e=this.state,t=e.twitter,a=e.article,n=e.notes,c=e.header;return r.a.createElement("section",{id:"newItem"},r.a.createElement("div",{className:"itemBoard"},r.a.createElement("button",{className:"btn btnClose",onClick:this.props.setFormOff},"x"),r.a.createElement("h3",{className:"header"},c),r.a.createElement("div",{className:"noteOption"},r.a.createElement("label",{htmlFor:"twitter"},"twitter:",r.a.createElement("input",{type:"radio",name:"radiobutton",id:"twitter",checked:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"article"},"article:",r.a.createElement("input",{type:"radio",name:"radiobutton",id:"article",checked:a,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"notes"},"notes:",r.a.createElement("input",{type:"radio",name:"radiobutton",id:"notes",checked:n,onChange:this.handleChange}))),r.a.createElement("div",{className:"application"},this.displayForm())))}}]),t}(n.Component);var S=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(o.a,{basename:"/react-favnotes"},r.a.createElement("div",{className:"App"},r.a.createElement(s,{setFormOn:function(){c(!0)}}),r.a.createElement(E,null,a?r.a.createElement(k,{setFormOff:function(){c(!1)}}):null,r.a.createElement(g,null))))};a(38);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3ac3e615.chunk.js.map