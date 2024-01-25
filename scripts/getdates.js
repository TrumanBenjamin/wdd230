document.getElementById("year").innerHTML = new Date().getFullYear();


if (Date.parse(document.lastModified) != 0)

document.getElementById("lastModified").innerHTML = document.lastModified; 

// website visit counter

var counterContainer = document.querySelector(".websiteCounter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem('page_view');

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
}
    else {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
    }
counterContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
});
