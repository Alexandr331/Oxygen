const btns = document.querySelector('.dropdown-buttons')
const close = document.querySelector('#close')
const open = document.querySelector('#open')
const dropdownItem = document.querySelectorAll('.dropdown-item') 

const showmenu = (toggleId, navId) => {
  const toggler = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  toggler.addEventListener('click', () => {
    nav.classList.toggle('show-menu')
    toggler.classList.toggle('show-icon')
  })
  
}
showmenu('toggler', 'menu')

dropdownItem.forEach(el => {
  el.addEventListener('click', (event) => closeMenu(event.target) )
})

const closeMenu = (el) => {
  el.parentNode.parentNode.parentNode.classList.remove('show-menu')
  btns.classList.remove('show-icon')
}
