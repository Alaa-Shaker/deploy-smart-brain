(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{293:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t.n(n),r=t(41),o=t.n(r),i=(t(81),t(29)),l=t(11),c=t(12),m=t(14),u=t(13),p=function(e){var a=e.onRouteChange;return!0===e.isSetRoute?s.a.createElement("div",{className:"flex justify-end pa1 mr2 "},s.a.createElement("div",{className:"dim pointer"},s.a.createElement("p",{onClick:function(){return a("SignIn")},className:"pa2 ph4 f4 shadow-1 hover-orange hover-bg-light-gray grow"},"Sign Out"))):s.a.createElement("div",{className:"flex justify-end pa1 mr2 "},s.a.createElement("div",{className:"dim pa2  pointer"},s.a.createElement("p",{onClick:function(){return a("Register")},className:"pa2 ph4 f4 shadow-1 hover-orange hover-bg-light-gray grow"},"Register")),s.a.createElement("div",{className:"dim pa2  pointer"},s.a.createElement("p",{onClick:function(){return a("SignIn")},className:"pa2 ph4 f4 shadow-1 hover-orange hover-bg-light-gray grow"},"Sign in")))},h=t(74),d=t.n(h),g=t(28),b=t.n(g),f=(t(82),function(){return s.a.createElement("div",{className:"pa2 "},s.a.createElement(b.a,{className:"Tilt pa1 br3 ma3 shadow-2 w-10 backg",options:{max:55}},s.a.createElement("div",{className:"Tilt-inner"}," ",s.a.createElement("img",{alt:"logo",src:d.a,style:{width:"250px "}})," ")))}),E=(t(83),function(e){var a=e.onInputChange,t=e.onButtonClick;return s.a.createElement("div",{className:"pa2 tc"},s.a.createElement("p",{className:"f3"},"This Magic Brain detect faces in your picture , Git it try it . "),s.a.createElement("div",{className:"ma3 pa2 br3 shadow-5 ImageLinkForm"},s.a.createElement("input",{className:" pa2 ma2 br3 f4 w-60 tc ",type:"text",onChange:a,placeholder:"Enter link to image here !"}),s.a.createElement("button",{className:" pa2 ma2 br3 f4 w-20 grow ph3 pv2 dib bg-light-green black",onClick:t},"Detect")))}),v=function(e){var a=e.name,t=e.entries,n=e.numberFaces;return s.a.createElement("div",{className:"tc ma1"},s.a.createElement("div",{className:"f3"},"".concat(a," , Your current rank is ...")),s.a.createElement("div",{className:"f1"},t),s.a.createElement("div",{className:"tc"},s.a.createElement("p",null," ","Number of Faces in Pictures Is : ".concat(n))),"`")},w=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props,a=e.nameClass,t=e.styleboxes,n=[],r=0;r<t.length;r++)n.push(s.a.createElement("div",{className:a,style:t[r],key:r.toString()}," "));return s.a.createElement("div",null,n)}}]),t}(s.a.Component),N=(t(84),function(e){var a,t=e.urlImage,n=e.boxes,r=[],o=Object(i.a)(n);try{for(o.s();!(a=o.n()).done;){var l=a.value,c={top:l.topRow,right:l.rightCol,bottom:l.bottomRow,left:l.leftCol};r.push(c)}}catch(m){o.e(m)}finally{o.f()}return s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"pa2 w-40 margin_left"},s.a.createElement(b.a,{className:"Tilt pa1 br3 ma3 shadow-2 ",options:{max:55}},s.a.createElement("div",{className:"Tilt-inner ImageFaces "},s.a.createElement("div",null,s.a.createElement("img",{id:"imageInput",alt:"ImageFaces",src:t}),s.a.createElement(w,{nameClass:"bounding-box",styleboxes:r}))))))}),C=(t(85),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).onEmailChange=function(a){e.setState({signEmail:a.target.value})},e.onPasswordChange=function(a){e.setState({SignPassword:a.target.value})},e.onSubmissionClick=function(){var a=e.props.updateStateUser;fetch("https://rocky-bastion-39416.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.signEmail,password:e.state.SignPassword})}).then((function(e){return e.json()})).then((function(t){t.id?(a(t),e.props.onRouteChange("Home")):e.setState({show:!0})}))},e.state={signEmail:"",SignPassword:"",show:!1},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("main",{className:"pa1 black-80"},s.a.createElement("div",{className:"measure center w-70 shadow-3 pa4"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})),s.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"},s.a.createElement("input",{type:"checkbox"})," Remember me")),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmissionClick,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("a",{href:"#0",onClick:function(){return e("Register")},className:"f6 link dim black db"},"Sign up"),s.a.createElement("a",{href:"#0",className:"f6 link dim black db"},"Forgot your password?")),this.state.show?s.a.createElement("label",{className:"pa0 ma0  f6 orange "}," ",s.a.createElement("p",null," Email or Password Wrong !!  ")):" "))}}]),t}(s.a.Component)),y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).onNameChange=function(a){e.setState({name:a.target.value})},e.onEmailChange=function(a){e.setState({email:a.target.value})},e.onPasswordChange=function(a){e.setState({password:a.target.value})},e.onSubmissionClick=function(){var a=e.props.updateStateUser;fetch("https://rocky-bastion-39416.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,email:e.state.email,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){t.id?(a(t),e.props.onRouteChange("Home")):e.setState({showErrorMessage:!0})}))},e.state={name:"",email:"",password:"",showErrorMessage:!1},e}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"pa1 black-80"},s.a.createElement("div",{className:"measure center w-70 shadow-3 pa4"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"Name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmissionClick,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up"})),this.state.showErrorMessage?s.a.createElement("label",{className:"pa0 ma0  f6 orange "}," ",s.a.createElement("p",null," Something Wrong !!  ")):" "))}}]),t}(s.a.Component),k=t(75),S=t.n(k),j=(t(293),{particles:{number:{value:200,density:{enable:!0,value_area:1e3}},line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:0}}}}),R={inpute:"",urlImage:"",numberFaces:0,boxes:[],router:"SignIn",isSetRoute:!1,user:{id:0,name:"",email:"",entries:0,joined:""}},I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).updateStateUser=function(a){e.setState({user:{id:a.id,name:a.name,email:a.email,entries:a.entries,joined:a.joined}})},e.onInputChange=function(a){e.setState({input:a.target.value})},e.addBox=function(a){e.setState({boxes:a})},e.calculateFaceBorder=function(a){var t,n=[],s=Object.keys(a.outputs[0].data.regions).length,r=Object(i.a)(a.outputs[0].data.regions);try{for(r.s();!(t=r.n()).done;){var o=t.value.region_info.bounding_box,l=document.getElementById("imageInput").width,c=document.getElementById("imageInput").height,m={topRow:o.top_row*c,leftCol:o.left_col*l,rightCol:l-o.right_col*l,bottomRow:c-o.bottom_row*c};n.push(m)}}catch(u){r.e(u)}finally{r.f()}return e.setState({numberFaces:s}),n},e.onButtonClick=function(a){e.setState({urlImage:e.state.input}),fetch("https://rocky-bastion-39416.herokuapp.com/imageURL",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageURL:e.state.input})}).then((function(e){return e.json()})).then((function(a){a&&fetch("https://rocky-bastion-39416.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(a){return e.setState(Object.assign(e.state.user,{entries:a}))})),e.addBox(e.calculateFaceBorder(a))})).catch((function(e){return console.log("Error ",e)}))},e.onRouteChange=function(a){"SignIn"===a||"Register"===a?e.setState(R):e.setState({isSetRoute:!0}),e.setState({router:a})},e.state=R,e}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(S.a,{className:"particles",params:j}),s.a.createElement(p,{onRouteChange:this.onRouteChange,isSetRoute:this.state.isSetRoute}),s.a.createElement(f,null),"SignIn"===this.state.router?s.a.createElement(C,{updateStateUser:this.updateStateUser,onRouteChange:this.onRouteChange}):"Register"===this.state.router?s.a.createElement(y,{updateStateUser:this.updateStateUser,onRouteChange:this.onRouteChange}):s.a.createElement("div",null,s.a.createElement(v,{name:this.state.user.name,entries:this.state.user.entries,numberFaces:this.state.numberFaces}),s.a.createElement(E,{onInputChange:this.onInputChange,onButtonClick:this.onButtonClick}),s.a.createElement(N,{urlImage:this.state.urlImage,boxes:this.state.boxes})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(294);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports=t.p+"static/media/brain.4100098c.png"},76:function(e,a,t){e.exports=t(295)},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.de0fcc9f.chunk.js.map