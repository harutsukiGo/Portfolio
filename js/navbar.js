window.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
        <a class="texteTitre" href="index.html"> ARM</a>

        <div class="composantNavbar" id="navbarMenu">

        <div class="navbar">
            <div class="projets"><a href="index.html#buttonPlus">Mes projets</a></div>
            <div class="aPropos"><a href="aPropos.html">À propos</a></div>
            <div class="contact"><a href="contact.html">Contact</a></div>
        </div>
        <div class="navbar">
            <div class="imageGit">
                <a href="https://github.com/harutsukiGo">
                    <img src="img/github.svg" alt="GitHub" id="githubImg" width="28" height="28">
                </a>


            </div>
            <div class="imageLinkedin">
                <a href="https://www.linkedin.com/in/manu-andriamihaja/">
                    <img src="img/linkedin.svg" alt="img2" id="linkedinImg" width="27" height="27">
                </a>
            </div>

        </div>
        </div>

        <button class="burger-menu" onclick="toggleMenu()">☰</button>
    </nav>
    `;
    document.body.prepend(header);
});

