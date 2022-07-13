class Personne {

    // A rajouter pour montrer qu'on peut directement ajouter les champs
    // nom
    // prenom
    // sexe
    // dateNaiss


    // Constructeur
    // constructor() {
    //     console.log("Personne créé")
    // }

    constructor(nom, prenom, sexe, dateNaiss) {
        this.nom = nom
        this.prenom = prenom
        this.sexe = sexe
        this.dateNaiss = dateNaiss
    }
}

// Laisser la classe vide
let p = new Personne()
console.log(p)
p.nom = "Geerts"
console.log(p)

// Ajouter le constructeur
let p2 = new Personne("Geerts")
console.log("p2", p2);