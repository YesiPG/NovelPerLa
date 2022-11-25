(function(){
    "use strict"

    const d = document;
    const btnCaps = [...d.querySelectorAll(".btnCap")];
    const cc13 = d.querySelector(".cc1-3");
    const cc46 = d.querySelector(".cc4-6");
    const cc79 = d.querySelector(".cc7-9");

    btnCaps.forEach( element => {
        element.addEventListener("click",(e)=>{
            if(element.textContent === "Capitulos 1 - 3"){
                cc79.classList.remove("cap_show");
                cc46.classList.remove("cap_show");
                cc13.classList.add("cap_show");
            }
            if(element.textContent === "Capitulos 4 - 6"){
                cc79.classList.remove("cap_show");
                cc13.classList.remove("cap_show");
                cc46.classList.add("cap_show");
            }
            if(element.textContent === "Capitulos 7 - 9"){
                cc13.classList.remove("cap_show");
                cc46.classList.remove("cap_show");
                cc79.classList.add("cap_show");
            }
            
        })
    })
})()