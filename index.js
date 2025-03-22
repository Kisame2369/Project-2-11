import{a as u,S as f,i as p}from"./assets/vendor-BoDL4JbI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="49472693-e26774e5dc97a1dde6aa5a0a9",y="https://pixabay.com/api/";function g(i){return u.get(`${y}?key=${m}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.data.hits).catch(t=>{throw console.error("Error:",t),t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(){c.style.display="inline-block"}function s(){c.style.display="none"}function d(){l.innerHTML=""}function L(){p.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})}function w(i){if(d(),i.length===0){L();return}const t=i.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="gallery-info">
          <div><p>Likes</p><p>${r.likes}</p></div>
          <div><p>Views</p><p>${r.views}</p></div>
          <div><p>Comments</p><p>${r.comments}</p></div>
          <div><p>Downloads</p><p>${r.downloads}</p></div>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function b(i){i.preventDefault();const t=document.querySelector("input[name='search-text']").value.trim();t&&(d(),v(),g(t).then(r=>{s(),w(r)}).catch(()=>s()))}document.querySelector("form").addEventListener("submit",b);
//# sourceMappingURL=index.js.map
