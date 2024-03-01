import{S as c,i as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(o){const s=`https://pixabay.com/api/?key=42458903-cbb27ce669d5c06b9309f1f84&q=${o}&image-type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(`Error! ${e.status}`);return e.json()})}function f(o){return l.classList.remove("loader"),o.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:t,comments:i,downloads:m})=>`<li class="gallery-item">
        <a href="${a}"><img class="gallery-image" src="${r}" alt="${s}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${e}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${t}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${i}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${m}</p>
          </li>
        </ul>
      </li>`).join("")}const g="/goit-js-hw-11/assets/error-97f7a778.svg",d=document.querySelector(".form"),n=document.querySelector("input"),l=document.querySelector(".form-load"),y=document.querySelector(".gallery");new c(".gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",h);function h(o){o.preventDefault();const r=n.value.trim();r!==""&&(l.innerHTML=null,l.classList.add("loader"),p(r).then(a=>{a.total===0&&u.error({iconUrl:g,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),y.innerHTML=f(a.hits),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),n.value="")}
//# sourceMappingURL=commonHelpers.js.map
