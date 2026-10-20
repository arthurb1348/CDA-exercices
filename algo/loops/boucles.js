// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");

let i = 0 ;
while( i < 50 ) {
    console.log("Bonjour");
    i++;
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");

let j = 0;
while ( j < 10 ) {
    if ( j %2 == 0 ) {
        console.log("A");
    } else {
        console.log("B");
    }
    j++;
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
let k = 1;
while ( k <= 18 ) {
    if ( k % 6 == 0 ) {
        console.log("B");
    } else {
        console.log("A");
    }
    k++;
}

// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");

let l = 0;
while ( l < 10 ) {
    console.log(l);
    l++;
}

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");

let m = 0;
while ( m < 10 ) {
    console.log(m + 3);
    m++;
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");

let n = 0;
while ( n < 10 ) {
    if ( n < 4) {
        console.log( n );
    } else if ( n >= 4 &&  n < 8) {
        console.log( n - 4 );
    } else {
        console.log( n - 8 );
    }
    n++;
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");

let o = 0;
while ( o < 10 ) {
    if ( o < 5) {
        console.log( o );
    } else if ( o >= 8 ) {
        console.log( o );
    } else {
        console.log( "A" );
    }
    o++;
}

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");

let p = 0;
while ( p < 10 ) {
    if ( p % 3 == 0 ) {
        console.log( p + 100 );
    } else {
        console.log( p );
    }
    p++;
}


// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");

let q = 0;
while ( q < 10 ) {

    if ( q % 3 == 0 ) {
        console.log( q );
    } else if ( (q + 1) % 3 == 0 ) {
        console.log( q + 200 );
    } else {
        console.log( q + 100 );
    }
    q++;
}

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");

let r = 0;
while( r < 6) {
    let s = 0;
    while( s < 6 ) {
        console.log( r + 1, s +1);
        s++;
    }
    r++;
}

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");

let t = 0;
while( t < 6) {
    let u = 0;
    while( u < 6 ) {
        if( u >= t) {
            console.log( t + 1, u +1);
        }
        u++;
    }
    t++;
}


// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");

let result = 0;
let v = 0;
while( v < 20) {
    let w = 0;
    while( w < 20 ) {
        if( w >= v ) {
            result++;
        }
        w++;
    }
    v++;
}
console.log( result );

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");

let x = 0;
while( x < 9 ) {
    console.log( "1 x", x + 1, "=", 1 * (x + 1));
    x++;
}

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
let y = 0;
while( y < 9 ) {
    console.log( "2 x", y + 1, "=", 2 * (y + 1));
    y++;
}

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");

let z = 0;
while( z < 9 ) {
    let a = 0;
    while( a < 9 ) {
        console.log(`${z + 1} x ${a + 1} = ${(z + 1) * (a + 1)}`);
        a++;
    }
    z++;
}

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");

let b = 0;
let c = 0;

while( b < 100 ) {
    b++;
    c += b ;
}
console.log(c);

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");

let d = 0;
let e = 0;

while( e < 302253 ) {
    d++;
    e += d ;
}
console.log(d);

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");

let f = 1;
let g = 1;

console.log(f);
console.log(g);

while( g < 55 ) {
    let h = f + g;
    console.log(h);
    f = g;
    g = h;
}


// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");

let ii = 1234;
let ij = 0;

while( ii <= 5678) {
    if ( ii % 3 == 0 || ii % 7 == 0 ) {
        ij++;
    }
    ii++;
}
console.log(ij);

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");

console.log("/*");
let ik = 0;

while( ik < 5) {
    ik++;
    console.log("*".repeat(ik));
}

console.log("*/");

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");

console.log("/*");

let il = 0;

while( il < 5) {
    il++;
    console.log(" ".repeat(5 - il) + "*".repeat(il));
}

console.log("*/");

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");

console.log("/*");

let im = 1;
let io = 4;

while( im < 10) {
    console.log(" ".repeat(io) + "*".repeat(im));
    im += 2;
    io--;
}

console.log("*/");

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
console.log("/*");

let ip = 1;
let iq = 4;

while( ip < 12 && ip >=1) {
    if( iq > 0) {
        console.log(" ".repeat(iq) + "*".repeat(ip));
        ip += 2;
        iq--;
    } else {
        console.log(" ".repeat(Math.abs(iq)) + "*".repeat(ip));
        ip -= 2;
        iq--;
    }
}

console.log("*/");
