// Le but de cet exercice est de réaliser un interpréteur du langage Brainfuck (https://fr.wikipedia.org/wiki/Brainfuck)
// Ce langage se base sur quatre choses :
// - le code à exécuter (une chaîne de caractères)
// - une mémoire de 30 000 cases
// - un pointeur qui indique quelle case de la mémoire le programme est en train de regarder.
// - un deuxième pointeur qui se déplace dans le code.

// 1) Créer un tableau `memory` de 30 000 cases, avec des 0 dedans
let memory = []
for(let i = 0; i < 30000; i++) {
    memory[i] = 0;
}
// 2) Créer une variable `pointer` qui contient la valeur 0.
let pointer = 0;
// 3) Créer une variable `output` qui contiendra le message éventuellement écrit par le code brainfuck.
// Initialement, cette variable contient le mot vide.
let output = "";
// 4) Créer une fonction `movePointer` qui reçoit en entrée un nombre et qui décale le pointeur de ce nombre de cases.
// Par exemple, si le pointeur montre la case 14, alors après l'appel `movePointer(1)`, il montrera la case 15.
// Attention : si le pointeur sort du tableau, on le place de l'autre côté !
// Par exemple, s'il montre initialement la case 0, après l'appel `movePointer(-1)`, il montrera la case 29999 (la dernière du tableau).
// Puis après l'appel `movePointer(1)`, il montrera à nouveau la case 0.
function movePointer(n) {
    pointer = (pointer+n)%30000;
    pointer = (pointer+30000)%30000;
}
// 5) Créer une fonction `changeValue` qui reçoit un nombre en entrée et qui incrémente la case mémoire désignée par le pointeur de cette valeur.
// Attention : les valeurs du tableau doivent rester entre 0 et 255. Donc si une case contient 0 et qu'on lui retranche 1, elle passera à 255.
function changeValue(n) {
    memory[pointer] = (memory[pointer] + n) % 256;
    memory[pointer] = (memory[pointer] + 256) % 256;
}
// 6) Créer une fonction `print` qui ajoute à `output` le contenu de la case mémoire désignée par le pointeur.
// Attention : il faut d'abord convertir la valeur du tableau en caractère, grâce à la fonction `String.fromCharCode`.
function print() {
    output += String.fromCharCode(memory[pointer]);
}
// 7) Créer une fonction `read` qui demande un caractère à l'utilisateur, et qui insère la valeur correspondanAte dans la case mémoire désignée par le pointeur.
// Par exemple, si l'utilisateur donne le caractère `"A"`, la case devra contenir 65. Pour connaître la valeur du caractère dans une variable `c`, on peut utiliser `c.charCodeAt(0)`.
// Pour demander un caractère à l'utilisateur, on utilisera la fonction `prompt`, qui affiche une boîte de dialogue popup et retourne ce que l'utilisateur a donné.
function read() {
    c = prompt("Donnez un caractère à inserer");
    memory[pointer] = c.charCodeAt(0);
}
// 8) Créer une fonction `searchClosing` qui reçoit un mot `s` et un nombre `pos` en entrée et qui retourne la position du `]` correspondant au `[` qui est à la position `pos`.
// Attention : on suppose qu'il y a bien un "[" à la position `pos`. Le but principal n'est pas de le vérifier (mais on peut le faire si on le souhaite).
// Attention 2 : il ne suffit pas de chercher le premier "]" dans le mot !
// Exemples : `searchClosing("hello[test]bye", 5)` devra retourner 10. Le "]" correspondant au "[" en position 5 est à la position 10.
// `searchClosing("hello[test[123]plusdifficile]", 5)` devra retourner 28.
function searchClosing(s, pos) {
    let openings = 0;
    for(let i = pos + 1; i < s.length; i++) {
        if(s[i] == "[") {
            openings++;
        } else if(s[i] == "]") {
            if(openings == 0) {
                return i;
            } else {
                openings--;
            }
        }
    }
}

console.log(searchClosing("hello[test]bye", 5));
console.log(searchClosing("hello[test[123]plusdifficile]", 5));

// 9) Même principe mais dans l'autre sens !
// Exemples : `searchOpening("hello[test]bye", 10)` devra retourner 5.
// `searchOpening("hello[test[123]plusdifficile]", 28)` devra retourner 5.
function searchOpening(s, pos) {
    let closings = 0;
    for(let i = pos - 1; i > -1; i--) {
        if(s[i] == "]") {
            closings++;
        } else if(s[i] == "[") {
            if(closings == 0) {
                return i;
            } else {
                closings--;
            }
        }
    }
}

console.log(searchOpening("hello[test]bye", 10));
console.log(searchOpening("hello[test[123]plusdifficile]", 28));

// 10) Finalement, écrire une fonction `execute` qui reçoit un code brainfuck en entrée (une chaîne de caractères) et qui retourne la sortie de ce programme.
// Pour ça, il faut utiliser un deuxième pointeur qui nous montre à quelle position on en est dans le code.
// Ensuite, il faut répéter jusqu'à la fin du code :
// - Faire l'instruction désignée par le caractère montré par le pointeur.
// - Faire avancer le pointeur d'un caractère.
function execute(s) {
    let pointer2 = 0;
    while(pointer2 < s.length) {
        if(s[pointer2] ==">") { 
            movePointer(1);
        } else if(s[pointer2] =="<") { 
            movePointer(-1);
        } else if(s[pointer2] =="+") { 
            changeValue(1);
        } else if(s[pointer2] =="-") { 
            changeValue(-1);
        } else if(s[pointer2] ==".") { 
            print();
        } else if(s[pointer2] ==",") { 
            read();
        } else if(s[pointer2] =="[") { 
            if(memory[pointer] == 0) {
                pointer2 = searchClosing(s, pointer2);
            }
        } else if(s[pointer2] =="]") { 
            if(memory[pointer] != 0) {
                pointer2 = searchOpening(s, pointer2);
            }
        }
        pointer2++;
    }
    return output;
}

// Hello World! de la page wikipedia
console.log(execute("++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>."));

// Pour aller plus loin :
// - fonction reset pour pouvoir exécuter plusieurs programmes à la suite, sans garder de traces des exécutions précédentes.
// - mode debug dans l'exécution pour afficher ce qu'il se passe / avancer instruction par instruction.
// 	- ajout d'un nouveau caractère au langage (par exemple "m"), pour afficher les 20 premières cases de la mémoire
// - ajout de nouveaux caractères pour lire et écrire les valeurs numériques, pas avec la table ascii.
// - ...
