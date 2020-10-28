var uname=document.forms['form']['uname'];
var psw=document.forms['form']['psw'];



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
