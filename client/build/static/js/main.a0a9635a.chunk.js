(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(2),i=n.n(c),r=(n(13),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),f=(n(14),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={title:"before"},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;fetch("/users/ping",{method:"GET"}).then((function(e){console.log("SUCCESS",e),console.log(e.message),t.setState={title:"after"}})).catch((function(t){}))}},{key:"render",value:function(){var t=this.state.title;return a.a.createElement("div",null,a.a.createElement("h2",null,"hello: ",t))}}]),e}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a0a9635a.chunk.js.map