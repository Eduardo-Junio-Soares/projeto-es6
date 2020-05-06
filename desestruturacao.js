const usuario = {
    nome: "Diego",
    idade: "23",
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC'
    }
}

function mostrarUsuario ( { nome, idade, endereco: { cidade }}) {
    console.log(nome, idade, cidade)
}

mostrarUsuario(usuario)