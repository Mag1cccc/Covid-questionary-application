const vaccineYes = document.querySelector("#vaccine_yes");
const vaccineNo = document.querySelector("#vaccine_no");
const stageQuestion = document.querySelector(".stage-question");
const stageBoxes = document.querySelectorAll(".stage-box");
const waitQuestion = document.querySelector(".wait-question");
const waitBoxes = document.querySelectorAll(".wait-box");

vaccineYes.addEventListener("input", (r) => {
    stageQuestion.classList.add("active");
    stageBoxes.forEach((box) => box.classList.add("active"));
    waitQuestion.classList.remove("active");
    waitBoxes.forEach((box) => box.classList.remove("active"));
});

vaccineNo.addEventListener("input", (r) => {
    waitQuestion.classList.add("active");
    waitBoxes.forEach((box) => box.classList.add("active"));
    stageQuestion.classList.remove("active");
    stageBoxes.forEach((box) => box.classList.remove("active"));
});

const onPreviousPage = () => {
    document.location.href = "../Covid/covid.html";
};

const onNextPage = () => {
    document.location.href = "../Office/office.html";
};