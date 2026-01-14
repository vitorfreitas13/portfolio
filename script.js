function clickMenu() {
    const menu = document.getElementById('menu');
    const icon = document.querySelector('.menu-icon');

    menu.classList.toggle('ativo');

    if (menu.classList.contains('ativo')) {
        icon.textContent = 'close'; // vira X
    } else {
        icon.textContent = 'menu'; // volta para ☰
    }
}

