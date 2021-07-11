(this.webpackJsonpafms=this.webpackJsonpafms||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(42),s=a.n(l),c=(a(71),a(20)),i=(a(72),a(2)),o=a(15),m=a(3),u=a.n(m),d=a(17),h=a(4),p=a(8),g=a(9),E=a(11),f=a(10),b=function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t},v=RegExp(/\S+@\S+\.\S+/),N=(a(91),Object(n.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})),y=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center spinner"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement("h4",null," Please Wait ..."))}}]),a}(n.Component),k=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).mySubmitHandler=function(e){n.setState((function(e){return{isloading:!0}}));var t=n.context;e.preventDefault(),b(n.state.errors),n.state.isLoginMode?u.a.post("/user/login/",n.state.user).then((function(e){return n.setState((function(e){return{isloading:!1}})),n.props.history.push("/"),t.login(e.data.userId,e.data.token),"success"})).catch((function(e){n.setState({isloading:!1,error:Object(h.a)(Object(h.a)({},n.state.error),{},{message:e.response.data.message,code:e.response.status})})})):(n.setState((function(e){return{isloading:!0}})),u.a.post("/user/signup",n.state.user).then((function(e){n.setState((function(e){return{isloading:!1,isLoginMode:!e.isLoginMode}}))})).catch((function(e){n.setState({error:!0})}))),n.setState({user:Object(h.a)(Object(h.a)({},n.state.user),{},{email:"",password:""})})},n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r=n.state.errors,l=e.target,s=l.name,c=l.value;switch(s){case"email":if(0===c.length){r.email=c.length<5?"Email is Required!":"";break}if(c.length>0){r.email=v.test(c)?"":"Email is not valid!";break}break;case"password":c.length>0&&(r.password=c.length<3?"Password must be 6 characters long!":""),0===c.length&&(r.password=0===c.length?"Password is required!":"")}n.setState({errors:r,user:Object(h.a)(Object(h.a)({},n.state.user),{},Object(d.a)({},t,a))},(function(){}))},n.switchLoginhandler=function(){n.setState((function(e){return{isLoginMode:!e.isLoginMode}}))},n.state={user:{email:"",password:""},error:{message:"",code:""},isloading:!1,isLoginMode:!0,errors:{email:"",password:""}},n}return Object(g.a)(a,[{key:"render",value:function(){var e,t;return this.state.isloading&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container loading"},r.a.createElement("div",{className:"mar-20"},r.a.createElement(y,null))))),this.state.error.code&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container error container-short"},r.a.createElement("div",{className:"mar-20"},r.a.createElement("h5",null,"Error"),r.a.createElement("h4",null,this.state.error.message),r.a.createElement("br",null))))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container container-short py-5"},r.a.createElement("div",{className:"split left"},r.a.createElement("div",{className:"centered img"},r.a.createElement("img",{src:"../logo.png",alt:"AFMS Logo"}))),r.a.createElement("div",{className:"split right"},r.a.createElement("div",{className:"centered"},e,r.a.createElement("h1",{className:"pt-2 py-2"},this.state.isLoginMode?"Login ":"Sign Up"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.mySubmitHandler,className:"pt-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email "),r.a.createElement("input",{type:"email",name:"email",value:this.state.user.email,className:"form-control "+(this.state.errors.email?"is-invalid":""),placeholder:"Enter your email",required:!0,onChange:this.myChangeHandler}),this.state.errors.email.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.email))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password "),r.a.createElement("input",{type:"password",name:"password",value:this.state.user.password,className:"form-control "+(this.state.errors.password?"is-invalid":""),placeholder:"Enter your Password",required:"required","data-error":"Please enter your full name.",onChange:this.myChangeHandler}),this.state.errors.password.length>0&&r.a.createElement("div",{className:"mt-1"}," ",r.a.createElement("span",{className:"error text-danger"},this.state.errors.password))),t,r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{style:{marginRight:"15px"},type:"submit",className:"btn btn-success",disabled:this.state.user.email&&this.state.user.password&&b(this.state.errors)?"":"disabled"},this.state.isLoginMode?"Login":"Sign Up"),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.switchLoginhandler},"Switch to ",this.state.isLoginMode?"Sign Up":"Login"," ")))))))}}]),a}(n.Component);k.contextType=N;var w=Object(i.h)(k),x=a(28),S=a.n(x),O=a(44),j=a.n(O),D=a(45),L=a.n(D),C=a(46),R=a.n(C),F=a(47),_=a.n(F);var I=function(){return r.a.createElement("div",{className:"mobile-only"},r.a.createElement("div",{className:"footer-icons"},r.a.createElement("ul",{className:"navbar-nav "},r.a.createElement("li",{className:"nav-item inline-block"},r.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"nav-link"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",{className:"nav-item inline-block"},r.a.createElement("a",{href:"https://www.instagram.com","aria-label":"Insagram",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",{className:"nav-item inline-block"},r.a.createElement("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"nav-link"},r.a.createElement("i",{className:"fa fa-linkedin"}))))))};a(99);var q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",{className:"fadeInUp col-md-12"},r.a.createElement(I,null)),r.a.createElement("h5",{className:"text-center copyright"}," \xa9 developed by AFMS"))},P=(a(100),a(48)),A=a.n(P),H=(a(101),a(121));A.a.init();var T=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"myDiv"},r.a.createElement("div",{class:"bg"}),r.a.createElement("div",{class:"typewriter"},r.a.createElement("h1",{class:"h1"},"Welcome to ..")),r.a.createElement("img",{src:j.a,class:"img",alt:"img"})),r.a.createElement("div",null,r.a.createElement("div",{id:"why","data-aos":"fade-up","data-aos-offset":"200","data-aos-delay":"30","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true","data-aos-anchor-placement":"top-center",className:"container hero"},r.a.createElement("div",{className:"row align-items-center text-center text-md-left"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(H.a,{style:{width:"25rem","align-items":"center"}},r.a.createElement(H.a.Img,{variant:"top",src:L.a,style:{width:"64px",height:"64px"}}),r.a.createElement(H.a.Body,{style:{"text-align":"center"}},r.a.createElement(H.a.Title,null,"YOUR PERSONAL FIELD ASSISSTANCE"),r.a.createElement(H.a.Text,null,"Between your hands.")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(H.a,{style:{width:"25rem","align-items":"center"}},r.a.createElement(H.a.Img,{variant:"top",src:R.a,style:{width:"64px",height:"64px"}}),r.a.createElement(H.a.Body,{style:{"text-align":"center"}},r.a.createElement(H.a.Title,null,"USER FRIENDLY INTERFACE"),r.a.createElement(H.a.Text,null,"Four clicks away from your data.")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(H.a,{style:{width:"27rem","align-items":"center"}},r.a.createElement(H.a.Img,{variant:"top",src:_.a,style:{width:"64px",height:"64px"}}),r.a.createElement(H.a.Body,{style:{"text-align":"center"}},r.a.createElement(H.a.Title,null,"CREATING AGRICULTURAL COMMUNITY"),r.a.createElement(H.a.Text,null,"All you want in one place.")))))),r.a.createElement("div",{id:"why1","data-aos":"fade-right","data-aos-offset":"200","data-aos-delay":"30","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true","data-aos-anchor-placement":"top-center",className:"container hero"},r.a.createElement("div",{className:"row align-items-center text-center text-md-left"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("h1",{className:"mb-3 display-3"},"Smart Agriculture"),r.a.createElement("p",null,"In order to increase crop production, increase productivity and decrease the use of agricultural inputs, precision agriculture is about controlling variations in the region.")),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("img",{src:S.a,className:"img-fluid",alt:"img"})))),r.a.createElement("div",{id:"why2","data-aos":"fade-left","data-aos-offset":"200","data-aos-delay":"30","data-aos-duration":"1000","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true","data-aos-anchor-placement":"top-center",className:"container hero"},r.a.createElement("div",{className:"row align-items-center text-center text-md-left"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("h1",{className:"mb-3 display-3"},"Smart Agriculture"),r.a.createElement("p",null,"In order to increase crop production, increase productivity and decrease the use of agricultural inputs, precision agriculture is about controlling variations in the region.")),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("img",{src:S.a,className:"img-fluid",alt:"img"})))),r.a.createElement(q,null)))}}]),a}(n.Component),M=(a(102),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.onClick})}),U=(a(103),function(e){return r.a.createElement("header",{className:"main-header"},e.children)}),B=(a(104),function(e){var t=Object(i.g)(),a=Object(n.useContext)(N);return r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://afmsagr.wordpress.com/",target:"_blank",rel:"noopener noreferrer"},"Blog")),a.isLoggedIn&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.c,{to:"/dashboard"},"Crop Diagnoses")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/table"},"Sensors Data")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/add"},"Add Data Record"))),!a.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(o.c,{to:"/auth"},"Login/Register")),a.isLoggedIn&&r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){console.log(t),a.logout(),t.push("/auth")}},"Logout")))}),J=(a(105),function(e){return r.a.createElement("aside",{className:"side-drawer",onClick:e.closed},e.children)}),W=(a(106),a(49)),z=a.n(W),Y=function(e){var t=["SideDrawer","Close"],a=Object(n.useState)(!1),l=Object(c.a)(a,2),s=l[0],i=l[1];s&&(t=["SideDrawer","Open"]);var m=function(){i(!1)};return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(M,{onClick:m}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement(J,{open:s,closed:m},r.a.createElement("h3",{className:"text-left mt-2 pl-4"},"AFMS"),r.a.createElement("hr",null),r.a.createElement("nav",{className:"main-navigation__drawer-nav"},r.a.createElement("img",{src:z.a,alt:"logo"}),r.a.createElement("div",{className:"mobile"},r.a.createElement(I,null)),r.a.createElement(B,null)))),r.a.createElement(U,null,r.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){i(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("h1",{className:"main-navigation__title"},r.a.createElement(o.b,{style:{fontFamily:"Agustina Regular"},to:"/"},"AFMS")),r.a.createElement("nav",{className:"main-navigation__header-nav"},r.a.createElement(B,null))))},$=a(120),G=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={selectedFile:null,result:""},e.onFileChange=function(t){e.setState({selectedFile:t.target.files[0]})},e.onFileUpload=function(){var t=new FormData;t.append("image",e.state.selectedFile,e.state.selectedFile.name),console.log(e.state.selectedFile),u.a.post("https://ml-plant.azurewebsites.net/predict",t).then((function(t){e.setState({result:t.data})}))},e.fileData=function(){return e.state.selectedFile?r.a.createElement("div",null,r.a.createElement("h2",null,"File Details:"),r.a.createElement("p",null,"File Name: ",e.state.selectedFile.name),r.a.createElement("p",null,"File Type: ",e.state.selectedFile.type),r.a.createElement("p",null,"Last Modified:"," ",e.state.selectedFile.lastModifiedDate.toDateString())):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h4",null,"Choose before Pressing the Upload button"))},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement($.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Potato Blight Check"),r.a.createElement("h3",null,"Please, Upload Potato picture!"),r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:this.onFileChange}),r.a.createElement("button",{onClick:this.onFileUpload},"Upload!")),this.fileData(),r.a.createElement("br",null),r.a.createElement("h3",null,"Result = ",this.state.result)))}}]),a}(n.Component),V=a(119),K=a(51),Q=(a(110),a(111),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).mySubmitHandler=function(e){n.setState((function(e){return{isloading:!0}})),e.preventDefault(),b(n.state.errors),u.a.put("/table/"+n.props.text._id.toString(),n.state.data).then((function(e){return n.setState((function(e){return{isloading:!1}})),window.location.reload(!1),"success"})).catch((function(e){n.setState({isloading:!1,error:Object(h.a)(Object(h.a)({},n.state.error),{},{message:e.response.data.message,code:e.response.status})})})),n.setState({data:Object(h.a)(Object(h.a)({},n.state.data),{},{LDR:"",temp:"",hum:"",ph:"",device_number:""})})},n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r=n.state.errors,l=e.target,s=l.name,c=l.value;switch(s){case"LDR":if(0===c.length){r.LDR=c.length<0?"LDR is Required!":"";break}break;case"temp":if(0===c.length){r.temp=c.length<0?"temp is Required!":"";break}break;case"hum":if(0===c.length){r.hum=c.length<0?"hum is Required!":"";break}break;case"ph":if(0===c.length){r.ph=c.length<0?"ph is Required!":"";break}break;case"device_number":if(0===c.length){r.device_number=c.length<0?"device_number is Required!":"";break}}n.setState({errors:r,data:Object(h.a)(Object(h.a)({},n.state.data),{},Object(d.a)({},t,a))},(function(){}))},n.state={data:{LDR:n.props.text.LDR,temp:n.props.text.temp,hum:n.props.text.hum,ph:n.props.text.ph,device_number:n.props.text.device_number},error:{message:"",code:""},isloading:!1,errors:{LDR:"",temp:"",hum:"",ph:"",device_number:""}},n}return Object(g.a)(a,[{key:"isNumeric",value:function(e){return/^-?\d+$/.test(e)}},{key:"render",value:function(){var e,t;return this.state.isloading&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container loading"},r.a.createElement("div",{className:"mar-20"},r.a.createElement(y,null))))),this.state.error.code&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container error container-short"},r.a.createElement("div",{className:"mar-20"},r.a.createElement("h5",null,"Error Code - ",this.state.error.code),r.a.createElement("h4",null,"Error Message - ",this.state.error.message))))),r.a.createElement(r.a.Fragment,null,e,t,r.a.createElement("div",{className:"popup_inner"},r.a.createElement("div",{className:"popup_inner"},r.a.createElement("h1",null,"Edit Data"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.mySubmitHandler,className:"pt-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"LDR"},"LDR "),r.a.createElement("input",{type:"text",name:"LDR",value:this.state.data.LDR,className:"form-control "+(this.state.errors.LDR?"is-invalid":""),placeholder:"Enter LDR",required:!0,onChange:this.myChangeHandler}),this.state.errors.LDR.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.LDR))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"temp"},"temp "),r.a.createElement("input",{type:"text",name:"temp",value:this.state.data.temp,className:"form-control "+(this.state.errors.temp?"is-invalid":""),placeholder:"Enter temp",required:!0,onChange:this.myChangeHandler}),this.state.errors.temp.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.temp))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"hum"},"hum "),r.a.createElement("input",{type:"text",name:"hum",value:this.state.data.hum,className:"form-control "+(this.state.errors.hum?"is-invalid":""),placeholder:"Enter hum",required:!0,onChange:this.myChangeHandler}),this.state.errors.hum.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.hum))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ph"},"ph "),r.a.createElement("input",{type:"text",name:"ph",value:this.state.data.ph,className:"form-control "+(this.state.errors.ph?"is-invalid":""),placeholder:"Enter ph",required:!0,onChange:this.myChangeHandler}),this.state.errors.ph.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.ph))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ph"},"device_number "),r.a.createElement("input",{type:"text",name:"device_number",value:this.state.data.device_number,className:"form-control "+(this.state.errors.device_number?"is-invalid":""),placeholder:"Enter device_number",required:!0,onChange:this.myChangeHandler}),this.state.errors.device_number.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.device_number))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{style:{marginRight:"15px"},type:"submit",className:"btn btn-success",disabled:this.isNumeric(this.state.data.LDR)&&this.isNumeric(this.state.data.ph)&&this.isNumeric(this.state.data.temp)&&this.isNumeric(this.state.data.hum)&&this.isNumeric(this.state.data.device_number)&&b(this.state.errors)?"":"disabled"},"Edit Data"),r.a.createElement("button",{style:{marginRight:"15px"},className:"btn btn-success",onClick:this.props.closePopup},"Cancel"))))))}}]),a}(r.a.Component)),X=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).togglePopup=function(t,a){t.preventDefault(),u.a.get("/table/"+a.toString()).then((function(t){return e.setState({showPopup:!e.state.showPopup,output_data:t.data}),"success"})).catch((function(e){return"error"}))},e.mySubmitHandler=function(e,t){e.preventDefault(),!0===window.confirm("Do you really want to delete this record?")&&u.a.delete("/table/"+t.toString()).then((function(e){return window.location.reload(!1),"success"})).catch((function(e){return"error"}))},e.state={data:[],showPopup:!1,output_data:{}},e}return Object(g.a)(a,[{key:"togglePopup1",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"componentWillMount",value:function(){var e=this;fetch("https://afmsbackend.herokuapp.com/api/table").then((function(t){t.json().then((function(t){e.setState({data:t}),console.log(t)}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{"margin-top":"20px"}},r.a.createElement($.a,null,r.a.createElement("h1",{style:{"text-align":"center",marginBottom:"25px",marginTop:"30px"}},"Sensors Data"),r.a.createElement(V.a,{bordered:!0,striped:!0,hover:!0,className:"container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Time Stamp "),r.a.createElement("th",null,"LDR"),r.a.createElement("th",null,"Hummidty"),r.a.createElement("th",null,"PH"),r.a.createElement("th",null,"Temprature"),r.a.createElement("th",null,"Device"))),r.a.createElement("tbody",null,this.state.data.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.creation_time),r.a.createElement("td",null,e.LDR),r.a.createElement("td",null,e.hum),r.a.createElement("td",null,e.ph),r.a.createElement("td",null,e.temp),r.a.createElement("td",null,e.device_number))})))),r.a.createElement(K.CSVLink,{data:this.state.data},"Download me"),this.state.showPopup?r.a.createElement(Q,{text:this.state.output_data,closePopup:this.togglePopup1.bind(this)}):null)))}}]),a}(n.Component),Z=(a(112),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).mySubmitHandler=function(e){n.setState((function(e){return{isloading:!0}})),e.preventDefault(),b(n.state.errors),u.a.post("/table",n.state.data).then((function(e){return n.setState((function(e){return{isloading:!1}})),n.props.history.push("/table"),"success"})).catch((function(e){n.setState({isloading:!1,error:Object(h.a)(Object(h.a)({},n.state.error),{},{message:e.response.data.message,code:e.response.status})})})),n.setState({data:Object(h.a)(Object(h.a)({},n.state.data),{},{LDR:"",temp:"",hum:"",ph:"",device_number:""})})},n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,r=n.state.errors,l=e.target,s=l.name,c=l.value;switch(s){case"LDR":if(0===c.length){r.LDR=c.length<5?"LDR is Required!":"";break}break;case"temp":if(0===c.length){r.temp=c.length<5?"temp is Required!":"";break}break;case"hum":if(0===c.length){r.hum=c.length<5?"hum is Required!":"";break}break;case"ph":if(0===c.length){r.ph=c.length<5?"ph is Required!":"";break}break;case"device_number":if(0===c.length){r.device_number=c.length<5?"device_number is Required!":"";break}}n.setState({errors:r,data:Object(h.a)(Object(h.a)({},n.state.data),{},Object(d.a)({},t,a))},(function(){}))},n.state={data:{LDR:"",temp:"",hum:"",ph:"",device_number:""},error:{message:"",code:""},isloading:!1,errors:{LDR:"",temp:"",hum:"",ph:"",device_number:""}},n}return Object(g.a)(a,[{key:"isNumeric",value:function(e){return/^-?\d+$/.test(e)}},{key:"render",value:function(){var e,t;return this.state.isloading&&(e=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container loading"},r.a.createElement("div",{className:"mar-20"},r.a.createElement(y,null))))),this.state.error.code&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container error container-short"},r.a.createElement("div",{className:"mar-20"},r.a.createElement("h5",null,"Error Code - ",this.state.error.code),r.a.createElement("h4",null,"Error Message - ",this.state.error.message))))),r.a.createElement(r.a.Fragment,null,e,t,r.a.createElement("div",{className:"container container-short py-5"},r.a.createElement("h1",{className:"pt-2 py-2"},"Add Data"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.mySubmitHandler,className:"pt-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"LDR"},"LDR "),r.a.createElement("input",{type:"text",name:"LDR",value:this.state.data.LDR,className:"form-control "+(this.state.errors.LDR?"is-invalid":""),placeholder:"Enter LDR",required:!0,onChange:this.myChangeHandler}),this.state.errors.LDR.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.LDR))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"temp"},"temp "),r.a.createElement("input",{type:"text",name:"temp",value:this.state.data.temp,className:"form-control "+(this.state.errors.temp?"is-invalid":""),placeholder:"Enter temp",required:!0,onChange:this.myChangeHandler}),this.state.errors.temp.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.temp))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"hum"},"hum "),r.a.createElement("input",{type:"text",name:"hum",value:this.state.data.hum,className:"form-control "+(this.state.errors.hum?"is-invalid":""),placeholder:"Enter hum",required:!0,onChange:this.myChangeHandler}),this.state.errors.hum.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.hum))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ph"},"ph "),r.a.createElement("input",{type:"text",name:"ph",value:this.state.data.ph,className:"form-control "+(this.state.errors.ph?"is-invalid":""),placeholder:"Enter ph",required:!0,onChange:this.myChangeHandler}),this.state.errors.ph.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.ph))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"ph"},"device_number "),r.a.createElement("input",{type:"text",name:"device_number",value:this.state.data.device_number,className:"form-control "+(this.state.errors.device_number?"is-invalid":""),placeholder:"Enter device_number",required:!0,onChange:this.myChangeHandler}),this.state.errors.device_number.length>0&&r.a.createElement("div",{className:"mt-1"},r.a.createElement("span",{className:"error text-danger"},this.state.errors.device_number))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{style:{marginRight:"15px"},type:"submit",className:"btn btn-success",disabled:this.isNumeric(this.state.data.LDR)&&this.isNumeric(this.state.data.ph)&&this.isNumeric(this.state.data.temp)&&this.isNumeric(this.state.data.hum)&&this.isNumeric(this.state.data.device_number)&&b(this.state.errors)?"":"disabled"},"Add Data")))))}}]),a}(n.Component));a(113);var ee,te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-icon-sidebar"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item inline-block"},r.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"nav-link"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",{className:"nav-item inline-block"},r.a.createElement("a",{href:"https://www.instagram.com","aria-label":"Insagram",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",{className:"nav-item inline-block"},r.a.createElement("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"nav-link"},r.a.createElement("i",{className:"fa fa-linkedin"}))))))},ae=function(e){var t,a,l=Object(n.useState)(!1),s=Object(c.a)(l,2),m=s[0],d=s[1],h=Object(n.useState)(),p=Object(c.a)(h,2),g=p[0],E=p[1],f=Object(n.useState)(!1),b=Object(c.a)(f,2),v=b[0],k=b[1],x=Object(n.useState)(!0),S=Object(c.a)(x,2),O=S[0],j=S[1],D=Object(n.useCallback)((function(e,t,a){d(t),k(e),j(!1);var n=a||new Date((new Date).getTime()+36e5);E(n),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:n.toISOString()})),u.a.defaults.headers.common.Authorization="Bearer ".concat(t)}),[]),L=Object(n.useCallback)((function(){d(null),E(null),k(null),localStorage.removeItem("userData");u.a.defaults.headers.common.Authorization="Bearer ".concat(null)}),[]);return Object(n.useEffect)((function(){if(m&&g){var e=g.getTime()-(new Date).getTime();ee=setTimeout(L,e)}else clearTimeout(ee)}),[m,L,g]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));j(!1),e&&e.token&&new Date(e.expiration)>new Date&&D(e.userId,e.token,new Date(e.expiration))}),[D]),O?a=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container loading"},r.a.createElement("div",{className:"mar-20"},r.a.createElement(y,null)))):t=r.a.createElement(r.a.Fragment,null,m?r.a.createElement(i.b,{path:"/dashboard",exact:!0,component:G}):r.a.createElement(i.a,{to:"/auth"}),m?r.a.createElement(i.b,{path:"/table",exact:!0,component:X}):r.a.createElement(i.a,{to:"/auth"}),m?r.a.createElement(i.b,{path:"/add",exact:!0,component:Z}):r.a.createElement(i.a,{to:"/auth"})),r.a.createElement(N.Provider,{value:{isLoggedIn:!!m,token:m,userId:v,login:D,logout:L}},r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement(o.a,null,r.a.createElement(Y,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/auth",component:w,exact:!0}),r.a.createElement(i.b,{path:"/",component:T,exact:!0}),t)),r.a.createElement(te,null)),a))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(114),a(115),a(116);u.a.defaults.baseURL="https://afmsbackend.herokuapp.com/api";var ne,re=JSON.parse(localStorage.getItem("userData"));re&&(ne=re.token),u.a.defaults.headers.common.Authorization="Bearer ".concat(ne),u.a.defaults.headers.post["Content-Type"]="application/json",u.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",u.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){e.exports=a.p+"static/media/7.03760d16.png"},44:function(e,t,a){e.exports=a.p+"static/media/logo.e760f07c.svg"},45:function(e,t,a){e.exports=a.p+"static/media/cloud.d414eba1.svg"},46:function(e,t,a){e.exports=a.p+"static/media/features.af8c475e.svg"},47:function(e,t,a){e.exports=a.p+"static/media/heart.25ebc111.svg"},49:function(e,t,a){e.exports=a.p+"static/media/asset-1.171cd5d9.png"},66:function(e,t,a){e.exports=a(117)},71:function(e,t,a){},72:function(e,t,a){},91:function(e,t,a){},99:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.5b24642e.chunk.js.map