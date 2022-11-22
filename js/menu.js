(function(){
    "use strict"

    const d = document, w = window;
    const contNav = d.querySelector(".contNav");
    const btnFlechaUp = d.querySelector(".btnFlechaUp");
    let pos;
    
    d.addEventListener("scroll",(e)=>{
        pos = w.scrollY;

        if(pos > 500)btnFlechaUp.classList.add("btnFlechaUp_show");
        else btnFlechaUp.classList.remove("btnFlechaUp_show");
    
    })


    
    if(pos === 250){
        btnFlechaUp.classList.add("btnFlechaUp_show");
        console.log("1" + pos);
    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnMenu")){
            contNav.classList.toggle("contNav_show");
        }

    })
})()