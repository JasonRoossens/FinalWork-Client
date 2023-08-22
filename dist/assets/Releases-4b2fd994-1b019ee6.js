import{a,v as g,I as p,b as h,Y as o,m as n,d as m,A as u,R as v,s as r}from"./index-b147ae6c.js";const k="/assets/bg-3f34382b.jpg",b={components:{Navigation:p},data(){return{items:[],releaseDate:"2023-06-17T00:00:00.000Z",countdown:""}},mounted(){this.fetchData(),this.updateCountdown(),setInterval(this.updateCountdown,1e3)},methods:{async fetchData(){try{const s=await fetch("http://localhost:8080/sneakers"),e=await s.json();s.ok&&(this.items=e,console.log(e))}catch(s){console.error(s)}},updateCountdown(){const s=new Date(this.releaseDate)-new Date;if(s<0){this.countdown="Released";return}const e=Math.floor(s/(1e3*60*60*24)),l=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(s%(1e3*60*60)/(1e3*60)),c=Math.floor(s%(1e3*60)/1e3);this.countdown=`${e}d ${l}h ${d}m ${c}s`}}},D={class:"main"},$=a("div",{id:"bg"},[a("img",{src:k,alt:""})],-1),C={class:"container"},y={class:"sneakerlist"},I={class:"card-container"},M=["onClick"],R={class:"favorites-icon"},j={class:"card-image"},N=["src"],x={class:"card-details"},A={class:"brand"},Y={class:"model"},_={class:"countdown"};function B(s,e,l,d,c,E){const f=h("Navigation"),w=h("font-awesome-icon");return o(),n("div",D,[$,m(f),a("div",C,[a("section",y,[a("div",I,[(o(!0),n(u,null,v(c.items,t=>(o(),n("div",{key:t.id,onClick:i=>s.$router.push(`/sneakers/${t.id}`),class:"card"},[a("div",R,[m(w,{icon:"fa-heart"})]),a("div",j,[(o(!0),n(u,null,v(t.images,i=>(o(),n("img",{key:i,src:i,alt:"Release Image",class:"release-image"},null,8,N))),128))]),a("div",x,[a("p",A,r(t.brand),1),a("p",Y,r(t.model),1),a("p",_,r(c.countdown),1)])],8,M))),128))])])])])}const S=g(b,[["render",B]]);export{S as default};
