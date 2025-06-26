console.log("hello world !")

//On déclare d'abord un array
  let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}