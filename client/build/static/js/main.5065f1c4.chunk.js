(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,a){t.exports=a(55)},28:function(t,e,a){},33:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(18),o=a.n(r),i=(a(28),a(12)),c=a(2),l=a(3),h=a(6),u=a(4),d=a(11),p=a(7),m=a(58),_=a(59),f=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={authenticated:!1},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"myheader"},s.a.createElement(m.a,null,s.a.createElement("b",null,"Hello, ",this.props.username,"\xa0"),s.a.createElement(_.a,{variant:"light",className:"btn-white",type:"submit"},"Logout")))}}]),e}(n.Component),g=[["us",0," All states"],["us-ma",1,"Massachusetts"],["us-wa",2,"Washington"],["us-ca",3,"California"],["us-or",4,"Oregon"],["us-wi",5,"Wisconsin"],["us-me",6,"Maine"],["us-mi",7,"Michigan"],["us-nv",8,"Nevada"],["us-nm",9,"New Mexico"],["us-co",10,"Colorado"],["us-wy",11,"Wyoming"],["us-ks",12,"Kansas"],["us-ne",13,"Nebraska"],["us-ok",14,"Oklahoma"],["us-mo",15,"Missouri"],["us-il",16,"Illinois"],["us-in",17,"Indiana"],["us-vt",18,"Vermont"],["us-ar",19,"Arkansas"],["us-tx",20,"Texas"],["us-ri",21,"Rhode Island"],["us-al",22,"Alabama"],["us-ms",23,"Mississippi"],["us-nc",24,"North Carolina"],["us-va",25,"Virginia"],["us-ia",26,"Iowa"],["us-md",27,"Maryland"],["us-de",28,"Delaware"],["us-pa",29,"Pennsylvania"],["us-nj",30,"New Jersey"],["us-ny",31,"New York"],["us-id",32,"Idaho"],["us-sd",33,"South Dakota"],["us-ct",34,"Connecticut"],["us-nh",35,"New Hampshire"],["us-ky",36,"Kentucky"],["us-oh",37,"Ohio"],["us-tn",38,"Tennessee"],["us-wv",39,"West Virginia"],["us-dc",40,"District of Columbia"],["us-la",41,"Louisiana"],["us-fl",42,"Florida"],["us-ga",43,"Georgia"],["us-sc",44,"South Carolina"],["us-mn",45,"Minnesota"],["us-mt",46,"Montana"],["us-nd",47,"North Dakota"],["us-az",48,"Arizona"],["us-ut",49,"Utah"],["us-hi",50,"Hawaii"],["us-ak",51,"Alaska"]].sort((function(t,e){return(""+t[2]).localeCompare(e[2])})),v=[[0,"Past 5 years","today 5-y"],[1,"Past 12 months","today 12-m"],[2,"Past 1 month","today 1-m"],[3,"Last 7 days","now 7-d"]],b=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).handleClick=a.handleClick.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.selectedState=a.selectedState.bind(Object(d.a)(a)),a.selectedTimeFrame=a.selectedTimeFrame.bind(Object(d.a)(a)),a.state={keywords:[],selected_state_name:g[0][0],selected_time_frame:v[0][2]},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(t){t.preventDefault();var e=this.arrayTrim(this.state.keywords),a=this.state.selectedState,n=this.state.selectedTimeFrame;this.props.callbackFromParent(e,a,n)}},{key:"selectedState",value:function(t){this.setState({selected_state_name:t.target.value.split(",")[0]})}},{key:"selectedTimeFrame",value:function(t){this.setState({selected_time_frame:t.target.value.split(",")[2]})}},{key:"handleChange",value:function(t){var e=t.target.value.split(",");this.setState({keywords:e,username:"name"})}},{key:"arrayTrim",value:function(t){return t.map((function(t){return t.trim()}))}},{key:"render",value:function(){var t=g.map((function(t){return s.a.createElement("option",{key:t[1],value:t},t[2])})),e=v.map((function(t){return s.a.createElement("option",{key:t[0],value:t},t[1])}));return s.a.createElement("div",{className:"input_bar input-bar-item width100"},s.a.createElement(m.a,{onSubmit:this.handleClick},s.a.createElement(m.a.Group,{className:"form-inline"},s.a.createElement("div",{className:"keyword_div"},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input_title"},s.a.createElement(m.a.Label,{className:"form-inline mr-1",htmlFor:"keywords_input"},s.a.createElement("h5",null,"Type your keywords:"))),s.a.createElement(m.a.Control,{className:"width100 mr-1 input_keywords",type:"text",placeholder:"Enter keywords",value:this.state.keywords,onChange:this.handleChange,id:"keywords_input"}))),s.a.createElement("div",{className:"timeframe_div"},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input_title"},s.a.createElement(m.a.Label,{className:"form-inline mr-1",htmlFor:"select_timeframe_input"},s.a.createElement("h5",null,"Select time frame:"))),s.a.createElement(m.a.Control,{as:"select",onChange:this.selectedTimeFrame,id:"select_timeframe_input",className:"form-control width100 mr-1 input_timeframe"},e))),s.a.createElement("div",{className:"state_select_div"},s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input_title"},s.a.createElement(m.a.Label,{className:"form-inline mr-1",htmlFor:"select_state_input"},s.a.createElement("h5",null,"Select state:"))),s.a.createElement(m.a.Control,{as:"select",onChange:this.selectedState,id:"select_state_input",className:"form-control width100 mr-1 input_state"},t),s.a.createElement("div",{className:"input_button"},s.a.createElement(_.a,{variant:"primary",type:"submit"},"Submit")))))))}}]),e}(n.Component),y=a(57),x=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).handleClick=a.handleClick.bind(Object(d.a)(a)),a.handleChangeLogin=a.handleChangeLogin.bind(Object(d.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(d.a)(a)),a.state={authenticated:!0,username:"user",password:"user"},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(){"user"===this.state.username&&"user"===this.state.password&&this.props.callbackFromLogin(this.state)}},{key:"handleChangeLogin",value:function(t){this.setState({username:t.target.value})}},{key:"handleChangePassword",value:function(t){this.setState({password:t.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"loginform"},s.a.createElement("h2",null,"Login page"),s.a.createElement("br",null),s.a.createElement("h5",null,"Username: user"),s.a.createElement("h5",null,"Password: user"),s.a.createElement("br",null),s.a.createElement(m.a,{onSubmit:this.handleClick},s.a.createElement(m.a.Group,{controlId:"formBasicUsername"},s.a.createElement(m.a.Label,null,"Username"),s.a.createElement(m.a.Control,{type:"text",placeholder:"Enter username",value:this.state.keywords,onChange:this.handleChangeLogin})),s.a.createElement(m.a.Group,{controlId:"formBasicPassword"},s.a.createElement(m.a.Label,null,"Password"),s.a.createElement(m.a.Control,{type:"password",placeholder:"Password",value:this.state.keywords,onChange:this.handleChangePassword})),s.a.createElement(_.a,{variant:"primary",type:"submit"},"Login")))}}]),e}(n.Component),w=a(56);function k(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function E(t){return["#a2cd9f","#6ef4ef","#ea6e2e","#6e224c","#edfc35","",""].slice(0,t)}function O(t,e,a,n){for(var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=[],o=a/(Math.abs(e.max_x-e.min_x)-1),i=n/Math.abs(e.max_y-e.min_y),c=0;c<t.length;c++)r.push([(c+s)*o,t[c][1],n-t[c][2]*i+i*(e.min_y-10),n-t[c][3]*i+i*(e.min_y-10),n-t[c][4]*i+i*(e.min_y-10)]);return r}function j(t,e,a){for(var n=[],s=0;s<t.length;s++){var r=k(2,8),o=k(2,8),i=k(e,a);n.push([s,t[s],i,i-r,i+o])}return n}function D(t){return function(t){for(var e=t.toLowerCase().split(" "),a=0;a<e.length;a++)e[a]=e[a].charAt(0).toUpperCase()+e[a].substring(1);return e.join(" ")}(t)}function M(){var t=[];return t.push(Date.UTC(2010,0,18)),t.push(Date.UTC(2010,1,18)),t.push(Date.UTC(2010,2,18)),t.push(Date.UTC(2010,3,18)),t.push(Date.UTC(2010,4,18)),t.push(Date.UTC(2010,5,18)),t.push(Date.UTC(2010,6,18)),t.push(Date.UTC(2010,7,18)),t}function C(){var t=[];return t.push(Date.UTC(2010,8,18)),t.push(Date.UTC(2010,9,18)),t}function S(t){for(var e=100,a=0;a<t.length;a++)for(var n=0;n<t[a].length-2;n++)null!==t[a][n][3]&&t[a][n][3]<e&&(e=t[a][n][3]);return e}function A(t){for(var e=0,a=0;a<t.length;a++)for(var n=0;n<t[a].length-2;n++)null!==t[a][n][4]&&t[a][n][4]>e&&(e=t[a][n][4]);return e}var L=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).state={data:[],keywords:[]},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.tableData.headers.map((function(t,e){return s.a.createElement("th",{key:e,className:"align-top"},t)})),e=this.props.tableData.data.map((function(t,e){var a=t.map((function(t,e){return null!==t?e>0?s.a.createElement("td",{key:e},t.toFixed(2)):s.a.createElement("td",{key:e},D(t)):s.a.createElement("td",{key:e},"null")}));return s.a.createElement("tr",{key:e},s.a.createElement("td",null,e+1),a)}));return s.a.createElement("div",{className:"table_div"},s.a.createElement("span",{className:"center"},s.a.createElement("h3",null,this.props.title)),s.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"align-top"},"#"),s.a.createElement("th",{className:"align-top"},"Keyword"),t)),s.a.createElement("tbody",null,e)))}}]),e}(n.Component),T=a(14),F=a.n(T),R=a(20),N=a.n(R),W=a(21),U=a.n(W),B=a(15);U()(F.a);var P=[["us-ca","#20e012"],["us-or","#20e012"],["us-id","#20e012"],["us-mt","#20e012"],["us-az","#20e012"],["us-nv","#20e012"],["us-wa","#20e012"],["us-ut","#20e012"]],I=[["us-wy","#BADA55"],["us-nd","#BADA55"],["us-sd","#BADA55"],["us-co","#BADA55"],["us-ks","#BADA55"],["us-ky","#BADA55"],["us-in","#BADA55"],["us-wi","#BADA55"],["us-ne","#BADA55"],["us-ia","#BADA55"],["us-mi","#BADA55"],["us-mo","#BADA55"],["us-il","#BADA55"],["us-mn","#BADA55"],["undefined","#BADA55"]],z=[["us-oh","#003fed"],["us-ny","#003fed"],["us-nc","#003fed"],["us-vt","#003fed"],["us-wv","#003fed"],["us-md","#003fed"],["us-de","#003fed"],["us-ri","#003fed"],["us-ma","#003fed"],["us-me","#003fed"],["us-nh","#003fed"],["us-sc","#003fed"],["us-va","#003fed"],["us-nj","#003fed"],["us-dc","#003fed"],["us-ct","#003fed"],["us-pa","#003fed"]],H=[["us-tx","#e08a12"],["us-nm","#e08a12"],["us-tn","#e08a12"],["us-ga","#e08a12"],["us-fl","#e08a12"],["us-ar","#e08a12"],["us-ok","#e08a12"],["us-la","#e08a12"],["us-al","#e08a12"],["us-hi","#e08a12"],["us-ak","#e08a12"],["us-ms","#e08a12"]],G=function(t){function e(t){var a,n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(u.a)(e).call(this,t))).setHoverData=function(t){n.props.callbackFromApp(t.point["hc-key"])},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(d.a)(n)),n.state={mapOptions:(a={chart:{height:n.props.height,map:"countries/ie/ie-all",events:{drilldown:function(t){console.log("from drillDown")},drillup:function(){console.log("from drillUp")}},panning:!0,panKey:"shift"},tooltip:{enabled:!0,formatter:function(){return"<b>"+this.point.name+"</b>"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle",enabled:!1},title:{text:null},mapNavigation:{enabled:!1,buttonOptions:{verticalAlign:"bottom"}},plotOptions:{map:{states:{color:"#126c31",hover:{color:"#000000",enabled:!0,brightness:.5}}},series:{point:{events:{click:n.setHoverData.bind(Object(d.a)(n))}}}},series:[{data:P.concat(I).concat(z).concat(H),keys:["hc-key","color"],mapData:B,name:" ",dataLabels:{enabled:!0,color:"#FFFFFF",format:"{point.properties.postal-code}"},showInLegend:!1}]},Object(i.a)(a,"legend",{enabled:!0}),Object(i.a)(a,"drilldown",{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}}),a)},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var t;this.setState({mapOptions:(t={chart:{height:this.props.height,map:"countries/ie/ie-all",events:{drilldown:function(t){console.log("from drillDown")},drillup:function(){console.log("from drillUp")}},panning:!0,panKey:"shift"},tooltip:{enabled:!0,formatter:function(){return"<b>"+this.point.name+"</b>"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle",enabled:!1},title:{text:null},mapNavigation:{enabled:!1,buttonOptions:{verticalAlign:"bottom"}},plotOptions:{map:{states:{color:"#126c31",hover:{color:"#000000",enabled:!0,brightness:.5}}},series:{point:{events:{click:this.setHoverData.bind(this)}}}},series:[{data:P.concat(I).concat(z).concat(H),keys:["hc-key","color"],mapData:B,name:" ",dataLabels:{enabled:!0,color:"#FFFFFF",format:"{point.properties.postal-code}"},showInLegend:!1}]},Object(i.a)(t,"legend",{enabled:!1}),Object(i.a)(t,"drilldown",{activeDataLabelStyle:{color:"#FFFFFF",textDecoration:"none",textOutline:"1px #000000"},drillUpButton:{relativeTo:"spacingBox",position:{x:0,y:60}}}),t)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"map_content"},s.a.createElement(N.a,{constructorType:"mapChart",highcharts:F.a,options:this.state.mapOptions}))}}]),e}(s.a.PureComponent),K=(a(33),{dimensions:{box_width:400,box_height:120},number_of_plots:5,ranges_dates:{max_x:313,min_x:0,max_y:110,min_y:-10},array_length_dates:261,array_length_dates_forecast:52,KEYWORDS_URL:"http://0.0.0.0:5000"});function Y(t,e){var a="M ".concat(t-10," ").concat(e," L ").concat(t," ").concat(e);return'<path d="'.concat(a,'" fill="none" class="plot_line" data-z-index="0" />')}function J(t,e){for(var a=[],n=t/e,s=0;s<=e;s++){var r=n*s;a.push(Y(0,r))}return a}function q(t,e){var a="M ".concat(t," ").concat(e," L ").concat(t," ").concat(e+10);return'<path class="plot_xmark" d="'.concat(a,'" data-z-index="0" />')}function V(t,e,a){for(var n=[],s=t/(a-1),r=0;r<a;r++){var o=s*r;n.push(q(o,e))}return n}function X(t,e,a){return'<text x="'.concat(t,'" text-anchor="end" class="plot_ytick" y="').concat(e,'">').concat(a,"</text>")}function $(t,e,a,n,s){for(var r=[],o=a/(s-n),i=(Math.abs(n),n);i<=s;i++)r.push(X(-20,a-o*(i-n),10*i));var c="M ".concat(t," ").concat(e," L ").concat(t," ").concat(e+a);return r.push('<path d="'.concat(c,'" fill="none" class="plot_line" data-z-index="0" />')),r}function Q(t,e,a,n,s,r){var o=[],i=Object.keys(n).length,c=Math.floor(i/(a-1)),l=t/(a-1);if(t<=700)for(var h=0;h<a;h++)o.push('<text x="'.concat(l*h,'" class="plot_xtick" text-anchor="middle" y="').concat(e+25,'">').concat(st(n[c*h][1]),"</text>"));else for(var u=0;u<a;u++)o.push('<text x="'.concat(l*u,'" class="plot_xtick" text-anchor="middle" y="').concat(e+25,'">').concat(nt(n[c*u][1]),"</text>"));var d="M 0 ".concat(e," H ").concat(t),p=r;return t>700?o.push('<text x="'.concat(t/2,'" text-anchor="middle" class="plot_xaxis_title" y="').concat(e+p-30,'"><tspan>').concat(s,"</tspan></text>")):o.push('<text x="'.concat(t/2,'" text-anchor="middle" class="plot_xaxis_title" y="').concat(e+40,'"><tspan>').concat(s,"</tspan></text>")),o.push('<path d="'.concat(d,'" fill="none" class="plot_line" data-z-index="0" />')),o}function Z(t,e){var a=t.width/(e.max_x-1)*(t.historical_data_length-1);return'<g>\n        <path fill="none" class="plot_pointer_line" d="M '.concat(a," 0 L ").concat(a," ").concat(t.height,'" stroke-dasharray="6" data-z-index="0"></path>\n    </g>')}function tt(t,e,a,n){var s=[];if(void 0!==t&&void 0!==t.value_y)for(var r=0;r<t.colors.length;r++)null!==t.value_y[3][r]&&null!==t.value_y[2][r]?s.push('<path fill="none" d="M 5 '.concat(25*(r+1)+22," L 20 ").concat(25*(r+1)+22,'" stroke="').concat(t.colors[r],'" strokeWidth="2" opacity="1"></path>\n                <text x=25 y=').concat(25*(r+1)+25,">").concat(D(n[r])," ").concat(t.value_y[2][r].toFixed(1)," (min: ").concat(t.value_y[3][r].toFixed(1)," | max: ").concat(t.value_y[4][r].toFixed(1),")</text>")):s.push('<path fill="none" d="M 5 '.concat(25*(r+1)+22," L 20 ").concat(25*(r+1)+22,'" stroke="').concat(t.colors[r],'" strokeWidth="2" opacity="1"></path>\n                \n                 <text x=25 y=').concat(25*(r+1)+25,">").concat(D(n[r])," ").concat(t.value_y[2][r].toFixed(1),"</text>"));var o=nt(t.value_x);return'<g transform="translate('.concat(t.pos_x,", ").concat(t.pos_y,')" data-z-index="1" class="plot_info_box" visibility=').concat(t.visibility,'>\n        <rect x="0" y="0" width=').concat(e," height=").concat(a,'  />   \n        <g class="plot_info_box_header">\n        <text x=5 y="25">Date: ').concat(o,"</text>\n        </g>\n        ").concat(s,"\n    </g>")}function et(t,e,a){var n=[],s=[];if(t.width2>700){for(var r=0;r<e.length;r++){var o=at(a[r].length),i=s.reduce((function(t,e){return t+e}),0);n.push('\n                <g data-z-index="1" transform="translate('.concat(i,',3)">\n                    <path fill="none" d="M 0 11 L 30 11" stroke=').concat(e[r],' stroke-width="0"></path>\n                    <text x="35" textAnchor="start" data-z-index="0" y="15" font-size="12px" stroke="#6c757d" stroke-width="0">').concat(D(a[r]),"</text>\n                </g>\n            ")),s.push(o)}var c=s.reduce((function(t,e){return t+e}),0),l=t.width2/2-c/2-t.x_trans,h=(t.height,t.y_trans);return t.height+t.y_trans-t.y_trans2,h=t.height+t.y_trans-25,'\n            <g transform="translate('.concat(l,", ").concat(h,')" class="plot_legend" >\n                ').concat(n,"\n            </g>")}for(var u=0;u<a.length;u++){var d=at(a[u].length);s.push(d)}for(var p=0;p<e.length;p++){var m=Math.max.apply(Math,s);n.push('\n                <g data-z-index="1" transform="translate('.concat(t.width/2-m/2,", ").concat(18*p+10,')">\n                    <path fill="none" d="M 0 11 L 30 11" stroke=').concat(e[p],' stroke-width="0"></path>\n                    <text x="35" textAnchor="start" data-z-index="0" y="15" font-size="12px" stroke="#6c757d" stroke-width="0">').concat(D(a[p]),"</text>\n                </g>\n            "))}var _=t.height+43;return'\n            <g transform="translate('.concat(0,", ",_,')" class="plot_legend" >\n                ').concat(n,"\n            </g>")}function at(t){return 5*t+55}function nt(t){var e=new Date(t),a=e.getDate(),n=e.getMonth()+1;return a<10&&(a="0"+a),n<10&&(n="0"+n),a+"-"+n+"-"+e.getFullYear()}function st(t){var e=new Date(t),a=e.getDate(),n=e.getMonth()+1;return a<10&&(a="0"+a),n<10&&(n="0"+n),n+"-"+e.getFullYear()}var rt=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.ticks+1;return this.props.dimensions.width<=700&&(t=7),s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:V(this.props.dimensions.width,this.props.dimensions.height,t)}}),s.a.createElement("g",{dangerouslySetInnerHTML:{__html:Q(this.props.dimensions.width,this.props.dimensions.height,t,this.props.dates,this.props.x_label,this.props.dimensions.y_trans2)}}))}}]),e}(s.a.PureComponent),ot=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:$(0,0,this.props.dimensions.height,this.props.lower_bound/10,this.props.upper_bound/10)}}),s.a.createElement("g",{dangerouslySetInnerHTML:{__html:(t=this.props.y_label,e=this.props.dimensions.height,a=this.props.dimensions.x_trans,'<g transform="translate('.concat(-(a/2+10),",").concat(e/2,')"><text x="0" text-anchor="middle" transform="rotate(-90 0,0)" class="plot_yaxis_title" y="0"><tspan>').concat(t,"</tspan></text></g>"))}}));var t,e,a}}]),e}(s.a.PureComponent),it=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:et(this.props.dimensions,this.props.colors,this.props.keywords)}}))}}]),e}(s.a.PureComponent),ct=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:Z(this.props.dimensions,this.props.ranges)}}))}}]),e}(s.a.PureComponent),lt=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:(t=this.props.mark_line,e=this.props.height,'<g transform="translate('.concat(t.pos,', 0)">\n        <path fill="none" data-z-index="0" class="plot_mark_line" d="M 0 0 L 0 ').concat(e,'" visibility="').concat(t.visibility,'" />         \n    </g>'))}}));var t,e}}]),e}(s.a.PureComponent),ht=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:tt(this.props.info_box,this.props.width,this.props.height,this.props.keywords)}}))}}]),e}(s.a.PureComponent),ut=function(t,e,a,n){var s=t.reduce((function(t,e,a,n){return 0===a?"M ".concat(e[0],",").concat(e[2]):"".concat(t," ").concat(ft(e,a,n))}),"");return'<path d="'.concat(s,'" fill="none" stroke=').concat(a,' stroke-width=2  data-z-index="0" stroke-dasharray=').concat(n,' pointer-events="none" />')},dt=function(t,e,a){var n=t.reduce((function(t,e,a,n){return 0===a?"M ".concat(e[0],",").concat(e[4]):"".concat(t," ").concat(gt(e,a,n))}),"");n+=" L ".concat(t[t.length-1][0]," ").concat(t[t.length-1][3],"  ");var s=t.reverse().reduce((function(t,e,a,n){return 0===a?"L ".concat(e[0],",").concat(e[3]):"".concat(t," ").concat(vt(e,a,n))}),"");return s+=" L ".concat(t[t.length-1][0]," ").concat(t[t.length-1][4],"  "),'<path d="'.concat(n+s,'" fill=').concat(a," stroke=").concat(a,' stroke-width=2 data-z-index="0" pointer-events="none" opacity="0.35" />')},pt=function(t){return"L ".concat(t[0]," ").concat(t[2])};function mt(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s=[];return s.push(ut(t,pt,e,a)),s.push(dt(t.slice(n),ft,e)),s}for(var _t=function(t,e,a,n){var s=function(t,e){var a=e[0]-t[0],n=e[2]-t[2];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}(e||t,a||t),r=s.angle+(n?Math.PI:0),o=.2*s.length;return[t[0]+Math.cos(r)*o,t[2]+Math.sin(r)*o]},ft=function(t,e,a){var n=_t(a[e-1],a[e-2],t),s=_t(t,a[e-1],a[e+1],!0);return"C ".concat(n[0],",").concat(n[1]," ").concat(s[0],",").concat(s[1]," ").concat(t[0],",").concat(t[2])},gt=function(t,e,a){var n=yt(a[e-1],a[e-2],t),s=yt(t,a[e-1],a[e+1],!0);return"C ".concat(n[0],",").concat(n[1]," ").concat(s[0],",").concat(s[1]," ").concat(t[0],",").concat(t[4])},vt=function(t,e,a){var n=bt(a[e-1],a[e-2],t),s=bt(t,a[e-1],a[e+1],!0);return"C ".concat(n[0],",").concat(n[1]," ").concat(s[0],",").concat(s[1]," ").concat(t[0],",").concat(t[3])},bt=function(t,e,a,n){var s=function(t,e){var a=e[0]-t[0],n=e[3]-t[3];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}(e||t,a||t),r=s.angle+(n?Math.PI:0),o=.2*s.length;return[t[0]+Math.cos(r)*o,t[3]+Math.sin(r)*o]},yt=function(t,e,a,n){var s=function(t,e){var a=e[0]-t[0],n=e[4]-t[4];return{length:Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),angle:Math.atan2(n,a)}}(e||t,a||t),r=s.angle+(n?Math.PI:0),o=.2*s.length;return[t[0]+Math.cos(r)*o,t[4]+Math.sin(r)*o]},xt=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return"dash"===this.props.style?s.a.createElement("g",{dangerouslySetInnerHTML:{__html:mt(this.props.data,this.props.color,4)}}):s.a.createElement("g",{dangerouslySetInnerHTML:{__html:mt(this.props.data,this.props.color,0,this.props.slice)}})}}]),e}(s.a.PureComponent),wt=function(t){function e(t){return Object(c.a)(this,e),Object(h.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("g",null,s.a.createElement("g",{dangerouslySetInnerHTML:{__html:J(this.props.dimensions.height,this.props.y_number)}}),s.a.createElement("g",{dangerouslySetInnerHTML:{__html:(t=this.props.title,e=this.props.dimensions.width,this.props.dimensions.height,this.props.dimensions.x_trans,a=this.props.dimensions.y_trans,'<text x="'.concat(e/2,'" class="plot_title" text-anchor="middle" y="').concat(-a/3,'">').concat(t,"</text>"))}}));var t,e,a}}]),e}(s.a.PureComponent),kt=K.dimensions,Et=(K.number_of_plots,K.array_length_dates+K.array_length_dates_forecast),Ot=[j(M(),10,30),j(M(),40,80)],jt=[j(C(),10,30),j(C(),40,80)],Dt=0;Dt<Ot.length;Dt++)jt[Dt].unshift(Ot[Dt][Ot[Dt].length-1]);var Mt=function(t){function e(t){var a;Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).handleMouseMove=a.handleMouseMove.bind(Object(d.a)(a)),a.handleHoverOff=a.handleHoverOff.bind(Object(d.a)(a)),a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a));var n=.6*window.innerWidth-170,r=a.props.height-85-85;a.divRef=s.a.createRef();S(a.props.historical_data),A(a.props.historical_data);return console.log("ranges"),console.log(a.props.ranges),a.state={title:a.props.options.title,ticks_number:Et,x_label:a.props.options.x_label,y_label:a.props.options.y_label,mark_line:{pos:0,visibility:"hidden"},info_box:{pos_x:0,pos_y:0,visibility:"hidden",colors:E(a.props.number_of_series)},scaled_historical_data:a.scale_data_mocks(a.props.historical_data,a.props.forecasted_data,a.props.ranges,n,r,a.props.number_of_series)[0],scaled_forecasted_data:a.scale_data_mocks(a.props.historical_data,a.props.forecasted_data,a.props.ranges,n,r,a.props.number_of_series)[1],data_map_area_DATES:a.get_data_map_area_DATES(a.props.historical_data,a.props.forecasted_data,Et,a.props.number_of_series),colors:a.get_random_colors(a.props.number_of_series),info_box_height:a.get_box_height(a.props.number_of_series),number:a.props.number_of_series,dimensions:{width2:n,width:n/1.1,height:r,x_trans:85,y_trans:85,y_trans2:85,historical_data_length:K.array_length_dates,forecasted_data_length:K.array_length_dates_forecast},min_y:S(a.props.historical_data),max_y:A(a.props.historical_data),y_number:12},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.divRef.current.focus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"scaling",value:function(){}},{key:"updateWindowDimensions",value:function(){var t=this.divRef.current.clientWidth,e=this.props.x_trans,a=this.props.y_trans,n=this.props.x_trans2,s=this.props.y_trans2,r=t-e-n,o=this.props.height-a-s;this.setState({dimensions:{width2:t,width:r,height:o,x_trans:e,y_trans:a,x_trans2:n,y_trans2:s,historical_data_length:K.array_length_dates,forecasted_data_length:K.array_length_dates_forecast},scaled_historical_data:this.scale_data_mocks(this.props.historical_data,this.props.forecasted_data,this.props.ranges,r,o,this.props.number_of_series)[0],scaled_forecasted_data:this.scale_data_mocks(this.props.historical_data,this.props.forecasted_data,this.props.ranges,r,o,this.props.number_of_series)[1],min_y:S(this.props.historical_data),max_y:A(this.props.historical_data)})}},{key:"scale_data_mocks",value:function(t,e,a,n,s,r){return function(t,e,a,n,s,r){for(var o=[],i=[],c=0;c<r;c++)o.push(O(t[c],a,n,s)),i.push(O(e[c],a,n,s,t[c].length-1));return[o,i]}(t,e,a,n,s,r)}},{key:"get_data_map_area_DATES",value:function(t,e,a,n){return function(t,e,a){for(var n=[],s=0;s<e-2;s++){var r,o=[],i=[],c=[];r=t[0][s][1];for(var l=0;l<a;l++)o.push(t[l][s][2]),i.push(t[l][s][3]),c.push(t[l][s][4]);n[s]=[s,r,o,i,c]}return n}(function(t,e,a){for(var n=[],s=0;s<a;s++)n.push(t[s].concat(e[s]));return n}(t,e,n),a,n)}},{key:"get_random_colors",value:function(t){return E(t)}},{key:"get_box_height",value:function(t){return 0===(e=t)?0:25*(e+1)+10;var e}},{key:"handleMouseMove",value:function(t){var e=t.target.getBoundingClientRect(),a=t.clientX-e.left-this.state.dimensions.x_trans,n=t.clientY-e.top-this.state.dimensions.y_trans;if(a>=0&&n>=0&&a<=this.state.dimensions.width&&n<=this.state.dimensions.height){var s=this.props.ranges.max_x-this.props.ranges.min_x,r=this.state.dimensions.width/s,o=Math.round(a/r);if(void 0!==this.state.data_map_area_DATES[o]){Math.round((this.props.ranges.max_x-this.props.ranges.min_x)/2),Math.round((this.props.ranges.max_x-this.props.ranges.min_x)/2);for(var i=this.props.ranges.min_x;i<=o;i++)void 0!==this.state.data_map_area_DATES[i]&&i;for(var c=o;c<=this.props.ranges.max_x;c++)void 0!==this.state.data_map_area_DATES[c]&&c;this.setState({mark_line:{pos:a},info_box:{pos_x:a,pos_y:n,value_x:this.state.data_map_area_DATES[o][1],value_y:this.state.data_map_area_DATES[o],colors:E(this.props.number_of_series)}}),"hidden"!==this.state.info_box.visibility&&void 0!==this.state.info_box.visibility||this.setState({mark_line:{pos:a}})}else if(void 0!==o){for(var l=o-1,h=o+1,u=o;u>=0;u--)if(void 0!==this.state.data_map_area_DATES[u]){l=u;break}for(var d=o;d<=this.props.ranges.max_x;d++)if(void 0!==this.state.data_map_area_DATES[d]){h=d;break}void 0!==this.state.data_map_area_DATES[l]&&void 0!==this.state.data_map_area_DATES[h]&&(this.setState({mark_line:{pos:a},info_box:{pos_x:a,pos_y:n,value_x:this.state.data_map_area_DATES[o][1],value_y:this.state.data_map_area_DATES[o],colors:E(this.props.number_of_series)}}),"hidden"!==this.state.info_box.visibility&&void 0!==this.state.info_box.visibility||this.setState({mark_line:{pos:a}}))}}else(a>this.state.dimensions.width||n>this.state.dimensions.height||a<this.state.dimensions.x_trans||n<this.state.dimensions.y_trans)&&this.setState({mark_line:{visibility:"hidden",pos:9999},info_box:{visibility:"hidden",pos_x:9999,pos_y:9999,colors:E(this.props.number_of_series)}})}},{key:"handleHoverOff",value:function(t){this.setState({mark_line:{pos:0,visibility:"hidden"},info_box:{pos_x:0,pos_y:0,visibility:"hidden",colors:E(this.props.number_of_series)}})}},{key:"render",value:function(){var t=this,e=this.state.scaled_historical_data.map((function(e,a){return s.a.createElement(xt,{key:a,data:e,color:t.state.colors[a],style:"none",slice:4})})),a=this.state.scaled_forecasted_data.map((function(e,a){return s.a.createElement(xt,{key:a,data:e,color:t.state.colors[a],style:"dash"})})),n="0 0 "+this.state.dimensions.width2+" "+this.props.height,r="translate("+this.state.dimensions.x_trans+","+this.state.dimensions.y_trans+")",o=this.state.max_y,i=this.state.min_y;console.log("max: "+o),console.log("min: "+i);var c=10*Math.floor((i+1)/10),l=10*Math.ceil((Math.abs(o)+1)/10),h=(l-c)/10;return console.log("!! "+c),console.log("@@ "+l),console.log("## "+h),s.a.createElement("div",{ref:this.divRef},s.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",onMouseMove:this.handleMouseMove,onMouseLeave:this.handleHoverOff,className:"test_plot",width:this.state.dimensions.width2,height:this.props.height,viewBox:n},s.a.createElement("g",null,s.a.createElement("g",{transform:r},e,a,s.a.createElement(wt,{dimensions:this.state.dimensions,y_number:h,title:this.state.title}),s.a.createElement(ot,{dimensions:this.state.dimensions,y_number:h,y_label:this.state.y_label,lower_bound:c,upper_bound:l}),s.a.createElement(rt,{dimensions:this.state.dimensions,x_label:this.state.x_label,ticks:12,dates:this.state.data_map_area_DATES}),s.a.createElement(it,{dimensions:this.state.dimensions,colors:this.state.colors,keywords:this.props.keywords}),s.a.createElement(ct,{dimensions:this.state.dimensions,ranges:this.props.ranges}),s.a.createElement(lt,{mark_line:this.state.mark_line,height:this.state.dimensions.height}),s.a.createElement(ht,{info_box:this.state.info_box,width:kt.box_width,height:this.state.info_box_height,keywords:this.props.keywords})))))}}]),e}(s.a.Component),Ct=a(22),St=a.n(Ct),At=(a(53),a(54),{KEYWORDS_URL:"http://localhost:5000/keywords",KEYWORDS_URL3:"http://localhost:5000/all",KEYWORDS_URL2:"http://0.0.0.0:5000/",KEYWORDS_NEW:"http://0.0.0.0:5000/new",RATE_RANKER_URL:"http://localhost:5000/rateranker",GROWTH_RANKER_URL:"http://localhost:5000/growthranker"}.dimensions),Lt=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(h.a)(this,Object(u.a)(e).call(this,t))).fetchCallback=function(t,e,n){a.setState({displayResults:!1}),a.fetchData(t,a.state.region_state,n)},a.mapCallback=function(t){a.setState({displayResults:!1}),a.fetchData(a.state.keywords,t,a.state.selected_time_frame)},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a.state={username:"user",keywords:[],authenticated:!0,displayResults:!1,region_state:"US",selected_time_frame:"today 5-y",options:{title:"Trends Forecast",x_label:"Date",y_label:"Search interest (%)",dimensions:At},historical_data:[],forecasted_data:[],rate_table_data:[],growth_table_data:[],x_trans:85,y_trans:85,fetching_results:!1},a.myRef=s.a.createRef(),a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"fetchData",value:function(t,e,a){var n=this;this.setState({fetching_results:!0}),console.log("state "+e),fetch("/new",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({keywords:t,region_state:e,time_frame:a})}).then((function(t){return t.json()})).then((function(s){var r;console.log("result:"),console.log(s);var o=n.myRef.current.offsetWidth,c=o/4.5,l=n.state.x_trans,h=n.state.y_trans,u=n.state.x_trans,d=n.state.y_trans;o>1800&&(c=c,l=80,h=80,u=50,d=80),o<=1800&&(c=1.2*o/4.5,l=80,h=80,u=50,d=80),o<=1600&&(c=1.4*o/4.5,l=80,h=80,u=50,d=80),o<=1400&&(c=1.6*o/4.5,l=70,h=70,u=50,d=70),o<=1200&&(c=1.8*o/4.5,l=60,h=60,u=50,d=60),o<=700&&(c=4*o/4.5,l=60,h=20,u=50,d=14*t.length+80),n.setState((r={keywords:t,displayResults:!0,region_state:e,selected_time_frame:a},Object(i.a)(r,"displayResults",!0),Object(i.a)(r,"historical_data",n.get_historical_data(t,s)),Object(i.a)(r,"forecasted_data",n.get_forecasted_data(t,s)),Object(i.a)(r,"rate_table_data",n.getRateTableData(s.growth_rate_result)),Object(i.a)(r,"growth_table_data",n.getGrowthTableData(s.projected_growth_result)),Object(i.a)(r,"div_height",c),Object(i.a)(r,"x_trans",l),Object(i.a)(r,"y_trans",h),Object(i.a)(r,"x_trans2",u),Object(i.a)(r,"y_trans2",d),Object(i.a)(r,"fetching_results",!1),r))})).catch((function(t){console.log("error:"),console.log(t)}))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.myRef.current.focus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var t=this.myRef.current.offsetWidth,e=t/4.5,a=this.state.x_trans,n=this.state.y_trans,s=this.state.x_trans,r=this.state.y_trans;t>1800&&(e=e,a=80,n=80,s=50,r=80),t<=1800&&(e=1.2*t/4.5,a=80,n=80,s=50,r=80),t<=1600&&(e=1.4*t/4.5,a=80,n=80,s=50,r=80),t<=1400&&(e=1.6*t/4.5,a=70,n=70,s=50,r=70),t<=1200&&(e=1.8*t/4.5,a=60,n=60,s=50,r=70),t<=700&&(e=4*t/4.5,a=60,n=20,s=50,r=14*this.state.keywords.length+80),this.setState({div_height:e,x_trans:a,y_trans:n,x_trans2:s,y_trans2:r})}},{key:"render",value:function(){var t={max_x:313,min_x:0,max_y:120,min_y:-10};if(this.state.displayResults){var e=S(this.state.historical_data),a=A(this.state.historical_data),n=10*Math.ceil((Math.abs(e)+1)/10),r=10*Math.ceil((Math.abs(a)+1)/10);t={max_x:this.state.historical_data[0].length+this.state.forecasted_data[0].length,min_x:0,max_y:r,min_y:n}}return this.state.authenticated?s.a.createElement("div",{ref:this.myRef},s.a.createElement("div",{className:"main_results"},this.state.displayResults?s.a.createElement("div",null,s.a.createElement(f,{username:this.state.username}),s.a.createElement(b,{callbackFromParent:this.fetchCallback}),s.a.createElement("div",{className:"results_div"},s.a.createElement("div",{className:"map_div"},s.a.createElement(G,{callbackFromApp:this.mapCallback})),s.a.createElement("div",{id:"plot_div"},s.a.createElement(Mt,{options:this.state.options,ranges:t,historical_data:this.state.historical_data,forecasted_data:this.state.forecasted_data,number_of_series:this.state.forecasted_data.length,keywords:this.state.keywords,height:this.state.div_height,x_trans:this.state.x_trans,y_trans:this.state.y_trans,x_trans2:this.state.x_trans2,y_trans2:this.state.y_trans2}))),s.a.createElement("div",{className:"tables"},s.a.createElement(y.a,null,s.a.createElement("div",{className:"table-responsive result_table"},s.a.createElement(L,{tableData:this.state.rate_table_data,title:"Growth Rate"})),s.a.createElement("div",{className:"table-responsive result_table"},s.a.createElement(L,{tableData:this.state.growth_table_data,title:"Projected growth"}))))):s.a.createElement("div",null,s.a.createElement(f,{username:this.state.username}),s.a.createElement(b,{callbackFromParent:this.fetchCallback}),s.a.createElement("div",{className:"intro"}),this.state.fetching_results?s.a.createElement("div",{className:"spinner"},s.a.createElement(St.a,{type:"Oval",color:"#007bff",height:200,width:200,timeout:3e4})):s.a.createElement("div",null)))):s.a.createElement("div",{ref:this.myRef},s.a.createElement(x,{callbackFromLogin:this.toLoginCallback}))}},{key:"getGrowthTableData",value:function(t){var e=["Projected growth in 5 weeks for US (for all keywords) [%]","Projected growth in 5 weeks for US (for one keyword) [%]"];return{data:Object.keys(t.Keyword).map((function(a){return[D(t.Keyword[a]),t[e[0]][a],t[e[1]][a]]})),headers:e}}},{key:"getRateTableData",value:function(t){var e=["Growth_Rate_0_1","Growth_Rate_0_2","Growth_Rate_0_3","Growth_Rate_1_2","Growth_Rate_2_3"];return{data:Object.keys(t.Keyword).map((function(a){return[D(t.Keyword[a]),t[e[0]][a],t[e[1]][a],t[e[2]][a],t[e[3]][a],t[e[4]][a]]})),headers:["Growth Rate 1","Growth Rate 2","Growth Rate 3","Growth Rate 4","Growth Rate 5"]}}},{key:"get_historical_data",value:function(t,e){var a=[],n=function(n){var s=0,r=t[n],o=Object.keys(e[r]["5 Day MA for "+r]).map((function(t){return s<4?[s++,Date.UTC(t.substring(0,4),t.substring(5,7)-1,t.substring(8,10)),e[r][r][t],e[r]["Lower Band for "+r][t],e[r]["Upper Band for "+r][t]]:[s++,Date.UTC(t.substring(0,4),t.substring(5,7)-1,t.substring(8,10)),e[r]["5 Day MA for "+r][t],e[r]["Lower Band for "+r][t],e[r]["Upper Band for "+r][t]]}));a.push(o)};for(var s in t)n(s);return a}},{key:"get_forecasted_data",value:function(t,e){var a=[],n=function(n){var s=0,r=t[n],o=Object.keys(e[t[n]+"F"][t[n]]).map((function(a){return s<4?[s++,Date.UTC(a.substring(0,4),a.substring(5,7)-1,a.substring(8,10)),e[t[n]+"F"][r][a],e[t[n]+"F"]["Lower Band for "+r][a],e[t[n]+"F"]["Upper Band for "+r][a]]:[s++,Date.UTC(a.substring(0,4),a.substring(5,7)-1,a.substring(8,10)),e[t[n]+"F"]["5 Day MA for "+r][a],e[t[n]+"F"]["Lower Band for "+r][a],e[t[n]+"F"]["Upper Band for "+r][a]]}));a.push(o)};for(var s in t)n(s);return a}}]),e}(s.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(Lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5065f1c4.chunk.js.map