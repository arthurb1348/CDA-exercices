// Retourne une ligne de taille w, avec le caractère c
// Exemple : "*******"
function fullLine(w, c) {
	let s = "";
	s += c.repeat(w);
	return s;
}

// Retourne un rectangle avec le caractère c, de w colonnes et h lignes
// Exemple : 
// "*****\n*****\n*****\n"
//
// Puisque le caractère \n est un retour à la ligne, ce mot correspond en réalité au rectangle :
// "*****
//  *****
//  *****"
function fullRectangle(w, h, c) {
	let s="";
	let ii = 0;
	while( ii < h ) {
		s += fullLine(w, c) + "\n";
		ii++;
	}
	return s;
}

// Retourne une ligne de taille w avec c1 au bord, c2 au milieu
// Exemple : "*-----*"
function emptyLine(w, c1, c2) {
	let s = "";
	s += c1 + c2.repeat(w - 2) + c1;
	return s;
}

// Retourne un rectangle avec c1 aux bords et c2 au milieu, de w colonnes et h lignes
// Exemple : "*****\n*---*\n*****\n"
// Dessin correspondant :
// *****
// *---*
// *****
function emptyRectangle(w, h, c1, c2) {
	let s = "";
	let ii = 0;
	while( ii < h ) {
		if(ii == 0 || ii == h - 1) {
			s += fullLine(w, c1) + "\n";
		} else {
			s += emptyLine(w, c1, c2) + "\n";
		}
		ii++;
	}
	return s;
}

// Retourne un triangle rectangle avec le caractère c, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n***\n****\n"
// Dessin correspondant : 
// *
// **
// ***
// ****
function fullTriangle1(h, c) {
	let s = "";
	let ik = 0;

	while( ik < h) {
		ik++;
		s += c.repeat(ik) + "\n";
	}
	return s;
}

// Retourne un triangle rectangle avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-***\n****\n"
// Dessin correspondant :
// ---*
// --**
// -***
// ****
function fullTriangle2(h, c1, c2) {
	let s = "";
	let ik = 0;

	while( ik < h) {
		ik++;
		s += c2.repeat(h - ik) + c1.repeat(ik) + "\n";
	}
	return s;
}

// Retourne un triangle isocèle avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--***\n-*****\n*******\n"
// Dessin correspondant :
// ---*
// --***
// -*****
// *******
function fullTriangle3(h, c1, c2) {
	let s = "";
	let ik = 1;
	let il = h - 1;

	while( ik < h*2 ) {
		s += c2.repeat(il) + c1.repeat(ik) + "\n";
		ik += 2;
		il--;
	}
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*\n**\n*-*\n****\n"
// Dessin correspondant :
// *
// **
// *-*
// ****
function emptyTriangle1(h, c1, c2) {
	let s = "";
	let ik = 0;

	while( ik < h) {
			ik++;
			if(ik > 2 && ik < h) {
				s += c1 + c2.repeat(ik - 2) + c1 + "\n";
			} else {
			s += c1.repeat(ik) + "\n";
			}
		}
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*\n--**\n-*-*\n****\n"
// Dessin correspondant :
// ---*
// --**
// -*-*
// ****
function emptyTriangle2(h, c1, c2) {
	let s = "";
	let ik = 0;
	let il = h - ik; 

	while( ik < h) {
		ik++;
		il--;
		if(ik > 2 && ik < h) {
			s += c2.repeat(il) + c1 + c2.repeat(ik -2) + c1 +"\n";
		} else {
			s += c2.repeat(h- ik) + c1.repeat(ik) + "\n";
		}
	}
	return s;
}


// Retourne un triangle isocèle vide avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*\n--*-*\n-*---*\n*******\n"
// Dessin correspondant :
// ---*
// --*-*
// -*---*
// *******
function emptyTriangle3(h, c1, c2) {
	let s = "";
	let ik = 1;

	while( ik <= h ) {
		if(ik > 2 && ik <= h) {
			s += c2.repeat(h - ik + 1) + c1 + c2.repeat(((ik -2)*2) - 1) + c1 +"\n";
		} else if(ik == 1) {
			s += c2.repeat(h- ik) + c1.repeat(ik) + "\n";
		} 
		ik++;
	}
	s += c1.repeat(ik + h -2);
	return s;
}

// Retourn un "pacman" de hauteur h avec le caractère c1
// Exemple :
// *****\n***\n*\n***\n*****\n"
// Dessin correspondant :
// *****
// ***
// *
// ***
// *****
function pacman(h, c1) {
	let s = "";
	let ik = 0;

	while( ik < h * 2) {
		if(h % 2 != 0){
			if(ik <= h){
				s += c1.repeat(h - ik) + "\n";
			} else {
				s += c1.repeat(ik - h + 2) + "\n";
			}
		} else {
			if(ik < h){
				s += c1.repeat(h - ik - 1) + "\n";
			} else {
				s += c1.repeat(ik - h + 1) + "\n";
			}
		}
		ik += 2;
	}
	return s;
}
	
// Retourne un sablier de hauteur h avec les caractères c1 et c2
// Exemple :
// "*****\n-***\n--*\n-***\n*****\n"
// Dessin correspondant :
// *****
// -***
// --*
// -***
// *****
function hourglass(h, c1, c2) {
	let s = "";
	s += "TODO";
	
	return s;
}

// Retourne un plus de taille w avec les caractères c1 et c2
// Exemple :
// "--*\n--*\n*****\n--*\n--*\n"
// Dessin correspondant :
// --*
// --*
// *****
// --*
// --*
function plus(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un multiplié de taille w avec les caractères c1 et c2
// Exemple :
// "*---*\n-*-*\n--*\n-*-*\n*---*\n"
// Dessin correspondant :
// *---*
// -*-*
// --*
// -*-*
// *---*
function times(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un serpent horizontal de taille w avec les caractères c1 et c2
// Exemple :
// "*****\n----*\n*****\n*\n*****\n"
// Dessin correspondant :
// *****
// ----*
// *****
// *
// *****
function snake1(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un serpent vertical de taille w avec les caractères c1 et c2
// Exemple :
// "*-***\n*-*-*\n*-*-*\n*-*-*\n***-*\n"
// Dessin correspondant :
// *-***
// *-*-*
// *-*-*
// *-*-*
// ***-*
function snake2(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Retourne un échiquier de taille w avec les caractères c1 et c2
// Exemple :
// "*-*-*\n-*-*\n*-*-*\n-*-*\n*-*-*"
// Dessin correspondant :
// *-*-*
// -*-*
// *-*-*
// -*-*
// *-*-*
function checkerboard(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Cf dessin :)
function diagonal1(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}

// Cf dessin :)
function diagonal2(w, c1, c2) {
	let s = "";
	s += "TODO";
	return s;
}


	
