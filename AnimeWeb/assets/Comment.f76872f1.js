import{_ as x,u as C,F as m,r as w,o as a,c as l,a as e,j as d,b as y,d as p,t as g,f as _,e as b,w as $,g as v}from"./index.4c92d78a.js";const k={props:{id:String,comments:Array},setup(){const r=C();return{store:r,getUser:()=>r.getUser,isAdmin:()=>r.isAdmin}},data(){return{goal:""}},methods:{async comment(r){const o=document.forms[`form${this.id}`],i=document.querySelector(`#textarea${this.id}`);i.value=i.value.replace(/(?:\r\n|\r|\n)/g,"<br>");const n=document.querySelector(`button[name="reset${this.id}"]`),u=new FormData(o);u.append("userId",r);try{await m.comment(this.id,u),n.click(),this.$emit("reRender")}catch(c){console.log(c),alert("C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng th\u1EED l\u1EA1i!")}},preReply(r,o){const i=document.querySelector(`#textarea${r}`),n=document.querySelector(`a[href="#a${r}"]`);this.goal=o,n.click(),i.focus()},async reply(r,o){const i=document.forms[`form${r}`],n=document.querySelector(`#textarea${r}`),u=document.querySelector(`a[href="#a${r}"]`);n.value=n.value.replace(/(?:\r\n|\r|\n)/g,"<br>");const c=document.querySelector(`button[name="reset${r}"]`),h=new FormData(i);h.append("userId",o),h.append("goal",this.goal);try{await m.feedback(this.id,r,h),c.click(),u.click(),this.$emit("reRender")}catch(s){console.log(s),alert("C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng th\u1EED l\u1EA1i!")}},async deleteCmt(r){try{await m.deleteComment(this.id,r),this.$emit("reRender")}catch(o){console.log(o),alert("C\xF3 l\u1ED7i!")}},async deleteReply(r,o){try{console.log("Reply ID",o),await m.deleteReply(this.id,r,o),this.$emit("reRender")}catch(i){console.log(i),alert("C\xF3 l\u1ED7i!")}}}},R=e("h3",{class:"border-bottom pb-3"},"B\xECnh lu\u1EADn",-1),S={class:"container mt-3"},U=["name"],q=["id"],A={class:"text-end"},B=["name"],D={key:1,class:"text-warning fs-5"},F={class:"row"},T={class:"container ms-2 mt-2 py-2 d-flex align-items-center border-top"},N={class:"h-100 mt-4"},V={class:"square-4"},j=["src"],L={class:"flex-grow-1 ms-4"},M={class:"mb-0 fs-4"},G=["innerHTML"],H=["onClick"],X=["onClick"],E={key:0},z={class:"row"},J={class:"container ms-2 mt-2 py-2 d-flex align-items-center border-top"},K={class:"square-4"},O=["src"],P={class:"flex-grow-1 ms-4"},Q={class:"mb-0 fs-4"},W={class:"mb-0 fs-5"},Y={class:"ms-2"},Z=["onClick"],I=["onClick"],ee=["href","aria-controls"],se=["id"],te={class:"card card-body border-0"},re=["name"],ne=["id"],oe=v(" --> "),ie=["onClick"],ae=["name"];function le(r,o,i,n,u,c){const h=w("router-link");return a(),l("section",null,[R,e("div",S,[n.getUser()?(a(),l("form",{key:0,class:"d-block text-top",name:`form${i.id}`,action:""},[e("textarea",{class:"d-inline-block w-100 p-2 rounded",name:"message",id:`textarea${i.id}`,rows:"1",placeholder:"..."},null,8,q),e("div",A,[e("a",{onClick:o[0]||(o[0]=d(s=>c.comment(n.getUser()._id),["prevent"])),class:"btn btn-primary fs-4",href:""},"G\u1EEDi")]),e("button",{class:"d-none",type:"reset",name:`reset${i.id}`},null,8,B)],8,U)):(a(),l("p",D,"B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp \u0111\u1EC3 c\xF3 th\u1EC3 b\xECnh lu\u1EADn!")),(a(!0),l(y,null,p(i.comments,(s,ce)=>(a(),l("section",F,[e("section",T,[e("div",N,[e("div",V,[e("img",{class:"w-100 h-100 rounded-circle object-fit",src:s.user&&s.user.image,alt:""},null,8,j)])]),e("div",L,[e("div",null,[e("p",M,g(s.user&&s.user.name),1),e("p",{class:"mb-0 fs-5",innerHTML:s.message},null,8,G)]),e("div",null,[n.getUser()?(a(),l("a",{key:0,onClick:d(t=>c.preReply(s._id,s.user._id),["prevent"]),class:"text-primary fs-5",href:""},"Tr\u1EA3 l\u1EDDi",8,H)):_("",!0),n.getUser()._id==s.user._id||n.isAdmin()?(a(),l("a",{key:1,onClick:d(t=>c.deleteCmt(s._id),["prevent"]),class:"text-primary fs-5 ms-2",href:""},"X\xF3a",8,X)):_("",!0)]),s!=null&&s.feedbacks?(a(),l("section",E,[(a(!0),l(y,null,p(s.feedbacks,t=>(a(),l("div",z,[e("section",J,[e("div",K,[e("img",{class:"w-100 h-100 rounded-circle object-fit",src:(t==null?void 0:t.user)&&t.user.image,alt:""},null,8,O)]),e("div",P,[e("div",null,[e("p",Q,g((t==null?void 0:t.user)&&t.user.name),1),e("p",W,[b(h,{onClick:o[1]||(o[1]=d(()=>{},["prevent"])),class:"badge bg-success",to:"@"},{default:$(()=>[v("@"+g((t==null?void 0:t.goal)&&t.goal.name),1)]),_:2},1024),e("span",Y,g(t&&t.message),1)])]),e("div",null,[n.getUser()?(a(),l("a",{key:0,onClick:d(f=>c.preReply(s._id,t.user._id),["prevent"]),class:"text-primary fs-5",href:""},"Tr\u1EA3 l\u1EDDi",8,Z)):_("",!0),n.getUser()._id==t.user._id||n.isAdmin()?(a(),l("a",{key:1,onClick:d(f=>c.deleteReply(s._id,t._id),["prevent"]),class:"text-primary fs-5 ms-2",href:""},"X\xF3a",8,I)):_("",!0)])])])]))),256))])):_("",!0),e("div",null,[e("a",{class:"text-primary fs-5","data-bs-toggle":"collapse",href:`#a${s._id}`,role:"button","aria-expanded":"false","aria-controls":`a${s._id}`},null,8,ee),e("div",{class:"collapse",id:`a${s._id}`},[e("div",te,[n.getUser()?(a(),l("form",{key:0,name:`form${s._id}`,action:""},[e("textarea",{class:"w-100",name:"message",id:`textarea${s._id}`,rows:"1",placeholder:"..."},null,8,ne),oe,e("a",{onClick:d(t=>c.reply(s._id,n.getUser()._id),["prevent"]),class:"btn btn-primary",href:""},"G\u1EEDi",8,ie),e("button",{class:"d-none",type:"reset",name:`reset${s._id}`},null,8,ae)],8,re)):_("",!0)])],8,se)])])])]))),256))])])}const _e=x(k,[["render",le]]);export{_e as C};
