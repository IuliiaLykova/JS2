//document.getElementsByTagName("h2")[0].innerHTML = "Cool2";
const test1 = document.getElementById("consoleLog");
test1.innerHTML = "s";

const allParagraphs = document.getElementsByTagName("p");
const regex1 = new RegExp("'", "gmi");
const regex2 = new RegExp('n"t', "gmi");

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].innerHTML = allParagraphs[i].innerText.replace(regex1, '"'); //"foo"; //
    allParagraphs[i].innerHTML = allParagraphs[i].innerText.replace(
        regex2,
        "n't"
    );
}

//Проверка формы
document
    .getElementById("form-submit")
    .addEventListener("click", () => formCheck(event));

function formCheck(event) {
    event.preventDefault();
    let allFields = [];
    //mistake? -> make the element "outline: red";

    //check FullName
    let fullName = document.querySelector('#fullName');
    const regExforName = new RegExp("[A-z]", "gmi");
    let fullNameCheck = fullName.value.replace(regExforName, "");
    fullcheck(fullNameCheck.length, fullName);

    //check eMail
    let eMail = document.querySelector('#eMail');
    const regExforEmail = new RegExp("my(.|-)?mail@mail.ru", "gmi");
    let eMailCheck = eMail.value.replace(regExforEmail, "");
    fullcheck(eMailCheck.length, eMail);

    //check tPhone
    let tPhone = document.querySelector('#tPhone');
    //const regExfortPhone = new RegExp("\+\d\(\d{3}\)\d{3}-\d{4}", "");
    const regExfortPhone = /\+7\(\d{3}\)\d{3}-\d{4}/;
    let tPhoneCheck = tPhone.value.replace(regExfortPhone, "");
    fullcheck(tPhoneCheck.length, tPhone);
    
    //message at the end of registration
    let formErrorSum = fullNameCheck.length + eMailCheck.length + tPhoneCheck.length;
    if (formErrorSum == 0) {
        alert("We havn't detected any errors in registration form.\nThank you for registration!");
    } else {
        alert("Houston we've got a problem!\nPlease, follow the rules:\n1) Name Field should contain alphabet characters only\n2) E-Mail field should look like: mymail@mail.ru, OR my.mail@mail.ru, OR my-mail@mail.ru only!\n3) The telephone number should have the following format and structure: +7(000)000-0000");
    }
}


function fullcheck(fieldLength, fieldName) {
    if (fieldLength) {
        fieldName.classList.add("warning-redBorders");
    } else {
        fieldName.classList.remove("warning-redBorders");
    }
}
