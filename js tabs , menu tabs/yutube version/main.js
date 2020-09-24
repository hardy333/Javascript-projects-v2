const tabButtons = document.querySelectorAll(".tab-container button");
const tabPannels = document.querySelectorAll(".tab-container .tab-pannel");

function showPanel(index, color){
    console.log(color);
    tabButtons.forEach(button => {
        button.style.backgroundColor = "";
        button.style.color = "";
    })
    tabButtons[index].style.backgroundColor = color;
    tabButtons[index].style.color = "#fff";

    tabPannels.forEach(tabPannel => {
        tabPannel.style.display = "none";

    })

    tabPannels[index].style.display = "block";
    tabPannels[index].style.backgroundColor = color;


}

showPanel(0, "#f44336");