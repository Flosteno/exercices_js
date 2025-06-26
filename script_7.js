function acneBot() {
  let answer = "";

  while (answer !== "quit") {
    answer = prompt("Écris ce que tu veux dire au bot | Tape 'quit' pour quitter :");

    if (answer === null || answer === "quit") {
      console.log("Allez oust !")
      break;
    } else if (answer.endsWith("?")) {
      console.log("Ouais ouais...");
    } else if (answer === answer.toUpperCase() && answer.trim() !== "") {
      console.log("Pwa, calme-toi...");
    } else if (answer.trim() === "") {
      console.log("T'es en PLS ?");
    } else {
      console.log("Balek.");
    }
  }
}


acneBot();