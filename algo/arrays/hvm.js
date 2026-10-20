/* Détails techniques pour simuler notre processeur */
/* Chaque fonction simule un comportement de case du processeur.*/
let memory = [];

function reset() {
	memory = [];
}

function p(n) {
	memory.push(n);
}

function duplicate() {
	p(memory[memory.length-1]);
}

function r() {
	return memory.pop();
}

function add() {
	let a = r();
	let b = r();
	p(a+b);
}

function sub() {
	p(r() - r());
}

function twice() {
	duplicate();
	add();
}	

function print() {
	console.log("Contenu actuel :");
	for(let i = 0 ; i < memory.length ; i++) {
		console.log(i,'->',memory[i]);
	}
}
/* Fin de l'implémentation du processeur.*/

/* On commence avec 4 exercices de compréhension de cette machine. Le but est de prédire son comportement.*/
// Niveau 1 : que produit se code ?
console.log("Niveau 1");
reset();  // Remet memory à 0
p(2);	  // Attribut la valeur 2 à memory[0]			
p(8);	  // Attribut la valeur 8 à  memory[1]
print();  // affiche le contenu de memory dans la console sous la forme i -> memory[i]

// 0 -> 2
// 1 -> 8

// Niveau 2 : que produit ce code ?
console.log("Niveau 2");
reset();
p(2);
twice();  // Double la derniere valeur ajouté.
print();

// 0 -> 4

// Niveau 3 : que produit ce code ?
console.log("Niveau 3");
reset();
p(53)									// 0 -> 53
for(let i = 0 ; i < 4; i++) {
	p(53);								
	add();
}										// 0 -> 265

p(1);									// 1 -> 1
for(let i = 0 ; i < 9 ; i++) {
	twice();
}										// 1 -> 512

add();									// 0 -> 777
print();

// Niveau 4 : que produit ce code ?
console.log("Niveau 4");
memory = [];
let level2 = 5;
for(let i = 0 ; i<level2 ; i++) {
	p(i+1);
}										// 0 -> 1 .... 4 -> 5
print();
while(memory.length>1) {				
	add();
}										// 0 -> 15
print();

/* Maintenant, on veut écrire nous-même le code ! */
/* Interdiction de manipuler directement la mémoire, les variables des boucles, ou de créer de nouvelles boucles.
   Il faut seulement utiliser les fonctions qui simulent le processeur à pile.
*/
// Niveau 5 : compléter seulement la partie // TODO pour obtenir l'affichage souhaité.
console.log("Niveau 5");
let level5 = 5;
reset();

p(0);
for(let i = 0 ; i < level5-1 ; i++) {
	p(memory[i] + memory[i] + 1);
}

print(); // Doit afficher :
// 0 -> 0
// 1 -> 1
// 2 -> 3
// 3 -> 7
// 4 -> 15

// Niveau 6 : obtenir la valeur souhaitée dans la mémoire en complétant le // TODO.
// Contrainte : on remplace la fonction p par celle-ci :
function p1() {
    p(1);
}

reset();

p1();
p1();
p1();
p1();
p1();
p1();
p1();
p1();
p1();
p1();
add();
add();
add();
add();
add();
add();
add();
add();
add();


print(); // Doit afficher 0 -> 10

// Bonus : on peut le faire avec seulement 6 appels de fonction ?
reset();

p1();
twice();
twice();
p1();
add();
twice();


print();
// Et pour obtenir 0 -> 123 ? En moins de 20 appels ? En moins de 15 appels 
reset();

p1();
duplicate();
twice();
twice();
add();
twice();
twice();
duplicate();
twice();
add();
p1();
add();
twice();
p1();
add();

print();
