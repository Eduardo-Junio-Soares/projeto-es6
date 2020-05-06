//Exercicio 2 A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):


//Exercicio 2.1 Map - Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    { nome: 'Lucas', idade: 30, empresa: 'Facebook'}
]
 
const [ { empresa, idade } ] = usuarios

const idades = usuarios.map(item => item.idade )

console.log(idades)

/*Exercicio 2.2 Filter - Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]*/

const filterFunc = usuarios
    .filter(item => item.idade >= 18)
    .filter(item => item.empresa == 'Rocketseat')

console.log(filterFunc)

// Exercicio 2.3 FIND - Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

const findEmpresa = usuarios.find(item => item.empresa == 'google')

console.log(findEmpresa)

/* Exercicio 2.4 Unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:*/

const filterUser = usuarios
    .map(item => item.idade * 2 )
    .filter(idade => idade <= 50)

    console.log(filterUser)


//Exercicio 3 Converta as funções nos seguintes trechos de código em Arrow Functions:

//3.1

const arr = [1, 2, 3, 4, 5, ]

const soma10 = arr.map(item => item + 10)

console.log(soma10)

//3.2

const usuario = {nome: 'Diego', idade: 23}

const mostraIdade = (usuario => console.log(usuario.idade))

mostraIdade(usuario)

//3.3 

const nome2 = 'Diego'
const idade2 = 23

const mostraUsuario = ((nome2 = 'Diego', idade2 = 18) => console.log( { nome2, idade2 } ))

mostraUsuario(nome2, idade2)
mostraUsuario(nome2)

//3.4

const promise = (() => new Promise((resolve, reject) => resolve()))

//Exercicio 4 Desestruturação simples

//4.1

const empresa2 = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}

const {nome, endereco: {cidade, estado} } = empresa2

console.log(nome)
console.log(cidade)
console.log(estado)

//4.2 

function mostraInfo(user) {
    const { nome, idade } = user
    return console.log(`${nome} tem ${idade} anos.`)
}

mostraInfo({nome: 'Diego', idade: 23})

// Exercicio 5

/*5.1 A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.*/

const arr1 = [1, 2, 3, 4, 5, 6]

const [ x, ...y] = arr1

console.log(x)
console.log(y)

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function somaArr(...params) {
    totalSoma = params.reduce((total, next) => total + next)
    return console.log(totalSoma)
}

somaArr(1, 2, 3, 4, 5, 6)
somaArr(1, 2)

//5.2

const user1 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}

var user2 = {...user1, nome: 'Gabriel'}

console.log(user2)

var user3 = { ...user1, endereco: {cidade: 'Lontras', uf: 'SC', pais: 'Brasil'} }

console.log(user3)

/* Exercicio 6 converta o seguinte trecho de código utilizando Template Literals:*/

const userInfo = 'Diego'
const userAge = 23

console.log(`o usuário ${userInfo} possui ${userAge} anos.`)

//Exercicio 7 Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

const nome4 = 'Diego'
const idade4 = 23

const usuario1 = {
    nome4,
    idade4,
    cidade: 'Rio do Sul'
}

console.log(usuario1)

