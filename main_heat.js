/* JS - linguagem de programação

Dados primitivos - string, number, boolean
tipos de variáveis: (var), let e const. const vc não pode mudar depois de definida, let pode ser redefinida.

document.getElementById('idName').textContent = 'otherName'
quando qualquer nome é escrito seguido de um . e uma função de alteração, o JS entende que o nome escrito é um ID!
idName.textContent = 'otherName' => faria a mesma coisa que o citado acima!

Fiz esse só pra treinar, pois os links no HTML já estavam certos
 */

const linksSocial = {
    github: 'GabrielWendich',
    youtube: 'gabriel_wendich',
    facebook: 'gabriel.wendich',
    instagram: 'gabriel_wendich',
    twitter: 'gabriel_wendich'
}

function changeSocialLinks() {
    for(let li of socialLinks.children) {
        const domin = li.getAttribute('class'); //quero pegar a classe dos li, que tem que ser o mesmo nome que colocamos na const linksSocial
        
        li.children[0].href = `https://${domin}.com/${linksSocial[domin]}`

        // alert(li.children[0].href)
        // console.log(li.getAttribute('class'))
    }
}

changeSocialLinks()


// Curso Discover - API com Node
/* API - são feitas pelas empresas como forma de comunicação ou troca de informações
O GitHub também tem uma API que podemos pegar informações públicas do site, como nossas infos de usuário

A comunicação é feita por JSON, a linguagem JS em forma de objeto que aprendemos no curso*/

function getGitHubInfos () {
    const url = `https://api.github.com/users/${linksSocial.github}`

    // alert(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userPhoto.src = data.avatar_url
            userLogin.textContent = data.login
            
        })

}


getGitHubInfos ()
