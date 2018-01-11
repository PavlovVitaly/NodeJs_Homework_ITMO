document.getElementById("changeableDiv0").onclick = OnClickHandler;
document.getElementById("changeableDiv1").onclick = OnClickHandler;
document.getElementById("changeableDiv2").onclick = OnClickHandler;
document.getElementById("changeableDiv3").onclick = OnClickHandler;
document.getElementById("changeableDiv4").onclick = OnClickHandler;

function OnClickHandler() {
    if (this.style.color === "green") {
        this.style.color = "black";
    } else {
        this.style.color = "green";
    }
}
