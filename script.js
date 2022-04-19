var menu = document.querySelector("#fullmenu")

document.querySelector("#tag #kml").addEventListener("click", function () {
     menu.style.left = "0%"
    
})

document.querySelector("#right i").addEventListener("click", function () {
    menu.style.left = "-100%"
})





// smooth scroll and gsap
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.03, 
    multiplier: 1.4, 
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
    tablet: {
        smooth: !1,
        breakpoint: 1024
    },
})

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", { scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".the",
        scroller: "#main",
        stagger: .03,
        scrub:2,
        start: "top 80%"
    },

})
tl.from(".the", {
     
    onStart: function(){
        $('.the').textillate({ in: { effect: 'fadeInUp' } });
      },
})
tl.from(".gm", {
    
    onStart: function(){
        $('.gm').textillate({ in: { effect: 'fadeInOut' } });
      },
})


let ft = gsap.timeline({
    scrollTrigger: {
        trigger: ".ft1",
        scroller: "#main ",
        start: "top 90%"
    }
})
  
ft.from(".ft1", {
    onStart: function(){
        $('.ft1').textillate({ in: { effect: 'fadeInUp' } });
      },
    
}) 


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();







// Animation of product showcase

var elem = document.querySelector("#pht")
var item = document.querySelector("#pht .pht1")
var clm = document.querySelectorAll("#pht .pht1")
// console.log(elem) 
// document.querySelector("#prt").style.width = elem.width*6 + elem.left*8 + "px"
var strt = item.getBoundingClientRect().left ;
elem.addEventListener("scroll", function () {
    var nxt = item.getBoundingClientRect().left 
    var diff = nxt - strt;
    strt = nxt;
    var speed = Math.floor(diff * 0.18);
    console.log(speed)
    clm.forEach( function (cls){
        
        cls.style.transform = `skewX(${speed}deg)`
    })
    


})  



// fullmenu

var links = document.querySelectorAll(".links");
var imgu = ["https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=376&q=80",
           "https://images.unsplash.com/photo-1596363969621-c4f16f8e4df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
           "https://images.unsplash.com/photo-1566331219402-b9e315771f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
           "https://images.unsplash.com/photo-1594644465539-783d6f6bb37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"]

   
   links.forEach(function(elem){
       elem.addEventListener("mousemove",function(dets) {
           this.children[1].style.display = "initial";
           this.children[1].style.transform = ` translate(${dets.clientX-150}px , -${dets.clientY/3.5}px ) rotate(${dets.clientX/13}deg)  `
           document.querySelector("#imgu").style.backgroundImage = `url(${imgu[elem.dataset.index]}) `
           // console.log(elem.dataset.index)
       }) 

       elem.addEventListener("mouseout",function(dets) {
        this.children[1].style.display = "none";
    })     
   })
  