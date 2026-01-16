// =======================
// AGUARDA DOM
// =======================
document.addEventListener('DOMContentLoaded', () => {

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
    icon.classList.toggle('ativo')
    icon.textContent = menu.classList.contains('ativo') ? 'close' : 'menu'
  }

  // deixa função global para o onclick do HTML
  window.clickMenu = clickMenu

  // =======================
  // DARK MODE
  // =======================
  function updateThemeIcon() {
    themeIcon.textContent =
      document.body.classList.contains('dark')
        ? 'light_mode'
        : 'brightness_4'
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
      icon.classList.remove('ativo')
      icon.textContent = 'menu'
    })
  })

})
