// Les règles du jeu sont simples :
// Deux joueurs s'affrontent, chacun commence la partie avec la moitié des cartes.
// À chaque tour de jeu, les deux joueurs retournent leur première carte, qu'on va comparer.
    // En cas d'ex aequo, les deux joueurs posent une carte face cachée puis retournent la suivante. On recommence la comparaison avec ces deux cartes.
    // Si l'une des cartes est plus forte que l'autre, le joueur qui l'a posée gagnent toutes les cartes (des deux joueurs) qui ont été posées à ce tour de jeu. Ces cartes sont temporairement mises de côté dans la défausse du joueur.
// Si au moment de jouer une carte, le deck d'un joueur est vide, il mélange sa défausse (toutes les cartes précédemment gagnées) pour former un nouveau deck. Si sa défausse est elle aussi vide, ce joueur a perdu.


/*===========================
    * Modélisation en js    *
===========================*/
// Comment pourrait-on représenter un jeu de 52 cartes ?
// Faire une fonction pour créer un nouveau deck de 52 cartes.
function createDeck() {
    let deck = [];
    for(let i = 0; i < 52; i++) {
        deck[i] = i % 13;
    }
    return deck;
}

// Faire une fonction pour mélanger un deck (grâce au mélange de Fisher-Yates par exemple, cf wikipedia). Pour ça, vous aurez sûrement besoin de deux fonctions de javascript : Math.random et Math.floor (à vous de chercher ce qu'elles font).
function mix(a) {
    let deck = a;
    for(let i = 0; i < deck.length; i++) {
      let pos = i;
      let value = deck[pos];
      let pos2 = Math.floor(Math.random() * (pos + 1));
      deck[pos] =  deck[pos2];
      deck[pos2] = value;
    }
    return deck;
}

// Comment représenter un plateau de jeu (deck et défausses de chaque joueur, cartes en train d'être jouées) ?
function gameBoard() {
    let player1Deck =[];
    let player2Deck =[];
    let deck = mix(createDeck());
    for(let i = 0; i < deck.length; i++) {
        if(i % 2 == 0) {
            player1Deck.push(deck[i]);
        } else {
            player2Deck.push(deck[i]);
        }
    }
    let board = [player1Deck, [],player2Deck, [], []];
    return board;
}

// Quelques pistes pour la suite :
//     Comment comparer deux cartes ?
function compare(b) {
    let board = b;
    if(board[4].at(-1) == board[4].at(-2)) {
        board = equality(board)
    } else if(board[4].at(-1) < board[4].at(-2)) {
        while(board[4].length > 0) {
            board[1].push(board[4].pop());
        }
    } else if(board[4].at(-1) > board[4].at(-2)) {
        while(board[4].length > 0) {
            board[3].push(board[4].pop());
        }
    }
    return board;
}

//     Comment gérer les égalités ?
function equality(b) {
    let board = b;
    
    for(let i = 0; i < 2; i++) {
        if(haveWinner(board)) {
            return board;
        }
        if(board[0].length == 0) {
            switchDiscard(board[0], board[1]);
        } 
        if(board[2].length == 0) {
            switchDiscard(board[2], board[3]);
        } 
        board[4].push(board[0].pop());
        board[4].push(board[2].pop());  
    }
    board = compare(board);
    return board;
}

//     Comment mélanger la défausse et l'ajouter au deck ?
function switchDiscard(deck, discard) {
    mix(discard);
    while(discard.length > 0) {
        deck.push(discard.pop());
    }
}

//     Comment tirer une carte (en ajoutant la défausse au deck si besoin) ?
function drawCard(b) {
    let board = b;
    if(board[0].length == 0) {
        switchDiscard(board[0], board[1]);
    } 
    if(board[2].length == 0) {
        switchDiscard(board[2], board[3]);
    } 
    board[4].push(board[0].pop());
    board[4].push(board[2].pop());
    
    return board;
}

//     Comment détecter si un joueur a perdu ? 
function haveWinner(b) {
    let winner = false;
    let board= b;
    if(board[0].length ==  0 && board[1].length ==  0 || board[2].length ==  0 && board[3].length ==  0) {
        winner = true;
    } 
    return winner;
}

function play() {
    let board = gameBoard();
    let winner = false;
    while(!winner) {
        if(haveWinner(board)) {
            winner = true;
            if(board[0].length ==  0 && board[1].length ==  0) {
                console.log("Player 2 win !");
            } 
            if(board[2].length ==  0 && board[3].length ==  0) {
                console.log("Player 1 win !");
            }
        } else {
            board = drawCard(board);
            board = compare(board);
        }
    }
}
play()

