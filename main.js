(()=>{"use strict";const n=(n,a,e)=>`\n    <div class="card-pokemon">\n        <img src="./assets/images/001.png" alt="">\n        <p>No. ${n}</p>\n        <h3>${a}</h3>\n        <div class="card-pokemon_tipos">\n            <p class="tipo planta">${e}</p>\n            <p class="tipo veneno">${e}</p>\n        </div>\n    </div>\n    `,a="https://pokeapi.co/api/v2/pokemon",e=async()=>{const e=await(async n=>{const e=n?`${a}${n}`:a;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error")}})("?limit=150&offset=0");return console.log(e.results[0].name),console.log(e),`\n    <div class="arrow arrow-mobile"><img src="./assets/icons/up-arrow.svg" alt="up carousell"></div>\n    <div class="arrow arrow-desktop"></div>\n    <div class="window">\n        <ul class="pokemon-container">\n            ${n(0,e.results[0].name,"plant")}\n            ${n()}\n            ${n()}\n        </ul>\n    </div>\n    <div class="arrow arrow-mobile"><img src="./assets/icons/down-arrow.svg" alt="down carousell"></div>\n    <div class="arrow arrow-desktop"></div>\n\n    `};window.addEventListener("load",(async()=>{document.getElementById("header").innerHTML=await'\n\n<div class="Header-main">\n    <div class="Header-logo">\n        <img src="./assets/images/pokeball.png" alt="">\n        <h1>\n            <a href="/">Pokedex</a>\n        </h1>\n    </div>\n    <details class="Header-main--details">\n        <summary>Generación</summary>\n        <ul class="Header-nav--generation_list" id="generation-list">\n            <li><a href="#/about/">1ra Generación</a></li>\n            <li><a href="#/about/">2da Generación</a></li>\n            <li><a href="#/about/">3ra Generación</a></li>\n            <li><a href="#/about/">4ta Generación</a></li>\n            <li><a href="#/about/">5ta Generación</a></li>\n            <li><a href="#/about/">6ta Generación</a></li>\n            <li><a href="#/about/">7ma Generación</a></li>\n            <li><a href="#/about/">8va Generación</a></li>\n    \n        </ul>\n    </details>\n    \n</div>\n\n\n\n';const n=document.getElementById("main"),a=document.createElement("section");a.classList.add("main-generation_cover"),a.innerHTML=await'\n    <h2>Primera Generación</h2>\n    <p>Región Kanto</p>\n    <img src="./assets/images/first.jpg" alt="">\n    ',n.appendChild(a);const i=document.createElement("section");i.classList.add("carousell"),i.innerHTML=await e(),n.appendChild(i)}))})();