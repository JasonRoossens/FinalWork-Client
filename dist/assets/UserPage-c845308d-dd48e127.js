import{a,v as c,I as h,X as w,b as m,Y as o,m as r,d as g,s as t,f as p}from"./index-b147ae6c.js";const f={components:{Navigation:h},data(){return{user:null,showPassword:!1}},mounted(){this.fetchUserData()},methods:{async fetchUserData(){try{const n=localStorage.getItem("id"),e=await fetch(`https://sneakpeek-backend.onrender.com/users/user/${n}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});if(e.ok){const i=await e.json();this.user=i,console.log("User Data:",this.user)}else console.error("Error fetching user data"),w.push("/")}catch(n){console.error(n)}},togglePasswordVisibility(){this.showPassword=!this.showPassword}}},k={key:0},P=a("h1",null,"User profile",-1),y={key:0},v={key:1},b={key:1},D=a("p",null,"Loading user data...",-1),I=[D];function U(n,e,i,V,s,l){const u=m("Navigation");return o(),r("main",null,[g(u),s.user?(o(),r("div",k,[P,a("p",null,"Firstname: "+t(s.user.firstname),1),a("p",null,"Lastname: "+t(s.user.lastname),1),a("p",null,"Email: "+t(s.user.email),1),a("p",null,[p(" Password: "),s.showPassword?(o(),r("span",y,t(s.user.password),1)):(o(),r("span",v,"**********")),a("button",{onClick:e[0]||(e[0]=(...d)=>l.togglePasswordVisibility&&l.togglePasswordVisibility(...d))},t(s.showPassword?"Hide":"Show")+" Password ",1)])])):(o(),r("div",b,I))])}const S=c(f,[["render",U]]);export{S as default};
