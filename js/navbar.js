window.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
         <a class="texteTitre" href="index.html"> ARM</a>
         <div class="navbar">
            <div class="projets"><a href="#buttonPlus">Mes projets</a></div>
            <div class="projets"><a href="competences.html">Portfolio d'apprentissage</a></div>
            <div class="aPropos"><a href="aPropos.html">À propos</a></div>
            <div class="contact"><a href="contact.html">Contact</a></div>
            <div class="imageGit">
                <a href="https://github.com/harutsukiGo">
                    <img src="img/github.png" alt="img1" id="github">
                </a>
            </div>
            <div class="imageLinkedin">
                <a href="https://www.linkedin.com/in/manu-andriamihaja/">
                    <img src="img/linkedin.png" alt="img2" id="linkedin">
                </a>
            </div>

        </div>
        <button class="burger-menu" onclick="toggleMenu()">☰</button>
    </nav>
    `;
    document.body.prepend(header);
});