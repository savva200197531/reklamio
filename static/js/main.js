const website = document.querySelector('.website'),
  advertising = document.querySelector('.advertising'),
  container = document.querySelector('.container'),
  menu = document.querySelector('.menu'),
  menuOpen = document.querySelector('.menu-open'),
  modal = document.querySelector('.modal-window'),
  websiteTitle = document.querySelector('.website__title-link'),
  advertisingTitle = document.querySelector('.advertising__title-link');


const blurCheckerOver = event => {
  if (event.target.closest('.advertising')) {
    advertising.classList.add('blur')
    website.classList.remove('blur')
    advertisingTitle.style = `transition: 0.4s; letter-spacing: 1px`
    websiteTitle.style.letterSpacing = '0'
  }

  if (event.target.closest('.website')) {
    advertising.classList.remove('blur')
    website.classList.add('blur')
    advertisingTitle.style.letterSpacing = '0'
    websiteTitle.style = `transition: 0.4s; letter-spacing: 1px`
  }
}

const blurCheckerOut = event => {
  if (!event.target.closest('.advertising') || !event.target.closest('.website')) {
    advertising.classList.remove('blur')
    website.classList.remove('blur')
    advertisingTitle.style.letterSpacing = '0'
    websiteTitle.style.letterSpacing = '0'
  }
}

const modalOpen = () => {
  menu.classList.toggle('hide')
  menuOpen.classList.toggle('hide')
  menu.style.zIndex = '-1'
  menuOpen.style.zIndex = '200'
  modal.style.display = 'block'
  modal.style = `opacity: 1; display: block; top: 0px;`;
  // container.style.display = 'none'

}

const modalClose = () => {
  menuOpen.classList.toggle('hide')
  menu.classList.toggle('hide')
  menu.style.zIndex = '200'
  menuOpen.style.zIndex = '-1'
  modal.style.display = 'none'
  modal.style.opacity = '0'
  modal.style = `opacity: 0; display: block; top: 100%;`;
  // container.style.display = 'flex'
}

const menuToggleCheck = event => {
  if (event.target.closest('.menu__item-list')) {
    modalOpen()
  }

  if (event.target.closest('.website')) {
    modalOpen()
  }

  if (event.target.closest('.advertising')) {
    modalOpen()
  }

  if (event.target.closest('.menu__item-list-open')) {
    modalClose()
  }
}


document.addEventListener('click', menuToggleCheck);
document.addEventListener('mouseover', blurCheckerOver);
document.addEventListener('mouseout', blurCheckerOut);
document.addEventListener('click', blurCheckerOver);






