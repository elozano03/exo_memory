var gameDiv = document.createElement("div");
gameDiv.setAttribute("id" , "game");
document.body.appendChild(gameDiv);


var num = ["1" , "2" ,"3" ,"4" ,"5", "6" , "7" ,"8" ,"9"];
for (let i = 0; i < num.length; i++) {
    var cellule = document.createElement("div");
    cellule.className = "cell hidden"
    gameDiv.appendChild(cellule)
    cellule.innerHTML = num[i]
    cellule.addEventListener("click" , function(){
        this.className = "cell"
    })
}

