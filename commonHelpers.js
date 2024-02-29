import{i as m,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(){const a="42458903-cbb27ce669d5c06b9309f1f84",t="https://pixabay.com/api/",o=l.value,s=`${t}?key=${a}&q=${o}&image-type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(`Error! ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function f(a){return n.classList.remove("loader"),a.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:i,downloads:c})=>`<li class="gallery-item">
        <a href="${o}"><img class="gallery-image" src="${t}" alt="${s}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${e}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${r}</p>
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
      </li>`).join("")}const g=document.querySelector(".form"),l=document.querySelector("input"),n=document.querySelector(".form-load"),d=document.querySelector(".gallery");g.addEventListener("submit",y);function y(a){a.preventDefault(),l.value.trim()!==""&&(n.innerHTML=null,n.classList.add("loader"),p().then(t=>{t.total===0&&m.error({iconUrl:"./img/error.svg",messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),d.innerHTML=f(t.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}),l.value="")}
//# sourceMappingURL=commonHelpers.js.map
