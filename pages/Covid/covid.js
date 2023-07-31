const covidYes = document.querySelector("#covid_yes");
const covidNo = document.querySelector("#covid_no");
const covidNow = document.querySelector("#covid_now");
const testYes = document.querySelector("#test_yes");
const testNo = document.querySelector("#test_no");

const testQuestion = document.querySelector(".test-question");
const testBoxes = document.querySelectorAll(".test-box");

covidYes.addEventListener("input", () => {
    testQuestion.classList.add("active");
    testBoxes.forEach((box) => box.classList.add("active"));
});

covidNo.addEventListener("input", () => {
    testQuestion.classList.remove("active");
    testBoxes.forEach((box) => box.classList.remove("active"));
});

covidNow.addEventListener("input", () => {
    testQuestion.classList.remove("active");
    testBoxes.forEach((box) => box.classList.remove("active"));
});