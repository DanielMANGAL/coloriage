let coloring = true 
let colors= document.querySelectorAll(".couleur")
let col="Grey";

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.addEventListener("mouseover", colorSquare);
      square.addEventListener("click", modeColoring);
      square.style.backgroundColor = "white";
      board.insertAdjacentElement("beforeend", square);
    }
  }
  
  populateBoard(16);

  function randomColor(){
    return ("#" + (Math.floor(Math.random()*16777215).toString(16)));
  };
function colorSquare(){
    if(coloring == true){
        
        if(col=="Pink"){
    this.style.backgroundColor= "pink"}}
    else if (col=="Grey"){
        this.style.backgroundColor= "gray"}
        else if (col=="Black"){
            this.style.backgroundColor= "black"}
        else if (col=="Random"){
            this.style.backgroundColor= randomColor()
        }
}
function changeSize(input){
    console.log(input)
    if(input> 1&& input<101){
        document.getElementById("messageTaille").textContent=" "
    populateBoard(input)}
    else{
        document.getElementById("messageTaille").innerHTML="Vous devez choisir une taille entre 2 et 100"
    }
}
function modeColoring(){
    
   
   if(coloring==true){
    document.getElementById("coloriage").textContent=" Tu es en train de colorier"
   } else{
    document.getElementById("coloriage").textContent=" Commence à cliquer où tu veux pour poursuivre le dessin"
   }
   coloring =!coloring;
}


colors.forEach(colors=>{
    colors.addEventListener(('click'), color=>{
    col=colors.getAttribute("id")


}
  
    )})
  