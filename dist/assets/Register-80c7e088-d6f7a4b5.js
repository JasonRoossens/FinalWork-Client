import{v as d,X as u,L as p,g as c,a,b as f,Y as b,m as h,x as r,c as i,d as g,l as w,N as y,A as v,f as O}from"./index-b147ae6c.js";import{s as L}from"./black-snkr-5a846b1a-8920e2e0.js";const k={data(){return{firstname:"",lastname:"",email:"",password:""}},methods:{async fetchData(){const l={firstname:this.firstname,lastname:this.lastname,email:this.email,password:this.password};try{const e=await fetch("https://sneakpeek-backend.onrender.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});u.push("/Login")}catch(e){console.error(e)}}}},t=l=>(p("data-v-8fcf6cdb"),l=l(),c(),l),q=t(()=>a("div",{id:"bg"},[a("img",{src:L,alt:""})],-1)),x={id:"container"},S=t(()=>a("h1",null,"Sign up",-1)),U=t(()=>a("label",{for:"fname"},[a("b",null,"Firstname")],-1)),V=t(()=>a("label",{for:"lname"},[a("b",null,"Lastname")],-1)),D=t(()=>a("label",{for:"email"},[a("b",null,"Email")],-1)),N=t(()=>a("label",{for:"psw"},[a("b",null,"Password")],-1)),A=t(()=>a("button",{type:"submit",class:"createbtn"},"Create Account",-1)),C=t(()=>a("div",{class:"line"},null,-1));function T(l,e,_,F,n,m){const o=f("router-link");return b(),h(v,null,[q,a("form",{onSubmit:e[4]||(e[4]=y((...s)=>m.fetchData&&m.fetchData(...s),["prevent"]))},[a("section",x,[S,U,r(a("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>n.firstname=s),type:"text",name:"firstname",required:""},null,512),[[i,n.firstname]]),V,r(a("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>n.lastname=s),type:"text",name:"lastname",required:""},null,512),[[i,n.lastname]]),D,r(a("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>n.email=s),type:"email",name:"email",required:""},null,512),[[i,n.email]]),N,r(a("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>n.password=s),type:"password",name:"psw",required:""},null,512),[[i,n.password]]),A,C,g(o,{to:"/login",class:"login"},{default:w(()=>[O("Login")]),_:1})])],32)],64)}const X=d(k,[["render",T],["__scopeId","data-v-8fcf6cdb"]]);export{X as default};