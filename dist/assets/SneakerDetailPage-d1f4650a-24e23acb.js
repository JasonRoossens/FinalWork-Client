import{a as e,v as k,I as d,b as u,Y as t,m as l,d as m,s as r,f as o}from"./index-b147ae6c.js";const v={components:{Navigation:d},data(){return{sneaker:null}},mounted(){this.fetchSneakerData()},methods:{async fetchSneakerData(){try{const s=this.$route.params.id,n=await fetch(`https://sneakpeek-backend.onrender.com/sneakers/sneaker/${s}`),i=await n.json();n.ok&&(this.sneaker=i)}catch(s){console.error(s)}}}},p={class:"main"},g={class:"container"},h={key:0},f={class:"title"},y={class:"sneaker-details"},b={class:"sneaker-image"},w=["src","alt"],C={class:"sneaker-info"},D=e("strong",null,"Colorway:",-1),S=e("strong",null,"Price:",-1),N=e("strong",null,"Style Code:",-1),$={key:1},j=e("p",null,"Loading sneaker details...",-1),x=[j];function B(s,n,i,I,a,L){const c=u("Navigation");return t(),l("div",p,[m(c),e("button",{onClick:n[0]||(n[0]=P=>s.$router.push("/")),class:"back-button"},"Back"),e("div",g,[a.sneaker?(t(),l("div",h,[e("h1",f,r(a.sneaker.brand)+" "+r(a.sneaker.model),1),e("div",y,[e("div",b,[e("img",{src:a.sneaker.images[0],alt:a.sneaker.brand,class:"releaseDetail-image"},null,8,w)]),e("div",C,[e("p",null,[D,o(" "+r(a.sneaker.colorway),1)]),e("p",null,[S,o(" € "+r(a.sneaker.price),1)]),e("p",null,[N,o(" "+r(a.sneaker.stylecode),1)])])])])):(t(),l("div",$,x))])])}const E=k(v,[["render",B]]);export{E as default};
