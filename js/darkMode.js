(function(){
    "use strict"

    const d = document, ls = localStorage;
    
    const imgDarkMode = d.querySelector(".imgDarkMode");
    const imgMenu = d.querySelector(".imgMenu");
    const header = d.querySelector(".header");
    const fondo = d.querySelectorAll("[data-darkMode]");
    const colorLetra = d.querySelectorAll("[data-darkModeLetra]");

    const temaOscuro = ()=>{
        console.log("hola"); 

        fondo.forEach(e => e.classList.add("temaFondo"));
        colorLetra.forEach(e => e.classList.add("temaLetra"));
        header.classList.add("temaH");

        imgDarkMode.removeAttribute("src");
        imgDarkMode.setAttribute("src","images/sun.svg");

        imgMenu.removeAttribute("src");
        imgMenu.setAttribute("src","images/menu2.svg");
        
        ls.setItem("tema","oscuro");
    }

    const temaClaro = ()=>{
        console.log("hola2"); 

        fondo.forEach(e => e.classList.remove("temaFondo"));
        colorLetra.forEach(e => e.classList.remove("temaLetra"));
        header.classList.remove("temaH");

        imgDarkMode.removeAttribute("src");
        imgDarkMode.setAttribute("src","images/moon.svg");

        imgMenu.removeAttribute("src");
        imgMenu.setAttribute("src","images/menu.svg");

        ls.setItem("tema","claro");
    }
    
    d.addEventListener("click",(e)=>{
        if(e.target.matches(".btnDarkMode")){
            if(imgDarkMode.getAttribute("src") === "images/moon.svg")temaOscuro()
            else temaClaro();
        }
    })

    d.addEventListener("DOMContentLoaded",(e)=>{
        if(ls.getItem("tema") === null) temaClaro();
        if(ls.getItem("tema") === "claro") temaClaro();
        if(ls.getItem("tema") === "oscuro") temaOscuro();
    })
})()