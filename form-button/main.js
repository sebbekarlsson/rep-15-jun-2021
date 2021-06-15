const inputField = document.getElementById("input-name");
const button = document.getElementById("button");
const error = document.getElementById("error");

function updateForm() {
    const fieldIsGood = inputField.value.length >= 2;

    if (fieldIsGood) { // ar good
        button.removeAttribute("disabled");
        error.removeAttribute("data-active");
    } else { // inte good
        button.setAttribute("disabled", "");
        error.setAttribute("data-active", "");
        error.innerText = "Field is empty."
    }
}

function inputChanged() {
    updateForm();
}

inputField.addEventListener("keydown", inputChanged);
inputField.addEventListener("keyup", inputChanged);

updateForm();