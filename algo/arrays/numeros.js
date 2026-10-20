let ex2 = [1,5,11,-4,6,8,9,-7,7];
// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
function positionBiggest(a) {
    let max = a[0];
    for(let i=0; i<a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }
    return a.indexOf(max);
}

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sum(a) {
    let sum = 0;
    for(let i=0; i<a.length; i++) {
        sum += a[i];
    }
    return sum;
}

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
function sum2(a) {
    let sum = 0;
    for(let i=0; i<a.length; i++) {
        if(a[i] > 0) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(sum2(ex2));

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
function sum3(a) {
    let sum = 0;
    for(let i=0; i<a.length; i++) {
        if(a[i] < 0) {
            sum += a[i];
        }
    }
    return sum;
}
