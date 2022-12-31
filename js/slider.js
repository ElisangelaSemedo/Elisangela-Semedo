//PORTFOLIO SLIDER

//Declarando variáveis
var sliderContainer = document.querySelector('.eli-slider-container');
var sliderList = document.querySelector('.eli-slider-list');
var sliderItem = document.querySelectorAll('.eli-portfolio-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.eli-item-prev');
var nextItem= document.querySelector('.eli-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.eli-current-slide');
var totalSlide = document.querySelector('.eli-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.eli-item-navigator a');
var navCounter = document.querySelector('.eli-navigator-counter span');


//Capturando larguras individuais
if (window.innerWidth < 992 ) {
  var containerWidth = sliderContainer.parentElement.offsetWidth - 39;
} else {
  var containerWidth = sliderContainer.parentElement.offsetWidth;
}



//Passando larguras dinamicas
sliderContainer.style.width = containerWidth + 'px';

for(var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + 'px';
  var sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth
  
}

sliderList.style.width = sliderListWidth + 'px';


//Fazendo Anilação do Slider onClixk


// HANDLERS

//Next Slide Navigator
var nextSlideAnime = function (){
    var lastItem = sliderListWidth - containerWidth;

    if((-1*(sliderPos) === lastItem)) {
      return;
    }
  
    sliderPos -= containerWidth;
  
    anime({
      targets: sliderList,
      translateX: sliderPos,
      easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//Prev Slide Navigator
var prevSlideAnime = function (){

    if(sliderPos === 0) {
        return;
      }
    
      sliderPos += containerWidth;
    
      anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
      });
};

// Counter Formater
var counterFormatter = function(n){
    if(n < 10){
        return '0' + n;
    } else {
        return n;
    }
};

// Counter Add
var counterAdd = function(){
    if((currentCounter >= 0) && (currentCounter < sliderTotalItems)){
      currentCounter ++;  
      currentSlide.innerHTML = counterFormatter(currentCounter);
      navCounter.innerHTML = counterFormatter(currentCounter);
        
    }
    
}

// Counter Remove
var counterRemove = function(){
    if((currentCounter > 1) && (currentCounter <= sliderTotalItems)){
      currentCounter --;  
      currentSlide.innerHTML = counterFormatter(currentCounter);
      navCounter.innerHTML = counterFormatter(currentCounter);
    }
    
}

//  Set Active Nav
var setActiveNav = function(){
    for(var nav = 0; nav < navItems.length; nav++){
        let myNavNum = parseInt(navItems[nav].getAttribute('data-nav'));
        if(myNavNum === currentCounter){
            navItems[nav].classList.add('eli-item-active');

            anime({
                targets: '.eli-item-active',
                width: 90
              });
        }
    }
}

//  Set Active Slide
var setActiveSlide = function(){
  for(var slide = 0; slide < sliderItem.length; slide++){
      let mySlideNum = parseInt(sliderItem[slide].getAttribute('data-slide'));
      
      if(mySlideNum === currentCounter){
          sliderItem[slide].classList.add('eli-slide-active');
          sliderItem[slide].querySelector('.eli-portfolio-item-box').classList.add('eli-scale-right');
          sliderItem[slide].querySelector('.eli-portfolio-item-thumb img').classList.add('eli-scale-up');
          sliderItem[slide].querySelector('.eli-portfolio-item-info').classList.add('eli-fade-from-left');
      }
  }
}

var changeActive = function(){
    for(var rm = 0; rm < navItems.length; rm++) {
        navItems[rm].classList.remove('eli-item-active');

        anime({
            targets: navItems[rm],
            width: 20
          });
    }

    for(var rmsld = 0; rmsld < sliderItem.length; rmsld++) {
      sliderItem[rmsld].classList.remove('eli-slide-active');
      sliderItem[rmsld].querySelector('.eli-portfolio-item-box').classList.remove('eli-scale-right');
      sliderItem[rmsld].querySelector('.eli-portfolio-item-thumb img').classList.remove('eli-scale-up');
      sliderItem[rmsld].querySelector('.eli-portfolio-item-info').classList.remove('eli-fade-from-left');

  }

    setActiveNav();
    setActiveSlide();
}


//ACTIONS

totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.eli-item-active',
    width: 90
  });


nextItem.addEventListener('click', function(){
    nextSlideAnime();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function(){
    prevSlideAnime();
    counterRemove();
    changeActive();

});