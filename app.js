const button=document.getElementById("button")

const canvas=document.getElementById("canvas")
const randomcolor= ()=>{
    let val="0123456789ABCDEF"
    let hex="#"
    for(let i=0 ;i<6; i++){
        hex= hex + val[Math.floor(Math.random() *16)]
        
    }
    return hex;
};

// console.log(randomcolor());
function change(){
    canvas.style.background= randomcolor()
}

button.addEventListener("click", change)




