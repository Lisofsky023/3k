document.addEventListener('DOMContentLoaded', () => {
    let animatedTitle = document.getElementsByClassName('services__title');
    let animatedNumber = document.getElementsByClassName('services__number');
    let animatedString = document.getElementsByClassName('services__string');
    let animatedSubtitle = document.getElementsByClassName('services__text-subtitle');
    let animatedIcon = document.getElementsByClassName('services__icon');
    let animatedFrame = document.getElementsByClassName('services__frame');
    let animatedText = document.getElementsByClassName('services__text');
    let animatedList = document.querySelector('.services__list');
    
    let scrollPosition = parseInt(localStorage.getItem('scrollPosition')) || 0;
    
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight;
    }
    
    function animateElementsOnScroll() {
      for (var i = 0; i < animatedTitle.length; i++) {
        var element = animatedTitle[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('show');
        }
      }
    
      for (var i = 0; i < animatedNumber.length; i++) {
        var element = animatedNumber[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('show');
        }
      }
    
      for (var i = 0; i < animatedString.length; i++) {
        var element = animatedString[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('show');
        }
      }
    
      for (var i = 0; i < animatedSubtitle.length; i++) {
        var element = animatedSubtitle[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('show');
        }
      }
    
      for (var i = 0; i < animatedIcon.length; i++) {
        var element = animatedIcon[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('show');
        }
      }
    
      for (var i = 0; i < animatedFrame.length; i++) {
        var element = animatedFrame[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('slide');
        }
      }
    
      for (var i = 0; i < animatedText.length; i++) {
        var element = animatedText[i];
    
        if (isElementInViewport(element)) {
          element.classList.add('slide-again');
        }
      }
    
      if (isElementInViewport(animatedList)) {
        animatedList.classList.add('slide-again');
      }
    }
    
    function saveScrollPosition() {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
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
  });
  

