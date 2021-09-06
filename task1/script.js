window.addEventListener('scroll',function(e){
    console.log(window.scrollY);
    if(window.scrollY >= 0){
        console.log(window.scrollY);
        document.querySelector('.scroll-down').style['font-size'] = "60px";
    }
    
    if(window.scrollY <=300){
        console.log(window);
        document.querySelector('.scroll-down').style['font-size'] = "1.17em";
    }
    
    if(window.scrollY >= 300){
        document.querySelector('h1').style.marginLeft = "100px";
        document.querySelector('hr').style.marginLeft = "100px";
        document.querySelector('hr').style.width = "400px";
        document.querySelector('img').style.marginRight = "100px";
    }
    if(window.scrollY <= 800){
        document.querySelector('h1').style.marginLeft = "0px";
        document.querySelector('hr').style.marginLeft = "0px";
        document.querySelector('hr').style.width = "200px";
        document.querySelector('img').style.marginRight = "0px";
    }
    if(window.scrollY >= 1300){
        document.querySelector('.scroll-up').style['font-size'] = "1.17em";
    }

    if(window.scrollY <= 1300){
        document.querySelector('.scroll-up').style['font-size'] = "60px";
    }
})
document.querySelector('.scroll-up').addEventListener('click',function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
document.querySelector('.scroll-down').addEventListener('click',function(){
    window.scroll({
        top: 820,
        behavior: 'smooth'
    })
})