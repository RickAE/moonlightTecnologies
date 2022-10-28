const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu()
{
    const nav = document.querySelector('.menu_principal')
    console.log(nav)
    nav.classList.toggle('active')
}