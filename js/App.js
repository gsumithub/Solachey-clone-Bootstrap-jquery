$('#testimonialSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

let header = document.getElementById('headerSection');
window.addEventListener('scroll', ()=>{
    if(window.scrollY>100){
        header.style.top = '0px';
    }
    else{
        header.style.top = '20px';
    }
})
$('#blogHeroSection').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})