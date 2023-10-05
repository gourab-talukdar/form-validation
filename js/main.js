//------------------------------------ ************** populating the SIGN UP FORM & LOGIN FORM & BACKGROUND ************

const askLogin = document.getElementById("ask-login");
const askSignUp = document.getElementById("ask-sign-up");

       
// ---------------------when user click on  LOGIN? then this event listener will be executed
askLogin.addEventListener("click", function(){

    document.querySelector(".form-bg").classList.add("form-bg-move");

    setTimeout(function(){
                
                document.getElementById("sign-up-form").classList.add("neg-z-index");
                document.querySelector(".sign-up-form-heading").classList.add("neg-z-index");

                document.getElementById('login-form').classList.remove("no-display"); 
                document.querySelector(".login-form-heading").classList.remove("neg-z-index"); 
            },1000);
            
});


// ---------------------when user click on  SIGN UP? then this event listener will be executed
askSignUp.addEventListener("click", function(){

            document.querySelector(".form-bg").classList.remove("form-bg-move");
            
            setTimeout(function(){

                document.getElementById("sign-up-form").classList.remove("neg-z-index");
                document.querySelector(".sign-up-form-heading").classList.remove("neg-z-index");

                document.getElementById('login-form').classList.add("no-display");
                document.querySelector(".login-form-heading").classList.add("neg-z-index");
            },1000);
});




//--------------------------------************** SIGN UP FORM VALIDATION start here ***************
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("cpassword");
let successField = [0,0,0,0];


const setErr = function(id, errMsg){

    let inputGroup = id.parentNode;
    let errTag = inputGroup.querySelector("small");

    inputGroup.classList.add("error");
    errTag.innerText = errMsg;

    inputGroup.classList.remove("success");
}
const setSuccess = function(id){

    let inputGroup = id.parentNode;

    inputGroup.classList.remove("error");
    inputGroup.classList.add("success");
}

const isEmail = function(email){
    let emailVal = email.value.trim();
    let lastDot = emailVal.lastIndexOf(".");
    let firstDot = emailVal.indexOf(".");
    let lastAt = emailVal.lastIndexOf("@");
    let firstAt = emailVal.indexOf("@");

    if(emailVal.indexOf(" ") != -1){
        setErr(email, "Email doesn't contain space!");
        return false;
    }
    else if (lastDot === emailVal.length-1){
        setErr(email,"Dot at last!");
        return false;
    }
    else if(firstDot === 0){
        setErr(email,"Dot at first!");
        return false;
    }
    else if(lastAt === emailVal.length-1){
        setErr(email,"@ at last!");
        return false;
    }
    else if(firstAt === 0){
        setErr(email,"@ at first!");
        return false;
    }
    else if (lastDot < lastAt + 3){
        setErr(email,"Invalid Email ID");
        return false;
    }
    else{
        return true;
    }
}
function reset(){
    userName.value="";
    email.value="";
    password.value="";
    cPassword.value="";

    userName.parentNode.classList.remove("success");
    email.parentNode.classList.remove("success");
    password.parentNode.classList.remove("success");
    cPassword.parentNode.classList.remove("success");
}
function showPopUp(){
    document.querySelector(".form-container").classList.add("no-display");
    document.getElementById("pop-up").classList.remove("no-display");
    document.querySelector("#pop-up h2 span").innerText=userName.value.trim();
    reset();
}
function getRegSuccess(){

    let count = 0;

    successField.forEach(function(value){
        if(value){
            count++;
        }
        else{
            count=0;
        }
    });
    
    if (count === 4){
        showPopUp();
        // document.write("thank you for your response");
    }
   
}


function signUpValidate(){

    let flag = true;
    successField = [0,0,0,0];

    // ------------checking the USERNAME
    if(userName.value.trim() === ""){
        setErr(userName,"Username cann't be blank!");
        flag = false; 
    }
    else if (userName.value.trim().length < 3) {
        setErr(userName,"Minimum 3 char needed!")
        flag = false;
    }else{
        setSuccess(userName);
        successField[0] = 1;
    }

    // --------------checking the EMAIL ID
    if(email.value.trim() === ""){
        setErr(email,"Email cann't be blank!");
        flag = false;
    }
    else if(!isEmail(email)){
        // setErr(email,"Not a valid email!");
        flag = false;
    }
    else if(email.value.trim().length > 50){
        setErr(email,"Email is too long...");
        flag = false;
    }
    else{
        setSuccess(email);
        successField[1] = 1;
    }

    //--------------- checking the PASSWORD
    if(password.value.trim() === ""){
        setErr(password,"Password must be filled!");
        flag = false;
    }
    else if(password.value.trim().length < 6){
        setErr(password,"Minimum 6 character required!");
        flag = false;
    }
    else{
        setSuccess(password);
        successField[2] = 1;
    }
    //-------------------- checking the CONFIRM PASSWORD
    if(cPassword.value.trim() === ""){
        setErr(cPassword, "Confirm password must be filled!");
        flag = false;
    }
    else if(cPassword.value.trim() != password.value.trim()){
        setErr(cPassword,"Password must be same...");
        flag = false;
    }
     else if(cPassword.value.trim().length < 6){
        setErr(cPassword,"Minimum 6 character required!");
        flag = false;
    }
    else{
        setSuccess(cPassword);
        successField[3] = 1;
    }
    
    getRegSuccess();
    
    return flag;
}


// main fuction, which will call the other functions defined above
document.getElementById("sign-up-form").addEventListener("submit", function(e){
    e.preventDefault();
    signUpValidate();
});


// this event listerner will be executed, when user click on the LOG IN  link after successfully sign up 
document.getElementById("ask-login-pop-up").addEventListener("click",function(){

    document.querySelector(".form-container").classList.remove("no-display");
    document.getElementById("pop-up").classList.add("no-display");
    document.querySelector(".form-bg").classList.add("form-bg-move");
    
                
            document.getElementById("sign-up-form").classList.add("neg-z-index");
            document.querySelector(".sign-up-form-heading").classList.add("neg-z-index");

            document.getElementById('login-form').classList.remove("no-display"); 
            document.querySelector(".login-form-heading").classList.remove("neg-z-index"); 
            
    
});



