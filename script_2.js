console.log("********script_2*******");

const factorielle = () => {
  let nb = prompt("De quel nombre veux-tu calculer la factorielle ?")
  let result = nb;

  for(let i = nb; i > 1; i--){
    result *= i;
  }
  console.log(`La factorielle de ${nb} est : ${result}`);
};