
    const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
  
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
  });

function nextPage(){
  window.location.href='details.html'
}

function Video(){
  let ved=document.getElementById("play");
  ved.src=`https://www.youtube.com/embed/Gb2s1tcPpqE`

}