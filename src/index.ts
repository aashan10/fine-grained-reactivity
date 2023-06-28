import {createSignal, createEffect, createMemo} from '../lib';


const [firstName, setFirstName] = createSignal("John");
const [lastName, setLastName] = createSignal("Doe");
const [showFullName, setShowFullName] = createSignal(false);

const fullName = () => {
    return `${firstName()} ${lastName()}`;
}

const firstNameInput = document.createElement("input");
firstNameInput.value = firstName();
const lastNameInput = document.createElement("input");
lastNameInput.value = lastName();
const showFullNameInput = document.createElement("input");
showFullNameInput.type = "checkbox";
showFullNameInput.checked = showFullName();


document.body.appendChild(firstNameInput);
document.body.appendChild(lastNameInput);
document.body.appendChild(showFullNameInput);

firstNameInput.addEventListener("input", (e) => {
    setFirstName((e.target as HTMLInputElement).value);
});

lastNameInput.addEventListener("input", (e) => {
    setLastName((e.target as HTMLInputElement).value);
});

showFullNameInput.addEventListener("change", (e) => {
    setShowFullName((e.target as HTMLInputElement).checked);
});

const fullNameDisplay = document.createElement("h2");
document.body.appendChild(fullNameDisplay);


const displayName = createMemo(() => {
    return showFullName() ? fullName() : firstName();
});

createEffect(() => {
    fullNameDisplay.innerText = displayName();
});