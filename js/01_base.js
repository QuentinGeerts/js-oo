console.clear();

// Notion d'objet en JS

var personne = {}

console.log(personne);

var personne = {
    nom: ['Quentin', 'Geerts'],
    age: 26,
    sexe: 'masculin',
    interets: ['Développement', 'One Piece'],
    bio: function () {
        return this.nom[0] + ' ' + this.nom[1] + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' + this.interets[1] + '.';
    },
    salutation: function () {
        return 'Bonjour ! Je suis ' + this.nom[0] + '.';
    }
};

console.log(personne);

// Notation avec un point

console.log(personne.nom);
console.log(personne.nom[0]);
console.log(personne.age);
console.log(personne.interets[1]);
console.log(personne.bio());
console.log(personne.salutation());

// Sous-espaces de noms

var personne = {
    nom: {
        prenom: 'Quentin',
        nomFamille: 'Geerts'
    },
    age: 26,
    sexe: 'masculin',
    interets: ['Développement', 'One Piece'],
    bio: function () {
        return this.nom[0] + ' ' + this.nom[1] + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' + this.interets[1] + '.';
    },
    salutation: function () {
        return 'Bonjour ! Je suis ' + this.nom[0] + '.';
    }
};

// Notation avec les crochets
console.log(personne.nom.prenom);
console.log(personne['nom']['nomFamille']);
console.log(personne.nom.nomFamille);
console.log(personne.age);
console.log(personne['age']);
console.log(personne.interets[1]);
console.log(personne.bio());
console.log(personne.salutation());

// Création de nouveaux membres

personne['yeux'] = 'marron';
personne.auRevoir = () => { return 'Bye bye tout le monde !' }

console.log(personne.yeux);
console.log(personne.auRevoir());

let nomHauteur = 'hauteur';
let valeurHauteur = '1.8m';

personne[nomHauteur] = valeurHauteur;

console.log(personne.hauteur);

// Mot-clef : this

personne.salutation = function () { return 'Bonjour ! Je suis ' + this.nom.prenom + '.' }

console.log(personne.salutation());

// Utilisation des objets depuis le début

let maChaineDeCaracteres = "Bonjour à tous !";

console.log(typeof maChaineDeCaracteres);


