// 1) Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function array1(a) {
    console.log(a[a.length - 1]);
}
// 2) Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function array2(a) {
    return a[a.length - 1];
}
// 3) Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function arrayMin(a) {
    let min = a[0];
    for(let i=0; i<a.length; i++) {
        if(a[i] < min) {
            min = a[i];
        }
    }
    return min;
}

// 4) Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function arrayMax(a) {
    let max = a[0];
    for(let i=0; i<a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

// 5) Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function arrayCount(a, b) {
    let count = 0;
    for(let i=0; i<a.length; i++) {
        if(a[i] == b) {
            count++;;
        }
    }
    return count;
}

// 6) Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function arrayExist(a, b) {
    let exist = false;
    for(let i=0; i<a.length; i++) {
        if(a[i] == b) {
            exist = true;
        }
    }
    return exist;
}

// 7) Créer un tableau qui contient [1,2,3,...,7777]. (Il n'est pas demandé de faire une fonction)
let array123 = [];
for(let  i=0; i<7777; i++) {
    array123[i] = i+1;
}

// 8) Créer un tableau qui contient [10,20,30,...,77770].
let array102030 = [];
for(let i=0; i<7777; i++) {
    array102030[i] = (i+1)*10;
}

// 9) En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let array51015 = [];
for(let i=0; i<7777; i++) {
    array51015[i] = (i+1)*5;
}

// 10) Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function del50(a) {
    while(a[a.length - 1] < 50) {
        a.pop();
    }
    return a;
}

console.log(del50([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]

// [Bonus] 11) Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function arrayMax2(a) {
    let max = a[0];
    for(let i=0; i<a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }
    let second = 0;
    for(let i=0; i<a.length; i++) {
        if(a[i] < max && a[i] > second) {
            second = a[i];
        }
    }
    return second;
}

// [Bonus] 12) Suite de l'exo 6 : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
function arrayExist2(a, b) {
    let exist = false;
    let i = 0;

    while(a[i] < b + 1) {
        if(a[i] == b) {
            exist = true;
        }
        i++;
    }  
    return exist;
}
