const buttonGenerator = document.getElementById("generator");

const difficultyselect = document.getElementById("difficult");
let score = 0;
let bombe = [];
const grid = document.getElementById("griglia");

buttonGenerator.addEventListener("click", function(){
     
    const size = parseInt(difficultyselect.value);
    
    bombe = wrongNumbers(1, size * size);
    console.log(bombe);
    generaGriglia(size);
    
})




function wrongNumbers(min, max){
    const randomNum = [];
    while(randomNum.length < 16){
        const numCasual = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!randomNum.includes(numCasual)){
            randomNum.push(numCasual);
        }    
    }
    return randomNum;
}


function generaGriglia(size){
    
    
    grid.innerHTML = "";


    for(let i = 1; i <= size * size; i++){
        
        const cell = document.createElement("div");
        
        if(size == 10){
            cell.classList.add("cell");
        }
        else if(size == 9){
            cell.classList.add("cell-9");
        }
        else 
            cell.classList.add("cell-7");
        
        cell.innerText = i;


        cell.addEventListener("click", function(){
            if(bombe.includes(i)){
                
                grid.innerHTML = "";
                this.classList.add("red");
                alert("HAI PERSO : IL TUO PUNTEGGIO E' " + score);
                score = 0;
                
            }
            else
            score++; 
            this.classList.add("green");
            
            console.log(score);
            if(score == size * size - bombe.length){
                alert("HAI VINTO")
                grid.innerHTML = "";
            }
            
        })
        grid.append(cell);
    }
    
}