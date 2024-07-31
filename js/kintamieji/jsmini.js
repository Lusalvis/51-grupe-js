//1. Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis
const num1 = 10;
console.log(num1);

const num2 = 20;
console.log(num2);

const num3 = 30;
console.log(num3);
console.log('')
console.log('')

//2.Sukurti 3 kintamuosius su teksto tipo reiksmemis
const text1 = "Labas";
console.log(text1);

const text2 = "JavaScript";
console.log(text2);

const text3 = "Pasauli";
console.log(text3);
console.log('')
console.log('')

// 3. Sukurti 3 saraso tipo kintamuosius su penkiomis skaiciu tipo reiksmemis
const numb1 = [1, 2, 3 ,4 ,5];
console.log(numb1);

const numb2 = [10, 20, 30, 40, 50];
console.log(numb2);

const numb3 = [100, 200, 300, 400, 500];
console.log(numb3);
console.log('')
console.log('')

// 4. Sukurti 3 saraso tipo kintamuosius su penkiomis teksto tipo reiksmemis
let textb1 = ["vienas", "du", "trys", "keturi", "penki"];
console.log(textb1);

const textb2 = ["a", "b", "c", "d", "e"];
console.log(textb2);

const textb3 = ["obuolys", "kebabas", "burgeris", "arbuzas", "pica"];
console.log(textb3);

//Kintamųjų palyginimas

//Skaiciu palyginimas
if (num1 > num2) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}
if (num1 < num2) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (num1 === num2) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta.");
}

if (num1 !== num2) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta.");
}

if (num1 >= num2) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (num1 <= num2) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

// Teksto kintamuju ilgiai
console.log("Teksto 1 ilgis:", text1.length);
console.log("Teksto 2 ilgis:", text2.length);

// Teksto ilgiu palyginimas
if (text1.length > text2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta.");
}

if (text1.length < text2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (text1.length === text2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (text1.length !== text2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (text1.length >= text2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (text1.length <= text2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

// Saraso tipo kintamieji
let list1 = [1, 2, 3, 4, 5];
let list2 = [10, 20, 30];

// Sarasu ilgiai
console.log("Sąrašo 1 ilgis:", list1.length);
console.log("Sąrašo 2 ilgis:", list2.length);

// Sarašu ilgiu palyginimas
if (list1.length > list2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (list1.length < list2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (list1.length === list2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (list1.length !== list2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}

if (list1.length >= list2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta.");
}

if (list1.length <= list2.length) {
    console.log("bullseye");
} else {
    console.log("Bandykite dar karta");
}
