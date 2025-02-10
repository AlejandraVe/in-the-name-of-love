function displayPoem(response) {
  console.log(response.data.answer);
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

function removeBalloon(event, balloonElement) {
  event.preventDefault();

  balloonElement.classList.add("hidden");

  generatePoem();
}

let balloonElementOne = document.querySelector("#balloon");
let ballonElementTwo = document.querySelector("#balloon-2");
balloonElementOne.addEventListener("click", removeBalloon, balloonElementOne);
ballonElementTwo.addEventListener("click", removeBalloon, ballonElementTwo);
