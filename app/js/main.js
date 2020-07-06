const website = document.querySelector('.website'),
  advertising = document.querySelector('.advertising'),
  container = document.querySelector('.container'),
  menuList = document.querySelectorAll('.menu-list'),
  menu = document.querySelector('.menu'),
  menuOpen = document.querySelector('.menu-open'),
  modal = document.querySelector('.modal-window'),
  websiteTitle = document.querySelector('.website__title-link'),
  advertisingTitle = document.querySelector('.advertising__title-link');

let blurChecker = event => {
  if (!event.target.closest('.container')) {
    advertising.classList.remove('blur');
    website.classList.remove('blur');
  }

  // if (event.target.closest('.menu')) {
  //   advertising.classList.remove('blur');
  //   website.classList.remove('blur');
  // }
  //
  // if (event.target.closest('.menu-open')) {
  //   advertising.classList.remove('blur');
  //   website.classList.remove('blur');
  // }

  if (event.target.closest('.advertising')) {
    advertising.classList.add('blur')
    website.classList.remove('blur')
    advertisingTitle.style.letterSpacing = '1px'
    websiteTitle.style.letterSpacing = '0'
  }

  if (event.target.closest('.website')) {
    advertising.classList.remove('blur')
    website.classList.add('blur')
    advertisingTitle.style.letterSpacing = '0'
    websiteTitle.style.letterSpacing = '1px'
  }
}

const menuToggleCheck = event => {
  if (event.target.closest('.menu__item-list')) {
    menu.classList.toggle('hide')
    menuOpen.classList.toggle('hide')
    menu.style.zIndex = '-1'
    menuOpen.style.zIndex = '200'
    modal.style.display = 'block'
    modal.style.opacity = '1'
    container.style.display = 'none'
    // website.classList.add('blur')
    // advertising.classList.add('blur')
    // websiteTitle.classList.add('hidden')
    // advertisingTitle.classList.add('hidden')
  }

  if (event.target.closest('.menu__item-list-open')) {
    menuOpen.classList.toggle('hide')
    menu.classList.toggle('hide')
    menu.style.zIndex = '200'
    menuOpen.style.zIndex = '-1'
    modal.style.display = 'none'
    modal.style.opacity = '0'
    container.style.display = 'flex'
    // website.classList.remove('blur')
    // advertising.classList.remove('blur')
    // websiteTitle.classList.remove('hidden')
    // advertisingTitle.classList.remove('hidden')
  }
}

menuList.forEach(item => {
  item.addEventListener('click', menuToggleCheck);
})
document.addEventListener('mouseover', blurChecker);
document.addEventListener('click', blurChecker);






