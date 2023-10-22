const fullName = document.getElementById('form6Example5');
const mobNo = document.getElementById('form6Example1');
const email = document.getElementById('form6Example2');
const city = document.getElementById('city');
const select = document.getElementById('sel1');
const textArea = document.getElementById('form6Example7');
const textArea1 = document.getElementById('suggestion');
const from = document.getElementById('form');
const from1 = document.getElementById('form1');
const errorName=document.getElementById('errorName');
const errorMob=document.getElementById('errorMob');
const errorEmail=document.getElementById('errorEmail');
const errorCity=document.getElementById('errorCity');
const errorText=document.getElementById('errorText');
const errorText1=document.getElementById('errorText1');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

   if(fullName.value==="" || mobNo.value==="" || email.value==="" || city.value==="" || textArea.value==="" )
   {

    if(fullName.value===""){
        errorName.innerText="Please Enter Full Name";
    }
    else{
        errorName.innerText="";
    }
    if(mobNo.value===""){
        errorMob.innerText="Please Enter Mobile number";
    }
    else{
        errorMob.innerText="";
    }
    if(email.value===""){
        errorEmail.innerText="Please Enter Email address";
    }
    else{
        errorEmail.innerText="";
    }
    
    if(city.value===""){
        errorCity.innerText="Please Enter Your City";
    }
    else{
        errorCity.innerText="";
    }
    if(textArea.value===""){
        errorText.innerText="Please Enter Details";
    }
    else{
        errorText.innerText="";
    }


   }
   else{

    db.collection('contactForm').add({
        fullName:fullName.value,
        mobNo:mobNo.value,
        email:email.value,
        city:city.value,
        select:select.value,
        info:textArea.value
    })
    .then(()=>{
        console.log('form submiited')
    })

    alert("Form Submitted Successfully.\nThank You!")

    fullName.value="";
    mobNo.value="";
    email.value="";
    city.value="";
    textArea.value="";
    from.value="";
    errorName.innerText="";
    errorText.innerText="";
    errorCity.innerText="";
    errorEmail.innerText="";
    errorMob.innerText="";
}
})


form1.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(textArea1.value===""){

        errorText1.innerText="Please Enter detais";

    }
    else{

    db.collection('suggestionForm').add({
        
        info:textArea1.value
    })
    .then(()=>{
        console.log('form submiited')
    })

    alert("Form Submitted Successfully.\nThank You!")

   
    textArea1.value="";
    errorText1.innerText="";
}
   
})