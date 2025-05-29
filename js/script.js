function toggleMenu() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('visible');
}


function date() {
    const date = document.getElementById('divFooter');
    let dateActuel = new Date();
    date.textContent = ` © ${dateActuel.toLocaleDateString('fr-FR', {
        year: 'numeric',
    })} Manu Andriamihaja`;
 }


document.addEventListener('DOMContentLoaded', () => {
    date();
})
