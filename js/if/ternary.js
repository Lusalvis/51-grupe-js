/*
UNARY - vieno operatoriaus
    const x = 5;
    BINJARY - dvieju operatorius

    
*/

const age = 17.9999;
const ageLimit = 18;
const msgOk = 'Valio! Turi pakankamai metu!';
const msgErr = 'Ups! Palauk dar metus kitus!';

let msg = '';

if (age>= ageLimit) {
    msg = msgOk;
} else {
    msg = msgErr;
}

console.log('Message:', msg);
const msg2= age >= ageLimit
 ? 'Valio! Turi pakankamai metu!'
 : 'Ups! Palauk dar metus kitus!'