import{i as l,S as p}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),d=document.querySelector(".input"),c=document.querySelector(".gallery"),f=()=>{const n=document.createElement("span");n.classList.add("loader"),conteiner.append(n)},a=()=>{const n=document.querySelector(".loader");n&&n.remove()};u.addEventListener("submit",n=>{f(),c.innerHTML="",n.preventDefault();const s=d.e;m(s)});function m(n){const i=`https://pixabay.com/api/?key=42290205-24e5613e72929844af62d686c&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=18`;fetch(i).then(o=>{if(o.ok)return o.json();throw new Error(o.status)}).then(o=>{if(o.hits.length===0)l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",transitionIn:"fadeInLeft"}),a();else{const e=o.hits.map(r=>`
          <li class = "gallery-item">
          <a href = "${r.largeImageURL}">
          <img class = "gallery-image" 
          src = "${r.webformatURL}"
          alt = "${r.tags}">
          </a>
          <p><b>Likes: </b>${r.likes}</p>
          <p><b>Views: </b>${r.views}</p>
          <p><b>Comments: </b>${r.comments}</p>
          <p><b>Downloads: </b>${r.downloads}</p>
          </li>`).join("");c.insertAdjacentHTML("beforeend",e),new p(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",fadeSpeed:150,captionSelector:"img",captionDelay:250}).on("show.simplelightbox").refresh(),a()}}).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers.js.map
