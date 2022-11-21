(function(){
    "use strict"

    const d = document;
    const slider = [...d.querySelectorAll(".nP")];
    let value;

    const moverSlider = (cambio)=>{

        const elementoActual = Number(d.querySelector(".nP_show").dataset.id);
        console.log(elementoActual);

        value = elementoActual;
        value += cambio;

        console.log(value);

        if(value === 0 || value === slider.length+1){
            value = value === 0 ? slider.length : 1;
        }
        console.log(elementoActual);

        slider[elementoActual-1].classList.toggle("nP_show");
        slider[value-1].classList.toggle("nP_show");
    }

    d.addEventListener("click",(e)=>{

        if(e.target.matches(".btnFlechaIzq"))moverSlider(-1);
        if(e.target.matches(".btnFlechaDer"))moverSlider(1);

    })
})()