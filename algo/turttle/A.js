
// A1 : L rouge
setPos(300, 300);
faceDown();
changeColor(color.red);
setLineWidth(10);

forward(200);
faceRight();
forward(100);


// A2 : 6 miroir
setPos(300, 300);
changeColor(color.yellow);
setLineWidth(10);
faceLeft();

forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

// A2 : +
setPos(200, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();

forward(200);
backward(100);
faceDown();
forward(100);
backward(200);

// A3 : S
setPos(150, 100);
changeColor(color.green);
setLineWidth(10);
faceRight();
forward(200);
arcLeft(100, 180);
forward(100);
arcRight(100, 180);
forward(200);

// A4 : ying/yang
setPos(300, 100);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
arcRight(200, 180);
arcRight(100, 180);
arcLeft(100, 180);
arcLeft(200, 180);

//A5 : Ligne coupée
setPos(100, 300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
forward(100);
up();
forward(100);
down();
forward(200);

//A6 : Ovale coupé
setPos(200, 200);
changeColor(color.red);
setLineWidth(10);
faceDown();
forward(200);
arcLeft(100, 180);
forward(100);
up();
forward(100);
down();
forward(100);
arcLeft(100, 180);

//A7 : Enclume
setPos(200, 400);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
arcLeft(50, 180);
forward(50);
arcRight(50, 180);
forward(300);
arcRight(50, 180);
forward(50);
arcLeft(50, 180);
backward(200);

//A8 : spirale
setPos(300, 400);
changeColor(color.blue);
setLineWidth(10);
faceRight();
arcLeft(50, 180);
changeColor(color.yellow);
arcLeft(100, 180);
changeColor(color.red);
arcLeft(200, 180);

//A9 : Smiley
setPos(50, 200);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();
arcRight(100, 180); 
faceRight();
up();
forward(100);
down();
faceUp();
arcRight(100, 180);
up();
forward(100);
faceLeft();
forward(50);
down();
changeColor(color.blue);
faceDown();
arcRight(200, 180);

//A10 : Double Hameçon
setPos(50, 250);
changeColor(color.yellow);
setLineWidth(10);
faceUp();
arcRight(50, 180);
forward(100);
arcLeft(50, 180);
up();
faceRight();
forward(100);
down();
faceDown();
changeColor(color.red);
arcLeft(50, 180);
forward(100);
arcRight(50, 180);

// B1 : Escalier
setPos(100, 100);
faceRight();
changeColor(color.green);
setLineWidth(10);

for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}

// B2 : Vagues carrées
setPos(100, 300);
changeColor(color.red);
setLineWidth(10);

for(let i = 0 ; i < 4; i++) {
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
}

// B3 : carré
setPos(250, 250);
changeColor(color.blue);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 4; i++) {
    forward(100);
    right(90);
}

// B4 : triangle
setPos(200, 300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 3; i++) {
    forward(100);
    left(120);
}

// B5 : drapeau
setPos(300, 500);
changeColor(color.red);
faceUp();
setLineWidth(10);
forward(200);
changeColor(color.green);

for(let i = 0 ; i < 3; i++) {
    forward(100);
    right(120);
}

// B6 : podium
setPos(50, 350);
changeColor(color.aqua);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 2 ; i++) {
    forward(100);
    left(90);
    forward(100);
    right(90);
}

changeColor(color.yellow);

for(let i = 0 ; i < 3 ; i++) {
    forward(100);
    right(90);
    forward(100);
    left(90);
}

// B7 : maison
setPos(200, 300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 4 ; i++) {
    forward(200);
    right(90);
}

left(60);

for(let i = 0 ; i < 2 ; i++) {
    forward(200);
    right(120);
}

// B8 : etoile
setPos(100, 200);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 8 ; i++) {
    forward(400);
    right(135);
}

// B9 : triple étoile
setPos(50, 100);
changeColor(color.yellow);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 8 ; i++) {
    forward(200);
    right(135);
}

up();
forward(400);
down();
changeColor(color.aqua);

for(let i = 0 ; i < 8 ; i++) {
    forward(100);
    left(135);
}

faceDown();
up();
forward(200);
down();
changeColor(color.fuchsia);

for(let i = 0 ; i < 8 ; i++) {
    forward(300);
    right(135);
}

// B10 : croix
setPos(150, 250);
changeColor(color.red);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    left(90);
    for(let j = 0 ; j < 2 ; j++) {
        forward(100);
        right(90);
    }    
}

// B11 : double U
setPos(400, 350);
changeColor(color.blue);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 3 ; i++) {
    right(90);
    forward(100);
}

up();
forward(100);
changeColor(color.green);
down();

for(let i = 0 ; i < 3 ; i++) {
    forward(100);
    right(90);
}

// B12 : engrenage
setPos(150, 200);
changeColor(color.blue);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 8 ; i++) {
    forward(100);
    left(135);
    for(let j = 0 ; j < 2 ; j++) {
        forward(50);
        right(90);
    }
}

//B13 : dents de scie
setPos(50, 50);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 5 ; i++) {
    forward(100);
    right(135);
    forward(100);
    left(135);
    forward(100);
}

//B14 : carré arrondi
setPos(200, 450);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 4 ; i++) {
    forward(200);
    arcLeft(50, 90);
}

//B15 : haricot
setPos(100, 500);
changeColor(color.green);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 4 ; i++) {
    arcLeft(50, 90);
    arcRight(50, 90);
}

right(90);
arcRight(400, 90);

//B16 : flocon

setPos(150, 400);
changeColor(color.blue);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 6 ; i++) {
    arcLeft(100, 180);
    left(120);
}

//B17 : fleur
setPos(200, 350);
changeColor(color.red);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 8 ; i++) {
    forward(200);
    left(90);
    forward(50);
    left(45);
}

//B18 : sapin
setPos(250, 200);
changeColor(color.red);
setLineWidth(10);
faceRight();

for(let i = 0 ; i < 8 ; i++) {
    forward(100);
    left(135);
}

forward(50);
changeColor(color.green);
faceDown();
left(45);

for(let i = 0 ; i < 3 ; i++) {
    forward(100);
    right(135);
    forward(50);
    left(135);
}

faceLeft();
forward(50);
left(90);

for(let i = 0 ; i < 3 ; i++) {
    forward(25);
    right(90);
}

faceLeft();
forward(50);

for(let i = 0 ; i < 3 ; i++) {
    forward(50);
    right(135);
    forward(100);
    left(135);
}

// Bfun : rosace
setPos(300, 0);
changeColor(color.red);
setLineWidth(10);
faceRight();
arcRight(300, 360);

setLineWidth(5);

for(let i = 0 ; i < 12 ; i++) {
    shiftColor(0.1);
    arcRight(150, 360);
    up();
    arcRight(300, 30);
    down();
}

setLineWidth(2);

for(let i = 0 ; i < 12 ; i++) {
    shiftColor(0.05);
    up();
    arcRight(300, 30);
    down();
    arcRight(100, 360);
}

up();
faceDown();
forward(100);
faceRight();

for(let i = 0 ; i < 12 ; i++) {
    shiftColor(0.05);
    arcRight(100, 360);
    up();
    arcRight(200, 30);
    down();
}   

// Bfun : spirale hypno
for(let i = 0 ; i < 12 ; i++) {
    setPos(300, 0);
    changeColor(color.red);
    faceRight();

    for(let i = 0 ; i < 180 ; i++) {
        shiftColor(0.005);
        arcRight(150, 360);
        arcRight(300, 2);
    }

    setPos(300, 100);

    for(let i = 0 ; i < 180 ; i++) {
        shiftColor(0.005);
        arcRight(100, 360);
        arcRight(200, 2);
    }

    setPos(300, 200);

    for(let i = 0 ; i < 180 ; i++) {
        shiftColor(0.005);
        arcRight(50, 360);
        arcRight(100, 2);
    }
}

// C1 : triangles
setPos(100, 300);
changeColor(color.aqua);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 4 ; i++) {
    // Faire un triangle
    for(let j = 0 ; j < 3 ; j++) {
        forward(100);
        right(120);
    }
    // Se déplacer vers le triangle suivant
    forward(100);
}

// C2 : carrés
setPos(100, 300);
changeColor(color.fuchsia);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 4 ; j++) {
        forward(50);
        left(90);
    }
    
    up();
    forward(100);
    down();
}

// C3 : étoiles colorées
setPos(0, 300);
shiftColor(0.2);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 6 ; i++) {
    for(let j = 0 ; j < 8 ; j++) {
        forward(100);
        left(135);
    }

    up();
    forward(100);
    down();
    shiftColor(0.2);
}

// C4 : 3 maisons
setPos(50, 200);
faceRight();
setLineWidth(10);

for(let i = 0 ; i < 3 ; i++) { 
    changeColor(color.yellow);

    for(let j = 0 ; j < 4 ; j++) {
        forward(100);
        right(90);
    }

    changeColor(color.red);
    
    for(let j = 0 ; j < 3 ; j++) {
        forward(100);
        left(120);
    }

    up();
    forward(200);
    down();
}

// C5 : étoiles groupées
setPos(300, 300);
faceRight();
setLineWidth(10);
shiftColor(0.4);

for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 8 ; j++) {
        forward(200);
        left(120);
    }
    right(90);
    shiftColor(0.25);
}

// C6 : triforce
setPos(300, 350);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

for(let i = 0 ; i < 3 ; i++) {
    forward(100);
    left(120);
    forward(100);
}

left(60);

for(let i = 0 ; i < 3 ; i++) {
    forward(100);
    left(120);
}


// C7 : soleil bleu
setPos(250, 425);
faceRight();
setLineWidth(10);
changeColor(color.blue);

for(let i = 0 ; i < 2 ; i++) {
    for( let j = 0 ; j < 4 ; j++) {
        forward(100);
        right(15);
        forward(100);
        left(120);
        forward(100);
        right(15);
    }
    forward(100);
    left(45);
}

// C8 : fleur rouge
setPos(300, 500);
faceUp();
setLineWidth(10);
changeColor(color.green);
forward(200);
right(105);
changeColor(color.red);

for(let i = 0 ; i < 4 ; i++) {
    forward(100);
    left(120);
    forward(100);
    right(30);
}

left(60);
changeColor(color.yellow);

for(let i = 0 ; i < 4 ; i++){
    forward(100);
    left(90);
}

// C9 : triskel
setPos(400, 350);
faceRight();
setLineWidth(10);
changeColor(color.green);

for(let k = 0 ; k < 3 ; k++) {
    for(let i = 0 ; i < 3 ; i++) {
        for(let j = 0 ; j < 4 ; j++) {
            right(90);
            forward(50);
        }
        forward(50);
        right(120);
    }
    left(120);
    forward(200);   
}

// C10 : fleurs bleu
setPos(350, 50);
faceDown();
setLineWidth(10);
changeColor(color.aqua);

for(let k = 0 ; k < 5 ; k++) {
    for(let i = 0 ; i < 4 ; i++) {
        forward(50);
        for(let j = 0 ; j < 4 ; j++) {
            left(90);
            forward(25);
        }
        right(90);
    }
    forward(100);   
}

// C11 : alvéoles
setPos(300, 200);
faceRight();
setLineWidth(10);
shiftColor(0.33);

for(let k = 0 ; k < 6 ; k++) {
    for(let i = 0 ; i < 6 ; i++) {
        for(let j = 0 ; j < 3 ; j++) {
            forward(100);
            left(120);
        }
        forward(100)
        left(60);
    }
    forward(100); 
    right(60);
    shiftColor(0.18); 
}

// C12 : éclipse

setPos(300, 250);
faceRight();
setLineWidth(10);
shiftColor(0.18);

for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 2 ; j++) {
        arcLeft(50, 90);
        forward(50);
        left(90);
    }
    arcRight(50, 45);
}

shiftColor(0.5);
arcRight(50, 180);
left(120);
arcLeft(100, 300);


// D1 : spirale triangulaire
setPos(300, 250);
changeColor(color.blue);
setLineWidth(10);
faceRight();

let length1 = 50;

for(let i = 0 ; i < 10 ; i++) {
    forward(length1);
    right(120);
    // Ajouter 50 au contenu de la variable length
    length1 = length1 + 50;
    //       ^^^^^^ Lecture de la variable
    //       ^^^^^^^^^^^ Addition
    //^^^^^^^^^^^^^^^^^^ Affectation (j'écris le résultat de l'addition dans la variable)
}

// D2 : spirale carrée
setPos(250, 250);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

let length2 = 100;

for(let i = 0 ; i < 10 ; i++) {
    forward(length2);
    right(900);
    length2 = length2 + 50;
}

// D3 : montagnes rouge
setPos(50, 300);
changeColor(color.red);
setLineWidth(10);
faceRight();

let length3 = 200;

for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 3 ; j++){
        forward(length3);
        left(120);
    }
    forward(length3);
    length3 = length3 - 50;
}

// D4 : montagnes miroir
setPos(100, 300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
left(45);

for(let i = 0 ; i < 2 ; i++) {
    let length4 = 50;
    for(let j = 0 ; j < 3 ; j++){
        forward(length4);
        right(90);
        forward(length4);
        left(90);
        length4 = length4 + 50;
    }
    right(180);
}

// D5 : spirale coupée
setPos(350, 300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

let length5 = 50;
let space5 = 50;

for(let i = 0 ; i < 8 ; i++) {
    arcLeft(length5, 180);
    up();
    forward(space5);
    down();    
    length5 = length5 + 50;
}
    
// D6 : haut parleur
setPos(300, 225);
changeColor(color.green);
setLineWidth(10);
faceDown();

let length6 = 150;
let arc = 75;
let space6 = 50;

forward(length6);
right(120);
length6 = length6 - 50;
forward(length6);
left(30)
length6 = length6 - 50;
for(let i = 0 ; i < 3 ; i++) {
    forward(length6);
    right(90);
}
left(120);
length6 = length6 + 50;
forward(length6);
faceRight();
up();
forward(space6);
down();
changeColor(color.aqua);

for(let i = 0 ; i < 3 ; i++) {
    arcRight(arc, 180);
    up();
    right(90);
    forward( 2*arc + space6);
    down();  
    right(90);
    arc = arc + 50;
}

// D bonus : formes
setPos(250, 500);
setLineWidth(10);
faceRight();
shiftColor(0);

let n = 3;

for(let i = 0 ; i < 10 ; i++) {
    for(let j = 0 ; j < n ; j++) {
        forward(100);
        left(360 / n);
    }
    shiftColor(0.1);
    n++;
}

// D bonus : traits
setPos(300, 300);
setLineWidth(10);
faceUp();
shiftColor(0);

let n2 = 6;

for(let i = 0 ; i < n2 ; i++) {
    forward(100);
    backward(100);
    shiftColor(1 / n2);
    right(360 / n2);
}

// D bonus : fractales
function triangle(a) {
    for(let i = 0 ; i < a ; i++) {
        forward(50);
        left(120);
     }
}

function triforce() {
    let n3 = 4;
    for(let j = 0 ; j < 3 ; j++) {
        triangle(n3);
        right(120);
        n3++;
    }
}

function triforce3() {
    for(let k = 0 ; k < 2 ; k++) {
        triforce();
        right(60);
        forward(50);
        left(60);
    }
    backward(200);
    left(60);
    forward(100);
    right(60);

    triforce();
    right(60);
    forward(150);
    left(60);
}

function triforce9() {
    for(let l = 0 ; l < 2 ; l++) {
        triforce3()
    }
    backward(400);
    left(60);
    forward(200);
    right(60);
    triforce3()
}

function draw(a) {
    if (a == 1) {
        let n3 = 3;
        triangle(n3);
    } else if (a == 2) {
        triforce();
    } else if (a == 3) {
        triforce3();
    } else if (a == 4) {
        triforce9();
    } else {
        alert("Choose a size between 1 and 4");
    }
}


setPos(100, 500);
setLineWidth(10);
faceRight();
changeColor(color.blue);

let size = 4;
draw(size);

// D bonus : cercles

function draw() {
    faceLeft();
    down();
    arcRight(r, 360);
    up();
    forward(200);
    down();
    arcRight(r, 360);
    up();
}

function shift() {
    if( r >= 100 + width/2 ) {
        shiftColor(0.25);
    } else if ( r >= 100 - width/2 ) {
        shiftColor(0)
    } else
        {shiftColor(0.75);
    }
}

function mv() {
    backward(200);
    faceUp();
    forward(width);
    shift();
    r -= width;
}

let nc = 10;

let rb = 165;
let width = 150 / nc;
let r = rb;

setPos(300, 300);
setLineWidth(width);
faceRight();
shiftColor(0);

up();
forward(100);
faceDown();
forward(rb);

while( r >= 25 - ( width / 2 )) {
    draw();
    mv();
}



