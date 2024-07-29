
// Produktu sarasas
const prekes = [
    {
        pavadinimas: 'Obuolys',
        kaina: 0.5,
        kiekis: 10,
    },
    {
        pavadinimas: 'Bananai',
        kaina: 0.3,
        kiekis: 7,
    },
    {
        pavadinimas: 'Duona',
        kaina: 1.2,
        kiekis: 2,
    },
    {
        pavadinimas: 'Pienas',
        kaina: 0.9,
        kiekis: 3,
    }
];

let totalKaina = (prekes[0].kiekis * prekes[0].kaina) + (prekes[1].kiekis * prekes[1].kaina) + (prekes[2].kiekis * prekes[2].kaina) + (prekes[3].kiekis * prekes[3].kaina);

let prekiuSuma = prekes.length;

console.log('Sablonas A');
console.log('')
console.log('Prekių krepšelyje yra ' + prekiuSuma + ' prekės.');
console.log('')

console.log('Sablonas B');
console.log('');
console.log('Prekiu krepselis');
console.log('------------');
console.log('1) ' + prekes[0].pavadinimas + ' kainuoja ' + prekes[0].kaina + '€ / vnt. kiekis - ' + prekes[0].kiekis + 'vnt.');
console.log('2) ' + prekes[1].pavadinimas + ' kainuoja ' + prekes[1].kaina + '€ / KG. kiekis - ' + prekes[1].kiekis + 'kg');
console.log('3) ' + prekes[2].pavadinimas + ' kainuoja ' + prekes[2].kaina + '€ / vnt. kiekis - ' + prekes[2].kiekis + 'vnt.');
console.log('4) ' + prekes[3].pavadinimas + ' kainuoja ' + prekes[3].kaina + '€ / L. kiekis - ' + prekes[3].kiekis + 'L');
console.log('');
console.log('');
console.log('Sablonas C');
console.log('Krepselio suma yra ' + totalKaina.toFixed(2) + '€')