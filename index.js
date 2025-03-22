import{a as c,S as d,i as u}from"./assets/vendor-BoDL4JbI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="49472693-e26774e5dc97a1dde6aa5a0a9",f="https://pixabay.com/api/";function m(i){return c.get(`${f}?key=${p}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>r.data.hits).catch(r=>{throw console.error("Error:",r),r})}const s=document.querySelector(".gallery");document.querySelector(".loader");let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function l(){s.innerHTML=""}function g(){u.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}function h(i){if(l(),i.length===0){g();return}const r=i.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="gallery-info">
          <div><p>Likes</p><p>${t.likes}</p></div>
          <div><p>Views</p><p>${t.views}</p></div>
          <div><p>Comments</p><p>${t.comments}</p></div>
          <div><p>Downloads</p><p>${t.downloads}</p></div>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",r),y.refresh()}function v(i){i.preventDefault();const r=document.querySelector("input[name='search-text']").value.trim();if(!r)return;const t=document.querySelector(".loader");l(),t.style.display="inline-block",m(r).then(n=>{h(n),t.style.display="none"}).catch(n=>{console.error("Error:",n),t.style.display="none"})}document.querySelector("form").addEventListener("submit",v);
//# sourceMappingURL=index.js.map
