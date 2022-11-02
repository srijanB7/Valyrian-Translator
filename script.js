const textField = document.querySelector("#textarea-box");
const translateBtn = document.querySelector("#btn");
const translatedTextField = document.querySelector("#output");
const url = `https://api.funtranslations.com/translate/valyrian.json?text=`;

console.log(textField);
translateBtn.addEventListener("click", () => {
    let msg = textField.value;
    console.log(msg)
    getTranslation(msg);
});

function getTranslation(msg) {
    fetch(url + msg)
        .then((res) => res.json())
        .then((data) => addTranslatedText(data.contents.translated));
}

function addTranslatedText(translatedText) {
    translatedTextField.textContent = translatedText;
}