var generate = document.getElementsByTagName("button")[0];

var gameDiv = document.createElement("div");
gameDiv.setAttribute("id", "game");
document.body.appendChild(gameDiv);


generate.addEventListener("click", function () {

    gameDiv.innerHTML = "";
    
    var saisis = document.getElementById("saisis")
    var nb = saisis.value;

    var numbers = [];

    for (let i = 0; i < nb / 2; i++) {
        numbers.push(i + 1);
        numbers.push(i + 1);
    }
    for (i = 0; i < numbers.length; i++) {
        var random_index = Math.floor(Math.random() * (i + 1));
        var temp = numbers[i];
        numbers[i] = numbers[random_index];
        numbers[random_index] = temp;
    }
    for (let i = 0; i < numbers.length; i++) {
        var cellule = document.createElement("div");
        cellule.className = "cell hidden"
        gameDiv.appendChild(cellule)
        cellule.innerHTML = numbers[i]
        cellule.addEventListener("click", function () {
            this.className = "cell"
        })
    }
})