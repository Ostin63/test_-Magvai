let textContainer=document.querySelector(".content"),template=document.querySelector("#title-template").content;async function main(){let t=0,e=await fetch("https://jsonplaceholder.typicode.com/posts?_start="+t+"&_limit=6");t+=6,(await e.json()).forEach((function(t){let e=template.cloneNode(!0);e.querySelector(".title").textContent+=" "+t.title,e.querySelector(".body").textContent+=" "+t.body,textContainer.appendChild(e)}))}main();let button=document.querySelector(".button");button.addEventListener("click",(function(){textContainer.classList.remove("d-none"),main()}));