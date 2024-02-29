import{i as a}from"./assets/vendor-bee2f3af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function u(){const o="42458903-cbb27ce669d5c06b9309f1f84",r="https://pixabay.com/api/",n=c.value,i=`${r}?key=${o}&q=${n}&image-type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>{if(!e.ok)throw new Error(`Error! ${e.status}`);return e.json()}).catch(e=>{console.log(e)})}function f(o){return console.log(o),o.map(({webformatURL:r,largeImageURL:n,tags:i,likes:e,views:t,comments:s,downloads:l})=>`<li>
        <a href="${n}"><img src="${r}" alt="${i}" /></a>
        <ul>
          <li>
            <p>Likes</p>
            <p>${e}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${t}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${s}</p>
          </li>
          <li>
            <p>downloads</p>
            <p>${l}</p>
          </li>
        </ul>
      </li>`).join("")}const p=document.querySelector(".form"),c=document.querySelector("input");document.querySelector(".form-load");const m=document.querySelector(".gallery");p.addEventListener("submit",d);function d(o){o.preventDefault(),c.value.trim()!==""&&u().then(r=>{r.total===0&&a.error({messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),m.innerHTML=f(r.hits)})}
//# sourceMappingURL=commonHelpers.js.map
