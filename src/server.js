const express = require('express')
const server = express()

server.use(express.static("public")) // Configuração do servidor (arquivos estáticos são imagens, scripts do front-end)

// Definindo as rotas da aplicação:

.get("/", (req, res) => { // Função curta - Requisição e resposta
    return res.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, res) => { // Função curta - Requisição e resposta
    return res.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)