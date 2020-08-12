// Criação de array para gerar um loop para adicionar o filtro ao study.html
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// Funcionalidades

function getSubject(subjectNumber){ // Para converter os índices nos textos
    const position = +subjectNumber - 1 // + para garantir que é um número
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number(hours * 60) + minutes // Number para garantir que é um número

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}