//Exercicio 1.1

import axios from 'axios'

const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

    const umPorSegundo = async () => {
         await delay() 
         console.log('1s')

         await delay() 
         console.log('2s')

         await delay() 
         console.log('3s')
    }   

    umPorSegundo()

    //Exercicio 1.2



    async function getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            
            console.log(response.data)

            } catch(err) {
                console.warn('Usuário não existe')
            }
        }

    getUserFromGithub('eduardo-junio-soares')
    getUserFromGithub('eduardo-junio-soaresfdsf')

    //Exercicio 1.3 


    class Github {
        static async getRepositories(repo) {
            try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
                console.log(response.data)
            } catch(err) {
                console.warn('Repositorio não existe')
            }
        }
    }
    
    Github.getRepositories('rocketseat/rocketseat.com.br')
    Github.getRepositories('rocketseat/dsfdasfr')
