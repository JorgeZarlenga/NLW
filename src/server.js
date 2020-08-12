// Servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

// Configurar nunjucks (template engine):
const nunjucks = require('nunjucks') // Template engine

nunjucks.configure('src/views', {
    express: server,
    noCache: true, // Desativação da cache para verificar as alterações feitas
})

// Início e configuração do servidor
server.use(express.static("public")) // Configuração do servidor (arquivos estáticos são imagens, scripts do front-end)

// Definindo as rotas da aplicação:

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

// Start do servidor
.listen(5500)