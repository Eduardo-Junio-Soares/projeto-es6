import axios from 'axios'

class App {
    constructor() {
        this.users = []

        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list')

        this.registerHandles()
    }

    registerHandles() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    async addRepository(event) {
        event.preventDefault()

        const userinput = this.inputEl.value

        if(userinput.length === 0)  
            return

        this.setLoading()

        try {
            const user = await axios.get(`https://api.github.com/users/${userinput}`)

            const { name, bio, avatar_url, html_url } = user.data

            this.users.push({
                name,
                bio,
                avatar_url,
                html_url,
            })
            this.render()
        } catch(err) {
            alert('Erro na Requisição')
        }

        this.setLoading(false)
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading')
            loadingEl.style.color = "white"

            this.formEl.appendChild(loadingEl)
        }else {
            document.getElementById('loading').remove()
        }
    }

    render() {
        this.listEl.innerHTML = ''

        this.users.forEach(user => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', user.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(user.name))

            let bioEl = document.createElement('p')
            bioEl.appendChild(document.createTextNode(user.bio))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', user.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(bioEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)

            this.inputEl.value=""
        })
    }
}

new App()