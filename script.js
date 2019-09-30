var gameDiv = document.createElement("div");
gameDiv.setAttribute("id" , "game");
document.body.appendChild(gameDiv);

var numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
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
    cellule.addEventListener("click" , function(){
        this.className = "cell"
    })
}

