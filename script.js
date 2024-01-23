let input = document.getElementById('input');

function calculate(num) {
    input.value += num;
}

let result = () => {
    try {
        let expression = input.value;
        
        // regex to Handle percentage calculation separately ( example 2*8%)
        expression = expression.replace(/(\d+)%(\d+)/g, function(match, p1, p2) {
            return (p1 / 100) * p2;
        });

        // regex to Handle cases like 8%2
        expression = expression.replace(/(\d+)%/g, function(match, p1) {
            return p1 / 100;
        });
        let Result = eval(expression);
        if(Number.isInteger(Result)){
            input.value=Result;
        }
        else{
        input.value= Result.toFixed(2);
        }
        
    } catch (err) {
        alert("Enter a valid input");
    }
}


let clr = () => {
    input.value = "";
}

let del = () => {
    input.value = input.value.slice(0, -1);
}
