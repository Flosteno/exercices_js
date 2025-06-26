const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

const getSeventies = () => {

  console.log("---------------------------------------------------------");
  console.log("Liste des entrepreneurs qui sont nés dans les années 70\n")
  let seventies = [];

  entrepreneurs.forEach(entrepreneur => {
    if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979) {
      seventies.push(entrepreneur);
      console.log(entrepreneur);
    }
  });
  return seventies;
}


const getNames = () => {

  console.log("---------------------------------------------------------");
  console.log("Une array qui contient le prénom et le nom des entrepreneurs\n");
  let names = [];

  entrepreneurs.forEach(entrepreneur => {
    names.push(entrepreneur.first+" "+ entrepreneur.last);
  });
  console.log(names);
}

const getCurrentAge = () => {
  
  console.log("---------------------------------------------------------");
  console.log("Quel âge aurait chaque inventeur aujourd'hui ?\n")
  
  entrepreneurs.forEach(entrepreneur => {
    let current_year = new Date().getFullYear();
    let age = current_year - entrepreneur.year;
    let name = entrepreneur.first+" "+entrepreneur.last;
    console.log(`${name} aurait ${age} ans aujourd'hui`);
  });
}

const sortEnt = () => {

  console.log("---------------------------------------------------------");
  console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille\n")

  entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
  console.log(entrepreneurs);
}

getSeventies();
getNames();
getCurrentAge();
sortEnt();
