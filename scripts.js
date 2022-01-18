
const upperChar = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
const lowerChar = 'qwertyuioplkjhgfdsazxcvbnm';
const numberChar = '1234567890';
const symbol = '!@#$%^&*()_+';
const empty = "";

const password = document.getElementById("output-password");
const passwordLength = document.getElementById("p-length");
const upper_case = document.getElementById("upper_case");
const lower_case = document.getElementById("lower_case");
const number = document.getElementById("number");
const specailChar = document.getElementById("special_char");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {

    let initPassword  = empty;

    (upper_case.checked) ? initPassword += upperChar : "";
    (lower_case.checked) ? initPassword += lowerChar : "";
    (number.checked) ? initPassword += numberChar : "";
    (specailChar.checked) ? initPassword += symbol : "";
    password.value = generate_password(passwordLength.value, initPassword);

});

function generate_password(l, initPassword){
    var pass = "";
    for(var i = 0; i < l; i++ ){
        pass += initPassword.charAt(Math.floor(Math.random() * initPassword.length));
    }
    return pass;
}

document.getElementById("copy").addEventListener("click",() => {
    if(password.value == ""){
        alert("Please generate password");
    }else{
        password.select();
        document.execCommand("copy");
        alert("Password has been copied");
    }
});
