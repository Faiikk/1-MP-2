
var allLi = document.querySelectorAll(".typoselect li");
for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("mouseover", function() {
        document.querySelector(".typoaffichage").innerHTML=this.textContent;
    });
}


