console.log("********script_2*******");

const factorielle = () => {
  let nb = Number(prompt("De quel nombre veux-tu calculer la factorielle ?"));
  let result = 1;

  for (let i = 2; i <= nb; i++) {
    result *= i;
  }

  console.log(`La factorielle de ${nb} est : ${result}`);
};

factorielle();