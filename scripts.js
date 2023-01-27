var generateClick = document.getElementById("buttonID");
generateClick.addEventListener("click", fetchMyApi);

//Using if and catch error
async function fetchMyApi() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Ooops, looks like a problem occured. Status Code:",
          response.status
        );
        return;
      }
      response.json().then(function (result) {
        console.log(result);
        document.getElementById(
          "title"
        ).innerHTML = `Advice #${result.slip.id}`;
        document.getElementById(
          "textAdvice"
        ).innerHTML = `"${result.slip.advice}"`;
      });
    })
    .catch(function (err) {
      console.log("Fetch Error : -S", err);
    });
}

fetchMyApi();
