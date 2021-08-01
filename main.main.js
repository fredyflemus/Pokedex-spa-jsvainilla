/*! For license information please see main.main.js.LICENSE.txt */
(()=>{var e={59:function(e){e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var n=t.querySelector("img"),a=!1;null===n&&(n=document.createElement("img"),a=!0),e&&t.getAttribute("data-iesrc")&&(n.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(n.alt=t.getAttribute("data-alt")),a&&t.append(n)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,i=void 0,o=0;o<=r.length-1;o++)(i=r[o].getAttribute("data-src"))&&(r[o].src=i);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var s=",";if(t.getAttribute("data-background-delimiter")&&(s=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(s).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(s),l=c[0].substr(0,c[0].indexOf(" "))||c[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===c.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function n(e){e.setAttribute("data-loaded",!0)}var a=function(e){return"true"===e.getAttribute("data-loaded")},r=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e,i,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,s),l=c.root,d=c.rootMargin,u=c.threshold,g=c.load,h=c.loaded,m=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(m=new IntersectionObserver((e=g,i=h,function(t,r){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(r.unobserve(t.target),a(t.target)||(e(t.target),n(t.target),i(t.target)))}))}),{root:l,rootMargin:d,threshold:u}));for(var b,p=r(o,l),v=0;v<p.length;v++)(b=p[v]).getAttribute("data-placeholder-background")&&(b.style.background=b.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=r(o,l),t=0;t<e.length;t++)a(e[t])||(m?m.observe(e[t]):(g(e[t]),n(e[t]),h(e[t])))},triggerLoad:function(e){a(e)||(g(e),n(e),h(e))},observer:m}}}()}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=()=>'\n\n<div class="Header-main">\n    <div class="Header-logo">\n        <img src="./assets/images/pokeball.png" alt="">\n        <h1>\n            <a href="/Pokedex-spa-jsvainilla/">Pokedex</a>\n        </h1>\n    </div>\n    <details class="Header-main--details">\n        <summary>Generación</summary>\n        <ul class="Header-nav--generation_list" id="generation-list">\n            <li class="generation"><button>1ra Generación</button></li>\n            <li class="generation"><button>2da Generación</button></li>\n            <li class="generation"><button>3ra Generación</button></li>\n            <li class="generation"><button>4ta Generación</button></li>\n            <li class="generation"><button>5ta Generación</button></li>\n            <li class="generation"><button>6ta Generación</button></li>\n            <li class="generation"><button>7ma Generación</button></li>\n            <li class="generation"><button>8va Generación</button></li>\n    \n        </ul>\n    </details>\n    \n</div>\n\n\n\n',t=()=>'\n    <img src="./assets/images/pokeball.png" alt="">\n        <h3>fredyflemus</h3>\n    \n    ',a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",r=e=>{if(e.length<=3){return"/"===e?e:"/:id"}return`/${e}`},i="https://pokeapi.co/api/v2/pokemon/",o=async({limit:e,id:t})=>{const n=t?`${i}${t}`:`${i}${e}`;try{const e=await fetch(n);return await e.json()}catch(e){console.log("Fetch Error")}},s=e=>`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${e}.png`,c=async e=>{const t=`https://pokeapi.co/api/v2/pokemon-species/${e}`;try{const e=await fetch(t);return e.json()}catch(e){console.error(e)}},l=async()=>{let e;const t=a(),n=await o({id:t});let r=[],i=[];let l,d=(await c(t)).flavor_text_entries;e=1==t.toString().length?"00"+t:2==t.toString().length?"0"+t:t,l=d.findIndex((e=>("shield"===e.version.name||"alpha-sapphire"===e.version.name)&&"en"===e.language.name)),n.abilities.forEach((e=>{let t=`<p>${e.ability.name}</p>`;r.push(t)})),n.types.forEach((e=>{let t=`<p class="${e.type.name} tipo">${e.type.name}</p>`;i.push(t)})),r=r.join(""),i=i.join(""),console.log(n),console.log(d);return`\n\n    <section class="Character" id="character">\n        <article class="Character-header">\n            <h3>${e}/</h3>\n            <h2>${n.name}</h2>\n        </article>\n        <section class="Character-info">\n            <img src="${s(e)}" alt="${n.name}">\n            <section class="Character-card">\n                <p class="Character-card-description">${d[l].flavor_text}</p>\n                <div class="Character-card-info">\n                    <section class="height">\n                        <h3>height:</h3>\n                        <p>${n.height} m</p>\n                    </section>\n                    <section class="weight">\n                        <h3>Weight:</h3>\n                        <p>${n.weight} kg</p>\n                    </section>\n                    <section class="abilities">\n                        <h3>Abilities:</h3>\n                        ${r}\n                    </section>\n                </div>\n                <div class="Character-types">\n                    <h3>Types:</h3>\n                    ${i}\n                </div>\n            </section>\n        </section>\n        <section class="Character-buttons">\n            <a href="#/${parseInt(t)-1}" id="previous-button" class="disabledbutton">Previous</a>\n            <a href="#/${parseInt(t)+1}" id="next-button" class="disabledbutton">Next</a>\n        </section>\n        <div class="bottom-character"></div>\n    </section>\n    \n\n    \n    \n    `},d=(e="1ra Generación",t="Región Kanto")=>`\n    <h2>${e}</h2>\n    <p>${t}</p>\n    \n    `,u=(e,t,n)=>{let a,r=[];r=n.map((e=>`<p class="tipo ${e.type.name}">${e.type.name}</p>`)),r=r.join(""),a=1==e.toString().length?"00"+e:2==e.toString().length?"0"+e:e;return`\n    <li class="card-pokemon">\n        <a href="#/${e}">\n            <img width="85%" height="auto" data-src="${s(a)}" alt="" class="card-img" data-backgrund-image="../assets/images/pokemon.png">\n            <div class="card-pokemon-information">\n                <p>No. ${e}</p>\n                <h3>${t}</h3>\n                <div class="card-pokemon_tipos">\n                    ${r}    \n                </div>\n            </div>\n        </a>\n        \n        \n    </li>\n    `},g=async e=>{try{const t=await fetch(e);return await t.json()}catch(e){console.log("Fetch Error")}},h=async(e,t)=>{const n=await o({limit:`?limit=${e}&offset=${t}`}),a=n.results.length;let r=[];for(let e=0;e<a;e++){const t=await g(n.results[e].url);r.push(u(t.id,t.name,t.types))}r=r.join("");return`\n    \n    <div class="window">\n        <ul class="pokemon-container">\n        ${r}\n        </ul>\n        <div class="bottom-carousell"></div>\n    </div>\n    \n    `},m=async(e=150,t=0)=>{const n=await h(e,t);return`\n    <section class="main-generation_cover" id="generation-cover">\n        ${await d()}\n    </section>\n    <section class="carousell" id="carousell">\n        ${n}\n    </section>\n    `};var b=n(59),p=n.n(b);const v=async function(e){const t=document.querySelector("#header > div > details"),n=document.getElementById("content");switch(t.removeAttribute("open"),window.scrollTo(0,0),e.target.outerText){case"1ra Generación":n.innerHTML=await m(151,0),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Kanto");break;case"2da Generación":n.innerHTML=await m(100,151),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Johto");break;case"3ra Generación":n.innerHTML=await m(135,251),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Hoenn");break;case"4ta Generación":n.innerHTML=await m(108,386),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Sinnoh");break;case"5ta Generación":n.innerHTML=await m(154,494),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Teselia");break;case"6ta Generación":n.innerHTML=await m(72,649),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Kalos");break;case"7ma Generación":n.innerHTML=await m(88,721),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Alola");break;case"8va Generación":n.innerHTML=await m(89,809),document.querySelector("#generation-cover").innerHTML=await d(e.target.outerText,"Región Galar")}const a=document.querySelectorAll(".card-img");p()(a).observe()},w={"/":m,"/:id":l},f=async()=>{const n=document.getElementById("header"),i=document.getElementById("content"),o=document.getElementById("footer");n.innerHTML=await e(),o.innerHTML=await t();let s=a(),c=await r(s),l=w[c]?w[c]:console.error("404");i.innerHTML=await l(),window.scrollTo(0,0);const d=document.querySelectorAll(".card-img");if(p()(d).observe(),document.getElementById("generation-list").addEventListener("click",(e=>{const t=e.target.tagName;["LI","BUTTON"].includes(t)&&v(e)})),document.getElementById("character")){window.removeEventListener("hashchange",f);const e=document.getElementById("previous-button"),t=document.getElementById("next-button");1!==parseInt(a())&&e.classList.remove("disabledbutton"),898!==parseInt(a())&&(t.classList.remove("disabledbutton"),console.log("deberia estar libre"),console.log(t)),window.addEventListener("hashchange",f)}},y=f;window.addEventListener("load",y),window.addEventListener("hashchange",y)})()})();