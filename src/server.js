// Estrutura de dados (cada proffy é um objeto dentro de uma lista de objetos):

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89989999898",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "R$20", 
        weekday: [0], 
        time_from: [720], // Convertido em segundos
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "89989999898",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "R$20", 
        weekday: [1], 
        time_from: [720], // Convertido em segundos
        time_to: [1220]
    },
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "89989999898",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "R$20", 
        weekday: [1], 
        time_from: [720], // Convertido em segundos
        time_to: [1220]
    }
]



function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html", {proffys})
}

function pageGiveClasses(req, res)
{
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()


// Configurar nunjucks:
const nunjucks = require('nunjucks') // Template engine

nunjucks.configure('src/views', {
    express: server,
    noCache: true, // Desativação da cache para verificar as alterações feitas
})

server.use(express.static("public")) // Configuração do servidor (arquivos estáticos são imagens, scripts do front-end)

// Definindo as rotas da aplicação:

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)