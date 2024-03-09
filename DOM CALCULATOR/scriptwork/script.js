function display(num){

    root.value+=num;
}

function clearscreen(){

    root.value=""
}

function evaluatee(){

    let current=root.value;
    result = eval(current)   // eval() is function that in javascript
    root.value=result
}

function backspace(){
    let result = root.value.slice(0,-1);
    root.value=result
}