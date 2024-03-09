// function performAdd(){
//     let num1 = document.getElementById("box1").value
//     let num2 = document.getElementById("box2").value
//     let result = Number(num1)+Number(num2)
//     console.log(result);
// }

function performAdd(){
    let num1 = box1.value
    let num2 = box2.value
    let result = (+num1)+(+num2)
    let root = document.getElementById("root")
    root.innerHTML=result
}

function performSub(){
    let num1 = document.getElementById("box1").value
    let num2 = document.getElementById("box2").value
    if(num1<num2){
        let c=num1;
        num1=num2;
        num2=c
        let result = Number(num1)-Number(num2)
        root.innerHTML=result
    }
    else{
        let result = Number(num1)-Number(num2)
        root.innerHTML=result
    }
}


function performDiv(){
    let num1 = document.getElementById("box1").value
    let num2 = document.getElementById("box2").value
    if(num2==0){
        let root=document.getElementById("root")
        root.style.color="red"
        root.innerHTML="division is not possible"
    }
    else{
        let result = Number(num1)/Number(num2)
        let root=document.getElementById("root")
        root.innerHTML=result
    }
}

function performMulti(){
    let num1 = document.getElementById("box1").value
    let num2 = document.getElementById("box2").value
    let result = Number(num1)*Number(num2)
    let root = document.getElementById("root")
    root.innerHTML=result
}
    