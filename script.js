const inputText = document.getElementById("textarea");
const translate = document.getElementById("translate");
const result = document.getElementById("result");

const url = "https://api.funtranslations.com/translate/mandalorian.json";

const getInputText = (textInput) => {
  return url + "?" + "text=" + textInput;
};

function translateThetext() {
  fetch(getInputText(inputText.value))
    .then((response) => response.json())
    .then((data) =>
      data
        ? (result.innerText = data.contents.translated)
        : (result.innerText = "translating...")
    )
    .catch((error) => alert(error));
}

translate.addEventListener("click", translateThetext);

const instagram = document.querySelector(".fa-instagram-square");
const linkedin = document.querySelector(".fa-linkedin");
const twitter = document.querySelector(".fa-twitter-square");
const github = document.querySelector(".fa-github");

instagram.addEventListener("click", function () {
  location.href = "https://www.instagram.com/gurudatt_puranik/";
});

twitter.addEventListener("click", function () {
  location.href = "https://twitter.com/PuranikGurudatt";
});

linkedin.addEventListener("click", function () {
  location.href = "https://www.linkedin.com/in/gurudatt-puranik-0933b0195/";
});

github.addEventListener("click", function () {
  location.href = "https://github.com/gurudattpuranik25";
});
