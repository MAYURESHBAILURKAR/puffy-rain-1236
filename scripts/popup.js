let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    document.getElementById("popup").style.display = "block"
})

let close = document.getElementById("close");
close.addEventListener("click", function () {
    document.getElementById("popup").style.display = "none"
})

