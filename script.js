let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let count=0;

let turnO = true; //player O 
console.log("player 1");


const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO){
            box.innerText="O";
            turnO=false;
            console.log("player 1");
        }
        else{
            box.innerText="X";
            turnO=true;
            console.log("player 2");
        }
        box.disabled=true;

        checkWinner();
    })
});

const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner= (winner) => {
    msg.innerText= `Congratulations, 
    Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner= () => {
    for(let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
        }
    }
}
draw();
};

const resetGame= () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




const draw= () =>{
    if(count===9 && !msgContainer.classList.contains("winner"))
    {
        msg.innerText= "It's a Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}
