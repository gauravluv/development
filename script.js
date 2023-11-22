
const form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();

 const name=document.querySelector("#Name").value;
 const password=document.querySelector("#Password").value;


    if(name==null || name==""){
         alert("please enter name");
    }

    if(password=="" || password.length<6){
        alert("please enter valid password");
    }


})