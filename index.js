import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(n,r=1){return fetch(`https://pixabay.com/api/?key=47660157-57325717b13f34e4491083279&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}`).then(e=>e.json()).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e.hits})}function h(n){const r=document.querySelector(".gallery");r.innerHTML="",n.forEach(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:f,downloads:d})=>{const c=document.createElement("div");c.classList.add("photo-card"),c.innerHTML=`
      <a href="${s}">
        <img src="${o}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${t}</p>
        <p class="info-item"><b>Views</b>${i}</p>
        <p class="info-item"><b>Comments</b>${f}</p>
        <p class="info-item"><b>Downloads</b>${d}</p>
      </div>
    `,r.appendChild(c)})}const y=document.querySelector(".search-form"),g=document.querySelector('input[name="searchQuery"]'),l=document.querySelector(".loader");let u=1;y.addEventListener("submit",function(n){n.preventDefault();const r=g.value.trim();if(!r){a.error({message:"Please enter a search query!"});return}u=1,l.classList.add("is-active"),p(r,u).then(function(o){h(o),new m(".gallery a")}).catch(function(o){a.error({message:"Sorry, no images found. Please try again!"})}).finally(function(){l.classList.remove("is-active")})});
//# sourceMappingURL=index.js.map
