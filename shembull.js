const cmimiLibrit = 12.50;
const sasiaLibrit=3;
const cmimiFletores=1.80;
const sasiaFletores=4;

let totaliLibrit = cmimiLibrit * sasiaLibrit;
let totaliFletores = cmimiFletores * sasiaFletores;

let totali = totaliFletores + totaliLibrit + 2.5;



console.log("Fatura: ");
console.log("Totali i cmimit per libra: " + totaliLibrit);
console.log("Totali i cmimit per fletore: " + totaliFletores);
console.log("Totali: " + totali);