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

function generatePoem(event) {
  event.preventDefault();

  let context =
    "I need a short poem about friendship, not longer than 4 lines. Separate each line with <br />. Do not include a title to the poem. Make sure to sign at the end as Your Dear Friend. Just write the poem";
  let prompt = "Write a short poem";
  let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");

  axios.get(apiUrl).then(displayPoem);
}

let balloonElement = document.querySelector("#balloon");
balloonElement.addEventListener("click", generatePoem);
