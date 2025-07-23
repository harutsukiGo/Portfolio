function toggleMenu() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('visible');
}


function date() {
    const date = document.getElementById('divFooter');
    let dateActuel = new Date();
    date.innerHTML = ` <p class="nomDate">© ${dateActuel.toLocaleDateString('fr-FR', {
        year: 'numeric',
    })} Manu Andriamihaja</p>`;
 }


document.addEventListener('DOMContentLoaded', () => {
    date();
})
