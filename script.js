const MENU={
  "Karahi":[
    ["Chicken Karahi","Tomato, green chilli and ginger, finished with fresh coriander.",1850,"Bestseller"],
    ["Mutton Karahi","Slow-cooked on the bone in desi ghee.",3200],
    ["Chicken Handi","Creamy, mild and rich.",1650],
    ["Behari Boti","Smoky, tender and spicy.",1200]],
  "BBQ":[
    ["Chicken Tikka","Charcoal-grilled leg piece.",520],
    ["Seekh Kebab","Hand-minced beef with house spices.",680],
    ["Malai Boti","Marinated in cream and white pepper.",950,"Bestseller"],
    ["Mutton Chops","Four chops, grilled to order.",1800]],
  "Rice & Bread":[
    ["Sindhi Biryani","Fragrant rice with potato and plum.",720,"Bestseller"],
    ["Chicken Biryani","With raita and salad.",650],
    ["Garlic Naan","Fresh from the tandoor.",120],
    ["Plain Naan","",60],
    ["Tandoori Roti","",40]],
  "Drinks & Sweets":[
    ["Mint Margarita","Mint, lemon and soda.",280],
    ["Sweet Lassi","Thick and chilled.",250],
    ["Doodh Patti Chai","Strong, with cardamom.",120],
    ["Gulab Jamun","Two pieces, served warm.",250],
    ["Kheer","Slow-cooked rice pudding.",300]]
};
const tabs=document.getElementById("tabs"),list=document.getElementById("list");
function show(cat){
  [...tabs.children].forEach(b=>b.setAttribute("aria-selected",b.textContent===cat));
  list.innerHTML=MENU[cat].map(([n,d,p,t])=>
    `<div class="item"><div class="row"><span class="name">${n}</span>${t?`<span class="tag">${t}</span>`:""}<span class="dots"></span><span class="price">Rs ${p.toLocaleString("en-US")}</span></div>${d?`<p class="desc">${d}</p>`:""}</div>`).join("");
}
Object.keys(MENU).forEach(c=>{
  const b=document.createElement("button");
  b.className="tab";b.role="tab";b.textContent=c;b.onclick=()=>show(c);tabs.appendChild(b);
});
show("Karahi");

document.getElementById("book").addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const body=`Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nDate: ${f.get("date")}\nGuests: ${f.get("guests")}\nNotes: ${f.get("notes")}`;
  document.getElementById("msg").textContent="Opening your email app to send the request…";
  window.location.href="mailto:info@derakarahi.pk?subject="+encodeURIComponent("Table booking request")+"&body="+encodeURIComponent(body);
});
