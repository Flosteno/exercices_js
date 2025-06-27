const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("********script_5********\n");

console.log("------------------------------")
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?\n")
const allRented = books.every(book => book.rented > 0);
console.log("Tous les livres ont-ils été empruntés au moins une fois ? ", allRented ? "Oui" : "Non");

console.log("------------------------------")
console.log("Quel est livre le plus emprunté ?\n")
const mostRented = books.reduce((max, book) => book.rented > max.rented ? book : max);
console.log("Livre le plus emprunté :", mostRented.title, "avec", mostRented.rented, "emprunts");

console.log("------------------------------")
console.log("Quel est le livre le moins emprunté ?\n")
const leastRented = books.reduce((min, book) => book.rented < min.rented ? book : min);
console.log("Livre le moins emprunté :", leastRented.title, "avec", leastRented.rented, "emprunts");

console.log("------------------------------")
console.log("Trouve le livre avec l'ID: 873495\n")
const book873495 = books.find(book => book.id === 873495);
console.log("Livre avec l'ID 873495 :", book873495.title);


console.log("------------------------------")
console.log("Supprime le livre avec l'ID: 133712\n")
const booksWithout133712 = books.filter(book => book.id !== 133712);
console.log("Liste des livres sans celui avec l’ID 133712 :");
booksWithout133712.forEach(book => console.log("-", book.title));


console.log("------------------------------")
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).\n")
const sortedBooks = [...booksWithout133712].sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :");
sortedBooks.forEach(book => console.log("-", book.title));
