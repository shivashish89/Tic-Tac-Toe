let boxes=document.querySelectorAll(".button");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#New");
let msg=document.querySelector("#msg")
let msg_container=document.querySelector(".msg-container")

let turn0=true;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msg_container.classList.add("hide");

}


const enableboxes=()=>{
    for(let button of boxes){
        button.disabled=false;
        button.innerText="";
    }
}

boxes.forEach((button)=>{
button.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn0){
        button.innerText="O";
        turn0=false;
    }

    else{
        button.innerText="X";
        turn0=true;

    }
    button.disabled=true;
    checkwinner();
});
});

const disableboxes=()=>{
    for(let button of boxes){
        button.disabled=true;
    }
}


const showWinner=(winner)=>{
   msg.innerText=`congratulations! player '${winner}' Wins`;
   msg_container.classList.remove("hide");
   disableboxes();
}

const matchDraw=()=>{
    msg.innerText=`Match Draw`;
    msg_container.classList.remove("hide");
    disableboxes();
 }

let k=0;
 
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
      if(pos1Val!=""&& pos2Val!=""&& pos3Val!="" ){
        if(pos1Val===pos2Val && pos2Val===pos3Val ){
            console.log(pos1Val,"Wins");
            showWinner(pos1Val);
        }
        else {
            k++;
            // matchDraw();
            if(k==26){
                matchDraw();
                console.log("match draw");
            }
            
            
        }

      }
    }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);



