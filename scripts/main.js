// Wrapped inside container so we don't have to worry about someone trying to execute in console.
(() => {
  const request = new XMLHttpRequest();

  function fetchFact() {
    request.open("GET", "https://api.chucknorris.io/jokes/random");
    request.send();

    request.onload = function () {
      if (request.status !== 200) {
        alert(
          `We were unable to retrieve your random joke about Chuck Norris!`
        );
      } else {
        const obj = JSON.parse(request.response);

        populateFields(obj["url"], obj["value"]);
      }
    };
  }

  function populateFields(link, value) {
    document.getElementById("randomJokeBody").innerText = value;
    document.getElementById("randomJokeLink").href = link;
  }

  document
    .getElementById("newJokeButton")
    .addEventListener("click", function () {
      fetchFact();
    });

  fetchFact();
})();
