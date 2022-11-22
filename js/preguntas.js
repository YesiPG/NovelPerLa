(function(){
    "use strict"

    const d = document;
    const contenido1 = d.querySelector(".pQueEsNovela1");
    const contenido2 = d.querySelector(".pQueEsNovela2");
    const imgP = [...d.querySelectorAll(".imgPreguntas")];

    d.addEventListener("click", (e)=>{

        if(e.target.matches(".btnPregunta1")){
            contenido1.classList.toggle("pQueEsNovela_show");
            imgP[0].classList.toggle("imgPreguntas_show");
        }
        if(e.target.matches(".btnPregunta2")){
            contenido2.classList.toggle("pQueEsNovela_show");
            imgP[1].classList.toggle("imgPreguntas_show");
        }
    })
    
})()