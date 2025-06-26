const arnToAcids = (arn) => {
  const acids = [
    { name: "Sérine", codes: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"] },
    { name: "Proline", codes: ["CCU", "CCC", "CCA", "CCG"] },
    { name: "Leucine", codes: ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"] },
    { name: "Phénylalanine", codes: ["UUU", "UUC"] },
    { name: "Arginine", codes: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"] },
    { name: "Tyrosine", codes: ["UAU", "UAC"] }
  ];

  const codons = arn.match(/.{1,3}/g);
  const result = codons.map(codon => {
    const acid = acids.find(a => a.codes.includes(codon));
    return acid ? acid.name : "Inconnu" ;
  });
  console.log(result.join("-"))
  return result.join("-");

};


const arn1 = "CCGUCGUUGCGCUACAGC"
const arn2 = "CCUCGCCGGUACUUCUCG"
arnToAcids(arn1);
arnToAcids(arn2);