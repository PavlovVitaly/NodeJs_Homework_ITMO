document.getElementById("button").onclick = IncreaseClickCounter;

function IncreaseClickCounter() {
    this.value = parseInt(this.value) + 1;
}