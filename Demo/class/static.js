class Personne {

    constructor (nom, prenom, sexe, dateNaiss) {
        this.nom = nom
        this.prenom = prenom
        this.sexe = sexe
        this.dateNaiss = dateNaiss
    }

    parler (message) {
        return `${this.prenom} dit "${message}"`
    }

}

class Homme extends Personne {

    static sexe = 'H'

    constructor (nom, prenom, dateNaiss, longueurBarbe) {
        super(nom, prenom, Homme.sexe, dateNaiss)
        this.longueurBarbe = longueurBarbe
    }

}

class Femme extends Personne {

    static sexe = 'F'

    constructor (nom, prenom, dateNaiss, estEnceinte) {
        super(nom, prenom, Femme.sexe, dateNaiss)
        this.estEnceinte = estEnceinte
    }

}

let h = new Homme('Person', 'Michael', new Date(), 10)
let f = new Femme('Geerts', 'Mélanie', new Date(), false)

console.log(h)
console.log(f)

console.log(Homme.sexe);
console.log(Femme.sexe);

console.log(Math.PI);