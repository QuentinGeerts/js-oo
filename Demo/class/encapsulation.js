class Personne {

    #_lastname
    #_firstname
    #_birthdate

    constructor (lastname, firstname, birthdate) {
        this.#_lastname = lastname
        this.#_firstname = firstname
        this.#_birthdate = birthdate
    }

    // Getters
    get lastname () { return this.#_lastname }
    get firstname () { return this.#_firstname }
    get birthdate () { return this.#_birthdate }

    // Setters
    set lastname (newLastname) { this.#_lastname = newLastname }
    set firstname (newFirstname) { this.#_firstname = newFirstname }
    set birthdate (newBirthdate) { this.#_birthdate = newBirthdate }

}

let p = new Personne('Geerts', 'Quentin', new Date("1996-04-03"))

console.log('p :>> ', p)

p.lastname = 'Nouveau nom'
p.firstname = 'Nouveau prénom'
p.birthdate = new Date()

console.log('p.lastname :>> ', p.lastname);
console.log('p.firstname :>> ', p.firstname);
console.log('p.birthdate :>> ', p.birthdate);
