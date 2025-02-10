function displayPoem(response) {
  let poemElement = document.querySelector("#poem-element");

  poemElement.classList.remove("hidden");

  new Typewriter("#poem-element", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
  //poemElement.innerHTML = response.data.answer;
}

function generatePoem() {
  let context =
    "I need a short poem about friendship, not longer than 4 lines. Separate each line with <br />. Do not include a title to the poem. Make sure to sign at the end as Your Dear Friend inside a <strong> element. Just write the poem";
  let prompt = "Write a short poem";
  let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

function removeBalloonOne(event) {
  event.preventDefault();
  balloonElementOne.classList.add("hidden");
  generatePoem();
}

function removeBalloonTwo(event) {
  event.preventDefault();
  balloonElementTwo.classList.add("hidden");
  generatePoem();
}

function removeBalloonThree(event) {
  event.preventDefault();
  balloonElementThree.classList.add("hidden");
  generatePoem();
}

function removeBalloonFour(event) {
  event.preventDefault();
  balloonElementFour.classList.add("hidden");
  generatePoem();
}

function removeBalloonFive(event) {
  event.preventDefault();
  balloonElementFive.classList.add("hidden");
  generatePoem();
}

function removeBalloonSix(event) {
  event.preventDefault();
  balloonElementSix.classList.add("hidden");
  generatePoem();
}

let balloonElementOne = document.querySelector("#balloon-1");
let balloonElementTwo = document.querySelector("#balloon-2");
let balloonElementThree = document.querySelector("#balloon-3");
let balloonElementFour = document.querySelector("#balloon-4");
let balloonElementFive = document.querySelector("#balloon-5");
let balloonElementSix = document.querySelector("#balloon-6");

balloonElementOne.addEventListener("click", removeBalloonOne);
balloonElementTwo.addEventListener("click", removeBalloonTwo);
balloonElementThree.addEventListener("click", removeBalloonThree);
balloonElementFour.addEventListener("click", removeBalloonFour);
balloonElementFive.addEventListener("click", removeBalloonFive);
balloonElementSix.addEventListener("click", removeBalloonSix);

/*balloons.forEach((element) => {
  element.addEventListener("click", removeBalloon);
});*/
