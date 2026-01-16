// =======================
// MENU
// =======================
const menu = document.getElementById('menu')
const icon = document.querySelector('.menu-icon')

// =======================
// BOTÃO TEMA
// =======================
const themeBtn = document.getElementById('theme-toggle')
const themeIcon = themeBtn.querySelector('span')

// =======================
// MENU MOBILE
// =======================
function clickMenu() {
  menu.classList.toggle('ativo')
  icon.textContent = menu.classList.contains('ativo') ? 'close' : 'menu'
}

// =======================
// DARK MODE
// =======================
function updateThemeIcon() {
  themeIcon.textContent =
    document.body.classList.contains('dark')
      ? 'light_mode'     // ☀️
      : 'brightness_4'   // 🌙 (lua estável)
}

function toggleDark() {
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark', 'on')
  } else {
    localStorage.removeItem('dark')
  }

  updateThemeIcon()
}

// =======================
// CARREGA TEMA SALVO
// =======================
if (localStorage.getItem('dark')) {
  document.body.classList.add('dark')
}
updateThemeIcon()

// =======================
// EVENTOS
// =======================
themeBtn.addEventListener('click', toggleDark)

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo')
    icon.textContent = 'menu'
  })
})
