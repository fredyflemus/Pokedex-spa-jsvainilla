const Header = () => {
    const view = `

<div class="Header-main">
    <div class="Header-logo">
        <img src="./assets/images/pokeball.png" alt="">
        <h1>
            <a href="/">Pokedex</a>
        </h1>
    </div>
    <nav class="Header-nav" id="header-nav">
        <ul>
            <li><a href="">Generacion</a>
                
            </li>

        </ul>
        <span><img src="./assets/icons/arrow-down.svg" alt=""></span>

    </nav>
    <ul class="Header-nav--generation_list hidden" id="generation-list">
        <li><a href="#/about/">1ra Generación</a></li>
        <li><a href="#/about/">2da Generación</a></li>
        <li><a href="#/about/">3ra Generación</a></li>
        <li><a href="#/about/">4ta Generación</a></li>
        <li><a href="#/about/">5ta Generación</a></li>
        <li><a href="#/about/">6ta Generación</a></li>
        <li><a href="#/about/">7ma Generación</a></li>
        <li><a href="#/about/">8va Generación</a></li>

    </ul>
</div>



`;
    console.log('Header')
    return view;
}

export default Header;