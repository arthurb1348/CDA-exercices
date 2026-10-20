function f1(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += arr[i];
		}
	}
	return result;
}
//Prend un tableau en entrée et calcule dans result la somme de tout les nombres pairs du tableau.
	
function f2(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += arr[i];
		}
	}
	return result;
}
//Prend un tableau en entrée et calcule dans result la somme de tout les nombres du tableau dont la position est un nombre pair.

// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau
function f3(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += i;
		}
	}
	return result;
}