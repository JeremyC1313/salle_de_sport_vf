function changeColorOnScroll() {
    const navbar = document.querySelector('.nav-fixed');
    window.onscroll = () => {
        if(window.scrollY > 100) {
            navbar.classList.add('nav-active');
        }else {
            navbar.classList.remove('nav-active');
        }
    };
}
changeColorOnScroll()



let pathArray = window.location.pathname.split('/');
        if(pathArray.includes('contact.php')){
            let MyForm = document.getElementById("myForm");
            MyForm.addEventListener("submit", validator);
            function validator(e){
        
                let nom = document.getElementById("nom");
                let number = document.getElementById("number") ;
                let prenom = document.getElementById("prenom");
                let email = document.getElementById("email");
                let sujet = document.getElementById("sujet");
                let message = document.getElementById("message");
                let MyRegex = /^[a-zA-Z-\s]+$/ ;
                let regex_mail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ ;
                let regex_phone = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/ ;
                
                if (nom.value == ""){
                    /* name.style.borderColor = "red"; */
                    $(nom).css('border', '3px solid red');
                    e.preventDefault();
                }
                else if (MyRegex.test(nom.value) === false){
                    $(nom).css('border', '3px solid red');
                    e.preventDefault();
                }
                else{
                    $(nom).css('border', '3px solid green');
                }
                if (prenom.value == ""){
                    $(prenom).css('border', '3px solid red');
                    e.preventDefault();
                }
                else if (MyRegex.test(prenom.value) === false) {
                    $(prenom).css('border', '3px solid red');
                    e.preventDefault();
                }
                else{
                    $(prenom).css('border', '3px solid green');
                }
                if (email.value == ""){
                    $(email).css('border', '3px solid red');
                    e.preventDefault();
                }
                else if (regex_mail.test(email.value) === false){
                    $(email).css('border', '3px solid red');
                    e.preventDefault();
                }
                else{
                    $(email).css('border', '3px solid green');
                }
                if(number.value == ""){
                    $(number).css('border', '3px solid red');
                    e.preventDefault();
                }
                else if (regex_phone.test(number.value) === false){
                    $(number).css('border', '3px solid red');
                    e.preventDefault();
                }
                else{
                    $(number).css('border', '3px solid green');
                }
                if (sujet.value == ""){
                    $(sujet).css('border', '3px solid red');
                    e.preventDefault();
                }
                else if (MyRegex.test(sujet.value) === false){
                    $(sujet).css('border', '3px solid red');
                    e.preventDefault();
                }
                else{
                    $(sujet).css('border', '3px solid green');
                }
                if (message.value == ""){
                    $(message).css('border', '3px solid red');
                    e.preventDefault();
                }
                else if (MyRegex.test(message.value) === false){
                    $(message).css('border', '3px solid red');
                    e.preventDefault();
                }
                else{
                    $(message).css('border', '3px solid green');
                }
            }
        }


// document.getElementById("myForm").addEventListener("submit", validForm);
      
//     function validForm(e) {
//         let nom = document.getElementById("nom");
//         let prenom = document.getElementById("prenom");
//         let telephone = document.getElementById("number");
//         let email = document.getElementById("email");
  
//         let myRegex = /^[a-zA-Z]+$/;
//         let myRegexNumb = /^[.0-9 ]+$/;
//         let myRegexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
//         if (nom.value === "") {
//             errorName.innerHTML = "Saisie ton Prenom";
//             errorName.style.color = " red";
//             nom.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else if (!myRegex.test(nom.value)) {
//             errorName.innerHTML = "Pas de chiffre dans ton prenom!!";
//             errorName.style.color = "red";
//             nom.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else {
//             errorName.innerHTML = "Bravo!!";
//             errorName.style.color = "green";
//             nom.style.borderColor = "green";
//         }
//         if (prenom.value === "") {
//             errorFirstName.innerHTML = "Saisie ton Nom";
//             errorFirstName.style.color = " red";
//             prenom.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else if (!myRegex.test(prenom.value)) {
//             errorFirstName.innerHTML = "Pas de chiffre dans ton nom!!";
//             errorFirstName.style.color = "red";
//             prenom.style.borderColor = "red";
//             e.preventDefault();
//         }   
//         else {
//             errorFirstName.innerHTML = "Bravo!!";
//             errorFirstName.style.color = "green";
//             prenom.style.borderColor = "green";
//         }
//         if (telephone.value === "") {
//             errorTel.innerHTML = "Saisie ton numero de tel";
//             errorTel.style.color = " red";
//             telephone.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else if (!myRegexNumb.test(telephone.value)) {
//             errorTel.innerHTML = "Pas de lettre dans ton 06!!";
//             errorTel.style.color = "red";
//             telephone.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else {
//             errorTel.innerHTML = "Bravo!!";
//             errorTel.style.color = "green";
//             telephone.style.borderColor = "green";
//         }
//         if (email.value === "") {
//             errorEmail.innerHTML = "Saisie ton e-mail";
//             errorEmail.style.color = " red";
//             email.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else if (!myRegexMail.test(email.value)) {
//             errorEmail.innerHTML = "e-mail non valide";
//             errorEmail.style.color = "red";
//             email.style.borderColor = "red";
//             e.preventDefault();
//         } 
//         else {
//             errorEmail.innerHTML = "Bravo!!";
//             errorEmail.style.color = "green";
//             email.style.borderColor = "green";
//         }
//     }
// verifictionPath();