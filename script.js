generateBtn = document.querySelector("#generate");

upperCheck = document.querySelector("#upper");
lowerCheck = document.querySelector("#lower");
numCheck = document.querySelector("#num");
symbolCheck = document.querySelector("#symbol");
lengthBar = document.querySelector("#longueurpwd");
nbLettres = document.querySelector("#nb_lettres");
passwordInput = document.querySelector("#password");
copyBtn = document.querySelector("#copy");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = `&é"'(-è_çà)=~#{[|\\^@]}°+*$µ£/.;,<>\``;
const number = "0123456789";
const upperCase = lowerCase.toUpperCase();

setInterval(function () {
  nbLettres.value = lengthBar.value;
}, 50);

generateBtn.addEventListener("click", function () {
  let charList = "";
  //add categories to choice array
  if (lowerCheck.checked) {
    charList = charList + lowerCase;
  }

  if (upperCheck.checked) {
    charList = charList + upperCase;
  }

  if (numCheck.checked) {
    charList = charList + number;
  }

  if (symbolCheck.checked) {
    charList = charList + symbol;
  }

  if (charList === "") {
    return false;
  }

  console.log(charList);

  const charNumber = lengthBar.value;
  let password = "";

  for (let index = 0; index < charNumber; index++) {
    let randomIndex = Math.floor(Math.random() * charList.length);
    password = password + charList[randomIndex];
  }

  passwordInput.value = password;
});

copyBtn.addEventListener("click", async function () {
  await navigator.clipboard.writeText(passwordInput.value);
});
