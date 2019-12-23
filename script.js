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
  //alert("grrrr!");
  event.preventDefault();
  //let eMail, tPhone, textField;
  let fullName = document.getElementById("fullName").value;

  let eMail = document.getElementById("eMail").value;
  let tPhone = document.getElementById("tPhone").value;
  let textField = document.getElementById("textField").value;
  //get all values
  //check for mistales
  //mistake? -> make the element "outline: red";
  test1.innerHTML = fullName;
}
