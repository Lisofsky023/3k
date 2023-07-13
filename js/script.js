document.addEventListener('DOMContentLoaded', () => {
  let aboutLink = document.querySelector('.about-link');
  let servicesBtn = document.querySelector('.solutions__btn');

  let scrollPosition = parseInt(localStorage.getItem('scrollPosition')) || 0;

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight;
  }

  function animateElementsOnScroll() {
    let animatedElements = document.getElementsByClassName('animated-element');
    let animatedOffers = document.getElementsByClassName('solutions__item');
    let animatedLogo = document.getElementsByClassName('projects__logo');
    let visibleLogos = Array.from(animatedLogo).filter(isElementInViewport);
    let solutionsWrapper = document.querySelector('.solutions__wrapper');
    let solutionTitle = document.querySelector('.solutions__title');
    let solutionSubtitle = document.querySelector('.solutions__subtitle');
    let solutionBtn = document.querySelector('.solutions__btn');
  
    solutionsWrapper.style.opacity = '0';
  
    setTimeout(() => {
      solutionsWrapper.style.opacity = '1';
    }, 300);
  
    setTimeout(() => {
      if (isElementInViewport(solutionTitle)) {
        solutionTitle.classList.add('show');
      }
    }, 500);
  
    setTimeout(() => {
      if (isElementInViewport(solutionSubtitle)) {
        solutionSubtitle.classList.add('show');
      }
    }, 700);
  
    setTimeout(() => {
      if (isElementInViewport(solutionBtn)) {
        solutionBtn.classList.add('show');
      }
    }, 800);
  
    for (var i = 0; i < animatedElements.length; i++) {
      var element = animatedElements[i];
  
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    }
  
    for (var i = 0; i < animatedOffers.length; i++) {
      let element = animatedOffers[i];
      let logoElement = element.querySelector('.solutions__img');
      let textElement = element.querySelector('.solutions__text');
      let iconElement = element.querySelector('.solutions__icon');
      let delay = i * 500;
  
      setTimeout(function (el, logoEl, textEl, iconEl) {
        return function () {
          if (isElementInViewport(el)) {
            if (!el.classList.contains('ok')) {
              logoEl.style.opacity = '1';
              textEl.style.opacity = '1';
              iconEl.style.opacity = '1';
              el.classList.add('ok');
            }
          }
        };
      }(element, logoElement, textElement, iconElement), delay);
    }
  
    let randomIndexes = Array.from({ length: visibleLogos.length }, (_, index) => index);
    randomIndexes.sort(() => Math.random() - 0.5);
  
    randomIndexes.forEach((index, i) => {
      const element = visibleLogos[index];
      const delay = i * 300;
      setTimeout(() => {
        if (!element.classList.contains('show')) {
          element.classList.add('show');
        }
      }, delay);
    });
  }
  
  function saveScrollPosition() {
    scrollPosition = window.scrollY || document.documentElement.scrollTop;
    localStorage.setItem('scrollPosition', scrollPosition);
  }

  function restoreScrollPosition() {
    window.scrollTo(0, scrollPosition);
  }

  animateElementsOnScroll();
  restoreScrollPosition();

  window.addEventListener('scroll', () => {
    animateElementsOnScroll();
    saveScrollPosition();
  });

  aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    let targetElement = document.getElementById('about');
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });

  // servicesBtn.addEventListener('click', function () {
  //   window.location.href = "services.html";
  // });

  // back-arrow-button
  // Получаем ссылки на блоки
  const solutionsBlock = document.querySelector('.solutions');
  const aboutBlock = document.querySelector('.about');
  const partnersBlock = document.querySelector('.partners');
  const projectsBlock = document.querySelector('.projects');
  const footerBlock = document.querySelector('.footer');
  const backBtn = document.querySelector('.back__btn')

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const offset = 20;
    if (
      solutionsBlock.offsetTop - scrollPosition <= viewportHeight - offset ||
      aboutBlock.offsetTop - scrollPosition <= viewportHeight - offset ||
      partnersBlock.offsetTop - scrollPosition <= viewportHeight - offset ||
      projectsBlock.offsetTop - scrollPosition <= viewportHeight - offset ||
      footerBlock.offsetTop - scrollPosition <= viewportHeight - offset
    ) {
      // backBtn.style.visibility = "visible";
      backBtn.classList.add('visible');
      console.log('я чат GPT молодец');
    } else {
      // backBtn.style.visibility = "hidden";
      backBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleScroll);
  backBtn.scrollIntoView({
    behavior: 'smooth'
  });

  backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let targetElement = document.getElementById('main');
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


