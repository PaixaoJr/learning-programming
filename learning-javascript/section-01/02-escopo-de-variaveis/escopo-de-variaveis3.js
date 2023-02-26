let nome = "John"
let idadeBruno = 26

function olaMundo() {
    let nome = "bruno"
    let idade = 26
    console.log('ola, meu nome e', nome)
    console.log('minha idade e', idade)
} 

function olaMundoJunior() {
    let nome = "junior"
    let idade = 22
    console.log('ola, meu nome e', nome)
    console.log('minha idade e', idade)
}

function olaMundo3() {
    console.log('ola, meu nome e', nome)
}

// ola, meu nome e John
// o javascript busca sempre a variavel primneiro no escopo de onde a instrução tá sendo executada
console.log('ola, meu nome e', nome)

// ola, meu nome e bruno
// minha idade e 26
olaMundo()

// ola, meu nome e junior
// minha idade e 22
olaMundoJunior()

// ola, meu nome e John
olaMundo3() 