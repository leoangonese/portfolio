// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

const showAllProjects = () => {
  // Exibir todos os projetos ocultos
  const hiddenProjects = document.querySelectorAll('.projects__row.hidden');
  hiddenProjects.forEach(project => {
    project.classList.remove('hidden');

  });

  // Esconder o botão "Show All Projects" e mostrar o botão "Hide Projects"
  document.querySelector('.show-all-btn').style.display = 'none';
  document.querySelector('.hide-projects-btn').classList.remove('hidden');
}

const hideAllProjects = () => {
  // Esconder todos os projetos além dos 3 primeiros
  const allProjects = document.querySelectorAll('.projects__row');
  allProjects.forEach((project, index) => {
    if (index >= 3) {
      project.classList.add('hidden');
    }
  });

  console.log('dadada')

  // Esconder o botão "Hide Projects" e mostrar o botão "Show All Projects"
  document.querySelector('.hide-projects-btn').classList.add('hidden');
  document.querySelector('.show-all-btn').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementsByClassName('header')[0];

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});