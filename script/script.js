let generate_btn = document.getElementById("generate_btn");
let password_length_tb = document.getElementById("password_length_tb");
let password_length_range = document.getElementById("password_length_range");
let password_out_tb = document.getElementById("password_out_tb");
let copy_btn = document.getElementById("copy_btn");

let number_cb = document.getElementById("number_cb");
let char_cb = document.getElementById("char_cb");
let char_upper_cb = document.getElementById("char_upper_cb");
let char_spec_cb = document.getElementById("char_spec_cb");
let repeat_cb = document.getElementById("repeat_cb");

generate_btn.addEventListener('click', passwordGenerate1);
password_length_range.addEventListener('input', changeSize);
copy_btn.addEventListener('click', copyPassword);

let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '<', '>', '?', '[', ']', '{', '}', ',', '.','='];

function changeSize(){
    password_length_tb.value = password_length_range.value;
    passwordGenerate()
}

function passwordGenerate(){
    let length = password_length_tb.value;
    let password = "";

    for(let i = 0; i< length; ){
        let random = Math.round(Math.random()*3);
        
        switch(random) {
            case 0: {
                if(!number_cb.checked)
                    continue;
                else
                    password += numberGenerate();
            };break;
            case 1: {
                if(char_cb.checked)
                    password += charGenerate();
                else
                    continue;
            } ;break;
            case 2: {
                if(char_upper_cb.checked)
                    password += charGenerateUpper();
                else
                    continue;
            };break;
            case 3: {
                if(char_spec_cb.checked)
                    password += specialGenerate();
                else
                    continue;
            };break;
        }

        i++;
    }

    console.log(password);
    password_out_tb.value = password;
}

function passwordGenerate1(){
    let length = password_length_tb.value;
    let password = "";

    for(let i = 0; i< length; ){
        let random = Math.round(Math.random()*3);

        let generatedSymbol;

        if(random == 0 && number_cb.checked)
            generatedSymbol = numberGenerate();
        else if(random == 1 && char_cb.checked)
            generatedSymbol = charGenerate();
        else if(random == 2 && char_upper_cb.checked)
            generatedSymbol = charGenerateUpper();
        else if(random == 3 && char_spec_cb.checked)
            generatedSymbol = specialGenerate();
        else
            continue;

        if(repeat_cb.checked && password.includes(generatedSymbol))
            continue;

        password += generatedSymbol;

        i++;
    }

    console.log(password);
    password_out_tb.value = password;
}

function numberGenerate(){
    return Math.round(Math.random()*9);
}

function charGenerate(){
    return String.fromCodePoint(getRndInteger(97, 122));
}

function charGenerateUpper(){
    return String.fromCodePoint(getRndInteger(65, 90));
}

function specialGenerate(){
    return special[Math.round(Math.random()*(special.length-1))];
}

function getRndInteger(min, max) {
    return Math.round(Math.random() * (max - min) ) + min;
  }


function copyPassword(){
     /* Get the text field */
     var copyText = document.getElementById("password_out_tb");
  
     /* Select the text field */
     copyText.select();
   
     /* Copy the text inside the text field */
     document.execCommand("copy");
}