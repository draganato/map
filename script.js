var uname=document.forms['form']['uname'];
var psw=document.forms['form']['psw'];


/*
uname.addEventListener('textInput', uname_Verify);
psw.addEventListener('textInput', psw_Verify);
*/

function validated(){
    if(uname.value!="dragana"){
        uname.style.border="1px solid red";
        uname.focus();
        return false;
    }
    else{
        uname.style.border="1px solid silver";
    
    }
    if(psw.value!="28021995"){
        psw.style.border="1px solid red";
        psw.focus();
        return false;
    }
    else{
        psw.style.border="1px solid silver";
    }
}

function uname_Verify(){
    if(uname.value=='dragana'){
        uname.style.border="1px solid silver";
        return true;
    }
}
function psw_Verify(){
    if(psw.value=='dragana'){
        psw.style.border="1px solid silver";
        return true;
    }
 getElementById('dugme').addEventListner('click',function(){ uname_Verify; psw_Verify; })
}