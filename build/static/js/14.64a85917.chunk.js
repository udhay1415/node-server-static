(window["webpackJsonpvue.ai"]=window["webpackJsonpvue.ai"]||[]).push([[14],{538:function(e,t,i){"use strict";i.r(t);var a=i(10),n=i(0),u=i.n(n),m=i(25),d=i(71),_=i(527),r=i(153),l=i(539),s=i(3),p=i(4);function o(){var e=Object(s.a)(['\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n  font-family: "SourceSansPro-Regular";\n  font-size: 14px;\n  font-weight: bold;\n']);return o=function(){return e},e}function g(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: space-between;\n  margin-left: 20px;\n"]);return g=function(){return e},e}function c(){var e=Object(s.a)(["\n  height: 150px;\n  display: flex;\n  padding: 15px 0;\n  border-bottom: 1px solid #c0c0c0;\n"]);return c=function(){return e},e}function h(){var e=Object(s.a)(["\n  width: 40%;\n  margin-left: 15%;\n  background: #fff;\n  padding: 10px 20px;\n"]);return h=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: flex;\n  width: 100%;\n"]);return y=function(){return e},e}function v(){var e=Object(s.a)(["\n    border: 1px solid black;\n    padding: 1rem;\n"]);return v=function(){return e},e}function w(){var e=Object(s.a)(["\n    text-align: left;\n"]);return w=function(){return e},e}function f(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    // margin-top: 50px;\n    width: 80%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 1rem;\n\n"]);return f=function(){return e},e}function k(){var e=Object(s.a)(["\n    \n"]);return k=function(){return e},e}function b(){var e=Object(s.a)(["\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100px;\n"]);return b=function(){return e},e}function E(){var e=Object(s.a)(["\n    color: #064559;\n    font-size: 1.25em;\n    text-align: center;\n"]);return E=function(){return e},e}function x(){var e=Object(s.a)(["\n    margin-top: 4em;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n"]);return x=function(){return e},e}function j(){var e=Object(s.a)(['\n    height: 3.5em;\n    line-height: 3.5em;\n    border-bottom: 1px solid #E2E2E2;\n    text-transform: uppercase;\n    text-align: center;\n    color: #064559;\n    font-size: 1.25em;\n    font-family: "SourceSansPro-SemiBold";\n    position: fixed;\n    top: 45px;\n    min-width: 1240px;\n    width: 100%;\n    z-index: 1;\n    background-color: #fff;\n']);return j=function(){return e},e}p.c.div(j());var O=p.c.div(x()),S=p.c.div(E()),P=(p.c.div(b()),p.c.div(k()),p.c.div(f())),T=p.c.h3(w()),C=p.c.div(v()),I=p.c.div(y()),F=p.c.div(h()),Y=p.c.div(c()),z=p.c.div(g()),A=p.c.div(o()),D=i(38),J=i(526),L=function(e){var t=localStorage.getItem("cart_items"),i=Object(n.useState)(!0),m=Object(a.a)(i,2),d=m[0],s=m[1],p=Object(n.useState)([]),o=Object(a.a)(p,2),g=o[0],c=o[1],h=e.html_string,y=e.email_preview,v=e.update_email_preview,w=e.active,f=Object(n.useState)(""),k=Object(a.a)(f,2),b=k[0],E=k[1],x=Object(n.useState)(h),j=Object(a.a)(x,2),O=j[0];j[1];var T=[];if(void 0!=t&&""!=t&&"{}"!=t&&d){for(var C in s(!1),t=JSON.parse(t)){console.log(C);var L={};L.childKey=C,L.title=t[C].title,L.meta=t[C].product_id,L.image=t[C].image_link,L.price=t[C].price,T.push(L)}c(T),console.log("temp_items",T)}return u.a.createElement(u.a.Fragment,null,g.length>0?u.a.createElement("div",null,u.a.createElement(I,null,u.a.createElement(F,null,u.a.createElement("h3",null,"Your have ordered ".concat(g.length," item(s)")),g.map((function(e){return u.a.createElement("div",null,u.a.createElement(Y,null,u.a.createElement("div",{style:{borderWidth:"1px"}},u.a.createElement("img",{src:e.image,height:"120px"})),u.a.createElement(z,null,u.a.createElement(A,null,u.a.createElement("div",null,e.title),u.a.createElement("div",null,"$ ".concat(e.price))))))}))),u.a.createElement("div",{style:{background:"#fff",width:"25%",height:"210px",marginRight:"15%",marginLeft:"5%",padding:"20px"}},u.a.createElement(P,null,u.a.createElement(_.a,{iconPosition:"left",placeholder:"Email",onChange:function(e,t){E(t.value)},style:{minWidth:200}},u.a.createElement(r.a,{name:"at"}),u.a.createElement("input",null)),u.a.createElement(l.a,{style:{marginTop:"1rem"},color:"blue",disabled:!w,onClick:function(){var e=D.b.endPoint+"/api/send_email/";fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email_id:b,email_data:O})}).then((function(e){return e.json()})).then((function(e){e&&e.status&&"success"===e.status.toLowerCase()&&alert("Email Sent Successfully")})).catch((function(e){return console.log(e)}))}},"Send Mail"),w?u.a.createElement(J.a,{style:{marginTop:"1rem"},toggle:!0,checked:y,label:"Email Preview",onChange:function(){return v(!y)}}):null)))):u.a.createElement(S,null,"Your cart is empty"))},R=function(e){var t=e.html_string,i=e.email_preview;return u.a.createElement(u.a.Fragment,null,u.a.createElement(P,null,i?u.a.createElement(u.a.Fragment,null," ",u.a.createElement(T,null,"Email Preview")," ",u.a.createElement(C,null,u.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))," "):null))},B='<!DOCTYPE html><html><!DOCTYPE html><html> <head> <title>TATA VUEMAIL</title> </head> <body> <div class="row"> <div class="column"> <p style="text-align: left;">Hello {user_id},<p> </div> <div class="column"> <p style="text-align: left;">Based on your recent activity, we thought you might be interested in these products</p> </div> <div class="column" style="margin-top: 3rem;text-align: center;"> <h3>Browsing based recommendation</h3> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}" <img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=1&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"></a> </div> \x3c!-- <div class="column" style="margin-top: 1rem;text-align: center;"> <h4>Trending</h4> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}" <img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=3&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"></a> </div> --\x3e <div class="column" style="margin-top: 1rem;text-align: center;"> <h3>Recently Viewed Products </h3> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}" <img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=7&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"></a> </div> <div class="column" style="margin-top: 1rem;text-align: center;"> <h3>Recommended for you</h3> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=0&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}" <img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=1&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=2&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=3&width=200&height=300&ts={ts}&template={template_name}"></a> <a href = "{vuemail_endpoint}/link/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"><img src="{vuemail_endpoint}/image/?num_results={num_results}&api_key={api_key}&widget_id=11&mad_uuid={mad_uuid}&user_id={user_id}&image_no=4&width=200&height=300&ts={ts}&template={template_name}"></a> </div> </body></html> </body></html>',M=function(e){var t=Object(n.useState)(!1),i=Object(a.a)(t,2),_=i[0],r=i[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement(O,null,u.a.createElement(m.e,null,(function(e){var t=e.vue_mail,i=e.API_KEY,a=Object(d.c)("mad_UUID"),n=localStorage.getItem("userId");n||(n=e.user_id);var m=t.endPoint,l=t.num_results,s=t.template_name,p=t.active,o=i,g=(new Date).getTime();return B=B.replace(/{vuemail_endpoint}/g,m).replace(/{num_results}/g,l).replace(/{api_key}/g,o).replace(/{widget_id}/g,"1").replace(/{mad_uuid}/g,a).replace(/{user_id}/g,n).replace(/{template_name}/g,s).replace(/{ts}/g,g),u.a.createElement(u.a.Fragment,null,u.a.createElement(L,{html_string:B,email_preview:_,update_email_preview:r,active:p}),u.a.createElement(R,{html_string:B,email_preview:_}))}))))};i.d(t,"OrderConfirmation",(function(){return M})),i.d(t,"default",(function(){return M}))}}]);
//# sourceMappingURL=14.64a85917.chunk.js.map