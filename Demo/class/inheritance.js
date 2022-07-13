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

    constructor (nom, prenom, dateNaiss, longueurBarbe) {
        super(nom, prenom, 'H', dateNaiss)
        this.longueurBarbe = longueurBarbe
    }

}

class Femme extends Personne {

    constructor (nom, prenom, dateNaiss, estEnceinte) {
        super(nom, prenom, 'F', dateNaiss)
        this.estEnceinte = estEnceinte
    }

}

let p = new Personne('Geerts', 'Quentin', 'M', '1996-04-03')
let h = new Homme('Person', 'Michael', new Date(), 10)
let f = new Femme('Geerts', 'Mélanie', new Date(), false)

console.log(h)
console.log(f)

console.log(p instanceof Personne)

console.warn("Homme");
console.log("h >> Personne ", h instanceof Personne)
console.log("h >> Homme ", h instanceof Homme)
console.log("h >> Femme ", h instanceof Femme)

console.warn("Femme");
console.log("f >> Personne ", f instanceof Personne)
console.log("f >> Homme ", f instanceof Homme)
console.log("f >> Femme ", f instanceof Femme)

console.log(h.parler("Comment tu trouves le cours de JS ?"))
console.log(f.parler("Super ! On apprend plein de chose !"))