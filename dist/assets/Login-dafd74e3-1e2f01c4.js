import{v as d,X as p,L as g,g as u,a,b as f,Y as w,m as b,x as i,c,d as h,l as v,N as y,f as S}from"./index-b147ae6c.js";import{s as k}from"./black-snkr-5a846b1a-8920e2e0.js";const I={data(){return{email:"",password:""}},methods:{async fetchData(){const o={email:this.email,password:this.password};try{const s=await fetch("https://sneakpeek-backend.onrender.com/users/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}),e=await s.json();s.ok&&(localStorage.setItem("id",e.id),console.log(e.id),localStorage.setItem("firstname",e.firstname),console.log(e.firstname),localStorage.setItem("lastname",e.lastname),console.log(e.lastname),localStorage.setItem("email",e.email),console.log(e.email),localStorage.setItem("password",e.password),console.log(e.password),localStorage.setItem("accessToken",e.accessToken),console.log(e.accessToken),p.push("/"))}catch(s){console.error(s)}}}},t=o=>(g("data-v-32a3ce31"),o=o(),u(),o),O=t(()=>a("div",{id:"bg"},[a("img",{src:k,alt:""})],-1)),T={id:"container"},x=t(()=>a("h1",null,"Log in",-1)),L=t(()=>a("label",{for:"email"},[a("b",null,"Email")],-1)),j=t(()=>a("label",{for:"psw"},[a("b",null,"Password")],-1)),D=t(()=>a("button",{type:"submit",class:"signinbtn"},"Log in",-1)),N=t(()=>a("div",{class:"line"},null,-1));function V(o,s,e,_,n,r){const m=f("router-link");return w(),b("form",{onSubmit:s[2]||(s[2]=y((...l)=>r.fetchData&&r.fetchData(...l),["prevent"]))},[O,a("section",T,[x,L,i(a("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=l=>n.email=l),name:"email",required:""},null,512),[[c,n.email]]),j,i(a("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=l=>n.password=l),name:"psw",required:""},null,512),[[c,n.password]]),D,N,h(m,{to:"/register",class:"register"},{default:v(()=>[S("Register")]),_:1})])],32)}const P=d(I,[["render",V],["__scopeId","data-v-32a3ce31"]]);export{P as default};