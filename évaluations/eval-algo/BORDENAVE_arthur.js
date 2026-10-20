// 1.1
/*
Une variable, est une association clé-valeur, elle sert à garder en mémoire une valeur pour la réutiliser plus loin dans le programme.
On peut la déclarer, lui affecter une valeur, lire cette valeur pour l'afficher ou l'utiliser, et on peut modifier sa valeur.
*/

// 1.2
let a = 12; // Initialise (création + affectation) une variable a en lui affectant la valeur 12.    a = 12
let b = a +1; // Initialise une variable b en lui affectant la valeur de a + 1.                     b = 12 + 1 = 13
a += b; // Modifie la valeur de a en l'incrémentant de la valeur de b.                              a = a + b = 12 + 13 = 25

// 1.3
let pos = 100;
pos += 5;
pos -= 105;

// 2.1
// Une boucle est une action ou série d'actions qui vont se répéter, on l'utilise quand on veut répéter un block de code un certain nombre de fois (for) ou tant qu'une condition est vrai (while).
// syntaxe: for(let variable = valeur; condition; action) {instructions};

// 2.2
for ( let i = 0 ; i < 3 ; i ++) {     // Ne fait rien 3 fois: 3 tours de boucle et le corp de la boucle ne contient aucune instruction (i=0, 0<3, rien, i=1, 1<3, rien, 1=2, 2<3, rien, i=3, 3!<3, fin de boucle)
    // Rien du tout !
}
let total = 0;    // Initialise la variable total et lui affecte la valeur 0.
for ( let i = 10 ; i > 4 ; i = i -2) { // 3 tours de boucle : i=10, 10>4, instruction, i = 8, 8>4, instruction, i=6, 6>4, instruction, i=4, 4!>4, fin de boucle.
    total = total + i;    // total = 0 + 10 = 10, total = 10 + 8 = 18, total = 18 + 6 = 24, fin de boucle.
}

// 2.3
for(let i = 0; i < 6; i++) {
    forward (100) ;
    arcLeft (100 , 210) ;
    left (90) ;
}

for(let i = 0; i < 9; i++) {
    forward (150 - 10 * i) ;
    left (15 + 15 * i) ;
}

// 3.1
/*
un opérateur est un symbole ou un ensemble de symboles demandant de réaliser une opération.
les 3 familles sont: 
opérateurs de calcul : +, -, *, /, %, =,...
opérateurs de comparaison: <, <=, >, >=, ==, !=
opérateurs logiques: &&, ||,...
*/

// 3.2
// 1 + 2*3  = 1 + 6 = 7
// 7 % 3  = 7 - 2 * 3 = 1
// 8 < 2  = false
// true || false = true
// 4 >2 && 4 <8 = true
// 754 % 200 = 754 - 3 * 200 = 154

// 3.3
// 1. 1000 - 876
// 2. 876 * 3 
// 3. 876 % 60
// 4. 876 > 100
// 5. 1234 - 364 == 876
// 6. 876 >= 500 && 876 <= 600 

// 4.1
/* 
Une fonction est un block de code autonome, qui réalise une série d'opérations précise, possiblement à partir de parametres (données d'entrée) et qui retourne un résultat.
Elle sert à réaliser cette série d'opération à différents endroits de notre programme sans réécrire le code à chaque fois.

création:
function fonction() {instructions}                           sans parametres
function fonction(parametre1, parametre2) {instructions}     avec parametres

appel ("utilisation"):
fonction();                           sans parametres
fonction(parametre1, parametre2);     avec parametres

utiliser devrait etre remplacer par appeler. 
*/

// 4.2
function intro () {
  console . log ("C’est le d´e but !");  // Créer une fonction intro qui affiche dans la console "C’est le d´e but !"
}

function glue (n1 , n2 , n3) {
  return 100* n1 + 10* n2 + n3;     // créer un fonction glue qui prend 3 parametres (n1, n2, n3) et qui retourne n1*100 + n2*10 + n3
}

console .log ( glue (1 , 2, 3) );     // affiche dans la console le retour de glue(1,2,3) = 100*1 + 2*10 + 3 = 123 
console .log( glue ( glue (1 , 2, 3) , 4, 5) ); // affiche dans la console le retour de glue(glue(1,2,3),4,5) = (100*1 + 2*10 + 3)*100 + 4*10 + 5 = 12300 + 40 + 5 = 12345
intro () ;    // affiche dans la console "C’est le d´e but !"

// 4.3
function init(a, b) {
    setPos (a , b) ;
    faceDown () ;
    setLineWidth (10) ;
    changeColor ( color . red );
}

// 5.1
// if, else : si la condition suivant le if () est vraie le programme execute les instructions associés {}, sinon il execute les instructions associés à else.

// 5.2
let force = 145;     // Initialise la variable force en lui affectant la valeur 145

if( force > 9000) {      
    console . log ("It ’s over 9000! ");    // false: 145 !> 9000, si la valeur de la variable force est supérieure à 9000 affiche "It ’s over 9000! " dans la console. 
} else if( force > 1000) {
    console . log (" Soupa ¸c ayadjinegotto ");   // false: 145 !> 1000, si la valeur de la variable force est supérieure à 1000 affiche " Soupa ¸c ayadjinegotto " dans la console. 
} else if( force > 100) {
    console . log (" Pikachu !") ;    // true: 145 > 100, affiche " Pikachu !" dans la console. 
}                                              
if( force > 0) {
    console .log ("C’est mieux que rien ."); // true: 145 > 0, affiche "C’est mieux que rien ." dans la console. Pour n'afficher qu'un des 2 messages, il aurait fallu remplacer le dernier if par else if.
} else {
    console .log (" Trois fois rien .")  // false: 145 !<= 0, si la valeur de la variable force est inférieure ou égale à 0 affiche " Trois fois rien ." dans la console.
}

// 5.3
if(hasA) {
    if(hasU) {
        console.log("Julia");
    } else {
        console.log("Alice");
    }
} else {
    console.log("Pierre")
}

// 6.1
// Un tableau est une variable permettant de stocker plusieurs valeurs de façon ordonnées
// let array = []; ou let array = [valeur1, valeur2,....]
// On peut le manipuler comme une variable, en précisant entre [] la position de la valeur qu'on cherche à manipuler. par exemple pour incrémenter de 3 la 2eme valeur du tableau array[1] += 3;

// 6.2
let unTableau = [7 ,5 ,3 ,1];     // créer un tableau contenant les valeurs 7, 5, 3, 1
unTableau [0] = unTableau [1];    // affecte à la premiere valeur du tableau [0] la valeur de la seconde valeur [1] : unTableau = [5 ,5 ,3 ,1]
unTableau [1]++;                   // incrémente de 1 la seconde valeur du tableau : unTableau = [5 ,6 ,3 ,1];
unTableau . push ( unTableau . pop () *2) ;  // supprime la derniere valeur du tableau et la remplace par le double de sa valeur: unTableau = [5, 6, 3, 2]

// 6.3 
// Premiere partie
let notesTrimestre = [15 , 12 , 16];
console .log (" Moyenne de ce trimestre :");
console .log ((notesTrimestre[0] + notesTrimestre[1] + notesTrimestre[3]) /3) ;

// Deuxieme partie
// Pareil avec toutes les notes !
// J’espere qu ’il y a un moyen plus simple que de tout ´ecrire `a la main ...
let notes = [13 , 13 , 18 , 20 , 12 , 13 , 13 , 17 , 16 , 17 , 15 , 17 , 12 , 19 , 16 , 15 , 12 , 16];
let somme = 0;
for(let i = 0; i < notes.length; i++) {
    somme += notes[i];
}

console .log("La somme des notes :");
console .log( somme );
console .log("La moyenne :") ;
console .log( somme /  notes.length) ;



