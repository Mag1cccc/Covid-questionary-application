const covidYes = document.querySelector("#covid_yes");
const covidNo = document.querySelector("#covid_no");
const covidNow = document.querySelector("#covid_now");
const testYes = document.querySelector("#test_yes");
const testNo = document.querySelector("#test_no");

const testAmountTitle = document.querySelector(".test-amount-title");
const testDate = document.querySelector("#test_date");
const amount = document.querySelector("#amount");

const covidDateTitle = document.querySelector(".covid-date");
const covidDate = document.querySelector("#covid-date");

const testQuestion = document.querySelector(".test-question");
const testBoxes = document.querySelectorAll(".test-box");

covidYes.addEventListener("input", () => {
    testQuestion.classList.add("active");
    testBoxes.forEach((box) => box.classList.add("active"));
});

covidNo.addEventListener("input", () => {
    testQuestion.classList.remove("active");
    testBoxes.forEach((box) => box.classList.remove("active"));
    testAmountTitle.classList.remove("active");
    testDate.classList.remove("active");
    amount.classList.remove("active");
    covidDateTitle.classList.remove("active");
    covidDate.classList.remove("active");
});

covidNow.addEventListener("input", () => {
    testQuestion.classList.remove("active");
    testBoxes.forEach((box) => box.classList.remove("active"));
    testAmountTitle.classList.remove("active");
    testDate.classList.remove("active");
    amount.classList.remove("active");
    covidDateTitle.classList.remove("active");
    covidDate.classList.remove("active");
});

testYes.addEventListener("input", () => {
    testAmountTitle.classList.add("active");
    testDate.classList.add("active");
    amount.classList.add("active");
    covidDateTitle.classList.remove("active");
    covidDate.classList.remove("active");
});

testNo.addEventListener("input", () => {
    covidDateTitle.classList.add("active");
    covidDate.classList.add("active");
    testAmountTitle.classList.remove("active");
    testDate.classList.remove("active");
    amount.classList.remove("active");
});

const onPreviousPage = () => {
    document.location.href = "../Personal/personal.html";
};

const onNextPage = () => {
    document.location.href = "../Vaccine/vaccine.html";
}