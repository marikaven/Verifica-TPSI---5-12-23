let backbutton = document.querySelector('.container .back-button');
let input = document.querySelector('.container .input-box .input-value');
let result = document.querySelector('.container .input-box .result');
let container = document.querySelector('.container');
let allbuttons = document.querySelectorAll('.container .button');
let flag = 0;

let backSpace = () => {
        if(input.value[input.value.length - 1] == '('){
                flag = 0;
        } else if(input.value[input.value.length - 1] == ')'){
                flag = 1;
        }
        input.value = input.value.substr(0, input.value.length - 1);
}


for (let item of allbuttons) {
        item.addEventListener('click', (e) => {
                let buttonText = e.target.innerHTML;
                if (buttonText == '×') {
                        buttonText = '*';
                }

                if (buttonText == '÷') {
                        buttonText = '/';
                }

                if (buttonText == '( )' && flag == 0) {
                        buttonText = '(';
                        flag = 1;
                }
                else if(buttonText == '( )' && flag == 1){
                        buttonText = ')';
                        flag = 0;
                }

                input.value += buttonText;
        })
}

let calculate = () => {
        result.value = eval(input.value);
        input.value = result.value;
}