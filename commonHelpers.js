import{i as m,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(){const s="42458903-cbb27ce669d5c06b9309f1f84",r="https://pixabay.com/api/",a=l.value,o=`${r}?key=${s}&q=${a}&image-type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error(`Error! ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function f(s){return n.classList.remove("loader"),s.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:i,downloads:c})=>`<li class="gallery-item">
        <a href="${a}"><img class="gallery-image" src="${r}" alt="${o}" /></a>
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
            <p class="img-parameter-quantity">${c}</p>
          </li>
        </ul>
      </li>`).join("")}const g="/goit-js-hw-11/assets/error-97f7a778.svg",d=document.querySelector(".form"),l=document.querySelector("input"),n=document.querySelector(".form-load"),y=document.querySelector(".gallery");d.addEventListener("submit",h);function h(s){s.preventDefault(),l.value.trim()!==""&&(n.innerHTML=null,n.classList.add("loader"),p().then(r=>{r.total===0&&m.error({iconUrl:g,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),y.innerHTML=f(r.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),l.value="")}
//# sourceMappingURL=commonHelpers.js.map
