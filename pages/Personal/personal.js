import { isLocal, updateUser, user } from "../../script.js";

const nameError = document.querySelector("#name-error");
const surnameError = document.querySelector("#surname-error");
const emailError = document.querySelector("#email-error");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");

let trySubmit = false;

if(isLocal){
    nameInput.value = user.first_name;
    surnameInput.value = user.last_name;
    emailInput.value = user.email;
}

const nameCheckFunc = () => {
    const value = nameInput.value.trim();
    if(value === ""){
        nameError.textContent = "სახელის ველი არ უნდა იყოს ცარიელი";
        return false;
    }
    if(!(value.length > 1)){
        nameError.textContent = "სახელის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან";
        return false;
    }
    nameError.textContent = "";
    return true;
};

const surnameCheckFunc = () => {
    const value = surnameInput.value.trim(); 
    if(value === ""){
        surnameError.textContent = "გვარის ველი არ უნდა იყოს ცარიელი";
        return false;
    }
    if(!(value.length > 1)){
        surnameError.textContent = "გვარის ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან";
        return false;
    }
    surnameError.textContent = "";
    return true;
};

const emailCheckFunc = () => {
    const value = emailInput.value.trim();
    if(value === ""){
        emailError.textContent = "ელ.ფოსტის ველი არ უნდა იყოს ცარიელი";
        return false;
    }
    if(!value.includes("@") || !value.includes(".")){
        emailError.textContent = "უნდა აკმაყოფილებდეს ელ.ფოსტის ფორმატს";
        return false;
    }
    if(!value.endsWith("@redberry.ge")){
        emailError.textContent = "უნდა მთავრდებოდეს @redberry.ge სუფიქსით";
        return false;
    }
    emailError.textContent = "";
    return true;
};

nameInput.addEventListener("input", () => {
    updateUser("first_name", nameInput.value);
    if(trySubmit){
        nameCheckFunc();
    }
});

surnameInput.addEventListener("input", () => {
    updateUser("last_name", surnameInput.value);
    if(trySubmit){
        surnameCheckFunc();
    }
});

emailInput.addEventListener("input", () => {
    updateUser("email", emailInput.value);
    if(trySubmit){
        emailCheckFunc();
    }
});

window.onNextPage = () => {
    if(!trySubmit){
        trySubmit = true;
    }
    const nameStatus = nameCheckFunc();
    const surnameStatus = surnameCheckFunc();
    const emailStatus = emailCheckFunc();
    if(nameStatus && surnameStatus && emailStatus){
        document.location.href = "../Covid/covid.html";
    }
};