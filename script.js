let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");
daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingeffect = new Typed("#text",{
    strings:["Akarshit Gupta","Web Developer", "Web Designer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})
