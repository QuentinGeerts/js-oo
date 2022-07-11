console.clear();

// Héritage prototype

function Personne (prenom, nom, age, genre, interets) {
    this.nom_complet = {
        prenom,
        nom
    };
    this.age = age;
    this.genre = genre;
    this.interets = interets;
};

Personne.prototype.saluer = function () {
    return 'Salut! Je suis ' + this.nom.prenom + '.';
};

function Professeur (prenom, nom, age, genre, interets, matiere) {
    Personne.call(this, prenom, nom, age, genre, interets);

    this.matiere = matiere;
}

// On aurait pu passer ainsi
// function Professeur (prenom, nom, age, genre, interets, matiere) {
//     this.nom_complet = {
//         prenom,
//         nom
//     };
//     this.age = age;
//     this.genre = genre;
//     this.interets = interets;
//     this.matiere = matiere;
// }

console.dir(Professeur.prototype.constructor);
console.dir(Personne.prototype.constructor);

Professeur.prototype = Object.create(Personne.prototype);

console.dir(Professeur.prototype.constructor);

Professeur.prototype.constructor = Professeur;

console.dir(Professeur.prototype.constructor);

var professeur1 = new Professeur('Cédric', 'Villani', 44, 'm', ['football', 'cuisine'], 'les mathématiques');

console.log(professeur1);

console.warn("!!");

