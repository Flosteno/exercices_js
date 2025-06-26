console.log("*******script_3******")

const pyramide = () => {
  let nb = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

  for (let i = 1; i <= nb; i++) {
    let spaces = " ".repeat(nb - i);
    let blocs = "#".repeat(i);
    console.log(spaces + blocs);
  }
};
