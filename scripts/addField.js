// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
// Quando clicar no botão


function cloneField(){
    // Duplicar os campos. Que campo duplicar?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//Clona o campo (Node se refere a elementos HTML)
                                                            // true faz a cópia de toda a div. false copia apenas a div vazia

    // Limpar os campos antes de copiar:
    const fields = newFieldContainer.querySelectorAll('input') // Associa a todos os seletores input

    // Definindo valores vazios para os campos
    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e o limpa
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}