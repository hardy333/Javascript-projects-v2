const buttons = document.querySelectorAll(".button-wrapper button");
const dataDivs = document.querySelectorAll(".data-wrapper div");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");




        const dataId = button.dataset.id;
        dataDivs.forEach(div => {
            if(div.dataset.id === dataId){
                div.classList.add("active");
            }else{
                div.classList.remove("active");
            }
        })
    })
})

