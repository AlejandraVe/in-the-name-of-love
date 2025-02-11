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
    "Necesito un poema pequeño sobre la amistad, no más largo de 4 líneas. Separa cada línea con <br />. No incluyas un título. Asegúrate de firmar al final como Tu Querido Amigo dentro de un <strong>. Solo escribe el poema.";
  let prompt = "Escribe un poema corto";
  let apiKey = "131b90447daa3e3cfco5aa3tc6e2b482";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let balloonElementOne = document.querySelector("#balloon-1");
let balloonElementTwo = document.querySelector("#balloon-2");
let balloonElementThree = document.querySelector("#balloon-3");
let balloonElementFour = document.querySelector("#balloon-4");
let balloonElementFive = document.querySelector("#balloon-5");
let balloonElementSix = document.querySelector("#balloon-6");

let balloons = [
  balloonElementOne,
  balloonElementTwo,
  balloonElementThree,
  balloonElementFour,
  balloonElementFive,
  balloonElementSix,
];

let balloonsList = document.querySelector("#balloons");
balloonsList.addEventListener("click", (event) => {
  const clickedElement = event.target.closest("dotlottie-player");

  if (clickedElement) {
    const balloonId = clickedElement.id;
    const balloonNumber = balloonId.split("-")[1];

    console.log(balloonId);
    console.log(balloonNumber);

    const balloonToDissappear = document.getElementById(`${balloonId}`);

    balloonToDissappear.classList.add("hidden");
    generatePoem();
  }
});
